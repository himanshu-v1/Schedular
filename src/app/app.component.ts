import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from "@angular/core";
import { Page, View, EventData } from "tns-core-modules/ui/page";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { Subscription } from "rxjs";
import * as dialog from "@nativescript/core/ui/dialogs";
import { UiService } from "./ui/ui.service";
import { DataService } from "./Data/data.service";
import {
    android as androidApp,
    AndroidApplication,
    AndroidActivityEventData
} from "tns-core-modules/application";
import * as orientation from 'nativescript-orientation';
import { FingerprintAuth, BiometricIDAvailableResult } from 'nativescript-fingerprint-auth';
declare var android: any;
//import { device } from 'tns-core-modules/platform';
//var app = require("application");
//declare function onSystemUiVisibilityChange(visibility: number): void;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent) radSideDrawer: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    private toggleSubscriber: Subscription;
    private fingerAuth: FingerprintAuth;

    constructor(
        private page: Page,
        private drawerToggle: UiService,
        private data: DataService
    ) {
        this.fingerAuth = new FingerprintAuth();
    }

    ngOnInit() {
        this.data.setInstallationDate();

        this.drawerToggle.fullMode.subscribe(()=>{
            this.hideFullscreen();
        });

        if(android){
            androidApp.on(AndroidApplication.activityResumedEvent, (args: AndroidActivityEventData) => {
                this.hideFullscreen();
                console.log("Resume");
            });
            androidApp.on(AndroidApplication.activityRequestPermissionsEvent, (args: AndroidActivityEventData) => {
                console.log("Permission");
            });
            androidApp.on(AndroidApplication.activityPausedEvent, (args: AndroidActivityEventData) => {
                this.hideFullscreen();
                //this.askFingerprint();
                console.log("Paused");
            });
            androidApp.on(AndroidApplication.activityResultEvent, () => {
                console.log("Result");
            });
            androidApp.on(AndroidApplication.activityStoppedEvent, () => {
                console.log("Stop");
            });
            androidApp.on(AndroidApplication.activityStartedEvent, ()=>{
                this.askFingerprint();
                console.log("start");
            })
        }
    }

    ngAfterViewInit() {
        this.hideFullscreen();
        //this.disableRotation();

        this.drawer = this.radSideDrawer.sideDrawer;
        this.toggleSubscriber = this.drawerToggle.drawerState.subscribe(() => {
            this.drawer.toggleDrawerState();
            //console.log("clicked");
        });

        this.data.setDataStructure();
        this.data.setToday();
        //this.askFingerprint();
    }

    ngOnDestroy() {
        this.toggleSubscriber.unsubscribe();
    }

    reset() {
        dialog
            .confirm({
                title: "Reset data",
                message: "All the current data will be lost. Continue?",
                okButtonText: "Delete",
                cancelButtonText: "Cancel",
            })
            .then((success) => {
                if(success)
                    this.data.reset();
                this.drawerToggle.changeUI();
            });
    }

    hideFullscreen() {
        /*if (androidApp && device.sdkVersion >= "21") {
            const View = android.view.View;
            const window = androidApp.startActivity.getWindow();
            const decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY |
                View.SYSTEM_UI_FLAG_FULLSCREEN |
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            );
        }*/
    }

    /*private getStatusBarHeight() {
        let result = 0;
        console.log(app.android);
        let resourceId = app.android.currentContext.getResources().getIdentifier('status_bar_height', 'dimen', 'android');
        if (resourceId) {
            result = app.android.currentContext.getResources().getDimensionPixelSize(resourceId);
        }
        return result;
    }*/

    disableRotation() {
        orientation.setOrientation("portrait", false);
        orientation.disableRotation();
    }

    askFingerprint(){
        this.fingerAuth.available().then((result: BiometricIDAvailableResult)=>{
            console.log(`Biometric ID available? ${result.any}`);
            console.log(`Touch? ${result.touch}`);
            console.log(`Face? ${result.face}`);
            if(result.any){
                this.verifyFingerprint();
            }
        }).catch(err=>{
            console.log("Main: "+JSON.stringify(err));
        });
    }

    verifyFingerprint(){
        this.fingerAuth
            .verifyFingerprint({
                title: "Please Verify"
            })
            .then((enteredPassword) => {
                if (enteredPassword === undefined) {
                    console.log("Ok");
                }
            }).catch(err=>{
                console.log("sub: "+JSON.stringify(err));
                if(err.code != 30){
                    this.askFingerprint();
                }
            });
    }
}

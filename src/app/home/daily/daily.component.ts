import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from '@nativescript/angular';
import { DataService } from '../../Data/data.service';
import { Data } from '../../data';
import { constants } from '../../constants';
import * as platform from 'tns-core-modules/platform'

@Component({
    selector: "ns-daily",
    templateUrl: "./daily.component.html",
    styleUrls: ["./daily.component.css"],
    moduleId: module.id,
})
export class DailyComponent implements OnInit {
    tempItems: Data["taskStructure"][] = [];
    commons = constants;
    animateLTR: boolean = false;
    statusFor: number;
    date = new Date();

    constructor(
        private page: Page,
        private data: DataService,
        private router: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;

        //console.log(this.data.getData());
        this.tempItems = this.data.getData()[this.date.getFullYear().toString()][
            this.data.months[this.date.getMonth()].toString()
        ][this.date.getDate().toString()];
        //this.tempItems.splice(0, 1);
        //console.log('1.........'+JSON.stringify(this.tempItems));
        /*console.log(platform.screen.mainScreen.widthDIPs);
        console.log(platform.screen.mainScreen.widthPixels);
        console.log(platform.screen.mainScreen.scale);*/
    }

    addTasks(event) {
        this.router.navigate(["/add"], {
            queryParams: { date: new Date().toDateString(), target: 0 },
            clearHistory: true,
        });
    }

    confirm(index) {
        this.statusFor = index;
        this.animateLTR = true;
        //console.log("clicked");
    }

    changeStatus(status) {
        this.data.changeTaskStatus(this.statusFor, status);
        this.animateLTR = false;
        this.statusFor = undefined;
        //console.log(this.statusFor+" "+status)
        //console.log("ticked");
        //console.log(this.tempItems);
        this.tempItems = this.data.getData()[
            this.date.getFullYear().toString()
        ][this.data.months[this.date.getMonth()].toString()][
            this.date.getDate().toString()
        ];
        //console.log(this.tempItems);
    }

    test() {
        //console.log("clicked!!!!");
    }
}

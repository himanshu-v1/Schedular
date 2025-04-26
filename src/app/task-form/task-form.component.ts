import { Component, OnInit } from '@angular/core';
import { Page, Color } from 'tns-core-modules/ui/page';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import * as dialog from '@nativescript/core/ui/dialogs';
import { LocalNotifications } from 'nativescript-local-notifications';
import { constants, metrics } from '../constants';
import { Data } from '../data';
import { CommunicationService } from '../Data/communication.service';
import { UiService } from '../ui/ui.service';
import { DataService } from '../Data/data.service';

@Component({
    selector: "ns-task-form",
    templateUrl: "./task-form.component.html",
    styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit {
    commons: {};
    // stepCount: number = 1;
    stepCount: number = 1;
    showPrev = false;
    showNext = true;
    stepArray: String[] = [
        "What's the task ?",
        "How would you measure it ?",
        "Give yourself a target ?",
        "Wanna set a reminder ?",
        "Are you sure about this ?",
    ];
    hint: String[] = [
        "I wanna walk..." + "\n" + ".......",
        "15...?",
        "03",
        "15",
    ];
    taskHint: String = this.hint[0];
    targetHint: String = this.hint[1];
    hourHint: String = this.hint[2];
    minHint: String = this.hint[3];
    metricArray: String[] = [];
    timeTextArray: String[] = ["AM", "PM"];
    timeText: String = this.timeTextArray[0];
    metricItemClass: {
        metricItems: boolean;
        metricItemsSelected: boolean;
    }[] = [];
    submittedData: Data["taskStructure"] = {
        task: "",
        taskedQty: "",
        compQyt: "--",
        metric: "",
        remTime: "",
        done: false,
        notificationId: "",
    };
    hour: String = "";
    minutes: String = "";
    forDate: Date;
    opacity: boolean[] = [true, true, true, true];
    preventDeafult: boolean = false;
    dismiss: boolean = false;
    animateObj: { animate: boolean } = { animate: false };
    isEdit: boolean = false;
    action: String = "";
    target: number;

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private bus: CommunicationService,
        private active: ActivatedRoute,
        private screen: UiService,
        private months: DataService
    ) {}

    ngOnInit(): void {
        this.forDate = this.active.snapshot.queryParams["for"];
        this.target = this.active.snapshot.queryParams["target"];

        this.page.actionBarHidden = true;
        this.commons = constants;
        this.metricArray = metrics;

        for (let i = 0; i < this.metricArray.length; i++) {
            this.metricItemClass.push({
                metricItems: true,
                metricItemsSelected: false,
            });
        }

        this.action = this.active.snapshot.params["action"];
        if (this.action == "edit") {
            this.isEdit = true;
            this.submittedData = JSON.parse(
                this.active.snapshot.queryParams["datas"]
            );
            this.metricSelected(
                this.metricArray.indexOf(this.submittedData.metric)
            );
            let time = this.submittedData.remTime.split(" ");
            this.hour = time[0].split(":")[0] || "";
            this.minutes = time[0].split(":")[1] || "";
            this.timeText = time[1] || this.timeTextArray[0];
            this.opacity = [false, false, false, false];
            if (this.hour == "" || this.minutes == "") {
                this.opacity[2] = true;
                this.opacity[3] = true;
            }
        }
    }

    previous(event) {
        if (this.stepCount >= 2) this.stepCount = this.stepCount - 1;

        if (this.stepCount > 1) this.showPrev = true;
        else this.showPrev = false;

        if (this.stepCount <= 4) this.showNext = true;
        else this.showNext = false;
    }

    next(event) {
        let anim = false;
        switch (this.stepCount) {
            case 1:
                anim = this.submittedData.task == "" ? true : false;
                break;
            case 2:
                anim = this.submittedData.metric == "" ? true : false;
                break;
            case 3:
                anim = this.submittedData.taskedQty == "" ? true : false;
                break;
            case 4:
                /*if (this.hour.length == 0) anim = true;
                else if (this.minutes.length == 0) anim = true;
                else anim = false;

                if (parseInt(this.hour.toString()) > 12) {
                    this.blurHour();
                    anim = true;
                }
                if (parseInt(this.minutes.toString()) > 60) {
                    this.blurMin();
                    anim = true;
                }*/
                break;
            default:
                anim = false;
        }

        if (anim) {
            this.animateObj.animate = true;
            setTimeout(() => {
                this.animateObj.animate = false;
            }, 550);
            return;
        }

        if (this.hour.trim() != "" && this.minutes.trim() != "") {
            if (this.stepCount == 4) {
                this.submittedData.remTime =
                    this.hour + ":" + this.minutes + " " + this.timeText;
            }
        } else {
            this.submittedData.remTime = "";
        }

        if (this.stepCount <= 5) this.stepCount = this.stepCount + 1;

        if (this.stepCount < 5) this.showNext = true;
        else this.showNext = false;

        if (this.stepCount >= 2) this.showPrev = true;
        else this.showPrev = false;
    }

    changeText() {
        if (this.timeTextArray.indexOf(this.timeText) == 0)
            this.timeText = this.timeTextArray[1];
        else this.timeText = this.timeTextArray[0];
    }

    cancel(event) {
        this.router.back();
    }

    submit(event) {
        //console.log(this.submittedData);
        dialog
            .confirm({
                message: "Wanna review before adding ?",
                title: "Add Task",
                okButtonText: "edit" == this.action ? "Update" : "Add",
                cancelButtonText: "Review",
            })
            .then((success) => {
                if (success) {
                    if (this.notifyLogic()) this.submitConfirm(this.action);
                } else {
                    this.stepCount = 1;
                    this.showPrev = false;
                    this.showNext = true;
                }
                this.screen.changeUI();
            });
    }

    submitConfirm(action) {
        this.bus.dataBus.next(this.submittedData);
        if ("edit" == action) {
            this.router.navigate(["/add/edit"], {
                queryParams: { date: this.forDate, target: this.target },
                clearHistory: true,
            });
        } else {
            this.router.navigate(["/add"], {
                queryParams: { date: this.forDate, target: this.target },
                clearHistory: true,
            });
        }
    }

    metricSelected(index: any) {
        for (let i = 0; i < this.metricArray.length; i++) {
            this.metricItemClass[i].metricItems = true;
            this.metricItemClass[i].metricItemsSelected = false;
        }
        this.metricItemClass[index].metricItems = false;
        this.metricItemClass[index].metricItemsSelected = true;

        this.submittedData.metric = this.metricArray[index];
    }

    appliedHint: String[] = this.hint.slice();
    changeTaskOpacity(flag, index, inFor) {
        let inn = 0;
        if (!flag) {
            this.appliedHint[index] = "";
            this.opacity[index] = false;
        } else {
            if (inFor != "remTime") {
                if (this.submittedData[inFor].length == 0) {
                    this.appliedHint[index] = this.hint[index];
                    this.opacity[index] = true;
                } else {
                    this.appliedHint[index] = "";
                    this.opacity[index] = false;
                }
            } else {
            }
        }
    }

    focusHour() {
        this.appliedHint[2] = "";
        this.opacity[2] = false;
    }
    focusMin() {
        this.appliedHint[3] = "";
        this.opacity[3] = false;
    }
    blurHour() {
        if (this.hour.length == 0) {
            this.appliedHint[2] = this.hint[2];
            this.opacity[2] = true;
        }
        if (parseInt(this.hour.toString()) > 12) {
            this.hour = (parseInt(this.hour.toString()) - 12).toString();
            this.changeText();
        }
    }
    blurMin() {
        if (this.minutes.length == 0) {
            this.appliedHint[3] = this.hint[3];
            this.opacity[3] = true;
        }
        if (parseInt(this.minutes.toString()) > 60) {
            this.minutes = "00";
        }
    }

    check() {
        //console.log("worked");
        this.preventDeafult = true;
    }

    doubleCheck() {
        if (!this.preventDeafult) {
            //console.log("again");
            this.dismiss = true;
        }
        this.preventDeafult = false;
    }

    setNotification(timeDelay) {
        LocalNotifications.schedule([
            {
                title: "Hey! Forgot something?",
                body: this.submittedData.task.toString(),
                color: new Color(0x99b3ff),
                badge: 1,
                icon: 'res://icon1',
                at: new Date(timeDelay),
            },
        ]).then(
            (scheduleIds) => {
                console.log("Generated Id: " + JSON.stringify(scheduleIds[0]));
                this.submittedData.notificationId = scheduleIds[0];
            },
            (error) => {
                console.log("error occurred: " + error);
            }
        );
    }

    getCurrentTime(){
        //console.log(new Date().getTime());
        return new Date().getTime();
    }

    getSchedTime(timeString){
        let t = timeString.split(" ");
        console.log(new Date().toString());
        console.log(
            new Date(
                parseInt(t[3]),
                this.months.months.indexOf(t[1].toLowerCase()),
                parseInt(t[2]),
                this.getComparableTime(this.hour.toString(), this.timeText),
                parseInt(this.minutes.toString())
            )
        );
        console.log(new Date(parseInt(t[3]), this.months.months.indexOf(t[1].toLowerCase()), parseInt(t[2]), this.getComparableTime(this.hour.toString(), this.timeText), parseInt(this.minutes.toString())).getTime());
        return new Date(
            parseInt(t[3]),
            this.months.months.indexOf(t[1].toLowerCase()),
            parseInt(t[2]),
            this.getComparableTime(this.hour.toString(), this.timeText),
            parseInt(this.minutes.toString())
        ).getTime();
    }

    getComparableTime(hour: string, timeText: String){
        if(timeText == "AM"){
            if(hour == "12")
                return 0;
            else return parseInt(hour);
        }
        else return parseInt(hour)+12;

    }

    notifyLogic(){
        if (
            this.hour != "" &&
            parseInt(this.hour.toString()) != 0 &&
            this.minutes != ""
        ) {
            //console.log(new Date().toLocaleTimeString());
            //let currTimeText = new Date().toLocaleTimeString().split(" ")[1];
            let currTime = new Date()
                .toLocaleTimeString()
                .split(" ")[0]
                .split(":");
            let h = currTime[0];
            let m = currTime[1];

            //let dnow = this.getCurrentTime();
            let schedTime = this.getSchedTime(this.forDate);
            let thisHour = this.getComparableTime(
                this.hour.toString(),
                this.timeText
            );
            if (thisHour > parseInt(h)) {
                //console.log("1.." + schedTime); // - dnow
                this.setNotification(schedTime); // - dnow
            } else if (thisHour == parseInt(h)) {
                if (parseInt(this.minutes.toString()) > parseInt(m)) {
                    //console.log("2.." + schedTime); // - dnow
                    this.setNotification(schedTime); // - dnow
                } else {
                    //console.log("Gotten into 2");
                    dialog.alert({
                        title: 'Scheduling Failed!',
                        message: 'Cannot schedule task for past time.' +'\n'+ 'Please enter a advance time.',
                        okButtonText: 'Ok'
                    });
                    return false;
                }
            } else {
                dialog.alert({
                    title: "Scheduling Failed!",
                    message: 'Cannot schedule task for past time.' +'\n'+ 'Please enter a advance time.',
                    okButtonText: "Ok",
                });
                return false;
            }
            return true;
        }
        else{
            dialog.alert({
                    title: "Schedular",
                    message: 'No scheduling assigned!',
                    okButtonText: "Ok",
                });
            return true;
        }
    }
}

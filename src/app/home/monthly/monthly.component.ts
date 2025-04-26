import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '../../Data/data.service';
import { RouterExtensions } from '@nativescript/angular';
import { Data } from '../../data';
import * as dialog from '@nativescript/core/ui/dialogs';

@Component({
    selector: "ns-monthly",
    templateUrl: "./monthly.component.html",
    styleUrls: ["./monthly.component.css"],
    moduleId: module.id,
})
export class MonthlyComponent implements OnInit, OnDestroy {
    public weekDays: Array<String> = this.data.weekDays;
    dates: Date = new Date();
    currYear: String;
    currMonth: String;
    currShortDate: String;
    days: Data["inDateArrayStruct"][] = [];
    classObj: { options: boolean } = { options: false };
    optionShow: { optionMenuAni: boolean } = { optionMenuAni: false };
    hidePrev: boolean = false;
    hideNext: boolean = false;
    private selectedDate: String;
    years: {};
    yearDDShow: boolean = false;

    constructor(
        private page: Page,
        private data: DataService,
        private router: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.years = Object.keys(this.data.getData());
        //console.log(this.years);

        this.currYear = this.dates.getFullYear().toString();
        this.currMonth = this.data.months[this.dates.getMonth()];
        this.currShortDate = this.dates.getDate().toString();

        if(this.data.months.indexOf(this.currMonth) == 0)
            this.hidePrev = true;
        if (this.data.months.indexOf(this.currMonth) == 11)
            this.hideNext = true;

        console.log(this.currYear +""+ this.currMonth +""+ this.currShortDate);

        this.days = this.createMonthDaysArray(this.data.getData()[this.currYear.toString()][this.currMonth.toString()]);
        //console.log(this.days);
        console.log("Monthly: oninit called");
        //console.log(this.days["26"]);
    }

    createMonthDaysArray(MonthObj) {
        let arrayToPop: Data["inDateArrayStruct"][] = [];
        let totalDates = Object.keys(MonthObj).length;
        for (let i = 1; i <= totalDates; i++) {
            arrayToPop.push(MonthObj[i][0]);
        }
        return arrayToPop;
    }

    onChangeYear(index){
        this.currYear = this.years[index];
        this.days = this.createMonthDaysArray(
            this.data.getData()[this.currYear.toString()][this.currMonth.toString()]
        );
        this.yearDDShow = false;
    }

    changeYear(){
        this.yearDDShow = true;
    }

    previousMonth() {
        let curr = this.data.months.indexOf(this.currMonth);
        if(curr > 0){
            this.currMonth = this.data.months[curr-1];
            this.days = this.createMonthDaysArray(this.data.getData()[this.currYear.toString()][this.currMonth.toString()]);
        }
        else if(curr == 0){
            /*let prevYear = parseInt(this.currYear.toString())-1;
            if(this.data.getData()[prevYear]){
                this.currYear = prevYear.toString();
            }*/
        }
        this.hidePrev = (curr == 1) ? true : false;
        this.hideNext = (curr <= 11) ? false : true;
        //console.log(this.days);
    }

    nextMonth() {
        let curr = this.data.months.indexOf(this.currMonth);
        if (curr < 11) {
            this.currMonth = this.data.months[curr + 1];
            this.days = this.createMonthDaysArray(this.data.getData()[this.currYear.toString()][this.currMonth.toString()]);
        }
        else if (curr == 11) {
            /*let prevYear = parseInt(this.currYear.toString())-1;
            if(this.data.getData()[prevYear]){
                this.currYear = prevYear.toString();
            }*/
        }
        this.hideNext = (curr == 10) ? true : false;
        this.hidePrev = (curr >= 1) ? false : true;
    }

    showOptions(date: any, isDisabled: boolean) {
        if(!isDisabled){
            this.classObj.options = true;
            this.optionShow.optionMenuAni = true;
            console.log("Monthly....."+date);
            this.selectedDate = new Date(parseInt(this.currYear.toString()), this.data.months.indexOf(this.currMonth), parseInt(date)).toDateString();
        }
    }

    close() {
        this.classObj.options = false;
        this.optionShow.optionMenuAni = false;
    }

    view() {
        setTimeout(() => {
            this.router.navigate(["/add/view"], {
                queryParams: { date: this.selectedDate, target: 1 },
                clearHistory: true,
            });
        }, 0);
    }

    edit() {
        let d = this.selectedDate.split(" ");
        let dateChosen = new Date(parseInt(d[3]), this.data.months.indexOf(d[1].toLowerCase()),parseInt(d[2]));
        let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        //console.log(dateChosen);
        //console.log(today);
        if ((dateChosen.getTime() >= today.getTime())){
            setTimeout(() => {
                this.router.navigate(["/add/edit"], {
                    queryParams: { date: this.selectedDate, target: 1 },
                    clearHistory: true,
                });
            }, 0);
        } else{
            dialog.alert({
                message: "Cannot make changes in back dates!!",
                title: "Oops!",
                okButtonText: "OK"
            });
        }
     }

    add() {
        let d = this.selectedDate.split(" ");
        let dateChosen = new Date(parseInt(d[3]), this.data.months.indexOf(d[1].toLowerCase()),parseInt(d[2]));
        let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

        if (dateChosen.getTime() >= today.getTime()) {
            setTimeout(() => {
                this.router.navigate(["/add"], {
                    queryParams: { date: this.selectedDate, target: 1 },
                    clearHistory: true,
                });
            }, 0);
        } else {
            dialog.alert({
                message: "Cannot make changes in back dates!!",
                title: "Oops!",
                okButtonText: "OK",
            });
        }
    }

    swipeAction(event){
        //console.log(event);
    }

    ngOnDestroy() {
        //not working
        this.close();
        console.log("Monthly destroy called");
    }
}

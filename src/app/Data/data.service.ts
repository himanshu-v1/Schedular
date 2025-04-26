import { Injectable } from '@angular/core';
import { getString, setString, remove } from 'tns-core-modules/application-settings';
import { Data } from "../data";

@Injectable({
    providedIn: "root",
})
export class DataService {
    private store: {} = {};
    dateStr: Date = new Date();
    months: String[] = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
    ];
    weekDays: Array<String> = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    constructor() {}

    setDataStructure() {
        //console.log("1.....\n"+getString("store"));
        if (!getString("store")) {
            this.setBasicStructure(this.dateStr.getFullYear(), true);
        } else {
            this.setBasicStructure(this.dateStr.getFullYear(), false);
        }
    }

    setBasicStructure(year: number, isFirst: boolean) {
        let isYearNull = true;
        if (!isFirst){
            this.store = getString("store")
                ? JSON.parse(getString("store"))
                : {};
        }

        //console.log("2....."+this.store);
        //console.log("3....."+this.store[year]);
        if (this.store){
            if (this.store[year] == undefined) {
                this.store[year] = {};
                isYearNull = true;
            }
            else{
                isYearNull = false;
            }
        }

        //console.log("4....."+isYearNull);
        if(isYearNull){
            let isDisabled = true;
            for (let i = 0; i < 12; i++) {
                let totalDays = new Date(year, i + 1, 0).getDate();
                this.store[year][this.months[i]] = {};
                let count = 1;

                for (let j = 1; j <= totalDays; j++) {
                    if (
                        new Date(year, i, j).toDateString() ==
                        getString("date")
                    ){
                        isDisabled = false;
                    }

                    this.store[year][this.months[i]][j] = [];
                    this.store[year][this.months[i]][j].push({
                        dateOfMonth: j,
                        dayOfMonth: this.getDayOfWeek(year, i, j),
                        row: count,
                        isToday: false,
                        disabled: isDisabled,
                        notificationId: null
                    });

                    if (this.getDayOfWeek(year, i, j) == 6) count++;
                }
            }

            //console.log("5......."+JSON.stringify(this.store));
            //setString("store", JSON.stringify(this.store));
            this.setUpdatedData(this.store);
        }
    }

    getDayOfWeek(year: number, month: number, date: number) {
        let firstdateDay = new Date(year, month, date).getDay();
        return firstdateDay;
    }

    getData() {
        //return this.store;
        return JSON.parse(getString("store"));
    }
    setUpdatedData(store){
        setString("store", JSON.stringify(store));
    }

    setData(date: Date, data: Data["taskStructure"][]) {
        this.store = this.getData(); //JSON.parse(getString("store"));
        if (this.store[date.getFullYear()] == undefined) {
            this.setBasicStructure(
                date.getFullYear(),
                this.store != null ? false : true
            );
            this.store = this.getData(); //JSON.parse(getString("store"));
        }
        /*console.log(data);
        console.log(
            date.getFullYear() +
                " " +
                this.months[date.getMonth()] +
                " " +
                date.getDate +
                " "
        );*/
        this.store[date.getFullYear().toString()][this.months[date.getMonth()]][
            date.getDate().toString()
        ] = data;
        /*console.log(
            "2....." +
                this.store[date.getFullYear().toString()][this.months[date.getMonth()]][
                    date.getDate().toString()
                ]
        );*/
        //setString("store", JSON.stringify(this.store));
        this.setUpdatedData(this.store);
    }

    reset() {
        remove("store");
        this.setDataStructure();
    }

    setInstallationDate(){
        if(getString("date")){

        }
        else{
            setString("date", new Date().toDateString());
        }
    }

    setToday(){
        this.store = this.getData(); //JSON.parse(getString("store"));
        let years = Object.keys(this.store);
        for(let i=0;i<years.length;i++){
            for(let j=0;j<12;j++){
                let monthData = this.store[years[i]][this.months[j]];
                let days = Object.keys(this.store[years[i]][this.months[j]]).length;
                //console.log(days);
                for(let k=1;k<=days;k++)
                    monthData[k.toString()][0].isToday = false;
            }
        }
        //console.log(this.store[new Date().getFullYear().toString()][this.months[new Date().getMonth()]][new Date().getDate().toString()]);
        this.store[new Date().getFullYear().toString()][this.months[new Date().getMonth()]][new Date().getDate().toString()][0].isToday = true;
        //setString("store", JSON.stringify(this.store));
        this.setUpdatedData(this.store);
    }

    changeTaskStatus(index: number, status: boolean){
        this.store = this.getData(); //JSON.parse(getString("store"));
        /*console.log(this.store[new Date().getFullYear().toString()]
                [this.months[new Date().getMonth()]]
                [new Date().getDate().toString()][index]);*/
        this.store[new Date().getFullYear().toString()][
            this.months[new Date().getMonth()]
        ][new Date().getDate().toString()][index].done = status;
        //setString("store", JSON.stringify(this.store));
        this.setUpdatedData(this.store);
    }
}

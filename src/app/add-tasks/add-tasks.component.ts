import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from '@nativescript/angular';
import * as dialogs from 'tns-core-modules/ui/dialogs'
import { Data } from '../data';
import { constants } from '../constants';
import { CommunicationService } from '../Data/communication.service';
import { Subscription } from 'rxjs';
import { DataService } from '../Data/data.service';
import { UiService } from '../ui/ui.service';

@Component({
    selector: "ns-add-tasks",
    templateUrl: "./add-tasks.component.html",
    styleUrls: ["./add-tasks.component.css"],
})
export class AddTasksComponent implements OnInit, AfterContentChecked {

    currentDate: String;
    commons: {};
    tempItems: Data["taskStructure"][] = [];
    private busSub: Subscription;
    dateConst: String[];
    showEmpty: boolean = true;
    target: number = 0;
    action: String = "";
    actionList: String[] = ["edit","view"];

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private bus: CommunicationService,
        private data: DataService,
        private screen: UiService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {

        setTimeout(()=>{
            if(this.busSub){
                this.busSub.unsubscribe();
                console.log("SUBS");
            }
        }, 1000);

        this.commons = constants;
        let qp = this.active.snapshot.queryParams;
        this.currentDate = qp["date"];
        this.target = qp['target'];

        this.action = this.active.snapshot.params["action"];
        console.log(this.action);

        console.log("........." + this.currentDate);

        /*for (let i = 0; i < 2; i++) {
            this.tempItems.push({
                task: "This is a test task, added to check the css satbility!!",
                taskedQty: (i + 5).toString(),
                compQyt: (i + 2).toString(),
                metric: "KM",
                remTime: "3:15 PM",
                done: false,
            });
        }*/
        this.dateConst = this.currentDate.split(" ");
        //console.log(parseInt(this.dateConst[2].toString()).toString());

        this.tempItems = this.data.getData()[this.dateConst[3].toString()]
                            [this.dateConst[1].toLowerCase()]
                            [parseInt(this.dateConst[2].toString()).toString()];

        //console.log(this.tempItems);
        //console.log(this.data.getData()["2020"]["jun"]["22"]);
    }

    ngAfterContentChecked(){
        if(this.tempItems.length>1)
            this.showEmpty = false;
        else this.showEmpty = true;
    }

    startSubs(){
        this.busSub = this.bus.dataBus.subscribe(
            (data: Data["taskStructure"]) => {
                this.tempItems.push(data);
                //console.log("1..........."+this.tempItems);
                this.data.setData(
                    new Date(
                        parseInt(this.dateConst[3].toString()),
                        this.data.months.indexOf(
                            this.dateConst[1].toLowerCase()
                        ),
                        parseInt(this.dateConst[2].toString())
                    ),
                    this.tempItems);
                    console.log("SUBS RECIEVED");
            }
        );
    }

    addTasks(event){
        this.startSubs();
        this.router.navigate(['/addTask'], { queryParams: { for: this.currentDate, target: this.target}});
    }

    done(event){
        dialogs.alert("Noted!!!").then(()=>this.screen.changeUI());
    }

    back(event) {
        console.log('...........'+event);
        /*console.log(
            new Date(
                parseInt(this.dateConst[3].toString()),
                this.data.months.indexOf(this.dateConst[1].toLowerCase()),
                parseInt(this.dateConst[2].toString())
            ).toDateString()
        );*/
        this.data.setData(new Date(
                parseInt(this.dateConst[3].toString()),
                this.data.months.indexOf(this.dateConst[1].toLowerCase()),
                parseInt(this.dateConst[2].toString())
            ), this.tempItems);
        this.router.navigate(["/home"], { queryParams: { target: this.target }, clearHistory : true  });
        /*if(!event)
            this.router.navigate(["/home"], { queryParams: { target: 1 } });
        else{
            dialogs.confirm({
                title: "Redirection:",
                message: "Leave this page will loose changes. Conitnue?",
                okButtonText: "Leave",
                cancelButtonText: "Stay",
                neutralButtonText: ""
            }).then(result => {
                    if(result)
                        this.router.navigate(["/home"], {
                            queryParams: { target: 1 },
                        });
                }
            );
        }*/
    }

    clearItem(index){
        this.tempItems.splice(index,1);
        //console.log(this.tempItems);
    }

    editItem(index){
        this.startSubs();
        this.router.navigate(['/addTask/edit'], {
            queryParams: {
                for: this.currentDate,
                datas: JSON.stringify(this.tempItems[index]),
                target: this.target
            }
        });
        this.clearItem(index);
    }
}

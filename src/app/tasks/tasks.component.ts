import { Component, OnInit, Input } from '@angular/core';
import { } from '../data';
import { Data } from '@angular/router';

@Component({
    selector: "ns-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {

    @Input('items') items: Data["taskStructure"];

    constructor() {}

    ngOnInit(): void {

    }
}

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from './home/home.component';
import { DailyComponent } from './home/daily/daily.component';
import { MonthlyComponent } from './home/monthly/monthly.component';
import { AddTasksComponent } from "./add-tasks/add-tasks.component";
import { TaskFormComponent } from "./task-form/task-form.component";

const routes: Routes = [
    // { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "home",
        component: HomeComponent,
        children: [
            { path: "daily", component: DailyComponent, outlet: "daily" },
            { path: "monthly", component: MonthlyComponent, outlet: "monthly" },
        ],
    },
    { path: "add", component: AddTasksComponent },
    { path: "add/:action", component: AddTasksComponent },
    { path: "addTask", component: TaskFormComponent },
    { path: "addTask/:action", component: TaskFormComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

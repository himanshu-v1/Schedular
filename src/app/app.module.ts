import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "@nativescript/angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { DailyComponent } from './home/daily/daily.component';
import { MonthlyComponent } from './home/monthly/monthly.component';
import { SideDrawerComponent } from './ui/side-drawer/side-drawer.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ButtonsComponent } from './ui/buttons/buttons.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DailyComponent,
        MonthlyComponent,
        SideDrawerComponent,
        TasksComponent,
        AddTasksComponent,
        ButtonsComponent,
        TaskFormComponent,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}

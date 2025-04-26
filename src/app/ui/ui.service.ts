import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
    private _drawerState = new BehaviorSubject<void>(null);
    private _fullMode = new BehaviorSubject<void>(null);

    get drawerState() {
        return this._drawerState.asObservable();
    }
    get fullMode(){
        return this._fullMode.asObservable();
    }

    toggleDrawer(){
        this._drawerState.next(null);
    }
    changeUI(){
        this._fullMode.next(null);
    }

    constructor() { }
}

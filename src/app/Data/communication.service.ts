import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

    private _dataBus = new Subject<Object>();

    constructor() { }

    get dataBus(){
        return this._dataBus;
    }
}

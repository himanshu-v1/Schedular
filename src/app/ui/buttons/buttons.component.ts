import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "ns-buttons",
    templateUrl: "./buttons.component.html",
    styleUrls: ["./buttons.component.css"],
})
export class ButtonsComponent implements OnInit {
    @Input() text: String;
    @Input() size: String;
    @Input() color: String;

    @Output() tapp = new EventEmitter<String>();

    blueFull: boolean = false;
    redFull: boolean = false;
    greenFull: boolean = false;

    blueHalf: boolean = false;
    redHalf: boolean = false;
    greenHalf: boolean = false;

    blueQtr: boolean = false;
    redQtr: boolean = false;
    greenQtr: boolean = false;

    roundBtnClose: boolean = false;
    roundBtnBack: boolean = false;
    roundBtnNext: boolean = false;
    roundBtnCheck: boolean = false;
    roundBtnPlus: boolean = false;

    roundBtnClass: {
        btn_round_blue: boolean;
        btn_round_white: boolean;
        btn_round_red: boolean;
        btn_round_green: boolean;
    } = {
        btn_round_blue: false,
        btn_round_white: false,
        btn_round_red: false,
        btn_round_green: false,
    };

    constructor() {}

    ngOnInit(): void {
        console.log(this.text);
        if ("single" == this.size) {
            switch (this.color) {
                case "blue":
                    this.blueFull = true;
                    break;
                case "red":
                    this.redFull = true;
                    break;
                case "green":
                    this.greenFull = true;
                    break;
                default:
                    this.blueFull = true;
            }
        } else if ("double" == this.size) {
            switch (this.color) {
                case "blue":
                    this.blueHalf = true;
                    break;
                case "red":
                    this.redHalf = true;
                    break;
                case "green":
                    this.greenHalf = true;
                    break;
                default:
                    this.blueHalf = true;
            }
        } else if ("cent" == this.size) {
            switch (this.color) {
                case "blue":
                    this.blueQtr = true;
                    break;
                case "red":
                    this.redQtr = true;
                    break;
                case "green":
                    this.greenQtr = true;
                    break;
                default:
                    this.blueQtr = true;
            }
        } else if ("round" == this.size) {
            switch (this.text) {
                case "close":
                    this.roundBtnClose = true;
                    break;
                case "prev":
                    this.roundBtnBack = true;
                    break;
                case "next":
                    this.roundBtnNext = true;
                    break;
                case "check":
                    this.roundBtnCheck = true;
                    break;
                case "plus":
                    this.roundBtnPlus = true;
                    break;
                default:
                    this.roundBtnNext = true;
            }
            switch (this.color) {
                case "blue":
                    this.roundBtnClass.btn_round_blue = true;
                    break;
                case "white":
                    this.roundBtnClass.btn_round_white = true;
                    break;
                case "red":
                    this.roundBtnClass.btn_round_red = true;
                    break;
                case "green":
                    this.roundBtnClass.btn_round_green = true;
                    break;
                default:
                    this.roundBtnClass.btn_round_blue = true;
            }
        }
    }

    onTap() {
        this.tapp.emit("back");
    }
}

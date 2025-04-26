require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"Font Awesome 5 Free, fa-regular-400"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"Font Awesome 5 Brands, fa-brands-400"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"Font Awesome 5 Free, fa-solid-900"},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"180"}]},{"type":"rule","selectors":[".sideMenuItems"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"border-color","value":"white"},{"type":"declaration","property":"padding-left","value":"10"},{"type":"declaration","property":"padding-bottom","value":"10"},{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".sideMenu"],"declarations":[{"type":"declaration","property":"background-blend-mode","value":"soft-light"},{"type":"declaration","property":"background","value":"linear-gradient(95deg, #007bff, #5c92cc)"},{"type":"comment","comment":" padding-top: 50; "}]},{"type":"rule","selectors":[".testRed"],"declarations":[{"type":"declaration","property":"border-width","value":"5"},{"type":"declaration","property":"border-color","value":"tomato"}]},{"type":"rule","selectors":[".testYellow"],"declarations":[{"type":"declaration","property":"border-width","value":"5"},{"type":"declaration","property":"border-color","value":"yellow"}]},{"type":"rule","selectors":[".testGreen"],"declarations":[{"type":"declaration","property":"border-width","value":"5"},{"type":"declaration","property":"border-color","value":"green"}]},{"type":"rule","selectors":[".author"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"padding","value":"3"},{"type":"declaration","property":"font-size","value":"13"}]},{"type":"rule","selectors":[".li"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-bottom-color","value":"thistle"}]},{"type":"rule","selectors":[".alignText"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".done"],"declarations":[{"type":"declaration","property":"background","value":"#d8ffcc"}]}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/Data/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");


var CommunicationService = /** @class */ (function () {
    function CommunicationService() {
        this._dataBus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(CommunicationService.prototype, "dataBus", {
        get: function () {
            return this._dataBus;
        },
        enumerable: true,
        configurable: true
    });
    CommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "./app/Data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__);


var DataService = /** @class */ (function () {
    function DataService() {
        this.store = {};
        this.dateStr = new Date();
        this.months = [
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
        this.weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    }
    DataService.prototype.setDataStructure = function () {
        //console.log("1.....\n"+getString("store"));
        if (!Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["getString"])("store")) {
            this.setBasicStructure(this.dateStr.getFullYear(), true);
        }
        else {
            this.setBasicStructure(this.dateStr.getFullYear(), false);
        }
    };
    DataService.prototype.setBasicStructure = function (year, isFirst) {
        var isYearNull = true;
        if (!isFirst) {
            this.store = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["getString"])("store")
                ? JSON.parse(Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["getString"])("store"))
                : {};
        }
        //console.log("2....."+this.store);
        //console.log("3....."+this.store[year]);
        if (this.store) {
            if (this.store[year] == undefined) {
                this.store[year] = {};
                isYearNull = true;
            }
            else {
                isYearNull = false;
            }
        }
        //console.log("4....."+isYearNull);
        if (isYearNull) {
            var isDisabled = true;
            for (var i = 0; i < 12; i++) {
                var totalDays = new Date(year, i + 1, 0).getDate();
                this.store[year][this.months[i]] = {};
                var count = 1;
                for (var j = 1; j <= totalDays; j++) {
                    if (new Date(year, i, j).toDateString() ==
                        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["getString"])("date")) {
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
                    if (this.getDayOfWeek(year, i, j) == 6)
                        count++;
                }
            }
            //console.log("5......."+JSON.stringify(this.store));
            //setString("store", JSON.stringify(this.store));
            this.setUpdatedData(this.store);
        }
    };
    DataService.prototype.getDayOfWeek = function (year, month, date) {
        var firstdateDay = new Date(year, month, date).getDay();
        return firstdateDay;
    };
    DataService.prototype.getData = function () {
        //return this.store;
        return JSON.parse(Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["getString"])("store"));
    };
    DataService.prototype.setUpdatedData = function (store) {
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"])("store", JSON.stringify(store));
    };
    DataService.prototype.setData = function (date, data) {
        this.store = this.getData(); //JSON.parse(getString("store"));
        if (this.store[date.getFullYear()] == undefined) {
            this.setBasicStructure(date.getFullYear(), this.store != null ? false : true);
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
        this.store[date.getFullYear().toString()][this.months[date.getMonth()]][date.getDate().toString()] = data;
        /*console.log(
            "2....." +
                this.store[date.getFullYear().toString()][this.months[date.getMonth()]][
                    date.getDate().toString()
                ]
        );*/
        //setString("store", JSON.stringify(this.store));
        this.setUpdatedData(this.store);
    };
    DataService.prototype.reset = function () {
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["remove"])("store");
        this.setDataStructure();
    };
    DataService.prototype.setInstallationDate = function () {
        if (Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["getString"])("date")) {
        }
        else {
            Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"])("date", new Date().toDateString());
        }
    };
    DataService.prototype.setToday = function () {
        this.store = this.getData(); //JSON.parse(getString("store"));
        var years = Object.keys(this.store);
        for (var i = 0; i < years.length; i++) {
            for (var j = 0; j < 12; j++) {
                var monthData = this.store[years[i]][this.months[j]];
                var days = Object.keys(this.store[years[i]][this.months[j]]).length;
                //console.log(days);
                for (var k = 1; k <= days; k++)
                    monthData[k.toString()][0].isToday = false;
            }
        }
        //console.log(this.store[new Date().getFullYear().toString()][this.months[new Date().getMonth()]][new Date().getDate().toString()]);
        this.store[new Date().getFullYear().toString()][this.months[new Date().getMonth()]][new Date().getDate().toString()][0].isToday = true;
        //setString("store", JSON.stringify(this.store));
        this.setUpdatedData(this.store);
    };
    DataService.prototype.changeTaskStatus = function (index, status) {
        this.store = this.getData(); //JSON.parse(getString("store"));
        /*console.log(this.store[new Date().getFullYear().toString()]
                [this.months[new Date().getMonth()]]
                [new Date().getDate().toString()][index]);*/
        this.store[new Date().getFullYear().toString()][this.months[new Date().getMonth()]][new Date().getDate().toString()][index].done = status;
        //setString("store", JSON.stringify(this.store));
        this.setUpdatedData(this.store);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/add-tasks/add-tasks.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\n    background: #007bff;\n    color: white;\n}\n.headLabel{\n    margin-top: 35;\n    padding-bottom: 15;\n    padding-right: 15;\n    font-size: 20;\n}\n\n.crossFont{\n    font-size: 20;\n    color: white;\n    background: tomato;\n}\n\n.editFont{\n    font-size: 20;\n    color: white;\n    background: yellow;\n}\n\n.emptyText{\n    font-size: 25;\n    font-family: fantasy;\n    color: black;\n    opacity: 0.3;\n}\n"

/***/ }),

/***/ "./app/add-tasks/add-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"9*,1*\" columns=\"*\">\n    <StackLayout row=\"0\" col=\"0\">\n        <!-- <StackLayout class=\"header\">\n            <FlexboxLayout justifyContent=\"flex-end\" width=\"100%\">\n                <Label text=\"&#xf00d;\" class=\"fas headLabel\" (tap)=\"back()\"></Label>\n            </FlexboxLayout>\n        </StackLayout> -->\n        <ScrollView height=\"100%\" *ngIf=\"showEmpty==false\">\n            <StackLayout *ngIf=\"action!=actionList[1]\">\n                <GridLayout rows=\"*\" columns=\"90*,10*\" *ngFor=\"let item of tempItems; let i = index;\" class=\"li\">\n                    <ns-tasks [items]=\"item\" row=\"0\" col=\"0\" *ngIf=\"i!=0\"></ns-tasks>\n                    <FlexboxLayout row=\"0\" col=\"1\"\n                        flexDirection=\"column\" alignItems=\"center\"\n                        justifyContent=\"center\" class=\"crossFont\" *ngIf=\"i!=0 && action==undefined\">\n                        <Label text=\"&#xf00d;\" class=\"fas\" (tap)=\"clearItem(i)\"></Label>\n                    </FlexboxLayout>\n                    <FlexboxLayout row=\"0\" col=\"1\"\n                        flexDirection=\"column\" alignItems=\"center\"\n                        justifyContent=\"center\" class=\"editFont\" *ngIf=\"i!=0 && action==actionList[0]\">\n                        <Label text=\"&#xf303;\" class=\"fas\" (tap)=\"editItem(i)\"></Label>\n                    </FlexboxLayout>\n                </GridLayout>\n            </StackLayout>\n            <StackLayout *ngIf=\"action==actionList[1]\">\n                <GridLayout rows=\"*\" columns=\"*\" *ngFor=\"let item of tempItems; let i = index;\" class=\"li\" [ngClass]=\"{done:item.done}\">\n                    <ns-tasks [items]=\"item\" row=\"0\" col=\"0\" *ngIf=\"i!=0\"></ns-tasks>\n                </GridLayout>\n            </StackLayout>\n        </ScrollView>\n        <StackLayout height=\"100%\" *ngIf=\"showEmpty==true\">\n            <FlexboxLayout class=\"emptyText\" flexDirection=\"column\" justifyContent=\"center\" alignItems=\"center\" height=\"100%\">\n                <Label text=\"Nothing yet !!!\"></Label>\n                <Label text=\"Start adding now...\"></Label>\n            </FlexboxLayout>\n        </StackLayout>\n    </StackLayout>\n    <StackLayout row=\"1\" col=\"0\">\n        <FlexboxLayout style=\"padding: 4;\" justifyContent=\"center\">\n            <!-- <ns-buttons [text]=\"commons['close']\" [color]=\"commons['red']\" [size]=\"commons['cent']\" (tapp)=\"back($event)\"></ns-buttons>\n            <ns-buttons [text]=\"commons['addmore']\" [color]=\"commons['blue']\" [size]=\"commons['cent']\" (tapp)=\"addTasks($event)\"></ns-buttons>\n            <ns-buttons [text]=\"commons['done']\" [color]=\"commons['green']\" [size]=\"commons['cent']\" (tapp)=\"done($event)\"></ns-buttons> -->\n\n            <ns-buttons [text]=\"commons['close']\" [color]=\"commons['red']\" [size]=\"commons['half']\" (tapp)=\"back($event)\"\n                *ngIf=\"action==undefined\">\n            </ns-buttons>\n            <ns-buttons [text]=\"commons['addmore']\" [color]=\"commons['blue']\" [size]=\"commons['half']\" (tapp)=\"addTasks($event)\"\n                *ngIf=\"action==undefined\">\n            </ns-buttons>\n            <ns-buttons [text]=\"commons['close']\" [color]=\"commons['red']\" [size]=\"commons['full']\" (tapp)=\"back($event)\"\n                *ngIf=\"action!=undefined\">\n            </ns-buttons>\n\n            <!-- also works fine with default 'tap' event-->\n            <!-- <ns-buttons [text]=\"commons['close']\" [color]=\"commons['red']\" [size]=\"commons['cent']\" (tap)=\"back($event)\"></ns-buttons>\n            <ns-buttons [text]=\"commons['addmore']\" [color]=\"commons['blue']\" [size]=\"commons['cent']\" (tap)=\"addTasks($event)\"></ns-buttons>\n            <ns-buttons [text]=\"commons['done']\" [color]=\"commons['green']\" [size]=\"commons['cent']\" (tap)=\"done($event)\"></ns-buttons> -->\n        </FlexboxLayout>\n    </StackLayout>\n</GridLayout>\n\n"

/***/ }),

/***/ "./app/add-tasks/add-tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasksComponent", function() { return AddTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/constants.ts");
/* harmony import */ var _Data_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/Data/communication.service.ts");
/* harmony import */ var _Data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/Data/data.service.ts");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/ui/ui.service.ts");









var AddTasksComponent = /** @class */ (function () {
    function AddTasksComponent(page, router, active, bus, data, screen) {
        this.page = page;
        this.router = router;
        this.active = active;
        this.bus = bus;
        this.data = data;
        this.screen = screen;
        this.tempItems = [];
        this.showEmpty = true;
        this.target = 0;
        this.action = "";
        this.actionList = ["edit", "view"];
        this.page.actionBarHidden = true;
    }
    AddTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.busSub) {
                _this.busSub.unsubscribe();
                console.log("SUBS");
            }
        }, 1000);
        this.commons = _constants__WEBPACK_IMPORTED_MODULE_5__["constants"];
        var qp = this.active.snapshot.queryParams;
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
        this.tempItems = this.data.getData()[this.dateConst[3].toString()][this.dateConst[1].toLowerCase()][parseInt(this.dateConst[2].toString()).toString()];
        //console.log(this.tempItems);
        //console.log(this.data.getData()["2020"]["jun"]["22"]);
    };
    AddTasksComponent.prototype.ngAfterContentChecked = function () {
        if (this.tempItems.length > 1)
            this.showEmpty = false;
        else
            this.showEmpty = true;
    };
    AddTasksComponent.prototype.startSubs = function () {
        var _this = this;
        this.busSub = this.bus.dataBus.subscribe(function (data) {
            _this.tempItems.push(data);
            //console.log("1..........."+this.tempItems);
            _this.data.setData(new Date(parseInt(_this.dateConst[3].toString()), _this.data.months.indexOf(_this.dateConst[1].toLowerCase()), parseInt(_this.dateConst[2].toString())), _this.tempItems);
            console.log("SUBS RECIEVED");
        });
    };
    AddTasksComponent.prototype.addTasks = function (event) {
        this.startSubs();
        this.router.navigate(['/addTask'], { queryParams: { for: this.currentDate, target: this.target } });
    };
    AddTasksComponent.prototype.done = function (event) {
        var _this = this;
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]("Noted!!!").then(function () { return _this.screen.changeUI(); });
    };
    AddTasksComponent.prototype.back = function (event) {
        console.log('...........' + event);
        /*console.log(
            new Date(
                parseInt(this.dateConst[3].toString()),
                this.data.months.indexOf(this.dateConst[1].toLowerCase()),
                parseInt(this.dateConst[2].toString())
            ).toDateString()
        );*/
        this.data.setData(new Date(parseInt(this.dateConst[3].toString()), this.data.months.indexOf(this.dateConst[1].toLowerCase()), parseInt(this.dateConst[2].toString())), this.tempItems);
        this.router.navigate(["/home"], { queryParams: { target: this.target }, clearHistory: true });
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
    };
    AddTasksComponent.prototype.clearItem = function (index) {
        this.tempItems.splice(index, 1);
        //console.log(this.tempItems);
    };
    AddTasksComponent.prototype.editItem = function (index) {
        this.startSubs();
        this.router.navigate(['/addTask/edit'], {
            queryParams: {
                for: this.currentDate,
                datas: JSON.stringify(this.tempItems[index]),
                target: this.target
            }
        });
        this.clearItem(index);
    };
    AddTasksComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _Data_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"] },
        { type: _Data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
        { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"] }
    ]; };
    AddTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-add-tasks",
            template: __importDefault(__webpack_require__("./app/add-tasks/add-tasks.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/add-tasks/add-tasks.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _Data_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"],
            _Data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"]])
    ], AddTasksComponent);
    return AddTasksComponent;
}());



/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _home_daily_daily_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/daily/daily.component.ts");
/* harmony import */ var _home_monthly_monthly_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/home/monthly/monthly.component.ts");
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/task-form/task-form.component.ts");







var routes = [
    // { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            { path: "daily", component: _home_daily_daily_component__WEBPACK_IMPORTED_MODULE_3__["DailyComponent"], outlet: "daily" },
            { path: "monthly", component: _home_monthly_monthly_component__WEBPACK_IMPORTED_MODULE_4__["MonthlyComponent"], outlet: "monthly" },
        ],
    },
    { path: "add", component: _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_5__["AddTasksComponent"] },
    { path: "add/:action", component: _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_5__["AddTasksComponent"] },
    { path: "addTask", component: _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskFormComponent"] },
    { path: "addTask/:action", component: _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer (tap)=\"hideFullscreen()\">\n    <StackLayout class=\"sideMenu\" tkDrawerContent>\n        <GridLayout rows=\"9*,1*\" columns=\"*\">\n            <FlexboxLayout flexDirection=\"column\"\n                justifyContent=\"center\" alignItems=\"center\" height=\"100%\"\n                row=\"0\" col=\"0\">\n                <Label text=\"&#xf2f9;\" class=\"fas sideMenuItems\" (tap)=\"reset()\"></Label>\n                <Label text=\"Reset All Data\" class=\"sideMenuItems\" (tap)=\"reset()\"></Label>\n            </FlexboxLayout>\n            <FlexboxLayout row=\"1\" col=\"0\" justifyContent=\"center\" alignItems=\"center\">\n                <Label text=\"&#xf004;\" class=\"fas author\"></Label>\n                <Label text=\"Himanshu Sharma\" class=\"author\"></Label>\n            </FlexboxLayout>\n        </GridLayout>\n        <!-- <Label text=\"Test Menu 2\" class=\"sideMenuItems\"></Label>\n        <Label text=\"Test Menu 3\" class=\"sideMenuItems\"></Label> -->\n    </StackLayout>\n    <StackLayout tkMainContent>\n        <page-router-outlet></page-router-outlet>\n    </StackLayout>\n</RadSideDrawer>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/ui/ui.service.ts");
/* harmony import */ var _Data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/Data/data.service.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_orientation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-orientation/orientation.js");
/* harmony import */ var nativescript_orientation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_orientation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_fingerprint_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-fingerprint-auth/fingerprint-auth.js");
/* harmony import */ var nativescript_fingerprint_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_fingerprint_auth__WEBPACK_IMPORTED_MODULE_8__);









//import { device } from 'tns-core-modules/platform';
//var app = require("application");
//declare function onSystemUiVisibilityChange(visibility: number): void;
var AppComponent = /** @class */ (function () {
    function AppComponent(page, drawerToggle, data) {
        this.page = page;
        this.drawerToggle = drawerToggle;
        this.data = data;
        this.fingerAuth = new nativescript_fingerprint_auth__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuth"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.setInstallationDate();
        this.drawerToggle.fullMode.subscribe(function () {
            _this.hideFullscreen();
        });
        if (android) {
            tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["AndroidApplication"].activityResumedEvent, function (args) {
                _this.hideFullscreen();
                console.log("Resume");
            });
            tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["AndroidApplication"].activityRequestPermissionsEvent, function (args) {
                console.log("Permission");
            });
            tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["AndroidApplication"].activityPausedEvent, function (args) {
                _this.hideFullscreen();
                //this.askFingerprint();
                console.log("Paused");
            });
            tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["AndroidApplication"].activityResultEvent, function () {
                console.log("Result");
            });
            tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["AndroidApplication"].activityStoppedEvent, function () {
                console.log("Stop");
            });
            tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["AndroidApplication"].activityStartedEvent, function () {
                _this.askFingerprint();
                console.log("start");
            });
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.hideFullscreen();
        //this.disableRotation();
        this.drawer = this.radSideDrawer.sideDrawer;
        this.toggleSubscriber = this.drawerToggle.drawerState.subscribe(function () {
            _this.drawer.toggleDrawerState();
            //console.log("clicked");
        });
        this.data.setDataStructure();
        this.data.setToday();
        //this.askFingerprint();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.toggleSubscriber.unsubscribe();
    };
    AppComponent.prototype.reset = function () {
        var _this = this;
        _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["confirm"]({
            title: "Reset data",
            message: "All the current data will be lost. Continue?",
            okButtonText: "Delete",
            cancelButtonText: "Cancel",
        })
            .then(function (success) {
            if (success)
                _this.data.reset();
            _this.drawerToggle.changeUI();
        });
    };
    AppComponent.prototype.hideFullscreen = function () {
        /*if (androidApp && device.sdkVersion >= "21") {
            const View = android.view.View;
            const window = androidApp.startActivity.getWindow();
            const decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY |
                View.SYSTEM_UI_FLAG_FULLSCREEN |
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            );
        }*/
    };
    /*private getStatusBarHeight() {
        let result = 0;
        console.log(app.android);
        let resourceId = app.android.currentContext.getResources().getIdentifier('status_bar_height', 'dimen', 'android');
        if (resourceId) {
            result = app.android.currentContext.getResources().getDimensionPixelSize(resourceId);
        }
        return result;
    }*/
    AppComponent.prototype.disableRotation = function () {
        nativescript_orientation__WEBPACK_IMPORTED_MODULE_7__["setOrientation"]("portrait", false);
        nativescript_orientation__WEBPACK_IMPORTED_MODULE_7__["disableRotation"]();
    };
    AppComponent.prototype.askFingerprint = function () {
        var _this = this;
        this.fingerAuth.available().then(function (result) {
            console.log("Biometric ID available? " + result.any);
            console.log("Touch? " + result.touch);
            console.log("Face? " + result.face);
            if (result.any) {
                _this.verifyFingerprint();
            }
        }).catch(function (err) {
            console.log("Main: " + JSON.stringify(err));
        });
    };
    AppComponent.prototype.verifyFingerprint = function () {
        var _this = this;
        this.fingerAuth
            .verifyFingerprint({
            title: "Please Verify"
        })
            .then(function (enteredPassword) {
            if (enteredPassword === undefined) {
                console.log("Ok");
            }
        }).catch(function (err) {
            console.log("sub: " + JSON.stringify(err));
            if (err.code != 30) {
                _this.askFingerprint();
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"] },
        { type: _Data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__["RadSideDrawerComponent"]),
        __metadata("design:type", nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__["RadSideDrawerComponent"])
    ], AppComponent.prototype, "radSideDrawer", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app/app.component.html")).default,
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"],
            _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"],
            _Data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var _nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _home_daily_daily_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/home/daily/daily.component.ts");
/* harmony import */ var _home_monthly_monthly_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/home/monthly/monthly.component.ts");
/* harmony import */ var _ui_side_drawer_side_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/ui/side-drawer/side-drawer.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/tasks/tasks.component.ts");
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _ui_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/ui/buttons/buttons.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/task-form/task-form.component.ts");














var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                _nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _home_daily_daily_component__WEBPACK_IMPORTED_MODULE_7__["DailyComponent"],
                _home_monthly_monthly_component__WEBPACK_IMPORTED_MODULE_8__["MonthlyComponent"],
                _ui_side_drawer_side_drawer_component__WEBPACK_IMPORTED_MODULE_9__["SideDrawerComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__["TasksComponent"],
                _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_11__["AddTasksComponent"],
                _ui_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_12__["ButtonsComponent"],
                _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_13__["TaskFormComponent"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metrics", function() { return metrics; });
var constants = {
    close: "close",
    red: "red",
    blue: "blue",
    green: "green",
    addmore: "Add More",
    full: "single",
    half: "double",
    cent: "cent",
    done: "Done!",
    round: "round",
    times: "&#xf00d;",
    prev: "prev",
    next: "next",
    white: "white",
    check: "check",
    plus: "plus"
};
var metrics = [
    "mm",
    "cm",
    "m",
    "km",
    "miles",
    "g",
    "kg",
    "sec",
    "ms",
    "hr",
    "min",
    "li",
    "ml"
];
var viewData = [
    "View.SYSTEM_UI_FLAG_LAYOUT_STABLE",
    "View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION",
    "View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN",
    "View.SYSTEM_UI_FLAG_LOW_PROFILE",
    "View.SYSTEM_UI_FLAG_HIDE_NAVIGATION",
    "View.SYSTEM_UI_FLAG_FULLSCREEN",
    "View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY",
    "View.SYSTEM_UI_FLAG_IMMERSIVE",
];


/***/ }),

/***/ "./app/home/daily/daily.component.css":
/***/ (function(module, exports) {

module.exports = ".noData{\n    font-size: 20;\n    margin-top: 5;\n    opacity: 0.3;\n}\n\n@keyframes animL{\n    from {\n        transform: translateX(0);\n    }\n    to {\n        transform: translateX(150);\n    }\n}\n\n.animateLeft{\n    animation-name: animL;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes animR{\n    from {\n        transform: translateX(0);\n    }\n    to {\n        transform: translateX(-150);\n    }\n}\n\n.animateRight{\n    animation-name: animR;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n.top{\n    color: teal;\n    font-size: 25;\n    height: 1;\n}\n\n@keyframes animTop{\n    from {\n        /* transform: translateY(0);  */\n        height: 0%;\n    }\n    to {\n        /* transform: translateY(200);  */\n        height: 100%;\n    }\n}\n\n.animateTop{\n    animation-name: animTop;\n    animation-duration: 0.3s;\n    animation-fill-mode: forwards;\n}\n\n.options{\n    opacity: 0.1;\n}\n"

/***/ }),

/***/ "./app/home/daily/daily.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ListView height=\"100%\" [items]=\"tempItems\" *ngIf=\"tempItems.length!=0\">\n    <ng-template let-item=\"item\" let-i=\"index\">\n        <ns-tasks [items]=\"item\"></ns-tasks>\n    </ng-template>\n</ListView> -->\n<AbsoluteLayout>\n    <ScrollView *ngIf=\"tempItems.length!=0\" top=\"0\" left=\"0\" width=\"100%\" height=\"100%\"\n            [ngClass]=\"{options: animateLTR}\">\n        <StackLayout>\n            <GridLayout rows=\"*\" columns=\"*\" *ngFor=\"let item of tempItems; let i=index;\"\n                class=\"li\" (tap)=\"confirm(i)\" [ngClass]=\"{done: item.done}\">\n                <FlexboxLayout row=\"0\" col=\"0\" justifyContent=\"center\" *ngIf=\"i!=0\">\n                    <ns-tasks [items]=\"item\"></ns-tasks>\n                </FlexboxLayout>\n            </GridLayout>\n        </StackLayout>\n    </ScrollView>\n    <FlexboxLayout flexDirection=\"column\" justifyContent=\"center\" alignItems=\"center\" height=\"100%\" width=\"100%\"\n        *ngIf=\"tempItems.length==1\" top=\"0\" left=\"0\" width=\"100%\" height=\"100%\">\n        <ns-buttons [text]=\"commons['plus']\" [size]=\"commons['round']\" [color]=\"commons['white']\" (tapp)=\"addTasks($event)\">\n        </ns-buttons>\n        <Label text=\"No tasks for today!!\" class=\"noData\"></Label>\n    </FlexboxLayout>\n\n    <FlexboxLayout top=\"0\" width=\"100%\" justifyContent=\"center\"\n        class=\"top\" [ngClass]=\"{animateTop: animateLTR}\" alignItems=\"center\"\n        (tap)=\"test()\" *ngIf=\"animateLTR == true\">\n        <Label style=\"margin-bottom: 100;\" text=\"Completed this task ?\"></Label>\n    </FlexboxLayout>\n\n    <FlexboxLayout justifyContent=\"space-between\" width=\"100%\" top=\"350\" *ngIf=\"animateLTR == true\">\n        <FlexboxLayout [ngClass]=\"{animateLeft: animateLTR}\" style=\"margin-left: -100;\">\n            <ns-buttons [text]=\"this.commons['check']\" [size]=\"this.commons['round']\"\n                [color]=\"this.commons['green']\" (tapp)=\"changeStatus(true)\"></ns-buttons>\n        </FlexboxLayout>\n        <FlexboxLayout [ngClass]=\"{animateRight: animateLTR}\" style=\"margin-right: -100;\">\n            <ns-buttons [text]=\"this.commons['close']\" [size]=\"this.commons['round']\"\n                [color]=\"this.commons['red']\" (tapp)=\"changeStatus(false)\">\n            </ns-buttons>\n        </FlexboxLayout>\n    </FlexboxLayout>\n</AbsoluteLayout>\n"

/***/ }),

/***/ "./app/home/daily/daily.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyComponent", function() { return DailyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/Data/data.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/constants.ts");





var DailyComponent = /** @class */ (function () {
    function DailyComponent(page, data, router) {
        this.page = page;
        this.data = data;
        this.router = router;
        this.tempItems = [];
        this.commons = _constants__WEBPACK_IMPORTED_MODULE_4__["constants"];
        this.animateLTR = false;
        this.date = new Date();
    }
    DailyComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        //console.log(this.data.getData());
        this.tempItems = this.data.getData()[this.date.getFullYear().toString()][this.data.months[this.date.getMonth()].toString()][this.date.getDate().toString()];
        //this.tempItems.splice(0, 1);
        //console.log('1.........'+JSON.stringify(this.tempItems));
        /*console.log(platform.screen.mainScreen.widthDIPs);
        console.log(platform.screen.mainScreen.widthPixels);
        console.log(platform.screen.mainScreen.scale);*/
    };
    DailyComponent.prototype.addTasks = function (event) {
        this.router.navigate(["/add"], {
            queryParams: { date: new Date().toDateString(), target: 0 },
            clearHistory: true,
        });
    };
    DailyComponent.prototype.confirm = function (index) {
        this.statusFor = index;
        this.animateLTR = true;
        //console.log("clicked");
    };
    DailyComponent.prototype.changeStatus = function (status) {
        this.data.changeTaskStatus(this.statusFor, status);
        this.animateLTR = false;
        this.statusFor = undefined;
        //console.log(this.statusFor+" "+status)
        //console.log("ticked");
        //console.log(this.tempItems);
        this.tempItems = this.data.getData()[this.date.getFullYear().toString()][this.data.months[this.date.getMonth()].toString()][this.date.getDate().toString()];
        //console.log(this.tempItems);
    };
    DailyComponent.prototype.test = function () {
        //console.log("clicked!!!!");
    };
    DailyComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: _Data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    DailyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-daily",
            template: __importDefault(__webpack_require__("./app/home/daily/daily.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/home/daily/daily.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"],
            _Data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], DailyComponent);
    return DailyComponent;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-side-drawer></ns-side-drawer>\n<!-- <Tabs [selectedIndex]=\"selectedTab\" tabsPosition=\"bottom\">\n\n   <TabStrip>\n        <TabStripItem (tap)=\"loadView('d')\">\n            <Label text=\"Today's Challanges\"></Label>\n            <Image src=\"font://&#xf02e;\" class=\"fas\"></Image>\n        </TabStripItem>\n        <TabStripItem class=\"special\" (tap)=\"loadView('m')\">\n            <Label text=\"Monthly View\"></Label>\n            <Image src=\"font://&#xf559;\" class=\"fas\"></Image>\n        </TabStripItem>\n    </TabStrip>\n\n    <TabContentItem>\n        <GridLayout>\n            <page-router-outlet name=\"daily\"></page-router-outlet>\n        </GridLayout>\n    </TabContentItem>\n    <TabContentItem>\n        <StackLayout>\n            <page-router-outlet name=\"monthly\"></page-router-outlet>\n        </StackLayout>\n    </TabContentItem>\n\n</Tabs> -->\n<TabView [selectedIndex]=\"selectedTab\"\n        androidTabsPosition=\"bottom\"\n        selectedTabTextColor=\"white\" tabBackgroundColor=\"#007bff\"\n        androidSelectedTabHighlightColor=\"white\" tabTextFontSize=\"300\">\n        <page-router-outlet *tabItem=\"{ title: 'Today'}\" name=\"daily\"> </page-router-outlet>\n        <page-router-outlet *tabItem=\"{ title: 'Monthly View'}\" name=\"monthly\"> </page-router-outlet>\n</TabView>\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, active) {
        this.router = router;
        this.active = active;
        this.selectedTab = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.navigate([
            {
                outlets: { daily: ["daily"], monthly: ["monthly"] }
            }
        ], {
            relativeTo: this.active
        });
        if (this.active.snapshot.queryParams["target"])
            this.selectedTab = this.active.snapshot.queryParams["target"];
        else
            this.selectedTab = 0;
        //else this.selectedTab = 1;
    };
    HomeComponent.prototype.loadView = function (target) {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-home',
            template: __importDefault(__webpack_require__("./app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/monthly/monthly.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n    padding: 30;\n}\n\n.bItems{\n    border-width: 1;\n    border-color: blue;\n    border-radius: 50;\n    margin: 5;\n    padding: 5%;\n    font-size: 15%;\n    font-weight: bold;\n}\n\n.centerAl{\n    text-align: center;\n    vertical-align: middle;\n}\n\n.head{\n    color: rgba(0, 0, 255, 0.726);\n    font-weight: bold;\n    font-size: 20;\n}\n\n.headDays{\n    font-weight: bold;\n    font-size: medium;\n    color: white;\n    background: #007bff;\n    border-width: 1;\n    border-radius: 50;\n    border-color: blue;\n    /* margin-left: 10;\n    margin-right: 10; */\n}\n\n.options{\n    opacity: 0.1;\n}\n\n@keyframes optionsMenu{\n    from {\n        /* top: -50; */\n        /* left: 2; */\n        width: 99%;\n        height: 0%;\n    }\n    to {\n        /* top: 2; */\n        /* left: 2; */\n        width: 99%;\n        height: 100%;\n    }\n}\n\n.optionMenuAni {\n    animation-name: optionsMenu;\n    animation-duration: 1s;\n    animation-timing-function: spring;\n    animation-fill-mode: forwards;\n}\n\n.optionText{\n    font-size: 40;\n}\n/* .optionsMenuBefore {\n    /* top: -50; *\n    height: 0;\n} */\n\n.bord{\n    border-width: 1;\n    border-color: black;\n}\n\n.picker {\n    color: blue;\n    border-width: 0;\n    /* height: 40; */\n    text-align: center;\n    font-size: 20;\n    min-height: 10 !important;\n}\n"

/***/ }),

/***/ "./app/home/monthly/monthly.component.html":
/***/ (function(module, exports) {

module.exports = "<AbsoluteLayout>\n    <FlexboxLayout\n        justifyContent=\"space-around\" alignItems=\"center\"\n        [ngClass]=\"optionShow\" *ngIf=\"classObj.options\"\n        (tap)=\"close()\">\n        <Label text=\"&#xf06e;\" class=\"far head optionText\" (tap)=\"view()\"></Label>\n        <Label text=\"&#xf044;\" class=\"far head optionText\" (tap)=\"edit()\"></Label>\n        <Label text=\"&#xf067;\" class=\"fas head optionText\" (tap)=\"add()\"></Label>\n    </FlexboxLayout>\n    <FlexboxLayout top=\"0\" left=\"0\" height=\"100%\" width=\"100%\" [ngClass]=\"classObj\">\n        <GridLayout rows=\"*,*,5*\" col=\"*\" class=\"main\">\n            <FlexboxLayout flexDirection=\"column\" justifyContent=\"center\" alignItems=\"center\" row=\"0\" col=\"0\">\n                <!-- <ListPicker [items]=\"years\" class=\"picker\" selectedIndex=0 width=\"500\"></ListPicker> -->\n                <Label text=\"{{currYear}}\" class=\"head h3\" (tap)=\"changeYear()\" *ngIf=\"yearDDShow==false\"></Label>\n                <ListView width=\"100\" height=\"50\" [items]=\"years\" class=\"picker\" androidElevation=\"5\" *ngIf=\"yearDDShow==true\">\n                        <ng-template let-item=\"item\" let-i=\"index\">\n                            <Label [text]=\"item\" (tap)=\"onChangeYear(i)\"></Label>\n                        </ng-template>\n                </ListView>\n            </FlexboxLayout>\n            <FlexboxLayout flexDirection=\"row\" justifyContent=\"space-around\" row=\"1\" col=\"0\">\n                <StackLayout>\n                    <Label text=\"&#xf104;\" class=\"fas head h2\" style=\"padding-left: 10; padding-right: 10;\" (tap)=\"previousMonth()\" *ngIf=\"hidePrev==false\"></Label>\n                </StackLayout>\n                <StackLayout>\n                    <Label text=\"{{currMonth | uppercase}}\" class=\"head h2\"></Label>\n                </StackLayout>\n                <StackLayout>\n                    <Label text=\"&#xf105;\" class=\"fas head h2\" style=\"padding-left: 10; padding-right: 10;\" (tap)=\"nextMonth()\" *ngIf=\"hideNext==false\"></Label>\n                    <Label text=\" \" class=\"fas head h2\" *ngIf=\"hideNext==true\"></Label>\n                </StackLayout>\n            </FlexboxLayout>\n            <FlexboxLayout row=\"2\" col=\"0\" (swipe)=\"swipeAction($event)\">\n                <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*,*,*,*,*,*,*\">\n                    <Label *ngFor=\"let day of weekDays; let i = index\" [text]=\"day |uppercase\" row=\"0\" [col]=\"i\" class=\"centerAl headDays\">\n                    </Label>\n                    <Label *ngFor=\"let eDay of days\" [text]=\"eDay.dateOfMonth\" [row]=\"eDay.row\" [col]=\"eDay.dayOfMonth\"\n                        class=\"bItems centerAl\" [ngStyle]=\"{ 'background' : eDay.disabled? '#9999ff' : eDay.isToday?'blue':'white', 'opacity' : eDay.disabled? '0.3':'1', 'color' : eDay.isToday?'white':'black' }\"\n                        (tap)=\"showOptions(eDay.dateOfMonth, eDay.disabled)\">\n                    </Label>\n                </GridLayout>\n            </FlexboxLayout>\n        </GridLayout>\n    </FlexboxLayout>\n</AbsoluteLayout>\n"

/***/ }),

/***/ "./app/home/monthly/monthly.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyComponent", function() { return MonthlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/Data/data.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);





var MonthlyComponent = /** @class */ (function () {
    function MonthlyComponent(page, data, router) {
        this.page = page;
        this.data = data;
        this.router = router;
        this.weekDays = this.data.weekDays;
        this.dates = new Date();
        this.days = [];
        this.classObj = { options: false };
        this.optionShow = { optionMenuAni: false };
        this.hidePrev = false;
        this.hideNext = false;
        this.yearDDShow = false;
    }
    MonthlyComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.years = Object.keys(this.data.getData());
        //console.log(this.years);
        this.currYear = this.dates.getFullYear().toString();
        this.currMonth = this.data.months[this.dates.getMonth()];
        this.currShortDate = this.dates.getDate().toString();
        if (this.data.months.indexOf(this.currMonth) == 0)
            this.hidePrev = true;
        if (this.data.months.indexOf(this.currMonth) == 11)
            this.hideNext = true;
        console.log(this.currYear + "" + this.currMonth + "" + this.currShortDate);
        this.days = this.createMonthDaysArray(this.data.getData()[this.currYear.toString()][this.currMonth.toString()]);
        //console.log(this.days);
        console.log("Monthly: oninit called");
        //console.log(this.days["26"]);
    };
    MonthlyComponent.prototype.createMonthDaysArray = function (MonthObj) {
        var arrayToPop = [];
        var totalDates = Object.keys(MonthObj).length;
        for (var i = 1; i <= totalDates; i++) {
            arrayToPop.push(MonthObj[i][0]);
        }
        return arrayToPop;
    };
    MonthlyComponent.prototype.onChangeYear = function (index) {
        this.currYear = this.years[index];
        this.days = this.createMonthDaysArray(this.data.getData()[this.currYear.toString()][this.currMonth.toString()]);
        this.yearDDShow = false;
    };
    MonthlyComponent.prototype.changeYear = function () {
        this.yearDDShow = true;
    };
    MonthlyComponent.prototype.previousMonth = function () {
        var curr = this.data.months.indexOf(this.currMonth);
        if (curr > 0) {
            this.currMonth = this.data.months[curr - 1];
            this.days = this.createMonthDaysArray(this.data.getData()[this.currYear.toString()][this.currMonth.toString()]);
        }
        else if (curr == 0) {
            /*let prevYear = parseInt(this.currYear.toString())-1;
            if(this.data.getData()[prevYear]){
                this.currYear = prevYear.toString();
            }*/
        }
        this.hidePrev = (curr == 1) ? true : false;
        this.hideNext = (curr <= 11) ? false : true;
        //console.log(this.days);
    };
    MonthlyComponent.prototype.nextMonth = function () {
        var curr = this.data.months.indexOf(this.currMonth);
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
    };
    MonthlyComponent.prototype.showOptions = function (date, isDisabled) {
        if (!isDisabled) {
            this.classObj.options = true;
            this.optionShow.optionMenuAni = true;
            console.log("Monthly....." + date);
            this.selectedDate = new Date(parseInt(this.currYear.toString()), this.data.months.indexOf(this.currMonth), parseInt(date)).toDateString();
        }
    };
    MonthlyComponent.prototype.close = function () {
        this.classObj.options = false;
        this.optionShow.optionMenuAni = false;
    };
    MonthlyComponent.prototype.view = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(["/add/view"], {
                queryParams: { date: _this.selectedDate, target: 1 },
                clearHistory: true,
            });
        }, 0);
    };
    MonthlyComponent.prototype.edit = function () {
        var _this = this;
        var d = this.selectedDate.split(" ");
        var dateChosen = new Date(parseInt(d[3]), this.data.months.indexOf(d[1].toLowerCase()), parseInt(d[2]));
        var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        //console.log(dateChosen);
        //console.log(today);
        if ((dateChosen.getTime() >= today.getTime())) {
            setTimeout(function () {
                _this.router.navigate(["/add/edit"], {
                    queryParams: { date: _this.selectedDate, target: 1 },
                    clearHistory: true,
                });
            }, 0);
        }
        else {
            _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
                message: "Cannot make changes in back dates!!",
                title: "Oops!",
                okButtonText: "OK"
            });
        }
    };
    MonthlyComponent.prototype.add = function () {
        var _this = this;
        var d = this.selectedDate.split(" ");
        var dateChosen = new Date(parseInt(d[3]), this.data.months.indexOf(d[1].toLowerCase()), parseInt(d[2]));
        var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        if (dateChosen.getTime() >= today.getTime()) {
            setTimeout(function () {
                _this.router.navigate(["/add"], {
                    queryParams: { date: _this.selectedDate, target: 1 },
                    clearHistory: true,
                });
            }, 0);
        }
        else {
            _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
                message: "Cannot make changes in back dates!!",
                title: "Oops!",
                okButtonText: "OK",
            });
        }
    };
    MonthlyComponent.prototype.swipeAction = function (event) {
        //console.log(event);
    };
    MonthlyComponent.prototype.ngOnDestroy = function () {
        //not working
        this.close();
        console.log("Monthly destroy called");
    };
    MonthlyComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: _Data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    MonthlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-monthly",
            template: __importDefault(__webpack_require__("./app/home/monthly/monthly.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/home/monthly/monthly.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"],
            _Data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], MonthlyComponent);
    return MonthlyComponent;
}());



/***/ }),

/***/ "./app/task-form/task-form.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n    margin-top: 25;\n}\n\n.steps{\n    font-size: 19;\n    font-style: italic;\n    font-family: monospace;\n    color: black;\n    margin-left: 10;\n    padding-top: 18;\n    /* border-bottom-color: #007bff;\n    border-bottom-width: 1; */\n}\n\n.input{\n    font-size: 25;\n    font-family: cursive;\n    font-style: italic;\n}\n\n.largeinput{\n    font-size: 45;\n    font-family: cursive;\n    font-style: italic;\n}\n\n.medinput{\n    font-size: 45;\n    font-family: cursive;\n    font-style: italic;\n    border-bottom-color: #007bff;\n}\n\n.medinputLabel{\n    font-size: 45;\n    font-family: cursive;\n    font-style: italic;\n    color: #007bff;\n}\n\n.metricParent{\n    padding: 10;\n}\n\n.metricItems{\n    font-size: 20;\n    font-weight: 900;\n    border-width: 2;\n    border-color: #007bff;\n    border-radius: 15;\n    background: white;\n    color: #007bff;\n    padding: 10;\n    margin-left: 10;\n    margin-right: 10;\n    margin-bottom: 20;\n}\n\n.metricItemsSelected{\n    font-size: 20;\n    font-weight: 900;\n    border-width: 2;\n    border-color: #007bff;\n    border-radius: 15;\n    background: #007bff;\n    color: white;\n    padding: 10;\n    margin-left: 10;\n    margin-right: 10;\n    margin-bottom: 20;\n}\n\n.label_5_1{\n    font-size: 90;\n    color: #007bff;\n}\n\n.label_5_2{\n    font-size: 70;\n    color: #007bff;\n    font-family: cursive;\n    font-style: italic;\n}\n\n.label_5_3{\n    font-size: 16;\n    opacity: 0.5;\n    font-family: cursive;\n    font-style: italic;\n}\n\n.label_5_4{\n    font-size: 35;\n    opacity: 0.5;\n    font-family: cursive;\n    font-style: italic;\n}\n\n@keyframes shake{\n    0% { transform: translateX(0);}\n    15% { transform: translateX(-10);}\n    30% { transform: translateX(10);}\n    45% { transform: translateX(-10);}\n    60% { transform: translateX(10);}\n    75% { transform: translateX(-10);}\n    100% { transform: translateX(0);}\n}\n\n.animate{\n    animation-name: shake;\n    animation-duration: 500ms;\n    animation-fill-mode: both;\n}\n"

/***/ }),

/***/ "./app/task-form/task-form.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"main\">\n    <!-- (tap)=\"doubleCheck()\" -->\n    <GridLayout rows=\"*,8*,3*\" columns=\"*\">\n        <FlexboxLayout row=\"0\" col=\"0\" justifyContent=\"center\" alignItems=\"baseline\">\n            <!-- <Label text=\"{{'Step ' + stepCount + '     '}}\" class=\"steps\"></Label> -->\n            <Label [text]=\"stepArray[stepCount-1]\" class=\"steps\"></Label>\n        </FlexboxLayout>\n        <FlexboxLayout flexDirection=\"column\" justifyContent=\"center\" row=\"1\" col=\"0\">\n            <StackLayout *ngIf=\"stepCount==1\">\n                    <TextView width=\"90%\" height=\"200\" autocorrect=\"false\"\n                        class=\"input\" textAlignment=\"center\"\n                        [(ngModel)]=\"submittedData.task\" [hint]=\"appliedHint[0]\"\n                        [ngStyle]=\"{'opacity':opacity[0]?'0.2':'1'}\"\n                        (focus)=\"changeTaskOpacity(false, 0, 'task')\"\n                        (blur)=\"changeTaskOpacity(true, 0, 'task')\"></TextView>\n                        <!-- (tap)=\"check()\" -->\n            </StackLayout>\n            <StackLayout *ngIf=\"stepCount==2\">\n                <FlexboxLayout flexWrap=\"wrap\" class=\"metricParent\">\n                    <Label *ngFor=\"let item of metricArray; let i = index;\"\n                        [text]=\"item\" (tap)=\"metricSelected(i)\" [ngClass]=\"metricItemClass[i]\"></Label>\n                </FlexboxLayout>\n            </StackLayout>\n            <StackLayout *ngIf=\"stepCount==3\">\n                <TextField [hint]=\"appliedHint[1]\"\n                    autocorrect=\"false\" textAlignment=\"center\"\n                    class=\"largeinput\" width=\"200\" height=\"100\"\n                    [(ngModel)]=\"submittedData.taskedQty\"\n                    [ngStyle]=\"{'opacity':opacity[1]?'0.2':'1'}\"\n                    (focus)=\"changeTaskOpacity(false, 1, 'taskedQty')\"\n                    (blur)=\"changeTaskOpacity(true, 1, 'taskedQty')\"></TextField>\n            </StackLayout>\n            <StackLayout *ngIf=\"stepCount==4\">\n                <GridLayout rows=\"auto\" columns=\"3*,*\" width=\"300\">\n                    <FlexboxLayout justifyContent=\"space-around\" row=\"0\" col=\"0\">\n                        <TextField [hint]=\"appliedHint[2]\" autocorrect=\"false\" textAlignment=\"center\" class=\"medinput\" width=\"70\" height=\"60\"\n                                [(ngModel)]=\"hour\" maxLength=\"2\"\n                                [ngStyle]=\"{'opacity':opacity[2]?'0.2':'1'}\"\n                                (focus)=\"focusHour()\"\n                                (blur)=\"blurHour()\"></TextField>\n                                <!-- (focus)=\"changeTaskOpacity(false, 2, 'remTime')\"\n                                (blur)=\"changeTimeOpacity(2)\"></TextField> -->\n                        <Label text=\":\" class=\"medinputLabel\"></Label>\n                        <TextField [hint]=\"appliedHint[3]\" autocorrect=\"false\" textAlignment=\"center\" class=\"medinput\" width=\"70\" height=\"60\"\n                                [(ngModel)]=\"minutes\" maxLength=\"2\"\n                                [ngStyle]=\"{'opacity':opacity[3]?'0.2':'1'}\"\n                                (focus)=\"focusMin()\"\n                                (blur)=\"blurMin()\"></TextField>\n                                <!-- (focus)=\"changeTaskOpacity(false, 3, 'remTime')\"\n                                (blur)=\"changeTimeOpacity(3)\"></TextField> -->\n                    </FlexboxLayout>\n                    <FlexboxLayout justifyContent=\"space-around\" row=\"0\" col=\"1\">\n                        <Label [text]=\"timeText\" class=\"medinputLabel\" (tap)=\"changeText()\"></Label>\n                    </FlexboxLayout>\n                </GridLayout>\n            </StackLayout>\n            <StackLayout *ngIf=\"stepCount==5\">\n                <FlexboxLayout flexDirection=\"column\" justifyContent=\"center\" alignItems=\"center\">\n                    <Label text=\"&#xf6ec;\" class=\"fas label_5_1\"></Label>\n                    <Label text=\"Awesome!!!\" class=\" label_5_2\" style=\"margin-bottom: 25;\"></Label>\n                    <Label text=\"Let's create this task by cliking green button.\" class=\" label_5_3\"></Label>\n                    <Label text=\"All the Best !\" class=\" label_5_3\"></Label>\n                </FlexboxLayout>\n            </StackLayout>\n        </FlexboxLayout>\n        <GridLayout rows=\"*\" columns=\"*,*\" row=\"2\" col=\"0\">\n            <FlexboxLayout justifyContent=\"center\" row=\"0\" col=\"0\" alignItems=\"center\">\n                <ns-buttons [text]=\"commons['prev']\" [color]=\"commons['white']\" [size]=\"commons['round']\" (tapp)=\"previous($event)\" *ngIf=\"showPrev==true\"></ns-buttons>\n                <ns-buttons [text]=\"commons['close']\" [color]=\"commons['red']\" [size]=\"commons['round']\" (tapp)=\"cancel($event)\" *ngIf=\"stepCount == 1 && isEdit != true\"></ns-buttons>\n            </FlexboxLayout>\n            <FlexboxLayout justifyContent=\"center\" row=\"0\" col=\"1\" alignItems=\"center\">\n                <FlexboxLayout [ngClass]=\"animateObj\" *ngIf=\"showNext==true\">\n                    <ns-buttons [text]=\"commons['next']\" [color]=\"commons['white']\" [size]=\"commons['round']\" (tapp)=\"next($event)\"></ns-buttons>\n                </FlexboxLayout>\n                <ns-buttons [text]=\"commons['check']\" [color]=\"commons['green']\" [size]=\"commons['round']\" (tapp)=\"submit($event)\" *ngIf=\"stepCount == 5\"></ns-buttons>\n            </FlexboxLayout>\n        </GridLayout>\n    </GridLayout>\n</StackLayout>\n"

/***/ }),

/***/ "./app/task-form/task-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-local-notifications/local-notifications.js");
/* harmony import */ var nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/constants.ts");
/* harmony import */ var _Data_communication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/Data/communication.service.ts");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/ui/ui.service.ts");
/* harmony import */ var _Data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/Data/data.service.ts");










var TaskFormComponent = /** @class */ (function () {
    function TaskFormComponent(page, router, bus, active, screen, months) {
        this.page = page;
        this.router = router;
        this.bus = bus;
        this.active = active;
        this.screen = screen;
        this.months = months;
        // stepCount: number = 1;
        this.stepCount = 1;
        this.showPrev = false;
        this.showNext = true;
        this.stepArray = [
            "What's the task ?",
            "How would you measure it ?",
            "Give yourself a target ?",
            "Wanna set a reminder ?",
            "Are you sure about this ?",
        ];
        this.hint = [
            "I wanna walk..." + "\n" + ".......",
            "15...?",
            "03",
            "15",
        ];
        this.taskHint = this.hint[0];
        this.targetHint = this.hint[1];
        this.hourHint = this.hint[2];
        this.minHint = this.hint[3];
        this.metricArray = [];
        this.timeTextArray = ["AM", "PM"];
        this.timeText = this.timeTextArray[0];
        this.metricItemClass = [];
        this.submittedData = {
            task: "",
            taskedQty: "",
            compQyt: "--",
            metric: "",
            remTime: "",
            done: false,
            notificationId: "",
        };
        this.hour = "";
        this.minutes = "";
        this.opacity = [true, true, true, true];
        this.preventDeafult = false;
        this.dismiss = false;
        this.animateObj = { animate: false };
        this.isEdit = false;
        this.action = "";
        this.appliedHint = this.hint.slice();
    }
    TaskFormComponent.prototype.ngOnInit = function () {
        this.forDate = this.active.snapshot.queryParams["for"];
        this.target = this.active.snapshot.queryParams["target"];
        this.page.actionBarHidden = true;
        this.commons = _constants__WEBPACK_IMPORTED_MODULE_6__["constants"];
        this.metricArray = _constants__WEBPACK_IMPORTED_MODULE_6__["metrics"];
        for (var i = 0; i < this.metricArray.length; i++) {
            this.metricItemClass.push({
                metricItems: true,
                metricItemsSelected: false,
            });
        }
        this.action = this.active.snapshot.params["action"];
        if (this.action == "edit") {
            this.isEdit = true;
            this.submittedData = JSON.parse(this.active.snapshot.queryParams["datas"]);
            this.metricSelected(this.metricArray.indexOf(this.submittedData.metric));
            var time = this.submittedData.remTime.split(" ");
            this.hour = time[0].split(":")[0] || "";
            this.minutes = time[0].split(":")[1] || "";
            this.timeText = time[1] || this.timeTextArray[0];
            this.opacity = [false, false, false, false];
            if (this.hour == "" || this.minutes == "") {
                this.opacity[2] = true;
                this.opacity[3] = true;
            }
        }
    };
    TaskFormComponent.prototype.previous = function (event) {
        if (this.stepCount >= 2)
            this.stepCount = this.stepCount - 1;
        if (this.stepCount > 1)
            this.showPrev = true;
        else
            this.showPrev = false;
        if (this.stepCount <= 4)
            this.showNext = true;
        else
            this.showNext = false;
    };
    TaskFormComponent.prototype.next = function (event) {
        var _this = this;
        var anim = false;
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
            setTimeout(function () {
                _this.animateObj.animate = false;
            }, 550);
            return;
        }
        if (this.hour.trim() != "" && this.minutes.trim() != "") {
            if (this.stepCount == 4) {
                this.submittedData.remTime =
                    this.hour + ":" + this.minutes + " " + this.timeText;
            }
        }
        else {
            this.submittedData.remTime = "";
        }
        if (this.stepCount <= 5)
            this.stepCount = this.stepCount + 1;
        if (this.stepCount < 5)
            this.showNext = true;
        else
            this.showNext = false;
        if (this.stepCount >= 2)
            this.showPrev = true;
        else
            this.showPrev = false;
    };
    TaskFormComponent.prototype.changeText = function () {
        if (this.timeTextArray.indexOf(this.timeText) == 0)
            this.timeText = this.timeTextArray[1];
        else
            this.timeText = this.timeTextArray[0];
    };
    TaskFormComponent.prototype.cancel = function (event) {
        this.router.back();
    };
    TaskFormComponent.prototype.submit = function (event) {
        var _this = this;
        //console.log(this.submittedData);
        _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["confirm"]({
            message: "Wanna review before adding ?",
            title: "Add Task",
            okButtonText: "edit" == this.action ? "Update" : "Add",
            cancelButtonText: "Review",
        })
            .then(function (success) {
            if (success) {
                if (_this.notifyLogic())
                    _this.submitConfirm(_this.action);
            }
            else {
                _this.stepCount = 1;
                _this.showPrev = false;
                _this.showNext = true;
            }
            _this.screen.changeUI();
        });
    };
    TaskFormComponent.prototype.submitConfirm = function (action) {
        this.bus.dataBus.next(this.submittedData);
        if ("edit" == action) {
            this.router.navigate(["/add/edit"], {
                queryParams: { date: this.forDate, target: this.target },
                clearHistory: true,
            });
        }
        else {
            this.router.navigate(["/add"], {
                queryParams: { date: this.forDate, target: this.target },
                clearHistory: true,
            });
        }
    };
    TaskFormComponent.prototype.metricSelected = function (index) {
        for (var i = 0; i < this.metricArray.length; i++) {
            this.metricItemClass[i].metricItems = true;
            this.metricItemClass[i].metricItemsSelected = false;
        }
        this.metricItemClass[index].metricItems = false;
        this.metricItemClass[index].metricItemsSelected = true;
        this.submittedData.metric = this.metricArray[index];
    };
    TaskFormComponent.prototype.changeTaskOpacity = function (flag, index, inFor) {
        var inn = 0;
        if (!flag) {
            this.appliedHint[index] = "";
            this.opacity[index] = false;
        }
        else {
            if (inFor != "remTime") {
                if (this.submittedData[inFor].length == 0) {
                    this.appliedHint[index] = this.hint[index];
                    this.opacity[index] = true;
                }
                else {
                    this.appliedHint[index] = "";
                    this.opacity[index] = false;
                }
            }
            else {
            }
        }
    };
    TaskFormComponent.prototype.focusHour = function () {
        this.appliedHint[2] = "";
        this.opacity[2] = false;
    };
    TaskFormComponent.prototype.focusMin = function () {
        this.appliedHint[3] = "";
        this.opacity[3] = false;
    };
    TaskFormComponent.prototype.blurHour = function () {
        if (this.hour.length == 0) {
            this.appliedHint[2] = this.hint[2];
            this.opacity[2] = true;
        }
        if (parseInt(this.hour.toString()) > 12) {
            this.hour = (parseInt(this.hour.toString()) - 12).toString();
            this.changeText();
        }
    };
    TaskFormComponent.prototype.blurMin = function () {
        if (this.minutes.length == 0) {
            this.appliedHint[3] = this.hint[3];
            this.opacity[3] = true;
        }
        if (parseInt(this.minutes.toString()) > 60) {
            this.minutes = "00";
        }
    };
    TaskFormComponent.prototype.check = function () {
        //console.log("worked");
        this.preventDeafult = true;
    };
    TaskFormComponent.prototype.doubleCheck = function () {
        if (!this.preventDeafult) {
            //console.log("again");
            this.dismiss = true;
        }
        this.preventDeafult = false;
    };
    TaskFormComponent.prototype.setNotification = function (timeDelay) {
        var _this = this;
        nativescript_local_notifications__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"].schedule([
            {
                title: "Hey! Forgot something?",
                body: this.submittedData.task.toString(),
                color: new tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Color"](0x99b3ff),
                badge: 1,
                icon: 'res://icon1',
                at: new Date(timeDelay),
            },
        ]).then(function (scheduleIds) {
            console.log("Generated Id: " + JSON.stringify(scheduleIds[0]));
            _this.submittedData.notificationId = scheduleIds[0];
        }, function (error) {
            console.log("error occurred: " + error);
        });
    };
    TaskFormComponent.prototype.getCurrentTime = function () {
        //console.log(new Date().getTime());
        return new Date().getTime();
    };
    TaskFormComponent.prototype.getSchedTime = function (timeString) {
        var t = timeString.split(" ");
        console.log(new Date().toString());
        console.log(new Date(parseInt(t[3]), this.months.months.indexOf(t[1].toLowerCase()), parseInt(t[2]), this.getComparableTime(this.hour.toString(), this.timeText), parseInt(this.minutes.toString())));
        console.log(new Date(parseInt(t[3]), this.months.months.indexOf(t[1].toLowerCase()), parseInt(t[2]), this.getComparableTime(this.hour.toString(), this.timeText), parseInt(this.minutes.toString())).getTime());
        return new Date(parseInt(t[3]), this.months.months.indexOf(t[1].toLowerCase()), parseInt(t[2]), this.getComparableTime(this.hour.toString(), this.timeText), parseInt(this.minutes.toString())).getTime();
    };
    TaskFormComponent.prototype.getComparableTime = function (hour, timeText) {
        if (timeText == "AM") {
            if (hour == "12")
                return 0;
            else
                return parseInt(hour);
        }
        else
            return parseInt(hour) + 12;
    };
    TaskFormComponent.prototype.notifyLogic = function () {
        if (this.hour != "" &&
            parseInt(this.hour.toString()) != 0 &&
            this.minutes != "") {
            //console.log(new Date().toLocaleTimeString());
            //let currTimeText = new Date().toLocaleTimeString().split(" ")[1];
            var currTime = new Date()
                .toLocaleTimeString()
                .split(" ")[0]
                .split(":");
            var h = currTime[0];
            var m = currTime[1];
            //let dnow = this.getCurrentTime();
            var schedTime = this.getSchedTime(this.forDate);
            var thisHour = this.getComparableTime(this.hour.toString(), this.timeText);
            if (thisHour > parseInt(h)) {
                //console.log("1.." + schedTime); // - dnow
                this.setNotification(schedTime); // - dnow
            }
            else if (thisHour == parseInt(h)) {
                if (parseInt(this.minutes.toString()) > parseInt(m)) {
                    //console.log("2.." + schedTime); // - dnow
                    this.setNotification(schedTime); // - dnow
                }
                else {
                    //console.log("Gotten into 2");
                    _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
                        title: 'Scheduling Failed!',
                        message: 'Cannot schedule task for past time.' + '\n' + 'Please enter a advance time.',
                        okButtonText: 'Ok'
                    });
                    return false;
                }
            }
            else {
                _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
                    title: "Scheduling Failed!",
                    message: 'Cannot schedule task for past time.' + '\n' + 'Please enter a advance time.',
                    okButtonText: "Ok",
                });
                return false;
            }
            return true;
        }
        else {
            _nativescript_core_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
                title: "Schedular",
                message: 'No scheduling assigned!',
                okButtonText: "Ok",
            });
            return true;
        }
    };
    TaskFormComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] },
        { type: _Data_communication_service__WEBPACK_IMPORTED_MODULE_7__["CommunicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"] },
        { type: _Data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }
    ]; };
    TaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-task-form",
            template: __importDefault(__webpack_require__("./app/task-form/task-form.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/task-form/task-form.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"],
            _Data_communication_service__WEBPACK_IMPORTED_MODULE_7__["CommunicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"],
            _Data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]])
    ], TaskFormComponent);
    return TaskFormComponent;
}());



/***/ }),

/***/ "./app/tasks/tasks.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n    width: 90%;\n    height: 120;\n    margin-top: 5;\n    margin-bottom: 5;\n    /* border-width: 1; */\n    border-color: transparent;\n    padding: 3;\n    font-size: 20;\n    color: blue;\n}\n\n.blackText{\n    color: black;\n}\n"

/***/ }),

/***/ "./app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <Button text=\"tasks works!\" class=\"btn btn-primary\"></Button> -->\n<!-- androidElevation=\"4\" -->\n<GridLayout rows=\"70*, 30*\" columns=\"75*, 25*\" [ngClass]=\"{done: items.done}\"\n    class=\"main\">\n    <!-- <FlexboxLayout row=\"0\" col=\"0\" justifyContent=\"center\"> -->\n    <FlexboxLayout row=\"0\" col=\"0\">\n        <ScrollView>\n            <Label\n                [text]=\"items.task\"\n                textWrap=\"true\" style=\"font-size: 20;\">\n            </Label>\n        </ScrollView>\n    </FlexboxLayout>\n    <FlexboxLayout flexDirection=\"column\" row=\"0\" col=\"1\" class=\"alignText\">\n        <GridLayout rows=\"*\" columns=\"*,*\">\n            <Label [text]=\"items.taskedQty\" class=\"blackText\" row=\"0\" col=\"0\"></Label>\n            <Label [text]=\"items.metric\" class=\"blackText\" row=\"0\" col=\"1\"></Label>\n        </GridLayout>\n        <GridLayout rows=\"*\" columns=\"*,*\">\n            <Label [text]=\"items.compQyt\" row=\"0\" col=\"0\"></Label>\n            <Label [text]=\"items.metric\" row=\"0\" col=\"1\"></Label>\n        </GridLayout>\n    </FlexboxLayout>\n    <FlexboxLayout row=\"1\" col=\"0\" colSpan=\"2\" justifyContent=\"center\" alignItems=\"center\">\n        <Label text=\"&#xf017;\" class=\"far\" style=\"margin-top: 3;\"></Label>\n        <Label text=\"{{items.remTime || '--:--'}}\" style=\"margin-left: 10;\" class=\"blackText\"></Label>\n    </FlexboxLayout>\n</GridLayout>\n"

/***/ }),

/***/ "./app/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('items'),
        __metadata("design:type", Object)
    ], TasksComponent.prototype, "items", void 0);
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-tasks",
            template: __importDefault(__webpack_require__("./app/tasks/tasks.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/tasks/tasks.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./app/ui/buttons/buttons.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\n    width: 80%;\n    border-radius: 50;\n    border-width: 1;\n    background: linear-gradient(90deg, #6997c9, #007bff, #6997c9);\n    color: white;\n}\n\n.btn-red{\n    width: 80%;\n    border-radius: 50;\n    border-width: 1;\n    background: red;\n    color: white;\n}\n\n.btn-green{\n    width: 80%;\n    border-radius: 50;\n    border-width: 1;\n    background: green;\n    color: white;\n}\n\n.dual-btn{\n    width: 40%;\n    border-radius: 50;\n    border-width: 1;\n    background: linear-gradient(90deg, #bcd4ee, #007bff, #bcd4ee);\n    color: white;\n    font-size: 15;\n}\n\n.dual-btn-red{\n    width: 40%;\n    border-radius: 50;\n    border-width: 1;\n    background: red;\n    color: white;\n    font-size: 15;\n}\n\n.dual-btn-green{\n    width: 40%;\n    border-radius: 50;\n    border-width: 1;\n    background: green;\n    color: white;\n    font-size: 15;\n}\n\n.tripple-btn{\n    width: 30%;\n    border-radius: 50;\n    border-width: 1;\n    background: linear-gradient(90deg, #bcd4ee, #007bff, #bcd4ee);\n    color: white;\n    font-size: 15;\n}\n\n.tripple-btn-red{\n    width: 30%;\n    border-radius: 50;\n    border-width: 1;\n    background: red;\n    color: white;\n    font-size: 15;\n}\n\n.tripple-btn-green{\n    width: 30%;\n    border-radius: 50;\n    border-width: 1;\n    background: green;\n    color: white;\n    font-size: 15;\n}\n\n.btn_round_blue{\n    width: 50;\n    height: 50;\n    border-radius: 50;\n    border-width: 1;\n    background: #007bff;\n    color: white;\n    font-size: 25;\n    font-weight: bold;\n}\n\n.btn_round_red{\n    width: 50;\n    height: 50;\n    border-radius: 50;\n    border-width: 1;\n    background: red;\n    color: white;\n    font-size: 25;\n    font-weight: bold;\n}\n\n.btn_round_green{\n    width: 50;\n    border-radius: 50;\n    border-width: 1;\n    background: palegreen;\n    color: white;\n    font-size: 25;\n    font-weight: bold;\n}\n\n.btn_round_white{\n    width: 50;\n    height: 50;\n    border-radius: 50;\n    border-width: 1;\n    background: white;\n    color: #007bff;\n    font-size: 25;\n    font-weight: bold;\n}\n"

/***/ }),

/***/ "./app/ui/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"btn\" *ngIf=\"blueFull==true\"></Button>\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"btn-red\" *ngIf=\"redFull==true\"></Button>\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"btn-green\" *ngIf=\"greenFull==true\"></Button>\n\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"dual-btn\" *ngIf=\"blueHalf==true\"></Button>\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"dual-btn-red\" *ngIf=\"redHalf==true\"></Button>\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"dual-btn-green\" *ngIf=\"greenHalf==true\"></Button>\n\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"tripple-btn\" *ngIf=\"blueQtr==true\"></Button>\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"tripple-btn-red\" *ngIf=\"redQtr==true\"></Button>\n<Button [text]=\"text\" (tap)=\"onTap()\" androidElevation=\"0\" class=\"tripple-btn-green\" *ngIf=\"greenQtr==true\"></Button>\n\n<Button text=\"&#xf00d;\" (tap)=\"onTap()\" androidElevation=\"4\" class=\"fas\" [ngClass]=\"roundBtnClass\"\n    *ngIf=\"roundBtnClose==true\"></Button>\n<Button text=\"&#xf00c;\" (tap)=\"onTap()\" androidElevation=\"4\" class=\"fas\" [ngClass]=\"roundBtnClass\"\n    *ngIf=\"roundBtnCheck==true\"></Button>\n<Button text=\"&#xf067;\" (tap)=\"onTap()\" androidElevation=\"4\" class=\"fas\" [ngClass]=\"roundBtnClass\"\n    *ngIf=\"roundBtnPlus==true\"></Button>\n<Button text=\"&#xf053;\" (tap)=\"onTap()\" androidElevation=\"4\" class=\"fas\" [ngClass]=\"roundBtnClass\"\n    *ngIf=\"roundBtnBack==true\"></Button>\n<Button text=\"&#xf054;\" (tap)=\"onTap()\" androidElevation=\"4\" class=\"fas\" [ngClass]=\"roundBtnClass\"\n    *ngIf=\"roundBtnNext==true\"></Button>\n"

/***/ }),

/***/ "./app/ui/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.tapp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blueFull = false;
        this.redFull = false;
        this.greenFull = false;
        this.blueHalf = false;
        this.redHalf = false;
        this.greenHalf = false;
        this.blueQtr = false;
        this.redQtr = false;
        this.greenQtr = false;
        this.roundBtnClose = false;
        this.roundBtnBack = false;
        this.roundBtnNext = false;
        this.roundBtnCheck = false;
        this.roundBtnPlus = false;
        this.roundBtnClass = {
            btn_round_blue: false,
            btn_round_white: false,
            btn_round_red: false,
            btn_round_green: false,
        };
    }
    ButtonsComponent.prototype.ngOnInit = function () {
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
        }
        else if ("double" == this.size) {
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
        }
        else if ("cent" == this.size) {
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
        }
        else if ("round" == this.size) {
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
    };
    ButtonsComponent.prototype.onTap = function () {
        this.tapp.emit("back");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonsComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonsComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonsComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "tapp", void 0);
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-buttons",
            template: __importDefault(__webpack_require__("./app/ui/buttons/buttons.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/ui/buttons/buttons.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./app/ui/side-drawer/side-drawer.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n    background: #007bff;\n}\n\n.header{\n  /* font-size: 25; */\n  color: white;\n  text-align: center;\n  padding-top: 0;\n  /* margin-top: -20; */\n}\n\n.mHead{\n  height: 50;\n  margin-top: 0;\n}\n"

/***/ }),

/***/ "./app/ui/side-drawer/side-drawer.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"main mHead\">\n    <GridLayout rows=\"auto\" columns=\"30,*,30\">\n        <Label text=\"&#xf039;\" class=\"fas header h2\" row=\"0\" col=\"0\" (tap)=\"toggleMenu()\"></Label>\n        <Label text=\"Home\" class=\"header h2\" row=\"0\" col=\"1\"></Label>\n        <!-- <Label text=\"x\" class=\"fas header h2\" row=\"0\" col=\"2\"></Label> -->\n        <Label text=\"\" class=\"fas header h2\" row=\"0\" col=\"2\"></Label>\n    </GridLayout>\n</ActionBar>\n"

/***/ }),

/***/ "./app/ui/side-drawer/side-drawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideDrawerComponent", function() { return SideDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/ui/ui.service.ts");


var SideDrawerComponent = /** @class */ (function () {
    function SideDrawerComponent(ui) {
        this.ui = ui;
    }
    SideDrawerComponent.prototype.ngOnInit = function () {
    };
    SideDrawerComponent.prototype.toggleMenu = function () {
        this.ui.toggleDrawer();
    };
    SideDrawerComponent.ctorParameters = function () { return [
        { type: _ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"] }
    ]; };
    SideDrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-side-drawer',
            template: __importDefault(__webpack_require__("./app/ui/side-drawer/side-drawer.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/ui/side-drawer/side-drawer.component.css")).default]
        }),
        __metadata("design:paramtypes", [_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], SideDrawerComponent);
    return SideDrawerComponent;
}());



/***/ }),

/***/ "./app/ui/ui.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");


var UiService = /** @class */ (function () {
    function UiService() {
        this._drawerState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._fullMode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    Object.defineProperty(UiService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiService.prototype, "fullMode", {
        get: function () {
            return this._fullMode.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UiService.prototype.toggleDrawer = function () {
        this._drawerState.next(null);
    };
    UiService.prototype.changeUI = function () {
        this._fullMode.next(null);
    };
    UiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var _nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(_nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9EYXRhL2NvbW11bmljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvRGF0YS9kYXRhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkZC10YXNrcy9hZGQtdGFza3MuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXRhc2tzL2FkZC10YXNrcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRkLXRhc2tzL2FkZC10YXNrcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvZGFpbHkvZGFpbHkuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9kYWlseS9kYWlseS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9kYWlseS9kYWlseS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvbW9udGhseS9tb250aGx5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvbW9udGhseS9tb250aGx5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL21vbnRobHkvbW9udGhseS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VpL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC91aS9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VpL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VpL3NpZGUtZHJhd2VyL3NpZGUtZHJhd2VyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VpL3NpZGUtZHJhd2VyL3NpZGUtZHJhd2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC91aS9zaWRlLWRyYXdlci9zaWRlLWRyYXdlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3VpL3VpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxt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a0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJGb250IEF3ZXNvbWUgNSBGcmVlLCBmYS1yZWd1bGFyLTQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiRm9udCBBd2Vzb21lIDUgQnJhbmRzLCBmYS1icmFuZHMtNDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJGb250IEF3ZXNvbWUgNSBGcmVlLCBmYS1zb2xpZC05MDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjkwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlTWVudUl0ZW1zXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaWRlTWVudVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtYmxlbmQtbW9kZVwiLFwidmFsdWVcIjpcInNvZnQtbGlnaHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwibGluZWFyLWdyYWRpZW50KDk1ZGVnLCAjMDA3YmZmLCAjNWM5MmNjKVwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgcGFkZGluZy10b3A6IDUwOyBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGVzdFJlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJ0b21hdG9cIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGVzdFllbGxvd1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJ5ZWxsb3dcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGVzdEdyZWVuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcImdyZWVuXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmF1dGhvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxpXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidGhpc3RsZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hbGlnblRleHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRvbmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2Q4ZmZjY1wifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2RhdGFCdXMgPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0IGRhdGFCdXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFCdXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIHJlbW92ZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi9kYXRhXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RvcmU6IHt9ID0ge307XG4gICAgZGF0ZVN0cjogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbW9udGhzOiBTdHJpbmdbXSA9IFtcbiAgICAgICAgXCJqYW5cIixcbiAgICAgICAgXCJmZWJcIixcbiAgICAgICAgXCJtYXJcIixcbiAgICAgICAgXCJhcHJcIixcbiAgICAgICAgXCJtYXlcIixcbiAgICAgICAgXCJqdW5cIixcbiAgICAgICAgXCJqdWxcIixcbiAgICAgICAgXCJhdWdcIixcbiAgICAgICAgXCJzZXBcIixcbiAgICAgICAgXCJvY3RcIixcbiAgICAgICAgXCJub3ZcIixcbiAgICAgICAgXCJkZWNcIixcbiAgICBdO1xuICAgIHdlZWtEYXlzOiBBcnJheTxTdHJpbmc+ID0gW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXREYXRhU3RydWN0dXJlKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiMS4uLi4uXFxuXCIrZ2V0U3RyaW5nKFwic3RvcmVcIikpO1xuICAgICAgICBpZiAoIWdldFN0cmluZyhcInN0b3JlXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhc2ljU3RydWN0dXJlKHRoaXMuZGF0ZVN0ci5nZXRGdWxsWWVhcigpLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFzaWNTdHJ1Y3R1cmUodGhpcy5kYXRlU3RyLmdldEZ1bGxZZWFyKCksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJhc2ljU3RydWN0dXJlKHllYXI6IG51bWJlciwgaXNGaXJzdDogYm9vbGVhbikge1xuICAgICAgICBsZXQgaXNZZWFyTnVsbCA9IHRydWU7XG4gICAgICAgIGlmICghaXNGaXJzdCl7XG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gZ2V0U3RyaW5nKFwic3RvcmVcIilcbiAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwic3RvcmVcIikpXG4gICAgICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCIyLi4uLi5cIit0aGlzLnN0b3JlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIjMuLi4uLlwiK3RoaXMuc3RvcmVbeWVhcl0pO1xuICAgICAgICBpZiAodGhpcy5zdG9yZSl7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZVt5ZWFyXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlW3llYXJdID0ge307XG4gICAgICAgICAgICAgICAgaXNZZWFyTnVsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGlzWWVhck51bGwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCI0Li4uLi5cIitpc1llYXJOdWxsKTtcbiAgICAgICAgaWYoaXNZZWFyTnVsbCl7XG4gICAgICAgICAgICBsZXQgaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxEYXlzID0gbmV3IERhdGUoeWVhciwgaSArIDEsIDApLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlW3llYXJdW3RoaXMubW9udGhzW2ldXSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDE7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0b3RhbERheXM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh5ZWFyLCBpLCBqKS50b0RhdGVTdHJpbmcoKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3RyaW5nKFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZVt5ZWFyXVt0aGlzLm1vbnRoc1tpXV1bal0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZVt5ZWFyXVt0aGlzLm1vbnRoc1tpXV1bal0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2ZNb250aDogaixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU9mTW9udGg6IHRoaXMuZ2V0RGF5T2ZXZWVrKHllYXIsIGksIGopLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25JZDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXREYXlPZldlZWsoeWVhciwgaSwgaikgPT0gNikgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCI1Li4uLi4uLlwiK0pTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUpKTtcbiAgICAgICAgICAgIC8vc2V0U3RyaW5nKFwic3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZSkpO1xuICAgICAgICAgICAgdGhpcy5zZXRVcGRhdGVkRGF0YSh0aGlzLnN0b3JlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERheU9mV2Vlayh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcikge1xuICAgICAgICBsZXQgZmlyc3RkYXRlRGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUpLmdldERheSgpO1xuICAgICAgICByZXR1cm4gZmlyc3RkYXRlRGF5O1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIC8vcmV0dXJuIHRoaXMuc3RvcmU7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGdldFN0cmluZyhcInN0b3JlXCIpKTtcbiAgICB9XG4gICAgc2V0VXBkYXRlZERhdGEoc3RvcmUpe1xuICAgICAgICBzZXRTdHJpbmcoXCJzdG9yZVwiLCBKU09OLnN0cmluZ2lmeShzdG9yZSkpO1xuICAgIH1cblxuICAgIHNldERhdGEoZGF0ZTogRGF0ZSwgZGF0YTogRGF0YVtcInRhc2tTdHJ1Y3R1cmVcIl1bXSkge1xuICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5nZXREYXRhKCk7IC8vSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJzdG9yZVwiKSk7XG4gICAgICAgIGlmICh0aGlzLnN0b3JlW2RhdGUuZ2V0RnVsbFllYXIoKV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhc2ljU3RydWN0dXJlKFxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlICE9IG51bGwgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5nZXREYXRhKCk7IC8vSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJzdG9yZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgLypjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc1tkYXRlLmdldE1vbnRoKCldICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgZGF0ZS5nZXREYXRlICtcbiAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMuc3RvcmVbZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCldW3RoaXMubW9udGhzW2RhdGUuZ2V0TW9udGgoKV1dW1xuICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKVxuICAgICAgICBdID0gZGF0YTtcbiAgICAgICAgLypjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiMi4uLi4uXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVbZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCldW3RoaXMubW9udGhzW2RhdGUuZ2V0TW9udGgoKV1dW1xuICAgICAgICAgICAgICAgICAgICBkYXRlLmdldERhdGUoKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICApOyovXG4gICAgICAgIC8vc2V0U3RyaW5nKFwic3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZSkpO1xuICAgICAgICB0aGlzLnNldFVwZGF0ZWREYXRhKHRoaXMuc3RvcmUpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICByZW1vdmUoXCJzdG9yZVwiKTtcbiAgICAgICAgdGhpcy5zZXREYXRhU3RydWN0dXJlKCk7XG4gICAgfVxuXG4gICAgc2V0SW5zdGFsbGF0aW9uRGF0ZSgpe1xuICAgICAgICBpZihnZXRTdHJpbmcoXCJkYXRlXCIpKXtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJkYXRlXCIsIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VG9kYXkoKXtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHRoaXMuZ2V0RGF0YSgpOyAvL0pTT04ucGFyc2UoZ2V0U3RyaW5nKFwic3RvcmVcIikpO1xuICAgICAgICBsZXQgeWVhcnMgPSBPYmplY3Qua2V5cyh0aGlzLnN0b3JlKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx5ZWFycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8MTI7aisrKXtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGhEYXRhID0gdGhpcy5zdG9yZVt5ZWFyc1tpXV1bdGhpcy5tb250aHNbal1dO1xuICAgICAgICAgICAgICAgIGxldCBkYXlzID0gT2JqZWN0LmtleXModGhpcy5zdG9yZVt5ZWFyc1tpXV1bdGhpcy5tb250aHNbal1dKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXlzKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGs9MTtrPD1kYXlzO2srKylcbiAgICAgICAgICAgICAgICAgICAgbW9udGhEYXRhW2sudG9TdHJpbmcoKV1bMF0uaXNUb2RheSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdG9yZVtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKV1bdGhpcy5tb250aHNbbmV3IERhdGUoKS5nZXRNb250aCgpXV1bbmV3IERhdGUoKS5nZXREYXRlKCkudG9TdHJpbmcoKV0pO1xuICAgICAgICB0aGlzLnN0b3JlW25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpXVt0aGlzLm1vbnRoc1tuZXcgRGF0ZSgpLmdldE1vbnRoKCldXVtuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpXVswXS5pc1RvZGF5ID0gdHJ1ZTtcbiAgICAgICAgLy9zZXRTdHJpbmcoXCJzdG9yZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlKSk7XG4gICAgICAgIHRoaXMuc2V0VXBkYXRlZERhdGEodGhpcy5zdG9yZSk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGFza1N0YXR1cyhpbmRleDogbnVtYmVyLCBzdGF0dXM6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5nZXREYXRhKCk7IC8vSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJzdG9yZVwiKSk7XG4gICAgICAgIC8qY29uc29sZS5sb2codGhpcy5zdG9yZVtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKV1cbiAgICAgICAgICAgICAgICBbdGhpcy5tb250aHNbbmV3IERhdGUoKS5nZXRNb250aCgpXV1cbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoKS5nZXREYXRlKCkudG9TdHJpbmcoKV1baW5kZXhdKTsqL1xuICAgICAgICB0aGlzLnN0b3JlW25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpXVtcbiAgICAgICAgICAgIHRoaXMubW9udGhzW25ldyBEYXRlKCkuZ2V0TW9udGgoKV1cbiAgICAgICAgXVtuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpXVtpbmRleF0uZG9uZSA9IHN0YXR1cztcbiAgICAgICAgLy9zZXRTdHJpbmcoXCJzdG9yZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlKSk7XG4gICAgICAgIHRoaXMuc2V0VXBkYXRlZERhdGEodGhpcy5zdG9yZSk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRMYWJlbHtcXG4gICAgbWFyZ2luLXRvcDogMzU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNTtcXG4gICAgcGFkZGluZy1yaWdodDogMTU7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxufVxcblxcbi5jcm9zc0ZvbnR7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdG9tYXRvO1xcbn1cXG5cXG4uZWRpdEZvbnR7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG5cXG4uZW1wdHlUZXh0e1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcIjkqLDEqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgIDwhLS0gPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVxcXCJmbGV4LWVuZFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjAwZDtcXFwiIGNsYXNzPVxcXCJmYXMgaGVhZExhYmVsXFxcIiAodGFwKT1cXFwiYmFjaygpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxcbiAgICAgICAgPFNjcm9sbFZpZXcgaGVpZ2h0PVxcXCIxMDAlXFxcIiAqbmdJZj1cXFwic2hvd0VtcHR5PT1mYWxzZVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCJhY3Rpb24hPWFjdGlvbkxpc3RbMV1cXFwiPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqXFxcIiBjb2x1bW5zPVxcXCI5MCosMTAqXFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHRlbXBJdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiIGNsYXNzPVxcXCJsaVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bnMtdGFza3MgW2l0ZW1zXT1cXFwiaXRlbVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiICpuZ0lmPVxcXCJpIT0wXFxcIj48L25zLXRhc2tzPlxcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcImNyb3NzRm9udFxcXCIgKm5nSWY9XFxcImkhPTAgJiYgYWN0aW9uPT11bmRlZmluZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDBkO1xcXCIgY2xhc3M9XFxcImZhc1xcXCIgKHRhcCk9XFxcImNsZWFySXRlbShpKVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJlZGl0Rm9udFxcXCIgKm5nSWY9XFxcImkhPTAgJiYgYWN0aW9uPT1hY3Rpb25MaXN0WzBdXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjMwMztcXFwiIGNsYXNzPVxcXCJmYXNcXFwiICh0YXApPVxcXCJlZGl0SXRlbShpKVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCJhY3Rpb249PWFjdGlvbkxpc3RbMV1cXFwiPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHRlbXBJdGVtczsgbGV0IGkgPSBpbmRleDtcXFwiIGNsYXNzPVxcXCJsaVxcXCIgW25nQ2xhc3NdPVxcXCJ7ZG9uZTppdGVtLmRvbmV9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxucy10YXNrcyBbaXRlbXNdPVxcXCJpdGVtXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgKm5nSWY9XFxcImkhPTBcXFwiPjwvbnMtdGFza3M+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cXFwiMTAwJVxcXCIgKm5nSWY9XFxcInNob3dFbXB0eT09dHJ1ZVxcXCI+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImVtcHR5VGV4dFxcXCIgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJOb3RoaW5nIHlldCAhISFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTdGFydCBhZGRpbmcgbm93Li4uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICA8RmxleGJveExheW91dCBzdHlsZT1cXFwicGFkZGluZzogNDtcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPG5zLWJ1dHRvbnMgW3RleHRdPVxcXCJjb21tb25zWydjbG9zZSddXFxcIiBbY29sb3JdPVxcXCJjb21tb25zWydyZWQnXVxcXCIgW3NpemVdPVxcXCJjb21tb25zWydjZW50J11cXFwiICh0YXBwKT1cXFwiYmFjaygkZXZlbnQpXFxcIj48L25zLWJ1dHRvbnM+XFxuICAgICAgICAgICAgPG5zLWJ1dHRvbnMgW3RleHRdPVxcXCJjb21tb25zWydhZGRtb3JlJ11cXFwiIFtjb2xvcl09XFxcImNvbW1vbnNbJ2JsdWUnXVxcXCIgW3NpemVdPVxcXCJjb21tb25zWydjZW50J11cXFwiICh0YXBwKT1cXFwiYWRkVGFza3MoJGV2ZW50KVxcXCI+PC9ucy1idXR0b25zPlxcbiAgICAgICAgICAgIDxucy1idXR0b25zIFt0ZXh0XT1cXFwiY29tbW9uc1snZG9uZSddXFxcIiBbY29sb3JdPVxcXCJjb21tb25zWydncmVlbiddXFxcIiBbc2l6ZV09XFxcImNvbW1vbnNbJ2NlbnQnXVxcXCIgKHRhcHApPVxcXCJkb25lKCRldmVudClcXFwiPjwvbnMtYnV0dG9ucz4gLS0+XFxuXFxuICAgICAgICAgICAgPG5zLWJ1dHRvbnMgW3RleHRdPVxcXCJjb21tb25zWydjbG9zZSddXFxcIiBbY29sb3JdPVxcXCJjb21tb25zWydyZWQnXVxcXCIgW3NpemVdPVxcXCJjb21tb25zWydoYWxmJ11cXFwiICh0YXBwKT1cXFwiYmFjaygkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAqbmdJZj1cXFwiYWN0aW9uPT11bmRlZmluZWRcXFwiPlxcbiAgICAgICAgICAgIDwvbnMtYnV0dG9ucz5cXG4gICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ2FkZG1vcmUnXVxcXCIgW2NvbG9yXT1cXFwiY29tbW9uc1snYmx1ZSddXFxcIiBbc2l6ZV09XFxcImNvbW1vbnNbJ2hhbGYnXVxcXCIgKHRhcHApPVxcXCJhZGRUYXNrcygkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAqbmdJZj1cXFwiYWN0aW9uPT11bmRlZmluZWRcXFwiPlxcbiAgICAgICAgICAgIDwvbnMtYnV0dG9ucz5cXG4gICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ2Nsb3NlJ11cXFwiIFtjb2xvcl09XFxcImNvbW1vbnNbJ3JlZCddXFxcIiBbc2l6ZV09XFxcImNvbW1vbnNbJ2Z1bGwnXVxcXCIgKHRhcHApPVxcXCJiYWNrKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJhY3Rpb24hPXVuZGVmaW5lZFxcXCI+XFxuICAgICAgICAgICAgPC9ucy1idXR0b25zPlxcblxcbiAgICAgICAgICAgIDwhLS0gYWxzbyB3b3JrcyBmaW5lIHdpdGggZGVmYXVsdCAndGFwJyBldmVudC0tPlxcbiAgICAgICAgICAgIDwhLS0gPG5zLWJ1dHRvbnMgW3RleHRdPVxcXCJjb21tb25zWydjbG9zZSddXFxcIiBbY29sb3JdPVxcXCJjb21tb25zWydyZWQnXVxcXCIgW3NpemVdPVxcXCJjb21tb25zWydjZW50J11cXFwiICh0YXApPVxcXCJiYWNrKCRldmVudClcXFwiPjwvbnMtYnV0dG9ucz5cXG4gICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ2FkZG1vcmUnXVxcXCIgW2NvbG9yXT1cXFwiY29tbW9uc1snYmx1ZSddXFxcIiBbc2l6ZV09XFxcImNvbW1vbnNbJ2NlbnQnXVxcXCIgKHRhcCk9XFxcImFkZFRhc2tzKCRldmVudClcXFwiPjwvbnMtYnV0dG9ucz5cXG4gICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ2RvbmUnXVxcXCIgW2NvbG9yXT1cXFwiY29tbW9uc1snZ3JlZW4nXVxcXCIgW3NpemVdPVxcXCJjb21tb25zWydjZW50J11cXFwiICh0YXApPVxcXCJkb25lKCRldmVudClcXFwiPjwvbnMtYnV0dG9ucz4gLS0+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlxcblxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncydcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL0RhdGEvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9EYXRhL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBVaVNlcnZpY2UgfSBmcm9tICcuLi91aS91aS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYWRkLXRhc2tzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtdGFza3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYWRkLXRhc2tzLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRhc2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblxuICAgIGN1cnJlbnREYXRlOiBTdHJpbmc7XG4gICAgY29tbW9uczoge307XG4gICAgdGVtcEl0ZW1zOiBEYXRhW1widGFza1N0cnVjdHVyZVwiXVtdID0gW107XG4gICAgcHJpdmF0ZSBidXNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBkYXRlQ29uc3Q6IFN0cmluZ1tdO1xuICAgIHNob3dFbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgdGFyZ2V0OiBudW1iZXIgPSAwO1xuICAgIGFjdGlvbjogU3RyaW5nID0gXCJcIjtcbiAgICBhY3Rpb25MaXN0OiBTdHJpbmdbXSA9IFtcImVkaXRcIixcInZpZXdcIl07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGJ1czogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0YTogRGF0YVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2NyZWVuOiBVaVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5idXNTdWIpe1xuICAgICAgICAgICAgICAgIHRoaXMuYnVzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUJTXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB0aGlzLmNvbW1vbnMgPSBjb25zdGFudHM7XG4gICAgICAgIGxldCBxcCA9IHRoaXMuYWN0aXZlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gcXBbXCJkYXRlXCJdO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHFwWyd0YXJnZXQnXTtcblxuICAgICAgICB0aGlzLmFjdGlvbiA9IHRoaXMuYWN0aXZlLnNuYXBzaG90LnBhcmFtc1tcImFjdGlvblwiXTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3Rpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLi4uLi4uLi4uXCIgKyB0aGlzLmN1cnJlbnREYXRlKTtcblxuICAgICAgICAvKmZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXNrOiBcIlRoaXMgaXMgYSB0ZXN0IHRhc2ssIGFkZGVkIHRvIGNoZWNrIHRoZSBjc3Mgc2F0YmlsaXR5ISFcIixcbiAgICAgICAgICAgICAgICB0YXNrZWRRdHk6IChpICsgNSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBjb21wUXl0OiAoaSArIDIpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgbWV0cmljOiBcIktNXCIsXG4gICAgICAgICAgICAgICAgcmVtVGltZTogXCIzOjE1IFBNXCIsXG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSovXG4gICAgICAgIHRoaXMuZGF0ZUNvbnN0ID0gdGhpcy5jdXJyZW50RGF0ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyc2VJbnQodGhpcy5kYXRlQ29uc3RbMl0udG9TdHJpbmcoKSkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgdGhpcy50ZW1wSXRlbXMgPSB0aGlzLmRhdGEuZ2V0RGF0YSgpW3RoaXMuZGF0ZUNvbnN0WzNdLnRvU3RyaW5nKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuZGF0ZUNvbnN0WzFdLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhcnNlSW50KHRoaXMuZGF0ZUNvbnN0WzJdLnRvU3RyaW5nKCkpLnRvU3RyaW5nKCldO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy50ZW1wSXRlbXMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YS5nZXREYXRhKClbXCIyMDIwXCJdW1wianVuXCJdW1wiMjJcIl0pO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xuICAgICAgICBpZih0aGlzLnRlbXBJdGVtcy5sZW5ndGg+MSlcbiAgICAgICAgICAgIHRoaXMuc2hvd0VtcHR5ID0gZmFsc2U7XG4gICAgICAgIGVsc2UgdGhpcy5zaG93RW1wdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0U3Vicygpe1xuICAgICAgICB0aGlzLmJ1c1N1YiA9IHRoaXMuYnVzLmRhdGFCdXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGE6IERhdGFbXCJ0YXNrU3RydWN0dXJlXCJdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wSXRlbXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMS4uLi4uLi4uLi4uXCIrdGhpcy50ZW1wSXRlbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREYXRhKFxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuZGF0ZUNvbnN0WzNdLnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocy5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUNvbnN0WzFdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLmRhdGVDb25zdFsyXS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VCUyBSRUNJRVZFRFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrcyhldmVudCl7XG4gICAgICAgIHRoaXMuc3RhcnRTdWJzKCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkZFRhc2snXSwgeyBxdWVyeVBhcmFtczogeyBmb3I6IHRoaXMuY3VycmVudERhdGUsIHRhcmdldDogdGhpcy50YXJnZXR9fSk7XG4gICAgfVxuXG4gICAgZG9uZShldmVudCl7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJOb3RlZCEhIVwiKS50aGVuKCgpPT50aGlzLnNjcmVlbi5jaGFuZ2VVSSgpKTtcbiAgICB9XG5cbiAgICBiYWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcuLi4uLi4uLi4uLicrZXZlbnQpO1xuICAgICAgICAvKmNvbnNvbGUubG9nKFxuICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5kYXRlQ29uc3RbM10udG9TdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocy5pbmRleE9mKHRoaXMuZGF0ZUNvbnN0WzFdLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuZGF0ZUNvbnN0WzJdLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpXG4gICAgICAgICk7Ki9cbiAgICAgICAgdGhpcy5kYXRhLnNldERhdGEobmV3IERhdGUoXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5kYXRlQ29uc3RbM10udG9TdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocy5pbmRleE9mKHRoaXMuZGF0ZUNvbnN0WzFdLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuZGF0ZUNvbnN0WzJdLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICApLCB0aGlzLnRlbXBJdGVtcyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IHRhcmdldDogdGhpcy50YXJnZXQgfSwgY2xlYXJIaXN0b3J5IDogdHJ1ZSAgfSk7XG4gICAgICAgIC8qaWYoIWV2ZW50KVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgcXVlcnlQYXJhbXM6IHsgdGFyZ2V0OiAxIH0gfSk7XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlZGlyZWN0aW9uOlwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGVhdmUgdGhpcyBwYWdlIHdpbGwgbG9vc2UgY2hhbmdlcy4gQ29uaXRudWU/XCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJTdGF5XCIsXG4gICAgICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiXCJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyB0YXJnZXQ6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0qL1xuICAgIH1cblxuICAgIGNsZWFySXRlbShpbmRleCl7XG4gICAgICAgIHRoaXMudGVtcEl0ZW1zLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRlbXBJdGVtcyk7XG4gICAgfVxuXG4gICAgZWRpdEl0ZW0oaW5kZXgpe1xuICAgICAgICB0aGlzLnN0YXJ0U3VicygpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZGRUYXNrL2VkaXQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBmb3I6IHRoaXMuY3VycmVudERhdGUsXG4gICAgICAgICAgICAgICAgZGF0YXM6IEpTT04uc3RyaW5naWZ5KHRoaXMudGVtcEl0ZW1zW2luZGV4XSksXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGVhckl0ZW0oaW5kZXgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYWlseUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9kYWlseS9kYWlseS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhseUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9tb250aGx5L21vbnRobHkuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLXRhc2tzL2FkZC10YXNrcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhc2tGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy8geyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJkYWlseVwiLCBjb21wb25lbnQ6IERhaWx5Q29tcG9uZW50LCBvdXRsZXQ6IFwiZGFpbHlcIiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIm1vbnRobHlcIiwgY29tcG9uZW50OiBNb250aGx5Q29tcG9uZW50LCBvdXRsZXQ6IFwibW9udGhseVwiIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7IHBhdGg6IFwiYWRkXCIsIGNvbXBvbmVudDogQWRkVGFza3NDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWRkLzphY3Rpb25cIiwgY29tcG9uZW50OiBBZGRUYXNrc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJhZGRUYXNrXCIsIGNvbXBvbmVudDogVGFza0Zvcm1Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWRkVGFzay86YWN0aW9uXCIsIGNvbXBvbmVudDogVGFza0Zvcm1Db21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFJhZFNpZGVEcmF3ZXIgKHRhcCk9XFxcImhpZGVGdWxsc2NyZWVuKClcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVNZW51XFxcIiB0a0RyYXdlckNvbnRlbnQ+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCI5KiwxKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIlxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCJcXG4gICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjJmOTtcXFwiIGNsYXNzPVxcXCJmYXMgc2lkZU1lbnVJdGVtc1xcXCIgKHRhcCk9XFxcInJlc2V0KClcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJSZXNldCBBbGwgRGF0YVxcXCIgY2xhc3M9XFxcInNpZGVNZW51SXRlbXNcXFwiICh0YXApPVxcXCJyZXNldCgpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwMDQ7XFxcIiBjbGFzcz1cXFwiZmFzIGF1dGhvclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhpbWFuc2h1IFNoYXJtYVxcXCIgY2xhc3M9XFxcImF1dGhvclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8IS0tIDxMYWJlbCB0ZXh0PVxcXCJUZXN0IE1lbnUgMlxcXCIgY2xhc3M9XFxcInNpZGVNZW51SXRlbXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGVzdCBNZW51IDNcXFwiIGNsYXNzPVxcXCJzaWRlTWVudUl0ZW1zXFxcIj48L0xhYmVsPiAtLT5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPFN0YWNrTGF5b3V0IHRrTWFpbkNvbnRlbnQ+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUmFkU2lkZURyYXdlcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlLCBWaWV3LCBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlc1wiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZyBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFVpU2VydmljZSB9IGZyb20gXCIuL3VpL3VpLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vRGF0YS9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gICAgYW5kcm9pZCBhcyBhbmRyb2lkQXBwLFxuICAgIEFuZHJvaWRBcHBsaWNhdGlvbixcbiAgICBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGFcbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIG9yaWVudGF0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbic7XG5pbXBvcnQgeyBGaW5nZXJwcmludEF1dGgsIEJpb21ldHJpY0lEQXZhaWxhYmxlUmVzdWx0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZpbmdlcnByaW50LWF1dGgnO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuLy9pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbi8vdmFyIGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcbi8vZGVjbGFyZSBmdW5jdGlvbiBvblN5c3RlbVVpVmlzaWJpbGl0eUNoYW5nZSh2aXNpYmlsaXR5OiBudW1iZXIpOiB2b2lkO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHJhZFNpZGVEcmF3ZXI6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG4gICAgcHJpdmF0ZSB0b2dnbGVTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBmaW5nZXJBdXRoOiBGaW5nZXJwcmludEF1dGg7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGRyYXdlclRvZ2dsZTogVWlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGE6IERhdGFTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZmluZ2VyQXV0aCA9IG5ldyBGaW5nZXJwcmludEF1dGgoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLnNldEluc3RhbGxhdGlvbkRhdGUoKTtcblxuICAgICAgICB0aGlzLmRyYXdlclRvZ2dsZS5mdWxsTW9kZS5zdWJzY3JpYmUoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaGlkZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoYW5kcm9pZCl7XG4gICAgICAgICAgICBhbmRyb2lkQXBwLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVJlc3VtZWRFdmVudCwgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VtZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYW5kcm9pZEFwcC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXF1ZXN0UGVybWlzc2lvbnNFdmVudCwgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvblwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYW5kcm9pZEFwcC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlQYXVzZWRFdmVudCwgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuYXNrRmluZ2VycHJpbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYW5kcm9pZEFwcC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXN1bHRFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbmRyb2lkQXBwLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVN0b3BwZWRFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYW5kcm9pZEFwcC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlTdGFydGVkRXZlbnQsICgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5hc2tGaW5nZXJwcmludCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmhpZGVGdWxsc2NyZWVuKCk7XG4gICAgICAgIC8vdGhpcy5kaXNhYmxlUm90YXRpb24oKTtcblxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMucmFkU2lkZURyYXdlci5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLnRvZ2dsZVN1YnNjcmliZXIgPSB0aGlzLmRyYXdlclRvZ2dsZS5kcmF3ZXJTdGF0ZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGEuc2V0RGF0YVN0cnVjdHVyZSgpO1xuICAgICAgICB0aGlzLmRhdGEuc2V0VG9kYXkoKTtcbiAgICAgICAgLy90aGlzLmFza0ZpbmdlcnByaW50KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICBkaWFsb2dcbiAgICAgICAgICAgIC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZXNldCBkYXRhXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbGwgdGhlIGN1cnJlbnQgZGF0YSB3aWxsIGJlIGxvc3QuIENvbnRpbnVlP1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJUb2dnbGUuY2hhbmdlVUkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVGdWxsc2NyZWVuKCkge1xuICAgICAgICAvKmlmIChhbmRyb2lkQXBwICYmIGRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIikge1xuICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYW5kcm9pZEFwcC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgY29uc3QgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kgfFxuICAgICAgICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTiB8XG4gICAgICAgICAgICAgICAgVmlldy5TWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT04gfFxuICAgICAgICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgLypwcml2YXRlIGdldFN0YXR1c0JhckhlaWdodCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGFwcC5hbmRyb2lkKTtcbiAgICAgICAgbGV0IHJlc291cmNlSWQgPSBhcHAuYW5kcm9pZC5jdXJyZW50Q29udGV4dC5nZXRSZXNvdXJjZXMoKS5nZXRJZGVudGlmaWVyKCdzdGF0dXNfYmFyX2hlaWdodCcsICdkaW1lbicsICdhbmRyb2lkJyk7XG4gICAgICAgIGlmIChyZXNvdXJjZUlkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhcHAuYW5kcm9pZC5jdXJyZW50Q29udGV4dC5nZXRSZXNvdXJjZXMoKS5nZXREaW1lbnNpb25QaXhlbFNpemUocmVzb3VyY2VJZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9Ki9cblxuICAgIGRpc2FibGVSb3RhdGlvbigpIHtcbiAgICAgICAgb3JpZW50YXRpb24uc2V0T3JpZW50YXRpb24oXCJwb3J0cmFpdFwiLCBmYWxzZSk7XG4gICAgICAgIG9yaWVudGF0aW9uLmRpc2FibGVSb3RhdGlvbigpO1xuICAgIH1cblxuICAgIGFza0ZpbmdlcnByaW50KCl7XG4gICAgICAgIHRoaXMuZmluZ2VyQXV0aC5hdmFpbGFibGUoKS50aGVuKChyZXN1bHQ6IEJpb21ldHJpY0lEQXZhaWxhYmxlUmVzdWx0KT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEJpb21ldHJpYyBJRCBhdmFpbGFibGU/ICR7cmVzdWx0LmFueX1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3VjaD8gJHtyZXN1bHQudG91Y2h9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRmFjZT8gJHtyZXN1bHQuZmFjZX1gKTtcbiAgICAgICAgICAgIGlmKHJlc3VsdC5hbnkpe1xuICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5RmluZ2VycHJpbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1haW46IFwiK0pTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2ZXJpZnlGaW5nZXJwcmludCgpe1xuICAgICAgICB0aGlzLmZpbmdlckF1dGhcbiAgICAgICAgICAgIC52ZXJpZnlGaW5nZXJwcmludCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxlYXNlIFZlcmlmeVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGVudGVyZWRQYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRlcmVkUGFzc3dvcmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9rXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3ViOiBcIitKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAgICBpZihlcnIuY29kZSAhPSAzMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNrRmluZ2VycHJpbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYWlseUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9kYWlseS9kYWlseS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhseUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9tb250aGx5L21vbnRobHkuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL3VpL3NpZGUtZHJhd2VyL3NpZGUtZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrc0NvbXBvbmVudCB9IGZyb20gJy4vdGFza3MvdGFza3MuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFRhc2tzQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtdGFza3MvYWRkLXRhc2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi91aS9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi90YXNrLWZvcm0vdGFzay1mb3JtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIERhaWx5Q29tcG9uZW50LFxuICAgICAgICBNb250aGx5Q29tcG9uZW50LFxuICAgICAgICBTaWRlRHJhd2VyQ29tcG9uZW50LFxuICAgICAgICBUYXNrc0NvbXBvbmVudCxcbiAgICAgICAgQWRkVGFza3NDb21wb25lbnQsXG4gICAgICAgIEJ1dHRvbnNDb21wb25lbnQsXG4gICAgICAgIFRhc2tGb3JtQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJleHBvcnQgY29uc3QgY29uc3RhbnRzID0ge1xuICAgIGNsb3NlOiBcImNsb3NlXCIsXG4gICAgcmVkOiBcInJlZFwiLFxuICAgIGJsdWU6IFwiYmx1ZVwiLFxuICAgIGdyZWVuOiBcImdyZWVuXCIsXG4gICAgYWRkbW9yZTogXCJBZGQgTW9yZVwiLFxuICAgIGZ1bGw6IFwic2luZ2xlXCIsXG4gICAgaGFsZjogXCJkb3VibGVcIixcbiAgICBjZW50OiBcImNlbnRcIixcbiAgICBkb25lOiBcIkRvbmUhXCIsXG4gICAgcm91bmQ6IFwicm91bmRcIixcbiAgICB0aW1lczogXCImI3hmMDBkO1wiLFxuICAgIHByZXY6IFwicHJldlwiLFxuICAgIG5leHQ6IFwibmV4dFwiLFxuICAgIHdoaXRlOiBcIndoaXRlXCIsXG4gICAgY2hlY2s6IFwiY2hlY2tcIixcbiAgICBwbHVzOiBcInBsdXNcIlxufTtcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3MgPSBbXG4gICAgXCJtbVwiLFxuICAgIFwiY21cIixcbiAgICBcIm1cIixcbiAgICBcImttXCIsXG4gICAgXCJtaWxlc1wiLFxuICAgIFwiZ1wiLFxuICAgIFwia2dcIixcbiAgICBcInNlY1wiLFxuICAgIFwibXNcIixcbiAgICBcImhyXCIsXG4gICAgXCJtaW5cIixcbiAgICBcImxpXCIsXG4gICAgXCJtbFwiXG5dO1xuXG5jb25zdCB2aWV3RGF0YSA9IFtcbiAgICBcIlZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVwiLFxuICAgIFwiVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXCIsXG4gICAgXCJWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXCIsXG4gICAgXCJWaWV3LlNZU1RFTV9VSV9GTEFHX0xPV19QUk9GSUxFXCIsXG4gICAgXCJWaWV3LlNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTlwiLCAvLyBoaWRlIG5hdiBiYXJcbiAgICBcIlZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTlwiLCAvLyBoaWRlIHN0YXR1cyBiYXJcbiAgICBcIlZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWVwiLFxuICAgIFwiVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVcIixcbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5vRGF0YXtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luLXRvcDogNTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1Me1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwKTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbWF0ZUxlZnR7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltTDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltUntcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTApO1xcbiAgICB9XFxufVxcblxcbi5hbmltYXRlUmlnaHR7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltUjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnRvcHtcXG4gICAgY29sb3I6IHRlYWw7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGhlaWdodDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltVG9we1xcbiAgICBmcm9tIHtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgICovXFxuICAgICAgICBoZWlnaHQ6IDAlO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDApOyAgKi9cXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbWF0ZVRvcHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1Ub3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5vcHRpb25ze1xcbiAgICBvcGFjaXR5OiAwLjE7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPExpc3RWaWV3IGhlaWdodD1cXFwiMTAwJVxcXCIgW2l0ZW1zXT1cXFwidGVtcEl0ZW1zXFxcIiAqbmdJZj1cXFwidGVtcEl0ZW1zLmxlbmd0aCE9MFxcXCI+XFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgIDxucy10YXNrcyBbaXRlbXNdPVxcXCJpdGVtXFxcIj48L25zLXRhc2tzPlxcbiAgICA8L25nLXRlbXBsYXRlPlxcbjwvTGlzdFZpZXc+IC0tPlxcbjxBYnNvbHV0ZUxheW91dD5cXG4gICAgPFNjcm9sbFZpZXcgKm5nSWY9XFxcInRlbXBJdGVtcy5sZW5ndGghPTBcXFwiIHRvcD1cXFwiMFxcXCIgbGVmdD1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCJcXG4gICAgICAgICAgICBbbmdDbGFzc109XFxcIntvcHRpb25zOiBhbmltYXRlTFRSfVxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiB0ZW1wSXRlbXM7IGxldCBpPWluZGV4O1xcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImxpXFxcIiAodGFwKT1cXFwiY29uZmlybShpKVxcXCIgW25nQ2xhc3NdPVxcXCJ7ZG9uZTogaXRlbS5kb25lfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiAqbmdJZj1cXFwiaSE9MFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bnMtdGFza3MgW2l0ZW1zXT1cXFwiaXRlbVxcXCI+PC9ucy10YXNrcz5cXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiXFxuICAgICAgICAqbmdJZj1cXFwidGVtcEl0ZW1zLmxlbmd0aD09MVxcXCIgdG9wPVxcXCIwXFxcIiBsZWZ0PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG4gICAgICAgIDxucy1idXR0b25zIFt0ZXh0XT1cXFwiY29tbW9uc1sncGx1cyddXFxcIiBbc2l6ZV09XFxcImNvbW1vbnNbJ3JvdW5kJ11cXFwiIFtjb2xvcl09XFxcImNvbW1vbnNbJ3doaXRlJ11cXFwiICh0YXBwKT1cXFwiYWRkVGFza3MoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8L25zLWJ1dHRvbnM+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTm8gdGFza3MgZm9yIHRvZGF5ISFcXFwiIGNsYXNzPVxcXCJub0RhdGFcXFwiPjwvTGFiZWw+XFxuICAgIDwvRmxleGJveExheW91dD5cXG5cXG4gICAgPEZsZXhib3hMYXlvdXQgdG9wPVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJ0b3BcXFwiIFtuZ0NsYXNzXT1cXFwie2FuaW1hdGVUb3A6IGFuaW1hdGVMVFJ9XFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAodGFwKT1cXFwidGVzdCgpXFxcIiAqbmdJZj1cXFwiYW5pbWF0ZUxUUiA9PSB0cnVlXFxcIj5cXG4gICAgICAgIDxMYWJlbCBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMTAwO1xcXCIgdGV4dD1cXFwiQ29tcGxldGVkIHRoaXMgdGFzayA/XFxcIj48L0xhYmVsPlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuXFxuICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgdG9wPVxcXCIzNTBcXFwiICpuZ0lmPVxcXCJhbmltYXRlTFRSID09IHRydWVcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgW25nQ2xhc3NdPVxcXCJ7YW5pbWF0ZUxlZnQ6IGFuaW1hdGVMVFJ9XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IC0xMDA7XFxcIj5cXG4gICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcInRoaXMuY29tbW9uc1snY2hlY2snXVxcXCIgW3NpemVdPVxcXCJ0aGlzLmNvbW1vbnNbJ3JvdW5kJ11cXFwiXFxuICAgICAgICAgICAgICAgIFtjb2xvcl09XFxcInRoaXMuY29tbW9uc1snZ3JlZW4nXVxcXCIgKHRhcHApPVxcXCJjaGFuZ2VTdGF0dXModHJ1ZSlcXFwiPjwvbnMtYnV0dG9ucz5cXG4gICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IFtuZ0NsYXNzXT1cXFwie2FuaW1hdGVSaWdodDogYW5pbWF0ZUxUUn1cXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IC0xMDA7XFxcIj5cXG4gICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcInRoaXMuY29tbW9uc1snY2xvc2UnXVxcXCIgW3NpemVdPVxcXCJ0aGlzLmNvbW1vbnNbJ3JvdW5kJ11cXFwiXFxuICAgICAgICAgICAgICAgIFtjb2xvcl09XFxcInRoaXMuY29tbW9uc1sncmVkJ11cXFwiICh0YXBwKT1cXFwiY2hhbmdlU3RhdHVzKGZhbHNlKVxcXCI+XFxuICAgICAgICAgICAgPC9ucy1idXR0b25zPlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuPC9BYnNvbHV0ZUxheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9EYXRhL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGFpbHlcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RhaWx5LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2RhaWx5LmNvbXBvbmVudC5jc3NcIl0sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGFpbHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRlbXBJdGVtczogRGF0YVtcInRhc2tTdHJ1Y3R1cmVcIl1bXSA9IFtdO1xuICAgIGNvbW1vbnMgPSBjb25zdGFudHM7XG4gICAgYW5pbWF0ZUxUUjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXR1c0ZvcjogbnVtYmVyO1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhOiBEYXRhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGEuZ2V0RGF0YSgpKTtcbiAgICAgICAgdGhpcy50ZW1wSXRlbXMgPSB0aGlzLmRhdGEuZ2V0RGF0YSgpW3RoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCldW1xuICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRoc1t0aGlzLmRhdGUuZ2V0TW9udGgoKV0udG9TdHJpbmcoKVxuICAgICAgICBdW3RoaXMuZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKV07XG4gICAgICAgIC8vdGhpcy50ZW1wSXRlbXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCcxLi4uLi4uLi4uJytKU09OLnN0cmluZ2lmeSh0aGlzLnRlbXBJdGVtcykpO1xuICAgICAgICAvKmNvbnNvbGUubG9nKHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uc2NhbGUpOyovXG4gICAgfVxuXG4gICAgYWRkVGFza3MoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FkZFwiXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgZGF0ZTogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSwgdGFyZ2V0OiAwIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbmZpcm0oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNGb3IgPSBpbmRleDtcbiAgICAgICAgdGhpcy5hbmltYXRlTFRSID0gdHJ1ZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgfVxuXG4gICAgY2hhbmdlU3RhdHVzKHN0YXR1cykge1xuICAgICAgICB0aGlzLmRhdGEuY2hhbmdlVGFza1N0YXR1cyh0aGlzLnN0YXR1c0Zvciwgc3RhdHVzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlTFRSID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdHVzRm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdHVzRm9yK1wiIFwiK3N0YXR1cylcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRpY2tlZFwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRlbXBJdGVtcyk7XG4gICAgICAgIHRoaXMudGVtcEl0ZW1zID0gdGhpcy5kYXRhLmdldERhdGEoKVtcbiAgICAgICAgICAgIHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKClcbiAgICAgICAgXVt0aGlzLmRhdGEubW9udGhzW3RoaXMuZGF0ZS5nZXRNb250aCgpXS50b1N0cmluZygpXVtcbiAgICAgICAgICAgIHRoaXMuZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKVxuICAgICAgICBdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGVtcEl0ZW1zKTtcbiAgICB9XG5cbiAgICB0ZXN0KCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tlZCEhISFcIik7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1zaWRlLWRyYXdlcj48L25zLXNpZGUtZHJhd2VyPlxcbjwhLS0gPFRhYnMgW3NlbGVjdGVkSW5kZXhdPVxcXCJzZWxlY3RlZFRhYlxcXCIgdGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiPlxcblxcbiAgIDxUYWJTdHJpcD5cXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gKHRhcCk9XFxcImxvYWRWaWV3KCdkJylcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb2RheSdzIENoYWxsYW5nZXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMmU7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIiAodGFwKT1cXFwibG9hZFZpZXcoJ20nKVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgVmlld1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjU1OTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+XFxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgPC9UYWJTdHJpcD5cXG5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJkYWlseVxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcIm1vbnRobHlcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG5cXG48L1RhYnM+IC0tPlxcbjxUYWJWaWV3IFtzZWxlY3RlZEluZGV4XT1cXFwic2VsZWN0ZWRUYWJcXFwiXFxuICAgICAgICBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiXFxuICAgICAgICBzZWxlY3RlZFRhYlRleHRDb2xvcj1cXFwid2hpdGVcXFwiIHRhYkJhY2tncm91bmRDb2xvcj1cXFwiIzAwN2JmZlxcXCJcXG4gICAgICAgIGFuZHJvaWRTZWxlY3RlZFRhYkhpZ2hsaWdodENvbG9yPVxcXCJ3aGl0ZVxcXCIgdGFiVGV4dEZvbnRTaXplPVxcXCIzMDBcXFwiPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5J31cXFwiIG5hbWU9XFxcImRhaWx5XFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnTW9udGhseSBWaWV3J31cXFwiIG5hbWU9XFxcIm1vbnRobHlcXFwiPiA8L3BhZ2Utcm91dGVyLW91dGxldD5cXG48L1RhYlZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHNlbGVjdGVkVGFiOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICBwcml2YXRlIGFjdGl2ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvdXRsZXRzOiB7ZGFpbHk6IFtcImRhaWx5XCJdLCBtb250aGx5OiBbXCJtb250aGx5XCJdfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB7XG4gICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJ0YXJnZXRcIl0pXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRoaXMuYWN0aXZlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1widGFyZ2V0XCJdO1xuICAgICAgZWxzZSB0aGlzLnNlbGVjdGVkVGFiID0gMDtcbiAgICAgIC8vZWxzZSB0aGlzLnNlbGVjdGVkVGFiID0gMTtcbiAgfVxuXG4gIGxvYWRWaWV3KHRhcmdldDogU3RyaW5nKXtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcblxuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIubWFpbntcXG4gICAgcGFkZGluZzogMzA7XFxufVxcblxcbi5iSXRlbXN7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgbWFyZ2luOiA1O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC1zaXplOiAxNSU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VudGVyQWx7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmhlYWR7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC43MjYpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMDtcXG59XFxuXFxuLmhlYWREYXlze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMTA7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7ICovXFxufVxcblxcbi5vcHRpb25ze1xcbiAgICBvcGFjaXR5OiAwLjE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3B0aW9uc01lbnV7XFxuICAgIGZyb20ge1xcbiAgICAgICAgLyogdG9wOiAtNTA7ICovXFxuICAgICAgICAvKiBsZWZ0OiAyOyAqL1xcbiAgICAgICAgd2lkdGg6IDk5JTtcXG4gICAgICAgIGhlaWdodDogMCU7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgLyogdG9wOiAyOyAqL1xcbiAgICAgICAgLyogbGVmdDogMjsgKi9cXG4gICAgICAgIHdpZHRoOiA5OSU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLm9wdGlvbk1lbnVBbmkge1xcbiAgICBhbmltYXRpb24tbmFtZTogb3B0aW9uc01lbnU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHNwcmluZztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5vcHRpb25UZXh0e1xcbiAgICBmb250LXNpemU6IDQwO1xcbn1cXG4vKiAub3B0aW9uc01lbnVCZWZvcmUge1xcbiAgICAvKiB0b3A6IC01MDsgKlxcbiAgICBoZWlnaHQ6IDA7XFxufSAqL1xcblxcbi5ib3Jke1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5waWNrZXIge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgICAvKiBoZWlnaHQ6IDQwOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwICFpbXBvcnRhbnQ7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBYnNvbHV0ZUxheW91dD5cXG4gICAgPEZsZXhib3hMYXlvdXRcXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG4gICAgICAgIFtuZ0NsYXNzXT1cXFwib3B0aW9uU2hvd1xcXCIgKm5nSWY9XFxcImNsYXNzT2JqLm9wdGlvbnNcXFwiXFxuICAgICAgICAodGFwKT1cXFwiY2xvc2UoKVxcXCI+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjA2ZTtcXFwiIGNsYXNzPVxcXCJmYXIgaGVhZCBvcHRpb25UZXh0XFxcIiAodGFwKT1cXFwidmlldygpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNDQ7XFxcIiBjbGFzcz1cXFwiZmFyIGhlYWQgb3B0aW9uVGV4dFxcXCIgKHRhcCk9XFxcImVkaXQoKVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDY3O1xcXCIgY2xhc3M9XFxcImZhcyBoZWFkIG9wdGlvblRleHRcXFwiICh0YXApPVxcXCJhZGQoKVxcXCI+PC9MYWJlbD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8RmxleGJveExheW91dCB0b3A9XFxcIjBcXFwiIGxlZnQ9XFxcIjBcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIFtuZ0NsYXNzXT1cXFwiY2xhc3NPYmpcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLDUqXFxcIiBjb2w9XFxcIipcXFwiIGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tIDxMaXN0UGlja2VyIFtpdGVtc109XFxcInllYXJzXFxcIiBjbGFzcz1cXFwicGlja2VyXFxcIiBzZWxlY3RlZEluZGV4PTAgd2lkdGg9XFxcIjUwMFxcXCI+PC9MaXN0UGlja2VyPiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7Y3VyclllYXJ9fVxcXCIgY2xhc3M9XFxcImhlYWQgaDNcXFwiICh0YXApPVxcXCJjaGFuZ2VZZWFyKClcXFwiICpuZ0lmPVxcXCJ5ZWFyRERTaG93PT1mYWxzZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3IHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiNTBcXFwiIFtpdGVtc109XFxcInllYXJzXFxcIiBjbGFzcz1cXFwicGlja2VyXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCI1XFxcIiAqbmdJZj1cXFwieWVhckREU2hvdz09dHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtXFxcIiAodGFwKT1cXFwib25DaGFuZ2VZZWFyKGkpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjEwNDtcXFwiIGNsYXNzPVxcXCJmYXMgaGVhZCBoMlxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogMTA7IHBhZGRpbmctcmlnaHQ6IDEwO1xcXCIgKHRhcCk9XFxcInByZXZpb3VzTW9udGgoKVxcXCIgKm5nSWY9XFxcImhpZGVQcmV2PT1mYWxzZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7Y3Vyck1vbnRoIHwgdXBwZXJjYXNlfX1cXFwiIGNsYXNzPVxcXCJoZWFkIGgyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjEwNTtcXFwiIGNsYXNzPVxcXCJmYXMgaGVhZCBoMlxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogMTA7IHBhZGRpbmctcmlnaHQ6IDEwO1xcXCIgKHRhcCk9XFxcIm5leHRNb250aCgpXFxcIiAqbmdJZj1cXFwiaGlkZU5leHQ9PWZhbHNlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiBcXFwiIGNsYXNzPVxcXCJmYXMgaGVhZCBoMlxcXCIgKm5nSWY9XFxcImhpZGVOZXh0PT10cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgKHN3aXBlKT1cXFwic3dpcGVBY3Rpb24oJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIiosKiwqLCosKiwqLCpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsICpuZ0Zvcj1cXFwibGV0IGRheSBvZiB3ZWVrRGF5czsgbGV0IGkgPSBpbmRleFxcXCIgW3RleHRdPVxcXCJkYXkgfHVwcGVyY2FzZVxcXCIgcm93PVxcXCIwXFxcIiBbY29sXT1cXFwiaVxcXCIgY2xhc3M9XFxcImNlbnRlckFsIGhlYWREYXlzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgKm5nRm9yPVxcXCJsZXQgZURheSBvZiBkYXlzXFxcIiBbdGV4dF09XFxcImVEYXkuZGF0ZU9mTW9udGhcXFwiIFtyb3ddPVxcXCJlRGF5LnJvd1xcXCIgW2NvbF09XFxcImVEYXkuZGF5T2ZNb250aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYkl0ZW1zIGNlbnRlckFsXFxcIiBbbmdTdHlsZV09XFxcInsgJ2JhY2tncm91bmQnIDogZURheS5kaXNhYmxlZD8gJyM5OTk5ZmYnIDogZURheS5pc1RvZGF5PydibHVlJzond2hpdGUnLCAnb3BhY2l0eScgOiBlRGF5LmRpc2FibGVkPyAnMC4zJzonMScsICdjb2xvcicgOiBlRGF5LmlzVG9kYXk/J3doaXRlJzonYmxhY2snIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhcCk9XFxcInNob3dPcHRpb25zKGVEYXkuZGF0ZU9mTW9udGgsIGVEYXkuZGlzYWJsZWQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvRmxleGJveExheW91dD5cXG48L0Fic29sdXRlTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vRGF0YS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YSc7XG5pbXBvcnQgKiBhcyBkaWFsb2cgZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1tb250aGx5XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb250aGx5LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL21vbnRobHkuY29tcG9uZW50LmNzc1wiXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aGx5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyB3ZWVrRGF5czogQXJyYXk8U3RyaW5nPiA9IHRoaXMuZGF0YS53ZWVrRGF5cztcbiAgICBkYXRlczogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY3VyclllYXI6IFN0cmluZztcbiAgICBjdXJyTW9udGg6IFN0cmluZztcbiAgICBjdXJyU2hvcnREYXRlOiBTdHJpbmc7XG4gICAgZGF5czogRGF0YVtcImluRGF0ZUFycmF5U3RydWN0XCJdW10gPSBbXTtcbiAgICBjbGFzc09iajogeyBvcHRpb25zOiBib29sZWFuIH0gPSB7IG9wdGlvbnM6IGZhbHNlIH07XG4gICAgb3B0aW9uU2hvdzogeyBvcHRpb25NZW51QW5pOiBib29sZWFuIH0gPSB7IG9wdGlvbk1lbnVBbmk6IGZhbHNlIH07XG4gICAgaGlkZVByZXY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBoaWRlTmV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2VsZWN0ZWREYXRlOiBTdHJpbmc7XG4gICAgeWVhcnM6IHt9O1xuICAgIHllYXJERFNob3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgZGF0YTogRGF0YVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnllYXJzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmdldERhdGEoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy55ZWFycyk7XG5cbiAgICAgICAgdGhpcy5jdXJyWWVhciA9IHRoaXMuZGF0ZXMuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmN1cnJNb250aCA9IHRoaXMuZGF0YS5tb250aHNbdGhpcy5kYXRlcy5nZXRNb250aCgpXTtcbiAgICAgICAgdGhpcy5jdXJyU2hvcnREYXRlID0gdGhpcy5kYXRlcy5nZXREYXRlKCkudG9TdHJpbmcoKTtcblxuICAgICAgICBpZih0aGlzLmRhdGEubW9udGhzLmluZGV4T2YodGhpcy5jdXJyTW9udGgpID09IDApXG4gICAgICAgICAgICB0aGlzLmhpZGVQcmV2ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tb250aHMuaW5kZXhPZih0aGlzLmN1cnJNb250aCkgPT0gMTEpXG4gICAgICAgICAgICB0aGlzLmhpZGVOZXh0ID0gdHJ1ZTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJZZWFyICtcIlwiKyB0aGlzLmN1cnJNb250aCArXCJcIisgdGhpcy5jdXJyU2hvcnREYXRlKTtcblxuICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmNyZWF0ZU1vbnRoRGF5c0FycmF5KHRoaXMuZGF0YS5nZXREYXRhKClbdGhpcy5jdXJyWWVhci50b1N0cmluZygpXVt0aGlzLmN1cnJNb250aC50b1N0cmluZygpXSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5kYXlzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb250aGx5OiBvbmluaXQgY2FsbGVkXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF5c1tcIjI2XCJdKTtcbiAgICB9XG5cbiAgICBjcmVhdGVNb250aERheXNBcnJheShNb250aE9iaikge1xuICAgICAgICBsZXQgYXJyYXlUb1BvcDogRGF0YVtcImluRGF0ZUFycmF5U3RydWN0XCJdW10gPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsRGF0ZXMgPSBPYmplY3Qua2V5cyhNb250aE9iaikubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERhdGVzOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5VG9Qb3AucHVzaChNb250aE9ialtpXVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5VG9Qb3A7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VZZWFyKGluZGV4KXtcbiAgICAgICAgdGhpcy5jdXJyWWVhciA9IHRoaXMueWVhcnNbaW5kZXhdO1xuICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmNyZWF0ZU1vbnRoRGF5c0FycmF5KFxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldERhdGEoKVt0aGlzLmN1cnJZZWFyLnRvU3RyaW5nKCldW3RoaXMuY3Vyck1vbnRoLnRvU3RyaW5nKCldXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMueWVhckREU2hvdyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoYW5nZVllYXIoKXtcbiAgICAgICAgdGhpcy55ZWFyRERTaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcmV2aW91c01vbnRoKCkge1xuICAgICAgICBsZXQgY3VyciA9IHRoaXMuZGF0YS5tb250aHMuaW5kZXhPZih0aGlzLmN1cnJNb250aCk7XG4gICAgICAgIGlmKGN1cnIgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuY3Vyck1vbnRoID0gdGhpcy5kYXRhLm1vbnRoc1tjdXJyLTFdO1xuICAgICAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jcmVhdGVNb250aERheXNBcnJheSh0aGlzLmRhdGEuZ2V0RGF0YSgpW3RoaXMuY3VyclllYXIudG9TdHJpbmcoKV1bdGhpcy5jdXJyTW9udGgudG9TdHJpbmcoKV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY3VyciA9PSAwKXtcbiAgICAgICAgICAgIC8qbGV0IHByZXZZZWFyID0gcGFyc2VJbnQodGhpcy5jdXJyWWVhci50b1N0cmluZygpKS0xO1xuICAgICAgICAgICAgaWYodGhpcy5kYXRhLmdldERhdGEoKVtwcmV2WWVhcl0pe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyclllYXIgPSBwcmV2WWVhci50b1N0cmluZygpO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlUHJldiA9IChjdXJyID09IDEpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGVOZXh0ID0gKGN1cnIgPD0gMTEpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF5cyk7XG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKCkge1xuICAgICAgICBsZXQgY3VyciA9IHRoaXMuZGF0YS5tb250aHMuaW5kZXhPZih0aGlzLmN1cnJNb250aCk7XG4gICAgICAgIGlmIChjdXJyIDwgMTEpIHtcbiAgICAgICAgICAgIHRoaXMuY3Vyck1vbnRoID0gdGhpcy5kYXRhLm1vbnRoc1tjdXJyICsgMV07XG4gICAgICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmNyZWF0ZU1vbnRoRGF5c0FycmF5KHRoaXMuZGF0YS5nZXREYXRhKClbdGhpcy5jdXJyWWVhci50b1N0cmluZygpXVt0aGlzLmN1cnJNb250aC50b1N0cmluZygpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VyciA9PSAxMSkge1xuICAgICAgICAgICAgLypsZXQgcHJldlllYXIgPSBwYXJzZUludCh0aGlzLmN1cnJZZWFyLnRvU3RyaW5nKCkpLTE7XG4gICAgICAgICAgICBpZih0aGlzLmRhdGEuZ2V0RGF0YSgpW3ByZXZZZWFyXSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyWWVhciA9IHByZXZZZWFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGVOZXh0ID0gKGN1cnIgPT0gMTApID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGVQcmV2ID0gKGN1cnIgPj0gMSkgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgc2hvd09wdGlvbnMoZGF0ZTogYW55LCBpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIGlmKCFpc0Rpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NPYmoub3B0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9wdGlvblNob3cub3B0aW9uTWVudUFuaSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnRobHkuLi4uLlwiK2RhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh0aGlzLmN1cnJZZWFyLnRvU3RyaW5nKCkpLCB0aGlzLmRhdGEubW9udGhzLmluZGV4T2YodGhpcy5jdXJyTW9udGgpLCBwYXJzZUludChkYXRlKSkudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbGFzc09iai5vcHRpb25zID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3B0aW9uU2hvdy5vcHRpb25NZW51QW5pID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmlldygpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRkL3ZpZXdcIl0sIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBkYXRlOiB0aGlzLnNlbGVjdGVkRGF0ZSwgdGFyZ2V0OiAxIH0sXG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGVkaXQoKSB7XG4gICAgICAgIGxldCBkID0gdGhpcy5zZWxlY3RlZERhdGUuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgZGF0ZUNob3NlbiA9IG5ldyBEYXRlKHBhcnNlSW50KGRbM10pLCB0aGlzLmRhdGEubW9udGhzLmluZGV4T2YoZFsxXS50b0xvd2VyQ2FzZSgpKSxwYXJzZUludChkWzJdKSk7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoKS5nZXRNb250aCgpLCBuZXcgRGF0ZSgpLmdldERhdGUoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0ZUNob3Nlbik7XG4gICAgICAgIC8vY29uc29sZS5sb2codG9kYXkpO1xuICAgICAgICBpZiAoKGRhdGVDaG9zZW4uZ2V0VGltZSgpID49IHRvZGF5LmdldFRpbWUoKSkpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FkZC9lZGl0XCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGRhdGU6IHRoaXMuc2VsZWN0ZWREYXRlLCB0YXJnZXQ6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGRpYWxvZy5hbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDYW5ub3QgbWFrZSBjaGFuZ2VzIGluIGJhY2sgZGF0ZXMhIVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9vcHMhXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgbGV0IGQgPSB0aGlzLnNlbGVjdGVkRGF0ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBkYXRlQ2hvc2VuID0gbmV3IERhdGUocGFyc2VJbnQoZFszXSksIHRoaXMuZGF0YS5tb250aHMuaW5kZXhPZihkWzFdLnRvTG93ZXJDYXNlKCkpLHBhcnNlSW50KGRbMl0pKTtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCksIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcblxuICAgICAgICBpZiAoZGF0ZUNob3Nlbi5nZXRUaW1lKCkgPj0gdG9kYXkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRkXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGRhdGU6IHRoaXMuc2VsZWN0ZWREYXRlLCB0YXJnZXQ6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWFsb2cuYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IG1ha2UgY2hhbmdlcyBpbiBiYWNrIGRhdGVzISFcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJPb3BzIVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2lwZUFjdGlvbihldmVudCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvL25vdCB3b3JraW5nXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb250aGx5IGRlc3Ryb3kgY2FsbGVkXCIpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIubWFpbntcXG4gICAgbWFyZ2luLXRvcDogMjU7XFxufVxcblxcbi5zdGVwc3tcXG4gICAgZm9udC1zaXplOiAxOTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG4gICAgcGFkZGluZy10b3A6IDE4O1xcbiAgICAvKiBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxOyAqL1xcbn1cXG5cXG4uaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sYXJnZWlucHV0e1xcbiAgICBmb250LXNpemU6IDQ1O1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVkaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogNDU7XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5tZWRpbnB1dExhYmVse1xcbiAgICBmb250LXNpemU6IDQ1O1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLm1ldHJpY1BhcmVudHtcXG4gICAgcGFkZGluZzogMTA7XFxufVxcblxcbi5tZXRyaWNJdGVtc3tcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIHBhZGRpbmc6IDEwO1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG5cXG4ubWV0cmljSXRlbXNTZWxlY3RlZHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwO1xcbiAgICBtYXJnaW4tbGVmdDogMTA7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG5cXG4ubGFiZWxfNV8xe1xcbiAgICBmb250LXNpemU6IDkwO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLmxhYmVsXzVfMntcXG4gICAgZm9udC1zaXplOiA3MDtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sYWJlbF81XzN7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxhYmVsXzVfNHtcXG4gICAgZm9udC1zaXplOiAzNTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtle1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTt9XFxuICAgIDE1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTApO31cXG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwKTt9XFxuICAgIDQ1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTApO31cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwKTt9XFxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTApO31cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTt9XFxufVxcblxcbi5hbmltYXRle1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgIDwhLS0gKHRhcCk9XFxcImRvdWJsZUNoZWNrKClcXFwiIC0tPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLDgqLDMqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJiYXNlbGluZVxcXCI+XFxuICAgICAgICAgICAgPCEtLSA8TGFiZWwgdGV4dD1cXFwie3snU3RlcCAnICsgc3RlcENvdW50ICsgJyAgICAgJ319XFxcIiBjbGFzcz1cXFwic3RlcHNcXFwiPjwvTGFiZWw+IC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcInN0ZXBBcnJheVtzdGVwQ291bnQtMV1cXFwiIGNsYXNzPVxcXCJzdGVwc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCIganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwic3RlcENvdW50PT0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VmlldyB3aWR0aD1cXFwiOTAlXFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgdGV4dEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJzdWJtaXR0ZWREYXRhLnRhc2tcXFwiIFtoaW50XT1cXFwiYXBwbGllZEhpbnRbMF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOm9wYWNpdHlbMF0/JzAuMic6JzEnfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVxcXCJjaGFuZ2VUYXNrT3BhY2l0eShmYWxzZSwgMCwgJ3Rhc2snKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XFxcImNoYW5nZVRhc2tPcGFjaXR5KHRydWUsIDAsICd0YXNrJylcXFwiPjwvVGV4dFZpZXc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAodGFwKT1cXFwiY2hlY2soKVxcXCIgLS0+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcInN0ZXBDb3VudD09MlxcXCI+XFxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhXcmFwPVxcXCJ3cmFwXFxcIiBjbGFzcz1cXFwibWV0cmljUGFyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCAqbmdGb3I9XFxcImxldCBpdGVtIG9mIG1ldHJpY0FycmF5OyBsZXQgaSA9IGluZGV4O1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGV4dF09XFxcIml0ZW1cXFwiICh0YXApPVxcXCJtZXRyaWNTZWxlY3RlZChpKVxcXCIgW25nQ2xhc3NdPVxcXCJtZXRyaWNJdGVtQ2xhc3NbaV1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwic3RlcENvdW50PT0zXFxcIj5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBbaGludF09XFxcImFwcGxpZWRIaW50WzFdXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGFyZ2VpbnB1dFxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwic3VibWl0dGVkRGF0YS50YXNrZWRRdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6b3BhY2l0eVsxXT8nMC4yJzonMSd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cXFwiY2hhbmdlVGFza09wYWNpdHkoZmFsc2UsIDEsICd0YXNrZWRRdHknKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIChibHVyKT1cXFwiY2hhbmdlVGFza09wYWNpdHkodHJ1ZSwgMSwgJ3Rhc2tlZFF0eScpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwic3RlcENvdW50PT00XFxcIj5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiMyosKlxcXCIgd2lkdGg9XFxcIjMwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBbaGludF09XFxcImFwcGxpZWRIaW50WzJdXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm1lZGlucHV0XFxcIiB3aWR0aD1cXFwiNzBcXFwiIGhlaWdodD1cXFwiNjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwiaG91clxcXCIgbWF4TGVuZ3RoPVxcXCIyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOm9wYWNpdHlbMl0/JzAuMic6JzEnfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XFxcImZvY3VzSG91cigpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVxcXCJibHVySG91cigpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gKGZvY3VzKT1cXFwiY2hhbmdlVGFza09wYWNpdHkoZmFsc2UsIDIsICdyZW1UaW1lJylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XFxcImNoYW5nZVRpbWVPcGFjaXR5KDIpXFxcIj48L1RleHRGaWVsZD4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIjpcXFwiIGNsYXNzPVxcXCJtZWRpbnB1dExhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgW2hpbnRdPVxcXCJhcHBsaWVkSGludFszXVxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtZWRpbnB1dFxcXCIgd2lkdGg9XFxcIjcwXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcIm1pbnV0ZXNcXFwiIG1heExlbmd0aD1cXFwiMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpvcGFjaXR5WzNdPycwLjInOicxJ31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVxcXCJmb2N1c01pbigpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVxcXCJibHVyTWluKClcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAoZm9jdXMpPVxcXCJjaGFuZ2VUYXNrT3BhY2l0eShmYWxzZSwgMywgJ3JlbVRpbWUnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cXFwiY2hhbmdlVGltZU9wYWNpdHkoMylcXFwiPjwvVGV4dEZpZWxkPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJ0aW1lVGV4dFxcXCIgY2xhc3M9XFxcIm1lZGlucHV0TGFiZWxcXFwiICh0YXApPVxcXCJjaGFuZ2VUZXh0KClcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwic3RlcENvdW50PT01XFxcIj5cXG4gICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGY2ZWM7XFxcIiBjbGFzcz1cXFwiZmFzIGxhYmVsXzVfMVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBd2Vzb21lISEhXFxcIiBjbGFzcz1cXFwiIGxhYmVsXzVfMlxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDI1O1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMZXQncyBjcmVhdGUgdGhpcyB0YXNrIGJ5IGNsaWtpbmcgZ3JlZW4gYnV0dG9uLlxcXCIgY2xhc3M9XFxcIiBsYWJlbF81XzNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWxsIHRoZSBCZXN0ICFcXFwiIGNsYXNzPVxcXCIgbGFiZWxfNV8zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIipcXFwiIGNvbHVtbnM9XFxcIiosKlxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ3ByZXYnXVxcXCIgW2NvbG9yXT1cXFwiY29tbW9uc1snd2hpdGUnXVxcXCIgW3NpemVdPVxcXCJjb21tb25zWydyb3VuZCddXFxcIiAodGFwcCk9XFxcInByZXZpb3VzKCRldmVudClcXFwiICpuZ0lmPVxcXCJzaG93UHJldj09dHJ1ZVxcXCI+PC9ucy1idXR0b25zPlxcbiAgICAgICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ2Nsb3NlJ11cXFwiIFtjb2xvcl09XFxcImNvbW1vbnNbJ3JlZCddXFxcIiBbc2l6ZV09XFxcImNvbW1vbnNbJ3JvdW5kJ11cXFwiICh0YXBwKT1cXFwiY2FuY2VsKCRldmVudClcXFwiICpuZ0lmPVxcXCJzdGVwQ291bnQgPT0gMSAmJiBpc0VkaXQgIT0gdHJ1ZVxcXCI+PC9ucy1idXR0b25zPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgW25nQ2xhc3NdPVxcXCJhbmltYXRlT2JqXFxcIiAqbmdJZj1cXFwic2hvd05leHQ9PXRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG5zLWJ1dHRvbnMgW3RleHRdPVxcXCJjb21tb25zWyduZXh0J11cXFwiIFtjb2xvcl09XFxcImNvbW1vbnNbJ3doaXRlJ11cXFwiIFtzaXplXT1cXFwiY29tbW9uc1sncm91bmQnXVxcXCIgKHRhcHApPVxcXCJuZXh0KCRldmVudClcXFwiPjwvbnMtYnV0dG9ucz5cXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8bnMtYnV0dG9ucyBbdGV4dF09XFxcImNvbW1vbnNbJ2NoZWNrJ11cXFwiIFtjb2xvcl09XFxcImNvbW1vbnNbJ2dyZWVuJ11cXFwiIFtzaXplXT1cXFwiY29tbW9uc1sncm91bmQnXVxcXCIgKHRhcHApPVxcXCJzdWJtaXQoJGV2ZW50KVxcXCIgKm5nSWY9XFxcInN0ZXBDb3VudCA9PSA1XFxcIj48L25zLWJ1dHRvbnM+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlLCBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCAqIGFzIGRpYWxvZyBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBjb25zdGFudHMsIG1ldHJpY3MgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9EYXRhL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVaVNlcnZpY2UgfSBmcm9tICcuLi91aS91aS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vRGF0YS9kYXRhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy10YXNrLWZvcm1cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Rhc2stZm9ybS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YXNrLWZvcm0uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFza0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbW1vbnM6IHt9O1xuICAgIC8vIHN0ZXBDb3VudDogbnVtYmVyID0gMTtcbiAgICBzdGVwQ291bnQ6IG51bWJlciA9IDE7XG4gICAgc2hvd1ByZXYgPSBmYWxzZTtcbiAgICBzaG93TmV4dCA9IHRydWU7XG4gICAgc3RlcEFycmF5OiBTdHJpbmdbXSA9IFtcbiAgICAgICAgXCJXaGF0J3MgdGhlIHRhc2sgP1wiLFxuICAgICAgICBcIkhvdyB3b3VsZCB5b3UgbWVhc3VyZSBpdCA/XCIsXG4gICAgICAgIFwiR2l2ZSB5b3Vyc2VsZiBhIHRhcmdldCA/XCIsXG4gICAgICAgIFwiV2FubmEgc2V0IGEgcmVtaW5kZXIgP1wiLFxuICAgICAgICBcIkFyZSB5b3Ugc3VyZSBhYm91dCB0aGlzID9cIixcbiAgICBdO1xuICAgIGhpbnQ6IFN0cmluZ1tdID0gW1xuICAgICAgICBcIkkgd2FubmEgd2Fsay4uLlwiICsgXCJcXG5cIiArIFwiLi4uLi4uLlwiLFxuICAgICAgICBcIjE1Li4uP1wiLFxuICAgICAgICBcIjAzXCIsXG4gICAgICAgIFwiMTVcIixcbiAgICBdO1xuICAgIHRhc2tIaW50OiBTdHJpbmcgPSB0aGlzLmhpbnRbMF07XG4gICAgdGFyZ2V0SGludDogU3RyaW5nID0gdGhpcy5oaW50WzFdO1xuICAgIGhvdXJIaW50OiBTdHJpbmcgPSB0aGlzLmhpbnRbMl07XG4gICAgbWluSGludDogU3RyaW5nID0gdGhpcy5oaW50WzNdO1xuICAgIG1ldHJpY0FycmF5OiBTdHJpbmdbXSA9IFtdO1xuICAgIHRpbWVUZXh0QXJyYXk6IFN0cmluZ1tdID0gW1wiQU1cIiwgXCJQTVwiXTtcbiAgICB0aW1lVGV4dDogU3RyaW5nID0gdGhpcy50aW1lVGV4dEFycmF5WzBdO1xuICAgIG1ldHJpY0l0ZW1DbGFzczoge1xuICAgICAgICBtZXRyaWNJdGVtczogYm9vbGVhbjtcbiAgICAgICAgbWV0cmljSXRlbXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgICB9W10gPSBbXTtcbiAgICBzdWJtaXR0ZWREYXRhOiBEYXRhW1widGFza1N0cnVjdHVyZVwiXSA9IHtcbiAgICAgICAgdGFzazogXCJcIixcbiAgICAgICAgdGFza2VkUXR5OiBcIlwiLFxuICAgICAgICBjb21wUXl0OiBcIi0tXCIsXG4gICAgICAgIG1ldHJpYzogXCJcIixcbiAgICAgICAgcmVtVGltZTogXCJcIixcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIG5vdGlmaWNhdGlvbklkOiBcIlwiLFxuICAgIH07XG4gICAgaG91cjogU3RyaW5nID0gXCJcIjtcbiAgICBtaW51dGVzOiBTdHJpbmcgPSBcIlwiO1xuICAgIGZvckRhdGU6IERhdGU7XG4gICAgb3BhY2l0eTogYm9vbGVhbltdID0gW3RydWUsIHRydWUsIHRydWUsIHRydWVdO1xuICAgIHByZXZlbnREZWFmdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgZGlzbWlzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGFuaW1hdGVPYmo6IHsgYW5pbWF0ZTogYm9vbGVhbiB9ID0geyBhbmltYXRlOiBmYWxzZSB9O1xuICAgIGlzRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGFjdGlvbjogU3RyaW5nID0gXCJcIjtcbiAgICB0YXJnZXQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGJ1czogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0aXZlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBzY3JlZW46IFVpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb250aHM6IERhdGFTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9yRGF0ZSA9IHRoaXMuYWN0aXZlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiZm9yXCJdO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuYWN0aXZlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1widGFyZ2V0XCJdO1xuXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbW1vbnMgPSBjb25zdGFudHM7XG4gICAgICAgIHRoaXMubWV0cmljQXJyYXkgPSBtZXRyaWNzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZXRyaWNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNJdGVtQ2xhc3MucHVzaCh7XG4gICAgICAgICAgICAgICAgbWV0cmljSXRlbXM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWV0cmljSXRlbXNTZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5hY3RpdmUuc25hcHNob3QucGFyYW1zW1wiYWN0aW9uXCJdO1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT0gXCJlZGl0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJkYXRhc1wiXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubWV0cmljU2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgdGhpcy5tZXRyaWNBcnJheS5pbmRleE9mKHRoaXMuc3VibWl0dGVkRGF0YS5tZXRyaWMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnN1Ym1pdHRlZERhdGEucmVtVGltZS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSB0aW1lWzBdLnNwbGl0KFwiOlwiKVswXSB8fCBcIlwiO1xuICAgICAgICAgICAgdGhpcy5taW51dGVzID0gdGltZVswXS5zcGxpdChcIjpcIilbMV0gfHwgXCJcIjtcbiAgICAgICAgICAgIHRoaXMudGltZVRleHQgPSB0aW1lWzFdIHx8IHRoaXMudGltZVRleHRBcnJheVswXTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG4gICAgICAgICAgICBpZiAodGhpcy5ob3VyID09IFwiXCIgfHwgdGhpcy5taW51dGVzID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlbMl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVszXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91cyhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zdGVwQ291bnQgPj0gMikgdGhpcy5zdGVwQ291bnQgPSB0aGlzLnN0ZXBDb3VudCAtIDE7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RlcENvdW50ID4gMSkgdGhpcy5zaG93UHJldiA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy5zaG93UHJldiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ZXBDb3VudCA8PSA0KSB0aGlzLnNob3dOZXh0ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSB0aGlzLnNob3dOZXh0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV4dChldmVudCkge1xuICAgICAgICBsZXQgYW5pbSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RlcENvdW50KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYW5pbSA9IHRoaXMuc3VibWl0dGVkRGF0YS50YXNrID09IFwiXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgYW5pbSA9IHRoaXMuc3VibWl0dGVkRGF0YS5tZXRyaWMgPT0gXCJcIiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBhbmltID0gdGhpcy5zdWJtaXR0ZWREYXRhLnRhc2tlZFF0eSA9PSBcIlwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIC8qaWYgKHRoaXMuaG91ci5sZW5ndGggPT0gMCkgYW5pbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5taW51dGVzLmxlbmd0aCA9PSAwKSBhbmltID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGFuaW0gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLmhvdXIudG9TdHJpbmcoKSkgPiAxMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdXJIb3VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGFuaW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5taW51dGVzLnRvU3RyaW5nKCkpID4gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVyTWluKCk7XG4gICAgICAgICAgICAgICAgICAgIGFuaW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBhbmltID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5pbSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlT2JqLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlT2JqLmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDU1MCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob3VyLnRyaW0oKSAhPSBcIlwiICYmIHRoaXMubWludXRlcy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RlcENvdW50ID09IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEucmVtVGltZSA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91ciArIFwiOlwiICsgdGhpcy5taW51dGVzICsgXCIgXCIgKyB0aGlzLnRpbWVUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLnJlbVRpbWUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RlcENvdW50IDw9IDUpIHRoaXMuc3RlcENvdW50ID0gdGhpcy5zdGVwQ291bnQgKyAxO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ZXBDb3VudCA8IDUpIHRoaXMuc2hvd05leHQgPSB0cnVlO1xuICAgICAgICBlbHNlIHRoaXMuc2hvd05leHQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5zdGVwQ291bnQgPj0gMikgdGhpcy5zaG93UHJldiA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy5zaG93UHJldiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNoYW5nZVRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVUZXh0QXJyYXkuaW5kZXhPZih0aGlzLnRpbWVUZXh0KSA9PSAwKVxuICAgICAgICAgICAgdGhpcy50aW1lVGV4dCA9IHRoaXMudGltZVRleHRBcnJheVsxXTtcbiAgICAgICAgZWxzZSB0aGlzLnRpbWVUZXh0ID0gdGhpcy50aW1lVGV4dEFycmF5WzBdO1xuICAgIH1cblxuICAgIGNhbmNlbChldmVudCkge1xuICAgICAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gICAgfVxuXG4gICAgc3VibWl0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdWJtaXR0ZWREYXRhKTtcbiAgICAgICAgZGlhbG9nXG4gICAgICAgICAgICAuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJXYW5uYSByZXZpZXcgYmVmb3JlIGFkZGluZyA/XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkIFRhc2tcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiZWRpdFwiID09IHRoaXMuYWN0aW9uID8gXCJVcGRhdGVcIiA6IFwiQWRkXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJSZXZpZXdcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vdGlmeUxvZ2ljKCkpIHRoaXMuc3VibWl0Q29uZmlybSh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwQ291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbi5jaGFuZ2VVSSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0Q29uZmlybShhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5idXMuZGF0YUJ1cy5uZXh0KHRoaXMuc3VibWl0dGVkRGF0YSk7XG4gICAgICAgIGlmIChcImVkaXRcIiA9PSBhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hZGQvZWRpdFwiXSwge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGRhdGU6IHRoaXMuZm9yRGF0ZSwgdGFyZ2V0OiB0aGlzLnRhcmdldCB9LFxuICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FkZFwiXSwge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IGRhdGU6IHRoaXMuZm9yRGF0ZSwgdGFyZ2V0OiB0aGlzLnRhcmdldCB9LFxuICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWV0cmljU2VsZWN0ZWQoaW5kZXg6IGFueSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWV0cmljQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubWV0cmljSXRlbUNsYXNzW2ldLm1ldHJpY0l0ZW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWV0cmljSXRlbUNsYXNzW2ldLm1ldHJpY0l0ZW1zU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1ldHJpY0l0ZW1DbGFzc1tpbmRleF0ubWV0cmljSXRlbXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXRyaWNJdGVtQ2xhc3NbaW5kZXhdLm1ldHJpY0l0ZW1zU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5tZXRyaWMgPSB0aGlzLm1ldHJpY0FycmF5W2luZGV4XTtcbiAgICB9XG5cbiAgICBhcHBsaWVkSGludDogU3RyaW5nW10gPSB0aGlzLmhpbnQuc2xpY2UoKTtcbiAgICBjaGFuZ2VUYXNrT3BhY2l0eShmbGFnLCBpbmRleCwgaW5Gb3IpIHtcbiAgICAgICAgbGV0IGlubiA9IDA7XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWVkSGludFtpbmRleF0gPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGluRm9yICE9IFwicmVtVGltZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkRGF0YVtpbkZvcl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWVkSGludFtpbmRleF0gPSB0aGlzLmhpbnRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpZWRIaW50W2luZGV4XSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNIb3VyKCkge1xuICAgICAgICB0aGlzLmFwcGxpZWRIaW50WzJdID0gXCJcIjtcbiAgICAgICAgdGhpcy5vcGFjaXR5WzJdID0gZmFsc2U7XG4gICAgfVxuICAgIGZvY3VzTWluKCkge1xuICAgICAgICB0aGlzLmFwcGxpZWRIaW50WzNdID0gXCJcIjtcbiAgICAgICAgdGhpcy5vcGFjaXR5WzNdID0gZmFsc2U7XG4gICAgfVxuICAgIGJsdXJIb3VyKCkge1xuICAgICAgICBpZiAodGhpcy5ob3VyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGxpZWRIaW50WzJdID0gdGhpcy5oaW50WzJdO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5WzJdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5ob3VyLnRvU3RyaW5nKCkpID4gMTIpIHtcbiAgICAgICAgICAgIHRoaXMuaG91ciA9IChwYXJzZUludCh0aGlzLmhvdXIudG9TdHJpbmcoKSkgLSAxMikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVGV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJsdXJNaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbnV0ZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGllZEhpbnRbM10gPSB0aGlzLmhpbnRbM107XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHlbM10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLm1pbnV0ZXMudG9TdHJpbmcoKSkgPiA2MCkge1xuICAgICAgICAgICAgdGhpcy5taW51dGVzID0gXCIwMFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ3b3JrZWRcIik7XG4gICAgICAgIHRoaXMucHJldmVudERlYWZ1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIGRvdWJsZUNoZWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudERlYWZ1bHQpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhZ2FpblwiKTtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ZW50RGVhZnVsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldE5vdGlmaWNhdGlvbih0aW1lRGVsYXkpIHtcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIZXkhIEZvcmdvdCBzb21ldGhpbmc/XCIsXG4gICAgICAgICAgICAgICAgYm9keTogdGhpcy5zdWJtaXR0ZWREYXRhLnRhc2sudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IENvbG9yKDB4OTliM2ZmKSxcbiAgICAgICAgICAgICAgICBiYWRnZTogMSxcbiAgICAgICAgICAgICAgICBpY29uOiAncmVzOi8vaWNvbjEnLFxuICAgICAgICAgICAgICAgIGF0OiBuZXcgRGF0ZSh0aW1lRGVsYXkpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSkudGhlbihcbiAgICAgICAgICAgIChzY2hlZHVsZUlkcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIElkOiBcIiArIEpTT04uc3RyaW5naWZ5KHNjaGVkdWxlSWRzWzBdKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLm5vdGlmaWNhdGlvbklkID0gc2NoZWR1bGVJZHNbMF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBvY2N1cnJlZDogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFRpbWUoKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBnZXRTY2hlZFRpbWUodGltZVN0cmluZyl7XG4gICAgICAgIGxldCB0ID0gdGltZVN0cmluZy5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQodFszXSksXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aHMubW9udGhzLmluZGV4T2YodFsxXS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICBwYXJzZUludCh0WzJdKSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBhcmFibGVUaW1lKHRoaXMuaG91ci50b1N0cmluZygpLCB0aGlzLnRpbWVUZXh0KSxcbiAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLm1pbnV0ZXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUocGFyc2VJbnQodFszXSksIHRoaXMubW9udGhzLm1vbnRocy5pbmRleE9mKHRbMV0udG9Mb3dlckNhc2UoKSksIHBhcnNlSW50KHRbMl0pLCB0aGlzLmdldENvbXBhcmFibGVUaW1lKHRoaXMuaG91ci50b1N0cmluZygpLCB0aGlzLnRpbWVUZXh0KSwgcGFyc2VJbnQodGhpcy5taW51dGVzLnRvU3RyaW5nKCkpKS5nZXRUaW1lKCkpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgICAgICBwYXJzZUludCh0WzNdKSxcbiAgICAgICAgICAgIHRoaXMubW9udGhzLm1vbnRocy5pbmRleE9mKHRbMV0udG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgICBwYXJzZUludCh0WzJdKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcGFyYWJsZVRpbWUodGhpcy5ob3VyLnRvU3RyaW5nKCksIHRoaXMudGltZVRleHQpLFxuICAgICAgICAgICAgcGFyc2VJbnQodGhpcy5taW51dGVzLnRvU3RyaW5nKCkpXG4gICAgICAgICkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIGdldENvbXBhcmFibGVUaW1lKGhvdXI6IHN0cmluZywgdGltZVRleHQ6IFN0cmluZyl7XG4gICAgICAgIGlmKHRpbWVUZXh0ID09IFwiQU1cIil7XG4gICAgICAgICAgICBpZihob3VyID09IFwiMTJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHBhcnNlSW50KGhvdXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIHBhcnNlSW50KGhvdXIpKzEyO1xuXG4gICAgfVxuXG4gICAgbm90aWZ5TG9naWMoKXtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5ob3VyICE9IFwiXCIgJiZcbiAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuaG91ci50b1N0cmluZygpKSAhPSAwICYmXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMgIT0gXCJcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSk7XG4gICAgICAgICAgICAvL2xldCBjdXJyVGltZVRleHQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpLnNwbGl0KFwiIFwiKVsxXTtcbiAgICAgICAgICAgIGxldCBjdXJyVGltZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIgXCIpWzBdXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgIGxldCBoID0gY3VyclRpbWVbMF07XG4gICAgICAgICAgICBsZXQgbSA9IGN1cnJUaW1lWzFdO1xuXG4gICAgICAgICAgICAvL2xldCBkbm93ID0gdGhpcy5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgbGV0IHNjaGVkVGltZSA9IHRoaXMuZ2V0U2NoZWRUaW1lKHRoaXMuZm9yRGF0ZSk7XG4gICAgICAgICAgICBsZXQgdGhpc0hvdXIgPSB0aGlzLmdldENvbXBhcmFibGVUaW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuaG91ci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHRoaXMudGltZVRleHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpc0hvdXIgPiBwYXJzZUludChoKSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIxLi5cIiArIHNjaGVkVGltZSk7IC8vIC0gZG5vd1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Tm90aWZpY2F0aW9uKHNjaGVkVGltZSk7IC8vIC0gZG5vd1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzSG91ciA9PSBwYXJzZUludChoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLm1pbnV0ZXMudG9TdHJpbmcoKSkgPiBwYXJzZUludChtKSkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMi4uXCIgKyBzY2hlZFRpbWUpOyAvLyAtIGRub3dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXROb3RpZmljYXRpb24oc2NoZWRUaW1lKTsgLy8gLSBkbm93XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdvdHRlbiBpbnRvIDJcIik7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NjaGVkdWxpbmcgRmFpbGVkIScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2Fubm90IHNjaGVkdWxlIHRhc2sgZm9yIHBhc3QgdGltZS4nICsnXFxuJysgJ1BsZWFzZSBlbnRlciBhIGFkdmFuY2UgdGltZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT2snXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaWFsb2cuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTY2hlZHVsaW5nIEZhaWxlZCFcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBzY2hlZHVsZSB0YXNrIGZvciBwYXN0IHRpbWUuJyArJ1xcbicrICdQbGVhc2UgZW50ZXIgYSBhZHZhbmNlIHRpbWUuJyxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRpYWxvZy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjaGVkdWxhclwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gc2NoZWR1bGluZyBhc3NpZ25lZCEnLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5tYWlue1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDEyMDtcXG4gICAgbWFyZ2luLXRvcDogNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcXG4gICAgLyogYm9yZGVyLXdpZHRoOiAxOyAqL1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAzO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmJsYWNrVGV4dHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxCdXR0b24gdGV4dD1cXFwidGFza3Mgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj4gLS0+XFxuPCEtLSBhbmRyb2lkRWxldmF0aW9uPVxcXCI0XFxcIiAtLT5cXG48R3JpZExheW91dCByb3dzPVxcXCI3MCosIDMwKlxcXCIgY29sdW1ucz1cXFwiNzUqLCAyNSpcXFwiIFtuZ0NsYXNzXT1cXFwie2RvbmU6IGl0ZW1zLmRvbmV9XFxcIlxcbiAgICBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgIDwhLS0gPEZsZXhib3hMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiPiAtLT5cXG4gICAgPEZsZXhib3hMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgICAgIFt0ZXh0XT1cXFwiaXRlbXMudGFza1xcXCJcXG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDIwO1xcXCI+XFxuICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwiYWxpZ25UZXh0XFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIipcXFwiIGNvbHVtbnM9XFxcIiosKlxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbXMudGFza2VkUXR5XFxcIiBjbGFzcz1cXFwiYmxhY2tUZXh0XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtcy5tZXRyaWNcXFwiIGNsYXNzPVxcXCJibGFja1RleHRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKiwqXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtcy5jb21wUXl0XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtcy5tZXRyaWNcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIDxGbGV4Ym94TGF5b3V0IHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwMTc7XFxcIiBjbGFzcz1cXFwiZmFyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMztcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3tpdGVtcy5yZW1UaW1lIHx8ICctLTotLSd9fVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiAxMDtcXFwiIGNsYXNzPVxcXCJibGFja1RleHRcXFwiPjwvTGFiZWw+XFxuICAgIDwvRmxleGJveExheW91dD5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IH0gZnJvbSAnLi4vZGF0YSc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdGFza3NcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Rhc2tzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Rhc2tzLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgnaXRlbXMnKSBpdGVtczogRGF0YVtcInRhc2tTdHJ1Y3R1cmVcIl07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYnRue1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2OTk3YzksICMwMDdiZmYsICM2OTk3YzkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idG4tcmVke1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ0bi1ncmVlbntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTA7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmR1YWwtYnRue1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiY2Q0ZWUsICMwMDdiZmYsICNiY2Q0ZWUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxufVxcblxcbi5kdWFsLWJ0bi1yZWR7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwO1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbn1cXG5cXG4uZHVhbC1idG4tZ3JlZW57XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwO1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxufVxcblxcbi50cmlwcGxlLWJ0bntcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTA7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYmNkNGVlLCAjMDA3YmZmLCAjYmNkNGVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbn1cXG5cXG4udHJpcHBsZS1idG4tcmVke1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNTtcXG59XFxuXFxuLnRyaXBwbGUtYnRuLWdyZWVue1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1O1xcbn1cXG5cXG4uYnRuX3JvdW5kX2JsdWV7XFxuICAgIHdpZHRoOiA1MDtcXG4gICAgaGVpZ2h0OiA1MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTA7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ0bl9yb3VuZF9yZWR7XFxuICAgIHdpZHRoOiA1MDtcXG4gICAgaGVpZ2h0OiA1MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTA7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnRuX3JvdW5kX2dyZWVue1xcbiAgICB3aWR0aDogNTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwO1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHBhbGVncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ0bl9yb3VuZF93aGl0ZXtcXG4gICAgd2lkdGg6IDUwO1xcbiAgICBoZWlnaHQ6IDUwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIFt0ZXh0XT1cXFwidGV4dFxcXCIgKHRhcCk9XFxcIm9uVGFwKClcXFwiIGFuZHJvaWRFbGV2YXRpb249XFxcIjBcXFwiIGNsYXNzPVxcXCJidG5cXFwiICpuZ0lmPVxcXCJibHVlRnVsbD09dHJ1ZVxcXCI+PC9CdXR0b24+XFxuPEJ1dHRvbiBbdGV4dF09XFxcInRleHRcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuLXJlZFxcXCIgKm5nSWY9XFxcInJlZEZ1bGw9PXRydWVcXFwiPjwvQnV0dG9uPlxcbjxCdXR0b24gW3RleHRdPVxcXCJ0ZXh0XFxcIiAodGFwKT1cXFwib25UYXAoKVxcXCIgYW5kcm9pZEVsZXZhdGlvbj1cXFwiMFxcXCIgY2xhc3M9XFxcImJ0bi1ncmVlblxcXCIgKm5nSWY9XFxcImdyZWVuRnVsbD09dHJ1ZVxcXCI+PC9CdXR0b24+XFxuXFxuPEJ1dHRvbiBbdGV4dF09XFxcInRleHRcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCIwXFxcIiBjbGFzcz1cXFwiZHVhbC1idG5cXFwiICpuZ0lmPVxcXCJibHVlSGFsZj09dHJ1ZVxcXCI+PC9CdXR0b24+XFxuPEJ1dHRvbiBbdGV4dF09XFxcInRleHRcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCIwXFxcIiBjbGFzcz1cXFwiZHVhbC1idG4tcmVkXFxcIiAqbmdJZj1cXFwicmVkSGFsZj09dHJ1ZVxcXCI+PC9CdXR0b24+XFxuPEJ1dHRvbiBbdGV4dF09XFxcInRleHRcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCIwXFxcIiBjbGFzcz1cXFwiZHVhbC1idG4tZ3JlZW5cXFwiICpuZ0lmPVxcXCJncmVlbkhhbGY9PXRydWVcXFwiPjwvQnV0dG9uPlxcblxcbjxCdXR0b24gW3RleHRdPVxcXCJ0ZXh0XFxcIiAodGFwKT1cXFwib25UYXAoKVxcXCIgYW5kcm9pZEVsZXZhdGlvbj1cXFwiMFxcXCIgY2xhc3M9XFxcInRyaXBwbGUtYnRuXFxcIiAqbmdJZj1cXFwiYmx1ZVF0cj09dHJ1ZVxcXCI+PC9CdXR0b24+XFxuPEJ1dHRvbiBbdGV4dF09XFxcInRleHRcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCIwXFxcIiBjbGFzcz1cXFwidHJpcHBsZS1idG4tcmVkXFxcIiAqbmdJZj1cXFwicmVkUXRyPT10cnVlXFxcIj48L0J1dHRvbj5cXG48QnV0dG9uIFt0ZXh0XT1cXFwidGV4dFxcXCIgKHRhcCk9XFxcIm9uVGFwKClcXFwiIGFuZHJvaWRFbGV2YXRpb249XFxcIjBcXFwiIGNsYXNzPVxcXCJ0cmlwcGxlLWJ0bi1ncmVlblxcXCIgKm5nSWY9XFxcImdyZWVuUXRyPT10cnVlXFxcIj48L0J1dHRvbj5cXG5cXG48QnV0dG9uIHRleHQ9XFxcIiYjeGYwMGQ7XFxcIiAodGFwKT1cXFwib25UYXAoKVxcXCIgYW5kcm9pZEVsZXZhdGlvbj1cXFwiNFxcXCIgY2xhc3M9XFxcImZhc1xcXCIgW25nQ2xhc3NdPVxcXCJyb3VuZEJ0bkNsYXNzXFxcIlxcbiAgICAqbmdJZj1cXFwicm91bmRCdG5DbG9zZT09dHJ1ZVxcXCI+PC9CdXR0b24+XFxuPEJ1dHRvbiB0ZXh0PVxcXCImI3hmMDBjO1xcXCIgKHRhcCk9XFxcIm9uVGFwKClcXFwiIGFuZHJvaWRFbGV2YXRpb249XFxcIjRcXFwiIGNsYXNzPVxcXCJmYXNcXFwiIFtuZ0NsYXNzXT1cXFwicm91bmRCdG5DbGFzc1xcXCJcXG4gICAgKm5nSWY9XFxcInJvdW5kQnRuQ2hlY2s9PXRydWVcXFwiPjwvQnV0dG9uPlxcbjxCdXR0b24gdGV4dD1cXFwiJiN4ZjA2NztcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCI0XFxcIiBjbGFzcz1cXFwiZmFzXFxcIiBbbmdDbGFzc109XFxcInJvdW5kQnRuQ2xhc3NcXFwiXFxuICAgICpuZ0lmPVxcXCJyb3VuZEJ0blBsdXM9PXRydWVcXFwiPjwvQnV0dG9uPlxcbjxCdXR0b24gdGV4dD1cXFwiJiN4ZjA1MztcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCI0XFxcIiBjbGFzcz1cXFwiZmFzXFxcIiBbbmdDbGFzc109XFxcInJvdW5kQnRuQ2xhc3NcXFwiXFxuICAgICpuZ0lmPVxcXCJyb3VuZEJ0bkJhY2s9PXRydWVcXFwiPjwvQnV0dG9uPlxcbjxCdXR0b24gdGV4dD1cXFwiJiN4ZjA1NDtcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIiBhbmRyb2lkRWxldmF0aW9uPVxcXCI0XFxcIiBjbGFzcz1cXFwiZmFzXFxcIiBbbmdDbGFzc109XFxcInJvdW5kQnRuQ2xhc3NcXFwiXFxuICAgICpuZ0lmPVxcXCJyb3VuZEJ0bk5leHQ9PXRydWVcXFwiPjwvQnV0dG9uPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1idXR0b25zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9idXR0b25zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2J1dHRvbnMuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgdGV4dDogU3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IFN0cmluZztcbiAgICBASW5wdXQoKSBjb2xvcjogU3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIHRhcHAgPSBuZXcgRXZlbnRFbWl0dGVyPFN0cmluZz4oKTtcblxuICAgIGJsdWVGdWxsOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVkRnVsbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGdyZWVuRnVsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYmx1ZUhhbGY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByZWRIYWxmOiBib29sZWFuID0gZmFsc2U7XG4gICAgZ3JlZW5IYWxmOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBibHVlUXRyOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVkUXRyOiBib29sZWFuID0gZmFsc2U7XG4gICAgZ3JlZW5RdHI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJvdW5kQnRuQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByb3VuZEJ0bkJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByb3VuZEJ0bk5leHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByb3VuZEJ0bkNoZWNrOiBib29sZWFuID0gZmFsc2U7XG4gICAgcm91bmRCdG5QbHVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICByb3VuZEJ0bkNsYXNzOiB7XG4gICAgICAgIGJ0bl9yb3VuZF9ibHVlOiBib29sZWFuO1xuICAgICAgICBidG5fcm91bmRfd2hpdGU6IGJvb2xlYW47XG4gICAgICAgIGJ0bl9yb3VuZF9yZWQ6IGJvb2xlYW47XG4gICAgICAgIGJ0bl9yb3VuZF9ncmVlbjogYm9vbGVhbjtcbiAgICB9ID0ge1xuICAgICAgICBidG5fcm91bmRfYmx1ZTogZmFsc2UsXG4gICAgICAgIGJ0bl9yb3VuZF93aGl0ZTogZmFsc2UsXG4gICAgICAgIGJ0bl9yb3VuZF9yZWQ6IGZhbHNlLFxuICAgICAgICBidG5fcm91bmRfZ3JlZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXh0KTtcbiAgICAgICAgaWYgKFwic2luZ2xlXCIgPT0gdGhpcy5zaXplKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdWVGdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZEZ1bGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmVlbkZ1bGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdWVGdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcImRvdWJsZVwiID09IHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVlSGFsZiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRIYWxmID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JlZW5IYWxmID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVlSGFsZiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJjZW50XCIgPT0gdGhpcy5zaXplKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdWVRdHIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkUXRyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JlZW5RdHIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdWVRdHIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFwicm91bmRcIiA9PSB0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91bmRCdG5DbG9zZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmV2XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91bmRCdG5CYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZEJ0bk5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2hlY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZEJ0bkNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBsdXNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZEJ0blBsdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdW5kQnRuTmV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdW5kQnRuQ2xhc3MuYnRuX3JvdW5kX2JsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZEJ0bkNsYXNzLmJ0bl9yb3VuZF93aGl0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZEJ0bkNsYXNzLmJ0bl9yb3VuZF9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3VuZEJ0bkNsYXNzLmJ0bl9yb3VuZF9ncmVlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91bmRCdG5DbGFzcy5idG5fcm91bmRfYmx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRhcCgpIHtcbiAgICAgICAgdGhpcy50YXBwLmVtaXQoXCJiYWNrXCIpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIubWFpbntcXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcXG59XFxuXFxuLmhlYWRlcntcXG4gIC8qIGZvbnQtc2l6ZTogMjU7ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIC8qIG1hcmdpbi10b3A6IC0yMDsgKi9cXG59XFxuXFxuLm1IZWFke1xcbiAgaGVpZ2h0OiA1MDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcIm1haW4gbUhlYWRcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIzMCwqLDMwXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDM5O1xcXCIgY2xhc3M9XFxcImZhcyBoZWFkZXIgaDJcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAodGFwKT1cXFwidG9nZ2xlTWVudSgpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiIGNsYXNzPVxcXCJoZWFkZXIgaDJcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPCEtLSA8TGFiZWwgdGV4dD1cXFwieFxcXCIgY2xhc3M9XFxcImZhcyBoZWFkZXIgaDJcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIj48L0xhYmVsPiAtLT5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJcXFwiIGNsYXNzPVxcXCJmYXMgaGVhZGVyIGgyXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCI+PC9MYWJlbD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvQWN0aW9uQmFyPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpU2VydmljZSB9IGZyb20gJy4uL3VpLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zaWRlLWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGUtZHJhd2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVpOiBVaVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpe1xuICAgIHRoaXMudWkudG9nZ2xlRHJhd2VyKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVpU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfZHJhd2VyU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xuICAgIHByaXZhdGUgX2Z1bGxNb2RlID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPihudWxsKTtcblxuICAgIGdldCBkcmF3ZXJTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdlclN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBnZXQgZnVsbE1vZGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bGxNb2RlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpe1xuICAgICAgICB0aGlzLl9kcmF3ZXJTdGF0ZS5uZXh0KG51bGwpO1xuICAgIH1cbiAgICBjaGFuZ2VVSSgpe1xuICAgICAgICB0aGlzLl9mdWxsTW9kZS5uZXh0KG51bGwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOlxuLy8gbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
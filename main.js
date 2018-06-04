(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding: 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: center;\r\n    background: #efede0;\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1.8em;\r\n    color: grey;\r\n    font-weight: 100;\r\n    padding: 0 20px 0 20px;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n    margin: 20px 0 0 0;\r\n    text-align: center;\r\n    text-transform: uppercase;    \r\n}\r\n\r\n.navigation {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n}\r\n\r\n.input {\r\n   margin: 20px 10px 0 10px; \r\n   width: 200px;\r\n}\r\n\r\n@media(min-width: 576px){\r\n    .input {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n.input:focus {\r\n    outline: none;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n@media(min-width: 576px){\r\n    .buttons {\r\n        flex-direction: row;\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n.button {\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 10px 10px 10px 10px;\r\n    height: 30px;\r\n    width: 150px;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    transition: all 0.2s linear;\r\n}\r\n\r\n@media(min-width: 576px){\r\n    .button {\r\n        margin: 20px 10px 0 10px;\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n.add {\r\n    background: #47c76d;\r\n}\r\n\r\n.add:hover {\r\n    background: #58da7f;\r\n}\r\n\r\n.remove {\r\n    background: #d45151;\r\n}\r\n\r\n.remove:hover {\r\n    background: #e25d5d;\r\n}\r\n\r\n.clear {\r\n    background: #4794c7;\r\n}\r\n\r\n.clear:hover {\r\n    background: #56a6db;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: flex;\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 20px 10px 0 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <header class=\"header\">\n    <h1>ToDoList for MDBootstrap</h1>\n  </header>\n\n  <div class=\"navigation\">\n    <h2>Add your task:</h2>\n    <input [(ngModel)]=\"newTask\" class=\"input\" type=\"text\" maxlength=\"30\">\n    <div class=\"buttons\">\n      <button (click)=\"add()\" class=\"button add\">Add</button>\n      <button (click)=\"remove()\" class=\"button remove\">Remove</button>\n      <button (click)=\"clear()\" class=\"button clear\">Clear</button>\n    </div>\n  </div>\n\n  <div class=\"content\">\n    <ul>\n      <li *ngFor=\"let task of tasksList\">\n        {{task}}\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.newTask = '';
        this.tasksList = [];
        this.defaultTitle = ' | Task number ';
    }
    AppComponent.prototype.add = function () {
        this.tasksList.push(this.newTask + this.defaultTitle + this.tasksList.length);
        this.newTask = '';
        console.log(this.tasksList);
    };
    AppComponent.prototype.remove = function () {
        this.tasksList.pop();
        console.log(this.tasksList);
    };
    AppComponent.prototype.clear = function () {
        this.tasksList = [];
        console.log(this.tasksList);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Citrix94\Desktop\mdbb\toDoList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
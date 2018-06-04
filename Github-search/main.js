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

/***/ "./src/app/Services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _repos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repos */ "./src/app/repos.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.users = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "", "", 0, 0, 0);
        this.repos = new _repos__WEBPACK_IMPORTED_MODULE_3__["Repos"]("", "", "");
        this.gitUserError = false;
    }
    SearchService.prototype.gitUser = function (searchName) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/" + searchName + "?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].myApi).toPromise().then(function (getResponse) {
                _this.users.name = getResponse.name;
                _this.users.login = getResponse.login;
                _this.users.avatar_url = getResponse.avatar_url;
                _this.users.html_url = getResponse.html_url;
                _this.users.public_repos = getResponse.public_repos;
                _this.users.followers = getResponse.followers;
                _this.users.following = getResponse.following;
                _this.gitUserError = false;
                resolve();
            }, function (error) {
                _this.users.name = "Nicholas-muchiri";
                _this.users.login = "blindspot";
                _this.users.avatar_url = "assets/arrow.png";
                _this.users.html_url = "https://github.com";
                _this.users.public_repos = 0;
                _this.users.followers = 0;
                _this.users.following = 0;
                _this.gitUserError = true;
                reject(error);
            });
        });
        return promise;
    };
    SearchService.prototype.getUserRepos = function (searchName) {
        var _this = this;
        var myPromise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/" + searchName + "/repos?order=created&sort=asc?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].myApi).toPromise().then(function (getRepoResponse) {
                _this.newRepo = getRepoResponse;
                resolve();
            }, function (error) {
                reject(error);
            });
        });
        return myPromise;
    };
    SearchService.prototype.gitRepos = function (searchName, toShow) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/search/repositories?q=" + searchName + "&per_page=" + toShow + "&sort=forks&order=asc?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].myApi).toPromise().then(function (getRepoResponse) {
                // console.log("success")
                _this.searchRepo = getRepoResponse.items;
                resolve();
            }, function (error) {
                _this.searchRepo = "error";
                reject(error);
            });
        });
        return promise;
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-search-form></app-search-form>\n"

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
    }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routing_routing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing/routing/routing.module */ "./src/app/routing/routing/routing.module.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _pipes_upper_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/upper.pipe */ "./src/app/pipes/upper.pipe.ts");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "./src/app/pipes/reverse.pipe.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _repos_repos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./repos/repos.component */ "./src/app/repos/repos.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _repos_repos_component__WEBPACK_IMPORTED_MODULE_14__["RepositoriesComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"],
                _pipes_upper_pipe__WEBPACK_IMPORTED_MODULE_11__["UpperPipe"],
                _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_12__["ReversePipe"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_13__["HighlightDirective"],
                _repos_repos_component__WEBPACK_IMPORTED_MODULE_14__["RepositoriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _routing_routing_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elem) {
        elem.nativeElement.style.backgroundColor = "#B71427";
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n* {box-sizing: border-box;}\n\n.topnav {\n  overflow: hidden;\n  background-color: #00FFFF;\n}\n\n.topnav a {\n  float: left;\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.topnav a.active {\n  background-color: #00FFFF;\n  color: white;\n}\n\n.topnav .search-container {\n  float: right;\n}\n\n@media screen and (max-width: 600px) {\n  .topnav .search-container {\n    float: none;\n  }\n  .topnav a{\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"topnav\">\n  <a class=\"nav-link\" routerLink='/users' routerLinkActive='active'>Search Users</a>\n  <a class=\"nav-link\" routerLink='/repos' routerLinkActive='active'>Search Repositories</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/reverse.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        var reversedStr = value.split(" ").reverse().join().replace(",", " ");
        return reversedStr;
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/pipes/upper.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/upper.pipe.ts ***!
  \*************************************/
/*! exports provided: UpperPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperPipe", function() { return UpperPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpperPipe = /** @class */ (function () {
    function UpperPipe() {
    }
    UpperPipe.prototype.transform = function (value) {
        return value.toUpperCase;
    };
    UpperPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'upper'
        })
    ], UpperPipe);
    return UpperPipe;
}());



/***/ }),

/***/ "./src/app/repos.ts":
/*!**************************!*\
  !*** ./src/app/repos.ts ***!
  \**************************/
/*! exports provided: Repos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repos", function() { return Repos; });
var Repos = /** @class */ (function () {
    function Repos(name, html_url, description) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
    }
    return Repos;
}());



/***/ }),

/***/ "./src/app/repos/repos.component.css":
/*!*******************************************!*\
  !*** ./src/app/repos/repos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body*/\n.container {\n    margin-top: 2rem;\n}\np {\n    text-indent: 2rem;\n    font-family: 'monospace', sans-serif;\n}\n.btn{\n    margin-top: 10px;\n    background-color: #1E90FF;\n}\n.loadMorebtn {\n    text-align: center;\n}\n.display{\n    float: left;\n    margin-bottom: 0.3rem;\n}\na:hover {\n    text-decoration: none;\n    color: #1E90FF;\n}\n/*search form*/\n.search-form p {\n    font-size: 23px;\n    margin: 0;\n    justify-content: left;\n    align-items: left;\n    position: -webkit-sticky;\n    position: sticky;\n}\n/*media query*/\n@media (min-width: 992px) {\n    .navbar-expand-lg {\n        height: 85px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/repos/repos.component.html":
/*!********************************************!*\
  !*** ./src/app/repos/repos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng-progress></ng-progress>\n  <div class=\"row search\">\n    <div class=\"col-md-12 search-form\">\n      <app-search-form (getName)='searchRepos($event)'></app-search-form>\n      <p>Enter repository name</p>\n      <br />\n    </div>\n  </div>\n  <div class=\"row main-content\">\n    <div class=\"col-md-12 user-details\">\n      <div >\n        <div class=\"table table-striped\">\n          <table class=\"table\">\n            <tbody>\n            <tr *ngFor='let repository of gitRepoRequest.searchRepo'>\n              <td>\n                <h4>\n                  <a href=\"{{repository.html_url}}\" >{{repository.name}}</a>\n                </h4>\n\n                <p>Description: {{repository.description}}</p>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 loadMorebtn\">\n      <button class=\"btn\" (click)=\"loadMore()\">load more</button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/repos/repos.component.ts":
/*!******************************************!*\
  !*** ./src/app/repos/repos.component.ts ***!
  \******************************************/
/*! exports provided: RepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function() { return RepositoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/search.service */ "./src/app/Services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepositoriesComponent = /** @class */ (function () {
    function RepositoriesComponent(gitRepoRequest) {
        this.gitRepoRequest = gitRepoRequest;
        this.resultCount = 7;
    }
    RepositoriesComponent.prototype.searchRepos = function (name) {
        this.searchRepo = "";
        for (var i = 0; i < name.length; i++) {
            if (name.charAt(i) === " ") {
                this.searchRepo = this.searchRepo.concat("+");
            }
            else {
                this.searchRepo = this.searchRepo.concat(name.charAt(i));
            }
        }
        this.resultCount = 10;
        this.getDataFunction();
    };
    RepositoriesComponent.prototype.loadMore = function () {
        this.resultCount += 10;
        this.getDataFunction();
    };
    RepositoriesComponent.prototype.ngOnInit = function () {
        this.resultCount = 1;
        this.gitRepoRequest.gitRepos(this.searchRepo, this.resultCount);
        this.repoError = false;
    };
    RepositoriesComponent.prototype.getDataFunction = function () {
        this.gitRepoRequest.gitRepos(this.searchRepo, this.resultCount);
        if (this.gitRepoRequest.searchRepo === "error") {
            this.repoError = true;
        }
        else {
            this.repoError = false;
        }
    };
    RepositoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repositories',
            template: __webpack_require__(/*! ./repos.component.html */ "./src/app/repos/repos.component.html"),
            styles: [__webpack_require__(/*! ./repos.component.css */ "./src/app/repos/repos.component.css")],
            providers: [_Services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]]
        }),
        __metadata("design:paramtypes", [_Services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], RepositoriesComponent);
    return RepositoriesComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing/routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/routing/routing/routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _repos_repos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../repos/repos.component */ "./src/app/repos/repos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "users", component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: "repos", component: _repos_repos_component__WEBPACK_IMPORTED_MODULE_4__["RepositoriesComponent"] },
    { path: "", redirectTo: "/users", pathMatch: "full" }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n    border-radius: 0.5rem;\n    margin-right: 1rem;\n    width: 350px;\n    padding: 0.7em;\n}\n.form-group{\n    display: flex;\n    justify-content: left;\n}\nbutton{\n    background-color: #1E90FF;\n}\n@media (max-width: 550px){\n    button{\n        display: none;\n    }\n    .form-control{\n        width: 100%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"lookFor(searchForm)\" #searchForm=\"ngForm\">\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"find\" placeholder=\"Enter username\" [(ngModel)]=\"searchInfo.find\" #find='ngModel'>\n    <button type=\"submit\" class=\"btn\"> Search</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.getName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchFormComponent.prototype.getData = function () {
        this.getName.emit(this.searchTerm);
        this.searchTerm = '';
    };
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "getName", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body*/\n.col-md-12 {\n    text-align: center;\n}\n.container {\n    margin-top: 2rem;\n}\na:hover {\n    text-decoration: none;\n    color: #1E90FF;\n}\n/* avatar*/\nimg {\n    max-width: 80%;\n    border-radius: 670px;\n}\n.image-right {\n    padding-top: 6rem;\n    text-align: center;\n}\n/*github user*/\n.git-user {\n    padding-top: 1rem;\n}\n.git-user-content {\n    padding-bottom: 7rem;\n}\n.git-table h3 {\n    justify-content: center;\n    font-size: 70px;\n    display: flex;\n}\n/*github user repos*/\n.my-repos p {\n    text-indent: 3rem;\n    text-align: left;\n}\n.desc{\n    text-align: left;\n}\ntr {\n    font-size: 16px;\n}\na:hover {\n    text-decoration: none;\n}\ntd a {\n    font-size: 25px;\n}\n/*search form*/\n.search-form p {\n    font-size: 20px;\n    margin: 0;\n    justify-content: left;\n    align-items: left;\n    position: -webkit-sticky;\n    position: sticky\n}\n/*media query*/\n@media (min-width: 992px) {\n    .navbar-expand-lg {\n        height: 85px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-progress></ng-progress>\n<div class=\"row search\">\n  <div class=\"col-md-12 search-bar\">\n    <app-search-form (getName)='searchUser($event)'></app-search-form>\n  </div>\n</div>\n<div class=\"row git-user-content\">\n  <div class=\"col-md-7 git-user\">\n    <div class=\"table git-table\">\n      <h3 appHighlight> {{users.name | reverse}}</h3>\n      <table class=\"table info-bio\">\n        <tbody>\n        <tr>\n          <th scope=\"row\">Github Username:</th>\n          <td> <a href=\"{{users.html_url}}\" target=\"_blank\">{{users.login}}</a></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Number of Repos:</th>\n          <td>{{users.public_repos}}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Followers:</th>\n          <td>{{users.followers}}</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Following</th>\n          <td>{{users.following}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-md-5 image-right\">\n    <img src=\"{{users.avatar_url}}\" alt=\"Git User avatar loading \">\n  </div>\n</div>\n<hr>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"gitUserRepos.gitUserError===false\" class=\"col-md-12 user-repos\">\n      <h3>Repositories</h3>\n      <div class=\"table git-table\">\n        <table class=\"table my-repos\">\n          <tbody>\n          <tr *ngFor='let repository of gitUserRepos.newRepo'>\n            <td>\n              <a href=\"{{repository.html_url}}\" target=\"_blank\" >{{repository.name}}</a>\n              <br>\n              <p class=\"desc\">Description: {{repository.description}}</p>\n              <br>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/search.service */ "./src/app/Services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(gitUserRequests, gitUserRepos) {
        this.gitUserRequests = gitUserRequests;
        this.gitUserRepos = gitUserRepos;
        this.searchName = 'Nicholas-muchiri';
    }
    SearchComponent.prototype.searchUser = function (name) {
        this.gitUser = '';
        for (var i = 0; i < name.length; i++) {
            //validate username
            if (name.charAt(i) === " " || name.charAt(i) === "?" || name.charAt(i) === "/") {
                alert("Invalid username.");
                this.searchName = 'Nicholas-muchiri';
                break;
            }
            else {
                this.gitUser = this.gitUser.concat(name.charAt(i));
            }
        }
        this.searchName = this.gitUser;
        this.ngOnInit();
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.gitUserRequests.gitUser(this.searchName);
        this.users = this.gitUserRequests.users;
        this.gitUserRepos.getUserRepos(this.searchName);
        console.log(this.gitUserRepos.newRepo);
    };
    SearchComponent.prototype.searchUsers = function () {
        this.gitUserRequests.gitUser(this.searchName);
        this.users = this.gitUserRequests.users;
        this.gitUserRepos.getUserRepos(this.searchName);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            providers: [_Services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]],
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], _Services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, login, avatar_url, html_url, public_repos, followers, following) {
        this.name = name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.public_repos = public_repos;
        this.followers = followers;
        this.following = following;
    }
    return User;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    myApi: " 1a7faece6a8412e05e9c1f28e1e9c326d8dc6af1"
};


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

module.exports = __webpack_require__(/*! /home/nicholas/Github-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
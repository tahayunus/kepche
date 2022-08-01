(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-taxi-call-taxi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/call-taxi/call-taxi.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/call-taxi/call-taxi.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <span>{{ 'CALL_TAXI' | translate }}</span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\" padding>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\"></empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"map\" [text]=\"'EMPTY_PLACES'  | translate\"></empty-view>\r\n\r\n\r\n\r\n  <ion-grid fixed class=\"ion-no-padding\">\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\"\r\n        *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"places.length\">\r\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left\r\n        *ngFor=\"let place of places\">\r\n        <app-place-card [routerLink]=\"['./' + place.id + '/' + place.slug]\"\r\n          [place]=\"place\" [extraParams]=\"{ location: location, unit: preference.unit }\"\r\n          [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/call-taxi/call-taxi.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/call-taxi/call-taxi.module.ts ***!
  \*****************************************************/
/*! exports provided: CallTaxiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTaxiPageModule", function() { return CallTaxiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _call_taxi_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-taxi.page */ "./src/app/pages/call-taxi/call-taxi.page.ts");






var CallTaxiPageModule = /** @class */ (function () {
    function CallTaxiPageModule() {
    }
    CallTaxiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _call_taxi_page__WEBPACK_IMPORTED_MODULE_5__["CallTaxiPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _call_taxi_page__WEBPACK_IMPORTED_MODULE_5__["CallTaxiPage"]
                    }
                ])
            ]
        })
    ], CallTaxiPageModule);
    return CallTaxiPageModule;
}());



/***/ }),

/***/ "./src/app/pages/call-taxi/call-taxi.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/call-taxi/call-taxi.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGwtdGF4aS9jYWxsLXRheGkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/call-taxi/call-taxi.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/call-taxi/call-taxi.page.ts ***!
  \***************************************************/
/*! exports provided: CallTaxiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTaxiPage", function() { return CallTaxiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var CallTaxiPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CallTaxiPage, _super);
    function CallTaxiPage(injector, http, geolocationService, placeService, categoryService, httpClient) {
        var _this = _super.call(this, injector) || this;
        _this.http = http;
        _this.geolocationService = geolocationService;
        _this.placeService = placeService;
        _this.categoryService = categoryService;
        _this.httpClient = httpClient;
        _this.secondcatid = 'all';
        _this.params = {};
        _this.categories = [];
        _this.secondcategories = [];
        _this.places = [];
        _this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        _this.skeletonArray = Array(12);
        _this.params = Object.assign({}, _this.getQueryParams());
        _this.params.unit = _this.preference.unit;
        _this.params.limit = 20;
        _this.params.page = 0;
        return _this;
    }
    CallTaxiPage.prototype.ngOnInit = function () {
        this.setupObservables();
    };
    CallTaxiPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    CallTaxiPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    CallTaxiPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title, coords;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTrans('PLACES')];
                    case 1:
                        title = _a.sent();
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        if (!!this.places.length) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 2:
                        _a.sent();
                        if (this.params.category) {
                            this.category = new src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"];
                            this.category.id = this.params.category;
                            this.category.fetch();
                            this.params.category = this.category;
                        }
                        if (!this.params.nearby) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 3:
                        coords = _a.sent();
                        this.location = coords;
                        this.params.location = coords;
                        return [3 /*break*/, 5];
                    case 4:
                        this.loadLocation();
                        _a.label = 5;
                    case 5:
                        this.loadData();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CallTaxiPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    CallTaxiPage.prototype.loadLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        return [2 /*return*/, coords];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CallTaxiPage.prototype.clickEvent = function (event) {
        this.secondcatid = event;
        console.log('scatid', this.secondcatid);
    };
    CallTaxiPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var placeses, placeses_1, placeses_1_1, place, err_1, message;
            var e_1, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.placeService.loadTaxi(this.params)];
                    case 1:
                        placeses = _b.sent();
                        console.log('nazmi yine istedi', placeses);
                        try {
                            for (placeses_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](placeses), placeses_1_1 = placeses_1.next(); !placeses_1_1.done; placeses_1_1 = placeses_1.next()) {
                                place = placeses_1_1.value;
                                this.places.push(place);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (placeses_1_1 && !placeses_1_1.done && (_a = placeses_1.return)) _a.call(placeses_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        this.onRefreshComplete(placeses);
                        if (this.places.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _b.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 3:
                        message = _b.sent();
                        this.showToast(message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CallTaxiPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    };
    CallTaxiPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresher = event.target;
                        this.places = [];
                        this.params.page = 0;
                        if (!this.params.nearby) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadLocation()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        this.params.location = coords;
                        return [3 /*break*/, 3];
                    case 2:
                        this.loadLocation();
                        _a.label = 3;
                    case 3:
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    CallTaxiPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"] },
        { type: src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], CallTaxiPage.prototype, "container", void 0);
    CallTaxiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-taxi',
            template: __webpack_require__(/*! raw-loader!./call-taxi.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/call-taxi/call-taxi.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./call-taxi.page.scss */ "./src/app/pages/call-taxi/call-taxi.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
            src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"],
            src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
    ], CallTaxiPage);
    return CallTaxiPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);




var GeolocationService = /** @class */ (function () {
    function GeolocationService(geolocation) {
        this.geolocation = geolocation;
    }
    GeolocationService.prototype.getCurrentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var position, diff, minutesDifference, options, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        position = null;
                        if (this.lastPosition) {
                            diff = new Date().getTime() - this.lastPosition.timestamp;
                            minutesDifference = Math.floor(diff / 1000 / 60);
                            if (minutesDifference <= 15)
                                return [2 /*return*/, this.lastPosition.coords];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            enableHighAccuracy: false,
                            timeout: 5000,
                            maximumAge: 15 * 60 * 1000,
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 2:
                        position = _a.sent();
                        this.lastPosition = position;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        position = this.lastPosition;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, position ? position.coords : null];
                }
            });
        });
    };
    GeolocationService.prototype.toParseGeoPoint = function (coords) {
        return new parse__WEBPACK_IMPORTED_MODULE_3__["GeoPoint"](coords.latitude, coords.longitude);
    };
    GeolocationService.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
    ]; };
    GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-call-taxi-call-taxi-module-es5.js.map
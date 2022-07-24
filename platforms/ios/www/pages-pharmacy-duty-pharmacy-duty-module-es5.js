(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pharmacy-duty-pharmacy-duty-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pharmacy-duty/pharmacy-duty.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pharmacy-duty/pharmacy-duty.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar mode=\"ios\" color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <span>{{ 'PHARMACY_ON_DUTY' | translate }}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\" padding>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\"></empty-view>\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"map\" [text]=\"'EMPTY_PLACES'  | translate\"></empty-view>\n\n\n\n  <ion-grid fixed class=\"ion-no-padding\">\n    <ion-row *ngIf=\"isLoadingViewVisible\">\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\"\n        *ngFor=\"let item of skeletonArray\">\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\n        </ngx-skeleton-loader>\n      </ion-col>\n    </ion-row>\n\n    <ion-row [@staggerIn]=\"places.length\">\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left\n        *ngFor=\"let place of places\">\n        <app-place-card [routerLink]=\"['./' + place.id + '/' + place.slug]\"\n          [place]=\"place\" [extraParams]=\"{ location: location, unit: preference.unit }\"\n          [scrollObservable]=\"loadAndScroll\">\n        </app-place-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/pharmacy-duty/pharmacy-duty.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/pharmacy-duty/pharmacy-duty.module.ts ***!
  \*************************************************************/
/*! exports provided: PharmacyDutyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyDutyPageModule", function() { return PharmacyDutyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pharmacy_duty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pharmacy-duty */ "./src/app/pages/pharmacy-duty/pharmacy-duty.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");






var PharmacyDutyPageModule = /** @class */ (function () {
    function PharmacyDutyPageModule() {
    }
    PharmacyDutyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pharmacy_duty__WEBPACK_IMPORTED_MODULE_3__["PharmacyDutyPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _pharmacy_duty__WEBPACK_IMPORTED_MODULE_3__["PharmacyDutyPage"]
                    }
                ])
            ]
        })
    ], PharmacyDutyPageModule);
    return PharmacyDutyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pharmacy-duty/pharmacy-duty.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/pharmacy-duty/pharmacy-duty.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light-tint);\n}\n\nion-fab {\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n}\n\nion-segment-button ion-label {\n  font-size: small;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3BoYXJtYWN5LWR1dHkvcGhhcm1hY3ktZHV0eS5zY3NzIiwic3JjL2FwcC9wYWdlcy9waGFybWFjeS1kdXR5L3BoYXJtYWN5LWR1dHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGhhcm1hY3ktZHV0eS9waGFybWFjeS1kdXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuXG5pb24tZmFiIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuXG5pb24tZmFiIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/pharmacy-duty/pharmacy-duty.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pharmacy-duty/pharmacy-duty.ts ***!
  \******************************************************/
/*! exports provided: PharmacyDutyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyDutyPage", function() { return PharmacyDutyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var PharmacyDutyPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PharmacyDutyPage, _super);
    function PharmacyDutyPage(injector, http, geolocationService, placeService, categoryService, httpClient) {
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
    PharmacyDutyPage.prototype.ngOnInit = function () {
        this.setupObservables();
    };
    PharmacyDutyPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PharmacyDutyPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    PharmacyDutyPage.prototype.ionViewDidEnter = function () {
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
    PharmacyDutyPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PharmacyDutyPage.prototype.loadLocation = function () {
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
    PharmacyDutyPage.prototype.clickEvent = function (event) {
        this.secondcatid = event;
        console.log('scatid', this.secondcatid);
    };
    PharmacyDutyPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1, message;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        this.pharmacies = this.httpClient.get('https://art-soft.tech/iyzico/nobetci.php');
                        this.pharmacies.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a, _b, pharmacy, placeses, placeses_1, placeses_1_1, place, e_1_1;
                            var e_1, _c, e_2, _d;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        console.log('my data: ', data);
                                        _e.label = 1;
                                    case 1:
                                        _e.trys.push([1, 6, 7, 8]);
                                        _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data.result), _b = _a.next();
                                        _e.label = 2;
                                    case 2:
                                        if (!!_b.done) return [3 /*break*/, 5];
                                        pharmacy = _b.value;
                                        return [4 /*yield*/, this.placeService.loadPharmacy(this.params, pharmacy.phone)];
                                    case 3:
                                        placeses = _e.sent();
                                        console.log('nazmi yine istedi', pharmacy.phone);
                                        try {
                                            for (placeses_1 = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](placeses)), placeses_1_1 = placeses_1.next(); !placeses_1_1.done; placeses_1_1 = placeses_1.next()) {
                                                place = placeses_1_1.value;
                                                this.places.push(place);
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (placeses_1_1 && !placeses_1_1.done && (_d = placeses_1.return)) _d.call(placeses_1);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                        this.onRefreshComplete(placeses);
                                        if (this.places.length) {
                                            this.showContentView();
                                        }
                                        else {
                                            this.showEmptyView();
                                        }
                                        this.onContentLoaded();
                                        _e.label = 4;
                                    case 4:
                                        _b = _a.next();
                                        return [3 /*break*/, 2];
                                    case 5: return [3 /*break*/, 8];
                                    case 6:
                                        e_1_1 = _e.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 8];
                                    case 7:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 1:
                        err_1 = _a.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 2:
                        message = _a.sent();
                        this.showToast(message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PharmacyDutyPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    };
    PharmacyDutyPage.prototype.onReload = function (event) {
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
    PharmacyDutyPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"] },
        { type: src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], PharmacyDutyPage.prototype, "container", void 0);
    PharmacyDutyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pharmacy-duty-page',
            template: __webpack_require__(/*! raw-loader!./pharmacy-duty.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pharmacy-duty/pharmacy-duty.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./pharmacy-duty.scss */ "./src/app/pages/pharmacy-duty/pharmacy-duty.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"],
            src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
    ], PharmacyDutyPage);
    return PharmacyDutyPage;
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
//# sourceMappingURL=pages-pharmacy-duty-pharmacy-duty-module-es5.js.map
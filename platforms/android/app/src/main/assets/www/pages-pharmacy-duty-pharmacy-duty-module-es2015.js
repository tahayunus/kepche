(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pharmacy-duty-pharmacy-duty-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pharmacy-duty/pharmacy-duty.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pharmacy-duty/pharmacy-duty.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <span>{{ 'PHARMACY_ON_DUTY' | translate }}</span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\" padding>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\"></empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"map\" [text]=\"'EMPTY_PLACES'  | translate\"></empty-view>\r\n\r\n\r\n\r\n  <ion-grid fixed class=\"ion-no-padding\">\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\"\r\n        *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"places.length\">\r\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left\r\n        *ngFor=\"let place of places\">\r\n        <app-place-card [routerLink]=\"['./' + place.id + '/' + place.slug]\"\r\n          [place]=\"place\" [extraParams]=\"{ location: location, unit: preference.unit }\"\r\n          [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pharmacy_duty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pharmacy-duty */ "./src/app/pages/pharmacy-duty/pharmacy-duty.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");






let PharmacyDutyPageModule = class PharmacyDutyPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/pharmacy-duty/pharmacy-duty.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/pharmacy-duty/pharmacy-duty.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light-tint);\n}\n\nion-fab {\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n}\n\nion-segment-button ion-label {\n  font-size: small;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhhcm1hY3ktZHV0eS9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHBoYXJtYWN5LWR1dHlcXHBoYXJtYWN5LWR1dHkuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGhhcm1hY3ktZHV0eS9waGFybWFjeS1kdXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BoYXJtYWN5LWR1dHkvcGhhcm1hY3ktZHV0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xyXG59XHJcblxyXG5pb24tZmFiIHtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cblxuaW9uLWZhYiB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let PharmacyDutyPage = class PharmacyDutyPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, http, geolocationService, placeService, categoryService, httpClient) {
        super(injector);
        this.http = http;
        this.geolocationService = geolocationService;
        this.placeService = placeService;
        this.categoryService = categoryService;
        this.httpClient = httpClient;
        this.secondcatid = 'all';
        this.params = {};
        this.categories = [];
        this.secondcategories = [];
        this.places = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.skeletonArray = Array(12);
        this.params = Object.assign({}, this.getQueryParams());
        this.params.unit = this.preference.unit;
        this.params.limit = 20;
        this.params.page = 0;
    }
    ngOnInit() {
        this.setupObservables();
    }
    setupObservables() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 300);
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const title = yield this.getTrans('PLACES');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
            if (!this.places.length) {
                yield this.showLoadingView({ showOverlay: false });
                if (this.params.category) {
                    this.category = new src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"];
                    this.category.id = this.params.category;
                    this.category.fetch();
                    this.params.category = this.category;
                }
                if (this.params.nearby) {
                    const coords = yield this.geolocationService.getCurrentPosition();
                    this.location = coords;
                    this.params.location = coords;
                }
                else {
                    this.loadLocation();
                }
                this.loadData();
            }
        });
    }
    enableMenuSwipe() {
        return false;
    }
    loadLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                this.location = coords;
                return coords;
            }
            catch (error) {
                return null;
            }
        });
    }
    clickEvent(event) {
        this.secondcatid = event;
        console.log('scatid', this.secondcatid);
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.pharmacies = this.httpClient.get('https://art-soft.tech/iyzico/nobetci.php');
                this.pharmacies.subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log('my data: ', data);
                    for (let pharmacy of data.result) {
                        const placeses = yield this.placeService.loadPharmacy(this.params, pharmacy.phone);
                        console.log('nazmi yine istedi', pharmacy.phone);
                        for (let place of placeses) {
                            this.places.push(place);
                        }
                        this.onRefreshComplete(placeses);
                        if (this.places.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                    }
                }));
            }
            catch (err) {
                this.showContentView();
                this.onRefreshComplete();
                let message = yield this.getTrans('ERROR_NETWORK');
                this.showToast(message);
            }
        });
    }
    onLoadMore(event = {}) {
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    }
    onReload(event = {}) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.refresher = event.target;
            this.places = [];
            this.params.page = 0;
            if (this.params.nearby) {
                const coords = yield this.loadLocation();
                this.location = coords;
                this.params.location = coords;
            }
            else {
                this.loadLocation();
            }
            this.loadData();
        });
    }
};
PharmacyDutyPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"] },
    { type: src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }
];
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
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);




let GeolocationService = class GeolocationService {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    getCurrentPosition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let position = null;
            if (this.lastPosition) {
                const diff = new Date().getTime() - this.lastPosition.timestamp;
                const minutesDifference = Math.floor(diff / 1000 / 60);
                if (minutesDifference <= 15)
                    return this.lastPosition.coords;
            }
            try {
                const options = {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 15 * 60 * 1000,
                };
                position = yield this.geolocation.getCurrentPosition(options);
                this.lastPosition = position;
            }
            catch (error) {
                position = this.lastPosition;
            }
            return position ? position.coords : null;
        });
    }
    toParseGeoPoint(coords) {
        return new parse__WEBPACK_IMPORTED_MODULE_3__["GeoPoint"](coords.latitude, coords.longitude);
    }
};
GeolocationService.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
];
GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
], GeolocationService);



/***/ })

}]);
//# sourceMappingURL=pages-pharmacy-duty-pharmacy-duty-module-es2015.js.map
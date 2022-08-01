(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorite-list-favorite-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/favorite-list/favorite-list.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/favorite-list/favorite-list.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'MY_FAVORITES' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\" class=\"ion-padding\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\" refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"heart\" [text]=\"'EMPTY_FAVORITES' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid fixed>\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\" [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"places.length\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let place of places\">\r\n       \r\n        <app-place-card [routerLink]=\"['../places/' + place.id + '/' + place.slug]\"\r\n          [place]=\"place\"\r\n          [extraParams]=\"{ location: location, unit: preference.unit }\"\r\n          [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/favorite-list/favorite-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favorite-list/favorite-list.module.ts ***!
  \*************************************************************/
/*! exports provided: FavoriteListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListPageModule", function() { return FavoriteListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _favorite_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorite-list */ "./src/app/pages/favorite-list/favorite-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





let FavoriteListPageModule = class FavoriteListPageModule {
};
FavoriteListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _favorite_list__WEBPACK_IMPORTED_MODULE_3__["FavoriteListPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _favorite_list__WEBPACK_IMPORTED_MODULE_3__["FavoriteListPage"]
                }
            ])
        ]
    })
], FavoriteListPageModule);



/***/ }),

/***/ "./src/app/pages/favorite-list/favorite-list.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/favorite-list/favorite-list.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  width: 100%;\n}\nion-card .bg-img {\n  background-size: cover;\n  background-position: 100%;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGUtbGlzdC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXGZhdm9yaXRlLWxpc3RcXGZhdm9yaXRlLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvZmF2b3JpdGUtbGlzdC9mYXZvcml0ZS1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGUtbGlzdC9mYXZvcml0ZS1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59IiwiaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jYXJkIC5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/favorite-list/favorite-list.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/favorite-list/favorite-list.ts ***!
  \******************************************************/
/*! exports provided: FavoriteListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListPage", function() { return FavoriteListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");








let FavoriteListPage = class FavoriteListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"] {
    constructor(injector, geolocationService, placeService) {
        super(injector);
        this.geolocationService = geolocationService;
        this.placeService = placeService;
        this.params = {};
        this.places = [];
        this.skeletonArray = Array(12);
        this.params.limit = 20;
        this.params.page = 0;
    }
    enableMenuSwipe() {
        return true;
    }
    ngOnInit() {
        this.setupObservables();
    }
    setupObservables() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 300);
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.places.length) {
                yield this.showLoadingView({ showOverlay: false });
                this.loadData();
            }
            const title = yield this.getTrans('FAVORITES');
            this.setPageTitle(title);
            this.loadLocation();
        });
    }
    loadLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                this.location = coords;
            }
            catch (err) {
                console.warn(err);
            }
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const places = yield this.placeService.loadFavorites(this.params);
                for (let place of places) {
                    this.places.push(place);
                }
                if (this.places.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
                this.onRefreshComplete(places);
            }
            catch (error) {
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                this.showContentView();
                this.onRefreshComplete();
            }
        });
    }
    onLoadMore(event = {}) {
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    }
    onReload(event = {}) {
        this.refresher = event.target;
        this.places = [];
        this.params.page = 0;
        this.loadData();
    }
};
FavoriteListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], FavoriteListPage.prototype, "container", void 0);
FavoriteListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-favorite-list',
        template: __webpack_require__(/*! raw-loader!./favorite-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/favorite-list/favorite-list.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./favorite-list.scss */ "./src/app/pages/favorite-list/favorite-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"],
        _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"]])
], FavoriteListPage);



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
//# sourceMappingURL=pages-favorite-list-favorite-list-module-es2015.js.map
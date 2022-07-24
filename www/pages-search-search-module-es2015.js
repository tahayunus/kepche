(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-searchbar mode=\"ios\" (ionChange)=\"onSearch($event)\" [placeholder]=\"'SEARCH' | translate\"\n      showCancelButton=\"focus\" [cancelButtonText]=\"'CLOSE' | translate\">\n    </ion-searchbar>\n  </ion-toolbar>\n  <ion-tab-bar slot=\"top\" *ngIf=\"content === 'history' || content === 'search'\">\n    <ion-tab-button (click)=\"changeType('all')\">\n      <ion-label>Tümü</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"changeType('place')\">\n      <ion-label>Mekan</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"changeType('user')\">\n      <ion-label>Kişi</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"changeType('activity')\">\n      <ion-label>Etkinlik</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\" class=\"ion-no-padding\">\n  <ion-grid fixed *ngIf=\"content === 'history'\">\n    <div *ngIf=\"type === 'all' || type === 'user'\" class=\"userList\">\n      <div *ngFor=\"let u of usersLog; let i = index\" class=\"userDetail\">\n        <ion-row [routerLink]=\"['./../index/home/user/' + u.id]\">\n          <ion-col size-xs=\"3\" size-sm=\"3\" class=\"image\">\n            <img src-fallback=\"./assets/img/avatar.png\" [src]=\"usersLog[i]?.photo?.url()\" />\n          </ion-col>\n          <ion-col size-xs=\"8\" size-sm=\"8\" class=\"title\">\n            <div><b>{{u.name}}</b></div>\n            <div>{{u.username}}</div>\n          </ion-col>\n          <ion-col size-xs=\"1\" size-sm=\"1\" class=\"btn\">\n            <ion-icon name=\"close-outline\" color=\"dark\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf=\"type === 'all' || type === 'place'\" class=\"placeList\">\n      <div *ngFor=\"let p of placesLog; let i = index\" class=\"placeDetail\">\n        <ion-row [routerLink]=\"['./../index/places/' + p.id]\">\n          <ion-col size-xs=\"3\" size-sm=\"3\" class=\"image\">\n            <img src-fallback=\"./assets/img/avatar.png\" [src]=\"placesLog[i]?.image?.url()\" />\n          </ion-col>\n          <ion-col size-xs=\"8\" size-sm=\"8\" class=\"title\">\n            <div><b>{{p.title}}</b></div>\n            <div>{{p.category?.title | translate}} > {{p.secondcategory?.title | translate}}</div>\n          </ion-col>\n          <ion-col size-xs=\"1\" size-sm=\"1\" class=\"btn\">\n            <ion-icon name=\"close-outline\" color=\"dark\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </ion-grid>\n  <ion-grid fixed *ngIf=\"content === 'search'\">\n    <ion-row *ngIf=\"isLoadingViewVisible\">\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\n        </ngx-skeleton-loader>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <p *ngIf=\"users.length>0\">{{'USERS' | translate}}</p>\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let usr of users\">\n        <ion-card (click)=\"userClick(usr.id)\" [routerLink]=\"['../user/' + usr.id]\" mode=\"ios\">\n          <ion-row justify-content-center>\n            <ion-col size-xs=\"3\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\">\n              <ion-avatar>\n                <img src-fallback=\"./assets/img/avatar.png\" [src]=\"usr?.attributes.photo?.url()\" />\n              </ion-avatar>\n            </ion-col>\n            <ion-col size-xs=\"3\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\">\n              {{usr.username}}\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <p *ngIf=\"places.length>0\">{{'PLACE' | translate}}</p>\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let place of places\">\n        <app-place-card (click)=\"placeClick(place.id)\" [routerLink]=\"['../index/places/' + place.id]\" [place]=\"place\"\n          [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\n        </app-place-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid fixed *ngIf=\"content === 'discover'\">\n    <!-- Featured Places -->\n    <section *ngIf=\"likePlaces.length\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"6\" class=\"ion-text-start\">\n          <ion-text color=\"medium\">\n            <span class=\"text-normal bold padding-small\">\n              {{ 'MY_FAVORITES' | translate }}\n            </span>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-end\">\n          <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\n            [queryParams]=\"{like:'1'}\" [routerLink]=\"['../places']\">\n            <span class=\"link text-normal\">\n              {{ 'VIEW_ALL' | translate }}\n            </span>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"ion-margin-bottom\">\n        <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\n          <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of propertiesPlaces\">\n            <app-place-card [routerLink]=\"['./../index/home/places/' + place.id]\" [place]=\"place\"\n              [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\n            </app-place-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </section>\n    <!-- Featured Places -->\n    <section *ngIf=\"likePlaces.length\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"6\" class=\"ion-text-start\">\n          <ion-text color=\"medium\">\n            <span class=\"text-normal bold padding-small\">\n              {{ 'MY_FAVORITES' | translate }}\n            </span>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-end\">\n          <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\n            [queryParams]=\"{like:'1'}\" [routerLink]=\"['../places']\">\n            <span class=\"link text-normal\">\n              {{ 'VIEW_ALL' | translate }}\n            </span>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"ion-margin-bottom\">\n        <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\n          <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of likePlaces\">\n            <app-place-card [routerLink]=\"['./../index/home/places/' + place.id]\" [place]=\"place\"\n              [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\n            </app-place-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </section>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/app/pages/search/search.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _search__WEBPACK_IMPORTED_MODULE_3__["SearchPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _search__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
                }
            ])
        ],
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/pages/search/search.scss":
/*!******************************************!*\
  !*** ./src/app/pages/search/search.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userList .userDetail {\n  height: 68px;\n}\n.userList .userDetail ion-row {\n  width: 100%;\n}\n.userList .userDetail ion-row .image img {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n.userList .userDetail ion-row .title {\n  line-height: 24px;\n}\n.userList .userDetail ion-row .title div {\n  width: 100%;\n}\n.userList .userDetail ion-row .btn {\n  line-height: 48px;\n}\n.scrollable app-place-card {\n  --image-width: 100%;\n  --image-height: 130px;\n  --content-padding: 6px;\n}\n.placeList .placeDetail {\n  height: 68px;\n}\n.placeList .placeDetail ion-row {\n  width: 100%;\n}\n.placeList .placeDetail ion-row .image img {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n.placeList .placeDetail ion-row .title {\n  line-height: 24px;\n}\n.placeList .placeDetail ion-row .title div {\n  width: 100%;\n}\n.placeList .placeDetail ion-row .btn {\n  line-height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ3BCO0FERVk7RUFDSSxpQkFBQTtBQ0FoQjtBRENnQjtFQUNJLFdBQUE7QUNDcEI7QURFWTtFQUNJLGlCQUFBO0FDQWhCO0FET0k7RUFFSSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7QUNOUjtBRFVJO0VBQ0ksWUFBQTtBQ1BSO0FEUVE7RUFDSSxXQUFBO0FDTlo7QURRZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTnBCO0FEU1k7RUFDSSxpQkFBQTtBQ1BoQjtBRFFnQjtFQUNJLFdBQUE7QUNOcEI7QURTWTtFQUNJLGlCQUFBO0FDUGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJMaXN0IHtcbiAgICAudXNlckRldGFpbCB7XG4gICAgICAgIGhlaWdodDogNjhweDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zY3JvbGxhYmxlIHtcbiAgICBhcHAtcGxhY2UtY2FyZCB7XG5cbiAgICAgICAgLS1pbWFnZS13aWR0aDogMTAwJTtcbiAgICAgICAgLS1pbWFnZS1oZWlnaHQ6IDEzMHB4O1xuXG4gICAgICAgIC0tY29udGVudC1wYWRkaW5nOiA2cHg7XG4gICAgfVxufVxuLnBsYWNlTGlzdCB7XG4gICAgLnBsYWNlRGV0YWlsIHtcbiAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi51c2VyTGlzdCAudXNlckRldGFpbCB7XG4gIGhlaWdodDogNjhweDtcbn1cbi51c2VyTGlzdCAudXNlckRldGFpbCBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXNlckxpc3QgLnVzZXJEZXRhaWwgaW9uLXJvdyAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXJMaXN0IC51c2VyRGV0YWlsIGlvbi1yb3cgLnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4udXNlckxpc3QgLnVzZXJEZXRhaWwgaW9uLXJvdyAudGl0bGUgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXNlckxpc3QgLnVzZXJEZXRhaWwgaW9uLXJvdyAuYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5zY3JvbGxhYmxlIGFwcC1wbGFjZS1jYXJkIHtcbiAgLS1pbWFnZS13aWR0aDogMTAwJTtcbiAgLS1pbWFnZS1oZWlnaHQ6IDEzMHB4O1xuICAtLWNvbnRlbnQtcGFkZGluZzogNnB4O1xufVxuXG4ucGxhY2VMaXN0IC5wbGFjZURldGFpbCB7XG4gIGhlaWdodDogNjhweDtcbn1cbi5wbGFjZUxpc3QgLnBsYWNlRGV0YWlsIGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGFjZUxpc3QgLnBsYWNlRGV0YWlsIGlvbi1yb3cgLmltYWdlIGltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wbGFjZUxpc3QgLnBsYWNlRGV0YWlsIGlvbi1yb3cgLnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ucGxhY2VMaXN0IC5wbGFjZURldGFpbCBpb24tcm93IC50aXRsZSBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGFjZUxpc3QgLnBsYWNlRGV0YWlsIGlvbi1yb3cgLmJ0biB7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/search/search.ts":
/*!****************************************!*\
  !*** ./src/app/pages/search/search.ts ***!
  \****************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var src_app_services_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/property */ "./src/app/services/property.ts");
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");












let SearchPage = class SearchPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"] {
    constructor(injector, geolocationService, placeService, userService, storage, propertyService) {
        super(injector);
        this.geolocationService = geolocationService;
        this.placeService = placeService;
        this.userService = userService;
        this.storage = storage;
        this.propertyService = propertyService;
        this.params = {};
        this.userList = [];
        this.placeList = [];
        this.activityList = [];
        this.type = "all";
        this.content = "discover";
        this.propertiesPlaces = [];
        this.newPlaces = [];
        this.randomPlaces = [];
        this.featuredPlaces = [];
        this.nearbyPlaces = [];
        this.places = [];
        this.myPlaces = [];
        this.likePlaces = [];
        this.users = [];
        this.myProperties = [];
        this.myProp = [];
        this.properties = [];
        this.myPropertiesPlaces = [];
        this.placesLog = [];
        this.usersLog = [];
        this.results = [];
        this.notSearchYet = true;
        this.skeletonArray = Array(12);
        this.params.limit = 100;
        this.params.page = 0;
    }
    enableMenuSwipe() {
        return false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent();
            console.log('Kişi', this.user);
            this.lang = yield this.storage.getLang();
            console.log('Dil', this.lang);
            if (this.lang === 'tr') {
                this.langid = 0;
            }
            if (this.lang === 'en') {
                this.langid = 1;
            }
            if (this.lang === 'es') {
                this.langid = 2;
            }
            if (this.lang === 'de') {
                this.langid = 3;
            }
            if (this.lang === 'ru') {
                this.langid = 4;
            }
            if (this.lang === 'fr') {
                this.langid = 5;
            }
            if (this.lang === 'ar') {
                this.langid = 6;
            }
            if (this.lang === 'fl') {
                this.langid = 7;
            }
            console.log('Dil Id', this.langid);
            this.setupObservables();
            this.type;
            this.content;
            this.loadProperties();
            this.loadMyPlaces();
            this.loadLikePlaces();
            this.properties;
        });
    }
    loadMyPlaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    onScroll() {
        this.horizontalScroll.next();
    }
    contentChange(event) {
        this.content = event;
    }
    loadLikePlaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const places = yield this.placeService.loadFavorites(this.params);
                for (let place of places) {
                    this.likePlaces.push(place);
                }
                console.log('Favorilerim', this.likePlaces);
                if (this.likePlaces.length) {
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
    loadProperties() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myProp = this.user.properties;
            for (let element of myProp) {
                this.myProperties.push(element.id);
            }
            ;
            const properties = yield this.propertyService.load({
                cid: this.myProperties
            });
            for (let property of properties) {
                this.properties.push(property);
            }
            console.log('kasjd', this.properties);
            const myPPlaces = yield this.placeService.loadProperties({
                property: this.properties
            });
            for (let i of myPPlaces) {
                this.propertiesPlaces.push(i);
            }
            console.log('property place', this.propertiesPlaces);
        });
    }
    getLog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const usr = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent();
            let usrId = [];
            let plcId = [];
            usr.searchLog.forEach(e => {
                if (e.type === 'user') {
                    usrId.push(e.id);
                }
            });
            usr.searchLog.forEach(e => {
                if (e.type === 'place') {
                    plcId.push(e.id);
                }
            });
            this.placesLog = yield this.placeService.loadList(plcId);
            this.usersLog = yield this.userService.loadList(usrId);
            console.log("usrr", this.usersLog);
            console.log("plaecs", this.placesLog);
        });
    }
    changeType(event) {
        this.type = event;
        console.log('search_history', event);
    }
    setupObservables() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    loadNearbyPlaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                if (coords) {
                    this.location = coords;
                    this.nearbyPlaces = yield this.placeService.load({
                        location: this.location,
                        limit: 12
                    });
                }
            }
            catch (err) {
                console.warn(err);
            }
        });
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 300);
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const title = yield this.getTrans('SEARCH');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
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
    loadDiscover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const data = yield parse__WEBPACK_IMPORTED_MODULE_6__["Cloud"].run('getHomePageData');
                this.randomPlaces = data.randomPlaces;
                this.newPlaces = data.newPlaces;
                this.featuredPlaces = data.featuredPlaces;
                console.log('discover', data);
                this.onRefreshComplete();
                this.showContentView();
                this.onContentLoaded();
            }
            catch (error) {
                this.showErrorView();
                this.onRefreshComplete();
                this.translate.get('ERROR_NETWORK')
                    .subscribe(str => this.showToast(str));
                if (error.code === 209) {
                    this.events.publish('user:logout');
                }
            }
        });
    }
    loadData(event = {}) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.refresher = event.target;
            try {
                const data = yield parse__WEBPACK_IMPORTED_MODULE_6__["Cloud"].run('searchData');
                data.places.forEach(p => {
                    if (p.title.toLocaleLowerCase().search(this.params.search) !== -1) {
                        this.places.push(p);
                    }
                });
                data.users.forEach(p => {
                    if ((p.name.toLocaleLowerCase().search(this.params.search) !== -1) || (p.username.toLocaleLowerCase().search(this.params.search) !== -1)) {
                        this.users.push(p);
                    }
                });
                if (this.users.length || this.places.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
                this.onRefreshComplete(this.places);
                this.notSearchYet = false;
            }
            catch (err) {
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                this.showContentView();
                this.onRefreshComplete();
            }
        });
    }
    placeClick(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const query = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"]();
            query.id = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().id;
            const searchLog = yield src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().searchLog;
            searchLog.push({
                "id": id,
                "type": "place"
            });
            query.set("searchLog", searchLog);
            query.save();
        });
    }
    userClick(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const query = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"]();
            query.id = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().id;
            const searchLog = yield src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().searchLog;
            searchLog.push({
                "id": id,
                "type": "user"
            });
            query.set("searchLog", searchLog);
            query.save();
        });
    }
    onSearch(e = {}) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (e.target.value.length >= 3) {
                this.content = 'search';
                this.params.search = e.target.value.toLocaleLowerCase();
                this.loadData();
            }
            else {
                this.content = 'history';
                console.log('content', this.content);
                this.getLog();
                this.users = [];
                this.places = [];
            }
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["Place"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"] },
    { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"] },
    { type: src_app_services_property__WEBPACK_IMPORTED_MODULE_10__["Property"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], SearchPage.prototype, "container", void 0);
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-search',
        template: __webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./search.scss */ "./src/app/pages/search/search.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"],
        _services_place_service__WEBPACK_IMPORTED_MODULE_5__["Place"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"],
        src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"],
        src_app_services_property__WEBPACK_IMPORTED_MODULE_10__["Property"]])
], SearchPage);



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
//# sourceMappingURL=pages-search-search-module-es2015.js.map
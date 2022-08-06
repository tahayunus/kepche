(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar mode=\"ios\" (ionChange)=\"onSearch($event)\" [placeholder]=\"'SEARCH' | translate\"\r\n      showCancelButton=\"focus\" [cancelButtonText]=\"'CLOSE' | translate\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-tab-bar slot=\"top\" *ngIf=\"content === 'history' || content === 'search'\">\r\n    <ion-tab-button (click)=\"changeType('all')\">\r\n      <ion-label>Tümü</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\"changeType('place')\">\r\n      <ion-label>Mekan</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\"changeType('user')\">\r\n      <ion-label>Kişi</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\"changeType('activity')\">\r\n      <ion-label>Etkinlik</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\" class=\"ion-no-padding\">\r\n  <ion-grid fixed *ngIf=\"content === 'history'\">\r\n    <div *ngIf=\"type === 'all' || type === 'user'\" class=\"userList\">\r\n      <div *ngFor=\"let u of usersLog; let i = index\" class=\"userDetail\">\r\n        <ion-row [routerLink]=\"['./../index/home/user/' + u.id]\">\r\n          <ion-col size-xs=\"3\" size-sm=\"3\" class=\"image\">\r\n            <img src-fallback=\"./assets/img/avatar.png\" [src]=\"usersLog[i]?.photo?.url()\" />\r\n          </ion-col>\r\n          <ion-col size-xs=\"8\" size-sm=\"8\" class=\"title\">\r\n            <div><b>{{u.name}}</b></div>\r\n            <div>{{u.username}}</div>\r\n          </ion-col>\r\n          <ion-col size-xs=\"1\" size-sm=\"1\" class=\"btn\">\r\n            <ion-icon name=\"close-outline\" color=\"danger\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"type === 'all' || type === 'place'\" class=\"placeList\">\r\n      <div *ngFor=\"let p of placesLog; let i = index\" class=\"placeDetail\">\r\n        <ion-row [routerLink]=\"['./../index/places/' + p.id]\">\r\n          <ion-col size-xs=\"3\" size-sm=\"3\" class=\"image\">\r\n            <img src-fallback=\"./assets/img/avatar.png\" [src]=\"placesLog[i]?.image?.url()\" />\r\n          </ion-col>\r\n          <ion-col size-xs=\"8\" size-sm=\"8\" class=\"title\">\r\n            <div><b>{{p.title}}</b></div>\r\n            <div>{{p.category?.title | translate}} > {{p.secondcategory?.title | translate}}</div>\r\n          </ion-col>\r\n          <ion-col size-xs=\"1\" size-sm=\"1\" class=\"btn\">\r\n            <ion-icon name=\"close-outline\" color=\"danger\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n  <ion-grid fixed *ngIf=\"content === 'search'\">\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <p *ngIf=\"users.length>0\">{{'USERS' | translate}}</p>\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let usr of users\">\r\n        <ion-card (click)=\"userClick(usr.id)\" [routerLink]=\"['../user/' + usr.id]\" mode=\"ios\">\r\n          <ion-row justify-content-center>\r\n            <ion-col size-xs=\"3\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\">\r\n              <ion-avatar>\r\n                <img src-fallback=\"./assets/img/avatar.png\" [src]=\"usr?.attributes.photo?.url()\" />\r\n              </ion-avatar>\r\n            </ion-col>\r\n            <ion-col size-xs=\"3\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\">\r\n              {{usr.username}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <p *ngIf=\"places.length>0\">{{'PLACE' | translate}}</p>\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let place of places\">\r\n        <app-place-card (click)=\"placeClick(place.id)\" [routerLink]=\"['../index/places/' + place.id]\" [place]=\"place\"\r\n          [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed *ngIf=\"content === 'discover'\">\r\n    <!-- Featured Places -->\r\n    <section *ngIf=\"likePlaces.length\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"6\" class=\"ion-text-start\">\r\n          <ion-text color=\"medium\">\r\n            <span class=\"text-normal bold padding-small\">\r\n              {{ 'MY_FAVORITES' | translate }}\r\n            </span>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-end\">\r\n          <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\r\n            [queryParams]=\"{like:'1'}\" [routerLink]=\"['../places']\">\r\n            <span class=\"link text-normal\">\r\n              {{ 'VIEW_ALL' | translate }}\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"ion-margin-bottom\">\r\n        <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\r\n          <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of propertiesPlaces\">\r\n            <app-place-card [routerLink]=\"['./../index/home/places/' + place.id]\" [place]=\"place\"\r\n              [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n            </app-place-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </section>\r\n    <!-- Featured Places -->\r\n    <section *ngIf=\"likePlaces.length\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"6\" class=\"ion-text-start\">\r\n          <ion-text color=\"medium\">\r\n            <span class=\"text-normal bold padding-small\">\r\n              {{ 'MY_FAVORITES' | translate }}\r\n            </span>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-end\">\r\n          <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\r\n            [queryParams]=\"{like:'1'}\" [routerLink]=\"['../places']\">\r\n            <span class=\"link text-normal\">\r\n              {{ 'VIEW_ALL' | translate }}\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"ion-margin-bottom\">\r\n        <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\r\n          <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of likePlaces\">\r\n            <app-place-card [routerLink]=\"['./../index/home/places/' + place.id]\" [place]=\"place\"\r\n              [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n            </app-place-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </section>\r\n  </ion-grid>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/app/pages/search/search.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
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
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/search/search.scss":
/*!******************************************!*\
  !*** ./src/app/pages/search/search.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userList .userDetail {\n  height: 68px;\n}\n.userList .userDetail ion-row {\n  width: 100%;\n}\n.userList .userDetail ion-row .image img {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n.userList .userDetail ion-row .title {\n  line-height: 24px;\n}\n.userList .userDetail ion-row .title div {\n  width: 100%;\n}\n.userList .userDetail ion-row .btn {\n  line-height: 48px;\n}\n.scrollable app-place-card {\n  --image-width: 100%;\n  --image-height: 130px;\n  --content-padding: 6px;\n}\n.placeList .placeDetail {\n  height: 68px;\n}\n.placeList .placeDetail ion-row {\n  width: 100%;\n}\n.placeList .placeDetail ion-row .image img {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n.placeList .placeDetail ion-row .title {\n  line-height: 24px;\n}\n.placeList .placeDetail ion-row .title div {\n  width: 100%;\n}\n.placeList .placeDetail ion-row .btn {\n  line-height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xcc2VhcmNoXFxzZWFyY2guc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ3BCO0FERVk7RUFDSSxpQkFBQTtBQ0FoQjtBRENnQjtFQUNJLFdBQUE7QUNDcEI7QURFWTtFQUNJLGlCQUFBO0FDQWhCO0FET0k7RUFFSSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7QUNOUjtBRFVJO0VBQ0ksWUFBQTtBQ1BSO0FEUVE7RUFDSSxXQUFBO0FDTlo7QURRZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTnBCO0FEU1k7RUFDSSxpQkFBQTtBQ1BoQjtBRFFnQjtFQUNJLFdBQUE7QUNOcEI7QURTWTtFQUNJLGlCQUFBO0FDUGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJMaXN0IHtcclxuICAgIC51c2VyRGV0YWlsIHtcclxuICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbGFibGUge1xyXG4gICAgYXBwLXBsYWNlLWNhcmQge1xyXG5cclxuICAgICAgICAtLWltYWdlLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC0taW1hZ2UtaGVpZ2h0OiAxMzBweDtcclxuXHJcbiAgICAgICAgLS1jb250ZW50LXBhZGRpbmc6IDZweDtcclxuICAgIH1cclxufVxyXG4ucGxhY2VMaXN0IHtcclxuICAgIC5wbGFjZURldGFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnVzZXJMaXN0IC51c2VyRGV0YWlsIHtcbiAgaGVpZ2h0OiA2OHB4O1xufVxuLnVzZXJMaXN0IC51c2VyRGV0YWlsIGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyTGlzdCAudXNlckRldGFpbCBpb24tcm93IC5pbWFnZSBpbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlckxpc3QgLnVzZXJEZXRhaWwgaW9uLXJvdyAudGl0bGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi51c2VyTGlzdCAudXNlckRldGFpbCBpb24tcm93IC50aXRsZSBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyTGlzdCAudXNlckRldGFpbCBpb24tcm93IC5idG4ge1xuICBsaW5lLWhlaWdodDogNDhweDtcbn1cblxuLnNjcm9sbGFibGUgYXBwLXBsYWNlLWNhcmQge1xuICAtLWltYWdlLXdpZHRoOiAxMDAlO1xuICAtLWltYWdlLWhlaWdodDogMTMwcHg7XG4gIC0tY29udGVudC1wYWRkaW5nOiA2cHg7XG59XG5cbi5wbGFjZUxpc3QgLnBsYWNlRGV0YWlsIHtcbiAgaGVpZ2h0OiA2OHB4O1xufVxuLnBsYWNlTGlzdCAucGxhY2VEZXRhaWwgaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYWNlTGlzdCAucGxhY2VEZXRhaWwgaW9uLXJvdyAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnBsYWNlTGlzdCAucGxhY2VEZXRhaWwgaW9uLXJvdyAudGl0bGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5wbGFjZUxpc3QgLnBsYWNlRGV0YWlsIGlvbi1yb3cgLnRpdGxlIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYWNlTGlzdCAucGxhY2VEZXRhaWwgaW9uLXJvdyAuYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var src_app_services_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/property */ "./src/app/services/property.ts");
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");












var SearchPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SearchPage, _super);
    function SearchPage(injector, geolocationService, placeService, userService, storage, propertyService) {
        var _this = _super.call(this, injector) || this;
        _this.geolocationService = geolocationService;
        _this.placeService = placeService;
        _this.userService = userService;
        _this.storage = storage;
        _this.propertyService = propertyService;
        _this.params = {};
        _this.userList = [];
        _this.placeList = [];
        _this.activityList = [];
        _this.type = "all";
        _this.content = "discover";
        _this.propertiesPlaces = [];
        _this.newPlaces = [];
        _this.randomPlaces = [];
        _this.featuredPlaces = [];
        _this.nearbyPlaces = [];
        _this.places = [];
        _this.myPlaces = [];
        _this.likePlaces = [];
        _this.users = [];
        _this.myProperties = [];
        _this.myProp = [];
        _this.properties = [];
        _this.myPropertiesPlaces = [];
        _this.placesLog = [];
        _this.usersLog = [];
        _this.results = [];
        _this.notSearchYet = true;
        _this.skeletonArray = Array(12);
        _this.params.limit = 100;
        _this.params.page = 0;
        return _this;
    }
    SearchPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    SearchPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent();
                        console.log('Kişi', this.user);
                        _a = this;
                        return [4 /*yield*/, this.storage.getLang()];
                    case 1:
                        _a.lang = _b.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.loadMyPlaces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.onScroll = function () {
        this.horizontalScroll.next();
    };
    SearchPage.prototype.contentChange = function (event) {
        this.content = event;
    };
    SearchPage.prototype.loadLikePlaces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var places, places_1, places_1_1, place, error_1;
            var e_1, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.loadFavorites(this.params)];
                    case 1:
                        places = _b.sent();
                        try {
                            for (places_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](places), places_1_1 = places_1.next(); !places_1_1.done; places_1_1 = places_1.next()) {
                                place = places_1_1.value;
                                this.likePlaces.push(place);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (places_1_1 && !places_1_1.done && (_a = places_1.return)) _a.call(places_1);
                            }
                            finally { if (e_1) throw e_1.error; }
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
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.loadProperties = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myProp, myProp_1, myProp_1_1, element, properties, properties_1, properties_1_1, property, myPPlaces, myPPlaces_1, myPPlaces_1_1, i;
            var e_2, _a, e_3, _b, e_4, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        myProp = this.user.properties;
                        try {
                            for (myProp_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](myProp), myProp_1_1 = myProp_1.next(); !myProp_1_1.done; myProp_1_1 = myProp_1.next()) {
                                element = myProp_1_1.value;
                                this.myProperties.push(element.id);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (myProp_1_1 && !myProp_1_1.done && (_a = myProp_1.return)) _a.call(myProp_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        ;
                        return [4 /*yield*/, this.propertyService.load({
                                cid: this.myProperties
                            })];
                    case 1:
                        properties = _d.sent();
                        try {
                            for (properties_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                                property = properties_1_1.value;
                                this.properties.push(property);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (properties_1_1 && !properties_1_1.done && (_b = properties_1.return)) _b.call(properties_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        console.log('kasjd', this.properties);
                        return [4 /*yield*/, this.placeService.loadProperties({
                                property: this.properties
                            })];
                    case 2:
                        myPPlaces = _d.sent();
                        try {
                            for (myPPlaces_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](myPPlaces), myPPlaces_1_1 = myPPlaces_1.next(); !myPPlaces_1_1.done; myPPlaces_1_1 = myPPlaces_1.next()) {
                                i = myPPlaces_1_1.value;
                                this.propertiesPlaces.push(i);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (myPPlaces_1_1 && !myPPlaces_1_1.done && (_c = myPPlaces_1.return)) _c.call(myPPlaces_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        console.log('property place', this.propertiesPlaces);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.getLog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usr, usrId, plcId, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        usr = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent();
                        usrId = [];
                        plcId = [];
                        usr.searchData.forEach(function (e) {
                            if (e.type === 'user') {
                                usrId.push(e.id);
                            }
                        });
                        usr.searchData.forEach(function (e) {
                            if (e.type === 'place') {
                                plcId.push(e.id);
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadList(plcId)];
                    case 1:
                        _a.placesLog = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.userService.loadList(usrId)];
                    case 2:
                        _b.usersLog = _c.sent();
                        console.log("usrr", this.usersLog);
                        console.log("plaecs", this.placesLog);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.changeType = function (event) {
        this.type = event;
        console.log('search_history', event);
    };
    SearchPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    SearchPage.prototype.loadNearbyPlaces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, _a, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _b.sent();
                        if (!coords) return [3 /*break*/, 3];
                        this.location = coords;
                        _a = this;
                        return [4 /*yield*/, this.placeService.load({
                                location: this.location,
                                limit: 12
                            })];
                    case 2:
                        _a.nearbyPlaces = _b.sent();
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        console.warn(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTrans('SEARCH')];
                    case 1:
                        title = _a.sent();
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        this.loadLocation();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.loadLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.warn(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.loadDiscover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, error_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, parse__WEBPACK_IMPORTED_MODULE_6__["Cloud"].run('getHomePageData')];
                    case 1:
                        data = _a.sent();
                        this.randomPlaces = data.randomPlaces;
                        this.newPlaces = data.newPlaces;
                        this.featuredPlaces = data.featuredPlaces;
                        console.log('discover', data);
                        this.onRefreshComplete();
                        this.showContentView();
                        this.onContentLoaded();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.showErrorView();
                        this.onRefreshComplete();
                        this.translate.get('ERROR_NETWORK')
                            .subscribe(function (str) { return _this.showToast(str); });
                        if (error_2.code === 209) {
                            this.events.publish('user:logout');
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.loadData = function (event) {
        if (event === void 0) { event = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, err_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresher = event.target;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, parse__WEBPACK_IMPORTED_MODULE_6__["Cloud"].run('searchData')];
                    case 2:
                        data = _a.sent();
                        data.places.forEach(function (p) {
                            if (p.title.toLocaleLowerCase().search(_this.params.search) !== -1) {
                                _this.places.push(p);
                            }
                        });
                        data.users.forEach(function (p) {
                            if ((p.name.toLocaleLowerCase().search(_this.params.search) !== -1) || (p.username.toLocaleLowerCase().search(_this.params.search) !== -1)) {
                                _this.users.push(p);
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.placeClick = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, searchData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"]();
                        query.id = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().id;
                        return [4 /*yield*/, src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().searchData];
                    case 1:
                        searchData = _a.sent();
                        searchData.push({
                            "id": id,
                            "type": "place"
                        });
                        query.set("searchData", searchData);
                        query.save();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.userClick = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, searchData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"]();
                        query.id = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().id;
                        return [4 /*yield*/, src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"].getCurrent().searchData];
                    case 1:
                        searchData = _a.sent();
                        searchData.push({
                            "id": id,
                            "type": "user"
                        });
                        query.set("searchData", searchData);
                        query.save();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.onSearch = function (e) {
        if (e === void 0) { e = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    SearchPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["Place"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["User"] },
        { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"] },
        { type: src_app_services_property__WEBPACK_IMPORTED_MODULE_10__["Property"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
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
    return SearchPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"]));



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
//# sourceMappingURL=pages-search-search-module-es5.js.map
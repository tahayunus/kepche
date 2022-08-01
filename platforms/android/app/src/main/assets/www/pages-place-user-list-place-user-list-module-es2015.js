(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-user-list-place-user-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-user-list/place-user-list.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-user-list/place-user-list.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{ 'MY_PLACES' | translate }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" color=\"light\" [routerLink]=\"['./add']\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\" padding>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"pin\" [text]=\"'EMPTY_USER_PLACES' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid fixed>\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"places.length\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let place of places\">\r\n        <app-place-card (click)=\"onPlaceTouched(place)\"\r\n          [place]=\"place\"\r\n          [showStatus]=\"true\"\r\n          [extraParams]=\"params\"\r\n          [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/place-user-list/place-user-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/place-user-list/place-user-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceUserListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceUserListPageModule", function() { return PlaceUserListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _place_user_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-user-list */ "./src/app/pages/place-user-list/place-user-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





let PlaceUserListPageModule = class PlaceUserListPageModule {
};
PlaceUserListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _place_user_list__WEBPACK_IMPORTED_MODULE_3__["PlaceUserListPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _place_user_list__WEBPACK_IMPORTED_MODULE_3__["PlaceUserListPage"]
                }
            ])
        ]
    })
], PlaceUserListPageModule);



/***/ }),

/***/ "./src/app/pages/place-user-list/place-user-list.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/place-user-list/place-user-list.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2UtdXNlci1saXN0L0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xccGxhY2UtdXNlci1saXN0XFxwbGFjZS11c2VyLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2UtdXNlci1saXN0L3BsYWNlLXVzZXItbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLXVzZXItbGlzdC9wbGFjZS11c2VyLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/place-user-list/place-user-list.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/place-user-list/place-user-list.ts ***!
  \**********************************************************/
/*! exports provided: PlaceUserListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceUserListPage", function() { return PlaceUserListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");








let PlaceUserListPage = class PlaceUserListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"] {
    constructor(injector, placeService) {
        super(injector);
        this.placeService = placeService;
        this.params = {};
        this.places = [];
    }
    ngOnInit() {
        this.setupObservables();
        this.setupEvents();
        this.params.unit = this.preference.unit;
        this.params.limit = 20;
        this.params.page = 0;
        this.params.userid = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["User"].getCurrent().id;
    }
    ngOnDestroy() {
        this.events.unsubscribe('place:add');
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
    setupEvents() {
        this.events.subscribe('place:add', () => {
            this.onReload();
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.places.length) {
                yield this.showLoadingView({ showOverlay: false });
                this.loadData();
            }
            else {
                this.onContentLoaded();
            }
            const title = yield this.getTrans('PLACES');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    enableMenuSwipe() {
        return false;
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const places = yield this.placeService.load(this.params);
                for (let place of places) {
                    this.places.push(place);
                }
                this.onRefreshComplete(places);
                if (this.places.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
            }
            catch (err) {
                this.showContentView();
                this.onRefreshComplete();
                let message = yield this.getTrans('ERROR_NETWORK');
                this.showToast(message);
            }
        });
    }
    onPlaceTouched(place) {
        if (place.status === 'Approved') {
            this.navigateToRelative('./' + place.id);
        }
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
    getStatusColor(status) {
        if (status === 'Pending') {
            return 'warning';
        }
        else if (status === 'Approved') {
            return 'success';
        }
        else if (status === 'Rejected') {
            return 'danger';
        }
        else if (status === 'Expired') {
            return 'tertiary';
        }
        else {
            console.log('no match found');
        }
    }
};
PlaceUserListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["Place"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], PlaceUserListPage.prototype, "container", void 0);
PlaceUserListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'place-user-list-page',
        template: __webpack_require__(/*! raw-loader!./place-user-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-user-list/place-user-list.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./place-user-list.scss */ "./src/app/pages/place-user-list/place-user-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_place_service__WEBPACK_IMPORTED_MODULE_5__["Place"]])
], PlaceUserListPage);



/***/ })

}]);
//# sourceMappingURL=pages-place-user-list-place-user-list-module-es2015.js.map
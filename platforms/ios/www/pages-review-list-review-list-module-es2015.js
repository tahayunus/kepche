(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-list-review-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/review-list/review-list.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/review-list/review-list.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <span *ngIf=\"params?.place?.title\">\n        {{ params.place.title }} - {{ 'REVIEWS' | translate }}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container padding scrollEvents=\"true\">\n\n  <ion-refresher (ionRefresh)=\"onReload($event)\">\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\" refreshingText=\"{{ 'REFRESHING' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_REVIEWS' | translate\">\n  </empty-view>\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"star\" [text]=\"'EMPTY_REVIEWS' | translate\">\n  </empty-view>\n\n  <ion-grid fixed>\n    <ion-row justify-content-center>\n      <ion-col size-xs=\"12\" size-lg=\"8\">\n\n        <section *ngIf=\"isLoadingViewVisible\">\n          <div class=\"skeleton-item light-bg radius\"\n            *ngFor=\"let item of skeletonReviews\">\n            <div class=\"wrapper\">\n              <div class=\"avatar\">\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\n                </ngx-skeleton-loader>\n              </div>\n              <div class=\"title\">\n                <div>\n                  <ngx-skeleton-loader [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\n                  </ngx-skeleton-loader>\n                </div>\n                <div>\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\n                  </ngx-skeleton-loader>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <ion-list lines=\"none\" [@staggerIn]=\"reviews.length\" *ngIf=\"isContentViewVisible\">\n          <div margin-bottom padding class=\"radius light-bg border\" *ngFor=\"let review of reviews\">\n            <ion-item no-padding color=\"light\">\n\n              <ion-avatar slot=\"start\">\n                <img defaultImage=\"./assets/img/avatar.png\"\n                  [lazyLoad]=\"review.user?.photo?.url()\"\n                  [scrollObservable]=\"loadAndScroll\" />\n              </ion-avatar>\n\n              <ion-label text-wrap>\n                <ion-text color=\"medium\" float-end>\n                  <span class=\"text-small\">\n                    {{ review.createdAt | date:'mediumDate' }}\n                  </span>\n                </ion-text>\n                <ion-text color=\"dark\">\n                  <h3 class=\"bold no-margin\">{{ review.user?.name }}</h3>\n                </ion-text>\n                <star-rating [value]=\"review.rating\" checkedcolor=\"#f2b01e\" \n                  uncheckedcolor=\"gray\" size=\"12px\" readonly=\"true\">\n                </star-rating>\n\n                <ion-text color=\"dark\">\n                  <p class=\"text-medium no-margin\">{{ review.comment }}</p>\n                </ion-text>\n              </ion-label>\n\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/review-list/review-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/review-list/review-list.module.ts ***!
  \*********************************************************/
/*! exports provided: ReviewListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListPageModule", function() { return ReviewListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _review_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-list */ "./src/app/pages/review-list/review-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





let ReviewListPageModule = class ReviewListPageModule {
};
ReviewListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _review_list__WEBPACK_IMPORTED_MODULE_3__["ReviewListPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _review_list__WEBPACK_IMPORTED_MODULE_3__["ReviewListPage"]
                }
            ])
        ]
    })
], ReviewListPageModule);



/***/ }),

/***/ "./src/app/pages/review-list/review-list.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/review-list/review-list.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: 0 12px 0 0 !important;\n}\nion-avatar img {\n  background: var(--ion-color-dark);\n}\nul {\n  margin: 4px 0;\n  padding: 0px;\n}\nul.rating li {\n  padding: 5px 0 !important;\n  background: none;\n  color: var(--ion-color-primary);\n}\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3Jldmlldy1saXN0L3Jldmlldy1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jldmlldy1saXN0L3Jldmlldy1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQ0FBQTtBQ0NKO0FER0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0FGO0FERUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNBSjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNERjtBREdFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNESjtBREdJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXZpZXctbGlzdC9yZXZpZXctbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogMCAxMnB4IDAgMCAhaW1wb3J0YW50O1xuXG4gIGltZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG59XG5cbnVsIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgcGFkZGluZzogMHB4O1xuXG4gICYucmF0aW5nIGxpIHtcbiAgICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleDogMTtcblxuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgfVxuICB9XG59IiwiaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogMCAxMnB4IDAgMCAhaW1wb3J0YW50O1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgcGFkZGluZzogMHB4O1xufVxudWwucmF0aW5nIGxpIHtcbiAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNrZWxldG9uLWl0ZW0ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDE7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/review-list/review-list.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/review-list/review-list.ts ***!
  \**************************************************/
/*! exports provided: ReviewListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListPage", function() { return ReviewListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");








let ReviewListPage = class ReviewListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, reviewService) {
        super(injector);
        this.reviewService = reviewService;
        this.reviews = [];
        this.params = {};
        this.params = Object.assign({}, this.getParams());
        this.params.limit = 20;
        this.params.page = 0;
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.skeletonReviews = Array(10);
    }
    enableMenuSwipe() {
        return false;
    }
    ngOnInit() {
        this.setupObservable();
    }
    setupObservable() {
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 400);
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: false });
            if (this.params.id) {
                this.params.place = yield this.loadPlace();
                const str = yield this.getTrans('REVIEWS');
                const title = this.params.place.title + ' - ' + str;
                this.setPageTitle(title);
                this.setMetaTags({
                    title: title
                });
            }
            this.loadData();
        });
    }
    loadPlace() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const place = new src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"];
            place.id = this.params.id;
            return yield place.fetch();
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const reviews = yield this.reviewService.load(this.params);
                for (let review of reviews) {
                    this.reviews.push(review);
                }
                if (this.reviews.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
                this.onRefreshComplete(reviews);
            }
            catch (error) {
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
        this.refresher = event.target;
        this.reviews = [];
        this.params.page = 0;
        this.loadData();
    }
};
ReviewListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
], ReviewListPage.prototype, "container", void 0);
ReviewListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-review-list',
        template: __webpack_require__(/*! raw-loader!./review-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/review-list/review-list.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./review-list.scss */ "./src/app/pages/review-list/review-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"]])
], ReviewListPage);



/***/ })

}]);
//# sourceMappingURL=pages-review-list-review-list-module-es2015.js.map
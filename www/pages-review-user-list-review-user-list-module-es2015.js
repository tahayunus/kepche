(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-user-list-review-user-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/review-user-list/review-user-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/review-user-list/review-user-list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'MY_REVIEWS' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container padding scrollEvents=\"true\">\n\n  <ion-refresher (ionRefresh)=\"onReload($event)\">\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_REVIEWS' | translate\">\n  </empty-view>\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"star\" [text]=\"'EMPTY_REVIEWS' | translate\">\n  </empty-view>\n\n  <ion-grid fixed>\n    <ion-row justify-content-center>\n      <ion-col size-xs=\"12\" size-lg=\"8\">\n\n        <section *ngIf=\"isLoadingViewVisible\">\n          <div class=\"skeleton-item light-bg radius\" *ngFor=\"let item of skeletonReviews\">\n            <div class=\"wrapper\">\n              <div class=\"avatar\">\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\n                </ngx-skeleton-loader>\n              </div>\n              <div class=\"title\">\n                <div>\n                  <ngx-skeleton-loader\n                    [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\n                  </ngx-skeleton-loader>\n                </div>\n                <div>\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\n                  </ngx-skeleton-loader>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <ion-list lines=\"none\" [@staggerIn]=\"reviews.length\" *ngIf=\"isContentViewVisible\">\n          <div class=\"radius light-bg border\" margin-bottom *ngFor=\"let review of reviews\">\n            <ion-item color=\"light\" detail=\"false\" [routerLink]=\"['../places/' + review.place.id]\">\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"review.place?.featuredImageUrl\" src-fallback=\"./assets/img/placeholder.png\" />\n              </ion-thumbnail>\n              <ion-label text-wrap>\n                <ion-text color=\"medium\" float-end>\n                  <span class=\"text-small\">\n                    {{ review.createdAt | date:'mediumDate' }}\n                  </span>\n                </ion-text>\n                <h3 class=\"bold\">{{ review.place?.title }}</h3>\n                <star-rating [value]=\"review.rating\" checkedcolor=\"#f2b01e\" \n                  uncheckedcolor=\"gray\" size=\"12px\" readonly=\"true\">\n                  </star-rating>\n                <ion-text color=\"dark\">\n                  <p class=\"text-medium\">{{ review.comment }}</p>\n                </ion-text>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/review-user-list/review-user-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/review-user-list/review-user-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReviewUserListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewUserListPageModule", function() { return ReviewUserListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_user_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-user-list.page */ "./src/app/pages/review-user-list/review-user-list.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








const routes = [
    {
        path: '',
        component: _review_user_list_page__WEBPACK_IMPORTED_MODULE_6__["ReviewUserListPage"]
    }
];
let ReviewUserListPageModule = class ReviewUserListPageModule {
};
ReviewUserListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_review_user_list_page__WEBPACK_IMPORTED_MODULE_6__["ReviewUserListPage"]]
    })
], ReviewUserListPageModule);



/***/ }),

/***/ "./src/app/pages/review-user-list/review-user-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/review-user-list/review-user-list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: 0 12px 0 0 !important;\n}\nion-avatar img {\n  background: var(--ion-color-dark);\n}\nul {\n  margin: 4px 0;\n  padding: 0px;\n}\nul.rating li {\n  padding: 5px 0 !important;\n  background: none;\n  color: var(--ion-color-primary);\n}\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3Jldmlldy11c2VyLWxpc3QvcmV2aWV3LXVzZXItbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jldmlldy11c2VyLWxpc3QvcmV2aWV3LXVzZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQ0FBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNBUjtBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNEUjtBREdRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNEWjtBRElRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXZpZXctdXNlci1saXN0L3Jldmlldy11c2VyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gICAgbWFyZ2luOiAwIDEycHggMCAwICFpbXBvcnRhbnQ7XG5cbiAgICBpbWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxufVxuXG51bCB7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAmLnJhdGluZyBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAud3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDEycHggMCAwICFpbXBvcnRhbnQ7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxudWwge1xuICBtYXJnaW46IDRweCAwO1xuICBwYWRkaW5nOiAwcHg7XG59XG51bC5yYXRpbmcgbGkge1xuICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/review-user-list/review-user-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/review-user-list/review-user-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewUserListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewUserListPage", function() { return ReviewUserListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");








let ReviewUserListPage = class ReviewUserListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, reviewService) {
        super(injector);
        this.reviewService = reviewService;
        this.reviews = [];
        this.params = {};
    }
    enableMenuSwipe() {
        return false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.params = Object.assign({}, this.getParams());
            this.params.limit = 20;
            this.params.page = 0;
            this.params.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent();
            this.skeletonReviews = Array(10);
            this.setupObservable();
            const title = yield this.getTrans('MY_REVIEWS');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    setupObservable() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 400);
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.reviews.length)
                return;
            yield this.showLoadingView({ showOverlay: false });
            this.loadData();
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
ReviewUserListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], ReviewUserListPage.prototype, "container", void 0);
ReviewUserListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-user-list',
        template: __webpack_require__(/*! raw-loader!./review-user-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/review-user-list/review-user-list.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./review-user-list.page.scss */ "./src/app/pages/review-user-list/review-user-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"]])
], ReviewUserListPage);



/***/ })

}]);
//# sourceMappingURL=pages-review-user-list-review-user-list-module-es2015.js.map
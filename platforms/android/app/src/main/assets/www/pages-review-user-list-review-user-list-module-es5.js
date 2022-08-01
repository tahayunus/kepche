(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-user-list-review-user-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/review-user-list/review-user-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/review-user-list/review-user-list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{ 'MY_REVIEWS' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container padding scrollEvents=\"true\">\r\n\r\n  <ion-refresher (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_REVIEWS' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"star\" [text]=\"'EMPTY_REVIEWS' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row justify-content-center>\r\n      <ion-col size-xs=\"12\" size-lg=\"8\">\r\n\r\n        <section *ngIf=\"isLoadingViewVisible\">\r\n          <div class=\"skeleton-item light-bg radius\" *ngFor=\"let item of skeletonReviews\">\r\n            <div class=\"wrapper\">\r\n              <div class=\"avatar\">\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n              <div class=\"title\">\r\n                <div>\r\n                  <ngx-skeleton-loader\r\n                    [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n                <div>\r\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <ion-list lines=\"none\" [@staggerIn]=\"reviews.length\" *ngIf=\"isContentViewVisible\">\r\n          <div class=\"radius light-bg border\" margin-bottom *ngFor=\"let review of reviews\">\r\n            <ion-item color=\"light\" detail=\"false\" [routerLink]=\"['../places/' + review.place.id]\">\r\n              <ion-thumbnail slot=\"start\">\r\n                <img [src]=\"review.place?.featuredImageUrl\" src-fallback=\"./assets/img/placeholder.png\" />\r\n              </ion-thumbnail>\r\n              <ion-label text-wrap>\r\n                <ion-text color=\"medium\" float-end>\r\n                  <span class=\"text-small\">\r\n                    {{ review.createdAt | date:'mediumDate' }}\r\n                  </span>\r\n                </ion-text>\r\n                <h3 class=\"bold\">{{ review.place?.title }}</h3>\r\n                <star-rating [value]=\"review.rating\" checkedcolor=\"#f2b01e\" \r\n                  uncheckedcolor=\"gray\" size=\"12px\" readonly=\"true\">\r\n                  </star-rating>\r\n                <ion-text color=\"danger\">\r\n                  <p class=\"text-medium\">{{ review.comment }}</p>\r\n                </ion-text>\r\n              </ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_user_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-user-list.page */ "./src/app/pages/review-user-list/review-user-list.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _review_user_list_page__WEBPACK_IMPORTED_MODULE_6__["ReviewUserListPage"]
    }
];
var ReviewUserListPageModule = /** @class */ (function () {
    function ReviewUserListPageModule() {
    }
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
    return ReviewUserListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/review-user-list/review-user-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/review-user-list/review-user-list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: 0 12px 0 0 !important;\n}\nion-avatar img {\n  background: var(--ion-color-dark);\n}\nul {\n  margin: 4px 0;\n  padding: 0px;\n}\nul.rating li {\n  padding: 5px 0 !important;\n  background: none;\n  color: var(--ion-color-primary);\n}\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3LXVzZXItbGlzdC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHJldmlldy11c2VyLWxpc3RcXHJldmlldy11c2VyLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXZpZXctdXNlci1saXN0L3Jldmlldy11c2VyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjtBRENJO0VBQ0ksaUNBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDQVI7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDREo7QURHSTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FDRFI7QURHUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRFo7QURJUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmV2aWV3LXVzZXItbGlzdC9yZXZpZXctdXNlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gICAgbWFyZ2luOiAwIDEycHggMCAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgJi5yYXRpbmcgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2tlbGV0b24taXRlbSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogMCAxMnB4IDAgMCAhaW1wb3J0YW50O1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgcGFkZGluZzogMHB4O1xufVxudWwucmF0aW5nIGxpIHtcbiAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNrZWxldG9uLWl0ZW0ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDE7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");








var ReviewUserListPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReviewUserListPage, _super);
    function ReviewUserListPage(injector, reviewService) {
        var _this = _super.call(this, injector) || this;
        _this.reviewService = reviewService;
        _this.reviews = [];
        _this.params = {};
        return _this;
    }
    ReviewUserListPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ReviewUserListPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.params = Object.assign({}, this.getParams());
                        this.params.limit = 20;
                        this.params.page = 0;
                        this.params.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent();
                        this.skeletonReviews = Array(10);
                        this.setupObservable();
                        return [4 /*yield*/, this.getTrans('MY_REVIEWS')];
                    case 1:
                        title = _a.sent();
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewUserListPage.prototype.setupObservable = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    ReviewUserListPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 400);
    };
    ReviewUserListPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.reviews.length)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewUserListPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reviews, reviews_1, reviews_1_1, review, error_1, message;
            var e_1, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.reviewService.load(this.params)];
                    case 1:
                        reviews = _b.sent();
                        try {
                            for (reviews_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](reviews), reviews_1_1 = reviews_1.next(); !reviews_1_1.done; reviews_1_1 = reviews_1.next()) {
                                review = reviews_1_1.value;
                                this.reviews.push(review);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (reviews_1_1 && !reviews_1_1.done && (_a = reviews_1.return)) _a.call(reviews_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (this.reviews.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        this.onRefreshComplete(reviews);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _b.sent();
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
    ReviewUserListPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    };
    ReviewUserListPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        this.refresher = event.target;
        this.reviews = [];
        this.params.page = 0;
        this.loadData();
    };
    ReviewUserListPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./review-user-list.page.scss */ "./src/app/pages/review-user-list/review-user-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"]])
    ], ReviewUserListPage);
    return ReviewUserListPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-review-user-list-review-user-list-module-es5.js.map
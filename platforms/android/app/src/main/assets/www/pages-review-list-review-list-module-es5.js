(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-list-review-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/review-list/review-list.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/review-list/review-list.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <span *ngIf=\"params?.place?.title\">\r\n        {{ params.place.title }} - {{ 'REVIEWS' | translate }}\r\n      </span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container padding scrollEvents=\"true\">\r\n\r\n  <ion-refresher (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\" refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_REVIEWS' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"star\" [text]=\"'EMPTY_REVIEWS' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row justify-content-center>\r\n      <ion-col size-xs=\"12\" size-lg=\"8\">\r\n\r\n        <section *ngIf=\"isLoadingViewVisible\">\r\n          <div class=\"skeleton-item light-bg radius\"\r\n            *ngFor=\"let item of skeletonReviews\">\r\n            <div class=\"wrapper\">\r\n              <div class=\"avatar\">\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n              <div class=\"title\">\r\n                <div>\r\n                  <ngx-skeleton-loader [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n                <div>\r\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <ion-list lines=\"none\" [@staggerIn]=\"reviews.length\" *ngIf=\"isContentViewVisible\">\r\n          <div margin-bottom padding class=\"radius light-bg border\" *ngFor=\"let review of reviews\">\r\n            <ion-item no-padding color=\"light\">\r\n\r\n              <ion-avatar slot=\"start\">\r\n                <img defaultImage=\"./assets/img/avatar.png\"\r\n                  [lazyLoad]=\"review.user?.photo?.url()\"\r\n                  [scrollObservable]=\"loadAndScroll\" />\r\n              </ion-avatar>\r\n\r\n              <ion-label text-wrap>\r\n                <ion-text color=\"medium\" float-end>\r\n                  <span class=\"text-small\">\r\n                    {{ review.createdAt | date:'mediumDate' }}\r\n                  </span>\r\n                </ion-text>\r\n                <ion-text color=\"danger\">\r\n                  <h3 class=\"bold no-margin\">{{ review.user?.name }}</h3>\r\n                </ion-text>\r\n                <star-rating [value]=\"review.rating\" checkedcolor=\"#f2b01e\" \r\n                  uncheckedcolor=\"gray\" size=\"12px\" readonly=\"true\">\r\n                </star-rating>\r\n\r\n                <ion-text color=\"danger\">\r\n                  <p class=\"text-medium no-margin\">{{ review.comment }}</p>\r\n                </ion-text>\r\n              </ion-label>\r\n\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-list */ "./src/app/pages/review-list/review-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





var ReviewListPageModule = /** @class */ (function () {
    function ReviewListPageModule() {
    }
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
    return ReviewListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/review-list/review-list.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/review-list/review-list.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: 0 12px 0 0 !important;\n}\nion-avatar img {\n  background: var(--ion-color-dark);\n}\nul {\n  margin: 4px 0;\n  padding: 0px;\n}\nul.rating li {\n  padding: 5px 0 !important;\n  background: none;\n  color: var(--ion-color-primary);\n}\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3LWxpc3QvQzpcXFVzZXJzXFxWb2NhbEVhc3RcXERvY3VtZW50c1xcR2l0SHViXFxrZXBjaGUvc3JjXFxhcHBcXHBhZ2VzXFxyZXZpZXctbGlzdFxccmV2aWV3LWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV2aWV3LWxpc3QvcmV2aWV3LWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0Y7QURDRTtFQUNFLGlDQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQUY7QURFRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0FKO0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0RGO0FER0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlldy1saXN0L3Jldmlldy1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICBtYXJnaW46IDAgMTJweCAwIDAgIWltcG9ydGFudDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW46IDRweCAwO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgJi5yYXRpbmcgbGkge1xyXG4gICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuLnNrZWxldG9uLWl0ZW0ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDEycHggMCAwICFpbXBvcnRhbnQ7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxudWwge1xuICBtYXJnaW46IDRweCAwO1xuICBwYWRkaW5nOiAwcHg7XG59XG51bC5yYXRpbmcgbGkge1xuICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");








var ReviewListPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReviewListPage, _super);
    function ReviewListPage(injector, reviewService) {
        var _this = _super.call(this, injector) || this;
        _this.reviewService = reviewService;
        _this.reviews = [];
        _this.params = {};
        _this.params = Object.assign({}, _this.getParams());
        _this.params.limit = 20;
        _this.params.page = 0;
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        _this.skeletonReviews = Array(10);
        return _this;
    }
    ReviewListPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ReviewListPage.prototype.ngOnInit = function () {
        this.setupObservable();
    };
    ReviewListPage.prototype.setupObservable = function () {
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    ReviewListPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 400);
    };
    ReviewListPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, str, title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _b.sent();
                        if (!this.params.id) return [3 /*break*/, 4];
                        _a = this.params;
                        return [4 /*yield*/, this.loadPlace()];
                    case 2:
                        _a.place = _b.sent();
                        return [4 /*yield*/, this.getTrans('REVIEWS')];
                    case 3:
                        str = _b.sent();
                        title = this.params.place.title + ' - ' + str;
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        _b.label = 4;
                    case 4:
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewListPage.prototype.loadPlace = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var place;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        place = new src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"];
                        place.id = this.params.id;
                        return [4 /*yield*/, place.fetch()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReviewListPage.prototype.loadData = function () {
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
    ReviewListPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    };
    ReviewListPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        this.refresher = event.target;
        this.reviews = [];
        this.params.page = 0;
        this.loadData();
    };
    ReviewListPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./review-list.scss */ "./src/app/pages/review-list/review-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"]])
    ], ReviewListPage);
    return ReviewListPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-review-list-review-list-module-es5.js.map
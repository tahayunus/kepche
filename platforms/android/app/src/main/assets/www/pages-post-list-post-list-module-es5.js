(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-list-post-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/post-list/post-list.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/post-list/post-list.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n  \r\n<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'POSTS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\" refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"list-box\" [text]=\"'EMPTY_DATA' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid class=\"ion-padding\" fixed class=\"p96\">\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\" [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"place-row\" [@staggerIn]=\"posts.length\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let post of posts\">\r\n\r\n        <ion-card button class=\"shadow\" class=\"ion-no-margin ion-margin-bottom\" color=\"white\"\r\n          [routerLink]=\"['./' + post.id + '/' + post.slug]\">\r\n\r\n          <div class=\"bg-img\" defaultImage=\"./assets/img/placeholder.png\"\r\n            [lazyLoad]=\"post.image?.url()\"\r\n            [scrollObservable]=\"loadAndScroll\">\r\n          </div>\r\n\r\n          <ion-card-content>\r\n            <div class=\"ion-text-nowrap\">\r\n              <h3 class=\"bold\">{{ post.title }}</h3>\r\n            </div>\r\n            <div class=\"multi-ellipsis\">\r\n              <ion-text color=\"medium\">\r\n                <p>{{ post.body }}</p>\r\n              </ion-text>\r\n            </div>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/post-list/post-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/post-list/post-list.module.ts ***!
  \*****************************************************/
/*! exports provided: PostListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListPageModule", function() { return PostListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-list */ "./src/app/pages/post-list/post-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





var PostListPageModule = /** @class */ (function () {
    function PostListPageModule() {
    }
    PostListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _post_list__WEBPACK_IMPORTED_MODULE_3__["PostListPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _post_list__WEBPACK_IMPORTED_MODULE_3__["PostListPage"]
                    }
                ])
            ]
        })
    ], PostListPageModule);
    return PostListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/post-list/post-list.scss":
/*!************************************************!*\
  !*** ./src/app/pages/post-list/post-list.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\nion-content {\n  --background: var(--ion-color-light-tint);\n}\n\n.bg-img {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC1saXN0L0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xccG9zdC1saXN0XFxwb3N0LWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdC1saXN0L3Bvc3QtbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxZQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLHlDQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QtbGlzdC9wb3N0LWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluSGVhZGVyIHtcclxuICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxufVxyXG5cclxuLmJnLWltZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufSIsIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cblxuLmJnLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/post-list/post-list.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/post-list/post-list.ts ***!
  \**********************************************/
/*! exports provided: PostListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListPage", function() { return PostListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post */ "./src/app/services/post.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var PostListPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PostListPage, _super);
    function PostListPage(injector, postService) {
        var _this = _super.call(this, injector) || this;
        _this.postService = postService;
        _this.params = {};
        _this.posts = [];
        _this.skeletonArray = Array(12);
        _this.params.limit = 20;
        _this.params.page = 0;
        return _this;
    }
    PostListPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PostListPage.prototype.ngOnInit = function () {
        this.setupObservables();
    };
    PostListPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PostListPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    PostListPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.posts.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadData();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.getTrans('POSTS')];
                    case 3:
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
    PostListPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts, posts_1, posts_1_1, post, err_1;
            var e_1, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postService.load(this.params)];
                    case 1:
                        posts = _b.sent();
                        try {
                            for (posts_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](posts), posts_1_1 = posts_1.next(); !posts_1_1.done; posts_1_1 = posts_1.next()) {
                                post = posts_1_1.value;
                                this.posts.push(post);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (posts_1_1 && !posts_1_1.done && (_a = posts_1.return)) _a.call(posts_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (this.posts.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        this.onRefreshComplete(posts);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostListPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        this.refresher = event.target;
        this.posts = [];
        this.params.page = 0;
        this.loadData();
    };
    PostListPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    };
    PostListPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_post__WEBPACK_IMPORTED_MODULE_4__["Post"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], PostListPage.prototype, "container", void 0);
    PostListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'post-list-page',
            template: __webpack_require__(/*! raw-loader!./post-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/post-list/post-list.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./post-list.scss */ "./src/app/pages/post-list/post-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_post__WEBPACK_IMPORTED_MODULE_4__["Post"]])
    ], PostListPage);
    return PostListPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-post-list-post-list-module-es5.js.map
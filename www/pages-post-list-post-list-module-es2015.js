(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-list-post-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/post-list/post-list.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/post-list/post-list.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'POSTS' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content #container scrollEvents=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"list-box\" [text]=\"'EMPTY_DATA' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid class=\"ion-padding\" fixed class=\"p96\">\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"place-row\" [@staggerIn]=\"posts.length\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" float-left *ngFor=\"let post of posts\">\r\n\r\n        <ion-card button class=\"shadow\" class=\"ion-no-margin ion-margin-bottom\" color=\"white\"\r\n          [routerLink]=\"['./' + post.id]\">\r\n\r\n          <div class=\"bg-img\" defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"post.image?.url()\"\r\n            [scrollObservable]=\"loadAndScroll\">\r\n          </div>\r\n\r\n          <ion-card-content>\r\n            <div class=\"ion-text-nowrap\">\r\n              <h3 class=\"bold\">{{ post.title }}</h3>\r\n            </div>\r\n            <div class=\"multi-ellipsis\">\r\n              <ion-text color=\"medium\">\r\n                <p>{{ post.body }}</p>\r\n              </ion-text>\r\n            </div>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n  </ion-grid>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-list */ "./src/app/pages/post-list/post-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");





let PostListPageModule = class PostListPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post */ "./src/app/services/post.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");







let PostListPage = class PostListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, postService) {
        super(injector);
        this.postService = postService;
        this.params = {};
        this.posts = [];
        this.skeletonArray = Array(12);
        this.params.limit = 20;
        this.params.page = 0;
    }
    enableMenuSwipe() {
        return false;
    }
    ngOnInit() {
        this.setupObservables();
    }
    setupObservables() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 300);
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.posts.length) {
                yield this.showLoadingView({ showOverlay: false });
                this.loadData();
            }
            const title = yield this.getTrans('POSTS');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const posts = yield this.postService.load(this.params);
                for (let post of posts) {
                    this.posts.push(post);
                }
                if (this.posts.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
                this.onRefreshComplete(posts);
            }
            catch (err) {
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                this.showContentView();
                this.onRefreshComplete();
            }
        });
    }
    onReload(event = {}) {
        this.refresher = event.target;
        this.posts = [];
        this.params.page = 0;
        this.loadData();
    }
    onLoadMore(event = {}) {
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    }
};
PostListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_post__WEBPACK_IMPORTED_MODULE_4__["Post"] }
];
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
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./post-list.scss */ "./src/app/pages/post-list/post-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_post__WEBPACK_IMPORTED_MODULE_4__["Post"]])
], PostListPage);



/***/ })

}]);
//# sourceMappingURL=pages-post-list-post-list-module-es2015.js.map
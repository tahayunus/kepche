(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-list-category-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category-list/category-list.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category-list/category-list.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'CATEGORIES' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n\r\n  <ion-refresher (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"bookmark\" [text]=\"'EMPTY_DATA' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid no-padding fixed>\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"categories.length\">\r\n      <ion-col no-padding size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"8\" size-lg=\"4\" float-left\r\n        *ngFor=\"let category of categories\">\r\n        <ion-card mode=\"ios\">\r\n          <div class=\"card\" [routerLink]=\"['../places']\" [queryParams]=\"{ category: category.id }\">\r\n            <div class=\"bg-img\" defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"category.image?.url()\"\r\n              [scrollObservable]=\"loadAndScroll\">\r\n            </div>\r\n            <div class=\"content\">\r\n              <ion-text color=\"light\">\r\n                <h5 class=\"bold\">{{ category.title }}</h5>\r\n              </ion-text>\r\n              <ion-text color=\"light\">\r\n                <span class=\"bold\">\r\n                  {{ category.placeCount }} {{ 'PLACES' | translate }}\r\n                </span>\r\n              </ion-text>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/category-list/category-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/category-list/category-list.module.ts ***!
  \*************************************************************/
/*! exports provided: CategoryListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function() { return CategoryListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _category_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list */ "./src/app/pages/category-list/category-list.ts");






let CategoryListPageModule = class CategoryListPageModule {
};
CategoryListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _category_list__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"],
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _category_list__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"]
                }
            ])
        ],
        exports: [
            _category_list__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"]
        ]
    })
], CategoryListPageModule);



/***/ }),

/***/ "./src/app/pages/category-list/category-list.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/category-list/category-list.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.card {\n  height: 200px;\n  position: relative;\n}\n\n.card .bg-img {\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card .bg-img:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.card .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.card .content ion-text {\n  z-index: 9999;\n}\n\n.card .content span {\n  background: linear-gradient(135deg, var(--ion-color-secondary), var(--ion-color-secondary));\n  border-radius: 16px;\n  padding: 4px 16px;\n}\n\n@media only screen and (min-width: 581px) {\n  .card {\n    margin: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktbGlzdC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3J5LWxpc3RcXGNhdGVnb3J5LWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0o7O0FEQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7QUNDTjs7QURHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNESjs7QURHSTtFQUNFLGFBQUE7QUNETjs7QURJSTtFQUNFLDJGQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZOOztBRE9BO0VBQ0U7SUFDRSxXQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuYmctaW1nIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgxcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZCAuYmctaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jYXJkIC5iZy1pbWc6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmNhcmQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZCAuY29udGVudCBpb24tdGV4dCB7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4uY2FyZCAuY29udGVudCBzcGFuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgxcHgpIHtcbiAgLmNhcmQge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/category-list/category-list.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category-list/category-list.ts ***!
  \******************************************************/
/*! exports provided: CategoryListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPage", function() { return CategoryListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");







let CategoryListPage = class CategoryListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"] {
    constructor(injector, categoryService) {
        super(injector);
        this.categoryService = categoryService;
        this.categories = [];
        this.skeletonArray = Array(12);
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
            if (!this.categories.length) {
                yield this.showLoadingView({ showOverlay: false });
                this.loadData();
            }
            const title = yield this.getTrans('CATEGORIES');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.categories = yield this.categoryService.load();
                if (this.categories.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
                this.onRefreshComplete();
            }
            catch (error) {
                this.showErrorView();
                this.onRefreshComplete();
            }
        });
    }
    onReload(event = {}) {
        this.refresher = event.target;
        this.loadData();
    }
};
CategoryListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_categories__WEBPACK_IMPORTED_MODULE_4__["Category"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], CategoryListPage.prototype, "container", void 0);
CategoryListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'category-list-page',
        template: __webpack_require__(/*! raw-loader!./category-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category-list/category-list.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./category-list.scss */ "./src/app/pages/category-list/category-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_categories__WEBPACK_IMPORTED_MODULE_4__["Category"]])
], CategoryListPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-list-category-list-module-es2015.js.map
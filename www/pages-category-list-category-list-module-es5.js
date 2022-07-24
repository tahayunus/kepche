(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-list-category-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category-list/category-list.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category-list/category-list.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'BACK'|translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'CATEGORIES' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\">\n\n  <ion-refresher (ionRefresh)=\"onReload($event)\">\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\n  </empty-view>\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"bookmark\" [text]=\"'EMPTY_DATA' | translate\">\n  </empty-view>\n\n  <ion-grid no-padding fixed>\n\n    <ion-row *ngIf=\"isLoadingViewVisible\">\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\n        </ngx-skeleton-loader>\n      </ion-col>\n    </ion-row>\n\n    <ion-row [@staggerIn]=\"categories.length\">\n      <ion-col no-padding size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"8\" size-lg=\"4\" float-left\n        *ngFor=\"let category of categories\">\n        <ion-card mode=\"ios\">\n          <div class=\"card\" [routerLink]=\"['../places']\" [queryParams]=\"{ category: category.id }\">\n            <div class=\"bg-img\" defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"category.image?.url()\"\n              [scrollObservable]=\"loadAndScroll\">\n            </div>\n            <div class=\"content\">\n              <ion-text color=\"light\">\n                <h5 class=\"bold\">{{ category.title }}</h5>\n              </ion-text>\n              <ion-text color=\"light\">\n                <span class=\"bold\">\n                  {{ category.placeCount }} {{ 'PLACES' | translate }}\n                </span>\n              </ion-text>\n            </div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _category_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list */ "./src/app/pages/category-list/category-list.ts");






var CategoryListPageModule = /** @class */ (function () {
    function CategoryListPageModule() {
    }
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
    return CategoryListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category-list/category-list.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/category-list/category-list.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.card {\n  height: 200px;\n  position: relative;\n}\n\n.card .bg-img {\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card .bg-img:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.card .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.card .content ion-text {\n  z-index: 9999;\n}\n\n.card .content span {\n  background: linear-gradient(135deg, var(--ion-color-secondary), var(--ion-color-secondary));\n  border-radius: 16px;\n  padding: 4px 16px;\n}\n\n@media only screen and (min-width: 581px) {\n  .card {\n    margin: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDSjs7QURDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQ0NOOztBREdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdJO0VBQ0UsYUFBQTtBQ0ROOztBRElJO0VBQ0UsMkZBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRk47O0FET0E7RUFDRTtJQUNFLFdBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmJnLWltZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpb24tdGV4dCB7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1ODFweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZCAuYmctaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jYXJkIC5iZy1pbWc6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmNhcmQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZCAuY29udGVudCBpb24tdGV4dCB7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4uY2FyZCAuY29udGVudCBzcGFuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgxcHgpIHtcbiAgLmNhcmQge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var CategoryListPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryListPage, _super);
    function CategoryListPage(injector, categoryService) {
        var _this = _super.call(this, injector) || this;
        _this.categoryService = categoryService;
        _this.categories = [];
        _this.skeletonArray = Array(12);
        return _this;
    }
    CategoryListPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    CategoryListPage.prototype.ngOnInit = function () {
        this.setupObservables();
    };
    CategoryListPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    CategoryListPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    CategoryListPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.categories.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadData();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.getTrans('CATEGORIES')];
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
    CategoryListPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.categoryService.load()];
                    case 1:
                        _a.categories = _b.sent();
                        if (this.categories.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.showErrorView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryListPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        this.refresher = event.target;
        this.loadData();
    };
    CategoryListPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_categories__WEBPACK_IMPORTED_MODULE_4__["Category"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./category-list.scss */ "./src/app/pages/category-list/category-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_categories__WEBPACK_IMPORTED_MODULE_4__["Category"]])
    ], CategoryListPage);
    return CategoryListPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-category-list-category-list-module-es5.js.map
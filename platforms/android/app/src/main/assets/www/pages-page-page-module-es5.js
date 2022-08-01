(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/page/page.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/page/page.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{page?.attributes.title | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content #containerfluid>\r\n  <ion-grid fixed>\r\n    <ion-row justify-content-center>\r\n      <ion-col size-xs=\"12\" size-lg=\"12\">\r\n        <div class=\"fade-in\">\r\n          <div margin-top>\r\n            <h3 class=\"bold\">{{page?.attributes.title | translate}}</h3>\r\n          </div>\r\n        </div>           \r\n        <div class=\"html-content\" *ngIf=\"htmlBody\"\r\n          (click)=\"onContentTouched($event)\"\r\n          [innerHTML]=\"htmlBody\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/page/page.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/page/page.module.ts ***!
  \*******************************************/
/*! exports provided: PagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePageModule", function() { return PagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.page */ "./src/app/pages/page/page.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _page_page__WEBPACK_IMPORTED_MODULE_6__["PagePage"]
    }
];
var PagePageModule = /** @class */ (function () {
    function PagePageModule() {
    }
    PagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_page_page__WEBPACK_IMPORTED_MODULE_6__["PagePage"]]
        })
    ], PagePageModule);
    return PagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/page/page.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/page/page.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UvcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page/page.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/page/page.page.ts ***!
  \*****************************************/
/*! exports provided: PagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePage", function() { return PagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_statik_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/statik-page */ "./src/app/services/statik-page.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");







var PagePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PagePage, _super);
    function PagePage(injector, sanitizer, pageService) {
        var _this = _super.call(this, injector) || this;
        _this.sanitizer = sanitizer;
        _this.pageService = pageService;
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        return _this;
    }
    PagePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    PagePage.prototype.ngOnInit = function () {
        this.setupObservable();
    };
    PagePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadPage();
                        return [2 /*return*/];
                }
            });
        });
    };
    PagePage.prototype.setupObservable = function () {
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PagePage.prototype.loadPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.pageService.loadOne(this.getParams().slug)];
                    case 1:
                        _a.page = _b.sent();
                        console.log('page-detail', this.page);
                        if (this.page.content) {
                            this.htmlBody = this.sanitizer
                                .bypassSecurityTrustHtml(this.page.content);
                        }
                        this.setPageTitle(this.page.title);
                        this.setMetaTags({
                            title: this.page.title,
                            image: this.page.image ? this.page.image.url() : '',
                            slug: this.page.getSlug()
                        });
                        this.showContentView();
                        this.onContentLoaded();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        if (error_1.code === 101) {
                            this.showEmptyView();
                        }
                        else {
                            this.showErrorView();
                        }
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PagePage.prototype.onContentTouched = function (ev) {
        if (ev === void 0) { ev = {}; }
        var href = ev.target.getAttribute('href');
        if (href) {
            ev.preventDefault();
            this.openUrl(href);
        }
    };
    PagePage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 400);
    };
    PagePage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: src_app_services_statik_page__WEBPACK_IMPORTED_MODULE_5__["StatikPage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], PagePage.prototype, "container", void 0);
    PagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! raw-loader!./page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/page/page.page.html"),
            styles: [__webpack_require__(/*! ./page.page.scss */ "./src/app/pages/page/page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            src_app_services_statik_page__WEBPACK_IMPORTED_MODULE_5__["StatikPage"]])
    ], PagePage);
    return PagePage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-page-page-module-es5.js.map
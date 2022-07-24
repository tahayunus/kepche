(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-live-tv-live-tv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/live-tv/live-tv.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/live-tv/live-tv.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>live-tv</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/live-tv/live-tv.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/live-tv/live-tv.module.ts ***!
  \*************************************************/
/*! exports provided: LiveTvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTvPageModule", function() { return LiveTvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _live_tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-tv.page */ "./src/app/pages/live-tv/live-tv.page.ts");







var routes = [
    {
        path: '',
        component: _live_tv_page__WEBPACK_IMPORTED_MODULE_6__["LiveTvPage"]
    }
];
var LiveTvPageModule = /** @class */ (function () {
    function LiveTvPageModule() {
    }
    LiveTvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_live_tv_page__WEBPACK_IMPORTED_MODULE_6__["LiveTvPage"]]
        })
    ], LiveTvPageModule);
    return LiveTvPageModule;
}());



/***/ }),

/***/ "./src/app/pages/live-tv/live-tv.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/live-tv/live-tv.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpdmUtdHYvbGl2ZS10di5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/live-tv/live-tv.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/live-tv/live-tv.page.ts ***!
  \***********************************************/
/*! exports provided: LiveTvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTvPage", function() { return LiveTvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LiveTvPage = /** @class */ (function () {
    function LiveTvPage() {
    }
    LiveTvPage.prototype.ngOnInit = function () {
    };
    LiveTvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-tv',
            template: __webpack_require__(/*! raw-loader!./live-tv.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/live-tv/live-tv.page.html"),
            styles: [__webpack_require__(/*! ./live-tv.page.scss */ "./src/app/pages/live-tv/live-tv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LiveTvPage);
    return LiveTvPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-live-tv-live-tv-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emergency-emergency-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergency/emergency.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergency/emergency.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'EMERGENCY' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n<ion-grid fixed>\r\n  <div class=\"ozet\">        \r\n    <p><strong>{{ '112_TITLE' | translate }}:</strong> {{ '112_DESC' | translate }}</p>\r\n\r\n    <p><strong>{{ '110_TITLE' | translate }}:</strong> {{ '110_DESC' | translate }}</p>\r\n\r\n    <p><strong>{{ '155_TITLE' | translate }}:</strong> {{ '155_DESC' | translate }}</p>\r\n\r\n    <p><strong>{{ '156_TITLE' | translate }}:</strong> {{ '156_DESC' | translate }}</p>\r\n\r\n    </div>\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/emergency/emergency.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/emergency/emergency.module.ts ***!
  \*****************************************************/
/*! exports provided: EmergencyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyPageModule", function() { return EmergencyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _emergency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergency.page */ "./src/app/pages/emergency/emergency.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _emergency_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyPage"]
    }
];
var EmergencyPageModule = /** @class */ (function () {
    function EmergencyPageModule() {
    }
    EmergencyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_emergency_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyPage"]]
        })
    ], EmergencyPageModule);
    return EmergencyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emergency/emergency.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/emergency/emergency.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jeS9lbWVyZ2VuY3kucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/emergency/emergency.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/emergency/emergency.page.ts ***!
  \***************************************************/
/*! exports provided: EmergencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyPage", function() { return EmergencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");



var EmergencyPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmergencyPage, _super);
    function EmergencyPage(injector) {
        return _super.call(this, injector) || this;
    }
    EmergencyPage.prototype.enableMenuSwipe = function () {
        throw new Error('Method not implemented.');
    };
    EmergencyPage.prototype.ngOnInit = function () {
    };
    EmergencyPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    EmergencyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emergency',
            template: __webpack_require__(/*! raw-loader!./emergency.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergency/emergency.page.html"),
            styles: [__webpack_require__(/*! ./emergency.page.scss */ "./src/app/pages/emergency/emergency.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], EmergencyPage);
    return EmergencyPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-emergency-emergency-module-es5.js.map
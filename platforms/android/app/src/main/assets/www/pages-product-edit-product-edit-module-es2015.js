(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-edit-product-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-edit/product-edit.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-edit/product-edit.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar color=\"danger\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'PRODUCT_EDIT' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPageModule", function() { return ProductEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-edit.page */ "./src/app/pages/product-edit/product-edit.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








const routes = [
    {
        path: '',
        component: _product_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProductEditPage"]
    }
];
let ProductEditPageModule = class ProductEditPageModule {
};
ProductEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProductEditPage"]]
    })
], ProductEditPageModule);



/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product-edit/product-edit.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product-edit/product-edit.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPage", function() { return ProductEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");



let ProductEditPage = class ProductEditPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector) {
        super(injector);
    }
    enableMenuSwipe() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
};
ProductEditPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
ProductEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-edit',
        template: __webpack_require__(/*! raw-loader!./product-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-edit/product-edit.page.html"),
        styles: [__webpack_require__(/*! ./product-edit.page.scss */ "./src/app/pages/product-edit/product-edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ProductEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-edit-product-edit-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-directions-map-directions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/map-directions/map-directions.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/map-directions/map-directions.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>map-directions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/map-directions/map-directions.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/map-directions/map-directions.module.ts ***!
  \***************************************************************/
/*! exports provided: MapDirectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDirectionsPageModule", function() { return MapDirectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_directions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-directions.page */ "./src/app/pages/map-directions/map-directions.page.ts");







var routes = [
    {
        path: '',
        component: _map_directions_page__WEBPACK_IMPORTED_MODULE_6__["MapDirectionsPage"]
    }
];
var MapDirectionsPageModule = /** @class */ (function () {
    function MapDirectionsPageModule() {
    }
    MapDirectionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_directions_page__WEBPACK_IMPORTED_MODULE_6__["MapDirectionsPage"]]
        })
    ], MapDirectionsPageModule);
    return MapDirectionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/map-directions/map-directions.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/map-directions/map-directions.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC1kaXJlY3Rpb25zL21hcC1kaXJlY3Rpb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/map-directions/map-directions.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/map-directions/map-directions.page.ts ***!
  \*************************************************************/
/*! exports provided: MapDirectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDirectionsPage", function() { return MapDirectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");



var MapDirectionsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapDirectionsPage, _super);
    function MapDirectionsPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    MapDirectionsPage.prototype.enableMenuSwipe = function () {
        throw new Error('Method not implemented.');
    };
    MapDirectionsPage.prototype.ngOnInit = function () {
    };
    MapDirectionsPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    MapDirectionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-directions',
            template: __webpack_require__(/*! raw-loader!./map-directions.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/map-directions/map-directions.page.html"),
            styles: [__webpack_require__(/*! ./map-directions.page.scss */ "./src/app/pages/map-directions/map-directions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], MapDirectionsPage);
    return MapDirectionsPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-map-directions-map-directions-module-es5.js.map
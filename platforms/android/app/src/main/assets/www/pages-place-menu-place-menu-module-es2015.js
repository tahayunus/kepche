(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-menu-place-menu-module"],{

/***/ "./src/app/pages/place-menu-modal/place-menu-modal.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/place-menu-modal/place-menu-modal.module.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceMenuModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceMenuModalPageModule", function() { return PlaceMenuModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _place_menu_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-menu-modal.page */ "./src/app/pages/place-menu-modal/place-menu-modal.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");





let PlaceMenuModalPageModule = class PlaceMenuModalPageModule {
};
PlaceMenuModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _place_menu_modal_page__WEBPACK_IMPORTED_MODULE_3__["PlaceMenuModalPage"],
        ],
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ],
        entryComponents: [_place_menu_modal_page__WEBPACK_IMPORTED_MODULE_3__["PlaceMenuModalPage"]]
    })
], PlaceMenuModalPageModule);



/***/ }),

/***/ "./src/app/pages/place-menu/place-menu.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/place-menu/place-menu.module.ts ***!
  \*******************************************************/
/*! exports provided: PlaceMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceMenuPageModule", function() { return PlaceMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-menu.page */ "./src/app/pages/place-menu/place-menu.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _place_menu_modal_place_menu_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../place-menu-modal/place-menu-modal.module */ "./src/app/pages/place-menu-modal/place-menu-modal.module.ts");









const routes = [
    {
        path: '',
        component: _place_menu_page__WEBPACK_IMPORTED_MODULE_6__["PlaceMenuPage"]
    }
];
let PlaceMenuPageModule = class PlaceMenuPageModule {
};
PlaceMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _place_menu_modal_place_menu_modal_module__WEBPACK_IMPORTED_MODULE_8__["PlaceMenuModalPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_place_menu_page__WEBPACK_IMPORTED_MODULE_6__["PlaceMenuPage"]]
    })
], PlaceMenuPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-place-menu-place-menu-module-es2015.js.map
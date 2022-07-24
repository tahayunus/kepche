(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/address/address.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/address/address.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'SELECT_ADDRESS' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['./add']\">\n        <ion-icon name=\"add-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\">\n  <ion-grid fixed>\n    \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"6\" class=\"ion-text-start\">\n        <ion-text color=\"medium\">\n          <span class=\"text-normal bold padding-small\">\n            {{ 'MY_ADDRESS' | translate }}\n          </span>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-list>\n      <ion-radio-group allowEmptySelection=\"false\" [value]=\"preference.address\" (ionChange)=\"selectAddress($event)\"></ion-radio-group>\n      <ion-item color=\"light\" lines=\"none\" *ngFor=\"let a of address\">\n        <ion-label class=\"text-large bold\">{{a.name}}</ion-label>\n        <ion-radio [value]=\"a.name\"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/address/address.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }
];
let AddressPageModule = class AddressPageModule {
};
AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/pages/address/address.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/address/address.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/address/address.page.ts ***!
  \***********************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/address */ "./src/app/services/address.ts");
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");






let AddressPage = class AddressPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"] {
    constructor(injector, addressService, storage) {
        super(injector);
        this.addressService = addressService;
        this.storage = storage;
        this.address = [];
        this.selectedAdress = '';
    }
    enableMenuSwipe() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["User"].getCurrent();
        this.events.subscribe('user:login', () => {
            this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', () => {
            this.user = null;
        });
        this.getAddress();
        this.selectedAdress = this.storage.getAddress();
        console.log('Seçili Adres', this.selectedAdress);
    }
    getAddress() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.address = yield this.addressService.load({
                user: this.user
            });
            console.log('adresler', this.address);
        });
    }
    selectAddress(event) {
        if (!event)
            return;
        const address = event.detail.value;
        this.storage.setAddress(address);
        console.log('Address', this.storage.getAddress());
        this.preference.address = address;
    }
};
AddressPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_address__WEBPACK_IMPORTED_MODULE_2__["Address"] },
    { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"] }
];
AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: __webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/address/address.page.html"),
        styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/pages/address/address.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_services_address__WEBPACK_IMPORTED_MODULE_2__["Address"],
        src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-address-address-module-es2015.js.map
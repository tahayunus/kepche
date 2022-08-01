(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/address/address.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/address/address.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'SELECT_ADDRESS' | translate }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['./add']\">\r\n        <ion-icon name=\"add-circle-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n  <ion-grid fixed>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"6\" class=\"ion-text-start\">\r\n        <ion-text color=\"medium\">\r\n          <span class=\"text-normal bold padding-small\">\r\n            {{ 'MY_ADDRESS' | translate }}\r\n          </span>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-list>\r\n      <ion-radio-group allowEmptySelection=\"false\" (ionChange)=\"selectAddress($event)\">\r\n        <ion-item color=\"light\" lines=\"none\" *ngFor=\"let a of address\" class=\"ion-margin-bottom\">\r\n          <ion-label class=\"text-large bold\">{{a.name}}</ion-label>\r\n          <ion-radio [value]=\"a.id\" [checked]=\"user.address === a.id ? true : false\"></ion-radio>\r\n        </ion-item>      \r\n        <ion-item color=\"light\" lines=\"none\" class=\"ion-margin-bottom\">\r\n          <ion-label class=\"text-large bold\">{{'MY_LOCATION_NOW' | translate}}</ion-label>\r\n          <ion-radio [value]=\"'location-'+user.id\" [checked]=\"user.address === 'location-'+user.id ? true : false\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </ion-grid>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }
];
var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
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
    return AddressPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/address */ "./src/app/services/address.ts");
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");






var AddressPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddressPage, _super);
    function AddressPage(injector, addressService, storage) {
        var _this = _super.call(this, injector) || this;
        _this.addressService = addressService;
        _this.storage = storage;
        _this.address = [];
        _this.selectedAdress = '';
        return _this;
    }
    AddressPage.prototype.enableMenuSwipe = function () {
        throw new Error('Method not implemented.');
    };
    AddressPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["User"].getCurrent();
        this.events.subscribe('user:login', function () {
            _this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', function () {
            _this.user = null;
        });
        this.getAddress();
        this.selectedAdress = this.storage.getAddress();
        console.log('Seçili Adres', this.selectedAdress);
    };
    AddressPage.prototype.getAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.addressService.load({
                                user: this.user
                            })];
                    case 1:
                        _a.address = _b.sent();
                        console.log('adresler', this.address);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressPage.prototype.selectAddress = function (event) {
        var address = event.detail.value;
        var data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["User"]();
        data.id = this.user.id;
        data.set('address', address);
        data.save();
    };
    AddressPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_address__WEBPACK_IMPORTED_MODULE_2__["Address"] },
        { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"] }
    ]; };
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
    return AddressPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-address-address-module-es5.js.map
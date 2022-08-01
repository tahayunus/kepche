(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-menu-modal/place-menu-modal.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-menu-modal/place-menu-modal.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding ion-fixed\">\n  <ion-grid class=\"ion-text-center\">\n    <ion-icon (click)=\"onDismiss()\" name=\"chevron-down-outline\"></ion-icon>\n  </ion-grid>\n  <ion-grid fixed>\n    <ion-label position=\"stacked\" color=\"medium\" class=\"ion-justify-content-center ion-margin-bottom\">\n      <span class=\"bold\">{{ 'PRICE' | translate }}</span>\n    </ion-label>\n    <ion-item class=\"ion-margin-vertical\" lines=\"none\" color=\"light\" class=\"ion-text-center\">\n      <ion-input type=\"number\" id=\"price\" [value]=\"price\"></ion-input>\n    </ion-item>\n\n    <ion-label position=\"stacked\" color=\"medium\" class=\"ion-justify-content-center ion-margin-bottom\">\n      <span class=\"bold\">{{ 'QUANTITY' | translate }}</span>\n    </ion-label>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"6\" size-md=\"4\">\n        <ion-buttons class=\"ion-justify-content-center\">\n          <ion-button class=\"minus\" color=\"danger\" size=\"large\" (click)=\"changeQuantity('minus')\" [disabled]=\"quantity === 0 ? true : false\">\n            <ion-icon name=\"remove-circle-outline\" color=\"dark\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"number\" color=\"light\" size=\"large\">\n            <ion-label color=\"dark\">{{quantity}}</ion-label>\n          </ion-button>\n          <ion-button class=\"plus\" color=\"success\" size=\"large\" (click)=\"changeQuantity('plus')\" [disabled]=\"quantity === 10 ? true : false\">\n            <ion-icon name=\"add-circle-outline\" color=\"dark\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"6\" size-md=\"4\">\n        <ion-button class=\"ion-margin-vertical ion-strong\" (click)=\"onSubmit()\" color=\"success\" expand=\"block\"\n          shape=\"round\">\n          <span>{{ 'BROADCAST' | translate }}</span>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-menu/place-menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-menu/place-menu.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'PLACE_MENU' | translate}}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"place?.userid === user.id\">\r\n      <ion-button [routerLink]=\"['./add']\">\r\n        <ion-icon name=\"add-circle-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" *ngFor=\"let p of products\">\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin\">\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <ion-img class=\"bg-img\" [src]=\"p.featuredImageUrl\"></ion-img>\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label class=\"text-normal\">{{p.title}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-label class=\"bold ion-no-margin\">{{p.price}} ₺ - {{p.quantity}} porsiyon</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <ion-toggle mode=\"ios\" name=\"blueberry\" (ionChange)=\"changeStatus(p.isActive, p.id)\" [checked]=\"p.isActive ? true : false\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <ion-button mode=\"ios\" shape=\"round\" size=\"small\" color=\"warning\" [routerLink]=\"['./'+p.id+'/edit']\">\r\n                      <ion-label>{{'EDIT' | translate}}</ion-label>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/place-menu-modal/place-menu-modal.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/place-menu-modal/place-menu-modal.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button.number {\n  width: 80px;\n  font-size: large;\n  font-weight: bold;\n}\n\n#price {\n  width: 120px;\n  height: 64px;\n  font-size: xx-large;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2UtbWVudS1tb2RhbC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHBsYWNlLW1lbnUtbW9kYWxcXHBsYWNlLW1lbnUtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGFjZS1tZW51LW1vZGFsL3BsYWNlLW1lbnUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhY2UtbWVudS1tb2RhbC9wbGFjZS1tZW51LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ubnVtYmVyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNwcmljZSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24tYnV0dG9uLm51bWJlciB7XG4gIHdpZHRoOiA4MHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3ByaWNlIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/place-menu-modal/place-menu-modal.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/place-menu-modal/place-menu-modal.page.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceMenuModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceMenuModalPage", function() { return PlaceMenuModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product */ "./src/app/services/product.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");




var PlaceMenuModalPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaceMenuModalPage, _super);
    function PlaceMenuModalPage(injector, productService) {
        var _this = _super.call(this, injector) || this;
        _this.productService = productService;
        return _this;
    }
    PlaceMenuModalPage.prototype.ngOnInit = function () {
        this.getProduct();
    };
    PlaceMenuModalPage.prototype.enableMenuSwipe = function () {
        throw new Error('Method not implemented.');
    };
    PlaceMenuModalPage.prototype.getProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.productService.loadOne(this.id)];
                    case 1:
                        _a.product = _b.sent();
                        this.price = this.product.price;
                        this.quantity = this.product.quantity;
                        console.log('id', this.product);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceMenuModalPage.prototype.onDismiss = function () {
        return this.modalCtrl.dismiss();
    };
    PlaceMenuModalPage.prototype.changeQuantity = function (event) {
        if (event === 'plus' && this.quantity < 10) {
            this.quantity = this.quantity + 1;
        }
        else if (event === 'minus' && this.quantity > 0) {
            this.quantity = this.quantity - 1;
        }
    };
    PlaceMenuModalPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PlaceMenuModalPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_product__WEBPACK_IMPORTED_MODULE_2__["Product"] }
    ]; };
    PlaceMenuModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-menu-modal',
            template: __webpack_require__(/*! raw-loader!./place-menu-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-menu-modal/place-menu-modal.page.html"),
            styles: [__webpack_require__(/*! ./place-menu-modal.page.scss */ "./src/app/pages/place-menu-modal/place-menu-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_product__WEBPACK_IMPORTED_MODULE_2__["Product"]])
    ], PlaceMenuModalPage);
    return PlaceMenuModalPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ }),

/***/ "./src/app/pages/place-menu/place-menu.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/place-menu/place-menu.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  width: 100%;\n}\nion-card .bg-img {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  width: var(--image-width, 100%);\n  height: var(--image-height, 150px);\n  position: relative;\n  border-radius: 1rem;\n}\nion-card ion-row .status span {\n  bottom: 28px;\n  left: 8px;\n  position: absolute;\n  line-height: 10px;\n  padding: 5px;\n  border-radius: 3px;\n  font-size: small;\n  font-weight: bolder;\n  float: left;\n}\nion-card ion-row.ng-lazyloaded::before {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nion-card ion-row ion-progress-bar {\n  position: absolute;\n  bottom: 8px;\n}\nion-card ion-row .rating {\n  bottom: 20px;\n  right: 8px;\n  position: absolute;\n  line-height: 10px;\n  background: white;\n  padding: 5px;\n  border-radius: 3px;\n  font-size: small;\n  font-weight: bolder;\n}\nion-card ion-card-content {\n  padding: var(--content-padding, 8px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2UtbWVudS9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHBsYWNlLW1lbnVcXHBsYWNlLW1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGFjZS1tZW51L3BsYWNlLW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FEQ0k7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NSO0FETVk7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0poQjtBRFFRO0VBQ0ksNEVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTlo7QURTUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ1BaO0FEVVE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNSWjtBRFlJO0VBQ0ksK0NBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLW1lbnUvcGxhY2UtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuYmctaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICAgICAgICB3aWR0aDogdmFyKC0taW1hZ2Utd2lkdGgsIDEwMCUpO1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0taW1hZ2UtaGVpZ2h0LCAxNTBweCk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcblxyXG5cclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubmctbGF6eWxvYWRlZDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjApLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGVudC1wYWRkaW5nLCA4cHgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNhcmQgLmJnLWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIHdpZHRoOiB2YXIoLS1pbWFnZS13aWR0aCwgMTAwJSk7XG4gIGhlaWdodDogdmFyKC0taW1hZ2UtaGVpZ2h0LCAxNTBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbmlvbi1jYXJkIGlvbi1yb3cgLnN0YXR1cyBzcGFuIHtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmbG9hdDogbGVmdDtcbn1cbmlvbi1jYXJkIGlvbi1yb3cubmctbGF6eWxvYWRlZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY2FyZCBpb24tcm93IGlvbi1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xufVxuaW9uLWNhcmQgaW9uLXJvdyAucmF0aW5nIHtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogdmFyKC0tY29udGVudC1wYWRkaW5nLCA4cHgpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/place-menu/place-menu.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/place-menu/place-menu.page.ts ***!
  \*****************************************************/
/*! exports provided: PlaceMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceMenuPage", function() { return PlaceMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product */ "./src/app/services/product.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _place_menu_modal_place_menu_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../place-menu-modal/place-menu-modal.page */ "./src/app/pages/place-menu-modal/place-menu-modal.page.ts");








var PlaceMenuPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaceMenuPage, _super);
    function PlaceMenuPage(injector, productService, placeService) {
        var _this = _super.call(this, injector) || this;
        _this.productService = productService;
        _this.placeService = placeService;
        _this.toggle = false;
        _this.products = [];
        _this.params = {};
        return _this;
    }
    PlaceMenuPage.prototype.enableMenuSwipe = function () {
        throw new Error('Method not implemented.');
    };
    PlaceMenuPage.prototype.ngOnInit = function () {
        this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["User"].getCurrent();
        this.getProducts();
        this.getPlace();
    };
    PlaceMenuPage.prototype.getPlace = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadOne(this.getParams().id)];
                    case 1:
                        _a.place = _b.sent();
                        console.log('mekan', this.place);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceMenuPage.prototype.getProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var place, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        place = new src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__["Place"]();
                        place.id = this.getParams().id;
                        _a = this;
                        return [4 /*yield*/, this.productService.loadMenu(place)];
                    case 1:
                        _a.products = _b.sent();
                        console.log('Ürünler', this.products);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceMenuPage.prototype.openModal = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _place_menu_modal_place_menu_modal_page__WEBPACK_IMPORTED_MODULE_7__["PlaceMenuModalPage"],
                                componentProps: { id: id },
                                cssClass: 'menuModal'
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.dismissLoadingView()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceMenuPage.prototype.changeStatus = function (event, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var product, trans;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(event);
                        product = new src_app_services_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                        product.id = id;
                        if (!(event === true)) return [3 /*break*/, 3];
                        product.set('isActive', false);
                        product.save();
                        return [4 /*yield*/, this.getTrans(['GOOD_JOB', 'PRODUCT_IS_DEACTIVE', 'OK'])];
                    case 1:
                        trans = _a.sent();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                title: trans.GOOD_JOB,
                                text: trans.PRODUCT_IS_DEACTIVE,
                                confirmButtonText: trans.OK,
                                type: 'success',
                                animation: false,
                                heightAuto: false,
                                customClass: {
                                    popup: 'fade-in'
                                },
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (event === false) {
                            this.openModal(id);
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlaceMenuPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_product__WEBPACK_IMPORTED_MODULE_3__["Product"] },
        { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__["Place"] }
    ]; };
    PlaceMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-menu',
            template: __webpack_require__(/*! raw-loader!./place-menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-menu/place-menu.page.html"),
            styles: [__webpack_require__(/*! ./place-menu.page.scss */ "./src/app/pages/place-menu/place-menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_product__WEBPACK_IMPORTED_MODULE_3__["Product"],
            src_app_services_place_service__WEBPACK_IMPORTED_MODULE_2__["Place"]])
    ], PlaceMenuPage);
    return PlaceMenuPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_5__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module-es5.js.map
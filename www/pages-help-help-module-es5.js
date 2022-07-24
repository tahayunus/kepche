(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/help/help.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/help/help.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar mode=\"ios\" color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'BACK' | translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'HELP' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col no-padding size-xs=\"12\" size-sm size-md size-lg=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-list no-padding no-margin>\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['../pharmacy-duty']\">\n              <ion-icon name=\"medkit-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\n              <ion-label>\n                <p class=\"bold link text-slarge\">{{ 'PHARMACY_ON_DUTY' | translate }}</p>\n              </ion-label>\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"dark\"></ion-icon>\n            </ion-item>\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['../call-taxi']\">\n              <ion-icon name=\"car-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\n              <ion-label>\n                <p class=\"bold link text-slarge\">{{ 'CALL_TAXI' | translate }}</p>\n              </ion-label>\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"dark\"></ion-icon>\n            </ion-item>\n            <!--\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['./bus-time']\">\n              <ion-icon name=\"bus-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\n              <ion-label>\n                <p class=\"bold link text-slarge\">{{ 'BUS_TIME' | translate }}</p>\n              </ion-label>\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"dark\"></ion-icon>\n            </ion-item>-->\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['../emergency']\">\n              <ion-icon name=\"warning-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\n              <ion-label>\n                <p class=\"bold link text-slarge\">{{ 'EMERGENCY' | translate }}</p>\n              </ion-label>\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"dark\"></ion-icon>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/help/help.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.module.ts ***!
  \*******************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/pages/help/help.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help/help.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  background: var(--ion-color-dark);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\nion-avatar {\n  width: 120px;\n  height: 120px;\n}\n\nion-avatar img {\n  background: var(--ion-color-light);\n  display: inline-block;\n  max-width: 120px;\n  max-height: 120px;\n  border-radius: 50%;\n}\n\nion-item {\n  --min-height: 64px;\n}\n\n.custom-line-height {\n  line-height: 1.6;\n}\n\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n\n.hero-img {\n  width: 50%;\n}\n\nion-grid {\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-grid {\n    padding: 16px;\n  }\n\n  .heading {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    margin-top: 16px;\n  }\n\n  .hero-container, .intro {\n    padding: 16px;\n  }\n\n  .hero-img {\n    width: 90%;\n  }\n\n  .intro {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL2hlbHAvaGVscC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlbHAvaGVscC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUVFLFlBQUE7RUFDQSxhQUFBO0FDQUo7O0FEQ0k7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ047O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUk7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0FOOztBREVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBUjs7QURHTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RSOztBRE1FO0VBQ0UsVUFBQTtBQ0hKOztBRE1FO0VBQ0UsVUFBQTtBQ0hKOztBRE1FO0VBRUU7SUFDRSxhQUFBO0VDSko7O0VET0U7SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7RUNKSjs7RURPRTtJQUNFLGFBQUE7RUNKSjs7RURPRTtJQUNFLFVBQUE7RUNKSjs7RURPRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG4gIFxuICBpb24tYXZhdGFyIHtcbiAgXG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgaW1nIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG4gIFxuICBpb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OiA2NHB4O1xuICB9XG4gIFxuICAuY3VzdG9tLWxpbmUtaGVpZ2h0IHtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICB9XG4gIFxuICAuc2tlbGV0b24taXRlbSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIFxuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBmbGV4OiAxO1xuICBcbiAgICAgIC5hdmF0YXIge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIH1cbiAgXG4gICAgICAudGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmhlcm8taW1nIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBcbiAgICBpb24tZ3JpZCB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgXG4gICAgLmhlYWRpbmcge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICBcbiAgICAuaGVyby1jb250YWluZXIsIC5pbnRybyB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgXG4gICAgLmhlcm8taW1nIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICBcbiAgICAuaW50cm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9IiwiLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNjRweDtcbn1cblxuLmN1c3RvbS1saW5lLWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5za2VsZXRvbi1pdGVtIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4OiAxO1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmhlcm8taW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlYWRpbmcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAuaGVyby1jb250YWluZXIsIC5pbnRybyB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZXJvLWltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5pbnRybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/help/help.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/help/help.page.ts ***!
  \*****************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpPage = /** @class */ (function () {
    function HelpPage() {
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/pages/help/help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-help-help-module-es5.js.map
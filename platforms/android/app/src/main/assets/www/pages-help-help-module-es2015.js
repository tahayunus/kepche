(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/help/help.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/help/help.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"{{'BACK' | translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'HELP' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col no-padding size-xs=\"12\" size-sm size-md size-lg=\"12\">\r\n        <ion-card mode=\"ios\">\r\n          <ion-list no-padding no-margin>\r\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['../pharmacy-duty']\">\r\n              <ion-icon name=\"medkit-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\r\n              <ion-label>\r\n                <p class=\"bold link text-slarge\">{{ 'PHARMACY_ON_DUTY' | translate }}</p>\r\n              </ion-label>\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"danger\"></ion-icon>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['../call-taxi']\">\r\n              <ion-icon name=\"car-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\r\n              <ion-label>\r\n                <p class=\"bold link text-slarge\">{{ 'CALL_TAXI' | translate }}</p>\r\n              </ion-label>\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"danger\"></ion-icon>\r\n            </ion-item>\r\n            <!--\r\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['./bus-time']\">\r\n              <ion-icon name=\"bus-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\r\n              <ion-label>\r\n                <p class=\"bold link text-slarge\">{{ 'BUS_TIME' | translate }}</p>\r\n              </ion-label>\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"danger\"></ion-icon>\r\n            </ion-item>-->\r\n            <ion-item lines=\"none\" color=\"light\" [routerLink]=\"['../emergency']\">\r\n              <ion-icon name=\"warning-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\r\n              <ion-label>\r\n                <p class=\"bold link text-slarge\">{{ 'EMERGENCY' | translate }}</p>\r\n              </ion-label>\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\" color=\"danger\"></ion-icon>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/pages/help/help.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]
    }
];
let HelpPageModule = class HelpPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/help/help.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  background: var(--ion-color-dark);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\nion-avatar {\n  width: 120px;\n  height: 120px;\n}\n\nion-avatar img {\n  background: var(--ion-color-light);\n  display: inline-block;\n  max-width: 120px;\n  max-height: 120px;\n  border-radius: 50%;\n}\n\nion-item {\n  --min-height: 64px;\n}\n\n.custom-line-height {\n  line-height: 1.6;\n}\n\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n\n.hero-img {\n  width: 50%;\n}\n\nion-grid {\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-grid {\n    padding: 16px;\n  }\n\n  .heading {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    margin-top: 16px;\n  }\n\n  .hero-container, .intro {\n    padding: 16px;\n  }\n\n  .hero-img {\n    width: 90%;\n  }\n\n  .intro {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVscC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXGhlbHBcXGhlbHAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQ0FKOztBRENJO0VBQ0Usa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NOOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVJO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNBTjs7QURFTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQVI7O0FER007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNEUjs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURNRTtFQUVFO0lBQ0UsYUFBQTtFQ0pKOztFRE9FO0lBQ0UsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0VDSko7O0VET0U7SUFDRSxhQUFBO0VDSko7O0VET0U7SUFDRSxVQUFBO0VDSko7O0VET0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvaGVscC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1hdmF0YXIge1xyXG4gIFxyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1taW4taGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWxpbmUtaGVpZ2h0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgfVxyXG4gIFxyXG4gIC5za2VsZXRvbi1pdGVtIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgZmxleDogMTtcclxuICBcclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvLWltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICBpb24tZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgXHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICBcclxuICAgIC5oZXJvLWNvbnRhaW5lciwgLmludHJvIHtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuICBcclxuICAgIC5oZXJvLWltZyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW50cm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfSIsIi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5jdXN0b20tbGluZS1oZWlnaHQge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5oZXJvLWltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmhlcm8tY29udGFpbmVyLCAuaW50cm8ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVyby1pbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuaW50cm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpPage = class HelpPage {
    constructor() { }
    ngOnInit() {
    }
};
HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: __webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/help/help.page.html"),
        styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/pages/help/help.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelpPage);



/***/ })

}]);
//# sourceMappingURL=pages-help-help-module-es2015.js.map
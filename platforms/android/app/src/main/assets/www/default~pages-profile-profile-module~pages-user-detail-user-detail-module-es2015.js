(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-profile-profile-module~pages-user-detail-user-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/change-password/change-password.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/change-password/change-password.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar class=\"transparent\" color=\"primary\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onDismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'CHANGE_PASSWORD' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"form\" #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n    <ion-label position=\"stacked\" color=\"medium\">\r\n      <span class=\"bold\">{{ 'CURRENT_PASSWORD' | translate }}</span>\r\n    </ion-label>\r\n    <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n      <ion-input type=\"password\" formControlName=\"oldPassword\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-label position=\"stacked\" color=\"medium\">\r\n      <span class=\"bold\">{{ 'NEW_PASSWORD' | translate }}</span>\r\n    </ion-label>\r\n    <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-text color=\"secondary\">\r\n      <p class=\"bold\">\r\n        <small>\r\n          {{ 'PASSWORD_VALIDATION_HELP' | translate }}\r\n        </small>\r\n      </p>\r\n    </ion-text>\r\n\r\n    <ion-label position=\"stacked\" color=\"medium\">\r\n      <span class=\"bold\">{{ 'CONFIRM_PASSWORD' | translate }}</span>\r\n    </ion-label>\r\n    <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n      <ion-input type=\"password\" formControlName=\"confirmPassword\" (keyup.enter)=\"myForm.ngSubmit.emit()\"></ion-input>\r\n    </ion-item>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-toolbar>\r\n      <div text-center>\r\n        <ion-button shape=\"round\" color=\"secondary\"\r\n          [disabled]=\"isLoadingViewVisible\"\r\n          (click)=\"myForm.ngSubmit.emit()\">\r\n          <ion-spinner *ngIf=\"isLoadingViewVisible\"></ion-spinner>\r\n          <span *ngIf=\"!isLoadingViewVisible\">{{ 'SUBMIT' | translate }}</span>\r\n        </ion-button>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/comment-add/comment-add.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/comment-add/comment-add.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"onDismiss()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title> {{ 'COMMENTS' | translate }} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-grid fixed>\r\n    <ion-row justify-content-center>\r\n      <ion-col size-xs=\"12\" size-lg=\"8\">\r\n        <div lines=\"none\" *ngFor=\"let review of reviews;let i = index\">\r\n          <div margin-bottom padding class=\"radius light-bg border\" *ngIf=\"review.parentId === null\">\r\n            <ion-item no-padding color=\"light\">\r\n              <ion-avatar slot=\"start\">\r\n                <img defaultImage=\"./assets/img/avatar.png\" [lazyLoad]=\"review.user?.photo?.url()\"\r\n                  [scrollObservable]=\"loadAndScroll\" />\r\n              </ion-avatar>\r\n              <ion-label text-wrap>\r\n                <ion-text color=\"medium\" float-end>\r\n                  <span class=\"text-small\">\r\n                    {{ review.date | date:'mediumDate' }}\r\n                  </span>\r\n                </ion-text>\r\n                <ion-text color=\"danger\">\r\n                  <h3 class=\"bold no-margin\">{{ review.userid }}</h3>\r\n                </ion-text>\r\n                <ion-text color=\"danger\">\r\n                  <p class=\"text-slarge no-margin\">\r\n                    <a *ngFor=\"let t of review.t\">\r\n                      <a *ngIf=\"t.mention != null\" [routerLink]=\"'./../user/'+t.mention\">{{t.text}} </a>\r\n                      <a *ngIf=\"t.mention === null\" style=\"color: black;\">{{t.text}} </a>\r\n                    </a>\r\n                  </p>\r\n                </ion-text>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button (click)=\"likeButton(i,reviews,isliked[i])\">\r\n                <ion-icon *ngIf=\"isliked[i]\" name=\"flame\" color=\"warning\" slot=\"icon-only\"></ion-icon>\r\n                <ion-icon *ngIf=\"!isliked[i]\" name=\"flame-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button color=\"danger\" (click)=\"onComment(i,review,true)\">\r\n                <ion-icon name=\"chatbubbles-outline\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button color=\"danger\">\r\n                <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </div>\r\n          <div style=\"padding-left: 40px\" *ngFor=\"let subreview of reviews;let ii = index\">\r\n            <div margin-bottom padding class=\"radius light-bg border\" *ngIf=\"subreview.parentId === i\">\r\n              <ion-item no-padding color=\"light\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img defaultImage=\"./assets/img/avatar.png\" [lazyLoad]=\"subreview.user?.photo?.url()\"\r\n                    [scrollObservable]=\"loadAndScroll\" />\r\n                </ion-avatar>\r\n\r\n                <ion-label text-wrap>\r\n                  <ion-text color=\"medium\" float-end>\r\n                    <span class=\"text-small\">\r\n                      {{ subreview.date | date:'mediumDate' }}\r\n                    </span>\r\n                  </ion-text>\r\n                  <ion-text color=\"danger\">\r\n                    <h3 class=\"bold no-margin\">{{ subreview.userid }}</h3>\r\n                  </ion-text>\r\n\r\n                  <ion-text color=\"danger\">\r\n                    <p class=\"text-slarge no-margin\">{{ subreview.text }}</p>\r\n                  </ion-text>\r\n                </ion-label>\r\n              </ion-item>\r\n              <ion-buttons slot=\"start\">\r\n                <ion-button (click)=\"likeButton(ii,reviews,isliked[ii])\" color=\"danger\">\r\n                  <ion-icon *ngIf=\"isliked[ii]\" name=\"flame\" slot=\"icon-only\"></ion-icon>\r\n                  <ion-icon *ngIf=\"!isliked[ii]\" name=\"flame-outline\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button color=\"danger\" (click)=\"onComment(ii,subreview,false)\">\r\n                  <ion-icon name=\"chatbubbles-outline\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button color=\"danger\">\r\n                  <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div text-center>\r\n      <p *ngIf=\"targetComment != null\">{{targetUser.username}}'e yanıt veriyorsun <a (click)=\"untargetComment()\"\r\n          style=\"size: 15px;\">X</a></p>\r\n      <div text-center>\r\n        <ion-row>\r\n          <ion-col size-xs=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\">\r\n            <ion-textarea rows=\"1\" cols=\"20\" type=\"text\" [(ngModel)]=\"comment\" [mention]=\"users\"\r\n              [mentionConfig]=\"{triggerChar:'@',maxItems:10,labelKey:'name'}\" [placeholder]=\"'COMMENT' | translate\"></ion-textarea>\r\n            <!--\r\n              <ion-textarea [(ngModel)]=\"comment\" [mention]=\"users\" [placeholder]=\"'COMMENT' | translate\" (keyup.enter)=\"onSubmit()\">\r\n            </ion-textarea>\r\n            -->\r\n          </ion-col>\r\n          <ion-col size-xs=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\r\n            <ion-icon name=\"send-outline\" style=\"font-size: 40px;\" (click)=\"onSubmit()\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/followers/followers.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/followers/followers.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>{{ 'FRIENDS' | translate }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onDismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed *ngIf=\"type === 1\">\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" *ngFor=\"let fl of followers;let i = index\">\r\n        <ion-card *ngIf=\"fls[i]\" mode=\"ios\" class=\"ion-no-margin\">\r\n          <ion-row class=\"flw\">\r\n            <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\r\n              <ion-row>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\r\n                  <ion-avatar>\r\n                    <img src-fallback=\"./assets/img/avatar.png\" [src]=\"fl?.attributes.photo?.url()\" />\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\" class=\"name\">\r\n                  <div><b>{{fl.name}} {{fl.surname}}</b></div>\r\n                  <div>{{fl.username}}</div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"fls[i]?.request\" size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"btn\">\r\n              <ion-button *ngIf=\"fls[i].request === 0\" size=\"small\" color=\"primary\" shape=\"round\">\r\n                <ion-label>Takip Et</ion-label>\r\n              </ion-button>\r\n              <ion-button *ngIf=\"fls[i].request === 1\" (click)=\"unfollow(i)\" size=\"small\" color=\"danger\" shape=\"round\">\r\n                <ion-label>Takip</ion-label>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed *ngIf=\"type === 2\">\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" *ngFor=\"let fl of following;let i = index\">\r\n        <ion-card *ngIf=\"flw[i]\" mode=\"ios\" class=\"ion-no-margin\">\r\n          <ion-row class=\"flw\">\r\n            <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\r\n              <ion-row>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\r\n                  <ion-avatar>\r\n                    <img src-fallback=\"./assets/img/avatar.png\" [src]=\"fl?.attributes.photo?.url()\" />\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\" class=\"name\">\r\n                  <div><b>{{fl.name}} {{fl.surname}}</b></div>\r\n                  <div>{{fl.username}}</div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"flw[i]?.request\" size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"btn\">\r\n              <ion-button *ngIf=\"flw[i].request === 0\" size=\"small\" color=\"primary\" shape=\"round\">\r\n                <ion-label>Takip Et</ion-label>\r\n              </ion-button>\r\n              <ion-button *ngIf=\"flw[i].request === 1\" (click)=\"unfollow(i)\" size=\"small\" color=\"danger\" shape=\"round\">\r\n                <ion-label>Takip</ion-label>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile-edit/profile-edit.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile-edit/profile-edit.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"onDismiss()\">\r\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'EDIT_PROFILE' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"form\" #profileForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n    <ion-label position=\"stacked\" color=\"medium\">\r\n      <span class=\"bold\">{{ 'NAME' | translate }}</span>\r\n    </ion-label>\r\n    <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"!user?.attributes.authData\">\r\n      <ion-label position=\"stacked\" color=\"medium\">\r\n        <span class=\"bold\">{{ 'USERNAME' | translate }}</span>\r\n      </ion-label>\r\n      <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n        <ion-input type=\"text\" formControlName=\"username\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-label position=\"stacked\" color=\"medium\">\r\n      <span class=\"bold\">{{ 'EMAIL' | translate }}</span>\r\n    </ion-label>\r\n    <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n      <ion-input type=\"email\" formControlName=\"email\" (keyup.enter)=\"profileForm.ngSubmit.emit()\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-label position=\"stacked\" color=\"medium\">\r\n      <span class=\"bold\">{{ 'UPLOAD_PICTURE' | translate }}</span>\r\n    </ion-label>\r\n\r\n    <div margin-top>\r\n      <app-upload-box (onFileUploaded)=\"onFileUploaded($event)\">\r\n      </app-upload-box>\r\n    </div>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div text-center>\r\n      <ion-button type=\"submit\" shape=\"round\" color=\"secondary\"\r\n      [disabled]=\"isLoadingViewVisible\"\r\n      (click)=\"profileForm.ngSubmit.emit()\">\r\n        <ion-spinner *ngIf=\"isLoadingViewVisible\"></ion-spinner>\r\n        <span *ngIf=\"!isLoadingViewVisible\">{{ 'SUBMIT' | translate }}</span>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\" (click)=\"onDismiss()\">\r\n          <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>{{ 'SETTINGS' | translate }}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-text color=\"secondary\">\r\n        <p ion-text class=\"bold\">\r\n          {{ 'NOTIFICATION_SETTINGS' | translate }}\r\n        </p>\r\n      </ion-text>\r\n    </ion-list-header>\r\n    <ion-item color=\"light\" lines=\"none\">\r\n      <ion-label class=\"text-medium bold\">{{ 'PHONE_NOT' | translate }}</ion-label>\r\n      <ion-toggle *ngIf=\"phoneNot === true\" slot=\"end\" color=\"success\" (click)=\"goPhoneNot(false)\" checked></ion-toggle>\r\n      <ion-toggle *ngIf=\"phoneNot === false\" slot=\"end\" color=\"success\" (click)=\"goPhoneNot(true)\"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\" lines=\"none\">\r\n      <ion-label class=\"text-medium bold\">{{ 'SMS_NOT' | translate }}</ion-label>\r\n      <ion-toggle *ngIf=\"smsNot === true\" slot=\"end\" color=\"success\" (click)=\"goSmsNot(false)\" checked></ion-toggle>\r\n      <ion-toggle *ngIf=\"smsNot === false\" slot=\"end\" color=\"success\" (click)=\"goSmsNot(true)\"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <ion-item color=\"light\" lines=\"none\">\r\n      <ion-label class=\"text-medium bold\">{{ 'E_MAIL_NOT' | translate }}</ion-label>\r\n      <ion-toggle *ngIf=\"emailNot === true\" slot=\"end\" color=\"success\" (click)=\"goEmailNot(false)\" checked></ion-toggle>\r\n      <ion-toggle *ngIf=\"emailNot === false\" slot=\"end\" color=\"success\" (click)=\"goEmailNot(true)\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-radio-group allowEmptySelection=\"false\" [value]=\"preference.unit\" (ionChange)=\"onChangeUnit($event)\">\r\n      <ion-list-header>\r\n        <ion-text color=\"secondary\">\r\n          <p ion-text class=\"bold\">\r\n            {{ 'DISTANCE_UNIT' | translate }}\r\n          </p>\r\n        </ion-text>\r\n      </ion-list-header>\r\n      <ion-item color=\"light\" lines=\"none\">\r\n        <ion-label class=\"text-medium bold\">Mi</ion-label>\r\n        <ion-radio value=\"mi\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item color=\"light\" lines=\"none\">\r\n        <ion-label class=\"text-medium bold\">Km</ion-label>\r\n        <ion-radio value=\"km\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-radio-group allowEmptySelection=\"false\" [value]=\"preference.lang\" (ionChange)=\"onChangeLang($event)\">\r\n      <ion-list-header>\r\n        <ion-text color=\"secondary\">\r\n          <p ion-text class=\"bold\">{{ 'LANGUAGE' | translate }}</p>\r\n        </ion-text>\r\n      </ion-list-header>\r\n      <ion-item color=\"light\" lines=\"none\">\r\n        <ion-label class=\"text-medium bold\">{{ 'TURKISH' | translate }}</ion-label>\r\n        <ion-radio value=\"tr\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item color=\"light\" lines=\"none\">\r\n        <ion-label class=\"text-medium bold\">{{ 'ENGLISH' | translate }}</ion-label>\r\n        <ion-radio value=\"en\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/change-password/change-password.ts ***!
  \**********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ChangePasswordPage = class ChangePasswordPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, userService) {
        super(injector);
        this.userService = userService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
        });
    }
    enableMenuSwipe() {
        return false;
    }
    onDismiss() {
        this.modalCtrl.dismiss();
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let formData = this.form.value;
            if (this.form.invalid) {
                return this.translate.get('INVALID_FORM').subscribe(str => this.showToast(str));
            }
            if (formData.password !== formData.confirmPassword) {
                return this.translate.get('PASSWORD_DOES_NOT_MATCH').subscribe(str => this.showToast(str));
            }
            try {
                yield this.showLoadingView({ showOverlay: false });
                this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
                let loginData = {
                    username: this.user.username,
                    password: formData.oldPassword
                };
                yield this.userService.signIn(loginData);
                this.user.password = formData.password;
                yield this.user.save();
                this.translate.get('SAVED').subscribe(str => this.showToast(str));
                this.showContentView();
            }
            catch (err) {
                this.showContentView();
                if (err.code === 101) {
                    this.translate.get('PASSWORD_INVALID').subscribe(str => this.showToast(str));
                }
                else {
                    this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                }
            }
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.html */ "./node_modules/raw-loader/index.js!./src/app/pages/change-password/change-password.html"),
        styles: [__webpack_require__(/*! ./change-password.scss */ "./src/app/pages/change-password/change-password.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"]])
], ChangePasswordPage);



/***/ }),

/***/ "./src/app/pages/comment-add/comment-add.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/comment-add/comment-add.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 60px;\n}\n\nion-item {\n  --border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbWVudC1hZGQvQzpcXFVzZXJzXFxWb2NhbEVhc3RcXERvY3VtZW50c1xcR2l0SHViXFxrZXBjaGUvc3JjXFxhcHBcXHBhZ2VzXFxjb21tZW50LWFkZFxcY29tbWVudC1hZGQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbWVudC1hZGQvY29tbWVudC1hZGQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbWVudC1hZGQvY29tbWVudC1hZGQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/comment-add/comment-add.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/comment-add/comment-add.ts ***!
  \**************************************************/
/*! exports provided: CommentAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentAddPage", function() { return CommentAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo */ "./src/app/services/photo.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let CommentAddPage = class CommentAddPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, userService) {
        super(injector);
        this.userService = userService;
        this.isliked = [];
        this.targetComment = null;
    }
    ngOnInit() {
        this.loadData();
    }
    enableMenuSwipe() {
        return false;
    }
    onComment(index, review, isParent) {
        this.targetUser = review.user;
        if (isParent) {
            this.targetComment = index;
        }
        else {
            this.targetComment = review.parentId;
        }
        console.log("onCommentIndex", index);
        console.log("onComment", review);
    }
    untargetComment() {
        this.targetComment = null;
        this.targetUser = null;
    }
    likeButton(index, comments, liked) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let comment = [];
            comments.forEach(element => {
                delete element.user;
                comment.push(element);
            });
            console.log("aynennn", comment[index]);
            let newLikes = [];
            if (liked) {
                for (let like of comment[index].likes) {
                    if (like != src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id) {
                        newLikes.push(like);
                    }
                }
                comment[index].likes = newLikes;
                const query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"]();
                query.id = this.photo.id;
                console.log("aynenn", comment);
                query.set("comment", comment);
                query.save();
                this.isliked[index] = 0;
            }
            else {
                const query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"]();
                query.id = this.photo.id;
                comment[index].likes.push(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id);
                query.set("comment", comment);
                this.isliked[index] = 1;
                query.save();
            }
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const getUsers = yield this.userService.load();
            this.userData = getUsers;
            this.users = [];
            getUsers.forEach(userDetail => {
                this.users.push(userDetail.username);
            });
            console.log("usersss", this.users);
            this.reviews = this.photo.attributes.comment;
            let userList = [];
            this.reviews.forEach(review => {
                let isLiked = 0;
                for (let likePhoto of review.likes) {
                    if (likePhoto === src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id) {
                        isLiked = 1;
                    }
                }
                this.isliked.push(isLiked);
                userList.push(review.userId);
            });
            const getUser = yield this.userService.loadList(userList);
            this.reviews.forEach((review, index) => {
                getUser.forEach(element => {
                    if (element.id === review.userId) {
                        this.reviews[index].user = element;
                    }
                });
                let usrList = [];
                getUsers.forEach(usr => {
                    review.mentions.forEach(element => {
                        if (usr.id === element) {
                            usrList.push("@" + usr.username);
                        }
                    });
                });
                let data = [];
                review.text.split(" ").forEach((re, index) => {
                    //console.log("re",re)
                    let o = null;
                    usrList.forEach((u, i) => {
                        if (re === u) {
                            o = review.mentions[i];
                        }
                    });
                    data.push({
                        "text": re,
                        "mention": o
                    });
                });
                this.reviews[index].t = data;
                this.reviews[index].mention = usrList;
            });
            console.log("hahah", this.reviews);
        });
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.showLoadingView({ showOverlay: false });
                let mentions = [];
                let mentionsId = [];
                console.log("asdasdassa", this.comment);
                let ids = this.comment.replace(/(\r\n|\n|\r)/gm, "").split("@").forEach(id => {
                    mentions.push(id.split(" ")[0]);
                });
                this.userData.forEach((u) => {
                    mentions.forEach(m => {
                        if (m === u.username) {
                            mentionsId.push(u.id);
                        }
                    });
                });
                console.log("search", mentionsId);
                console.log("asdasdaasdasdasda", ids);
                const query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"]();
                query.id = this.photo.id;
                let comments = this.photo.attributes.comment;
                let parentId = null;
                if (this.targetComment != null) {
                    parentId = this.targetComment;
                }
                comments.push({
                    "userId": src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id,
                    "date": Date.now(),
                    "parentId": parentId,
                    "likes": [],
                    "mentions": mentionsId,
                    "text": this.comment
                });
                query.set('comment', comments);
                query.save();
                this.onDismiss();
                this.showContentView();
            }
            catch (err) {
                this.showContentView();
                if (err.code === 5000) {
                    this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(str => this.showToast(str));
                }
                else {
                    this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                }
            }
        });
    }
    onDismiss(review = null) {
        this.modalCtrl.dismiss(review);
    }
};
CommentAddPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"])
], CommentAddPage.prototype, "photo", void 0);
CommentAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-comment-add',
        template: __webpack_require__(/*! raw-loader!./comment-add.html */ "./node_modules/raw-loader/index.js!./src/app/pages/comment-add/comment-add.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./comment-add.scss */ "./src/app/pages/comment-add/comment-add.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"]])
], CommentAddPage);



/***/ }),

/***/ "./src/app/pages/followers/followers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/followers/followers.module.ts ***!
  \*****************************************************/
/*! exports provided: FollowersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPageModule", function() { return FollowersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgot-password/forgot-password.module */ "./src/app/pages/forgot-password/forgot-password.module.ts");
/* harmony import */ var _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts");
/* harmony import */ var _followers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./followers */ "./src/app/pages/followers/followers.ts");








let FollowersPageModule = class FollowersPageModule {
};
FollowersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _followers__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageModule"],
            _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageModule"],
        ],
        entryComponents: [_followers__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"]]
    })
], FollowersPageModule);



/***/ }),

/***/ "./src/app/pages/followers/followers.scss":
/*!************************************************!*\
  !*** ./src/app/pages/followers/followers.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flw {\n  height: 84px;\n}\n.flw ion-avatar {\n  height: 64px;\n  width: 64px;\n}\n.flw .name div {\n  line-height: 32px;\n  width: 100%;\n}\n.flw .btn {\n  line-height: 64px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9sbG93ZXJzL0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xcZm9sbG93ZXJzXFxmb2xsb3dlcnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9sbG93ZXJzL2ZvbGxvd2Vycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0VSO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNDWjtBREVJO0VBQ0ksNEJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvbGxvd2Vycy9mb2xsb3dlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbHcge1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmZsdyB7XG4gIGhlaWdodDogODRweDtcbn1cbi5mbHcgaW9uLWF2YXRhciB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG59XG4uZmx3IC5uYW1lIGRpdiB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbHcgLmJ0biB7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/followers/followers.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/followers/followers.ts ***!
  \**********************************************/
/*! exports provided: FollowersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPage", function() { return FollowersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");





let FollowersPage = class FollowersPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, userService, fb) {
        super(injector);
        this.userService = userService;
        this.fb = fb;
        this.fls = [];
        this.flw = [];
        this.myFls = [];
        this.myFlw = [];
        this.followers = [];
        this.following = [];
        this.myFollowers = [];
        this.myFollowing = [];
        this.isLoadingByUsername = false;
        this.isLoadingByFacebook = false;
    }
    ngOnInit() {
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
        console.log('userid', this.pid);
        console.log('followers', this.fls);
        console.log('following', this.flw);
        console.log('myfollowers', this.myFls);
        console.log('myfollowing', this.myFlw);
        this.getFollowers();
        this.getFollowing();
        this.getMyFollowers();
        this.getMyFollowing();
    }
    changeType(event) {
        this.type = event;
    }
    getFollowers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let usrList = [];
                this.fls.forEach(f => {
                    usrList.push(f.followId);
                });
                const usr = yield this.userService.loadList(usrList);
                for (let u of usr) {
                    this.followers.push(u);
                }
                console.log("followsssers", usrList);
                this.showContentView();
            }
            catch (err) {
                this.showContentView();
                this.onRefreshComplete();
                let message = yield this.getTrans('ERROR_NETWORK');
                this.showToast(message);
            }
        });
    }
    getFollowing() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let usrList = [];
                this.flw.forEach(f => {
                    usrList.push(f.followId);
                });
                const usr = yield this.userService.loadList(usrList);
                for (let u of usr) {
                    this.following.push(u);
                }
                console.log("followingsss", usrList);
                this.showContentView();
            }
            catch (err) {
                this.showContentView();
                this.onRefreshComplete();
                let message = yield this.getTrans('ERROR_NETWORK');
                this.showToast(message);
            }
        });
    }
    getMyFollowers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let usrList = [];
                this.myFls.forEach(f => {
                    usrList.push(f.followId);
                });
                const usr = yield this.userService.loadList(usrList);
                for (let u of usr) {
                    this.myFollowers.push(u);
                }
                console.log("myfollowsssers", usrList);
                this.showContentView();
            }
            catch (err) {
                this.showContentView();
                this.onRefreshComplete();
                let message = yield this.getTrans('ERROR_NETWORK');
                this.showToast(message);
            }
        });
    }
    getMyFollowing() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let usrList = [];
                this.flw.forEach(f => {
                    usrList.push(f.followId);
                });
                const usr = yield this.userService.loadList(usrList);
                for (let u of usr) {
                    this.following.push(u);
                }
                console.log("followingsss", usrList);
                this.showContentView();
            }
            catch (err) {
                this.showContentView();
                this.onRefreshComplete();
                let message = yield this.getTrans('ERROR_NETWORK');
                this.showToast(message);
            }
        });
    }
    unfollow(i) {
        const query = new _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"]();
        query.id = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id;
        delete this.fls[i];
        this.fls.length = this.fls.length - 1;
        query.set('followers', this.fls);
        query.save();
    }
    enableMenuSwipe() {
        return false;
    }
    onDismiss() {
        return this.modalCtrl.dismiss();
    }
};
FollowersPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] }
];
FollowersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-followers',
        template: __webpack_require__(/*! raw-loader!./followers.html */ "./node_modules/raw-loader/index.js!./src/app/pages/followers/followers.html"),
        styles: [__webpack_require__(/*! ./followers.scss */ "./src/app/pages/followers/followers.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]])
], FollowersPage);



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1lZGl0L0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZS1lZGl0XFxwcm9maWxlLWVkaXQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.ts ***!
  \****************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ProfileEditPage = class ProfileEditPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector) {
        super(injector);
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
    }
    enableMenuSwipe() {
        return true;
    }
    ngOnInit() {
        this.setupForm();
    }
    onFileUploaded(file) {
        this.photo = file;
    }
    setupForm() {
        let formGroupParams = {
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.attributes.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.attributes.email)
        };
        // Show the username field if user logged in with username/password
        if (!this.user.attributes.authData) {
            formGroupParams.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](formGroupParams);
    }
    onDismiss() {
        this.modalCtrl.dismiss();
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.form.invalid) {
                    return this.translate.get('INVALID_FORM').subscribe(str => this.showToast(str));
                }
                this.showLoadingView({ showOverlay: false });
                const formData = Object.assign({}, this.form.value);
                if (this.photo) {
                    formData.photo = this.photo;
                }
                if (!formData.email)
                    delete formData.email;
                const user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
                yield user.save(formData);
                this.showContentView();
                this.translate.get('SAVED').subscribe(str => this.showToast(str));
                this.onDismiss();
            }
            catch (error) {
                if (error.code === 202) {
                    this.translate.get('USERNAME_TAKEN').subscribe(str => this.showToast(str));
                }
                else if (error.code === 203) {
                    this.translate.get('EMAIL_TAKEN').subscribe(str => this.showToast(str));
                }
                else if (error.code === 125) {
                    this.translate.get('EMAIL_INVALID').subscribe(str => this.showToast(str));
                }
                else {
                    this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                }
                this.showContentView();
            }
        });
    }
};
ProfileEditPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-profile-edit',
        template: __webpack_require__(/*! raw-loader!./profile-edit.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile-edit/profile-edit.html"),
        styles: [__webpack_require__(/*! ./profile-edit.scss */ "./src/app/pages/profile-edit/profile-edit.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ProfileEditPage);



/***/ }),

/***/ "./src/app/pages/settings/settings.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/settings/settings.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXFVzZXJzXFxWb2NhbEVhc3RcXERvY3VtZW50c1xcR2l0SHViXFxrZXBjaGUvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3Muc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.ts":
/*!********************************************!*\
  !*** ./src/app/pages/settings/settings.ts ***!
  \********************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _walkthrough_walkthrough__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../walkthrough/walkthrough */ "./src/app/pages/walkthrough/walkthrough.ts");






let SettingsPage = class SettingsPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"] {
    constructor(injector, storage) {
        super(injector);
        this.storage = storage;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
            this.events.subscribe('user:login', () => {
                this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
            });
            this.events.subscribe('user:loggedOut', () => {
                this.user = null;
            });
            this.smsNot = this.user.smsNot;
            this.emailNot = this.user.emailNot;
            this.phoneNot = this.user.phoneNot;
            console.log('1 2 3', this.smsNot, this.emailNot, this.phoneNot);
            this.changePhone;
            this.changeSms;
            this.changeEmail;
        });
    }
    enableMenuSwipe() {
        return true;
    }
    saveSetting(sms, email, phone) {
    }
    goPhoneNot(event) {
        if (event === true) {
            this.changePhone = true;
        }
        if (event === false) {
            this.changePhone = false;
        }
        const data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        data.id = this.user.id;
        data.set('phoneNot', this.changePhone);
        data.save();
        console.log('sonuc1', this.changePhone);
    }
    goSmsNot(event) {
        if (event === true) {
            this.changeSms = true;
        }
        if (event === false) {
            this.changeSms = false;
        }
        const data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        data.id = this.user.id;
        data.set('smsNot', this.changeSms);
        data.save();
        console.log('sonuc2', this.changeSms);
    }
    goEmailNot(event) {
        if (event === true) {
            this.changeEmail = true;
        }
        if (event === false) {
            this.changeEmail = false;
        }
        const data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        data.id = this.user.id;
        data.set('emailNot', this.changeEmail);
        data.save();
        console.log('sonuc1', this.changeEmail);
    }
    onDismiss() {
        this.modalCtrl.dismiss();
    }
    onChangeUnit(event) {
        if (!event)
            return;
        const unit = event.detail.value;
        this.storage.setUnit(unit);
        this.preference.unit = unit;
    }
    onChangeLang(event) {
        if (!event)
            return;
        const lang = event.detail.value;
        if (lang === 'ar') {
            document.dir = 'rtl';
        }
        else {
            document.dir = 'ltr';
        }
        this.storage.setLang(lang);
        console.log('Dil', this.storage.getLang());
        this.translate.use(lang);
        this.preference.lang = lang;
    }
    presentWalkthroughModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _walkthrough_walkthrough__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPage"]
            });
            yield modal.present();
            this.dismissLoadingView();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-settings',
        template: __webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.html"),
        styles: [__webpack_require__(/*! ./settings.scss */ "./src/app/pages/settings/settings.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-profile-profile-module~pages-user-detail-user-detail-module-es2015.js.map
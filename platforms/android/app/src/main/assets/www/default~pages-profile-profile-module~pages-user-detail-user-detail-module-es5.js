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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ChangePasswordPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangePasswordPage, _super);
    function ChangePasswordPage(injector, userService) {
        var _this = _super.call(this, injector) || this;
        _this.userService = userService;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
        });
        return _this;
    }
    ChangePasswordPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ChangePasswordPage.prototype.onDismiss = function () {
        this.modalCtrl.dismiss();
    };
    ChangePasswordPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, loginData, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = this.form.value;
                        if (this.form.invalid) {
                            return [2 /*return*/, this.translate.get('INVALID_FORM').subscribe(function (str) { return _this.showToast(str); })];
                        }
                        if (formData.password !== formData.confirmPassword) {
                            return [2 /*return*/, this.translate.get('PASSWORD_DOES_NOT_MATCH').subscribe(function (str) { return _this.showToast(str); })];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 2:
                        _a.sent();
                        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
                        loginData = {
                            username: this.user.username,
                            password: formData.oldPassword
                        };
                        return [4 /*yield*/, this.userService.signIn(loginData)];
                    case 3:
                        _a.sent();
                        this.user.password = formData.password;
                        return [4 /*yield*/, this.user.save()];
                    case 4:
                        _a.sent();
                        this.translate.get('SAVED').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.showContentView();
                        if (err_1.code === 101) {
                            this.translate.get('PASSWORD_INVALID').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ChangePasswordPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] }
    ]; };
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.html */ "./node_modules/raw-loader/index.js!./src/app/pages/change-password/change-password.html"),
            styles: [__webpack_require__(/*! ./change-password.scss */ "./src/app/pages/change-password/change-password.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo */ "./src/app/services/photo.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var CommentAddPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommentAddPage, _super);
    function CommentAddPage(injector, userService) {
        var _this = _super.call(this, injector) || this;
        _this.userService = userService;
        _this.isliked = [];
        _this.targetComment = null;
        return _this;
    }
    CommentAddPage.prototype.ngOnInit = function () {
        this.loadData();
    };
    CommentAddPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    CommentAddPage.prototype.onComment = function (index, review, isParent) {
        this.targetUser = review.user;
        if (isParent) {
            this.targetComment = index;
        }
        else {
            this.targetComment = review.parentId;
        }
        console.log("onCommentIndex", index);
        console.log("onComment", review);
    };
    CommentAddPage.prototype.untargetComment = function () {
        this.targetComment = null;
        this.targetUser = null;
    };
    CommentAddPage.prototype.likeButton = function (index, comments, liked) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var comment, newLikes, _a, _b, like, query_1, query_2;
            var e_1, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                comment = [];
                comments.forEach(function (element) {
                    delete element.user;
                    comment.push(element);
                });
                console.log("aynennn", comment[index]);
                newLikes = [];
                if (liked) {
                    try {
                        for (_a = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](comment[index].likes), _b = _a.next(); !_b.done; _b = _a.next()) {
                            like = _b.value;
                            if (like != src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id) {
                                newLikes.push(like);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    comment[index].likes = newLikes;
                    query_1 = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"]();
                    query_1.id = this.photo.id;
                    console.log("aynenn", comment);
                    query_1.set("comment", comment);
                    query_1.save();
                    this.isliked[index] = 0;
                }
                else {
                    query_2 = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"]();
                    query_2.id = this.photo.id;
                    comment[index].likes.push(src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id);
                    query_2.set("comment", comment);
                    this.isliked[index] = 1;
                    query_2.save();
                }
                return [2 /*return*/];
            });
        });
    };
    CommentAddPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getUsers, userList, getUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.load()];
                    case 1:
                        getUsers = _a.sent();
                        this.userData = getUsers;
                        this.users = [];
                        getUsers.forEach(function (userDetail) {
                            _this.users.push(userDetail.username);
                        });
                        console.log("usersss", this.users);
                        this.reviews = this.photo.attributes.comment;
                        userList = [];
                        this.reviews.forEach(function (review) {
                            var e_2, _a;
                            var isLiked = 0;
                            try {
                                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](review.likes), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var likePhoto = _c.value;
                                    if (likePhoto === src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id) {
                                        isLiked = 1;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            _this.isliked.push(isLiked);
                            userList.push(review.userId);
                        });
                        return [4 /*yield*/, this.userService.loadList(userList)];
                    case 2:
                        getUser = _a.sent();
                        this.reviews.forEach(function (review, index) {
                            getUser.forEach(function (element) {
                                if (element.id === review.userId) {
                                    _this.reviews[index].user = element;
                                }
                            });
                            var usrList = [];
                            getUsers.forEach(function (usr) {
                                review.mentions.forEach(function (element) {
                                    if (usr.id === element) {
                                        usrList.push("@" + usr.username);
                                    }
                                });
                            });
                            var data = [];
                            review.text.split(" ").forEach(function (re, index) {
                                //console.log("re",re)
                                var o = null;
                                usrList.forEach(function (u, i) {
                                    if (re === u) {
                                        o = review.mentions[i];
                                    }
                                });
                                data.push({
                                    "text": re,
                                    "mention": o
                                });
                            });
                            _this.reviews[index].t = data;
                            _this.reviews[index].mention = usrList;
                        });
                        console.log("hahah", this.reviews);
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentAddPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mentions_1, mentionsId_1, ids, query_3, comments, parentId, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        mentions_1 = [];
                        mentionsId_1 = [];
                        console.log("asdasdassa", this.comment);
                        ids = this.comment.replace(/(\r\n|\n|\r)/gm, "").split("@").forEach(function (id) {
                            mentions_1.push(id.split(" ")[0]);
                        });
                        this.userData.forEach(function (u) {
                            mentions_1.forEach(function (m) {
                                if (m === u.username) {
                                    mentionsId_1.push(u.id);
                                }
                            });
                        });
                        console.log("search", mentionsId_1);
                        console.log("asdasdaasdasdasda", ids);
                        query_3 = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_4__["Photo"]();
                        query_3.id = this.photo.id;
                        comments = this.photo.attributes.comment;
                        parentId = null;
                        if (this.targetComment != null) {
                            parentId = this.targetComment;
                        }
                        comments.push({
                            "userId": src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id,
                            "date": Date.now(),
                            "parentId": parentId,
                            "likes": [],
                            "mentions": mentionsId_1,
                            "text": this.comment
                        });
                        query_3.set('comment', comments);
                        query_3.save();
                        this.onDismiss();
                        this.showContentView();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.showContentView();
                        if (err_1.code === 5000) {
                            this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommentAddPage.prototype.onDismiss = function (review) {
        if (review === void 0) { review = null; }
        this.modalCtrl.dismiss(review);
    };
    CommentAddPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./comment-add.scss */ "./src/app/pages/comment-add/comment-add.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], CommentAddPage);
    return CommentAddPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgot-password/forgot-password.module */ "./src/app/pages/forgot-password/forgot-password.module.ts");
/* harmony import */ var _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts");
/* harmony import */ var _followers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./followers */ "./src/app/pages/followers/followers.ts");








var FollowersPageModule = /** @class */ (function () {
    function FollowersPageModule() {
    }
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
    return FollowersPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");





var FollowersPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FollowersPage, _super);
    function FollowersPage(injector, userService, fb) {
        var _this = _super.call(this, injector) || this;
        _this.userService = userService;
        _this.fb = fb;
        _this.fls = [];
        _this.flw = [];
        _this.myFls = [];
        _this.myFlw = [];
        _this.followers = [];
        _this.following = [];
        _this.myFollowers = [];
        _this.myFollowing = [];
        _this.isLoadingByUsername = false;
        _this.isLoadingByFacebook = false;
        return _this;
    }
    FollowersPage.prototype.ngOnInit = function () {
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
    };
    FollowersPage.prototype.changeType = function (event) {
        this.type = event;
    };
    FollowersPage.prototype.getFollowers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usrList_1, usr, usr_1, usr_1_1, u, err_1, message;
            var e_1, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        usrList_1 = [];
                        this.fls.forEach(function (f) {
                            usrList_1.push(f.followId);
                        });
                        return [4 /*yield*/, this.userService.loadList(usrList_1)];
                    case 1:
                        usr = _b.sent();
                        try {
                            for (usr_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](usr), usr_1_1 = usr_1.next(); !usr_1_1.done; usr_1_1 = usr_1.next()) {
                                u = usr_1_1.value;
                                this.followers.push(u);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (usr_1_1 && !usr_1_1.done && (_a = usr_1.return)) _a.call(usr_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        console.log("followsssers", usrList_1);
                        this.showContentView();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _b.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 3:
                        message = _b.sent();
                        this.showToast(message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FollowersPage.prototype.getFollowing = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usrList_2, usr, usr_2, usr_2_1, u, err_2, message;
            var e_2, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        usrList_2 = [];
                        this.flw.forEach(function (f) {
                            usrList_2.push(f.followId);
                        });
                        return [4 /*yield*/, this.userService.loadList(usrList_2)];
                    case 1:
                        usr = _b.sent();
                        try {
                            for (usr_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](usr), usr_2_1 = usr_2.next(); !usr_2_1.done; usr_2_1 = usr_2.next()) {
                                u = usr_2_1.value;
                                this.following.push(u);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (usr_2_1 && !usr_2_1.done && (_a = usr_2.return)) _a.call(usr_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        console.log("followingsss", usrList_2);
                        this.showContentView();
                        return [3 /*break*/, 4];
                    case 2:
                        err_2 = _b.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 3:
                        message = _b.sent();
                        this.showToast(message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FollowersPage.prototype.getMyFollowers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usrList_3, usr, usr_3, usr_3_1, u, err_3, message;
            var e_3, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        usrList_3 = [];
                        this.myFls.forEach(function (f) {
                            usrList_3.push(f.followId);
                        });
                        return [4 /*yield*/, this.userService.loadList(usrList_3)];
                    case 1:
                        usr = _b.sent();
                        try {
                            for (usr_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](usr), usr_3_1 = usr_3.next(); !usr_3_1.done; usr_3_1 = usr_3.next()) {
                                u = usr_3_1.value;
                                this.myFollowers.push(u);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (usr_3_1 && !usr_3_1.done && (_a = usr_3.return)) _a.call(usr_3);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        console.log("myfollowsssers", usrList_3);
                        this.showContentView();
                        return [3 /*break*/, 4];
                    case 2:
                        err_3 = _b.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 3:
                        message = _b.sent();
                        this.showToast(message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FollowersPage.prototype.getMyFollowing = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usrList_4, usr, usr_4, usr_4_1, u, err_4, message;
            var e_4, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        usrList_4 = [];
                        this.flw.forEach(function (f) {
                            usrList_4.push(f.followId);
                        });
                        return [4 /*yield*/, this.userService.loadList(usrList_4)];
                    case 1:
                        usr = _b.sent();
                        try {
                            for (usr_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](usr), usr_4_1 = usr_4.next(); !usr_4_1.done; usr_4_1 = usr_4.next()) {
                                u = usr_4_1.value;
                                this.following.push(u);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (usr_4_1 && !usr_4_1.done && (_a = usr_4.return)) _a.call(usr_4);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        console.log("followingsss", usrList_4);
                        this.showContentView();
                        return [3 /*break*/, 4];
                    case 2:
                        err_4 = _b.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 3:
                        message = _b.sent();
                        this.showToast(message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FollowersPage.prototype.unfollow = function (i) {
        var query = new _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"]();
        query.id = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent().id;
        delete this.fls[i];
        this.fls.length = this.fls.length - 1;
        query.set('followers', this.fls);
        query.save();
    };
    FollowersPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    FollowersPage.prototype.onDismiss = function () {
        return this.modalCtrl.dismiss();
    };
    FollowersPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] }
    ]; };
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
    return FollowersPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileEditPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileEditPage, _super);
    function ProfileEditPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
        return _this;
    }
    ProfileEditPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    ProfileEditPage.prototype.ngOnInit = function () {
        this.setupForm();
    };
    ProfileEditPage.prototype.onFileUploaded = function (file) {
        this.photo = file;
    };
    ProfileEditPage.prototype.setupForm = function () {
        var formGroupParams = {
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.attributes.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.attributes.email)
        };
        // Show the username field if user logged in with username/password
        if (!this.user.attributes.authData) {
            formGroupParams.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](formGroupParams);
    };
    ProfileEditPage.prototype.onDismiss = function () {
        this.modalCtrl.dismiss();
    };
    ProfileEditPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, user, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (this.form.invalid) {
                            return [2 /*return*/, this.translate.get('INVALID_FORM').subscribe(function (str) { return _this.showToast(str); })];
                        }
                        this.showLoadingView({ showOverlay: false });
                        formData = Object.assign({}, this.form.value);
                        if (this.photo) {
                            formData.photo = this.photo;
                        }
                        if (!formData.email)
                            delete formData.email;
                        user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
                        return [4 /*yield*/, user.save(formData)];
                    case 1:
                        _a.sent();
                        this.showContentView();
                        this.translate.get('SAVED').subscribe(function (str) { return _this.showToast(str); });
                        this.onDismiss();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code === 202) {
                            this.translate.get('USERNAME_TAKEN').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else if (error_1.code === 203) {
                            this.translate.get('EMAIL_TAKEN').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else if (error_1.code === 125) {
                            this.translate.get('EMAIL_INVALID').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        this.showContentView();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-profile-edit',
            template: __webpack_require__(/*! raw-loader!./profile-edit.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile-edit/profile-edit.html"),
            styles: [__webpack_require__(/*! ./profile-edit.scss */ "./src/app/pages/profile-edit/profile-edit.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ProfileEditPage);
    return ProfileEditPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _walkthrough_walkthrough__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../walkthrough/walkthrough */ "./src/app/pages/walkthrough/walkthrough.ts");






var SettingsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingsPage, _super);
    function SettingsPage(injector, storage) {
        var _this = _super.call(this, injector) || this;
        _this.storage = storage;
        return _this;
    }
    SettingsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
                this.events.subscribe('user:login', function () {
                    _this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
                });
                this.events.subscribe('user:loggedOut', function () {
                    _this.user = null;
                });
                this.smsNot = this.user.smsNot;
                this.emailNot = this.user.emailNot;
                this.phoneNot = this.user.phoneNot;
                console.log('1 2 3', this.smsNot, this.emailNot, this.phoneNot);
                this.changePhone;
                this.changeSms;
                this.changeEmail;
                return [2 /*return*/];
            });
        });
    };
    SettingsPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    SettingsPage.prototype.saveSetting = function (sms, email, phone) {
    };
    SettingsPage.prototype.goPhoneNot = function (event) {
        if (event === true) {
            this.changePhone = true;
        }
        if (event === false) {
            this.changePhone = false;
        }
        var data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        data.id = this.user.id;
        data.set('phoneNot', this.changePhone);
        data.save();
        console.log('sonuc1', this.changePhone);
    };
    SettingsPage.prototype.goSmsNot = function (event) {
        if (event === true) {
            this.changeSms = true;
        }
        if (event === false) {
            this.changeSms = false;
        }
        var data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        data.id = this.user.id;
        data.set('smsNot', this.changeSms);
        data.save();
        console.log('sonuc2', this.changeSms);
    };
    SettingsPage.prototype.goEmailNot = function (event) {
        if (event === true) {
            this.changeEmail = true;
        }
        if (event === false) {
            this.changeEmail = false;
        }
        var data = new src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        data.id = this.user.id;
        data.set('emailNot', this.changeEmail);
        data.save();
        console.log('sonuc1', this.changeEmail);
    };
    SettingsPage.prototype.onDismiss = function () {
        this.modalCtrl.dismiss();
    };
    SettingsPage.prototype.onChangeUnit = function (event) {
        if (!event)
            return;
        var unit = event.detail.value;
        this.storage.setUnit(unit);
        this.preference.unit = unit;
    };
    SettingsPage.prototype.onChangeLang = function (event) {
        if (!event)
            return;
        var lang = event.detail.value;
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
    };
    SettingsPage.prototype.presentWalkthroughModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _walkthrough_walkthrough__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPage"]
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _a.sent();
                        this.dismissLoadingView();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-settings',
            template: __webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.html"),
            styles: [__webpack_require__(/*! ./settings.scss */ "./src/app/pages/settings/settings.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], SettingsPage);
    return SettingsPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_4__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-profile-profile-module~pages-user-detail-user-detail-module-es5.js.map
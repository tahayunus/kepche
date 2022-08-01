(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ion-content>\r\n  <ion-grid fixed class=\"p96\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\">\r\n        <div>\r\n          <ion-row class=\"ion-padding\">\r\n            <ion-card mode=\"ios\" class=\"heading ion-no-margin\" style=\"width: 100%;\">\r\n              <ion-row>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\r\n                  <ion-avatar>\r\n                    <img src-fallback=\"./assets/img/avatar.png\" [src]=\"user?.attributes.photo?.url()\" />\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\r\n                  <div color=\"secondary\" class=\"ion-text-center\">\r\n                    <h4 class=\"bold\">{{ user?.attributes.name }} {{ user?.attributes.surname }}</h4>\r\n                    <ion-row>\r\n                      <ion-col size=\"4\">\r\n                        <ion-button class=\"\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\"\r\n                          (click)=\"onPresentEditModal()\">\r\n                          <ion-icon name=\"person-outline\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <ion-button class=\"\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\"\r\n                          (click)=\"onPresentSettingsModal()\">\r\n                          <ion-icon name=\"construct-outline\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <ion-button class=\"\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\"\r\n                          (click)=\"onPresentChangePasswordModal()\">\r\n                          <ion-icon name=\"key-outline\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-text color=\"secondary\" *ngIf=\"user\">\r\n                <ion-button color=\"primary\" expand=\"block\" shape=\"round\" fill=\"outline\"\r\n                  *ngIf=\"user?.attributes.roleName === 'Editor'\">\r\n                  {{ 'EDITOR' | translate }}</ion-button>\r\n                <ion-button color=\"primary\" expand=\"block\" shape=\"round\" fill=\"outline\"\r\n                  *ngIf=\"user?.attributes.usertype === 'Admin'\">{{ 'ADMIN' | translate }}</ion-button>\r\n                <ion-button color=\"primary\" expand=\"block\" shape=\"round\" fill=\"outline\"\r\n                  *ngIf=\"user?.attributes.usertype === 'Standart'\">{{ 'STANDART' | translate }}</ion-button>\r\n              </ion-text>\r\n              <ion-button margin-top shape=\"round\" color=\"light\" (click)=\"openSignInModal()\" *ngIf=\"!user\">\r\n                {{ 'LOGIN' | translate }}\r\n              </ion-button>\r\n            </ion-card>\r\n\r\n            <ion-card mode=\"ios\" fixed style=\"width: 100%;\" class=\"ion-no-margin ion-margin-top\" *ngIf=\"user && place?.id.length\">\r\n              <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-text-center\">\r\n                  <ion-label class=\"text-normal bold\">{{place?.title}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-text-center\" [routerLink]=\"['./places/'+place?.id]\">\r\n                    <ion-button shape=\"round\" color=\"warning\" size=\"small\">{{'VIEW' | translate}}</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n\r\n            <ion-card mode=\"ios\" fixed style=\"width: 100%;\" class=\"ion-no-margin ion-margin-top\" *ngIf=\"user\">\r\n              <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\r\n                  <ion-text color=\"secondary\" class=\"ion-text-center\">\r\n                    <div class=\"bold\">{{totalPhotos}}</div>\r\n                    <span>{{ 'SHARING' | translate }}</span>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\r\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(user?.id,1)\">\r\n                    <div class=\"bold\">{{followers.length}}</div>\r\n                    <span>{{ 'FOLLOWERS' | translate }}</span>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\r\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(user?.id,2)\">\r\n                    <div class=\"bold\">{{following.length}}</div>\r\n                    <span>{{ 'FOLLOWING' | translate }}</span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-row>\r\n\r\n          <ion-grid fixed>\r\n            <ion-row *ngFor=\"let photo of photos;let i = index\">\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <ion-card mode=\"ios\" class=\"ion-no-margin\">\r\n                  <ion-row>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding ion-padding\"\r\n                      *ngIf=\"photo.type === 0\">\r\n                      <div class=\"checkin\">\r\n                        <ion-avatar class=\"image\">\r\n                          <img [src]=\"photo?.place.attributes.image.url()\" height=\"32\" />\r\n                        </ion-avatar>\r\n                        <ion-text color=\"danger\" class=\"ion-text-start ion-no-padding ion-padding-start\">\r\n                          <span style=\"line-height: 24px;\">\r\n                            <div class=\"bold\" [routerLink]=\"['./../places/'+photo?.place.id]\">{{\r\n                              photo?.place.attributes.title\r\n                              }}</div>\r\n                            <span class=\"text-medium bold\">{{photo.createdAt | date:'dd'}} {{'MONTH'+[photo.createdAt |\r\n                              date:'MM']\r\n                              | translate}} {{photo.createdAt | date:'yyyy HH:mm'}}</span>\r\n                          </span>\r\n                        </ion-text>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"\r\n                      class=\"ion-no-padding ion-margin-bottom\" *ngIf=\"photo.type === 0\">\r\n                      <img [src]=\"photo.image.url()\" />\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"\r\n                      class=\"ion-no-padding ion-padding-start ion-padding-end ion-padding-top\" *ngIf=\"photo.type === 1\">\r\n                      <div class=\"desc\">{{ user?.attributes.name }} {{ user?.attributes.surname }}\r\n                        <b [routerLink]=\"['./../places/'+photo?.place.id]\">{{photo?.place.attributes.title}}</b> 'da\r\n                        idi.\r\n                      </div>\r\n                      <div class=\"status\">\r\n                        <p class=\"ion-float-left\">{{photo?.description}} - </p>\r\n                        <p class=\"ion-float-left\"><img class=\"icon\" [src]=\"photo?.status.attributes.emoji._url\" /></p>\r\n                        <p class=\"ion-float-left\"><b>{{photo?.status.attributes.text}}</b></p>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\r\n                      <ion-toolbar>\r\n                        <ion-buttons slot=\"start\">\r\n                          <ion-button (click)=\"likeButton(photo.id,photo.like,isliked[i],i)\">\r\n                            <ion-icon *ngIf=\"isliked[i]\" name=\"flame\" color=\"warning\" slot=\"icon-only\"></ion-icon>\r\n                            <ion-icon *ngIf=\"!isliked[i]\" name=\"flame-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button (click)=\"onComment(photo)\">\r\n                            <ion-icon name=\"chatbubbles-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button>\r\n                            <ion-icon color=\"danger\" name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                        <ion-buttons slot=\"end\">\r\n                          <ion-button>\r\n                            <ion-icon name=\"bookmark-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                      </ion-toolbar>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"\r\n                      class=\"ion-no-padding ion-padding-start ion-padding-end ion-margin-bottom\">\r\n                      <span style=\"line-height: 24px;\">\r\n                        <div class=\"bold\">\r\n                          <p class=\"ion-no-margin\">{{photo?.like.length}} Beğeni</p>\r\n                          <p class=\"ion-no-margin\">{{photo?.attributes.comment.length}} yorumun tümünü gör</p>\r\n                        </div>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _change_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password */ "./src/app/pages/change-password/change-password.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _change_password__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _change_password__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordPage"]
            ]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/comment-add/comment-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/comment-add/comment-add.module.ts ***!
  \*********************************************************/
/*! exports provided: CommentAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentAddPageModule", function() { return CommentAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comment_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-add */ "./src/app/pages/comment-add/comment-add.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_mentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-mentions */ "./node_modules/angular-mentions/fesm2015/angular-mentions.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CommentAddPageModule = /** @class */ (function () {
    function CommentAddPageModule() {
    }
    CommentAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _comment_add__WEBPACK_IMPORTED_MODULE_2__["CommentAddPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                angular_mentions__WEBPACK_IMPORTED_MODULE_5__["MentionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            entryComponents: [
                _comment_add__WEBPACK_IMPORTED_MODULE_2__["CommentAddPage"]
            ]
        })
    ], CommentAddPageModule);
    return CommentAddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-edit */ "./src/app/pages/profile-edit/profile-edit.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProfileEditPageModule = /** @class */ (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_edit__WEBPACK_IMPORTED_MODULE_2__["ProfileEditPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _profile_edit__WEBPACK_IMPORTED_MODULE_2__["ProfileEditPage"]
            ]
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/app/pages/profile/profile.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _profile_edit_profile_edit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-edit/profile-edit.module */ "./src/app/pages/profile-edit/profile-edit.module.ts");
/* harmony import */ var _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../change-password/change-password.module */ "./src/app/pages/change-password/change-password.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/settings.module */ "./src/app/pages/settings/settings.module.ts");
/* harmony import */ var _comment_add_comment_add_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comment-add/comment-add.module */ "./src/app/pages/comment-add/comment-add.module.ts");
/* harmony import */ var _followers_followers_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followers/followers.module */ "./src/app/pages/followers/followers.module.ts");











var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _comment_add_comment_add_module__WEBPACK_IMPORTED_MODULE_9__["CommentAddPageModule"],
                _profile_edit_profile_edit_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEditPageModule"],
                _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPageModule"],
                _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_7__["SignInPageModule"],
                _settings_settings_module__WEBPACK_IMPORTED_MODULE_8__["SettingsPageModule"],
                _followers_followers_module__WEBPACK_IMPORTED_MODULE_10__["FollowersPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _profile__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
                    }
                ])
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.scss":
/*!********************************************!*\
  !*** ./src/app/pages/profile/profile.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\n.heading {\n  background: var(--ion-color-dark);\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-avatar {\n  width: 96px;\n  height: 96px;\n}\n\nion-avatar img {\n  background: var(--ion-color-light);\n  display: inline-block;\n  max-width: 96px;\n  max-height: 96px;\n  border-radius: 50%;\n}\n\nion-item {\n  --min-height: 64px;\n}\n\n.custom-line-height {\n  line-height: 1.6;\n}\n\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n\n.hero-img {\n  width: 50%;\n}\n\nion-grid {\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-grid {\n    padding: 16px;\n  }\n\n  .heading {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    margin-top: 16px;\n  }\n\n  .hero-container, .intro {\n    padding: 16px;\n  }\n\n  .hero-img {\n    width: 90%;\n  }\n\n  .intro {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n}\n\n.checkin ion-avatar {\n  height: 48px;\n  width: 48px;\n  float: left;\n}\n\n.checkin ion-text {\n  height: 48px;\n  line-height: 24px;\n  float: left;\n}\n\n.icon {\n  height: 25px !important;\n  width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURBRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNDSjs7QURDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQ047O0FERUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBTjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUVFO0lBQ0UsYUFBQTtFQ0hGOztFRE1BO0lBQ0UsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0VDSEY7O0VETUE7SUFDRSxhQUFBO0VDSEY7O0VETUE7SUFDRSxVQUFBO0VDSEY7O0VETUE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDSEY7QUFDRjs7QURPRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRE9FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkhlYWRlciB7XHJcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gIH1cclxufVxyXG4uaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuXHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIGltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA5NnB4O1xyXG4gICAgbWF4LWhlaWdodDogOTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tbGluZS1oZWlnaHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5za2VsZXRvbi1pdGVtIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVyby1pbWcge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRhaW5lciwgLmludHJvIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1pbWcge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5pbnRybyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja2luIHtcclxuICBpb24tYXZhdGFyIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIGlvbi10ZXh0IHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG59XHJcbi5pY29uIHtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG59IiwiLm1haW5IZWFkZXIge1xuICB2aXNpYmlsaXR5OiBpbmhlcml0O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9nbyB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG59XG4uaGVhZGluZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogOTZweDtcbiAgbWF4LWhlaWdodDogOTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNjRweDtcbn1cblxuLmN1c3RvbS1saW5lLWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5za2VsZXRvbi1pdGVtIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4OiAxO1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmhlcm8taW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlYWRpbmcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAuaGVyby1jb250YWluZXIsIC5pbnRybyB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZXJvLWltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5pbnRybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLmNoZWNraW4gaW9uLWF2YXRhciB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNoZWNraW4gaW9uLXRleHQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.ts":
/*!******************************************!*\
  !*** ./src/app/pages/profile/profile.ts ***!
  \******************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _profile_edit_profile_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-edit/profile-edit */ "./src/app/pages/profile-edit/profile-edit.ts");
/* harmony import */ var _change_password_change_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../change-password/change-password */ "./src/app/pages/change-password/change-password.ts");
/* harmony import */ var _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sign-in/sign-in */ "./src/app/pages/sign-in/sign-in.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/settings */ "./src/app/pages/settings/settings.ts");
/* harmony import */ var src_app_services_photo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/photo */ "./src/app/services/photo.ts");
/* harmony import */ var _comment_add_comment_add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment-add/comment-add */ "./src/app/pages/comment-add/comment-add.ts");
/* harmony import */ var _followers_followers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../followers/followers */ "./src/app/pages/followers/followers.ts");












var ProfilePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfilePage, _super);
    function ProfilePage(injector, photoService, userService, placeService) {
        var _this = _super.call(this, injector) || this;
        _this.photoService = photoService;
        _this.userService = userService;
        _this.placeService = placeService;
        _this.params = {};
        _this.places = [];
        _this.followers = [];
        _this.following = [];
        _this.photos = [];
        _this.likes = [];
        _this.isliked = [];
        _this.params.limit = 20;
        _this.params.page = 0;
        return _this;
    }
    ProfilePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
        this.events.subscribe('user:login', function () {
            _this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
            _this.getFollowers();
            _this.getFollowing();
            _this.loadPhotos();
            _this.followers;
            _this.following;
        });
        this.events.subscribe('user:loggedOut', function () {
            _this.user = null;
        });
        if (this.user) {
            this.getFollowers();
            this.getFollowing();
            this.loadPhotos();
            this.followers;
            this.following;
        }
        else {
            this.openSignInModal();
        }
        this.getPlace();
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
                        return [4 /*yield*/, this.getTrans('PROFILE')];
                    case 1:
                        title = _a.sent();
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getPlace = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadMyPlace(_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id)];
                    case 1:
                        _a.places = _b.sent();
                        console.log('Benim Mekan', this.places[0]);
                        this.place = this.places[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getFollowers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fls, fls_1, fls_1_1, fs;
            var e_1, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.user.followers];
                    case 1:
                        fls = _b.sent();
                        try {
                            for (fls_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](fls), fls_1_1 = fls_1.next(); !fls_1_1.done; fls_1_1 = fls_1.next()) {
                                fs = fls_1_1.value;
                                this.followers.push(fs);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (fls_1_1 && !fls_1_1.done && (_a = fls_1.return)) _a.call(fls_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        console.log('Followers', this.followers);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getFollowing = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var flw, flw_1, flw_1_1, fg;
            var e_2, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.user.following];
                    case 1:
                        flw = _b.sent();
                        try {
                            for (flw_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](flw), flw_1_1 = flw_1.next(); !flw_1_1.done; flw_1_1 = flw_1.next()) {
                                fg = flw_1_1.value;
                                this.following.push(fg);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (flw_1_1 && !flw_1_1.done && (_a = flw_1.return)) _a.call(flw_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        console.log('Following', this.following);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.openFollowers = function (id, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _followers_followers__WEBPACK_IMPORTED_MODULE_11__["FollowersPage"],
                                componentProps: {
                                    pid: id,
                                    type: type,
                                    fls: this.followers,
                                    flw: this.following
                                }
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
    ProfilePage.prototype.goTo = function (page) {
        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
            return this.openSignInModal();
        this.navigateToRelative('./' + page);
    };
    ProfilePage.prototype.likeButton = function (id, likes, liked, index) {
        var e_3, _a;
        console.log("aynennn", likes);
        var newLikes = [];
        if (liked) {
            try {
                for (var likes_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](likes), likes_1_1 = likes_1.next(); !likes_1_1.done; likes_1_1 = likes_1.next()) {
                    var like = likes_1_1.value;
                    if (like['userid'] != _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id) {
                        newLikes.push(like);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (likes_1_1 && !likes_1_1.done && (_a = likes_1.return)) _a.call(likes_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_9__["Photo"]();
            query.id = id;
            query.set("like", newLikes);
            query.save();
            this.isliked[index] = 0;
        }
        else {
            var query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_9__["Photo"]();
            query.id = id;
            likes.push({ "userid": _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id });
            query.set("like", likes);
            this.isliked[index] = 1;
            query.save();
        }
    };
    ProfilePage.prototype.onComment = function (photo) {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent()) {
            this.openAddReviewModal(photo);
        }
        else {
            this.openSignInModal();
        }
    };
    ProfilePage.prototype.openAddReviewModal = function (photo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _comment_add_comment_add__WEBPACK_IMPORTED_MODULE_10__["CommentAddPage"],
                                componentProps: {
                                    photo: photo
                                }
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
    ProfilePage.prototype.loadPhotos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var photos, photos_1, photos_1_1, photo, likes, isLiked, likes_2, likes_2_1, likePhoto, err_1;
            var e_4, _a, e_5, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.photoService.load({
                                user: this.user,
                            })];
                    case 1:
                        photos = _c.sent();
                        try {
                            for (photos_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](photos), photos_1_1 = photos_1.next(); !photos_1_1.done; photos_1_1 = photos_1.next()) {
                                photo = photos_1_1.value;
                                this.photos.push(photo);
                                likes = photo.like;
                                isLiked = 0;
                                try {
                                    for (likes_2 = (e_5 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](likes)), likes_2_1 = likes_2.next(); !likes_2_1.done; likes_2_1 = likes_2.next()) {
                                        likePhoto = likes_2_1.value;
                                        if (likePhoto['userid'] === _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id) {
                                            isLiked = 1;
                                        }
                                        this.likes.push(likePhoto);
                                    }
                                }
                                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                finally {
                                    try {
                                        if (likes_2_1 && !likes_2_1.done && (_b = likes_2.return)) _b.call(likes_2);
                                    }
                                    finally { if (e_5) throw e_5.error; }
                                }
                                this.isliked.push(isLiked);
                                console.log('likes', photos);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (photos_1_1 && !photos_1_1.done && (_a = photos_1.return)) _a.call(photos_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        this.totalPhotos = photos.length;
                        if (this.photos.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onRefreshComplete(photos);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _c.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.onPresentEditModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
                            return [2 /*return*/, this.openSignInModal()];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _profile_edit_profile_edit__WEBPACK_IMPORTED_MODULE_5__["ProfileEditPage"]
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
    ProfilePage.prototype.onPresentChangePasswordModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
                            return [2 /*return*/, this.openSignInModal()];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _change_password_change_password__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
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
    ProfilePage.prototype.onPresentSettingsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
                            return [2 /*return*/, this.openSignInModal()];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _settings_settings__WEBPACK_IMPORTED_MODULE_8__["SettingsPage"],
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
    ProfilePage.prototype.openSignInModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_7__["SignInPage"],
                                cssClass: 'loginModal'
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
    ProfilePage.prototype.onLogout = function () {
        this.events.publish('user:logout');
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_photo__WEBPACK_IMPORTED_MODULE_9__["Photo"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-profile',
            template: __webpack_require__(/*! raw-loader!./profile.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.html"),
            styles: [__webpack_require__(/*! ./profile.scss */ "./src/app/pages/profile/profile.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_photo__WEBPACK_IMPORTED_MODULE_9__["Photo"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"]])
    ], ProfilePage);
    return ProfilePage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/pages/settings/settings.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _walkthrough_walkthrough_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../walkthrough/walkthrough.module */ "./src/app/pages/walkthrough/walkthrough.module.ts");





var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _settings__WEBPACK_IMPORTED_MODULE_2__["SettingsPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _walkthrough_walkthrough_module__WEBPACK_IMPORTED_MODULE_4__["WalkthroughPageModule"],
            ],
            entryComponents: [
                _settings__WEBPACK_IMPORTED_MODULE_2__["SettingsPage"]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/services/photo.ts":
/*!***********************************!*\
  !*** ./src/app/services/photo.ts ***!
  \***********************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);



var Photo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Photo, _super);
    function Photo() {
        return _super.call(this, 'Photo') || this;
    }
    Photo_1 = Photo;
    Photo.getInstance = function () {
        return this;
    };
    Photo.prototype.load = function (params) {
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Photo_1);
            query.skip(page * limit);
            query.limit(limit);
            query.include('place');
            query.include('user');
            query.include('status');
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.place) {
                query.equalTo('place', params.place);
            }
            query.equalTo('isActive', true);
            query.descending('createdAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Photo.prototype.create = function (data) {
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            var review = new Photo_1();
            review.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Photo.prototype.loadOne = function (id) {
        return new Promise(function (resolve, reject) {
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Photo_1);
            query.include('place');
            query.equalTo('objectId', id);
            query.equalTo('status', 'Active');
            query.first().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Photo.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "like", {
        get: function () {
            return this.get('like');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "type", {
        get: function () {
            return this.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    var Photo_1;
    Photo = Photo_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Photo);
    return Photo;
}(parse__WEBPACK_IMPORTED_MODULE_2__["Object"]));

parse__WEBPACK_IMPORTED_MODULE_2__["Object"].registerSubclass('Photo', Photo);


/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map
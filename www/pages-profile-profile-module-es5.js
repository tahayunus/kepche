(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-grid fixed class=\"p96\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\">\n        <div>\n          <ion-row class=\"ion-padding\">\n            <ion-card mode=\"ios\" class=\"heading ion-no-margin\" style=\"width: 100%;\">\n              <ion-row>\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n                  <ion-avatar>\n                    <img src-fallback=\"./assets/img/avatar.png\" [src]=\"user?.attributes.photo?.url()\" />\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\n                  <div color=\"secondary\" class=\"ion-text-center\">\n                    <h4 class=\"bold\">{{ user?.attributes.name }} {{ user?.attributes.surname }}</h4>\n                    <ion-row>\n                      <ion-col size=\"4\">\n                        <ion-button class=\"\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\" (click)=\"onPresentEditModal()\">\n                          <ion-icon name=\"person-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                      <ion-col size=\"4\">\n                        <ion-button class=\"\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\"  (click)=\"onPresentSettingsModal()\">\n                          <ion-icon name=\"construct-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                      <ion-col size=\"4\">\n                        <ion-button class=\"\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\" (click)=\"onPresentChangePasswordModal()\">\n                          <ion-icon name=\"key-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-text color=\"secondary\" *ngIf=\"user\">\n                <ion-button color=\"primary\" expand=\"block\" shape=\"round\" fill=\"outline\"\n                  *ngIf=\"user?.attributes.roleName === 'Editor'\">\n                  {{ 'EDITOR' | translate }}</ion-button>\n                <ion-button color=\"primary\" expand=\"block\" shape=\"round\" fill=\"outline\"\n                  *ngIf=\"user?.attributes.usertype === 'Admin'\">{{ 'ADMIN' | translate }}</ion-button>\n                <ion-button color=\"primary\" expand=\"block\" shape=\"round\" fill=\"outline\"\n                  *ngIf=\"user?.attributes.usertype === 'Standart'\">{{ 'STANDART' | translate }}</ion-button>\n              </ion-text>\n              <ion-button margin-top shape=\"round\" color=\"light\" (click)=\"openSignInModal()\" *ngIf=\"!user\">\n                {{ 'LOGIN' | translate }}\n              </ion-button>\n            </ion-card>\n            <ion-card mode=\"ios\" fixed style=\"width: 100%;\" class=\"ion-no-margin ion-margin-top\" *ngIf=\"user\">\n              <ion-row class=\"ion-justify-content-center\">\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\n                  <ion-text color=\"secondary\" class=\"ion-text-center\">\n                    <div class=\"bold\">{{totalPhotos}}</div>\n                    <span>{{ 'SHARING' | translate }}</span>\n                  </ion-text>\n                </ion-col>\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(user?.id,1)\">\n                    <div class=\"bold\">{{followers.length}}</div>\n                    <span>{{ 'FOLLOWERS' | translate }}</span>\n                  </ion-text>\n                </ion-col>\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(user?.id,2)\">\n                    <div class=\"bold\">{{following.length}}</div>\n                    <span>{{ 'FOLLOWING' | translate }}</span>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n\n          <ion-grid fixed>\n            <ion-row *ngFor=\"let photo of photos;let i = index\">\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\n                <ion-card mode=\"ios\" class=\"ion-no-margin\">\n                  <ion-row>\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding ion-padding\" *ngIf=\"photo.type === 0\">\n                      <div class=\"checkin\">\n                        <ion-avatar class=\"image\">\n                          <img [src]=\"photo?.place.attributes.image.url()\" height=\"32\" />\n                        </ion-avatar>\n                        <ion-text color=\"dark\" class=\"ion-text-start ion-no-padding ion-padding-start\">\n                          <span style=\"line-height: 24px;\">\n                            <div class=\"bold\" [routerLink]=\"['./../places/'+photo?.place.id]\">{{\n                              photo?.place.attributes.title\n                              }}</div>\n                            <span class=\"text-medium bold\">{{photo.createdAt | date:'dd'}} {{'MONTH'+[photo.createdAt |\n                              date:'MM']\n                              | translate}} {{photo.createdAt | date:'yyyy HH:mm'}}</span>\n                          </span>\n                        </ion-text>\n                      </div>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"\n                      class=\"ion-no-padding ion-margin-bottom\" *ngIf=\"photo.type === 0\">\n                      <img [src]=\"photo.image.url()\" />\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"\n                      class=\"ion-no-padding ion-padding-start ion-padding-end ion-padding-top\" *ngIf=\"photo.type === 1\">\n                      <div class=\"desc\">{{ user?.attributes.name }} {{ user?.attributes.surname }}\n                        <b [routerLink]=\"['./../places/'+photo?.place.id]\">{{photo?.place.attributes.title}}</b> 'da\n                        idi.</div>\n                      <div class=\"status\">\n                        <p class=\"ion-float-left\">{{photo?.description}} - </p>\n                        <p class=\"ion-float-left\"><img class=\"icon\" [src]=\"photo?.status.attributes.emoji._url\" /></p>\n                        <p class=\"ion-float-left\"><b>{{photo?.status.attributes.text}}</b></p>\n                      </div>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\n                      <ion-toolbar>\n                        <ion-buttons slot=\"start\">\n                          <ion-button (click)=\"likeButton(photo.id,photo.like,isliked[i],i)\">\n                            <ion-icon *ngIf=\"isliked[i]\" name=\"flame\" color=\"warning\" slot=\"icon-only\"></ion-icon>\n                            <ion-icon *ngIf=\"!isliked[i]\" name=\"flame-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                          </ion-button>\n                          <ion-button (click)=\"onComment(photo)\">\n                            <ion-icon name=\"chatbubbles-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                          </ion-button>\n                          <ion-button>\n                            <ion-icon color=\"dark\" name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                          </ion-button>\n                        </ion-buttons>\n                        <ion-buttons slot=\"end\">\n                          <ion-button>\n                            <ion-icon name=\"bookmark-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                          </ion-button>\n                        </ion-buttons>\n                      </ion-toolbar>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\"\n                      class=\"ion-no-padding ion-padding-start ion-padding-end ion-margin-bottom\">\n                      <span style=\"line-height: 24px;\">\n                        <div class=\"bold\">\n                          <p class=\"ion-no-margin\">{{photo?.like.length}} Beğeni</p>\n                          <p class=\"ion-no-margin\">{{photo?.attributes.comment.length}} yorumun tümünü gör</p>\n                        </div>\n                      </span>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

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

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\n.heading {\n  background: var(--ion-color-dark);\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-avatar {\n  width: 96px;\n  height: 96px;\n}\n\nion-avatar img {\n  background: var(--ion-color-light);\n  display: inline-block;\n  max-width: 96px;\n  max-height: 96px;\n  border-radius: 50%;\n}\n\nion-item {\n  --min-height: 64px;\n}\n\n.custom-line-height {\n  line-height: 1.6;\n}\n\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n\n.hero-img {\n  width: 50%;\n}\n\nion-grid {\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-grid {\n    padding: 16px;\n  }\n\n  .heading {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    margin-top: 16px;\n  }\n\n  .hero-container, .intro {\n    padding: 16px;\n  }\n\n  .hero-img {\n    width: 90%;\n  }\n\n  .intro {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n}\n\n.checkin ion-avatar {\n  height: 48px;\n  width: 48px;\n  float: left;\n}\n\n.checkin ion-text {\n  height: 48px;\n  line-height: 24px;\n  float: left;\n}\n\n.icon {\n  height: 25px !important;\n  width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0Usa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0NKOztBRENJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDTjs7QURFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREtBO0VBQ0UsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGOztBREtBO0VBRUU7SUFDRSxhQUFBO0VDSEY7O0VETUE7SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7RUNIRjs7RURNQTtJQUNFLGFBQUE7RUNIRjs7RURNQTtJQUNFLFVBQUE7RUNIRjs7RURNQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNIRjtBQUNGOztBRE9FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTEo7O0FET0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLWF2YXRhciB7XG5cbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDk2cHg7XG4gICAgbWF4LWhlaWdodDogOTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5jdXN0b20tbGluZS1oZWlnaHQge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleDogMTtcblxuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgfVxuICB9XG59XG5cbi5oZXJvLWltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlYWRpbmcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAuaGVyby1jb250YWluZXIsIC5pbnRybyB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZXJvLWltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5pbnRybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uY2hlY2tpbiB7XG4gIGlvbi1hdmF0YXIge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBpb24tdGV4dCB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG4uaWNvbiB7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xufSIsIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDk2cHg7XG4gIG1heC1oZWlnaHQ6IDk2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5jdXN0b20tbGluZS1oZWlnaHQge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5oZXJvLWltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmhlcm8tY29udGFpbmVyLCAuaW50cm8ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVyby1pbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuaW50cm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jaGVja2luIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5jaGVja2luIGlvbi10ZXh0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _profile_edit_profile_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-edit/profile-edit */ "./src/app/pages/profile-edit/profile-edit.ts");
/* harmony import */ var _change_password_change_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-password/change-password */ "./src/app/pages/change-password/change-password.ts");
/* harmony import */ var _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-in/sign-in */ "./src/app/pages/sign-in/sign-in.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/settings */ "./src/app/pages/settings/settings.ts");
/* harmony import */ var src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/photo */ "./src/app/services/photo.ts");
/* harmony import */ var _comment_add_comment_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comment-add/comment-add */ "./src/app/pages/comment-add/comment-add.ts");
/* harmony import */ var _followers_followers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followers/followers */ "./src/app/pages/followers/followers.ts");











var ProfilePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfilePage, _super);
    function ProfilePage(injector, photoService, userService) {
        var _this = _super.call(this, injector) || this;
        _this.photoService = photoService;
        _this.userService = userService;
        _this.params = {};
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
                                component: _followers_followers__WEBPACK_IMPORTED_MODULE_10__["FollowersPage"],
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
            var query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"]();
            query.id = id;
            query.set("like", newLikes);
            query.save();
            this.isliked[index] = 0;
        }
        else {
            var query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"]();
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
                                component: _comment_add_comment_add__WEBPACK_IMPORTED_MODULE_9__["CommentAddPage"],
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
                                component: _profile_edit_profile_edit__WEBPACK_IMPORTED_MODULE_4__["ProfileEditPage"]
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
                                component: _change_password_change_password__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]
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
                                component: _settings_settings__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"],
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
                                component: _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_6__["SignInPage"],
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
        { type: src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-profile',
            template: __webpack_require__(/*! raw-loader!./profile.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.html"),
            styles: [__webpack_require__(/*! ./profile.scss */ "./src/app/pages/profile/profile.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]])
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
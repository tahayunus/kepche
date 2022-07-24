(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-detail-user-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-detail/user-detail.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-detail/user-detail.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header fixed class=\"mainHeader\">\n  <ion-toolbar mode=\"md\" color=\"light\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <a routerLink=\"/\">\n        <img class=\"logo\" src=\"./assets/img/pigeon.svg\" />\n        <img class=\"logo\" src=\"./assets/img/logo_.png\" />\n      </a>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"openSignInModal()\" layout=\"icon-start\" *ngIf=\"platform.is('mobile') && !user\">\n        <ion-icon name=\"log-in-outline\"></ion-icon>\n      </ion-button>\n\n      <ion-button fill=\"clear\" color=\"dark\" [routerLink]=\"['./../../search']\">\n        <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed class=\"p96\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm size-md size-lg=\"8\">\n        <div>\n          <ion-row class=\"ion-padding\">\n            <ion-card mode=\"ios\" class=\"heading ion-no-margin\" style=\"width: 100%;\">\n              <ion-row>\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n                  <ion-avatar>\n                    <img src-fallback=\"./assets/img/avatar.png\" [src]=\"profile?.attributes.photo?.url()\" />\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\n                  <div color=\"secondary\" class=\"ion-text-center\">\n                    <h4 class=\"bold\">{{ profile?.attributes.name }} {{ profile?.attributes.surname }}</h4>\n                    <ion-button *ngIf=\"!uFollow\" class=\"\" (click)=\"follow()\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\">\n                      {{'TO_FOLLOW' | translate}}\n                    </ion-button>\n                    <ion-button *ngIf=\"uFollow\" shape=\"round\" (click)=\"unfollow()\" color=\"light\" size=\"small\">\n                      {{'YOU_FOLLOWING' | translate}}\n                    </ion-button>\n                    <p *ngIf=\"!isFollowYou\">{{'NOT_FOLLOWING_YOU'|translate}}</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-button margin-top shape=\"round\" color=\"light\" (click)=\"openSignInModal()\" *ngIf=\"!user\">\n                {{ 'LOGIN' | translate }}\n              </ion-button>\n            </ion-card>\n            <ion-card mode=\"ios\" fixed style=\"width: 100%;\" class=\"ion-no-margin ion-margin-top\">\n              <ion-row class=\"ion-justify-content-center\">\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\n                  <ion-text color=\"secondary\" class=\"ion-text-center\">\n                    <div class=\"bold\">{{totalPhotos}}</div>\n                    <span>{{ 'SHARING' | translate }}</span>\n                  </ion-text>\n                </ion-col>\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(profile?.id,1)\">\n                    <div class=\"bold\">{{followers.length}}</div>\n                    <span>{{ 'FOLLOWERS' | translate }}</span>\n                  </ion-text>\n                </ion-col>\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(profile?.id,2)\">\n                    <div class=\"bold\">{{following.length}}</div>\n                    <span>{{ 'FOLLOWING' | translate }}</span>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-row>\n\n          <ion-grid fixed>\n            <ion-row *ngFor=\"let photo of photos;let i = index\">\n              <span class=\"ion-padding\">\n                <ion-avatar style=\"height: 48px; width: 48px;\">\n                  <img [src]=\"photo?.place.attributes.image.url()\" height=\"32\" />\n                </ion-avatar>\n              </span>\n              <ion-text color=\"dark\" class=\"ion-text-start ion-padding-bottom ion-padding-top\">\n                <span style=\"line-height: 24px;\">\n                  <div class=\"bold\" [routerLink]=\"['./../places/'+photo?.place.id]\">{{ photo?.place.attributes.title }}</div>\n                  <span class=\"text-medium bold\">{{photo.createdAt | date:'dd'}} {{'MONTH'+[photo.createdAt | date:'MM']\n                    | translate}} {{photo.createdAt | date:'yyyy HH:mm'}}</span>\n                </span>\n              </ion-text>\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\n                <img [src]=\"photo.image.url()\" />\n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"likeButton(photo.id,photo.like,isliked[i],i)\">\n                      <ion-icon *ngIf=\"isliked[i]\" name=\"flame\" color=\"warning\" slot=\"icon-only\"></ion-icon>\n                      <ion-icon *ngIf=\"!isliked[i]\" name=\"flame-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"onComment(photo)\">\n                      <ion-icon name=\"chatbubbles-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                    <ion-button>\n                      <ion-icon color=\"dark\" name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-buttons slot=\"end\">\n                    <ion-button>\n                      <ion-icon name=\"bookmark-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding ion-padding-start\">\n                <span style=\"line-height: 24px;\">\n                  <div class=\"bold\">\n                    <p class=\"ion-no-margin\">{{photo?.like.length}} Beğeni</p>\n                    <p class=\"ion-no-margin\">{{photo?.attributes.comment.length}} yorumun tümünü gör</p>\n\n                  </div>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function() { return UserDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _review_add_review_add_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review-add/review-add.module */ "./src/app/pages/review-add/review-add.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/share.module */ "./src/app/pages/share/share.module.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/fesm2015/ngx-gallery-lightbox.js");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "./node_modules/@ngx-gallery/gallerize/fesm2015/ngx-gallery-gallerize.js");
/* harmony import */ var _place_user_edit_place_user_edit_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../place-user-edit/place-user-edit.module */ "./src/app/pages/place-user-edit/place-user-edit.module.ts");
/* harmony import */ var _user_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-detail */ "./src/app/pages/user-detail/user-detail.ts");
/* harmony import */ var _followers_followers_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../followers/followers.module */ "./src/app/pages/followers/followers.module.ts");













let UserDetailPageModule = class UserDetailPageModule {
};
UserDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_detail__WEBPACK_IMPORTED_MODULE_11__["UserDetailPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _review_add_review_add_module__WEBPACK_IMPORTED_MODULE_4__["ReviewAddPageModule"],
            _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageModule"],
            _place_user_edit_place_user_edit_module__WEBPACK_IMPORTED_MODULE_10__["PlaceUserEditPageModule"],
            _share_share_module__WEBPACK_IMPORTED_MODULE_6__["SharePageModule"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__["LightboxModule"],
            _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_9__["GallerizeModule"],
            _followers_followers_module__WEBPACK_IMPORTED_MODULE_12__["FollowersPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _user_detail__WEBPACK_IMPORTED_MODULE_11__["UserDetailPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], UserDetailPageModule);



/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\n.heading {\n  background: var(--ion-color-dark);\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-avatar {\n  width: 96px;\n  height: 96px;\n}\n\nion-avatar img {\n  background: var(--ion-color-light);\n  display: inline-block;\n  max-width: 96px;\n  max-height: 96px;\n  border-radius: 50%;\n}\n\nion-item {\n  --min-height: 64px;\n}\n\n.custom-line-height {\n  line-height: 1.6;\n}\n\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n\n.hero-img {\n  width: 50%;\n}\n\nion-grid {\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-grid {\n    padding: 16px;\n  }\n\n  .heading {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    margin-top: 16px;\n  }\n\n  .hero-container, .intro {\n    padding: 16px;\n  }\n\n  .hero-img {\n    width: 90%;\n  }\n\n  .intro {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURBRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUNDSjs7QURDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQ047O0FERUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBTjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUVFO0lBQ0UsYUFBQTtFQ0hGOztFRE1BO0lBQ0UsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0VDSEY7O0VETUE7SUFDRSxhQUFBO0VDSEY7O0VETUE7SUFDRSxVQUFBO0VDSEY7O0VETUE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkhlYWRlciB7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9nbyB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG59XG4uaGVhZGluZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1hdmF0YXIge1xuXG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIGltZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA5NnB4O1xuICAgIG1heC1oZWlnaHQ6IDk2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA2NHB4O1xufVxuXG4uY3VzdG9tLWxpbmUtaGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLnNrZWxldG9uLWl0ZW0ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcblxuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXg6IDE7XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgfVxufVxuXG4uaGVyby1pbWcge1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmhlcm8tY29udGFpbmVyLCAuaW50cm8ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVyby1pbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuaW50cm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iLCIubWFpbkhlYWRlciB7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiA5NnB4O1xuICBtYXgtaGVpZ2h0OiA5NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA2NHB4O1xufVxuXG4uY3VzdG9tLWxpbmUtaGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLnNrZWxldG9uLWl0ZW0ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDE7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaGVyby1pbWcge1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVhZGluZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5oZXJvLWNvbnRhaW5lciwgLmludHJvIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlcm8taW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmludHJvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.ts ***!
  \**************************************************/
/*! exports provided: UserDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPage", function() { return UserDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _profile_edit_profile_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-edit/profile-edit */ "./src/app/pages/profile-edit/profile-edit.ts");
/* harmony import */ var _change_password_change_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-password/change-password */ "./src/app/pages/change-password/change-password.ts");
/* harmony import */ var _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-in/sign-in */ "./src/app/pages/sign-in/sign-in.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/settings */ "./src/app/pages/settings/settings.ts");
/* harmony import */ var src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/photo */ "./src/app/services/photo.ts");
/* harmony import */ var _comment_add_comment_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comment-add/comment-add */ "./src/app/pages/comment-add/comment-add.ts");
/* harmony import */ var _followers_followers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../followers/followers */ "./src/app/pages/followers/followers.ts");











let UserDetailPage = class UserDetailPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, photoService, userService) {
        super(injector);
        this.photoService = photoService;
        this.userService = userService;
        this.params = {};
        this.followers = [];
        this.following = [];
        this.myFollowers = [];
        this.myFollowing = [];
        this.photos = [];
        this.likes = [];
        this.isliked = [];
        this.params.limit = 20;
        this.params.page = 0;
    }
    enableMenuSwipe() {
        return true;
    }
    ngOnInit() {
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
        this.events.subscribe('user:login', () => {
            this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', () => {
            this.user = null;
        });
        if (this.user) {
            this.loadProfile();
            this.loadPhotos();
            this.followers;
            this.following;
        }
    }
    loadProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const profile = yield this.userService.loadOne(this.getParams().id);
            for (let p of profile) {
                this.profile = p;
            }
            console.log("kasd", profile);
            const fls = this.profile.followers;
            this.uFollow = false;
            for (let fs of fls) {
                if (fs.followId === this.user.id) {
                    this.uFollow = true;
                }
                this.followers.push(fs);
            }
            console.log('Followers', this.followers);
            const flw = this.profile.following;
            this.isFollowYou = false;
            for (let fg of flw) {
                if (fg.followId === this.user.id) {
                    this.isFollowYou = true;
                }
                this.following.push(fg);
            }
            console.log('Following', this.following);
        });
    }
    unfollow() {
        const query = new _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        query.id = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id;
        console.log("profile", this.profile);
        let list = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().following;
        list.forEach((e, i) => {
            if (e.followId === this.profile.id) {
                delete list[i];
                list.length = list.length - 1;
            }
        });
        query.set('following', list);
        query.save();
        const que = new _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        que.id = this.profile.id;
        console.log("profile", this.profile);
        let lis = this.profile.followers;
        lis.forEach((e, i) => {
            if (e.followId === this.user.id) {
                delete lis[i];
                lis.length = lis.length - 1;
            }
        });
        que.set('followers', lis);
        que.save(null, { useMasterKey: true });
        console.log("aaaayay", this.profile.followers);
        this.uFollow = false;
    }
    follow() {
        const query = new _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        query.id = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id;
        console.log("profile", this.profile);
        let list = this.user.following;
        console.log("listtt", list);
        list.push({
            "followId": this.profile.id,
            "request": 0,
            "time": Date.now()
        });
        console.log("listtt", list);
        query.set('following', list);
        query.save();
        const que = new _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        que.id = this.profile.id;
        let lis = [];
        this.profile.followers.forEach(element => {
            lis.push(element);
        });
        lis.push({
            "followId": this.user.id,
            "request": 0,
            "time": Date.now()
        });
        que.set('followers', lis);
        que.save(null, { useMasterKey: true });
        console.log("aaaayay", this.profile.followers);
        this.uFollow = true;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent();
            const title = yield this.getTrans('PROFILE');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    getMyFollowers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const fls = yield this.user.followers;
            for (let fs of fls) {
                this.myFollowers.push(fs);
            }
            console.log('Followers', this.followers);
        });
    }
    getMyFollowing() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const flw = yield this.user.following;
            for (let fg of flw) {
                this.myFollowing.push(fg);
            }
            console.log('Following', this.following);
        });
    }
    openFollowers(id, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _followers_followers__WEBPACK_IMPORTED_MODULE_10__["FollowersPage"],
                componentProps: {
                    pid: id,
                    fls: this.followers,
                    flw: this.following,
                    myFls: this.myFollowers,
                    myFlw: this.myFollowing,
                    type: type
                }
            });
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    goTo(page) {
        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
            return this.openSignInModal();
        this.navigateToRelative('./' + page);
    }
    likeButton(id, likes, liked, index) {
        console.log("aynennn", likes);
        let newLikes = [];
        if (liked) {
            for (let like of likes) {
                if (like['userid'] != _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id) {
                    newLikes.push(like);
                }
            }
            const query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"]();
            query.id = id;
            query.set("like", newLikes);
            query.save();
            this.isliked[index] = 0;
        }
        else {
            const query = new src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"]();
            query.id = id;
            likes.push({ "userid": _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id });
            query.set("like", likes);
            this.isliked[index] = 1;
            query.save();
        }
    }
    onComment(photo) {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent()) {
            this.openAddReviewModal(photo);
        }
        else {
            this.openSignInModal();
        }
    }
    openAddReviewModal(photo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _comment_add_comment_add__WEBPACK_IMPORTED_MODULE_9__["CommentAddPage"],
                componentProps: {
                    photo: photo
                }
            });
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    loadPhotos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const photos = yield this.photoService.load({
                    user: this.getParams().id,
                });
                for (let photo of photos) {
                    this.photos.push(photo);
                    const likes = photo.like;
                    let isLiked = 0;
                    for (let likePhoto of likes) {
                        if (likePhoto['userid'] === _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent().id) {
                            isLiked = 1;
                        }
                        this.likes.push(likePhoto);
                    }
                    this.isliked.push(isLiked);
                    console.log('likes', this.isliked);
                }
                this.totalPhotos = photos.length;
                if (this.photos.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onRefreshComplete(photos);
            }
            catch (err) {
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                this.showContentView();
                this.onRefreshComplete();
            }
        });
    }
    onPresentEditModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
                return this.openSignInModal();
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _profile_edit_profile_edit__WEBPACK_IMPORTED_MODULE_4__["ProfileEditPage"]
            });
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    onPresentChangePasswordModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
                return this.openSignInModal();
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _change_password_change_password__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]
            });
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    onPresentSettingsModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!_services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent())
                return this.openSignInModal();
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _settings_settings__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"],
            });
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    openSignInModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]
            });
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    onLogout() {
        this.events.publish('user:logout');
    }
};
UserDetailPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"] }
];
UserDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-user-detail',
        template: __webpack_require__(/*! raw-loader!./user-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-detail/user-detail.html"),
        styles: [__webpack_require__(/*! ./user-detail.scss */ "./src/app/pages/user-detail/user-detail.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_services_photo__WEBPACK_IMPORTED_MODULE_8__["Photo"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]])
], UserDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-detail-user-detail-module-es2015.js.map
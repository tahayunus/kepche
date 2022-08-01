(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-detail-user-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-detail/user-detail.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-detail/user-detail.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header fixed class=\"mainHeader\">\r\n  <ion-toolbar mode=\"md\" color=\"light\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <a routerLink=\"/\">\r\n        <img class=\"logo\" src=\"./assets/img/pigeon.svg\" />\r\n        <img class=\"logo\" src=\"./assets/img/logo_.png\" />\r\n      </a>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-button (click)=\"openSignInModal()\" layout=\"icon-start\" *ngIf=\"platform.is('mobile') && !user\">\r\n        <ion-icon name=\"log-in-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button fill=\"clear\" color=\"danger\" [routerLink]=\"['./../../search']\">\r\n        <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid fixed class=\"p96\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-no-padding\" size-xs=\"12\" size-sm size-md size-lg=\"8\">\r\n        <div>\r\n          <ion-row class=\"ion-padding\">\r\n            <ion-card mode=\"ios\" class=\"heading ion-no-margin\" style=\"width: 100%;\">\r\n              <ion-row>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\r\n                  <ion-avatar>\r\n                    <img src-fallback=\"./assets/img/avatar.png\" [src]=\"profile?.attributes.photo?.url()\" />\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col size-xs=\"8\" size-sm=\"8\" size-md=\"8\" size-lg=\"8\">\r\n                  <div color=\"secondary\" class=\"ion-text-center\">\r\n                    <h4 class=\"bold\">{{ profile?.attributes.name }} {{ profile?.attributes.surname }}</h4>\r\n                    <ion-button *ngIf=\"!uFollow\" class=\"\" (click)=\"follow()\" shape=\"round\" fill=\"outline\" color=\"light\" size=\"small\">\r\n                      {{'TO_FOLLOW' | translate}}\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"uFollow\" shape=\"round\" (click)=\"unfollow()\" color=\"light\" size=\"small\">\r\n                      {{'YOU_FOLLOWING' | translate}}\r\n                    </ion-button>\r\n                    <p *ngIf=\"!isFollowYou\">{{'NOT_FOLLOWING_YOU'|translate}}</p>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-button margin-top shape=\"round\" color=\"light\" (click)=\"openSignInModal()\" *ngIf=\"!user\">\r\n                {{ 'LOGIN' | translate }}\r\n              </ion-button>\r\n            </ion-card>\r\n            <ion-card mode=\"ios\" fixed style=\"width: 100%;\" class=\"ion-no-margin ion-margin-top\">\r\n              <ion-row class=\"ion-justify-content-center\">\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\r\n                  <ion-text color=\"secondary\" class=\"ion-text-center\">\r\n                    <div class=\"bold\">{{totalPhotos}}</div>\r\n                    <span>{{ 'SHARING' | translate }}</span>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\r\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(profile?.id,1)\">\r\n                    <div class=\"bold\">{{followers.length}}</div>\r\n                    <span>{{ 'FOLLOWERS' | translate }}</span>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col size-xs=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\" class=\"ion-text-center\">\r\n                  <ion-text color=\"secondary\" class=\"ion-text-center\" (click)=\"openFollowers(profile?.id,2)\">\r\n                    <div class=\"bold\">{{following.length}}</div>\r\n                    <span>{{ 'FOLLOWING' | translate }}</span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-row>\r\n\r\n          <ion-grid fixed>\r\n            <ion-row *ngFor=\"let photo of photos;let i = index\">\r\n              <span class=\"ion-padding\">\r\n                <ion-avatar style=\"height: 48px; width: 48px;\">\r\n                  <img [src]=\"photo?.place.attributes.image.url()\" height=\"32\" />\r\n                </ion-avatar>\r\n              </span>\r\n              <ion-text color=\"danger\" class=\"ion-text-start ion-padding-bottom ion-padding-top\">\r\n                <span style=\"line-height: 24px;\">\r\n                  <div class=\"bold\" [routerLink]=\"['./../places/'+photo?.place.id]\">{{ photo?.place.attributes.title }}</div>\r\n                  <span class=\"text-medium bold\">{{photo.createdAt | date:'dd'}} {{'MONTH'+[photo.createdAt | date:'MM']\r\n                    | translate}} {{photo.createdAt | date:'yyyy HH:mm'}}</span>\r\n                </span>\r\n              </ion-text>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\r\n                <img [src]=\"photo.image.url()\" />\r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding\">\r\n                <ion-toolbar>\r\n                  <ion-buttons slot=\"start\">\r\n                    <ion-button (click)=\"likeButton(photo.id,photo.like,isliked[i],i)\">\r\n                      <ion-icon *ngIf=\"isliked[i]\" name=\"flame\" color=\"warning\" slot=\"icon-only\"></ion-icon>\r\n                      <ion-icon *ngIf=\"!isliked[i]\" name=\"flame-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button (click)=\"onComment(photo)\">\r\n                      <ion-icon name=\"chatbubbles-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button>\r\n                      <ion-icon color=\"danger\" name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                  <ion-buttons slot=\"end\">\r\n                    <ion-button>\r\n                      <ion-icon name=\"bookmark-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" class=\"ion-no-padding ion-padding-start\">\r\n                <span style=\"line-height: 24px;\">\r\n                  <div class=\"bold\">\r\n                    <p class=\"ion-no-margin\">{{photo?.like.length}} Beğeni</p>\r\n                    <p class=\"ion-no-margin\">{{photo?.attributes.comment.length}} yorumun tümünü gör</p>\r\n\r\n                  </div>\r\n                </span>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>"

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

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\n.heading {\n  background: var(--ion-color-dark);\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-avatar {\n  width: 96px;\n  height: 96px;\n}\n\nion-avatar img {\n  background: var(--ion-color-light);\n  display: inline-block;\n  max-width: 96px;\n  max-height: 96px;\n  border-radius: 50%;\n}\n\nion-item {\n  --min-height: 64px;\n}\n\n.custom-line-height {\n  line-height: 1.6;\n}\n\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n\n.hero-img {\n  width: 50%;\n}\n\nion-grid {\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-grid {\n    padding: 16px;\n  }\n\n  .heading {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    margin-top: 16px;\n  }\n\n  .hero-container, .intro {\n    padding: 16px;\n  }\n\n  .hero-img {\n    width: 90%;\n  }\n\n  .intro {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWwvQzpcXFVzZXJzXFxWb2NhbEVhc3RcXERvY3VtZW50c1xcR2l0SHViXFxrZXBjaGUvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLWRldGFpbFxcdXNlci1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0Usa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0NKOztBRENJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDTjs7QURFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREtBO0VBQ0UsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGOztBREtBO0VBRUU7SUFDRSxhQUFBO0VDSEY7O0VETUE7SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7RUNIRjs7RURNQTtJQUNFLGFBQUE7RUNIRjs7RURNQTtJQUNFLFVBQUE7RUNIRjs7RURNQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluSGVhZGVyIHtcclxuICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG59XHJcbi5oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG5cclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgaW1nIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDk2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmN1c3RvbS1saW5lLWhlaWdodCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLnNrZWxldG9uLWl0ZW0ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWltZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY29udGFpbmVyLCAuaW50cm8ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIC5oZXJvLWltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmludHJvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufSIsIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDk2cHg7XG4gIG1heC1oZWlnaHQ6IDk2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5jdXN0b20tbGluZS1oZWlnaHQge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5oZXJvLWltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmhlcm8tY29udGFpbmVyLCAuaW50cm8ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVyby1pbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuaW50cm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */"

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
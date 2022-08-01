(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkin/checkin.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkin/checkin.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"onDismiss()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{ 'CHECK_IN' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let st of status\">\r\n        <ion-item (click)=\"selectEmoji(st.title)\" class=\"feel\" lines=\"none\"\r\n          [ngClass]=\"selectedEmoji === st.title ? 'borderDark' : ''\">\r\n          <ion-label color=\"danger\">{{st.title | translate}}</ion-label>\r\n          <img slot=\"start\" [src]=\"'assets/feel/'+st.title+'.png'\" width=\"24\" height=\"24\" />\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <div class=\"scrollable\">\r\n        <app-upload-box [text]=\"'FEATURED_IMAGE' | translate\" (onFileUploaded)=\"onMainFileUploaded($event)\">\r\n        </app-upload-box>\r\n        <app-upload-box *ngFor=\"let upload of uploads\" (onFileUploaded)=\"onFileUploaded($event, upload)\">\r\n        </app-upload-box>\r\n        <div class=\"plusImage\" (click)=\"plusImages(uploads.length)\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"ionicon\" viewBox=\"0 0 512 512\">\r\n            <title>Add Circle</title>\r\n            <path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\"\r\n              stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" />\r\n            <path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"\r\n              d=\"M256 176v160M336 256H176\" />\r\n          </svg>\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"ion-text-center\">\r\n    <ion-item class=\"ion-margin-vertical\" lines=\"none\" class=\"radius\" color=\"light\">\r\n      <ion-textarea [(ngModel)]=\"photo.description\" rows=\"8\" [placeholder]=\"'COMMENT' | translate\"\r\n        (keyup.enter)=\"onSubmit()\"></ion-textarea>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div class=\"ion-text-center\">\r\n      <ion-button shape=\"round\" color=\"secondary\" [disabled]=\"isLoadingViewVisible\" (click)=\"onSubmit()\">\r\n        <ion-spinner *ngIf=\"isLoadingViewVisible\"></ion-spinner>\r\n        <span *ngIf=\"!isLoadingViewVisible\">{{ 'SUBMIT' | translate }}</span>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-detail/place-detail.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-detail/place-detail.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border ion-no-shadow\" mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ place?.title }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"light\" (click)=\"onLike()\" [disabled]=\"!place\">\r\n        <ion-icon slot=\"icon-only\" [name]=\"isLiked ? 'heart' : 'heart-outline'\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"light\" class=\"btn-share\" (click)=\"onShare()\" [disabled]=\"!place\">\r\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"alert\" [text]=\"'EMPTY_DATA' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n\r\n  <ion-grid fixed *ngIf=\"user && place?.owner === user\">\r\n    <ion-row padding>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n        <ion-button expand=\"block\" shape=\"round\" color=\"warning\" size=\"small\" (click)=\"editPlace(place.id)\">\r\n          {{'EDIT' | translate}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed class=\"p96\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-xs=\"12\" size-lg=\"10\">\r\n\r\n\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom light-bg radius ion-padding\" *ngIf=\"isLoadingViewVisible\">\r\n          <ion-row nowrap>\r\n            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"4\" *ngFor=\"let item of skeletonImages\">\r\n              <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n                [theme]=\"{ width: '3000px', height: '300px', 'border-radius': '4px' }\">\r\n              </ngx-skeleton-loader>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <div class=\"skeleton-item\">\r\n            <div class=\"wrapper\">\r\n              <div class=\"avatar\">\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n              <div class=\"title\">\r\n                <div>\r\n                  <ngx-skeleton-loader\r\n                    [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n                <div>\r\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <div>\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '100px', height: '100px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <div>\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '100px', height: '100px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <div>\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '100px', height: '100px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-card>\r\n\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"isLoadingViewVisible\">\r\n          <div class=\"skeleton-item light-bg radius\" *ngFor=\"let item of skeletonReviews\">\r\n            <div class=\"wrapper\">\r\n              <div class=\"avatar\">\r\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\r\n                </ngx-skeleton-loader>\r\n              </div>\r\n              <div class=\"title\">\r\n                <div>\r\n                  <ngx-skeleton-loader\r\n                    [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n                <div>\r\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\r\n                  </ngx-skeleton-loader>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"isContentViewVisible\">\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div class=\"light-bg radius fade-in\" padding>\r\n                <ion-slides pager=\"false\" gallerize=\"placeGallery\" selector=\".bg-img\"\r\n                  (ionSlidesDidLoad)=\"onSlidesDidLoad($event)\" (ionSlideDrag)=\"onSlidesDrag($event)\"\r\n                  [options]=\"slidesConfig\">\r\n                  <ion-slide *ngFor=\"let image of images\">\r\n                    <div class=\"bg-img radius\" defaultImage=\"./assets/img/placeholder.png\" [attr.imageSrc]=\"image\"\r\n                      [attr.thumbSrc]=\"image\" [lazyLoad]=\"image\" [scrollObservable]=\"loadAndScroll\">\r\n                    </div>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n\r\n                <ion-item class=\"ion-margin-vertical\" lines=\"none\" color=\"light\">\r\n                  <ion-thumbnail class=\"img-featured\" slot=\"start\">\r\n                    <img defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"place?.featuredImageUrl\"\r\n                      [scrollObservable]=\"loadAndScroll\" />\r\n                  </ion-thumbnail>\r\n                  <ion-label text-nowrap>\r\n                    <ion-text color=\"danger\">\r\n                      <h2 class=\"bold ellipsis ion-text\" color=\"primary\">\r\n                        {{ place?.title }}\r\n                      </h2>\r\n                    </ion-text>\r\n                    <div text-nowrap>\r\n                      <ion-text color=\"medium\">\r\n                        <p>\r\n                          <span class=\"text-large bold\" [class.hidden]=\"!location\">\r\n                            {{ place?.distance(location, preference.unit) }}\r\n                          </span>\r\n                        </p>\r\n                      </ion-text>\r\n                    </div>\r\n                    <div>\r\n                      <ion-progress-bar *ngIf=\"place.rating > 0 && place.rating < 2\" color=\"danger\"\r\n                        [value]=\"(place.rating)/5\"></ion-progress-bar>\r\n                      <ion-progress-bar *ngIf=\"place.rating >= 2 && place.rating < 4\" color=\"primary\"\r\n                        [value]=\"(place.rating)/5\"></ion-progress-bar>\r\n                      <ion-progress-bar *ngIf=\"place.rating >= 4\" color=\"success\" [value]=\"(place.rating)/5\">\r\n                      </ion-progress-bar>\r\n                      <span *ngIf=\"place.rating != 0\" class=\"rating\">{{ ((place.rating)/5)*100  | number : fractionSize }} % {{ 'LIKED' | translate\r\n                        }}</span>\r\n                      <div class=\"status\">\r\n                        <span *ngIf=\"place.rating > 0 && place.rating < 2\"\r\n                          style=\"color: #ffffff; background-color: #eb445a\">{{ 'BAD' | translate }}</span>\r\n                        <span *ngIf=\"place.rating >= 2 && place.rating < 4\"\r\n                          style=\"color: #ffffff; background-color: #3880ff\">{{ 'GOOD' | translate }}</span>\r\n                        <span *ngIf=\"place.rating >= 4\" style=\"color: #ffffff; background-color: #2dd36f\">{{ 'VERY_GOOD'\r\n                          | translate }}</span>\r\n                      </div>\r\n                    </div>\r\n                  </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div class=\"light-bg radius fade-in\" padding>\r\n                <div text-wrap margin-top *ngIf=\"place?.description\" (click)=\"onContentTouched($event)\"\r\n                  [innerHTML]=\"place?.description\">\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"place?.menuType === 'local' && place?.menuLocal != []\">\r\n          <ion-card-header [routerLink]=\"['./menu']\">\r\n            <ion-row>\r\n              <ion-col size-xs=\"6\" class=\"ion-text-start\">\r\n                <b>{{'MENU' | translate}}</b>\r\n              </ion-col>\r\n              <ion-col size-xs=\"6\" class=\"ion-text-end\">\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-header>\r\n        </ion-card>\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"place?.menuType === 'url' && place?.menuUrl.length\">\r\n          <ion-card-header (click)=\"openUrl(place?.menuUrl)\">\r\n            <ion-row>\r\n              <ion-col size-xs=\"6\" class=\"ion-text-start\">\r\n                <b>{{'MENU' | translate}}</b>\r\n              </ion-col>\r\n              <ion-col size-xs=\"6\" class=\"ion-text-end\">\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-header>\r\n        </ion-card>\r\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"isContentViewVisible\">\r\n          <ion-row>\r\n            <ion-col size-xs=\"12\" size-lg=\"7\">\r\n              <div class=\"light-bg radius ion-padding\">\r\n                <ion-row class=\"ion-align-items-center\">\r\n                  <ion-col size-xs=\"6\" size-md=\"6\" size-lg=\"6\" class=\"ion-text-center\">\r\n                    <ion-button mode=\"ios\" size=\"small\" expand=\"block\" shape=\"round\" color=\"success\" (click)=\"onRate()\">\r\n                      {{ 'POST_REVIEW' | translate }}\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  <ion-col size-xs=\"6\" size-md=\"6\" size-lg=\"6\" class=\"ion-text-center\">\r\n                    <ion-button mode=\"ios\" size=\"small\" expand=\"block\" shape=\"round\" color=\"warning\"\r\n                      (click)=\"checkIn()\">\r\n                      {{ 'CHECK_IN' | translate }}\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div *ngIf=\"!reviews.length\" style=\"height:170px;\" class=\"ion-text-center\">\r\n                  <div class=\"flex-center\">\r\n                    <ion-text color=\"medium\">\r\n                      <p class=\"text-medium\">\r\n                        {{ 'EMPTY_REVIEWS' | translate }}\r\n                      </p>\r\n                    </ion-text>\r\n                  </div>\r\n                </div>\r\n                <ion-list class=\"ion-no-margin\">\r\n                  <div class=\"radius light-bg\" *ngFor=\"let review of reviews\">\r\n                    <ion-item color=\"light\">\r\n                      <ion-avatar slot=\"start\">\r\n                        <img defaultImage=\"./assets/img/avatar.png\" [lazyLoad]=\"review.user?.photo?.url()\"\r\n                          [scrollObservable]=\"loadAndScroll\" />\r\n                      </ion-avatar>\r\n                      <ion-label class=\"ion-text-wrap\">\r\n                        <ion-text color=\"medium\" float-end>\r\n                          <span class=\"text-small\">\r\n                            {{ review.createdAt | date:'short'}}\r\n                          </span>\r\n                        </ion-text>\r\n                        <ion-text color=\"danger\">\r\n                          <h3 class=\"bold no-margin\">{{ review.user?.name }}</h3>\r\n                        </ion-text>\r\n                        <star-rating [value]=\"review.rating\" checkedcolor=\"#f2b01e\" uncheckedcolor=\"gray\" size=\"12px\"\r\n                          readonly=\"true\">\r\n                        </star-rating>\r\n\r\n                        <ion-text color=\"danger\">\r\n                          <p class=\"text-medium no-margin\">{{ review.comment }}</p>\r\n                        </ion-text>\r\n                      </ion-label>\r\n\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-list>\r\n                <div class=\"ion-text-center\" *ngIf=\"reviews.length\">\r\n                  <ion-button class=\"bold\" fill=\"clear\" color=\"danger\" [routerLink]=\"['./reviews']\">\r\n                    {{ 'VIEW_ALL_REVIEWS' | translate }}\r\n                    <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n\r\n            <ion-col size-xs=\"12\" size-lg=\"5\">\r\n              <div class=\"light-bg radius ion-padding\">\r\n                <ion-list class=\"ion-no-margin\" color=\"light\">\r\n                  <ion-item color=\"light\" *ngIf=\"place?.address\">\r\n                    <ion-icon slot=\"start\" name=\"map\"></ion-icon>\r\n                    <ion-label class=\"ion-text-wrap\">\r\n                      <span class=\"text-medium\">{{ place?.address }}</span>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                  <ion-item color=\"light\" *ngIf=\"place?.website\" (click)=\"openUrl(place.website)\">\r\n                    <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\r\n                    <ion-label>\r\n                      <ion-text color=\"secondary\">\r\n                        <span class=\"text-medium link\">{{ place?.website }}</span>\r\n                      </ion-text>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                  <ion-item color=\"light\" *ngIf=\"place?.phone\" (click)=\"callPhone(place?.phone)\">\r\n                    <ion-icon slot=\"start\" name=\"call\"></ion-icon>\r\n                    <ion-label>\r\n                      <ion-text color=\"secondary\">\r\n                        <span class=\"text-medium link\">{{ place?.phone }}</span>\r\n                      </ion-text>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                  <ion-item color=\"light\" *ngIf=\"place?.facebook\" (click)=\"openUrl(place.facebook)\">\r\n                    <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n                    <ion-label>\r\n                      <ion-text color=\"secondary\">\r\n                        <span class=\"text-medium link\">{{ place?.facebook }}</span>\r\n                      </ion-text>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                  <ion-item color=\"light\" *ngIf=\"place?.instagram\" (click)=\"openUrl(place.instagram)\">\r\n                    <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\r\n                    <ion-label>\r\n                      <ion-text color=\"secondary\">\r\n                        <span class=\"text-medium link\">{{ place?.instagram }}</span>\r\n                      </ion-text>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                  <ion-item color=\"light\" *ngIf=\"place?.youtube\" (click)=\"openUrl(place.youtube)\">\r\n                    <ion-icon slot=\"start\" name=\"logo-youtube\"></ion-icon>\r\n                    <ion-label>\r\n                      <ion-text color=\"secondary\">\r\n                        <span class=\"text-medium link\">{{ place?.youtube }}</span>\r\n                      </ion-text>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                  <ion-item color=\"light\">\r\n                    <ion-col size-xs=\"12\" size-md=\"12\" size-lg=\"12\" text-end>\r\n                      <ion-button class=\"bold\" size=\"small\" expand=\"block\" shape=\"round\" color=\"secondary\"\r\n                        (click)=\"openUrl('https://maps.apple.com/?daddr='+place?.location.latitude+','+place?.location.longitude+'&dirflg=d&t=h')\">\r\n                        {{ 'GET_DIRECTIONS' | translate }}\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/checkin/checkin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkin/checkin.module.ts ***!
  \*************************************************/
/*! exports provided: CheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function() { return CheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin */ "./src/app/pages/checkin/checkin.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_mentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-mentions */ "./node_modules/angular-mentions/fesm2015/angular-mentions.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CheckinPageModule = /** @class */ (function () {
    function CheckinPageModule() {
    }
    CheckinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _checkin__WEBPACK_IMPORTED_MODULE_2__["CheckinPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                angular_mentions__WEBPACK_IMPORTED_MODULE_5__["MentionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            entryComponents: [
                _checkin__WEBPACK_IMPORTED_MODULE_2__["CheckinPage"]
            ]
        })
    ], CheckinPageModule);
    return CheckinPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkin/checkin.scss":
/*!********************************************!*\
  !*** ./src/app/pages/checkin/checkin.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 60px;\n}\n\nion-item {\n  --border-radius: 4px;\n}\n\n.borderDark {\n  border: 2px solid var(--ion-color-warning) !important;\n}\n\n.plusImage {\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: 1px dashed var(--ion-color-medium);\n  cursor: pointer;\n  display: inline-flex;\n  height: 125px;\n  justify-content: center;\n  position: relative;\n  width: 125px;\n  margin: 0 8px;\n  top: -59px;\n}\n\n.plusImage svg {\n  width: 24px;\n  height: 24px;\n}\n\n.feel {\n  border: 2px solid var(--ion-color-light);\n  width: 100%;\n  background-color: transparent;\n  border-radius: 8px;\n}\n\n.feel img {\n  float: left;\n}\n\n.feel ion-label {\n  float: right;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tpbi9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXGNoZWNraW5cXGNoZWNraW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hlY2tpbi9jaGVja2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLHFEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDRjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNraW4vY2hlY2tpbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJvcmRlckRhcmsge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGx1c0ltYWdlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxuICB0b3A6IC01OXB4O1xyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5mZWVsIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogNjBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJvcmRlckRhcmsge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZykgIWltcG9ydGFudDtcbn1cblxuLnBsdXNJbWFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTI1cHg7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHRvcDogLTU5cHg7XG59XG4ucGx1c0ltYWdlIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5mZWVsIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZmVlbCBpbWcge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mZWVsIGlvbi1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/checkin/checkin.ts":
/*!******************************************!*\
  !*** ./src/app/pages/checkin/checkin.ts ***!
  \******************************************/
/*! exports provided: CheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPage", function() { return CheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var src_app_services_photo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/photo */ "./src/app/services/photo.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/status */ "./src/app/services/status.ts");









var CheckinPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckinPage, _super);
    function CheckinPage(injector, reviewService, statusService, photoService) {
        var _this = _super.call(this, injector) || this;
        _this.reviewService = reviewService;
        _this.statusService = statusService;
        _this.photoService = photoService;
        _this.selectedEmoji = "";
        _this.photo = {
            status: '',
            description: '',
            place: '',
            user: '',
        };
        _this.status = [];
        _this.selected = "";
        _this.selectedEmoji;
        return _this;
    }
    CheckinPage.prototype.ngOnInit = function () {
        this.getStatus();
        this.setupImages();
    };
    CheckinPage.prototype.setupImages = function () {
        this.uploads = Array
            .from({ length: 0 })
            .map(function (i) { return { file: null }; });
    };
    CheckinPage.prototype.plusImages = function (event) {
        this.uploads = Array
            .from({ length: event + 1 })
            .map(function (i) { return { file: null }; });
    };
    CheckinPage.prototype.getStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var status;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.statusService.load()];
                    case 1:
                        status = _a.sent();
                        status.forEach(function (s) {
                            _this.status.push(s);
                        });
                        console.log("stats", this.status);
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckinPage.prototype.selectEmoji = function (event) {
        this.selectedEmoji = event;
    };
    CheckinPage.prototype.loadStatusImages = function () {
        setTimeout(function () {
            var radios = document.getElementsByClassName('alert-radio-label');
            console.log("aynennn", radios);
            for (var index = 0; index < radios.length; index++) {
                var element = radios[index];
                console.log("emojii", this.status);
                element.innerHTML = element.innerHTML.concat('<img class="country-image" style="width: 30px;height:16px;" src="' + this.status[index].emoji._url + '" />');
            }
        }, 2000);
        console.log("aaaa");
    };
    CheckinPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    CheckinPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query_1, photo, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("photo", this.selected);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 2:
                        _a.sent();
                        this.photo.type = 1;
                        this.photo.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["User"].getCurrent();
                        query_1 = new src_app_services_status__WEBPACK_IMPORTED_MODULE_8__["Status"]();
                        query_1.id = this.selected;
                        this.photo.status = query_1;
                        this.photo.place = this.place;
                        return [4 /*yield*/, this.photoService.create(this.photo)];
                    case 3:
                        photo = _a.sent();
                        this.showContentView();
                        this.onDismiss();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log("errr", err_1);
                        this.showContentView();
                        if (err_1.code === 5000) {
                            this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CheckinPage.prototype.onDismiss = function (review) {
        if (review === void 0) { review = null; }
        this.modalCtrl.dismiss(review);
    };
    CheckinPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"] },
        { type: src_app_services_status__WEBPACK_IMPORTED_MODULE_8__["Status"] },
        { type: src_app_services_photo__WEBPACK_IMPORTED_MODULE_6__["Photo"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"])
    ], CheckinPage.prototype, "place", void 0);
    CheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-checkin',
            template: __webpack_require__(/*! raw-loader!./checkin.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkin/checkin.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./checkin.scss */ "./src/app/pages/checkin/checkin.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"],
            src_app_services_status__WEBPACK_IMPORTED_MODULE_8__["Status"],
            src_app_services_photo__WEBPACK_IMPORTED_MODULE_6__["Photo"]])
    ], CheckinPage);
    return CheckinPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ }),

/***/ "./src/app/pages/place-detail/place-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-detail */ "./src/app/pages/place-detail/place-detail.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _review_add_review_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../review-add/review-add.module */ "./src/app/pages/review-add/review-add.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/share.module */ "./src/app/pages/share/share.module.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/fesm5/ngx-gallery-lightbox.js");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "./node_modules/@ngx-gallery/gallerize/fesm5/ngx-gallery-gallerize.js");
/* harmony import */ var _place_user_edit_place_user_edit_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../place-user-edit/place-user-edit.module */ "./src/app/pages/place-user-edit/place-user-edit.module.ts");
/* harmony import */ var _checkin_checkin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../checkin/checkin.module */ "./src/app/pages/checkin/checkin.module.ts");













var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _place_detail__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _review_add_review_add_module__WEBPACK_IMPORTED_MODULE_5__["ReviewAddPageModule"],
                _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageModule"],
                _place_user_edit_place_user_edit_module__WEBPACK_IMPORTED_MODULE_11__["PlaceUserEditPageModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_7__["SharePageModule"],
                _checkin_checkin_module__WEBPACK_IMPORTED_MODULE_12__["CheckinPageModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"],
                _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__["LightboxModule"],
                _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_10__["GallerizeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _place_detail__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/place-detail/place-detail.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: auto;\n}\nion-slides .bg-img {\n  background-size: cover;\n  background-position: center;\n  height: 150px;\n  width: 150px;\n}\nion-slides .swiper-pagination-bullet-active {\n  background: var(--ion-color-light);\n}\nion-avatar {\n  margin: 0 12px 0 0 !important;\n}\nion-avatar img {\n  background: var(--ion-color-dark);\n}\nion-thumbnail {\n  --border-radius: 6px;\n  width: 80px;\n  height: 80px;\n}\nion-list {\n  background: var(--ion-color-light);\n}\nion-item {\n  --padding-start: 0;\n}\nion-item ion-label {\n  overflow: inherit;\n}\nion-slides {\n  padding: 10px;\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-primary);\n}\nion-slides ion-slide img {\n  display: block;\n  width: 100%;\n}\nion-slides .slide-img {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  width: 100%;\n  height: 200px;\n}\nion-row[nowrap] {\n  overflow: hidden;\n}\n.flex-start {\n  display: flex;\n  align-items: flex-start;\n}\n.review-count {\n  margin-left: 6px;\n}\n.icon-share {\n  font-size: 48px;\n}\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n@media (min-width: 992px) {\n  ion-thumbnail {\n    width: 100px;\n    height: 100px;\n  }\n}\n.rating {\n  top: 8px;\n  position: relative;\n  line-height: 10px;\n  background: white;\n  padding: 5px;\n  border-radius: 3px;\n  font-size: small;\n  font-weight: bolder;\n  float: left;\n}\n.status span {\n  top: 8px;\n  left: 8px;\n  position: relative;\n  line-height: 10px;\n  padding: 5px;\n  border-radius: 3px;\n  font-size: small;\n  font-weight: bolder;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2UtZGV0YWlsL0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xccGxhY2UtZGV0YWlsXFxwbGFjZS1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0Usa0NBQUE7QUNBSjtBRElBO0VBQ0UsNkJBQUE7QUNERjtBREdFO0VBQ0UsaUNBQUE7QUNESjtBREtBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxrQ0FBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtBQ0ZGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FES0E7RUFFRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxvREFBQTtBQ0hGO0FES0U7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0hOO0FETUU7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSk47QURPQTtFQUNFLGdCQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSkY7QURNRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FDSko7QURNSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSk47QURPSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEVUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDUEY7QUFDRjtBRFNBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUEY7QURVRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIC5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgbWFyZ2luOiAwIDEycHggMCAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdGh1bWJuYWlsIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG5cclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICBpb24tc2xpZGUgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlLWltZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbmlvbi1yb3dbbm93cmFwXSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZsZXgtc3RhcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5yZXZpZXctY291bnQge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5pY29uLXNoYXJlIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcbi5za2VsZXRvbi1pdGVtIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbi5yYXRpbmcge1xyXG4gIHRvcDogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc3RhdHVzIHtcclxuICBzcGFuIHtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufSIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IGF1dG87XG59XG5pb24tc2xpZGVzIC5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbmlvbi1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDEycHggMCAwICFpbXBvcnRhbnQ7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUtaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaW9uLXJvd1tub3dyYXBdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnJldmlldy1jb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5pY29uLXNoYXJlIHtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4uc2tlbGV0b24taXRlbSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbi5za2VsZXRvbi1pdGVtIC53cmFwcGVyIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBpb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuLnJhdGluZyB7XG4gIHRvcDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc3RhdHVzIHNwYW4ge1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/place-detail/place-detail.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.ts ***!
  \****************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _review_add_review_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review-add/review-add */ "./src/app/pages/review-add/review-add.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sign-in/sign-in */ "./src/app/pages/sign-in/sign-in.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _share_share_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../share/share.page */ "./src/app/pages/share/share.page.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _place_user_edit_place_user_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../place-user-edit/place-user-edit */ "./src/app/pages/place-user-edit/place-user-edit.ts");
/* harmony import */ var _checkin_checkin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../checkin/checkin */ "./src/app/pages/checkin/checkin.ts");
/* harmony import */ var _place_menu_place_menu_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../place-menu/place-menu.page */ "./src/app/pages/place-menu/place-menu.page.ts");



















var PlaceDetailPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaceDetailPage, _super);
    function PlaceDetailPage(injector, placeService, sanitizer, geolocationService, reviewService, gallery, socialSharing) {
        var _this = _super.call(this, injector) || this;
        _this.placeService = placeService;
        _this.sanitizer = sanitizer;
        _this.geolocationService = geolocationService;
        _this.reviewService = reviewService;
        _this.gallery = gallery;
        _this.socialSharing = socialSharing;
        _this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleMapsApiKey;
        _this.menuActive = 0;
        _this.images = [];
        _this.rating = 0;
        _this.isLiked = false;
        _this.isStarred = false;
        _this.reviews = [];
        _this.slidesConfig = {};
        _this.webSocialShare = {
            show: false,
            share: {
                config: [{
                        facebook: {
                            socialShareUrl: '',
                        },
                    }, {
                        twitter: {
                            socialShareUrl: '',
                        }
                    }, {
                        whatsapp: {
                            socialShareText: '',
                            socialShareUrl: '',
                        }
                    }]
            },
            onClosed: function () {
                _this.webSocialShare.show = false;
            }
        };
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        _this.skeletonImages = Array(6);
        _this.skeletonReviews = Array(5);
        _this.imageServer = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].imageServer;
        return _this;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setupObservable();
        this.setupGallery();
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent();
        this.events.subscribe('user:login', function () {
            _this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', function () {
            _this.user = null;
        });
        this.menuActive;
        this.menuItem;
    };
    PlaceDetailPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.place) return [3 /*break*/, 2];
                        this.setupSlider();
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadPlace();
                        this.loadLocation();
                        return [3 /*break*/, 3];
                    case 2:
                        this.setPageTitle(this.place.title);
                        this.setMetaTags({
                            title: this.place.title,
                            description: this.place.description,
                            image: this.place.image ? this.place.image.url() : '',
                            slug: this.place.getSlug()
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.openLocalMenu = function (pid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _place_menu_place_menu_page__WEBPACK_IMPORTED_MODULE_18__["PlaceMenuPage"],
                                componentProps: {
                                    pid: pid
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
    PlaceDetailPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlaceDetailPage.prototype.onSlidesDidLoad = function () {
        this.contentLoaded.next();
    };
    PlaceDetailPage.prototype.onSlidesDrag = function () {
        this.contentLoaded.next();
    };
    PlaceDetailPage.prototype.clickMenu = function (event) {
        if (event === 0) {
            this.menuActive = 1;
        }
        if (event === 1) {
            this.menuActive = 0;
        }
    };
    PlaceDetailPage.prototype.changeMenuItem = function (event) {
        if (this.menuItem === event) {
            this.menuItem = null;
        }
        else {
            this.menuItem = event;
        }
    };
    PlaceDetailPage.prototype.setupObservable = function () {
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PlaceDetailPage.prototype.setupGallery = function () {
        var config = {
            loadingMode: 'indeterminate'
        };
        var galleryRef = this.gallery.ref('placeGallery');
        galleryRef.setConfig(config);
    };
    PlaceDetailPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 400);
    };
    PlaceDetailPage.prototype.loadPlace = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadOne(this.getParams().id)];
                    case 1:
                        _a.place = _b.sent();
                        console.log('ksajdflkajsf', this.place);
                        if (this.place.longDescription) {
                            this.description = this.sanitizer
                                .bypassSecurityTrustHtml(this.place.longDescription);
                        }
                        this.setPageTitle(this.place.title);
                        this.setMetaTags({
                            title: this.place.title,
                            description: this.place.description,
                            image: this.place.featuredImageUrl || '',
                            slug: this.place.getSlug()
                        });
                        this.webSocialShare.share.config.forEach(function (item) {
                            if (item.whatsapp) {
                                item.whatsapp.socialShareUrl = _this.getShareUrl(_this.place.getSlug());
                            }
                            else if (item.facebook) {
                                item.facebook.socialShareUrl = _this.getShareUrl(_this.place.getSlug());
                            }
                            else if (item.twitter) {
                                item.twitter.socialShareUrl = _this.getShareUrl(_this.place.getSlug());
                            }
                        });
                        this.rating = this.place.rating;
                        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
                            this.checkIfIsLiked();
                            this.checkIfIsStarred();
                        }
                        this.loadReviews();
                        if (this.place.from === 'app') {
                            if (this.place.featuredImageUrl) {
                                this.images.push(this.place.featuredImageUrl);
                            }
                            this.place.images.forEach(function (element) {
                                _this.images.push(element._url);
                            });
                        }
                        else if (this.place.from === 'local') {
                            this.place.serverImages.forEach(function (element) {
                                _this.images.push(_this.imageServer + _this.place.reference + '/' + element.url);
                            });
                        }
                        this.showContentView();
                        this.onContentLoaded();
                        this.onRefreshComplete(this.place);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        if (err_1.code === 101) {
                            this.showEmptyView();
                        }
                        else {
                            this.showErrorView();
                        }
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.editPlace = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent())
                            return [2 /*return*/, this.openSignInModal()];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _place_user_edit_place_user_edit__WEBPACK_IMPORTED_MODULE_16__["PlaceUserEditPage"],
                                componentProps: { id: event }
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
    PlaceDetailPage.prototype.setupSlider = function () {
        this.slidesConfig = {
            grabCursor: true,
            slidesPerView: 2.5,
            breakpointsInverse: true,
            zoom: false,
            touchStartPreventDefault: false,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2.2,
                    spaceBetween: 6
                },
                // when window width is >= 400px
                400: {
                    slidesPerView: 2.5,
                    spaceBetween: 5
                },
                // when window width is >= 640px
                600: {
                    slidesPerView: 3.5,
                    spaceBetween: 10
                },
                800: {
                    slidesPerView: 4.5,
                    spaceBetween: 10
                }
            }
        };
    };
    PlaceDetailPage.prototype.checkIfIsLiked = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isLiked, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.isLiked(this.place)];
                    case 1:
                        isLiked = _a.sent();
                        this.isLiked = isLiked;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.warn(err_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.checkIfIsStarred = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isStarred, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.isStarred(this.place)];
                    case 1:
                        isStarred = _a.sent();
                        this.isStarred = isStarred;
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.warn(err_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.loadLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, err_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.warn(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.loadReviews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, err_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.reviewService.load({
                                place: this.place, limit: 5
                            })];
                    case 1:
                        _a.reviews = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _b.sent();
                        console.warn(err_5.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.openSignInModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_9__["SignInPage"]
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
    PlaceDetailPage.prototype.openAddReviewModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _review_add_review_add__WEBPACK_IMPORTED_MODULE_4__["ReviewAddPage"],
                                componentProps: {
                                    place: this.place
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
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 5:
                        data = (_a.sent()).data;
                        if (data) {
                            this.reviews.unshift(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.openCheckInModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _checkin_checkin__WEBPACK_IMPORTED_MODULE_17__["CheckinPage"],
                                componentProps: {
                                    place: this.place
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
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 5:
                        data = (_a.sent()).data;
                        if (data) {
                            this.reviews.unshift(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.openShareModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _share_share_page__WEBPACK_IMPORTED_MODULE_13__["SharePage"],
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
    PlaceDetailPage.prototype.onLike = function () {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
            this.isLiked = !this.isLiked;
            this.placeService.like(this.place);
        }
        else {
            this.openSignInModal();
        }
    };
    PlaceDetailPage.prototype.onRate = function () {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
            this.openAddReviewModal();
        }
        else {
            this.openSignInModal();
        }
    };
    PlaceDetailPage.prototype.checkIn = function () {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
            this.openCheckInModal();
        }
        else {
            this.openSignInModal();
        }
    };
    PlaceDetailPage.prototype.onContentTouched = function (ev) {
        if (ev === void 0) { ev = {}; }
        var href = ev.target.getAttribute('href');
        if (href) {
            ev.preventDefault();
            this.openUrl(href);
        }
    };
    PlaceDetailPage.prototype.onShare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, err_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isCordova) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = this.getShareUrl(this.place.getSlug());
                        return [4 /*yield*/, this.socialSharing.share(null, null, null, url)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        console.warn(err_6);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        if (this.isPwa || this.isMobile) {
                            this.webSocialShare.show = true;
                        }
                        else {
                            this.openShareModal();
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.onCall = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.openSimpleUrl('tel:' + this.place.phone);
                return [2 /*return*/];
            });
        });
    };
    PlaceDetailPage.prototype.onDirectionsButtonTouched = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lat, lng, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                lat = this.place.location.latitude;
                lng = this.place.location.longitude;
                url = "https://maps.google.com/maps?q=" + lat + "," + lng;
                //const url = `http://maps.apple.com/?ll=${lat},${lng}`;
                this.openMapUrl(url);
                return [2 /*return*/];
            });
        });
    };
    PlaceDetailPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_6__["Place"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__["GeolocationService"] },
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_8__["Review"] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_15__["Gallery"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], PlaceDetailPage.prototype, "container", void 0);
    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-place-detail',
            template: __webpack_require__(/*! raw-loader!./place-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-detail/place-detail.html"),
            styles: [__webpack_require__(/*! ./place-detail.scss */ "./src/app/pages/place-detail/place-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_6__["Place"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"],
            src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__["GeolocationService"],
            _services_review_service__WEBPACK_IMPORTED_MODULE_8__["Review"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_15__["Gallery"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ }),

/***/ "./src/app/services/status.ts":
/*!************************************!*\
  !*** ./src/app/services/status.ts ***!
  \************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);



var Status = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Status, _super);
    function Status() {
        return _super.call(this, 'Status') || this;
    }
    Status_1 = Status;
    Status.getInstance = function () {
        return this;
    };
    Status.prototype.load = function (params) {
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Status_1);
            query.descending('createdAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Status.prototype.loadOne = function (id) {
        return new Promise(function (resolve, reject) {
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Status_1);
            query.equalTo('objectId', id);
            query.first().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Status.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    var Status_1;
    Status = Status_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Status);
    return Status;
}(parse__WEBPACK_IMPORTED_MODULE_2__["Object"]));

parse__WEBPACK_IMPORTED_MODULE_2__["Object"].registerSubclass('Status', Status);


/***/ })

}]);
//# sourceMappingURL=pages-place-detail-place-detail-module-es5.js.map
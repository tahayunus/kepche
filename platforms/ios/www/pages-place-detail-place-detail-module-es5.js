(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkin/checkin.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkin/checkin.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"onDismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'CHECK_IN' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let st of status\">\n        <ion-item (click)=\"selectEmoji(st.title)\" class=\"feel\" lines=\"none\"\n          [ngClass]=\"selectedEmoji === st.title ? 'borderDark' : ''\">\n          <ion-label color=\"dark\">{{st.title | translate}}</ion-label>\n          <img slot=\"start\" [src]=\"'assets/feel/'+st.title+'.png'\" width=\"24\" height=\"24\" />\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid fixed>\n    <ion-row>\n      <div class=\"scrollable\">\n        <app-upload-box [text]=\"'FEATURED_IMAGE' | translate\" (onFileUploaded)=\"onMainFileUploaded($event)\">\n        </app-upload-box>\n        <app-upload-box *ngFor=\"let upload of uploads\" (onFileUploaded)=\"onFileUploaded($event, upload)\">\n        </app-upload-box>\n        <div class=\"plusImage\" (click)=\"plusImages(uploads.length)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"ionicon\" viewBox=\"0 0 512 512\">\n            <title>Add Circle</title>\n            <path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\"\n              stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" />\n            <path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"\n              d=\"M256 176v160M336 256H176\" />\n          </svg>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n  <div class=\"ion-text-center\">\n    <ion-item class=\"ion-margin-vertical\" lines=\"none\" class=\"radius\" color=\"light\">\n      <ion-textarea [(ngModel)]=\"photo.description\" rows=\"8\" [placeholder]=\"'COMMENT' | translate\"\n        (keyup.enter)=\"onSubmit()\"></ion-textarea>\n    </ion-item>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"ion-text-center\">\n      <ion-button shape=\"round\" color=\"secondary\" [disabled]=\"isLoadingViewVisible\" (click)=\"onSubmit()\">\n        <ion-spinner *ngIf=\"isLoadingViewVisible\"></ion-spinner>\n        <span *ngIf=\"!isLoadingViewVisible\">{{ 'SUBMIT' | translate }}</span>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-detail/place-detail.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-detail/place-detail.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border ion-no-shadow\" mode=\"ios\">\n  <ion-toolbar color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ place?.title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" (click)=\"onLike()\" [disabled]=\"!place\">\n        <ion-icon slot=\"icon-only\" [name]=\"isLiked ? 'heart' : 'heart-outline'\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"light\" class=\"btn-share\" (click)=\"onShare()\" [disabled]=\"!place\">\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\">\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"alert\" [text]=\"'EMPTY_DATA' | translate\">\n  </empty-view>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\n  </empty-view>\n\n\n  <ion-grid fixed *ngIf=\"user && place?.owner === user\">\n    <ion-row padding>\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\n        <ion-button expand=\"block\" shape=\"round\" color=\"warning\" size=\"small\" (click)=\"editPlace(place.id)\">\n          {{'EDIT' | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid fixed class=\"p96\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-lg=\"10\">\n\n\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom light-bg radius ion-padding\" *ngIf=\"isLoadingViewVisible\">\n          <ion-row nowrap>\n            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"4\" *ngFor=\"let item of skeletonImages\">\n              <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n                [theme]=\"{ width: '3000px', height: '300px', 'border-radius': '4px' }\">\n              </ngx-skeleton-loader>\n            </ion-col>\n          </ion-row>\n\n          <div class=\"skeleton-item\">\n            <div class=\"wrapper\">\n              <div class=\"avatar\">\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\n                </ngx-skeleton-loader>\n              </div>\n              <div class=\"title\">\n                <div>\n                  <ngx-skeleton-loader\n                    [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\n                  </ngx-skeleton-loader>\n                </div>\n                <div>\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\n                  </ngx-skeleton-loader>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <ion-row>\n            <ion-col size=\"4\" class=\"ion-text-center\">\n              <div>\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '100px', height: '100px' }\">\n                </ngx-skeleton-loader>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-text-center\">\n              <div>\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '100px', height: '100px' }\">\n                </ngx-skeleton-loader>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-text-center\">\n              <div>\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '100px', height: '100px' }\">\n                </ngx-skeleton-loader>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"isLoadingViewVisible\">\n          <div class=\"skeleton-item light-bg radius\" *ngFor=\"let item of skeletonReviews\">\n            <div class=\"wrapper\">\n              <div class=\"avatar\">\n                <ngx-skeleton-loader appearance=\"circle\" [theme]=\"{ width: '80px', height: '80px' }\">\n                </ngx-skeleton-loader>\n              </div>\n              <div class=\"title\">\n                <div>\n                  <ngx-skeleton-loader\n                    [theme]=\"{ width: '30%', 'border-radius': '0', height: '15px', 'margin-bottom': '10px'}\">\n                  </ngx-skeleton-loader>\n                </div>\n                <div>\n                  <ngx-skeleton-loader [theme]=\"{ width: '70%', 'border-radius': '0', height: '15px' }\">\n                  </ngx-skeleton-loader>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card>\n\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"isContentViewVisible\">\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"light-bg radius fade-in\" padding>\n                <ion-slides pager=\"false\" gallerize=\"placeGallery\" selector=\".bg-img\"\n                  (ionSlidesDidLoad)=\"onSlidesDidLoad($event)\" (ionSlideDrag)=\"onSlidesDrag($event)\"\n                  [options]=\"slidesConfig\">\n                  <ion-slide *ngFor=\"let image of images\">\n                    <div class=\"bg-img radius\" defaultImage=\"./assets/img/placeholder.png\" [attr.imageSrc]=\"image\"\n                      [attr.thumbSrc]=\"image\" [lazyLoad]=\"image\" [scrollObservable]=\"loadAndScroll\">\n                    </div>\n                  </ion-slide>\n                </ion-slides>\n\n                <ion-item class=\"ion-margin-vertical\" lines=\"none\" color=\"light\">\n                  <ion-thumbnail class=\"img-featured\" slot=\"start\">\n                    <img defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"place?.featuredImageUrl\"\n                      [scrollObservable]=\"loadAndScroll\" />\n                  </ion-thumbnail>\n                  <ion-label text-nowrap>\n                    <ion-text color=\"dark\">\n                      <h2 class=\"bold ellipsis ion-text\" color=\"primary\">\n                        {{ place?.title }}\n                      </h2>\n                    </ion-text>\n                    <div text-nowrap>\n                      <ion-text color=\"medium\">\n                        <p>\n                          <span class=\"text-large bold\" [class.hidden]=\"!location\">\n                            {{ place?.distance(location, preference.unit) }}\n                          </span>\n                        </p>\n                      </ion-text>\n                    </div>\n                    <div>\n                      <ion-progress-bar *ngIf=\"place.rating > 0 && place.rating < 2\" color=\"danger\"\n                        [value]=\"(place.rating)/5\"></ion-progress-bar>\n                      <ion-progress-bar *ngIf=\"place.rating >= 2 && place.rating < 4\" color=\"primary\"\n                        [value]=\"(place.rating)/5\"></ion-progress-bar>\n                      <ion-progress-bar *ngIf=\"place.rating >= 4\" color=\"success\" [value]=\"(place.rating)/5\">\n                      </ion-progress-bar>\n                      <span *ngIf=\"place.rating != 0\" class=\"rating\">{{ ((place.rating)/5)*100  | number : fractionSize }} % {{ 'LIKED' | translate\n                        }}</span>\n                      <div class=\"status\">\n                        <span *ngIf=\"place.rating > 0 && place.rating < 2\"\n                          style=\"color: #ffffff; background-color: #eb445a\">{{ 'BAD' | translate }}</span>\n                        <span *ngIf=\"place.rating >= 2 && place.rating < 4\"\n                          style=\"color: #ffffff; background-color: #3880ff\">{{ 'GOOD' | translate }}</span>\n                        <span *ngIf=\"place.rating >= 4\" style=\"color: #ffffff; background-color: #2dd36f\">{{ 'VERY_GOOD'\n                          | translate }}</span>\n                      </div>\n                    </div>\n                  </ion-label>\n                </ion-item>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"light-bg radius fade-in\" padding>\n                <div text-wrap margin-top *ngIf=\"place?.description\" (click)=\"onContentTouched($event)\"\n                  [innerHTML]=\"place?.description\">\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"place?.menuType === 'local' && place?.menuLocal != []\">\n          <ion-card-header (click)=\"openLocalMenu(place?.id)\">\n            <ion-row>\n              <ion-col size-xs=\"6\" class=\"ion-text-start\">\n                <b>{{'MENU' | translate}}</b>\n              </ion-col>\n              <ion-col size-xs=\"6\" class=\"ion-text-end\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n        </ion-card>\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"place?.menuType === 'url' && place?.menuUrl.length\">\n          <ion-card-header (click)=\"openUrl(place?.menuUrl)\">\n            <ion-row>\n              <ion-col size-xs=\"6\" class=\"ion-text-start\">\n                <b>{{'MENU' | translate}}</b>\n              </ion-col>\n              <ion-col size-xs=\"6\" class=\"ion-text-end\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n        </ion-card>\n        <ion-card mode=\"ios\" class=\"ion-no-margin ion-margin-bottom\" *ngIf=\"isContentViewVisible\">\n          <ion-row>\n            <ion-col size-xs=\"12\" size-lg=\"7\">\n              <div class=\"light-bg radius ion-padding\">\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size-xs=\"6\" size-md=\"6\" size-lg=\"6\" class=\"ion-text-center\">\n                    <ion-button mode=\"ios\" size=\"small\" expand=\"block\" shape=\"round\" color=\"success\" (click)=\"onRate()\">\n                      {{ 'POST_REVIEW' | translate }}\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size-xs=\"6\" size-md=\"6\" size-lg=\"6\" class=\"ion-text-center\">\n                    <ion-button mode=\"ios\" size=\"small\" expand=\"block\" shape=\"round\" color=\"warning\"\n                      (click)=\"checkIn()\">\n                      {{ 'CHECK_IN' | translate }}\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n                <div *ngIf=\"!reviews.length\" style=\"height:170px;\" class=\"ion-text-center\">\n                  <div class=\"flex-center\">\n                    <ion-text color=\"medium\">\n                      <p class=\"text-medium\">\n                        {{ 'EMPTY_REVIEWS' | translate }}\n                      </p>\n                    </ion-text>\n                  </div>\n                </div>\n                <ion-list class=\"ion-no-margin\">\n                  <div class=\"radius light-bg\" *ngFor=\"let review of reviews\">\n                    <ion-item color=\"light\">\n                      <ion-avatar slot=\"start\">\n                        <img defaultImage=\"./assets/img/avatar.png\" [lazyLoad]=\"review.user?.photo?.url()\"\n                          [scrollObservable]=\"loadAndScroll\" />\n                      </ion-avatar>\n                      <ion-label class=\"ion-text-wrap\">\n                        <ion-text color=\"medium\" float-end>\n                          <span class=\"text-small\">\n                            {{ review.createdAt | date:'short'}}\n                          </span>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                          <h3 class=\"bold no-margin\">{{ review.user?.name }}</h3>\n                        </ion-text>\n                        <star-rating [value]=\"review.rating\" checkedcolor=\"#f2b01e\" uncheckedcolor=\"gray\" size=\"12px\"\n                          readonly=\"true\">\n                        </star-rating>\n\n                        <ion-text color=\"dark\">\n                          <p class=\"text-medium no-margin\">{{ review.comment }}</p>\n                        </ion-text>\n                      </ion-label>\n\n                    </ion-item>\n                  </div>\n                </ion-list>\n                <div class=\"ion-text-center\" *ngIf=\"reviews.length\">\n                  <ion-button class=\"bold\" fill=\"clear\" color=\"dark\" [routerLink]=\"['./reviews']\">\n                    {{ 'VIEW_ALL_REVIEWS' | translate }}\n                    <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                  </ion-button>\n                </div>\n              </div>\n            </ion-col>\n\n            <ion-col size-xs=\"12\" size-lg=\"5\">\n              <div class=\"light-bg radius ion-padding\">\n                <ion-list class=\"ion-no-margin\" color=\"light\">\n                  <ion-item color=\"light\" *ngIf=\"place?.address\">\n                    <ion-icon slot=\"start\" name=\"map\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">\n                      <span class=\"text-medium\">{{ place?.address }}</span>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item color=\"light\" *ngIf=\"place?.website\" (click)=\"openUrl(place.website)\">\n                    <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n                    <ion-label>\n                      <ion-text color=\"secondary\">\n                        <span class=\"text-medium link\">{{ place?.website }}</span>\n                      </ion-text>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item color=\"light\" *ngIf=\"place?.phone\" (click)=\"callPhone(place?.phone)\">\n                    <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                    <ion-label>\n                      <ion-text color=\"secondary\">\n                        <span class=\"text-medium link\">{{ place?.phone }}</span>\n                      </ion-text>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item color=\"light\" *ngIf=\"place?.facebook\" (click)=\"openUrl(place.facebook)\">\n                    <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n                    <ion-label>\n                      <ion-text color=\"secondary\">\n                        <span class=\"text-medium link\">{{ place?.facebook }}</span>\n                      </ion-text>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item color=\"light\" *ngIf=\"place?.instagram\" (click)=\"openUrl(place.instagram)\">\n                    <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\n                    <ion-label>\n                      <ion-text color=\"secondary\">\n                        <span class=\"text-medium link\">{{ place?.instagram }}</span>\n                      </ion-text>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item color=\"light\" *ngIf=\"place?.youtube\" (click)=\"openUrl(place.youtube)\">\n                    <ion-icon slot=\"start\" name=\"logo-youtube\"></ion-icon>\n                    <ion-label>\n                      <ion-text color=\"secondary\">\n                        <span class=\"text-medium link\">{{ place?.youtube }}</span>\n                      </ion-text>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item color=\"light\">\n                    <ion-col size-xs=\"12\" size-md=\"12\" size-lg=\"12\" text-end>\n                      <ion-button class=\"bold\" size=\"small\" expand=\"block\" shape=\"round\" color=\"secondary\"\n                        (click)=\"openUrl('https://maps.apple.com/?daddr='+place?.location.latitude+','+place?.location.longitude+'&dirflg=d&t=h')\">\n                        {{ 'GET_DIRECTIONS' | translate }}\n                      </ion-button>\n                    </ion-col>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

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

module.exports = "ion-content {\n  --padding-top: 60px;\n}\n\nion-item {\n  --border-radius: 4px;\n}\n\n.borderDark {\n  border: 2px solid var(--ion-color-warning) !important;\n}\n\n.plusImage {\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: 1px dashed var(--ion-color-medium);\n  cursor: pointer;\n  display: inline-flex;\n  height: 125px;\n  justify-content: center;\n  position: relative;\n  width: 125px;\n  margin: 0 8px;\n  top: -59px;\n}\n\n.plusImage svg {\n  width: 24px;\n  height: 24px;\n}\n\n.feel {\n  border: 2px solid var(--ion-color-light);\n  width: 100%;\n  background-color: transparent;\n  border-radius: 8px;\n}\n\n.feel img {\n  float: left;\n}\n\n.feel ion-label {\n  float: right;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL2NoZWNraW4vY2hlY2tpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja2luL2NoZWNraW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UscURBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURFQTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2tpbi9jaGVja2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5ib3JkZXJEYXJrIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpICFpbXBvcnRhbnQ7XG59XG5cbi5wbHVzSW1hZ2Uge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEyNXB4O1xuICBtYXJnaW46IDAgOHB4O1xuICB0b3A6IC01OXB4O1xuICBzdmcge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxufVxuXG4uZmVlbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIGltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogNjBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJvcmRlckRhcmsge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZykgIWltcG9ydGFudDtcbn1cblxuLnBsdXNJbWFnZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTI1cHg7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHRvcDogLTU5cHg7XG59XG4ucGx1c0ltYWdlIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5mZWVsIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZmVlbCBpbWcge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mZWVsIGlvbi1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

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
/* harmony import */ var _place_menu_place_menu_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../place-menu/place-menu.module */ "./src/app/pages/place-menu/place-menu.module.ts");














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
                _place_menu_place_menu_module__WEBPACK_IMPORTED_MODULE_13__["PlaceMenuPageModule"],
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

module.exports = "ion-slides {\n  height: auto;\n}\nion-slides .bg-img {\n  background-size: cover;\n  background-position: center;\n  height: 150px;\n  width: 150px;\n}\nion-slides .swiper-pagination-bullet-active {\n  background: var(--ion-color-light);\n}\nion-avatar {\n  margin: 0 12px 0 0 !important;\n}\nion-avatar img {\n  background: var(--ion-color-dark);\n}\nion-thumbnail {\n  --border-radius: 6px;\n  width: 80px;\n  height: 80px;\n}\nion-list {\n  background: var(--ion-color-light);\n}\nion-item {\n  --padding-start: 0;\n}\nion-item ion-label {\n  overflow: inherit;\n}\nion-slides {\n  padding: 10px;\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-primary);\n}\nion-slides ion-slide img {\n  display: block;\n  width: 100%;\n}\nion-slides .slide-img {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  width: 100%;\n  height: 200px;\n}\nion-row[nowrap] {\n  overflow: hidden;\n}\n.flex-start {\n  display: flex;\n  align-items: flex-start;\n}\n.review-count {\n  margin-left: 6px;\n}\n.icon-share {\n  font-size: 48px;\n}\n.skeleton-item {\n  width: auto;\n  height: auto;\n  margin: 10px auto;\n  padding: 10px;\n}\n.skeleton-item .wrapper {\n  display: inline-flex;\n  width: 100%;\n  height: auto;\n  flex: 1;\n}\n.skeleton-item .wrapper .avatar {\n  width: 100px;\n  height: 90px;\n}\n.skeleton-item .wrapper .title {\n  width: 100%;\n  padding: 10px;\n  height: 80px;\n}\n@media (min-width: 992px) {\n  ion-thumbnail {\n    width: 100px;\n    height: 100px;\n  }\n}\n.rating {\n  top: 8px;\n  position: relative;\n  line-height: 10px;\n  background: white;\n  padding: 5px;\n  border-radius: 3px;\n  font-size: small;\n  font-weight: bolder;\n  float: left;\n}\n.status span {\n  top: 8px;\n  left: 8px;\n  position: relative;\n  line-height: 10px;\n  padding: 5px;\n  border-radius: 3px;\n  font-size: small;\n  font-weight: bolder;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0Usa0NBQUE7QUNBSjtBRElBO0VBQ0UsNkJBQUE7QUNERjtBREdFO0VBQ0UsaUNBQUE7QUNESjtBREtBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxrQ0FBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtBQ0ZGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FES0E7RUFFRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxvREFBQTtBQ0hGO0FES0U7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0hOO0FETUU7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSk47QURPQTtFQUNFLGdCQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSkY7QURNRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FDSko7QURNSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSk47QURPSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEVUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDUEY7QUFDRjtBRFNBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUEY7QURVRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIC5iZy1pbWcge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogMCAxMnB4IDAgMCAhaW1wb3J0YW50O1xuXG4gIGltZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgaW9uLWxhYmVsIHtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgfVxufVxuXG5pb24tc2xpZGVzIHtcblxuICBwYWRkaW5nOjEwcHg7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgaW9uLXNsaWRlIGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNsaWRlLWltZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cbmlvbi1yb3dbbm93cmFwXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5yZXZpZXctY291bnQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uaWNvbi1zaGFyZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnNrZWxldG9uLWl0ZW0ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcblxuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXg6IDE7XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbi5yYXRpbmcge1xuICB0b3A6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmbG9hdDogbGVmdDtcbn1cbi5zdGF0dXMge1xuICBzcGFuIHtcbiAgICB0b3A6IDhweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyOyBcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59IiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlvbi1zbGlkZXMgLmJnLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuaW9uLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW46IDAgMTJweCAwIDAgIWltcG9ydGFudDtcbn1cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS1pbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tcm93W25vd3JhcF0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ucmV2aWV3LWNvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmljb24tc2hhcmUge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5za2VsZXRvbi1pdGVtIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2tlbGV0b24taXRlbSAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4OiAxO1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLnNrZWxldG9uLWl0ZW0gLndyYXBwZXIgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG4ucmF0aW5nIHtcbiAgdG9wOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zdGF0dXMgc3BhbiB7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

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
    PlaceDetailPage.prototype.openLocalMenu = function (id) {
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
                                    pid: id
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-detail-post-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/post-detail/post-detail.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/post-detail/post-detail.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ post?.title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" class=\"btn-share\" (click)=\"onShare()\" [disabled]=\"!post\">\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\">\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"alert\" [text]=\"'EMPTY_DATA' | translate\">\n  </empty-view>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\n  </empty-view>\n\n  <web-social-share style=\"--web-social-share-height:140px;--web-social-share-target-icon-container-height:48px\" (closed)=\"webSocialShare.onClosed()\" [show]=\"webSocialShare.show\" [share]=\"webSocialShare.share\">\n    <ion-icon class=\"icon-share\" name=\"logo-facebook\" slot=\"facebook\"\n      style=\"color:#00aced;width:48px;height:48px;\">\n    </ion-icon>\n    <ion-icon class=\"icon-share\" name=\"logo-twitter\" slot=\"twitter\" style=\"color:#55acee;width:48px;height:48px;\">\n    </ion-icon>\n    <ion-icon class=\"icon-share\" name=\"logo-whatsapp\" slot=\"whatsapp\"\n      style=\"color:#25D366;width:48px;height:48px;\">\n    </ion-icon>\n  </web-social-share>\n\n  <ion-grid fixed>\n    <ion-row justify-content-center>\n      <ion-col size-xs=\"12\" size-lg=\"8\">\n\n        <div *ngIf=\"isLoadingViewVisible\">\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n            [theme]=\"{ 'border-radius': '0', margin: '0 0 16px', height: '250px', width: '100%' }\">\n          </ngx-skeleton-loader>\n          <ngx-skeleton-loader count=\"16\"\n            [theme]=\"{ 'border-radius': '0', height: '10px' }\">\n          </ngx-skeleton-loader>\n        </div>\n\n        <div class=\"fade-in\" *ngIf=\"isContentViewVisible\">\n          <div class=\"bg-img\" defaultImage=\"./assets/img/placeholder.png\"\n            [lazyLoad]=\"post?.image?.url()\"\n            [scrollObservable]=\"loadAndScroll\">\n          </div>\n\n          <div margin-top>\n            <h3 class=\"bold\">{{ post?.title }}</h3>\n            <ion-text color=\"medium\">\n              <p class=\"bold\">{{ post?.body }}</p>\n            </ion-text>\n\n            <ion-button *ngIf=\"post.place\" color=\"secondary\"\n              [routerLink]=\"['/1/posts/places/' + post.place.id]\">\n            {{ 'VIEW_PLACE' | translate }}\n            </ion-button>\n           \n            <div class=\"html-content\" *ngIf=\"htmlBody\"\n              (click)=\"onContentTouched($event)\"\n              [innerHTML]=\"htmlBody\">\n            </div>\n          </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/post-detail/post-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/post-detail/post-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: PostDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailPageModule", function() { return PostDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-detail */ "./src/app/pages/post-detail/post-detail.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/share.module */ "./src/app/pages/share/share.module.ts");






var PostDetailPageModule = /** @class */ (function () {
    function PostDetailPageModule() {
    }
    PostDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _post_detail__WEBPACK_IMPORTED_MODULE_3__["PostDetailPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["SharePageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _post_detail__WEBPACK_IMPORTED_MODULE_3__["PostDetailPage"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], PostDetailPageModule);
    return PostDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/post-detail/post-detail.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/post-detail/post-detail.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-img {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 250px;\n}\n\n.icon-share {\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uaWNvbi1zaGFyZSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xufSIsIi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uaWNvbi1zaGFyZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/post-detail/post-detail.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/post-detail/post-detail.ts ***!
  \**************************************************/
/*! exports provided: PostDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailPage", function() { return PostDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post */ "./src/app/services/post.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _share_share_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/share.page */ "./src/app/pages/share/share.page.ts");









var PostDetailPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PostDetailPage, _super);
    function PostDetailPage(injector, socialSharing, sanitizer, postService) {
        var _this = _super.call(this, injector) || this;
        _this.socialSharing = socialSharing;
        _this.sanitizer = sanitizer;
        _this.postService = postService;
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
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        return _this;
    }
    PostDetailPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    PostDetailPage.prototype.ngOnInit = function () {
        this.setupObservable();
    };
    PostDetailPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadPost();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostDetailPage.prototype.setupObservable = function () {
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PostDetailPage.prototype.loadPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.postService.loadOne(this.getParams().id)];
                    case 1:
                        _a.post = _b.sent();
                        if (this.post.htmlBody) {
                            this.htmlBody = this.sanitizer
                                .bypassSecurityTrustHtml(this.post.htmlBody);
                        }
                        this.setPageTitle(this.post.title);
                        this.setMetaTags({
                            title: this.post.title,
                            description: this.post.body,
                            image: this.post.image ? this.post.image.url() : '',
                            slug: this.post.getSlug()
                        });
                        this.webSocialShare.share.config.forEach(function (item, key) {
                            if (item.whatsapp) {
                                item.whatsapp.socialShareUrl = _this.getShareUrl(_this.post.getSlug());
                            }
                            else if (item.facebook) {
                                item.facebook.socialShareUrl = _this.getShareUrl(_this.post.getSlug());
                            }
                            else if (item.twitter) {
                                item.twitter.socialShareUrl = _this.getShareUrl(_this.post.getSlug());
                            }
                        });
                        this.showContentView();
                        this.onContentLoaded();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        if (error_1.code === 101) {
                            this.showEmptyView();
                        }
                        else {
                            this.showErrorView();
                        }
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostDetailPage.prototype.onContentTouched = function (ev) {
        if (ev === void 0) { ev = {}; }
        var href = ev.target.getAttribute('href');
        if (href) {
            ev.preventDefault();
            this.openUrl(href);
        }
    };
    PostDetailPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 400);
    };
    PostDetailPage.prototype.onShare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isCordova) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = this.getShareUrl(this.post.getSlug());
                        return [4 /*yield*/, this.socialSharing.share(null, null, null, url)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.warn(err_1);
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
    PostDetailPage.prototype.openShareModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _share_share_page__WEBPACK_IMPORTED_MODULE_8__["SharePage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PostDetailPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _services_post__WEBPACK_IMPORTED_MODULE_2__["Post"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
    ], PostDetailPage.prototype, "container", void 0);
    PostDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-post-detail',
            template: __webpack_require__(/*! raw-loader!./post-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/post-detail/post-detail.html"),
            styles: [__webpack_require__(/*! ./post-detail.scss */ "./src/app/pages/post-detail/post-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_post__WEBPACK_IMPORTED_MODULE_2__["Post"]])
    ], PostDetailPage);
    return PostDetailPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-post-detail-post-detail-module-es5.js.map
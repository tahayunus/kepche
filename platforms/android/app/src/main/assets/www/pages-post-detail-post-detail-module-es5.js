(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-detail-post-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/post-detail/post-detail.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/post-detail/post-detail.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ post?.title }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"light\" class=\"btn-share\" (click)=\"onShare()\" [disabled]=\"!post\">\r\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"alert\" [text]=\"'EMPTY_DATA' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <web-social-share style=\"--web-social-share-height:140px;--web-social-share-target-icon-container-height:48px\" (closed)=\"webSocialShare.onClosed()\" [show]=\"webSocialShare.show\" [share]=\"webSocialShare.share\">\r\n    <ion-icon class=\"icon-share\" name=\"logo-facebook\" slot=\"facebook\"\r\n      style=\"color:#00aced;width:48px;height:48px;\">\r\n    </ion-icon>\r\n    <ion-icon class=\"icon-share\" name=\"logo-twitter\" slot=\"twitter\" style=\"color:#55acee;width:48px;height:48px;\">\r\n    </ion-icon>\r\n    <ion-icon class=\"icon-share\" name=\"logo-whatsapp\" slot=\"whatsapp\"\r\n      style=\"color:#25D366;width:48px;height:48px;\">\r\n    </ion-icon>\r\n  </web-social-share>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row justify-content-center>\r\n      <ion-col size-xs=\"12\" size-lg=\"8\">\r\n\r\n        <div *ngIf=\"isLoadingViewVisible\">\r\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n            [theme]=\"{ 'border-radius': '0', margin: '0 0 16px', height: '250px', width: '100%' }\">\r\n          </ngx-skeleton-loader>\r\n          <ngx-skeleton-loader count=\"16\"\r\n            [theme]=\"{ 'border-radius': '0', height: '10px' }\">\r\n          </ngx-skeleton-loader>\r\n        </div>\r\n\r\n        <div class=\"fade-in\" *ngIf=\"isContentViewVisible\">\r\n          <div class=\"bg-img\" defaultImage=\"./assets/img/placeholder.png\"\r\n            [lazyLoad]=\"post?.image?.url()\"\r\n            [scrollObservable]=\"loadAndScroll\">\r\n          </div>\r\n\r\n          <div margin-top>\r\n            <h3 class=\"bold\">{{ post?.title }}</h3>\r\n            <ion-text color=\"medium\">\r\n              <p class=\"bold\">{{ post?.body }}</p>\r\n            </ion-text>\r\n\r\n            <ion-button *ngIf=\"post.place\" color=\"secondary\"\r\n              [routerLink]=\"['/1/posts/places/' + post.place.id]\">\r\n            {{ 'VIEW_PLACE' | translate }}\r\n            </ion-button>\r\n           \r\n            <div class=\"html-content\" *ngIf=\"htmlBody\"\r\n              (click)=\"onContentTouched($event)\"\r\n              [innerHTML]=\"htmlBody\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>"

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

module.exports = ".bg-img {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 250px;\n}\n\n.icon-share {\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC1kZXRhaWwvQzpcXFVzZXJzXFxWb2NhbEVhc3RcXERvY3VtZW50c1xcR2l0SHViXFxrZXBjaGUvc3JjXFxhcHBcXHBhZ2VzXFxwb3N0LWRldGFpbFxccG9zdC1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLmljb24tc2hhcmUge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG59IiwiLmJnLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5pY29uLXNoYXJlIHtcbiAgZm9udC1zaXplOiA0OHB4O1xufSJdfQ== */"

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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-list-place-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-list/place-list.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-list/place-list.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ion-content #container scrollEvents=\"true\">\r\n  <ion-header class=\"ion-no-border ion-no-shadow\" mode=\"ios\">\r\n    <ion-toolbar mode=\"ios\" color=\"danger\" fixed>\r\n      <ion-buttons slot=\"start\" *ngIf=\"params.category || params.featured || params.nearby\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        <span *ngIf=\"params.featured\">{{ 'FEATURED' | translate }}</span>\r\n        <span *ngIf=\"params.nearby\">{{ 'NEARBY' | translate }}</span>\r\n        <span *ngIf=\"params.category\">{{ params.category.title | translate}}</span>\r\n        <span *ngIf=\"!params.category && !params.featured && !params.nearby\">\r\n          {{ 'NEW' | translate }}\r\n        </span>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"status-wrapper\" style=\"margin-bottom: 20px;\" *ngIf=\"params.category\">\r\n    <ion-segment scrollable value=\"heart\" color=\"danger\">\r\n      <ion-segment-button style=\"padding-left: 5;\" color=\"danger\">\r\n        <ion-label (click)=\"clickEvent('all')\">{{'ALL' | translate}}</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button color=\"danger\" *ngFor=\"let item of secondcategories\">\r\n        <ion-label (click)=\"clickEvent(item.id)\">{{item.title | translate}}</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\"></empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"map\" [text]=\"'EMPTY_PLACES'  | translate\"></empty-view>\r\n\r\n\r\n  <ion-grid fixed style=\"margin-bottom: 10px;\">\r\n    <ion-row>\r\n      <ion-slides pager=\"true\" (ionSlidesDidLoad)=\"onSlidesTopDidLoad($event)\"\r\n        (ionSlideWillChange)=\"onSlidesTopWillChange($event)\" [options]=\"slideOpts\">\r\n        <ion-slide *ngFor=\"let slide of slider\" (click)=\"onSlideTouched(slide)\">\r\n          <img [src]=\"slide.image._url\" alt=\"\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed class=\"p96\">\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"places.length\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" class=\"ion-float-left\"\r\n        *ngFor=\"let place of places\">\r\n        <app-place-card *ngIf=\"params.nearby || params.featured || secondcatid === 'all'\"\r\n          [routerLink]=\"['./' + place.id + '/' + place.slug]\" [place]=\"place\"\r\n          [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n        <app-place-card *ngIf=\"params.category && place.secondcategory.id === secondcatid\"\r\n          [routerLink]=\"['./' + place.id + '/' + place.slug]\" [place]=\"place\"\r\n          [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n        </app-place-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/place-list/place-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/place-list/place-list.module.ts ***!
  \*******************************************************/
/*! exports provided: PlaceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceListPageModule", function() { return PlaceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-list */ "./src/app/pages/place-list/place-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var PlaceListPageModule = /** @class */ (function () {
    function PlaceListPageModule() {
    }
    PlaceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _place_list__WEBPACK_IMPORTED_MODULE_3__["PlaceListPage"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _place_list__WEBPACK_IMPORTED_MODULE_3__["PlaceListPage"]
                    }
                ])
            ]
        })
    ], PlaceListPageModule);
    return PlaceListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/place-list/place-list.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/place-list/place-list.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\nion-content {\n  --background: var(--ion-color-light-tint);\n}\n\nion-fab {\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n}\n\nion-segment-button ion-label {\n  font-size: small;\n  font-weight: 800;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2UtbGlzdC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHBsYWNlLWxpc3RcXHBsYWNlLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2UtbGlzdC9wbGFjZS1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0UseUNBQUE7QUNFRjs7QURDQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhY2UtbGlzdC9wbGFjZS1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkhlYWRlciB7XHJcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbn1cclxuXHJcbmlvbi1mYWIge1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn0iLCIubWFpbkhlYWRlciB7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbmlvbi1mYWIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/place-list/place-list.ts":
/*!************************************************!*\
  !*** ./src/app/pages/place-list/place-list.ts ***!
  \************************************************/
/*! exports provided: PlaceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceListPage", function() { return PlaceListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/slide */ "./src/app/services/slide.ts");










var PlaceListPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaceListPage, _super);
    function PlaceListPage(injector, geolocationService, placeService, slideService, categoryService) {
        var _this = _super.call(this, injector) || this;
        _this.geolocationService = geolocationService;
        _this.placeService = placeService;
        _this.slideService = slideService;
        _this.categoryService = categoryService;
        _this.secondcatid = 'all';
        _this.params = {};
        _this.slider = [];
        _this.categories = [];
        _this.secondcategories = [];
        _this.places = [];
        _this.slideOpts = {};
        _this.skeletonArray = Array(12);
        _this.params = Object.assign({}, _this.getQueryParams());
        _this.params.unit = _this.preference.unit;
        _this.params.limit = 20;
        _this.params.page = 0;
        return _this;
    }
    PlaceListPage.prototype.ngOnInit = function () {
        this.setupObservables();
        this.loadSlider();
    };
    PlaceListPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.slidesTopEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.horizontalScroll = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.container.ionScroll, this.horizontalScroll, this.contentLoaded, this.slidesTopEvent);
    };
    PlaceListPage.prototype.setupSliders = function () {
        this.slideOpts = {
            autoplay: {
                delay: 7000
            },
            spaceBetween: 16,
            zoom: false,
            touchStartPreventDefault: false,
            initialSlide: 0,
            speed: 400
        };
    };
    PlaceListPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    PlaceListPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title, coords;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTrans('PLACES')];
                    case 1:
                        title = _a.sent();
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        if (!!this.places.length) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 2:
                        _a.sent();
                        if (this.params.category) {
                            this.category = new src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"];
                            this.category.id = this.params.category;
                            this.category.fetch();
                            this.params.category = this.category;
                        }
                        if (!this.params.nearby) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 3:
                        coords = _a.sent();
                        this.location = coords;
                        this.params.location = coords;
                        return [3 /*break*/, 5];
                    case 4:
                        this.loadLocation();
                        _a.label = 5;
                    case 5:
                        this.loadData();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PlaceListPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlaceListPage.prototype.loadLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        return [2 /*return*/, coords];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceListPage.prototype.clickEvent = function (event) {
        this.secondcatid = event;
        console.log('scatid', this.secondcatid);
    };
    PlaceListPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var places, _a, places_1, places_1_1, place, err_1;
            var e_1, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.placeService.load(this.params)];
                    case 1:
                        places = _c.sent();
                        if (!this.params.category) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.categoryService.loadSecond(this.category.id)];
                    case 2:
                        _a.secondcategories = _c.sent();
                        _c.label = 3;
                    case 3:
                        try {
                            for (places_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](places), places_1_1 = places_1.next(); !places_1_1.done; places_1_1 = places_1.next()) {
                                place = places_1_1.value;
                                this.places.push(place);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (places_1_1 && !places_1_1.done && (_b = places_1.return)) _b.call(places_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        this.onRefreshComplete(places);
                        if (this.places.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _c.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PlaceListPage.prototype.loadSlider = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sliders, sliders_1, sliders_1_1, slide, err_2;
            var e_2, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.slideService.loadCategory(this.params.category)];
                    case 1:
                        sliders = _b.sent();
                        try {
                            for (sliders_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sliders), sliders_1_1 = sliders_1.next(); !sliders_1_1.done; sliders_1_1 = sliders_1.next()) {
                                slide = sliders_1_1.value;
                                this.slider.push(slide);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (sliders_1_1 && !sliders_1_1.done && (_a = sliders_1.return)) _a.call(sliders_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        this.onRefreshComplete(this.slider);
                        if (this.slider.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceListPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadData();
    };
    PlaceListPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresher = event.target;
                        this.places = [];
                        this.params.page = 0;
                        if (!this.params.nearby) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadLocation()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        this.params.location = coords;
                        return [3 /*break*/, 3];
                    case 2:
                        this.loadLocation();
                        _a.label = 3;
                    case 3:
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceListPage.prototype.onSlidesTopDidLoad = function () {
        this.slidesTopEvent.next();
    };
    PlaceListPage.prototype.onSlidesTopWillChange = function () {
        this.slidesTopEvent.next();
    };
    PlaceListPage.prototype.onPlaceTouched = function (place) {
        this.navigateToRelative('places/' + place.id + '/' + place.slug);
    };
    PlaceListPage.prototype.onSlideTouched = function (slide) {
        if (slide.url && slide.type === 'url') {
            this.openUrl(slide.url);
        }
        else if (slide.place && slide.type === 'place') {
            this.onPlaceTouched(slide.place);
        }
        else {
            // no match...
        }
    };
    PlaceListPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"] },
        { type: src_app_services_slide__WEBPACK_IMPORTED_MODULE_9__["Slide"] },
        { type: src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], PlaceListPage.prototype, "container", void 0);
    PlaceListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'place-list-page',
            template: __webpack_require__(/*! raw-loader!./place-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-list/place-list.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./place-list.scss */ "./src/app/pages/place-list/place-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"],
            src_app_services_slide__WEBPACK_IMPORTED_MODULE_9__["Slide"],
            src_app_services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"]])
    ], PlaceListPage);
    return PlaceListPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);




var GeolocationService = /** @class */ (function () {
    function GeolocationService(geolocation) {
        this.geolocation = geolocation;
    }
    GeolocationService.prototype.getCurrentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var position, diff, minutesDifference, options, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        position = null;
                        if (this.lastPosition) {
                            diff = new Date().getTime() - this.lastPosition.timestamp;
                            minutesDifference = Math.floor(diff / 1000 / 60);
                            if (minutesDifference <= 15)
                                return [2 /*return*/, this.lastPosition.coords];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            enableHighAccuracy: false,
                            timeout: 5000,
                            maximumAge: 15 * 60 * 1000,
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 2:
                        position = _a.sent();
                        this.lastPosition = position;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        position = this.lastPosition;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, position ? position.coords : null];
                }
            });
        });
    };
    GeolocationService.prototype.toParseGeoPoint = function (coords) {
        return new parse__WEBPACK_IMPORTED_MODULE_3__["GeoPoint"](coords.latitude, coords.longitude);
    };
    GeolocationService.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
    ]; };
    GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-place-list-place-list-module-es5.js.map
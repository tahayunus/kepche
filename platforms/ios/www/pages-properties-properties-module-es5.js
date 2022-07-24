(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-properties-properties-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/properties/properties.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/properties/properties.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'PROPERTIES' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #container scrollEvents=\"true\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\" refreshingText=\"{{ 'REFRESHING' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\n  </empty-view>\n\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"list-box\" [text]=\"'EMPTY_DATA' | translate\">\n  </empty-view>\n\n  <ion-grid class=\"ion-padding\" fixed class=\"p96\">\n\n    <ion-row *ngIf=\"isLoadingViewVisible\">\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\" [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\n        </ngx-skeleton-loader>\n      </ion-col>\n    </ion-row>\n\n    <ion-row [@staggerIn]=\"properties.length\">\n      <ion-col size-xs=\"6\" size-sm=\"4\" size-md=\"3\" size-lg=\"2\" *ngFor=\"let prop of properties; let i = index\">\n        <ion-button shape=\"round\" fill=\"outline\" color=\"primary\" size=\"medium\" expand=\"block\" (click)=\"addProperties(prop.id, i)\">\n          <ion-label>{{arrayTitle[i][langid].name}}</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/properties/properties.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/*! exports provided: PropertiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPageModule", function() { return PropertiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties */ "./src/app/pages/properties/properties.ts");





var PropertiesPageModule = /** @class */ (function () {
    function PropertiesPageModule() {
    }
    PropertiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _properties__WEBPACK_IMPORTED_MODULE_4__["PropertiesPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _properties__WEBPACK_IMPORTED_MODULE_4__["PropertiesPage"]
                    }
                ])
            ]
        })
    ], PropertiesPageModule);
    return PropertiesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/properties/properties.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/properties/properties.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\nion-content {\n  --background: var(--ion-color-light-tint);\n}\n\n.bg-img {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3Byb3BlcnRpZXMvcHJvcGVydGllcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSx5Q0FBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufSIsIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cblxuLmJnLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/properties/properties.ts":
/*!************************************************!*\
  !*** ./src/app/pages/properties/properties.ts ***!
  \************************************************/
/*! exports provided: PropertiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPage", function() { return PropertiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/property */ "./src/app/services/property.ts");
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");









var PropertiesPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PropertiesPage, _super);
    function PropertiesPage(injector, propertyService, storage, userService) {
        var _this = _super.call(this, injector) || this;
        _this.propertyService = propertyService;
        _this.storage = storage;
        _this.userService = userService;
        _this.myProperties = [];
        _this.params = {};
        _this.arrayTitle = [];
        _this.properties = [];
        _this.skeletonArray = Array(12);
        _this.params.limit = 100;
        _this.params.page = 0;
        _this.langid;
        return _this;
    }
    PropertiesPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PropertiesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"].getCurrent();
                        console.log('Kişi', this.user);
                        _a = this;
                        return [4 /*yield*/, this.storage.getLang()];
                    case 1:
                        _a.lang = _b.sent();
                        console.log('Dil', this.lang);
                        if (this.lang === 'tr') {
                            this.langid = 0;
                        }
                        if (this.lang === 'en') {
                            this.langid = 1;
                        }
                        if (this.lang === 'es') {
                            this.langid = 2;
                        }
                        if (this.lang === 'de') {
                            this.langid = 3;
                        }
                        if (this.lang === 'ru') {
                            this.langid = 4;
                        }
                        if (this.lang === 'fr') {
                            this.langid = 5;
                        }
                        if (this.lang === 'ar') {
                            this.langid = 6;
                        }
                        if (this.lang === 'fl') {
                            this.langid = 7;
                        }
                        console.log('Dil Id', this.langid);
                        this.setupObservables();
                        this.loadProperties();
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesPage.prototype.setupObservables = function () {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PropertiesPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 300);
    };
    PropertiesPage.prototype.loadMyProperties = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PropertiesPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.properties.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadProperties();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.getTrans('POSTS')];
                    case 3:
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
    PropertiesPage.prototype.loadProperties = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myProp, myProp_1, myProp_1_1, element, properties, properties_1, properties_1_1, property;
            var e_1, _a, e_2, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        myProp = this.user.properties;
                        try {
                            for (myProp_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](myProp), myProp_1_1 = myProp_1.next(); !myProp_1_1.done; myProp_1_1 = myProp_1.next()) {
                                element = myProp_1_1.value;
                                this.myProperties.push(element.id);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (myProp_1_1 && !myProp_1_1.done && (_a = myProp_1.return)) _a.call(myProp_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        ;
                        return [4 /*yield*/, this.propertyService.load({
                                mid: this.myProperties
                            })];
                    case 1:
                        properties = _c.sent();
                        try {
                            for (properties_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                                property = properties_1_1.value;
                                this.properties.push(property);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (properties_1_1 && !properties_1_1.done && (_b = properties_1.return)) _b.call(properties_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        this.properties.forEach(function (t) {
                            _this.arrayTitle.push(t.title);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertiesPage.prototype.addProperties = function (event, i) {
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"].getCurrent().properties.push({
            "id": event
        });
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"].getCurrent().save();
        console.log('hangisi', this.properties[i]);
        this.properties = [];
        this.loadProperties();
    };
    PropertiesPage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        this.refresher = event.target;
        this.properties = [];
        this.params.page = 0;
        this.loadProperties();
    };
    PropertiesPage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadProperties();
    };
    PropertiesPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_property__WEBPACK_IMPORTED_MODULE_6__["Property"] },
        { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], PropertiesPage.prototype, "container", void 0);
    PropertiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'properties-page',
            template: __webpack_require__(/*! raw-loader!./properties.html */ "./node_modules/raw-loader/index.js!./src/app/pages/properties/properties.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('staggerIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./properties.scss */ "./src/app/pages/properties/properties.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_property__WEBPACK_IMPORTED_MODULE_6__["Property"],
            src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"]])
    ], PropertiesPage);
    return PropertiesPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-properties-properties-module-es5.js.map
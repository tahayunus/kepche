(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-properties-properties-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/properties/properties.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/properties/properties.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'PROPERTIES' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #container scrollEvents=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\" refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n\r\n  <empty-view *ngIf=\"isEmptyViewVisible\" icon=\"list-box\" [text]=\"'EMPTY_DATA' | translate\">\r\n  </empty-view>\r\n\r\n  <ion-grid class=\"ion-padding\" fixed class=\"p96\">\r\n\r\n    <ion-row *ngIf=\"isLoadingViewVisible\">\r\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let item of skeletonArray\">\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\" [theme]=\"{ width: '100%', height: '200px', 'border-radius': '0' }\">\r\n        </ngx-skeleton-loader>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row [@staggerIn]=\"properties.length\">\r\n      <ion-col size-xs=\"6\" size-sm=\"4\" size-md=\"3\" size-lg=\"2\" *ngFor=\"let prop of properties; let i = index\">\r\n        <ion-button shape=\"round\" fill=\"outline\" color=\"primary\" size=\"medium\" expand=\"block\" (click)=\"addProperties(prop.id, i)\">\r\n          <ion-label>{{arrayTitle[i][langid].name}}</ion-label>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n  </ion-grid>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties */ "./src/app/pages/properties/properties.ts");





let PropertiesPageModule = class PropertiesPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/properties/properties.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/properties/properties.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\nion-content {\n  --background: var(--ion-color-light-tint);\n}\n\n.bg-img {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvcGVydGllcy9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHByb3BlcnRpZXNcXHByb3BlcnRpZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0UseUNBQUE7QUNFRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkhlYWRlciB7XHJcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbn1cclxuXHJcbi5iZy1pbWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn0iLCIubWFpbkhlYWRlciB7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/property */ "./src/app/services/property.ts");
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");









let PropertiesPage = class PropertiesPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, propertyService, storage, userService) {
        super(injector);
        this.propertyService = propertyService;
        this.storage = storage;
        this.userService = userService;
        this.myProperties = [];
        this.params = {};
        this.arrayTitle = [];
        this.properties = [];
        this.skeletonArray = Array(12);
        this.params.limit = 100;
        this.params.page = 0;
        this.langid;
    }
    enableMenuSwipe() {
        return false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"].getCurrent();
            console.log('Kişi', this.user);
            this.lang = yield this.storage.getLang();
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
        });
    }
    setupObservables() {
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.container.ionScroll, this.contentLoaded);
    }
    onContentLoaded() {
        setTimeout(() => {
            this.contentLoaded.next();
        }, 300);
    }
    loadMyProperties() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.properties.length) {
                yield this.showLoadingView({ showOverlay: false });
                this.loadProperties();
            }
            const title = yield this.getTrans('POSTS');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    loadProperties() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myProp = this.user.properties;
            for (let element of myProp) {
                this.myProperties.push(element.id);
            }
            ;
            const properties = yield this.propertyService.load({
                mid: this.myProperties
            });
            for (let property of properties) {
                this.properties.push(property);
            }
            this.properties.forEach(t => {
                this.arrayTitle.push(t.title);
            });
        });
    }
    addProperties(event, i) {
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"].getCurrent().properties.push({
            "id": event
        });
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"].getCurrent().save();
        console.log('hangisi', this.properties[i]);
        this.properties = [];
        this.loadProperties();
    }
    onReload(event = {}) {
        this.refresher = event.target;
        this.properties = [];
        this.params.page = 0;
        this.loadProperties();
    }
    onLoadMore(event = {}) {
        this.infiniteScroll = event.target;
        this.params.page++;
        this.loadProperties();
    }
};
PropertiesPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_property__WEBPACK_IMPORTED_MODULE_6__["Property"] },
    { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["User"] }
];
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
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
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



/***/ })

}]);
//# sourceMappingURL=pages-properties-properties-module-es2015.js.map
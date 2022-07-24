(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs mode=\"md\">\n    <div class=\"footer\" *ngIf=\"platform.is('mobile')\">\n        <ion-tab-bar slot=\"bottom\" class=\"bottom-tab-bar\" color=\"dark\" *ngIf=\"platform.is('mobile')\">\n            <ion-tab-button tab=\"home\" layout=\"icon-center\">\n                <ion-icon name=\"home\"></ion-icon>\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"places\" layout=\"icon-center\">\n                <ion-icon name=\"file-tray\"></ion-icon>\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"map\" layout=\"icon-center\">\n                <ion-icon name=\"map\"></ion-icon>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"posts\" layout=\"icon-center\">\n                <ion-icon name=\"document-text\"></ion-icon>\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"profile\" layout=\"icon-center\">\n                <ion-icon name=\"person\" *ngIf=\"!user\"></ion-icon>\n                <img class=\"profileImg\" *ngIf=\"user && user?.attributes.photo?.url() != null\" [src]=\"user?.attributes.photo?.url()\"/>\n                <img class=\"profileImg\" *ngIf=\"user && user?.attributes.photo?.url() === null\" src=\"assets/img/avatar.png\"/>\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </div>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/services/auth-guard/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth-guard/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service */ "./src/app/services/user-service.ts");




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (!_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: none;\n}\n.footer ion-tab-bar {\n  position: relative;\n  box-shadow: #26394d 0px 20px 30px -10px;\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  border-radius: 30px;\n  margin: 20px;\n  height: 50px;\n}\n.footer ion-tab-bar .profileImg {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid var(--ion-color-medium);\n}\n.footer ion-tab-button.tab-selected ion-icon {\n  color: var(--ion-color-warning);\n}\n.footer ion-tab-button.tab-selected .profileImg {\n  border: 2px solid var(--ion-color-warning);\n}\n.mapButton {\n  position: absolute;\n  margin-left: calc(50% - 32px);\n  margin-right: calc(50% - 32px);\n  height: 64px;\n  width: 64px;\n  bottom: 15px;\n  border-radius: 50%;\n  background-color: var(--ion-color-warning);\n}\n.mapButton ion-icon {\n  font-size: 2rem;\n  color: var(--ion-color-light);\n}\n.mapButton.tab-selected {\n  background-color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMlRBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUNBQUE7QUNDWjtBREtZO0VBQ0ksK0JBQUE7QUNIaEI7QURNWTtFQUNJLDBDQUFBO0FDSmhCO0FEVUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDUEo7QURTSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQ1BSO0FEVUk7RUFDSSwwQ0FBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMzgsIDU3LCA3NykgMHB4IDIwcHggMzBweCAtMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcblxuICAgICAgICAucHJvZmlsZUltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgICYudGFiLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZmlsZUltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFwQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMzJweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDMycHgpO1xuICAgIGhlaWdodDogNjRweDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB9XG59IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5mb290ZXIgaW9uLXRhYi1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6ICMyNjM5NGQgMHB4IDIwcHggMzBweCAtMTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5mb290ZXIgaW9uLXRhYi1iYXIgLnByb2ZpbGVJbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5mb290ZXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cbi5mb290ZXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5wcm9maWxlSW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4ubWFwQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAzMnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDMycHgpO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBib3R0b206IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuLm1hcEJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubWFwQnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service */ "./src/app/services/user-service.ts");




let TabsPage = class TabsPage {
    constructor(platform, injector) {
        this.platform = platform;
        this.events = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]);
    }
    ngOnInit() {
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
        this.events.subscribe('user:login', () => {
            this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', () => {
            this.user = null;
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard/auth.guard */ "./src/app/services/auth-guard/auth.guard.ts");





const routes = [
    {
        path: 'index',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ../pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
                    },
                    {
                        path: 'address',
                        loadChildren: () => Promise.all(/*! import() | pages-address-address-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-address-address-module")]).then(__webpack_require__.bind(null, /*! ../pages/address/address.module */ "./src/app/pages/address/address.module.ts")).then(m => m.AddressPageModule)
                    },
                    {
                        path: 'address/add',
                        loadChildren: () => Promise.all(/*! import() | pages-add-address-add-address-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-add-address-add-address-module")]).then(__webpack_require__.bind(null, /*! ../pages/add-address/add-address.module */ "./src/app/pages/add-address/add-address.module.ts")).then(m => m.AddAddressPageModule)
                    },
                    {
                        path: 'search',
                        loadChildren: () => Promise.all(/*! import() | pages-search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null, /*! ../pages/search/search.module */ "./src/app/pages/search/search.module.ts")).then(m => m.SearchPageModule)
                    },
                    {
                        path: 'properties',
                        loadChildren: () => Promise.all(/*! import() | pages-properties-properties-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-properties-properties-module")]).then(__webpack_require__.bind(null, /*! ../pages/properties/properties.module */ "./src/app/pages/properties/properties.module.ts")).then(m => m.PropertiesPageModule)
                    },
                    {
                        path: 'user/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-user-detail-user-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-profile-profile-module~pages-user-detail-user-detail-module"), __webpack_require__.e("pages-user-detail-user-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/user-detail/user-detail.module */ "./src/app/pages/user-detail/user-detail.module.ts")).then(m => m.UserDetailPageModule)
                    },
                    {
                        path: 'pages/:slug',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-page-page-module */ "pages-page-page-module").then(__webpack_require__.bind(null, /*! ../pages/page/page.module */ "./src/app/pages/page/page.module.ts")).then(m => m.PagePageModule)
                    },
                    {
                        path: 'help',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-help-help-module */ "pages-help-help-module").then(__webpack_require__.bind(null, /*! ../pages/help/help.module */ "./src/app/pages/help/help.module.ts")).then(m => m.HelpPageModule)
                    },
                    {
                        path: 'help/pharmacy-duty',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-pharmacy-duty-pharmacy-duty-module */ "pages-pharmacy-duty-pharmacy-duty-module").then(__webpack_require__.bind(null, /*! ../pages/pharmacy-duty/pharmacy-duty.module */ "./src/app/pages/pharmacy-duty/pharmacy-duty.module.ts")).then(m => m.PharmacyDutyPageModule)
                    },
                    {
                        path: 'help/call-taxi',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-call-taxi-call-taxi-module */ "pages-call-taxi-call-taxi-module").then(__webpack_require__.bind(null, /*! ../pages/call-taxi/call-taxi.module */ "./src/app/pages/call-taxi/call-taxi.module.ts")).then(m => m.CallTaxiPageModule)
                    },
                    {
                        path: 'help/bus-time',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-bus-time-bus-time-module */ "pages-bus-time-bus-time-module").then(__webpack_require__.bind(null, /*! ../pages/bus-time/bus-time.module */ "./src/app/pages/bus-time/bus-time.module.ts")).then(m => m.BusTimePageModule)
                    },
                    {
                        path: 'help/emergency',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-emergency-emergency-module */ "pages-emergency-emergency-module").then(__webpack_require__.bind(null, /*! ../pages/emergency/emergency.module */ "./src/app/pages/emergency/emergency.module.ts")).then(m => m.EmergencyPageModule)
                    },
                    {
                        path: 'categories',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-category-list-category-list-module */ "pages-category-list-category-list-module").then(__webpack_require__.bind(null, /*! ../pages/category-list/category-list.module */ "./src/app/pages/category-list/category-list.module.ts")).then(m => m.CategoryListPageModule)
                    },
                    {
                        path: 'places',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-place-list-place-list-module */ "pages-place-list-place-list-module").then(__webpack_require__.bind(null, /*! ../pages/place-list/place-list.module */ "./src/app/pages/place-list/place-list.module.ts")).then(m => m.PlaceListPageModule)
                    },
                    {
                        path: 'places/map',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-map-mapbox-map-mapbox-module */ "pages-map-mapbox-map-mapbox-module").then(__webpack_require__.bind(null, /*! ../pages/map-mapbox/map-mapbox.module */ "./src/app/pages/map-mapbox/map-mapbox.module.ts")).then(m => m.MapMapboxPageModule)
                    },
                    {
                        path: 'places/:id/:slug/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places/:id/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: 'places/:id/:slug',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                ]
            },
            {
                path: 'places',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-place-list-place-list-module */ "pages-place-list-place-list-module").then(__webpack_require__.bind(null, /*! ../pages/place-list/place-list.module */ "./src/app/pages/place-list/place-list.module.ts")).then(m => m.PlaceListPageModule)
                    },
                    {
                        path: 'map',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-map-mapbox-map-mapbox-module */ "pages-map-mapbox-map-mapbox-module").then(__webpack_require__.bind(null, /*! ../pages/map-mapbox/map-mapbox.module */ "./src/app/pages/map-mapbox/map-mapbox.module.ts")).then(m => m.MapMapboxPageModule)
                    },
                    {
                        path: ':id/:slug/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: ':id/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: ':id/:slug',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    }
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-map-mapbox-map-mapbox-module */ "pages-map-mapbox-map-mapbox-module").then(__webpack_require__.bind(null, /*! ../pages/map-mapbox/map-mapbox.module */ "./src/app/pages/map-mapbox/map-mapbox.module.ts")).then(m => m.MapMapboxPageModule)
                    },
                    {
                        path: ':id/:slug/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: ':id/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: ':id/:slug',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    }
                ]
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-post-list-post-list-module */ "pages-post-list-post-list-module").then(__webpack_require__.bind(null, /*! ../pages/post-list/post-list.module */ "./src/app/pages/post-list/post-list.module.ts")).then(m => m.PostListPageModule)
                    },
                    {
                        path: 'places/:id/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places/:id/:slug/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: 'places/:id/:slug',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | pages-post-detail-post-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("pages-post-detail-post-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/post-detail/post-detail.module */ "./src/app/pages/post-detail/post-detail.module.ts")).then(m => m.PostDetailPageModule)
                    },
                    {
                        path: ':id/:slug',
                        loadChildren: () => Promise.all(/*! import() | pages-post-detail-post-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("pages-post-detail-post-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/post-detail/post-detail.module */ "./src/app/pages/post-detail/post-detail.module.ts")).then(m => m.PostDetailPageModule)
                    },
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~pages-profile-profile-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    },
                    {
                        path: 'reviews',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-user-list-review-user-list-module */ "pages-review-user-list-review-user-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-user-list/review-user-list.module */ "./src/app/pages/review-user-list/review-user-list.module.ts")).then(m => m.ReviewUserListPageModule)
                    },
                    {
                        path: 'likes',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-favorite-list-favorite-list-module */ "pages-favorite-list-favorite-list-module").then(__webpack_require__.bind(null, /*! ../pages/favorite-list/favorite-list.module */ "./src/app/pages/favorite-list/favorite-list.module.ts")).then(m => m.FavoriteListPageModule)
                    },
                    {
                        path: 'likes/:id',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: 'likes/:id/reviews',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-place-user-list-place-user-list-module */ "pages-place-user-list-place-user-list-module").then(__webpack_require__.bind(null, /*! ../pages/place-user-list/place-user-list.module */ "./src/app/pages/place-user-list/place-user-list.module.ts")).then(m => m.PlaceUserListPageModule)
                    },
                    {
                        path: 'places/add',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: () => Promise.all(/*! import() | pages-place-add-place-add-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module"), __webpack_require__.e("pages-place-add-place-add-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-add/place-add.module */ "./src/app/pages/place-add/place-add.module.ts")).then(m => m.PlaceAddPageModule)
                    },
                    {
                        path: 'places/:id/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places/:id/:slug/reviews',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(m => m.ReviewListPageModule)
                    },
                    {
                        path: 'places/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    },
                    {
                        path: 'places/:id/:slug',
                        loadChildren: () => Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(m => m.PlaceDetailPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/index/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/index/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
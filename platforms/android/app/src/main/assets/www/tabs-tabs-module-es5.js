(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs mode=\"md\">\r\n    <div class=\"footer\">\r\n        <ion-tab-bar slot=\"bottom\" class=\"bottom-tab-bar\" color=\"danger\">\r\n            <ion-tab-button tab=\"home\" layout=\"icon-center\">\r\n                <ion-icon name=\"home\"></ion-icon>\r\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"places\" layout=\"icon-center\">\r\n                <ion-icon name=\"file-tray\"></ion-icon>\r\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"map\" layout=\"icon-center\">\r\n                <ion-icon name=\"map\"></ion-icon>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"posts\" layout=\"icon-center\">\r\n                <ion-icon name=\"document-text\"></ion-icon>\r\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"profile\" layout=\"icon-center\">\r\n                <ion-icon name=\"person\" *ngIf=\"!user\"></ion-icon>\r\n                <img class=\"profileImg\" *ngIf=\"user && user?.attributes.photo?.url() != null\" [src]=\"user?.attributes.photo?.url()\"/>\r\n                <img class=\"profileImg\" *ngIf=\"user && user?.attributes.photo?.url() === null\" src=\"assets/img/avatar.png\"/>\r\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </div>\r\n</ion-tabs>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service */ "./src/app/services/user-service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
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
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: none;\n}\n.footer ion-tab-bar {\n  position: relative;\n  box-shadow: #26394d 0px 20px 30px -10px;\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  border-radius: 30px;\n  margin: 20px;\n  height: 50px;\n}\n.footer ion-tab-bar .profileImg {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid var(--ion-color-medium);\n}\n.footer ion-tab-button.tab-selected ion-icon {\n  color: var(--ion-color-warning);\n}\n.footer ion-tab-button.tab-selected .profileImg {\n  border: 2px solid var(--ion-color-warning);\n}\n.mapButton {\n  position: absolute;\n  margin-left: calc(50% - 32px);\n  margin-right: calc(50% - 32px);\n  height: 64px;\n  width: 64px;\n  bottom: 15px;\n  border-radius: 50%;\n  background-color: var(--ion-color-warning);\n}\n.mapButton ion-icon {\n  font-size: 2rem;\n  color: var(--ion-color-light);\n}\n.mapButton.tab-selected {\n  background-color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMlRBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUNBQUE7QUNDWjtBREtZO0VBQ0ksK0JBQUE7QUNIaEI7QURNWTtFQUNJLDBDQUFBO0FDSmhCO0FEVUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDUEo7QURTSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQ1BSO0FEVUk7RUFDSSwwQ0FBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgIGlvbi10YWItYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDM4LCA1NywgNzcpIDBweCAyMHB4IDMwcHggLTEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgLnByb2ZpbGVJbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgICAgICYudGFiLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2ZpbGVJbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFwQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDMycHgpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDMycHgpO1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAmLnRhYi1zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgfVxyXG59IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5mb290ZXIgaW9uLXRhYi1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6ICMyNjM5NGQgMHB4IDIwcHggMzBweCAtMTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5mb290ZXIgaW9uLXRhYi1iYXIgLnByb2ZpbGVJbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5mb290ZXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cbi5mb290ZXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5wcm9maWxlSW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4ubWFwQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAzMnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDMycHgpO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBib3R0b206IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuLm1hcEJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubWFwQnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service */ "./src/app/services/user-service.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage(platform, injector) {
        this.platform = platform;
        this.events = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]);
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
        this.events.subscribe('user:login', function () {
            _this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', function () {
            _this.user = null;
        });
    };
    TabsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TabsPage);
    return TabsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard/auth.guard */ "./src/app/services/auth-guard/auth.guard.ts");





var routes = [
    {
        path: 'index',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ../pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
                    },
                    {
                        path: 'address',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-address-address-module */ "pages-address-address-module").then(__webpack_require__.bind(null, /*! ../pages/address/address.module */ "./src/app/pages/address/address.module.ts")).then(function (m) { return m.AddressPageModule; }); }
                    },
                    {
                        path: 'address/add',
                        loadChildren: function () { return Promise.all(/*! import() | pages-add-address-add-address-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module"), __webpack_require__.e("pages-add-address-add-address-module")]).then(__webpack_require__.bind(null, /*! ../pages/add-address/add-address.module */ "./src/app/pages/add-address/add-address.module.ts")).then(function (m) { return m.AddAddressPageModule; }); }
                    },
                    {
                        path: 'search',
                        loadChildren: function () { return Promise.all(/*! import() | pages-search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null, /*! ../pages/search/search.module */ "./src/app/pages/search/search.module.ts")).then(function (m) { return m.SearchPageModule; }); }
                    },
                    {
                        path: 'properties',
                        loadChildren: function () { return Promise.all(/*! import() | pages-properties-properties-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-properties-properties-module")]).then(__webpack_require__.bind(null, /*! ../pages/properties/properties.module */ "./src/app/pages/properties/properties.module.ts")).then(function (m) { return m.PropertiesPageModule; }); }
                    },
                    {
                        path: 'user/:id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-user-detail-user-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-profile-profile-module~pages-user-detail-user-detail-module"), __webpack_require__.e("pages-user-detail-user-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/user-detail/user-detail.module */ "./src/app/pages/user-detail/user-detail.module.ts")).then(function (m) { return m.UserDetailPageModule; }); }
                    },
                    {
                        path: 'pages/:slug',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-page-page-module */ "pages-page-page-module").then(__webpack_require__.bind(null, /*! ../pages/page/page.module */ "./src/app/pages/page/page.module.ts")).then(function (m) { return m.PagePageModule; }); }
                    },
                    {
                        path: 'help',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-help-help-module */ "pages-help-help-module").then(__webpack_require__.bind(null, /*! ../pages/help/help.module */ "./src/app/pages/help/help.module.ts")).then(function (m) { return m.HelpPageModule; }); }
                    },
                    {
                        path: 'help/pharmacy-duty',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-pharmacy-duty-pharmacy-duty-module */ "pages-pharmacy-duty-pharmacy-duty-module").then(__webpack_require__.bind(null, /*! ../pages/pharmacy-duty/pharmacy-duty.module */ "./src/app/pages/pharmacy-duty/pharmacy-duty.module.ts")).then(function (m) { return m.PharmacyDutyPageModule; }); }
                    },
                    {
                        path: 'help/call-taxi',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-call-taxi-call-taxi-module */ "pages-call-taxi-call-taxi-module").then(__webpack_require__.bind(null, /*! ../pages/call-taxi/call-taxi.module */ "./src/app/pages/call-taxi/call-taxi.module.ts")).then(function (m) { return m.CallTaxiPageModule; }); }
                    },
                    {
                        path: 'help/bus-time',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-bus-time-bus-time-module */ "pages-bus-time-bus-time-module").then(__webpack_require__.bind(null, /*! ../pages/bus-time/bus-time.module */ "./src/app/pages/bus-time/bus-time.module.ts")).then(function (m) { return m.BusTimePageModule; }); }
                    },
                    {
                        path: 'help/emergency',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-emergency-emergency-module */ "pages-emergency-emergency-module").then(__webpack_require__.bind(null, /*! ../pages/emergency/emergency.module */ "./src/app/pages/emergency/emergency.module.ts")).then(function (m) { return m.EmergencyPageModule; }); }
                    },
                    {
                        path: 'categories',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-category-list-category-list-module */ "pages-category-list-category-list-module").then(__webpack_require__.bind(null, /*! ../pages/category-list/category-list.module */ "./src/app/pages/category-list/category-list.module.ts")).then(function (m) { return m.CategoryListPageModule; }); }
                    },
                    {
                        path: 'places',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-place-list-place-list-module */ "pages-place-list-place-list-module").then(__webpack_require__.bind(null, /*! ../pages/place-list/place-list.module */ "./src/app/pages/place-list/place-list.module.ts")).then(function (m) { return m.PlaceListPageModule; }); }
                    },
                    {
                        path: 'places/map',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-map-mapbox-map-mapbox-module */ "pages-map-mapbox-map-mapbox-module").then(__webpack_require__.bind(null, /*! ../pages/map-mapbox/map-mapbox.module */ "./src/app/pages/map-mapbox/map-mapbox.module.ts")).then(function (m) { return m.MapMapboxPageModule; }); }
                    },
                    {
                        path: 'places/:id/:slug/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places/:id/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places/:id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: 'places/:id/menu',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-menu-place-menu-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-menu-place-menu-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-menu/place-menu.module */ "./src/app/pages/place-menu/place-menu.module.ts")).then(function (m) { return m.PlaceMenuPageModule; }); }
                    },
                    {
                        path: 'places/:id/menu/:product/edit',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-product-edit-product-edit-module */ "pages-product-edit-product-edit-module").then(__webpack_require__.bind(null, /*! ../pages/product-edit/product-edit.module */ "./src/app/pages/product-edit/product-edit.module.ts")).then(function (m) { return m.ProductEditPageModule; }); }
                    },
                ]
            },
            {
                path: 'places',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-place-list-place-list-module */ "pages-place-list-place-list-module").then(__webpack_require__.bind(null, /*! ../pages/place-list/place-list.module */ "./src/app/pages/place-list/place-list.module.ts")).then(function (m) { return m.PlaceListPageModule; }); }
                    },
                    {
                        path: 'map',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-map-mapbox-map-mapbox-module */ "pages-map-mapbox-map-mapbox-module").then(__webpack_require__.bind(null, /*! ../pages/map-mapbox/map-mapbox.module */ "./src/app/pages/map-mapbox/map-mapbox.module.ts")).then(function (m) { return m.MapMapboxPageModule; }); }
                    },
                    {
                        path: ':id/:slug/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: ':id/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: ':id/menu',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-menu-place-menu-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-menu-place-menu-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-menu/place-menu.module */ "./src/app/pages/place-menu/place-menu.module.ts")).then(function (m) { return m.PlaceMenuPageModule; }); }
                    },
                    {
                        path: ':id/menu/:product/edit',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-product-edit-product-edit-module */ "pages-product-edit-product-edit-module").then(__webpack_require__.bind(null, /*! ../pages/product-edit/product-edit.module */ "./src/app/pages/product-edit/product-edit.module.ts")).then(function (m) { return m.ProductEditPageModule; }); }
                    },
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-map-mapbox-map-mapbox-module */ "pages-map-mapbox-map-mapbox-module").then(__webpack_require__.bind(null, /*! ../pages/map-mapbox/map-mapbox.module */ "./src/app/pages/map-mapbox/map-mapbox.module.ts")).then(function (m) { return m.MapMapboxPageModule; }); }
                    },
                    {
                        path: ':id/:slug/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: ':id/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: ':id/:slug',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    }
                ]
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-post-list-post-list-module */ "pages-post-list-post-list-module").then(__webpack_require__.bind(null, /*! ../pages/post-list/post-list.module */ "./src/app/pages/post-list/post-list.module.ts")).then(function (m) { return m.PostListPageModule; }); }
                    },
                    {
                        path: 'places/:id/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places/:id/:slug/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places/:id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: 'places/:id/:slug',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: ':id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-post-detail-post-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("pages-post-detail-post-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/post-detail/post-detail.module */ "./src/app/pages/post-detail/post-detail.module.ts")).then(function (m) { return m.PostDetailPageModule; }); }
                    },
                    {
                        path: ':id/:slug',
                        loadChildren: function () { return Promise.all(/*! import() | pages-post-detail-post-detail-module */[__webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("pages-post-detail-post-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/post-detail/post-detail.module */ "./src/app/pages/post-detail/post-detail.module.ts")).then(function (m) { return m.PostDetailPageModule; }); }
                    },
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~pages-profile-profile-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; }); }
                    },
                    {
                        path: 'reviews',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-user-list-review-user-list-module */ "pages-review-user-list-review-user-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-user-list/review-user-list.module */ "./src/app/pages/review-user-list/review-user-list.module.ts")).then(function (m) { return m.ReviewUserListPageModule; }); }
                    },
                    {
                        path: 'likes',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-favorite-list-favorite-list-module */ "pages-favorite-list-favorite-list-module").then(__webpack_require__.bind(null, /*! ../pages/favorite-list/favorite-list.module */ "./src/app/pages/favorite-list/favorite-list.module.ts")).then(function (m) { return m.FavoriteListPageModule; }); }
                    },
                    {
                        path: 'likes/:id',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: 'likes/:id/reviews',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-place-user-list-place-user-list-module */ "pages-place-user-list-place-user-list-module").then(__webpack_require__.bind(null, /*! ../pages/place-user-list/place-user-list.module */ "./src/app/pages/place-user-list/place-user-list.module.ts")).then(function (m) { return m.PlaceUserListPageModule; }); }
                    },
                    {
                        path: 'places/add',
                        canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-add-place-add-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module"), __webpack_require__.e("pages-place-add-place-add-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-add/place-add.module */ "./src/app/pages/place-add/place-add.module.ts")).then(function (m) { return m.PlaceAddPageModule; }); }
                    },
                    {
                        path: 'places/:id/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places/:id/:slug/reviews',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-review-list-review-list-module */ "pages-review-list-review-list-module").then(__webpack_require__.bind(null, /*! ../pages/review-list/review-list.module */ "./src/app/pages/review-list/review-list.module.ts")).then(function (m) { return m.ReviewListPageModule; }); }
                    },
                    {
                        path: 'places/:id',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    },
                    {
                        path: 'places/:id/menu',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-menu-place-menu-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-menu-place-menu-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-menu/place-menu.module */ "./src/app/pages/place-menu/place-menu.module.ts")).then(function (m) { return m.PlaceMenuPageModule; }); }
                    },
                    {
                        path: 'places/:id/menu/:product/edit',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-product-edit-product-edit-module */ "pages-product-edit-product-edit-module").then(__webpack_require__.bind(null, /*! ../pages/product-edit/product-edit.module */ "./src/app/pages/product-edit/product-edit.module.ts")).then(function (m) { return m.ProductEditPageModule; }); }
                    },
                    {
                        path: 'places/:id/:slug',
                        loadChildren: function () { return Promise.all(/*! import() | pages-place-detail-place-detail-module */[__webpack_require__.e("default~pages-add-address-add-address-module~pages-place-add-place-add-module~pages-place-detail-pla~98be4056"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-place-detail-place-detail-module~pages-place-menu-place-menu-module"), __webpack_require__.e("pages-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ../pages/place-detail/place-detail.module */ "./src/app/pages/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
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
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map
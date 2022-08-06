(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/@ionic-native/background-mode/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/background-mode/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BackgroundMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundMode", function() { return BackgroundMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




var BackgroundMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BackgroundMode, _super);
    function BackgroundMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundMode.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", { "sync": true }, arguments); };
    BackgroundMode.prototype.disable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disable", { "sync": true }, arguments); };
    BackgroundMode.prototype.setEnabled = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.fireEvent = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fireEvent", { "sync": true }, arguments);
    };
    BackgroundMode.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.isActive = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isActive", { "sync": true }, arguments); };
    BackgroundMode.prototype.setDefaults = function (overrides) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.configure = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "configure", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.on = function (event) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    BackgroundMode.prototype.un = function (event, callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "un", {}, arguments); };
    BackgroundMode.prototype.moveToBackground = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToBackground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableWebViewOptimizations = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableWebViewOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.moveToForeground = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToForeground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.overrideBackButton = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "overrideBackButton", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.excludeFromTaskList = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "excludeFromTaskList", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.isScreenOff = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isScreenOff", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.wakeUp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "wakeUp", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.unlock = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unlock", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableBatteryOptimizations = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableBatteryOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.pluginName = "BackgroundMode";
    BackgroundMode.plugin = "cordova-plugin-background-mode";
    BackgroundMode.pluginRef = "cordova.plugins.backgroundMode";
    BackgroundMode.repo = "https://github.com/katzer/cordova-plugin-background-mode";
    BackgroundMode.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];
    BackgroundMode.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return BackgroundMode;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtbW9kZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZFRSxrQ0FBaUI7Ozs7SUFRbkQsK0JBQU07SUFTTixnQ0FBTztJQWNQLG1DQUFVLGFBQUMsTUFBZTtJQWExQixrQ0FBUyxhQUFDLEtBQWE7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7O0lBV3ZDLGtDQUFTO0lBV1QsaUNBQVE7SUFhUixvQ0FBVyxhQUFDLFNBQXVDO0lBV25ELGtDQUFTLGFBQUMsT0FBcUM7SUFhL0MsMkJBQUUsYUFBQyxLQUFhO0lBV2hCLDJCQUFFLGFBQUMsS0FBYSxFQUFFLFFBQWtDO0lBV3BELHlDQUFnQjtJQVNoQixvREFBMkI7SUFTM0IseUNBQWdCO0lBU2hCLDJDQUFrQjtJQVNsQiw0Q0FBbUI7SUFVbkIsb0NBQVcsYUFBQyxFQUEyQjtJQVN2QywrQkFBTTtJQVNOLCtCQUFNO0lBU04sb0RBQTJCOzs7Ozs7O2dCQXZNNUIsVUFBVTs7eUJBOUVYO0VBK0VvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb25zIGl0ZW1zIHRoYXQgY2FuIGJlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBiYWNrZ3JvdW5kIHRhc2tcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiBiYWNrZ3JvdW5kIHRhc2tcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBsb29rIGZvciBgPGljb24gbmFtZT4ucG5nYCBpbiBwbGF0Zm9ybXMvYW5kcm9pZC9yZXMvZHJhd2FibGV8bWlwbWFwXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIG5vdGlmaWNhdGlvbiBjaXJjbGVcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBhcHAgd2lsbCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwaW5nIG9uIHRoZSBub3RpZmljYXRpb24uIElmIGZhbHNlLCBwbHVnaW4gd29uJ3QgY29tZSB0byBmb3JlZ3JvdW5kIHdoZW4gdGFwcGVkLlxuICAgKi9cbiAgcmVzdW1lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBzZXQgdG8gZmFsc2UgbWFrZXMgdGhlIG5vdGlmaWNhdGlvbnMgdmlzaWJsZSBvbiBsb2NrIHNjcmVlbiAoQW5kcm9pZCA1LjArKVxuICAgKi9cbiAgaGlkZGVuPzogYm9vbGVhbjtcblxuICAvKiogQmlnIHRleHQgKi9cbiAgYmlnVGV4dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRoYXQgc2Nyb2xscyBpdHNlbGYgb24gc3RhdHVzYmFyXG4gICAqL1xuICB0aWNrZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlmIHRydWUgcGx1Z2luIHdpbGwgbm90IGRpc3BsYXkgYSBub3RpZmljYXRpb24uIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqL1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhY2tncm91bmQgTW9kZVxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBwcmV2ZW50IHRoZSBhcHAgZnJvbSBnb2luZyB0byBzbGVlcCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZS4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc2l0OiBodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYWNrZ3JvdW5kTW9kZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFja2dyb3VuZC1tb2RlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kTW9kZTogQmFja2dyb3VuZE1vZGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYmFja2dyb3VuZE1vZGUuZW5hYmxlKCk7XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFja2dyb3VuZE1vZGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLW1vZGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFja2dyb3VuZE1vZGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLW1vZGUnLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZE1vZGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGJhY2tncm91bmQgbW9kZS5cbiAgICogT25jZSBjYWxsZWQsIHByZXZlbnRzIHRoZSBhcHAgZnJvbSBiZWluZyBwYXVzZWQgd2hpbGUgaW4gYmFja2dyb3VuZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBlbmFibGUoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBiYWNrZ3JvdW5kIG1vZGUuXG4gICAqIE9uY2UgdGhlIGJhY2tncm91bmQgbW9kZSBoYXMgYmVlbiBkaXNhYmxlZCwgdGhlIGFwcCB3aWxsIGJlIHBhdXNlZCB3aGVuIGluIGJhY2tncm91bmQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGJhY2tncm91bmQgbW9kZS5cbiAgICpcbiAgICogQHBhcmFtIGVuYWJsZSB7Ym9vbGVhbn0gVGhlIHN0YXR1cyB0byBzZXQgZm9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldEVuYWJsZWQoZW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGaXJlIGV2ZW50IHdpdGggZ2l2ZW4gYXJndW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50J3MgbmFtZS5cbiAgICogQHBhcmFtIGFyZ3Mge2FycmF5fSBUaGUgY2FsbGJhY2sncyBhcmd1bWVudHMuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBmaXJlRXZlbnQoZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYmFja2dyb3VuZCBtb2RlIGlzIGVuYWJsZWQgb3Igbm90LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJhY2tncm91bmQgbW9kZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSBpbmZvcm1hdGlvbiBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGFjdGl2ZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgYWN0aXZlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGUgdGhlIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBBbmRyb2lkIHBsYXRmb3JtLlxuICAgKiBAcGFyYW0gb3ZlcnJpZGVzIHtCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb259IERpY3Qgb2Ygb3B0aW9ucyB0byBiZSBvdmVycmlkZGVuLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIHNldERlZmF1bHRzKG92ZXJyaWRlcz86IEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogTW9kaWZ5IHRoZSBkaXNwbGF5ZWQgaW5mb3JtYXRpb24uXG4gICAqIEF2YWlsYWJsZSBvbmx5IGZvciBBbmRyb2lkIHBsYXRmb3JtLlxuICAgKiBAcGFyYW0ge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gW29wdGlvbnNdIEFueSBvcHRpb25zIHlvdSB3YW50IHRvIHVwZGF0ZS4gU2VlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgY29uZmlndXJlKG9wdGlvbnM/OiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZvciBnaXZlbiBldmVudC5cbiAgICogPiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiBmb3IgZXZlbnRzIHRoYXQgdGhlIHBsdWdpbiBmaXJlcy4gQXZhaWxhYmxlIGV2ZW50cyBhcmUgYGVuYWJsZWAsIGBkaXNhYmxlYCwgYGFjdGl2YXRlYCwgYGRlYWN0aXZhdGVgIGFuZCBgZmFpbHVyZWAuXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IFRoZSBmdW5jdGlvbiB0byBiZSBleGVjIGFzIGNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgYWxsb3dzIHRvIHByb2dyYW1tYXRpY2FsbHkgbW92ZSBmcm9tIGZvcmVncm91bmQgdG8gYmFja2dyb3VuZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG1vdmVUb0JhY2tncm91bmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBFbmFibGUgR1BTLXRyYWNraW5nIGluIGJhY2tncm91bmQgKEFuZHJvaWQpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZGlzYWJsZVdlYlZpZXdPcHRpbWl6YXRpb25zKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gYmFja2dyb3VuZCB0byBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbW92ZVRvRm9yZWdyb3VuZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIHRvIGdvIHRvIGJhY2tncm91bmQgaW5zdGVhZCBvZiBjbG9zaW5nIHRoZSBhcHAuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBvdmVycmlkZUJhY2tCdXR0b24oKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBFeGNsdWRlIHRoZSBhcHAgZnJvbSB0aGUgcmVjZW50IHRhc2sgbGlzdC4gV29ya3Mgb24gQW5kcm9pZCA1LjArLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZXhjbHVkZUZyb21UYXNrTGlzdCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBzY3JlZW4gaXMgb2ZmLlxuICAgKiBAcGFyYW0gZm4ge2Z1bmN0aW9ufSBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2l0aCBib29sZWFuIGFyZy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaXNTY3JlZW5PZmYoZm46IChhcmcwOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUdXJuIHNjcmVlbiBvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgd2FrZVVwKCk6IHZvaWQge31cblxuICAvKipcbiAgICogVHVybiBzY3JlZW4gb24gYW5kIHNob3cgYXBwIGV2ZW4gbG9ja2VkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB1bmxvY2soKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBiYXR0ZXJ5IG9wdGltYXphdGlvbiBtb2RlIGZvciB0aGUgYXBwIChhbmRyb2lkIG9ubHkpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlQmF0dGVyeU9wdGltaXphdGlvbnMoKTogdm9pZCB7fVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ion-content #container scrollEvents=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\r\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\r\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\r\n  </empty-view>\r\n  <ion-grid fixed class=\"p96 ion-no-padding\">\r\n\r\n    <section *ngIf=\"isContentViewVisible\">\r\n      <!--<ion-grid>\r\n        <div>\r\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable\">\r\n            <ion-col size-xs=\"3\" size-sm=\"3\" size-md=\"2\" *ngFor=\"let story of stories; let i = index\" class=\"cacaca\">\r\n              <div class=\"story\" text-center (click)=\"openStoryModal(story.storyImage?.url())\">\r\n                <img [src]=\"story.storyImage?.url()\" />\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-grid>-->\r\n      <!-- Top Slide List -->\r\n      <div>\r\n        <ion-slides pager=\"true\" (ionSlidesDidLoad)=\"onSlidesTopDidLoad($event)\"\r\n          (ionSlideWillChange)=\"onSlidesTopWillChange($event)\" [options]=\"slideOpts\">\r\n          <ion-slide *ngFor=\"let slide of slides\" (click)=\"onSlideTouched(slide)\">\r\n            <div class=\"slide-img fade-in\" defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"slide.image?.url()\"\r\n              [scrollObservable]=\"loadAndScroll\">\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n      <!-- Category List -->\r\n      <ion-grid class=\"ion-margin-bottom\">\r\n        <ion-row>\r\n          <ion-col size-xs=\"4\" size-sm=\"3\" size-md=\"3\" *ngFor=\"let category of categories;\">\r\n            <ion-card mode=\"ios\" button class=\"margin-zero\" color=\"white\" [routerLink]=\"['./places']\"\r\n              [queryParams]=\"{ category: category.id }\">\r\n              <img defaultImage=\"./assets/img/placeholder.png\" [scrollObservable]=\"loadAndScroll\"\r\n                [lazyLoad]=\"category.image?.url()\" />\r\n              <ion-card-content class=\"ion-text-center ion-text-nowrap\">\r\n                <p class=\"text-large bold ellipsis link\">{{ category.title | translate }}</p>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <section>\r\n        <div class=\"ion-margin-bottom\">\r\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\r\n            <ion-col size-xs=\"8\" size-sm=\"6\" size-md=\"3\" *ngFor=\"let banner of banners\">\r\n              <ion-card class=\"ion-no-margin ion-margin-bottom\" mode=\"ios\" (click)=\"onSlideTouched(banner)\">\r\n                <img [src]=\"banner.image._url\" />\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </section>\r\n      <!-- Featured Places -->\r\n      <section *ngIf=\"featuredPlaces.length\">\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\" class=\"ion-text-start\">\r\n            <ion-text color=\"medium\">\r\n              <span class=\"text-normal bold padding-small\">\r\n                {{ 'FEATURED' | translate }}\r\n              </span>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-end\">\r\n            <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\r\n              [queryParams]=\"{featured:'1'}\" [routerLink]=\"['../places']\">\r\n              <span class=\"link text-normal\">\r\n                {{ 'VIEW_ALL' | translate }}\r\n              </span>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"ion-margin-bottom\">\r\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start ion-padding-end\">\r\n            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"4\" *ngFor=\"let place of featuredPlaces\">\r\n              <app-place-card [routerLink]=\"['../places/' + place.id]\" [place]=\"place\"\r\n                [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n              </app-place-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </section>\r\n      <!-- New Places -->\r\n      <section *ngIf=\"newPlaces.length\">\r\n        <ion-row class=\"ion-padding-start ion-align-items-center\">\r\n          <ion-col size=\"6\" class=\"ion-text-start\">\r\n            <ion-text color=\"medium\">\r\n              <span class=\"text-normal bold padding-small\">\r\n                {{ 'NEW' | translate }}\r\n              </span>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-end\">\r\n            <ion-button class=\"ion-margin-bottom ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\r\n              [routerLink]=\"['../places']\">\r\n              <span class=\"link text-normal\">\r\n                {{ 'VIEW_ALL' | translate }}\r\n              </span>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"ion-margin-bottom\">\r\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start ion-padding-end\">\r\n            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"4\" *ngFor=\"let place of newPlaces\">\r\n              <app-place-card [routerLink]=\"['../places/' + place.id]\" [place]=\"place\"\r\n                [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n              </app-place-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </section>\r\n      <!-- Nearby Places -->\r\n      <section *ngIf=\"nearbyPlaces.length\">\r\n        <ion-row class=\"ion-padding-start ion-align-items-center\">\r\n          <ion-col size=\"6\" class=\"ion-text-start\">\r\n            <ion-text color=\"medium\">\r\n              <span class=\"text-normal bold padding-small\">\r\n                {{ 'NEARBY' | translate }}\r\n              </span>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-end\">\r\n            <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\r\n              [queryParams]=\"{nearby:'1'}\" [routerLink]=\"['../places']\">\r\n              <span class=\"link text-normal\">\r\n                {{ 'VIEW_ALL' | translate }}\r\n              </span>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"ion-margin-bottom\">\r\n          <ion-row class=\"ion-padding-start ion-padding-end scrollable\" (scroll)=\"onScroll()\">\r\n            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"4\" *ngFor=\"let place of nearbyPlaces\">\r\n              <app-place-card [routerLink]=\"['../places/' + place.id]\" [place]=\"place\"\r\n                [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\r\n              </app-place-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </section>\r\n    </section>\r\n    <section *ngIf=\"isLoadingViewVisible\">\r\n      <div>\r\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n          [theme]=\"{ width: '100%', height: '250px', 'border-radius': '4px' }\">\r\n        </ngx-skeleton-loader>\r\n      </div>\r\n      <ion-row nowrap>\r\n        <ion-col size-xs=\"4\" size-sm=\"6\" size-md=\"6\" size-lg=\"2\" *ngFor=\"let item of skeletonArray\">\r\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n            [theme]=\"{ width: '100%', height: '75px', 'border-radius': '4px' }\">\r\n          </ngx-skeleton-loader>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row nowrap>\r\n        <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let item of skeletonArray\">\r\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n            [theme]=\"{ width: '100%', height: '150px', 'border-radius': '4px' }\">\r\n          </ngx-skeleton-loader>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row nowrap>\r\n        <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let item of skeletonArray\">\r\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n            [theme]=\"{ width: '100%', height: '150px', 'border-radius': '4px' }\">\r\n          </ngx-skeleton-loader>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row nowrap>\r\n        <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let item of skeletonArray\">\r\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n            [theme]=\"{ width: '100%', height: '150px', 'border-radius': '4px' }\">\r\n          </ngx-skeleton-loader>\r\n        </ion-col>\r\n      </ion-row>\r\n    </section>\r\n    <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\r\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/story-detail/story-detail.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/story-detail/story-detail.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"dsf\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onDismiss()\" color=\"light\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </div>\r\n  <div class=\"vertical-center\">\r\n    <div class=\"center\">\r\n      <!--<div class=\"storyLeft\" (click)=\"goLeft()\"></div>-->\r\n      <img [src]=\"image\" />\r\n      <!--<div class=\"storyRight\" (click)=\"goRight()\"></div>-->\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/app/pages/home/home.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts");
/* harmony import */ var _story_detail_story_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../story-detail/story-detail.module */ "./src/app/pages/story-detail/story-detail.module.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");











let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_7__["SignInPageModule"],
            _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_8__["SignUpPageModule"],
            _story_detail_story_detail_module__WEBPACK_IMPORTED_MODULE_9__["StoryDetailPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                }
            ])
        ],
        providers: [
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundMode"]
        ],
        declarations: [_home__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.scss":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\nion-content {\n  --background: var(--ion-color-light-tint);\n}\n\nion-content .cacaca .story {\n  position: relative;\n  display: inline-block;\n  color: #999;\n  margin-left: 10px;\n  padding: 2px;\n}\n\nion-content .cacaca .story.unseen {\n  color: #000;\n}\n\nion-content .cacaca .story.unseen img {\n  box-shadow: 0px 0px 0px 2px #f00;\n}\n\nion-content .cacaca .story img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  box-shadow: 0px 0px 0px 2px #999;\n}\n\nion-content .cacaca .story span {\n  max-width: 55px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\napp-place-card {\n  --image-height: 150px;\n  --content-padding: 8px;\n}\n\n.scrollable app-place-card {\n  --image-width: 100%;\n  --image-height: 130px;\n  --content-padding: 6px;\n}\n\nion-card ion-card-content {\n  padding: 4px;\n}\n\nion-slides {\n  padding: 10px;\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-primary);\n}\n\nion-slides ion-slide img {\n  display: block;\n  width: 100%;\n}\n\nion-slides .slide-img {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  width: 100%;\n  height: 200px;\n}\n\nion-searchbar {\n  --background: rgba(var(--ion-color-primary-rgb,0,0,0),0.07);\n}\n\nion-row[nowrap] {\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 992px) {\n  .text-small {\n    font-size: 14px !important;\n  }\n\n  ion-slides .slide-img {\n    height: 350px;\n  }\n\n  .scrollable {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    white-space: normal;\n    flex-wrap: wrap;\n  }\n  .scrollable app-place-card {\n    display: block;\n    margin: 0;\n    width: 100%;\n    --image-width: 100%;\n    --image-height: 200px;\n    --content-padding: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRTtJQUNFLFlBQUE7RUNFSjtBQUNGOztBRENBO0VBQ0kseUNBQUE7QUNDSjs7QURFUTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQVo7O0FEQ1k7RUFDSSxXQUFBO0FDQ2hCOztBRENnQjtFQUNJLGdDQUFBO0FDQ3BCOztBREdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNEaEI7O0FESVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGaEI7O0FEUUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FDTEo7O0FEU0k7RUFFSSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7QUNSUjs7QURhSTtFQUNJLFlBQUE7QUNWUjs7QURjQTtFQUVJLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLG9EQUFBO0FDWko7O0FEY0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ1pSOztBRGVJO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ2JSOztBRGlCQTtFQUNJLDJEQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZ0JBQUE7QUNkSjs7QURpQkE7RUFFSTtJQUNJLDBCQUFBO0VDZk47O0VEbUJNO0lBQ0ksYUFBQTtFQ2hCVjs7RURvQkU7SUFFSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VDbEJOO0VEb0JNO0lBQ0ksY0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBRUEsbUJBQUE7SUFDQSxxQkFBQTtJQUVBLHNCQUFBO0VDcEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluSGVhZGVyIHtcclxuICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICAgIC5jYWNhY2Ege1xyXG5cclxuICAgICAgICAuc3Rvcnkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgICYudW5zZWVuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNmMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggIzk5OTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFwcC1wbGFjZS1jYXJkIHtcclxuICAgIC0taW1hZ2UtaGVpZ2h0OiAxNTBweDtcclxuICAgIC0tY29udGVudC1wYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlIHtcclxuICAgIGFwcC1wbGFjZS1jYXJkIHtcclxuXHJcbiAgICAgICAgLS1pbWFnZS13aWR0aDogMTAwJTtcclxuICAgICAgICAtLWltYWdlLWhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgIC0tY29udGVudC1wYWRkaW5nOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcblxyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgaW9uLXNsaWRlIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlLWltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwwLDAsMCksMC4wNyk7XHJcbn1cclxuXHJcbmlvbi1yb3dbbm93cmFwXSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gICAgLnRleHQtc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICAgIC5zbGlkZS1pbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2Nyb2xsYWJsZSB7XHJcblxyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIGFwcC1wbGFjZS1jYXJkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAtLWltYWdlLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtLWltYWdlLWhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAtLWNvbnRlbnQtcGFkZGluZzogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsIi5tYWluSGVhZGVyIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cbmlvbi1jb250ZW50IC5jYWNhY2EgLnN0b3J5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuaW9uLWNvbnRlbnQgLmNhY2FjYSAuc3RvcnkudW5zZWVuIHtcbiAgY29sb3I6ICMwMDA7XG59XG5pb24tY29udGVudCAuY2FjYWNhIC5zdG9yeS51bnNlZW4gaW1nIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNmMDA7XG59XG5pb24tY29udGVudCAuY2FjYWNhIC5zdG9yeSBpbWcge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjOTk5O1xufVxuaW9uLWNvbnRlbnQgLmNhY2FjYSAuc3Rvcnkgc3BhbiB7XG4gIG1heC13aWR0aDogNTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuYXBwLXBsYWNlLWNhcmQge1xuICAtLWltYWdlLWhlaWdodDogMTUwcHg7XG4gIC0tY29udGVudC1wYWRkaW5nOiA4cHg7XG59XG5cbi5zY3JvbGxhYmxlIGFwcC1wbGFjZS1jYXJkIHtcbiAgLS1pbWFnZS13aWR0aDogMTAwJTtcbiAgLS1pbWFnZS1oZWlnaHQ6IDEzMHB4O1xuICAtLWNvbnRlbnQtcGFkZGluZzogNnB4O1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDAsMCwwKSwwLjA3KTtcbn1cblxuaW9uLXJvd1tub3dyYXBdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGV4dC1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tc2xpZGVzIC5zbGlkZS1pbWcge1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cblxuICAuc2Nyb2xsYWJsZSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuc2Nyb2xsYWJsZSBhcHAtcGxhY2UtY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0taW1hZ2Utd2lkdGg6IDEwMCU7XG4gICAgLS1pbWFnZS1oZWlnaHQ6IDIwMHB4O1xuICAgIC0tY29udGVudC1wYWRkaW5nOiA4cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.ts":
/*!************************************!*\
  !*** ./src/app/pages/home/home.ts ***!
  \************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/slide */ "./src/app/services/slide.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var src_app_services_installation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/installation */ "./src/app/services/installation.ts");
/* harmony import */ var src_app_services_window_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/window-ref */ "./src/app/services/window-ref.ts");
/* harmony import */ var _story_detail_story_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../story-detail/story-detail */ "./src/app/pages/story-detail/story-detail.ts");
/* harmony import */ var src_app_services_story__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/story */ "./src/app/services/story.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! onesignal-cordova-plugin */ "./node_modules/onesignal-cordova-plugin/www/OneSignalPlugin.js");
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/local-storage */ "./src/app/services/local-storage.ts");
/* harmony import */ var src_app_services_product__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/product */ "./src/app/services/product.ts");




















let HomePage = class HomePage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, geolocationService, installationService, windowRef, placeService, backgroundMode, backgroundGeolocation, categoryService, slideService, storyService, productService, storage) {
        super(injector);
        this.geolocationService = geolocationService;
        this.installationService = installationService;
        this.windowRef = windowRef;
        this.placeService = placeService;
        this.backgroundMode = backgroundMode;
        this.backgroundGeolocation = backgroundGeolocation;
        this.categoryService = categoryService;
        this.slideService = slideService;
        this.storyService = storyService;
        this.productService = productService;
        this.storage = storage;
        this.lPlaces = [];
        this.arrayTitle = [];
        this.langid = 0;
        this.slides = [];
        this.stories = [];
        this.banners = [];
        this.properties = [];
        this.likePlaces = [];
        this.featuredPlaces = [];
        this.newPlaces = [];
        this.randomPlaces = [];
        this.nearbyPlaces = [];
        this.nearbyProducts = [];
        this.momentPlaces = [];
        this.categories = [];
        this.randomParams = {};
        this.slideOpts = {};
        this.skeletonArray = Array(6);
    }
    enableMenuSwipe() {
        return false;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const title = 'Kepche';
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    momentsPlace() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                if (coords) {
                    this.location = coords;
                    this.updateInstallation();
                    this.momentPlaces = yield this.placeService.loadMoment({
                        location: this.location
                    });
                    console.log('askvkjasdf', this.momentPlaces);
                }
            }
            catch (err) {
                console.warn(err);
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__["User"].getCurrent();
            this.events.subscribe('user:login', () => {
                this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__["User"].getCurrent();
            });
            this.events.subscribe('user:loggedOut', () => {
                this.user = null;
            });
            this.setupObservables();
            this.setupSliders();
            yield this.showLoadingView({ showOverlay: false });
            this.loadData();
            this.loadSlides();
            this.momentsPlace();
            this.loadNearbyPlaces();
            this.loadNearbyProducts();
            this.loadHomeBanner();
            if (this.user) {
                this.loadLikePlaces();
                this.properties;
            }
        });
    }
    onReload(event = {}) {
        this.refresher = event.target;
        this.showLoadingView({ showOverlay: false });
        this.loadData();
        this.loadNearbyPlaces();
        this.loadHomeBanner();
        if (this.user) {
            this.loadLikePlaces();
            this.properties;
        }
    }
    onScroll() {
        this.horizontalScroll.next();
    }
    onSlidesTopDidLoad() {
        this.slidesTopEvent.next();
    }
    onSlidesTopWillChange() {
        this.slidesTopEvent.next();
    }
    onContentLoaded() {
        this.contentLoaded.next();
    }
    setupObservables() {
        this.slidesTopEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.horizontalScroll = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.container.ionScroll, this.horizontalScroll, this.contentLoaded, this.slidesTopEvent);
    }
    setupSliders() {
        this.slideOpts = {
            autoplay: {
                delay: 7000
            },
            spaceBetween: 16,
            zoom: false,
            touchStartPreventDefault: false
        };
    }
    openStoryModal(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _story_detail_story_detail__WEBPACK_IMPORTED_MODULE_12__["StoryDetailPage"],
                componentProps: { image: event },
            });
            modal.present();
            setTimeout(() => {
                modal.dismiss();
            }, 9000);
            yield modal.present();
            yield this.dismissLoadingView();
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const data = yield parse__WEBPACK_IMPORTED_MODULE_4__["Cloud"].run('getHomePageData');
                const category = yield this.categoryService.load();
                console.log("data2", this.slides);
                this.newPlaces = data.newPlaces;
                this.featuredPlaces = data.featuredPlaces;
                this.categories = category;
                console.log(data);
                this.onRefreshComplete();
                this.showContentView();
                this.onContentLoaded();
            }
            catch (error) {
                this.showErrorView();
                this.onRefreshComplete();
                this.translate.get('ERROR_NETWORK')
                    .subscribe(str => this.showToast(str));
                if (error.code === 209) {
                    this.events.publish('user:logout');
                }
            }
        });
    }
    loadSlides() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updateInstallation();
            this.slides = yield this.slideService.load({
                location: 'slider'
            });
        });
    }
    loadLikePlaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.likePlaces = [];
                const places = yield this.placeService.loadStories();
                for (let place of places) {
                    this.likePlaces.push(place);
                }
                if (this.likePlaces.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onContentLoaded();
                this.onRefreshComplete(places);
            }
            catch (error) {
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
                this.showContentView();
                this.onRefreshComplete();
            }
        });
    }
    loadStories(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.stories = yield this.storyService.load({
                place: event
            });
        });
    }
    loadHomeBanner() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updateInstallation();
            this.banners = yield this.slideService.load({
                location: 'home'
            });
            console.log('banner', this.stories);
        });
    }
    loadMoreRandomPlaces() {
        parse__WEBPACK_IMPORTED_MODULE_4__["Cloud"].run('getRandomPlaces').then((places) => {
            for (const place of places) {
                this.randomPlaces.push(place);
            }
            this.onRefreshComplete();
        }, () => {
            this.onRefreshComplete();
            this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
        });
    }
    backgroundGeo() {
        const config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true,
            stopOnTerminate: false,
        };
        this.backgroundGeolocation.configure(config)
            .then(() => {
            this.backgroundGeolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["BackgroundGeolocationEvents"].location).subscribe((location) => {
                console.log(location);
                this.backgroundGeolocation.finish();
            });
        });
        // start recording location
        this.backgroundGeolocation.start();
        this.backgroundMode.enable();
        this.backgroundMode.on("activate").subscribe(() => {
            this.loadNearbyPlaces();
            if (this.nearbyPlaces.length > 0) {
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_17___default.a.postNotification('{"app_id":"235b471a-95af-4c74-aee3-be05bb96348b","contents"=>{en:"Hello !",tr:"Yakınınızda ' + this.nearbyPlaces.length + ' tane mekan var!",included_segments: ["Test"]}}');
            }
        });
        console.log("denemeee", this.backgroundGeolocation);
        console.log("asdads", this.backgroundGeolocation.getCurrentLocation());
    }
    updateInstallation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const objWindow = this.windowRef.nativeWindow;
                if (objWindow.ParsePushPlugin) {
                    const location = this.geolocationService.toParseGeoPoint(this.location);
                    const id = yield this.installationService.getId();
                    const res = yield this.installationService.save(id, { location });
                    console.log('Installation updated', res);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loadNearbyPlaces() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                if (coords) {
                    this.location = coords;
                    this.updateInstallation();
                    this.nearbyPlaces = yield this.placeService.load({
                        location: this.location,
                        limit: 12
                    });
                }
            }
            catch (err) {
                console.warn(err);
            }
        });
    }
    loadNearbyProducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                if (coords) {
                    this.location = coords;
                    this.updateInstallation();
                    this.nearbyProducts = yield this.productService.load({
                        location: this.location,
                        limit: 12
                    });
                    console.log('yakındaki yemekler', this.nearbyPlaces);
                }
            }
            catch (err) {
                console.warn(err);
            }
        });
    }
    onLoadMore(event = {}) {
        this.infiniteScroll = event.target;
        this.randomParams.page++;
        this.loadMoreRandomPlaces();
    }
    onPlaceTouched(place) {
        this.navigateToRelative('places/' + place.id);
    }
    onCategoryTouched(category) {
        this.navigateToRelative('places', { category: category.id });
    }
    onSlideTouched(slide) {
        if (slide.url && slide.type === 'url') {
            this.openUrl(slide.url);
        }
        else if (slide.place && slide.type === 'place') {
            this.onPlaceTouched(slide.place);
        }
        else if (slide.category && slide.type === 'category') {
            this.onCategoryTouched(slide.category);
        }
        else {
            // no match...
        }
    }
    onStoryTouched() {
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"] },
    { type: src_app_services_installation__WEBPACK_IMPORTED_MODULE_10__["Installation"] },
    { type: src_app_services_window_ref__WEBPACK_IMPORTED_MODULE_11__["WindowRef"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_7__["Place"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_16__["BackgroundMode"] },
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["BackgroundGeolocation"] },
    { type: _services_categories__WEBPACK_IMPORTED_MODULE_6__["Category"] },
    { type: _services_slide__WEBPACK_IMPORTED_MODULE_5__["Slide"] },
    { type: src_app_services_story__WEBPACK_IMPORTED_MODULE_13__["Story"] },
    { type: src_app_services_product__WEBPACK_IMPORTED_MODULE_19__["Product"] },
    { type: src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_18__["LocalStorage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], HomePage.prototype, "container", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home-page',
        template: __webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.html"),
        styles: [__webpack_require__(/*! ./home.scss */ "./src/app/pages/home/home.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"],
        src_app_services_installation__WEBPACK_IMPORTED_MODULE_10__["Installation"],
        src_app_services_window_ref__WEBPACK_IMPORTED_MODULE_11__["WindowRef"],
        _services_place_service__WEBPACK_IMPORTED_MODULE_7__["Place"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_16__["BackgroundMode"],
        _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["BackgroundGeolocation"],
        _services_categories__WEBPACK_IMPORTED_MODULE_6__["Category"],
        _services_slide__WEBPACK_IMPORTED_MODULE_5__["Slide"],
        src_app_services_story__WEBPACK_IMPORTED_MODULE_13__["Story"],
        src_app_services_product__WEBPACK_IMPORTED_MODULE_19__["Product"],
        src_app_services_local_storage__WEBPACK_IMPORTED_MODULE_18__["LocalStorage"]])
], HomePage);



/***/ }),

/***/ "./src/app/pages/story-detail/story-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/story-detail/story-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: StoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryDetailPageModule", function() { return StoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgot-password/forgot-password.module */ "./src/app/pages/forgot-password/forgot-password.module.ts");
/* harmony import */ var _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts");
/* harmony import */ var _story_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story-detail */ "./src/app/pages/story-detail/story-detail.ts");








let StoryDetailPageModule = class StoryDetailPageModule {
};
StoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _story_detail__WEBPACK_IMPORTED_MODULE_6__["StoryDetailPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageModule"],
            _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageModule"],
        ],
        entryComponents: [_story_detail__WEBPACK_IMPORTED_MODULE_6__["StoryDetailPage"]]
    })
], StoryDetailPageModule);



/***/ }),

/***/ "./src/app/pages/story-detail/story-detail.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/story-detail/story-detail.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dsf {\n  height: 64px;\n  background: linear-gradient(0deg, black 100%, rgba(0, 0, 0, 0.3) 10%);\n  position: fixed;\n  line-height: 64px;\n  width: 100%;\n  float: right;\n}\n.dsf ion-button {\n  height: 64px;\n  line-height: 64px;\n}\n.vertical-center {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  vertical-align: middle !important;\n  width: 100%;\n  height: 100%;\n}\n.vertical-center .center {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  vertical-align: middle !important;\n  width: 100%;\n  height: 100%;\n}\n.vertical-center .center .storyLeft {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  left: 0;\n  background-color: #f00;\n}\n.vertical-center .center .storyRight {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  right: 0;\n  background-color: aqua;\n}\n.vertical-center .center img {\n  vertical-align: middle;\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcnktZGV0YWlsL0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xcc3RvcnktZGV0YWlsXFxzdG9yeS1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcnktZGV0YWlsL3N0b3J5LWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDRVI7QURDQTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0ksd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dSO0FERlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FDSVo7QURGUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUNJWjtBREZRO0VBQ0ksc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yeS1kZXRhaWwvc3RvcnktZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHNmIHtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDEpIDEwMCUsIHJnYmEoMCwwLDAsMC4zMCkgMTAlKTs7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG59XHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5jZW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAuc3RvcnlMZWZ0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnlSaWdodCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmRzZiB7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrIDEwMCUsIHJnYmEoMCwgMCwgMCwgMC4zKSAxMCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmRzZiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnZlcnRpY2FsLWNlbnRlciAuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udmVydGljYWwtY2VudGVyIC5jZW50ZXIgLnN0b3J5TGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcbn1cbi52ZXJ0aWNhbC1jZW50ZXIgLmNlbnRlciAuc3RvcnlSaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTBweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4udmVydGljYWwtY2VudGVyIC5jZW50ZXIgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/story-detail/story-detail.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/story-detail/story-detail.ts ***!
  \****************************************************/
/*! exports provided: StoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryDetailPage", function() { return StoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _forgot_password_forgot_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forgot-password/forgot-password */ "./src/app/pages/forgot-password/forgot-password.ts");
/* harmony import */ var _sign_up_sign_up__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-up/sign-up */ "./src/app/pages/sign-up/sign-up.ts");







let StoryDetailPage = class StoryDetailPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, userService, fb) {
        super(injector);
        this.userService = userService;
        this.fb = fb;
        this.isLoadingByUsername = false;
        this.isLoadingByFacebook = false;
    }
    ngOnInit() {
        this.image;
    }
    enableMenuSwipe() {
        return false;
    }
    onDismiss() {
        return this.modalCtrl.dismiss();
    }
    onFacebookButtonTouched() {
        if (this.isCordova) {
            this.fb.login(['public_profile'])
                .then((res) => this.loggedIntoFacebook(res))
                .catch(e => console.log('Error logging into Facebook', e));
        }
        else if (this.isPwa) {
            this.translate.get('ERROR_FACEBOOK_PWA').subscribe(str => this.showAlert(str));
        }
        else {
            this.userService.loginViaFacebook()
                .then((user) => this.loggedViaFacebook(user))
                .catch(e => console.log('Error logging into Facebook', e));
        }
    }
    loggedIntoFacebook(res) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let expirationDate = new Date();
            expirationDate.setSeconds(expirationDate.getSeconds() + res.authResponse.expiresIn);
            let expirationDateFormatted = expirationDate.toISOString();
            var facebookAuthData = {
                id: res.authResponse.userID,
                access_token: res.authResponse.accessToken,
                expiration_date: expirationDateFormatted
            };
            try {
                yield this.showLoadingView({ showOverlay: false });
                this.isLoadingByFacebook = true;
                const user = yield this.userService.loginWith('facebook', {
                    authData: facebookAuthData
                });
                this.loggedViaFacebook(user);
                this.isLoadingByFacebook = false;
            }
            catch (error) {
                this.loginViaFacebookFailure(error);
                this.isLoadingByFacebook = false;
            }
        });
    }
    loginViaFacebookFailure(error = {}) {
        console.log('Error logging into Facebook', error);
        this.translate.get('ERROR_UNKNOWN').subscribe(str => this.showToast(str));
        this.showContentView();
    }
    loggedViaFacebook(user) {
        this.showContentView();
        const transParams = { username: user.attributes.name };
        this.translate.get('LOGGED_IN_AS', transParams)
            .subscribe(str => this.showToast(str));
        this.events.publish('user:login', user);
        this.onDismiss();
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.form.invalid) {
                    const message = yield this.getTrans('INVALID_FORM');
                    return this.showToast(message);
                }
                yield this.showLoadingView({ showOverlay: false });
                this.isLoadingByUsername = true;
                let user = yield this.userService.signIn(this.form.value);
                this.showContentView();
                this.isLoadingByUsername = false;
                const transParams = { username: user.name };
                this.translate.get('LOGGED_IN_AS', transParams)
                    .subscribe(str => this.showToast(str));
                this.events.publish('user:login', user);
                this.onDismiss();
            }
            catch (err) {
                if (err.code === 101) {
                    this.translate.get('INVALID_CREDENTIALS')
                        .subscribe(str => this.showToast(str));
                }
                else {
                    this.translate.get('ERROR_NETWORK')
                        .subscribe(str => this.showToast(str));
                }
                this.showContentView();
                this.isLoadingByUsername = false;
            }
        });
    }
    onPresentForgotPasswordModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _forgot_password_forgot_password__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]
            });
            return yield modal.present();
        });
    }
    onPresentSignUpModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _sign_up_sign_up__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
            });
            return yield modal.present();
        });
    }
};
StoryDetailPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] }
];
StoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-story-detail',
        template: __webpack_require__(/*! raw-loader!./story-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/story-detail/story-detail.html"),
        styles: [__webpack_require__(/*! ./story-detail.scss */ "./src/app/pages/story-detail/story-detail.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]])
], StoryDetailPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);




let GeolocationService = class GeolocationService {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    getCurrentPosition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let position = null;
            if (this.lastPosition) {
                const diff = new Date().getTime() - this.lastPosition.timestamp;
                const minutesDifference = Math.floor(diff / 1000 / 60);
                if (minutesDifference <= 15)
                    return this.lastPosition.coords;
            }
            try {
                const options = {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 15 * 60 * 1000,
                };
                position = yield this.geolocation.getCurrentPosition(options);
                this.lastPosition = position;
            }
            catch (error) {
                position = this.lastPosition;
            }
            return position ? position.coords : null;
        });
    }
    toParseGeoPoint(coords) {
        return new parse__WEBPACK_IMPORTED_MODULE_3__["GeoPoint"](coords.latitude, coords.longitude);
    }
};
GeolocationService.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] }
];
GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
], GeolocationService);



/***/ }),

/***/ "./src/app/services/story.ts":
/*!***********************************!*\
  !*** ./src/app/services/story.ts ***!
  \***********************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
var Story_1;



let Story = Story_1 = class Story extends parse__WEBPACK_IMPORTED_MODULE_2__["Object"] {
    constructor() {
        super('Story');
    }
    static getInstance() {
        return this;
    }
    load(params = {}) {
        return new Promise((resolve, reject) => {
            let query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Story_1);
            query.include('place');
            if (params.place) {
                query.equalTo('place', params.place);
            }
            query.ascending('createdAt');
            query.find().then((data) => resolve(data), error => reject(error));
        });
    }
    get image() {
        return this.get('image');
    }
    get imageThumb() {
        return this.get('image');
    }
    get place() {
        return this.get('place');
    }
    get lastAt() {
        return this.get('lastAt');
    }
    toString() {
        return this.image.url();
    }
};
Story = Story_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Story);

parse__WEBPACK_IMPORTED_MODULE_2__["Object"].registerSubclass('Story', Story);


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map
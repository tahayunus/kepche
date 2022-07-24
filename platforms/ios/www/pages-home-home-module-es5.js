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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




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

module.exports = "<app-header></app-header>\n<ion-content #container scrollEvents=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onReload($event)\">\n    <ion-refresher-content pullingText=\"{{ 'PULL_TO_REFRESH' | translate }}\"\n      refreshingText=\"{{ 'REFRESHING' | translate }}\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <empty-view *ngIf=\"isErrorViewVisible\" icon=\"alert\" [text]=\"'ERROR_NETWORK' | translate\">\n  </empty-view>\n  <ion-grid fixed class=\"p96 ion-no-padding\">\n\n    <section *ngIf=\"isContentViewVisible\">\n      <!--<ion-grid>\n        <div>\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable\">\n            <ion-col size-xs=\"3\" size-sm=\"3\" size-md=\"2\" *ngFor=\"let story of stories; let i = index\" class=\"cacaca\">\n              <div class=\"story\" text-center (click)=\"openStoryModal(story.storyImage?.url())\">\n                <img [src]=\"story.storyImage?.url()\" />\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>-->\n      <!-- Top Slide List -->\n      <div>\n        <ion-slides pager=\"true\" (ionSlidesDidLoad)=\"onSlidesTopDidLoad($event)\"\n          (ionSlideWillChange)=\"onSlidesTopWillChange($event)\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let slide of slides\" (click)=\"onSlideTouched(slide)\">\n            <div class=\"slide-img fade-in\" defaultImage=\"./assets/img/placeholder.png\" [lazyLoad]=\"slide.image?.url()\"\n              [scrollObservable]=\"loadAndScroll\">\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <!-- Category List -->\n      <ion-grid class=\"ion-margin-bottom\">\n        <ion-row>\n          <ion-col size-xs=\"6\" size-sm=\"3\" size-md=\"3\" *ngFor=\"let category of categories;\">\n            <ion-card mode=\"ios\" button class=\"margin-zero\" color=\"white\" [routerLink]=\"['./places']\"\n              [queryParams]=\"{ category: category.id }\">\n              <img defaultImage=\"./assets/img/placeholder.png\" [scrollObservable]=\"loadAndScroll\"\n                [lazyLoad]=\"category.image?.url()\" />\n              <ion-card-content class=\"ion-text-center ion-text-nowrap\">\n                <p class=\"text-large bold ellipsis link\">{{ category.title | translate }}</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <section>\n        <div class=\"ion-margin-bottom\">\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\n            <ion-col size-xs=\"8\" size-sm=\"6\" size-md=\"3\" *ngFor=\"let banner of banners\">\n              <ion-card class=\"ion-no-margin ion-margin-bottom\" mode=\"ios\" (click)=\"onSlideTouched(banner)\">\n                <img [src]=\"banner.image._url\" />\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </section>\n      <!-- Featured Places -->\n      <section *ngIf=\"featuredPlaces.length\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"6\" class=\"ion-text-start\">\n            <ion-text color=\"medium\">\n              <span class=\"text-normal bold padding-small\">\n                {{ 'FEATURED' | translate }}\n              </span>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-end\">\n            <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\n              [queryParams]=\"{featured:'1'}\" [routerLink]=\"['../places']\">\n              <span class=\"link text-normal\">\n                {{ 'VIEW_ALL' | translate }}\n              </span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-margin-bottom\">\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\n            <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of featuredPlaces\">\n              <app-place-card [routerLink]=\"['../places/' + place.id + '/' + place.slug]\" [place]=\"place\"\n                [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\n              </app-place-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </section>\n      <!-- New Places -->\n      <section *ngIf=\"newPlaces.length\">\n        <ion-row class=\"ion-padding-start ion-align-items-center\">\n          <ion-col size=\"6\" class=\"ion-text-start\">\n            <ion-text color=\"medium\">\n              <span class=\"text-normal bold padding-small\">\n                {{ 'NEW' | translate }}\n              </span>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-end\">\n            <ion-button class=\"ion-margin-bottom ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\n              [routerLink]=\"['../places']\">\n              <span class=\"link text-normal\">\n                {{ 'VIEW_ALL' | translate }}\n              </span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-margin-bottom\">\n          <ion-row (scroll)=\"onScroll()\" class=\"scrollable ion-padding-start\">\n            <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of newPlaces\">\n              <app-place-card [routerLink]=\"['../places/' + place.id + '/' + place.slug]\" [place]=\"place\"\n                [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\n              </app-place-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </section>\n      <!-- Nearby Places -->\n      <section *ngIf=\"nearbyPlaces.length\">\n        <ion-row class=\"ion-padding-start ion-align-items-center\">\n          <ion-col size=\"6\" class=\"ion-text-start\">\n            <ion-text color=\"medium\">\n              <span class=\"text-normal bold padding-small\">\n                {{ 'NEARBY' | translate }}\n              </span>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-end\">\n            <ion-button class=\"ion-no-margin ion-text-capitalize\" fill=\"clear\" color=\"secondary\"\n              [queryParams]=\"{nearby:'1'}\" [routerLink]=\"['../places']\">\n              <span class=\"link text-normal\">\n                {{ 'VIEW_ALL' | translate }}\n              </span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-margin-bottom\">\n          <ion-row class=\"ion-padding-start scrollable\" (scroll)=\"onScroll()\">\n            <ion-col size-xs=\"5\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let place of nearbyPlaces\">\n              <app-place-card [routerLink]=\"['../places/' + place.id + '/' + place.slug]\" [place]=\"place\"\n                [extraParams]=\"{ location: location, unit: preference.unit }\" [scrollObservable]=\"loadAndScroll\">\n              </app-place-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </section>\n    </section>\n    <section *ngIf=\"isLoadingViewVisible\">\n      <div>\n        <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n          [theme]=\"{ width: '100%', height: '250px', 'border-radius': '4px' }\">\n        </ngx-skeleton-loader>\n      </div>\n      <ion-row nowrap>\n        <ion-col size-xs=\"4\" size-sm=\"6\" size-md=\"6\" size-lg=\"2\" *ngFor=\"let item of skeletonArray\">\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n            [theme]=\"{ width: '100%', height: '75px', 'border-radius': '4px' }\">\n          </ngx-skeleton-loader>\n        </ion-col>\n      </ion-row>\n      <ion-row nowrap>\n        <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let item of skeletonArray\">\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n            [theme]=\"{ width: '100%', height: '150px', 'border-radius': '4px' }\">\n          </ngx-skeleton-loader>\n        </ion-col>\n      </ion-row>\n      <ion-row nowrap>\n        <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let item of skeletonArray\">\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n            [theme]=\"{ width: '100%', height: '150px', 'border-radius': '4px' }\">\n          </ngx-skeleton-loader>\n        </ion-col>\n      </ion-row>\n      <ion-row nowrap>\n        <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\" *ngFor=\"let item of skeletonArray\">\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\n            [theme]=\"{ width: '100%', height: '150px', 'border-radius': '4px' }\">\n          </ngx-skeleton-loader>\n        </ion-col>\n      </ion-row>\n    </section>\n    <ion-infinite-scroll *ngIf=\"isContentViewVisible\" (ionInfinite)=\"onLoadMore($event)\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/story-detail/story-detail.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/story-detail/story-detail.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"dsf\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onDismiss()\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"vertical-center\">\n    <div class=\"center\">\n      <!--<div class=\"storyLeft\" (click)=\"goLeft()\"></div>-->\n      <img [src]=\"image\" />\n      <!--<div class=\"storyRight\" (click)=\"goRight()\"></div>-->\n    </div>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/app/pages/home/home.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sign-in/sign-in.module */ "./src/app/pages/sign-in/sign-in.module.ts");
/* harmony import */ var _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts");
/* harmony import */ var _story_detail_story_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../story-detail/story-detail.module */ "./src/app/pages/story-detail/story-detail.module.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.scss":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  visibility: inherit;\n  top: 0 !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .logo {\n    height: 36px;\n  }\n}\n\nion-content {\n  --background: var(--ion-color-light-tint);\n}\n\nion-content .cacaca .story {\n  position: relative;\n  display: inline-block;\n  color: #999;\n  margin-left: 10px;\n  padding: 2px;\n}\n\nion-content .cacaca .story.unseen {\n  color: #000;\n}\n\nion-content .cacaca .story.unseen img {\n  box-shadow: 0px 0px 0px 2px #f00;\n}\n\nion-content .cacaca .story img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  box-shadow: 0px 0px 0px 2px #999;\n}\n\nion-content .cacaca .story span {\n  max-width: 55px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\napp-place-card {\n  --image-height: 150px;\n  --content-padding: 8px;\n}\n\n.scrollable app-place-card {\n  --image-width: 100%;\n  --image-height: 130px;\n  --content-padding: 6px;\n}\n\nion-card ion-card-content {\n  padding: 4px;\n}\n\nion-slides {\n  padding: 10px;\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-primary);\n}\n\nion-slides ion-slide img {\n  display: block;\n  width: 100%;\n}\n\nion-slides .slide-img {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  width: 100%;\n  height: 200px;\n}\n\nion-searchbar {\n  --background: rgba(var(--ion-color-primary-rgb,0,0,0),0.07);\n}\n\nion-row[nowrap] {\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 992px) {\n  .text-small {\n    font-size: 14px !important;\n  }\n\n  ion-slides .slide-img {\n    height: 350px;\n  }\n\n  .scrollable {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    white-space: normal;\n    flex-wrap: wrap;\n  }\n  .scrollable app-place-card {\n    display: block;\n    margin: 0;\n    width: 100%;\n    --image-width: 100%;\n    --image-height: 200px;\n    --content-padding: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFO0lBQ0UsWUFBQTtFQ0VKO0FBQ0Y7O0FEQ0E7RUFDSSx5Q0FBQTtBQ0NKOztBREVRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBWjs7QURDWTtFQUNJLFdBQUE7QUNDaEI7O0FEQ2dCO0VBQ0ksZ0NBQUE7QUNDcEI7O0FER1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0RoQjs7QURJWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZoQjs7QURRQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUNMSjs7QURTSTtFQUVJLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtBQ1JSOztBRGFJO0VBQ0ksWUFBQTtBQ1ZSOztBRGNBO0VBRUksYUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0RBQUE7QUNaSjs7QURjSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDWlI7O0FEZUk7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDYlI7O0FEaUJBO0VBQ0ksMkRBQUE7QUNkSjs7QURpQkE7RUFDSSxnQkFBQTtBQ2RKOztBRGlCQTtFQUVJO0lBQ0ksMEJBQUE7RUNmTjs7RURtQk07SUFDSSxhQUFBO0VDaEJWOztFRG9CRTtJQUVJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUNsQk47RURvQk07SUFDSSxjQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFFQSxtQkFBQTtJQUNBLHFCQUFBO0lBRUEsc0JBQUE7RUNwQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5IZWFkZXIge1xuICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICB9XG4gIH1cbiAgXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG4gICAgLmNhY2FjYSB7XG5cbiAgICAgICAgLnN0b3J5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAmLnVuc2VlbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggI2YwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjOTk5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFwcC1wbGFjZS1jYXJkIHtcbiAgICAtLWltYWdlLWhlaWdodDogMTUwcHg7XG4gICAgLS1jb250ZW50LXBhZGRpbmc6IDhweDtcbn1cblxuLnNjcm9sbGFibGUge1xuICAgIGFwcC1wbGFjZS1jYXJkIHtcblxuICAgICAgICAtLWltYWdlLXdpZHRoOiAxMDAlO1xuICAgICAgICAtLWltYWdlLWhlaWdodDogMTMwcHg7XG5cbiAgICAgICAgLS1jb250ZW50LXBhZGRpbmc6IDZweDtcbiAgICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgIH1cbn1cblxuaW9uLXNsaWRlcyB7XG5cbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgaW9uLXNsaWRlIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc2xpZGUtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsMCwwLDApLDAuMDcpO1xufVxuXG5pb24tcm93W25vd3JhcF0ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgIC50ZXh0LXNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIC5zbGlkZS1pbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY3JvbGxhYmxlIHtcblxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIGFwcC1wbGFjZS1jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC0taW1hZ2Utd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAtLWltYWdlLWhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgICAgIC0tY29udGVudC1wYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn0iLCIubWFpbkhlYWRlciB7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5pb24tY29udGVudCAuY2FjYWNhIC5zdG9yeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cbmlvbi1jb250ZW50IC5jYWNhY2EgLnN0b3J5LnVuc2VlbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWNvbnRlbnQgLmNhY2FjYSAuc3RvcnkudW5zZWVuIGltZyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjZjAwO1xufVxuaW9uLWNvbnRlbnQgLmNhY2FjYSAuc3RvcnkgaW1nIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggIzk5OTtcbn1cbmlvbi1jb250ZW50IC5jYWNhY2EgLnN0b3J5IHNwYW4ge1xuICBtYXgtd2lkdGg6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmFwcC1wbGFjZS1jYXJkIHtcbiAgLS1pbWFnZS1oZWlnaHQ6IDE1MHB4O1xuICAtLWNvbnRlbnQtcGFkZGluZzogOHB4O1xufVxuXG4uc2Nyb2xsYWJsZSBhcHAtcGxhY2UtY2FyZCB7XG4gIC0taW1hZ2Utd2lkdGg6IDEwMCU7XG4gIC0taW1hZ2UtaGVpZ2h0OiAxMzBweDtcbiAgLS1jb250ZW50LXBhZGRpbmc6IDZweDtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS1pbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwwLDAsMCksMC4wNyk7XG59XG5cbmlvbi1yb3dbbm93cmFwXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRleHQtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXNsaWRlcyAuc2xpZGUtaW1nIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG5cbiAgLnNjcm9sbGFibGUge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnNjcm9sbGFibGUgYXBwLXBsYWNlLWNhcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWltYWdlLXdpZHRoOiAxMDAlO1xuICAgIC0taW1hZ2UtaGVpZ2h0OiAyMDBweDtcbiAgICAtLWNvbnRlbnQtcGFkZGluZzogOHB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/slide */ "./src/app/services/slide.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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




















var HomePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomePage, _super);
    function HomePage(injector, geolocationService, installationService, windowRef, placeService, backgroundMode, backgroundGeolocation, categoryService, slideService, storyService, productService, storage) {
        var _this = _super.call(this, injector) || this;
        _this.geolocationService = geolocationService;
        _this.installationService = installationService;
        _this.windowRef = windowRef;
        _this.placeService = placeService;
        _this.backgroundMode = backgroundMode;
        _this.backgroundGeolocation = backgroundGeolocation;
        _this.categoryService = categoryService;
        _this.slideService = slideService;
        _this.storyService = storyService;
        _this.productService = productService;
        _this.storage = storage;
        _this.lPlaces = [];
        _this.arrayTitle = [];
        _this.langid = 0;
        _this.slides = [];
        _this.stories = [];
        _this.banners = [];
        _this.properties = [];
        _this.likePlaces = [];
        _this.featuredPlaces = [];
        _this.newPlaces = [];
        _this.randomPlaces = [];
        _this.nearbyPlaces = [];
        _this.nearbyProducts = [];
        _this.momentPlaces = [];
        _this.categories = [];
        _this.randomParams = {};
        _this.slideOpts = {};
        _this.skeletonArray = Array(6);
        return _this;
    }
    HomePage.prototype.enableMenuSwipe = function () {
        return false;
    };
    HomePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                title = 'Güvercin App';
                this.setPageTitle(title);
                this.setMetaTags({
                    title: title
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.momentsPlace = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, _a, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _b.sent();
                        if (!coords) return [3 /*break*/, 3];
                        this.location = coords;
                        this.updateInstallation();
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadMoment({
                                location: this.location
                            })];
                    case 2:
                        _a.momentPlaces = _b.sent();
                        console.log('askvkjasdf', this.momentPlaces);
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        console.warn(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
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
                        this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__["User"].getCurrent();
                        this.events.subscribe('user:login', function () {
                            _this.user = src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__["User"].getCurrent();
                        });
                        this.events.subscribe('user:loggedOut', function () {
                            _this.user = null;
                        });
                        this.setupObservables();
                        this.setupSliders();
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 2:
                        _b.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onReload = function (event) {
        if (event === void 0) { event = {}; }
        this.refresher = event.target;
        this.showLoadingView({ showOverlay: false });
        this.loadData();
        this.loadNearbyPlaces();
        this.loadHomeBanner();
        if (this.user) {
            this.loadLikePlaces();
            this.properties;
        }
    };
    HomePage.prototype.onScroll = function () {
        this.horizontalScroll.next();
    };
    HomePage.prototype.onSlidesTopDidLoad = function () {
        this.slidesTopEvent.next();
    };
    HomePage.prototype.onSlidesTopWillChange = function () {
        this.slidesTopEvent.next();
    };
    HomePage.prototype.onContentLoaded = function () {
        this.contentLoaded.next();
    };
    HomePage.prototype.setupObservables = function () {
        this.slidesTopEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.horizontalScroll = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.container.ionScroll, this.horizontalScroll, this.contentLoaded, this.slidesTopEvent);
    };
    HomePage.prototype.setupSliders = function () {
        this.slideOpts = {
            autoplay: {
                delay: 7000
            },
            spaceBetween: 16,
            zoom: false,
            touchStartPreventDefault: false
        };
    };
    HomePage.prototype.openStoryModal = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _story_detail_story_detail__WEBPACK_IMPORTED_MODULE_12__["StoryDetailPage"],
                            componentProps: { image: event },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        setTimeout(function () {
                            modal.dismiss();
                        }, 9000);
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.dismissLoadingView()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, category, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, parse__WEBPACK_IMPORTED_MODULE_4__["Cloud"].run('getHomePageData')];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.categoryService.load()];
                    case 2:
                        category = _a.sent();
                        console.log("data2", this.slides);
                        this.newPlaces = data.newPlaces;
                        this.featuredPlaces = data.featuredPlaces;
                        this.categories = category;
                        console.log(data);
                        this.onRefreshComplete();
                        this.showContentView();
                        this.onContentLoaded();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.showErrorView();
                        this.onRefreshComplete();
                        this.translate.get('ERROR_NETWORK')
                            .subscribe(function (str) { return _this.showToast(str); });
                        if (error_1.code === 209) {
                            this.events.publish('user:logout');
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadSlides = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.updateInstallation();
                        _a = this;
                        return [4 /*yield*/, this.slideService.load({
                                location: 'slider'
                            })];
                    case 1:
                        _a.slides = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadLikePlaces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var places, places_1, places_1_1, place, error_2;
            var e_1, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.likePlaces = [];
                        return [4 /*yield*/, this.placeService.loadStories()];
                    case 1:
                        places = _b.sent();
                        try {
                            for (places_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](places), places_1_1 = places_1.next(); !places_1_1.done; places_1_1 = places_1.next()) {
                                place = places_1_1.value;
                                this.likePlaces.push(place);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (places_1_1 && !places_1_1.done && (_a = places_1.return)) _a.call(places_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (this.likePlaces.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onContentLoaded();
                        this.onRefreshComplete(places);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadStories = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storyService.load({
                                place: event
                            })];
                    case 1:
                        _a.stories = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadHomeBanner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.updateInstallation();
                        _a = this;
                        return [4 /*yield*/, this.slideService.load({
                                location: 'home'
                            })];
                    case 1:
                        _a.banners = _b.sent();
                        console.log('banner', this.stories);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadMoreRandomPlaces = function () {
        var _this = this;
        parse__WEBPACK_IMPORTED_MODULE_4__["Cloud"].run('getRandomPlaces').then(function (places) {
            var e_2, _a;
            try {
                for (var places_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](places), places_2_1 = places_2.next(); !places_2_1.done; places_2_1 = places_2.next()) {
                    var place = places_2_1.value;
                    _this.randomPlaces.push(place);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (places_2_1 && !places_2_1.done && (_a = places_2.return)) _a.call(places_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.onRefreshComplete();
        }, function () {
            _this.onRefreshComplete();
            _this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
        });
    };
    HomePage.prototype.backgroundGeo = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true,
            stopOnTerminate: false,
        };
        this.backgroundGeolocation.configure(config)
            .then(function () {
            _this.backgroundGeolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["BackgroundGeolocationEvents"].location).subscribe(function (location) {
                console.log(location);
                _this.backgroundGeolocation.finish();
            });
        });
        // start recording location
        this.backgroundGeolocation.start();
        this.backgroundMode.enable();
        this.backgroundMode.on("activate").subscribe(function () {
            _this.loadNearbyPlaces();
            if (_this.nearbyPlaces.length > 0) {
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_17___default.a.postNotification('{"app_id":"235b471a-95af-4c74-aee3-be05bb96348b","contents"=>{en:"Hello !",tr:"Yakınınızda ' + _this.nearbyPlaces.length + ' tane mekan var!",included_segments: ["Test"]}}');
            }
        });
        console.log("denemeee", this.backgroundGeolocation);
        console.log("asdads", this.backgroundGeolocation.getCurrentLocation());
    };
    HomePage.prototype.updateInstallation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var objWindow, location_1, id, res, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        objWindow = this.windowRef.nativeWindow;
                        if (!objWindow.ParsePushPlugin) return [3 /*break*/, 3];
                        location_1 = this.geolocationService.toParseGeoPoint(this.location);
                        return [4 /*yield*/, this.installationService.getId()];
                    case 1:
                        id = _a.sent();
                        return [4 /*yield*/, this.installationService.save(id, { location: location_1 })];
                    case 2:
                        res = _a.sent();
                        console.log('Installation updated', res);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadNearbyPlaces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, _a, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _b.sent();
                        if (!coords) return [3 /*break*/, 3];
                        this.location = coords;
                        this.updateInstallation();
                        _a = this;
                        return [4 /*yield*/, this.placeService.load({
                                location: this.location,
                                limit: 12
                            })];
                    case 2:
                        _a.nearbyPlaces = _b.sent();
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_2 = _b.sent();
                        console.warn(err_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadNearbyProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, _a, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _b.sent();
                        if (!coords) return [3 /*break*/, 3];
                        this.location = coords;
                        this.updateInstallation();
                        _a = this;
                        return [4 /*yield*/, this.productService.load({
                                location: this.location,
                                limit: 12
                            })];
                    case 2:
                        _a.nearbyProducts = _b.sent();
                        console.log('yakındaki yemekler', this.nearbyPlaces);
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_3 = _b.sent();
                        console.warn(err_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onLoadMore = function (event) {
        if (event === void 0) { event = {}; }
        this.infiniteScroll = event.target;
        this.randomParams.page++;
        this.loadMoreRandomPlaces();
    };
    HomePage.prototype.onPlaceTouched = function (place) {
        this.navigateToRelative('places/' + place.id);
    };
    HomePage.prototype.onCategoryTouched = function (category) {
        this.navigateToRelative('places', { category: category.id });
    };
    HomePage.prototype.onSlideTouched = function (slide) {
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
    };
    HomePage.prototype.onStoryTouched = function () {
    };
    HomePage.ctorParameters = function () { return [
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
    ]; };
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
    return HomePage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgot-password/forgot-password.module */ "./src/app/pages/forgot-password/forgot-password.module.ts");
/* harmony import */ var _sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts");
/* harmony import */ var _story_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story-detail */ "./src/app/pages/story-detail/story-detail.ts");








var StoryDetailPageModule = /** @class */ (function () {
    function StoryDetailPageModule() {
    }
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
    return StoryDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/story-detail/story-detail.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/story-detail/story-detail.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dsf {\n  height: 64px;\n  background: linear-gradient(0deg, black 100%, rgba(0, 0, 0, 0.3) 10%);\n  position: fixed;\n  line-height: 64px;\n  width: 100%;\n  float: right;\n}\n.dsf ion-button {\n  height: 64px;\n  line-height: 64px;\n}\n.vertical-center {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  vertical-align: middle !important;\n  width: 100%;\n  height: 100%;\n}\n.vertical-center .center {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  vertical-align: middle !important;\n  width: 100%;\n  height: 100%;\n}\n.vertical-center .center .storyLeft {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  left: 0;\n  background-color: #f00;\n}\n.vertical-center .center .storyRight {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  right: 0;\n  background-color: aqua;\n}\n.vertical-center .center img {\n  vertical-align: middle;\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3N0b3J5LWRldGFpbC9zdG9yeS1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcnktZGV0YWlsL3N0b3J5LWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDRVI7QURDQTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0ksd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dSO0FERlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FDSVo7QURGUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUNJWjtBREZRO0VBQ0ksc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yeS1kZXRhaWwvc3RvcnktZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHNmIHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMSkgMTAwJSwgcmdiYSgwLDAsMCwwLjMwKSAxMCUpOztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIH1cbn1cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAuY2VudGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC5zdG9yeUxlZnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RvcnlSaWdodCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmRzZiB7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrIDEwMCUsIHJnYmEoMCwgMCwgMCwgMC4zKSAxMCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmRzZiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnZlcnRpY2FsLWNlbnRlciAuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udmVydGljYWwtY2VudGVyIC5jZW50ZXIgLnN0b3J5TGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcbn1cbi52ZXJ0aWNhbC1jZW50ZXIgLmNlbnRlciAuc3RvcnlSaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTBweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4udmVydGljYWwtY2VudGVyIC5jZW50ZXIgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _forgot_password_forgot_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forgot-password/forgot-password */ "./src/app/pages/forgot-password/forgot-password.ts");
/* harmony import */ var _sign_up_sign_up__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-up/sign-up */ "./src/app/pages/sign-up/sign-up.ts");







var StoryDetailPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StoryDetailPage, _super);
    function StoryDetailPage(injector, userService, fb) {
        var _this = _super.call(this, injector) || this;
        _this.userService = userService;
        _this.fb = fb;
        _this.isLoadingByUsername = false;
        _this.isLoadingByFacebook = false;
        return _this;
    }
    StoryDetailPage.prototype.ngOnInit = function () {
        this.image;
    };
    StoryDetailPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    StoryDetailPage.prototype.onDismiss = function () {
        return this.modalCtrl.dismiss();
    };
    StoryDetailPage.prototype.onFacebookButtonTouched = function () {
        var _this = this;
        if (this.isCordova) {
            this.fb.login(['public_profile'])
                .then(function (res) { return _this.loggedIntoFacebook(res); })
                .catch(function (e) { return console.log('Error logging into Facebook', e); });
        }
        else if (this.isPwa) {
            this.translate.get('ERROR_FACEBOOK_PWA').subscribe(function (str) { return _this.showAlert(str); });
        }
        else {
            this.userService.loginViaFacebook()
                .then(function (user) { return _this.loggedViaFacebook(user); })
                .catch(function (e) { return console.log('Error logging into Facebook', e); });
        }
    };
    StoryDetailPage.prototype.loggedIntoFacebook = function (res) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var expirationDate, expirationDateFormatted, facebookAuthData, user, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expirationDate = new Date();
                        expirationDate.setSeconds(expirationDate.getSeconds() + res.authResponse.expiresIn);
                        expirationDateFormatted = expirationDate.toISOString();
                        facebookAuthData = {
                            id: res.authResponse.userID,
                            access_token: res.authResponse.accessToken,
                            expiration_date: expirationDateFormatted
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 2:
                        _a.sent();
                        this.isLoadingByFacebook = true;
                        return [4 /*yield*/, this.userService.loginWith('facebook', {
                                authData: facebookAuthData
                            })];
                    case 3:
                        user = _a.sent();
                        this.loggedViaFacebook(user);
                        this.isLoadingByFacebook = false;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.loginViaFacebookFailure(error_1);
                        this.isLoadingByFacebook = false;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StoryDetailPage.prototype.loginViaFacebookFailure = function (error) {
        var _this = this;
        if (error === void 0) { error = {}; }
        console.log('Error logging into Facebook', error);
        this.translate.get('ERROR_UNKNOWN').subscribe(function (str) { return _this.showToast(str); });
        this.showContentView();
    };
    StoryDetailPage.prototype.loggedViaFacebook = function (user) {
        var _this = this;
        this.showContentView();
        var transParams = { username: user.attributes.name };
        this.translate.get('LOGGED_IN_AS', transParams)
            .subscribe(function (str) { return _this.showToast(str); });
        this.events.publish('user:login', user);
        this.onDismiss();
    };
    StoryDetailPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, user, transParams, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.form.invalid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('INVALID_FORM')];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, this.showToast(message)];
                    case 2: return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 3:
                        _a.sent();
                        this.isLoadingByUsername = true;
                        return [4 /*yield*/, this.userService.signIn(this.form.value)];
                    case 4:
                        user = _a.sent();
                        this.showContentView();
                        this.isLoadingByUsername = false;
                        transParams = { username: user.name };
                        this.translate.get('LOGGED_IN_AS', transParams)
                            .subscribe(function (str) { return _this.showToast(str); });
                        this.events.publish('user:login', user);
                        this.onDismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        if (err_1.code === 101) {
                            this.translate.get('INVALID_CREDENTIALS')
                                .subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK')
                                .subscribe(function (str) { return _this.showToast(str); });
                        }
                        this.showContentView();
                        this.isLoadingByUsername = false;
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StoryDetailPage.prototype.onPresentForgotPasswordModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _forgot_password_forgot_password__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StoryDetailPage.prototype.onPresentSignUpModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _sign_up_sign_up__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StoryDetailPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["User"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] }
    ]; };
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
    return StoryDetailPage;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);



var Story = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Story, _super);
    function Story() {
        return _super.call(this, 'Story') || this;
    }
    Story_1 = Story;
    Story.getInstance = function () {
        return this;
    };
    Story.prototype.load = function (params) {
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Story_1);
            query.include('place');
            if (params.place) {
                query.equalTo('place', params.place);
            }
            query.ascending('createdAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Story.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "imageThumb", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "lastAt", {
        get: function () {
            return this.get('lastAt');
        },
        enumerable: true,
        configurable: true
    });
    Story.prototype.toString = function () {
        return this.image.url();
    };
    var Story_1;
    Story = Story_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Story);
    return Story;
}(parse__WEBPACK_IMPORTED_MODULE_2__["Object"]));

parse__WEBPACK_IMPORTED_MODULE_2__["Object"].registerSubclass('Story', Story);


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map
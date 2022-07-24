(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"],{

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/material2/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
var RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        var content = document.createElement('div');
        /** @type {?} */
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js ***!
  \************************************************************************************/
/*! exports provided: FaIconComponent, FaIconService, FaLayersComponent, FaLayersCounterComponent, FaLayersTextComponent, FontAwesomeModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconComponent", function() { return FaIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconService", function() { return FaIconService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersComponent", function() { return FaLayersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersCounterComponent", function() { return FaLayersCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersTextComponent", function() { return FaLayersTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeModule", function() { return FontAwesomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FaLayersTextBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns if is IconLookup or not.
 * @type {?}
 */
var isIconLookup = (/**
 * @param {?} i
 * @return {?}
 */
function (i) {
    return ((/** @type {?} */ (i))).prefix !== undefined && ((/** @type {?} */ (i))).iconName !== undefined;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Normalizing icon spec.
 * @type {?}
 */
var faNormalizeIconSpec = (/**
 * @param {?} iconSpec
 * @param {?=} defaultPrefix
 * @return {?}
 */
function (iconSpec, defaultPrefix) {
    if (defaultPrefix === void 0) { defaultPrefix = 'fas'; }
    if (typeof iconSpec === 'undefined' || iconSpec === null) {
        return null;
    }
    if (isIconLookup(iconSpec)) {
        return iconSpec;
    }
    if (Array.isArray(iconSpec) && ((/** @type {?} */ (iconSpec))).length === 2) {
        return { prefix: iconSpec[0], iconName: iconSpec[1] };
    }
    if (typeof iconSpec === 'string') {
        return { prefix: defaultPrefix, iconName: iconSpec };
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var objectWithKey = (/**
 * @template T
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function (key, value) {
    var _a;
    return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? (_a = {}, _a[key] = value, _a) : {};
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome class list.
 * Returns classes array by props.
 * @type {?}
 */
var faClassList = (/**
 * @param {?} props
 * @return {?}
 */
function (props) {
    var _a;
    /** @type {?} */
    var classes = (_a = {
            'fa-spin': props.spin,
            'fa-pulse': props.pulse,
            'fa-fw': props.fixedWidth,
            'fa-border': props.border,
            'fa-li': props.listItem,
            'fa-inverse': props.inverse,
            'fa-layers-counter': props.counter,
            'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
            'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
        },
        _a["fa-" + props.size] = props.size !== null,
        _a["fa-rotate-" + props.rotate] = props.rotate !== null,
        _a["fa-pull-" + props.pull] = props.pull !== null,
        _a);
    return Object.keys(classes)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (classes[key] ? key : null); }))
        .filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key; }));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var faWarnIfIconHtmlMissing = (/**
 * @param {?} iconObj
 * @param {?} iconSpec
 * @return {?}
 */
function (iconObj, iconSpec) {
    if (iconSpec && !iconObj) {
        console.error("FontAwesome: Could not find icon with iconName=" + iconSpec.iconName + " and prefix=" + iconSpec.prefix);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var faWarnIfIconSpecMissing = (/**
 * @param {?} iconSpec
 * @return {?}
 */
function (iconSpec) {
    if (!iconSpec) {
        console.error('FontAwesome: Could not find icon. ' +
            "It looks like you've provided a null or undefined icon object to this component.");
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var faNotFoundIconHtml = "<svg class=\"" + _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["config"].replacementClass + "\" viewBox=\"0 0 448 512\"></svg><!--icon not found-->";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FaIconService = /** @class */ (function () {
    function FaIconService() {
        this.defaultPrefix = 'fas';
    }
    FaIconService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FaIconService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function FaIconService_Factory() { return new FaIconService(); }, token: FaIconService, providedIn: "root" });
    return FaIconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome icon.
 */
var FaIconComponent = /** @class */ (function () {
    function FaIconComponent(sanitizer, iconService) {
        this.sanitizer = sanitizer;
        this.iconService = iconService;
        this.classes = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaIconComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.updateIconSpec();
            this.updateParams();
            this.updateIcon();
            this.renderIcon();
        }
    };
    /**
     * Updating icon spec.
     */
    /**
     * Updating icon spec.
     * @private
     * @return {?}
     */
    FaIconComponent.prototype.updateIconSpec = /**
     * Updating icon spec.
     * @private
     * @return {?}
     */
    function () {
        this.iconSpec = faNormalizeIconSpec(this.iconProp, this.iconService.defaultPrefix);
    };
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @private
     * @return {?}
     */
    FaIconComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        var classes = objectWithKey('classes', Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(faClassList(classOpts), this.classes));
        /** @type {?} */
        var mask = objectWithKey('mask', faNormalizeIconSpec(this.mask, this.iconService.defaultPrefix));
        /** @type {?} */
        var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        var transform = objectWithKey('transform', parsedTransform);
        this.params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ title: this.title }, transform, classes, mask, { styles: this.styles, symbol: this.symbol });
    };
    /**
     * Updating icon by params and icon spec.
     */
    /**
     * Updating icon by params and icon spec.
     * @private
     * @return {?}
     */
    FaIconComponent.prototype.updateIcon = /**
     * Updating icon by params and icon spec.
     * @private
     * @return {?}
     */
    function () {
        this.icon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["icon"])(this.iconSpec, this.params);
    };
    /**
     * Rendering icon.
     */
    /**
     * Rendering icon.
     * @private
     * @return {?}
     */
    FaIconComponent.prototype.renderIcon = /**
     * Rendering icon.
     * @private
     * @return {?}
     */
    function () {
        faWarnIfIconSpecMissing(this.iconSpec);
        faWarnIfIconHtmlMissing(this.icon, this.iconSpec);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join('\n') : faNotFoundIconHtml);
    };
    FaIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fa-icon',
                    template: "",
                    host: {
                        class: 'ng-fa-icon',
                    }
                }] }
    ];
    /** @nocollapse */
    FaIconComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: FaIconService }
    ]; };
    FaIconComponent.propDecorators = {
        iconProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['icon',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        symbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderedIconHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['innerHTML',] }]
    };
    return FaIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers.
 */
var FaLayersComponent = /** @class */ (function () {
    function FaLayersComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    FaLayersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FaLayersComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('size' in changes) {
            if (changes.size.currentValue != null) {
                this.renderer.addClass(this.elementRef.nativeElement, "fa-" + changes.size.currentValue);
            }
            if (changes.size.previousValue != null) {
                this.renderer.removeClass(this.elementRef.nativeElement, "fa-" + changes.size.previousValue);
            }
        }
    };
    FaLayersComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fa-layers',
                    template: "<ng-content select=\"fa-icon, fa-layers-text, fa-layers-counter\"></ng-content>"
                }] }
    ];
    /** @nocollapse */
    FaLayersComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FaLayersComponent.propDecorators = {
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fa-fw',] }]
    };
    return FaLayersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Warns if parent component not existing.
 * @type {?}
 */
var faWarnIfParentNotExist = (/**
 * @param {?} parent
 * @param {?} parentName
 * @param {?} childName
 * @return {?}
 */
function (parent, parentName, childName) {
    if (!parent) {
        console.error("FontAwesome: " + childName + " should be used as child of " + parentName + " only.");
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var FaLayersTextBaseComponent = /** @class */ (function () {
    function FaLayersTextBaseComponent(parent, sanitizer) {
        this.parent = parent;
        this.sanitizer = sanitizer;
        this.classes = [];
        faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaLayersTextBaseComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.updateParams();
            this.updateContent();
        }
    };
    /**
     * Updating content by params and content.
     */
    /**
     * Updating content by params and content.
     * @private
     * @return {?}
     */
    FaLayersTextBaseComponent.prototype.updateContent = /**
     * Updating content by params and content.
     * @private
     * @return {?}
     */
    function () {
        this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
    };
    FaLayersTextBaseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    FaLayersTextBaseComponent.ctorParameters = function () { return [
        { type: FaLayersComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return FaLayersComponent; })),] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    FaLayersTextBaseComponent.propDecorators = {
        renderedHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['innerHTML',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FaLayersTextBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers text.
 */
var FaLayersTextComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(FaLayersTextComponent, _super);
    function FaLayersTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @protected
     * @return {?}
     */
    FaLayersTextComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        var classes = objectWithKey('classes', Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(faClassList(classOpts), this.classes));
        /** @type {?} */
        var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        var transform = objectWithKey('transform', parsedTransform);
        this.params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, transform, classes, { title: this.title, styles: this.styles });
    };
    /**
     * @protected
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    FaLayersTextComponent.prototype.renderFontawesomeObject = /**
     * @protected
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    function (content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["text"])(content, params);
    };
    FaLayersTextComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fa-layers-text',
                    template: '',
                    host: {
                        class: 'ng-fa-layers-text'
                    }
                }] }
    ];
    FaLayersTextComponent.propDecorators = {
        spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FaLayersTextComponent;
}(FaLayersTextBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers counter.
 */
var FaLayersCounterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(FaLayersCounterComponent, _super);
    function FaLayersCounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @protected
     * @return {?}
     */
    FaLayersCounterComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @protected
     * @return {?}
     */
    function () {
        this.params = {
            title: this.title,
            classes: this.classes,
            styles: this.styles,
        };
    };
    /**
     * @protected
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    FaLayersCounterComponent.prototype.renderFontawesomeObject = /**
     * @protected
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    function (content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["counter"])(content, params);
    };
    FaLayersCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'fa-layers-counter',
                    template: '',
                    host: {
                        class: 'ng-fa-layers-counter'
                    }
                }] }
    ];
    return FaLayersCounterComponent;
}(FaLayersTextBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FontAwesomeModule = /** @class */ (function () {
    function FontAwesomeModule() {
    }
    FontAwesomeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        FaIconComponent,
                        FaLayersComponent,
                        FaLayersTextComponent,
                        FaLayersCounterComponent,
                    ],
                    exports: [
                        FaIconComponent,
                        FaLayersComponent,
                        FaLayersTextComponent,
                        FaLayersCounterComponent,
                    ],
                },] }
    ];
    return FontAwesomeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-fontawesome.js.map


/***/ }),

/***/ "./node_modules/@ngx-share/button/fesm5/ngx-share-button.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ngx-share/button/fesm5/ngx-share-button.js ***!
  \******************************************************************/
/*! exports provided: ShareButtonModule, ShareButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonModule", function() { return ShareButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-share/core */ "./node_modules/@ngx-share/core/fesm5/ngx-share-core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareButton = /** @class */ (function () {
    function ShareButton(_share) {
        this._share = _share;
        /**
         * Show button icon
         */
        this.showIcon = true;
        /**
         * Show button text
         */
        this.showText = false;
        /**
         * Show sharing count
         */
        this.showCount = false;
        /**
         * Button size
         */
        this.size = this._share.config.size;
        /**
         * Button theme
         */
        this.theme = this._share.config.theme;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    Object.defineProperty(ShareButton.prototype, "createButton", {
        set: /**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            this.shareCount = 0;
            this.button = button;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButton.prototype, "setUrl", {
        /** Set the sharing link */
        set: /**
         * Set the sharing link
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.shareCount = 0;
            this.url = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButton.prototype, "buttonClass", {
        /** Set theme as button class */
        get: /**
         * Set theme as button class
         * @return {?}
         */
        function () {
            return "sb-button sb-" + this.theme;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} count
     * @return {?}
     */
    ShareButton.prototype.onCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.shareCount = count;
        this.count.emit(count);
    };
    ShareButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'share-button',
                    template: "<button class=\"sb-wrapper\"\r\n        [shareButton]=\"button\"\r\n        [url]=\"url\"\r\n        [image]=\"image\"\r\n        [title]=\"title\"\r\n        [description]=\"description\"\r\n        [tags]=\"tags\"\r\n        [autoSetMeta]=\"autoSetMeta\"\r\n        [getCount]=\"showCount\"\r\n        (count)=\"onCount($event)\"\r\n        (opened)=\"opened.emit($event)\"\r\n        (closed)=\"closed.emit($event)\"\r\n        [class.sb-show-icon]=\"showIcon\"\r\n        [class.sb-show-text]=\"showText\"\r\n        [class.sb-show-count]=\"showCount && shareCount\"\r\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\r\n\r\n  <div class=\"sb-inner\">\r\n\r\n    <div class=\"sb-content\">\r\n\r\n      <div *ngIf=\"showIcon && ref.shareButton\" class=\"sb-icon\">\r\n        <fa-icon [icon]=\"icon || ref.shareButton.icon\" [fixedWidth]=\"true\"></fa-icon>\r\n      </div>\r\n\r\n      <div *ngIf=\"showText && ref.shareButton\" class=\"sb-text\">\r\n        {{ text || ref.shareButton.text }}\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\r\n      <span>{{ shareCount | shareCount }}</span>\r\n    </div>\r\n\r\n  </div>\r\n</button>\r\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    styles: ["::ng-deep .sb-button,::ng-deep .sb-group{display:inline-flex;align-items:flex-start}::ng-deep .sb-group{flex-wrap:wrap}::ng-deep .sb-button{margin:.3125em}::ng-deep .sb-wrapper{font-size:inherit;cursor:pointer;position:relative;outline:0;min-width:4.125em;height:2.5em;border:none;border-radius:1px;padding:0;line-height:2.571em;background-color:transparent}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-icon,::ng-deep .sb-wrapper .sb-text{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .sb-wrapper .sb-inner{display:flex;flex:1;width:100%;height:100%}::ng-deep .sb-wrapper .sb-content{display:flex;height:100%;width:100%}::ng-deep .sb-wrapper .sb-text{padding:0 .7em;flex:1;height:100%;white-space:nowrap}::ng-deep .sb-wrapper .sb-icon{text-align:center;width:100%;height:100%;font-size:1.2em;min-width:2em}::ng-deep .sb-wrapper .sb-count{font-size:.9em;padding:0 .7em}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-text{font-weight:700}::ng-deep .sb-show-text .sb-icon{width:2em}::ng-deep .sb-show-count{min-width:5.333em}"]
                }] }
    ];
    /** @nocollapse */
    ShareButton.ctorParameters = function () { return [
        { type: _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }
    ]; };
    ShareButton.propDecorators = {
        createButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['button',] }],
        setUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['url',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autoSetMeta: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        showText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        showCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class',] }],
        ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareDirective"],] }]
    };
    return ShareButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareButtonModule = /** @class */ (function () {
    function ShareButtonModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareButtonModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareButtonModule,
            providers: [{ provide: _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["SHARE_BUTTONS_CONFIG"], useValue: config }]
        };
    };
    ShareButtonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [
                        ShareButton
                    ],
                    imports: [
                        _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    exports: [
                        _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
                        ShareButton
                    ]
                },] }
    ];
    return ShareButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-share-button.js.map

/***/ }),

/***/ "./node_modules/@ngx-share/core/fesm5/ngx-share-core.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ngx-share/core/fesm5/ngx-share-core.js ***!
  \**************************************************************/
/*! exports provided: ShareModule, ShareService, ShareDirective, SHARE_BUTTONS_CONFIG, SHARE_BUTTONS, ShareCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDirective", function() { return ShareDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS_CONFIG", function() { return SHARE_BUTTONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS", function() { return SHARE_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCountPipe", function() { return ShareCountPipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SHARE_BUTTONS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('shareButtonsConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareButtonBase = /** @class */ (function () {
    function ShareButtonBase(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._self = this;
        /**
         * If share button supports share count
         */
        this.supportShareCount = false;
    }
    Object.defineProperty(ShareButtonBase.prototype, "text", {
        /** Share button label */
        get: /**
         * Share button label
         * @return {?}
         */
        function () {
            return this._props.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "ariaLabel", {
        /** Share button aria-label attribute */
        get: /**
         * Share button aria-label attribute
         * @return {?}
         */
        function () {
            return this._props.ariaLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "color", {
        /** Share button color */
        get: /**
         * Share button color
         * @return {?}
         */
        function () {
            return this._props.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "icon", {
        /** Share button icon (FontAwesome) */
        get: /**
         * Share button icon (FontAwesome)
         * @return {?}
         */
        function () {
            return this._props.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "sharerUrl", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._platform.IOS)
                return this.ios;
            if (this._platform.ANDROID)
                return this.android;
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens share window
     */
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    ShareButtonBase.prototype.click = /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    };
    /** Get share count of a URL */
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    ShareButtonBase.prototype.shareCount = /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return undefined;
    };
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    ShareButtonBase.prototype._serializeMetaTags = /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__read"])(_a, 2), key = _b[0], value = _b[1];
            return metaTags[key] ? value + "=" + encodeURIComponent(metaTags[key]) : '';
        }))
            .join('&');
    };
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    ShareButtonBase.prototype._open = /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    function (serializedMetaTags) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            // Avoid SSR error
            if (_this.sharerUrl && _this._platform.isBrowser) {
                /** @type {?} */
                var finalUrl = _this.sharerUrl + serializedMetaTags;
                // Debug mode, log sharer link
                _this._logger(finalUrl);
                /** @type {?} */
                var popUp_1 = _this._document.defaultView.open(finalUrl, 'newwindow', _this._windowSize);
                // Resolve when share dialog is closed
                if (popUp_1) {
                    /** @type {?} */
                    var pollTimer_1 = _this._document.defaultView.setInterval((/**
                     * @return {?}
                     */
                    function () {
                        if (popUp_1.closed) {
                            _this._document.defaultView.clearInterval(pollTimer_1);
                            resolve();
                        }
                    }), 200);
                }
            }
            else {
                console.warn(_this.text + " button is not compatible on this Platform");
            }
        }));
    };
    return ShareButtonBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacebookButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(FacebookButton, _super);
    function FacebookButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this.supportShareCount = true;
        _this._supportedMetaTags = {
            url: 'u'
        };
        return _this;
    }
    Object.defineProperty(FacebookButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://www.facebook.com/sharer/sharer.php?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    FacebookButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.get("https://graph.facebook.com?id=" + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return +res.share.share_count; })));
    };
    return FacebookButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TwitterButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TwitterButton, _super);
    function TwitterButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        };
        return _this;
    }
    Object.defineProperty(TwitterButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://twitter.com/intent/tweet?";
        },
        enumerable: true,
        configurable: true
    });
    return TwitterButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinkedinButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(LinkedinButton, _super);
    function LinkedinButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url',
            title: 'title',
            description: 'summary'
        };
        return _this;
    }
    Object.defineProperty(LinkedinButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://www.linkedin.com/shareArticle?";
        },
        enumerable: true,
        configurable: true
    });
    return LinkedinButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GooglePlusButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(GooglePlusButton, _super);
    function GooglePlusButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(GooglePlusButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://plus.google.com/share?";
        },
        enumerable: true,
        configurable: true
    });
    return GooglePlusButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TumblrButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TumblrButton, _super);
    function TumblrButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this.supportShareCount = true;
        _this._supportedMetaTags = {
            url: 'canonicalUrl',
            description: 'caption',
            tags: 'tags'
        };
        return _this;
    }
    Object.defineProperty(TumblrButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://tumblr.com/widgets/share/tool?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    TumblrButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.jsonp("https://api.tumblr.com/v2/share/stats?url=" + url, 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return +res.response.note_count; })));
    };
    return TumblrButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PinterestButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(PinterestButton, _super);
    function PinterestButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this.supportShareCount = true;
        _this._supportedMetaTags = {
            url: 'url',
            description: 'description',
            image: 'media'
        };
        return _this;
    }
    Object.defineProperty(PinterestButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://pinterest.com/pin/create/button/?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    PinterestButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Check if image parameter is defined
        if (metaTags.image) {
            return this._open(this._serializeMetaTags(metaTags));
        }
        console.warn('Pinterest button: image parameter is required!');
    };
    /**
     * @param {?} url
     * @return {?}
     */
    PinterestButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.get("https://api.pinterest.com/v1/urls/count.json?url=" + url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} text
         * @return {?}
         */
        function (text) { return JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return +res.count; })));
    };
    return PinterestButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RedditButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(RedditButton, _super);
    function RedditButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url',
            title: 'title'
        };
        return _this;
    }
    Object.defineProperty(RedditButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://www.reddit.com/submit?";
        },
        enumerable: true,
        configurable: true
    });
    return RedditButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VkButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(VkButton, _super);
    function VkButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(VkButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://vk.com/share.php?";
        },
        enumerable: true,
        configurable: true
    });
    return VkButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TelegramButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TelegramButton, _super);
    function TelegramButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url',
            description: 'text'
        };
        return _this;
    }
    Object.defineProperty(TelegramButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return 'https://t.me/share/url?';
        },
        enumerable: true,
        configurable: true
    });
    return TelegramButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessengerButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(MessengerButton, _super);
    function MessengerButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'link'
        };
        return _this;
    }
    Object.defineProperty(MessengerButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return 'fb-messenger://share/?';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessengerButton.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return 'fb-messenger://share/?';
        },
        enumerable: true,
        configurable: true
    });
    return MessengerButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WhatsappButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(WhatsappButton, _super);
    function WhatsappButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            description: 'text'
        };
        return _this;
    }
    Object.defineProperty(WhatsappButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://wa.me/?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WhatsappButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return "whatsapp://send?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    WhatsappButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? metaTags.description + "\r\n" + this._url() : this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return WhatsappButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var XingButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(XingButton, _super);
    function XingButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(XingButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://www.xing.com/app/user?op=share&";
        },
        enumerable: true,
        configurable: true
    });
    return XingButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmsButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(SmsButton, _super);
    function SmsButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            description: 'body'
        };
        return _this;
    }
    Object.defineProperty(SmsButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "sms:?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmsButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return "sms:?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmsButton.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return 'sms:&';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    SmsButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? metaTags.description + "\r\n" + this._url() : this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return SmsButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmailButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(EmailButton, _super);
    function EmailButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            title: 'subject',
            description: 'body'
        };
        return _this;
    }
    Object.defineProperty(EmailButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "mailto:?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    EmailButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add URL to message body
        metaTags.description = metaTags.description ? metaTags.description + "\r\n" + this._url() : this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return EmailButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PrintButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(PrintButton, _super);
    function PrintButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        return _this;
    }
    /**
     * @return {?}
     */
    PrintButton.prototype.click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this._document.defaultView.print();
            resolve();
        }));
    };
    return PrintButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CopyButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CopyButton, _super);
    function CopyButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        return _this;
    }
    Object.defineProperty(CopyButton.prototype, "text", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disable ? this._props.extra.successLabel : this._props.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CopyButton.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disable ? this._props.extra.successIcon : this._props.icon;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CopyButton.prototype._disableButton = /**
     * @private
     * @return {?}
     */
    function () {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    };
    /**
     * @private
     * @return {?}
     */
    CopyButton.prototype._resetButton = /**
     * @private
     * @return {?}
     */
    function () {
        this._disable = false;
        this._disableButtonClick(false);
    };
    /**
     * @return {?}
     */
    CopyButton.prototype.click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            try {
                /** @type {?} */
                var textArea = (/** @type {?} */ (_this._document.createElement('textarea')));
                textArea.value = decodeURIComponent(_this._url());
                _this._document.body.appendChild(textArea);
                // highlight TextArea to copy the sharing link
                if (_this._platform.IOS) {
                    /** @type {?} */
                    var range = _this._document.createRange();
                    range.selectNodeContents(textArea);
                    /** @type {?} */
                    var selection = _this._document.defaultView.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.readOnly = true;
                    textArea.setSelectionRange(0, 999999);
                }
                else {
                    textArea.select();
                }
                _this._document.execCommand('copy');
                _this._document.body.removeChild(textArea);
                _this._disableButton();
            }
            catch (e) {
                console.warn('Copy link failed!', e.message);
            }
            finally {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this._resetButton(); }), 2000);
                resolve();
            }
        }));
    };
    return CopyButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MixButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(MixButton, _super);
    function MixButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(MixButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://mix.com/add?";
        },
        enumerable: true,
        configurable: true
    });
    return MixButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LineButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(LineButton, _super);
    function LineButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(LineButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://social-plugins.line.me/lineit/share?";
        },
        enumerable: true,
        configurable: true
    });
    return LineButton;
}(ShareButtonBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default share buttons properties
 * @type {?}
 */
var SHARE_BUTTONS = {
    facebook: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new FacebookButton(a, b, c, d, e, f, g, h); }),
        text: 'Facebook',
        icon: ['fab', 'facebook-f'],
        color: '#4267B2',
        ariaLabel: 'Share on Facebook'
    },
    twitter: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new TwitterButton(a, b, c, d, e, f, g, h); }),
        text: 'Twitter',
        icon: ['fab', 'twitter'],
        color: '#00acee',
        ariaLabel: 'Share on Twitter'
    },
    linkedin: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new LinkedinButton(a, b, c, d, e, f, g, h); }),
        text: 'LinkedIn',
        icon: ['fab', 'linkedin-in'],
        color: '#006fa6',
        ariaLabel: 'Share on LinkedIn'
    },
    google: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new GooglePlusButton(a, b, c, d, e, f, g, h); }),
        text: 'Google+',
        icon: ['fab', 'google-plus-g'],
        color: '#DB4437',
        ariaLabel: 'Share on Google plus'
    },
    pinterest: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new PinterestButton(a, b, c, d, e, f, g, h); }),
        text: 'Pinterest',
        icon: ['fab', 'pinterest-p'],
        color: '#BD091D',
        ariaLabel: 'Share on Pinterest'
    },
    reddit: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new RedditButton(a, b, c, d, e, f, g, h); }),
        text: 'Reddit',
        icon: ['fab', 'reddit-alien'],
        color: '#FF4006',
        ariaLabel: 'Share on Reddit'
    },
    tumblr: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new TumblrButton(a, b, c, d, e, f, g, h); }),
        text: 'Tumblr',
        icon: ['fab', 'tumblr'],
        color: '#36465D',
        ariaLabel: 'Share on Tumblr'
    },
    mix: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new MixButton(a, b, c, d, e, f, g, h); }),
        text: 'Mix',
        icon: ['fab', 'mix'],
        color: '#ff8226',
        ariaLabel: 'Share on Mix'
    },
    vk: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new VkButton(a, b, c, d, e, f, g, h); }),
        text: 'VKontakte',
        icon: ['fab', 'vk'],
        color: '#4C75A3',
        ariaLabel: 'Share on VKontakte'
    },
    telegram: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new TelegramButton(a, b, c, d, e, f, g, h); }),
        text: 'Telegram',
        icon: ['fab', 'telegram-plane'],
        color: '#0088cc',
        ariaLabel: 'Share on Telegram'
    },
    messenger: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new MessengerButton(a, b, c, d, e, f, g, h); }),
        text: 'Messenger',
        icon: ['fab', 'facebook-messenger'],
        color: '#0080FF',
        ariaLabel: 'Share on Messenger'
    },
    whatsapp: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new WhatsappButton(a, b, c, d, e, f, g, h); }),
        text: 'WhatsApp',
        icon: ['fab', 'whatsapp'],
        color: '#25D366',
        ariaLabel: 'Share on WhatsApp'
    },
    xing: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new XingButton(a, b, c, d, e, f, g, h); }),
        text: 'Xing',
        icon: ['fab', 'xing'],
        color: '#006567',
        ariaLabel: 'Share on Xing'
    },
    line: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new LineButton(a, b, c, d, e, f, g, h); }),
        text: 'Line',
        icon: ['fab', 'line'],
        color: '#00b900',
        ariaLabel: 'Share on Line'
    },
    sms: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new SmsButton(a, b, c, d, e, f, g, h); }),
        text: 'SMS',
        icon: 'comment-alt',
        color: '#20c16c',
        ariaLabel: 'Share link via SMS'
    },
    email: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new EmailButton(a, b, c, d, e, f, g, h); }),
        text: 'Email',
        icon: 'envelope',
        color: '#FF961C',
        ariaLabel: 'Share link via email'
    },
    print: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new PrintButton(a, b, c, d, e, f, g, h); }),
        text: 'Print',
        icon: 'print',
        color: '#765AA2',
        ariaLabel: 'Print page'
    },
    copy: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        function (a, b, c, d, e, f, g, h) { return new CopyButton(a, b, c, d, e, f, g, h); }),
        text: 'Copy link',
        icon: 'link',
        color: '#607D8B',
        ariaLabel: 'Copy link',
        extra: {
            successLabel: 'Copied',
            successIcon: 'check'
        }
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple object check.
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function mergeDeep(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var _a, _b;
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return mergeDeep.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__spread"])([target], sources));
}
/**
 * Returns a readable number from share count
 * @param {?} num
 * @param {?} digits
 * @return {?}
 */
function shareCountFormatter(num, digits) {
    /** @type {?} */
    var si = [
        { value: 1E9, symbol: 'B' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'K' }
    ];
    /** @type {?} */
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (var i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
        }
    }
    return num.toFixed(digits).replace(rx, '$1');
}
/**
 * Returns a valid URL or falls back to current URL
 * @param {?} url
 * @param {?} fallbackUrl
 * @return {?}
 */
function getValidUrl(url, fallbackUrl) {
    if (url) {
        /** @type {?} */
        var r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url))
            return url;
        console.warn("[ShareButtons]: Sharing link '" + url + "' is invalid!");
    }
    return fallbackUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareService = /** @class */ (function () {
    function ShareService(config) {
        /**
         * Global config that applies on all share buttons in the app
         */
        this.config = {
            prop: SHARE_BUTTONS,
            theme: 'default',
            include: [],
            exclude: [],
            size: 0,
            autoSetMeta: true,
            windowWidth: 800,
            windowHeight: 500,
            moreButtonIcon: 'ellipsis-h',
            lessButtonIcon: 'minus'
        };
        /**
         * Stream that emits when config changes
         */
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.config);
        if (config) {
            this.setConfig(config);
        }
    }
    Object.defineProperty(ShareService.prototype, "prop", {
        /**
         * Share buttons properties, used to get the text, color and icon of each button.
         */
        get: /**
         * Share buttons properties, used to get the text, color and icon of each button.
         * @return {?}
         */
        function () {
            return this.config.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareService.prototype, "windowSize", {
        get: /**
         * @return {?}
         */
        function () {
            return "width=" + this.config.windowWidth + ", height=" + this.config.windowHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    ShareService.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    };
    ShareService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShareService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [SHARE_BUTTONS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ShareService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"])({ factory: function ShareService_Factory() { return new ShareService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"])(SHARE_BUTTONS_CONFIG, 8)); }, token: ShareService, providedIn: "root" });
    return ShareService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareDirective = /** @class */ (function () {
    function ShareDirective(_meta, _el, _http, _platform, _renderer, _cd, _share, _document) {
        this._meta = _meta;
        this._el = _el;
        this._http = _http;
        this._platform = _platform;
        this._renderer = _renderer;
        this._cd = _cd;
        this._share = _share;
        this._document = _document;
        /**
         * Share window closed event subscription
         */
        this._shareWindowClosed = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Get share count
         */
        this.getCount = false;
        /**
         * Set meta tags from document head, useful when SEO is supported
         */
        this.autoSetMeta = this._share.config.autoSetMeta;
        /**
         * Sharing link
         */
        this.url = this._share.config.url;
        /**
         * Sets the title parameter
         */
        this.title = this._share.config.title;
        /**
         * Sets the description parameter
         */
        this.description = this._share.config.description;
        /**
         * Sets the image parameter for sharing on Pinterest
         */
        this.image = this._share.config.image;
        /**
         * Sets the tags parameter for sharing on Twitter and Tumblr
         */
        this.tags = this._share.config.tags;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    /** Share the link */
    /**
     * Share the link
     * @return {?}
     */
    ShareDirective.prototype.share = /**
     * Share the link
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var metaTags = this.autoSetMeta ? {
            url: this.url,
            title: this.title || this._getMetaTagContent('og:title'),
            description: this.description || this._getMetaTagContent('og:description'),
            image: this.image || this._getMetaTagContent('og:image'),
            via: this._share.config.twitterAccount,
            tags: this.tags,
        } : {
            url: this.url,
            title: this.title,
            description: this.description,
            image: this.image,
            tags: this.tags,
            via: this._share.config.twitterAccount,
        };
        // Emit when share dialog is opened
        this.opened.emit(this.shareButtonName);
        // Share the link
        this.shareButton.click(metaTags).then((/**
         * @return {?}
         */
        function () {
            // Emit when share dialog is closed
            return _this.closed.emit(_this.shareButtonName);
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ShareDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Avoid SSR error
        if (this._platform.isBrowser) {
            if (this._shareButtonChanged(changes['shareButtonName'])) {
                this._createShareButton();
            }
            if (this._urlChanged(changes['url'])) {
                this.url = getValidUrl(this.autoSetMeta
                    ? this.url || this._getMetaTagContent('og:url')
                    : this.url, this._document.defaultView.location.href);
                if (this.getCount && this.shareButton.supportShareCount) {
                    this.shareButton.shareCount(this.url).subscribe((/**
                     * @param {?} count
                     * @return {?}
                     */
                    function (count) { return _this.count.emit(count); }));
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ShareDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._shareWindowClosed.unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    ShareDirective.prototype._createShareButton = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var shareButtonFactory = this._share.config.prop[this.shareButtonName];
        /** @type {?} */
        var button = shareButtonFactory.create(shareButtonFactory, (
        // Pass the url property as a function, so the button class always gets the recent url value.
        // Pass the url property as a function, so the button class always gets the recent url value.
        /**
         * @return {?}
         */
        function () { return _this.url; }), this._http, this._platform, this._document, this._share.windowSize, (
        // This function is meant for the copy button
        // This function is meant for the copy button
        /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            _this.pointerEvents = disabled ? 'none' : 'auto';
            _this._cd.markForCheck();
        }), (
        // Logger used for debugging
        // Logger used for debugging
        /**
         * @param {?} text
         * @return {?}
         */
        function (text) { return _this._share.config.debug ? console.log(text) : null; }));
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._renderer.removeClass(this._el.nativeElement, "sb-" + this._buttonClass);
            // Add new button class
            this._renderer.addClass(this._el.nativeElement, "sb-" + this.shareButtonName);
            // Set button css color variable
            this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            // Set aria-label attribute
            this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
        }
        else {
            console.error("[ShareButtons]: The share button '" + this.shareButtonName + "' does not exist!");
        }
    };
    /** Get meta tag content */
    /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    ShareDirective.prototype._getMetaTagContent = /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var metaUsingProperty = this._meta.getTag("property=\"" + key + "\"");
        if (metaUsingProperty)
            return metaUsingProperty.getAttribute('content');
        /** @type {?} */
        var metaUsingName = this._meta.getTag("name=\"" + key + "\"");
        if (metaUsingName)
            return metaUsingName.getAttribute('content');
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    ShareDirective.prototype._shareButtonChanged = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    ShareDirective.prototype._urlChanged = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    };
    ShareDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"], args: [{
                    selector: '[shareButton], [share-button]'
                },] }
    ];
    /** @nocollapse */
    ShareDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"] },
        { type: ShareService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    ShareDirective.propDecorators = {
        shareButtonName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['shareButton',] }],
        getCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        autoSetMeta: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        tags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        pointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['style.pointerEvents',] }],
        share: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"], args: ['click',] }]
    };
    return ShareDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareCountPipe = /** @class */ (function () {
    function ShareCountPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    ShareCountPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    function (num, digits) {
        return shareCountFormatter(num, digits);
    };
    ShareCountPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Pipe"], args: [{
                    name: 'shareCount'
                },] }
    ];
    return ShareCountPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareModule,
            providers: [
                { provide: SHARE_BUTTONS_CONFIG, useValue: config }
            ]
        };
    };
    ShareModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"]
                    ],
                    declarations: [
                        ShareDirective,
                        ShareCountPipe
                    ],
                    exports: [
                        ShareDirective,
                        ShareCountPipe
                    ]
                },] }
    ];
    return ShareModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-share-core.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/share/share.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/share/share.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onDismiss()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <div class=\"flex-top\">\n    <ion-row margin-bottom>\n      <ion-col text-center>\n        <h3 class=\"text-xlarge margin-top\">{{ 'SHARE_THIS' | translate }}</h3>\n        <img margin-top width=\"300\" src=\"./assets/img/social-share.svg\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <share-button button=\"facebook\" [text]=\"'SHARE' | translate\" [showText]=\"true\">\n        </share-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <share-button button=\"twitter\" [text]=\"'SHARE' | translate\" [showText]=\"true\">\n        </share-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <share-button button=\"whatsapp\" [text]=\"'SHARE' | translate\" [showText]=\"true\">\n        </share-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/share/share.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/share/share.module.ts ***!
  \*********************************************/
/*! exports provided: SharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share.page */ "./src/app/pages/share/share.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm5/ngx-share-button.js");







var SharePageModule = /** @class */ (function () {
    function SharePageModule() {
    }
    SharePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _ngx_share_button__WEBPACK_IMPORTED_MODULE_6__["ShareButtonModule"],
            ],
            declarations: [_share_page__WEBPACK_IMPORTED_MODULE_4__["SharePage"]],
            entryComponents: [_share_page__WEBPACK_IMPORTED_MODULE_4__["SharePage"]]
        })
    ], SharePageModule);
    return SharePageModule;
}());



/***/ }),

/***/ "./src/app/pages/share/share.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/share/share.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/share/share.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/share/share.page.ts ***!
  \*******************************************/
/*! exports provided: SharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePage", function() { return SharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SharePage = /** @class */ (function () {
    function SharePage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    SharePage.prototype.ngOnInit = function () {
    };
    SharePage.prototype.onDismiss = function () {
        this.modalCtrl.dismiss();
    };
    SharePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! raw-loader!./share.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/share/share.page.html"),
            styles: [__webpack_require__(/*! ./share.page.scss */ "./src/app/pages/share/share.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SharePage);
    return SharePage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292"],{

/***/ "./node_modules/@angular/cdk/esm2015/platform.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/platform.js ***!
  \*******************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
let hasV8BreakIterator;
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
class Platform {
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    constructor(_platformId) {
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
}
Platform.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformModule {
}
PlatformModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
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
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(value => {
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
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: () => supportsPassiveEvents = true
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
const RtlScrollAxisType = {
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
let rtlScrollAxisType;
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
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
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


//# sourceMappingURL=platform.js.map


/***/ }),

/***/ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js ***!
  \***************************************************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns if is IconLookup or not.
 * @type {?}
 */
const isIconLookup = (/**
 * @param {?} i
 * @return {?}
 */
(i) => {
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
const faNormalizeIconSpec = (/**
 * @param {?} iconSpec
 * @param {?=} defaultPrefix
 * @return {?}
 */
(iconSpec, defaultPrefix = 'fas') => {
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
const objectWithKey = (/**
 * @template T
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
(key, value) => {
    return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? { [key]: value } : {};
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
const faClassList = (/**
 * @param {?} props
 * @return {?}
 */
(props) => {
    /** @type {?} */
    const classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-inverse': props.inverse,
        'fa-layers-counter': props.counter,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
        [`fa-${props.size}`]: props.size !== null,
        [`fa-rotate-${props.rotate}`]: props.rotate !== null,
        [`fa-pull-${props.pull}`]: props.pull !== null
    };
    return Object.keys(classes)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => (classes[key] ? key : null)))
        .filter((/**
     * @param {?} key
     * @return {?}
     */
    key => key));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const faWarnIfIconHtmlMissing = (/**
 * @param {?} iconObj
 * @param {?} iconSpec
 * @return {?}
 */
(iconObj, iconSpec) => {
    if (iconSpec && !iconObj) {
        console.error(`FontAwesome: Could not find icon with iconName=${iconSpec.iconName} and prefix=${iconSpec.prefix}`);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const faWarnIfIconSpecMissing = (/**
 * @param {?} iconSpec
 * @return {?}
 */
(iconSpec) => {
    if (!iconSpec) {
        console.error('FontAwesome: Could not find icon. ' +
            `It looks like you've provided a null or undefined icon object to this component.`);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const faNotFoundIconHtml = `<svg class="${_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["config"].replacementClass}" viewBox="0 0 448 512"></svg><!--icon not found-->`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FaIconService {
    constructor() {
        this.defaultPrefix = 'fas';
    }
}
FaIconService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ FaIconService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function FaIconService_Factory() { return new FaIconService(); }, token: FaIconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome icon.
 */
class FaIconComponent {
    /**
     * @param {?} sanitizer
     * @param {?} iconService
     */
    constructor(sanitizer, iconService) {
        this.sanitizer = sanitizer;
        this.iconService = iconService;
        this.classes = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes) {
            this.updateIconSpec();
            this.updateParams();
            this.updateIcon();
            this.renderIcon();
        }
    }
    /**
     * Updating icon spec.
     * @private
     * @return {?}
     */
    updateIconSpec() {
        this.iconSpec = faNormalizeIconSpec(this.iconProp, this.iconService.defaultPrefix);
    }
    /**
     * Updating params by component props.
     * @private
     * @return {?}
     */
    updateParams() {
        /** @type {?} */
        const classOpts = {
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
        const classes = objectWithKey('classes', [...faClassList(classOpts), ...this.classes]);
        /** @type {?} */
        const mask = objectWithKey('mask', faNormalizeIconSpec(this.mask, this.iconService.defaultPrefix));
        /** @type {?} */
        const parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        const transform = objectWithKey('transform', parsedTransform);
        this.params = Object.assign({ title: this.title }, transform, classes, mask, { styles: this.styles, symbol: this.symbol });
    }
    /**
     * Updating icon by params and icon spec.
     * @private
     * @return {?}
     */
    updateIcon() {
        this.icon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["icon"])(this.iconSpec, this.params);
    }
    /**
     * Rendering icon.
     * @private
     * @return {?}
     */
    renderIcon() {
        faWarnIfIconSpecMissing(this.iconSpec);
        faWarnIfIconHtmlMissing(this.icon, this.iconSpec);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join('\n') : faNotFoundIconHtml);
    }
}
FaIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'fa-icon',
                template: ``,
                host: {
                    class: 'ng-fa-icon',
                }
            }] }
];
/** @nocollapse */
FaIconComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: FaIconService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers.
 */
class FaLayersComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('size' in changes) {
            if (changes.size.currentValue != null) {
                this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
            }
            if (changes.size.previousValue != null) {
                this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
            }
        }
    }
}
FaLayersComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'fa-layers',
                template: `<ng-content select="fa-icon, fa-layers-text, fa-layers-counter"></ng-content>`
            }] }
];
/** @nocollapse */
FaLayersComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FaLayersComponent.propDecorators = {
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fa-fw',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Warns if parent component not existing.
 * @type {?}
 */
const faWarnIfParentNotExist = (/**
 * @param {?} parent
 * @param {?} parentName
 * @param {?} childName
 * @return {?}
 */
(parent, parentName, childName) => {
    if (!parent) {
        console.error(`FontAwesome: ${childName} should be used as child of ${parentName} only.`);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FaLayersTextBaseComponent {
    /**
     * @param {?} parent
     * @param {?} sanitizer
     */
    constructor(parent, sanitizer) {
        this.parent = parent;
        this.sanitizer = sanitizer;
        this.classes = [];
        faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes) {
            this.updateParams();
            this.updateContent();
        }
    }
    /**
     * Updating content by params and content.
     * @private
     * @return {?}
     */
    updateContent() {
        this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
    }
}
FaLayersTextBaseComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
FaLayersTextBaseComponent.ctorParameters = () => [
    { type: FaLayersComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                     * @return {?}
                     */
                    () => FaLayersComponent)),] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
FaLayersTextBaseComponent.propDecorators = {
    renderedHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['innerHTML',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers text.
 */
class FaLayersTextComponent extends FaLayersTextBaseComponent {
    /**
     * Updating params by component props.
     * @protected
     * @return {?}
     */
    updateParams() {
        /** @type {?} */
        const classOpts = {
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
        const classes = objectWithKey('classes', [...faClassList(classOpts), ...this.classes]);
        /** @type {?} */
        const parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        const transform = objectWithKey('transform', parsedTransform);
        this.params = Object.assign({}, transform, classes, { title: this.title, styles: this.styles });
    }
    /**
     * @protected
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    renderFontawesomeObject(content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["text"])(content, params);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers counter.
 */
class FaLayersCounterComponent extends FaLayersTextBaseComponent {
    /**
     * Updating params by component props.
     * @protected
     * @return {?}
     */
    updateParams() {
        this.params = {
            title: this.title,
            classes: this.classes,
            styles: this.styles,
        };
    }
    /**
     * @protected
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    renderFontawesomeObject(content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["counter"])(content, params);
    }
}
FaLayersCounterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'fa-layers-counter',
                template: '',
                host: {
                    class: 'ng-fa-layers-counter'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FontAwesomeModule {
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

/***/ "./node_modules/@ngx-share/button/fesm2015/ngx-share-button.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ngx-share/button/fesm2015/ngx-share-button.js ***!
  \*********************************************************************/
/*! exports provided: ShareButtonModule, ShareButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonModule", function() { return ShareButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-share/core */ "./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButton {
    /**
     * @param {?} _share
     */
    constructor(_share) {
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
    /**
     * @param {?} button
     * @return {?}
     */
    set createButton(button) {
        this.shareCount = 0;
        this.button = button;
    }
    /**
     * Set the sharing link
     * @param {?} url
     * @return {?}
     */
    set setUrl(url) {
        this.shareCount = 0;
        this.url = url;
    }
    /**
     * Set theme as button class
     * @return {?}
     */
    get buttonClass() {
        return `sb-button sb-${this.theme}`;
    }
    /**
     * @param {?} count
     * @return {?}
     */
    onCount(count) {
        this.shareCount = count;
        this.count.emit(count);
    }
}
ShareButton.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'share-button',
                template: "<button class=\"sb-wrapper\"\r\n        [shareButton]=\"button\"\r\n        [url]=\"url\"\r\n        [image]=\"image\"\r\n        [title]=\"title\"\r\n        [description]=\"description\"\r\n        [tags]=\"tags\"\r\n        [autoSetMeta]=\"autoSetMeta\"\r\n        [getCount]=\"showCount\"\r\n        (count)=\"onCount($event)\"\r\n        (opened)=\"opened.emit($event)\"\r\n        (closed)=\"closed.emit($event)\"\r\n        [class.sb-show-icon]=\"showIcon\"\r\n        [class.sb-show-text]=\"showText\"\r\n        [class.sb-show-count]=\"showCount && shareCount\"\r\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\r\n\r\n  <div class=\"sb-inner\">\r\n\r\n    <div class=\"sb-content\">\r\n\r\n      <div *ngIf=\"showIcon && ref.shareButton\" class=\"sb-icon\">\r\n        <fa-icon [icon]=\"icon || ref.shareButton.icon\" [fixedWidth]=\"true\"></fa-icon>\r\n      </div>\r\n\r\n      <div *ngIf=\"showText && ref.shareButton\" class=\"sb-text\">\r\n        {{ text || ref.shareButton.text }}\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\r\n      <span>{{ shareCount | shareCount }}</span>\r\n    </div>\r\n\r\n  </div>\r\n</button>\r\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: ["::ng-deep .sb-button,::ng-deep .sb-group{display:inline-flex;align-items:flex-start}::ng-deep .sb-group{flex-wrap:wrap}::ng-deep .sb-button{margin:.3125em}::ng-deep .sb-wrapper{font-size:inherit;cursor:pointer;position:relative;outline:0;min-width:4.125em;height:2.5em;border:none;border-radius:1px;padding:0;line-height:2.571em;background-color:transparent}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-icon,::ng-deep .sb-wrapper .sb-text{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .sb-wrapper .sb-inner{display:flex;flex:1;width:100%;height:100%}::ng-deep .sb-wrapper .sb-content{display:flex;height:100%;width:100%}::ng-deep .sb-wrapper .sb-text{padding:0 .7em;flex:1;height:100%;white-space:nowrap}::ng-deep .sb-wrapper .sb-icon{text-align:center;width:100%;height:100%;font-size:1.2em;min-width:2em}::ng-deep .sb-wrapper .sb-count{font-size:.9em;padding:0 .7em}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-text{font-weight:700}::ng-deep .sb-show-text .sb-icon{width:2em}::ng-deep .sb-show-count{min-width:5.333em}"]
            }] }
];
/** @nocollapse */
ShareButton.ctorParameters = () => [
    { type: _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButtonModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareButtonModule,
            providers: [{ provide: _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["SHARE_BUTTONS_CONFIG"], useValue: config }]
        };
    }
}
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

/***/ "./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js ***!
  \*****************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SHARE_BUTTONS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('shareButtonsConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
    /**
     * Share button label
     * @return {?}
     */
    get text() {
        return this._props.text;
    }
    /**
     * Share button aria-label attribute
     * @return {?}
     */
    get ariaLabel() {
        return this._props.ariaLabel;
    }
    /**
     * Share button color
     * @return {?}
     */
    get color() {
        return this._props.color;
    }
    /**
     * Share button icon (FontAwesome)
     * @return {?}
     */
    get icon() {
        return this._props.icon;
    }
    /**
     * @return {?}
     */
    get desktop() {
        return undefined;
    }
    /**
     * @return {?}
     */
    get android() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get ios() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get sharerUrl() {
        if (this._platform.IOS)
            return this.ios;
        if (this._platform.ANDROID)
            return this.android;
        return this.desktop;
    }
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    }
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return undefined;
    }
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    _serializeMetaTags(metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => metaTags[key] ? `${value}=${encodeURIComponent(metaTags[key])}` : ''))
            .join('&');
    }
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    _open(serializedMetaTags) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            // Avoid SSR error
            if (this.sharerUrl && this._platform.isBrowser) {
                /** @type {?} */
                const finalUrl = this.sharerUrl + serializedMetaTags;
                // Debug mode, log sharer link
                this._logger(finalUrl);
                /** @type {?} */
                const popUp = this._document.defaultView.open(finalUrl, 'newwindow', this._windowSize);
                // Resolve when share dialog is closed
                if (popUp) {
                    /** @type {?} */
                    const pollTimer = this._document.defaultView.setInterval((/**
                     * @return {?}
                     */
                    () => {
                        if (popUp.closed) {
                            this._document.defaultView.clearInterval(pollTimer);
                            resolve();
                        }
                    }), 200);
                }
            }
            else {
                console.warn(`${this.text} button is not compatible on this Platform`);
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacebookButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'u'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://www.facebook.com/sharer/sharer.php?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://graph.facebook.com?id=${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.share.share_count)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TwitterButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://twitter.com/intent/tweet?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkedinButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            title: 'title',
            description: 'summary'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://www.linkedin.com/shareArticle?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GooglePlusButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://plus.google.com/share?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TumblrButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'canonicalUrl',
            description: 'caption',
            tags: 'tags'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://tumblr.com/widgets/share/tool?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.jsonp(`https://api.tumblr.com/v2/share/stats?url=${url}`, 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.response.note_count)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PinterestButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'url',
            description: 'description',
            image: 'media'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://pinterest.com/pin/create/button/?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Check if image parameter is defined
        if (metaTags.image) {
            return this._open(this._serializeMetaTags(metaTags));
        }
        console.warn('Pinterest button: image parameter is required!');
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://api.pinterest.com/v1/urls/count.json?url=${url}`, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} text
         * @return {?}
         */
        (text) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.count)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RedditButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            title: 'title'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://www.reddit.com/submit?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VkButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://vk.com/share.php?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TelegramButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url',
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return 'https://t.me/share/url?';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessengerButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'link'
        };
    }
    /**
     * @return {?}
     */
    get android() {
        return 'fb-messenger://share/?';
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'fb-messenger://share/?';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WhatsappButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://wa.me/?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `whatsapp://send?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class XingButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://www.xing.com/app/user?op=share&`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmsButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'sms:&';
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmailButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            title: 'subject',
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `mailto:?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrintButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
    }
    /**
     * @return {?}
     */
    click() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this._document.defaultView.print();
            resolve();
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CopyButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
    }
    /**
     * @return {?}
     */
    get text() {
        return this._disable ? this._props.extra.successLabel : this._props.text;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._disable ? this._props.extra.successIcon : this._props.icon;
    }
    /**
     * @private
     * @return {?}
     */
    _disableButton() {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    }
    /**
     * @private
     * @return {?}
     */
    _resetButton() {
        this._disable = false;
        this._disableButtonClick(false);
    }
    /**
     * @return {?}
     */
    click() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            try {
                /** @type {?} */
                const textArea = (/** @type {?} */ (this._document.createElement('textarea')));
                textArea.value = decodeURIComponent(this._url());
                this._document.body.appendChild(textArea);
                // highlight TextArea to copy the sharing link
                if (this._platform.IOS) {
                    /** @type {?} */
                    const range = this._document.createRange();
                    range.selectNodeContents(textArea);
                    /** @type {?} */
                    const selection = this._document.defaultView.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.readOnly = true;
                    textArea.setSelectionRange(0, 999999);
                }
                else {
                    textArea.select();
                }
                this._document.execCommand('copy');
                this._document.body.removeChild(textArea);
                this._disableButton();
            }
            catch (e) {
                console.warn('Copy link failed!', e.message);
            }
            finally {
                setTimeout((/**
                 * @return {?}
                 */
                () => this._resetButton()), 2000);
                resolve();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MixButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://mix.com/add?`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LineButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._supportedMetaTags = {
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://social-plugins.line.me/lineit/share?`;
    }
}

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
const SHARE_BUTTONS = {
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
        (a, b, c, d, e, f, g, h) => new FacebookButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new TwitterButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new LinkedinButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new GooglePlusButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new PinterestButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new RedditButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new TumblrButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new MixButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new VkButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new TelegramButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new MessengerButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new WhatsappButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new XingButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new LineButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new SmsButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new EmailButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new PrintButton(a, b, c, d, e, f, g, h)),
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
        (a, b, c, d, e, f, g, h) => new CopyButton(a, b, c, d, e, f, g, h)),
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
function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
/**
 * Returns a readable number from share count
 * @param {?} num
 * @param {?} digits
 * @return {?}
 */
function shareCountFormatter(num, digits) {
    /** @type {?} */
    const si = [
        { value: 1E9, symbol: 'B' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'K' }
    ];
    /** @type {?} */
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < si.length; i++) {
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
        const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url))
            return url;
        console.warn(`[ShareButtons]: Sharing link '${url}' is invalid!`);
    }
    return fallbackUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareService {
    /**
     * @param {?} config
     */
    constructor(config) {
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
    /**
     * Share buttons properties, used to get the text, color and icon of each button.
     * @return {?}
     */
    get prop() {
        return this.config.prop;
    }
    /**
     * @return {?}
     */
    get windowSize() {
        return `width=${this.config.windowWidth}, height=${this.config.windowHeight}`;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    }
}
ShareService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ShareService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [SHARE_BUTTONS_CONFIG,] }] }
];
/** @nocollapse */ ShareService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function ShareService_Factory() { return new ShareService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"])(SHARE_BUTTONS_CONFIG, 8)); }, token: ShareService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareDirective {
    /**
     * @param {?} _meta
     * @param {?} _el
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _renderer
     * @param {?} _cd
     * @param {?} _share
     * @param {?} _document
     */
    constructor(_meta, _el, _http, _platform, _renderer, _cd, _share, _document) {
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
        this.count = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * Share the link
     * @return {?}
     */
    share() {
        /** @type {?} */
        const metaTags = this.autoSetMeta ? {
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
        () => 
        // Emit when share dialog is closed
        this.closed.emit(this.shareButtonName)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
                    (count) => this.count.emit(count)));
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._shareWindowClosed.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _createShareButton() {
        /** @type {?} */
        const shareButtonFactory = this._share.config.prop[this.shareButtonName];
        /** @type {?} */
        const button = shareButtonFactory.create(shareButtonFactory, (
        // Pass the url property as a function, so the button class always gets the recent url value.
        /**
         * @return {?}
         */
        () => this.url), this._http, this._platform, this._document, this._share.windowSize, (
        // This function is meant for the copy button
        /**
         * @param {?} disabled
         * @return {?}
         */
        (disabled) => {
            this.pointerEvents = disabled ? 'none' : 'auto';
            this._cd.markForCheck();
        }), (
        // Logger used for debugging
        /**
         * @param {?} text
         * @return {?}
         */
        (text) => this._share.config.debug ? console.log(text) : null));
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._renderer.removeClass(this._el.nativeElement, `sb-${this._buttonClass}`);
            // Add new button class
            this._renderer.addClass(this._el.nativeElement, `sb-${this.shareButtonName}`);
            // Set button css color variable
            this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            // Set aria-label attribute
            this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
        }
        else {
            console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`);
        }
    }
    /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    _getMetaTagContent(key) {
        /** @type {?} */
        const metaUsingProperty = this._meta.getTag(`property="${key}"`);
        if (metaUsingProperty)
            return metaUsingProperty.getAttribute('content');
        /** @type {?} */
        const metaUsingName = this._meta.getTag(`name="${key}"`);
        if (metaUsingName)
            return metaUsingName.getAttribute('content');
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    _shareButtonChanged(change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    _urlChanged(change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    }
}
ShareDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                selector: '[shareButton], [share-button]'
            },] }
];
/** @nocollapse */
ShareDirective.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] },
    { type: ShareService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
ShareDirective.propDecorators = {
    shareButtonName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['shareButton',] }],
    getCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    autoSetMeta: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    tags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    pointerEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['style.pointerEvents',] }],
    share: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareCountPipe {
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    transform(num, digits) {
        return shareCountFormatter(num, digits);
    }
}
ShareCountPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Pipe"], args: [{
                name: 'shareCount'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareModule,
            providers: [
                { provide: SHARE_BUTTONS_CONFIG, useValue: config }
            ]
        };
    }
}
ShareModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share.page */ "./src/app/pages/share/share.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm2015/ngx-share-button.js");







let SharePageModule = class SharePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SharePage = class SharePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    onDismiss() {
        this.modalCtrl.dismiss();
    }
};
SharePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share',
        template: __webpack_require__(/*! raw-loader!./share.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/share/share.page.html"),
        styles: [__webpack_require__(/*! ./share.page.scss */ "./src/app/pages/share/share.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], SharePage);



/***/ })

}]);
//# sourceMappingURL=default~pages-place-detail-place-detail-module~pages-post-detail-post-detail-module~pages-user-detai~10165292-es2015.js.map
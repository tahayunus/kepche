(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module"],{

/***/ "./node_modules/@angular/cdk/esm5/a11y.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/a11y.es5.js ***!
  \****************************************************/
/*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function() { return ARIA_DESCRIBER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function() { return ARIA_DESCRIBER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function() { return LIVE_ANNOUNCER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function() { return FOCUS_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function() { return FOCUS_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
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

/**
 * IDs are deliminated by an empty space, as per the spec.
 * @type {?}
 */
var ID_DELIMINATOR = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    /** @type {?} */
    var ids = getAriaReferenceIds(el, attr);
    if (ids.some(function (existingId) { return existingId.trim() == id.trim(); })) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMINATOR));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    /** @type {?} */
    var ids = getAriaReferenceIds(el, attr);
    /** @type {?} */
    var filteredIds = ids.filter(function (val) { return val != id.trim(); });
    el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace deliminated) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ID used for the body container where all messages are appended.
 * @type {?}
 */
var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @type {?}
 */
var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @type {?}
 */
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 * @type {?}
 */
var nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 * @type {?}
 */
var messageRegistry = new Map();
/**
 * Container for all registered messages.
 * @type {?}
 */
var messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 * \@docs-private
 */
var AriaDescriber = /** @class */ (function () {
    function AriaDescriber(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.describe = /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    };
    /** Removes the host element's aria-describedby reference to the message element. */
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.removeDescription = /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        /** @type {?} */
        var registeredMessage = messageRegistry.get(message);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(message);
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    };
    /** Unregisters all created message elements and removes the message container. */
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    AriaDescriber.prototype.ngOnDestroy = /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var describedElements = this._document.querySelectorAll("[" + CDK_DESCRIBEDBY_HOST_ATTRIBUTE + "]");
        for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    };
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._createMessageElement = /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var messageElement = this._document.createElement('div');
        messageElement.setAttribute('id', CDK_DESCRIBEDBY_ID_PREFIX + "-" + nextId++);
        messageElement.appendChild((/** @type {?} */ (this._document.createTextNode(message))));
        this._createMessagesContainer();
        (/** @type {?} */ (messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement: messageElement, referenceCount: 0 });
    };
    /** Deletes the message element from the global messages container. */
    /**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessageElement = /**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        var messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    };
    /** Creates the global container for all aria-describedby messages. */
    /**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */
    AriaDescriber.prototype._createMessagesContainer = /**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */
    function () {
        if (!messagesContainer) {
            /** @type {?} */
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer) {
                (/** @type {?} */ (preExistingContainer.parentNode)).removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';
            this._document.body.appendChild(messagesContainer);
        }
    };
    /** Deletes the global messages container. */
    /**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessagesContainer = /**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */
    function () {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    };
    /** Removes all cdk-describedby messages that are hosted through the element. */
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */
    AriaDescriber.prototype._removeCdkDescribedByReferenceIds = /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        /** @type {?} */
        var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(function (id) { return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0; });
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    };
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._addMessageReference = /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        /** @type {?} */
        var registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    };
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._removeMessageReference = /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        /** @type {?} */
        var registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    };
    /** Returns true if the element has been described by the provided message ID. */
    /**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._isElementDescribedByMessage = /**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        /** @type {?} */
        var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        /** @type {?} */
        var registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        var messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    };
    /** Determines whether a message can be described on a particular element. */
    /**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._canBeDescribed = /**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        return element.nodeType === this._document.ELEMENT_NODE && message != null &&
            !!("" + message).trim();
    };
    AriaDescriber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    AriaDescriber.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
    return AriaDescriber;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */
function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
    return parentDispatcher || new AriaDescriber(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var ARIA_DESCRIBER_PROVIDER = {
    // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
    provide: AriaDescriber,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
        (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))
    ],
    useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
var  /**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
ListKeyManager = /** @class */ (function () {
    function ListKeyManager(_items) {
        var _this = this;
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = function (item) { return item.disabled; };
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
                if (_this._activeItem) {
                    /** @type {?} */
                    var itemArray = newItems.toArray();
                    /** @type {?} */
                    var newIndex = itemArray.indexOf(_this._activeItem);
                    if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                        _this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    ListKeyManager.prototype.skipPredicate = /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    function (predicate) {
        (/** @type {?} */ (this))._skipPredicateFn = predicate;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    ListKeyManager.prototype.withWrap = /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    function (shouldWrap) {
        if (shouldWrap === void 0) { shouldWrap = true; }
        (/** @type {?} */ (this))._wrap = shouldWrap;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    ListKeyManager.prototype.withVerticalOrientation = /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    function (enabled) {
        if (enabled === void 0) { enabled = true; }
        (/** @type {?} */ (this))._vertical = enabled;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    ListKeyManager.prototype.withHorizontalOrientation = /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._horizontal = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    ListKeyManager.prototype.withAllowedModifierKeys = /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    function (keys) {
        (/** @type {?} */ (this))._allowedModifierKeys = keys;
        return (/** @type {?} */ (this));
    };
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    ListKeyManager.prototype.withTypeAhead = /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    function (debounceInterval) {
        var _this = this;
        if (debounceInterval === void 0) { debounceInterval = 200; }
        if ((/** @type {?} */ (this))._items.length && (/** @type {?} */ (this))._items.some(function (item) { return typeof item.getLabel !== 'function'; })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        (/** @type {?} */ (this))._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        (/** @type {?} */ (this))._typeaheadSubscription = (/** @type {?} */ (this))._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (keyCode) { return (/** @type {?} */ (_this))._pressedLetters.push(keyCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return (/** @type {?} */ (_this))._pressedLetters.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return (/** @type {?} */ (_this))._pressedLetters.join(''); })).subscribe(function (inputString) {
            /** @type {?} */
            var items = (/** @type {?} */ (_this))._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (var i = 1; i < items.length + 1; i++) {
                /** @type {?} */
                var index = ((/** @type {?} */ (_this))._activeItemIndex + i) % items.length;
                /** @type {?} */
                var item = items[index];
                if (!(/** @type {?} */ (_this))._skipPredicateFn(item) &&
                    (/** @type {?} */ (item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    (/** @type {?} */ (_this)).setActiveItem(index);
                    break;
                }
            }
            (/** @type {?} */ (_this))._pressedLetters = [];
        });
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    ListKeyManager.prototype.onKeydown = /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        /** @type {?} */
        var isModifierAllowed = modifiers.every(function (modifier) {
            return !event[modifier] || _this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Index of the currently active item. */
        get: /**
         * Index of the currently active item.
         * @return {?}
         */
        function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** The active item. */
        get: /**
         * The active item.
         * @return {?}
         */
        function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active item to the first enabled item in the list. */
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setFirstItemActive = /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setLastItemActive = /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setNextItemActive = /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setPreviousItemActive = /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var itemArray = this._getItemsArray();
        /** @type {?} */
        var index = typeof item === 'number' ? item : itemArray.indexOf(item);
        /** @type {?} */
        var activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     * @deprecated Use `updateActiveItem` instead.
     * @breaking-change 8.0.0
     */
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 8.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItemIndex = /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 8.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    function (index) {
        this.updateActiveItem(index);
    };
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByDelta = /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInWrapMode = /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        /** @type {?} */
        var items = this._getItemsArray();
        for (var i = 1; i <= items.length; i++) {
            /** @type {?} */
            var index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            /** @type {?} */
            var item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInDefaultMode = /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByIndex = /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    function (index, fallbackDelta) {
        /** @type {?} */
        var items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    /** Returns the items as an array. */
    /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    ListKeyManager.prototype._getItemsArray = /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    function () {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    };
    return ListKeyManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ActiveDescendantKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ActiveDescendantKeyManager, _super);
    function ActiveDescendantKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ActiveDescendantKeyManager.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    };
    return ActiveDescendantKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
FocusKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(FocusKeyManager, _super);
    function FocusKeyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._origin = 'program';
        return _this;
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    FocusKeyManager.prototype.setFocusOrigin = /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    function (origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FocusKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.setActiveItem.call(this, item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    };
    return FocusKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /** @class */ (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    function (element) {
        // Nothing is tabbable on the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        /** @type {?} */
        var frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            /** @type {?} */
            var frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        /** @type {?} */
        var nodeName = element.nodeName.toLowerCase();
        /** @type {?} */
        var tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    InteractivityChecker.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
    /** @nocollapse */ InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
    return InteractivityChecker;
}());
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return (/** @type {?} */ (window.frameElement));
    }
    catch (_a) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    /** @type {?} */
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    /** @type {?} */
    var tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    /** @type {?} */
    var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    /** @type {?} */
    var nodeName = element.nodeName.toLowerCase();
    /** @type {?} */
    var inputType = nodeName === 'input' && ((/** @type {?} */ (element))).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
var  /**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        var _this = this;
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this._startAnchorListener = function () { return _this.focusLastTabbableElement(); };
        this._endAnchorListener = function () { return _this.focusFirstTabbableElement(); };
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._enabled = value;
            if (this._startAnchor && this._endAnchor) {
                this._toggleAnchorTabIndex(value, this._startAnchor);
                this._toggleAnchorTabIndex(value, this._endAnchor);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    FocusTrap.prototype.destroy = /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startAnchor = this._startAnchor;
        /** @type {?} */
        var endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this._startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this._endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    FocusTrap.prototype.attachAnchors = /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(function () {
            if (!_this._startAnchor) {
                _this._startAnchor = _this._createAnchor();
                (/** @type {?} */ (_this._startAnchor)).addEventListener('focus', _this._startAnchorListener);
            }
            if (!_this._endAnchor) {
                _this._endAnchor = _this._createAnchor();
                (/** @type {?} */ (_this._endAnchor)).addEventListener('focus', _this._endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore((/** @type {?} */ (this._startAnchor)), this._element);
            this._element.parentNode.insertBefore((/** @type {?} */ (this._endAnchor)), this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    /**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = /**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        var markers = (/** @type {?} */ (this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]"))));
        for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated ") +
                    "attribute will be removed in 8.0.0.", markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated attribute ") +
                    "will be removed in 8.0.0.", markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        var redirectToElement = (/** @type {?} */ (this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]")));
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " +
                    "use 'cdkFocusInitial' instead. The deprecated attribute " +
                    "will be removed in 8.0.0", redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        /** @type {?} */
        var redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        /** @type {?} */
        var redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    FocusTrap.prototype.hasAttached = /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    function () {
        return this._hasAttached;
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getFirstTabbableElement = /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        /** @type {?} */
        var children = root.children || root.childNodes;
        for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getLastTabbableElement = /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        /** @type {?} */
        var children = root.children || root.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Creates an anchor element. */
    /**
     * Creates an anchor element.
     * @private
     * @return {?}
     */
    FocusTrap.prototype._createAnchor = /**
     * Creates an anchor element.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    };
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */
    FocusTrap.prototype._toggleAnchorTabIndex = /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */
    function (isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    };
    /** Executes a function when the zone is stable. */
    /**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */
    FocusTrap.prototype._executeOnStable = /**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
/**
 * Factory that allows easy instantiation of focus traps.
 */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    FocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
    return FocusTrapFactory;
}());
/**
 * Directive for trapping focus within a region.
 */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this.focusTrap.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         */
        get: /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */
        function () { return this._autoCapture; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = (/** @type {?} */ (this._document.activeElement));
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    };
    CdkTrapFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkTrapFocus]',
                    exportAs: 'cdkTrapFocus',
                },] },
    ];
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: FocusTrapFactory },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    CdkTrapFocus.propDecorators = {
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocus',] }],
        autoCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocusAutoCapture',] }]
    };
    return CdkTrapFocus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The token for the live announcer element is defined in a separate file from LiveAnnouncer
// as a workaround for https://github.com/angular/angular/issues/22559
/** @type {?} */
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LiveAnnouncer = /** @class */ (function () {
    function LiveAnnouncer(elementToken, _ngZone, _document) {
        this._ngZone = _ngZone;
        // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.
        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */
    LiveAnnouncer.prototype.announce = /**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */
    function (message) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var politeness;
        /** @type {?} */
        var duration;
        if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
        }
        else {
            politeness = args[0], duration = args[1];
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', (/** @type {?} */ (politeness)) || 'polite');
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                clearTimeout(_this._previousTimeout);
                _this._previousTimeout = setTimeout(function () {
                    _this._liveElement.textContent = message;
                    resolve();
                    if (typeof duration === 'number') {
                        _this._previousTimeout = setTimeout(function () { return _this.clear(); }, duration);
                    }
                }, 100);
            });
        });
    };
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */
    LiveAnnouncer.prototype.clear = /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */
    function () {
        if (this._liveElement) {
            this._liveElement.textContent = '';
        }
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this._previousTimeout);
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
            this._liveElement = (/** @type {?} */ (null));
        }
    };
    /**
     * @private
     * @return {?}
     */
    LiveAnnouncer.prototype._createLiveElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementClass = 'cdk-live-announcer-element';
        /** @type {?} */
        var previousElements = this._document.getElementsByClassName(elementClass);
        /** @type {?} */
        var liveEl = this._document.createElement('div');
        // Remove any old containers. This can happen when coming in from a server-side-rendered page.
        for (var i = 0; i < previousElements.length; i++) {
            (/** @type {?} */ (previousElements[i].parentNode)).removeChild(previousElements[i]);
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    };
    LiveAnnouncer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LiveAnnouncer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: LiveAnnouncer, providedIn: "root" });
    return LiveAnnouncer;
}());
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
var CdkAriaLive = /** @class */ (function () {
    function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
    }
    Object.defineProperty(CdkAriaLive.prototype, "politeness", {
        /** The aria-live politeness level to use when announcing messages. */
        get: /**
         * The aria-live politeness level to use when announcing messages.
         * @return {?}
         */
        function () { return this._politeness; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';
            if (this._politeness === 'off') {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                    this._subscription = null;
                }
            }
            else if (!this._subscription) {
                this._subscription = this._ngZone.runOutsideAngular(function () {
                    return _this._contentObserver
                        .observe(_this._elementRef)
                        .subscribe(function () {
                        // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                        /** @type {?} */
                        var elementText = _this._elementRef.nativeElement.textContent;
                        // The `MutationObserver` fires also for attribute
                        // changes which we don't want to announce.
                        if (elementText !== _this._previousAnnouncedText) {
                            _this._liveAnnouncer.announce(elementText, _this._politeness);
                            _this._previousAnnouncedText = elementText;
                        }
                    });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkAriaLive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    CdkAriaLive.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkAriaLive]',
                    exportAs: 'cdkAriaLive',
                },] },
    ];
    /** @nocollapse */
    CdkAriaLive.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LiveAnnouncer },
        { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ContentObserver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CdkAriaLive.propDecorators = {
        politeness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAriaLive',] }]
    };
    return CdkAriaLive;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentAnnouncer
 * @param {?} liveElement
 * @param {?} _document
 * @param {?} ngZone
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer, liveElement, _document, ngZone) {
    return parentAnnouncer || new LiveAnnouncer(liveElement, ngZone, _document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
/** @type {?} */
var TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also
 * mark the the listener as passive if the browser supports it.
 * @type {?}
 */
var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
    passive: true,
    capture: true
});
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
var FocusMonitor = /** @class */ (function () {
    function FocusMonitor(_ngZone, _platform) {
        var _this = this;
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentKeydownListener = function () {
            // On keydown record the origin and clear any touch event that may be in progress.
            _this._lastTouchTarget = null;
            _this._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentMousedownListener = function () {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!_this._lastTouchTarget) {
                _this._setOriginForCurrentEventQueue('mouse');
            }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentTouchstartListener = function (event) {
            // When the touchstart event fires the focus event is not yet in the event queue. This means
            // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
            // see if a focus happens.
            if (_this._touchTimeoutId != null) {
                clearTimeout(_this._touchTimeoutId);
            }
            _this._lastTouchTarget = event.target;
            _this._touchTimeoutId = setTimeout(function () { return _this._lastTouchTarget = null; }, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._windowFocusListener = function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this._windowFocused = true;
            _this._windowFocusTimeoutId = setTimeout(function () { return _this._windowFocused = false; });
        };
    }
    /**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */
    FocusMonitor.prototype.monitor = /**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */
    function (element, checkChildren) {
        var _this = this;
        if (checkChildren === void 0) { checkChildren = false; }
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceElement"])(element);
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(nativeElement)) {
            /** @type {?} */
            var cachedInfo = this._elementInfo.get(nativeElement);
            (/** @type {?} */ (cachedInfo)).checkChildren = checkChildren;
            return (/** @type {?} */ (cachedInfo)).subject.asObservable();
        }
        // Create monitored element info.
        /** @type {?} */
        var info = {
            unlisten: function () { },
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this._elementInfo.set(nativeElement, info);
        this._incrementMonitoredElementCount();
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        /** @type {?} */
        var focusListener = function (event) { return _this._onFocus(event, nativeElement); };
        /** @type {?} */
        var blurListener = function (event) { return _this._onBlur(event, nativeElement); };
        this._ngZone.runOutsideAngular(function () {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = function () {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    FocusMonitor.prototype.stopMonitoring = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceElement"])(element);
        /** @type {?} */
        var elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(nativeElement);
            this._elementInfo.delete(nativeElement);
            this._decrementMonitoredElementCount();
        }
    };
    /**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */
    FocusMonitor.prototype.focusVia = /**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */
    function (element, origin, options) {
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceElement"])(element);
        this._setOriginForCurrentEventQueue(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
            ((/** @type {?} */ (nativeElement))).focus(options);
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementInfo.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    /**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    FocusMonitor.prototype._toggleClass = /**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    function (element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    };
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype._setClasses = /**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        /** @type {?} */
        var elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
    };
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param origin The origin to set.
     */
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */
    FocusMonitor.prototype._setOriginForCurrentEventQueue = /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._origin = origin;
            // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.
            _this._originTimeoutId = setTimeout(function () { return _this._origin = null; }, 1);
        });
    };
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    FocusMonitor.prototype._wasCausedByTouch = /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    function (event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        /** @type {?} */
        var focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    };
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    /**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onFocus = /**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        /** @type {?} */
        var elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== event.target)) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        /** @type {?} */
        var origin = this._origin;
        if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                origin = 'touch';
            }
            else {
                origin = 'program';
            }
        }
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    };
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onBlur = /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        /** @type {?} */
        var elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    };
    /**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    FocusMonitor.prototype._emitOrigin = /**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    function (subject, origin) {
        this._ngZone.run(function () { return subject.next(origin); });
    };
    /**
     * @private
     * @return {?}
     */
    FocusMonitor.prototype._incrementMonitoredElementCount = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(function () {
                document.addEventListener('keydown', _this._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', _this._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', _this._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', _this._windowFocusListener);
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    FocusMonitor.prototype._decrementMonitoredElementCount = /**
     * @private
     * @return {?}
     */
    function () {
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.removeEventListener('focus', this._windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
        }
    };
    FocusMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusMonitor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
    /** @nocollapse */ FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: FocusMonitor, providedIn: "root" });
    return FocusMonitor;
}());
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
var CdkMonitorFocus = /** @class */ (function () {
    function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(function (origin) { return _this.cdkFocusChange.emit(origin); });
    }
    /**
     * @return {?}
     */
    CdkMonitorFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._monitorSubscription.unsubscribe();
    };
    CdkMonitorFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
                },] },
    ];
    /** @nocollapse */
    CdkMonitorFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: FocusMonitor }
    ]; };
    CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CdkMonitorFocus;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusMonitor(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var FOCUS_MONITOR_PROVIDER = {
    // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
    provide: FocusMonitor,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]],
    useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var A11yModule = /** @class */ (function () {
    function A11yModule() {
    }
    A11yModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"]],
                    declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                },] },
    ];
    return A11yModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=a11y.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            /** @type {?} */
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/collections.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/collections.es5.js ***!
  \***********************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
var  /**
 * DataSource wrapper for a native array.
 * @template T
 */
ArrayDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayDataSource, _super);
    function ArrayDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._data);
    };
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ArrayDataSource;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
var  /**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        var _this = this;
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */
        this.onChange = this.changed;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(function (value) { return _this._markSelected(value); });
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.select = /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._markSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    SelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    SelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    SelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    SelectionModel.prototype.sort = /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    function (predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    };
    /**
     * Gets whether multiple values can be selected.
     */
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    SelectionModel.prototype.isMultipleSelection = /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    function () {
        return this._multiple;
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._emitChangeEvent = /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /** Selects a value. */
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach(function (value) { return _this._unmarkSelected(value); });
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    SelectionModel.prototype._verifyValueAssignment = /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) {
                return listener !== registered;
            });
        };
    };
    /**
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=collections.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/keycodes.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/keycodes.es5.js ***!
  \********************************************************/
/*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModifierKey", function() { return hasModifierKey; });
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

/** @type {?} */
var MAC_ENTER = 3;
/** @type {?} */
var BACKSPACE = 8;
/** @type {?} */
var TAB = 9;
/** @type {?} */
var NUM_CENTER = 12;
/** @type {?} */
var ENTER = 13;
/** @type {?} */
var SHIFT = 16;
/** @type {?} */
var CONTROL = 17;
/** @type {?} */
var ALT = 18;
/** @type {?} */
var PAUSE = 19;
/** @type {?} */
var CAPS_LOCK = 20;
/** @type {?} */
var ESCAPE = 27;
/** @type {?} */
var SPACE = 32;
/** @type {?} */
var PAGE_UP = 33;
/** @type {?} */
var PAGE_DOWN = 34;
/** @type {?} */
var END = 35;
/** @type {?} */
var HOME = 36;
/** @type {?} */
var LEFT_ARROW = 37;
/** @type {?} */
var UP_ARROW = 38;
/** @type {?} */
var RIGHT_ARROW = 39;
/** @type {?} */
var DOWN_ARROW = 40;
/** @type {?} */
var PLUS_SIGN = 43;
/** @type {?} */
var PRINT_SCREEN = 44;
/** @type {?} */
var INSERT = 45;
/** @type {?} */
var DELETE = 46;
/** @type {?} */
var ZERO = 48;
/** @type {?} */
var ONE = 49;
/** @type {?} */
var TWO = 50;
/** @type {?} */
var THREE = 51;
/** @type {?} */
var FOUR = 52;
/** @type {?} */
var FIVE = 53;
/** @type {?} */
var SIX = 54;
/** @type {?} */
var SEVEN = 55;
/** @type {?} */
var EIGHT = 56;
/** @type {?} */
var NINE = 57;
/** @type {?} */
var FF_SEMICOLON = 59;
// Firefox (Gecko) fires this for semicolon instead of 186
/** @type {?} */
var FF_EQUALS = 61;
// Firefox (Gecko) fires this for equals instead of 187
/** @type {?} */
var QUESTION_MARK = 63;
/** @type {?} */
var AT_SIGN = 64;
/** @type {?} */
var A = 65;
/** @type {?} */
var B = 66;
/** @type {?} */
var C = 67;
/** @type {?} */
var D = 68;
/** @type {?} */
var E = 69;
/** @type {?} */
var F = 70;
/** @type {?} */
var G = 71;
/** @type {?} */
var H = 72;
/** @type {?} */
var I = 73;
/** @type {?} */
var J = 74;
/** @type {?} */
var K = 75;
/** @type {?} */
var L = 76;
/** @type {?} */
var M = 77;
/** @type {?} */
var N = 78;
/** @type {?} */
var O = 79;
/** @type {?} */
var P = 80;
/** @type {?} */
var Q = 81;
/** @type {?} */
var R = 82;
/** @type {?} */
var S = 83;
/** @type {?} */
var T = 84;
/** @type {?} */
var U = 85;
/** @type {?} */
var V = 86;
/** @type {?} */
var W = 87;
/** @type {?} */
var X = 88;
/** @type {?} */
var Y = 89;
/** @type {?} */
var Z = 90;
/** @type {?} */
var META = 91;
// WIN_KEY_LEFT
/** @type {?} */
var MAC_WK_CMD_LEFT = 91;
/** @type {?} */
var MAC_WK_CMD_RIGHT = 93;
/** @type {?} */
var CONTEXT_MENU = 93;
/** @type {?} */
var NUMPAD_ZERO = 96;
/** @type {?} */
var NUMPAD_ONE = 97;
/** @type {?} */
var NUMPAD_TWO = 98;
/** @type {?} */
var NUMPAD_THREE = 99;
/** @type {?} */
var NUMPAD_FOUR = 100;
/** @type {?} */
var NUMPAD_FIVE = 101;
/** @type {?} */
var NUMPAD_SIX = 102;
/** @type {?} */
var NUMPAD_SEVEN = 103;
/** @type {?} */
var NUMPAD_EIGHT = 104;
/** @type {?} */
var NUMPAD_NINE = 105;
/** @type {?} */
var NUMPAD_MULTIPLY = 106;
/** @type {?} */
var NUMPAD_PLUS = 107;
/** @type {?} */
var NUMPAD_MINUS = 109;
/** @type {?} */
var NUMPAD_PERIOD = 110;
/** @type {?} */
var NUMPAD_DIVIDE = 111;
/** @type {?} */
var F1 = 112;
/** @type {?} */
var F2 = 113;
/** @type {?} */
var F3 = 114;
/** @type {?} */
var F4 = 115;
/** @type {?} */
var F5 = 116;
/** @type {?} */
var F6 = 117;
/** @type {?} */
var F7 = 118;
/** @type {?} */
var F8 = 119;
/** @type {?} */
var F9 = 120;
/** @type {?} */
var F10 = 121;
/** @type {?} */
var F11 = 122;
/** @type {?} */
var F12 = 123;
/** @type {?} */
var NUM_LOCK = 144;
/** @type {?} */
var SCROLL_LOCK = 145;
/** @type {?} */
var FIRST_MEDIA = 166;
/** @type {?} */
var FF_MINUS = 173;
/** @type {?} */
var MUTE = 173;
// Firefox (Gecko) fires 181 for MUTE
/** @type {?} */
var VOLUME_DOWN = 174;
// Firefox (Gecko) fires 182 for VOLUME_DOWN
/** @type {?} */
var VOLUME_UP = 175;
// Firefox (Gecko) fires 183 for VOLUME_UP
/** @type {?} */
var FF_MUTE = 181;
/** @type {?} */
var FF_VOLUME_DOWN = 182;
/** @type {?} */
var LAST_MEDIA = 183;
/** @type {?} */
var FF_VOLUME_UP = 183;
/** @type {?} */
var SEMICOLON = 186;
// Firefox (Gecko) fires 59 for SEMICOLON
/** @type {?} */
var EQUALS = 187;
// Firefox (Gecko) fires 61 for EQUALS
/** @type {?} */
var COMMA = 188;
/** @type {?} */
var DASH = 189;
// Firefox (Gecko) fires 173 for DASH/MINUS
/** @type {?} */
var SLASH = 191;
/** @type {?} */
var APOSTROPHE = 192;
/** @type {?} */
var TILDE = 192;
/** @type {?} */
var OPEN_SQUARE_BRACKET = 219;
/** @type {?} */
var BACKSLASH = 220;
/** @type {?} */
var CLOSE_SQUARE_BRACKET = 221;
/** @type {?} */
var SINGLE_QUOTE = 222;
/** @type {?} */
var MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Checks whether a modifier key is pressed.
 * @param {?} event Event to be checked.
 * @param {...?} modifiers
 * @return {?}
 */
function hasModifierKey(event) {
    var modifiers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        modifiers[_i - 1] = arguments[_i];
    }
    if (modifiers.length) {
        return modifiers.some(function (modifier) { return event[modifier]; });
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/observers.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/observers.es5.js ***!
  \*********************************************************/
/*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    MutationObserverFactory.prototype.create = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    return MutationObserverFactory;
}());
/**
 * An injectable service that allows watching elements for changes to their content.
 */
var ContentObserver = /** @class */ (function () {
    function ContentObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ContentObserver.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this._cleanupObserver(element); });
    };
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    ContentObserver.prototype.observe = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        var _this = this;
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var stream = _this._observeElement(element);
            /** @type {?} */
            var subscription = stream.subscribe(observer);
            return function () {
                subscription.unsubscribe();
                _this._unobserveElement(element);
            };
        });
    };
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._observeElement = /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            var stream_1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */
            var observer = this._mutationObserverFactory.create(function (mutations) { return stream_1.next(mutations); });
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
        }
        else {
            (/** @type {?} */ (this._observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this._observedElements.get(element))).stream;
    };
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._unobserveElement = /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._observedElements.has(element)) {
            (/** @type {?} */ (this._observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this._observedElements.get(element))).count) {
                this._cleanupObserver(element);
            }
        }
    };
    /** Clean up the underlying MutationObserver for the specified element. */
    /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._cleanupObserver = /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._observedElements.has(element)) {
            var _a = (/** @type {?} */ (this._observedElements.get(element))), observer = _a.observer, stream = _a.stream;
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    };
    ContentObserver.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ContentObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory }
    ]; };
    /** @nocollapse */ ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ContentObserver_Factory() { return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
    return ContentObserver;
}());
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var CdkObserveContent = /** @class */ (function () {
    function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
    }
    Object.defineProperty(CdkObserveContent.prototype, "disabled", {
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */
        get: /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkObserveContent.prototype, "debounce", {
        /** Debounce interval for emitting the changes. */
        get: /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */
        function () { return this._debounce; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
            this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    CdkObserveContent.prototype._subscribe = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._unsubscribe();
        /** @type {?} */
        var stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular(function () {
            _this._currentSubscription =
                (_this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this.debounce)) : stream).subscribe(_this.event);
        });
    };
    /**
     * @private
     * @return {?}
     */
    CdkObserveContent.prototype._unsubscribe = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    };
    CdkObserveContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkObserveContent]',
                    exportAs: 'cdkObserveContent',
                },] },
    ];
    /** @nocollapse */
    CdkObserveContent.ctorParameters = function () { return [
        { type: ContentObserver },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CdkObserveContent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkObserveContent',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkObserveContentDisabled',] }],
        debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CdkObserveContent;
}());
var ObserversModule = /** @class */ (function () {
    function ObserversModule() {
    }
    ObserversModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkObserveContent],
                    declarations: [CdkObserveContent],
                    providers: [MutationObserverFactory]
                },] },
    ];
    return ObserversModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=observers.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/overlay.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/overlay.es5.js ***!
  \*******************************************************/
/*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
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
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var  /**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._canBeEnabled()) {
            /** @type {?} */
            var root = (/** @type {?} */ (this._document.documentElement));
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._isEnabled) {
            /** @type {?} */
            var html = (/** @type {?} */ (this._document.documentElement));
            /** @type {?} */
            var body = (/** @type {?} */ (this._document.body));
            /** @type {?} */
            var htmlStyle = (/** @type {?} */ (html.style));
            /** @type {?} */
            var bodyStyle = (/** @type {?} */ (body.style));
            /** @type {?} */
            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */
            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
    };
    /**
     * @private
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = /**
     * @private
     * @return {?}
     */
    function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        /** @type {?} */
        var html = (/** @type {?} */ (this._document.documentElement));
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        /** @type {?} */
        var body = this._document.body;
        /** @type {?} */
        var viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var  /**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        /** @type {?} */
        var stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                /** @type {?} */
                var scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > (/** @type {?} */ ((/** @type {?} */ (_this._config)).threshold))) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
var  /**
 * Scroll strategy that doesn't do anything.
 */
NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    return NoopScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        /** @type {?} */
        var outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */
        var outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */
        var outsideLeft = element.right < containerBounds.left;
        /** @type {?} */
        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        /** @type {?} */
        var clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */
        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */
        var clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */
        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var  /**
 * Strategy that will update the element position as the user is scrolling.
 */
RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._scrollSubscription) {
            /** @type {?} */
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    /** @type {?} */
                    var overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    /** @type {?} */
                    var parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) { return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config); };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config); };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial configuration used when creating an overlay.
 */
var  /**
 * Initial configuration used when creating an overlay.
 */
OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var _this = this;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            Object.keys(config).forEach(function (k) {
                /** @type {?} */
                var key = (/** @type {?} */ (k));
                if (typeof config[key] !== 'undefined') {
                    _this[key] = config[key];
                }
            });
        }
    }
    return OverlayConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The points of the origin element and the overlay element to connect.
 */
var  /**
 * The points of the origin element and the overlay element to connect.
 */
ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 * \@docs-private
 */
var  /**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 * \@docs-private
 */
ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair },
        { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    return ConnectedOverlayPositionChange;
}());
/**
 * Validates whether a vertical position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"top\", \"bottom\" or \"center\".");
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"start\", \"end\" or \"center\".");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(document) {
        var _this = this;
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */
        this._keydownListener = function (event) {
            /** @type {?} */
            var overlays = _this._attachedOverlays;
            for (var i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEventSubscriptions > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        };
        this._document = document;
    }
    /**
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._detach();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.add = /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener, true);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.remove = /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    };
    /** Detaches the global keyboard event listener. */
    /**
     * Detaches the global keyboard event listener.
     * @private
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._detach = /**
     * Detaches the global keyboard event listener.
     * @private
     * @return {?}
     */
    function () {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener, true);
            this._isAttached = false;
        }
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayKeyboardDispatcher],
        (/** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Container inside which all overlays will render.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    /**
     * @return {?}
     */
    OverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @protected
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayContainer],
        (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var  /**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        var _this = this;
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._keydownEvents.subscribe(observer);
            _this._keydownEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._keydownEventSubscriptions--;
            };
        });
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */
        this._keydownEventSubscriptions = 0;
        if (_config.scrollStrategy) {
            _config.scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: /**
         * The overlay's HTML element
         * @return {?}
         */
        function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */
        function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "hostElement", {
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */
        get: /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */
        function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    function (portal) {
        var _this = this;
        /** @type {?} */
        var attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        // @breaking-change 8.0.0 remove the null check for `_location`
        // once the constructor parameter is made required.
        if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(function () { return _this.dispose(); });
        }
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    function () {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        /** @type {?} */
        var detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in DOM the can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.
        this._detachContentWhenStable();
        // Stop listening for location changes.
        this._locationChanges.unsubscribe();
        return detachmentResult;
    };
    /** Cleans up the overlay from the DOM. */
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = (/** @type {?} */ (null));
        }
        this._previousHostParent = this._pane = (/** @type {?} */ (null));
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    OverlayRef.prototype.keydownEvents = /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    function () {
        return this._keydownEventsObservable;
    };
    /** Gets the current overlay configuration, which is immutable. */
    /**
     * Gets the current overlay configuration, which is immutable.
     * @return {?}
     */
    OverlayRef.prototype.getConfig = /**
     * Gets the current overlay configuration, which is immutable.
     * @return {?}
     */
    function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    function () {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    };
    /** Switches to a new position strategy and updates the overlay position. */
    /**
     * Switches to a new position strategy and updates the overlay position.
     * @param {?} strategy
     * @return {?}
     */
    OverlayRef.prototype.updatePositionStrategy = /**
     * Switches to a new position strategy and updates the overlay position.
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    };
    /** Update the size properties of the overlay. */
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    OverlayRef.prototype.updateSize = /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    function (sizeConfig) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    OverlayRef.prototype.setDirection = /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, { direction: dir });
        this._updateElementDirection();
    };
    /** Add a CSS class or an array of classes to the overlay pane. */
    /**
     * Add a CSS class or an array of classes to the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    OverlayRef.prototype.addPanelClass = /**
     * Add a CSS class or an array of classes to the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    };
    /** Remove a CSS class or an array of classes from the overlay pane. */
    /**
     * Remove a CSS class or an array of classes from the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    OverlayRef.prototype.removePanelClass = /**
     * Remove a CSS class or an array of classes from the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    };
    /**
     * Returns the layout direction of the overlay panel.
     */
    /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype.getDirection = /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    };
    /** Updates the text direction of the overlay panel. */
    /**
     * Updates the text direction of the overlay panel.
     * @private
     * @return {?}
     */
    OverlayRef.prototype._updateElementDirection = /**
     * Updates the text direction of the overlay panel.
     * @private
     * @return {?}
     */
    function () {
        this._host.setAttribute('dir', this.getDirection());
    };
    /** Updates the size of the overlay element based on the overlay config. */
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @private
     * @return {?}
     */
    OverlayRef.prototype._updateElementSize = /**
     * Updates the size of the overlay element based on the overlay config.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
    };
    /** Toggles the pointer events for the overlay pane element. */
    /**
     * Toggles the pointer events for the overlay pane element.
     * @private
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = /**
     * Toggles the pointer events for the overlay pane element.
     * @private
     * @param {?} enablePointer
     * @return {?}
     */
    function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /** Attaches a backdrop for this overlay. */
    /**
     * Attaches a backdrop for this overlay.
     * @private
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = /**
     * Attaches a backdrop for this overlay.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        (/** @type {?} */ (this._host.parentElement)).insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function (event) { return _this._backdropClick.next(event); });
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @private
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @private
     * @return {?}
     */
    function () {
        if (this._host.nextSibling) {
            (/** @type {?} */ (this._host.parentNode)).appendChild(this._host);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        /** @type {?} */
        var timeoutId;
        /** @type {?} */
        var finishDetach = function () {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach && backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (_this._backdropElement == backdropToDetach) {
                _this._backdropElement = null;
            }
            if (_this._config.backdropClass) {
                _this._toggleClasses((/** @type {?} */ (backdropToDetach)), _this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        };
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular(function () {
            (/** @type {?} */ (backdropToDetach)).addEventListener('transitionend', finishDetach);
        });
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular(function () { return setTimeout(finishDetach, 500); });
    };
    /** Toggles a single CSS class or an array of classes on an element. */
    /**
     * Toggles a single CSS class or an array of classes on an element.
     * @private
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    OverlayRef.prototype._toggleClasses = /**
     * Toggles a single CSS class or an array of classes on an element.
     * @private
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    function (element, cssClasses, isAdd) {
        /** @type {?} */
        var classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            isAdd ? classList.add(cssClass) : classList.remove(cssClass);
        });
    };
    /** Detaches the overlay content next time the zone stabilizes. */
    /**
     * Detaches the overlay content next time the zone stabilizes.
     * @private
     * @return {?}
     */
    OverlayRef.prototype._detachContentWhenStable = /**
     * Detaches the overlay content next time the zone stabilizes.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            /** @type {?} */
            var subscription = _this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_this._attachments, _this._detachments)))
                .subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this._pane || !_this._host || _this._pane.children.length === 0) {
                    if (_this._pane && _this._config.panelClass) {
                        _this._toggleClasses(_this._pane, _this._config.panelClass, false);
                    }
                    if (_this._host && _this._host.parentElement) {
                        _this._previousHostParent = _this._host.parentElement;
                        _this._previousHostParent.removeChild(_this._host);
                    }
                    subscription.unsubscribe();
                }
            });
        });
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: refactor clipping detection into a separate thing (part of scrolling module)
// TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
/**
 * Class to be added to the overlay bounding box.
 * @type {?}
 */
var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
FlexibleConnectedPositionStrategy = /** @class */ (function () {
    function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        var _this = this;
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */
        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */
        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */
        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */
        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */
        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */
        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */
        this._offsetY = 0;
        /**
         * Amount of subscribers to the `positionChanges` stream.
         */
        this._positionChangeSubscriptions = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */
        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */
        this.positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._positionChanges.subscribe(observer);
            _this._positionChangeSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._positionChangeSubscriptions--;
            };
        });
        this.setOrigin(connectedTo);
    }
    Object.defineProperty(FlexibleConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attaches this position strategy to an overlay. */
    /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.attach = /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this._isInitialRender = true;
            _this.apply();
        });
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    function () {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        // @breaking-change 8.0.0 Remove `_platform` null check once it's guaranteed to be defined.
        if (this._isDisposed || (this._platform && !this._platform.isBrowser)) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        /** @type {?} */
        var originRect = this._originRect;
        /** @type {?} */
        var overlayRect = this._overlayRect;
        /** @type {?} */
        var viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        /** @type {?} */
        var flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        /** @type {?} */
        var fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
            /** @type {?} */
            var originPoint = this._getOriginPoint(originRect, pos);
            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
            // overlay in this position. We use the top-left corner for calculations and later translate
            // this into an appropriate (top, left, bottom, right) style.
            /** @type {?} */
            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            // Calculate how well the overlay would fit into the viewport with this point.
            /** @type {?} */
            var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit: overlayFit, overlayPoint: overlayPoint, originPoint: originPoint, position: pos, overlayRect: overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            /** @type {?} */
            var bestFit = null;
            /** @type {?} */
            var bestScore = -1;
            for (var _b = 0, flexibleFits_1 = flexibleFits; _b < flexibleFits_1.length; _b++) {
                var fit = flexibleFits_1[_b];
                /** @type {?} */
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                }
            }
            this._isPushed = false;
            this._applyPosition((/** @type {?} */ (bestFit)).position, (/** @type {?} */ (bestFit)).origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition((/** @type {?} */ (fallback)).position, (/** @type {?} */ (fallback)).originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition((/** @type {?} */ (fallback)).position, (/** @type {?} */ (fallback)).originPoint);
    };
    /**
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.detach = /**
     * @return {?}
     */
    function () {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    };
    /** Cleanup after the element gets destroyed. */
    /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.dispose = /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    function () {
        if (this._isDisposed) {
            return;
        }
        // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, (/** @type {?} */ ({
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
            })));
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = (/** @type {?} */ (null));
        this._isDisposed = true;
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.reapplyLastPosition = /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */
            var lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */
            var originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @template THIS
     * @this {THIS}
     * @param {?} scrollables
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @template THIS
     * @this {THIS}
     * @param {?} scrollables
     * @return {THIS}
     */
    function (scrollables) {
        (/** @type {?} */ (this)).scrollables = scrollables;
        return (/** @type {?} */ (this));
    };
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    /**
     * Adds new preferred positions.
     * @template THIS
     * @this {THIS}
     * @param {?} positions List of positions options for this overlay.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withPositions = /**
     * Adds new preferred positions.
     * @template THIS
     * @this {THIS}
     * @param {?} positions List of positions options for this overlay.
     * @return {THIS}
     */
    function (positions) {
        (/** @type {?} */ (this))._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf((/** @type {?} */ ((/** @type {?} */ (this))._lastPosition))) === -1) {
            (/** @type {?} */ (this))._lastPosition = null;
        }
        (/** @type {?} */ (this))._validatePositions();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @template THIS
     * @this {THIS}
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withViewportMargin = /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @template THIS
     * @this {THIS}
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {THIS}
     */
    function (margin) {
        (/** @type {?} */ (this))._viewportMargin = margin;
        return (/** @type {?} */ (this));
    };
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @template THIS
     * @this {THIS}
     * @param {?=} flexibleDimensions
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withFlexibleDimensions = /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @template THIS
     * @this {THIS}
     * @param {?=} flexibleDimensions
     * @return {THIS}
     */
    function (flexibleDimensions) {
        if (flexibleDimensions === void 0) { flexibleDimensions = true; }
        (/** @type {?} */ (this))._hasFlexibleDimensions = flexibleDimensions;
        return (/** @type {?} */ (this));
    };
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @template THIS
     * @this {THIS}
     * @param {?=} growAfterOpen
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withGrowAfterOpen = /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @template THIS
     * @this {THIS}
     * @param {?=} growAfterOpen
     * @return {THIS}
     */
    function (growAfterOpen) {
        if (growAfterOpen === void 0) { growAfterOpen = true; }
        (/** @type {?} */ (this))._growAfterOpen = growAfterOpen;
        return (/** @type {?} */ (this));
    };
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @template THIS
     * @this {THIS}
     * @param {?=} canPush
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withPush = /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @template THIS
     * @this {THIS}
     * @param {?=} canPush
     * @return {THIS}
     */
    function (canPush) {
        if (canPush === void 0) { canPush = true; }
        (/** @type {?} */ (this))._canPush = canPush;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    function (isLocked) {
        if (isLocked === void 0) { isLocked = true; }
        (/** @type {?} */ (this))._positionLocked = isLocked;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @param origin Reference to the new origin.
     */
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin.
     * @return {THIS}
     */
    function (origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetX = /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    function (offset) {
        (/** @type {?} */ (this))._offsetX = offset;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetY = /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    function (offset) {
        (/** @type {?} */ (this))._offsetY = offset;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {THIS}
     */
    FlexibleConnectedPositionStrategy.prototype.withTransformOriginOn = /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {THIS}
     */
    function (selector) {
        (/** @type {?} */ (this))._transformOriginSelector = selector;
        return (/** @type {?} */ (this));
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     */
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @private
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOriginPoint = /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @private
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    function (originRect, pos) {
        /** @type {?} */
        var x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            /** @type {?} */
            var startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */
            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        /** @type {?} */
        var y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     */
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @private
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayPoint = /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @private
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    function (originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        /** @type {?} */
        var overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        /** @type {?} */
        var overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    };
    /** Gets how well an overlay at the given point will fit within the viewport. */
    /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @private
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayFit = /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @private
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    function (point, overlay, viewport, position) {
        var x = point.x, y = point.y;
        /** @type {?} */
        var offsetX = this._getOffset(position, 'x');
        /** @type {?} */
        var offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        /** @type {?} */
        var leftOverflow = 0 - x;
        /** @type {?} */
        var rightOverflow = (x + overlay.width) - viewport.width;
        /** @type {?} */
        var topOverflow = 0 - y;
        /** @type {?} */
        var bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        /** @type {?} */
        var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        /** @type {?} */
        var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        /** @type {?} */
        var visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    };
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param fit How well the overlay fits in the viewport at some position.
     * @param point The (x, y) coordinates of the overlat at some position.
     * @param viewport The geometry of the viewport.
     */
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @private
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._canFitWithFlexibleDimensions = /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @private
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    function (fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            /** @type {?} */
            var availableHeight = viewport.bottom - point.y;
            /** @type {?} */
            var availableWidth = viewport.right - point.x;
            /** @type {?} */
            var minHeight = this._overlayRef.getConfig().minHeight;
            /** @type {?} */
            var minWidth = this._overlayRef.getConfig().minWidth;
            /** @type {?} */
            var verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            /** @type {?} */
            var horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
    };
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param start Starting point from which the overlay is pushed.
     * @param overlay Dimensions of the overlay.
     * @param scrollPosition Current viewport scroll position.
     * @returns The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @private
     * @param {?} start Starting point from which the overlay is pushed.
     * @param {?} overlay Dimensions of the overlay.
     * @param {?} scrollPosition Current viewport scroll position.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    FlexibleConnectedPositionStrategy.prototype._pushOverlayOnScreen = /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @private
     * @param {?} start Starting point from which the overlay is pushed.
     * @param {?} overlay Dimensions of the overlay.
     * @param {?} scrollPosition Current viewport scroll position.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    function (start, overlay, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        /** @type {?} */
        var viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each
        // side, which we'll use to decide which direction to push it.
        /** @type {?} */
        var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        /** @type {?} */
        var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        /** @type {?} */
        var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        /** @type {?} */
        var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        // Amount by which to push the overlay in each axis such that it remains on-screen.
        /** @type {?} */
        var pushX = 0;
        /** @type {?} */
        var pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    };
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param position The position preference
     * @param originPoint The point on the origin element where the overlay is connected.
     */
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @private
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._applyPosition = /**
     * Applies a computed position to the overlay and emits a position change.
     * @private
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    function (position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChangeSubscriptions > 0) {
            /** @type {?} */
            var scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */
            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    };
    /** Sets the transform origin based on the configured selector and the passed-in position.  */
    /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @private
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setTransformOrigin = /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this._transformOriginSelector) {
            return;
        }
        /** @type {?} */
        var elements = (/** @type {?} */ (this._boundingBox)).querySelectorAll(this._transformOriginSelector);
        /** @type {?} */
        var xOrigin;
        /** @type {?} */
        var yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = xOrigin + " " + yOrigin;
        }
    };
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     */
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @private
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._calculateBoundingBoxRect = /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @private
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    function (origin, position) {
        /** @type {?} */
        var viewport = this._viewportRect;
        /** @type {?} */
        var isRtl = this._isRtl();
        /** @type {?} */
        var height;
        /** @type {?} */
        var top;
        /** @type {?} */
        var bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */
            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        /** @type {?} */
        var isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        /** @type {?} */
        var isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        /** @type {?} */
        var width;
        /** @type {?} */
        var left;
        /** @type {?} */
        var right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.right - origin.x + this._viewportMargin;
            width = origin.x - viewport.left;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */
            var previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: (/** @type {?} */ (top)), left: (/** @type {?} */ (left)), bottom: (/** @type {?} */ (bottom)), right: (/** @type {?} */ (right)), width: width, height: height };
    };
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param origin The point on the origin element where the overlay is connected.
     * @param position The position preference
     */
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @private
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setBoundingBoxStyles = /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @private
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    function (origin, position) {
        /** @type {?} */
        var boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        /** @type {?} */
        var styles = (/** @type {?} */ ({}));
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = '';
            styles.width = styles.height = '100%';
        }
        else {
            /** @type {?} */
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */
            var maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles((/** @type {?} */ (this._boundingBox)).style, styles);
    };
    /** Resets the styles for the bounding box so that a new positioning can be computed. */
    /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetBoundingBoxStyles = /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @private
     * @return {?}
     */
    function () {
        extendStyles((/** @type {?} */ (this._boundingBox)).style, (/** @type {?} */ ({
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        })));
    };
    /** Resets the styles for the overlay pane so that a new positioning can be computed. */
    /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetOverlayElementStyles = /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @private
     * @return {?}
     */
    function () {
        extendStyles(this._pane.style, (/** @type {?} */ ({
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
        })));
    };
    /** Sets positioning styles to the overlay element. */
    /**
     * Sets positioning styles to the overlay element.
     * @private
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setOverlayElementStyles = /**
     * Sets positioning styles to the overlay element.
     * @private
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    function (originPoint, position) {
        /** @type {?} */
        var styles = (/** @type {?} */ ({}));
        if (this._hasExactPosition()) {
            /** @type {?} */
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        /** @type {?} */
        var transformString = '';
        /** @type {?} */
        var offsetX = this._getOffset(position, 'x');
        /** @type {?} */
        var offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += "translateX(" + offsetX + "px) ";
        }
        if (offsetY) {
            transformString += "translateY(" + offsetY + "px)";
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
            styles.maxHeight = '';
        }
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
            styles.maxWidth = '';
        }
        extendStyles(this._pane.style, styles);
    };
    /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
    /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @private
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayY = /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @private
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    function (position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        /** @type {?} */
        var styles = (/** @type {?} */ ({ top: null, bottom: null }));
        /** @type {?} */
        var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        // @breaking-change 8.0.0 Currently the `_overlayContainer` is optional in order to avoid a
        // breaking change. The null check here can be removed once the `_overlayContainer` becomes
        // a required parameter.
        /** @type {?} */
        var virtualKeyboardOffset = this._overlayContainer ?
            this._overlayContainer.getContainerElement().getBoundingClientRect().top : 0;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            /** @type {?} */
            var documentHeight = (/** @type {?} */ (this._document.documentElement)).clientHeight;
            styles.bottom = documentHeight - (overlayPoint.y + this._overlayRect.height) + "px";
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    };
    /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
    /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @private
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayX = /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @private
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    function (position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        /** @type {?} */
        var styles = (/** @type {?} */ ({ left: null, right: null }));
        /** @type {?} */
        var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        /** @type {?} */
        var horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            var documentWidth = (/** @type {?} */ (this._document.documentElement)).clientWidth;
            styles.right = documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getScrollVisibility = /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @private
     * @return {?}
     */
    function () {
        // Note: needs fresh rects since the position could've changed.
        /** @type {?} */
        var originBounds = this._getOriginRect();
        /** @type {?} */
        var overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        /** @type {?} */
        var scrollContainerBounds = this.scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /** Subtracts the amount that an element is overflowing on an axis from it's length. */
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @private
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._subtractOverflows = /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @private
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    /** Narrows the given viewport rect by the current _viewportMargin. */
    /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getNarrowedViewportRect = /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @private
     * @return {?}
     */
    function () {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        /** @type {?} */
        var width = (/** @type {?} */ (this._document.documentElement)).clientWidth;
        /** @type {?} */
        var height = (/** @type {?} */ (this._document.documentElement)).clientHeight;
        /** @type {?} */
        var scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    };
    /** Whether the we're dealing with an RTL context */
    /**
     * Whether the we're dealing with an RTL context
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._isRtl = /**
     * Whether the we're dealing with an RTL context
     * @private
     * @return {?}
     */
    function () {
        return this._overlayRef.getDirection() === 'rtl';
    };
    /** Determines whether the overlay uses exact or flexible positioning. */
    /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._hasExactPosition = /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @private
     * @return {?}
     */
    function () {
        return !this._hasFlexibleDimensions || this._isPushed;
    };
    /** Retrieves the offset of a position along the x or y axis. */
    /**
     * Retrieves the offset of a position along the x or y axis.
     * @private
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOffset = /**
     * Retrieves the offset of a position along the x or y axis.
     * @private
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    function (position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    };
    /** Validates that the current position match the expected values. */
    /**
     * Validates that the current position match the expected values.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._validatePositions = /**
     * Validates that the current position match the expected values.
     * @private
     * @return {?}
     */
    function () {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach(function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        });
    };
    /** Adds a single CSS class or an array of classes on the overlay panel. */
    /**
     * Adds a single CSS class or an array of classes on the overlay panel.
     * @private
     * @param {?} cssClasses
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._addPanelClasses = /**
     * Adds a single CSS class or an array of classes on the overlay panel.
     * @private
     * @param {?} cssClasses
     * @return {?}
     */
    function (cssClasses) {
        var _this = this;
        if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(function (cssClass) {
                if (_this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    _this._appliedPanelClasses.push(cssClass);
                    _this._pane.classList.add(cssClass);
                }
            });
        }
    };
    /** Clears the classes that the position strategy has applied from the overlay panel. */
    /**
     * Clears the classes that the position strategy has applied from the overlay panel.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._clearPanelClasses = /**
     * Clears the classes that the position strategy has applied from the overlay panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._pane) {
            this._appliedPanelClasses.forEach(function (cssClass) { return _this._pane.classList.remove(cssClass); });
            this._appliedPanelClasses = [];
        }
    };
    /** Returns the ClientRect of the current origin. */
    /**
     * Returns the ClientRect of the current origin.
     * @private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOriginRect = /**
     * Returns the ClientRect of the current origin.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var origin = this._origin;
        if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
        }
        if (origin instanceof HTMLElement) {
            return origin.getBoundingClientRect();
        }
        // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
        return {
            top: origin.y,
            bottom: origin.y,
            left: origin.x,
            right: origin.x,
            height: 0,
            width: 0
        };
    };
    return FlexibleConnectedPositionStrategy;
}());
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 8.0.0
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 8.0.0
 */
ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, 
    // @breaking-change 8.0.0 `platform` parameter to be made required.
    platform) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy =
            new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        function () {
            return this._overlayRef.getDirection() === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        function () {
            return this._positionStrategy.positionChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.attach = /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    };
    /** Disposes all resources used by the position strategy. */
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    function () {
        this._positionStrategy.dispose();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.detach = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.detach();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.apply();
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        this._positionStrategy.reapplyLastPosition();
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    /**
     * Adds a new preferred fallback position.
     * @template THIS
     * @this {THIS}
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = /**
     * Adds a new preferred fallback position.
     * @template THIS
     * @this {THIS}
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {THIS}
     */
    function (originPos, overlayPos, offsetX, offsetY) {
        /** @type {?} */
        var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        (/** @type {?} */ (this))._preferredPositions.push(position);
        (/** @type {?} */ (this))._positionStrategy.withPositions((/** @type {?} */ (this))._preferredPositions);
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @template THIS
     * @this {THIS}
     * @param {?} dir New layout direction.
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.withDirection = /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @template THIS
     * @this {THIS}
     * @param {?} dir New layout direction.
     * @return {THIS}
     */
    function (dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.setDirection(dir);
        }
        else {
            (/** @type {?} */ (this))._direction = dir;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    function (offset) {
        (/** @type {?} */ (this))._positionStrategy.withDefaultOffsetX(offset);
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    function (offset) {
        (/** @type {?} */ (this))._positionStrategy.withDefaultOffsetY(offset);
        return (/** @type {?} */ (this));
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    function (isLocked) {
        (/** @type {?} */ (this))._positionStrategy.withLockedPosition(isLocked);
        return (/** @type {?} */ (this));
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @template THIS
     * @this {THIS}
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.withPositions = /**
     * Overwrites the current set of positions with an array of new ones.
     * @template THIS
     * @this {THIS}
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {THIS}
     */
    function (positions) {
        (/** @type {?} */ (this))._preferredPositions = positions.slice();
        (/** @type {?} */ (this))._positionStrategy.withPositions((/** @type {?} */ (this))._preferredPositions);
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin element.
     * @return {THIS}
     */
    ConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin element.
     * @return {THIS}
     */
    function (origin) {
        (/** @type {?} */ (this))._positionStrategy.setOrigin(origin);
        return (/** @type {?} */ (this));
    };
    return ConnectedPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Class to be added to the overlay pane wrapper.
 * @type {?}
 */
var wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    GlobalPositionStrategy.prototype.attach = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New top offset.
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.top = /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New top offset.
     * @return {THIS}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        (/** @type {?} */ (this))._bottomOffset = '';
        (/** @type {?} */ (this))._topOffset = value;
        (/** @type {?} */ (this))._alignItems = 'flex-start';
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New left offset.
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.left = /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New left offset.
     * @return {THIS}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        (/** @type {?} */ (this))._rightOffset = '';
        (/** @type {?} */ (this))._leftOffset = value;
        (/** @type {?} */ (this))._justifyContent = 'flex-start';
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New bottom offset.
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.bottom = /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New bottom offset.
     * @return {THIS}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        (/** @type {?} */ (this))._topOffset = '';
        (/** @type {?} */ (this))._bottomOffset = value;
        (/** @type {?} */ (this))._alignItems = 'flex-end';
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New right offset.
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.right = /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New right offset.
     * @return {THIS}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        (/** @type {?} */ (this))._leftOffset = '';
        (/** @type {?} */ (this))._rightOffset = value;
        (/** @type {?} */ (this))._justifyContent = 'flex-end';
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New width for the overlay
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.width = /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New width for the overlay
     * @return {THIS}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.updateSize({ width: value });
        }
        else {
            (/** @type {?} */ (this))._width = value;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New height for the overlay
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.height = /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New height for the overlay
     * @return {THIS}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.updateSize({ height: value });
        }
        else {
            (/** @type {?} */ (this))._height = value;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {THIS}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        (/** @type {?} */ (this)).left(offset);
        (/** @type {?} */ (this))._justifyContent = 'center';
        return (/** @type {?} */ (this));
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {THIS}
     */
    GlobalPositionStrategy.prototype.centerVertically = /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {THIS}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        (/** @type {?} */ (this)).top(offset);
        (/** @type {?} */ (this))._alignItems = 'center';
        return (/** @type {?} */ (this));
    };
    /**
     * Apply the position to the element.
     * @docs-private
     */
    /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.apply = /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        /** @type {?} */
        var styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        var parentStyles = this._overlayRef.hostElement.style;
        /** @type {?} */
        var config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (config.width === '100%') {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    };
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    /**
     * Cleans up the DOM changes from the position strategy.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = /**
     * Cleans up the DOM changes from the position strategy.
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        /** @type {?} */
        var styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        var parent = this._overlayRef.hostElement;
        /** @type {?} */
        var parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = (/** @type {?} */ (null));
        this._isDisposed = true;
    };
    return GlobalPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     */
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = /**
     * Creates a global position strategy.
     * @return {?}
     */
    function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 8.0.0
     */
    /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 8.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 8.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document);
    };
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    /**
     * Creates a flexible position strategy.
     * @param {?} origin Origin relative to which to position the overlay.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = /**
     * Creates a flexible position strategy.
     * @param {?} origin Origin relative to which to position the overlay.
     * @return {?}
     */
    function (origin) {
        return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    OverlayPositionBuilder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: OverlayContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    /** @nocollapse */ OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(OverlayContainer, 8)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Next overlay unique ID.
 * @type {?}
 */
var nextUniqueId = 0;
// Note that Overlay is *not* scoped to the app root because the ComponentFactoryResolver
// it needs is different based on where OverlayModule is imported.
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    function (config) {
        /** @type {?} */
        var host = this._createHostElement();
        /** @type {?} */
        var pane = this._createPaneElement(host);
        /** @type {?} */
        var portalOutlet = this._createPortalOutlet(pane);
        /** @type {?} */
        var overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    Overlay.prototype.position = /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    function (host) {
        /** @type {?} */
        var pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @private
     * @return {?} Newly-create host element.
     */
    Overlay.prototype._createHostElement = /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @private
     * @return {?} Newly-create host element.
     */
    function () {
        /** @type {?} */
        var host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    Overlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions },
        { type: OverlayContainer },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] },
        { type: OverlayPositionBuilder },
        { type: OverlayKeyboardDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    return Overlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 * @type {?}
 */
var defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 * @type {?}
 */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] },
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */
        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */
        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        /** The offset in pixels for the overlay connection point on the x-axis */
        get: /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        function () { return this._offsetX; },
        set: /**
         * @param {?} offsetX
         * @return {?}
         */
        function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        /** The offset in pixels for the overlay connection point on the y-axis */
        get: /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        function () { return this._offsetY; },
        set: /**
         * @param {?} offsetY
         * @return {?}
         */
        function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        /** Whether or not the overlay should be locked when scrolling. */
        get: /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */
        function () { return this._lockPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDimensions", {
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        get: /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */
        function () { return this._flexibleDimensions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
        get: /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */
        function () { return this._growAfterOpen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
        get: /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */
        function () { return this._push; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: /**
         * The associated overlay reference.
         * @return {?}
         */
        function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: /**
         * The element's layout direction.
         * @return {?}
         */
        function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._position) {
            this._updatePositionStrategy(this._position);
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
            if (changes['origin'] && this.open) {
                this._position.apply();
            }
        }
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /** Creates an overlay */
    /**
     * Creates an overlay
     * @private
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createOverlay = /**
     * Creates an overlay
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
        this._overlayRef.keydownEvents().subscribe(function (event) {
            _this.overlayKeydown.next(event);
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]) {
                _this._detachOverlay();
            }
        });
    };
    /** Builds the overlay config based on the directive's inputs */
    /**
     * Builds the overlay config based on the directive's inputs
     * @private
     * @return {?}
     */
    CdkConnectedOverlay.prototype._buildConfig = /**
     * Builds the overlay config based on the directive's inputs
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positionStrategy = this._position = this._createPositionStrategy();
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
    };
    /** Updates the state of a position strategy, based on the values of the directive inputs. */
    /**
     * Updates the state of a position strategy, based on the values of the directive inputs.
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    CdkConnectedOverlay.prototype._updatePositionStrategy = /**
     * Updates the state of a position strategy, based on the values of the directive inputs.
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        var _this = this;
        /** @type {?} */
        var positions = this.positions.map(function (currentPosition) { return ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || _this.offsetX,
            offsetY: currentPosition.offsetY || _this.offsetY
        }); });
        return positionStrategy
            .setOrigin(this.origin.elementRef)
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition);
    };
    /** Returns the position strategy of the overlay to be set on the overlay config */
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @private
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createPositionStrategy = /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
        this._updatePositionStrategy(strategy);
        strategy.positionChanges.subscribe(function (p) { return _this.positionChange.emit(p); });
        return strategy;
    };
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    CdkConnectedOverlay.prototype._attachOverlay = /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
        else {
            this._backdropSubscription.unsubscribe();
        }
    };
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    CdkConnectedOverlay.prototype._detachOverlay = /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] },
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    CdkConnectedOverlay.propDecorators = {
        origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOrigin',] }],
        positions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPositions',] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetX',] }],
        offsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetY',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayWidth',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHeight',] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinWidth',] }],
        minHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinHeight',] }],
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayBackdropClass',] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPanelClass',] }],
        viewportMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayViewportMargin',] }],
        scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOpen',] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] }],
        lockPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayLockPosition',] }],
        flexibleDimensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] }],
        growAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] }],
        push: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPush',] }],
        backdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        positionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        attach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        detach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        overlayKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return CdkConnectedOverlay;
}());
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 * @type {?}
 */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [
                        Overlay,
                        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                    ],
                },] },
    ];
    return OverlayModule;
}());
/**
 * @deprecated Use `OverlayModule` instead.
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer(_document) {
        return _super.call(this, _document) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @private
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._containerElement) {
            return;
        }
        /** @type {?} */
        var fullscreenElement = this.getFullscreenElement();
        /** @type {?} */
        var parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    };
    /**
     * @private
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._getEventName = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._fullScreenEventName) {
            if (this._document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (this._document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if (((/** @type {?} */ (this._document))).mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if (((/** @type {?} */ (this._document))).msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    function () {
        return this._document.fullscreenElement ||
            this._document.webkitFullscreenElement ||
            ((/** @type {?} */ (this._document))).mozFullScreenElement ||
            ((/** @type {?} */ (this._document))).msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: FullscreenOverlayContainer, providedIn: "root" });
    return FullscreenOverlayContainer;
}(OverlayContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=overlay.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/portal.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/portal.es5.js ***!
  \******************************************************/
/*! exports provided: DomPortalHost, PortalHostDirective, TemplatePortalDirective, BasePortalHost, Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, CdkPortalOutlet, PortalModule, PortalInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
var  /**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return (/** @type {?} */ (host.attach(this)));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var  /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
var  /**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
TemplatePortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var  /**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @private
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var  /**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
DomPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        /** @type {?} */
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        /** @type {?} */
        var viewContainer = portal.viewContainerRef;
        /** @type {?} */
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            /** @type {?} */
            var index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */
        _this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        /** @type {?} */
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        /** @type {?} */
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        /** @type {?} */
        var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    CdkPortalOutlet.propDecorators = {
        attached: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var  /**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        /** @type {?} */
        var value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=portal.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
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
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
var  /**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
FixedSizeVirtualScrollStrategy = /** @class */ (function () {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    function (viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** Detaches this scroll strategy from the currently attached viewport. */
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.detach = /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    function () {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    };
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    function (itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentRendered = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    function (index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    };
    /** Update the viewport's total content size. */
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    };
    /** Update the viewport's rendered range. */
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        var scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        var firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        var renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        var newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        var viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        var dataLength = this._viewport.getDataLength();
        /** @type {?} */
        var startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    };
    return FixedSizeVirtualScrollStrategy;
}());
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
var CdkFixedSizeVirtualScroll = /** @class */ (function () {
    function CdkFixedSizeVirtualScroll() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
        /** The size of the items in the list (in pixels). */
        get: /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */
        function () { return this._itemSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get: /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */
        function () { return this._minBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get: /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */
        function () { return this._maxBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkFixedSizeVirtualScroll.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    };
    CdkFixedSizeVirtualScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-virtual-scroll-viewport[itemSize]',
                    providers: [{
                            provide: VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _fixedSizeVirtualScrollStrategyFactory,
                            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CdkFixedSizeVirtualScroll; })],
                        }],
                },] },
    ];
    CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkFixedSizeVirtualScroll;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe(function () { return _this._scrolled.next(scrollable); }));
        }
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        /** @type {?} */
        var scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            var subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        });
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        /** @type {?} */
        var ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        /** @type {?} */
        var scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        /** @type {?} */
        var element = elementRef.nativeElement;
        /** @type {?} */
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    };
    /** Sets up the global scroll listeners. */
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /** Cleans up the global scroll listener. */
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this = this;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this.ngZone.runOutsideAngular(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed))
                    .subscribe(observer);
            });
        });
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Returns observable that emits when a scroll event is fired on the host element. */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled;
    };
    /** Gets the ElementRef for the viewport. */
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    CdkScrollable.prototype.scrollTo = /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    CdkScrollable.prototype._applyScrollToOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    };
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    CdkScrollable.prototype.measureScrollOffset = /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    function (from) {
        /** @type {?} */
        var LEFT = 'left';
        /** @type {?} */
        var RIGHT = 'right';
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ScrollDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
/**
 * A viewport that virtualizes it's scrolling with the help of `CdkVirtualForOf`.
 */
var CdkVirtualScrollViewport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CdkVirtualScrollViewport, _super);
    function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
        _this.elementRef = elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        _this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */
        _this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The direction the viewport scrolls.
         */
        _this.orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        _this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
                return Promise.resolve().then(function () { return _this.ngZone.run(function () { return observer.next(index); }); });
            });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */
        _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
        /**
         * The transform used to scale the spacer to the same size as all content, including content that
         * is not currently rendered.
         */
        _this._totalContentSizeTransform = '';
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        _this._totalContentSize = 0;
        /**
         * The currently rendered range of indices.
         */
        _this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        _this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        _this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        _this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        _this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        _this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        _this._runAfterChangeDetection = [];
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
            _this._measureViewportSize();
            _this._scrollStrategy.attach(_this);
            _this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe(function () { return _this._scrollStrategy.onContentScrolled(); });
            _this._markChangeDetectionNeeded();
        }); });
    };
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.attach = /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    function (forOf) {
        var _this = this;
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular(function () {
            _this._forOf = forOf;
            _this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._detachedSubject)).subscribe(function (data) {
                /** @type {?} */
                var newLength = data.length;
                if (newLength !== _this._dataLength) {
                    _this._dataLength = newLength;
                    _this._scrollStrategy.onDataLengthChanged();
                }
                _this._doChangeDetection();
            });
        });
    };
    /** Detaches the current `CdkVirtualForOf`. */
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.detach = /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    function () {
        this._forOf = null;
        this._detachedSubject.next();
    };
    /** Gets the length of the data bound to this viewport (in number of items). */
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getDataLength = /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    function () {
        return this._dataLength;
    };
    /** Gets the size of the viewport (in pixels). */
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getViewportSize = /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    function () {
        return this._viewportSize;
    };
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getRenderedRange = 
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    function () {
        return this._renderedRange;
    };
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setTotalContentSize = /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            /** @type {?} */
            var axis = this.orientation == 'horizontal' ? 'X' : 'Y';
            this._totalContentSizeTransform = "scale" + axis + "(" + this._totalContentSize + ")";
            this._markChangeDetectionNeeded();
        }
    };
    /** Sets the currently rendered range of indices. */
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedRange = /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        var _this = this;
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded(function () { return _this._scrollStrategy.onContentRendered(); });
        }
    };
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    function () {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    };
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedContentOffset = /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    function (offset, to) {
        var _this = this;
        if (to === void 0) { to = 'to-start'; }
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        var isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        var axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        var axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += " translate" + axis + "(-100%)";
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded(function () {
                if (_this._renderedContentOffsetNeedsRewrite) {
                    _this._renderedContentOffset -= _this.measureRenderedContentSize();
                    _this._renderedContentOffsetNeedsRewrite = false;
                    _this.setRenderedContentOffset(_this._renderedContentOffset);
                }
                else {
                    _this._scrollStrategy.onRenderedOffsetChanged();
                }
            });
        }
    };
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToOffset = /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (offset, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        /** @type {?} */
        var options = { behavior: behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    };
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToIndex = /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (index, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        this._scrollStrategy.scrollToIndex(index, behavior);
    };
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureScrollOffset = /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    function (from) {
        return _super.prototype.measureScrollOffset.call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    };
    /** Measure the combined size of all of the rendered items. */
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRenderedContentSize = /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    };
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRangeSize = /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    };
    /** Update the viewport dimensions and re-render. */
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.checkViewportSize = /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    function () {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    };
    /** Measure the viewport size. */
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._measureViewportSize = /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    };
    /** Queue up change detection to run. */
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    function (runAfter) {
        var _this = this;
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
                _this._doChangeDetection();
            }); });
        }
    };
    /** Run change detection. */
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._doChangeDetection = /**
     * Run change detection.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isChangeDetectionPending = false;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run(function () { return _this._changeDetectorRef.markForCheck(); });
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */
        var runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (var _i = 0, runAfterChangeDetection_1 = runAfterChangeDetection; _i < runAfterChangeDetection_1.length; _i++) {
            var fn = runAfterChangeDetection_1[_i];
            fn();
        }
    };
    CdkVirtualScrollViewport.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-virtual-scroll-viewport',
                    template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.transform]=\"_totalContentSizeTransform\"></div>",
                    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                    host: {
                        'class': 'cdk-virtual-scroll-viewport',
                        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: CdkVirtualScrollViewport,
                        }]
                },] },
    ];
    /** @nocollapse */
    CdkVirtualScrollViewport.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: ScrollDispatcher }
    ]; };
    CdkVirtualScrollViewport.propDecorators = {
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper',] }]
    };
    return CdkVirtualScrollViewport;
}(CdkScrollable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    var el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    var rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
var CdkVirtualForOf = /** @class */ (function () {
    function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this = this;
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var prev = _a[0], cur = _a[1];
            return _this._changeDataSource(prev, cur);
        }), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(function (data) {
            _this._data = data;
            _this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this._renderedRange = range;
            ngZone.run(function () { return _this.viewChange.next(_this._renderedRange); });
            _this._onRenderedDataChange();
        });
        this._viewport.attach(this);
    }
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
        /** The DataSource to display. */
        get: /**
         * The DataSource to display.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForOf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */
            var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value) ? value :
                // Slice the value if its an NgIterable to ensure we're working with an array.
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
            this._dataSourceChanges.next(ds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get: /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForTrackBy;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            var _this = this;
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); } :
                undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
        /** The template used to stamp out new elements. */
        set: /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    CdkVirtualForOf.prototype.measureRangeSize = /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    function (range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        var renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        var rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var i = rangeLen;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            var j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewport.detach();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (var _i = 0, _a = this._templateCache; _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroy();
        }
    };
    /** React to scroll state changes in the viewport. */
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._onRenderedDataChange = /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    function () {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    };
    /** Swap out one `DataSource` for another. */
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    CdkVirtualForOf.prototype._changeDataSource = /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    function (oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs.connect(this);
    };
    /** Update the `CdkVirtualForOfContext` for all views. */
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateContext = /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    };
    /** Apply changes to the DOM. */
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    CdkVirtualForOf.prototype._applyChanges = /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Rearrange the views to put them in the right location.
        changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                var view = _this._insertViewForNewItem((/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                _this._cacheView(_this._detachView((/** @type {?} */ (adjustedPreviousIndex))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                _this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        });
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange(function (record) {
            /** @type {?} */
            var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        });
        // Update the context variables on all items.
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    };
    /** Cache the given detached view. */
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    CdkVirtualForOf.prototype._cacheView = /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    };
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewForNewItem = /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    };
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateComputedContextProperties = /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    function (context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    };
    /** Creates a new embedded view and moves it to the given index */
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._createEmbeddedViewAt = /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var view = this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        });
        if (index < this._viewContainerRef.length) {
            this._viewContainerRef.move(view, index);
        }
        return view;
    };
    /** Inserts a recycled view from the cache at the given index. */
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewFromCache = /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    };
    /** Detaches the embedded view at the given index. */
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._detachView = /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (/** @type {?} */ (this._viewContainerRef.detach(index)));
    };
    CdkVirtualForOf.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkVirtualFor][cdkVirtualForOf]',
                },] },
    ];
    /** @nocollapse */
    CdkVirtualForOf.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkVirtualForOf;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
    ScrollingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                    exports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                    declarations: [
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                },] },
    ];
    return ScrollingModule;
}());
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [ScrollingModule],
                    exports: [ScrollingModule],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        ngZone.runOutsideAngular(function () {
            _this._change = _platform.isBrowser ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe(function () { return _this._updateViewportSize(); });
        });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        var documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        var documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /** Updates the cached viewport size. */
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js ***!
  \******************************************************************/
/*! exports provided: Gallery, GalleryRef, GalleryComponent, ImageItem, VideoItem, IframeItem, YoutubeItem, GalleryIframeComponent, GalleryImageComponent, GalleryVideoComponent, GALLERY_CONFIG, GalleryAction, ImageSize, LoadingStrategy, ThumbnailsPosition, ImageLoaderMode, DotsPosition, CounterPosition, ThumbnailsMode, SlidingDirection, GalleryItemType, GalleryModule, ɵf, ɵh, ɵe, ɵk, ɵd, ɵg, ɵj, ɵi, ɵl, ɵm, ɵn, ɵc, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRef", function() { return GalleryRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItem", function() { return ImageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItem", function() { return VideoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeItem", function() { return IframeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeItem", function() { return YoutubeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryIframeComponent", function() { return GalleryIframeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageComponent", function() { return GalleryImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryVideoComponent", function() { return GalleryVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERY_CONFIG", function() { return GALLERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryAction", function() { return GalleryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSize", function() { return ImageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStrategy", function() { return LoadingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsPosition", function() { return ThumbnailsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderMode", function() { return ImageLoaderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsPosition", function() { return DotsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterPosition", function() { return CounterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsMode", function() { return ThumbnailsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingDirection", function() { return SlidingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryItemType", function() { return GalleryItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GalleryCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GalleryCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GalleryDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return GalleryItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GalleryNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GallerySliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GalleryThumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GalleryThumbsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return RadialProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return LazyImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return TapClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CachingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RequestCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RequestCacheWithMap; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GalleryAction = {
    INITIALIZED: 'initialized',
    ITEMS_CHANGED: 'itemsChanged',
    INDEX_CHANGED: 'indexChanged',
    PLAY: 'play',
    STOP: 'stop',
};
/** @enum {string} */
var ImageSize = {
    Cover: 'cover',
    Contain: 'contain',
};
/** @enum {string} */
var LoadingStrategy = {
    Preload: 'preload',
    Lazy: 'lazy',
    Default: 'default',
};
/** @enum {string} */
var ThumbnailsPosition = {
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
};
/** @enum {string} */
var ImageLoaderMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
/** @enum {string} */
var DotsPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
/** @enum {string} */
var CounterPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
/** @enum {string} */
var ThumbnailsMode = {
    Free: 'free',
    Strict: 'strict',
};
/** @enum {string} */
var SlidingDirection = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
};
/** @enum {string} */
var GalleryItemType = {
    Image: 'image',
    Video: 'video',
    Youtube: 'youtube',
    Iframe: 'iframe',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial state
 * @type {?}
 */
var defaultState = {
    action: GalleryAction.INITIALIZED,
    isPlaying: false,
    hasNext: false,
    hasPrev: false,
    currIndex: 0,
    items: []
};
/** @type {?} */
var defaultConfig = {
    nav: true,
    loop: true,
    zoomOut: 0,
    dots: false,
    thumb: true,
    dotsSize: 30,
    counter: true,
    gestures: true,
    autoPlay: false,
    thumbWidth: 120,
    thumbHeight: 90,
    panSensitivity: 25,
    disableThumb: false,
    playerInterval: 3000,
    imageSize: ImageSize.Contain,
    thumbMode: ThumbnailsMode.Strict,
    dotsPosition: DotsPosition.Bottom,
    counterPosition: CounterPosition.Top,
    thumbPosition: ThumbnailsPosition.Bottom,
    loadingMode: ImageLoaderMode.Determinate,
    loadingStrategy: LoadingStrategy.Default,
    slidingDirection: SlidingDirection.Horizontal,
    navIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"512px\" height=\"512px\" enable-background=\"new 0 0 240.823 240.823\" version=\"1.1\" viewBox=\"0 0 240.823 240.823\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z\" fill=\"#fff\"/></svg>",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageItem = /** @class */ (function () {
    function ImageItem(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
    return ImageItem;
}());
var VideoItem = /** @class */ (function () {
    function VideoItem(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
    return VideoItem;
}());
var IframeItem = /** @class */ (function () {
    function IframeItem(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
    return IframeItem;
}());
var YoutubeItem = /** @class */ (function () {
    function YoutubeItem(data) {
        this.data = {
            src: "//youtube.com/embed/" + data.src + "?wmode=transparent",
            thumb: data.thumb ? data.thumb : "//img.youtube.com/vi/" + data.src + "/default.jpg"
        };
        this.type = GalleryItemType.Youtube;
    }
    return YoutubeItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var filterActions = function (actions) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (state) { return actions.indexOf(state.action) > -1; });
};
var GalleryRef = /** @class */ (function () {
    function GalleryRef(config, deleteInstance) {
        this.deleteInstance = deleteInstance;
        /**
         * Stream that emits on item click
         */
        this.itemClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Stream that emits on thumbnail click
         */
        this.thumbClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Stream that emits on an error occurs
         */
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](defaultState);
        this._config = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](config);
        this.state = this._state.asObservable();
        this.config = this._config.asObservable();
    }
    Object.defineProperty(GalleryRef.prototype, "initialized", {
        /** Stream that emits when gallery is initialized/reset */
        get: /**
         * Stream that emits when gallery is initialized/reset
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "itemsChanged", {
        /** Stream that emits when items is changed (items loaded, item added, item removed) */
        get: /**
         * Stream that emits when items is changed (items loaded, item added, item removed)
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "indexChanged", {
        /** Stream that emits when current item is changed */
        get: /**
         * Stream that emits when current item is changed
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playingChanged", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playerActions", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @private
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activate player actions listener
     */
    /**
     * Activate player actions listener
     * @return {?}
     */
    GalleryRef.prototype.activatePlayer = /**
     * Activate player actions listener
     * @return {?}
     */
    function () {
        var _this = this;
        return this.playerActions.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (e) {
            return e.isPlaying ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(_this._config.value.playerInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.next(); })) : rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
        }));
    };
    /**
     * Set gallery state
     * @param state
     */
    /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryRef.prototype.setState = /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._state.value, state));
    };
    /**
     * Set gallery config
     * @param config
     */
    /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    GalleryRef.prototype.setConfig = /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config.next(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._config.value, config));
    };
    /** Add gallery item
     * @param item - Gallery item object
     * @param active - Set the new item as current slide
     */
    /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    GalleryRef.prototype.add = /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    function (item, active) {
        /** @type {?} */
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this._state.value.items, [item]);
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    };
    /**
     * Add image item
     * @param data
     * @param active
     */
    /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addImage = /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new ImageItem(data), active);
    };
    /**
     * Add video item
     * @param data
     * @param active
     */
    /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addVideo = /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new VideoItem(data), active);
    };
    /**
     * Add iframe item
     * @param data
     * @param active
     */
    /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addIframe = /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new IframeItem(data), active);
    };
    /**
     * Add youtube item
     * @param data
     * @param active
     */
    /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addYoutube = /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new YoutubeItem(data), active);
    };
    /** Remove gallery item
     * @param i - Item index
     */
    /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    GalleryRef.prototype.remove = /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this._state.value.items.slice(0, i), this._state.value.items.slice(i + 1, this._state.value.items.length));
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    };
    /**
     * Load items and reset the state
     * @param items - Gallery images data
     */
    /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    GalleryRef.prototype.load = /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    function (items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    };
    /**
     * Set active item
     * @param i - Active Index
     */
    /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    GalleryRef.prototype.set = /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    function (i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    };
    /**
     * Next item
     */
    /**
     * Next item
     * @return {?}
     */
    GalleryRef.prototype.next = /**
     * Next item
     * @return {?}
     */
    function () {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    };
    /**
     * Prev item
     */
    /**
     * Prev item
     * @return {?}
     */
    GalleryRef.prototype.prev = /**
     * Prev item
     * @return {?}
     */
    function () {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    };
    /**
     * Start gallery player
     * @param interval
     */
    /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    GalleryRef.prototype.play = /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    };
    /**
     * Stop gallery player
     */
    /**
     * Stop gallery player
     * @return {?}
     */
    GalleryRef.prototype.stop = /**
     * Stop gallery player
     * @return {?}
     */
    function () {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    };
    /**
     * Reset gallery to initial state
     */
    /**
     * Reset gallery to initial state
     * @return {?}
     */
    GalleryRef.prototype.reset = /**
     * Reset gallery to initial state
     * @return {?}
     */
    function () {
        this.setState(defaultState);
    };
    /**
     * Destroy gallery
     */
    /**
     * Destroy gallery
     * @return {?}
     */
    GalleryRef.prototype.destroy = /**
     * Destroy gallery
     * @return {?}
     */
    function () {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    };
    return GalleryRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GALLERY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('galleryConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Gallery = /** @class */ (function () {
    function Gallery(config) {
        /**
         * Store gallery instances
         */
        this._instances = new Map();
        this.config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param id
     * @param config
     */
    /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    Gallery.prototype.ref = /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances.has(id)) {
            /** @type {?} */
            var galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.config, config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.config, config), this.deleteInstance(id))).get(id);
        }
    };
    /**
     * Destroy all gallery instances
     */
    /**
     * Destroy all gallery instances
     * @return {?}
     */
    Gallery.prototype.destroyAll = /**
     * Destroy all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.destroy(); });
    };
    /**
     * Reset all gallery instances
     */
    /**
     * Reset all gallery instances
     * @return {?}
     */
    Gallery.prototype.resetAll = /**
     * Reset all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.reset(); });
    };
    /**
     * A destroyer function for each gallery instance
     */
    /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    Gallery.prototype.deleteInstance = /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return function () {
            if (_this._instances.has(id)) {
                _this._instances.delete(id);
            }
        };
    };
    Gallery.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Gallery.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [GALLERY_CONFIG,] }] }
    ]; };
    /** @nocollapse */ Gallery.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"])({ factory: function Gallery_Factory() { return new Gallery(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"])(GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
    return Gallery;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(_gallery) {
        this._gallery = _gallery;
        this.nav = this._gallery.config.nav;
        this.dots = this._gallery.config.dots;
        this.loop = this._gallery.config.loop;
        this.thumb = this._gallery.config.thumb;
        this.zoomOut = this._gallery.config.zoomOut;
        this.counter = this._gallery.config.counter;
        this.dotsSize = this._gallery.config.dotsSize;
        this.autoPlay = this._gallery.config.autoPlay;
        this.gestures = this._gallery.config.gestures;
        this.thumbWidth = this._gallery.config.thumbWidth;
        this.thumbHeight = this._gallery.config.thumbHeight;
        this.disableThumb = this._gallery.config.disableThumb;
        this.panSensitivity = this._gallery.config.panSensitivity;
        this.playerInterval = this._gallery.config.playerInterval;
        this.itemTemplate = this._gallery.config.itemTemplate;
        this.thumbTemplate = this._gallery.config.thumbTemplate;
        this.thumbMode = this._gallery.config.thumbMode;
        this.imageSize = this._gallery.config.imageSize;
        this.dotsPosition = this._gallery.config.dotsPosition;
        this.counterPosition = this._gallery.config.counterPosition;
        this.slidingDirection = this._gallery.config.slidingDirection;
        this.loadingMode = this._gallery.config.loadingMode;
        this.loadingStrategy = this._gallery.config.loadingStrategy;
        this.thumbPosition = this._gallery.config.thumbPosition;
        // Inputs used by the lightbox
        /**
         * Destroy gallery ref on component destroy event
         */
        this.destroyRef = true;
        /**
         * Skip initializing the config with components inputs (Lightbox mode)
         */
        this.skipInitConfig = false;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.playingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this._itemClick$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._thumbClick$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._itemChange$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._indexChange$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._playingChange$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._playerListener$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
    }
    /**
     * @private
     * @return {?}
     */
    GalleryComponent.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            nav: this.nav,
            dots: this.dots,
            loop: this.loop,
            thumb: this.thumb,
            zoomOut: this.zoomOut,
            counter: this.counter,
            autoPlay: this.autoPlay,
            gestures: this.gestures,
            dotsSize: this.dotsSize,
            imageSize: this.imageSize,
            thumbMode: this.thumbMode,
            thumbWidth: this.thumbWidth,
            thumbHeight: this.thumbHeight,
            loadingMode: this.loadingMode,
            disableThumb: this.disableThumb,
            dotsPosition: this.dotsPosition,
            itemTemplate: this.itemTemplate,
            thumbTemplate: this.thumbTemplate,
            thumbPosition: this.thumbPosition,
            panSensitivity: this.panSensitivity,
            playerInterval: this.playerInterval,
            counterPosition: this.counterPosition,
            loadingStrategy: this.loadingStrategy,
            slidingDirection: this.slidingDirection
        };
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.onAction = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        switch (i) {
            case 'next':
                this.galleryRef.next();
                break;
            case 'prev':
                this.galleryRef.prev();
                break;
            default:
                this.galleryRef.set((/** @type {?} */ (i)));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GalleryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.galleryRef) {
            this.galleryRef.setConfig(this.getConfig());
            if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
                this.load(this.items);
            }
        }
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get gallery instance by id
        if (this.skipInitConfig) {
            this.galleryRef = this._gallery.ref(this.id);
        }
        else {
            this.galleryRef = this._gallery.ref(this.id, this.getConfig());
        }
        // Load gallery items
        this.load(this.items);
        // Activate player listener
        this._playerListener$ = this.galleryRef.activatePlayer().subscribe();
        // Subscribes to events on demand
        if (this.indexChange.observers.length) {
            this._indexChange$ = this.galleryRef.indexChanged.subscribe(function (state) { return _this.indexChange.emit(state); });
        }
        if (this.itemsChange.observers.length) {
            this._itemChange$ = this.galleryRef.itemsChanged.subscribe(function (state) { return _this.itemsChange.emit(state); });
        }
        if (this.playingChange.observers.length) {
            this._playingChange$ = this.galleryRef.playingChanged.subscribe(function (state) { return _this.playingChange.emit(state); });
        }
        // Start playing if auto-play is set to true
        if (this.autoPlay) {
            this.play();
        }
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._itemClick$.unsubscribe();
        this._thumbClick$.unsubscribe();
        this._itemChange$.unsubscribe();
        this._indexChange$.unsubscribe();
        this._playingChange$.unsubscribe();
        this._playerListener$.unsubscribe();
        if (this.destroyRef) {
            this.galleryRef.destroy();
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.onItemClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.itemClick.emit(i);
        this.galleryRef.itemClick.next(i);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.onThumbClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.galleryRef.set(i);
        this.thumbClick.emit(i);
        this.galleryRef.thumbClick.next(i);
    };
    /**
     * @param {?} err
     * @return {?}
     */
    GalleryComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.error.emit(err);
        this.galleryRef.error.next(err);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    GalleryComponent.prototype.load = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.galleryRef.load(items);
    };
    /**
     * @param {?} item
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.add = /**
     * @param {?} item
     * @param {?=} active
     * @return {?}
     */
    function (item, active) {
        this.galleryRef.add(item, active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addImage = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new ImageItem(data), active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addVideo = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new VideoItem(data), active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addIframe = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new IframeItem(data), active);
    };
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryComponent.prototype.addYoutube = /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new YoutubeItem(data), active);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.galleryRef.remove(i);
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.galleryRef.next();
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        this.galleryRef.prev();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryComponent.prototype.set = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.galleryRef.set(i);
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.galleryRef.reset();
    };
    /**
     * @param {?=} interval
     * @return {?}
     */
    GalleryComponent.prototype.play = /**
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        this.galleryRef.play(interval);
    };
    /**
     * @return {?}
     */
    GalleryComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.galleryRef.stop();
    };
    GalleryComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <gallery-core [state]=\"galleryRef.state | async\"\n                  [config]=\"galleryRef.config | async\"\n                  (action)=\"onAction($event)\"\n                  (itemClick)=\"onItemClick($event)\"\n                  (thumbClick)=\"onThumbClick($event)\"\n                  (error)=\"onError($event)\"></gallery-core>\n    <ng-content></ng-content>\n  ",
                    styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}::ng-deep .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;z-index:1;overflow:unset}::ng-deep .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}::ng-deep .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}::ng-deep .g-image-error-message,::ng-deep .g-loading,::ng-deep .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{display:flex;justify-content:center;align-items:center;height:100%}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}::ng-deep gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}@-webkit-keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}@keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}::ng-deep radial-progress{display:block;position:relative}::ng-deep radial-progress svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}::ng-deep radial-progress circle{-webkit-transform-origin:center;transform-origin:center;stroke:#fff}::ng-deep radial-progress .radial-progress-meter,::ng-deep radial-progress .radial-progress-value{fill:none}::ng-deep radial-progress .radial-progress-meter{opacity:.3}::ng-deep radial-progress .radial-progress-value{transition:.2s linear;stroke-linecap:round}::ng-deep radial-progress[mode=indeterminate] svg{-webkit-animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate;animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate}"]
                }] }
    ];
    /** @nocollapse */
    GalleryComponent.ctorParameters = function () { return [
        { type: Gallery }
    ]; };
    GalleryComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        nav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        dots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        zoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        counter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        dotsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        gestures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        disableThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        panSensitivity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        playerInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        dotsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        counterPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        slidingDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        thumbPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        destroyRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        skipInitConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        playingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        indexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        itemsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GalleryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryIframeComponent = /** @class */ (function () {
    function GalleryIframeComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    Object.defineProperty(GalleryIframeComponent.prototype, "pauseVideo", {
        set: /**
         * @param {?} shouldPause
         * @return {?}
         */
        function (shouldPause) {
            /** @type {?} */
            var iframe = this.iframe.nativeElement;
            if (shouldPause) {
                /** @type {?} */
                var src = iframe.src;
                iframe.src = src;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryIframeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
    };
    GalleryIframeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-iframe',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <iframe #iframe\n            frameborder=\"0\"\n            allowfullscreen\n            [src]=\"iframeSrc\">\n    </iframe>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryIframeComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    GalleryIframeComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pauseVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['pause',] }],
        iframe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['iframe',] }]
    };
    return GalleryIframeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        /**
         * Stream that emits the state
         */
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('loading');
        this.state = this._state.asObservable();
        /**
         * Progress value
         */
        this.progress = 0;
        /**
         * Image loader mode
         */
        this.mode = 'determinate';
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadFailed", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.loadError;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    };
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._state.complete();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    GalleryImageComponent.prototype.onProgress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var loaded = _a.loaded, total = _a.total;
        this.progress = loaded * 100 / total;
    };
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    GalleryImageComponent.prototype.onLoaded = /**
     * @param {?} blobUrl
     * @return {?}
     */
    function (blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle("url(" + blobUrl + ")");
        this._state.next('success');
    };
    /**
     * @param {?} err
     * @return {?}
     */
    GalleryImageComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    };
    GalleryImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-image',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                            ])
                        ])
                    ],
                    template: "\n    <ng-container [lazyImage]=\"src\"\n                  [mode]=\"mode\"\n                  (progress)=\"onProgress($event)\"\n                  (loaded)=\"onLoaded($event)\"\n                  (error)=\"onError($event)\"\n                  [ngSwitch]=\"state | async\">\n\n      <div *ngSwitchCase=\"'success'\"\n           @fadeIn\n           class=\"g-image-item\"\n           [style.backgroundImage]=\"imageUrl\">\n      </div>\n\n      <div *ngSwitchCase=\"'failed'\"\n           class=\"g-image-error-message\">\n        <div *ngIf=\"errorTemplate; else defaultError\"\n             [innerHTML]=\"errorTemplate\"></div>\n        <ng-template #defaultError>\n          <ng-container *ngIf=\"isThumbnail; else isLarge\">\n            <h4>\u26A0</h4>\n          </ng-container>\n          <ng-template #isLarge>\n            <h2>\u26A0</h2>\n            <p>Unable to load the image!</p>\n          </ng-template>\n        </ng-template>\n      </div>\n\n      <ng-container *ngSwitchCase=\"'loading'\">\n        <div *ngIf=\"loaderTemplate; else defaultLoader\"\n             class=\"g-loading\"\n             [innerHTML]=\"loaderTemplate\">\n        </div>\n        <ng-template #defaultLoader>\n\n          <div *ngIf=\"isThumbnail; else progressLoader\" class=\"g-thumb-loading\"></div>\n\n          <ng-template #progressLoader>\n            <radial-progress [value]=\"progress\" [mode]=\"mode\"></radial-progress>\n          </ng-template>\n\n          </ng-template>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryImageComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    GalleryImageComponent.propDecorators = {
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        isThumbnail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loadingError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        imageLoadSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-image-loaded',] }],
        imageLoadFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-image-error',] }]
    };
    return GalleryImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryVideoComponent = /** @class */ (function () {
    function GalleryVideoComponent() {
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryVideoComponent.prototype, "pauseVideo", {
        set: /**
         * @param {?} shouldPause
         * @return {?}
         */
        function (shouldPause) {
            /** @type {?} */
            var video = this.video.nativeElement;
            if (shouldPause && !video.paused) {
                video.pause();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryVideoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.src instanceof Array) {
            // If video has multiple sources
            this.videoSources = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.src);
        }
        else {
            this.videoSources = [{ url: this.src }];
        }
    };
    GalleryVideoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-video',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <video #video controls poster=\"{{poster}}\" (error)=\"error.emit($event)\">\n      <source *ngFor=\"let src of videoSources\" src=\"{{src?.url}}\" type=\"{{src?.type}}\"/>\n    </video>\n  "
                }] }
    ];
    GalleryVideoComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        poster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pauseVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['pause',] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['video',] }]
    };
    return GalleryVideoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    GalleryNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
    };
    GalleryNavComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-nav',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <i *ngIf=\"config.loop || state.hasPrev\"\n       class=\"g-nav-prev\"\n       aria-label=\"Previous\"\n       (tapClick)=\"action.emit('prev')\"\n       [innerHtml]=\"navIcon\"></i>\n\n    <i *ngIf=\"config.loop || state.hasNext\"\n       class=\"g-nav-next\"\n       aria-label=\"Next\"\n       (tapClick)=\"action.emit('next')\"\n       [innerHtml]=\"navIcon\"></i>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryNavComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    GalleryNavComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GalleryNavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryCoreComponent = /** @class */ (function () {
    function GalleryCoreComponent() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryCoreComponent.prototype, "thumbPosition", {
        /** Set thumbnails position */
        get: /**
         * Set thumbnails position
         * @return {?}
         */
        function () {
            return this.config.thumbPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "slidingDirection", {
        /** Set sliding direction */
        get: /**
         * Set sliding direction
         * @return {?}
         */
        function () {
            return this.config.slidingDirection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "disableThumb", {
        /** Disable thumbnails clicks */
        get: /**
         * Disable thumbnails clicks
         * @return {?}
         */
        function () {
            return this.config.disableThumb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "imageSize", {
        /** Set gallery image size */
        get: /**
         * Set gallery image size
         * @return {?}
         */
        function () {
            return this.config.imageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "dotsPosition", {
        /** Set gallery dots position */
        get: /**
         * Set gallery dots position
         * @return {?}
         */
        function () {
            return this.config.dotsPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "counterPosition", {
        /** Set gallery counter position */
        get: /**
         * Set gallery counter position
         * @return {?}
         */
        function () {
            return this.config.counterPosition;
        },
        enumerable: true,
        configurable: true
    });
    GalleryCoreComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-core',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <gallery-thumbs *ngIf=\"config.thumb\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\"\n                    (thumbClick)=\"thumbClick.emit($event)\">\n    </gallery-thumbs>\n    <div class=\"g-box\">\n      <gallery-slider [state]=\"state\"\n                      [config]=\"config\"\n                      (action)=\"action.emit($event)\"\n                      (itemClick)=\"itemClick.emit($event)\"\n                      (error)=\"error.emit($event)\">\n\n        <gallery-nav *ngIf=\"config.nav && state.items.length > 1\"\n                     [state]=\"state\"\n                     [config]=\"config\"\n                     (action)=\"action.emit($event)\">\n        </gallery-nav>\n\n      </gallery-slider>\n\n      <gallery-dots *ngIf=\"config.dots\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\">\n      </gallery-dots>\n\n      <gallery-counter *ngIf=\"config.counter\"\n                       [state]=\"state\">\n      </gallery-counter>\n    </div>\n  "
                }] }
    ];
    GalleryCoreComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.thumbPosition',] }],
        slidingDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.slidingDirection',] }],
        disableThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.disableThumb',] }],
        imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.imageSize',] }],
        dotsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.dotsPosition',] }],
        counterPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['attr.counterPosition',] }]
    };
    return GalleryCoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryDotsComponent = /** @class */ (function () {
    function GalleryDotsComponent() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    GalleryDotsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-dots',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"g-dot\"\n         *ngFor=\"let item of state.items; let i = index\"\n         [class.g-dot-active]=\"i === state.currIndex\"\n         [style.width.px]=\"config?.dotsSize\"\n         [style.height.px]=\"config?.dotsSize\"\n         (tapClick)=\"action.emit(i)\">\n      <div class=\"g-dot-inner\"></div>\n    </div>\n  "
                }] }
    ];
    GalleryDotsComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GalleryDotsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryThumbsComponent = /** @class */ (function () {
    function GalleryThumbsComponent(_el, _zone) {
        var _this = this;
        this._el = _el;
        this._zone = _zone;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({ value: 0, active: false });
        /**
         * Current slider position in free sliding mode
         */
        this._freeModeCurrentOffset = 0;
        /**
         * Stream that emits when the active item should change
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when thumb is clicked
         */
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return ({
            style: _this.getSliderStyles(state),
            active: state.active
        }); }));
    }
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
        this._freeModeCurrentOffset = 0;
    };
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
            /** @type {?} */
            var direction = void 0;
            switch (this.config.thumbPosition) {
                case ThumbnailsPosition.Right:
                case ThumbnailsPosition.Left:
                    direction = Hammer.DIRECTION_VERTICAL;
                    break;
                case ThumbnailsPosition.Top:
                case ThumbnailsPosition.Bottom:
                    direction = Hammer.DIRECTION_HORIZONTAL;
                    break;
            }
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction: direction });
            this._zone.runOutsideAngular(function () {
                // Move the slider
                switch (_this.config.thumbMode) {
                    case ThumbnailsMode.Strict:
                        _this._hammer.on('pan', function (e) { return _this.strictMode(e); });
                        break;
                    case ThumbnailsMode.Free:
                        _this._hammer.on('pan', function (e) { return _this.freeMode(e); });
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GalleryThumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
    };
    /**
     * Sliding strict mode
     */
    /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.strictMode = /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: e.deltaY, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.verticalPan(e);
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: e.deltaX, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.horizontalPan(e);
                }
        }
    };
    /**
     * Sliding free mode
     */
    /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.freeMode = /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaY, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaY, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbHeight;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaY, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbHeight;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaY;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaX, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaX, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbWidth;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaX, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbWidth;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaX;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
        }
    };
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     */
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GalleryThumbsComponent.prototype.minFreeScrollExceeded = /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (delta, width, height) {
        return -(this._freeModeCurrentOffset + delta - width / 2) > (this.state.items.length - this.state.currIndex) * height;
    };
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     */
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GalleryThumbsComponent.prototype.maxFreeScrollExceeded = /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (delta, width, height) {
        return this._freeModeCurrentOffset + delta > (this.state.currIndex * width) + (height / 2);
    };
    /**
     * Convert sliding state to styles
     */
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryThumbsComponent.prototype.getSliderStyles = /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var value;
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.width = '100%';
                this.height = this.config.thumbHeight + 'px';
                value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - state.value);
                return {
                    transform: "translate3d(" + value + "px, 0, 0)",
                    width: this.state.items.length * this.config.thumbWidth + 'px',
                    height: '100%'
                };
            case ThumbnailsPosition.Left:
            case ThumbnailsPosition.Right:
                this.width = this.config.thumbWidth + 'px';
                this.height = '100%';
                value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - state.value);
                return {
                    transform: "translate3d(0, " + value + "px, 0)",
                    width: '100%',
                    height: this.state.items.length * this.config.thumbHeight + 'px'
                };
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.verticalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GalleryThumbsComponent.prototype.horizontalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    GalleryThumbsComponent.prototype.next = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('next');
    };
    /**
     * @private
     * @return {?}
     */
    GalleryThumbsComponent.prototype.prev = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('prev');
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryThumbsComponent.prototype.updateSlider = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    };
    GalleryThumbsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-thumbs',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-thumbs-container\">\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-thumb *ngFor=\"let item of state.items;let i = index\"\n                       [type]=\"item.type\"\n                       [config]=\"config\"\n                       [data]=\"item.data\"\n                       [currIndex]=\"state.currIndex\"\n                       [index]=\"i\"\n                       [tapClickDisabled]=\"config.disableThumb\"\n                       (tapClick)=\"thumbClick.emit(i)\"\n                       (error)=\"error.emit({itemIndex: i, error: $event})\"></gallery-thumb>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryThumbsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] }
    ]; };
    GalleryThumbsComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['style.height',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['style.width',] }]
    };
    return GalleryThumbsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GallerySliderComponent = /** @class */ (function () {
    function GallerySliderComponent(_el, _zone, platform) {
        var _this = this;
        this._el = _el;
        this._zone = _zone;
        this.platform = platform;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({ value: 0, active: false });
        /**
         * Stream that emits when the active item should change
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when item is clicked
         */
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return ({
            style: _this.getSliderStyles(state),
            active: state.active
        }); }));
    }
    Object.defineProperty(GallerySliderComponent.prototype, "zoom", {
        /** Item zoom */
        get: /**
         * Item zoom
         * @return {?}
         */
        function () {
            return { transform: "perspective(50px) translate3d(0, 0, " + -this.config.zoomOut + "px)" };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
    };
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.gestures && typeof Hammer !== 'undefined') {
            /** @type {?} */
            var direction = this.config.slidingDirection === SlidingDirection.Horizontal
                ? Hammer.DIRECTION_HORIZONTAL
                : Hammer.DIRECTION_VERTICAL;
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction: direction });
            this._zone.runOutsideAngular(function () {
                // Move the slider
                _this._hammer.on('pan', function (e) {
                    switch (_this.config.slidingDirection) {
                        case SlidingDirection.Horizontal:
                            _this.updateSlider({ value: e.deltaX, active: true });
                            if (e.isFinal) {
                                _this.updateSlider({ value: 0, active: false });
                                _this.horizontalPan(e);
                            }
                            break;
                        case SlidingDirection.Vertical:
                            _this.updateSlider({ value: e.deltaY, active: true });
                            if (e.isFinal) {
                                _this.updateSlider({ value: 0, active: false });
                                _this.verticalPan(e);
                            }
                    }
                });
            });
        }
        // Rearrange slider on window resize
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platform)) {
            this._resizeSub$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.updateSlider(_this._slidingWorker$.value); })).subscribe();
        }
        setTimeout(function () { return _this.updateSlider({ value: 0, active: false }); });
    };
    /**
     * @return {?}
     */
    GallerySliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        if (this._resizeSub$) {
            this._resizeSub$.unsubscribe();
        }
        this._slidingWorker$.complete();
    };
    /**
     * Convert sliding state to styles
     */
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    GallerySliderComponent.prototype.getSliderStyles = /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        switch (this.config.slidingDirection) {
            case SlidingDirection.Horizontal:
                return {
                    transform: "translate3d(" + (-(this.state.currIndex * this._el.nativeElement.offsetWidth) + state.value) + "px, 0, 0)",
                    width: "calc(100% * " + this.state.items.length + ")",
                    height: '100%'
                };
            case SlidingDirection.Vertical:
                return {
                    transform: "translate3d(0, " + (-(this.state.currIndex * this._el.nativeElement.offsetHeight) + state.value) + "px, 0)",
                    width: '100%',
                    height: "calc(100% * " + this.state.items.length + ")",
                };
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GallerySliderComponent.prototype.verticalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    GallerySliderComponent.prototype.horizontalPan = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    GallerySliderComponent.prototype.next = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('next');
    };
    /**
     * @private
     * @return {?}
     */
    GallerySliderComponent.prototype.prev = /**
     * @private
     * @return {?}
     */
    function () {
        this.action.emit('prev');
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    GallerySliderComponent.prototype.updateSlider = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    };
    GallerySliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-slider',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-items-container\"\n         [ngStyle]=\"zoom\">\n\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-item *ngFor=\"let item of state.items; let i = index\"\n                      [type]=\"item.type\"\n                      [config]=\"config\"\n                      [data]=\"item.data\"\n                      [currIndex]=\"state.currIndex\"\n                      [index]=\"i\"\n                      (tapClick)=\"itemClick.emit(i)\"\n                      (error)=\"error.emit({itemIndex: i, error: $event})\">\n        </gallery-item>\n\n      </div>\n    </div>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    GallerySliderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"],] }] }
    ]; };
    GallerySliderComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return GallerySliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryCounterComponent = /** @class */ (function () {
    function GalleryCounterComponent() {
    }
    GalleryCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-counter',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"g-counter\">{{(state.currIndex + 1) + '/' + state.items.length}}</div>\n  "
                }] }
    ];
    GalleryCounterComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return GalleryCounterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryItemComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryItemComponent.prototype, "load", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.config.loadingStrategy) {
                case LoadingStrategy.Preload:
                    return true;
                case LoadingStrategy.Lazy:
                    return this.currIndex === this.index;
                default:
                    return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    GalleryItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-item',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <ng-container *ngIf=\"load\" [ngSwitch]=\"type\">\n\n      <ng-container *ngSwitchCase=\"Types.Image\">\n\n        <gallery-image [src]=\"data.src\"\n                       [mode]=\"config.loadingMode\"\n                       [loadingIcon]=\"config.loadingIcon\"\n                       [loadingError]=\"config.loadingError\"\n                       (error)=\"error.emit($event)\"></gallery-image>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n      <gallery-video *ngSwitchCase=\"Types.Video\"\n                     [src]=\"data.src\"\n                     [poster]=\"data.poster\"\n                     [pause]=\"currIndex !== index\"\n                     (error)=\"error.emit($event)\"></gallery-video>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Youtube\"\n                      [src]=\"data.src\"\n                      [pause]=\"currIndex !== index\"></gallery-iframe>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Iframe\"\n                      [src]=\"data.src\"></gallery-iframe>\n\n      <ng-container *ngSwitchDefault>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n    </ng-container>\n  "
                }] }
    ];
    GalleryItemComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        currIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-active-item',] }]
    };
    return GalleryItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent() {
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    Object.defineProperty(GalleryThumbComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    GalleryThumbComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'gallery-thumb',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <gallery-image [src]=\"data.thumb\" \n                   mode=\"indeterminate\"\n                   [isThumbnail]=\"true\" \n                   [loadingIcon]=\"config.thumbLoadingIcon\"\n                   [loadingError]=\"config.thumbLoadingError \"\n                   (error)=\"error.emit($event)\"></gallery-image>\n\n    <div *ngIf=\"config.thumbTemplate\" class=\"g-template g-thumb-template\">\n      <ng-container\n        *ngTemplateOutlet=\"config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }\">\n      </ng-container>\n    </div>\n  "
                }] }
    ];
    GalleryThumbComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        currIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"], args: ['class.g-active-thumb',] }]
    };
    return GalleryThumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadialProgressComponent = /** @class */ (function () {
    function RadialProgressComponent() {
        this.mode = 'determinate';
        this.value = 0;
        this.diameter = 60;
        this.strokeWidth = 3;
    }
    Object.defineProperty(RadialProgressComponent.prototype, "circleRadius", {
        /** The radius of the spinner, adjusted for stroke width. */
        get: /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */
        function () {
            return (this.diameter - this.strokeWidth) / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "viewBox", {
        /** The view box of the spinner's svg element. */
        get: /**
         * The view box of the spinner's svg element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var viewBox = this.circleRadius * 2 + this.strokeWidth;
            return "0 0 " + viewBox + " " + viewBox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "strokeCircumference", {
        /** The stroke circumference of the svg circle. */
        get: /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this.circleRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "strokeDashOffset", {
        /** The dash offset of the svg circle. */
        get: /**
         * The dash offset of the svg circle.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this.strokeCircumference * (100 - this.value) / 100;
            }
            // In fallback mode set the circle to 60% and rotate it with CSS.
            if (this.mode === 'indeterminate') {
                return this.strokeCircumference * 0.4;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialProgressComponent.prototype, "circleStrokeWidth", {
        /** Stroke width of the circle in percent. */
        get: /**
         * Stroke width of the circle in percent.
         * @return {?}
         */
        function () {
            return this.strokeWidth / this.diameter * 100;
        },
        enumerable: true,
        configurable: true
    });
    RadialProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'radial-progress',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[attr.mode]': 'mode',
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter'
                    },
                    template: "\n    <svg class=\"radial-progress\"\n         [style.width.px]=\"diameter\"\n         [style.height.px]=\"diameter\"\n         [attr.viewBox]=\"viewBox\"\n         preserveAspectRatio=\"xMidYMid meet\"\n         focusable=\"false\">\n\n      <circle class=\"radial-progress-meter\"\n              cx=\"50%\"\n              cy=\"50%\"\n              [attr.r]=\"circleRadius\"\n              [style.stroke-width.%]=\"circleStrokeWidth\"/>\n\n      <circle class=\"radial-progress-value\"\n              cx=\"50%\"\n              cy=\"50%\"\n              [attr.r]=\"circleRadius\"\n              [style.stroke-dashoffset.px]=\"strokeDashOffset\"\n              [style.stroke-dasharray.px]=\"strokeCircumference\"\n              [style.stroke-width.%]=\"circleStrokeWidth\"/>\n    </svg>\n  "
                }] }
    ];
    RadialProgressComponent.propDecorators = {
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return RadialProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyImage = /** @class */ (function () {
    function LazyImage(http, document) {
        var _this = this;
        this.http = http;
        this.document = document;
        this._imageLoader$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._loaderSub$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this.progress = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this._loaderSub$ = this._imageLoader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (imageSrc) { return _this.mode === 'determinate' ? _this.progressiveLoader(imageSrc) : _this.nativeLoader(imageSrc); })).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LazyImage.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    };
    /**
     * @return {?}
     */
    LazyImage.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    };
    /**
     * @param {?} imagePath
     * @return {?}
     */
    LazyImage.prototype.loadImage = /**
     * @param {?} imagePath
     * @return {?}
     */
    function (imagePath) {
        this._imageLoader$.next(imagePath);
    };
    /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param url
     */
    /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param {?} url
     * @return {?}
     */
    LazyImage.prototype.progressiveLoader = /**
     * Load image using HttpClient, This requires XHR access to the URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var downloadImage = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('GET', url, {
            reportProgress: true,
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'CACHE_GALLERY_IMAGE': 'true' })
        });
        return this.http.request(downloadImage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].DownloadProgress) {
                _this.progress.emit({ loaded: event.loaded, total: event.total });
            }
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                _this.loaded.emit(URL.createObjectURL(event.body));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.error.emit(err);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
        }));
    };
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    LazyImage.prototype.nativeLoader = /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        var loadSuccess = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loaded.emit(url); }));
        // Image load failed
        /** @type {?} */
        var loadError = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.error.emit(new Error("[lazyImage]: The image " + url + " did not load")); }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(loadSuccess, loadError);
    };
    LazyImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"], args: [{
                    selector: '[lazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyImage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    LazyImage.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"], args: ['lazyImage',] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return LazyImage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
 */
var TapClick = /** @class */ (function () {
    function TapClick(_el) {
        this._el = _el;
        this.clickListener = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this.tapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activateClickEvent();
    };
    /**
     * @return {?}
     */
    TapClick.prototype.activateClickEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', function () {
                if (!_this.tapClickDisabled) {
                    _this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._el.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () { return !_this.tapClickDisabled; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.tapClick.emit(null); })).subscribe();
        }
    };
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    };
    TapClick.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"], args: [{
                    selector: '[tapClick]'
                },] }
    ];
    /** @nocollapse */
    TapClick.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] }
    ]; };
    TapClick.propDecorators = {
        tapClickDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        tapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return TapClick;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
RequestCache = /** @class */ (function () {
    function RequestCache() {
    }
    return RequestCache;
}());
/** @type {?} */
var maxAge = 30000;
// maximum cache age (ms)
var RequestCacheWithMap = /** @class */ (function () {
    function RequestCacheWithMap() {
        this.cache = new Map();
    }
    /**
     * @param {?} req
     * @return {?}
     */
    RequestCacheWithMap.prototype.get = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var url = req.urlWithParams;
        /** @type {?} */
        var cached = this.cache.get(url);
        if (!cached) {
            return undefined;
        }
        return cached.response;
    };
    /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    RequestCacheWithMap.prototype.put = /**
     * @param {?} req
     * @param {?} response
     * @return {?}
     */
    function (req, response) {
        var _this = this;
        /** @type {?} */
        var url = req.urlWithParams;
        /** @type {?} */
        var entry = { url: url, response: response, lastRead: Date.now() };
        this.cache.set(url, entry);
        // remove expired cache entries
        /** @type {?} */
        var expired = Date.now() - maxAge;
        this.cache.forEach(function (entry) {
            if (entry.lastRead < expired) {
                _this.cache.delete(entry.url);
            }
        });
    };
    RequestCacheWithMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    return RequestCacheWithMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * If request is cachable (e.g., package search) and
 * response is in cache return the cached response as observable.
 *
 * If not in cache or not cachable,
 * pass request through to next()
 */
var CachingInterceptor = /** @class */ (function () {
    function CachingInterceptor(cache) {
        this.cache = cache;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    CachingInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.headers.has('CACHE_GALLERY_IMAGE') && isCachable(req)) {
            /** @type {?} */
            var cachedResponse = this.cache.get(req);
            // cache-then-refresh
            if (req.headers.get('x-refresh')) {
                /** @type {?} */
                var results$ = sendRequest(req, next, this.cache);
                return cachedResponse
                    ? results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(cachedResponse))
                    : results$;
            }
            // cache-or-fetch
            return cachedResponse
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(cachedResponse)
                : sendRequest(req, next, this.cache);
        }
        return next.handle(req);
    };
    CachingInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    CachingInterceptor.ctorParameters = function () { return [
        { type: RequestCache }
    ]; };
    return CachingInterceptor;
}());
/**
 * Is this request cachable?
 * @param {?} req
 * @return {?}
 */
function isCachable(req) {
    // Only GET requests are cachable
    return req.method === 'GET';
}
/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 * @param {?} req
 * @param {?} next
 * @param {?} cache
 * @return {?}
 */
function sendRequest(req, next, cache) {
    /** @type {?} */
    var request = req.clone({ headers: req.headers.delete('CACHE_GALLERY_IMAGE') });
    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
        // There may be other events besides the response.
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
            cache.put(req, event); // Update the cache.
        }
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GalleryModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    GalleryModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                    ],
                    providers: [
                        { provide: RequestCache, useClass: RequestCacheWithMap },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: CachingInterceptor, multi: true }
                    ],
                    declarations: [
                        GalleryComponent,
                        GalleryNavComponent,
                        GalleryDotsComponent,
                        GalleryCoreComponent,
                        GallerySliderComponent,
                        GalleryCounterComponent,
                        GalleryThumbsComponent,
                        GalleryThumbComponent,
                        GalleryItemComponent,
                        GalleryImageComponent,
                        GalleryVideoComponent,
                        GalleryIframeComponent,
                        RadialProgressComponent,
                        LazyImage,
                        TapClick
                    ],
                    exports: [
                        GalleryComponent,
                        LazyImage,
                        TapClick,
                    ]
                },] }
    ];
    return GalleryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-gallery-core.js.map

/***/ }),

/***/ "./node_modules/@ngx-gallery/gallerize/fesm5/ngx-gallery-gallerize.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ngx-gallery/gallerize/fesm5/ngx-gallery-gallerize.js ***!
  \****************************************************************************/
/*! exports provided: GallerizeDirective, GallerizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerizeDirective", function() { return GallerizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerizeModule", function() { return GallerizeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/fesm5/ngx-gallery-lightbox.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GallerizeDirective = /** @class */ (function () {
    function GallerizeDirective(_zone, _el, _gallery, _lightbox, _renderer, platform, _document, _galleryCmp) {
        this._zone = _zone;
        this._el = _el;
        this._gallery = _gallery;
        this._lightbox = _lightbox;
        this._renderer = _renderer;
        this._document = _document;
        this._galleryCmp = _galleryCmp;
        /**
         * Default gallery id
         */
        this._galleryId = 'lightbox';
        /**
         * The selector used to query images elements
         */
        this.selector = 'img';
        // Set gallerize mode
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platform)) {
            this._mode = _galleryCmp ? "gallery" /* Gallery */ : "detector" /* Detector */;
        }
    }
    /**
     * @return {?}
     */
    GallerizeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            _this._galleryId = _this.gallerize || _this._galleryId;
            /** @type {?} */
            var ref = _this._gallery.ref(_this._galleryId);
            switch (_this._mode) {
                case "detector" /* Detector */:
                    _this.detectorMode(ref);
                    break;
                case "gallery" /* Gallery */:
                    _this.galleryMode(ref);
            }
        });
    };
    /**
     * @return {?}
     */
    GallerizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        switch (this._mode) {
            case "detector" /* Detector */:
                this._detector$.complete();
                this._observer$.disconnect();
                break;
            case "gallery" /* Gallery */:
                this._itemClick$.unsubscribe();
                this._itemChange$.unsubscribe();
        }
    };
    /** Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox */
    /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    GallerizeDirective.prototype.galleryMode = /**
     * Gallery mode: means `gallerize` directive is used on `<gallery>` component
     * Adds a click event to each gallery item so it opens in lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    function (galleryRef) {
        var _this = this;
        // Clone its items to the new gallery instance
        this._itemClick$ = this._galleryCmp.galleryRef.itemClick.subscribe(function (i) { return _this._lightbox.open(i, _this._galleryId); });
        this._itemChange$ = this._galleryCmp.galleryRef.itemsChanged.subscribe(function (state) { return galleryRef.load(state.items); });
    };
    /** Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox */
    /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    GallerizeDirective.prototype.detectorMode = /**
     * Detector mode: means `gallerize` directive is used on a normal HTMLElement
     *  Detects images and adds a click event to each image so it opens in the lightbox
     * @private
     * @param {?} galleryRef
     * @return {?}
     */
    function (galleryRef) {
        var _this = this;
        this._detector$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Query image elements
        this._detector$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            /**
             * get all img elements from content
             * @type {?}
             */
            var imageElements = _this._el.nativeElement.querySelectorAll(_this.selector);
            if (imageElements && imageElements.length) {
                /** @type {?} */
                var images_1 = [];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(imageElements).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (el, i) {
                    // Add click event to the image
                    _this._renderer.setStyle(el, 'cursor', 'pointer');
                    _this._renderer.setProperty(el, 'onclick', function () {
                        return _this._zone.run(function () { return _this._lightbox.open(i, _this._galleryId); });
                    });
                    if (el instanceof HTMLImageElement) {
                        // If element is type of img use the src property
                        return {
                            src: el.getAttribute('imageSrc') || el.src,
                            thumb: el.getAttribute('thumbSrc') || el.src
                        };
                    }
                    else {
                        // Otherwise, use element background-image url
                        /** @type {?} */
                        var elStyle = el.currentStyle || _this._document.defaultView.getComputedStyle(el, null);
                        /** @type {?} */
                        var background = elStyle.backgroundImage.slice(4, -1).replace(/"/g, '');
                        return {
                            src: el.getAttribute('imageSrc') || background,
                            thumb: el.getAttribute('thumbSrc') || background
                        };
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return images_1.push(new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["ImageItem"](data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return galleryRef.load(images_1); }));
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
        })).subscribe();
        // Observe content changes
        this._observer$ = new MutationObserver(function () { return _this._detector$.next(); });
        this._observer$.observe(this._el.nativeElement, { childList: true, subtree: true });
    };
    GallerizeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[gallerize]'
                },] }
    ];
    /** @nocollapse */
    GallerizeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"] },
        { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    GallerizeDirective.propDecorators = {
        gallerize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return GallerizeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GallerizeModule = /** @class */ (function () {
    function GallerizeModule() {
    }
    GallerizeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [
                        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"],
                        _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxModule"]
                    ],
                    declarations: [GallerizeDirective],
                    exports: [GallerizeDirective]
                },] }
    ];
    return GallerizeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-gallery-gallerize.js.map

/***/ }),

/***/ "./node_modules/@ngx-gallery/lightbox/fesm5/ngx-gallery-lightbox.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ngx-gallery/lightbox/fesm5/ngx-gallery-lightbox.js ***!
  \**************************************************************************/
/*! exports provided: LIGHTBOX_CONFIG, LightboxComponent, Lightbox, LightboxModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHTBOX_CONFIG", function() { return LIGHTBOX_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxComponent", function() { return LightboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return Lightbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxModule", function() { return LightboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return lightboxAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return LightboxDirective; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LIGHTBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('lightboxConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var lightboxAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('lightbox', [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none', opacity: 1 }))),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_document, _focusTrapFactory, _elementRef, sanitizer) {
        this._document = _document;
        this._focusTrapFactory = _focusTrapFactory;
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        /**
         * State of the lightbox animation.
         */
        this.state = 'enter';
        this._savePreviouslyFocusedElement();
    }
    /** Callback, invoked whenever an animation on the host completes. */
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    LightboxComponent.prototype.onAnimationDone = /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else {
            this.overlayRef.dispose();
            this._restoreFocus();
        }
    };
    /** Moves the focus inside the focus trap. */
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the lightbox would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._focusTrap.focusInitialElementWhenReady();
    };
    /** Saves a reference to the element that was focused before the lightbox was opened. */
    /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the lightbox was opened.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this._document.activeElement));
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the lightbox immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
            }
        }
    };
    /** Restores focus to the element that was focused before the lightbox opened. */
    /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    LightboxComponent.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the lightbox opened.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    LightboxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'lightbox',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    animations: [lightboxAnimation],
                    template: "\n    <gallery [id]=\"id\" [destroyRef]=\"false\" [skipInitConfig]=\"true\">\n      <i class=\"g-btn-close\" aria-label=\"Close\" (click)=\"overlayRef.detach()\"\n         [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(closeIcon)\"></i>\n    </gallery>\n  ",
                    host: {
                        'tabindex': '-1',
                        'aria-modal': 'true',
                        '[attr.id]': '"lightbox-" + id',
                        '[attr.role]': 'role',
                        '[attr.aria-labelledby]': 'ariaLabel ? null : ariaLabelledBy',
                        '[attr.aria-label]': 'ariaLabel',
                        '[attr.aria-describedby]': 'ariaDescribedBy || null',
                        '[@lightbox]': 'state',
                        '(@lightbox.done)': 'onAnimationDone($event)',
                    },
                    styles: [".cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}::ng-deep lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}::ng-deep lightbox:focus{outline:0}::ng-deep lightbox gallery{overflow:hidden;margin:0;display:block;width:100%;height:100%}::ng-deep .g-backdrop{background-color:rgba(0,0,0,.32)}::ng-deep .fullscreen{width:100%}::ng-deep .fullscreen ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}::ng-deep .g-overlay{margin:auto}@media only screen and (max-width:480px){::ng-deep .g-overlay{width:100%}::ng-deep .g-overlay ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}}::ng-deep .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width:480px){::ng-deep .g-btn-close{right:.7em;top:.7em}}"]
                }] }
    ];
    /** @nocollapse */
    LightboxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }
    ]; };
    return LightboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultConfig = {
    backdropClass: 'g-backdrop',
    panelClass: 'g-overlay',
    hasBackdrop: true,
    keyboardShortcuts: true,
    role: 'lightbox',
    closeIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"512px\" height=\"512px\" enable-background=\"new 0 0 47.971 47.971\" version=\"1.1\" viewBox=\"0 0 47.971 47.971\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\" fill=\"#fff\"/>\n</svg>\n"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Lightbox = /** @class */ (function () {
    function Lightbox(config, _gallery, _overlay) {
        this._gallery = _gallery;
        this._overlay = _overlay;
        /**
         * Stream that emits when lightbox is opened
         */
        this.opened = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Stream that emits when lightbox is closed
         */
        this.closed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Set Lightbox Config
     * @param config - LightboxConfig
     */
    /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    Lightbox.prototype.setConfig = /**
     * Set Lightbox Config
     * @param {?} config - LightboxConfig
     * @return {?}
     */
    function (config) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this._config, config);
    };
    /**
     * Open Lightbox Overlay
     * @param i - Current Index
     * @param id - Gallery ID
     * @param config - Lightbox Config
     */
    /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    Lightbox.prototype.open = /**
     * Open Lightbox Overlay
     * @param {?=} i - Current Index
     * @param {?=} id - Gallery ID
     * @param {?=} config - Lightbox Config
     * @return {?}
     */
    function (i, id, config) {
        var _this = this;
        if (i === void 0) { i = 0; }
        if (id === void 0) { id = 'lightbox'; }
        /** @type {?} */
        var _config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this._config, config) : this._config;
        /** @type {?} */
        var overlayConfig = {
            backdropClass: _config.backdropClass,
            panelClass: _config.panelClass,
            hasBackdrop: _config.hasBackdrop,
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            disposeOnNavigation: true
        };
        /** @type {?} */
        var galleryRef = this._gallery.ref(id);
        galleryRef.set(i);
        this._overlayRef = this._overlay.create(overlayConfig);
        // overlay opened event
        this._overlayRef.attachments().subscribe(function () { return _this.opened.next(id); });
        // overlay closed event
        this._overlayRef.detachments().subscribe(function () { return _this.closed.next(id); });
        // Attach gallery to the overlay
        /** @type {?} */
        var galleryPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](LightboxComponent);
        /** @type {?} */
        var lightboxRef = this._overlayRef.attach(galleryPortal);
        lightboxRef.instance.id = id;
        lightboxRef.instance.overlayRef = this._overlayRef;
        lightboxRef.instance.closeIcon = this._config.closeIcon;
        lightboxRef.instance.role = this._config.role;
        lightboxRef.instance.ariaLabel = this._config.ariaLabel;
        lightboxRef.instance.ariaLabelledBy = this._config.ariaLabelledBy;
        lightboxRef.instance.ariaDescribedBy = this._config.ariaDescribedBy;
        if (_config.hasBackdrop) {
            this._overlayRef.backdropClick().subscribe(function () { return _this.close(); });
        }
        // Add keyboard shortcuts
        if (_config.keyboardShortcuts) {
            this._overlayRef.keydownEvents().subscribe(function (event) {
                switch (event.keyCode) {
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
                        galleryRef.prev();
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
                        galleryRef.next();
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]:
                        _this.close();
                }
            });
        }
    };
    /**
     * Close Lightbox Overlay
     */
    /**
     * Close Lightbox Overlay
     * @return {?}
     */
    Lightbox.prototype.close = /**
     * Close Lightbox Overlay
     * @return {?}
     */
    function () {
        if (this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
    };
    Lightbox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    /** @nocollapse */
    Lightbox.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [LIGHTBOX_CONFIG,] }] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["Gallery"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"] }
    ]; };
    return Lightbox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LightboxDirective = /** @class */ (function () {
    function LightboxDirective(_lightbox, _el, _renderer) {
        this._lightbox = _lightbox;
        this._el = _el;
        this._renderer = _renderer;
        this.clickEvent = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        this.index = 0;
        this.id = 'root';
    }
    /**
     * @return {?}
     */
    LightboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'cursor', 'pointer');
        this.clickEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._el.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this._lightbox.open(_this.index, _this.id); })).subscribe();
    };
    /**
     * @return {?}
     */
    LightboxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clickEvent.unsubscribe();
    };
    LightboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[lightbox]'
                },] }
    ];
    /** @nocollapse */
    LightboxDirective.ctorParameters = function () { return [
        { type: Lightbox },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] }
    ]; };
    LightboxDirective.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['lightbox',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['gallery',] }]
    };
    return LightboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LightboxModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: LightboxModule,
            providers: [
                {
                    provide: LIGHTBOX_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    LightboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                        _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"],
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"]
                    ],
                    declarations: [
                        LightboxComponent,
                        LightboxDirective
                    ],
                    exports: [
                        LightboxDirective
                    ],
                    providers: [
                        Lightbox
                    ],
                    entryComponents: [
                        LightboxComponent
                    ]
                },] }
    ];
    return LightboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-gallery-lightbox.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-user-edit/place-user-edit.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-user-edit/place-user-edit.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onDismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>      \r\n      <ion-row nowrap>\r\n        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"4\" *ngFor=\"let item of skeletonImages\">\r\n          <ngx-skeleton-loader count=\"1\" appearance=\"circle\"\r\n            [theme]=\"{ width: '3000px', height: '300px', 'border-radius': '4px' }\">\r\n          </ngx-skeleton-loader>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/review-add/review-add.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/review-add/review-add.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"onDismiss()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{ 'ADD_REVIEW' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div text-center>\r\n    <star-rating class=\"space-around\" [value]=\"review.rating\" checkedcolor=\"#f2b01e\" uncheckedcolor=\"gray\" size=\"48px\" readonly=\"false\"\r\n      (rate)=\"onRatingChange($event)\">\r\n    </star-rating>\r\n    <ion-item margin-vertical lines=\"none\" class=\"radius\" color=\"light\">\r\n      <ion-textarea [(ngModel)]=\"review.comment\" rows=\"8\" [placeholder]=\"'COMMENT' | translate\" (keyup.enter)=\"onSubmit()\"></ion-textarea>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div text-center>\r\n      <ion-button shape=\"round\" color=\"secondary\"\r\n        [disabled]=\"isLoadingViewVisible\"\r\n        (click)=\"onSubmit()\">\r\n        <ion-spinner *ngIf=\"isLoadingViewVisible\"></ion-spinner>\r\n        <span *ngIf=\"!isLoadingViewVisible\">{{ 'SUBMIT' | translate }}</span>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/place-user-edit/place-user-edit.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/place-user-edit/place-user-edit.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceUserEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceUserEditPageModule", function() { return PlaceUserEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _place_user_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./place-user-edit */ "./src/app/pages/place-user-edit/place-user-edit.ts");






var PlaceUserEditPageModule = /** @class */ (function () {
    function PlaceUserEditPageModule() {
    }
    PlaceUserEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _place_user_edit__WEBPACK_IMPORTED_MODULE_4__["PlaceUserEditPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _place_user_edit__WEBPACK_IMPORTED_MODULE_4__["PlaceUserEditPage"]
            ]
        })
    ], PlaceUserEditPageModule);
    return PlaceUserEditPageModule;
}());



/***/ }),

/***/ "./src/app/pages/place-user-edit/place-user-edit.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/place-user-edit/place-user-edit.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLXVzZXItZWRpdC9wbGFjZS11c2VyLWVkaXQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/place-user-edit/place-user-edit.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/place-user-edit/place-user-edit.ts ***!
  \**********************************************************/
/*! exports provided: PlaceUserEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceUserEditPage", function() { return PlaceUserEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _review_add_review_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review-add/review-add */ "./src/app/pages/review-add/review-add.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sign-in/sign-in */ "./src/app/pages/sign-in/sign-in.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _share_share_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../share/share.page */ "./src/app/pages/share/share.page.ts");
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
















var PlaceUserEditPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaceUserEditPage, _super);
    function PlaceUserEditPage(injector, placeService, sanitizer, geolocationService, reviewService, gallery, socialSharing) {
        var _this = _super.call(this, injector) || this;
        _this.placeService = placeService;
        _this.sanitizer = sanitizer;
        _this.geolocationService = geolocationService;
        _this.reviewService = reviewService;
        _this.gallery = gallery;
        _this.socialSharing = socialSharing;
        _this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleMapsApiKey;
        _this.images = [];
        _this.rating = 0;
        _this.isLiked = false;
        _this.isStarred = false;
        _this.reviews = [];
        _this.slidesConfig = {};
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
        _this.contentLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        _this.skeletonImages = Array(6);
        _this.skeletonReviews = Array(5);
        return _this;
    }
    PlaceUserEditPage_1 = PlaceUserEditPage;
    PlaceUserEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setupObservable();
        this.setupGallery();
        this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent();
        this.events.subscribe('user:login', function () {
            _this.user = _services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent();
        });
        this.events.subscribe('user:loggedOut', function () {
            _this.user = null;
        });
    };
    PlaceUserEditPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.place) return [3 /*break*/, 2];
                        this.setupSlider();
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 1:
                        _a.sent();
                        this.loadPlace();
                        this.loadLocation();
                        return [3 /*break*/, 3];
                    case 2:
                        this.setPageTitle(this.place.title);
                        this.setMetaTags({
                            title: this.place.title,
                            description: this.place.description,
                            image: this.place.image ? this.place.image.url() : '',
                            slug: this.place.getSlug()
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlaceUserEditPage.prototype.onSlidesDidLoad = function () {
        this.contentLoaded.next();
    };
    PlaceUserEditPage.prototype.onSlidesDrag = function () {
        this.contentLoaded.next();
    };
    PlaceUserEditPage.prototype.setupObservable = function () {
        this.loadAndScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.container.ionScroll, this.contentLoaded);
    };
    PlaceUserEditPage.prototype.setupGallery = function () {
        var config = {
            loadingMode: 'indeterminate'
        };
        var galleryRef = this.gallery.ref('placeGallery');
        galleryRef.setConfig(config);
    };
    PlaceUserEditPage.prototype.onContentLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.contentLoaded.next();
        }, 400);
    };
    PlaceUserEditPage.prototype.loadPlace = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadOne(this.getParams().id)];
                    case 1:
                        _a.place = _b.sent();
                        console.log('ksajdflkajsf', this.place);
                        if (this.place.longDescription) {
                            this.description = this.sanitizer
                                .bypassSecurityTrustHtml(this.place.longDescription);
                        }
                        this.setPageTitle(this.place.title);
                        this.setMetaTags({
                            title: this.place.title,
                            description: this.place.description,
                            image: this.place.featuredImageUrl || '',
                            slug: this.place.getSlug()
                        });
                        this.webSocialShare.share.config.forEach(function (item) {
                            if (item.whatsapp) {
                                item.whatsapp.socialShareUrl = _this.getShareUrl(_this.place.getSlug());
                            }
                            else if (item.facebook) {
                                item.facebook.socialShareUrl = _this.getShareUrl(_this.place.getSlug());
                            }
                            else if (item.twitter) {
                                item.twitter.socialShareUrl = _this.getShareUrl(_this.place.getSlug());
                            }
                        });
                        this.rating = this.place.rating;
                        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
                            this.checkIfIsLiked();
                            this.checkIfIsStarred();
                        }
                        this.loadReviews();
                        if (this.place.featuredImageUrl) {
                            this.images.push(this.place.featuredImageUrl);
                        }
                        this.place.images.forEach(function (element) {
                            _this.images.push(element._url);
                        });
                        this.showContentView();
                        this.onContentLoaded();
                        this.onRefreshComplete(this.place);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        if (err_1.code === 101) {
                            this.showEmptyView();
                        }
                        else {
                            this.showErrorView();
                        }
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.editPlace = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent())
                            return [2 /*return*/, this.openSignInModal()];
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: PlaceUserEditPage_1,
                                componentProps: { id: event }
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.dismissLoadingView()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.setupSlider = function () {
        this.slidesConfig = {
            grabCursor: true,
            slidesPerView: 2.5,
            breakpointsInverse: true,
            zoom: false,
            touchStartPreventDefault: false,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2.2,
                    spaceBetween: 6
                },
                // when window width is >= 400px
                400: {
                    slidesPerView: 2.5,
                    spaceBetween: 5
                },
                // when window width is >= 640px
                600: {
                    slidesPerView: 3.5,
                    spaceBetween: 10
                },
                800: {
                    slidesPerView: 4.5,
                    spaceBetween: 10
                }
            }
        };
    };
    PlaceUserEditPage.prototype.checkIfIsLiked = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isLiked, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.isLiked(this.place)];
                    case 1:
                        isLiked = _a.sent();
                        this.isLiked = isLiked;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.warn(err_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.checkIfIsStarred = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isStarred, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.isStarred(this.place)];
                    case 1:
                        isStarred = _a.sent();
                        this.isStarred = isStarred;
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.warn(err_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.loadLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, err_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 1:
                        coords = _a.sent();
                        this.location = coords;
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.warn(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.loadReviews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, err_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.reviewService.load({
                                place: this.place, limit: 5
                            })];
                    case 1:
                        _a.reviews = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _b.sent();
                        console.warn(err_5.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.openSignInModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _sign_in_sign_in__WEBPACK_IMPORTED_MODULE_9__["SignInPage"]
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.dismissLoadingView()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.openAddReviewModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _review_add_review_add__WEBPACK_IMPORTED_MODULE_4__["ReviewAddPage"],
                                componentProps: {
                                    place: this.place
                                }
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.dismissLoadingView()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 5:
                        data = (_a.sent()).data;
                        if (data) {
                            this.reviews.unshift(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.openShareModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showLoadingView({ showOverlay: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _share_share_page__WEBPACK_IMPORTED_MODULE_13__["SharePage"],
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.dismissLoadingView()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaceUserEditPage.prototype.onLike = function () {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
            this.isLiked = !this.isLiked;
            this.placeService.like(this.place);
        }
        else {
            this.openSignInModal();
        }
    };
    PlaceUserEditPage.prototype.onRate = function () {
        if (_services_user_service__WEBPACK_IMPORTED_MODULE_7__["User"].getCurrent()) {
            this.openAddReviewModal();
        }
        else {
            this.openSignInModal();
        }
    };
    PlaceUserEditPage.prototype.onContentTouched = function (ev) {
        if (ev === void 0) { ev = {}; }
        var href = ev.target.getAttribute('href');
        if (href) {
            ev.preventDefault();
            this.openUrl(href);
        }
    };
    PlaceUserEditPage.prototype.onShare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, err_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isCordova) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = this.getShareUrl(this.place.getSlug());
                        return [4 /*yield*/, this.socialSharing.share(null, null, null, url)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        console.warn(err_6);
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
    PlaceUserEditPage.prototype.onCall = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.openSimpleUrl('tel:' + this.place.phone);
                return [2 /*return*/];
            });
        });
    };
    PlaceUserEditPage.prototype.onDirectionsButtonTouched = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lat, lng, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                lat = this.place.location.latitude;
                lng = this.place.location.longitude;
                url = "https://maps.google.com/maps?q=" + lat + "," + lng;
                //const url = `http://maps.apple.com/?ll=${lat},${lng}`;
                this.openMapUrl(url);
                return [2 /*return*/];
            });
        });
    };
    var PlaceUserEditPage_1;
    PlaceUserEditPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_6__["Place"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__["GeolocationService"] },
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_8__["Review"] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_15__["Gallery"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], PlaceUserEditPage.prototype, "container", void 0);
    PlaceUserEditPage = PlaceUserEditPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-place-user-edit',
            template: __webpack_require__(/*! raw-loader!./place-user-edit.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-user-edit/place-user-edit.html"),
            styles: [__webpack_require__(/*! ./place-user-edit.scss */ "./src/app/pages/place-user-edit/place-user-edit.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_6__["Place"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"],
            src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_14__["GeolocationService"],
            _services_review_service__WEBPACK_IMPORTED_MODULE_8__["Review"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_15__["Gallery"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], PlaceUserEditPage);
    return PlaceUserEditPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



/***/ }),

/***/ "./src/app/pages/review-add/review-add.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/review-add/review-add.module.ts ***!
  \*******************************************************/
/*! exports provided: ReviewAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAddPageModule", function() { return ReviewAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _review_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-add */ "./src/app/pages/review-add/review-add.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ReviewAddPageModule = /** @class */ (function () {
    function ReviewAddPageModule() {
    }
    ReviewAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _review_add__WEBPACK_IMPORTED_MODULE_2__["ReviewAddPage"],
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            entryComponents: [
                _review_add__WEBPACK_IMPORTED_MODULE_2__["ReviewAddPage"]
            ]
        })
    ], ReviewAddPageModule);
    return ReviewAddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/review-add/review-add.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/review-add/review-add.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 60px;\n}\n\nion-item {\n  --border-radius: 4px;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3LWFkZC9DOlxcVXNlcnNcXFZvY2FsRWFzdFxcRG9jdW1lbnRzXFxHaXRIdWJcXGtlcGNoZS9zcmNcXGFwcFxccGFnZXNcXHJldmlldy1hZGRcXHJldmlldy1hZGQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV2aWV3LWFkZC9yZXZpZXctYWRkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmV2aWV3LWFkZC9yZXZpZXctYWRkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/review-add/review-add.ts":
/*!************************************************!*\
  !*** ./src/app/pages/review-add/review-add.ts ***!
  \************************************************/
/*! exports provided: ReviewAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAddPage", function() { return ReviewAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/review-service */ "./src/app/services/review-service.ts");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place-service */ "./src/app/services/place-service.ts");





var ReviewAddPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReviewAddPage, _super);
    function ReviewAddPage(injector, reviewService) {
        var _this = _super.call(this, injector) || this;
        _this.reviewService = reviewService;
        _this.review = {
            rating: 3,
            comment: ''
        };
        return _this;
    }
    ReviewAddPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ReviewAddPage.prototype.onRatingChange = function (event) {
        if (event === void 0) { event = {}; }
        this.review.rating = event.newValue;
    };
    ReviewAddPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, review, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.review.rating) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('PLEASE_SELECT_A_RATING')];
                    case 1:
                        message = _a.sent();
                        this.showToast(message);
                        return [2 /*return*/];
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.showLoadingView({ showOverlay: false })];
                    case 3:
                        _a.sent();
                        this.review.place = this.place;
                        return [4 /*yield*/, this.reviewService.create(this.review)];
                    case 4:
                        review = _a.sent();
                        this.showContentView();
                        this.onDismiss(review);
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.showContentView();
                        if (err_1.code === 5000) {
                            this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ReviewAddPage.prototype.onDismiss = function (review) {
        if (review === void 0) { review = null; }
        this.modalCtrl.dismiss(review);
    };
    ReviewAddPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["Place"])
    ], ReviewAddPage.prototype, "place", void 0);
    ReviewAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-review-add',
            template: __webpack_require__(/*! raw-loader!./review-add.html */ "./node_modules/raw-loader/index.js!./src/app/pages/review-add/review-add.html"),
            styles: [__webpack_require__(/*! ./review-add.scss */ "./src/app/pages/review-add/review-add.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_review_service__WEBPACK_IMPORTED_MODULE_2__["Review"]])
    ], ReviewAddPage);
    return ReviewAddPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"]));



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

/***/ "./src/app/services/photo.ts":
/*!***********************************!*\
  !*** ./src/app/services/photo.ts ***!
  \***********************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);



var Photo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Photo, _super);
    function Photo() {
        return _super.call(this, 'Photo') || this;
    }
    Photo_1 = Photo;
    Photo.getInstance = function () {
        return this;
    };
    Photo.prototype.load = function (params) {
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Photo_1);
            query.skip(page * limit);
            query.limit(limit);
            query.include('place');
            query.include('user');
            query.include('status');
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.place) {
                query.equalTo('place', params.place);
            }
            query.equalTo('isActive', true);
            query.descending('createdAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Photo.prototype.create = function (data) {
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            var review = new Photo_1();
            review.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Photo.prototype.loadOne = function (id) {
        return new Promise(function (resolve, reject) {
            var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Photo_1);
            query.include('place');
            query.equalTo('objectId', id);
            query.equalTo('status', 'Active');
            query.first().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Photo.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "like", {
        get: function () {
            return this.get('like');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "type", {
        get: function () {
            return this.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    var Photo_1;
    Photo = Photo_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Photo);
    return Photo;
}(parse__WEBPACK_IMPORTED_MODULE_2__["Object"]));

parse__WEBPACK_IMPORTED_MODULE_2__["Object"].registerSubclass('Photo', Photo);


/***/ })

}]);
//# sourceMappingURL=default~pages-place-detail-place-detail-module~pages-user-detail-user-detail-module-es5.js.map
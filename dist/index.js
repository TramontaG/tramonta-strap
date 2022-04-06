/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __importDefault(__webpack_require__(/*! ./src/components */ "./src/components/index.ts"));
var TramontaStrap = Object.assign({}, components_1.default);
document.write('<app-root></app-root>');
exports["default"] = components_1.default;


/***/ }),

/***/ "./src/componentBase/index.ts":
/*!************************************!*\
  !*** ./src/componentBase/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
class ComponentBase {
    constructor({ parent }) {
        this.id = (0, helpers_1.createRandomId)();
        //DOM manipulation
        this.parent = parent || document.body;
        this.node = document.createElement('div');
        this.node.id = this.id;
        this.parent.appendChild(this.node);
    }
    delete() {
        this.parent.removeChild(this.node);
    }
}
exports["default"] = ComponentBase;


/***/ }),

/***/ "./src/components/Alert/index.ts":
/*!***************************************!*\
  !*** ./src/components/Alert/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const componentBase_1 = __importDefault(__webpack_require__(/*! ../../componentBase */ "./src/componentBase/index.ts"));
class Alert extends componentBase_1.default {
    constructor({ showtime, parent }) {
        super({ parent });
        this.showTime = showtime * 1000;
        this.showing = false;
        this.message = '';
    }
    showError(message) {
        this.message = message;
        this.show();
        setTimeout(this.hide, this.showTime);
    }
    showSuccess(message) {
        this.message = message;
        this.show();
        setTimeout(this.hide, this.showTime);
    }
    set message(message) {
        this.message = message;
    }
    toggle() {
        this.showing = !this.showing;
    }
    show() {
        this.showing = true;
    }
    hide() {
        this.showing = false;
    }
}
exports["default"] = Alert;


/***/ }),

/***/ "./src/components/ToggableButton/index.ts":
/*!************************************************!*\
  !*** ./src/components/ToggableButton/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fast_element_1 = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/index.js");
const template_1 = __importDefault(__webpack_require__(/*! ./template */ "./src/components/ToggableButton/template.ts"));
let TogglableButton = class TogglableButton extends fast_element_1.FASTElement {
    constructor() {
        super(...arguments);
        this.text = 'Test';
        this.active = true;
    }
};
__decorate([
    fast_element_1.attr
], TogglableButton.prototype, "text", void 0);
__decorate([
    fast_element_1.attr
], TogglableButton.prototype, "active", void 0);
TogglableButton = __decorate([
    (0, fast_element_1.customElement)({
        name: 'toggable-button',
        template: template_1.default,
    })
], TogglableButton);
exports["default"] = TogglableButton;


/***/ }),

/***/ "./src/components/ToggableButton/template.ts":
/*!***************************************************!*\
  !*** ./src/components/ToggableButton/template.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const fast_element_1 = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/index.js");
const template = (0, fast_element_1.html) `
	<div>
		<button active="${x => x.active}">${x => x.text}</button>
	</div>
`;
exports["default"] = template;


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Alert_1 = __importDefault(__webpack_require__(/*! ./Alert */ "./src/components/Alert/index.ts"));
const ToggableButton_1 = __importDefault(__webpack_require__(/*! ./ToggableButton */ "./src/components/ToggableButton/index.ts"));
const Components = {
    Alert: Alert_1.default,
    ToggableButton: ToggableButton_1.default,
};
exports["default"] = Components;


/***/ }),

/***/ "./src/helpers/idHelper.ts":
/*!*********************************!*\
  !*** ./src/helpers/idHelper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRandomId = void 0;
const createRandomId = () => {
    const randomNumber = (Math.random() * 1000000).toString();
    const now = new Date().getTime().toString();
    return (randomNumber + now)
        .split('')
        .map(char => Math.random() > 0.5
        ? String.fromCharCode(char.charCodeAt(0) ^ Math.round(Math.random() * 100))
        : '')
        .join('');
};
exports.createRandomId = createRandomId;


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./idHelper */ "./src/helpers/idHelper.ts"), exports);


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeDefinition": () => (/* binding */ AttributeDefinition),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "booleanConverter": () => (/* binding */ booleanConverter),
/* harmony export */   "nullableNumberConverter": () => (/* binding */ nullableNumberConverter)
/* harmony export */ });
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");


/**
 * A {@link ValueConverter} that converts to and from `boolean` values.
 * @remarks
 * Used automatically when the `boolean` {@link AttributeMode} is selected.
 * @public
 */
const booleanConverter = {
    toView(value) {
        return value ? "true" : "false";
    },
    fromView(value) {
        if (value === null ||
            value === void 0 ||
            value === "false" ||
            value === false ||
            value === 0) {
            return false;
        }
        return true;
    },
};
/**
 * A {@link ValueConverter} that converts to and from `number` values.
 * @remarks
 * This converter allows for nullable numbers, returning `null` if the
 * input was `null`, `undefined`, or `NaN`.
 * @public
 */
const nullableNumberConverter = {
    toView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number.toString();
    },
    fromView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number;
    },
};
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */
    constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === "boolean" && converter === void 0) {
            this.converter = booleanConverter;
        }
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */
    setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) {
            newValue = converter.fromView(newValue);
        }
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) {
                source[this.callbackName](oldValue, newValue);
            }
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */
    getValue(source) {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */
    onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) {
            return;
        }
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") {
            return;
        }
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => {
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch (mode) {
                case "reflect":
                    const converter = this.converter;
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case "boolean":
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */
    static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(Owner.attributes);
        for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
            const list = attributeLists[i];
            if (list === void 0) {
                continue;
            }
            for (let j = 0, jj = list.length; j < jj; ++j) {
                const config = list[j];
                if (typeof config === "string") {
                    attributes.push(new AttributeDefinition(Owner, config));
                }
                else {
                    attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
                }
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) {
            // Non invocation:
            // - @attr
            // Invocation with or w/o opts:
            // - @attr()
            // - @attr({...opts})
            config.property = $prop;
        }
        const attributes = $target.constructor.attributes ||
            ($target.constructor.attributes = []);
        attributes.push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/controller.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_notifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/notifier.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fast-definitions.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");




const shadowRoots = new WeakMap();
const defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true,
};
function getShadowRoot(element) {
    return element.shadowRoot || shadowRoots.get(element) || null;
}
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */
class Controller extends _observation_notifier_js__WEBPACK_IMPORTED_MODULE_0__.PropertyChangeNotifier {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */
    constructor(element, definition) {
        super(element);
        this.boundObservables = null;
        this.behaviors = null;
        this.needsInitialization = true;
        this._template = null;
        this._styles = null;
        this._isConnected = false;
        /**
         * This allows Observable.getNotifier(...) to return the Controller
         * when the notifier for the Controller itself is being requested. The
         * result is that the Observable system does not need to create a separate
         * instance of Notifier for observables on the Controller. The component and
         * the controller will now share the same notifier, removing one-object construct
         * per web component instance.
         */
        this.$fastController = this;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */
        this.view = null;
        this.element = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            const shadowRoot = element.attachShadow(shadowOptions);
            if (shadowOptions.mode === "closed") {
                shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable.getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = (this.boundObservables = Object.create(null));
            for (let i = 0, ii = accessors.length; i < ii; ++i) {
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */
    get isConnected() {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable.track(this, "isConnected");
        return this._isConnected;
    }
    setIsConnected(value) {
        this._isConnected = value;
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable.notify(this, "isConnected");
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get template() {
        return this._template;
    }
    set template(value) {
        if (this._template === value) {
            return;
        }
        this._template = value;
        if (!this.needsInitialization) {
            this.renderTemplate(value);
        }
    }
    /**
     * Gets/sets the primary styles used for the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get styles() {
        return this._styles;
    }
    set styles(value) {
        if (this._styles === value) {
            return;
        }
        if (this._styles !== null) {
            this.removeStyles(this._styles);
        }
        this._styles = value;
        if (!this.needsInitialization && value !== null) {
            this.addStyles(value);
        }
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */
    addStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.append(styles);
        }
        else if (!styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(target);
            if (sourceBehaviors !== null) {
                this.addBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */
    removeStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.removeChild(styles);
        }
        else if (styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(target);
            if (sourceBehaviors !== null) {
                this.removeBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Adds behaviors to this element.
     * @param behaviors - The behaviors to add.
     */
    addBehaviors(behaviors) {
        const targetBehaviors = this.behaviors || (this.behaviors = new Map());
        const length = behaviors.length;
        const behaviorsToBind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
            }
            else {
                targetBehaviors.set(behavior, 1);
                behaviorsToBind.push(behavior);
            }
        }
        if (this._isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToBind.length; ++i) {
                behaviorsToBind[i].bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
    }
    /**
     * Removes behaviors from this element.
     * @param behaviors - The behaviors to remove.
     * @param force - Forces unbinding of behaviors.
     */
    removeBehaviors(behaviors, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) {
            return;
        }
        const length = behaviors.length;
        const behaviorsToUnbind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                const count = targetBehaviors.get(behavior) - 1;
                count === 0 || force
                    ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior)
                    : targetBehaviors.set(behavior, count);
            }
        }
        if (this._isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToUnbind.length; ++i) {
                behaviorsToUnbind[i].unbind(element);
            }
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */
    onConnectedCallback() {
        if (this._isConnected) {
            return;
        }
        const element = this.element;
        if (this.needsInitialization) {
            this.finishInitialization();
        }
        else if (this.view !== null) {
            this.view.bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            for (const [behavior] of behaviors) {
                behavior.bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
        this.setIsConnected(true);
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */
    onDisconnectedCallback() {
        if (!this._isConnected) {
            return;
        }
        this.setIsConnected(false);
        const view = this.view;
        if (view !== null) {
            view.unbind();
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            const element = this.element;
            for (const [behavior] of behaviors) {
                behavior.unbind(element);
            }
        }
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */
    onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) {
            attrDef.onAttributeChangedCallback(this.element, newValue);
        }
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */
    emit(type, detail, options) {
        if (this._isConnected) {
            return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
        }
        return false;
    }
    finishInitialization() {
        const element = this.element;
        const boundObservables = this.boundObservables;
        // If we have any observables that were bound, re-apply their values.
        if (boundObservables !== null) {
            const propertyNames = Object.keys(boundObservables);
            for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
        const definition = this.definition;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            if (this.element.resolveTemplate) {
                // 2. Allow for element instance overrides next.
                this._template = this.element.resolveTemplate();
            }
            else if (definition.template) {
                // 3. Default to the static definition.
                this._template = definition.template || null;
            }
        }
        // If we have a template after the above process, render it.
        // If there's no template, then the element author has opted into
        // custom rendering and they will managed the shadow root's content themselves.
        if (this._template !== null) {
            this.renderTemplate(this._template);
        }
        // 1. Styles overrides take top precedence.
        if (this._styles === null) {
            if (this.element.resolveStyles) {
                // 2. Allow for element instance overrides next.
                this._styles = this.element.resolveStyles();
            }
            else if (definition.styles) {
                // 3. Default to the static definition.
                this._styles = definition.styles || null;
            }
        }
        // If we have styles after the above process, add them.
        if (this._styles !== null) {
            this.addStyles(this._styles);
        }
        this.needsInitialization = false;
    }
    renderTemplate(template) {
        const element = this.element;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const host = getShadowRoot(element) || element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        }
        else if (!this.needsInitialization) {
            // If there was previous custom rendering, we need to clear out the host.
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.DOM.removeChildNodes(host);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */
    static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) {
            return controller;
        }
        const definition = _fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__.FASTElementDefinition.forType(element.constructor);
        if (definition === void 0) {
            throw new Error("Missing FASTElement definition.");
        }
        return (element.$fastController = new Controller(element, definition));
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElementDefinition": () => (/* binding */ FASTElementDefinition)
/* harmony export */ });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/element-styles.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");




const defaultShadowOptions = { mode: "open" };
const defaultElementOptions = {};
const fastRegistry = _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST.getById(4 /* elementRegistry */, () => {
    const typeToDefinition = new Map();
    return Object.freeze({
        register(definition) {
            if (typeToDefinition.has(definition.type)) {
                return false;
            }
            typeToDefinition.set(definition.type, definition);
            return true;
        },
        getByType(key) {
            return typeToDefinition.get(key);
        },
    });
});
/**
 * Defines metadata for a FASTElement.
 * @public
 */
class FASTElementDefinition {
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrConfig - The name of the element to define or a config object
     * that describes the element to define.
     */
    constructor(type, nameOrConfig = type.definition) {
        if (typeof nameOrConfig === "string") {
            nameOrConfig = { name: nameOrConfig };
        }
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        const attributes = _attributes_js__WEBPACK_IMPORTED_MODULE_1__.AttributeDefinition.collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for (let i = 0, ii = attributes.length; i < ii; ++i) {
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
        }
        this.attributes = attributes;
        this.observedAttributes = observedAttributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions =
            nameOrConfig.shadowOptions === void 0
                ? defaultShadowOptions
                : nameOrConfig.shadowOptions === null
                    ? void 0
                    : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions =
            nameOrConfig.elementOptions === void 0
                ? defaultElementOptions
                : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles =
            nameOrConfig.styles === void 0
                ? void 0
                : Array.isArray(nameOrConfig.styles)
                    ? _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__.ElementStyles.create(nameOrConfig.styles)
                    : nameOrConfig.styles instanceof _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__.ElementStyles
                        ? nameOrConfig.styles
                        : _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__.ElementStyles.create([nameOrConfig.styles]);
    }
    /**
     * Indicates if this element has been defined in at least one registry.
     */
    get isDefined() {
        return !!fastRegistry.getByType(this.type);
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     */
    define(registry = customElements) {
        const type = this.type;
        if (fastRegistry.register(this)) {
            const attributes = this.attributes;
            const proto = type.prototype;
            for (let i = 0, ii = attributes.length; i < ii; ++i) {
                _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable.defineProperty(proto, attributes[i]);
            }
            Reflect.defineProperty(type, "observedAttributes", {
                value: this.observedAttributes,
                enumerable: true,
            });
        }
        if (!registry.get(this.name)) {
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
}
/**
 * Gets the element definition associated with the specified type.
 * @param type - The custom element type to retrieve the definition for.
 */
FASTElementDefinition.forType = fastRegistry.getByType;


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElement": () => (/* binding */ FASTElement),
/* harmony export */   "customElement": () => (/* binding */ customElement)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js");
/* harmony import */ var _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fast-definitions.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");


/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
function createFASTElement(BaseType) {
    return class extends BaseType {
        constructor() {
            /* eslint-disable-next-line */
            super();
            _controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.onConnectedCallback();
        }
        disconnectedCallback() {
            this.$fastController.onDisconnectedCallback();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
}
/**
 * A minimal base class for FASTElements that also provides
 * static helpers for working with FASTElements.
 * @public
 */
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */
    from(BaseType) {
        return createFASTElement(BaseType);
    },
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */
    define(type, nameOrDef) {
        return new _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define().type;
    },
});
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
    return function (type) {
        new _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define();
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/dom.js":
/*!**************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/dom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM),
/* harmony export */   "_interpolationEnd": () => (/* binding */ _interpolationEnd),
/* harmony export */   "_interpolationStart": () => (/* binding */ _interpolationStart)
/* harmony export */ });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");

const updateQueue = _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global.FAST.getById(1 /* updateQueue */, () => {
    const tasks = [];
    const pendingErrors = [];
    function throwFirstError() {
        if (pendingErrors.length) {
            throw pendingErrors.shift();
        }
    }
    function tryRunTask(task) {
        try {
            task.call();
        }
        catch (error) {
            pendingErrors.push(error);
            setTimeout(throwFirstError, 0);
        }
    }
    function process() {
        const capacity = 1024;
        let index = 0;
        while (index < tasks.length) {
            tryRunTask(tasks[index]);
            index++;
            // Prevent leaking memory for long chains of recursive calls to `DOM.queueUpdate`.
            // If we call `DOM.queueUpdate` within a task scheduled by `DOM.queueUpdate`, the queue will
            // grow, but to avoid an O(n) walk for every task we execute, we don't
            // shift tasks off the queue after they have been executed.
            // Instead, we periodically shift 1024 tasks off the queue.
            if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
                    tasks[scan] = tasks[scan + index];
                }
                tasks.length -= index;
                index = 0;
            }
        }
        tasks.length = 0;
    }
    function enqueue(callable) {
        if (tasks.length < 1) {
            _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global.requestAnimationFrame(process);
        }
        tasks.push(callable);
    }
    return Object.freeze({
        enqueue,
        process,
    });
});
/* eslint-disable */
const fastHTMLPolicy = _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global.trustedTypes.createPolicy("fast-html", {
    createHTML: html => html,
});
/* eslint-enable */
let htmlPolicy = fastHTMLPolicy;
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
/** @internal */
const _interpolationStart = `${marker}{`;
/** @internal */
const _interpolationEnd = `}${marker}`;
/**
 * Common DOM APIs.
 * @public
 */
const DOM = Object.freeze({
    /**
     * Indicates whether the DOM supports the adoptedStyleSheets feature.
     */
    supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) &&
        "replace" in CSSStyleSheet.prototype,
    /**
     * Sets the HTML trusted types policy used by the templating engine.
     * @param policy - The policy to set for HTML.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */
    setHTMLPolicy(policy) {
        if (htmlPolicy !== fastHTMLPolicy) {
            throw new Error("The HTML policy can only be set once.");
        }
        htmlPolicy = policy;
    },
    /**
     * Turns a string into trusted HTML using the configured trusted types policy.
     * @param html - The string to turn into trusted HTML.
     * @remarks
     * Used internally by the template engine when creating templates
     * and setting innerHTML.
     */
    createHTML(html) {
        return htmlPolicy.createHTML(html);
    },
    /**
     * Determines if the provided node is a template marker used by the runtime.
     * @param node - The node to test.
     */
    isMarker(node) {
        return node && node.nodeType === 8 && node.data.startsWith(marker);
    },
    /**
     * Given a marker node, extract the {@link HTMLDirective} index from the placeholder.
     * @param node - The marker node to extract the index from.
     */
    extractDirectiveIndexFromMarker(node) {
        return parseInt(node.data.replace(`${marker}:`, ""));
    },
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */
    createInterpolationPlaceholder(index) {
        return `${_interpolationStart}${index}${_interpolationEnd}`;
    },
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */
    createCustomAttributePlaceholder(attributeName, index) {
        return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
    },
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */
    createBlockPlaceholder(index) {
        return `<!--${marker}:${index}-->`;
    },
    /**
     * Schedules DOM update work in the next async batch.
     * @param callable - The callable function or object to queue.
     */
    queueUpdate: updateQueue.enqueue,
    /**
     * Immediately processes all work previously scheduled
     * through queueUpdate.
     * @remarks
     * This also forces nextUpdate promises
     * to resolve.
     */
    processUpdates: updateQueue.process,
    /**
     * Resolves with the next DOM update.
     */
    nextUpdate() {
        return new Promise(updateQueue.enqueue);
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */
    setAttribute(element, attributeName, value) {
        if (value === null || value === undefined) {
            element.removeAttribute(attributeName);
        }
        else {
            element.setAttribute(attributeName, value);
        }
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */
    setBooleanAttribute(element, attributeName, value) {
        value
            ? element.setAttribute(attributeName, "")
            : element.removeAttribute(attributeName);
    },
    /**
     * Removes all the child nodes of the provided parent node.
     * @param parent - The node to remove the children from.
     */
    removeChildNodes(parent) {
        for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
            parent.removeChild(child);
        }
    },
    /**
     * Creates a TreeWalker configured to walk a template fragment.
     * @param fragment - The fragment to walk.
     */
    createTemplateWalker(fragment) {
        return document.createTreeWalker(fragment, 133, // element, text, comment
        null, false);
    },
});


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$global": () => (/* reexport safe */ _platform_js__WEBPACK_IMPORTED_MODULE_0__.$global),
/* harmony export */   "AttachedBehaviorHTMLDirective": () => (/* reexport safe */ _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_16__.AttachedBehaviorHTMLDirective),
/* harmony export */   "AttributeDefinition": () => (/* reexport safe */ _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__.AttributeDefinition),
/* harmony export */   "BindingBehavior": () => (/* reexport safe */ _templating_binding_js__WEBPACK_IMPORTED_MODULE_15__.BindingBehavior),
/* harmony export */   "CSSDirective": () => (/* reexport safe */ _styles_css_directive_js__WEBPACK_IMPORTED_MODULE_9__.CSSDirective),
/* harmony export */   "ChildrenBehavior": () => (/* reexport safe */ _templating_children_js__WEBPACK_IMPORTED_MODULE_21__.ChildrenBehavior),
/* harmony export */   "Controller": () => (/* reexport safe */ _components_controller_js__WEBPACK_IMPORTED_MODULE_5__.Controller),
/* harmony export */   "DOM": () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_14__.DOM),
/* harmony export */   "ElementStyles": () => (/* reexport safe */ _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_7__.ElementStyles),
/* harmony export */   "ExecutionContext": () => (/* reexport safe */ _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__.ExecutionContext),
/* harmony export */   "FAST": () => (/* reexport safe */ _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST),
/* harmony export */   "FASTElement": () => (/* reexport safe */ _components_fast_element_js__WEBPACK_IMPORTED_MODULE_2__.FASTElement),
/* harmony export */   "FASTElementDefinition": () => (/* reexport safe */ _components_fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__.FASTElementDefinition),
/* harmony export */   "HTMLBindingDirective": () => (/* reexport safe */ _templating_binding_js__WEBPACK_IMPORTED_MODULE_15__.HTMLBindingDirective),
/* harmony export */   "HTMLDirective": () => (/* reexport safe */ _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_16__.HTMLDirective),
/* harmony export */   "HTMLView": () => (/* reexport safe */ _templating_view_js__WEBPACK_IMPORTED_MODULE_10__.HTMLView),
/* harmony export */   "Observable": () => (/* reexport safe */ _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__.Observable),
/* harmony export */   "PropertyChangeNotifier": () => (/* reexport safe */ _observation_notifier_js__WEBPACK_IMPORTED_MODULE_12__.PropertyChangeNotifier),
/* harmony export */   "RefBehavior": () => (/* reexport safe */ _templating_ref_js__WEBPACK_IMPORTED_MODULE_17__.RefBehavior),
/* harmony export */   "RepeatBehavior": () => (/* reexport safe */ _templating_repeat_js__WEBPACK_IMPORTED_MODULE_19__.RepeatBehavior),
/* harmony export */   "RepeatDirective": () => (/* reexport safe */ _templating_repeat_js__WEBPACK_IMPORTED_MODULE_19__.RepeatDirective),
/* harmony export */   "SlottedBehavior": () => (/* reexport safe */ _templating_slotted_js__WEBPACK_IMPORTED_MODULE_20__.SlottedBehavior),
/* harmony export */   "SubscriberSet": () => (/* reexport safe */ _observation_notifier_js__WEBPACK_IMPORTED_MODULE_12__.SubscriberSet),
/* harmony export */   "TargetedHTMLDirective": () => (/* reexport safe */ _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_16__.TargetedHTMLDirective),
/* harmony export */   "ViewTemplate": () => (/* reexport safe */ _templating_template_js__WEBPACK_IMPORTED_MODULE_1__.ViewTemplate),
/* harmony export */   "attr": () => (/* reexport safe */ _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__.attr),
/* harmony export */   "booleanConverter": () => (/* reexport safe */ _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__.booleanConverter),
/* harmony export */   "children": () => (/* reexport safe */ _templating_children_js__WEBPACK_IMPORTED_MODULE_21__.children),
/* harmony export */   "compileTemplate": () => (/* reexport safe */ _templating_compiler_js__WEBPACK_IMPORTED_MODULE_6__.compileTemplate),
/* harmony export */   "css": () => (/* reexport safe */ _styles_css_js__WEBPACK_IMPORTED_MODULE_8__.css),
/* harmony export */   "cssPartial": () => (/* reexport safe */ _styles_css_js__WEBPACK_IMPORTED_MODULE_8__.cssPartial),
/* harmony export */   "customElement": () => (/* reexport safe */ _components_fast_element_js__WEBPACK_IMPORTED_MODULE_2__.customElement),
/* harmony export */   "defaultExecutionContext": () => (/* reexport safe */ _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__.defaultExecutionContext),
/* harmony export */   "elements": () => (/* reexport safe */ _templating_node_observation_js__WEBPACK_IMPORTED_MODULE_22__.elements),
/* harmony export */   "emptyArray": () => (/* reexport safe */ _platform_js__WEBPACK_IMPORTED_MODULE_0__.emptyArray),
/* harmony export */   "enableArrayObservation": () => (/* reexport safe */ _observation_array_observer_js__WEBPACK_IMPORTED_MODULE_13__.enableArrayObservation),
/* harmony export */   "html": () => (/* reexport safe */ _templating_template_js__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "nullableNumberConverter": () => (/* reexport safe */ _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__.nullableNumberConverter),
/* harmony export */   "observable": () => (/* reexport safe */ _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__.observable),
/* harmony export */   "ref": () => (/* reexport safe */ _templating_ref_js__WEBPACK_IMPORTED_MODULE_17__.ref),
/* harmony export */   "repeat": () => (/* reexport safe */ _templating_repeat_js__WEBPACK_IMPORTED_MODULE_19__.repeat),
/* harmony export */   "slotted": () => (/* reexport safe */ _templating_slotted_js__WEBPACK_IMPORTED_MODULE_20__.slotted),
/* harmony export */   "volatile": () => (/* reexport safe */ _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__.volatile),
/* harmony export */   "when": () => (/* reexport safe */ _templating_when_js__WEBPACK_IMPORTED_MODULE_18__.when)
/* harmony export */ });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _templating_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templating/template.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _components_fast_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fast-element.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _components_fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fast-definitions.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js");
/* harmony import */ var _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/attributes.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _components_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/controller.js */ "./node_modules/@microsoft/fast-element/dist/esm/components/controller.js");
/* harmony import */ var _templating_compiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templating/compiler.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js");
/* harmony import */ var _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/element-styles.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");
/* harmony import */ var _styles_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/css.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _styles_css_directive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/css-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js");
/* harmony import */ var _templating_view_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templating/view.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _observation_notifier_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observation/notifier.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observation_array_observer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./observation/array-observer.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _templating_binding_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templating/binding.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");
/* harmony import */ var _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templating/html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _templating_ref_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templating/ref.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");
/* harmony import */ var _templating_when_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templating/when.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _templating_repeat_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templating/repeat.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js");
/* harmony import */ var _templating_slotted_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./templating/slotted.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js");
/* harmony import */ var _templating_children_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./templating/children.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/children.js");
/* harmony import */ var _templating_node_observation_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./templating/node-observation.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js");

























/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcSplices": () => (/* binding */ calcSplices),
/* harmony export */   "newSplice": () => (/* binding */ newSplice),
/* harmony export */   "projectArraySplices": () => (/* binding */ projectArraySplices)
/* harmony export */ });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");

/** @internal */
function newSplice(index, removed, addedCount) {
    return {
        index: index,
        removed: removed,
        addedCount: addedCount,
    };
}
const EDIT_LEAVE = 0;
const EDIT_UPDATE = 1;
const EDIT_ADD = 2;
const EDIT_DELETE = 3;
// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    const rowCount = oldEnd - oldStart + 1;
    const columnCount = currentEnd - currentStart + 1;
    const distances = new Array(rowCount);
    let north;
    let west;
    // "Addition" rows. Initialize null column.
    for (let i = 0; i < rowCount; ++i) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
    }
    // Initialize null row
    for (let j = 0; j < columnCount; ++j) {
        distances[0][j] = j;
    }
    for (let i = 1; i < rowCount; ++i) {
        for (let j = 1; j < columnCount; ++j) {
            if (current[currentStart + j - 1] === old[oldStart + i - 1]) {
                distances[i][j] = distances[i - 1][j - 1];
            }
            else {
                north = distances[i - 1][j] + 1;
                west = distances[i][j - 1] + 1;
                distances[i][j] = north < west ? north : west;
            }
        }
    }
    return distances;
}
// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances) {
    let i = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i][j];
    const edits = [];
    while (i > 0 || j > 0) {
        if (i === 0) {
            edits.push(EDIT_ADD);
            j--;
            continue;
        }
        if (j === 0) {
            edits.push(EDIT_DELETE);
            i--;
            continue;
        }
        const northWest = distances[i - 1][j - 1];
        const west = distances[i - 1][j];
        const north = distances[i][j - 1];
        let min;
        if (west < north) {
            min = west < northWest ? west : northWest;
        }
        else {
            min = north < northWest ? north : northWest;
        }
        if (min === northWest) {
            if (northWest === current) {
                edits.push(EDIT_LEAVE);
            }
            else {
                edits.push(EDIT_UPDATE);
                current = northWest;
            }
            i--;
            j--;
        }
        else if (min === west) {
            edits.push(EDIT_DELETE);
            i--;
            current = west;
        }
        else {
            edits.push(EDIT_ADD);
            j--;
            current = north;
        }
    }
    edits.reverse();
    return edits;
}
function sharedPrefix(current, old, searchLength) {
    for (let i = 0; i < searchLength; ++i) {
        if (current[i] !== old[i]) {
            return i;
        }
    }
    return searchLength;
}
function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while (count < searchLength && current[--index1] === old[--index2]) {
        count++;
    }
    return count;
}
function intersect(start1, end1, start2, end2) {
    // Disjoint
    if (end1 < start2 || end2 < start1) {
        return -1;
    }
    // Adjacent
    if (end1 === start2 || end2 === start1) {
        return 0;
    }
    // Non-zero intersect, span1 first
    if (start1 < start2) {
        if (end1 < end2) {
            return end1 - start2; // Overlap
        }
        return end2 - start2; // Contained
    }
    // Non-zero intersect, span2 first
    if (end2 < end1) {
        return end2 - start1; // Overlap
    }
    return end1 - start1; // Contained
}
/**
 * Splice Projection functions:
 *
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   <index, removed, addedCount>
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 */
/**
 * @internal
 * @remarks
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 */
function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) {
        prefixCount = sharedPrefix(current, old, minLength);
    }
    if (currentEnd === current.length && oldEnd === old.length) {
        suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    }
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
        return _platform_js__WEBPACK_IMPORTED_MODULE_0__.emptyArray;
    }
    if (currentStart === currentEnd) {
        const splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd) {
            splice.removed.push(old[oldStart++]);
        }
        return [splice];
    }
    else if (oldStart === oldEnd) {
        return [newSplice(currentStart, [], currentEnd - currentStart)];
    }
    const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
    const splices = [];
    let splice = void 0;
    let index = currentStart;
    let oldIndex = oldStart;
    for (let i = 0; i < ops.length; ++i) {
        switch (ops[i]) {
            case EDIT_LEAVE:
                if (splice !== void 0) {
                    splices.push(splice);
                    splice = void 0;
                }
                index++;
                oldIndex++;
                break;
            case EDIT_UPDATE:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.addedCount++;
                index++;
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            case EDIT_ADD:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.addedCount++;
                index++;
                break;
            case EDIT_DELETE:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            // no default
        }
    }
    if (splice !== void 0) {
        splices.push(splice);
    }
    return splices;
}
const $push = Array.prototype.push;
function mergeSplice(splices, index, removed, addedCount) {
    const splice = newSplice(index, removed, addedCount);
    let inserted = false;
    let insertionOffset = 0;
    for (let i = 0; i < splices.length; i++) {
        const current = splices[i];
        current.index += insertionOffset;
        if (inserted) {
            continue;
        }
        const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
        if (intersectCount >= 0) {
            // Merge the two splices
            splices.splice(i, 1);
            i--;
            insertionOffset -= current.addedCount - current.removed.length;
            splice.addedCount += current.addedCount - intersectCount;
            const deleteCount = splice.removed.length + current.removed.length - intersectCount;
            if (!splice.addedCount && !deleteCount) {
                // merged splice is a noop. discard.
                inserted = true;
            }
            else {
                let currentRemoved = current.removed;
                if (splice.index < current.index) {
                    // some prefix of splice.removed is prepended to current.removed.
                    const prepend = splice.removed.slice(0, current.index - splice.index);
                    $push.apply(prepend, currentRemoved);
                    currentRemoved = prepend;
                }
                if (splice.index + splice.removed.length >
                    current.index + current.addedCount) {
                    // some suffix of splice.removed is appended to current.removed.
                    const append = splice.removed.slice(current.index + current.addedCount - splice.index);
                    $push.apply(currentRemoved, append);
                }
                splice.removed = currentRemoved;
                if (current.index < splice.index) {
                    splice.index = current.index;
                }
            }
        }
        else if (splice.index < current.index) {
            // Insert splice here.
            inserted = true;
            splices.splice(i, 0, splice);
            i++;
            const offset = splice.addedCount - splice.removed.length;
            current.index += offset;
            insertionOffset += offset;
        }
    }
    if (!inserted) {
        splices.push(splice);
    }
}
function createInitialSplices(changeRecords) {
    const splices = [];
    for (let i = 0, ii = changeRecords.length; i < ii; i++) {
        const record = changeRecords[i];
        mergeSplice(splices, record.index, record.removed, record.addedCount);
    }
    return splices;
}
/** @internal */
function projectArraySplices(array, changeRecords) {
    let splices = [];
    const initialSplices = createInitialSplices(changeRecords);
    for (let i = 0, ii = initialSplices.length; i < ii; ++i) {
        const splice = initialSplices[i];
        if (splice.addedCount === 1 && splice.removed.length === 1) {
            if (splice.removed[0] !== array[splice.index]) {
                splices.push(splice);
            }
            continue;
        }
        splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    }
    return splices;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableArrayObservation": () => (/* binding */ enableArrayObservation)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _array_change_records_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-change-records.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js");
/* harmony import */ var _notifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");




let arrayObservationEnabled = false;
function adjustIndex(changeRecord, array) {
    let index = changeRecord.index;
    const arrayLength = array.length;
    if (index > arrayLength) {
        index = arrayLength - changeRecord.addedCount;
    }
    else if (index < 0) {
        index =
            arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
    }
    if (index < 0) {
        index = 0;
    }
    changeRecord.index = index;
    return changeRecord;
}
class ArrayObserver extends _notifier_js__WEBPACK_IMPORTED_MODULE_0__.SubscriberSet {
    constructor(source) {
        super(source);
        this.oldCollection = void 0;
        this.splices = void 0;
        this.needsQueue = true;
        this.call = this.flush;
        Reflect.defineProperty(source, "$fastController", {
            value: this,
            enumerable: false,
        });
    }
    addSplice(splice) {
        if (this.splices === void 0) {
            this.splices = [splice];
        }
        else {
            this.splices.push(splice);
        }
        if (this.needsQueue) {
            this.needsQueue = false;
            _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(this);
        }
    }
    reset(oldCollection) {
        this.oldCollection = oldCollection;
        if (this.needsQueue) {
            this.needsQueue = false;
            _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(this);
        }
    }
    flush() {
        const splices = this.splices;
        const oldCollection = this.oldCollection;
        if (splices === void 0 && oldCollection === void 0) {
            return;
        }
        this.needsQueue = true;
        this.splices = void 0;
        this.oldCollection = void 0;
        const finalSplices = oldCollection === void 0
            ? (0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.projectArraySplices)(this.source, splices)
            : (0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.calcSplices)(this.source, 0, this.source.length, oldCollection, 0, oldCollection.length);
        this.notify(finalSplices);
    }
}
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Enables the array observation mechanism.
 * @remarks
 * Array observation is enabled automatically when using the
 * {@link RepeatDirective}, so calling this API manually is
 * not typically necessary.
 * @public
 */
function enableArrayObservation() {
    if (arrayObservationEnabled) {
        return;
    }
    arrayObservationEnabled = true;
    _observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable.setArrayObserverFactory((collection) => {
        return new ArrayObserver(collection);
    });
    const proto = Array.prototype;
    // Don't patch Array if it has already been patched
    // by another copy of fast-element.
    if (proto.$fastPatch) {
        return;
    }
    Reflect.defineProperty(proto, "$fastPatch", {
        value: 1,
        enumerable: false,
    });
    const pop = proto.pop;
    const push = proto.push;
    const reverse = proto.reverse;
    const shift = proto.shift;
    const sort = proto.sort;
    const splice = proto.splice;
    const unshift = proto.unshift;
    proto.pop = function () {
        const notEmpty = this.length > 0;
        const methodCallResult = pop.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0 && notEmpty) {
            o.addSplice((0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.newSplice)(this.length, [methodCallResult], 0));
        }
        return methodCallResult;
    };
    proto.push = function () {
        const methodCallResult = push.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.newSplice)(this.length - arguments.length, [], arguments.length), this));
        }
        return methodCallResult;
    };
    proto.reverse = function () {
        let oldArray;
        const o = this.$fastController;
        if (o !== void 0) {
            o.flush();
            oldArray = this.slice();
        }
        const methodCallResult = reverse.apply(this, arguments);
        if (o !== void 0) {
            o.reset(oldArray);
        }
        return methodCallResult;
    };
    proto.shift = function () {
        const notEmpty = this.length > 0;
        const methodCallResult = shift.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0 && notEmpty) {
            o.addSplice((0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.newSplice)(0, [methodCallResult], 0));
        }
        return methodCallResult;
    };
    proto.sort = function () {
        let oldArray;
        const o = this.$fastController;
        if (o !== void 0) {
            o.flush();
            oldArray = this.slice();
        }
        const methodCallResult = sort.apply(this, arguments);
        if (o !== void 0) {
            o.reset(oldArray);
        }
        return methodCallResult;
    };
    proto.splice = function () {
        const methodCallResult = splice.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.newSplice)(+arguments[0], methodCallResult, arguments.length > 2 ? arguments.length - 2 : 0), this));
        }
        return methodCallResult;
    };
    proto.unshift = function () {
        const methodCallResult = unshift.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records_js__WEBPACK_IMPORTED_MODULE_2__.newSplice)(0, [], arguments.length), this));
        }
        return methodCallResult;
    };
}
/* eslint-enable prefer-rest-params */
/* eslint-enable @typescript-eslint/explicit-function-return-type */


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyChangeNotifier": () => (/* binding */ PropertyChangeNotifier),
/* harmony export */   "SubscriberSet": () => (/* binding */ SubscriberSet)
/* harmony export */ });
function spilloverSubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index === -1) {
        spillover.push(subscriber);
    }
}
function spilloverUnsubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index !== -1) {
        spillover.splice(index, 1);
    }
}
function spilloverNotifySubscribers(args) {
    const spillover = this.spillover;
    const source = this.source;
    for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(source, args);
    }
}
function spilloverHas(subscriber) {
    return this.spillover.indexOf(subscriber) !== -1;
}
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable source.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */
    constructor(source, initialSubscriber) {
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.source = source;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */
    has(subscriber) {
        return this.sub1 === subscriber || this.sub2 === subscriber;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */
    subscribe(subscriber) {
        if (this.has(subscriber)) {
            return;
        }
        if (this.sub1 === void 0) {
            this.sub1 = subscriber;
            return;
        }
        if (this.sub2 === void 0) {
            this.sub2 = subscriber;
            return;
        }
        this.spillover = [this.sub1, this.sub2, subscriber];
        this.subscribe = spilloverSubscribe;
        this.unsubscribe = spilloverUnsubscribe;
        this.notify = spilloverNotifySubscribers;
        this.has = spilloverHas;
        this.sub1 = void 0;
        this.sub2 = void 0;
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */
    unsubscribe(subscriber) {
        if (this.sub1 === subscriber) {
            this.sub1 = void 0;
        }
        else if (this.sub2 === subscriber) {
            this.sub2 = void 0;
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */
    notify(args) {
        const sub1 = this.sub1;
        const sub2 = this.sub2;
        const source = this.source;
        if (sub1 !== void 0) {
            sub1.handleChange(source, args);
        }
        if (sub2 !== void 0) {
            sub2.handleChange(source, args);
        }
    }
}
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     */
    constructor(source) {
        this.subscribers = {};
        this.sourceSubscribers = null;
        this.source = source;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */
    notify(propertyName) {
        var _a;
        const subscribers = this.subscribers[propertyName];
        if (subscribers !== void 0) {
            subscribers.notify(propertyName);
        }
        (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */
    subscribe(subscriber, propertyToWatch) {
        var _a;
        if (propertyToWatch) {
            let subscribers = this.subscribers[propertyToWatch];
            if (subscribers === void 0) {
                this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
            }
            subscribers.subscribe(subscriber);
        }
        else {
            this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
            this.sourceSubscribers.subscribe(subscriber);
        }
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */
    unsubscribe(subscriber, propertyToUnwatch) {
        var _a;
        if (propertyToUnwatch) {
            const subscribers = this.subscribers[propertyToUnwatch];
            if (subscribers !== void 0) {
                subscribers.unsubscribe(subscriber);
            }
        }
        else {
            (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutionContext": () => (/* binding */ ExecutionContext),
/* harmony export */   "Observable": () => (/* binding */ Observable),
/* harmony export */   "defaultExecutionContext": () => (/* binding */ defaultExecutionContext),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "volatile": () => (/* binding */ volatile)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _notifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifier.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");



/**
 * Common Observable APIs.
 * @public
 */
const Observable = _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST.getById(2 /* observable */, () => {
    const volatileRegex = /(:|&&|\|\||if)/;
    const notifierLookup = new WeakMap();
    const accessorLookup = new WeakMap();
    const queueUpdate = _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate;
    let watcher = void 0;
    let createArrayObserver = (array) => {
        throw new Error("Must call enableArrayObservation before observing arrays.");
    };
    function getNotifier(source) {
        let found = source.$fastController || notifierLookup.get(source);
        if (found === void 0) {
            if (Array.isArray(source)) {
                found = createArrayObserver(source);
            }
            else {
                notifierLookup.set(source, (found = new _notifier_js__WEBPACK_IMPORTED_MODULE_2__.PropertyChangeNotifier(source)));
            }
        }
        return found;
    }
    function getAccessors(target) {
        let accessors = accessorLookup.get(target);
        if (accessors === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while (accessors === void 0 && currentTarget !== null) {
                accessors = accessorLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            if (accessors === void 0) {
                accessors = [];
            }
            else {
                accessors = accessors.slice(0);
            }
            accessorLookup.set(target, accessors);
        }
        return accessors;
    }
    class DefaultObservableAccessor {
        constructor(name) {
            this.name = name;
            this.field = `_${name}`;
            this.callback = `${name}Changed`;
        }
        getValue(source) {
            if (watcher !== void 0) {
                watcher.watch(source, this.name);
            }
            return source[this.field];
        }
        setValue(source, newValue) {
            const field = this.field;
            const oldValue = source[field];
            if (oldValue !== newValue) {
                source[field] = newValue;
                const callback = source[this.callback];
                if (typeof callback === "function") {
                    callback.call(source, oldValue, newValue);
                }
                getNotifier(source).notify(this.name);
            }
        }
    }
    class BindingObserverImplementation extends _notifier_js__WEBPACK_IMPORTED_MODULE_2__.SubscriberSet {
        constructor(binding, initialSubscriber, isVolatileBinding = false) {
            super(binding, initialSubscriber);
            this.binding = binding;
            this.isVolatileBinding = isVolatileBinding;
            this.needsRefresh = true;
            this.needsQueue = true;
            this.first = this;
            this.last = null;
            this.propertySource = void 0;
            this.propertyName = void 0;
            this.notifier = void 0;
            this.next = void 0;
        }
        observe(source, context) {
            if (this.needsRefresh && this.last !== null) {
                this.disconnect();
            }
            const previousWatcher = watcher;
            watcher = this.needsRefresh ? this : void 0;
            this.needsRefresh = this.isVolatileBinding;
            const result = this.binding(source, context);
            watcher = previousWatcher;
            return result;
        }
        disconnect() {
            if (this.last !== null) {
                let current = this.first;
                while (current !== void 0) {
                    current.notifier.unsubscribe(this, current.propertyName);
                    current = current.next;
                }
                this.last = null;
                this.needsRefresh = this.needsQueue = true;
            }
        }
        watch(propertySource, propertyName) {
            const prev = this.last;
            const notifier = getNotifier(propertySource);
            const current = prev === null ? this.first : {};
            current.propertySource = propertySource;
            current.propertyName = propertyName;
            current.notifier = notifier;
            notifier.subscribe(this, propertyName);
            if (prev !== null) {
                if (!this.needsRefresh) {
                    // Declaring the variable prior to assignment below circumvents
                    // a bug in Angular's optimization process causing infinite recursion
                    // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
                    let prevValue;
                    watcher = void 0;
                    /* eslint-disable-next-line */
                    prevValue = prev.propertySource[prev.propertyName];
                    watcher = this;
                    if (propertySource === prevValue) {
                        this.needsRefresh = true;
                    }
                }
                prev.next = current;
            }
            this.last = current;
        }
        handleChange() {
            if (this.needsQueue) {
                this.needsQueue = false;
                queueUpdate(this);
            }
        }
        call() {
            if (this.last !== null) {
                this.needsQueue = true;
                this.notify(this);
            }
        }
        records() {
            let next = this.first;
            return {
                next: () => {
                    const current = next;
                    if (current === undefined) {
                        return { value: void 0, done: true };
                    }
                    else {
                        next = next.next;
                        return {
                            value: current,
                            done: false,
                        };
                    }
                },
                [Symbol.iterator]: function () {
                    return this;
                },
            };
        }
    }
    return Object.freeze({
        /**
         * @internal
         * @param factory - The factory used to create array observers.
         */
        setArrayObserverFactory(factory) {
            createArrayObserver = factory;
        },
        /**
         * Gets a notifier for an object or Array.
         * @param source - The object or Array to get the notifier for.
         */
        getNotifier,
        /**
         * Records a property change for a source object.
         * @param source - The object to record the change against.
         * @param propertyName - The property to track as changed.
         */
        track(source, propertyName) {
            if (watcher !== void 0) {
                watcher.watch(source, propertyName);
            }
        },
        /**
         * Notifies watchers that the currently executing property getter or function is volatile
         * with respect to its observable dependencies.
         */
        trackVolatile() {
            if (watcher !== void 0) {
                watcher.needsRefresh = true;
            }
        },
        /**
         * Notifies subscribers of a source object of changes.
         * @param source - the object to notify of changes.
         * @param args - The change args to pass to subscribers.
         */
        notify(source, args) {
            getNotifier(source).notify(args);
        },
        /**
         * Defines an observable property on an object or prototype.
         * @param target - The target object to define the observable on.
         * @param nameOrAccessor - The name of the property to define as observable;
         * or a custom accessor that specifies the property name and accessor implementation.
         */
        defineProperty(target, nameOrAccessor) {
            if (typeof nameOrAccessor === "string") {
                nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
            }
            getAccessors(target).push(nameOrAccessor);
            Reflect.defineProperty(target, nameOrAccessor.name, {
                enumerable: true,
                get: function () {
                    return nameOrAccessor.getValue(this);
                },
                set: function (newValue) {
                    nameOrAccessor.setValue(this, newValue);
                },
            });
        },
        /**
         * Finds all the observable accessors defined on the target,
         * including its prototype chain.
         * @param target - The target object to search for accessor on.
         */
        getAccessors,
        /**
         * Creates a {@link BindingObserver} that can watch the
         * provided {@link Binding} for changes.
         * @param binding - The binding to observe.
         * @param initialSubscriber - An initial subscriber to changes in the binding value.
         * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
         */
        binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
            return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
        },
        /**
         * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
         * on every evaluation of the value.
         * @param binding - The binding to inspect.
         */
        isVolatileBinding(binding) {
            return volatileRegex.test(binding.toString());
        },
    });
});
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get: function () {
            Observable.trackVolatile();
            return descriptor.get.apply(this);
        },
    });
}
const contextEvent = _platform_js__WEBPACK_IMPORTED_MODULE_0__.FAST.getById(3 /* contextEvent */, () => {
    let current = null;
    return {
        get() {
            return current;
        },
        set(event) {
            current = event;
        },
    };
});
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
class ExecutionContext {
    constructor() {
        /**
         * The index of the current item within a repeat context.
         */
        this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */
        this.length = 0;
        /**
         * The parent data object within a repeat context.
         */
        this.parent = null;
        /**
         * The parent execution context when in nested context scenarios.
         */
        this.parentContext = null;
    }
    /**
     * The current event within an event handler.
     */
    get event() {
        return contextEvent.get();
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */
    get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */
    get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */
    get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */
    get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */
    get isLast() {
        return this.index === this.length - 1;
    }
    /**
     * Sets the event for the current execution context.
     * @param event - The event to set.
     * @internal
     */
    static setEvent(event) {
        contextEvent.set(event);
    }
}
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
/**
 * The default execution context used in binding expressions.
 * @public
 */
const defaultExecutionContext = Object.seal(new ExecutionContext());


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/platform.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$global": () => (/* binding */ $global),
/* harmony export */   "FAST": () => (/* binding */ FAST),
/* harmony export */   "emptyArray": () => (/* binding */ emptyArray)
/* harmony export */ });
/**
 * A reference to globalThis, with support
 * for browsers that don't yet support the spec.
 * @public
 */
const $global = (function () {
    if (typeof globalThis !== "undefined") {
        // We're running in a modern environment.
        return globalThis;
    }
    if (typeof global !== "undefined") {
        // We're running in NodeJS
        return global;
    }
    if (typeof self !== "undefined") {
        // We're running in a worker.
        return self;
    }
    if (typeof window !== "undefined") {
        // We're running in the browser's main thread.
        return window;
    }
    try {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        return new Function("return this")();
    }
    catch (_a) {
        // If all fails, give up and create an object.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {};
    }
})();
// API-only Polyfill for trustedTypes
if ($global.trustedTypes === void 0) {
    $global.trustedTypes = { createPolicy: (n, r) => r };
}
const propConfig = {
    configurable: false,
    enumerable: false,
    writable: false,
};
if ($global.FAST === void 0) {
    Reflect.defineProperty($global, "FAST", Object.assign({ value: Object.create(null) }, propConfig));
}
/**
 * The FAST global.
 * @internal
 */
const FAST = $global.FAST;
if (FAST.getById === void 0) {
    const storage = Object.create(null);
    Reflect.defineProperty(FAST, "getById", Object.assign({ value(id, initialize) {
            let found = storage[id];
            if (found === void 0) {
                found = initialize ? (storage[id] = initialize()) : null;
            }
            return found;
        } }, propConfig));
}
/**
 * A readonly, empty array.
 * @remarks
 * Typically returned by APIs that return arrays when there are
 * no actual items to return.
 * @internal
 */
const emptyArray = Object.freeze([]);


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSDirective": () => (/* binding */ CSSDirective)
/* harmony export */ });
/**
 * Directive for use in {@link css}.
 *
 * @public
 */
class CSSDirective {
    /**
     * Creates a CSS fragment to interpolate into the CSS document.
     * @returns - the string to interpolate into CSS
     */
    createCSS() {
        return "";
    }
    /**
     * Creates a behavior to bind to the host element.
     * @returns - the behavior to bind to the host element, or undefined.
     */
    createBehavior() {
        return undefined;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/css.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "cssPartial": () => (/* binding */ cssPartial)
/* harmony export */ });
/* harmony import */ var _css_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js");
/* harmony import */ var _element_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-styles.js */ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js");


function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        cssString += strings[i];
        let value = values[i];
        if (value instanceof _css_directive_js__WEBPACK_IMPORTED_MODULE_0__.CSSDirective) {
            const behavior = value.createBehavior();
            value = value.createCSS();
            if (behavior) {
                behaviors.push(behavior);
            }
        }
        if (value instanceof _element_styles_js__WEBPACK_IMPORTED_MODULE_1__.ElementStyles || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        }
        else {
            cssString += value;
        }
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") {
        styles.push(cssString);
    }
    return {
        styles,
        behaviors,
    };
}
/**
 * Transforms a template literal string into styles.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The css helper supports interpolation of strings and ElementStyle instances.
 * @public
 */
function css(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = _element_styles_js__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(styles);
    if (behaviors.length) {
        elementStyles.withBehaviors(...behaviors);
    }
    return elementStyles;
}
class CSSPartial extends _css_directive_js__WEBPACK_IMPORTED_MODULE_0__.CSSDirective {
    constructor(styles, behaviors) {
        super();
        this.behaviors = behaviors;
        this.css = "";
        const stylesheets = styles.reduce((accumulated, current) => {
            if (typeof current === "string") {
                this.css += current;
            }
            else {
                accumulated.push(current);
            }
            return accumulated;
        }, []);
        if (stylesheets.length) {
            this.styles = _element_styles_js__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(stylesheets);
        }
    }
    createBehavior() {
        return this;
    }
    createCSS() {
        return this.css;
    }
    bind(el) {
        if (this.styles) {
            el.$fastController.addStyles(this.styles);
        }
        if (this.behaviors.length) {
            el.$fastController.addBehaviors(this.behaviors);
        }
    }
    unbind(el) {
        if (this.styles) {
            el.$fastController.removeStyles(this.styles);
        }
        if (this.behaviors.length) {
            el.$fastController.removeBehaviors(this.behaviors);
        }
    }
}
/**
 * Transforms a template literal string into partial CSS.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @public
 */
function cssPartial(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdoptedStyleSheetsStyles": () => (/* binding */ AdoptedStyleSheetsStyles),
/* harmony export */   "ElementStyles": () => (/* binding */ ElementStyles),
/* harmony export */   "StyleElementStyles": () => (/* binding */ StyleElementStyles)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Represents styles that can be applied to a custom element.
 * @public
 */
class ElementStyles {
    constructor() {
        this.targets = new WeakSet();
        /** @internal */
        this.behaviors = null;
    }
    /** @internal */
    addStylesTo(target) {
        this.targets.add(target);
    }
    /** @internal */
    removeStylesFrom(target) {
        this.targets.delete(target);
    }
    /** @internal */
    isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */
    withBehaviors(...behaviors) {
        this.behaviors =
            this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
}
/**
 * Create ElementStyles from ComposableStyles.
 */
ElementStyles.create = (() => {
    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.supportsAdoptedStyleSheets) {
        const styleSheetCache = new Map();
        return (styles) => 
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        new AdoptedStyleSheetsStyles(styles, styleSheetCache);
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return (styles) => new StyleElementStyles(styles);
})();
function reduceStyles(styles) {
    return styles
        .map((x) => x instanceof ElementStyles ? reduceStyles(x.styles) : [x])
        .reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles) {
    return styles
        .map((x) => (x instanceof ElementStyles ? x.behaviors : null))
        .reduce((prev, curr) => {
        if (curr === null) {
            return prev;
        }
        if (prev === null) {
            prev = [];
        }
        return prev.concat(curr);
    }, null);
}
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */
class AdoptedStyleSheetsStyles extends ElementStyles {
    constructor(styles, styleSheetCache) {
        super();
        this.styles = styles;
        this.styleSheetCache = styleSheetCache;
        this._styleSheets = void 0;
        this.behaviors = reduceBehaviors(styles);
    }
    get styleSheets() {
        if (this._styleSheets === void 0) {
            const styles = this.styles;
            const styleSheetCache = this.styleSheetCache;
            this._styleSheets = reduceStyles(styles).map((x) => {
                if (x instanceof CSSStyleSheet) {
                    return x;
                }
                let sheet = styleSheetCache.get(x);
                if (sheet === void 0) {
                    sheet = new CSSStyleSheet();
                    sheet.replaceSync(x);
                    styleSheetCache.set(x, sheet);
                }
                return sheet;
            });
        }
        return this._styleSheets;
    }
    addStylesTo(target) {
        target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...this.styleSheets];
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        const sourceSheets = this.styleSheets;
        target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x) => sourceSheets.indexOf(x) === -1);
        super.removeStylesFrom(target);
    }
}
let styleClassId = 0;
function getNextStyleClass() {
    return `fast-style-class-${++styleClassId}`;
}
/**
 * @internal
 */
class StyleElementStyles extends ElementStyles {
    constructor(styles) {
        super();
        this.styles = styles;
        this.behaviors = null;
        this.behaviors = reduceBehaviors(styles);
        this.styleSheets = reduceStyles(styles);
        this.styleClass = getNextStyleClass();
    }
    addStylesTo(target) {
        const styleSheets = this.styleSheets;
        const styleClass = this.styleClass;
        target = this.normalizeTarget(target);
        for (let i = 0; i < styleSheets.length; i++) {
            const element = document.createElement("style");
            element.innerHTML = styleSheets[i];
            element.className = styleClass;
            target.append(element);
        }
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        target = this.normalizeTarget(target);
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for (let i = 0, ii = styles.length; i < ii; ++i) {
            target.removeChild(styles[i]);
        }
        super.removeStylesFrom(target);
    }
    isAttachedTo(target) {
        return super.isAttachedTo(this.normalizeTarget(target));
    }
    normalizeTarget(target) {
        return target === document ? document.body : target;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingBehavior": () => (/* binding */ BindingBehavior),
/* harmony export */   "HTMLBindingDirective": () => (/* binding */ HTMLBindingDirective)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");



function normalBind(source, context) {
    this.source = source;
    this.context = context;
    if (this.bindingObserver === null) {
        this.bindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(this.binding, this, this.isBindingVolatile);
    }
    this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
    this.source = source;
    this.context = context;
    this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
}
function contentUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
        view.unbind();
        view.needsBindOnly = true;
    }
}
function triggerUnbind() {
    this.target.removeEventListener(this.targetName, this);
    this.source = null;
    this.context = null;
}
function updateAttributeTarget(value) {
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) {
        value = "";
    }
    // If the value has a "create" method, then it's a template-like.
    if (value.create) {
        this.target.textContent = "";
        let view = this.target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) {
            view = value.create();
        }
        else {
            // If there is a previous view, but it wasn't created
            // from the same template as the new value, then we
            // need to remove the old view if it's still in the DOM
            // and create a new view from the template.
            if (this.target.$fastTemplate !== value) {
                if (view.isComposed) {
                    view.remove();
                    view.unbind();
                }
                view = value.create();
            }
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(this.source, this.context);
            view.insertBefore(this.target);
            this.target.$fastView = view;
            this.target.$fastTemplate = value;
        }
        else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(this.source, this.context);
        }
    }
    else {
        const view = this.target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) {
                view.needsBindOnly = false;
            }
            else {
                view.unbind();
            }
        }
        this.target.textContent = value;
    }
}
function updatePropertyTarget(value) {
    this.target[this.targetName] = value;
}
function updateClassTarget(value) {
    const classVersions = this.classVersions || Object.create(null);
    const target = this.target;
    let version = this.version || 0;
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for (let i = 0, ii = names.length; i < ii; ++i) {
            const currentName = names[i];
            if (currentName === "") {
                continue;
            }
            classVersions[currentName] = version;
            target.classList.add(currentName);
        }
    }
    this.classVersions = classVersions;
    this.version = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) {
        return;
    }
    // Remove classes from the previous version.
    version -= 1;
    for (const name in classVersions) {
        if (classVersions[name] === version) {
            target.classList.remove(name);
        }
    }
}
/**
 * A directive that configures data binding to element content and attributes.
 * @public
 */
class HTMLBindingDirective extends _html_directive_js__WEBPACK_IMPORTED_MODULE_2__.TargetedHTMLDirective {
    /**
     * Creates an instance of BindingDirective.
     * @param binding - A binding that returns the data used to update the DOM.
     */
    constructor(binding) {
        super();
        this.binding = binding;
        this.bind = normalBind;
        this.unbind = normalUnbind;
        this.updateTarget = updateAttributeTarget;
        this.isBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(this.binding);
    }
    /**
     * Gets/sets the name of the attribute or property that this
     * binding is targeting.
     */
    get targetName() {
        return this.originalTargetName;
    }
    set targetName(value) {
        this.originalTargetName = value;
        if (value === void 0) {
            return;
        }
        switch (value[0]) {
            case ":":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updatePropertyTarget;
                if (this.cleanedTargetName === "innerHTML") {
                    const binding = this.binding;
                    this.binding = (s, c) => _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.createHTML(binding(s, c));
                }
                break;
            case "?":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updateBooleanAttributeTarget;
                break;
            case "@":
                this.cleanedTargetName = value.substr(1);
                this.bind = triggerBind;
                this.unbind = triggerUnbind;
                break;
            default:
                this.cleanedTargetName = value;
                if (value === "class") {
                    this.updateTarget = updateClassTarget;
                }
                break;
        }
    }
    /**
     * Makes this binding target the content of an element rather than
     * a particular attribute or property.
     */
    targetAtContent() {
        this.updateTarget = updateContentTarget;
        this.unbind = contentUnbind;
    }
    /**
     * Creates the runtime BindingBehavior instance based on the configuration
     * information stored in the BindingDirective.
     * @param target - The target node that the binding behavior should attach to.
     */
    createBehavior(target) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
    }
}
/**
 * A behavior that updates content and attributes based on a configured
 * BindingDirective.
 * @public
 */
class BindingBehavior {
    /**
     * Creates an instance of BindingBehavior.
     * @param target - The target of the data updates.
     * @param binding - The binding that returns the latest value for an update.
     * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
     * @param bind - The operation to perform during binding.
     * @param unbind - The operation to perform during unbinding.
     * @param updateTarget - The operation to perform when updating.
     * @param targetName - The name of the target attribute or property to update.
     */
    constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
        /** @internal */
        this.source = null;
        /** @internal */
        this.context = null;
        /** @internal */
        this.bindingObserver = null;
        this.target = target;
        this.binding = binding;
        this.isBindingVolatile = isBindingVolatile;
        this.bind = bind;
        this.unbind = unbind;
        this.updateTarget = updateTarget;
        this.targetName = targetName;
    }
    /** @internal */
    handleChange() {
        this.updateTarget(this.bindingObserver.observe(this.source, this.context));
    }
    /** @internal */
    handleEvent(event) {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionContext.setEvent(event);
        const result = this.binding(this.source, this.context);
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionContext.setEvent(null);
        if (result !== true) {
            event.preventDefault();
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/children.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/children.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenBehavior": () => (/* binding */ ChildrenBehavior),
/* harmony export */   "children": () => (/* binding */ children)
/* harmony export */ });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _node_observation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-observation.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js");


/**
 * The runtime behavior for child node observation.
 * @public
 */
class ChildrenBehavior extends _node_observation_js__WEBPACK_IMPORTED_MODULE_0__.NodeObservationBehavior {
    /**
     * Creates an instance of ChildrenBehavior.
     * @param target - The element target to observe children on.
     * @param options - The options to use when observing the element children.
     */
    constructor(target, options) {
        super(target, options);
        this.observer = null;
        options.childList = true;
    }
    /**
     * Begins observation of the nodes.
     */
    observe() {
        if (this.observer === null) {
            this.observer = new MutationObserver(this.handleEvent.bind(this));
        }
        this.observer.observe(this.target, this.options);
    }
    /**
     * Disconnects observation of the nodes.
     */
    disconnect() {
        this.observer.disconnect();
    }
    /**
     * Retrieves the nodes that should be assigned to the target.
     */
    getNodes() {
        if ("subtree" in this.options) {
            return Array.from(this.target.querySelectorAll(this.options.selector));
        }
        return Array.from(this.target.childNodes);
    }
}
/**
 * A directive that observes the `childNodes` of an element and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure child node observation.
 * @public
 */
function children(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
        propertyOrOptions = {
            property: propertyOrOptions,
        };
    }
    return new _html_directive_js__WEBPACK_IMPORTED_MODULE_1__.AttachedBehaviorHTMLDirective("fast-children", ChildrenBehavior, propertyOrOptions);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileTemplate": () => (/* binding */ compileTemplate)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");


let sharedContext = null;
class CompilationContext {
    addFactory(factory) {
        factory.targetIndex = this.targetIndex;
        this.behaviorFactories.push(factory);
    }
    captureContentBinding(directive) {
        directive.targetAtContent();
        this.addFactory(directive);
    }
    reset() {
        this.behaviorFactories = [];
        this.targetIndex = -1;
    }
    release() {
        sharedContext = this;
    }
    static borrow(directives) {
        const shareable = sharedContext || new CompilationContext();
        shareable.directives = directives;
        shareable.reset();
        sharedContext = null;
        return shareable;
    }
}
function createAggregateBinding(parts) {
    if (parts.length === 1) {
        return parts[0];
    }
    let targetName;
    const partCount = parts.length;
    const finalParts = parts.map((x) => {
        if (typeof x === "string") {
            return () => x;
        }
        targetName = x.targetName || targetName;
        return x.binding;
    });
    const binding = (scope, context) => {
        let output = "";
        for (let i = 0; i < partCount; ++i) {
            output += finalParts[i](scope, context);
        }
        return output;
    };
    const directive = new _binding_js__WEBPACK_IMPORTED_MODULE_0__.HTMLBindingDirective(binding);
    directive.targetName = targetName;
    return directive;
}
const interpolationEndLength = _dom_js__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd.length;
function parseContent(context, value) {
    const valueParts = value.split(_dom_js__WEBPACK_IMPORTED_MODULE_1__._interpolationStart);
    if (valueParts.length === 1) {
        return null;
    }
    const bindingParts = [];
    for (let i = 0, ii = valueParts.length; i < ii; ++i) {
        const current = valueParts[i];
        const index = current.indexOf(_dom_js__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd);
        let literal;
        if (index === -1) {
            literal = current;
        }
        else {
            const directiveIndex = parseInt(current.substring(0, index));
            bindingParts.push(context.directives[directiveIndex]);
            literal = current.substring(index + interpolationEndLength);
        }
        if (literal !== "") {
            bindingParts.push(literal);
        }
    }
    return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
    const attributes = node.attributes;
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = parseContent(context, attrValue);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new _binding_js__WEBPACK_IMPORTED_MODULE_0__.HTMLBindingDirective(() => attrValue);
                result.targetName = attr.name;
            }
        }
        else {
            result = createAggregateBinding(parseResult);
        }
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result);
        }
    }
}
function compileContent(context, node, walker) {
    const parseResult = parseContent(context, node.textContent);
    if (parseResult !== null) {
        let lastNode = node;
        for (let i = 0, ii = parseResult.length; i < ii; ++i) {
            const currentPart = parseResult[i];
            const currentNode = i === 0
                ? node
                : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
            if (typeof currentPart === "string") {
                currentNode.textContent = currentPart;
            }
            else {
                currentNode.textContent = " ";
                context.captureContentBinding(currentPart);
            }
            lastNode = currentNode;
            context.targetIndex++;
            if (currentNode !== node) {
                walker.nextNode();
            }
        }
        context.targetIndex--;
    }
}
/**
 * Compiles a template and associated directives into a raw compilation
 * result which include a cloneable DocumentFragment and factories capable
 * of attaching runtime behavior to nodes within the fragment.
 * @param template - The template to compile.
 * @param directives - The directives referenced by the template.
 * @remarks
 * The template that is provided for compilation is altered in-place
 * and cannot be compiled again. If the original template must be preserved,
 * it is recommended that you clone the original and pass the clone to this API.
 * @public
 */
function compileTemplate(template, directives) {
    const fragment = template.content;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
    document.adoptNode(fragment);
    const context = CompilationContext.borrow(directives);
    compileAttributes(context, template, true);
    const hostBehaviorFactories = context.behaviorFactories;
    context.reset();
    const walker = _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.createTemplateWalker(fragment);
    let node;
    while ((node = walker.nextNode())) {
        context.targetIndex++;
        switch (node.nodeType) {
            case 1: // element node
                compileAttributes(context, node);
                break;
            case 3: // text node
                compileContent(context, node, walker);
                break;
            case 8: // comment
                if (_dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(node)) {
                    context.addFactory(directives[_dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.extractDirectiveIndexFromMarker(node)]);
                }
        }
    }
    let targetOffset = 0;
    if (
    // If the first node in a fragment is a marker, that means it's an unstable first node,
    // because something like a when, repeat, etc. could add nodes before the marker.
    // To mitigate this, we insert a stable first node. However, if we insert a node,
    // that will alter the result of the TreeWalker. So, we also need to offset the target index.
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(fragment.firstChild) ||
        // Or if there is only one node and a directive, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        (fragment.childNodes.length === 1 && directives.length)) {
        fragment.insertBefore(document.createComment(""), fragment.firstChild);
        targetOffset = -1;
    }
    const viewBehaviorFactories = context.behaviorFactories;
    context.release();
    return {
        fragment,
        viewBehaviorFactories,
        hostBehaviorFactories,
        targetOffset,
    };
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachedBehaviorHTMLDirective": () => (/* binding */ AttachedBehaviorHTMLDirective),
/* harmony export */   "HTMLDirective": () => (/* binding */ HTMLDirective),
/* harmony export */   "TargetedHTMLDirective": () => (/* binding */ TargetedHTMLDirective)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Instructs the template engine to apply behavior to a node.
 * @public
 */
class HTMLDirective {
    constructor() {
        /**
         * The index of the DOM node to which the created behavior will apply.
         */
        this.targetIndex = 0;
    }
}
/**
 * A {@link HTMLDirective} that targets a named attribute or property on a node.
 * @public
 */
class TargetedHTMLDirective extends HTMLDirective {
    constructor() {
        super(...arguments);
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createInterpolationPlaceholder;
    }
}
/**
 * A directive that attaches special behavior to an element via a custom attribute.
 * @public
 */
class AttachedBehaviorHTMLDirective extends HTMLDirective {
    /**
     *
     * @param name - The name of the behavior; used as a custom attribute on the element.
     * @param behavior - The behavior to instantiate and attach to the element.
     * @param options - Options to pass to the behavior during creation.
     */
    constructor(name, behavior, options) {
        super();
        this.name = name;
        this.behavior = behavior;
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */
    createPlaceholder(index) {
        return _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createCustomAttributePlaceholder(this.name, index);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     * @remarks
     * Creates an instance of the `behavior` type this directive was constructed with
     * and passes the target and options to that `behavior`'s constructor.
     */
    createBehavior(target) {
        return new this.behavior(target, this.options);
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeObservationBehavior": () => (/* binding */ NodeObservationBehavior),
/* harmony export */   "elements": () => (/* binding */ elements)
/* harmony export */ });
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");


/**
 * Creates a function that can be used to filter a Node array, selecting only elements.
 * @param selector - An optional selector to restrict the filter to.
 * @public
 */
function elements(selector) {
    if (selector) {
        return function (value, index, array) {
            return value.nodeType === 1 && value.matches(selector);
        };
    }
    return function (value, index, array) {
        return value.nodeType === 1;
    };
}
/**
 * A base class for node observation.
 * @internal
 */
class NodeObservationBehavior {
    /**
     * Creates an instance of NodeObservationBehavior.
     * @param target - The target to assign the nodes property on.
     * @param options - The options to use in configuring node observation.
     */
    constructor(target, options) {
        this.target = target;
        this.options = options;
        this.source = null;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        const name = this.options.property;
        this.shouldUpdate = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.getAccessors(source).some((x) => x.name === name);
        this.source = source;
        this.updateTarget(this.computeNodes());
        if (this.shouldUpdate) {
            this.observe();
        }
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.updateTarget(_platform_js__WEBPACK_IMPORTED_MODULE_1__.emptyArray);
        this.source = null;
        if (this.shouldUpdate) {
            this.disconnect();
        }
    }
    /** @internal */
    handleEvent() {
        this.updateTarget(this.computeNodes());
    }
    computeNodes() {
        let nodes = this.getNodes();
        if (this.options.filter !== void 0) {
            nodes = nodes.filter(this.options.filter);
        }
        return nodes;
    }
    updateTarget(value) {
        this.source[this.options.property] = value;
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefBehavior": () => (/* binding */ RefBehavior),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");

/**
 * The runtime behavior for template references.
 * @public
 */
class RefBehavior {
    /**
     * Creates an instance of RefBehavior.
     * @param target - The element to reference.
     * @param propertyName - The name of the property to assign the reference to.
     */
    constructor(target, propertyName) {
        this.target = target;
        this.propertyName = propertyName;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        source[this.propertyName] = this.target;
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    unbind() { }
}
/**
 * A directive that observes the updates a property with a reference to the element.
 * @param propertyName - The name of the property to assign the reference to.
 * @public
 */
function ref(propertyName) {
    return new _html_directive_js__WEBPACK_IMPORTED_MODULE_0__.AttachedBehaviorHTMLDirective("fast-ref", RefBehavior, propertyName);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/repeat.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatBehavior": () => (/* binding */ RepeatBehavior),
/* harmony export */   "RepeatDirective": () => (/* binding */ RepeatDirective),
/* harmony export */   "repeat": () => (/* binding */ repeat)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _observation_array_observer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observation/array-observer.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform.js */ "./node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js");






const defaultRepeatOptions = Object.freeze({
    positioning: false,
    recycle: true,
});
function bindWithoutPositioning(view, items, index, context) {
    view.bind(items[index], context);
}
function bindWithPositioning(view, items, index, context) {
    const childContext = Object.create(context);
    childContext.index = index;
    childContext.length = items.length;
    view.bind(items[index], childContext);
}
/**
 * A behavior that renders a template for each item in an array.
 * @public
 */
class RepeatBehavior {
    /**
     * Creates an instance of RepeatBehavior.
     * @param location - The location in the DOM to render the repeat.
     * @param itemsBinding - The array to render.
     * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
     * @param templateBinding - The template to render for each item.
     * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
     * @param options - Options used to turn on special repeat features.
     */
    constructor(location, itemsBinding, isItemsBindingVolatile, templateBinding, isTemplateBindingVolatile, options) {
        this.location = location;
        this.itemsBinding = itemsBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        this.source = null;
        this.views = [];
        this.items = null;
        this.itemsObserver = null;
        this.originalContext = void 0;
        this.childContext = void 0;
        this.bindView = bindWithoutPositioning;
        this.itemsBindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(itemsBinding, this, isItemsBindingVolatile);
        this.templateBindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(templateBinding, this, isTemplateBindingVolatile);
        if (options.positioning) {
            this.bindView = bindWithPositioning;
        }
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source, context) {
        this.source = source;
        this.originalContext = context;
        this.childContext = Object.create(context);
        this.childContext.parent = source;
        this.childContext.parentContext = this.originalContext;
        this.items = this.itemsBindingObserver.observe(source, this.originalContext);
        this.template = this.templateBindingObserver.observe(source, this.originalContext);
        this.observeItems(true);
        this.refreshAllViews();
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.source = null;
        this.items = null;
        if (this.itemsObserver !== null) {
            this.itemsObserver.unsubscribe(this);
        }
        this.unbindAllViews();
        this.itemsBindingObserver.disconnect();
        this.templateBindingObserver.disconnect();
    }
    /** @internal */
    handleChange(source, args) {
        if (source === this.itemsBinding) {
            this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
            this.observeItems();
            this.refreshAllViews();
        }
        else if (source === this.templateBinding) {
            this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
            this.refreshAllViews(true);
        }
        else {
            this.updateViews(args);
        }
    }
    observeItems(force = false) {
        if (!this.items) {
            this.items = _platform_js__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
            return;
        }
        const oldObserver = this.itemsObserver;
        const newObserver = (this.itemsObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.getNotifier(this.items));
        const hasNewObserver = oldObserver !== newObserver;
        if (hasNewObserver && oldObserver !== null) {
            oldObserver.unsubscribe(this);
        }
        if (hasNewObserver || force) {
            newObserver.subscribe(this);
        }
    }
    updateViews(splices) {
        const childContext = this.childContext;
        const views = this.views;
        const totalRemoved = [];
        const bindView = this.bindView;
        let removeDelta = 0;
        for (let i = 0, ii = splices.length; i < ii; ++i) {
            const splice = splices[i];
            const removed = splice.removed;
            totalRemoved.push(...views.splice(splice.index + removeDelta, removed.length));
            removeDelta -= splice.addedCount;
        }
        const items = this.items;
        const template = this.template;
        for (let i = 0, ii = splices.length; i < ii; ++i) {
            const splice = splices[i];
            let addIndex = splice.index;
            const end = addIndex + splice.addedCount;
            for (; addIndex < end; ++addIndex) {
                const neighbor = views[addIndex];
                const location = neighbor ? neighbor.firstChild : this.location;
                const view = this.options.recycle && totalRemoved.length > 0
                    ? totalRemoved.shift()
                    : template.create();
                views.splice(addIndex, 0, view);
                bindView(view, items, addIndex, childContext);
                view.insertBefore(location);
            }
        }
        for (let i = 0, ii = totalRemoved.length; i < ii; ++i) {
            totalRemoved[i].dispose();
        }
        if (this.options.positioning) {
            for (let i = 0, ii = views.length; i < ii; ++i) {
                const currentContext = views[i].context;
                currentContext.length = ii;
                currentContext.index = i;
            }
        }
    }
    refreshAllViews(templateChanged = false) {
        const items = this.items;
        const childContext = this.childContext;
        const template = this.template;
        const location = this.location;
        const bindView = this.bindView;
        let itemsLength = items.length;
        let views = this.views;
        let viewsLength = views.length;
        if (itemsLength === 0 || templateChanged) {
            // all views need to be removed
            _view_js__WEBPACK_IMPORTED_MODULE_2__.HTMLView.disposeContiguousBatch(views);
            viewsLength = 0;
        }
        if (viewsLength === 0) {
            // all views need to be created
            this.views = views = new Array(itemsLength);
            for (let i = 0; i < itemsLength; ++i) {
                const view = template.create();
                bindView(view, items, i, childContext);
                views[i] = view;
                view.insertBefore(location);
            }
        }
        else {
            // attempt to reuse existing views with new data
            let i = 0;
            for (; i < itemsLength; ++i) {
                if (i < viewsLength) {
                    const view = views[i];
                    bindView(view, items, i, childContext);
                }
                else {
                    const view = template.create();
                    bindView(view, items, i, childContext);
                    views.push(view);
                    view.insertBefore(location);
                }
            }
            const removed = views.splice(i, viewsLength - i);
            for (i = 0, itemsLength = removed.length; i < itemsLength; ++i) {
                removed[i].dispose();
            }
        }
    }
    unbindAllViews() {
        const views = this.views;
        for (let i = 0, ii = views.length; i < ii; ++i) {
            views[i].unbind();
        }
    }
}
/**
 * A directive that configures list rendering.
 * @public
 */
class RepeatDirective extends _html_directive_js__WEBPACK_IMPORTED_MODULE_3__.HTMLDirective {
    /**
     * Creates an instance of RepeatDirective.
     * @param itemsBinding - The binding that provides the array to render.
     * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
     * @param options - Options used to turn on special repeat features.
     */
    constructor(itemsBinding, templateBinding, options) {
        super();
        this.itemsBinding = itemsBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom_js__WEBPACK_IMPORTED_MODULE_4__.DOM.createBlockPlaceholder;
        (0,_observation_array_observer_js__WEBPACK_IMPORTED_MODULE_5__.enableArrayObservation)();
        this.isItemsBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(itemsBinding);
        this.isTemplateBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(templateBinding);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     */
    createBehavior(target) {
        return new RepeatBehavior(target, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
    }
}
/**
 * A directive that enables list rendering.
 * @param itemsBinding - The array to render.
 * @param templateOrTemplateBinding - The template or a template binding used obtain a template
 * to render for each item in the array.
 * @param options - Options used to turn on special repeat features.
 * @public
 */
function repeat(itemsBinding, templateOrTemplateBinding, options = defaultRepeatOptions) {
    const templateBinding = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return new RepeatDirective(itemsBinding, templateBinding, options);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlottedBehavior": () => (/* binding */ SlottedBehavior),
/* harmony export */   "slotted": () => (/* binding */ slotted)
/* harmony export */ });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _node_observation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-observation.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js");


/**
 * The runtime behavior for slotted node observation.
 * @public
 */
class SlottedBehavior extends _node_observation_js__WEBPACK_IMPORTED_MODULE_0__.NodeObservationBehavior {
    /**
     * Creates an instance of SlottedBehavior.
     * @param target - The slot element target to observe.
     * @param options - The options to use when observing the slot.
     */
    constructor(target, options) {
        super(target, options);
    }
    /**
     * Begins observation of the nodes.
     */
    observe() {
        this.target.addEventListener("slotchange", this);
    }
    /**
     * Disconnects observation of the nodes.
     */
    disconnect() {
        this.target.removeEventListener("slotchange", this);
    }
    /**
     * Retrieves the nodes that should be assigned to the target.
     */
    getNodes() {
        return this.target.assignedNodes(this.options);
    }
}
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */
function slotted(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
        propertyOrOptions = { property: propertyOrOptions };
    }
    return new _html_directive_js__WEBPACK_IMPORTED_MODULE_1__.AttachedBehaviorHTMLDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/template.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTemplate": () => (/* binding */ ViewTemplate),
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observation/observable.js */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _compiler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js");
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-directive.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js");
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding.js */ "./node_modules/@microsoft/fast-element/dist/esm/templating/binding.js");






/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param directives - The directives that will be connected to placeholders in the html.
     */
    constructor(html, directives) {
        this.behaviorCount = 0;
        this.hasHostBehaviors = false;
        this.fragment = null;
        this.targetOffset = 0;
        this.viewBehaviorFactories = null;
        this.hostBehaviorFactories = null;
        this.html = html;
        this.directives = directives;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */
    create(hostBindingTarget) {
        if (this.fragment === null) {
            let template;
            const html = this.html;
            if (typeof html === "string") {
                template = document.createElement("template");
                template.innerHTML = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createHTML(html);
                const fec = template.content.firstElementChild;
                if (fec !== null && fec.tagName === "TEMPLATE") {
                    template = fec;
                }
            }
            else {
                template = html;
            }
            const result = (0,_compiler_js__WEBPACK_IMPORTED_MODULE_1__.compileTemplate)(template, this.directives);
            this.fragment = result.fragment;
            this.viewBehaviorFactories = result.viewBehaviorFactories;
            this.hostBehaviorFactories = result.hostBehaviorFactories;
            this.targetOffset = result.targetOffset;
            this.behaviorCount =
                this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
            this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
        }
        const fragment = this.fragment.cloneNode(true);
        const viewFactories = this.viewBehaviorFactories;
        const behaviors = new Array(this.behaviorCount);
        const walker = _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createTemplateWalker(fragment);
        let behaviorIndex = 0;
        let targetIndex = this.targetOffset;
        let node = walker.nextNode();
        for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
            const factory = viewFactories[behaviorIndex];
            const factoryIndex = factory.targetIndex;
            while (node !== null) {
                if (targetIndex === factoryIndex) {
                    behaviors[behaviorIndex] = factory.createBehavior(node);
                    break;
                }
                else {
                    node = walker.nextNode();
                    targetIndex++;
                }
            }
        }
        if (this.hasHostBehaviors) {
            const hostFactories = this.hostBehaviorFactories;
            for (let i = 0, ii = hostFactories.length; i < ii; ++i, ++behaviorIndex) {
                behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
            }
        }
        return new _view_js__WEBPACK_IMPORTED_MODULE_2__.HTMLView(fragment, behaviors);
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */
    render(source, host, hostBindingTarget) {
        if (typeof host === "string") {
            host = document.getElementById(host);
        }
        if (hostBindingTarget === void 0) {
            hostBindingTarget = host;
        }
        const view = this.create(hostBindingTarget);
        view.bind(source, _observation_observable_js__WEBPACK_IMPORTED_MODULE_3__.defaultExecutionContext);
        view.appendTo(host);
        return view;
    }
}
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = 
/* eslint-disable-next-line no-control-regex */
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * Transforms a template literal string into a renderable ViewTemplate.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The html helper supports interpolation of strings, numbers, binding expressions,
 * other template instances, and Directive instances.
 * @public
 */
function html(strings, ...values) {
    const directives = [];
    let html = "";
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        const currentString = strings[i];
        let value = values[i];
        html += currentString;
        if (value instanceof ViewTemplate) {
            const template = value;
            value = () => template;
        }
        if (typeof value === "function") {
            value = new _binding_js__WEBPACK_IMPORTED_MODULE_4__.HTMLBindingDirective(value);
        }
        if (value instanceof _html_directive_js__WEBPACK_IMPORTED_MODULE_5__.TargetedHTMLDirective) {
            const match = lastAttributeNameRegex.exec(currentString);
            if (match !== null) {
                value.targetName = match[2];
            }
        }
        if (value instanceof _html_directive_js__WEBPACK_IMPORTED_MODULE_5__.HTMLDirective) {
            // Since not all values are directives, we can't use i
            // as the index for the placeholder. Instead, we need to
            // use directives.length to get the next index.
            html += value.createPlaceholder(directives.length);
            directives.push(value);
        }
        else {
            html += value;
        }
    }
    html += strings[strings.length - 1];
    return new ViewTemplate(html, directives);
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/view.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/view.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLView": () => (/* binding */ HTMLView)
/* harmony export */ });
// A singleton Range instance used to efficiently remove ranges of DOM nodes.
// See the implementation of HTMLView below for further details.
const range = document.createRange();
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */
class HTMLView {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */
    constructor(fragment, behaviors) {
        this.fragment = fragment;
        this.behaviors = behaviors;
        /**
         * The data that the view is bound to.
         */
        this.source = null;
        /**
         * The execution context the view is running within.
         */
        this.context = null;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */
    appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */
    insertBefore(node) {
        if (this.fragment.hasChildNodes()) {
            node.parentNode.insertBefore(this.fragment, node);
        }
        else {
            const parentNode = node.parentNode;
            const end = this.lastChild;
            let current = this.firstChild;
            let next;
            while (current !== end) {
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */
    remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */
    dispose() {
        const parent = this.firstChild.parentNode;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            parent.removeChild(current);
            current = next;
        }
        parent.removeChild(end);
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */
    bind(source, context) {
        const behaviors = this.behaviors;
        if (this.source === source) {
            return;
        }
        else if (this.source !== null) {
            const oldSource = this.source;
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                const current = behaviors[i];
                current.unbind(oldSource);
                current.bind(source, context);
            }
        }
        else {
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(source, context);
            }
        }
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */
    unbind() {
        if (this.source === null) {
            return;
        }
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
        this.source = null;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */
    static disposeContiguousBatch(views) {
        if (views.length === 0) {
            return;
        }
        range.setStartBefore(views[0].firstChild);
        range.setEndAfter(views[views.length - 1].lastChild);
        range.deleteContents();
        for (let i = 0, ii = views.length; i < ii; ++i) {
            const view = views[i];
            const behaviors = view.behaviors;
            const oldSource = view.source;
            for (let j = 0, jj = behaviors.length; j < jj; ++j) {
                behaviors[j].unbind(oldSource);
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/when.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
/**
 * A directive that enables basic conditional rendering in a template.
 * @param binding - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @public
 */
function when(binding, templateOrTemplateBinding) {
    const getTemplate = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return (source, context) => binding(source, context) ? getTemplate(source, context) : null;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFLZ0M7QUFDTTtBQUNnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNPLG1CQUFtQixzREFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSx3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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLG1DQUFtQyxxRUFBcUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0ZBQTRCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1EQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9pbmRleC50cyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL3NyYy9jb21wb25lbnRCYXNlL2luZGV4LnRzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vc3JjL2NvbXBvbmVudHMvQWxlcnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9zcmMvY29tcG9uZW50cy9Ub2dnYWJsZUJ1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL3NyYy9jb21wb25lbnRzL1RvZ2dhYmxlQnV0dG9uL3RlbXBsYXRlLnRzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9zcmMvaGVscGVycy9pZEhlbHBlci50cyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL3NyYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2NvbXBvbmVudHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9jb21wb25lbnRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vY29tcG9uZW50cy9mYXN0LWRlZmluaXRpb25zLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2NvbXBvbmVudHMvZmFzdC1lbGVtZW50LmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL2RvbS5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9vYnNlcnZhdGlvbi9hcnJheS1jaGFuZ2UtcmVjb3Jkcy5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9vYnNlcnZhdGlvbi9hcnJheS1vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9vYnNlcnZhdGlvbi9ub3RpZmllci5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3N0eWxlcy9jc3MtZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3N0eWxlcy9jc3MuanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vc3R5bGVzL2VsZW1lbnQtc3R5bGVzLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvYmluZGluZy5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS90ZW1wbGF0aW5nL2NoaWxkcmVuLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy9odG1sLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZWxlbWVudC9kaXN0L2VzbS90ZW1wbGF0aW5nL25vZGUtb2JzZXJ2YXRpb24uanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy9yZWYuanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy9zbG90dGVkLmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQvZGlzdC9lc20vdGVtcGxhdGluZy92aWV3LmpzIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwLy4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvd2hlbi5qcyIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFtb250YS1zdHJhcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHJhbW9udGEtc3RyYXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RyYW1vbnRhLXN0cmFwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL3NyYy9jb21wb25lbnRzJztcclxuXHJcbnZhciBUcmFtb250YVN0cmFwID0geyAuLi5Db21wb25lbnRzIH07XHJcbmRvY3VtZW50LndyaXRlKCc8YXBwLXJvb3Q+PC9hcHAtcm9vdD4nKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50cztcclxuIiwiaW1wb3J0IHsgY3JlYXRlUmFuZG9tSWQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudENvbnN0cnVjdG9yT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmNsYXNzIENvbXBvbmVudEJhc2Uge1xyXG5cdHByb3RlY3RlZCBpZDogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG5cdHByb3RlY3RlZCBub2RlOiBIVE1MRGl2RWxlbWVudDtcclxuXHRjb25zdHJ1Y3Rvcih7IHBhcmVudCB9OiBCYXNlQ29tcG9uZW50Q29uc3RydWN0b3JPcHRpb25zKSB7XHJcblx0XHR0aGlzLmlkID0gY3JlYXRlUmFuZG9tSWQoKTtcclxuXHJcblx0XHQvL0RPTSBtYW5pcHVsYXRpb25cclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50IHx8IGRvY3VtZW50LmJvZHk7XHJcblx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMubm9kZS5pZCA9IHRoaXMuaWQ7XHJcblx0XHR0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlKCkge1xyXG5cdFx0dGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudEJhc2U7XHJcbiIsImltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL2NvbXBvbmVudEJhc2UnO1xyXG5pbXBvcnQgeyBBbGVydENvbnN0cnVjdG9yT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblx0cHJpdmF0ZSBzaG93VGltZTogbnVtYmVyO1xyXG5cdHByaXZhdGUgc2hvd2luZzogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoeyBzaG93dGltZSwgcGFyZW50IH06IEFsZXJ0Q29uc3RydWN0b3JPcHRpb25zKSB7XHJcblx0XHRzdXBlcih7IHBhcmVudCB9KTtcclxuXHRcdHRoaXMuc2hvd1RpbWUgPSBzaG93dGltZSAqIDEwMDA7XHJcblx0XHR0aGlzLnNob3dpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMubWVzc2FnZSA9ICcnO1xyXG5cdH1cclxuXHJcblx0c2hvd0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHRcdHRoaXMuc2hvdygpO1xyXG5cdFx0c2V0VGltZW91dCh0aGlzLmhpZGUsIHRoaXMuc2hvd1RpbWUpO1xyXG5cdH1cclxuXHJcblx0c2hvd1N1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdFx0dGhpcy5zaG93KCk7XHJcblx0XHRzZXRUaW1lb3V0KHRoaXMuaGlkZSwgdGhpcy5zaG93VGltZSk7XHJcblx0fVxyXG5cclxuXHRzZXQgbWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHR0b2dnbGUoKSB7XHJcblx0XHR0aGlzLnNob3dpbmcgPSAhdGhpcy5zaG93aW5nO1xyXG5cdH1cclxuXHJcblx0c2hvdygpIHtcclxuXHRcdHRoaXMuc2hvd2luZyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0dGhpcy5zaG93aW5nID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcclxuIiwiaW1wb3J0IHsgRkFTVEVsZW1lbnQsIGN1c3RvbUVsZW1lbnQsIGF0dHIgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudCc7XHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcclxuXHJcbkBjdXN0b21FbGVtZW50KHtcclxuXHRuYW1lOiAndG9nZ2FibGUtYnV0dG9uJyxcclxuXHR0ZW1wbGF0ZSxcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xhYmxlQnV0dG9uIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xyXG5cdEBhdHRyIHRleHQgPSAnVGVzdCc7XHJcblx0QGF0dHIgYWN0aXZlID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xyXG5pbXBvcnQgVG9nZ2FibGVCdXR0b24gZnJvbSAnLic7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8VG9nZ2FibGVCdXR0b24+YFxyXG5cdDxkaXY+XHJcblx0XHQ8YnV0dG9uIGFjdGl2ZT1cIiR7eCA9PiB4LmFjdGl2ZX1cIj4ke3ggPT4geC50ZXh0fTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGU7XHJcbiIsImltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0JztcclxuaW1wb3J0IFRvZ2dhYmxlQnV0dG9uIGZyb20gJy4vVG9nZ2FibGVCdXR0b24nO1xyXG5jb25zdCBDb21wb25lbnRzID0ge1xyXG5cdEFsZXJ0LFxyXG5cdFRvZ2dhYmxlQnV0dG9uLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50cztcclxuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVJhbmRvbUlkID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJhbmRvbU51bWJlciA9IChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkudG9TdHJpbmcoKTtcclxuXHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xyXG5cdHJldHVybiAocmFuZG9tTnVtYmVyICsgbm93KVxyXG5cdFx0LnNwbGl0KCcnKVxyXG5cdFx0Lm1hcChjaGFyID0+XHJcblx0XHRcdE1hdGgucmFuZG9tKCkgPiAwLjVcclxuXHRcdFx0XHQ/IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhci5jaGFyQ29kZUF0KDApIF4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKSlcclxuXHRcdFx0XHQ6ICcnXHJcblx0XHQpXHJcblx0XHQuam9pbignJyk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vaWRIZWxwZXInO1xyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uL29ic2VydmF0aW9uL29ic2VydmFibGUuanNcIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbi8qKlxuICogQSB7QGxpbmsgVmFsdWVDb252ZXJ0ZXJ9IHRoYXQgY29udmVydHMgdG8gYW5kIGZyb20gYGJvb2xlYW5gIHZhbHVlcy5cbiAqIEByZW1hcmtzXG4gKiBVc2VkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgYGJvb2xlYW5gIHtAbGluayBBdHRyaWJ1dGVNb2RlfSBpcyBzZWxlY3RlZC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGJvb2xlYW5Db252ZXJ0ZXIgPSB7XG4gICAgdG9WaWV3KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiO1xuICAgIH0sXG4gICAgZnJvbVZpZXcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gdm9pZCAwIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gXCJmYWxzZVwiIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn07XG4vKipcbiAqIEEge0BsaW5rIFZhbHVlQ29udmVydGVyfSB0aGF0IGNvbnZlcnRzIHRvIGFuZCBmcm9tIGBudW1iZXJgIHZhbHVlcy5cbiAqIEByZW1hcmtzXG4gKiBUaGlzIGNvbnZlcnRlciBhbGxvd3MgZm9yIG51bGxhYmxlIG51bWJlcnMsIHJldHVybmluZyBgbnVsbGAgaWYgdGhlXG4gKiBpbnB1dCB3YXMgYG51bGxgLCBgdW5kZWZpbmVkYCwgb3IgYE5hTmAuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBudWxsYWJsZU51bWJlckNvbnZlcnRlciA9IHtcbiAgICB0b1ZpZXcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlICogMTtcbiAgICAgICAgcmV0dXJuIGlzTmFOKG51bWJlcikgPyBudWxsIDogbnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICBmcm9tVmlldyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtYmVyID0gdmFsdWUgKiAxO1xuICAgICAgICByZXR1cm4gaXNOYU4obnVtYmVyKSA/IG51bGwgOiBudW1iZXI7XG4gICAgfSxcbn07XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBBY2Nlc3Nvcn0gdGhhdCBzdXBwb3J0cyByZWFjdGl2aXR5LFxuICogY2hhbmdlIGNhbGxiYWNrcywgYXR0cmlidXRlIHJlZmxlY3Rpb24sIGFuZCB0eXBlIGNvbnZlcnNpb24gZm9yXG4gKiBjdXN0b20gZWxlbWVudHMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVEZWZpbml0aW9uIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEF0dHJpYnV0ZURlZmluaXRpb24uXG4gICAgICogQHBhcmFtIE93bmVyIC0gVGhlIGNsYXNzIGNvbnN0cnVjdG9yIHRoYXQgb3ducyB0aGlzIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggdGhlIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlIC0gVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSBpbiBIVE1MLlxuICAgICAqIEBwYXJhbSBtb2RlIC0gVGhlIHtAbGluayBBdHRyaWJ1dGVNb2RlfSB0aGF0IGRlc2NyaWJlcyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIGNvbnZlcnRlciAtIEEge0BsaW5rIFZhbHVlQ29udmVydGVyfSB0aGF0IGludGVncmF0ZXMgd2l0aCB0aGUgcHJvcGVydHkgZ2V0dGVyL3NldHRlclxuICAgICAqIHRvIGNvbnZlcnQgdmFsdWVzIHRvIGFuZCBmcm9tIGEgRE9NIHN0cmluZy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihPd25lciwgbmFtZSwgYXR0cmlidXRlID0gbmFtZS50b0xvd2VyQ2FzZSgpLCBtb2RlID0gXCJyZWZsZWN0XCIsIGNvbnZlcnRlcikge1xuICAgICAgICB0aGlzLmd1YXJkcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5Pd25lciA9IE93bmVyO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIgPSBjb252ZXJ0ZXI7XG4gICAgICAgIHRoaXMuZmllbGROYW1lID0gYF8ke25hbWV9YDtcbiAgICAgICAgdGhpcy5jYWxsYmFja05hbWUgPSBgJHtuYW1lfUNoYW5nZWRgO1xuICAgICAgICB0aGlzLmhhc0NhbGxiYWNrID0gdGhpcy5jYWxsYmFja05hbWUgaW4gT3duZXIucHJvdG90eXBlO1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJib29sZWFuXCIgJiYgY29udmVydGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuY29udmVydGVyID0gYm9vbGVhbkNvbnZlcnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlL3Byb3BlcnR5IG9uIHRoZSBzb3VyY2UgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSBlbGVtZW50IHRvIGFjY2Vzcy5cbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUvcHJvcGVydHkgdG8uXG4gICAgICovXG4gICAgc2V0VmFsdWUoc291cmNlLCBuZXdWYWx1ZSkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHNvdXJjZVt0aGlzLmZpZWxkTmFtZV07XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IHRoaXMuY29udmVydGVyO1xuICAgICAgICBpZiAoY29udmVydGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY29udmVydGVyLmZyb21WaWV3KG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzb3VyY2VbdGhpcy5maWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRyeVJlZmxlY3RUb0F0dHJpYnV0ZShzb3VyY2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VbdGhpcy5jYWxsYmFja05hbWVdKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VyY2UuJGZhc3RDb250cm9sbGVyLm5vdGlmeSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUvcHJvcGVydHkgb24gdGhlIHNvdXJjZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIGVsZW1lbnQgdG8gYWNjZXNzLlxuICAgICAqL1xuICAgIGdldFZhbHVlKHNvdXJjZSkge1xuICAgICAgICBPYnNlcnZhYmxlLnRyYWNrKHNvdXJjZSwgdGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVt0aGlzLmZpZWxkTmFtZV07XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBvbkF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlbGVtZW50LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5ndWFyZHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ndWFyZHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKGVsZW1lbnQsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ndWFyZHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgICB0cnlSZWZsZWN0VG9BdHRyaWJ1dGUoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5tb2RlO1xuICAgICAgICBjb25zdCBndWFyZHMgPSB0aGlzLmd1YXJkcztcbiAgICAgICAgaWYgKGd1YXJkcy5oYXMoZWxlbWVudCkgfHwgbW9kZSA9PT0gXCJmcm9tVmlld1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRE9NLnF1ZXVlVXBkYXRlKCgpID0+IHtcbiAgICAgICAgICAgIGd1YXJkcy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGVsZW1lbnRbdGhpcy5maWVsZE5hbWVdO1xuICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZmxlY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gdGhpcy5jb252ZXJ0ZXI7XG4gICAgICAgICAgICAgICAgICAgIERPTS5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGUsIGNvbnZlcnRlciAhPT0gdm9pZCAwID8gY29udmVydGVyLnRvVmlldyhsYXRlc3RWYWx1ZSkgOiBsYXRlc3RWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgICAgIERPTS5zZXRCb29sZWFuQXR0cmlidXRlKGVsZW1lbnQsIHRoaXMuYXR0cmlidXRlLCBsYXRlc3RWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3VhcmRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbGxlY3RzIGFsbCBhdHRyaWJ1dGUgZGVmaW5pdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBvd25lci5cbiAgICAgKiBAcGFyYW0gT3duZXIgLSBUaGUgY2xhc3MgY29uc3RydWN0b3IgdG8gY29sbGVjdCBhdHRyaWJ1dGUgZm9yLlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVMaXN0cyAtIEFueSBleGlzdGluZyBhdHRyaWJ1dGVzIHRvIGNvbGxlY3QgYW5kIG1lcmdlIHdpdGggdGhvc2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBvd25lci5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzdGF0aWMgY29sbGVjdChPd25lciwgLi4uYXR0cmlidXRlTGlzdHMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICBhdHRyaWJ1dGVMaXN0cy5wdXNoKE93bmVyLmF0dHJpYnV0ZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBhdHRyaWJ1dGVMaXN0cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYXR0cmlidXRlTGlzdHNbaV07XG4gICAgICAgICAgICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgamogPSBsaXN0Lmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBsaXN0W2pdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChuZXcgQXR0cmlidXRlRGVmaW5pdGlvbihPd25lciwgY29uZmlnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2gobmV3IEF0dHJpYnV0ZURlZmluaXRpb24oT3duZXIsIGNvbmZpZy5wcm9wZXJ0eSwgY29uZmlnLmF0dHJpYnV0ZSwgY29uZmlnLm1vZGUsIGNvbmZpZy5jb252ZXJ0ZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGF0dHIoY29uZmlnT3JUYXJnZXQsIHByb3ApIHtcbiAgICBsZXQgY29uZmlnO1xuICAgIGZ1bmN0aW9uIGRlY29yYXRvcigkdGFyZ2V0LCAkcHJvcCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIE5vbiBpbnZvY2F0aW9uOlxuICAgICAgICAgICAgLy8gLSBAYXR0clxuICAgICAgICAgICAgLy8gSW52b2NhdGlvbiB3aXRoIG9yIHcvbyBvcHRzOlxuICAgICAgICAgICAgLy8gLSBAYXR0cigpXG4gICAgICAgICAgICAvLyAtIEBhdHRyKHsuLi5vcHRzfSlcbiAgICAgICAgICAgIGNvbmZpZy5wcm9wZXJ0eSA9ICRwcm9wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAkdGFyZ2V0LmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXMgfHxcbiAgICAgICAgICAgICgkdGFyZ2V0LmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXMgPSBbXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChjb25maWcpO1xuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gTm9uIGludm9jYXRpb246XG4gICAgICAgIC8vIC0gQGF0dHJcbiAgICAgICAgY29uZmlnID0ge307XG4gICAgICAgIGRlY29yYXRvcihjb25maWdPclRhcmdldCwgcHJvcCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSW52b2NhdGlvbiB3aXRoIG9yIHcvbyBvcHRzOlxuICAgIC8vIC0gQGF0dHIoKVxuICAgIC8vIC0gQGF0dHIoey4uLm9wdHN9KVxuICAgIGNvbmZpZyA9IGNvbmZpZ09yVGFyZ2V0ID09PSB2b2lkIDAgPyB7fSA6IGNvbmZpZ09yVGFyZ2V0O1xuICAgIHJldHVybiBkZWNvcmF0b3I7XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBQcm9wZXJ0eUNoYW5nZU5vdGlmaWVyIH0gZnJvbSBcIi4uL29ic2VydmF0aW9uL25vdGlmaWVyLmpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0RXhlY3V0aW9uQ29udGV4dCwgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5pbXBvcnQgeyBGQVNURWxlbWVudERlZmluaXRpb24gfSBmcm9tIFwiLi9mYXN0LWRlZmluaXRpb25zLmpzXCI7XG5jb25zdCBzaGFkb3dSb290cyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBkZWZhdWx0RXZlbnRPcHRpb25zID0ge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY29tcG9zZWQ6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbn07XG5mdW5jdGlvbiBnZXRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5zaGFkb3dSb290IHx8IHNoYWRvd1Jvb3RzLmdldChlbGVtZW50KSB8fCBudWxsO1xufVxuLyoqXG4gKiBDb250cm9scyB0aGUgbGlmZWN5Y2xlIGFuZCByZW5kZXJpbmcgb2YgYSBgRkFTVEVsZW1lbnRgLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFByb3BlcnR5Q2hhbmdlTm90aWZpZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBDb250cm9sbGVyIHRvIGNvbnRyb2wgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgY29udHJvbGxlZCBieSB0aGlzIGNvbnRyb2xsZXIuXG4gICAgICogQHBhcmFtIGRlZmluaXRpb24gLSBUaGUgZWxlbWVudCBkZWZpbml0aW9uIG1ldGFkYXRhIHRoYXQgaW5zdHJ1Y3RzIHRoaXNcbiAgICAgKiBjb250cm9sbGVyIGluIGhvdyB0byBoYW5kbGUgcmVuZGVyaW5nIGFuZCBvdGhlciBwbGF0Zm9ybSBpbnRlZ3JhdGlvbnMuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZGVmaW5pdGlvbikge1xuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICAgICAgdGhpcy5ib3VuZE9ic2VydmFibGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSBudWxsO1xuICAgICAgICB0aGlzLm5lZWRzSW5pdGlhbGl6YXRpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0eWxlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGFsbG93cyBPYnNlcnZhYmxlLmdldE5vdGlmaWVyKC4uLikgdG8gcmV0dXJuIHRoZSBDb250cm9sbGVyXG4gICAgICAgICAqIHdoZW4gdGhlIG5vdGlmaWVyIGZvciB0aGUgQ29udHJvbGxlciBpdHNlbGYgaXMgYmVpbmcgcmVxdWVzdGVkLiBUaGVcbiAgICAgICAgICogcmVzdWx0IGlzIHRoYXQgdGhlIE9ic2VydmFibGUgc3lzdGVtIGRvZXMgbm90IG5lZWQgdG8gY3JlYXRlIGEgc2VwYXJhdGVcbiAgICAgICAgICogaW5zdGFuY2Ugb2YgTm90aWZpZXIgZm9yIG9ic2VydmFibGVzIG9uIHRoZSBDb250cm9sbGVyLiBUaGUgY29tcG9uZW50IGFuZFxuICAgICAgICAgKiB0aGUgY29udHJvbGxlciB3aWxsIG5vdyBzaGFyZSB0aGUgc2FtZSBub3RpZmllciwgcmVtb3Zpbmcgb25lLW9iamVjdCBjb25zdHJ1Y3RcbiAgICAgICAgICogcGVyIHdlYiBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiRmYXN0Q29udHJvbGxlciA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmlldyBhc3NvY2lhdGVkIHdpdGggdGhlIGN1c3RvbSBlbGVtZW50LlxuICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgKiBJZiBgbnVsbGAgdGhlbiB0aGUgZWxlbWVudCBpcyBtYW5hZ2luZyBpdHMgb3duIHJlbmRlcmluZy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgICAgIGNvbnN0IHNoYWRvd09wdGlvbnMgPSBkZWZpbml0aW9uLnNoYWRvd09wdGlvbnM7XG4gICAgICAgIGlmIChzaGFkb3dPcHRpb25zICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LmF0dGFjaFNoYWRvdyhzaGFkb3dPcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChzaGFkb3dPcHRpb25zLm1vZGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290cy5zZXQoZWxlbWVudCwgc2hhZG93Um9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FwdHVyZSBhbnkgb2JzZXJ2YWJsZSB2YWx1ZXMgdGhhdCB3ZXJlIHNldCBieSB0aGUgYmluZGluZyBlbmdpbmUgYmVmb3JlXG4gICAgICAgIC8vIHRoZSBicm93c2VyIHVwZ3JhZGVkIHRoZSBlbGVtZW50LiBUaGVuIGRlbGV0ZSB0aGUgcHJvcGVydHkgc2luY2UgaXQgd2lsbFxuICAgICAgICAvLyBzaGFkb3cgdGhlIGdldHRlci9zZXR0ZXIgdGhhdCBpcyByZXF1aXJlZCB0byBtYWtlIHRoZSBvYnNlcnZhYmxlIG9wZXJhdGUuXG4gICAgICAgIC8vIExhdGVyLCBpbiB0aGUgY29ubmVjdCBjYWxsYmFjaywgd2UnbGwgcmUtYXBwbHkgdGhlIHZhbHVlcy5cbiAgICAgICAgY29uc3QgYWNjZXNzb3JzID0gT2JzZXJ2YWJsZS5nZXRBY2Nlc3NvcnMoZWxlbWVudCk7XG4gICAgICAgIGlmIChhY2Nlc3NvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgYm91bmRPYnNlcnZhYmxlcyA9ICh0aGlzLmJvdW5kT2JzZXJ2YWJsZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGFjY2Vzc29ycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gYWNjZXNzb3JzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgYm91bmRPYnNlcnZhYmxlc1twcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgY3VzdG9tIGVsZW1lbnQgaGFzIGJlZW5cbiAgICAgKiBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqL1xuICAgIGdldCBpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgT2JzZXJ2YWJsZS50cmFjayh0aGlzLCBcImlzQ29ubmVjdGVkXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIHNldElzQ29ubmVjdGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdmFsdWU7XG4gICAgICAgIE9ic2VydmFibGUubm90aWZ5KHRoaXMsIFwiaXNDb25uZWN0ZWRcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdGVtcGxhdGUgdXNlZCB0byByZW5kZXIgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgdmFsdWUgY2FuIG9ubHkgYmUgYWNjdXJhdGVseSByZWFkIGFmdGVyIGNvbm5lY3QgYnV0IGNhbiBiZSBzZXQgYXQgYW55IHRpbWUuXG4gICAgICovXG4gICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fdGVtcGxhdGUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLm5lZWRzSW5pdGlhbGl6YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgcHJpbWFyeSBzdHlsZXMgdXNlZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgdmFsdWUgY2FuIG9ubHkgYmUgYWNjdXJhdGVseSByZWFkIGFmdGVyIGNvbm5lY3QgYnV0IGNhbiBiZSBzZXQgYXQgYW55IHRpbWUuXG4gICAgICovXG4gICAgZ2V0IHN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlcztcbiAgICB9XG4gICAgc2V0IHN0eWxlcyh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fc3R5bGVzID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3R5bGVzKHRoaXMuX3N0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3R5bGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5uZWVkc0luaXRpYWxpemF0aW9uICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBzdHlsZXMgdG8gdGhpcyBlbGVtZW50LiBQcm92aWRpbmcgYW4gSFRNTFN0eWxlRWxlbWVudCB3aWxsIGF0dGFjaCB0aGUgZWxlbWVudCBpbnN0YW5jZSB0byB0aGUgc2hhZG93Um9vdC5cbiAgICAgKiBAcGFyYW0gc3R5bGVzIC0gVGhlIHN0eWxlcyB0byBhZGQuXG4gICAgICovXG4gICAgYWRkU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRTaGFkb3dSb290KHRoaXMuZWxlbWVudCkgfHxcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgICAgICBpZiAoc3R5bGVzIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZChzdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFzdHlsZXMuaXNBdHRhY2hlZFRvKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUJlaGF2aW9ycyA9IHN0eWxlcy5iZWhhdmlvcnM7XG4gICAgICAgICAgICBzdHlsZXMuYWRkU3R5bGVzVG8odGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VCZWhhdmlvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJlaGF2aW9ycyhzb3VyY2VCZWhhdmlvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3R5bGVzIGZyb20gdGhpcyBlbGVtZW50LiBQcm92aWRpbmcgYW4gSFRNTFN0eWxlRWxlbWVudCB3aWxsIGRldGFjaCB0aGUgZWxlbWVudCBpbnN0YW5jZSBmcm9tIHRoZSBzaGFkb3dSb290LlxuICAgICAqIEBwYXJhbSBzdHlsZXMgLSB0aGUgc3R5bGVzIHRvIHJlbW92ZS5cbiAgICAgKi9cbiAgICByZW1vdmVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KSB8fFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICAgIGlmIChzdHlsZXMgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHlsZXMuaXNBdHRhY2hlZFRvKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUJlaGF2aW9ycyA9IHN0eWxlcy5iZWhhdmlvcnM7XG4gICAgICAgICAgICBzdHlsZXMucmVtb3ZlU3R5bGVzRnJvbSh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUJlaGF2aW9ycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQmVoYXZpb3JzKHNvdXJjZUJlaGF2aW9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBiZWhhdmlvcnMgdG8gdGhpcyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBiZWhhdmlvcnMgLSBUaGUgYmVoYXZpb3JzIHRvIGFkZC5cbiAgICAgKi9cbiAgICBhZGRCZWhhdmlvcnMoYmVoYXZpb3JzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzIHx8ICh0aGlzLmJlaGF2aW9ycyA9IG5ldyBNYXAoKSk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGJlaGF2aW9ycy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yc1RvQmluZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBiZWhhdmlvciA9IGJlaGF2aW9yc1tpXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRCZWhhdmlvcnMuaGFzKGJlaGF2aW9yKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEJlaGF2aW9ycy5zZXQoYmVoYXZpb3IsIHRhcmdldEJlaGF2aW9ycy5nZXQoYmVoYXZpb3IpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRCZWhhdmlvcnMuc2V0KGJlaGF2aW9yLCAxKTtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcnNUb0JpbmQucHVzaChiZWhhdmlvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWhhdmlvcnNUb0JpbmQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcnNUb0JpbmRbaV0uYmluZChlbGVtZW50LCBkZWZhdWx0RXhlY3V0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBiZWhhdmlvcnMgZnJvbSB0aGlzIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGJlaGF2aW9ycyAtIFRoZSBiZWhhdmlvcnMgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSBmb3JjZSAtIEZvcmNlcyB1bmJpbmRpbmcgb2YgYmVoYXZpb3JzLlxuICAgICAqL1xuICAgIHJlbW92ZUJlaGF2aW9ycyhiZWhhdmlvcnMsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnM7XG4gICAgICAgIGlmICh0YXJnZXRCZWhhdmlvcnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW5ndGggPSBiZWhhdmlvcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBiZWhhdmlvcnNUb1VuYmluZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBiZWhhdmlvciA9IGJlaGF2aW9yc1tpXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRCZWhhdmlvcnMuaGFzKGJlaGF2aW9yKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gdGFyZ2V0QmVoYXZpb3JzLmdldChiZWhhdmlvcikgLSAxO1xuICAgICAgICAgICAgICAgIGNvdW50ID09PSAwIHx8IGZvcmNlXG4gICAgICAgICAgICAgICAgICAgID8gdGFyZ2V0QmVoYXZpb3JzLmRlbGV0ZShiZWhhdmlvcikgJiYgYmVoYXZpb3JzVG9VbmJpbmQucHVzaChiZWhhdmlvcilcbiAgICAgICAgICAgICAgICAgICAgOiB0YXJnZXRCZWhhdmlvcnMuc2V0KGJlaGF2aW9yLCBjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWhhdmlvcnNUb1VuYmluZC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yc1RvVW5iaW5kW2ldLnVuYmluZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW5zIGNvbm5lY3RlZCBsaWZlY3ljbGUgYmVoYXZpb3Igb24gdGhlIGFzc29jaWF0ZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBvbkNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5faXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5uZWVkc0luaXRpYWxpemF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaEluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy52aWV3ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYmluZChlbGVtZW50LCBkZWZhdWx0RXhlY3V0aW9uQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnM7XG4gICAgICAgIGlmIChiZWhhdmlvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2JlaGF2aW9yXSBvZiBiZWhhdmlvcnMpIHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvci5iaW5kKGVsZW1lbnQsIGRlZmF1bHRFeGVjdXRpb25Db250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldElzQ29ubmVjdGVkKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW5zIGRpc2Nvbm5lY3RlZCBsaWZlY3ljbGUgYmVoYXZpb3Igb24gdGhlIGFzc29jaWF0ZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBvbkRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJc0Nvbm5lY3RlZChmYWxzZSk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmICh2aWV3ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2aWV3LnVuYmluZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzO1xuICAgICAgICBpZiAoYmVoYXZpb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZm9yIChjb25zdCBbYmVoYXZpb3JdIG9mIGJlaGF2aW9ycykge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yLnVuYmluZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBhdHRyaWJ1dGUgY2hhbmdlZCBjYWxsYmFjayBmb3IgdGhlIGFzc29jaWF0ZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdGhhdCBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSAtIFRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgICAqIEBwYXJhbSBuZXdWYWx1ZSAtIFRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBvbkF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgY29uc3QgYXR0ckRlZiA9IHRoaXMuZGVmaW5pdGlvbi5hdHRyaWJ1dGVMb29rdXBbbmFtZV07XG4gICAgICAgIGlmIChhdHRyRGVmICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGF0dHJEZWYub25BdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcy5lbGVtZW50LCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSBjdXN0b20gSFRNTCBldmVudC5cbiAgICAgKiBAcGFyYW0gdHlwZSAtIFRoZSB0eXBlIG5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSBkZXRhaWwgLSBUaGUgZXZlbnQgZGV0YWlsIG9iamVjdCB0byBzZW5kIHdpdGggdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIGV2ZW50IG9wdGlvbnMuIEJ5IGRlZmF1bHQgYnViYmxlcyBhbmQgY29tcG9zZWQuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBPbmx5IGVtaXRzIGV2ZW50cyBpZiBjb25uZWN0ZWQuXG4gICAgICovXG4gICAgZW1pdCh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHR5cGUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGRldGFpbCB9LCBkZWZhdWx0RXZlbnRPcHRpb25zKSwgb3B0aW9ucykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZpbmlzaEluaXRpYWxpemF0aW9uKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBjb25zdCBib3VuZE9ic2VydmFibGVzID0gdGhpcy5ib3VuZE9ic2VydmFibGVzO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFueSBvYnNlcnZhYmxlcyB0aGF0IHdlcmUgYm91bmQsIHJlLWFwcGx5IHRoZWlyIHZhbHVlcy5cbiAgICAgICAgaWYgKGJvdW5kT2JzZXJ2YWJsZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhib3VuZE9ic2VydmFibGVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICAgICAgZWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gYm91bmRPYnNlcnZhYmxlc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib3VuZE9ic2VydmFibGVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9uO1xuICAgICAgICAvLyAxLiBUZW1wbGF0ZSBvdmVycmlkZXMgdGFrZSB0b3AgcHJlY2VkZW5jZS5cbiAgICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJlc29sdmVUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIDIuIEFsbG93IGZvciBlbGVtZW50IGluc3RhbmNlIG92ZXJyaWRlcyBuZXh0LlxuICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5lbGVtZW50LnJlc29sdmVUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGVmaW5pdGlvbi50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIDMuIERlZmF1bHQgdG8gdGhlIHN0YXRpYyBkZWZpbml0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBsYXRlID0gZGVmaW5pdGlvbi50ZW1wbGF0ZSB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB0ZW1wbGF0ZSBhZnRlciB0aGUgYWJvdmUgcHJvY2VzcywgcmVuZGVyIGl0LlxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHRlbXBsYXRlLCB0aGVuIHRoZSBlbGVtZW50IGF1dGhvciBoYXMgb3B0ZWQgaW50b1xuICAgICAgICAvLyBjdXN0b20gcmVuZGVyaW5nIGFuZCB0aGV5IHdpbGwgbWFuYWdlZCB0aGUgc2hhZG93IHJvb3QncyBjb250ZW50IHRoZW1zZWx2ZXMuXG4gICAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSh0aGlzLl90ZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMS4gU3R5bGVzIG92ZXJyaWRlcyB0YWtlIHRvcCBwcmVjZWRlbmNlLlxuICAgICAgICBpZiAodGhpcy5fc3R5bGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJlc29sdmVTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAvLyAyLiBBbGxvdyBmb3IgZWxlbWVudCBpbnN0YW5jZSBvdmVycmlkZXMgbmV4dC5cbiAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZXMgPSB0aGlzLmVsZW1lbnQucmVzb2x2ZVN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGVmaW5pdGlvbi5zdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAvLyAzLiBEZWZhdWx0IHRvIHRoZSBzdGF0aWMgZGVmaW5pdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZXMgPSBkZWZpbml0aW9uLnN0eWxlcyB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGhhdmUgc3R5bGVzIGFmdGVyIHRoZSBhYm92ZSBwcm9jZXNzLCBhZGQgdGhlbS5cbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXModGhpcy5fc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5lZWRzSW5pdGlhbGl6YXRpb24gPSBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyVGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgLy8gV2hlbiBnZXR0aW5nIHRoZSBob3N0IHRvIHJlbmRlciB0bywgd2Ugc3RhcnQgYnkgbG9va2luZ1xuICAgICAgICAvLyB1cCB0aGUgc2hhZG93IHJvb3QuIElmIHRoZXJlIGlzbid0IG9uZSwgdGhlbiB0aGF0IG1lYW5zXG4gICAgICAgIC8vIHdlJ3JlIGRvaW5nIGEgTGlnaHQgRE9NIHJlbmRlciB0byB0aGUgZWxlbWVudCdzIGRpcmVjdCBjaGlsZHJlbi5cbiAgICAgICAgY29uc3QgaG9zdCA9IGdldFNoYWRvd1Jvb3QoZWxlbWVudCkgfHwgZWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMudmlldyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhbHJlYWR5IGEgdmlldywgd2UgbmVlZCB0byB1bmJpbmQgYW5kIHJlbW92ZSB0aHJvdWdoIGRpc3Bvc2UuXG4gICAgICAgICAgICB0aGlzLnZpZXcuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5uZWVkc0luaXRpYWxpemF0aW9uKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXMgcHJldmlvdXMgY3VzdG9tIHJlbmRlcmluZywgd2UgbmVlZCB0byBjbGVhciBvdXQgdGhlIGhvc3QuXG4gICAgICAgICAgICBET00ucmVtb3ZlQ2hpbGROb2Rlcyhob3N0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIC8vIElmIGEgbmV3IHRlbXBsYXRlIHdhcyBwcm92aWRlZCwgcmVuZGVyIGl0LlxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGVtcGxhdGUucmVuZGVyKGVsZW1lbnQsIGhvc3QsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgb3IgY3JlYXRlcyBhIGNvbnRyb2xsZXIgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIHJldHVybiB0aGUgY29udHJvbGxlciBmb3IuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBUaGUgc3BlY2lmaWVkIGVsZW1lbnQgbXVzdCBoYXZlIGEge0BsaW5rIEZBU1RFbGVtZW50RGVmaW5pdGlvbn1cbiAgICAgKiByZWdpc3RlcmVkIGVpdGhlciB0aHJvdWdoIHRoZSB1c2Ugb2YgdGhlIHtAbGluayBjdXN0b21FbGVtZW50fVxuICAgICAqIGRlY29yYXRvciBvciBhIGNhbGwgdG8gYEZBU1RFbGVtZW50LmRlZmluZWAuXG4gICAgICovXG4gICAgc3RhdGljIGZvckN1c3RvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gZWxlbWVudC4kZmFzdENvbnRyb2xsZXI7XG4gICAgICAgIGlmIChjb250cm9sbGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBGQVNURWxlbWVudERlZmluaXRpb24uZm9yVHlwZShlbGVtZW50LmNvbnN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBGQVNURWxlbWVudCBkZWZpbml0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGVsZW1lbnQuJGZhc3RDb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoZWxlbWVudCwgZGVmaW5pdGlvbikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZBU1QgfSBmcm9tIFwiLi4vcGxhdGZvcm0uanNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vb2JzZXJ2YXRpb24vb2JzZXJ2YWJsZS5qc1wiO1xuaW1wb3J0IHsgRWxlbWVudFN0eWxlcyB9IGZyb20gXCIuLi9zdHlsZXMvZWxlbWVudC1zdHlsZXMuanNcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZURlZmluaXRpb24gfSBmcm9tIFwiLi9hdHRyaWJ1dGVzLmpzXCI7XG5jb25zdCBkZWZhdWx0U2hhZG93T3B0aW9ucyA9IHsgbW9kZTogXCJvcGVuXCIgfTtcbmNvbnN0IGRlZmF1bHRFbGVtZW50T3B0aW9ucyA9IHt9O1xuY29uc3QgZmFzdFJlZ2lzdHJ5ID0gRkFTVC5nZXRCeUlkKDQgLyogZWxlbWVudFJlZ2lzdHJ5ICovLCAoKSA9PiB7XG4gICAgY29uc3QgdHlwZVRvRGVmaW5pdGlvbiA9IG5ldyBNYXAoKTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIHJlZ2lzdGVyKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlVG9EZWZpbml0aW9uLmhhcyhkZWZpbml0aW9uLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHlwZVRvRGVmaW5pdGlvbi5zZXQoZGVmaW5pdGlvbi50eXBlLCBkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRCeVR5cGUoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZVRvRGVmaW5pdGlvbi5nZXQoa2V5KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn0pO1xuLyoqXG4gKiBEZWZpbmVzIG1ldGFkYXRhIGZvciBhIEZBU1RFbGVtZW50LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgRkFTVEVsZW1lbnREZWZpbml0aW9uIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZBU1RFbGVtZW50RGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0gdHlwZSAtIFRoZSB0eXBlIHRoaXMgZGVmaW5pdGlvbiBpcyBiZWluZyBjcmVhdGVkIGZvci5cbiAgICAgKiBAcGFyYW0gbmFtZU9yQ29uZmlnIC0gVGhlIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gZGVmaW5lIG9yIGEgY29uZmlnIG9iamVjdFxuICAgICAqIHRoYXQgZGVzY3JpYmVzIHRoZSBlbGVtZW50IHRvIGRlZmluZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lT3JDb25maWcgPSB0eXBlLmRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lT3JDb25maWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG5hbWVPckNvbmZpZyA9IHsgbmFtZTogbmFtZU9yQ29uZmlnIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZU9yQ29uZmlnLm5hbWU7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBuYW1lT3JDb25maWcudGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBBdHRyaWJ1dGVEZWZpbml0aW9uLmNvbGxlY3QodHlwZSwgbmFtZU9yQ29uZmlnLmF0dHJpYnV0ZXMpO1xuICAgICAgICBjb25zdCBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBuZXcgQXJyYXkoYXR0cmlidXRlcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUxvb2t1cCA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXAgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIG9ic2VydmVkQXR0cmlidXRlc1tpXSA9IGN1cnJlbnQuYXR0cmlidXRlO1xuICAgICAgICAgICAgcHJvcGVydHlMb29rdXBbY3VycmVudC5uYW1lXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBhdHRyaWJ1dGVMb29rdXBbY3VycmVudC5hdHRyaWJ1dGVdID0gY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLm9ic2VydmVkQXR0cmlidXRlcyA9IG9ic2VydmVkQXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxvb2t1cCA9IHByb3BlcnR5TG9va3VwO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvb2t1cCA9IGF0dHJpYnV0ZUxvb2t1cDtcbiAgICAgICAgdGhpcy5zaGFkb3dPcHRpb25zID1cbiAgICAgICAgICAgIG5hbWVPckNvbmZpZy5zaGFkb3dPcHRpb25zID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRTaGFkb3dPcHRpb25zXG4gICAgICAgICAgICAgICAgOiBuYW1lT3JDb25maWcuc2hhZG93T3B0aW9ucyA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNoYWRvd09wdGlvbnMpLCBuYW1lT3JDb25maWcuc2hhZG93T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWxlbWVudE9wdGlvbnMgPVxuICAgICAgICAgICAgbmFtZU9yQ29uZmlnLmVsZW1lbnRPcHRpb25zID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRFbGVtZW50T3B0aW9uc1xuICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RWxlbWVudE9wdGlvbnMpLCBuYW1lT3JDb25maWcuZWxlbWVudE9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0eWxlcyA9XG4gICAgICAgICAgICBuYW1lT3JDb25maWcuc3R5bGVzID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShuYW1lT3JDb25maWcuc3R5bGVzKVxuICAgICAgICAgICAgICAgICAgICA/IEVsZW1lbnRTdHlsZXMuY3JlYXRlKG5hbWVPckNvbmZpZy5zdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgIDogbmFtZU9yQ29uZmlnLnN0eWxlcyBpbnN0YW5jZW9mIEVsZW1lbnRTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmFtZU9yQ29uZmlnLnN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBFbGVtZW50U3R5bGVzLmNyZWF0ZShbbmFtZU9yQ29uZmlnLnN0eWxlc10pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhpcyBlbGVtZW50IGhhcyBiZWVuIGRlZmluZWQgaW4gYXQgbGVhc3Qgb25lIHJlZ2lzdHJ5LlxuICAgICAqL1xuICAgIGdldCBpc0RlZmluZWQoKSB7XG4gICAgICAgIHJldHVybiAhIWZhc3RSZWdpc3RyeS5nZXRCeVR5cGUodGhpcy50eXBlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIGN1c3RvbSBlbGVtZW50IGJhc2VkIG9uIHRoaXMgZGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0gcmVnaXN0cnkgLSBUaGUgZWxlbWVudCByZWdpc3RyeSB0byBkZWZpbmUgdGhlIGVsZW1lbnQgaW4uXG4gICAgICovXG4gICAgZGVmaW5lKHJlZ2lzdHJ5ID0gY3VzdG9tRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgaWYgKGZhc3RSZWdpc3RyeS5yZWdpc3Rlcih0aGlzKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlcztcbiAgICAgICAgICAgIGNvbnN0IHByb3RvID0gdHlwZS5wcm90b3R5cGU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLmRlZmluZVByb3BlcnR5KHByb3RvLCBhdHRyaWJ1dGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJvYnNlcnZlZEF0dHJpYnV0ZXNcIiwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLm9ic2VydmVkQXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWdpc3RyeS5nZXQodGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgcmVnaXN0cnkuZGVmaW5lKHRoaXMubmFtZSwgdHlwZSwgdGhpcy5lbGVtZW50T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuLyoqXG4gKiBHZXRzIHRoZSBlbGVtZW50IGRlZmluaXRpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB0eXBlIC0gVGhlIGN1c3RvbSBlbGVtZW50IHR5cGUgdG8gcmV0cmlldmUgdGhlIGRlZmluaXRpb24gZm9yLlxuICovXG5GQVNURWxlbWVudERlZmluaXRpb24uZm9yVHlwZSA9IGZhc3RSZWdpc3RyeS5nZXRCeVR5cGU7XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgRkFTVEVsZW1lbnREZWZpbml0aW9uLCB9IGZyb20gXCIuL2Zhc3QtZGVmaW5pdGlvbnMuanNcIjtcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZUZBU1RFbGVtZW50KEJhc2VUeXBlKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZVR5cGUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIENvbnRyb2xsZXIuZm9yQ3VzdG9tRWxlbWVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAkZW1pdCh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRmYXN0Q29udHJvbGxlci5lbWl0KHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICB0aGlzLiRmYXN0Q29udHJvbGxlci5vbkNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICB0aGlzLiRmYXN0Q29udHJvbGxlci5vbkRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kZmFzdENvbnRyb2xsZXIub25BdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEEgbWluaW1hbCBiYXNlIGNsYXNzIGZvciBGQVNURWxlbWVudHMgdGhhdCBhbHNvIHByb3ZpZGVzXG4gKiBzdGF0aWMgaGVscGVycyBmb3Igd29ya2luZyB3aXRoIEZBU1RFbGVtZW50cy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEZBU1RFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihjcmVhdGVGQVNURWxlbWVudChIVE1MRWxlbWVudCksIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEZBU1RFbGVtZW50IGJhc2UgY2xhc3MgaW5oZXJpdGVkIGZyb20gdGhlXG4gICAgICogcHJvdmlkZWQgYmFzZSB0eXBlLlxuICAgICAqIEBwYXJhbSBCYXNlVHlwZSAtIFRoZSBiYXNlIGVsZW1lbnQgdHlwZSB0byBpbmhlcml0IGZyb20uXG4gICAgICovXG4gICAgZnJvbShCYXNlVHlwZSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRkFTVEVsZW1lbnQoQmFzZVR5cGUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIHBsYXRmb3JtIGN1c3RvbSBlbGVtZW50IGJhc2VkIG9uIHRoZSBwcm92aWRlZCB0eXBlIGFuZCBkZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB0eXBlIC0gVGhlIGN1c3RvbSBlbGVtZW50IHR5cGUgdG8gZGVmaW5lLlxuICAgICAqIEBwYXJhbSBuYW1lT3JEZWYgLSBUaGUgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBkZWZpbmUgb3IgYSBkZWZpbml0aW9uIG9iamVjdFxuICAgICAqIHRoYXQgZGVzY3JpYmVzIHRoZSBlbGVtZW50IHRvIGRlZmluZS5cbiAgICAgKi9cbiAgICBkZWZpbmUodHlwZSwgbmFtZU9yRGVmKSB7XG4gICAgICAgIHJldHVybiBuZXcgRkFTVEVsZW1lbnREZWZpbml0aW9uKHR5cGUsIG5hbWVPckRlZikuZGVmaW5lKCkudHlwZTtcbiAgICB9LFxufSk7XG4vKipcbiAqIERlY29yYXRvcjogRGVmaW5lcyBhIHBsYXRmb3JtIGN1c3RvbSBlbGVtZW50IGJhc2VkIG9uIGBGQVNURWxlbWVudGAuXG4gKiBAcGFyYW0gbmFtZU9yRGVmIC0gVGhlIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gZGVmaW5lIG9yIGEgZGVmaW5pdGlvbiBvYmplY3RcbiAqIHRoYXQgZGVzY3JpYmVzIHRoZSBlbGVtZW50IHRvIGRlZmluZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUVsZW1lbnQobmFtZU9yRGVmKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBuZXcgRkFTVEVsZW1lbnREZWZpbml0aW9uKHR5cGUsIG5hbWVPckRlZikuZGVmaW5lKCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7ICRnbG9iYWwgfSBmcm9tIFwiLi9wbGF0Zm9ybS5qc1wiO1xuY29uc3QgdXBkYXRlUXVldWUgPSAkZ2xvYmFsLkZBU1QuZ2V0QnlJZCgxIC8qIHVwZGF0ZVF1ZXVlICovLCAoKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBwZW5kaW5nRXJyb3JzID0gW107XG4gICAgZnVuY3Rpb24gdGhyb3dGaXJzdEVycm9yKCkge1xuICAgICAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IHBlbmRpbmdFcnJvcnMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cnlSdW5UYXNrKHRhc2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRhc2suY2FsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcGVuZGluZ0Vycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhyb3dGaXJzdEVycm9yLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICBjb25zdCBjYXBhY2l0eSA9IDEwMjQ7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChpbmRleCA8IHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJ5UnVuVGFzayh0YXNrc1tpbmRleF0pO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIC8vIFByZXZlbnQgbGVha2luZyBtZW1vcnkgZm9yIGxvbmcgY2hhaW5zIG9mIHJlY3Vyc2l2ZSBjYWxscyB0byBgRE9NLnF1ZXVlVXBkYXRlYC5cbiAgICAgICAgICAgIC8vIElmIHdlIGNhbGwgYERPTS5xdWV1ZVVwZGF0ZWAgd2l0aGluIGEgdGFzayBzY2hlZHVsZWQgYnkgYERPTS5xdWV1ZVVwZGF0ZWAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgICAgICAvLyBncm93LCBidXQgdG8gYXZvaWQgYW4gTyhuKSB3YWxrIGZvciBldmVyeSB0YXNrIHdlIGV4ZWN1dGUsIHdlIGRvbid0XG4gICAgICAgICAgICAvLyBzaGlmdCB0YXNrcyBvZmYgdGhlIHF1ZXVlIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gTWFudWFsbHkgc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgaW5kZXggYmFjayB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNjYW4gPSAwLCBuZXdMZW5ndGggPSB0YXNrcy5sZW5ndGggLSBpbmRleDsgc2NhbiA8IG5ld0xlbmd0aDsgc2NhbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzW3NjYW5dID0gdGFza3Nbc2NhbiArIGluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFza3MubGVuZ3RoIC09IGluZGV4O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YXNrcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKGNhbGxhYmxlKSB7XG4gICAgICAgIGlmICh0YXNrcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAkZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrcy5wdXNoKGNhbGxhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICBlbnF1ZXVlLFxuICAgICAgICBwcm9jZXNzLFxuICAgIH0pO1xufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3QgZmFzdEhUTUxQb2xpY3kgPSAkZ2xvYmFsLnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koXCJmYXN0LWh0bWxcIiwge1xuICAgIGNyZWF0ZUhUTUw6IGh0bWwgPT4gaHRtbCxcbn0pO1xuLyogZXNsaW50LWVuYWJsZSAqL1xubGV0IGh0bWxQb2xpY3kgPSBmYXN0SFRNTFBvbGljeTtcbmNvbnN0IG1hcmtlciA9IGBmYXN0LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpfWA7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgX2ludGVycG9sYXRpb25TdGFydCA9IGAke21hcmtlcn17YDtcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBfaW50ZXJwb2xhdGlvbkVuZCA9IGB9JHttYXJrZXJ9YDtcbi8qKlxuICogQ29tbW9uIERPTSBBUElzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgRE9NID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIERPTSBzdXBwb3J0cyB0aGUgYWRvcHRlZFN0eWxlU2hlZXRzIGZlYXR1cmUuXG4gICAgICovXG4gICAgc3VwcG9ydHNBZG9wdGVkU3R5bGVTaGVldHM6IEFycmF5LmlzQXJyYXkoZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzKSAmJlxuICAgICAgICBcInJlcGxhY2VcIiBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBIVE1MIHRydXN0ZWQgdHlwZXMgcG9saWN5IHVzZWQgYnkgdGhlIHRlbXBsYXRpbmcgZW5naW5lLlxuICAgICAqIEBwYXJhbSBwb2xpY3kgLSBUaGUgcG9saWN5IHRvIHNldCBmb3IgSFRNTC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgQVBJIGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlLCBmb3Igc2VjdXJpdHkgcmVhc29ucy4gSXQgc2hvdWxkIGJlXG4gICAgICogY2FsbGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiBkZXZlbG9wZXIgYXQgdGhlIHN0YXJ0IG9mIHRoZWlyIHByb2dyYW0uXG4gICAgICovXG4gICAgc2V0SFRNTFBvbGljeShwb2xpY3kpIHtcbiAgICAgICAgaWYgKGh0bWxQb2xpY3kgIT09IGZhc3RIVE1MUG9saWN5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgSFRNTCBwb2xpY3kgY2FuIG9ubHkgYmUgc2V0IG9uY2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGh0bWxQb2xpY3kgPSBwb2xpY3k7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUdXJucyBhIHN0cmluZyBpbnRvIHRydXN0ZWQgSFRNTCB1c2luZyB0aGUgY29uZmlndXJlZCB0cnVzdGVkIHR5cGVzIHBvbGljeS5cbiAgICAgKiBAcGFyYW0gaHRtbCAtIFRoZSBzdHJpbmcgdG8gdHVybiBpbnRvIHRydXN0ZWQgSFRNTC5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFVzZWQgaW50ZXJuYWxseSBieSB0aGUgdGVtcGxhdGUgZW5naW5lIHdoZW4gY3JlYXRpbmcgdGVtcGxhdGVzXG4gICAgICogYW5kIHNldHRpbmcgaW5uZXJIVE1MLlxuICAgICAqL1xuICAgIGNyZWF0ZUhUTUwoaHRtbCkge1xuICAgICAgICByZXR1cm4gaHRtbFBvbGljeS5jcmVhdGVIVE1MKGh0bWwpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgcHJvdmlkZWQgbm9kZSBpcyBhIHRlbXBsYXRlIG1hcmtlciB1c2VkIGJ5IHRoZSBydW50aW1lLlxuICAgICAqIEBwYXJhbSBub2RlIC0gVGhlIG5vZGUgdG8gdGVzdC5cbiAgICAgKi9cbiAgICBpc01hcmtlcihub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDggJiYgbm9kZS5kYXRhLnN0YXJ0c1dpdGgobWFya2VyKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgbWFya2VyIG5vZGUsIGV4dHJhY3QgdGhlIHtAbGluayBIVE1MRGlyZWN0aXZlfSBpbmRleCBmcm9tIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBtYXJrZXIgbm9kZSB0byBleHRyYWN0IHRoZSBpbmRleCBmcm9tLlxuICAgICAqL1xuICAgIGV4dHJhY3REaXJlY3RpdmVJbmRleEZyb21NYXJrZXIobm9kZSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobm9kZS5kYXRhLnJlcGxhY2UoYCR7bWFya2VyfTpgLCBcIlwiKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgc3RyaW5nIHN1aXRhYmxlIGZvciBtYXJraW5nIG91dCBhIGxvY2F0aW9uICp3aXRoaW4qXG4gICAgICogYW4gYXR0cmlidXRlIHZhbHVlIG9yIEhUTUwgY29udGVudC5cbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgZGlyZWN0aXZlIGluZGV4IHRvIGNyZWF0ZSB0aGUgcGxhY2Vob2xkZXIgZm9yLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IGJpbmRpbmcgZGlyZWN0aXZlcy5cbiAgICAgKi9cbiAgICBjcmVhdGVJbnRlcnBvbGF0aW9uUGxhY2Vob2xkZXIoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGAke19pbnRlcnBvbGF0aW9uU3RhcnR9JHtpbmRleH0ke19pbnRlcnBvbGF0aW9uRW5kfWA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgdGhhdCBtYW5pZmVzdHMgaXRzZWxmIGFzIGFuIGF0dHJpYnV0ZSBvbiBhblxuICAgICAqIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgZGlyZWN0aXZlIGluZGV4IHRvIGNyZWF0ZSB0aGUgcGxhY2Vob2xkZXIgZm9yLlxuICAgICAqIEByZW1hcmtzXG4gICAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IGF0dHJpYnV0ZSBkaXJlY3RpdmVzIHN1Y2ggYXMgYHJlZmAsIGBzbG90dGVkYCwgYW5kIGBjaGlsZHJlbmAuXG4gICAgICovXG4gICAgY3JlYXRlQ3VzdG9tQXR0cmlidXRlUGxhY2Vob2xkZXIoYXR0cmlidXRlTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGAke2F0dHJpYnV0ZU5hbWV9PVwiJHt0aGlzLmNyZWF0ZUludGVycG9sYXRpb25QbGFjZWhvbGRlcihpbmRleCl9XCJgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBsYWNlaG9sZGVyIHRoYXQgbWFuaWZlc3RzIGl0c2VsZiBhcyBhIG1hcmtlciB3aXRoaW4gdGhlIERPTSBzdHJ1Y3R1cmUuXG4gICAgICogQHBhcmFtIGluZGV4IC0gVGhlIGRpcmVjdGl2ZSBpbmRleCB0byBjcmVhdGUgdGhlIHBsYWNlaG9sZGVyIGZvci5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFVzZWQgaW50ZXJuYWxseSBieSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMgc3VjaCBhcyBgcmVwZWF0YC5cbiAgICAgKi9cbiAgICBjcmVhdGVCbG9ja1BsYWNlaG9sZGVyKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBgPCEtLSR7bWFya2VyfToke2luZGV4fS0tPmA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgRE9NIHVwZGF0ZSB3b3JrIGluIHRoZSBuZXh0IGFzeW5jIGJhdGNoLlxuICAgICAqIEBwYXJhbSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSBmdW5jdGlvbiBvciBvYmplY3QgdG8gcXVldWUuXG4gICAgICovXG4gICAgcXVldWVVcGRhdGU6IHVwZGF0ZVF1ZXVlLmVucXVldWUsXG4gICAgLyoqXG4gICAgICogSW1tZWRpYXRlbHkgcHJvY2Vzc2VzIGFsbCB3b3JrIHByZXZpb3VzbHkgc2NoZWR1bGVkXG4gICAgICogdGhyb3VnaCBxdWV1ZVVwZGF0ZS5cbiAgICAgKiBAcmVtYXJrc1xuICAgICAqIFRoaXMgYWxzbyBmb3JjZXMgbmV4dFVwZGF0ZSBwcm9taXNlc1xuICAgICAqIHRvIHJlc29sdmUuXG4gICAgICovXG4gICAgcHJvY2Vzc1VwZGF0ZXM6IHVwZGF0ZVF1ZXVlLnByb2Nlc3MsXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgd2l0aCB0aGUgbmV4dCBET00gdXBkYXRlLlxuICAgICAqL1xuICAgIG5leHRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSh1cGRhdGVRdWV1ZS5lbnF1ZXVlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gYXR0cmlidXRlIHZhbHVlIG9uIGFuIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBzZXQgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBvbi5cbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSAtIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXQuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgdG8gc2V0LlxuICAgICAqIEByZW1hcmtzXG4gICAgICogSWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLCBvdGhlcndpc2VcbiAgICAgKiBpdCBpcyBzZXQgdG8gdGhlIHByb3ZpZGVkIHZhbHVlIHVzaW5nIHRoZSBzdGFuZGFyZCBgc2V0QXR0cmlidXRlYCBBUEkuXG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGJvb2xlYW4gYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gc2V0IHRoZSBib29sZWFuIGF0dHJpYnV0ZSB2YWx1ZSBvbi5cbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSAtIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXQuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgdG8gc2V0LlxuICAgICAqIEByZW1hcmtzXG4gICAgICogSWYgdGhlIHZhbHVlIGlzIHRydWUsIHRoZSBhdHRyaWJ1dGUgaXMgYWRkZWQ7IG90aGVyd2lzZSBpdCBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIHNldEJvb2xlYW5BdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAgID8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgXCJcIilcbiAgICAgICAgICAgIDogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgY2hpbGQgbm9kZXMgb2YgdGhlIHByb3ZpZGVkIHBhcmVudCBub2RlLlxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBUaGUgbm9kZSB0byByZW1vdmUgdGhlIGNoaWxkcmVuIGZyb20uXG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDsgY2hpbGQgIT09IG51bGw7IGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBUcmVlV2Fsa2VyIGNvbmZpZ3VyZWQgdG8gd2FsayBhIHRlbXBsYXRlIGZyYWdtZW50LlxuICAgICAqIEBwYXJhbSBmcmFnbWVudCAtIFRoZSBmcmFnbWVudCB0byB3YWxrLlxuICAgICAqL1xuICAgIGNyZWF0ZVRlbXBsYXRlV2Fsa2VyKGZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGZyYWdtZW50LCAxMzMsIC8vIGVsZW1lbnQsIHRleHQsIGNvbW1lbnRcbiAgICAgICAgbnVsbCwgZmFsc2UpO1xuICAgIH0sXG59KTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL3BsYXRmb3JtLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90ZW1wbGF0aW5nL3RlbXBsYXRlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL2Zhc3QtZWxlbWVudC5qc1wiO1xuZXhwb3J0IHsgRkFTVEVsZW1lbnREZWZpbml0aW9uLCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmFzdC1kZWZpbml0aW9ucy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9hdHRyaWJ1dGVzLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRyb2xsZXIuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RlbXBsYXRpbmcvY29tcGlsZXIuanNcIjtcbmV4cG9ydCB7IEVsZW1lbnRTdHlsZXMsIH0gZnJvbSBcIi4vc3R5bGVzL2VsZW1lbnQtc3R5bGVzLmpzXCI7XG5leHBvcnQgeyBjc3MsIGNzc1BhcnRpYWwgfSBmcm9tIFwiLi9zdHlsZXMvY3NzLmpzXCI7XG5leHBvcnQgeyBDU1NEaXJlY3RpdmUgfSBmcm9tIFwiLi9zdHlsZXMvY3NzLWRpcmVjdGl2ZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGVtcGxhdGluZy92aWV3LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9vYnNlcnZhdGlvbi9ub3RpZmllci5qc1wiO1xuZXhwb3J0IHsgZW5hYmxlQXJyYXlPYnNlcnZhdGlvbiB9IGZyb20gXCIuL29ic2VydmF0aW9uL2FycmF5LW9ic2VydmVyLmpzXCI7XG5leHBvcnQgeyBET00gfSBmcm9tIFwiLi9kb20uanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RlbXBsYXRpbmcvYmluZGluZy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGVtcGxhdGluZy9odG1sLWRpcmVjdGl2ZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGVtcGxhdGluZy9yZWYuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RlbXBsYXRpbmcvd2hlbi5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGVtcGxhdGluZy9yZXBlYXQuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RlbXBsYXRpbmcvc2xvdHRlZC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGVtcGxhdGluZy9jaGlsZHJlbi5qc1wiO1xuZXhwb3J0IHsgZWxlbWVudHMsIH0gZnJvbSBcIi4vdGVtcGxhdGluZy9ub2RlLW9ic2VydmF0aW9uLmpzXCI7XG4iLCJpbXBvcnQgeyBlbXB0eUFycmF5IH0gZnJvbSBcIi4uL3BsYXRmb3JtLmpzXCI7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gbmV3U3BsaWNlKGluZGV4LCByZW1vdmVkLCBhZGRlZENvdW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICByZW1vdmVkOiByZW1vdmVkLFxuICAgICAgICBhZGRlZENvdW50OiBhZGRlZENvdW50LFxuICAgIH07XG59XG5jb25zdCBFRElUX0xFQVZFID0gMDtcbmNvbnN0IEVESVRfVVBEQVRFID0gMTtcbmNvbnN0IEVESVRfQUREID0gMjtcbmNvbnN0IEVESVRfREVMRVRFID0gMztcbi8vIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgKmJhc2VkKiBvbiB0aGUgY29tcHV0YXRpb24gb2YgdGhlIExldmVuc2h0ZWluXG4vLyBcImVkaXRcIiBkaXN0YW5jZS4gVGhlIG9uZSBjaGFuZ2UgaXMgdGhhdCBcInVwZGF0ZXNcIiBhcmUgdHJlYXRlZCBhcyB0d29cbi8vIGVkaXRzIC0gbm90IG9uZS4gV2l0aCBBcnJheSBzcGxpY2VzLCBhbiB1cGRhdGUgaXMgcmVhbGx5IGEgZGVsZXRlXG4vLyBmb2xsb3dlZCBieSBhbiBhZGQuIEJ5IHJldGFpbmluZyB0aGlzLCB3ZSBvcHRpbWl6ZSBmb3IgXCJrZWVwaW5nXCIgdGhlXG4vLyBtYXhpbXVtIGFycmF5IGl0ZW1zIGluIHRoZSBvcmlnaW5hbCBhcnJheS4gRm9yIGV4YW1wbGU6XG4vL1xuLy8gICAneHh4eDEyMycgLT4gJzEyM3l5eXknXG4vL1xuLy8gV2l0aCAxLWVkaXQgdXBkYXRlcywgdGhlIHNob3J0ZXN0IHBhdGggd291bGQgYmUganVzdCB0byB1cGRhdGUgYWxsIHNldmVuXG4vLyBjaGFyYWN0ZXJzLiBXaXRoIDItZWRpdCB1cGRhdGVzLCB3ZSBkZWxldGUgNCwgbGVhdmUgMywgYW5kIGFkZCA0LiBUaGlzXG4vLyBsZWF2ZXMgdGhlIHN1YnN0cmluZyAnMTIzJyBpbnRhY3QuXG5mdW5jdGlvbiBjYWxjRWRpdERpc3RhbmNlcyhjdXJyZW50LCBjdXJyZW50U3RhcnQsIGN1cnJlbnRFbmQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCkge1xuICAgIC8vIFwiRGVsZXRpb25cIiBjb2x1bW5zXG4gICAgY29uc3Qgcm93Q291bnQgPSBvbGRFbmQgLSBvbGRTdGFydCArIDE7XG4gICAgY29uc3QgY29sdW1uQ291bnQgPSBjdXJyZW50RW5kIC0gY3VycmVudFN0YXJ0ICsgMTtcbiAgICBjb25zdCBkaXN0YW5jZXMgPSBuZXcgQXJyYXkocm93Q291bnQpO1xuICAgIGxldCBub3J0aDtcbiAgICBsZXQgd2VzdDtcbiAgICAvLyBcIkFkZGl0aW9uXCIgcm93cy4gSW5pdGlhbGl6ZSBudWxsIGNvbHVtbi5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyArK2kpIHtcbiAgICAgICAgZGlzdGFuY2VzW2ldID0gbmV3IEFycmF5KGNvbHVtbkNvdW50KTtcbiAgICAgICAgZGlzdGFuY2VzW2ldWzBdID0gaTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBudWxsIHJvd1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uQ291bnQ7ICsraikge1xuICAgICAgICBkaXN0YW5jZXNbMF1bal0gPSBqO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJvd0NvdW50OyArK2kpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBjb2x1bW5Db3VudDsgKytqKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFtjdXJyZW50U3RhcnQgKyBqIC0gMV0gPT09IG9sZFtvbGRTdGFydCArIGkgLSAxXSkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlc1tpXVtqXSA9IGRpc3RhbmNlc1tpIC0gMV1baiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9ydGggPSBkaXN0YW5jZXNbaSAtIDFdW2pdICsgMTtcbiAgICAgICAgICAgICAgICB3ZXN0ID0gZGlzdGFuY2VzW2ldW2ogLSAxXSArIDE7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2ldW2pdID0gbm9ydGggPCB3ZXN0ID8gbm9ydGggOiB3ZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaXN0YW5jZXM7XG59XG4vLyBUaGlzIHN0YXJ0cyBhdCB0aGUgZmluYWwgd2VpZ2h0LCBhbmQgd2Fsa3MgXCJiYWNrd2FyZFwiIGJ5IGZpbmRpbmdcbi8vIHRoZSBtaW5pbXVtIHByZXZpb3VzIHdlaWdodCByZWN1cnNpdmVseSB1bnRpbCB0aGUgb3JpZ2luIG9mIHRoZSB3ZWlnaHRcbi8vIG1hdHJpeC5cbmZ1bmN0aW9uIHNwbGljZU9wZXJhdGlvbnNGcm9tRWRpdERpc3RhbmNlcyhkaXN0YW5jZXMpIHtcbiAgICBsZXQgaSA9IGRpc3RhbmNlcy5sZW5ndGggLSAxO1xuICAgIGxldCBqID0gZGlzdGFuY2VzWzBdLmxlbmd0aCAtIDE7XG4gICAgbGV0IGN1cnJlbnQgPSBkaXN0YW5jZXNbaV1bal07XG4gICAgY29uc3QgZWRpdHMgPSBbXTtcbiAgICB3aGlsZSAoaSA+IDAgfHwgaiA+IDApIHtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGVkaXRzLnB1c2goRURJVF9BREQpO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICAgIGVkaXRzLnB1c2goRURJVF9ERUxFVEUpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm9ydGhXZXN0ID0gZGlzdGFuY2VzW2kgLSAxXVtqIC0gMV07XG4gICAgICAgIGNvbnN0IHdlc3QgPSBkaXN0YW5jZXNbaSAtIDFdW2pdO1xuICAgICAgICBjb25zdCBub3J0aCA9IGRpc3RhbmNlc1tpXVtqIC0gMV07XG4gICAgICAgIGxldCBtaW47XG4gICAgICAgIGlmICh3ZXN0IDwgbm9ydGgpIHtcbiAgICAgICAgICAgIG1pbiA9IHdlc3QgPCBub3J0aFdlc3QgPyB3ZXN0IDogbm9ydGhXZXN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWluID0gbm9ydGggPCBub3J0aFdlc3QgPyBub3J0aCA6IG5vcnRoV2VzdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWluID09PSBub3J0aFdlc3QpIHtcbiAgICAgICAgICAgIGlmIChub3J0aFdlc3QgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBlZGl0cy5wdXNoKEVESVRfTEVBVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWRpdHMucHVzaChFRElUX1VQREFURSk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG5vcnRoV2VzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtaW4gPT09IHdlc3QpIHtcbiAgICAgICAgICAgIGVkaXRzLnB1c2goRURJVF9ERUxFVEUpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgY3VycmVudCA9IHdlc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlZGl0cy5wdXNoKEVESVRfQUREKTtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBub3J0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZGl0cy5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIGVkaXRzO1xufVxuZnVuY3Rpb24gc2hhcmVkUHJlZml4KGN1cnJlbnQsIG9sZCwgc2VhcmNoTGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hMZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoY3VycmVudFtpXSAhPT0gb2xkW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VhcmNoTGVuZ3RoO1xufVxuZnVuY3Rpb24gc2hhcmVkU3VmZml4KGN1cnJlbnQsIG9sZCwgc2VhcmNoTGVuZ3RoKSB7XG4gICAgbGV0IGluZGV4MSA9IGN1cnJlbnQubGVuZ3RoO1xuICAgIGxldCBpbmRleDIgPSBvbGQubGVuZ3RoO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgd2hpbGUgKGNvdW50IDwgc2VhcmNoTGVuZ3RoICYmIGN1cnJlbnRbLS1pbmRleDFdID09PSBvbGRbLS1pbmRleDJdKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbn1cbmZ1bmN0aW9uIGludGVyc2VjdChzdGFydDEsIGVuZDEsIHN0YXJ0MiwgZW5kMikge1xuICAgIC8vIERpc2pvaW50XG4gICAgaWYgKGVuZDEgPCBzdGFydDIgfHwgZW5kMiA8IHN0YXJ0MSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIC8vIEFkamFjZW50XG4gICAgaWYgKGVuZDEgPT09IHN0YXJ0MiB8fCBlbmQyID09PSBzdGFydDEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIC8vIE5vbi16ZXJvIGludGVyc2VjdCwgc3BhbjEgZmlyc3RcbiAgICBpZiAoc3RhcnQxIDwgc3RhcnQyKSB7XG4gICAgICAgIGlmIChlbmQxIDwgZW5kMikge1xuICAgICAgICAgICAgcmV0dXJuIGVuZDEgLSBzdGFydDI7IC8vIE92ZXJsYXBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5kMiAtIHN0YXJ0MjsgLy8gQ29udGFpbmVkXG4gICAgfVxuICAgIC8vIE5vbi16ZXJvIGludGVyc2VjdCwgc3BhbjIgZmlyc3RcbiAgICBpZiAoZW5kMiA8IGVuZDEpIHtcbiAgICAgICAgcmV0dXJuIGVuZDIgLSBzdGFydDE7IC8vIE92ZXJsYXBcbiAgICB9XG4gICAgcmV0dXJuIGVuZDEgLSBzdGFydDE7IC8vIENvbnRhaW5lZFxufVxuLyoqXG4gKiBTcGxpY2UgUHJvamVjdGlvbiBmdW5jdGlvbnM6XG4gKlxuICogQSBzcGxpY2UgbWFwIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgaG93IGEgcHJldmlvdXMgYXJyYXkgb2YgaXRlbXNcbiAqIHdhcyB0cmFuc2Zvcm1lZCBpbnRvIGEgbmV3IGFycmF5IG9mIGl0ZW1zLiBDb25jZXB0dWFsbHkgaXQgaXMgYSBsaXN0IG9mXG4gKiB0dXBsZXMgb2ZcbiAqXG4gKiAgIDxpbmRleCwgcmVtb3ZlZCwgYWRkZWRDb3VudD5cbiAqXG4gKiB3aGljaCBhcmUga2VwdCBpbiBhc2NlbmRpbmcgaW5kZXggb3JkZXIgb2YuIFRoZSB0dXBsZSByZXByZXNlbnRzIHRoYXQgYXRcbiAqIHRoZSB8aW5kZXh8LCB8cmVtb3ZlZHwgc2VxdWVuY2Ugb2YgaXRlbXMgd2VyZSByZW1vdmVkLCBhbmQgY291bnRpbmcgZm9yd2FyZFxuICogZnJvbSB8aW5kZXh8LCB8YWRkZWRDb3VudHwgaXRlbXMgd2VyZSBhZGRlZC5cbiAqL1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEByZW1hcmtzXG4gKiBMYWNraW5nIGluZGl2aWR1YWwgc3BsaWNlIG11dGF0aW9uIGluZm9ybWF0aW9uLCB0aGUgbWluaW1hbCBzZXQgb2ZcbiAqIHNwbGljZXMgY2FuIGJlIHN5bnRoZXNpemVkIGdpdmVuIHRoZSBwcmV2aW91cyBzdGF0ZSBhbmQgZmluYWwgc3RhdGUgb2YgYW5cbiAqIGFycmF5LiBUaGUgYmFzaWMgYXBwcm9hY2ggaXMgdG8gY2FsY3VsYXRlIHRoZSBlZGl0IGRpc3RhbmNlIG1hdHJpeCBhbmRcbiAqIGNob29zZSB0aGUgc2hvcnRlc3QgcGF0aCB0aHJvdWdoIGl0LlxuICpcbiAqIENvbXBsZXhpdHk6IE8obCAqIHApXG4gKiAgIGw6IFRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXJyYXlcbiAqICAgcDogVGhlIGxlbmd0aCBvZiB0aGUgb2xkIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjU3BsaWNlcyhjdXJyZW50LCBjdXJyZW50U3RhcnQsIGN1cnJlbnRFbmQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCkge1xuICAgIGxldCBwcmVmaXhDb3VudCA9IDA7XG4gICAgbGV0IHN1ZmZpeENvdW50ID0gMDtcbiAgICBjb25zdCBtaW5MZW5ndGggPSBNYXRoLm1pbihjdXJyZW50RW5kIC0gY3VycmVudFN0YXJ0LCBvbGRFbmQgLSBvbGRTdGFydCk7XG4gICAgaWYgKGN1cnJlbnRTdGFydCA9PT0gMCAmJiBvbGRTdGFydCA9PT0gMCkge1xuICAgICAgICBwcmVmaXhDb3VudCA9IHNoYXJlZFByZWZpeChjdXJyZW50LCBvbGQsIG1pbkxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50RW5kID09PSBjdXJyZW50Lmxlbmd0aCAmJiBvbGRFbmQgPT09IG9sZC5sZW5ndGgpIHtcbiAgICAgICAgc3VmZml4Q291bnQgPSBzaGFyZWRTdWZmaXgoY3VycmVudCwgb2xkLCBtaW5MZW5ndGggLSBwcmVmaXhDb3VudCk7XG4gICAgfVxuICAgIGN1cnJlbnRTdGFydCArPSBwcmVmaXhDb3VudDtcbiAgICBvbGRTdGFydCArPSBwcmVmaXhDb3VudDtcbiAgICBjdXJyZW50RW5kIC09IHN1ZmZpeENvdW50O1xuICAgIG9sZEVuZCAtPSBzdWZmaXhDb3VudDtcbiAgICBpZiAoY3VycmVudEVuZCAtIGN1cnJlbnRTdGFydCA9PT0gMCAmJiBvbGRFbmQgLSBvbGRTdGFydCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZW1wdHlBcnJheTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRTdGFydCA9PT0gY3VycmVudEVuZCkge1xuICAgICAgICBjb25zdCBzcGxpY2UgPSBuZXdTcGxpY2UoY3VycmVudFN0YXJ0LCBbXSwgMCk7XG4gICAgICAgIHdoaWxlIChvbGRTdGFydCA8IG9sZEVuZCkge1xuICAgICAgICAgICAgc3BsaWNlLnJlbW92ZWQucHVzaChvbGRbb2xkU3RhcnQrK10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc3BsaWNlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2xkU3RhcnQgPT09IG9sZEVuZCkge1xuICAgICAgICByZXR1cm4gW25ld1NwbGljZShjdXJyZW50U3RhcnQsIFtdLCBjdXJyZW50RW5kIC0gY3VycmVudFN0YXJ0KV07XG4gICAgfVxuICAgIGNvbnN0IG9wcyA9IHNwbGljZU9wZXJhdGlvbnNGcm9tRWRpdERpc3RhbmNlcyhjYWxjRWRpdERpc3RhbmNlcyhjdXJyZW50LCBjdXJyZW50U3RhcnQsIGN1cnJlbnRFbmQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCkpO1xuICAgIGNvbnN0IHNwbGljZXMgPSBbXTtcbiAgICBsZXQgc3BsaWNlID0gdm9pZCAwO1xuICAgIGxldCBpbmRleCA9IGN1cnJlbnRTdGFydDtcbiAgICBsZXQgb2xkSW5kZXggPSBvbGRTdGFydDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBzd2l0Y2ggKG9wc1tpXSkge1xuICAgICAgICAgICAgY2FzZSBFRElUX0xFQVZFOlxuICAgICAgICAgICAgICAgIGlmIChzcGxpY2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzcGxpY2VzLnB1c2goc3BsaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgc3BsaWNlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIG9sZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEVESVRfVVBEQVRFOlxuICAgICAgICAgICAgICAgIGlmIChzcGxpY2UgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzcGxpY2UgPSBuZXdTcGxpY2UoaW5kZXgsIFtdLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BsaWNlLmFkZGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIHNwbGljZS5yZW1vdmVkLnB1c2gob2xkW29sZEluZGV4XSk7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRURJVF9BREQ6XG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGljZSA9IG5ld1NwbGljZShpbmRleCwgW10sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEVESVRfREVMRVRFOlxuICAgICAgICAgICAgICAgIGlmIChzcGxpY2UgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzcGxpY2UgPSBuZXdTcGxpY2UoaW5kZXgsIFtdLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BsaWNlLnJlbW92ZWQucHVzaChvbGRbb2xkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBvbGRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzcGxpY2UgIT09IHZvaWQgMCkge1xuICAgICAgICBzcGxpY2VzLnB1c2goc3BsaWNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNwbGljZXM7XG59XG5jb25zdCAkcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xuZnVuY3Rpb24gbWVyZ2VTcGxpY2Uoc3BsaWNlcywgaW5kZXgsIHJlbW92ZWQsIGFkZGVkQ291bnQpIHtcbiAgICBjb25zdCBzcGxpY2UgPSBuZXdTcGxpY2UoaW5kZXgsIHJlbW92ZWQsIGFkZGVkQ291bnQpO1xuICAgIGxldCBpbnNlcnRlZCA9IGZhbHNlO1xuICAgIGxldCBpbnNlcnRpb25PZmZzZXQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc3BsaWNlc1tpXTtcbiAgICAgICAgY3VycmVudC5pbmRleCArPSBpbnNlcnRpb25PZmZzZXQ7XG4gICAgICAgIGlmIChpbnNlcnRlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0Q291bnQgPSBpbnRlcnNlY3Qoc3BsaWNlLmluZGV4LCBzcGxpY2UuaW5kZXggKyBzcGxpY2UucmVtb3ZlZC5sZW5ndGgsIGN1cnJlbnQuaW5kZXgsIGN1cnJlbnQuaW5kZXggKyBjdXJyZW50LmFkZGVkQ291bnQpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0Q291bnQgPj0gMCkge1xuICAgICAgICAgICAgLy8gTWVyZ2UgdGhlIHR3byBzcGxpY2VzXG4gICAgICAgICAgICBzcGxpY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGluc2VydGlvbk9mZnNldCAtPSBjdXJyZW50LmFkZGVkQ291bnQgLSBjdXJyZW50LnJlbW92ZWQubGVuZ3RoO1xuICAgICAgICAgICAgc3BsaWNlLmFkZGVkQ291bnQgKz0gY3VycmVudC5hZGRlZENvdW50IC0gaW50ZXJzZWN0Q291bnQ7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb3VudCA9IHNwbGljZS5yZW1vdmVkLmxlbmd0aCArIGN1cnJlbnQucmVtb3ZlZC5sZW5ndGggLSBpbnRlcnNlY3RDb3VudDtcbiAgICAgICAgICAgIGlmICghc3BsaWNlLmFkZGVkQ291bnQgJiYgIWRlbGV0ZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgLy8gbWVyZ2VkIHNwbGljZSBpcyBhIG5vb3AuIGRpc2NhcmQuXG4gICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZW1vdmVkID0gY3VycmVudC5yZW1vdmVkO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpY2UuaW5kZXggPCBjdXJyZW50LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgcHJlZml4IG9mIHNwbGljZS5yZW1vdmVkIGlzIHByZXBlbmRlZCB0byBjdXJyZW50LnJlbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXBlbmQgPSBzcGxpY2UucmVtb3ZlZC5zbGljZSgwLCBjdXJyZW50LmluZGV4IC0gc3BsaWNlLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgJHB1c2guYXBwbHkocHJlcGVuZCwgY3VycmVudFJlbW92ZWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVtb3ZlZCA9IHByZXBlbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzcGxpY2UuaW5kZXggKyBzcGxpY2UucmVtb3ZlZC5sZW5ndGggPlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmluZGV4ICsgY3VycmVudC5hZGRlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgc3VmZml4IG9mIHNwbGljZS5yZW1vdmVkIGlzIGFwcGVuZGVkIHRvIGN1cnJlbnQucmVtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwZW5kID0gc3BsaWNlLnJlbW92ZWQuc2xpY2UoY3VycmVudC5pbmRleCArIGN1cnJlbnQuYWRkZWRDb3VudCAtIHNwbGljZS5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICRwdXNoLmFwcGx5KGN1cnJlbnRSZW1vdmVkLCBhcHBlbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGxpY2UucmVtb3ZlZCA9IGN1cnJlbnRSZW1vdmVkO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmluZGV4IDwgc3BsaWNlLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGljZS5pbmRleCA9IGN1cnJlbnQuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNwbGljZS5pbmRleCA8IGN1cnJlbnQuaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIEluc2VydCBzcGxpY2UgaGVyZS5cbiAgICAgICAgICAgIGluc2VydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNwbGljZXMuc3BsaWNlKGksIDAsIHNwbGljZSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBzcGxpY2UuYWRkZWRDb3VudCAtIHNwbGljZS5yZW1vdmVkLmxlbmd0aDtcbiAgICAgICAgICAgIGN1cnJlbnQuaW5kZXggKz0gb2Zmc2V0O1xuICAgICAgICAgICAgaW5zZXJ0aW9uT2Zmc2V0ICs9IG9mZnNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWluc2VydGVkKSB7XG4gICAgICAgIHNwbGljZXMucHVzaChzcGxpY2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTcGxpY2VzKGNoYW5nZVJlY29yZHMpIHtcbiAgICBjb25zdCBzcGxpY2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gY2hhbmdlUmVjb3Jkcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGNoYW5nZVJlY29yZHNbaV07XG4gICAgICAgIG1lcmdlU3BsaWNlKHNwbGljZXMsIHJlY29yZC5pbmRleCwgcmVjb3JkLnJlbW92ZWQsIHJlY29yZC5hZGRlZENvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHNwbGljZXM7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEFycmF5U3BsaWNlcyhhcnJheSwgY2hhbmdlUmVjb3Jkcykge1xuICAgIGxldCBzcGxpY2VzID0gW107XG4gICAgY29uc3QgaW5pdGlhbFNwbGljZXMgPSBjcmVhdGVJbml0aWFsU3BsaWNlcyhjaGFuZ2VSZWNvcmRzKTtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBpbml0aWFsU3BsaWNlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IHNwbGljZSA9IGluaXRpYWxTcGxpY2VzW2ldO1xuICAgICAgICBpZiAoc3BsaWNlLmFkZGVkQ291bnQgPT09IDEgJiYgc3BsaWNlLnJlbW92ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoc3BsaWNlLnJlbW92ZWRbMF0gIT09IGFycmF5W3NwbGljZS5pbmRleF0pIHtcbiAgICAgICAgICAgICAgICBzcGxpY2VzLnB1c2goc3BsaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHNwbGljZXMgPSBzcGxpY2VzLmNvbmNhdChjYWxjU3BsaWNlcyhhcnJheSwgc3BsaWNlLmluZGV4LCBzcGxpY2UuaW5kZXggKyBzcGxpY2UuYWRkZWRDb3VudCwgc3BsaWNlLnJlbW92ZWQsIDAsIHNwbGljZS5yZW1vdmVkLmxlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gc3BsaWNlcztcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IGNhbGNTcGxpY2VzLCBuZXdTcGxpY2UsIHByb2plY3RBcnJheVNwbGljZXMgfSBmcm9tIFwiLi9hcnJheS1jaGFuZ2UtcmVjb3Jkcy5qc1wiO1xuaW1wb3J0IHsgU3Vic2NyaWJlclNldCB9IGZyb20gXCIuL25vdGlmaWVyLmpzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4vb2JzZXJ2YWJsZS5qc1wiO1xubGV0IGFycmF5T2JzZXJ2YXRpb25FbmFibGVkID0gZmFsc2U7XG5mdW5jdGlvbiBhZGp1c3RJbmRleChjaGFuZ2VSZWNvcmQsIGFycmF5KSB7XG4gICAgbGV0IGluZGV4ID0gY2hhbmdlUmVjb3JkLmluZGV4O1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChpbmRleCA+IGFycmF5TGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gYXJyYXlMZW5ndGggLSBjaGFuZ2VSZWNvcmQuYWRkZWRDb3VudDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID1cbiAgICAgICAgICAgIGFycmF5TGVuZ3RoICsgY2hhbmdlUmVjb3JkLnJlbW92ZWQubGVuZ3RoICsgaW5kZXggLSBjaGFuZ2VSZWNvcmQuYWRkZWRDb3VudDtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIGNoYW5nZVJlY29yZC5pbmRleCA9IGluZGV4O1xuICAgIHJldHVybiBjaGFuZ2VSZWNvcmQ7XG59XG5jbGFzcyBBcnJheU9ic2VydmVyIGV4dGVuZHMgU3Vic2NyaWJlclNldCB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgICAgIHN1cGVyKHNvdXJjZSk7XG4gICAgICAgIHRoaXMub2xkQ29sbGVjdGlvbiA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5zcGxpY2VzID0gdm9pZCAwO1xuICAgICAgICB0aGlzLm5lZWRzUXVldWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGwgPSB0aGlzLmZsdXNoO1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgXCIkZmFzdENvbnRyb2xsZXJcIiwge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFNwbGljZShzcGxpY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc3BsaWNlcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZXMgPSBbc3BsaWNlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlcy5wdXNoKHNwbGljZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubmVlZHNRdWV1ZSkge1xuICAgICAgICAgICAgdGhpcy5uZWVkc1F1ZXVlID0gZmFsc2U7XG4gICAgICAgICAgICBET00ucXVldWVVcGRhdGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzZXQob2xkQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLm9sZENvbGxlY3Rpb24gPSBvbGRDb2xsZWN0aW9uO1xuICAgICAgICBpZiAodGhpcy5uZWVkc1F1ZXVlKSB7XG4gICAgICAgICAgICB0aGlzLm5lZWRzUXVldWUgPSBmYWxzZTtcbiAgICAgICAgICAgIERPTS5xdWV1ZVVwZGF0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmbHVzaCgpIHtcbiAgICAgICAgY29uc3Qgc3BsaWNlcyA9IHRoaXMuc3BsaWNlcztcbiAgICAgICAgY29uc3Qgb2xkQ29sbGVjdGlvbiA9IHRoaXMub2xkQ29sbGVjdGlvbjtcbiAgICAgICAgaWYgKHNwbGljZXMgPT09IHZvaWQgMCAmJiBvbGRDb2xsZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5lZWRzUXVldWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwbGljZXMgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMub2xkQ29sbGVjdGlvbiA9IHZvaWQgMDtcbiAgICAgICAgY29uc3QgZmluYWxTcGxpY2VzID0gb2xkQ29sbGVjdGlvbiA9PT0gdm9pZCAwXG4gICAgICAgICAgICA/IHByb2plY3RBcnJheVNwbGljZXModGhpcy5zb3VyY2UsIHNwbGljZXMpXG4gICAgICAgICAgICA6IGNhbGNTcGxpY2VzKHRoaXMuc291cmNlLCAwLCB0aGlzLnNvdXJjZS5sZW5ndGgsIG9sZENvbGxlY3Rpb24sIDAsIG9sZENvbGxlY3Rpb24ubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5ub3RpZnkoZmluYWxTcGxpY2VzKTtcbiAgICB9XG59XG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuLyoqXG4gKiBFbmFibGVzIHRoZSBhcnJheSBvYnNlcnZhdGlvbiBtZWNoYW5pc20uXG4gKiBAcmVtYXJrc1xuICogQXJyYXkgb2JzZXJ2YXRpb24gaXMgZW5hYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgdGhlXG4gKiB7QGxpbmsgUmVwZWF0RGlyZWN0aXZlfSwgc28gY2FsbGluZyB0aGlzIEFQSSBtYW51YWxseSBpc1xuICogbm90IHR5cGljYWxseSBuZWNlc3NhcnkuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBcnJheU9ic2VydmF0aW9uKCkge1xuICAgIGlmIChhcnJheU9ic2VydmF0aW9uRW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFycmF5T2JzZXJ2YXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICBPYnNlcnZhYmxlLnNldEFycmF5T2JzZXJ2ZXJGYWN0b3J5KChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlPYnNlcnZlcihjb2xsZWN0aW9uKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm90byA9IEFycmF5LnByb3RvdHlwZTtcbiAgICAvLyBEb24ndCBwYXRjaCBBcnJheSBpZiBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhdGNoZWRcbiAgICAvLyBieSBhbm90aGVyIGNvcHkgb2YgZmFzdC1lbGVtZW50LlxuICAgIGlmIChwcm90by4kZmFzdFBhdGNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCIkZmFzdFBhdGNoXCIsIHtcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvcCA9IHByb3RvLnBvcDtcbiAgICBjb25zdCBwdXNoID0gcHJvdG8ucHVzaDtcbiAgICBjb25zdCByZXZlcnNlID0gcHJvdG8ucmV2ZXJzZTtcbiAgICBjb25zdCBzaGlmdCA9IHByb3RvLnNoaWZ0O1xuICAgIGNvbnN0IHNvcnQgPSBwcm90by5zb3J0O1xuICAgIGNvbnN0IHNwbGljZSA9IHByb3RvLnNwbGljZTtcbiAgICBjb25zdCB1bnNoaWZ0ID0gcHJvdG8udW5zaGlmdDtcbiAgICBwcm90by5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG5vdEVtcHR5ID0gdGhpcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBtZXRob2RDYWxsUmVzdWx0ID0gcG9wLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCAmJiBub3RFbXB0eSkge1xuICAgICAgICAgICAgby5hZGRTcGxpY2UobmV3U3BsaWNlKHRoaXMubGVuZ3RoLCBbbWV0aG9kQ2FsbFJlc3VsdF0sIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kQ2FsbFJlc3VsdDtcbiAgICB9O1xuICAgIHByb3RvLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZENhbGxSZXN1bHQgPSBwdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5hZGRTcGxpY2UoYWRqdXN0SW5kZXgobmV3U3BsaWNlKHRoaXMubGVuZ3RoIC0gYXJndW1lbnRzLmxlbmd0aCwgW10sIGFyZ3VtZW50cy5sZW5ndGgpLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZENhbGxSZXN1bHQ7XG4gICAgfTtcbiAgICBwcm90by5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgb2xkQXJyYXk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5mbHVzaCgpO1xuICAgICAgICAgICAgb2xkQXJyYXkgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHJldmVyc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5yZXNldChvbGRBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZENhbGxSZXN1bHQ7XG4gICAgfTtcbiAgICBwcm90by5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgbm90RW1wdHkgPSB0aGlzLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IG1ldGhvZENhbGxSZXN1bHQgPSBzaGlmdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zdCBvID0gdGhpcy4kZmFzdENvbnRyb2xsZXI7XG4gICAgICAgIGlmIChvICE9PSB2b2lkIDAgJiYgbm90RW1wdHkpIHtcbiAgICAgICAgICAgIG8uYWRkU3BsaWNlKG5ld1NwbGljZSgwLCBbbWV0aG9kQ2FsbFJlc3VsdF0sIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kQ2FsbFJlc3VsdDtcbiAgICB9O1xuICAgIHByb3RvLnNvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBvbGRBcnJheTtcbiAgICAgICAgY29uc3QgbyA9IHRoaXMuJGZhc3RDb250cm9sbGVyO1xuICAgICAgICBpZiAobyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvLmZsdXNoKCk7XG4gICAgICAgICAgICBvbGRBcnJheSA9IHRoaXMuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRob2RDYWxsUmVzdWx0ID0gc29ydC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAobyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvLnJlc2V0KG9sZEFycmF5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kQ2FsbFJlc3VsdDtcbiAgICB9O1xuICAgIHByb3RvLnNwbGljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kQ2FsbFJlc3VsdCA9IHNwbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zdCBvID0gdGhpcy4kZmFzdENvbnRyb2xsZXI7XG4gICAgICAgIGlmIChvICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG8uYWRkU3BsaWNlKGFkanVzdEluZGV4KG5ld1NwbGljZSgrYXJndW1lbnRzWzBdLCBtZXRob2RDYWxsUmVzdWx0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50cy5sZW5ndGggLSAyIDogMCksIHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kQ2FsbFJlc3VsdDtcbiAgICB9O1xuICAgIHByb3RvLnVuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZENhbGxSZXN1bHQgPSB1bnNoaWZ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLiRmYXN0Q29udHJvbGxlcjtcbiAgICAgICAgaWYgKG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgby5hZGRTcGxpY2UoYWRqdXN0SW5kZXgobmV3U3BsaWNlKDAsIFtdLCBhcmd1bWVudHMubGVuZ3RoKSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRob2RDYWxsUmVzdWx0O1xuICAgIH07XG59XG4vKiBlc2xpbnQtZW5hYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbiIsImZ1bmN0aW9uIHNwaWxsb3ZlclN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgY29uc3Qgc3BpbGxvdmVyID0gdGhpcy5zcGlsbG92ZXI7XG4gICAgY29uc3QgaW5kZXggPSBzcGlsbG92ZXIuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHNwaWxsb3Zlci5wdXNoKHN1YnNjcmliZXIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNwaWxsb3ZlclVuc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBjb25zdCBzcGlsbG92ZXIgPSB0aGlzLnNwaWxsb3ZlcjtcbiAgICBjb25zdCBpbmRleCA9IHNwaWxsb3Zlci5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3BpbGxvdmVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3BpbGxvdmVyTm90aWZ5U3Vic2NyaWJlcnMoYXJncykge1xuICAgIGNvbnN0IHNwaWxsb3ZlciA9IHRoaXMuc3BpbGxvdmVyO1xuICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHNwaWxsb3Zlci5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIHNwaWxsb3ZlcltpXS5oYW5kbGVDaGFuZ2Uoc291cmNlLCBhcmdzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzcGlsbG92ZXJIYXMoc3Vic2NyaWJlcikge1xuICAgIHJldHVybiB0aGlzLnNwaWxsb3Zlci5pbmRleE9mKHN1YnNjcmliZXIpICE9PSAtMTtcbn1cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIE5vdGlmaWVyfSB0aGF0IGVmZmljaWVudGx5IGtlZXBzIHRyYWNrIG9mXG4gKiBzdWJzY3JpYmVycyBpbnRlcmVzdGVkIGluIGEgc3BlY2lmaWMgY2hhbmdlIG5vdGlmaWNhdGlvbiBvbiBhblxuICogb2JzZXJ2YWJsZSBzb3VyY2UuXG4gKlxuICogQHJlbWFya3NcbiAqIFRoaXMgc2V0IGlzIG9wdGltaXplZCBmb3IgdGhlIG1vc3QgY29tbW9uIHNjZW5hcmlvIG9mIDEgb3IgMiBzdWJzY3JpYmVycy5cbiAqIFdpdGggdGhpcyBpbiBtaW5kLCBpdCBjYW4gc3RvcmUgYSBzdWJzY3JpYmVyIGluIGFuIGludGVybmFsIGZpZWxkLCBhbGxvd2luZyBpdCB0byBhdm9pZCBBcnJheSNwdXNoIG9wZXJhdGlvbnMuXG4gKiBJZiB0aGUgc2V0IGV2ZXIgZXhjZWVkcyB0d28gc3Vic2NyaWJlcnMsIGl0IHVwZ3JhZGVzIHRvIGFuIGFycmF5IGF1dG9tYXRpY2FsbHkuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVyU2V0IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFN1YnNjcmliZXJTZXQgZm9yIHRoZSBzcGVjaWZpZWQgc291cmNlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgb2JqZWN0IHNvdXJjZSB0aGF0IHN1YnNjcmliZXJzIHdpbGwgcmVjZWl2ZSBub3RpZmljYXRpb25zIGZyb20uXG4gICAgICogQHBhcmFtIGluaXRpYWxTdWJzY3JpYmVyIC0gQW4gaW5pdGlhbCBzdWJzY3JpYmVyIHRvIGNoYW5nZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBpbml0aWFsU3Vic2NyaWJlcikge1xuICAgICAgICB0aGlzLnN1YjEgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuc3ViMiA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5zcGlsbG92ZXIgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLnN1YjEgPSBpbml0aWFsU3Vic2NyaWJlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN1YnNjcmliZXIgaGFzIGJlZW4gYWRkZWQgdG8gdGhpcyBzZXQuXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXIgLSBUaGUgc3Vic2NyaWJlciB0byB0ZXN0IGZvciBpbmNsdXNpb24gaW4gdGhpcyBzZXQuXG4gICAgICovXG4gICAgaGFzKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViMSA9PT0gc3Vic2NyaWJlciB8fCB0aGlzLnN1YjIgPT09IHN1YnNjcmliZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdG8gbm90aWZpY2F0aW9uIG9mIGNoYW5nZXMgaW4gYW4gb2JqZWN0J3Mgc3RhdGUuXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXIgLSBUaGUgb2JqZWN0IHRoYXQgaXMgc3Vic2NyaWJpbmcgZm9yIGNoYW5nZSBub3RpZmljYXRpb24uXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKHN1YnNjcmliZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3ViMSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aGlzLnN1YjEgPSBzdWJzY3JpYmVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN1YjIgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhpcy5zdWIyID0gc3Vic2NyaWJlcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwaWxsb3ZlciA9IFt0aGlzLnN1YjEsIHRoaXMuc3ViMiwgc3Vic2NyaWJlcl07XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlID0gc3BpbGxvdmVyU3Vic2NyaWJlO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3BpbGxvdmVyVW5zdWJzY3JpYmU7XG4gICAgICAgIHRoaXMubm90aWZ5ID0gc3BpbGxvdmVyTm90aWZ5U3Vic2NyaWJlcnM7XG4gICAgICAgIHRoaXMuaGFzID0gc3BpbGxvdmVySGFzO1xuICAgICAgICB0aGlzLnN1YjEgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuc3ViMiA9IHZvaWQgMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmVzIGZyb20gbm90aWZpY2F0aW9uIG9mIGNoYW5nZXMgaW4gYW4gb2JqZWN0J3Mgc3RhdGUuXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXIgLSBUaGUgb2JqZWN0IHRoYXQgaXMgdW5zdWJzY3JpYmluZyBmcm9tIGNoYW5nZSBub3RpZmljYXRpb24uXG4gICAgICovXG4gICAgdW5zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5zdWIxID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN1YjEgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdWIyID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN1YjIgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZXJzLlxuICAgICAqIEBwYXJhbSBhcmdzIC0gRGF0YSBwYXNzZWQgYWxvbmcgdG8gc3Vic2NyaWJlcnMgZHVyaW5nIG5vdGlmaWNhdGlvbi5cbiAgICAgKi9cbiAgICBub3RpZnkoYXJncykge1xuICAgICAgICBjb25zdCBzdWIxID0gdGhpcy5zdWIxO1xuICAgICAgICBjb25zdCBzdWIyID0gdGhpcy5zdWIyO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgaWYgKHN1YjEgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3ViMS5oYW5kbGVDaGFuZ2Uoc291cmNlLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ViMiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdWIyLmhhbmRsZUNoYW5nZShzb3VyY2UsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBOb3RpZmllciB0aGF0IGFsbG93cyBzdWJzY3JpYmVycyB0byBiZSBub3RpZmllZFxuICogb2YgaW5kaXZpZHVhbCBwcm9wZXJ0eSBjaGFuZ2VzIG9uIGFuIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q2hhbmdlTm90aWZpZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUHJvcGVydHlDaGFuZ2VOb3RpZmllciBmb3IgdGhlIHNwZWNpZmllZCBzb3VyY2UuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBvYmplY3Qgc291cmNlIHRoYXQgc3Vic2NyaWJlcnMgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgZnJvbS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZVN1YnNjcmliZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVycywgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIC0gVGhlIHByb3BlcnR5IG5hbWUsIHBhc3NlZCBhbG9uZyB0byBzdWJzY3JpYmVycyBkdXJpbmcgbm90aWZpY2F0aW9uLlxuICAgICAqL1xuICAgIG5vdGlmeShwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLm5vdGlmeShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIChfYSA9IHRoaXMuc291cmNlU3Vic2NyaWJlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub3RpZnkocHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byBub3RpZmljYXRpb24gb2YgY2hhbmdlcyBpbiBhbiBvYmplY3QncyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gc3Vic2NyaWJlciAtIFRoZSBvYmplY3QgdGhhdCBpcyBzdWJzY3JpYmluZyBmb3IgY2hhbmdlIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0gcHJvcGVydHlUb1dhdGNoIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRoYXQgdGhlIHN1YnNjcmliZXIgaXMgaW50ZXJlc3RlZCBpbiB3YXRjaGluZyBmb3IgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoc3Vic2NyaWJlciwgcHJvcGVydHlUb1dhdGNoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHByb3BlcnR5VG9XYXRjaCkge1xuICAgICAgICAgICAgbGV0IHN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVyc1twcm9wZXJ0eVRvV2F0Y2hdO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3Byb3BlcnR5VG9XYXRjaF0gPSBzdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyU2V0KHRoaXMuc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXJzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlU3Vic2NyaWJlcnMgPSAoX2EgPSB0aGlzLnNvdXJjZVN1YnNjcmliZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBuZXcgU3Vic2NyaWJlclNldCh0aGlzLnNvdXJjZSk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVN1YnNjcmliZXJzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZXMgZnJvbSBub3RpZmljYXRpb24gb2YgY2hhbmdlcyBpbiBhbiBvYmplY3QncyBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gc3Vic2NyaWJlciAtIFRoZSBvYmplY3QgdGhhdCBpcyB1bnN1YnNjcmliaW5nIGZyb20gY2hhbmdlIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0gcHJvcGVydHlUb1Vud2F0Y2ggLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB0aGUgc3Vic2NyaWJlciBpcyBubyBsb25nZXIgaW50ZXJlc3RlZCBpbiB3YXRjaGluZy5cbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZShzdWJzY3JpYmVyLCBwcm9wZXJ0eVRvVW53YXRjaCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChwcm9wZXJ0eVRvVW53YXRjaCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzW3Byb3BlcnR5VG9VbndhdGNoXTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMudW5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNvdXJjZVN1YnNjcmliZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudW5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBGQVNUIH0gZnJvbSBcIi4uL3BsYXRmb3JtLmpzXCI7XG5pbXBvcnQgeyBQcm9wZXJ0eUNoYW5nZU5vdGlmaWVyLCBTdWJzY3JpYmVyU2V0IH0gZnJvbSBcIi4vbm90aWZpZXIuanNcIjtcbi8qKlxuICogQ29tbW9uIE9ic2VydmFibGUgQVBJcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IE9ic2VydmFibGUgPSBGQVNULmdldEJ5SWQoMiAvKiBvYnNlcnZhYmxlICovLCAoKSA9PiB7XG4gICAgY29uc3Qgdm9sYXRpbGVSZWdleCA9IC8oOnwmJnxcXHxcXHx8aWYpLztcbiAgICBjb25zdCBub3RpZmllckxvb2t1cCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgY29uc3QgYWNjZXNzb3JMb29rdXAgPSBuZXcgV2Vha01hcCgpO1xuICAgIGNvbnN0IHF1ZXVlVXBkYXRlID0gRE9NLnF1ZXVlVXBkYXRlO1xuICAgIGxldCB3YXRjaGVyID0gdm9pZCAwO1xuICAgIGxldCBjcmVhdGVBcnJheU9ic2VydmVyID0gKGFycmF5KSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgY2FsbCBlbmFibGVBcnJheU9ic2VydmF0aW9uIGJlZm9yZSBvYnNlcnZpbmcgYXJyYXlzLlwiKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldE5vdGlmaWVyKHNvdXJjZSkge1xuICAgICAgICBsZXQgZm91bmQgPSBzb3VyY2UuJGZhc3RDb250cm9sbGVyIHx8IG5vdGlmaWVyTG9va3VwLmdldChzb3VyY2UpO1xuICAgICAgICBpZiAoZm91bmQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gY3JlYXRlQXJyYXlPYnNlcnZlcihzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm90aWZpZXJMb29rdXAuc2V0KHNvdXJjZSwgKGZvdW5kID0gbmV3IFByb3BlcnR5Q2hhbmdlTm90aWZpZXIoc291cmNlKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QWNjZXNzb3JzKHRhcmdldCkge1xuICAgICAgICBsZXQgYWNjZXNzb3JzID0gYWNjZXNzb3JMb29rdXAuZ2V0KHRhcmdldCk7XG4gICAgICAgIGlmIChhY2Nlc3NvcnMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG4gICAgICAgICAgICB3aGlsZSAoYWNjZXNzb3JzID09PSB2b2lkIDAgJiYgY3VycmVudFRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29ycyA9IGFjY2Vzc29yTG9va3VwLmdldChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZihjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY2Nlc3NvcnMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29ycyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3JzID0gYWNjZXNzb3JzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjZXNzb3JMb29rdXAuc2V0KHRhcmdldCwgYWNjZXNzb3JzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjZXNzb3JzO1xuICAgIH1cbiAgICBjbGFzcyBEZWZhdWx0T2JzZXJ2YWJsZUFjY2Vzc29yIHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQgPSBgXyR7bmFtZX1gO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGAke25hbWV9Q2hhbmdlZGA7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0VmFsdWUoc291cmNlKSB7XG4gICAgICAgICAgICBpZiAod2F0Y2hlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgd2F0Y2hlci53YXRjaChzb3VyY2UsIHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc291cmNlW3RoaXMuZmllbGRdO1xuICAgICAgICB9XG4gICAgICAgIHNldFZhbHVlKHNvdXJjZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZDtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gc291cmNlW2ZpZWxkXTtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VbZmllbGRdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzb3VyY2VbdGhpcy5jYWxsYmFja107XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc291cmNlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXROb3RpZmllcihzb3VyY2UpLm5vdGlmeSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzIEJpbmRpbmdPYnNlcnZlckltcGxlbWVudGF0aW9uIGV4dGVuZHMgU3Vic2NyaWJlclNldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJpbmRpbmcsIGluaXRpYWxTdWJzY3JpYmVyLCBpc1ZvbGF0aWxlQmluZGluZyA9IGZhbHNlKSB7XG4gICAgICAgICAgICBzdXBlcihiaW5kaW5nLCBpbml0aWFsU3Vic2NyaWJlcik7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5pc1ZvbGF0aWxlQmluZGluZyA9IGlzVm9sYXRpbGVCaW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5uZWVkc1JlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZWVkc1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlTb3VyY2UgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRoaXMubm90aWZpZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZShzb3VyY2UsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5lZWRzUmVmcmVzaCAmJiB0aGlzLmxhc3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzV2F0Y2hlciA9IHdhdGNoZXI7XG4gICAgICAgICAgICB3YXRjaGVyID0gdGhpcy5uZWVkc1JlZnJlc2ggPyB0aGlzIDogdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5uZWVkc1JlZnJlc2ggPSB0aGlzLmlzVm9sYXRpbGVCaW5kaW5nO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5iaW5kaW5nKHNvdXJjZSwgY29udGV4dCk7XG4gICAgICAgICAgICB3YXRjaGVyID0gcHJldmlvdXNXYXRjaGVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5maXJzdDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQubm90aWZpZXIudW5zdWJzY3JpYmUodGhpcywgY3VycmVudC5wcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubmVlZHNSZWZyZXNoID0gdGhpcy5uZWVkc1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3YXRjaChwcm9wZXJ0eVNvdXJjZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gdGhpcy5sYXN0O1xuICAgICAgICAgICAgY29uc3Qgbm90aWZpZXIgPSBnZXROb3RpZmllcihwcm9wZXJ0eVNvdXJjZSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gcHJldiA9PT0gbnVsbCA/IHRoaXMuZmlyc3QgOiB7fTtcbiAgICAgICAgICAgIGN1cnJlbnQucHJvcGVydHlTb3VyY2UgPSBwcm9wZXJ0eVNvdXJjZTtcbiAgICAgICAgICAgIGN1cnJlbnQucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgY3VycmVudC5ub3RpZmllciA9IG5vdGlmaWVyO1xuICAgICAgICAgICAgbm90aWZpZXIuc3Vic2NyaWJlKHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBpZiAocHJldiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5uZWVkc1JlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVjbGFyaW5nIHRoZSB2YXJpYWJsZSBwcmlvciB0byBhc3NpZ25tZW50IGJlbG93IGNpcmN1bXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgYnVnIGluIEFuZ3VsYXIncyBvcHRpbWl6YXRpb24gcHJvY2VzcyBjYXVzaW5nIGluZmluaXRlIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGlzIHdhdGNoKCkgbWV0aG9kLiBEZXRhaWxzIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvZmFzdC9pc3N1ZXMvNDk2OVxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaGVyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlID0gcHJldi5wcm9wZXJ0eVNvdXJjZVtwcmV2LnByb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlTb3VyY2UgPT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkc1JlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXYubmV4dCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3QgPSBjdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5lZWRzUXVldWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5lZWRzUXVldWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBxdWV1ZVVwZGF0ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYWxsKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmVlZHNRdWV1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkcygpIHtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gdGhpcy5maXJzdDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIGZhY3RvcnkgLSBUaGUgZmFjdG9yeSB1c2VkIHRvIGNyZWF0ZSBhcnJheSBvYnNlcnZlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBzZXRBcnJheU9ic2VydmVyRmFjdG9yeShmYWN0b3J5KSB7XG4gICAgICAgICAgICBjcmVhdGVBcnJheU9ic2VydmVyID0gZmFjdG9yeTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSBub3RpZmllciBmb3IgYW4gb2JqZWN0IG9yIEFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIG9iamVjdCBvciBBcnJheSB0byBnZXQgdGhlIG5vdGlmaWVyIGZvci5cbiAgICAgICAgICovXG4gICAgICAgIGdldE5vdGlmaWVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVjb3JkcyBhIHByb3BlcnR5IGNoYW5nZSBmb3IgYSBzb3VyY2Ugb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIG9iamVjdCB0byByZWNvcmQgdGhlIGNoYW5nZSBhZ2FpbnN0LlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIC0gVGhlIHByb3BlcnR5IHRvIHRyYWNrIGFzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0cmFjayhzb3VyY2UsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgaWYgKHdhdGNoZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHdhdGNoZXIud2F0Y2goc291cmNlLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogTm90aWZpZXMgd2F0Y2hlcnMgdGhhdCB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyBwcm9wZXJ0eSBnZXR0ZXIgb3IgZnVuY3Rpb24gaXMgdm9sYXRpbGVcbiAgICAgICAgICogd2l0aCByZXNwZWN0IHRvIGl0cyBvYnNlcnZhYmxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG4gICAgICAgIHRyYWNrVm9sYXRpbGUoKSB7XG4gICAgICAgICAgICBpZiAod2F0Y2hlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgd2F0Y2hlci5uZWVkc1JlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogTm90aWZpZXMgc3Vic2NyaWJlcnMgb2YgYSBzb3VyY2Ugb2JqZWN0IG9mIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2UgLSB0aGUgb2JqZWN0IHRvIG5vdGlmeSBvZiBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0gYXJncyAtIFRoZSBjaGFuZ2UgYXJncyB0byBwYXNzIHRvIHN1YnNjcmliZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgbm90aWZ5KHNvdXJjZSwgYXJncykge1xuICAgICAgICAgICAgZ2V0Tm90aWZpZXIoc291cmNlKS5ub3RpZnkoYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIGFuIG9ic2VydmFibGUgcHJvcGVydHkgb24gYW4gb2JqZWN0IG9yIHByb3RvdHlwZS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0IHRvIGRlZmluZSB0aGUgb2JzZXJ2YWJsZSBvbi5cbiAgICAgICAgICogQHBhcmFtIG5hbWVPckFjY2Vzc29yIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGRlZmluZSBhcyBvYnNlcnZhYmxlO1xuICAgICAgICAgKiBvciBhIGN1c3RvbSBhY2Nlc3NvciB0aGF0IHNwZWNpZmllcyB0aGUgcHJvcGVydHkgbmFtZSBhbmQgYWNjZXNzb3IgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWVPckFjY2Vzc29yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hbWVPckFjY2Vzc29yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmFtZU9yQWNjZXNzb3IgPSBuZXcgRGVmYXVsdE9ic2VydmFibGVBY2Nlc3NvcihuYW1lT3JBY2Nlc3Nvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRBY2Nlc3NvcnModGFyZ2V0KS5wdXNoKG5hbWVPckFjY2Vzc29yKTtcbiAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lT3JBY2Nlc3Nvci5uYW1lLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVPckFjY2Vzc29yLmdldFZhbHVlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZU9yQWNjZXNzb3Iuc2V0VmFsdWUodGhpcywgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIGFsbCB0aGUgb2JzZXJ2YWJsZSBhY2Nlc3NvcnMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0LFxuICAgICAgICAgKiBpbmNsdWRpbmcgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHNlYXJjaCBmb3IgYWNjZXNzb3Igb24uXG4gICAgICAgICAqL1xuICAgICAgICBnZXRBY2Nlc3NvcnMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEge0BsaW5rIEJpbmRpbmdPYnNlcnZlcn0gdGhhdCBjYW4gd2F0Y2ggdGhlXG4gICAgICAgICAqIHByb3ZpZGVkIHtAbGluayBCaW5kaW5nfSBmb3IgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIGJpbmRpbmcgLSBUaGUgYmluZGluZyB0byBvYnNlcnZlLlxuICAgICAgICAgKiBAcGFyYW0gaW5pdGlhbFN1YnNjcmliZXIgLSBBbiBpbml0aWFsIHN1YnNjcmliZXIgdG8gY2hhbmdlcyBpbiB0aGUgYmluZGluZyB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIGlzVm9sYXRpbGVCaW5kaW5nIC0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJpbmRpbmcncyBkZXBlbmRlbmN5IGxpc3QgbXVzdCBiZSByZS1ldmFsdWF0ZWQgb24gZXZlcnkgdmFsdWUgZXZhbHVhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGJpbmRpbmcoYmluZGluZywgaW5pdGlhbFN1YnNjcmliZXIsIGlzVm9sYXRpbGVCaW5kaW5nID0gdGhpcy5pc1ZvbGF0aWxlQmluZGluZyhiaW5kaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nT2JzZXJ2ZXJJbXBsZW1lbnRhdGlvbihiaW5kaW5nLCBpbml0aWFsU3Vic2NyaWJlciwgaXNWb2xhdGlsZUJpbmRpbmcpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgYmluZGluZyBleHByZXNzaW9uIGlzIHZvbGF0aWxlIGFuZCBuZWVkcyB0byBoYXZlIGl0cyBkZXBlbmRlbmN5IGxpc3QgcmUtZXZhbHVhdGVkXG4gICAgICAgICAqIG9uIGV2ZXJ5IGV2YWx1YXRpb24gb2YgdGhlIHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0gYmluZGluZyAtIFRoZSBiaW5kaW5nIHRvIGluc3BlY3QuXG4gICAgICAgICAqL1xuICAgICAgICBpc1ZvbGF0aWxlQmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9sYXRpbGVSZWdleC50ZXN0KGJpbmRpbmcudG9TdHJpbmcoKSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcbi8qKlxuICogRGVjb3JhdG9yOiBEZWZpbmVzIGFuIG9ic2VydmFibGUgcHJvcGVydHkgb24gdGhlIHRhcmdldC5cbiAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgdGFyZ2V0IHRvIGRlZmluZSB0aGUgb2JzZXJ2YWJsZSBvbi5cbiAqIEBwYXJhbSBuYW1lT3JBY2Nlc3NvciAtIFRoZSBwcm9wZXJ0eSBuYW1lIG9yIGFjY2Vzc29yIHRvIGRlZmluZSB0aGUgb2JzZXJ2YWJsZSBhcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodGFyZ2V0LCBuYW1lT3JBY2Nlc3Nvcikge1xuICAgIE9ic2VydmFibGUuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lT3JBY2Nlc3Nvcik7XG59XG4vKipcbiAqIERlY29yYXRvcjogTWFya3MgYSBwcm9wZXJ0eSBnZXR0ZXIgYXMgaGF2aW5nIHZvbGF0aWxlIG9ic2VydmFibGUgZGVwZW5kZW5jaWVzLlxuICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgdGhhdCB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZCBvbi5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIHByb3BlcnR5IG5hbWUuXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBleGlzdGluZyBkZXNjcmlwdG9yLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdm9sYXRpbGUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlc2NyaXB0b3IsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnRyYWNrVm9sYXRpbGUoKTtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5hcHBseSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbmNvbnN0IGNvbnRleHRFdmVudCA9IEZBU1QuZ2V0QnlJZCgzIC8qIGNvbnRleHRFdmVudCAqLywgKCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KGV2ZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gZXZlbnQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn0pO1xuLyoqXG4gKiBQcm92aWRlcyBhZGRpdGlvbmFsIGNvbnRleHR1YWwgaW5mb3JtYXRpb24gYXZhaWxhYmxlIHRvIGJlaGF2aW9ycyBhbmQgZXhwcmVzc2lvbnMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGVjdXRpb25Db250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpdGVtIHdpdGhpbiBhIHJlcGVhdCBjb250ZXh0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24gd2l0aGluIGEgcmVwZWF0IGNvbnRleHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGFyZW50IGRhdGEgb2JqZWN0IHdpdGhpbiBhIHJlcGVhdCBjb250ZXh0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBhcmVudCBleGVjdXRpb24gY29udGV4dCB3aGVuIGluIG5lc3RlZCBjb250ZXh0IHNjZW5hcmlvcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGFyZW50Q29udGV4dCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGV2ZW50IHdpdGhpbiBhbiBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIGdldCBldmVudCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRFdmVudC5nZXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgaXRlbSB3aXRoaW4gYSByZXBlYXQgY29udGV4dFxuICAgICAqIGhhcyBhbiBldmVuIGluZGV4LlxuICAgICAqL1xuICAgIGdldCBpc0V2ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ICUgMiA9PT0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgaXRlbSB3aXRoaW4gYSByZXBlYXQgY29udGV4dFxuICAgICAqIGhhcyBhbiBvZGQgaW5kZXguXG4gICAgICovXG4gICAgZ2V0IGlzT2RkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCAlIDIgIT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGl0ZW0gd2l0aGluIGEgcmVwZWF0IGNvbnRleHRcbiAgICAgKiBpcyB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgaXNGaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGl0ZW0gd2l0aGluIGEgcmVwZWF0IGNvbnRleHRcbiAgICAgKiBpcyBzb21ld2hlcmUgaW4gdGhlIG1pZGRsZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgaXNJbk1pZGRsZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRmlyc3QgJiYgIXRoaXMuaXNMYXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBpdGVtIHdpdGhpbiBhIHJlcGVhdCBjb250ZXh0XG4gICAgICogaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgaXNMYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gdGhpcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBldmVudCBmb3IgdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQuXG4gICAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIHNldC5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dEV2ZW50LnNldChldmVudCk7XG4gICAgfVxufVxuT2JzZXJ2YWJsZS5kZWZpbmVQcm9wZXJ0eShFeGVjdXRpb25Db250ZXh0LnByb3RvdHlwZSwgXCJpbmRleFwiKTtcbk9ic2VydmFibGUuZGVmaW5lUHJvcGVydHkoRXhlY3V0aW9uQ29udGV4dC5wcm90b3R5cGUsIFwibGVuZ3RoXCIpO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBleGVjdXRpb24gY29udGV4dCB1c2VkIGluIGJpbmRpbmcgZXhwcmVzc2lvbnMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0RXhlY3V0aW9uQ29udGV4dCA9IE9iamVjdC5zZWFsKG5ldyBFeGVjdXRpb25Db250ZXh0KCkpO1xuIiwiLyoqXG4gKiBBIHJlZmVyZW5jZSB0byBnbG9iYWxUaGlzLCB3aXRoIHN1cHBvcnRcbiAqIGZvciBicm93c2VycyB0aGF0IGRvbid0IHlldCBzdXBwb3J0IHRoZSBzcGVjLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgJGdsb2JhbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgaW4gYSBtb2Rlcm4gZW52aXJvbm1lbnQuXG4gICAgICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBXZSdyZSBydW5uaW5nIGluIE5vZGVKU1xuICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gV2UncmUgcnVubmluZyBpbiBhIHdvcmtlci5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgaW4gdGhlIGJyb3dzZXIncyBtYWluIHRocmVhZC5cbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSG9wZWZ1bGx5IHdlIG5ldmVyIGdldCBoZXJlLi4uXG4gICAgICAgIC8vIE5vdCBhbGwgZW52aXJvbm1lbnRzIGFsbG93IGV2YWwgYW5kIEZ1bmN0aW9uLiBVc2Ugb25seSBhcyBhIGxhc3QgcmVzb3J0OlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICAvLyBJZiBhbGwgZmFpbHMsIGdpdmUgdXAgYW5kIGNyZWF0ZSBhbiBvYmplY3QuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWFzc2VydGlvbnNcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn0pKCk7XG4vLyBBUEktb25seSBQb2x5ZmlsbCBmb3IgdHJ1c3RlZFR5cGVzXG5pZiAoJGdsb2JhbC50cnVzdGVkVHlwZXMgPT09IHZvaWQgMCkge1xuICAgICRnbG9iYWwudHJ1c3RlZFR5cGVzID0geyBjcmVhdGVQb2xpY3k6IChuLCByKSA9PiByIH07XG59XG5jb25zdCBwcm9wQ29uZmlnID0ge1xuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxufTtcbmlmICgkZ2xvYmFsLkZBU1QgPT09IHZvaWQgMCkge1xuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoJGdsb2JhbCwgXCJGQVNUXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogT2JqZWN0LmNyZWF0ZShudWxsKSB9LCBwcm9wQ29uZmlnKSk7XG59XG4vKipcbiAqIFRoZSBGQVNUIGdsb2JhbC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgRkFTVCA9ICRnbG9iYWwuRkFTVDtcbmlmIChGQVNULmdldEJ5SWQgPT09IHZvaWQgMCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoRkFTVCwgXCJnZXRCeUlkXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZShpZCwgaW5pdGlhbGl6ZSkge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gc3RvcmFnZVtpZF07XG4gICAgICAgICAgICBpZiAoZm91bmQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gaW5pdGlhbGl6ZSA/IChzdG9yYWdlW2lkXSA9IGluaXRpYWxpemUoKSkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICB9IH0sIHByb3BDb25maWcpKTtcbn1cbi8qKlxuICogQSByZWFkb25seSwgZW1wdHkgYXJyYXkuXG4gKiBAcmVtYXJrc1xuICogVHlwaWNhbGx5IHJldHVybmVkIGJ5IEFQSXMgdGhhdCByZXR1cm4gYXJyYXlzIHdoZW4gdGhlcmUgYXJlXG4gKiBubyBhY3R1YWwgaXRlbXMgdG8gcmV0dXJuLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBlbXB0eUFycmF5ID0gT2JqZWN0LmZyZWV6ZShbXSk7XG4iLCIvKipcbiAqIERpcmVjdGl2ZSBmb3IgdXNlIGluIHtAbGluayBjc3N9LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIENTU0RpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIENTUyBmcmFnbWVudCB0byBpbnRlcnBvbGF0ZSBpbnRvIHRoZSBDU1MgZG9jdW1lbnQuXG4gICAgICogQHJldHVybnMgLSB0aGUgc3RyaW5nIHRvIGludGVycG9sYXRlIGludG8gQ1NTXG4gICAgICovXG4gICAgY3JlYXRlQ1NTKCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJlaGF2aW9yIHRvIGJpbmQgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyAtIHRoZSBiZWhhdmlvciB0byBiaW5kIHRvIHRoZSBob3N0IGVsZW1lbnQsIG9yIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBjcmVhdGVCZWhhdmlvcigpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDU1NEaXJlY3RpdmUgfSBmcm9tIFwiLi9jc3MtZGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgeyBFbGVtZW50U3R5bGVzIH0gZnJvbSBcIi4vZWxlbWVudC1zdHlsZXMuanNcIjtcbmZ1bmN0aW9uIGNvbGxlY3RTdHlsZXMoc3RyaW5ncywgdmFsdWVzKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gW107XG4gICAgbGV0IGNzc1N0cmluZyA9IFwiXCI7XG4gICAgY29uc3QgYmVoYXZpb3JzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gc3RyaW5ncy5sZW5ndGggLSAxOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBjc3NTdHJpbmcgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDU1NEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGJlaGF2aW9yID0gdmFsdWUuY3JlYXRlQmVoYXZpb3IoKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY3JlYXRlQ1NTKCk7XG4gICAgICAgICAgICBpZiAoYmVoYXZpb3IpIHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcnMucHVzaChiZWhhdmlvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudFN0eWxlcyB8fCB2YWx1ZSBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgIGlmIChjc3NTdHJpbmcudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzLnB1c2goY3NzU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBjc3NTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3NzU3RyaW5nICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNzc1N0cmluZyArPSBzdHJpbmdzW3N0cmluZ3MubGVuZ3RoIC0gMV07XG4gICAgaWYgKGNzc1N0cmluZy50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgc3R5bGVzLnB1c2goY3NzU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICBiZWhhdmlvcnMsXG4gICAgfTtcbn1cbi8qKlxuICogVHJhbnNmb3JtcyBhIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIGludG8gc3R5bGVzLlxuICogQHBhcmFtIHN0cmluZ3MgLSBUaGUgc3RyaW5nIGZyYWdtZW50cyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgd2l0aCB0aGUgdmFsdWVzLlxuICogQHBhcmFtIHZhbHVlcyAtIFRoZSB2YWx1ZXMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIHdpdGggdGhlIHN0cmluZyBmcmFnbWVudHMuXG4gKiBAcmVtYXJrc1xuICogVGhlIGNzcyBoZWxwZXIgc3VwcG9ydHMgaW50ZXJwb2xhdGlvbiBvZiBzdHJpbmdzIGFuZCBFbGVtZW50U3R5bGUgaW5zdGFuY2VzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3NzKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICAgIGNvbnN0IHsgc3R5bGVzLCBiZWhhdmlvcnMgfSA9IGNvbGxlY3RTdHlsZXMoc3RyaW5ncywgdmFsdWVzKTtcbiAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gRWxlbWVudFN0eWxlcy5jcmVhdGUoc3R5bGVzKTtcbiAgICBpZiAoYmVoYXZpb3JzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50U3R5bGVzLndpdGhCZWhhdmlvcnMoLi4uYmVoYXZpb3JzKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRTdHlsZXM7XG59XG5jbGFzcyBDU1NQYXJ0aWFsIGV4dGVuZHMgQ1NTRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihzdHlsZXMsIGJlaGF2aW9ycykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IGJlaGF2aW9ycztcbiAgICAgICAgdGhpcy5jc3MgPSBcIlwiO1xuICAgICAgICBjb25zdCBzdHlsZXNoZWV0cyA9IHN0eWxlcy5yZWR1Y2UoKGFjY3VtdWxhdGVkLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNzcyArPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjdW11bGF0ZWQucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRlZDtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBpZiAoc3R5bGVzaGVldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlcyA9IEVsZW1lbnRTdHlsZXMuY3JlYXRlKHN0eWxlc2hlZXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVCZWhhdmlvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNyZWF0ZUNTUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzO1xuICAgIH1cbiAgICBiaW5kKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlcykge1xuICAgICAgICAgICAgZWwuJGZhc3RDb250cm9sbGVyLmFkZFN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmVoYXZpb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgZWwuJGZhc3RDb250cm9sbGVyLmFkZEJlaGF2aW9ycyh0aGlzLmJlaGF2aW9ycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5iaW5kKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlcykge1xuICAgICAgICAgICAgZWwuJGZhc3RDb250cm9sbGVyLnJlbW92ZVN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmVoYXZpb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgZWwuJGZhc3RDb250cm9sbGVyLnJlbW92ZUJlaGF2aW9ycyh0aGlzLmJlaGF2aW9ycyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZyBpbnRvIHBhcnRpYWwgQ1NTLlxuICogQHBhcmFtIHN0cmluZ3MgLSBUaGUgc3RyaW5nIGZyYWdtZW50cyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgd2l0aCB0aGUgdmFsdWVzLlxuICogQHBhcmFtIHZhbHVlcyAtIFRoZSB2YWx1ZXMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIHdpdGggdGhlIHN0cmluZyBmcmFnbWVudHMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjc3NQYXJ0aWFsKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICAgIGNvbnN0IHsgc3R5bGVzLCBiZWhhdmlvcnMgfSA9IGNvbGxlY3RTdHlsZXMoc3RyaW5ncywgdmFsdWVzKTtcbiAgICByZXR1cm4gbmV3IENTU1BhcnRpYWwoc3R5bGVzLCBiZWhhdmlvcnMpO1xufVxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uL2RvbS5qc1wiO1xuLyoqXG4gKiBSZXByZXNlbnRzIHN0eWxlcyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGEgY3VzdG9tIGVsZW1lbnQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50U3R5bGVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gbmV3IFdlYWtTZXQoKTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IG51bGw7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhZGRTdHlsZXNUbyh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLmFkZCh0YXJnZXQpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcmVtb3ZlU3R5bGVzRnJvbSh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLmRlbGV0ZSh0YXJnZXQpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgaXNBdHRhY2hlZFRvKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzLmhhcyh0YXJnZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVzIGJlaGF2aW9ycyB3aXRoIHRoaXMgc2V0IG9mIHN0eWxlcy5cbiAgICAgKiBAcGFyYW0gYmVoYXZpb3JzIC0gVGhlIGJlaGF2aW9ycyB0byBhc3NvY2lhdGUuXG4gICAgICovXG4gICAgd2l0aEJlaGF2aW9ycyguLi5iZWhhdmlvcnMpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPVxuICAgICAgICAgICAgdGhpcy5iZWhhdmlvcnMgPT09IG51bGwgPyBiZWhhdmlvcnMgOiB0aGlzLmJlaGF2aW9ycy5jb25jYXQoYmVoYXZpb3JzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuLyoqXG4gKiBDcmVhdGUgRWxlbWVudFN0eWxlcyBmcm9tIENvbXBvc2FibGVTdHlsZXMuXG4gKi9cbkVsZW1lbnRTdHlsZXMuY3JlYXRlID0gKCgpID0+IHtcbiAgICBpZiAoRE9NLnN1cHBvcnRzQWRvcHRlZFN0eWxlU2hlZXRzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlU2hlZXRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgcmV0dXJuIChzdHlsZXMpID0+IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIG5ldyBBZG9wdGVkU3R5bGVTaGVldHNTdHlsZXMoc3R5bGVzLCBzdHlsZVNoZWV0Q2FjaGUpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgcmV0dXJuIChzdHlsZXMpID0+IG5ldyBTdHlsZUVsZW1lbnRTdHlsZXMoc3R5bGVzKTtcbn0pKCk7XG5mdW5jdGlvbiByZWR1Y2VTdHlsZXMoc3R5bGVzKSB7XG4gICAgcmV0dXJuIHN0eWxlc1xuICAgICAgICAubWFwKCh4KSA9PiB4IGluc3RhbmNlb2YgRWxlbWVudFN0eWxlcyA/IHJlZHVjZVN0eWxlcyh4LnN0eWxlcykgOiBbeF0pXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY29uY2F0KGN1cnIpLCBbXSk7XG59XG5mdW5jdGlvbiByZWR1Y2VCZWhhdmlvcnMoc3R5bGVzKSB7XG4gICAgcmV0dXJuIHN0eWxlc1xuICAgICAgICAubWFwKCh4KSA9PiAoeCBpbnN0YW5jZW9mIEVsZW1lbnRTdHlsZXMgPyB4LmJlaGF2aW9ycyA6IG51bGwpKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHJldiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2LmNvbmNhdChjdXJyKTtcbiAgICB9LCBudWxsKTtcbn1cbi8qKlxuICogaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE5LzAyL2NvbnN0cnVjdGFibGUtc3R5bGVzaGVldHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIEFkb3B0ZWRTdHlsZVNoZWV0c1N0eWxlcyBleHRlbmRzIEVsZW1lbnRTdHlsZXMge1xuICAgIGNvbnN0cnVjdG9yKHN0eWxlcywgc3R5bGVTaGVldENhY2hlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzO1xuICAgICAgICB0aGlzLnN0eWxlU2hlZXRDYWNoZSA9IHN0eWxlU2hlZXRDYWNoZTtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldHMgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JzID0gcmVkdWNlQmVoYXZpb3JzKHN0eWxlcyk7XG4gICAgfVxuICAgIGdldCBzdHlsZVNoZWV0cygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlU2hlZXRzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVTaGVldENhY2hlID0gdGhpcy5zdHlsZVNoZWV0Q2FjaGU7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0cyA9IHJlZHVjZVN0eWxlcyhzdHlsZXMpLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNoZWV0ID0gc3R5bGVTaGVldENhY2hlLmdldCh4KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKHgpO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0Q2FjaGUuc2V0KHgsIHNoZWV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoZWV0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlU2hlZXRzO1xuICAgIH1cbiAgICBhZGRTdHlsZXNUbyh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFsuLi50YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzLCAuLi50aGlzLnN0eWxlU2hlZXRzXTtcbiAgICAgICAgc3VwZXIuYWRkU3R5bGVzVG8odGFyZ2V0KTtcbiAgICB9XG4gICAgcmVtb3ZlU3R5bGVzRnJvbSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3Qgc291cmNlU2hlZXRzID0gdGhpcy5zdHlsZVNoZWV0cztcbiAgICAgICAgdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMuZmlsdGVyKCh4KSA9PiBzb3VyY2VTaGVldHMuaW5kZXhPZih4KSA9PT0gLTEpO1xuICAgICAgICBzdXBlci5yZW1vdmVTdHlsZXNGcm9tKHRhcmdldCk7XG4gICAgfVxufVxubGV0IHN0eWxlQ2xhc3NJZCA9IDA7XG5mdW5jdGlvbiBnZXROZXh0U3R5bGVDbGFzcygpIHtcbiAgICByZXR1cm4gYGZhc3Qtc3R5bGUtY2xhc3MtJHsrK3N0eWxlQ2xhc3NJZH1gO1xufVxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIFN0eWxlRWxlbWVudFN0eWxlcyBleHRlbmRzIEVsZW1lbnRTdHlsZXMge1xuICAgIGNvbnN0cnVjdG9yKHN0eWxlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlcztcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IHJlZHVjZUJlaGF2aW9ycyhzdHlsZXMpO1xuICAgICAgICB0aGlzLnN0eWxlU2hlZXRzID0gcmVkdWNlU3R5bGVzKHN0eWxlcyk7XG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IGdldE5leHRTdHlsZUNsYXNzKCk7XG4gICAgfVxuICAgIGFkZFN0eWxlc1RvKHRhcmdldCkge1xuICAgICAgICBjb25zdCBzdHlsZVNoZWV0cyA9IHRoaXMuc3R5bGVTaGVldHM7XG4gICAgICAgIGNvbnN0IHN0eWxlQ2xhc3MgPSB0aGlzLnN0eWxlQ2xhc3M7XG4gICAgICAgIHRhcmdldCA9IHRoaXMubm9ybWFsaXplVGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHN0eWxlU2hlZXRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBzdHlsZUNsYXNzO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5hZGRTdHlsZXNUbyh0YXJnZXQpO1xuICAgIH1cbiAgICByZW1vdmVTdHlsZXNGcm9tKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQgPSB0aGlzLm5vcm1hbGl6ZVRhcmdldCh0YXJnZXQpO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB0YXJnZXQucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5zdHlsZUNsYXNzfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzdHlsZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHN0eWxlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIucmVtb3ZlU3R5bGVzRnJvbSh0YXJnZXQpO1xuICAgIH1cbiAgICBpc0F0dGFjaGVkVG8odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pc0F0dGFjaGVkVG8odGhpcy5ub3JtYWxpemVUYXJnZXQodGFyZ2V0KSk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZVRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogdGFyZ2V0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IEV4ZWN1dGlvbkNvbnRleHQsIE9ic2VydmFibGUsIH0gZnJvbSBcIi4uL29ic2VydmF0aW9uL29ic2VydmFibGUuanNcIjtcbmltcG9ydCB7IFRhcmdldGVkSFRNTERpcmVjdGl2ZSB9IGZyb20gXCIuL2h0bWwtZGlyZWN0aXZlLmpzXCI7XG5mdW5jdGlvbiBub3JtYWxCaW5kKHNvdXJjZSwgY29udGV4dCkge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKHRoaXMuYmluZGluZ09ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ09ic2VydmVyID0gT2JzZXJ2YWJsZS5iaW5kaW5nKHRoaXMuYmluZGluZywgdGhpcywgdGhpcy5pc0JpbmRpbmdWb2xhdGlsZSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVGFyZ2V0KHRoaXMuYmluZGluZ09ic2VydmVyLm9ic2VydmUoc291cmNlLCBjb250ZXh0KSk7XG59XG5mdW5jdGlvbiB0cmlnZ2VyQmluZChzb3VyY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50YXJnZXROYW1lLCB0aGlzKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbFVuYmluZCgpIHtcbiAgICB0aGlzLmJpbmRpbmdPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG59XG5mdW5jdGlvbiBjb250ZW50VW5iaW5kKCkge1xuICAgIHRoaXMuYmluZGluZ09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy50YXJnZXQuJGZhc3RWaWV3O1xuICAgIGlmICh2aWV3ICE9PSB2b2lkIDAgJiYgdmlldy5pc0NvbXBvc2VkKSB7XG4gICAgICAgIHZpZXcudW5iaW5kKCk7XG4gICAgICAgIHZpZXcubmVlZHNCaW5kT25seSA9IHRydWU7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJpZ2dlclVuYmluZCgpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMudGFyZ2V0TmFtZSwgdGhpcyk7XG4gICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG59XG5mdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGVUYXJnZXQodmFsdWUpIHtcbiAgICBET00uc2V0QXR0cmlidXRlKHRoaXMudGFyZ2V0LCB0aGlzLnRhcmdldE5hbWUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUJvb2xlYW5BdHRyaWJ1dGVUYXJnZXQodmFsdWUpIHtcbiAgICBET00uc2V0Qm9vbGVhbkF0dHJpYnV0ZSh0aGlzLnRhcmdldCwgdGhpcy50YXJnZXROYW1lLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDb250ZW50VGFyZ2V0KHZhbHVlKSB7XG4gICAgLy8gSWYgdGhlcmUncyBubyBhY3R1YWwgdmFsdWUsIHRoZW4gdGhpcyBlcXVhdGVzIHRvIHRoZVxuICAgIC8vIGVtcHR5IHN0cmluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIGNvbnRlbnQgYmluZGluZ3MuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgdmFsdWUgaGFzIGEgXCJjcmVhdGVcIiBtZXRob2QsIHRoZW4gaXQncyBhIHRlbXBsYXRlLWxpa2UuXG4gICAgaWYgKHZhbHVlLmNyZWF0ZSkge1xuICAgICAgICB0aGlzLnRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy50YXJnZXQuJGZhc3RWaWV3O1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHByZXZpb3VzIHZpZXcgdGhhdCB3ZSBtaWdodCBiZSBhYmxlIHRvXG4gICAgICAgIC8vIHJldXNlIHRoZW4gY3JlYXRlIGEgbmV3IHZpZXcgZnJvbSB0aGUgdGVtcGxhdGUuXG4gICAgICAgIGlmICh2aWV3ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHZpZXcgPSB2YWx1ZS5jcmVhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgcHJldmlvdXMgdmlldywgYnV0IGl0IHdhc24ndCBjcmVhdGVkXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBzYW1lIHRlbXBsYXRlIGFzIHRoZSBuZXcgdmFsdWUsIHRoZW4gd2VcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gcmVtb3ZlIHRoZSBvbGQgdmlldyBpZiBpdCdzIHN0aWxsIGluIHRoZSBET01cbiAgICAgICAgICAgIC8vIGFuZCBjcmVhdGUgYSBuZXcgdmlldyBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC4kZmFzdFRlbXBsYXRlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2aWV3LmlzQ29tcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy51bmJpbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlldyA9IHZhbHVlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGUgdmFsdWUgaXMgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHRlbXBsYXRlXG4gICAgICAgIC8vIGFuZCB0aGF0IHRoZXJlJ3MgYWN0dWFsbHkgbm8gbmVlZCB0byBjb21wb3NlIGl0LlxuICAgICAgICBpZiAoIXZpZXcuaXNDb21wb3NlZCkge1xuICAgICAgICAgICAgdmlldy5pc0NvbXBvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZXcuYmluZCh0aGlzLnNvdXJjZSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIHZpZXcuaW5zZXJ0QmVmb3JlKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LiRmYXN0VmlldyA9IHZpZXc7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC4kZmFzdFRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmlldy5uZWVkc0JpbmRPbmx5KSB7XG4gICAgICAgICAgICB2aWV3Lm5lZWRzQmluZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHZpZXcuYmluZCh0aGlzLnNvdXJjZSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudGFyZ2V0LiRmYXN0VmlldztcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB2aWV3IGFuZCBpdCdzIGN1cnJlbnRseSBjb21wb3NlZCBpbnRvXG4gICAgICAgIC8vIHRoZSBET00sIHRoZW4gd2UgbmVlZCB0byByZW1vdmUgaXQuXG4gICAgICAgIGlmICh2aWV3ICE9PSB2b2lkIDAgJiYgdmlldy5pc0NvbXBvc2VkKSB7XG4gICAgICAgICAgICB2aWV3LmlzQ29tcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZpZXcucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAodmlldy5uZWVkc0JpbmRPbmx5KSB7XG4gICAgICAgICAgICAgICAgdmlldy5uZWVkc0JpbmRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3LnVuYmluZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlUHJvcGVydHlUYXJnZXQodmFsdWUpIHtcbiAgICB0aGlzLnRhcmdldFt0aGlzLnRhcmdldE5hbWVdID0gdmFsdWU7XG59XG5mdW5jdGlvbiB1cGRhdGVDbGFzc1RhcmdldCh2YWx1ZSkge1xuICAgIGNvbnN0IGNsYXNzVmVyc2lvbnMgPSB0aGlzLmNsYXNzVmVyc2lvbnMgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICBsZXQgdmVyc2lvbiA9IHRoaXMudmVyc2lvbiB8fCAwO1xuICAgIC8vIEFkZCB0aGUgY2xhc3NlcywgdHJhY2tpbmcgdGhlIHZlcnNpb24gYXQgd2hpY2ggdGhleSB3ZXJlIGFkZGVkLlxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBuYW1lcyA9IHZhbHVlLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IG5hbWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICBpZiAoY3VycmVudE5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzVmVyc2lvbnNbY3VycmVudE5hbWVdID0gdmVyc2lvbjtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGN1cnJlbnROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsYXNzVmVyc2lvbnMgPSBjbGFzc1ZlcnNpb25zO1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb24gKyAxO1xuICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwgdG8gYWRkIGNsYXNzZXMsIHRoZXJlJ3Mgbm8gbmVlZCB0byByZW1vdmUgb2xkIG9uZXMuXG4gICAgaWYgKHZlcnNpb24gPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBwcmV2aW91cyB2ZXJzaW9uLlxuICAgIHZlcnNpb24gLT0gMTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gY2xhc3NWZXJzaW9ucykge1xuICAgICAgICBpZiAoY2xhc3NWZXJzaW9uc1tuYW1lXSA9PT0gdmVyc2lvbikge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgY29uZmlndXJlcyBkYXRhIGJpbmRpbmcgdG8gZWxlbWVudCBjb250ZW50IGFuZCBhdHRyaWJ1dGVzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgSFRNTEJpbmRpbmdEaXJlY3RpdmUgZXh0ZW5kcyBUYXJnZXRlZEhUTUxEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmluZGluZ0RpcmVjdGl2ZS5cbiAgICAgKiBAcGFyYW0gYmluZGluZyAtIEEgYmluZGluZyB0aGF0IHJldHVybnMgdGhlIGRhdGEgdXNlZCB0byB1cGRhdGUgdGhlIERPTS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihiaW5kaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgIHRoaXMuYmluZCA9IG5vcm1hbEJpbmQ7XG4gICAgICAgIHRoaXMudW5iaW5kID0gbm9ybWFsVW5iaW5kO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCA9IHVwZGF0ZUF0dHJpYnV0ZVRhcmdldDtcbiAgICAgICAgdGhpcy5pc0JpbmRpbmdWb2xhdGlsZSA9IE9ic2VydmFibGUuaXNWb2xhdGlsZUJpbmRpbmcodGhpcy5iaW5kaW5nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgb3IgcHJvcGVydHkgdGhhdCB0aGlzXG4gICAgICogYmluZGluZyBpcyB0YXJnZXRpbmcuXG4gICAgICovXG4gICAgZ2V0IHRhcmdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsVGFyZ2V0TmFtZTtcbiAgICB9XG4gICAgc2V0IHRhcmdldE5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRhcmdldE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHZhbHVlWzBdKSB7XG4gICAgICAgICAgICBjYXNlIFwiOlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5lZFRhcmdldE5hbWUgPSB2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQgPSB1cGRhdGVQcm9wZXJ0eVRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhbmVkVGFyZ2V0TmFtZSA9PT0gXCJpbm5lckhUTUxcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kaW5nID0gdGhpcy5iaW5kaW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRpbmcgPSAocywgYykgPT4gRE9NLmNyZWF0ZUhUTUwoYmluZGluZyhzLCBjKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIj9cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuZWRUYXJnZXROYW1lID0gdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0ID0gdXBkYXRlQm9vbGVhbkF0dHJpYnV0ZVRhcmdldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJAXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbmVkVGFyZ2V0TmFtZSA9IHZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmQgPSB0cmlnZ2VyQmluZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZCA9IHRyaWdnZXJVbmJpbmQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5lZFRhcmdldE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCA9IHVwZGF0ZUNsYXNzVGFyZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGlzIGJpbmRpbmcgdGFyZ2V0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgcmF0aGVyIHRoYW5cbiAgICAgKiBhIHBhcnRpY3VsYXIgYXR0cmlidXRlIG9yIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHRhcmdldEF0Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQgPSB1cGRhdGVDb250ZW50VGFyZ2V0O1xuICAgICAgICB0aGlzLnVuYmluZCA9IGNvbnRlbnRVbmJpbmQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHJ1bnRpbWUgQmluZGluZ0JlaGF2aW9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogaW5mb3JtYXRpb24gc3RvcmVkIGluIHRoZSBCaW5kaW5nRGlyZWN0aXZlLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG5vZGUgdGhhdCB0aGUgYmluZGluZyBiZWhhdmlvciBzaG91bGQgYXR0YWNoIHRvLlxuICAgICAqL1xuICAgIGNyZWF0ZUJlaGF2aW9yKHRhcmdldCkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZ0JlaGF2aW9yKHRhcmdldCwgdGhpcy5iaW5kaW5nLCB0aGlzLmlzQmluZGluZ1ZvbGF0aWxlLCB0aGlzLmJpbmQsIHRoaXMudW5iaW5kLCB0aGlzLnVwZGF0ZVRhcmdldCwgdGhpcy5jbGVhbmVkVGFyZ2V0TmFtZSk7XG4gICAgfVxufVxuLyoqXG4gKiBBIGJlaGF2aW9yIHRoYXQgdXBkYXRlcyBjb250ZW50IGFuZCBhdHRyaWJ1dGVzIGJhc2VkIG9uIGEgY29uZmlndXJlZFxuICogQmluZGluZ0RpcmVjdGl2ZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEJpbmRpbmdCZWhhdmlvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCaW5kaW5nQmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGRhdGEgdXBkYXRlcy5cbiAgICAgKiBAcGFyYW0gYmluZGluZyAtIFRoZSBiaW5kaW5nIHRoYXQgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlIGZvciBhbiB1cGRhdGUuXG4gICAgICogQHBhcmFtIGlzQmluZGluZ1ZvbGF0aWxlIC0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJpbmRpbmcgaGFzIHZvbGF0aWxlIGRlcGVuZGVuY2llcy5cbiAgICAgKiBAcGFyYW0gYmluZCAtIFRoZSBvcGVyYXRpb24gdG8gcGVyZm9ybSBkdXJpbmcgYmluZGluZy5cbiAgICAgKiBAcGFyYW0gdW5iaW5kIC0gVGhlIG9wZXJhdGlvbiB0byBwZXJmb3JtIGR1cmluZyB1bmJpbmRpbmcuXG4gICAgICogQHBhcmFtIHVwZGF0ZVRhcmdldCAtIFRoZSBvcGVyYXRpb24gdG8gcGVyZm9ybSB3aGVuIHVwZGF0aW5nLlxuICAgICAqIEBwYXJhbSB0YXJnZXROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRhcmdldCBhdHRyaWJ1dGUgb3IgcHJvcGVydHkgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgYmluZGluZywgaXNCaW5kaW5nVm9sYXRpbGUsIGJpbmQsIHVuYmluZCwgdXBkYXRlVGFyZ2V0LCB0YXJnZXROYW1lKSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgdGhpcy5pc0JpbmRpbmdWb2xhdGlsZSA9IGlzQmluZGluZ1ZvbGF0aWxlO1xuICAgICAgICB0aGlzLmJpbmQgPSBiaW5kO1xuICAgICAgICB0aGlzLnVuYmluZCA9IHVuYmluZDtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQgPSB1cGRhdGVUYXJnZXQ7XG4gICAgICAgIHRoaXMudGFyZ2V0TmFtZSA9IHRhcmdldE5hbWU7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KHRoaXMuYmluZGluZ09ic2VydmVyLm9ic2VydmUodGhpcy5zb3VyY2UsIHRoaXMuY29udGV4dCkpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgRXhlY3V0aW9uQ29udGV4dC5zZXRFdmVudChldmVudCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYmluZGluZyh0aGlzLnNvdXJjZSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgRXhlY3V0aW9uQ29udGV4dC5zZXRFdmVudChudWxsKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjaGVkQmVoYXZpb3JIVE1MRGlyZWN0aXZlIH0gZnJvbSBcIi4vaHRtbC1kaXJlY3RpdmUuanNcIjtcbmltcG9ydCB7IE5vZGVPYnNlcnZhdGlvbkJlaGF2aW9yIH0gZnJvbSBcIi4vbm9kZS1vYnNlcnZhdGlvbi5qc1wiO1xuLyoqXG4gKiBUaGUgcnVudGltZSBiZWhhdmlvciBmb3IgY2hpbGQgbm9kZSBvYnNlcnZhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIENoaWxkcmVuQmVoYXZpb3IgZXh0ZW5kcyBOb2RlT2JzZXJ2YXRpb25CZWhhdmlvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDaGlsZHJlbkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgZWxlbWVudCB0YXJnZXQgdG8gb2JzZXJ2ZSBjaGlsZHJlbiBvbi5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIG9ic2VydmluZyB0aGUgZWxlbWVudCBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIodGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIG9wdGlvbnMuY2hpbGRMaXN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmVnaW5zIG9ic2VydmF0aW9uIG9mIHRoZSBub2Rlcy5cbiAgICAgKi9cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMudGFyZ2V0LCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyBvYnNlcnZhdGlvbiBvZiB0aGUgbm9kZXMuXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgbm9kZXMgdGhhdCBzaG91bGQgYmUgYXNzaWduZWQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgaWYgKFwic3VidHJlZVwiIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy50YXJnZXQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5jaGlsZE5vZGVzKTtcbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgb2JzZXJ2ZXMgdGhlIGBjaGlsZE5vZGVzYCBvZiBhbiBlbGVtZW50IGFuZCB1cGRhdGVzIGEgcHJvcGVydHlcbiAqIHdoZW5ldmVyIHRoZXkgY2hhbmdlLlxuICogQHBhcmFtIHByb3BlcnR5T3JPcHRpb25zIC0gVGhlIG9wdGlvbnMgdXNlZCB0byBjb25maWd1cmUgY2hpbGQgbm9kZSBvYnNlcnZhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BlcnR5T3JPcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0eU9yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBwcm9wZXJ0eU9yT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eU9yT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdHRhY2hlZEJlaGF2aW9ySFRNTERpcmVjdGl2ZShcImZhc3QtY2hpbGRyZW5cIiwgQ2hpbGRyZW5CZWhhdmlvciwgcHJvcGVydHlPck9wdGlvbnMpO1xufVxuIiwiaW1wb3J0IHsgX2ludGVycG9sYXRpb25FbmQsIF9pbnRlcnBvbGF0aW9uU3RhcnQsIERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IEhUTUxCaW5kaW5nRGlyZWN0aXZlIH0gZnJvbSBcIi4vYmluZGluZy5qc1wiO1xubGV0IHNoYXJlZENvbnRleHQgPSBudWxsO1xuY2xhc3MgQ29tcGlsYXRpb25Db250ZXh0IHtcbiAgICBhZGRGYWN0b3J5KGZhY3RvcnkpIHtcbiAgICAgICAgZmFjdG9yeS50YXJnZXRJbmRleCA9IHRoaXMudGFyZ2V0SW5kZXg7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JGYWN0b3JpZXMucHVzaChmYWN0b3J5KTtcbiAgICB9XG4gICAgY2FwdHVyZUNvbnRlbnRCaW5kaW5nKGRpcmVjdGl2ZSkge1xuICAgICAgICBkaXJlY3RpdmUudGFyZ2V0QXRDb250ZW50KCk7XG4gICAgICAgIHRoaXMuYWRkRmFjdG9yeShkaXJlY3RpdmUpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvckZhY3RvcmllcyA9IFtdO1xuICAgICAgICB0aGlzLnRhcmdldEluZGV4ID0gLTE7XG4gICAgfVxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIHNoYXJlZENvbnRleHQgPSB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgYm9ycm93KGRpcmVjdGl2ZXMpIHtcbiAgICAgICAgY29uc3Qgc2hhcmVhYmxlID0gc2hhcmVkQ29udGV4dCB8fCBuZXcgQ29tcGlsYXRpb25Db250ZXh0KCk7XG4gICAgICAgIHNoYXJlYWJsZS5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICAgICAgc2hhcmVhYmxlLnJlc2V0KCk7XG4gICAgICAgIHNoYXJlZENvbnRleHQgPSBudWxsO1xuICAgICAgICByZXR1cm4gc2hhcmVhYmxlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUFnZ3JlZ2F0ZUJpbmRpbmcocGFydHMpIHtcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9XG4gICAgbGV0IHRhcmdldE5hbWU7XG4gICAgY29uc3QgcGFydENvdW50ID0gcGFydHMubGVuZ3RoO1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBwYXJ0cy5tYXAoKHgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geDtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXROYW1lID0geC50YXJnZXROYW1lIHx8IHRhcmdldE5hbWU7XG4gICAgICAgIHJldHVybiB4LmJpbmRpbmc7XG4gICAgfSk7XG4gICAgY29uc3QgYmluZGluZyA9IChzY29wZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0Q291bnQ7ICsraSkge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGZpbmFsUGFydHNbaV0oc2NvcGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgICBjb25zdCBkaXJlY3RpdmUgPSBuZXcgSFRNTEJpbmRpbmdEaXJlY3RpdmUoYmluZGluZyk7XG4gICAgZGlyZWN0aXZlLnRhcmdldE5hbWUgPSB0YXJnZXROYW1lO1xuICAgIHJldHVybiBkaXJlY3RpdmU7XG59XG5jb25zdCBpbnRlcnBvbGF0aW9uRW5kTGVuZ3RoID0gX2ludGVycG9sYXRpb25FbmQubGVuZ3RoO1xuZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRleHQsIHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVQYXJ0cyA9IHZhbHVlLnNwbGl0KF9pbnRlcnBvbGF0aW9uU3RhcnQpO1xuICAgIGlmICh2YWx1ZVBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYmluZGluZ1BhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdmFsdWVQYXJ0cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB2YWx1ZVBhcnRzW2ldO1xuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnQuaW5kZXhPZihfaW50ZXJwb2xhdGlvbkVuZCk7XG4gICAgICAgIGxldCBsaXRlcmFsO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBsaXRlcmFsID0gY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZUluZGV4ID0gcGFyc2VJbnQoY3VycmVudC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICAgICAgICAgIGJpbmRpbmdQYXJ0cy5wdXNoKGNvbnRleHQuZGlyZWN0aXZlc1tkaXJlY3RpdmVJbmRleF0pO1xuICAgICAgICAgICAgbGl0ZXJhbCA9IGN1cnJlbnQuc3Vic3RyaW5nKGluZGV4ICsgaW50ZXJwb2xhdGlvbkVuZExlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpdGVyYWwgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGJpbmRpbmdQYXJ0cy5wdXNoKGxpdGVyYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nUGFydHM7XG59XG5mdW5jdGlvbiBjb21waWxlQXR0cmlidXRlcyhjb250ZXh0LCBub2RlLCBpbmNsdWRlQmFzaWNWYWx1ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGVzW2ldO1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlQ29udGVudChjb250ZXh0LCBhdHRyVmFsdWUpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKHBhcnNlUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZUJhc2ljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEhUTUxCaW5kaW5nRGlyZWN0aXZlKCgpID0+IGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnRhcmdldE5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjcmVhdGVBZ2dyZWdhdGVCaW5kaW5nKHBhcnNlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBpaS0tO1xuICAgICAgICAgICAgY29udGV4dC5hZGRGYWN0b3J5KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjb21waWxlQ29udGVudChjb250ZXh0LCBub2RlLCB3YWxrZXIpIHtcbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlQ29udGVudChjb250ZXh0LCBub2RlLnRleHRDb250ZW50KTtcbiAgICBpZiAocGFyc2VSZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGxhc3ROb2RlID0gbm9kZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gcGFyc2VSZXN1bHQubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhcnQgPSBwYXJzZVJlc3VsdFtpXTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gaSA9PT0gMFxuICAgICAgICAgICAgICAgID8gbm9kZVxuICAgICAgICAgICAgICAgIDogbGFzdE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksIGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFBhcnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQYXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNhcHR1cmVDb250ZW50QmluZGluZyhjdXJyZW50UGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0Tm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgY29udGV4dC50YXJnZXRJbmRleCsrO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC50YXJnZXRJbmRleC0tO1xuICAgIH1cbn1cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBhbmQgYXNzb2NpYXRlZCBkaXJlY3RpdmVzIGludG8gYSByYXcgY29tcGlsYXRpb25cbiAqIHJlc3VsdCB3aGljaCBpbmNsdWRlIGEgY2xvbmVhYmxlIERvY3VtZW50RnJhZ21lbnQgYW5kIGZhY3RvcmllcyBjYXBhYmxlXG4gKiBvZiBhdHRhY2hpbmcgcnVudGltZSBiZWhhdmlvciB0byBub2RlcyB3aXRoaW4gdGhlIGZyYWdtZW50LlxuICogQHBhcmFtIHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHRvIGNvbXBpbGUuXG4gKiBAcGFyYW0gZGlyZWN0aXZlcyAtIFRoZSBkaXJlY3RpdmVzIHJlZmVyZW5jZWQgYnkgdGhlIHRlbXBsYXRlLlxuICogQHJlbWFya3NcbiAqIFRoZSB0ZW1wbGF0ZSB0aGF0IGlzIHByb3ZpZGVkIGZvciBjb21waWxhdGlvbiBpcyBhbHRlcmVkIGluLXBsYWNlXG4gKiBhbmQgY2Fubm90IGJlIGNvbXBpbGVkIGFnYWluLiBJZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgbXVzdCBiZSBwcmVzZXJ2ZWQsXG4gKiBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBjbG9uZSB0aGUgb3JpZ2luYWwgYW5kIHBhc3MgdGhlIGNsb25lIHRvIHRoaXMgQVBJLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkaXJlY3RpdmVzKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTExMTE4NjRcbiAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBDb21waWxhdGlvbkNvbnRleHQuYm9ycm93KGRpcmVjdGl2ZXMpO1xuICAgIGNvbXBpbGVBdHRyaWJ1dGVzKGNvbnRleHQsIHRlbXBsYXRlLCB0cnVlKTtcbiAgICBjb25zdCBob3N0QmVoYXZpb3JGYWN0b3JpZXMgPSBjb250ZXh0LmJlaGF2aW9yRmFjdG9yaWVzO1xuICAgIGNvbnRleHQucmVzZXQoKTtcbiAgICBjb25zdCB3YWxrZXIgPSBET00uY3JlYXRlVGVtcGxhdGVXYWxrZXIoZnJhZ21lbnQpO1xuICAgIGxldCBub2RlO1xuICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICBjb250ZXh0LnRhcmdldEluZGV4Kys7XG4gICAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOiAvLyBlbGVtZW50IG5vZGVcbiAgICAgICAgICAgICAgICBjb21waWxlQXR0cmlidXRlcyhjb250ZXh0LCBub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogLy8gdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgY29tcGlsZUNvbnRlbnQoY29udGV4dCwgbm9kZSwgd2Fsa2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODogLy8gY29tbWVudFxuICAgICAgICAgICAgICAgIGlmIChET00uaXNNYXJrZXIobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5hZGRGYWN0b3J5KGRpcmVjdGl2ZXNbRE9NLmV4dHJhY3REaXJlY3RpdmVJbmRleEZyb21NYXJrZXIobm9kZSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRhcmdldE9mZnNldCA9IDA7XG4gICAgaWYgKFxuICAgIC8vIElmIHRoZSBmaXJzdCBub2RlIGluIGEgZnJhZ21lbnQgaXMgYSBtYXJrZXIsIHRoYXQgbWVhbnMgaXQncyBhbiB1bnN0YWJsZSBmaXJzdCBub2RlLFxuICAgIC8vIGJlY2F1c2Ugc29tZXRoaW5nIGxpa2UgYSB3aGVuLCByZXBlYXQsIGV0Yy4gY291bGQgYWRkIG5vZGVzIGJlZm9yZSB0aGUgbWFya2VyLlxuICAgIC8vIFRvIG1pdGlnYXRlIHRoaXMsIHdlIGluc2VydCBhIHN0YWJsZSBmaXJzdCBub2RlLiBIb3dldmVyLCBpZiB3ZSBpbnNlcnQgYSBub2RlLFxuICAgIC8vIHRoYXQgd2lsbCBhbHRlciB0aGUgcmVzdWx0IG9mIHRoZSBUcmVlV2Fsa2VyLiBTbywgd2UgYWxzbyBuZWVkIHRvIG9mZnNldCB0aGUgdGFyZ2V0IGluZGV4LlxuICAgIERPTS5pc01hcmtlcihmcmFnbWVudC5maXJzdENoaWxkKSB8fFxuICAgICAgICAvLyBPciBpZiB0aGVyZSBpcyBvbmx5IG9uZSBub2RlIGFuZCBhIGRpcmVjdGl2ZSwgaXQgbWVhbnMgdGhlIHRlbXBsYXRlJ3MgY29udGVudFxuICAgICAgICAvLyBpcyAqb25seSogdGhlIGRpcmVjdGl2ZS4gSW4gdGhhdCBjYXNlLCBIVE1MVmlldy5kaXNwb3NlKCkgbWlzc2VzIGFueSBub2RlcyBpbnNlcnRlZCBieVxuICAgICAgICAvLyB0aGUgZGlyZWN0aXZlLiBJbnNlcnRpbmcgYSBuZXcgbm9kZSBlbnN1cmVzIHByb3BlciBkaXNwb3NhbCBvZiBub2RlcyBhZGRlZCBieSB0aGUgZGlyZWN0aXZlLlxuICAgICAgICAoZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiYgZGlyZWN0aXZlcy5sZW5ndGgpKSB7XG4gICAgICAgIGZyYWdtZW50Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpLCBmcmFnbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gLTE7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdCZWhhdmlvckZhY3RvcmllcyA9IGNvbnRleHQuYmVoYXZpb3JGYWN0b3JpZXM7XG4gICAgY29udGV4dC5yZWxlYXNlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgIHZpZXdCZWhhdmlvckZhY3RvcmllcyxcbiAgICAgICAgaG9zdEJlaGF2aW9yRmFjdG9yaWVzLFxuICAgICAgICB0YXJnZXRPZmZzZXQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbi8qKlxuICogSW5zdHJ1Y3RzIHRoZSB0ZW1wbGF0ZSBlbmdpbmUgdG8gYXBwbHkgYmVoYXZpb3IgdG8gYSBub2RlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgSFRNTERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIERPTSBub2RlIHRvIHdoaWNoIHRoZSBjcmVhdGVkIGJlaGF2aW9yIHdpbGwgYXBwbHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldEluZGV4ID0gMDtcbiAgICB9XG59XG4vKipcbiAqIEEge0BsaW5rIEhUTUxEaXJlY3RpdmV9IHRoYXQgdGFyZ2V0cyBhIG5hbWVkIGF0dHJpYnV0ZSBvciBwcm9wZXJ0eSBvbiBhIG5vZGUuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBUYXJnZXRlZEhUTUxEaXJlY3RpdmUgZXh0ZW5kcyBIVE1MRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBwbGFjZWhvbGRlciBzdHJpbmcgYmFzZWQgb24gdGhlIGRpcmVjdGl2ZSdzIGluZGV4IHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyID0gRE9NLmNyZWF0ZUludGVycG9sYXRpb25QbGFjZWhvbGRlcjtcbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXR0YWNoZXMgc3BlY2lhbCBiZWhhdmlvciB0byBhbiBlbGVtZW50IHZpYSBhIGN1c3RvbSBhdHRyaWJ1dGUuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRhY2hlZEJlaGF2aW9ySFRNTERpcmVjdGl2ZSBleHRlbmRzIEhUTUxEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgYmVoYXZpb3I7IHVzZWQgYXMgYSBjdXN0b20gYXR0cmlidXRlIG9uIHRoZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBiZWhhdmlvciAtIFRoZSBiZWhhdmlvciB0byBpbnN0YW50aWF0ZSBhbmQgYXR0YWNoIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBiZWhhdmlvciBkdXJpbmcgY3JlYXRpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgYmVoYXZpb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IGJlaGF2aW9yO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGxhY2Vob2xkZXIgc3RyaW5nIGJhc2VkIG9uIHRoZSBkaXJlY3RpdmUncyBpbmRleCB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBDcmVhdGVzIGEgY3VzdG9tIGF0dHJpYnV0ZSBwbGFjZWhvbGRlci5cbiAgICAgKi9cbiAgICBjcmVhdGVQbGFjZWhvbGRlcihpbmRleCkge1xuICAgICAgICByZXR1cm4gRE9NLmNyZWF0ZUN1c3RvbUF0dHJpYnV0ZVBsYWNlaG9sZGVyKHRoaXMubmFtZSwgaW5kZXgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmVoYXZpb3IgZm9yIHRoZSBwcm92aWRlZCB0YXJnZXQgbm9kZS5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIG5vZGUgaW5zdGFuY2UgdG8gY3JlYXRlIHRoZSBiZWhhdmlvciBmb3IuXG4gICAgICogQHJlbWFya3NcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBgYmVoYXZpb3JgIHR5cGUgdGhpcyBkaXJlY3RpdmUgd2FzIGNvbnN0cnVjdGVkIHdpdGhcbiAgICAgKiBhbmQgcGFzc2VzIHRoZSB0YXJnZXQgYW5kIG9wdGlvbnMgdG8gdGhhdCBgYmVoYXZpb3JgJ3MgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgY3JlYXRlQmVoYXZpb3IodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5iZWhhdmlvcih0YXJnZXQsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5pbXBvcnQgeyBlbXB0eUFycmF5IH0gZnJvbSBcIi4uL3BsYXRmb3JtLmpzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbHRlciBhIE5vZGUgYXJyYXksIHNlbGVjdGluZyBvbmx5IGVsZW1lbnRzLlxuICogQHBhcmFtIHNlbGVjdG9yIC0gQW4gb3B0aW9uYWwgc2VsZWN0b3IgdG8gcmVzdHJpY3QgdGhlIGZpbHRlciB0by5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm5vZGVUeXBlID09PSAxICYmIHZhbHVlLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm5vZGVUeXBlID09PSAxO1xuICAgIH07XG59XG4vKipcbiAqIEEgYmFzZSBjbGFzcyBmb3Igbm9kZSBvYnNlcnZhdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgTm9kZU9ic2VydmF0aW9uQmVoYXZpb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTm9kZU9ic2VydmF0aW9uQmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSB0YXJnZXQgdG8gYXNzaWduIHRoZSBub2RlcyBwcm9wZXJ0eSBvbi5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIHVzZSBpbiBjb25maWd1cmluZyBub2RlIG9ic2VydmF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgYmVoYXZpb3IgdG8gdGhlIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSB0byBiaW5kIHRvLlxuICAgICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIGV4ZWN1dGlvbiBjb250ZXh0IHRoYXQgdGhlIGJpbmRpbmcgaXMgb3BlcmF0aW5nIHdpdGhpbi5cbiAgICAgKi9cbiAgICBiaW5kKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5vcHRpb25zLnByb3BlcnR5O1xuICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZSA9IE9ic2VydmFibGUuZ2V0QWNjZXNzb3JzKHNvdXJjZSkuc29tZSgoeCkgPT4geC5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KHRoaXMuY29tcHV0ZU5vZGVzKCkpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhpcyBiZWhhdmlvciBmcm9tIHRoZSBzb3VyY2UuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2UgdG8gdW5iaW5kIGZyb20uXG4gICAgICovXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldChlbXB0eUFycmF5KTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBoYW5kbGVFdmVudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQodGhpcy5jb21wdXRlTm9kZXMoKSk7XG4gICAgfVxuICAgIGNvbXB1dGVOb2RlcygpIHtcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmZpbHRlcih0aGlzLm9wdGlvbnMuZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICAgIHVwZGF0ZVRhcmdldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNvdXJjZVt0aGlzLm9wdGlvbnMucHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQXR0YWNoZWRCZWhhdmlvckhUTUxEaXJlY3RpdmUgfSBmcm9tIFwiLi9odG1sLWRpcmVjdGl2ZS5qc1wiO1xuLyoqXG4gKiBUaGUgcnVudGltZSBiZWhhdmlvciBmb3IgdGVtcGxhdGUgcmVmZXJlbmNlcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFJlZkJlaGF2aW9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlZkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgZWxlbWVudCB0byByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHByb3BlcnR5TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24gdGhlIHJlZmVyZW5jZSB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBiZWhhdmlvciB0byB0aGUgc291cmNlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIHRvIGJpbmQgdG8uXG4gICAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgZXhlY3V0aW9uIGNvbnRleHQgdGhhdCB0aGUgYmluZGluZyBpcyBvcGVyYXRpbmcgd2l0aGluLlxuICAgICAqL1xuICAgIGJpbmQoc291cmNlKSB7XG4gICAgICAgIHNvdXJjZVt0aGlzLnByb3BlcnR5TmFtZV0gPSB0aGlzLnRhcmdldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGlzIGJlaGF2aW9yIGZyb20gdGhlIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSB0byB1bmJpbmQgZnJvbS5cbiAgICAgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXG4gICAgdW5iaW5kKCkgeyB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgb2JzZXJ2ZXMgdGhlIHVwZGF0ZXMgYSBwcm9wZXJ0eSB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHByb3BlcnR5TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24gdGhlIHJlZmVyZW5jZSB0by5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZihwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEF0dGFjaGVkQmVoYXZpb3JIVE1MRGlyZWN0aXZlKFwiZmFzdC1yZWZcIiwgUmVmQmVoYXZpb3IsIHByb3BlcnR5TmFtZSk7XG59XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB9IGZyb20gXCIuLi9vYnNlcnZhdGlvbi9vYnNlcnZhYmxlLmpzXCI7XG5pbXBvcnQgeyBlbmFibGVBcnJheU9ic2VydmF0aW9uIH0gZnJvbSBcIi4uL29ic2VydmF0aW9uL2FycmF5LW9ic2VydmVyLmpzXCI7XG5pbXBvcnQgeyBlbXB0eUFycmF5IH0gZnJvbSBcIi4uL3BsYXRmb3JtLmpzXCI7XG5pbXBvcnQgeyBIVE1MRGlyZWN0aXZlIH0gZnJvbSBcIi4vaHRtbC1kaXJlY3RpdmUuanNcIjtcbmltcG9ydCB7IEhUTUxWaWV3IH0gZnJvbSBcIi4vdmlldy5qc1wiO1xuY29uc3QgZGVmYXVsdFJlcGVhdE9wdGlvbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBwb3NpdGlvbmluZzogZmFsc2UsXG4gICAgcmVjeWNsZTogdHJ1ZSxcbn0pO1xuZnVuY3Rpb24gYmluZFdpdGhvdXRQb3NpdGlvbmluZyh2aWV3LCBpdGVtcywgaW5kZXgsIGNvbnRleHQpIHtcbiAgICB2aWV3LmJpbmQoaXRlbXNbaW5kZXhdLCBjb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGJpbmRXaXRoUG9zaXRpb25pbmcodmlldywgaXRlbXMsIGluZGV4LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShjb250ZXh0KTtcbiAgICBjaGlsZENvbnRleHQuaW5kZXggPSBpbmRleDtcbiAgICBjaGlsZENvbnRleHQubGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgIHZpZXcuYmluZChpdGVtc1tpbmRleF0sIGNoaWxkQ29udGV4dCk7XG59XG4vKipcbiAqIEEgYmVoYXZpb3IgdGhhdCByZW5kZXJzIGEgdGVtcGxhdGUgZm9yIGVhY2ggaXRlbSBpbiBhbiBhcnJheS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcGVhdEJlaGF2aW9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlcGVhdEJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiAtIFRoZSBsb2NhdGlvbiBpbiB0aGUgRE9NIHRvIHJlbmRlciB0aGUgcmVwZWF0LlxuICAgICAqIEBwYXJhbSBpdGVtc0JpbmRpbmcgLSBUaGUgYXJyYXkgdG8gcmVuZGVyLlxuICAgICAqIEBwYXJhbSBpc0l0ZW1zQmluZGluZ1ZvbGF0aWxlIC0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZW1zIGJpbmRpbmcgaGFzIHZvbGF0aWxlIGRlcGVuZGVuY2llcy5cbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVCaW5kaW5nIC0gVGhlIHRlbXBsYXRlIHRvIHJlbmRlciBmb3IgZWFjaCBpdGVtLlxuICAgICAqIEBwYXJhbSBpc1RlbXBsYXRlQmluZGluZ1ZvbGF0aWxlIC0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRlbXBsYXRlIGJpbmRpbmcgaGFzIHZvbGF0aWxlIGRlcGVuZGVuY2llcy5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdXNlZCB0byB0dXJuIG9uIHNwZWNpYWwgcmVwZWF0IGZlYXR1cmVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uLCBpdGVtc0JpbmRpbmcsIGlzSXRlbXNCaW5kaW5nVm9sYXRpbGUsIHRlbXBsYXRlQmluZGluZywgaXNUZW1wbGF0ZUJpbmRpbmdWb2xhdGlsZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuaXRlbXNCaW5kaW5nID0gaXRlbXNCaW5kaW5nO1xuICAgICAgICB0aGlzLnRlbXBsYXRlQmluZGluZyA9IHRlbXBsYXRlQmluZGluZztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZXdzID0gW107XG4gICAgICAgIHRoaXMuaXRlbXMgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGV4dCA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5jaGlsZENvbnRleHQgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuYmluZFZpZXcgPSBiaW5kV2l0aG91dFBvc2l0aW9uaW5nO1xuICAgICAgICB0aGlzLml0ZW1zQmluZGluZ09ic2VydmVyID0gT2JzZXJ2YWJsZS5iaW5kaW5nKGl0ZW1zQmluZGluZywgdGhpcywgaXNJdGVtc0JpbmRpbmdWb2xhdGlsZSk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVCaW5kaW5nT2JzZXJ2ZXIgPSBPYnNlcnZhYmxlLmJpbmRpbmcodGVtcGxhdGVCaW5kaW5nLCB0aGlzLCBpc1RlbXBsYXRlQmluZGluZ1ZvbGF0aWxlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMucG9zaXRpb25pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZFZpZXcgPSBiaW5kV2l0aFBvc2l0aW9uaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBiZWhhdmlvciB0byB0aGUgc291cmNlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIHRvIGJpbmQgdG8uXG4gICAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgZXhlY3V0aW9uIGNvbnRleHQgdGhhdCB0aGUgYmluZGluZyBpcyBvcGVyYXRpbmcgd2l0aGluLlxuICAgICAqL1xuICAgIGJpbmQoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2hpbGRDb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jaGlsZENvbnRleHQucGFyZW50ID0gc291cmNlO1xuICAgICAgICB0aGlzLmNoaWxkQ29udGV4dC5wYXJlbnRDb250ZXh0ID0gdGhpcy5vcmlnaW5hbENvbnRleHQ7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zQmluZGluZ09ic2VydmVyLm9ic2VydmUoc291cmNlLCB0aGlzLm9yaWdpbmFsQ29udGV4dCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlQmluZGluZ09ic2VydmVyLm9ic2VydmUoc291cmNlLCB0aGlzLm9yaWdpbmFsQ29udGV4dCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZUl0ZW1zKHRydWUpO1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGxWaWV3cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoaXMgYmVoYXZpb3IgZnJvbSB0aGUgc291cmNlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIHRvIHVuYmluZCBmcm9tLlxuICAgICAqL1xuICAgIHVuYmluZCgpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNPYnNlcnZlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc09ic2VydmVyLnVuc3Vic2NyaWJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kQWxsVmlld3MoKTtcbiAgICAgICAgdGhpcy5pdGVtc0JpbmRpbmdPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVCaW5kaW5nT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgaGFuZGxlQ2hhbmdlKHNvdXJjZSwgYXJncykge1xuICAgICAgICBpZiAoc291cmNlID09PSB0aGlzLml0ZW1zQmluZGluZykge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXNCaW5kaW5nT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNvdXJjZSwgdGhpcy5vcmlnaW5hbENvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSXRlbXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEFsbFZpZXdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlID09PSB0aGlzLnRlbXBsYXRlQmluZGluZykge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVCaW5kaW5nT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNvdXJjZSwgdGhpcy5vcmlnaW5hbENvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWxsVmlld3ModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXdzKGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9ic2VydmVJdGVtcyhmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGVtcHR5QXJyYXk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkT2JzZXJ2ZXIgPSB0aGlzLml0ZW1zT2JzZXJ2ZXI7XG4gICAgICAgIGNvbnN0IG5ld09ic2VydmVyID0gKHRoaXMuaXRlbXNPYnNlcnZlciA9IE9ic2VydmFibGUuZ2V0Tm90aWZpZXIodGhpcy5pdGVtcykpO1xuICAgICAgICBjb25zdCBoYXNOZXdPYnNlcnZlciA9IG9sZE9ic2VydmVyICE9PSBuZXdPYnNlcnZlcjtcbiAgICAgICAgaWYgKGhhc05ld09ic2VydmVyICYmIG9sZE9ic2VydmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvbGRPYnNlcnZlci51bnN1YnNjcmliZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzTmV3T2JzZXJ2ZXIgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIG5ld09ic2VydmVyLnN1YnNjcmliZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVWaWV3cyhzcGxpY2VzKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuY2hpbGRDb250ZXh0O1xuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICAgIGNvbnN0IHRvdGFsUmVtb3ZlZCA9IFtdO1xuICAgICAgICBjb25zdCBiaW5kVmlldyA9IHRoaXMuYmluZFZpZXc7XG4gICAgICAgIGxldCByZW1vdmVEZWx0YSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHNwbGljZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaWNlID0gc3BsaWNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWQgPSBzcGxpY2UucmVtb3ZlZDtcbiAgICAgICAgICAgIHRvdGFsUmVtb3ZlZC5wdXNoKC4uLnZpZXdzLnNwbGljZShzcGxpY2UuaW5kZXggKyByZW1vdmVEZWx0YSwgcmVtb3ZlZC5sZW5ndGgpKTtcbiAgICAgICAgICAgIHJlbW92ZURlbHRhIC09IHNwbGljZS5hZGRlZENvdW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzcGxpY2VzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGljZSA9IHNwbGljZXNbaV07XG4gICAgICAgICAgICBsZXQgYWRkSW5kZXggPSBzcGxpY2UuaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBhZGRJbmRleCArIHNwbGljZS5hZGRlZENvdW50O1xuICAgICAgICAgICAgZm9yICg7IGFkZEluZGV4IDwgZW5kOyArK2FkZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmVpZ2hib3IgPSB2aWV3c1thZGRJbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBuZWlnaGJvciA/IG5laWdoYm9yLmZpcnN0Q2hpbGQgOiB0aGlzLmxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLm9wdGlvbnMucmVjeWNsZSAmJiB0b3RhbFJlbW92ZWQubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IHRvdGFsUmVtb3ZlZC5zaGlmdCgpXG4gICAgICAgICAgICAgICAgICAgIDogdGVtcGxhdGUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgdmlld3Muc3BsaWNlKGFkZEluZGV4LCAwLCB2aWV3KTtcbiAgICAgICAgICAgICAgICBiaW5kVmlldyh2aWV3LCBpdGVtcywgYWRkSW5kZXgsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgdmlldy5pbnNlcnRCZWZvcmUobG9jYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHRvdGFsUmVtb3ZlZC5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICB0b3RhbFJlbW92ZWRbaV0uZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHZpZXdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHZpZXdzW2ldLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRleHQubGVuZ3RoID0gaWk7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRleHQuaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnJlc2hBbGxWaWV3cyh0ZW1wbGF0ZUNoYW5nZWQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuY2hpbGRDb250ZXh0O1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcbiAgICAgICAgY29uc3QgYmluZFZpZXcgPSB0aGlzLmJpbmRWaWV3O1xuICAgICAgICBsZXQgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICAgIGxldCB2aWV3c0xlbmd0aCA9IHZpZXdzLmxlbmd0aDtcbiAgICAgICAgaWYgKGl0ZW1zTGVuZ3RoID09PSAwIHx8IHRlbXBsYXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgLy8gYWxsIHZpZXdzIG5lZWQgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgSFRNTFZpZXcuZGlzcG9zZUNvbnRpZ3VvdXNCYXRjaCh2aWV3cyk7XG4gICAgICAgICAgICB2aWV3c0xlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpZXdzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBhbGwgdmlld3MgbmVlZCB0byBiZSBjcmVhdGVkXG4gICAgICAgICAgICB0aGlzLnZpZXdzID0gdmlld3MgPSBuZXcgQXJyYXkoaXRlbXNMZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc0xlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHRlbXBsYXRlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGJpbmRWaWV3KHZpZXcsIGl0ZW1zLCBpLCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgICAgIHZpZXdzW2ldID0gdmlldztcbiAgICAgICAgICAgICAgICB2aWV3Lmluc2VydEJlZm9yZShsb2NhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBhdHRlbXB0IHRvIHJldXNlIGV4aXN0aW5nIHZpZXdzIHdpdGggbmV3IGRhdGFcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgaXRlbXNMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgdmlld3NMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdzW2ldO1xuICAgICAgICAgICAgICAgICAgICBiaW5kVmlldyh2aWV3LCBpdGVtcywgaSwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0ZW1wbGF0ZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYmluZFZpZXcodmlldywgaXRlbXMsIGksIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdzLnB1c2godmlldyk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuaW5zZXJ0QmVmb3JlKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkID0gdmlld3Muc3BsaWNlKGksIHZpZXdzTGVuZ3RoIC0gaSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBpdGVtc0xlbmd0aCA9IHJlbW92ZWQubGVuZ3RoOyBpIDwgaXRlbXNMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZWRbaV0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVuYmluZEFsbFZpZXdzKCkge1xuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHZpZXdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIHZpZXdzW2ldLnVuYmluZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGNvbmZpZ3VyZXMgbGlzdCByZW5kZXJpbmcuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBIVE1MRGlyZWN0aXZlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlcGVhdERpcmVjdGl2ZS5cbiAgICAgKiBAcGFyYW0gaXRlbXNCaW5kaW5nIC0gVGhlIGJpbmRpbmcgdGhhdCBwcm92aWRlcyB0aGUgYXJyYXkgdG8gcmVuZGVyLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUJpbmRpbmcgLSBUaGUgdGVtcGxhdGUgYmluZGluZyB1c2VkIHRvIG9idGFpbiBhIHRlbXBsYXRlIHRvIHJlbmRlciBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdXNlZCB0byB0dXJuIG9uIHNwZWNpYWwgcmVwZWF0IGZlYXR1cmVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1zQmluZGluZywgdGVtcGxhdGVCaW5kaW5nLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXRlbXNCaW5kaW5nID0gaXRlbXNCaW5kaW5nO1xuICAgICAgICB0aGlzLnRlbXBsYXRlQmluZGluZyA9IHRlbXBsYXRlQmluZGluZztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBwbGFjZWhvbGRlciBzdHJpbmcgYmFzZWQgb24gdGhlIGRpcmVjdGl2ZSdzIGluZGV4IHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgZGlyZWN0aXZlIHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyID0gRE9NLmNyZWF0ZUJsb2NrUGxhY2Vob2xkZXI7XG4gICAgICAgIGVuYWJsZUFycmF5T2JzZXJ2YXRpb24oKTtcbiAgICAgICAgdGhpcy5pc0l0ZW1zQmluZGluZ1ZvbGF0aWxlID0gT2JzZXJ2YWJsZS5pc1ZvbGF0aWxlQmluZGluZyhpdGVtc0JpbmRpbmcpO1xuICAgICAgICB0aGlzLmlzVGVtcGxhdGVCaW5kaW5nVm9sYXRpbGUgPSBPYnNlcnZhYmxlLmlzVm9sYXRpbGVCaW5kaW5nKHRlbXBsYXRlQmluZGluZyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiZWhhdmlvciBmb3IgdGhlIHByb3ZpZGVkIHRhcmdldCBub2RlLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgbm9kZSBpbnN0YW5jZSB0byBjcmVhdGUgdGhlIGJlaGF2aW9yIGZvci5cbiAgICAgKi9cbiAgICBjcmVhdGVCZWhhdmlvcih0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXBlYXRCZWhhdmlvcih0YXJnZXQsIHRoaXMuaXRlbXNCaW5kaW5nLCB0aGlzLmlzSXRlbXNCaW5kaW5nVm9sYXRpbGUsIHRoaXMudGVtcGxhdGVCaW5kaW5nLCB0aGlzLmlzVGVtcGxhdGVCaW5kaW5nVm9sYXRpbGUsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGVuYWJsZXMgbGlzdCByZW5kZXJpbmcuXG4gKiBAcGFyYW0gaXRlbXNCaW5kaW5nIC0gVGhlIGFycmF5IHRvIHJlbmRlci5cbiAqIEBwYXJhbSB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nIC0gVGhlIHRlbXBsYXRlIG9yIGEgdGVtcGxhdGUgYmluZGluZyB1c2VkIG9idGFpbiBhIHRlbXBsYXRlXG4gKiB0byByZW5kZXIgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdXNlZCB0byB0dXJuIG9uIHNwZWNpYWwgcmVwZWF0IGZlYXR1cmVzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KGl0ZW1zQmluZGluZywgdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZywgb3B0aW9ucyA9IGRlZmF1bHRSZXBlYXRPcHRpb25zKSB7XG4gICAgY29uc3QgdGVtcGxhdGVCaW5kaW5nID0gdHlwZW9mIHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmcgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmdcbiAgICAgICAgOiAoKSA9PiB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nO1xuICAgIHJldHVybiBuZXcgUmVwZWF0RGlyZWN0aXZlKGl0ZW1zQmluZGluZywgdGVtcGxhdGVCaW5kaW5nLCBvcHRpb25zKTtcbn1cbiIsImltcG9ydCB7IEF0dGFjaGVkQmVoYXZpb3JIVE1MRGlyZWN0aXZlIH0gZnJvbSBcIi4vaHRtbC1kaXJlY3RpdmUuanNcIjtcbmltcG9ydCB7IE5vZGVPYnNlcnZhdGlvbkJlaGF2aW9yIH0gZnJvbSBcIi4vbm9kZS1vYnNlcnZhdGlvbi5qc1wiO1xuLyoqXG4gKiBUaGUgcnVudGltZSBiZWhhdmlvciBmb3Igc2xvdHRlZCBub2RlIG9ic2VydmF0aW9uLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgU2xvdHRlZEJlaGF2aW9yIGV4dGVuZHMgTm9kZU9ic2VydmF0aW9uQmVoYXZpb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgU2xvdHRlZEJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgc2xvdCBlbGVtZW50IHRhcmdldCB0byBvYnNlcnZlLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgdG8gdXNlIHdoZW4gb2JzZXJ2aW5nIHRoZSBzbG90LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcih0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCZWdpbnMgb2JzZXJ2YXRpb24gb2YgdGhlIG5vZGVzLlxuICAgICAqL1xuICAgIG9ic2VydmUoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsIHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyBvYnNlcnZhdGlvbiBvZiB0aGUgbm9kZXMuXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIiwgdGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgbm9kZXMgdGhhdCBzaG91bGQgYmUgYXNzaWduZWQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBnZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmFzc2lnbmVkTm9kZXModGhpcy5vcHRpb25zKTtcbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgb2JzZXJ2ZXMgdGhlIGBhc3NpZ25lZE5vZGVzKClgIG9mIGEgc2xvdCBhbmQgdXBkYXRlcyBhIHByb3BlcnR5XG4gKiB3aGVuZXZlciB0aGV5IGNoYW5nZS5cbiAqIEBwYXJhbSBwcm9wZXJ0eU9yT3B0aW9ucyAtIFRoZSBvcHRpb25zIHVzZWQgdG8gY29uZmlndXJlIHNsb3R0ZWQgbm9kZSBvYnNlcnZhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsb3R0ZWQocHJvcGVydHlPck9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHByb3BlcnR5T3JPcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHByb3BlcnR5T3JPcHRpb25zID0geyBwcm9wZXJ0eTogcHJvcGVydHlPck9wdGlvbnMgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdHRhY2hlZEJlaGF2aW9ySFRNTERpcmVjdGl2ZShcImZhc3Qtc2xvdHRlZFwiLCBTbG90dGVkQmVoYXZpb3IsIHByb3BlcnR5T3JPcHRpb25zKTtcbn1cbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi9kb20uanNcIjtcbmltcG9ydCB7IGRlZmF1bHRFeGVjdXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL29ic2VydmF0aW9uL29ic2VydmFibGUuanNcIjtcbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSB9IGZyb20gXCIuL2NvbXBpbGVyLmpzXCI7XG5pbXBvcnQgeyBIVE1MVmlldyB9IGZyb20gXCIuL3ZpZXcuanNcIjtcbmltcG9ydCB7IEhUTUxEaXJlY3RpdmUsIFRhcmdldGVkSFRNTERpcmVjdGl2ZSwgfSBmcm9tIFwiLi9odG1sLWRpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IHsgSFRNTEJpbmRpbmdEaXJlY3RpdmUgfSBmcm9tIFwiLi9iaW5kaW5nLmpzXCI7XG4vKipcbiAqIEEgdGVtcGxhdGUgY2FwYWJsZSBvZiBjcmVhdGluZyBIVE1MVmlldyBpbnN0YW5jZXMgb3IgcmVuZGVyaW5nIGRpcmVjdGx5IHRvIERPTS5cbiAqIEBwdWJsaWNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBWaWV3VGVtcGxhdGUuXG4gICAgICogQHBhcmFtIGh0bWwgLSBUaGUgaHRtbCByZXByZXNlbnRpbmcgd2hhdCB0aGlzIHRlbXBsYXRlIHdpbGwgaW5zdGFudGlhdGUsIGluY2x1ZGluZyBwbGFjZWhvbGRlcnMgZm9yIGRpcmVjdGl2ZXMuXG4gICAgICogQHBhcmFtIGRpcmVjdGl2ZXMgLSBUaGUgZGlyZWN0aXZlcyB0aGF0IHdpbGwgYmUgY29ubmVjdGVkIHRvIHBsYWNlaG9sZGVycyBpbiB0aGUgaHRtbC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihodG1sLCBkaXJlY3RpdmVzKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaGFzSG9zdEJlaGF2aW9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnZpZXdCZWhhdmlvckZhY3RvcmllcyA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9zdEJlaGF2aW9yRmFjdG9yaWVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5odG1sID0gaHRtbDtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBIVE1MVmlldyBpbnN0YW5jZSBiYXNlZCBvbiB0aGlzIHRlbXBsYXRlIGRlZmluaXRpb24uXG4gICAgICogQHBhcmFtIGhvc3RCaW5kaW5nVGFyZ2V0IC0gVGhlIGVsZW1lbnQgdGhhdCBob3N0IGJlaGF2aW9ycyB3aWxsIGJlIGJvdW5kIHRvLlxuICAgICAqL1xuICAgIGNyZWF0ZShob3N0QmluZGluZ1RhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5mcmFnbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXBsYXRlO1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IERPTS5jcmVhdGVIVE1MKGh0bWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZlYyA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKGZlYyAhPT0gbnVsbCAmJiBmZWMudGFnTmFtZSA9PT0gXCJURU1QTEFURVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gZmVjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gaHRtbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGhpcy5kaXJlY3RpdmVzKTtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSByZXN1bHQuZnJhZ21lbnQ7XG4gICAgICAgICAgICB0aGlzLnZpZXdCZWhhdmlvckZhY3RvcmllcyA9IHJlc3VsdC52aWV3QmVoYXZpb3JGYWN0b3JpZXM7XG4gICAgICAgICAgICB0aGlzLmhvc3RCZWhhdmlvckZhY3RvcmllcyA9IHJlc3VsdC5ob3N0QmVoYXZpb3JGYWN0b3JpZXM7XG4gICAgICAgICAgICB0aGlzLnRhcmdldE9mZnNldCA9IHJlc3VsdC50YXJnZXRPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmJlaGF2aW9yQ291bnQgPVxuICAgICAgICAgICAgICAgIHRoaXMudmlld0JlaGF2aW9yRmFjdG9yaWVzLmxlbmd0aCArIHRoaXMuaG9zdEJlaGF2aW9yRmFjdG9yaWVzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaGFzSG9zdEJlaGF2aW9ycyA9IHRoaXMuaG9zdEJlaGF2aW9yRmFjdG9yaWVzLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3Qgdmlld0ZhY3RvcmllcyA9IHRoaXMudmlld0JlaGF2aW9yRmFjdG9yaWVzO1xuICAgICAgICBjb25zdCBiZWhhdmlvcnMgPSBuZXcgQXJyYXkodGhpcy5iZWhhdmlvckNvdW50KTtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gRE9NLmNyZWF0ZVRlbXBsYXRlV2Fsa2VyKGZyYWdtZW50KTtcbiAgICAgICAgbGV0IGJlaGF2aW9ySW5kZXggPSAwO1xuICAgICAgICBsZXQgdGFyZ2V0SW5kZXggPSB0aGlzLnRhcmdldE9mZnNldDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgZm9yIChsZXQgaWkgPSB2aWV3RmFjdG9yaWVzLmxlbmd0aDsgYmVoYXZpb3JJbmRleCA8IGlpOyArK2JlaGF2aW9ySW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB2aWV3RmFjdG9yaWVzW2JlaGF2aW9ySW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZmFjdG9yeUluZGV4ID0gZmFjdG9yeS50YXJnZXRJbmRleDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4ID09PSBmYWN0b3J5SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3JzW2JlaGF2aW9ySW5kZXhdID0gZmFjdG9yeS5jcmVhdGVCZWhhdmlvcihub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0hvc3RCZWhhdmlvcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvc3RGYWN0b3JpZXMgPSB0aGlzLmhvc3RCZWhhdmlvckZhY3RvcmllcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGhvc3RGYWN0b3JpZXMubGVuZ3RoOyBpIDwgaWk7ICsraSwgKytiZWhhdmlvckluZGV4KSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3JzW2JlaGF2aW9ySW5kZXhdID0gaG9zdEZhY3Rvcmllc1tpXS5jcmVhdGVCZWhhdmlvcihob3N0QmluZGluZ1RhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBIVE1MVmlldyhmcmFnbWVudCwgYmVoYXZpb3JzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBIVE1MVmlldyBmcm9tIHRoaXMgdGVtcGxhdGUsIGJpbmRzIGl0IHRvIHRoZSBzb3VyY2UsIGFuZCB0aGVuIGFwcGVuZHMgaXQgdG8gdGhlIGhvc3QuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBkYXRhIHNvdXJjZSB0byBiaW5kIHRoZSB0ZW1wbGF0ZSB0by5cbiAgICAgKiBAcGFyYW0gaG9zdCAtIFRoZSBFbGVtZW50IHdoZXJlIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqIEBwYXJhbSBob3N0QmluZGluZ1RhcmdldCAtIEFuIEhUTUwgZWxlbWVudCB0byB0YXJnZXQgdGhlIGhvc3QgYmluZGluZ3MgYXQgaWYgZGlmZmVyZW50IGZyb20gdGhlXG4gICAgICogaG9zdCB0aGF0IHRoZSB0ZW1wbGF0ZSBpcyBiZWluZyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICByZW5kZXIoc291cmNlLCBob3N0LCBob3N0QmluZGluZ1RhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIGhvc3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGhvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdEJpbmRpbmdUYXJnZXQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaG9zdEJpbmRpbmdUYXJnZXQgPSBob3N0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmNyZWF0ZShob3N0QmluZGluZ1RhcmdldCk7XG4gICAgICAgIHZpZXcuYmluZChzb3VyY2UsIGRlZmF1bHRFeGVjdXRpb25Db250ZXh0KTtcbiAgICAgICAgdmlldy5hcHBlbmRUbyhob3N0KTtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxufVxuLy8gTXVjaCB0aGFua3MgdG8gTGl0SFRNTCBmb3Igd29ya2luZyB0aGlzIG91dCFcbmNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPSBcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4ICovXG4vKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbi8qKlxuICogVHJhbnNmb3JtcyBhIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIGludG8gYSByZW5kZXJhYmxlIFZpZXdUZW1wbGF0ZS5cbiAqIEBwYXJhbSBzdHJpbmdzIC0gVGhlIHN0cmluZyBmcmFnbWVudHMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIHdpdGggdGhlIHZhbHVlcy5cbiAqIEBwYXJhbSB2YWx1ZXMgLSBUaGUgdmFsdWVzIHRoYXQgYXJlIGludGVycG9sYXRlZCB3aXRoIHRoZSBzdHJpbmcgZnJhZ21lbnRzLlxuICogQHJlbWFya3NcbiAqIFRoZSBodG1sIGhlbHBlciBzdXBwb3J0cyBpbnRlcnBvbGF0aW9uIG9mIHN0cmluZ3MsIG51bWJlcnMsIGJpbmRpbmcgZXhwcmVzc2lvbnMsXG4gKiBvdGhlciB0ZW1wbGF0ZSBpbnN0YW5jZXMsIGFuZCBEaXJlY3RpdmUgaW5zdGFuY2VzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgICBjb25zdCBkaXJlY3RpdmVzID0gW107XG4gICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0cmluZyA9IHN0cmluZ3NbaV07XG4gICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgaHRtbCArPSBjdXJyZW50U3RyaW5nO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBWaWV3VGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9ICgpID0+IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgSFRNTEJpbmRpbmdEaXJlY3RpdmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRhcmdldGVkSFRNTERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMoY3VycmVudFN0cmluZyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50YXJnZXROYW1lID0gbWF0Y2hbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgLy8gU2luY2Ugbm90IGFsbCB2YWx1ZXMgYXJlIGRpcmVjdGl2ZXMsIHdlIGNhbid0IHVzZSBpXG4gICAgICAgICAgICAvLyBhcyB0aGUgaW5kZXggZm9yIHRoZSBwbGFjZWhvbGRlci4gSW5zdGVhZCwgd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gdXNlIGRpcmVjdGl2ZXMubGVuZ3RoIHRvIGdldCB0aGUgbmV4dCBpbmRleC5cbiAgICAgICAgICAgIGh0bWwgKz0gdmFsdWUuY3JlYXRlUGxhY2Vob2xkZXIoZGlyZWN0aXZlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaHRtbCArPSBzdHJpbmdzW3N0cmluZ3MubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIG5ldyBWaWV3VGVtcGxhdGUoaHRtbCwgZGlyZWN0aXZlcyk7XG59XG4iLCIvLyBBIHNpbmdsZXRvbiBSYW5nZSBpbnN0YW5jZSB1c2VkIHRvIGVmZmljaWVudGx5IHJlbW92ZSByYW5nZXMgb2YgRE9NIG5vZGVzLlxuLy8gU2VlIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBIVE1MVmlldyBiZWxvdyBmb3IgZnVydGhlciBkZXRhaWxzLlxuY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuLyoqXG4gKiBUaGUgc3RhbmRhcmQgVmlldyBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggYWxzbyBpbXBsZW1lbnRzIEVsZW1lbnRWaWV3IGFuZCBTeW50aGV0aWNWaWV3LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgSFRNTFZpZXcge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYW4gaW5zdGFuY2Ugb2YgSFRNTFZpZXcuXG4gICAgICogQHBhcmFtIGZyYWdtZW50IC0gVGhlIGh0bWwgZnJhZ21lbnQgdGhhdCBjb250YWlucyB0aGUgbm9kZXMgZm9yIHRoaXMgdmlldy5cbiAgICAgKiBAcGFyYW0gYmVoYXZpb3JzIC0gVGhlIGJlaGF2aW9ycyB0byBiZSBhcHBsaWVkIHRvIHRoaXMgdmlldy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihmcmFnbWVudCwgYmVoYXZpb3JzKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSBiZWhhdmlvcnM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGF0YSB0aGF0IHRoZSB2aWV3IGlzIGJvdW5kIHRvLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGV4ZWN1dGlvbiBjb250ZXh0IHRoZSB2aWV3IGlzIHJ1bm5pbmcgd2l0aGluLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBmcmFnbWVudC5sYXN0Q2hpbGQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhlIHZpZXcncyBET00gbm9kZXMgdG8gdGhlIHJlZmVyZW5jZWQgbm9kZS5cbiAgICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBwYXJlbnQgbm9kZSB0byBhcHBlbmQgdGhlIHZpZXcncyBET00gbm9kZXMgdG8uXG4gICAgICovXG4gICAgYXBwZW5kVG8obm9kZSkge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSB2aWV3J3MgRE9NIG5vZGVzIGJlZm9yZSB0aGUgcmVmZXJlbmNlZCBub2RlLlxuICAgICAqIEBwYXJhbSBub2RlIC0gVGhlIG5vZGUgdG8gaW5zZXJ0IHRoZSB2aWV3J3MgRE9NIGJlZm9yZS5cbiAgICAgKi9cbiAgICBpbnNlcnRCZWZvcmUobm9kZSkge1xuICAgICAgICBpZiAodGhpcy5mcmFnbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5mcmFnbWVudCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGxldCBuZXh0O1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IGVuZCkge1xuICAgICAgICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGN1cnJlbnQsIG5vZGUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZW5kLCBub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSB2aWV3J3MgRE9NIG5vZGVzLlxuICAgICAqIFRoZSBub2RlcyBhcmUgbm90IGRpc3Bvc2VkIGFuZCB0aGUgdmlldyBjYW4gbGF0ZXIgYmUgcmUtaW5zZXJ0ZWQuXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQ7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuZmlyc3RDaGlsZDtcbiAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBlbmQpIHtcbiAgICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY3VycmVudCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbmQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSB2aWV3IGFuZCB1bmJpbmRzIGl0cyBiZWhhdmlvcnMsIGRpc3Bvc2luZyBvZiBET00gbm9kZXMgYWZ0ZXJ3YXJkLlxuICAgICAqIE9uY2UgYSB2aWV3IGhhcyBiZWVuIGRpc3Bvc2VkLCBpdCBjYW5ub3QgYmUgaW5zZXJ0ZWQgb3IgYm91bmQgYWdhaW4uXG4gICAgICovXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5maXJzdENoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuZmlyc3RDaGlsZDtcbiAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBlbmQpIHtcbiAgICAgICAgICAgIG5leHQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGN1cnJlbnQpO1xuICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGVuZCk7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzO1xuICAgICAgICBjb25zdCBvbGRTb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYmVoYXZpb3JzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIGJlaGF2aW9yc1tpXS51bmJpbmQob2xkU291cmNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIHZpZXcncyBiZWhhdmlvcnMgdG8gaXRzIGJpbmRpbmcgc291cmNlLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgYmluZGluZyBzb3VyY2UgZm9yIHRoZSB2aWV3J3MgYmluZGluZyBiZWhhdmlvcnMuXG4gICAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgZXhlY3V0aW9uIGNvbnRleHQgdG8gcnVuIHRoZSBiZWhhdmlvcnMgd2l0aGluLlxuICAgICAqL1xuICAgIGJpbmQoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9ycyA9IHRoaXMuYmVoYXZpb3JzO1xuICAgICAgICBpZiAodGhpcy5zb3VyY2UgPT09IHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRTb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGJlaGF2aW9ycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGJlaGF2aW9yc1tpXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnVuYmluZChvbGRTb3VyY2UpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuYmluZChzb3VyY2UsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYmVoYXZpb3JzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcnNbaV0uYmluZChzb3VyY2UsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYSB2aWV3J3MgYmVoYXZpb3JzIGZyb20gaXRzIGJpbmRpbmcgc291cmNlLlxuICAgICAqL1xuICAgIHVuYmluZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmVoYXZpb3JzID0gdGhpcy5iZWhhdmlvcnM7XG4gICAgICAgIGNvbnN0IG9sZFNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBiZWhhdmlvcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgYmVoYXZpb3JzW2ldLnVuYmluZChvbGRTb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRWZmaWNpZW50bHkgZGlzcG9zZXMgb2YgYSBjb250aWd1b3VzIHJhbmdlIG9mIHN5bnRoZXRpYyB2aWV3IGluc3RhbmNlcy5cbiAgICAgKiBAcGFyYW0gdmlld3MgLSBBIGNvbnRpZ3VvdXMgcmFuZ2Ugb2Ygdmlld3MgdG8gYmUgZGlzcG9zZWQuXG4gICAgICovXG4gICAgc3RhdGljIGRpc3Bvc2VDb250aWd1b3VzQmF0Y2godmlld3MpIHtcbiAgICAgICAgaWYgKHZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJhbmdlLnNldFN0YXJ0QmVmb3JlKHZpZXdzWzBdLmZpcnN0Q2hpbGQpO1xuICAgICAgICByYW5nZS5zZXRFbmRBZnRlcih2aWV3c1t2aWV3cy5sZW5ndGggLSAxXS5sYXN0Q2hpbGQpO1xuICAgICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSB2aWV3cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld3NbaV07XG4gICAgICAgICAgICBjb25zdCBiZWhhdmlvcnMgPSB2aWV3LmJlaGF2aW9ycztcbiAgICAgICAgICAgIGNvbnN0IG9sZFNvdXJjZSA9IHZpZXcuc291cmNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpqID0gYmVoYXZpb3JzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcnNbal0udW5iaW5kKG9sZFNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgZW5hYmxlcyBiYXNpYyBjb25kaXRpb25hbCByZW5kZXJpbmcgaW4gYSB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSBiaW5kaW5nIC0gVGhlIGNvbmRpdGlvbiB0byB0ZXN0IGZvciByZW5kZXJpbmcuXG4gKiBAcGFyYW0gdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZyAtIFRoZSB0ZW1wbGF0ZSBvciBhIGJpbmRpbmcgdGhhdCBnZXRzXG4gKiB0aGUgdGVtcGxhdGUgdG8gcmVuZGVyIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyB0cnVlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2hlbihiaW5kaW5nLCB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nKSB7XG4gICAgY29uc3QgZ2V0VGVtcGxhdGUgPSB0eXBlb2YgdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZ1xuICAgICAgICA6ICgpID0+IHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmc7XG4gICAgcmV0dXJuIChzb3VyY2UsIGNvbnRleHQpID0+IGJpbmRpbmcoc291cmNlLCBjb250ZXh0KSA/IGdldFRlbXBsYXRlKHNvdXJjZSwgY29udGV4dCkgOiBudWxsO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
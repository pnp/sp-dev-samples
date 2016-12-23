(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var HelloWorld_1 = __webpack_require__(3);
	var webparts = document.getElementsByClassName('webpart-script-example');
	for (var i = 0; i < webparts.length; i++) {
	    // Get the data property from the Element
	    var description = webparts[i].getAttribute('data-description').toString();
	    ReactDOM.render(React.createElement(HelloWorld_1.Hello, {description: description}), webparts[i]);
	}
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var HelloWorld_module_scss_1 = __webpack_require__(4);
	var office_ui_fabric_react_1 = __webpack_require__(6);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        return (React.createElement("div", {className: HelloWorld_module_scss_1.default.helloWorld}, React.createElement("div", {className: HelloWorld_module_scss_1.default.container}, React.createElement("div", {className: office_ui_fabric_react_1.css('ms-Grid-row ms-bgColor-teal ms-fontColor-white', HelloWorld_module_scss_1.default.row)}, React.createElement("div", {className: 'ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'}, React.createElement("span", {className: 'ms-font-xl ms-fontColor-white'}, "Welcome to SharePoint!"), React.createElement("p", {className: 'ms-font-l ms-fontColor-white'}, "Building experiences with web stack and modern tooling"), React.createElement("p", {className: 'ms-font-l ms-fontColor-white'}, this.props.description), React.createElement("a", {className: office_ui_fabric_react_1.css('ms-Button', HelloWorld_module_scss_1.default.button), href: 'https://dev.office.com/sharepoint'}, React.createElement("span", {className: 'ms-Button-label'}, "Learn more")))))));
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;
	
	//# sourceMappingURL=HelloWorld.js.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(5);
	/* tslint:disable */
	var styles = {
	    helloWorld: 'helloWorld_bf417fcf',
	    container: 'container_a8e1c719',
	    row: 'row_6476086e',
	    listItem: 'listItem_dfcb13ef',
	    button: 'button_889d4913',
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = styles;
	/* tslint:enable */
	load_themed_styles_1.loadStyles([{ 'rawString': '.helloWorld_bf417fcf .container_a8e1c719{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_bf417fcf .row_6476086e{padding:20px}.helloWorld_bf417fcf .listItem_dfcb13ef{max-width:715px;margin:5px auto 5px auto;box-shadow:0 0 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_bf417fcf .button_889d4913{text-decoration:none}' }]);
	/* tslint:enable */
	
	//# sourceMappingURL=HelloWorld.module.scss.js.map


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	"use strict";
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: undefined,
	    lastStyleElement: undefined,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(styles: string) => void} a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(callback) {
	    _themeState.loadStyles = callback;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        var styles = resolveThemableArray(stylesArray);
	        _themeState.loadStyles(styles);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray, styleRecord);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : undefined;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be undefined to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	//# sourceMappingURL=index.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * WARNING: This entry should NOT be imported for production purposes. This entry forces every control to be
	 * parsed and available at load time, which is not necessary for most cases.
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	__export(__webpack_require__(44));
	__export(__webpack_require__(24));
	__export(__webpack_require__(49));
	__export(__webpack_require__(53));
	__export(__webpack_require__(62));
	__export(__webpack_require__(85));
	__export(__webpack_require__(19));
	__export(__webpack_require__(89));
	__export(__webpack_require__(97));
	__export(__webpack_require__(142));
	__export(__webpack_require__(157));
	__export(__webpack_require__(177));
	__export(__webpack_require__(31));
	__export(__webpack_require__(181));
	__export(__webpack_require__(185));
	__export(__webpack_require__(10));
	__export(__webpack_require__(111));
	__export(__webpack_require__(56));
	__export(__webpack_require__(68));
	__export(__webpack_require__(27));
	__export(__webpack_require__(116));
	__export(__webpack_require__(129));
	__export(__webpack_require__(186));
	__export(__webpack_require__(191));
	__export(__webpack_require__(195));
	__export(__webpack_require__(148));
	__export(__webpack_require__(198));
	__export(__webpack_require__(203));
	__export(__webpack_require__(164));
	__export(__webpack_require__(209));
	__export(__webpack_require__(212));
	__export(__webpack_require__(218));
	__export(__webpack_require__(222));
	__export(__webpack_require__(226));
	__export(__webpack_require__(123));
	__export(__webpack_require__(65));
	__export(__webpack_require__(230));
	/* Special cases that will be removed once we've moved utilities out into a common location. */
	__export(__webpack_require__(17));
	__export(__webpack_require__(15));
	__export(__webpack_require__(14));
	__export(__webpack_require__(23));
	__export(__webpack_require__(16));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(8));
	
	//# sourceMappingURL=Breadcrumb.js.map


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(9));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(10);
	var ContextualMenu_1 = __webpack_require__(19);
	var DirectionalHint_1 = __webpack_require__(22);
	var EventGroup_1 = __webpack_require__(14);
	var rtl_1 = __webpack_require__(16);
	var css_1 = __webpack_require__(17);
	__webpack_require__(43);
	var OVERFLOW_KEY = 'overflow';
	var OVERFLOW_WIDTH = 44;
	var _instance = 0;
	var Breadcrumb = (function (_super) {
	    __extends(Breadcrumb, _super);
	    function Breadcrumb(props) {
	        _super.call(this, props);
	        this._events = new EventGroup_1.EventGroup(this);
	        this.state = this._getStateFromProps(props);
	    }
	    Breadcrumb.prototype.componentDidMount = function () {
	        this._updateItemMeasurements();
	        this._updateRenderedItems();
	        this._events.on(window, 'resize', this._updateRenderedItems);
	    };
	    Breadcrumb.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Breadcrumb.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState(this._getStateFromProps(nextProps));
	        this._breadcrumbItemWidths = null;
	    };
	    Breadcrumb.prototype.componentDidUpdate = function (prevProps, prevStates) {
	        if (!this._breadcrumbItemWidths) {
	            this._updateItemMeasurements();
	            this._updateRenderedItems();
	        }
	    };
	    Breadcrumb.prototype.render = function () {
	        var _this = this;
	        var className = this.props.className;
	        var _a = this.state, isOverflowOpen = _a.isOverflowOpen, overflowAnchor = _a.overflowAnchor, renderedItems = _a.renderedItems, renderedOverflowItems = _a.renderedOverflowItems, internalId = _a.internalId;
	        var overflowMenuId = internalId + '-overflow';
	        return (React.createElement("div", {className: css_1.css('ms-Breadcrumb', className), ref: 'renderingArea'}, React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, React.createElement("ul", {className: 'ms-Breadcrumb-list'}, renderedOverflowItems && renderedOverflowItems.length ? (React.createElement("li", {className: 'ms-Breadcrumb-overflow', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, React.createElement("div", {className: 'ms-Breadcrumb-overflowButton ms-Icon ms-Icon--ellipsis', onClick: this._onOverflowClicked.bind(this), "data-is-focusable": true, role: 'button', "aria-haspopup": 'true', "aria-owns": isOverflowOpen ? overflowMenuId : null}), React.createElement("i", {className: css_1.css('ms-Breadcrumb-chevron ms-Icon', rtl_1.getRTL() ? 'ms-Icon--chevronLeft' : 'ms-Icon--chevronRight')}))) : (null), renderedItems.map(function (item, index) { return (React.createElement("li", {className: 'ms-Breadcrumb-listItem', key: item.key || String(index), ref: item.key || String(index)}, React.createElement("a", {className: 'ms-Breadcrumb-itemLink', onClick: item.onClick ? _this._onBreadcrumbClicked.bind(_this, item) : null, href: item.href, role: item.onClick ? 'button' : 'link'}, item.text), React.createElement("i", {className: css_1.css('ms-Breadcrumb-chevron ms-Icon', rtl_1.getRTL() ? 'ms-Icon--chevronLeft' : 'ms-Icon--chevronRight')}))); }))), isOverflowOpen ? (React.createElement(ContextualMenu_1.ContextualMenu, {targetElement: overflowAnchor, isBeakVisible: true, items: renderedOverflowItems.map(function (item, index) { return ({
	            name: item.text,
	            key: item.key,
	            onClick: _this._onBreadcrumbClicked.bind(_this, item),
	            href: item.href
	        }); }), id: overflowMenuId, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onOverflowDismissed.bind(this)})) : (null)));
	    };
	    Breadcrumb.prototype._onOverflowClicked = function (ev) {
	        this.setState({
	            'isOverflowOpen': !this.state.isOverflowOpen,
	            'overflowAnchor': ev.currentTarget
	        });
	    };
	    Breadcrumb.prototype._onOverflowDismissed = function (ev) {
	        this.setState({
	            'isOverflowOpen': false,
	            'overflowAnchor': null
	        });
	    };
	    Breadcrumb.prototype._onBreadcrumbClicked = function (item, ev) {
	        if (item.onClick) {
	            item.onClick(item.key);
	        }
	        this.setState({
	            'isOverflowOpen': false
	        });
	    };
	    Breadcrumb.prototype._updateItemMeasurements = function () {
	        var items = this.props.items;
	        if (!this._breadcrumbItemWidths) {
	            this._breadcrumbItemWidths = {};
	        }
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (!this._breadcrumbItemWidths[item.key]) {
	                var el = this.refs[item.key];
	                this._breadcrumbItemWidths[item.key] = el.getBoundingClientRect().width;
	            }
	        }
	    };
	    Breadcrumb.prototype._updateRenderedItems = function () {
	        var _a = this.props, items = _a.items, maxDisplayedItems = _a.maxDisplayedItems;
	        var renderingArea = this.refs.renderingArea;
	        var renderedItems = [];
	        var renderedOverflowItems = [].concat(items);
	        var consumedWidth = 0;
	        var style = window.getComputedStyle(renderingArea);
	        var availableWidth = renderingArea.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
	        availableWidth -= OVERFLOW_WIDTH;
	        var i;
	        var minIndex = Math.max(0, renderedOverflowItems.length - maxDisplayedItems);
	        for (i = renderedOverflowItems.length - 1; i >= minIndex; i--) {
	            var item = renderedOverflowItems[i];
	            var itemWidth = this._breadcrumbItemWidths[item.key];
	            if ((consumedWidth + itemWidth) >= availableWidth) {
	                break;
	            }
	            else {
	                consumedWidth += itemWidth;
	            }
	        }
	        renderedItems = renderedOverflowItems.splice(i + 1);
	        this.setState({
	            isOverflowOpen: this.state.isOverflowOpen,
	            overflowAnchor: this.state.overflowAnchor,
	            renderedItems: renderedItems,
	            renderedOverflowItems: renderedOverflowItems,
	        });
	    };
	    Breadcrumb.prototype._getStateFromProps = function (nextProps) {
	        return {
	            isOverflowOpen: false,
	            overflowAnchor: null,
	            renderedItems: nextProps.items || [],
	            renderedOverflowItems: null,
	            internalId: 'Breadcrumb-' + _instance++
	        };
	    };
	    Breadcrumb.defaultProps = {
	        items: [],
	        maxDisplayedItems: 999
	    };
	    return Breadcrumb;
	}(React.Component));
	exports.Breadcrumb = Breadcrumb;
	
	//# sourceMappingURL=Breadcrumb.js.map


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(11));
	
	//# sourceMappingURL=FocusZone.js.map


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_Props_1 = __webpack_require__(13);
	var EventGroup_1 = __webpack_require__(14);
	var KeyCodes_1 = __webpack_require__(15);
	var rtl_1 = __webpack_require__(16);
	var css_1 = __webpack_require__(17);
	var focus_1 = __webpack_require__(18);
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	var TABINDEX = 'tabindex';
	var _instance = 0;
	var _allInstances = {};
	var FocusZone = (function (_super) {
	    __extends(FocusZone, _super);
	    function FocusZone(props) {
	        _super.call(this, props);
	        this._id = String(_instance++);
	        _allInstances[this._id] = this;
	        this._focusAlignment = {
	            left: 0,
	            top: 0
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._onKeyDown = this._onKeyDown.bind(this);
	        this._onFocus = this._onFocus.bind(this);
	        this._onMouseDown = this._onMouseDown.bind(this);
	    }
	    FocusZone.prototype.componentDidMount = function () {
	        var windowElement = this.refs.root.ownerDocument.defaultView;
	        var parentElement = this.refs.root.parentElement;
	        while (parentElement && parentElement !== document.body) {
	            if (focus_1.isElementFocusZone(parentElement)) {
	                this._isInnerZone = true;
	                break;
	            }
	            parentElement = parentElement.parentElement;
	        }
	        this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
	    };
	    FocusZone.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	        delete _allInstances[this._id];
	    };
	    FocusZone.prototype.render = function () {
	        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
	        return (React.createElement("div", React.__spread({}, this.props, {className: css_1.css('ms-FocusZone', className), ref: 'root', "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, onMouseDownCapture: this._onMouseDown, onKeyDown: this._onKeyDown, onFocus: this._onFocus}), this.props.children));
	    };
	    /** Sets focus to the first tabbable item in the zone. */
	    FocusZone.prototype.focus = function () {
	        if (this._activeElement && this.refs.root.contains(this._activeElement)) {
	            this._activeElement.focus();
	            return true;
	        }
	        else {
	            var firstChild = this.refs.root.firstChild;
	            return this._focusElement(focus_1.getNextElement(this.refs.root, firstChild, true));
	        }
	    };
	    FocusZone.prototype._onFocus = function (ev) {
	        var onActiveElementChanged = this.props.onActiveElementChanged;
	        if (this._isImmediateDescendantOfZone(ev.target)) {
	            this._activeElement = ev.target;
	            this._setFocusAlignment(this._activeElement);
	        }
	        else {
	            var parentElement = ev.target;
	            while (parentElement && parentElement !== this.refs.root) {
	                if (focus_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
	                    this._activeElement = parentElement;
	                    break;
	                }
	                parentElement = parentElement.parentElement;
	            }
	        }
	        if (onActiveElementChanged) {
	            onActiveElementChanged(this._activeElement, ev);
	        }
	    };
	    /** Handle global tab presses so that we can patch tabindexes on the fly. */
	    FocusZone.prototype._onKeyDownCapture = function (ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.tab) {
	            this._updateTabIndexes();
	        }
	    };
	    FocusZone.prototype._onMouseDown = function (ev) {
	        var disabled = this.props.disabled;
	        if (disabled) {
	            return;
	        }
	        var target = ev.target;
	        var path = [];
	        while (target && target !== this.refs.root) {
	            path.push(target);
	            target = target.parentElement;
	        }
	        while (path.length) {
	            target = path.pop();
	            if (focus_1.isElementFocusZone(target)) {
	                break;
	            }
	            else if (target && focus_1.isElementTabbable(target)) {
	                target.tabIndex = 0;
	                this._setFocusAlignment(target, true, true);
	            }
	        }
	    };
	    /** Handle the keystrokes. */
	    FocusZone.prototype._onKeyDown = function (ev) {
	        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
	        if (disabled) {
	            return;
	        }
	        if (isInnerZoneKeystroke &&
	            this._isImmediateDescendantOfZone(ev.target) &&
	            isInnerZoneKeystroke(ev)) {
	            // Try to focus
	            var innerZone = this._getFirstInnerZone();
	            if (!innerZone || !innerZone.focus()) {
	                return;
	            }
	        }
	        else {
	            switch (ev.which) {
	                case KeyCodes_1.KeyCodes.left:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
	                        break;
	                    }
	                    return;
	                case KeyCodes_1.KeyCodes.right:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
	                        break;
	                    }
	                    return;
	                case KeyCodes_1.KeyCodes.up:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
	                        break;
	                    }
	                    return;
	                case KeyCodes_1.KeyCodes.down:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
	                        break;
	                    }
	                    return;
	                case KeyCodes_1.KeyCodes.home:
	                    var firstChild = this.refs.root.firstChild;
	                    if (this._focusElement(focus_1.getNextElement(this.refs.root, firstChild, true))) {
	                        break;
	                    }
	                    return;
	                case KeyCodes_1.KeyCodes.end:
	                    var lastChild = this.refs.root.lastChild;
	                    if (this._focusElement(focus_1.getPreviousElement(this.refs.root, lastChild, true, true, true))) {
	                        break;
	                    }
	                    return;
	                case KeyCodes_1.KeyCodes.enter:
	                    if (this._tryInvokeClickForFocusable(ev.target)) {
	                        break;
	                    }
	                    return;
	                default:
	                    return;
	            }
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    /** Walk up the dom try to find a focusable element. */
	    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
	        do {
	            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
	                return false;
	            }
	            if (this._isImmediateDescendantOfZone(target) &&
	                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
	                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
	                EventGroup_1.EventGroup.raise(target, 'click', null, true);
	                return true;
	            }
	            target = target.parentElement;
	        } while (target !== this.refs.root);
	        return false;
	    };
	    /** Traverse to find first child zone. */
	    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
	        rootElement = rootElement || this._activeElement || this.refs.root;
	        var child = rootElement.firstElementChild;
	        while (child) {
	            if (focus_1.isElementFocusZone(child)) {
	                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
	            }
	            var match = this._getFirstInnerZone(child);
	            if (match) {
	                return match;
	            }
	            child = child.nextElementSibling;
	        }
	        return null;
	    };
	    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
	        var element = this._activeElement;
	        var candidateDistance = -1;
	        var candidateElement;
	        var changedFocus = false;
	        var isBidirectional = this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional;
	        if (!this._activeElement) {
	            return;
	        }
	        var activeRect = isBidirectional ? this._activeElement.getBoundingClientRect() : null;
	        do {
	            element = isForward ?
	                focus_1.getNextElement(this.refs.root, element) :
	                focus_1.getPreviousElement(this.refs.root, element);
	            if (isBidirectional) {
	                if (element) {
	                    var targetRect = element.getBoundingClientRect();
	                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
	                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
	                        candidateDistance = elementDistance;
	                        candidateElement = element;
	                    }
	                    if (candidateDistance >= 0 && elementDistance < 0) {
	                        break;
	                    }
	                }
	            }
	            else {
	                candidateElement = element;
	                break;
	            }
	        } while (element);
	        // Focus the closest candidate
	        if (candidateElement && candidateElement !== this._activeElement) {
	            changedFocus = true;
	            this._focusElement(candidateElement);
	        }
	        else if (this.props.isCircularNavigation) {
	            if (isForward) {
	                return this._focusElement(focus_1.getNextElement(this.refs.root, this.refs.root.firstElementChild, true));
	            }
	            else {
	                return this._focusElement(focus_1.getPreviousElement(this.refs.root, this.refs.root.lastElementChild, true, true, true));
	            }
	        }
	        return changedFocus;
	    };
	    FocusZone.prototype._moveFocusDown = function () {
	        var targetTop = -1;
	        var leftAlignment = this._focusAlignment.left;
	        if (this._moveFocus(true, function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 && targetRect.top >= activeRect.bottom) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, false, true);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusUp = function () {
	        var targetTop = -1;
	        var leftAlignment = this._focusAlignment.left;
	        if (this._moveFocus(false, function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 && targetRect.bottom <= activeRect.top) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, false, true);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusLeft = function () {
	        var _this = this;
	        var targetTop = -1;
	        var topAlignment = this._focusAlignment.top;
	        if (this._moveFocus(rtl_1.getRTL(), function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 &&
	                targetRect.right <= activeRect.right &&
	                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, true, false);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusRight = function () {
	        var _this = this;
	        var targetTop = -1;
	        var topAlignment = this._focusAlignment.top;
	        if (this._moveFocus(!rtl_1.getRTL(), function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 &&
	                targetRect.left >= activeRect.left &&
	                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, true, false);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._focusElement = function (element) {
	        if (element) {
	            if (this._activeElement) {
	                this._activeElement.tabIndex = -1;
	            }
	            this._activeElement = element;
	            if (element) {
	                if (!this._focusAlignment) {
	                    this._setFocusAlignment(element, true, true);
	                }
	                this._activeElement.tabIndex = 0;
	                element.focus();
	                return true;
	            }
	        }
	        return false;
	    };
	    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
	        if (this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional &&
	            (!this._focusAlignment || isHorizontal || isVertical)) {
	            var rect = element.getBoundingClientRect();
	            var left = rect.left + (rect.width / 2);
	            var top_1 = rect.top + (rect.height / 2);
	            if (!this._focusAlignment) {
	                this._focusAlignment = { left: left, top: top_1 };
	            }
	            if (isHorizontal) {
	                this._focusAlignment.left = left;
	            }
	            if (isVertical) {
	                this._focusAlignment.top = top_1;
	            }
	        }
	    };
	    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
	        var parentElement = element.parentElement;
	        while (parentElement && parentElement !== this.refs.root && parentElement !== document.body) {
	            if (focus_1.isElementFocusZone(parentElement)) {
	                return false;
	            }
	            parentElement = parentElement.parentElement;
	        }
	        return true;
	    };
	    FocusZone.prototype._updateTabIndexes = function (element) {
	        if (!element) {
	            element = this.refs.root;
	            if (this._activeElement && !element.contains(this._activeElement)) {
	                this._activeElement = null;
	            }
	        }
	        var childNodes = element.children;
	        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
	            var child = childNodes[childIndex];
	            if (!focus_1.isElementFocusZone(child)) {
	                if (focus_1.isElementTabbable(child)) {
	                    if (this.props.disabled) {
	                        child.setAttribute(TABINDEX, '-1');
	                    }
	                    else if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
	                        this._activeElement = child;
	                        if (child.getAttribute(TABINDEX) !== '0') {
	                            child.setAttribute(TABINDEX, '0');
	                        }
	                    }
	                    else if (child.getAttribute(TABINDEX) !== '-1') {
	                        child.setAttribute(TABINDEX, '-1');
	                    }
	                }
	                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
	                    // Disgusting IE hack. Sad face.
	                    child.setAttribute('focusable', 'false');
	                }
	                this._updateTabIndexes(child);
	            }
	        }
	    };
	    FocusZone.defaultProps = {
	        isCircularNavigation: false,
	        direction: FocusZone_Props_1.FocusZoneDirection.bidirectional
	    };
	    return FocusZone;
	}(React.Component));
	exports.FocusZone = FocusZone;
	
	//# sourceMappingURL=FocusZone.js.map


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	(function (FocusZoneDirection) {
	    /** Only react to up/down arrows. */
	    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
	    /** Only react to left/right arrows. */
	    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
	    /** React to all arrows. */
	    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
	})(exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));
	var FocusZoneDirection = exports.FocusZoneDirection;
	
	//# sourceMappingURL=FocusZone.Props.js.map


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* tslint:disable:no-string-literal */
	"use strict";
	/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
	 *  If the target is an HTMLElement, the event will be attached to the element and can be
	 *  triggered as usual (like clicking for onclick).
	 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
	 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
	 *  handled here in EventGroup, and the handler is called in the context of the parent
	 *  (which is passed in in the constructor).
	 */
	var EventGroup = (function () {
	    /** parent: the context in which events attached to non-HTMLElements are called */
	    function EventGroup(parent) {
	        this._id = EventGroup._uniqueId++;
	        this._parent = parent;
	        this._eventRecords = [];
	    }
	    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
	     *  Events raised here by default have bubbling set to false and cancelable set to true.
	     *  This applies also to built-in events being raised manually here on HTMLElements,
	     *  which may lead to unexpected behavior if it differs from the defaults.
	     */
	    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
	        var retVal;
	        if (EventGroup._isElement(target)) {
	            if (document.createEvent) {
	                var ev = document.createEvent('HTMLEvents');
	                ev.initEvent(eventName, bubbleEvent, true);
	                ev['args'] = eventArgs;
	                retVal = target.dispatchEvent(ev);
	            }
	            else if (document['createEventObject']) {
	                var evObj = document['createEventObject'](eventArgs);
	                // cannot set cancelBubble on evObj, fireEvent will overwrite it
	                target.fireEvent('on' + eventName, evObj);
	            }
	        }
	        else {
	            while (target && retVal !== false) {
	                var events = target.__events__;
	                var eventRecords = events ? events[eventName] : null;
	                for (var id in eventRecords) {
	                    if (eventRecords.hasOwnProperty(id)) {
	                        var eventRecordList = eventRecords[id];
	                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
	                            var record = eventRecordList[listIndex];
	                            if (record.objectCallback) {
	                                retVal = record.objectCallback.call(record.parent, eventArgs);
	                            }
	                        }
	                    }
	                }
	                // If the target has a parent, bubble the event up.
	                target = bubbleEvent ? target.parent : null;
	            }
	        }
	        return retVal;
	    };
	    EventGroup.isObserved = function (target, eventName) {
	        var events = target && target.__events__;
	        return !!events && !!events[eventName];
	    };
	    /** Check to see if the target has declared support of the given event. */
	    EventGroup.isDeclared = function (target, eventName) {
	        var declaredEvents = target && target.__declaredEvents;
	        return !!declaredEvents && !!declaredEvents[eventName];
	    };
	    EventGroup.stopPropagation = function (event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        else {
	            event.cancelBubble = true;
	        }
	    };
	    EventGroup._isElement = function (target) {
	        return !!target && (target instanceof HTMLElement || target.addEventListener);
	    };
	    EventGroup.prototype.dispose = function () {
	        if (!this._isDisposed) {
	            this._isDisposed = true;
	            this.off();
	            this._parent = null;
	        }
	    };
	    /** On the target, attach a set of events, where the events object is a name to function mapping. */
	    EventGroup.prototype.onAll = function (target, events, useCapture) {
	        for (var eventName in events) {
	            if (events.hasOwnProperty(eventName)) {
	                this.on(target, eventName, events[eventName], useCapture);
	            }
	        }
	    };
	    /** On the target, attach an event whose handler will be called in the context of the parent
	     * of this instance of EventGroup.
	     */
	    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
	        var _this = this;
	        if (eventName.indexOf(',') > -1) {
	            var events = eventName.split(/[ ,]+/);
	            for (var i = 0; i < events.length; i++) {
	                this.on(target, events[i], callback, useCapture);
	            }
	        }
	        else {
	            var parent_1 = this._parent;
	            var eventRecord = {
	                target: target,
	                eventName: eventName,
	                parent: parent_1,
	                callback: callback,
	                objectCallback: null,
	                elementCallback: null,
	                useCapture: useCapture
	            };
	            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
	            var events = (target.__events__ = target.__events__ || {});
	            events[eventName] = events[eventName] || {
	                count: 0
	            };
	            events[eventName][this._id] = events[eventName][this._id] || [];
	            events[eventName][this._id].push(eventRecord);
	            events[eventName].count++;
	            if (EventGroup._isElement(target)) {
	                var processElementEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    var result;
	                    try {
	                        result = callback.apply(parent_1, args);
	                        if (result === false && args[0] && args[0].preventDefault) {
	                            var e = args[0];
	                            e.preventDefault();
	                            e.cancelBubble = true;
	                        }
	                    }
	                    catch (e) {
	                    }
	                    return result;
	                };
	                eventRecord.elementCallback = processElementEvent;
	                if (target.addEventListener) {
	                    /* tslint:disable:ban-native-functions */
	                    target.addEventListener(eventName, processElementEvent, useCapture);
	                }
	                else if (target.attachEvent) {
	                    target.attachEvent('on' + eventName, processElementEvent);
	                }
	            }
	            else {
	                var processObjectEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    return callback.apply(parent_1, args);
	                };
	                eventRecord.objectCallback = processObjectEvent;
	            }
	            // Remember the record locally, so that it can be removed.
	            this._eventRecords.push(eventRecord);
	        }
	    };
	    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
	        for (var i = 0; i < this._eventRecords.length; i++) {
	            var eventRecord = this._eventRecords[i];
	            if ((!target || target === eventRecord.target) &&
	                (!eventName || eventName === eventRecord.eventName) &&
	                (!callback || callback === eventRecord.callback) &&
	                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
	                var events = eventRecord.target.__events__;
	                var targetArrayLookup = events[eventRecord.eventName];
	                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
	                // We may have already target's entries, so check for null.
	                if (targetArray) {
	                    if (targetArray.length === 1 || !callback) {
	                        targetArrayLookup.count -= targetArray.length;
	                        delete events[eventRecord.eventName][this._id];
	                    }
	                    else {
	                        targetArrayLookup.count--;
	                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
	                    }
	                    if (!targetArrayLookup.count) {
	                        delete events[eventRecord.eventName];
	                    }
	                }
	                if (eventRecord.elementCallback) {
	                    if (eventRecord.target.removeEventListener) {
	                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
	                    }
	                    else if (eventRecord.target.detachEvent) {
	                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
	                    }
	                }
	                this._eventRecords.splice(i--, 1);
	            }
	        }
	    };
	    /** Trigger the given event in the context of this instance of EventGroup. */
	    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
	        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
	    };
	    /** Declare an event as being supported by this instance of EventGroup. */
	    EventGroup.prototype.declare = function (event) {
	        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
	        if (typeof event === 'string') {
	            declaredEvents[event] = true;
	        }
	        else {
	            for (var i = 0; i < event.length; i++) {
	                declaredEvents[event[i]] = true;
	            }
	        }
	    };
	    EventGroup._uniqueId = 0;
	    return EventGroup;
	}());
	exports.EventGroup = EventGroup;
	
	//# sourceMappingURL=EventGroup.js.map


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	(function (KeyCodes) {
	    KeyCodes[KeyCodes["a"] = 65] = "a";
	    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
	    KeyCodes[KeyCodes["comma"] = 188] = "comma";
	    KeyCodes[KeyCodes["del"] = 46] = "del";
	    KeyCodes[KeyCodes["down"] = 40] = "down";
	    KeyCodes[KeyCodes["end"] = 35] = "end";
	    KeyCodes[KeyCodes["enter"] = 13] = "enter";
	    KeyCodes[KeyCodes["escape"] = 27] = "escape";
	    KeyCodes[KeyCodes["home"] = 36] = "home";
	    KeyCodes[KeyCodes["left"] = 37] = "left";
	    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
	    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
	    KeyCodes[KeyCodes["right"] = 39] = "right";
	    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
	    KeyCodes[KeyCodes["space"] = 32] = "space";
	    KeyCodes[KeyCodes["tab"] = 9] = "tab";
	    KeyCodes[KeyCodes["up"] = 38] = "up";
	})(exports.KeyCodes || (exports.KeyCodes = {}));
	var KeyCodes = exports.KeyCodes;
	
	//# sourceMappingURL=KeyCodes.js.map


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var KeyCodes_1 = __webpack_require__(15);
	var _isRTL;
	/**
	 * Gets the rtl state of the page (returns true if in rtl.)
	 */
	function getRTL() {
	    if (_isRTL === undefined) {
	        _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
	    }
	    return _isRTL;
	}
	exports.getRTL = getRTL;
	/**
	 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
	 */
	function setRTL(isRTL) {
	    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
	    _isRTL = isRTL;
	}
	exports.setRTL = setRTL;
	/**
	 * Returns the given key, but flips right/left arrows if necessary.
	 */
	function getRTLSafeKeyCode(key) {
	    if (getRTL()) {
	        if (key === KeyCodes_1.KeyCodes.left) {
	            key = KeyCodes_1.KeyCodes.right;
	        }
	        else if (key === KeyCodes_1.KeyCodes.right) {
	            key = KeyCodes_1.KeyCodes.left;
	        }
	    }
	    return key;
	}
	exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
	
	//# sourceMappingURL=rtl.js.map


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	function css() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var classes = [];
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var arg = args_1[_a];
	        if (arg) {
	            if (typeof arg === 'string') {
	                classes.push(arg);
	            }
	            else {
	                for (var key in arg) {
	                    if (arg[key]) {
	                        classes.push(key);
	                    }
	                }
	            }
	        }
	    }
	    return classes.join(' ');
	}
	exports.css = css;
	
	//# sourceMappingURL=css.js.map


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* tslint:disable:no-string-literal */
	"use strict";
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
	    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
	}
	exports.getFirstFocusable = getFirstFocusable;
	function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
	    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
	}
	exports.getLastFocusable = getLastFocusable;
	/** Traverse to find the previous element. */
	function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones) {
	    if (!currentElement ||
	        currentElement === rootElement) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    // Check its children.
	    if (traverseChildren && (includeElementsInFocusZones || !isElementFocusZone(currentElement)) && isCurrentElementVisible) {
	        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    // Check the current node, if it's not the first traversal.
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    // Check its previous sibling.
	    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    // Check its parent.
	    if (!suppressParentTraversal) {
	        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getPreviousElement = getPreviousElement;
	/** Traverse to find the next focusable element. */
	function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones) {
	    if (!currentElement ||
	        (currentElement === rootElement && suppressChildTraversal)) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    // Check the current node, if it's not the first traversal.
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    // Check its children.
	    if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !isElementFocusZone(currentElement))) {
	        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    if (currentElement === rootElement) {
	        return null;
	    }
	    // Check its sibling.
	    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    if (!suppressParentTraversal) {
	        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getNextElement = getNextElement;
	function isElementVisible(element) {
	    return (!!element &&
	        (element.offsetHeight !== 0 ||
	            element.offsetParent !== null ||
	            element.isVisible === true ||
	            (element.getAttribute && element.getAttribute(IS_VISIBLE_ATTRIBUTE) === 'true')));
	}
	exports.isElementVisible = isElementVisible;
	function isElementTabbable(element) {
	    return (!!element &&
	        (element.tagName === 'A' ||
	            (element.tagName === 'BUTTON' && !element.disabled) ||
	            (element.tagName === 'INPUT' && !element.disabled) ||
	            (element.getAttribute && element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true')));
	}
	exports.isElementTabbable = isElementTabbable;
	function isElementFocusZone(element) {
	    return element && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
	}
	exports.isElementFocusZone = isElementFocusZone;
	
	//# sourceMappingURL=focus.js.map


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(20));
	
	//# sourceMappingURL=ContextualMenu.js.map


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(21));
	__export(__webpack_require__(42));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DirectionalHint_1 = __webpack_require__(22);
	var FocusZone_1 = __webpack_require__(10);
	var KeyCodes_1 = __webpack_require__(15);
	var EventGroup_1 = __webpack_require__(14);
	var css_1 = __webpack_require__(17);
	var rtl_1 = __webpack_require__(16);
	var Async_1 = __webpack_require__(23);
	var Callout_1 = __webpack_require__(24);
	__webpack_require__(41);
	var ContextualMenuType;
	(function (ContextualMenuType) {
	    ContextualMenuType[ContextualMenuType["vertical"] = 0] = "vertical";
	    ContextualMenuType[ContextualMenuType["horizontal"] = 1] = "horizontal";
	})(ContextualMenuType || (ContextualMenuType = {}));
	var HorizontalAlignmentHint;
	(function (HorizontalAlignmentHint) {
	    HorizontalAlignmentHint[HorizontalAlignmentHint["auto"] = 0] = "auto";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["left"] = 1] = "left";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["center"] = 2] = "center";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["right"] = 3] = "right";
	})(HorizontalAlignmentHint || (HorizontalAlignmentHint = {}));
	var VerticalAlignmentHint;
	(function (VerticalAlignmentHint) {
	    VerticalAlignmentHint[VerticalAlignmentHint["top"] = 0] = "top";
	    VerticalAlignmentHint[VerticalAlignmentHint["center"] = 1] = "center";
	    VerticalAlignmentHint[VerticalAlignmentHint["bottom"] = 2] = "bottom";
	})(VerticalAlignmentHint || (VerticalAlignmentHint = {}));
	var _instance = 0;
	var ContextualMenu = (function (_super) {
	    __extends(ContextualMenu, _super);
	    function ContextualMenu(props) {
	        _super.call(this, props);
	        this.state = {
	            contextualMenuItems: null,
	            subMenuId: 'ContextualMenu-SubMenu-' + _instance++
	        };
	        this._isFocusingPreviousElement = false;
	        this._didSetInitialFocus = false;
	        this._enterTimerId = 0;
	        this._events = new EventGroup_1.EventGroup(this);
	        this._async = new Async_1.Async(this);
	        this.dismiss = this.dismiss.bind(this);
	        this._onKeyDown = this._onKeyDown.bind(this);
	        this._onMouseDownCapture = this._onMouseDownCapture.bind(this);
	        this._onItemClick = this._onItemClick.bind(this);
	        this._onSubMenuDismiss = this._onSubMenuDismiss.bind(this);
	        this._onMouseEnter = this._onMouseEnter.bind(this);
	        this._onMouseLeave = this._onMouseLeave.bind(this);
	    }
	    ContextualMenu.prototype.dismiss = function (ev) {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss(ev);
	        }
	    };
	    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
	    ContextualMenu.prototype.componentWillMount = function () {
	        this._previousActiveElement = document.activeElement;
	    };
	    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
	    ContextualMenu.prototype.componentDidMount = function () {
	        this._events.on(window, 'resize', this.dismiss);
	        this._events.on(window, 'mousedown', this._onMouseDownCapture, true);
	        this._events.on(window, 'touchstart', this._onMouseDownCapture, true);
	    };
	    // Invoked when a component is receiving new props.
	    ContextualMenu.prototype.componentWillReceiveProps = function (newProps, newState) {
	        if (newProps.targetElement !== this.props.targetElement) {
	            this._didSetInitialFocus = false;
	        }
	    };
	    // Invoked immediately before a component is unmounted from the DOM.
	    ContextualMenu.prototype.componentWillUnmount = function () {
	        var _this = this;
	        if (this._isFocusingPreviousElement && this._previousActiveElement) {
	            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
	            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
	            // to reset the focus back to the thing it thinks should have been focused.
	            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
	        }
	        this._events.dispose();
	        this._async.dispose();
	    };
	    ContextualMenu.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, targetElement = _a.targetElement, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, gapSpace = _a.gapSpace, isSubMenu = _a.isSubMenu, coverTarget = _a.coverTarget;
	        var submenuProps = this.state.submenuProps;
	        var hasIcons = !!(items && items.some(function (item) { return !!item.icon; }));
	        var hasCheckmarks = !!(items && items.some(function (item) { return !!item.canCheck; }));
	        return (React.createElement(Callout_1.Callout, {targetElement: targetElement, targetPoint: targetPoint, useTargetPoint: useTargetPoint, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, gapSpace: gapSpace, doNotLayer: isSubMenu, coverTarget: coverTarget, beakStyle: 'ms-Callout-smallbeak', className: 'ms-ContextualMenu-Callout', onLayerMounted: function () { return _this._tryFocus(_this._focusZone); }, onDismiss: this.props.onDismiss}, React.createElement("div", {ref: function (host) { return _this._host = host; }, id: id, className: css_1.css('ms-ContextualMenu-container', className)}, (items && items.length) ? (React.createElement(FocusZone_1.FocusZone, {className: 'ms-ContextualMenu is-open', direction: FocusZone_1.FocusZoneDirection.vertical, role: 'menu', ariaLabelledBy: labelElementId, ref: function (focusZone) { return _this._focusZone = focusZone; }}, React.createElement("ul", {className: 'ms-ContextualMenu-list is-open', onKeyDown: this._onKeyDown}, items.map(function (item, index) { return (
	        // If the item name is equal to '-', a divider will be generated.
	        item.name === '-' ? (React.createElement("li", {role: 'separator', key: item.key || index, className: css_1.css('ms-ContextualMenu-divider', item.className)})) : (React.createElement("li", {role: 'menuitem', key: item.key || index, className: css_1.css('ms-ContextualMenu-item', item.className)}, _this._renderMenuItem(item, index, hasCheckmarks, hasIcons)))); })))) : (null), submenuProps ? (React.createElement(ContextualMenu, React.__spread({}, submenuProps))) : (null))));
	    };
	    ContextualMenu.prototype._renderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        var _this = this;
	        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
	        if (item.onRender) {
	            return item.onRender(item);
	        }
	        return React.createElement('button', { className: css_1.css('ms-ContextualMenu-link', { 'is-expanded': (expandedMenuItemKey === item.key) }),
	            onClick: item.onClick || (item.items && item.items.length) ? this._onItemClick.bind(this, item) : item.href ? function () { location.href = item.href; } : null,
	            onKeyDown: item.items && item.items.length ? this._onItemKeyDown.bind(this, item) : null,
	            onMouseEnter: this._onMouseEnter.bind(this, item),
	            onMouseLeave: this._onMouseLeave,
	            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
	            disabled: item.isDisabled,
	            dataCommandKey: index,
	            role: 'menuitem',
	            href: item.href,
	            'aria-haspopup': item.items && item.items.length ? true : null,
	            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null }, this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons));
	    };
	    ContextualMenu.prototype._renderMenuItemChildren = function (item, index, hasCheckmarks, hasIcons) {
	        return (React.createElement("div", null, (hasCheckmarks) ? (React.createElement("span", {className: css_1.css('ms-ContextualMenu-checkmark', { 'ms-Icon ms-Icon--check': item.isChecked, 'not-selected': !item.isChecked }), onClick: this._onItemClick.bind(this, item)})) : (null), (hasIcons) ? (React.createElement("span", {className: 'ms-ContextualMenu-icon' + ((item.icon) ? " ms-Icon ms-Icon--" + item.icon : ' no-icon')})) : (null), React.createElement("span", {className: 'ms-ContextualMenu-itemText ms-fontWeight-regular'}, item.name), (item.items && item.items.length) ? (React.createElement("i", {className: css_1.css('ms-ContextualMenu-submenuChevron ms-Icon', rtl_1.getRTL() ? 'ms-Icon--chevronLeft' : 'ms-Icon--chevronRight')})) : (null)));
	    };
	    ContextualMenu.prototype._tryFocus = function (focusZone) {
	        if (focusZone && this.props.shouldFocusOnMount) {
	            focusZone.focus();
	        }
	    };
	    ContextualMenu.prototype._onKeyDown = function (ev) {
	        var submenuCloseKey = rtl_1.getRTL() ? KeyCodes_1.KeyCodes.right : KeyCodes_1.KeyCodes.left;
	        if (ev.which === KeyCodes_1.KeyCodes.escape
	            || ev.which === KeyCodes_1.KeyCodes.tab
	            || (ev.which === submenuCloseKey && this.props.isSubMenu)) {
	            // When a user presses escape, we will try to refocus the previous focused element.
	            this._isFocusingPreviousElement = true;
	            ev.preventDefault();
	            ev.stopPropagation();
	            this.dismiss(ev);
	        }
	    };
	    ContextualMenu.prototype._onMouseEnter = function (item, ev) {
	        var _this = this;
	        var targetElement = ev.currentTarget;
	        if (item.key !== this.state.expandedMenuItemKey) {
	            if (item.items && item.items.length) {
	                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuExpand(item, targetElement); }, 500);
	            }
	            else {
	                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
	            }
	        }
	    };
	    ContextualMenu.prototype._onMouseLeave = function (ev) {
	        this._async.clearTimeout(this._enterTimerId);
	    };
	    ContextualMenu.prototype._onMouseDownCapture = function (ev) {
	        if (!this._host.contains(ev.target)) {
	            this.dismiss(ev);
	        }
	    };
	    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
	        if (item.onMouseDown) {
	            item.onMouseDown(item, ev);
	        }
	    };
	    ContextualMenu.prototype._onItemClick = function (item, ev) {
	        if (item.key !== this.state.expandedMenuItemKey) {
	            if (!item.items || !item.items.length) {
	                if (item.onClick) {
	                    item.onClick(item, ev);
	                }
	                this.dismiss(ev);
	            }
	            else {
	                if (item.key === this.state.dismissedMenuItemKey) {
	                    this._onSubMenuDismiss(ev);
	                }
	                else {
	                    this._onSubMenuExpand(item, ev.currentTarget);
	                }
	            }
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
	        var openKey = rtl_1.getRTL() ? KeyCodes_1.KeyCodes.left : KeyCodes_1.KeyCodes.right;
	        if (ev.which === openKey) {
	            this._onSubMenuExpand(item, ev.currentTarget);
	        }
	    };
	    ContextualMenu.prototype._onSubMenuExpand = function (item, target) {
	        if (this.state.expandedMenuItemKey !== item.key) {
	            if (this.state.submenuProps) {
	                this._onSubMenuDismiss();
	            }
	            this.setState({
	                expandedMenuItemKey: item.key,
	                submenuProps: {
	                    items: item.items,
	                    targetElement: target,
	                    onDismiss: this._onSubMenuDismiss,
	                    isSubMenu: true,
	                    id: this.state.subMenuId,
	                    shouldFocusOnMount: true,
	                    directionalHint: rtl_1.getRTL() ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
	                    className: item.className
	                }
	            });
	        }
	    };
	    ContextualMenu.prototype._onSubMenuDismiss = function (ev) {
	        var itemKey = null;
	        var list = this.refs[this.state.expandedMenuItemKey];
	        if (list && list.contains(ev.target)) {
	            itemKey = this.state.expandedMenuItemKey;
	        }
	        this.setState({
	            dismissedMenuItemKey: itemKey,
	            expandedMenuItemKey: null,
	            submenuProps: null
	        });
	    };
	    // The default ContextualMenu properities have no items and beak, the default submenu direction is right and top.
	    ContextualMenu.defaultProps = {
	        items: [],
	        shouldFocusOnMount: true,
	        isBeakVisible: false,
	        gapSpace: 0,
	        directionalHint: DirectionalHint_1.DirectionalHint.rightBottomEdge,
	        beakWidth: 16
	    };
	    return ContextualMenu;
	}(React.Component));
	exports.ContextualMenu = ContextualMenu;
	
	//# sourceMappingURL=ContextualMenu.js.map


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	(function (DirectionalHint) {
	    /**
	     * Appear above the target element, with the left edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
	    /**
	     * Appear above the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
	    /**
	     * Appear above the target element, with the right edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
	    /**
	     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
	     */
	    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
	    /**
	     * Appear below the target element, with the left edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
	    /**
	     * Appear below the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
	    /**
	     * Appear below the target element, with the right edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
	    /**
	     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
	     */
	    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
	    /**
	     * Appear to the left of the target element, with the top edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
	    /**
	     * Appear to the left of the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
	    /**
	     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
	    /**
	     * Appear to the right of the target element, with the top edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
	    /**
	     * Appear to the right of the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
	    /**
	     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
	})(exports.DirectionalHint || (exports.DirectionalHint = {}));
	var DirectionalHint = exports.DirectionalHint;
	
	//# sourceMappingURL=DirectionalHint.js.map


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
	 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
	 *
	 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
	 * new instance of the class and remember to call dispose() during your code's dispose handler.
	 */
	"use strict";
	var Async = (function () {
	    function Async(parent, onError) {
	        this._timeoutIds = null;
	        this._immediateIds = null;
	        this._intervalIds = null;
	        this._animationFrameIds = null;
	        this._isDisposed = false;
	        this._parent = parent || null;
	        this._onErrorHandler = onError;
	        this._noop = function () { };
	    }
	    /**
	     * Dispose function, clears all async operations.
	     */
	    Async.prototype.dispose = function () {
	        var id;
	        this._isDisposed = true;
	        this._parent = null;
	        // Clear timeouts.
	        if (this._timeoutIds) {
	            for (id in this._timeoutIds) {
	                if (this._timeoutIds.hasOwnProperty(id)) {
	                    this.clearTimeout(id);
	                }
	            }
	            this._timeoutIds = null;
	        }
	        // Clear immediates.
	        if (this._immediateIds) {
	            for (id in this._immediateIds) {
	                if (this._immediateIds.hasOwnProperty(id)) {
	                    this.clearImmediate(id);
	                }
	            }
	            this._immediateIds = null;
	        }
	        // Clear intervals.
	        if (this._intervalIds) {
	            for (id in this._intervalIds) {
	                if (this._intervalIds.hasOwnProperty(id)) {
	                    this.clearInterval(id);
	                }
	            }
	            this._intervalIds = null;
	        }
	        // Clear animation frames.
	        if (this._animationFrameIds) {
	            for (id in this._animationFrameIds) {
	                if (this._animationFrameIds.hasOwnProperty(id)) {
	                    this.cancelAnimationFrame(id);
	                }
	            }
	            this._animationFrameIds = null;
	        }
	    };
	    /**
	     * SetTimeout override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setTimeout = function (callback, duration) {
	        var _this = this;
	        var timeoutId = 0;
	        if (!this._isDisposed) {
	            if (!this._timeoutIds) {
	                this._timeoutIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            timeoutId = setTimeout(function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._timeoutIds[timeoutId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    if (_this._onErrorHandler) {
	                        _this._onErrorHandler(e);
	                    }
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._timeoutIds[timeoutId] = true;
	        }
	        return timeoutId;
	    };
	    /**
	     * Clears the timeout.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearTimeout = function (id) {
	        if (this._timeoutIds && this._timeoutIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearTimeout(id);
	            delete this._timeoutIds[id];
	        }
	    };
	    /**
	     * SetImmediate override, which will auto cancel the immediate during dispose.
	     * @param callback Callback to execute.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setImmediate = function (callback) {
	        var _this = this;
	        var immediateId = 0;
	        if (!this._isDisposed) {
	            if (!this._immediateIds) {
	                this._immediateIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var setImmediateCallback = function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._immediateIds[immediateId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._immediateIds[immediateId] = true;
	        }
	        return immediateId;
	    };
	    /**
	     * Clears the immediate.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearImmediate = function (id) {
	        if (this._immediateIds && this._immediateIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
	            delete this._immediateIds[id];
	        }
	    };
	    /**
	     * SetInterval override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setInterval = function (callback, duration) {
	        var _this = this;
	        var intervalId = 0;
	        if (!this._isDisposed) {
	            if (!this._intervalIds) {
	                this._intervalIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            intervalId = setInterval(function () {
	                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
	                try {
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._intervalIds[intervalId] = true;
	        }
	        return intervalId;
	    };
	    /**
	     * Clears the interval.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearInterval = function (id) {
	        if (this._intervalIds && this._intervalIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearInterval(id);
	            delete this._intervalIds[id];
	        }
	    };
	    /**
	     * Creates a function that, when executed, will only call the func function at most once per
	     * every wait milliseconds. Provide an options object to indicate that func should be invoked
	     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
	     * function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
	     *
	     * @param func The function to throttle.
	     * @param wait The number of milliseconds to throttle executions to. Defaults to 0.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new throttled function.
	     */
	    Async.prototype.throttle = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = true;
	        var trailing = true;
	        var lastExecuteTime = 0;
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var delta = now - lastExecuteTime;
	            var waitLength = leading ? waitMS - delta : waitMS;
	            if (delta >= waitMS && (!userCall || leading)) {
	                lastExecuteTime = now;
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if (timeoutId === null && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    /**
	     * Creates a function that will delay the execution of func until after wait milliseconds have
	     * elapsed since the last time it was invoked. Provide an options object to indicate that func
	     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
	     * to the debounced function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the debounced function is invoked more than once during the wait
	     * timeout.
	     *
	     * @param func The function to debounce.
	     * @param wait The number of milliseconds to delay.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new debounced function.
	     */
	    Async.prototype.debounce = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = false;
	        var trailing = true;
	        var maxWait = null;
	        var lastCallTime = 0;
	        var lastExecuteTime = (new Date).getTime();
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
	            maxWait = options.maxWait;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var executeImmediately = false;
	            if (userCall) {
	                if (leading && now - lastCallTime >= waitMS) {
	                    executeImmediately = true;
	                }
	                lastCallTime = now;
	            }
	            var delta = now - lastCallTime;
	            var waitLength = waitMS - delta;
	            var maxWaitDelta = now - lastExecuteTime;
	            var maxWaitExpired = false;
	            if (maxWait !== null) {
	                // maxWait only matters when there is a pending callback
	                if (maxWaitDelta >= maxWait && timeoutId) {
	                    maxWaitExpired = true;
	                }
	                else {
	                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
	                }
	            }
	            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastExecuteTime = now;
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if ((timeoutId === null || !userCall) && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    Async.prototype.requestAnimationFrame = function (callback) {
	        var _this = this;
	        var animationFrameId = 0;
	        if (!this._isDisposed) {
	            if (!this._animationFrameIds) {
	                this._animationFrameIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var animationFrameCallback = function () {
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._animationFrameIds[animationFrameId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            animationFrameId = window.requestAnimationFrame ?
	                window.requestAnimationFrame(animationFrameCallback) :
	                window.setTimeout(animationFrameCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._animationFrameIds[animationFrameId] = true;
	        }
	        return animationFrameId;
	    };
	    Async.prototype.cancelAnimationFrame = function (id) {
	        if (this._animationFrameIds && this._animationFrameIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
	            /* tslint:enable:ban-native-functions */
	            delete this._animationFrameIds[id];
	        }
	    };
	    Async.prototype._logError = function (e) {
	        if (this._onErrorHandler) {
	            this._onErrorHandler(e);
	        }
	    };
	    return Async;
	}());
	exports.Async = Async;
	
	//# sourceMappingURL=Async.js.map


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(25));
	
	//# sourceMappingURL=Callout.js.map


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(26));
	__export(__webpack_require__(22));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DirectionalHint_1 = __webpack_require__(22);
	var Layer_1 = __webpack_require__(27);
	var css_1 = __webpack_require__(17);
	var EventGroup_1 = __webpack_require__(14);
	var positioning_1 = __webpack_require__(36);
	__webpack_require__(40);
	var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
	var OFF_SCREEN_POSITION = { top: -9999, left: 0 };
	var Callout = (function (_super) {
	    __extends(Callout, _super);
	    function Callout(props) {
	        _super.call(this, props);
	        this.state = {
	            positions: null,
	            slideDirectionalClassName: null,
	            calloutElementRect: null
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._onLayerDidMount = this._onLayerDidMount.bind(this);
	    }
	    Callout.prototype.componentDidUpdate = function () {
	        this._updatePosition();
	    };
	    Callout.prototype.componentDidMount = function () {
	        if (this.props.doNotLayer) {
	            this._onLayerDidMount();
	        }
	    };
	    Callout.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Callout.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, className = _a.className, targetElement = _a.targetElement, isBeakVisible = _a.isBeakVisible, beakStyle = _a.beakStyle, children = _a.children;
	        var _b = this.state, positions = _b.positions, slideDirectionalClassName = _b.slideDirectionalClassName;
	        var content = (React.createElement("div", {ref: function (host) { return _this._hostElement = host; }, className: 'ms-Callout-container'}, React.createElement("div", {className: css_1.css('ms-Callout', className, slideDirectionalClassName ? "ms-u-" + slideDirectionalClassName : ''), style: ((positions) ? positions.callout : OFF_SCREEN_POSITION), ref: function (callout) { return _this._calloutElement = callout; }}, isBeakVisible && targetElement ? (React.createElement("div", {className: beakStyle, style: ((positions) ? positions.beak : BEAK_ORIGIN_POSITION)})) : (null), React.createElement("div", {className: 'ms-Callout-main'}, children))));
	        return this.props.doNotLayer ? content : (React.createElement(Layer_1.Layer, {onLayerMounted: this._onLayerDidMount}, content));
	    };
	    Callout.prototype.dismiss = function () {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss();
	        }
	    };
	    Callout.prototype._dismissOnLostFocus = function (ev) {
	        var targetElement = this.props.targetElement;
	        var target = ev.target;
	        if (ev.target !== window &&
	            this._hostElement &&
	            !this._hostElement.contains(target) &&
	            (!targetElement || !targetElement.contains(target))) {
	            this.dismiss();
	        }
	    };
	    Callout.prototype._onLayerDidMount = function () {
	        // This is added so the callout will dismiss when the window is scrolled
	        // but not when something inside the callout is scrolled.
	        this._events.on(window, 'scroll', this._dismissOnLostFocus, true);
	        this._events.on(window, 'resize', this.dismiss, true);
	        this._events.on(window, 'focus', this._dismissOnLostFocus, true);
	        this._events.on(window, 'click', this._dismissOnLostFocus, true);
	        if (this.props.onLayerMounted) {
	            this.props.onLayerMounted();
	        }
	        this._updatePosition();
	    };
	    Callout.prototype._updatePosition = function () {
	        var positions = this.state.positions;
	        var hostElement = this._hostElement;
	        var calloutElement = this._calloutElement;
	        if (hostElement && calloutElement) {
	            var positionInfo = positioning_1.getRelativePositions(this.props, hostElement, calloutElement);
	            // Set the new position only when the positions are not exists or one of the new callout positions are different
	            if ((!positions && positionInfo) ||
	                (positions && positionInfo && (positions.callout.top !== positionInfo.calloutPosition.top || positions.callout.left !== positionInfo.calloutPosition.left))) {
	                this.setState({
	                    positions: {
	                        callout: positionInfo.calloutPosition,
	                        beak: positionInfo.beakPosition,
	                    },
	                    slideDirectionalClassName: positionInfo.directionalClassName
	                });
	            }
	        }
	    };
	    Callout.defaultProps = {
	        isBeakVisible: true,
	        beakStyle: 'ms-Callout-beak',
	        beakWidth: 28,
	        gapSpace: 16,
	        directionalHint: DirectionalHint_1.DirectionalHint.rightCenter
	    };
	    return Callout;
	}(React.Component));
	exports.Callout = Callout;
	
	//# sourceMappingURL=Callout.js.map


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(28));
	
	//# sourceMappingURL=Layer.js.map


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(29));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var LayerHost_1 = __webpack_require__(30);
	__webpack_require__(34);
	var LAYER_HOST_ELEMENT_ID = 'ms-layer-host';
	var _instance = 0;
	var _layerHost;
	var Layer = (function (_super) {
	    __extends(Layer, _super);
	    function Layer(props) {
	        _super.call(this, props);
	        this._layer = {
	            id: String(_instance++),
	            children: props.children
	        };
	    }
	    Layer.prototype.render = function () {
	        var isInLayer = this.context.isInLayer;
	        return isInLayer ? this.props.children : null;
	    };
	    Layer.prototype.componentWillMount = function () {
	        if (!_layerHost) {
	            var hostElement = document.createElement('div');
	            hostElement.setAttribute('id', LAYER_HOST_ELEMENT_ID);
	            document.body.appendChild(hostElement);
	            var layerHost = ReactDOM.render((React.createElement(LayerHost_1.LayerHost, null)), hostElement);
	            _layerHost = layerHost;
	        }
	    };
	    Layer.prototype.componentDidMount = function () {
	        if (!this.context.isInLayer) {
	            _layerHost.addLayer(this._layer, this.props.onLayerMounted);
	        }
	        else {
	            if (this.props.onLayerMounted) {
	                this.props.onLayerMounted();
	            }
	        }
	    };
	    Layer.prototype.componentWillReceiveProps = function (props) {
	        if (!this.context.isInLayer) {
	            this._layer.children = props.children;
	            _layerHost.updateLayer(this._layer);
	        }
	    };
	    Layer.prototype.componentWillUnmount = function () {
	        if (!this.context.isInLayer) {
	            _layerHost.removeLayer(this._layer);
	        }
	    };
	    Layer.contextTypes = {
	        isInLayer: React.PropTypes.bool
	    };
	    return Layer;
	}(React.Component));
	exports.Layer = Layer;
	
	//# sourceMappingURL=Layer.js.map


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Fabric_1 = __webpack_require__(31);
	var LayerHost = (function (_super) {
	    __extends(LayerHost, _super);
	    function LayerHost(props) {
	        _super.call(this, props);
	        this._layers = [];
	        this.state = {
	            layers: this._layers
	        };
	    }
	    LayerHost.prototype.getChildContext = function () {
	        return {
	            isInLayer: true
	        };
	    };
	    LayerHost.prototype.render = function () {
	        var layers = this.state.layers.map(function (layer, index) {
	            return (React.createElement("div", {className: 'ms-LayerHost-layer', key: layer.id}, layer.children));
	        });
	        return (React.createElement(Fabric_1.Fabric, {className: 'ms-LayerHost'}, layers));
	    };
	    LayerHost.prototype.addLayer = function (layerToAdd, onComplete) {
	        this._layers.push(layerToAdd);
	        this.setState({
	            layers: this._layers
	        }, function () {
	            if (onComplete) {
	                onComplete();
	            }
	        });
	    };
	    LayerHost.prototype.updateLayer = function (layerToUpdate) {
	        this.forceUpdate();
	    };
	    LayerHost.prototype.removeLayer = function (layerToRemove) {
	        var index = this._layers.indexOf(layerToRemove);
	        if (index > -1) {
	            this._layers.splice(index, 1);
	            this.forceUpdate();
	        }
	    };
	    LayerHost.childContextTypes = {
	        isInLayer: React.PropTypes.bool
	    };
	    return LayerHost;
	}(React.Component));
	exports.LayerHost = LayerHost;
	
	//# sourceMappingURL=LayerHost.js.map


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(32));
	
	//# sourceMappingURL=Fabric.js.map


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(33));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var EventGroup_1 = __webpack_require__(14);
	var KeyCodes_1 = __webpack_require__(15);
	var DIRECTIONAL_KEY_CODES = [
	    KeyCodes_1.KeyCodes.up,
	    KeyCodes_1.KeyCodes.down,
	    KeyCodes_1.KeyCodes.left,
	    KeyCodes_1.KeyCodes.right,
	    KeyCodes_1.KeyCodes.home,
	    KeyCodes_1.KeyCodes.end,
	    KeyCodes_1.KeyCodes.tab,
	    KeyCodes_1.KeyCodes.pageUp,
	    KeyCodes_1.KeyCodes.pageDown
	];
	var STATIONARY_DETECTION_DELAY = 100;
	var Fabric = (function (_super) {
	    __extends(Fabric, _super);
	    function Fabric() {
	        _super.call(this);
	        this.state = {
	            isFocusVisible: false,
	            isStationary: true
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._onScrollEnd = this._onScrollEnd.bind(this);
	    }
	    Fabric.prototype.componentDidMount = function () {
	        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
	        this._events.on(document.body, 'keydown', this._onKeyDown, true);
	        this._events.on(window, 'scroll', this._onScroll, true);
	    };
	    Fabric.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	        clearTimeout(this._scrollTimerId);
	    };
	    Fabric.prototype.render = function () {
	        var _a = this.state, isFocusVisible = _a.isFocusVisible, isStationary = _a.isStationary;
	        var rootClass = css_1.css('ms-Fabric ms-font-m', this.props.className, {
	            'is-focusVisible': isFocusVisible,
	            'is-stationary': isStationary,
	            'is-scrolling': !isStationary
	        });
	        return (React.createElement("div", React.__spread({}, this.props, {className: rootClass, ref: 'root'})));
	    };
	    Fabric.prototype._onMouseDown = function () {
	        if (this.state.isFocusVisible) {
	            this.setState({
	                isFocusVisible: false
	            });
	        }
	    };
	    Fabric.prototype._onKeyDown = function (ev) {
	        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
	            this.setState({
	                isFocusVisible: true
	            });
	        }
	    };
	    Fabric.prototype._onScroll = function () {
	        var isStationary = this.state.isStationary;
	        clearTimeout(this._scrollTimerId);
	        if (isStationary) {
	            this.setState({
	                isStationary: false
	            });
	        }
	        this._scrollTimerId = setTimeout(this._onScrollEnd, STATIONARY_DETECTION_DELAY);
	    };
	    Fabric.prototype._onScrollEnd = function () {
	        this.setState({
	            isStationary: true
	        });
	    };
	    return Fabric;
	}(React.Component));
	exports.Fabric = Fabric;
	
	//# sourceMappingURL=Fabric.js.map


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Layer{display:block;visibility:hidden}.ms-LayerHost{position:absolute;visibility:hidden;top:0;left:0;bottom:0;right:0}.ms-LayerHost-layer{visibility:visible}');
	
	//# sourceMappingURL=Layer.scss.js.map


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	;
	;
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? {} : window;
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: null,
	    lastStyleElement: null,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(styles, styleRecord) {
	    _injectStylesWithCssText ?
	        registerStylesIE(styles, styleRecord) :
	        registerStyles(styles, styleRecord);
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {any} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 * @param {any} theme JSON object of theme tokens to values.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot != null) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : null;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be null to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : null;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DirectionalHint_1 = __webpack_require__(22);
	var Rectangle_1 = __webpack_require__(37);
	var scrollUtilities_1 = __webpack_require__(38);
	var object_1 = __webpack_require__(39);
	(function (RectangleEdge) {
	    RectangleEdge[RectangleEdge["top"] = 0] = "top";
	    RectangleEdge[RectangleEdge["bottom"] = 1] = "bottom";
	    RectangleEdge[RectangleEdge["left"] = 2] = "left";
	    RectangleEdge[RectangleEdge["right"] = 3] = "right";
	})(exports.RectangleEdge || (exports.RectangleEdge = {}));
	var RectangleEdge = exports.RectangleEdge;
	var SLIDE_ANIMATIONS = (_a = {},
	    _a[RectangleEdge.top] = 'slideUpIn20',
	    _a[RectangleEdge.bottom] = 'slideDownIn20',
	    _a[RectangleEdge.left] = 'slideLeftIn20',
	    _a[RectangleEdge.right] = 'slideRightIn20',
	    _a
	);
	var PositionData = (function () {
	    function PositionData(calloutDirection, targetDirection, calloutPercent, targetPercent, beakPercent, isAuto) {
	        this.calloutDirection = calloutDirection;
	        this.targetDirection = targetDirection;
	        this.calloutPercent = calloutPercent;
	        this.targetPercent = targetPercent;
	        this.beakPercent = beakPercent;
	        this.isAuto = isAuto;
	    }
	    return PositionData;
	}());
	exports.PositionData = PositionData;
	// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
	var DirectionalDictionary = (_b = {},
	    _b[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, true),
	    _b[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, true),
	    _b[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.right, RectangleEdge.left, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.left, RectangleEdge.right, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 100, 100, 50, false),
	    _b
	);
	var CoverDictionary = (_c = {},
	    _c[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.top, RectangleEdge.top, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, true),
	    _c[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, true),
	    _c[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.left, RectangleEdge.left, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.right, RectangleEdge.right, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 100, 100, 50, false),
	    _c
	);
	var OppositeEdgeDictionary = (_d = {},
	    _d[RectangleEdge.top] = RectangleEdge.bottom,
	    _d[RectangleEdge.bottom] = RectangleEdge.top,
	    _d[RectangleEdge.right] = RectangleEdge.left,
	    _d[RectangleEdge.left] = RectangleEdge.right,
	    _d
	);
	function getRelativePositions(props, hostElement, calloutElement) {
	    var beakWidth = !props.isBeakVisible ? 0 : props.beakWidth;
	    var borderWidth = positioningFunctions._getBorderSize(calloutElement);
	    var gap = positioningFunctions._calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
	    var boundingRect = props.bounds ?
	        positioningFunctions._getRectangleFromIRect(props.bounds) :
	        new Rectangle_1.default(0, window.innerWidth - scrollUtilities_1.getScrollbarWidth(), 0, window.innerHeight);
	    var targetRect = positioningFunctions._getTargetRect(boundingRect, props.targetElement, props.creationEvent, props.targetPoint, props.useTargetPoint);
	    var positionData = positioningFunctions._getPositionData(props.directionalHint, targetRect, boundingRect, props.coverTarget);
	    var positionedCallout = positioningFunctions._positionCalloutWithinBounds(positioningFunctions._getRectangleFromHTMLElement(calloutElement), targetRect, boundingRect, positionData, gap, props.coverTarget);
	    var beakPositioned = positioningFunctions._positionBeak(beakWidth, positionedCallout, targetRect, borderWidth);
	    var finalizedCallout = positioningFunctions._finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement);
	    return {
	        calloutPosition: { top: finalizedCallout.top, left: finalizedCallout.left },
	        beakPosition: { top: beakPositioned.top, left: beakPositioned.left, display: 'block' },
	        directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
	        submenuDirection: positionedCallout.calloutEdge === RectangleEdge.right ? DirectionalHint_1.DirectionalHint.leftBottomEdge : DirectionalHint_1.DirectionalHint.rightBottomEdge
	    };
	}
	exports.getRelativePositions = getRelativePositions;
	var positioningFunctions;
	(function (positioningFunctions) {
	    function _getTargetRect(bounds, targetElement, ev, targetPoint, isTargetPoint) {
	        var targetRectangle;
	        if (isTargetPoint) {
	            if (targetPoint) {
	                targetRectangle = new Rectangle_1.default(targetPoint.x, targetPoint.x, targetPoint.y, targetPoint.y);
	            }
	            else {
	                targetRectangle = new Rectangle_1.default(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	            }
	        }
	        else {
	            if (!targetElement) {
	                if (ev && ev.target) {
	                    targetRectangle = _getRectangleFromHTMLElement(ev.target);
	                }
	                targetRectangle = new Rectangle_1.default();
	            }
	            else {
	                targetRectangle = _getRectangleFromHTMLElement(targetElement);
	            }
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
	                var direction = outOfBounds_1[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRect = _getTargetRect;
	    function _getRectangleFromHTMLElement(element) {
	        var clientRect = element.getBoundingClientRect();
	        return new Rectangle_1.default(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
	    }
	    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
	    function _positionCalloutWithinBounds(calloutRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        if (gap === void 0) { gap = 0; }
	        var estimatedRectangle = _moveRectangleToAnchorRectangle(calloutRectangle, directionalInfo.calloutDirection, directionalInfo.calloutPercent, targetRectangle, directionalInfo.targetDirection, directionalInfo.targetPercent, gap);
	        if (_isRectangleWithinBounds(estimatedRectangle, boundingRectangle)) {
	            return { calloutRectangle: estimatedRectangle, calloutEdge: directionalInfo.calloutDirection, targetEdge: directionalInfo.targetDirection, alignPercent: directionalInfo.calloutPercent, beakPercent: directionalInfo.beakPercent };
	        }
	        else {
	            return _getBestRectangleFitWithinBounds(estimatedRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget);
	        }
	    }
	    positioningFunctions._positionCalloutWithinBounds = _positionCalloutWithinBounds;
	    function _getBestRectangleFitWithinBounds(estimatedPosition, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        var callout = {
	            calloutRectangle: estimatedPosition,
	            calloutEdge: directionalInfo.calloutDirection,
	            targetEdge: directionalInfo.targetDirection,
	            alignPercent: directionalInfo.calloutPercent,
	            beakPercent: directionalInfo.beakPercent
	        };
	        // If it can't possibly fit within the bounds just put it into it's initial position.
	        if (!_canRectangleFitWithinBounds(estimatedPosition, boundingRectangle)) {
	            return callout;
	        }
	        if (!coverTarget) {
	            callout = _flipRectangleToFit(callout, targetRectangle, directionalInfo.targetPercent, boundingRectangle, gap);
	        }
	        var outOfBounds = _getOutOfBoundsEdges(callout.calloutRectangle, boundingRectangle);
	        for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
	            var direction = outOfBounds_2[_i];
	            callout.calloutRectangle = _alignEdgeToCoordinate(callout.calloutRectangle, boundingRectangle[RectangleEdge[direction]], direction);
	            var adjustedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.targetEdge, targetRectangle, callout.targetEdge, directionalInfo.targetPercent);
	            callout.alignPercent = adjustedPercent;
	        }
	        return callout;
	    }
	    positioningFunctions._getBestRectangleFitWithinBounds = _getBestRectangleFitWithinBounds;
	    function _positionBeak(beakWidth, callout, targetRectangle, border) {
	        var calloutRect = new Rectangle_1.default(0, callout.calloutRectangle.width - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        var beakRectangle = new Rectangle_1.default(0, beakWidth, 0, beakWidth);
	        var recalculatedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.calloutEdge, targetRectangle, callout.targetEdge, callout.beakPercent);
	        var estimatedTargetPoint = _getPointOnEdgeFromPercent(calloutRect, callout.calloutEdge, recalculatedPercent);
	        return _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border);
	    }
	    positioningFunctions._positionBeak = _positionBeak;
	    function _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border) {
	        var beakPixelSize = _calculateActualBeakWidthInPixels(beakRectangle.width) / 2;
	        var innerRect = null;
	        var beakPoint = { x: beakRectangle.width / 2, y: beakRectangle.width / 2 };
	        if (callout.calloutEdge === RectangleEdge.bottom || callout.calloutEdge === RectangleEdge.top) {
	            innerRect = new Rectangle_1.default(beakPixelSize, callout.calloutRectangle.width - beakPixelSize - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        }
	        else {
	            innerRect = new Rectangle_1.default(0, callout.calloutRectangle.width - border * 2, beakPixelSize, callout.calloutRectangle.height - beakPixelSize - border * 2);
	        }
	        var finalPoint = _getClosestPointOnEdgeToPoint(innerRect, callout.calloutEdge, estimatedTargetPoint);
	        return _movePointOnRectangleToPoint(beakRectangle, beakPoint, finalPoint);
	    }
	    positioningFunctions._finalizeBeakPosition = _finalizeBeakPosition;
	    function _getRectangleFromIRect(rect) {
	        return new Rectangle_1.default(rect.left, rect.right, rect.top, rect.bottom);
	    }
	    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
	    function _finalizeCalloutPosition(calloutRectangle, hostElement) {
	        var hostRect = _getRectangleFromHTMLElement(hostElement);
	        var topPosition = calloutRectangle.top - hostRect.top;
	        var leftPosition = calloutRectangle.left - hostRect.left;
	        return new Rectangle_1.default(leftPosition, leftPosition + calloutRectangle.width, topPosition, topPosition + calloutRectangle.height);
	    }
	    positioningFunctions._finalizeCalloutPosition = _finalizeCalloutPosition;
	    /**
	     * Finds the percent on the recalculateRect that matches the percent on the target rect based on position.
	     */
	    function _recalculateMatchingPercents(recalculateRect, rectangleEdge, targetRect, targetEdge, targetPercent) {
	        var targetPoint = _getPointOnEdgeFromPercent(targetRect, targetEdge, targetPercent);
	        var adjustedPoint = _getClosestPointOnEdgeToPoint(recalculateRect, rectangleEdge, targetPoint);
	        var adjustedPercent = _getPercentOfEdgeFromPoint(recalculateRect, rectangleEdge, adjustedPoint);
	        if (adjustedPercent > 100) {
	            adjustedPercent = 100;
	        }
	        else if (adjustedPercent < 0) {
	            adjustedPercent = 0;
	        }
	        return adjustedPercent;
	    }
	    positioningFunctions._recalculateMatchingPercents = _recalculateMatchingPercents;
	    function _canRectangleFitWithinBounds(rect, boundingRect) {
	        if (rect.width > boundingRect.width || rect.height > boundingRect.height) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._canRectangleFitWithinBounds = _canRectangleFitWithinBounds;
	    function _isRectangleWithinBounds(rect, boundingRect) {
	        if (rect.top < boundingRect.top) {
	            return false;
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            return false;
	        }
	        if (rect.left < boundingRect.left) {
	            return false;
	        }
	        if (rect.right > boundingRect.right) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._isRectangleWithinBounds = _isRectangleWithinBounds;
	    /**
	     * Gets all of the edges of a rectangle that are outside of the given bounds.
	     * If there are no out of bounds edges it returns an empty array.
	     */
	    function _getOutOfBoundsEdges(rect, boundingRect) {
	        var outOfBounds = new Array();
	        if (rect.top < boundingRect.top) {
	            outOfBounds.push(RectangleEdge.top);
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            outOfBounds.push(RectangleEdge.bottom);
	        }
	        if (rect.left < boundingRect.left) {
	            outOfBounds.push(RectangleEdge.left);
	        }
	        if (rect.right > boundingRect.right) {
	            outOfBounds.push(RectangleEdge.right);
	        }
	        return outOfBounds;
	    }
	    positioningFunctions._getOutOfBoundsEdges = _getOutOfBoundsEdges;
	    /**
	     * Returns a point on a edge that is x% of the way down it.
	     */
	    function _getPointOnEdgeFromPercent(rect, direction, percentOfRect) {
	        var startPoint;
	        var endPoint;
	        switch (direction) {
	            case RectangleEdge.top:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.right, y: rect.top };
	                break;
	            case RectangleEdge.left:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.left, y: rect.bottom };
	                break;
	            case RectangleEdge.right:
	                startPoint = { x: rect.right, y: rect.top };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            case RectangleEdge.bottom:
	                startPoint = { x: rect.left, y: rect.bottom };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            default:
	                startPoint = { x: 0, y: 0 };
	                endPoint = { x: 0, y: 0 };
	                break;
	        }
	        return _calculatePointPercentAlongLine(startPoint, endPoint, percentOfRect);
	    }
	    positioningFunctions._getPointOnEdgeFromPercent = _getPointOnEdgeFromPercent;
	    /**
	     * Gets the percent down an edge that a point appears.
	     */
	    function _getPercentOfEdgeFromPoint(rect, direction, valueOnEdge) {
	        switch (direction) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                return rect.width !== 0 ? (valueOnEdge.x - rect.left) / rect.width * 100 : 100;
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                return rect.height !== 0 ? (valueOnEdge.y - rect.top) / rect.height * 100 : 100;
	        }
	    }
	    positioningFunctions._getPercentOfEdgeFromPoint = _getPercentOfEdgeFromPoint;
	    /**
	     * Percent is based on distance from left to right or up to down. 0% would be left most, 100% would be right most.
	     */
	    function _calculatePointPercentAlongLine(startPoint, endPoint, percent) {
	        var x = startPoint.x + ((endPoint.x - startPoint.x) * percent / 100);
	        var y = startPoint.y + ((endPoint.y - startPoint.y) * percent / 100);
	        return { x: x, y: y };
	    }
	    positioningFunctions._calculatePointPercentAlongLine = _calculatePointPercentAlongLine;
	    function _moveTopLeftOfRectangleToPoint(rect, destination) {
	        return new Rectangle_1.default(destination.x, destination.x + rect.width, destination.y, destination.y + rect.height);
	    }
	    positioningFunctions._moveTopLeftOfRectangleToPoint = _moveTopLeftOfRectangleToPoint;
	    /**
	     * Aligns the given edge to the target coordinate.
	     */
	    function _alignEdgeToCoordinate(rect, coordinate, direction) {
	        switch (direction) {
	            case RectangleEdge.top:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate });
	            case RectangleEdge.bottom:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate - rect.height });
	            case RectangleEdge.left:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate, y: rect.top });
	            case RectangleEdge.right:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate - rect.width, y: rect.top });
	        }
	        return new Rectangle_1.default();
	    }
	    positioningFunctions._alignEdgeToCoordinate = _alignEdgeToCoordinate;
	    /**
	     * Moves a point on a given rectangle to the target point. Does not change the rectangles orientation.
	     */
	    function _movePointOnRectangleToPoint(rect, rectanglePoint, targetPoint) {
	        var leftCornerXDifference = rectanglePoint.x - rect.left;
	        var leftCornerYDifference = rectanglePoint.y - rect.top;
	        return _moveTopLeftOfRectangleToPoint(rect, { x: targetPoint.x - leftCornerXDifference, y: targetPoint.y - leftCornerYDifference });
	    }
	    positioningFunctions._movePointOnRectangleToPoint = _movePointOnRectangleToPoint;
	    /**
	     * Moves the given rectangle a certain number of pixels in the given direction;
	     */
	    function _moveRectangleInDirection(rect, moveDistance, direction) {
	        var xModifier = 0;
	        var yModifier = 0;
	        switch (direction) {
	            case RectangleEdge.top:
	                yModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.left:
	                xModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.right:
	                xModifier = moveDistance;
	                break;
	            case RectangleEdge.bottom:
	                yModifier = moveDistance;
	                break;
	        }
	        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left + xModifier, y: rect.top + yModifier });
	    }
	    positioningFunctions._moveRectangleInDirection = _moveRectangleInDirection;
	    /**
	     * Moves the given rectangle to an anchor rectangle.
	     */
	    function _moveRectangleToAnchorRectangle(rect, rectSide, rectPercent, anchorRect, anchorSide, anchorPercent, gap) {
	        if (gap === void 0) { gap = 0; }
	        var rectTargetPoint = _getPointOnEdgeFromPercent(rect, rectSide, rectPercent);
	        var anchorTargetPoint = _getPointOnEdgeFromPercent(anchorRect, anchorSide, anchorPercent);
	        var positionedRect = _movePointOnRectangleToPoint(rect, rectTargetPoint, anchorTargetPoint);
	        return _moveRectangleInDirection(positionedRect, gap, anchorSide);
	    }
	    positioningFunctions._moveRectangleToAnchorRectangle = _moveRectangleToAnchorRectangle;
	    /**
	     * Gets the closet point on an edge to the given point.
	     */
	    function _getClosestPointOnEdgeToPoint(rect, edge, point) {
	        switch (edge) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                var x = void 0;
	                if (point.x > rect.right) {
	                    x = rect.right;
	                }
	                else if (point.x < rect.left) {
	                    x = rect.left;
	                }
	                else {
	                    x = point.x;
	                }
	                return { x: x, y: rect[RectangleEdge[edge]] };
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                var y = void 0;
	                if (point.y > rect.bottom) {
	                    y = rect.bottom;
	                }
	                else if (point.y < rect.top) {
	                    y = rect.top;
	                }
	                else {
	                    y = point.y;
	                }
	                return { x: rect[RectangleEdge[edge]], y: y };
	        }
	    }
	    positioningFunctions._getClosestPointOnEdgeToPoint = _getClosestPointOnEdgeToPoint;
	    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
	    // We still want to position the beak based on it's midpoint which does not change. It will
	    // be at (beakwidth / 2, beakwidth / 2)
	    function _calculateActualBeakWidthInPixels(beakWidth) {
	        return Math.sqrt(beakWidth * beakWidth * 2);
	    }
	    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
	    function _getBorderSize(element) {
	        var styles = getComputedStyle(element, null);
	        var topBorder = parseFloat(styles.borderTopWidth);
	        var bottomBorder = parseFloat(styles.borderBottomWidth);
	        var leftBorder = parseFloat(styles.borderLeftWidth);
	        var rightBorder = parseFloat(styles.borderRightWidth);
	        // If any of the borders are NaN default to 0
	        if (isNaN(topBorder) || isNaN(bottomBorder) || isNaN(leftBorder) || isNaN(rightBorder)) {
	            return 0;
	        }
	        // If all of the borders are the same size, any value;
	        if (topBorder === bottomBorder && bottomBorder === leftBorder && leftBorder === rightBorder) {
	            return topBorder;
	        }
	        // If the borders do not agree, return 0
	        return 0;
	    }
	    positioningFunctions._getBorderSize = _getBorderSize;
	    function _getPositionData(direction, target, boundingRect, coverTarget) {
	        var directionalInfo = coverTarget ? CoverDictionary[direction] : DirectionalDictionary[direction];
	        if (directionalInfo.isAuto) {
	            var center = _getPointOnEdgeFromPercent(target, directionalInfo.targetDirection, 50);
	            if (center.x <= boundingRect.width / 2) {
	                directionalInfo.calloutPercent = 0;
	                directionalInfo.targetPercent = 0;
	            }
	            else {
	                directionalInfo.calloutPercent = 100;
	                directionalInfo.targetPercent = 100;
	            }
	        }
	        return directionalInfo;
	    }
	    positioningFunctions._getPositionData = _getPositionData;
	    function _flipRectangleToFit(callout, targetRect, targetPercent, boundingRect, gap) {
	        var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.top, RectangleEdge.bottom];
	        var currentEdge = callout.targetEdge;
	        // Make a copy to presever the original positioning.
	        var positionedCallout = object_1.assign({}, callout);
	        // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified callout.
	        for (var i = 0; i < 4; i++) {
	            var outOfBounds = _getOutOfBoundsEdges(positionedCallout.calloutRectangle, boundingRect);
	            var index = outOfBounds.indexOf(currentEdge);
	            var oppositeEdge = OppositeEdgeDictionary[currentEdge];
	            if (index > -1) {
	                directions.splice(directions.indexOf(currentEdge), 1);
	                currentEdge = directions.indexOf(oppositeEdge) > -1 ? oppositeEdge : directions.slice(-1)[0];
	                positionedCallout.calloutEdge = OppositeEdgeDictionary[currentEdge];
	                positionedCallout.targetEdge = currentEdge;
	                positionedCallout.calloutRectangle = _moveRectangleToAnchorRectangle(positionedCallout.calloutRectangle, positionedCallout.calloutEdge, positionedCallout.alignPercent, targetRect, positionedCallout.targetEdge, targetPercent, gap);
	            }
	            else {
	                return positionedCallout;
	            }
	        }
	        return callout;
	    }
	    positioningFunctions._flipRectangleToFit = _flipRectangleToFit;
	})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
	var _a, _b, _c, _d;
	
	//# sourceMappingURL=positioning.js.map


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	var Rectangle = (function () {
	    function Rectangle(left, right, top, bottom) {
	        if (left === void 0) { left = 0; }
	        if (right === void 0) { right = 0; }
	        if (top === void 0) { top = 0; }
	        if (bottom === void 0) { bottom = 0; }
	        this.top = top;
	        this.bottom = bottom;
	        this.left = left;
	        this.right = right;
	    }
	    Object.defineProperty(Rectangle.prototype, "width", {
	        /**
	         * Calculated automatically by subtracting the right from left
	         */
	        get: function () {
	            return this.right - this.left;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "height", {
	        /**
	         * Calculated automatically by subtracting the bottom from top.
	         */
	        get: function () {
	            return this.bottom - this.top;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Rectangle;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Rectangle;
	
	//# sourceMappingURL=Rectangle.js.map


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	var _scrollbarWidth;
	exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
	/** Calculates the width of a scrollbar for the browser/os. */
	function getScrollbarWidth() {
	    if (_scrollbarWidth === undefined) {
	        var scrollDiv = document.createElement('div');
	        scrollDiv.style.setProperty('width', '100px');
	        scrollDiv.style.setProperty('height', '100px');
	        scrollDiv.style.setProperty('overflow', 'scroll');
	        scrollDiv.style.setProperty('position', 'absolute');
	        scrollDiv.style.setProperty('top', '-9999px');
	        document.body.appendChild(scrollDiv);
	        // Get the scrollbar width
	        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        // Delete the DIV
	        document.body.removeChild(scrollDiv);
	    }
	    return _scrollbarWidth;
	}
	exports.getScrollbarWidth = getScrollbarWidth;
	/**
	 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
	 * document.body.
	 */
	function findScrollableParent(startingElement) {
	    var el = startingElement;
	    // First do a quick scan for the scrollable attribute.
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
	            return el;
	        }
	        el = el.parentElement;
	    }
	    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
	    el = startingElement;
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
	            var styles = getComputedStyle(el);
	            var overflowY = styles ? styles.getPropertyValue('overflow-y') : '';
	            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
	                return el;
	            }
	        }
	        el = el.parentElement;
	    }
	    return el;
	}
	exports.findScrollableParent = findScrollableParent;
	
	//# sourceMappingURL=scrollUtilities.js.map


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	function checkProperties(a, b) {
	    for (var propName in a) {
	        if (a.hasOwnProperty(propName)) {
	            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
	                return false;
	            }
	        }
	    }
	    return true;
	}
	// Compare a to b and b to a
	function shallowCompare(a, b) {
	    return checkProperties(a, b) && checkProperties(b, a);
	}
	exports.shallowCompare = shallowCompare;
	// Assign function.
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    target = target || {};
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var sourceObject = args_1[_a];
	        if (sourceObject) {
	            for (var propName in sourceObject) {
	                if (sourceObject.hasOwnProperty(propName)) {
	                    target[propName] = sourceObject[propName];
	                }
	            }
	        }
	    }
	    return target;
	}
	exports.assign = assign;
	
	//# sourceMappingURL=object.js.map


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Callout{z-index:100;margin:16px auto;position:relative;width:288px}.ms-Callout.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--arrowBottom:before,.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowRight:before,.ms-Callout.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--arrowTop:before{content:\'\';position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);height:0;width:0}.ms-Callout.ms-Callout--arrowBottom:before,.ms-Callout.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--arrowRight:before,.ms-Callout.ms-Callout--arrowTop:before{z-index:0;outline:1px solid transparent;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-Callout.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowTop:after{z-index:10}.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowRight:before{top:40px;display:none}.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowLeft:before{border-top:10px solid "[theme:white, default: #ffffff]";border-right:10px solid transparent;border-bottom:10px solid transparent;border-left:10px solid "[theme:white, default: #ffffff]";left:-10px}.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowRight:before{border-top:10px solid transparent;border-right:10px solid "[theme:white, default: #ffffff]";border-bottom:10px solid "[theme:white, default: #ffffff]";border-left:10px solid transparent;right:-10px}.ms-Callout.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--arrowBottom:before,.ms-Callout.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--arrowTop:before{left:0;right:0;margin:0 auto;width:0}.ms-Callout.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--arrowTop:before{border-top:10px solid "[theme:white, default: #ffffff]";border-right:10px solid "[theme:white, default: #ffffff]";border-bottom:10px solid transparent;border-left:10px solid transparent;top:-10px}.ms-Callout.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--arrowBottom:before{border-top:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid "[theme:white, default: #ffffff]";border-left:10px solid "[theme:white, default: #ffffff]";bottom:-10px}@media screen and (-ms-high-contrast:active){.ms-Callout.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--arrowBottom:before,.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowRight:before,.ms-Callout.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--arrowTop:before{border:0;width:20px;height:20px;background-color:"[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Callout.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--arrowBottom:before,.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowRight:before,.ms-Callout.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--arrowTop:before{background-color:"[theme:white, default: #ffffff]"}}.ms-Callout-main{position:relative;background-color:"[theme:white, default: #ffffff]";box-sizing:border-box;outline:1px solid transparent;z-index:5;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-Callout-close{margin:0;border:0;background:0 0;cursor:pointer;position:absolute;top:12px;right:12px;padding:8px;width:32px;height:32px;font-size:14px;color:"[theme:neutralSecondary, default: #666666]";z-index:110}.ms-Callout-inner{height:100%;padding:0 24px 20px}.ms-Callout-header{z-index:105;padding:18px 24px 12px}.ms-Callout-title{margin:0;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px}.ms-Callout-subText{margin:0;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;color:"[theme:neutralPrimary, default: #333333]";font-size:12px}.ms-Callout-link{font-size:14px;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif}.ms-Callout-actions{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-Callout-actions .ms-Link.ms-Link--hero{position:relative;left:-8px}.ms-Callout-action{position:relative;top:4px;left:-8px;margin-left:0!important}.ms-Callout-action:focus .ms-Callout-actionIcon,.ms-Callout-action:hover .ms-Callout-actionIcon{color:"[theme:themePrimary, default: #0078d7]"}.ms-Callout-button{margin-right:12px}.ms-Callout.ms-Callout--close .ms-Callout-title{margin-right:20px}.ms-Callout.ms-Callout--OOBE.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--OOBE.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--OOBE.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--OOBE.ms-Callout--arrowRight:before,.ms-Callout.ms-Callout--OOBE.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--OOBE.ms-Callout--arrowTop:before{border-color:"[theme:themePrimary, default: #0078d7]";background-color:transparent}.ms-Callout.ms-Callout--OOBE .ms-Callout-header{padding:28px 24px;background-color:"[theme:themePrimary, default: #0078d7]"}.ms-Callout.ms-Callout--OOBE .ms-Callout-title{font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;font-size:28px;color:"[theme:white, default: #ffffff]"}.ms-Callout.ms-Callout--OOBE .ms-Callout-inner{padding-top:20px}.ms-Callout.ms-Callout--OOBE .ms-Callout-subText{font-size:14px}.ms-Callout.ms-Callout--actionText .ms-Callout-actions{border-top:1px solid "[theme:neutralLight, default: #eaeaea]";margin-bottom:-8px}.ms-Callout.ms-Callout--peek.ms-Callout--arrowBottom:after,.ms-Callout.ms-Callout--peek.ms-Callout--arrowBottom:before,.ms-Callout.ms-Callout--peek.ms-Callout--arrowTop:after,.ms-Callout.ms-Callout--peek.ms-Callout--arrowTop:before{left:40px;right:auto}.ms-Callout.ms-Callout--peek.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--peek.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--peek.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--peek.ms-Callout--arrowRight:before{top:calc("50% - 10px")}.ms-Callout.ms-Callout--peek .ms-Callout-header{padding-bottom:0}.ms-Callout.ms-Callout--peek .ms-Callout-title{font-size:14px}.ms-Callout.ms-Callout--peek .ms-Callout-actions{margin-top:12px;margin-bottom:-4px}@media (min-width:480px){.ms-Callout{width:300px;margin:16px}.ms-Callout.ms-Callout--arrowLeft:after,.ms-Callout.ms-Callout--arrowLeft:before,.ms-Callout.ms-Callout--arrowRight:after,.ms-Callout.ms-Callout--arrowRight:before{display:block}}.ms-u-slideRightIn20{-webkit-animation-name:fadeIn,slideRightIn20;animation-name:fadeIn,slideRightIn20;-webkit-animation-duration:367ms;-moz-animation-duration:367ms;-ms-animation-duration:367ms;-o-animation-duration:367ms;-webkit-animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-timing-function:cubic-bezier(.1,.9,.2,1);-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes slideRightIn20{from{-webkit-transform:translate3d(-20px,0,0)}to{-webkit-transform:translate3d(0,0,0)}}@keyframes slideRightIn20{from{-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ms-u-slideLeftIn20{-webkit-animation-name:fadeIn,slideLeftIn20;animation-name:fadeIn,slideLeftIn20;-webkit-animation-duration:367ms;-moz-animation-duration:367ms;-ms-animation-duration:367ms;-o-animation-duration:367ms;-webkit-animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-timing-function:cubic-bezier(.1,.9,.2,1);-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes slideLeftIn20{from{-webkit-transform:translate3d(20px,0,0)}to{-webkit-transform:translate3d(0,0,0)}}@keyframes slideLeftIn20{from{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ms-Callout-container{position:relative}.ms-Callout{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-shadow:0 0 15px -5px rgba(0,0,0,.4);width:auto;border:1px solid "[theme:neutralLight, default: #eaeaea]";position:absolute;display:inline-block}.ms-Callout-main{box-shadow:none}.ms-Callout-beak,.ms-Callout-smallbeak{position:absolute;width:28px;height:28px;background-color:"[theme:white, default: #ffffff]";box-shadow:inherit;border:inherit;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ms-Callout-smallbeak{width:16px;height:16px}.ExampleCard-example>.ms-Callout-container>.ms-Callout{position:relative}');
	
	//# sourceMappingURL=Callout.scss.js.map


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-ContextualMenu{background-color:"[theme:white, default: #ffffff]";min-width:180px;max-width:300px}.ms-ContextualMenu-list{list-style-type:none;margin:0;padding:0;max-height:100vh;overflow-y:auto;line-height:0}.ms-ContextualMenu-item{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;position:relative;box-sizing:border-box}.ms-ContextualMenu-link{font:inherit;background:0 0;border:none;margin:0;padding:0 8px;min-width:100%;height:40px;line-height:40px;display:block}.ms-Fabric .ms-ContextualMenu-link::-moz-focus-inner{border:0}.ms-Fabric .ms-ContextualMenu-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-ContextualMenu-link:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}html[dir=ltr] .ms-ContextualMenu-link{text-align:left}html[dir=rtl] .ms-ContextualMenu-link{text-align:right}.ms-ContextualMenu-link:hover{background:"[theme:neutralLight, default: #eaeaea]"}.ms-ContextualMenu-link.is-expanded,.ms-ContextualMenu-link.is-expanded:hover{background:"[theme:themeLight, default: #c7e0f4]"}.ms-ContextualMenu-divider{display:block;height:1px;margin:4px 0;background-color:"[theme:neutralLight, default: #eaeaea]";position:relative}.ms-ContextualMenu-checkmark{display:inline-block;min-height:1px;width:24px;text-align:center}.ms-ContextualMenu-icon{display:inline-block;min-height:1px;width:24px;text-align:center}.ms-ContextualMenu-itemText{padding:0 4px}.ms-Icon.ms-ContextualMenu-submenuChevron{position:absolute;height:40px;line-height:40px;vertical-align:middle;width:16px;text-align:center}html[dir=ltr] .ms-Icon.ms-ContextualMenu-submenuChevron{right:8px}html[dir=rtl] .ms-Icon.ms-ContextualMenu-submenuChevron{left:8px}');
	
	//# sourceMappingURL=ContextualMenu.scss.js.map


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DirectionalHint_1 = __webpack_require__(22);
	exports.DirectionalHint = DirectionalHint_1.DirectionalHint;
	
	//# sourceMappingURL=ContextualMenu.Props.js.map


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Breadcrumb{margin:23px 0 1px 0}.ms-Breadcrumb.is-overflow .ms-Breadcrumb-overflow{display:inline}.ms-Breadcrumb-chevron{font-size:17px;color:"[theme:neutralSecondary, default: #666666]";vertical-align:top;margin:10px 0}.ms-Breadcrumb-list{display:inline;white-space:nowrap;padding:0;margin:0}.ms-Breadcrumb-list .ms-Breadcrumb-listItem{list-style-type:none;vertical-align:top;margin:0;padding:0;display:inline-block}.ms-Breadcrumb-list .ms-Breadcrumb-listItem:last-of-type .ms-Breadcrumb-chevron{display:none}.ms-Breadcrumb-overflow{display:inline-block;position:relative}.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton{font-size:12px;display:inline-block;color:"[theme:themePrimary, default: #0078d7]";padding:12px 8px 3px 8px;cursor:pointer}.ms-Breadcrumb-overflowMenu{display:none;position:absolute}.ms-Breadcrumb-overflowMenu.is-open{display:block;top:36px;left:0;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:"[theme:white, default: #ffffff]";border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";z-index:105}.ms-Breadcrumb-overflowMenu:before{position:absolute;box-shadow:0 0 5px 0 rgba(0,0,0,.4);top:-6px;left:6px;content:\' \';width:16px;height:16px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff}.ms-Breadcrumb-overflowMenu .ms-ContextualMenu{border:none;box-shadow:none;position:relative;width:190px}.ms-Breadcrumb-overflowMenu .ms-ContextualMenu.is-open{margin-bottom:0}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:"[theme:neutralLighter, default: #f4f4f4]";color:"[theme:themeDark, default: #005a9e]";cursor:pointer}.ms-Breadcrumb-itemLink:focus,.ms-Breadcrumb-overflowButton:focus{outline:"[theme:neutralSecondaryAlt, default: #767676]" solid 1px;color:"[theme:black, default: #000000]"}.ms-Breadcrumb-itemLink:active,.ms-Breadcrumb-overflowButton:active{outline:transparent;background-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Breadcrumb-itemLink{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px;font-weight:400;display:inline-block;padding:0 4px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ms-Fabric .ms-Breadcrumb-itemLink::-moz-focus-inner{border:0}.ms-Fabric .ms-Breadcrumb-itemLink{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Breadcrumb-itemLink:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}@media screen and (max-width:639px){.ms-Breadcrumb{margin:10px 0}.ms-Breadcrumb-itemLink{font-size:17px}.ms-Breadcrumb-chevron{font-size:14px;margin-top:7px}.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton{padding-top:8px;padding-bottom:3px}}@media screen and (max-width:479px){.ms-Breadcrumb-itemLink{font-size:14px;max-width:116px}.ms-Breadcrumb-chevron{margin-top:4px}.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton{padding-top:5px;padding-bottom:3px}}');
	
	//# sourceMappingURL=Breadcrumb.scss.js.map


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(45));
	
	//# sourceMappingURL=Button.js.map


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(46));
	__export(__webpack_require__(48));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(47);
	var css_1 = __webpack_require__(17);
	var object_1 = __webpack_require__(39);
	var Button_Props_1 = __webpack_require__(48);
	var _instance = 0;
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(props) {
	        _super.call(this, props);
	        this.state = {
	            labelId: "Button-" + _instance++,
	            descriptionId: "Button-" + _instance++,
	            ariaDescriptionId: "Button-" + _instance++,
	        };
	    }
	    Button.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, buttonType = _a.buttonType, children = _a.children, icon = _a.icon, description = _a.description, ariaLabel = _a.ariaLabel, ariaDescription = _a.ariaDescription, elementType = _a.elementType, disabled = _a.disabled;
	        var _b = this.state, labelId = _b.labelId, descriptionId = _b.descriptionId, ariaDescriptionId = _b.ariaDescriptionId;
	        var tag = this.props.elementType === Button_Props_1.ElementType.button ? 'button' : 'a';
	        var className = css_1.css(this.props.className, 'ms-Button', {
	            'ms-Button--primary': buttonType === Button_Props_1.ButtonType.primary,
	            'ms-Button--hero': buttonType === Button_Props_1.ButtonType.hero,
	            'ms-Button--compound': buttonType === Button_Props_1.ButtonType.compound,
	            'ms-Button--command': buttonType === Button_Props_1.ButtonType.command,
	            'ms-Button--icon': buttonType === Button_Props_1.ButtonType.icon,
	            'disabled': (elementType === Button_Props_1.ElementType.anchor && disabled)
	        });
	        var iconSpan = icon && (buttonType === Button_Props_1.ButtonType.command || buttonType === Button_Props_1.ButtonType.hero || buttonType === Button_Props_1.ButtonType.icon)
	            ? React.createElement("span", {className: 'ms-Button-icon'}, React.createElement("i", {className: "ms-Icon ms-Icon--" + icon}))
	            : null;
	        // ms-Button-description is only shown when the button type is compound.
	        // In other cases it will not be displayed.
	        var descriptionSpan = description
	            ? React.createElement("span", {className: 'ms-Button-description', id: descriptionId}, description)
	            : null;
	        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
	        // otherwise it will be assigned to descriptionSpan.
	        var ariaDescriptionSpan = ariaDescription
	            ? React.createElement("span", {className: 'ms-u-screenReaderOnly', id: ariaDescriptionId}, ariaDescription)
	            : null;
	        return React.createElement(tag, object_1.assign({
	            'aria-label': ariaLabel,
	            'aria-labelledby': ariaLabel ? null : labelId,
	            'aria-describedby': ariaDescription ? ariaDescriptionId : description ? descriptionId : null,
	            'ref': function (c) { return _this._buttonElement = c; }
	        }, this.props, { className: className }), iconSpan, React.createElement("span", {className: 'ms-Button-label', id: labelId}, children), descriptionSpan, ariaDescriptionSpan);
	    };
	    Button.prototype.focus = function () {
	        if (this._buttonElement) {
	            this._buttonElement.focus();
	        }
	    };
	    Button.defaultProps = {
	        elementType: Button_Props_1.ElementType.button,
	        buttonType: Button_Props_1.ButtonType.normal
	    };
	    return Button;
	}(React.Component));
	exports.Button = Button;
	
	//# sourceMappingURL=Button.js.map


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Button{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;background-color:"[theme:neutralLighter, default: #f4f4f4]";border:1px solid "[theme:neutralLighter, default: #f4f4f4]";cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px}.ms-Button:hover{background-color:"[theme:neutralLight, default: #eaeaea]";border-color:"[theme:neutralLight, default: #eaeaea]";outline:1px solid transparent}.ms-Button:hover .ms-Button-label{color:"[theme:black, default: #000000]"}.ms-Button:focus{background-color:"[theme:neutralLight, default: #eaeaea]";border-color:"[theme:themePrimary, default: #0078d7]";outline:1px solid transparent}.ms-Button:focus .ms-Button-label{color:"[theme:black, default: #000000]"}.ms-Button:active{background-color:"[theme:themePrimary, default: #0078d7]";border-color:"[theme:themePrimary, default: #0078d7]"}.ms-Button:active .ms-Button-label{color:"[theme:white, default: #ffffff]"}.ms-Button.is-disabled,.ms-Button:disabled{background-color:"[theme:neutralLighter, default: #f4f4f4]";border-color:"[theme:neutralLighter, default: #f4f4f4]";cursor:default}.ms-Button.is-disabled .ms-Button-label,.ms-Button:disabled .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-Button.is-disabled:focus,.ms-Button.is-disabled:hover,.ms-Button:disabled:focus,.ms-Button:disabled:hover{outline:0}.ms-Button+.ms-Button{margin-left:6px}.ms-Button-label{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px}.ms-Button-description,.ms-Button-icon{display:none}.ms-Button.ms-Button--primary{background-color:"[theme:themePrimary, default: #0078d7]";border-color:"[theme:themePrimary, default: #0078d7]"}.ms-Button.ms-Button--primary .ms-Button-label{color:"[theme:white, default: #ffffff]"}.ms-Button.ms-Button--primary:hover{background-color:"[theme:themeDark, default: #005a9e]";border-color:"[theme:themeDark, default: #005a9e]"}.ms-Button.ms-Button--primary:focus{background-color:"[theme:themeDark, default: #005a9e]";border-color:"[theme:themeDarker, default: #004578]"}.ms-Button.ms-Button--primary:active{background-color:"[theme:themePrimary, default: #0078d7]";border-color:"[theme:themePrimary, default: #0078d7]"}.ms-Button.ms-Button--primary.is-disabled,.ms-Button.ms-Button--primary:disabled{background-color:"[theme:neutralLighter, default: #f4f4f4]";border-color:"[theme:neutralLighter, default: #f4f4f4]"}.ms-Button.ms-Button--primary.is-disabled .ms-Button-label,.ms-Button.ms-Button--primary:disabled .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-Button.ms-Button--hero{background-color:transparent;border:none;vertical-align:top;line-height:normal}.ms-Button.ms-Button--hero .ms-Button-icon{color:"[theme:themePrimary, default: #0078d7]";display:inline-block;font-size:12px;position:relative;top:-8px;text-align:center}.ms-Button.ms-Button--hero .ms-Button-icon .ms-Icon{border-radius:18px;border:1px solid "[theme:themePrimary, default: #0078d7]";height:18px;line-height:18px;width:18px;font-size:12px;margin:0}.ms-Button.ms-Button--hero .ms-Button-label{color:"[theme:themePrimary, default: #0078d7]";font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px;position:relative;top:-5px;text-decoration:none}.ms-Button.ms-Button--hero:focus .ms-Button-icon .ms-Icon,.ms-Button.ms-Button--hero:hover .ms-Button-icon .ms-Icon{color:"[theme:themeDark, default: #005a9e]"}.ms-Button.ms-Button--hero:focus .ms-Button-label,.ms-Button.ms-Button--hero:hover .ms-Button-label{color:"[theme:themeDarker, default: #004578]"}.ms-Button.ms-Button--hero:active .ms-Button-icon .ms-Icon{color:"[theme:themePrimary, default: #0078d7]"}.ms-Button.ms-Button--hero:active .ms-Button-label{color:"[theme:themePrimary, default: #0078d7]"}.ms-Button.ms-Button--hero.is-disabled .ms-Button-icon .ms-Icon,.ms-Button.ms-Button--hero:disabled .ms-Button-icon .ms-Icon{color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Button.ms-Button--hero.is-disabled .ms-Button-label,.ms-Button.ms-Button--hero:disabled .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-Button.ms-Button--compound{height:auto;min-height:72px;max-width:280px;padding:20px}.ms-Button.ms-Button--compound .ms-Button-label{display:block;font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif;position:relative;text-align:left;margin-top:-5px}.ms-Button.ms-Button--compound .ms-Button-description{color:"[theme:neutralSecondary, default: #666666]";display:block;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;position:relative;text-align:left;top:3px}.ms-Button.ms-Button--compound:hover .ms-Button-description{color:"[theme:neutralDark, default: #212121]"}.ms-Button.ms-Button--compound:focus{border-color:"[theme:themePrimary, default: #0078d7]";background-color:"[theme:neutralLighter, default: #f4f4f4]"}.ms-Button.ms-Button--compound:focus .ms-Button-label{color:"[theme:neutralPrimary, default: #333333]"}.ms-Button.ms-Button--compound:focus .ms-Button-description{color:"[theme:neutralSecondary, default: #666666]"}.ms-Button.ms-Button--compound:active{background-color:"[theme:themePrimary, default: #0078d7]"}.ms-Button.ms-Button--compound:active .ms-Button-description,.ms-Button.ms-Button--compound:active .ms-Button-label{color:"[theme:white, default: #ffffff]"}.ms-Button.ms-Button--compound.is-disabled .ms-Button-description,.ms-Button.ms-Button--compound.is-disabled .ms-Button-label,.ms-Button.ms-Button--compound:disabled .ms-Button-description,.ms-Button.ms-Button--compound:disabled .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-Button.ms-Button--compound.is-disabled:active,.ms-Button.ms-Button--compound.is-disabled:focus,.ms-Button.ms-Button--compound:disabled:active,.ms-Button.ms-Button--compound:disabled:focus{border-color:"[theme:neutralLighter, default: #f4f4f4]";background-color:"[theme:neutralLighter, default: #f4f4f4]"}.ms-Button.ms-Button--compound.is-disabled:active .ms-Button-description,.ms-Button.ms-Button--compound.is-disabled:active .ms-Button-label,.ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-description,.ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-label,.ms-Button.ms-Button--compound:disabled:active .ms-Button-description,.ms-Button.ms-Button--compound:disabled:active .ms-Button-label,.ms-Button.ms-Button--compound:disabled:focus .ms-Button-description,.ms-Button.ms-Button--compound:disabled:focus .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-Button.ms-Button--command{background-color:transparent;border:none;height:32px;line-height:32px;min-width:0;padding:0 8px;text-align:left;font-size:14px}.ms-Button.ms-Button--command .ms-Button-icon{color:"[theme:neutralSecondary, default: #666666]";display:inline-block;margin-right:4px;position:relative}.ms-Button.ms-Button--command .ms-Button-label{font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif}.ms-Button.ms-Button--command:focus .ms-Button-icon,.ms-Button.ms-Button--command:hover .ms-Button-icon{color:"[theme:neutralDark, default: #212121]"}.ms-Button.ms-Button--command:focus .ms-Button-label,.ms-Button.ms-Button--command:hover .ms-Button-label{color:"[theme:black, default: #000000]"}.ms-Button.ms-Button--command:active .ms-Button-icon,.ms-Button.ms-Button--command:active .ms-Button-label{color:"[theme:themePrimary, default: #0078d7]"}.ms-Button.ms-Button--command.is-disabled .ms-Button-icon,.ms-Button.ms-Button--command:disabled .ms-Button-icon{color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Button.ms-Button--command.is-disabled .ms-Button-label,.ms-Button.ms-Button--command:disabled .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-Button.ms-Button--command+.ms-Button.ms-Button--command{margin-left:14px}.ms-Button--icon{background-color:transparent;color:"[theme:neutralSecondary, default: #666666]";padding:0;min-width:auto;height:auto;border:0}.ms-Fabric .ms-Button--icon::-moz-focus-inner{border:0}.ms-Fabric .ms-Button--icon{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button--icon:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-Button--icon:active,.ms-Button--icon:hover{background-color:transparent;border-color:transparent;outline-color:transparent;color:"[theme:neutralPrimary, default: #333333]"}.ms-Button--icon:focus{background-color:transparent}.ms-Button--icon .ms-Icon{font-size:16px;padding:8px}.ms-Button--icon .ms-Button-icon{display:inline}.ms-Button--icon.is-disabled,.ms-Button--icon:disabled{color:"[theme:neutralTertiaryAlt, default: #c8c8c8]";background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-Button--icon{color:"[theme:yellowLight, default: #fff100]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button--icon{color:"[theme:blueMid, default: #00188f]"}}.ms-Button.ms-Button--primary.disabled{background-color:"[theme:neutralLighter, default: #f4f4f4]";border-color:"[theme:neutralLighter, default: #f4f4f4]";pointer-events:none;cursor:default}.ms-Button.ms-Button--primary.disabled .ms-Button-label{color:"[theme:neutralTertiary, default: #a6a6a6]"}html[dir=ltr] .ms-Button+.ms-Button{margin-left:6px}html[dir=rtl] .ms-Button+.ms-Button{margin-right:6px}html[dir=ltr] .ms-Button.ms-Button--command{text-align:left}html[dir=rtl] .ms-Button.ms-Button--command{text-align:right}html[dir=ltr] .ms-Button.ms-Button--command .ms-Button-icon{margin-right:4px}html[dir=rtl] .ms-Button.ms-Button--command .ms-Button-icon{margin-left:4px}html[dir=ltr] .ms-Button.ms-Button--command+.ms-Button.ms-Button--command{margin-left:14px}html[dir=rtl] .ms-Button.ms-Button--command+.ms-Button.ms-Button--command{margin-right:14px}html[dir=ltr] .ms-Button.ms-Button--compound .ms-Button-label{text-align:left}html[dir=rtl] .ms-Button.ms-Button--compound .ms-Button-label{text-align:right}html[dir=ltr] .ms-Button.ms-Button--compound .ms-Button-description{text-align:left}html[dir=rtl] .ms-Button.ms-Button--compound .ms-Button-description{text-align:right}a.ms-Button{text-decoration:none;text-align:center}');
	
	//# sourceMappingURL=Button.scss.js.map


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	(function (ElementType) {
	    /** <button> element */
	    ElementType[ElementType["button"] = 0] = "button";
	    /** <a> element */
	    ElementType[ElementType["anchor"] = 1] = "anchor";
	})(exports.ElementType || (exports.ElementType = {}));
	var ElementType = exports.ElementType;
	(function (ButtonType) {
	    ButtonType[ButtonType["normal"] = 0] = "normal";
	    ButtonType[ButtonType["primary"] = 1] = "primary";
	    ButtonType[ButtonType["hero"] = 2] = "hero";
	    ButtonType[ButtonType["compound"] = 3] = "compound";
	    ButtonType[ButtonType["command"] = 4] = "command";
	    ButtonType[ButtonType["icon"] = 5] = "icon";
	})(exports.ButtonType || (exports.ButtonType = {}));
	var ButtonType = exports.ButtonType;
	
	//# sourceMappingURL=Button.Props.js.map


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(50));
	
	//# sourceMappingURL=Checkbox.js.map


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(51));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(52);
	var _instance = 0;
	var Checkbox = (function (_super) {
	    __extends(Checkbox, _super);
	    function Checkbox(props) {
	        _super.call(this, props);
	        this.state = {
	            isChecked: props.isChecked
	        };
	        this._id = "checkbox-" + _instance++;
	        this._handleInputChange = this._handleInputChange.bind(this);
	    }
	    Checkbox.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.isChecked !== this.props.isChecked) {
	            this.setState({
	                isChecked: newProps.isChecked
	            });
	        }
	    };
	    Checkbox.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, text = _a.text, isEnabled = _a.isEnabled, className = _a.className;
	        var isChecked = this.state.isChecked;
	        return (React.createElement("div", {className: css_1.css('ms-ChoiceField', className)}, React.createElement("input", {ref: function (c) { return _this._checkBox = c; }, id: this._id, name: this._id, className: 'ms-ChoiceField-input', type: 'checkbox', role: 'checkbox', checked: isChecked, disabled: !isEnabled, onChange: this._handleInputChange, "aria-checked": isChecked}), React.createElement("label", {htmlFor: this._id, className: 'ms-ChoiceField-field'}, text && React.createElement("span", {className: 'ms-Label'}, text))));
	    };
	    Checkbox.prototype.focus = function () {
	        if (this._checkBox) {
	            this._checkBox.focus();
	        }
	    };
	    Checkbox.prototype._handleInputChange = function (evt) {
	        var onChanged = this.props.onChanged;
	        var isChecked = evt.target.checked;
	        this.setState({
	            isChecked: isChecked
	        });
	        if (onChanged) {
	            onChanged(isChecked);
	        }
	    };
	    Checkbox.defaultProps = {
	        isSelected: false,
	        isEnabled: true
	    };
	    return Checkbox;
	}(React.Component));
	exports.Checkbox = Checkbox;
	
	//# sourceMappingURL=Checkbox.js.map


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-ChoiceField{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;min-height:36px;position:relative}.ms-ChoiceField .ms-Label{font-size:14px;padding:0 0 0 26px}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field{pointer-events:none;cursor:default}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:before{background-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]";color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:after{border-color:"[theme:neutralLight, default: #eaeaea]"}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field .ms-Label{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:before{background-color:#0f0;color:#0f0}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:after{border-color:#0f0}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:before{background-color:#600000;color:#600000}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:after{border-color:#600000}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field .ms-Label{color:#600000}}.ms-ChoiceField-input{position:absolute;opacity:0;top:8px}.ms-ChoiceField-input:focus:not(:disabled)+.ms-ChoiceField-field:after{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-ChoiceField-field{display:inline-block;cursor:pointer;margin-top:8px;position:relative}.ms-ChoiceField-field:after{content:\'\';display:inline-block;border:1px "[theme:neutralTertiaryAlt, default: #c8c8c8]" solid;width:19px;height:19px;cursor:pointer;position:relative;font-weight:400;left:-1px;top:-1px;border-radius:50%;position:absolute}.ms-ChoiceField-field:hover:after{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-ChoiceField-field:hover .ms-Label{color:"[theme:black, default: #000000]"}.ms-ChoiceField-input:checked+.ms-ChoiceField-field:before{background-color:"[theme:neutralSecondary, default: #666666]";border-color:"[theme:neutralSecondary, default: #666666]";color:"[theme:neutralSecondary, default: #666666]";border-radius:50%;content:\'\\00a0\';display:inline-block;position:absolute;top:4px;bottom:0;left:4px;width:11px;height:11px;box-sizing:border-box}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-input:checked+.ms-ChoiceField-field:before{border-color:"[theme:white, default: #ffffff]";background-color:"[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-input:checked+.ms-ChoiceField-field:before{border-color:"[theme:black, default: #000000]";background-color:"[theme:black, default: #000000]"}}.ms-ChoiceField-input:checked+.ms-ChoiceField-field:hover:before{background-color:"[theme:neutralDark, default: #212121]";color:"[theme:neutralDark, default: #212121]"}.ms-ChoiceField-input[type=checkbox]+.ms-ChoiceField-field:after{border-radius:0}.ms-ChoiceField-input[type=checkbox]:checked+.ms-ChoiceField-field:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:Office365Icons;font-style:normal;font-weight:400;line-height:1;speak:none;content:\'\\e041\';background-color:transparent;border-radius:0;font-size:13px;top:3px;left:3px}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-input[type=checkbox]:checked+.ms-ChoiceField-field:before{color:"[theme:white, default: #ffffff]";border-color:transparent;background-color:transparent}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-input[type=checkbox]:checked+.ms-ChoiceField-field:before{color:"[theme:black, default: #000000]";border-color:transparent;background-color:transparent}}.ms-ChoiceFieldGroup{margin-bottom:4px}.ms-ChoiceField{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}');
	
	//# sourceMappingURL=Checkbox.scss.js.map


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(54));
	
	//# sourceMappingURL=ChoiceGroup.js.map


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(55));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(56);
	var css_1 = __webpack_require__(17);
	__webpack_require__(61);
	var _instance = 0;
	var ChoiceGroup = (function (_super) {
	    __extends(ChoiceGroup, _super);
	    function ChoiceGroup(props) {
	        _super.call(this);
	        this.state = {
	            keyChecked: this._getKeyChecked(props.options)
	        };
	        this._id = "ChoiceGroup-" + _instance++;
	        this._descriptionId = "ChoiceGroupDescription-" + _instance++;
	    }
	    ChoiceGroup.prototype.componentWillReceiveProps = function (newProps) {
	        var newKeyChecked = this._getKeyChecked(newProps.options);
	        var oldKeyCheched = this._getKeyChecked(this.props.options);
	        if (newKeyChecked !== oldKeyCheched) {
	            this.setState({
	                keyChecked: newKeyChecked
	            });
	        }
	    };
	    ChoiceGroup.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, label = _a.label, options = _a.options, className = _a.className, required = _a.required;
	        var keyChecked = this.state.keyChecked;
	        var titleClassName = css_1.css('ms-Label', className, {
	            'is-required': required
	        });
	        return (
	        // Need to assign role application on containing div because JAWS doesnt call OnKeyDown without this role
	        React.createElement("div", {role: 'application', className: className}, React.createElement("div", {className: 'ms-ChoiceFieldGroup', role: 'radiogroup', "aria-labelledby": this.props.label ? this._id + '-label' : ''}, React.createElement("div", {className: 'ms-ChoiceFieldGroup-title'}, this.props.label ? React.createElement("label", {className: titleClassName, id: this._id + '-label'}, label) : null), options.map(function (option) { return (React.createElement("div", {key: option.key, className: css_1.css('ms-ChoiceField', { 'ms-ChoiceField--image': !!option.imageSrc })}, React.createElement("input", {ref: function (c) { return _this._inputElement = c; }, id: _this._id + "-" + option.key, className: 'ms-ChoiceField-input', type: 'radio', name: _this._id, disabled: option.isDisabled, checked: option.key === keyChecked, "aria-checked": option.key === keyChecked, onChange: _this._handleInputChange.bind(_this, option), "aria-describedby": _this._descriptionId + "-" + option.key}), _this._renderField(option))); }))));
	    };
	    ChoiceGroup.prototype.focus = function () {
	        if (this._inputElement) {
	            this._inputElement.focus();
	        }
	    };
	    ChoiceGroup.prototype._renderField = function (option) {
	        var keyChecked = this.state.keyChecked;
	        return (React.createElement("label", {htmlFor: this._id + '-' + option.key, className: option.imageSrc ? 'ms-ChoiceField-field--image' : 'ms-ChoiceField-field'}, option.imageSrc
	            ? React.createElement("div", {className: 'ms-ChoiceField-innerField'}, React.createElement("div", {className: css_1.css('ms-ChoiceField-imageWrapper', { 'is-hidden': option.key === keyChecked })}, React.createElement(Image_1.Image, {src: option.imageSrc, width: option.imageSize.width, height: option.imageSize.height})), React.createElement("div", {className: css_1.css('ms-ChoiceField-imageWrapper', { 'is-hidden': option.key !== keyChecked })}, React.createElement(Image_1.Image, {src: option.selectedImageSrc, width: option.imageSize.width, height: option.imageSize.height})))
	            : null, option.imageSrc
	            ? React.createElement("div", {className: 'ms-ChoiceField-labelWrapper'}, React.createElement("i", {className: 'ms-ChoiceField-icon ms-Icon ms-Icon--check'}), React.createElement("span", {id: this._descriptionId + "-" + option.key, className: 'ms-Label'}, option.text))
	            : React.createElement("span", {id: this._descriptionId + "-" + option.key, className: 'ms-Label'}, option.text)));
	    };
	    ChoiceGroup.prototype._handleInputChange = function (option, evt) {
	        var onChanged = this.props.onChanged;
	        this.setState({
	            keyChecked: option.key
	        });
	        if (onChanged) {
	            onChanged(option);
	        }
	    };
	    /**
	     * If all the isChecked property of options are falsy values, return undefined;
	     * Else return the key of the first option with the truthy isChecked property.
	     */
	    ChoiceGroup.prototype._getKeyChecked = function (options) {
	        var optionsChecked = options.filter(function (option) {
	            return option.isChecked;
	        });
	        if (optionsChecked.length === 0) {
	            return undefined;
	        }
	        else {
	            return optionsChecked[0].key;
	        }
	    };
	    ChoiceGroup.defaultProps = {
	        options: []
	    };
	    return ChoiceGroup;
	}(React.Component));
	exports.ChoiceGroup = ChoiceGroup;
	
	//# sourceMappingURL=ChoiceGroup.js.map


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(57));
	
	//# sourceMappingURL=Image.js.map


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(58));
	__export(__webpack_require__(60));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var EventGroup_1 = __webpack_require__(14);
	__webpack_require__(59);
	var Image_Props_1 = __webpack_require__(60);
	(function (CoverStyle) {
	    CoverStyle[CoverStyle["landscape"] = 0] = "landscape";
	    CoverStyle[CoverStyle["portrait"] = 1] = "portrait";
	})(exports.CoverStyle || (exports.CoverStyle = {}));
	var CoverStyle = exports.CoverStyle;
	exports.CoverStyleMap = (_a = {},
	    _a[CoverStyle.landscape] = 'ms-Image-image--landscape',
	    _a[CoverStyle.portrait] = 'ms-Image-image--portrait',
	    _a
	);
	exports.ImageFitMap = (_b = {},
	    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center',
	    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain',
	    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover',
	    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none',
	    _b
	);
	(function (ImageLoadState) {
	    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
	    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
	    ImageLoadState[ImageLoadState["error"] = 2] = "error";
	    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
	})(exports.ImageLoadState || (exports.ImageLoadState = {}));
	var ImageLoadState = exports.ImageLoadState;
	var Image = (function (_super) {
	    __extends(Image, _super);
	    function Image(props) {
	        _super.call(this, props);
	        this.state = {
	            loadState: ImageLoadState.notLoaded
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    Image.prototype.componentDidMount = function () {
	        var image = this.refs.image;
	        if (!this._evaluateImage()) {
	            this._events.on(image, 'load', this._evaluateImage);
	            this._events.on(image, 'error', this._setError);
	        }
	    };
	    Image.prototype.componentWillReceiveProps = function (nextProps) {
	        if (this.state.loadState === ImageLoadState.loaded) {
	            var nextHeight = nextProps.nextHeight, nextWidth = nextProps.nextWidth;
	            var _a = this.props, height = _a.height, width = _a.width;
	            if (height !== nextHeight || width !== nextWidth) {
	                this._computeCoverStyle();
	            }
	        }
	    };
	    Image.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Image.prototype.render = function () {
	        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, className = _a.className, imageFit = _a.imageFit, errorSrc = _a.errorSrc, role = _a.role;
	        var loadState = this.state.loadState;
	        var coverStyle = this._coverStyle;
	        var loaded = loadState === ImageLoadState.loaded || loadState === ImageLoadState.errorLoaded;
	        var srcToDisplay = (loadState === ImageLoadState.error || loadState === ImageLoadState.errorLoaded) ? errorSrc : src;
	        // If image dimensions aren't specified, the natural size of the image is used.
	        return (React.createElement("div", {className: css_1.css('ms-Image', className), style: { width: width, height: height }}, React.createElement("img", {className: css_1.css('ms-Image-image', (coverStyle !== undefined) && exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], {
	            'is-fadeIn': shouldFadeIn,
	            'is-notLoaded': !loaded,
	            'is-loaded': loaded,
	            'ms-u-fadeIn400': loaded && shouldFadeIn,
	            'is-error': loadState === ImageLoadState.error,
	            'ms-Image-image--scaleWidth': (imageFit === undefined && !!width && !height),
	            'ms-Image-image--scaleHeight': (imageFit === undefined && !width && !!height),
	            'ms-Image-image--scaleWidthHeight': (imageFit === undefined && !!width && !!height),
	        }), ref: 'image', src: srcToDisplay, alt: alt, role: role})));
	    };
	    Image.prototype._evaluateImage = function () {
	        var src = this.props.src;
	        var loadState = this.state.loadState;
	        var image = this.refs.image;
	        var isLoaded = (src && image.naturalWidth > 0 && image.naturalHeight > 0);
	        this._computeCoverStyle();
	        if (isLoaded && loadState !== ImageLoadState.loaded && loadState !== ImageLoadState.errorLoaded) {
	            this._events.off();
	            this.setState({
	                loadState: loadState === ImageLoadState.error ? ImageLoadState.errorLoaded : ImageLoadState.loaded
	            });
	        }
	        return isLoaded;
	    };
	    Image.prototype._computeCoverStyle = function () {
	        var imageFit = this.props.imageFit;
	        if (imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) {
	            var image = this.refs.image;
	            if (image) {
	                var _a = this.props, width = _a.width, height = _a.height;
	                var desiredRatio = width / height;
	                var naturalRatio = image.naturalWidth / image.naturalHeight;
	                if (naturalRatio > desiredRatio) {
	                    this._coverStyle = CoverStyle.landscape;
	                }
	                else {
	                    this._coverStyle = CoverStyle.portrait;
	                }
	            }
	        }
	    };
	    Image.prototype._setError = function () {
	        if (this.state.loadState !== ImageLoadState.error && this.state.loadState !== ImageLoadState.errorLoaded) {
	            this.setState({
	                loadState: ImageLoadState.error
	            });
	        }
	    };
	    Image.defaultProps = {
	        shouldFadeIn: true
	    };
	    return Image;
	}(React.Component));
	exports.Image = Image;
	var _a, _b;
	
	//# sourceMappingURL=Image.js.map


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Image{overflow:hidden}.ms-Image-image{display:block;opacity:0}.ms-Image-image.is-loaded{opacity:1}.ms-Image-image--center,.ms-Image-image--contain,.ms-Image-image--cover{position:relative;top:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{left:50%}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{right:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.ms-Image-image--contain.ms-Image-image--landscape{width:100%;height:auto}.ms-Image-image--contain.ms-Image-image--portrait{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--landscape{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--portrait{width:100%;height:auto}.ms-Image-image--none{height:auto;width:auto}.ms-Image-image--scaleWidthHeight{height:100%;width:100%}.ms-Image-image--scaleWidth{height:auto;width:100%}.ms-Image-image--scaleHeight{height:100%;width:auto}');
	
	//# sourceMappingURL=Image.scss.js.map


/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * The possible methods that can be used to fit the image.
	 */
	(function (ImageFit) {
	    /**
	     * The image is not scaled. The image is centered and cropped within the content box.
	     */
	    ImageFit[ImageFit["center"] = 0] = "center";
	    /**
	     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
	     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
	     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
	     */
	    ImageFit[ImageFit["contain"] = 1] = "contain";
	    /**
	     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
	     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
	     */
	    ImageFit[ImageFit["cover"] = 2] = "cover";
	    /**
	     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
	     * frame will have empty space.
	     */
	    ImageFit[ImageFit["none"] = 3] = "none";
	})(exports.ImageFit || (exports.ImageFit = {}));
	var ImageFit = exports.ImageFit;
	
	//# sourceMappingURL=Image.Props.js.map


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-ChoiceField{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;min-height:36px;position:relative}.ms-ChoiceField .ms-Label{font-size:14px;padding:0 0 0 26px}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field{pointer-events:none;cursor:default}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:before{background-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]";color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:after{border-color:"[theme:neutralLight, default: #eaeaea]"}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field .ms-Label{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:before{background-color:#0f0;color:#0f0}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:after{border-color:#0f0}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:before{background-color:#600000;color:#600000}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field:after{border-color:#600000}.ms-ChoiceField-input:disabled+.ms-ChoiceField-field .ms-Label{color:#600000}}.ms-ChoiceField-input{position:absolute;opacity:0;top:8px}.ms-ChoiceField-input:focus:not(:disabled)+.ms-ChoiceField-field:after{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-ChoiceField-field{display:inline-block;cursor:pointer;margin-top:8px;position:relative}.ms-ChoiceField-field:after{content:\'\';display:inline-block;border:1px "[theme:neutralTertiaryAlt, default: #c8c8c8]" solid;width:19px;height:19px;cursor:pointer;position:relative;font-weight:400;left:-1px;top:-1px;border-radius:50%;position:absolute}.ms-ChoiceField-field:hover:after{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-ChoiceField-field:hover .ms-Label{color:"[theme:black, default: #000000]"}.ms-ChoiceField-input:checked+.ms-ChoiceField-field:before{background-color:"[theme:neutralSecondary, default: #666666]";border-color:"[theme:neutralSecondary, default: #666666]";color:"[theme:neutralSecondary, default: #666666]";border-radius:50%;content:\'\\00a0\';display:inline-block;position:absolute;top:4px;bottom:0;left:4px;width:11px;height:11px;box-sizing:border-box}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-input:checked+.ms-ChoiceField-field:before{border-color:"[theme:white, default: #ffffff]";background-color:"[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-input:checked+.ms-ChoiceField-field:before{border-color:"[theme:black, default: #000000]";background-color:"[theme:black, default: #000000]"}}.ms-ChoiceField-input:checked+.ms-ChoiceField-field:hover:before{background-color:"[theme:neutralDark, default: #212121]";color:"[theme:neutralDark, default: #212121]"}.ms-ChoiceField-input[type=checkbox]+.ms-ChoiceField-field:after{border-radius:0}.ms-ChoiceField-input[type=checkbox]:checked+.ms-ChoiceField-field:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:Office365Icons;font-style:normal;font-weight:400;line-height:1;speak:none;content:\'\\e041\';background-color:transparent;border-radius:0;font-size:13px;top:3px;left:3px}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-input[type=checkbox]:checked+.ms-ChoiceField-field:before{color:"[theme:white, default: #ffffff]";border-color:transparent;background-color:transparent}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-input[type=checkbox]:checked+.ms-ChoiceField-field:before{color:"[theme:black, default: #000000]";border-color:transparent;background-color:transparent}}.ms-ChoiceFieldGroup{margin-bottom:4px}.ms-ChoiceField--image{display:inline-block;font-size:0;background-color:"[theme:neutralLighter, default: #f4f4f4]"}html[dir=ltr] .ms-ChoiceField--image{margin-right:6px}html[dir=rtl] .ms-ChoiceField--image{margin-left:6px}.ms-ChoiceField--image .ms-ChoiceField-field--image{display:inline-block;box-sizing:border-box;min-width:164px;cursor:pointer;padding:20px 20px 12px 20px;text-align:center;-webkit-transition:all .2s ease;transition:all .2s ease}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField{position:relative}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper{-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper.is-hidden{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;opacity:0}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper .ms-Image{display:inline-block}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper{display:inline-block;position:relative;margin:10px 0 0 0;padding:0 24px}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-ChoiceField-icon{display:none;position:absolute;left:0;line-height:12px;font-size:17px;color:"[theme:themeDark, default: #005a9e]"}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-Label{display:inline-block;padding:0;line-height:12px;font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif;color:"[theme:neutralPrimary, default: #333333]"}.ms-ChoiceField--image .ms-ChoiceField-input:checked+.ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-ChoiceField-icon{display:inline-block}.ms-ChoiceField--image .ms-ChoiceField-input:checked+.ms-ChoiceField-field--image{background-color:"[theme:themeLighter, default: #deecf9]"}.is-focusVisible .ms-ChoiceField-input:focus+.ms-ChoiceField-field--image:before{position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border:1px solid "[theme:neutralPrimary, default: #333333]";content:\'\'}');
	
	//# sourceMappingURL=ChoiceGroup.scss.js.map


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(63));
	
	//# sourceMappingURL=ColorPicker.js.map


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(64));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TextField_1 = __webpack_require__(65);
	var ColorRectangle_1 = __webpack_require__(73);
	var ColorSlider_1 = __webpack_require__(83);
	var colors_1 = __webpack_require__(74);
	__webpack_require__(84);
	var ColorPicker = (function (_super) {
	    __extends(ColorPicker, _super);
	    function ColorPicker(props) {
	        _super.call(this, props);
	        this._onPickerClick = this._onPickerClick.bind(this);
	        this._onSVChanged = this._onSVChanged.bind(this);
	        this._onHChanged = this._onHChanged.bind(this);
	        this._onAChanged = this._onAChanged.bind(this);
	        this.state = {
	            color: colors_1.getColorFromString(props.color)
	        };
	    }
	    ColorPicker.prototype.render = function () {
	        var color = this.state.color;
	        return (React.createElement("div", {className: 'ms-ColorPicker'}, React.createElement("div", {className: 'ms-ColorPicker-panel'}, React.createElement(ColorRectangle_1.ColorRectangle, {color: color, onSVChanged: this._onSVChanged}), React.createElement(ColorSlider_1.ColorSlider, {className: 'is-hue', minValue: 0, maxValue: colors_1.MAX_COLOR_HUE, initialValue: color.h, onChanged: this._onHChanged}), React.createElement(ColorSlider_1.ColorSlider, {className: 'is-alpha', overlayStyle: { background: "linear-gradient(to right, transparent 0, " + color.str + " 100%)" }, minValue: 0, maxValue: 100, initialValue: color.a, onChanged: this._onAChanged}), React.createElement("table", {className: 'ms-ColorPicker-table', cellPadding: '0', cellSpacing: '0'}, React.createElement("thead", null, React.createElement("tr", {className: 'ms-font-s'}, React.createElement("td", null, "Hex"), React.createElement("td", null, "Red"), React.createElement("td", null, "Green"), React.createElement("td", null, "Blue"), React.createElement("td", null, "Alpha"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.hex})), React.createElement("td", {style: { width: '18%' }}, React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.r})), React.createElement("td", {style: { width: '18%' }}, React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.g})), React.createElement("td", {style: { width: '18%' }}, React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.b})), React.createElement("td", {style: { width: '18%' }}, React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.a}))))))));
	    };
	    ColorPicker.prototype._onPickerClick = function () {
	        this.setState({
	            isOpen: !this.state.isOpen
	        });
	    };
	    ColorPicker.prototype._onSVChanged = function (s, v) {
	        this._updateColor(colors_1.updateSV(this.state.color, s, v));
	    };
	    ColorPicker.prototype._onHChanged = function (h) {
	        this._updateColor(colors_1.updateH(this.state.color, h));
	    };
	    ColorPicker.prototype._onAChanged = function (a) {
	        this._updateColor(colors_1.updateA(this.state.color, a));
	    };
	    ColorPicker.prototype._updateColor = function (newColor) {
	        var onColorChanged = this.props.onColorChanged;
	        if (newColor.str !== this.state.color.str) {
	            this.setState({
	                color: newColor
	            });
	            if (onColorChanged) {
	                onColorChanged(newColor.str);
	            }
	        }
	    };
	    return ColorPicker;
	}(React.Component));
	exports.ColorPicker = ColorPicker;
	
	//# sourceMappingURL=ColorPicker.js.map


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(66));
	
	//# sourceMappingURL=TextField.js.map


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(67));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Label_1 = __webpack_require__(68);
	var css_1 = __webpack_require__(17);
	var Async_1 = __webpack_require__(23);
	__webpack_require__(72);
	var _instance = 0;
	var TextField = (function (_super) {
	    __extends(TextField, _super);
	    function TextField(props) {
	        _super.call(this, props);
	        this._id = "TextField-" + _instance++;
	        this._descriptionId = "TextFieldDescription-" + _instance++;
	        this._async = new Async_1.Async(this);
	        this.state = {
	            value: props.value || props.defaultValue,
	            isFocused: false,
	            errorMessage: ''
	        };
	        this._onInputChange = this._onInputChange.bind(this);
	        this._onFocus = this._onFocus.bind(this);
	        this._onBlur = this._onBlur.bind(this);
	        this._delayedValidate = this._async.debounce(this._validate, this.props.deferredValidationTime);
	        this._lastValidation = 0;
	        this._latestValidateValue = '';
	        this._willMountTriggerValidation = false;
	    }
	    Object.defineProperty(TextField.prototype, "value", {
	        /**
	         * Gets the current value of the text field.
	         */
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype.componentWillMount = function () {
	        this._willMountTriggerValidation = true;
	        this._validate(this.state.value);
	    };
	    TextField.prototype.componentDidMount = function () {
	        this._isMounted = true;
	    };
	    TextField.prototype.componentWillReceiveProps = function (newProps) {
	        var onBeforeChange = this.props.onBeforeChange;
	        if (newProps.value !== undefined && newProps.value !== this.state.value) {
	            if (onBeforeChange) {
	                onBeforeChange(newProps.value);
	            }
	            this.setState({
	                value: newProps.value,
	                errorMessage: ''
	            });
	            this._delayedValidate(newProps.value);
	        }
	    };
	    TextField.prototype.componentWillUnmount = function () {
	        this._async.dispose();
	        this._isMounted = false;
	    };
	    TextField.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, required = _a.required, multiline = _a.multiline, underlined = _a.underlined, label = _a.label, description = _a.description, iconClass = _a.iconClass, className = _a.className;
	        var isFocused = this.state.isFocused;
	        var errorMessage = this._errorMessage;
	        var textFieldClassName = css_1.css('ms-TextField', className, {
	            'is-required': required,
	            'is-disabled': disabled,
	            'is-active': isFocused,
	            'ms-TextField--multiline': multiline,
	            'ms-TextField--underlined': underlined
	        });
	        return (React.createElement("div", {className: textFieldClassName}, label && React.createElement(Label_1.Label, {htmlFor: this._id}, label), iconClass && React.createElement("i", {className: iconClass}), multiline ? this._renderTextArea() : this._renderInput(), errorMessage && React.createElement("div", {"aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message'}, errorMessage), (description || errorMessage) &&
	            React.createElement("span", {id: this._descriptionId}, description && React.createElement("span", {className: 'ms-TextField-description'}, description), errorMessage && React.createElement("p", {className: 'ms-TextField-errorMessage ms-u-slideDownIn20'}, errorMessage))));
	    };
	    /**
	     * Sets focus on the text field
	     */
	    TextField.prototype.focus = function () {
	        if (this._field) {
	            this._field.focus();
	        }
	    };
	    /**
	     * Selects the text field
	     */
	    TextField.prototype.select = function () {
	        if (this._field) {
	            this._field.select();
	        }
	    };
	    /**
	     * Sets the selection start of the text field to a specified value
	     */
	    TextField.prototype.setSelectionStart = function (value) {
	        if (this._field) {
	            this._field.selectionStart = value;
	        }
	    };
	    /**
	     * Sets the selection end of the text field to a specified value
	     */
	    TextField.prototype.setSelectionEnd = function (value) {
	        if (this._field) {
	            this._field.selectionEnd = value;
	        }
	    };
	    TextField.prototype._onFocus = function (ev) {
	        if (this.props.onFocus) {
	            this.props.onFocus(ev);
	        }
	        this.setState({ isFocused: true });
	    };
	    TextField.prototype._onBlur = function (ev) {
	        if (this.props.onBlur) {
	            this.props.onBlur(ev);
	        }
	        this.setState({ isFocused: false });
	    };
	    Object.defineProperty(TextField.prototype, "_fieldClassName", {
	        get: function () {
	            var errorMessage = this._errorMessage;
	            var textFieldClassName;
	            if (this.props.multiline && !this.props.resizable) {
	                textFieldClassName = 'ms-TextField-field ms-TextField-field--unresizable';
	            }
	            else {
	                textFieldClassName = 'ms-TextField-field';
	            }
	            return css_1.css(textFieldClassName, {
	                'ms-TextField-invalid': !!errorMessage
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "_errorMessage", {
	        get: function () {
	            var errorMessage = this.state.errorMessage;
	            if (!errorMessage) {
	                errorMessage = this.props.errorMessage;
	            }
	            return errorMessage;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype._renderTextArea = function () {
	        var _this = this;
	        return (React.createElement("textarea", React.__spread({}, this.props, {id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, "aria-label": this.props.ariaLabel, "aria-describedby": this._descriptionId, "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur})));
	    };
	    TextField.prototype._renderInput = function () {
	        var _this = this;
	        return (React.createElement("input", React.__spread({}, this.props, {id: this._id, type: 'text', ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, "aria-label": this.props.ariaLabel, "aria-describedby": this._descriptionId, "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur})));
	    };
	    TextField.prototype._onInputChange = function (event) {
	        var element = event.target;
	        var value = element.value;
	        this.setState({
	            value: value,
	            errorMessage: ''
	        });
	        this._willMountTriggerValidation = false;
	        this._delayedValidate(value);
	        var onBeforeChange = this.props.onBeforeChange;
	        onBeforeChange(value);
	    };
	    TextField.prototype._validate = function (value) {
	        var _this = this;
	        // In case of _validate called multi-times during executing validate logic with promise return.
	        if (this._latestValidateValue === value) {
	            return;
	        }
	        this._latestValidateValue = value;
	        var onGetErrorMessage = this.props.onGetErrorMessage;
	        var result = onGetErrorMessage(value || '');
	        if (result !== undefined) {
	            if (typeof result === 'string') {
	                this.setState({
	                    errorMessage: result
	                });
	                this._notifyAfterValidate(value, result);
	            }
	            else {
	                var currentValidation_1 = ++this._lastValidation;
	                result.then(function (errorMessage) {
	                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
	                        _this.setState({ errorMessage: errorMessage });
	                    }
	                    _this._notifyAfterValidate(value, errorMessage);
	                });
	            }
	        }
	        else {
	            this._notifyAfterValidate(value, '');
	        }
	    };
	    TextField.prototype._notifyAfterValidate = function (value, errorMessage) {
	        if (!this._willMountTriggerValidation && value === this.state.value) {
	            var onNotifyValidationResult = this.props.onNotifyValidationResult;
	            onNotifyValidationResult(errorMessage, value);
	            if (!errorMessage) {
	                var onChanged = this.props.onChanged;
	                onChanged(value);
	            }
	        }
	        else {
	            this._willMountTriggerValidation = false;
	        }
	    };
	    TextField.defaultProps = {
	        multiline: false,
	        resizable: true,
	        underlined: false,
	        onChanged: function () { },
	        onBeforeChange: function () { },
	        onNotifyValidationResult: function () { },
	        onGetErrorMessage: function () { return undefined; },
	        deferredValidationTime: 200,
	        errorMessage: ''
	    };
	    return TextField;
	}(React.Component));
	exports.TextField = TextField;
	
	//# sourceMappingURL=TextField.js.map


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(69));
	
	//# sourceMappingURL=Label.js.map


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(70));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(71);
	var Label = (function (_super) {
	    __extends(Label, _super);
	    function Label() {
	        _super.apply(this, arguments);
	    }
	    Label.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, required = _a.required, children = _a.children, className = _a.className;
	        return (React.createElement("label", React.__spread({}, this.props, {className: css_1.css('ms-Label', className, {
	            'is-disabled': disabled,
	            'is-required': required
	        })}), children));
	    };
	    return Label;
	}(React.Component));
	exports.Label = Label;
	
	//# sourceMappingURL=Label.js.map


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Label{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required:after{content:\' *\';color:"[theme:error, default: #a80000]"}.ms-Label.is-disabled{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-Label.is-disabled{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Label.is-disabled{color:#600000}}.is-disabled .ms-Label{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.is-disabled .ms-Label{color:#600000}}');
	
	//# sourceMappingURL=Label.scss.js.map


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Label{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required:after{content:\' *\';color:"[theme:error, default: #a80000]"}.ms-Label.is-disabled{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-Label.is-disabled{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Label.is-disabled{color:#600000}}.is-disabled .ms-Label{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.is-disabled .ms-Label{color:#600000}}.ms-TextField{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:8px}.ms-TextField.is-disabled .ms-TextField-field{background-color:"[theme:neutralLighter, default: #f4f4f4]";border-color:"[theme:neutralLighter, default: #f4f4f4]";pointer-events:none;cursor:default}.ms-TextField.is-disabled:-moz-placeholder,.ms-TextField.is-disabled:-ms-input-placeholder,.ms-TextField.is-disabled::-moz-placeholder,.ms-TextField.is-disabled::-webkit-input-placeholder{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-TextField.is-required .ms-Label:after{content:\' *\';color:"[theme:error, default: #a80000]"}.ms-TextField.is-required:-moz-placeholder:after,.ms-TextField.is-required:-ms-input-placeholder:after,.ms-TextField.is-required::-moz-placeholder:after,.ms-TextField.is-required::-webkit-input-placeholder:after{content:\' *\';color:"[theme:error, default: #a80000]"}.ms-TextField.is-active{border-color:"[theme:themePrimary, default: #0078d7]"}.ms-TextField-field{box-sizing:border-box;margin:0;padding:0;box-shadow:none;border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";border-radius:0;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;color:"[theme:neutralPrimary, default: #333333]";height:32px;padding:6px 10px 8px;width:100%;min-width:180px;outline:0}.ms-TextField-field:hover{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-TextField-field:focus{border-color:"[theme:themePrimary, default: #0078d7]"}@media screen and (-ms-high-contrast:active){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#37006E}}.ms-TextField-field:-moz-placeholder,.ms-TextField-field:-ms-input-placeholder,.ms-TextField-field::-moz-placeholder,.ms-TextField-field::-webkit-input-placeholder{color:"[theme:neutralSecondary, default: #666666]"}.ms-TextField-description{color:"[theme:neutralSecondaryAlt, default: #767676]";font-size:11px}.ms-TextField.ms-TextField--placeholder{position:relative}.ms-TextField.ms-TextField--placeholder .ms-Label{position:absolute;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;color:"[theme:neutralSecondary, default: #666666]";padding:7px 0 7px 10px}.ms-TextField.ms-TextField--placeholder.is-disabled{color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label{color:#600000}}.ms-TextField.ms-TextField--underlined{border-bottom:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";display:table;width:100%;min-width:180px}.ms-TextField.ms-TextField--underlined:hover{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined:hover{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined:hover{border-color:#37006E}}.ms-TextField.ms-TextField--underlined:active,.ms-TextField.ms-TextField--underlined:focus{border-color:"[theme:themePrimary, default: #0078d7]"}.ms-TextField.ms-TextField--underlined .ms-Label{font-size:12px;margin-right:8px;display:table-cell;vertical-align:bottom;padding-left:12px;padding-bottom:5px;height:32px;width:1%;white-space:nowrap}.ms-TextField.ms-TextField--underlined .ms-TextField-field{border:0;float:left;display:table-cell;text-align:left;padding-top:8px;padding-bottom:2px}.ms-TextField.ms-TextField--underlined .ms-TextField-field:active,.ms-TextField.ms-TextField--underlined .ms-TextField-field:focus,.ms-TextField.ms-TextField--underlined .ms-TextField-field:hover{outline:0}.ms-TextField.ms-TextField--underlined.is-disabled{border-bottom-color:"[theme:neutralLight, default: #eaeaea]"}.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label{color:#600000}}.ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field{background-color:transparent;color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-TextField.ms-TextField--underlined.is-active{border-color:"[theme:themePrimary, default: #0078d7]"}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined.is-active{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined.is-active{border-color:#37006E}}.ms-TextField.ms-TextField--multiline .ms-TextField-field{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;font-weight:400;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}.ms-TextField-errorMessage{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;font-weight:400;color:"[theme:redDark, default: #a80000]";margin:0}.ms-TextField-invalid,.ms-TextField-invalid:focus,.ms-TextField-invalid:hover{border-color:"[theme:redDark, default: #a80000]"}.ms-u-screenReaderOnly{position:absolute;text-indent:-9999px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:12px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:12px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:0}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:0}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:right}.ms-TextField.ms-TextField--multiline .ms-TextField-field.ms-TextField-field--unresizable{resize:none}.ms-TextField-hidden{display:none}');
	
	//# sourceMappingURL=TextField.scss.js.map


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var colors_1 = __webpack_require__(74);
	var object_1 = __webpack_require__(39);
	var EventGroup_1 = __webpack_require__(14);
	var hsv2hex = __webpack_require__(81);
	var ColorRectangle = (function (_super) {
	    __extends(ColorRectangle, _super);
	    function ColorRectangle(props) {
	        _super.call(this, props);
	        var color = this.props.color;
	        this._events = new EventGroup_1.EventGroup(this);
	        this._onMouseDown = this._onMouseDown.bind(this);
	        this._onMouseMove = this._onMouseMove.bind(this);
	        this._onMouseUp = this._onMouseUp.bind(this);
	        this.state = {
	            isAdjusting: false,
	            origin: null,
	            color: color,
	            fullColorString: colors_1.getFullColorString(color)
	        };
	    }
	    ColorRectangle.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    ColorRectangle.prototype.componentWillReceiveProps = function (newProps) {
	        var color = newProps.color;
	        this.setState({
	            color: color,
	            fullColorString: colors_1.getFullColorString(color)
	        });
	    };
	    ColorRectangle.prototype.render = function () {
	        var minSize = this.props.minSize;
	        var _a = this.state, color = _a.color, fullColorString = _a.fullColorString;
	        return (React.createElement("div", {ref: 'root', className: 'ms-ColorPicker-colorRect', style: { minWidth: minSize, minHeight: minSize, backgroundColor: fullColorString }, onMouseDown: this._onMouseDown}, React.createElement("div", {className: 'ms-ColorPicker-light'}), React.createElement("div", {className: 'ms-ColorPicker-dark'}), React.createElement("div", {className: 'ms-ColorPicker-thumb', style: { left: color.s + '%', top: (colors_1.MAX_COLOR_VALUE - color.v) + '%', backgroundColor: color.str }})));
	    };
	    ColorRectangle.prototype._onMouseDown = function (ev) {
	        this._events.on(window, 'mousemove', this._onMouseMove, true);
	        this._events.on(window, 'mouseup', this._onMouseUp, true);
	        this._onMouseMove(ev);
	    };
	    ColorRectangle.prototype._onMouseMove = function (ev) {
	        var _a = this.props, color = _a.color, onSVChanged = _a.onSVChanged;
	        var rectSize = this.refs.root.getBoundingClientRect();
	        var sPercentage = (ev.clientX - rectSize.left) / rectSize.width;
	        var vPercentage = (ev.clientY - rectSize.top) / rectSize.height;
	        var newColor = object_1.assign({}, color, {
	            s: Math.min(colors_1.MAX_COLOR_SATURATION, Math.max(0, sPercentage * colors_1.MAX_COLOR_SATURATION)),
	            v: Math.min(colors_1.MAX_COLOR_VALUE, Math.max(0, colors_1.MAX_COLOR_VALUE - (vPercentage * colors_1.MAX_COLOR_VALUE))),
	        });
	        newColor.hex = hsv2hex(newColor.h, newColor.s, newColor.v);
	        newColor.str = newColor.a === 100 ? '#' + newColor.hex : "rgba(" + newColor.r + ", " + newColor.g + ", " + newColor.b + ", " + newColor.a / 100 + ")";
	        this.setState({
	            isAdjusting: true,
	            color: newColor
	        });
	        if (onSVChanged) {
	            onSVChanged(newColor.s, newColor.v);
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    ColorRectangle.prototype._onMouseUp = function (ev) {
	        this._events.off();
	        this.setState({
	            isAdjusting: false,
	            origin: null
	        });
	    };
	    ColorRectangle.defaultProps = {
	        minSize: 220
	    };
	    return ColorRectangle;
	}(React.Component));
	exports.ColorRectangle = ColorRectangle;
	
	//# sourceMappingURL=ColorRectangle.js.map


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(39);
	var cssColor = __webpack_require__(75);
	var rgb2hex = __webpack_require__(80);
	var hsv2hex = __webpack_require__(81);
	var rgb2hsv = __webpack_require__(82);
	var hsv2rgb = __webpack_require__(78);
	exports.MAX_COLOR_SATURATION = 100;
	exports.MAX_COLOR_HUE = 359;
	exports.MAX_COLOR_VALUE = 100;
	function getColorFromString(color) {
	    var _a = cssColor(color), a = _a.a, b = _a.b, g = _a.g, r = _a.r;
	    var _b = rgb2hsv(r, g, b), h = _b.h, s = _b.s, v = _b.v;
	    return {
	        a: a,
	        b: b,
	        g: g,
	        h: h,
	        hex: rgb2hex(r, g, b),
	        r: r,
	        s: s,
	        str: color,
	        v: v
	    };
	}
	exports.getColorFromString = getColorFromString;
	function getFullColorString(color) {
	    return "#" + hsv2hex(color.h, exports.MAX_COLOR_SATURATION, exports.MAX_COLOR_VALUE);
	}
	exports.getFullColorString = getFullColorString;
	function updateSV(color, s, v) {
	    var _a = hsv2rgb(color.h, s, v), r = _a.r, g = _a.g, b = _a.b;
	    var hex = rgb2hex(r, g, b);
	    return {
	        a: color.a,
	        b: b,
	        g: g,
	        h: color.h,
	        hex: hex,
	        r: r,
	        s: s,
	        str: (color.a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + color.a / 100 + ")",
	        v: v
	    };
	}
	exports.updateSV = updateSV;
	function updateH(color, h) {
	    var _a = hsv2rgb(h, color.s, color.v), r = _a.r, g = _a.g, b = _a.b;
	    var hex = rgb2hex(r, g, b);
	    return {
	        a: color.a,
	        b: b,
	        g: g,
	        h: h,
	        hex: hex,
	        r: r,
	        s: color.s,
	        str: (color.a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + color.a / 100 + ")",
	        v: color.v
	    };
	}
	exports.updateH = updateH;
	function updateA(color, a) {
	    return object_1.assign({}, color, {
	        a: a,
	        str: (a === 100) ? "#" + color.hex : "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + a / 100 + ")"
	    });
	}
	exports.updateA = updateA;
	
	//# sourceMappingURL=colors.js.map


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// based on component/color-parser
	
	var hsl2rgb = __webpack_require__(76);
	var colors = __webpack_require__(79);
	
	function parse(str) {
	  return named(str)
	    || hex3(str)
	    || hex6(str)
	    || rgb(str)
	    || rgba(str)
	    || hsl(str)
	    || hsla(str);
	}
	
	function named(str) {
	  var c = colors[str.toLowerCase()];
	  if(!c) return;
	  return {
	    r: c[0],
	    g: c[1],
	    b: c[2],
	    a: 100
	  };
	}
	
	function rgb(str) {
	  if (0 == str.indexOf('rgb(')) {
	    str = str.match(/rgb\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */).map(Number);
	    return {
	      r: parts[0],
	      g: parts[1],
	      b: parts[2],
	      a: 100
	    };
	  }
	}
	
	function rgba(str) {
	  if(str.indexOf('rgba(') === 0) {
	    str = str.match(/rgba\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */).map(Number);
	
	    return {
	      r: parts[0],
	      g: parts[1],
	      b: parts[2],
	      a: parts[3] * 100
	    };
	  }
	}
	
	function hex6(str) {
	  if('#' === str[0] && 7 === str.length) {
	    return {
	      r: parseInt(str.slice(1, 3), 16),
	      g: parseInt(str.slice(3, 5), 16),
	      b: parseInt(str.slice(5, 7), 16),
	      a: 100
	    };
	  }
	}
	
	function hex3(str) {
	  if('#' === str[0] && 4 === str.length) {
	    return {
	      r: parseInt(str[1] + str[1], 16),
	      g: parseInt(str[2] + str[2], 16),
	      b: parseInt(str[3] + str[3], 16),
	      a: 100
	    };
	  }
	}
	
	function hsl(str) {
	  if(str.indexOf('hsl(') === 0) {
	    str = str.match(/hsl\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */);
	
	    var h = parseInt(parts[0], 10);
	    var s = parseInt(parts[1], 10);
	    var l = parseInt(parts[2], 10);
	
	    var rgba = hsl2rgb(h, s, l);
	    rgba.a = 100;
	
	    return rgba;
	  }
	}
	
	function hsla(str) {
	  if(str.indexOf('hsla(') === 0) {
	    str = str.match(/hsla\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */);
	
	    var h = parseInt(parts[0], 10);
	    var s = parseInt(parts[1], 10);
	    var l = parseInt(parts[2], 10);
	    var a = parseInt(parts[3] * 100, 10);
	
	    var rgba = hsl2rgb(h, s, l);
	    rgba.a = a;
	
	    return rgba;
	  }
	}
	
	module.exports = parse;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var hsl2hsv = __webpack_require__(77);
	var hsv2rgb = __webpack_require__(78);
	
	module.exports = function(h, s, l) {
	  var hsv = hsl2hsv(h, s, l);
	  return hsv2rgb(hsv.h, hsv.s, hsv.v);
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(h, s, l) {
	  s *= ((l < 50) ? l : (100 - l)) / 100;
	
	  console.log('s', s);
	
	  return {
	    h: h,
	    s: 2 * s / (l+s) * 100,
	    v: l + s
	  };
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
	module.exports = function(h, s, v) {
	  var s = s/100, v = v/100;
	  var rgb = [];
	
	  var c = v * s;
	  var hh = h/60;
	  var x = c * (1 - Math.abs(hh%2-1));
	  var m = v - c;
	
	  switch(parseInt(hh, 10)) {
	    case 0:
	      rgb = [c, x, 0];
	    break;
	
	    case 1:
	      rgb = [x, c, 0];
	    break;
	
	    case 2:
	      rgb = [0, c, x];
	    break;
	
	    case 3:
	      rgb = [0, x, c];
	    break;
	
	    case 4:
	      rgb = [x, 0, c];
	    break;
	
	    case 5:
	      rgb = [c, 0, x];
	    break;
	  }
	
	  return {
	    r: Math.round(255*(rgb[0]+m)),
	    g: Math.round(255*(rgb[1]+m)),
	    b: Math.round(255*(rgb[2]+m))
	  };
	};


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  aliceblue: [240, 248, 255],
	  antiquewhite: [250, 235, 215],
	  aqua: [0, 255, 255],
	  aquamarine: [127, 255, 212],
	  azure: [240, 255, 255],
	  beige: [245, 245, 220],
	  bisque: [255, 228, 196],
	  black: [0, 0, 0],
	  blanchedalmond: [255, 235, 205],
	  blue: [0, 0, 255],
	  blueviolet: [138, 43, 226],
	  brown: [165, 42, 42],
	  burlywood: [222, 184, 135],
	  cadetblue: [95, 158, 160],
	  chartreuse: [127, 255, 0],
	  chocolate: [210, 105, 30],
	  coral: [255, 127, 80],
	  cornflowerblue: [100, 149, 237],
	  cornsilk: [255, 248, 220],
	  crimson: [220, 20, 60],
	  cyan: [0, 255, 255],
	  darkblue: [0, 0, 139],
	  darkcyan: [0, 139, 139],
	  darkgoldenrod: [184, 132, 11],
	  darkgray: [169, 169, 169],
	  darkgreen: [0, 100, 0],
	  darkgrey: [169, 169, 169],
	  darkkhaki: [189, 183, 107],
	  darkmagenta: [139, 0, 139],
	  darkolivegreen: [85, 107, 47],
	  darkorange: [255, 140, 0],
	  darkorchid: [153, 50, 204],
	  darkred: [139, 0, 0],
	  darksalmon: [233, 150, 122],
	  darkseagreen: [143, 188, 143],
	  darkslateblue: [72, 61, 139],
	  darkslategray: [47, 79, 79],
	  darkslategrey: [47, 79, 79],
	  darkturquoise: [0, 206, 209],
	  darkviolet: [148, 0, 211],
	  deeppink: [255, 20, 147],
	  deepskyblue: [0, 191, 255],
	  dimgray: [105, 105, 105],
	  dimgrey: [105, 105, 105],
	  dodgerblue: [30, 144, 255],
	  firebrick: [178, 34, 34],
	  floralwhite: [255, 255, 240],
	  forestgreen: [34, 139, 34],
	  fuchsia: [255, 0, 255],
	  gainsboro: [220, 220, 220],
	  ghostwhite: [248, 248, 255],
	  gold: [255, 215, 0],
	  goldenrod: [218, 165, 32],
	  gray: [128, 128, 128],
	  green: [0, 128, 0],
	  greenyellow: [173, 255, 47],
	  grey: [128, 128, 128],
	  honeydew: [240, 255, 240],
	  hotpink: [255, 105, 180],
	  indianred: [205, 92, 92],
	  indigo: [75, 0, 130],
	  ivory: [255, 255, 240],
	  khaki: [240, 230, 140],
	  lavender: [230, 230, 250],
	  lavenderblush: [255, 240, 245],
	  lawngreen: [124, 252, 0],
	  lemonchiffon: [255, 250, 205],
	  lightblue: [173, 216, 230],
	  lightcoral: [240, 128, 128],
	  lightcyan: [224, 255, 255],
	  lightgoldenrodyellow: [250, 250, 210],
	  lightgray: [211, 211, 211],
	  lightgreen: [144, 238, 144],
	  lightgrey: [211, 211, 211],
	  lightpink: [255, 182, 193],
	  lightsalmon: [255, 160, 122],
	  lightseagreen: [32, 178, 170],
	  lightskyblue: [135, 206, 250],
	  lightslategray: [119, 136, 153],
	  lightslategrey: [119, 136, 153],
	  lightsteelblue: [176, 196, 222],
	  lightyellow: [255, 255, 224],
	  lime: [0, 255, 0],
	  limegreen: [50, 205, 50],
	  linen: [250, 240, 230],
	  magenta: [255, 0, 255],
	  maroon: [128, 0, 0],
	  mediumaquamarine: [102, 205, 170],
	  mediumblue: [0, 0, 205],
	  mediumorchid: [186, 85, 211],
	  mediumpurple: [147, 112, 219],
	  mediumseagreen: [60, 179, 113],
	  mediumslateblue: [123, 104, 238],
	  mediumspringgreen: [0, 250, 154],
	  mediumturquoise: [72, 209, 204],
	  mediumvioletred: [199, 21, 133],
	  midnightblue: [25, 25, 112],
	  mintcream: [245, 255, 250],
	  mistyrose: [255, 228, 225],
	  moccasin: [255, 228, 181],
	  navajowhite: [255, 222, 173],
	  navy: [0, 0, 128],
	  oldlace: [253, 245, 230],
	  olive: [128, 128, 0],
	  olivedrab: [107, 142, 35],
	  orange: [255, 165, 0],
	  orangered: [255, 69, 0],
	  orchid: [218, 112, 214],
	  palegoldenrod: [238, 232, 170],
	  palegreen: [152, 251, 152],
	  paleturquoise: [175, 238, 238],
	  palevioletred: [219, 112, 147],
	  papayawhip: [255, 239, 213],
	  peachpuff: [255, 218, 185],
	  peru: [205, 133, 63],
	  pink: [255, 192, 203],
	  plum: [221, 160, 203],
	  powderblue: [176, 224, 230],
	  purple: [128, 0, 128],
	  rebeccapurple: [102, 51, 153],
	  red: [255, 0, 0],
	  rosybrown: [188, 143, 143],
	  royalblue: [65, 105, 225],
	  saddlebrown: [139, 69, 19],
	  salmon: [250, 128, 114],
	  sandybrown: [244, 164, 96],
	  seagreen: [46, 139, 87],
	  seashell: [255, 245, 238],
	  sienna: [160, 82, 45],
	  silver: [192, 192, 192],
	  skyblue: [135, 206, 235],
	  slateblue: [106, 90, 205],
	  slategray: [119, 128, 144],
	  slategrey: [119, 128, 144],
	  snow: [255, 255, 250],
	  springgreen: [0, 255, 127],
	  steelblue: [70, 130, 180],
	  tan: [210, 180, 140],
	  teal: [0, 128, 128],
	  thistle: [216, 191, 216],
	  tomato: [255, 99, 71],
	  turquoise: [64, 224, 208],
	  violet: [238, 130, 238],
	  wheat: [245, 222, 179],
	  white: [255, 255, 255],
	  whitesmoke: [245, 245, 245],
	  yellow: [255, 255, 0],
	  yellowgreen: [154, 205, 5]
	};


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(r, g, b) {
	  return [
	    _convert(r),
	    _convert(g),
	    _convert(b)
	  ].join('');
	
	  function _convert(num) {
	    var hex = num.toString(16);
	    return hex.length===1 ? '0'+hex : hex;
	  }
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var hsv2rgb = __webpack_require__(78);
	var rgb2hex = __webpack_require__(80);
	
	module.exports = function(h, s, v) {
	  var rgb = hsv2rgb(h, s, v);
	  return rgb2hex(rgb.r, rgb.g, rgb.b);
	};


/***/ },
/* 82 */
/***/ function(module, exports) {

	// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
	module.exports = function(r, g, b) {
	  var h, s, v;
	  var max = Math.max(r, g, b);
	  var min = Math.min(r, g, b);
	  var delta = max - min;
	
	  // hue
	  if(delta === 0) {
	    h = 0;
	  } else if(r === max) {
	    h = ((g-b)/delta) % 6;
	  } else if(g === max) {
	    h = (b-r)/delta + 2;
	  } else if(b === max) {
	    h = (r-g)/delta + 4;
	  }
	
	  h = Math.round(h*60);
	  if(h < 0) h += 360;
	
	  // saturation
	  s = Math.round((max === 0 ? 0 : (delta/max)) * 100);
	
	  // value
	  v = Math.round(max/255*100);
	
	  return {
	    h: h,
	    s: s,
	    v: v
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var EventGroup_1 = __webpack_require__(14);
	var ColorSlider = (function (_super) {
	    __extends(ColorSlider, _super);
	    function ColorSlider(props) {
	        _super.call(this, props);
	        var initialValue = this.props.initialValue;
	        this._events = new EventGroup_1.EventGroup(this);
	        this._onMouseDown = this._onMouseDown.bind(this);
	        this._onMouseMove = this._onMouseMove.bind(this);
	        this._onMouseUp = this._onMouseUp.bind(this);
	        this.state = {
	            isAdjusting: false,
	            origin: null,
	            currentValue: initialValue
	        };
	    }
	    ColorSlider.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    ColorSlider.prototype.render = function () {
	        var _a = this.props, className = _a.className, minValue = _a.minValue, maxValue = _a.maxValue, overlayStyle = _a.overlayStyle;
	        var _b = this.state, currentValue = _b.currentValue, isAdjusting = _b.isAdjusting;
	        var currentPercentage = 100 * (currentValue - minValue) / (maxValue - minValue);
	        return (React.createElement("div", {ref: 'root', className: css_1.css('ms-ColorPicker-slider', className, {
	            'is-adjusting': isAdjusting
	        }), onMouseDown: this._onMouseDown}, React.createElement("div", {className: 'ms-ColorPicker-sliderOverlay', style: overlayStyle}), React.createElement("div", {className: 'ms-ColorPicker-thumb is-slider', style: { left: currentPercentage + '%' }})));
	    };
	    ColorSlider.prototype._onMouseDown = function (ev) {
	        this._events.on(window, 'mousemove', this._onMouseMove, true);
	        this._events.on(window, 'mouseup', this._onMouseUp, true);
	        this._onMouseMove(ev);
	    };
	    ColorSlider.prototype._onMouseMove = function (ev) {
	        var _a = this.props, onChanged = _a.onChanged, minValue = _a.minValue, maxValue = _a.maxValue;
	        var rectSize = this.refs.root.getBoundingClientRect();
	        var currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
	        var newValue = Math.min(maxValue, Math.max(minValue, currentPercentage * maxValue));
	        this.setState({
	            isAdjusting: true,
	            currentValue: newValue
	        });
	        if (onChanged) {
	            onChanged(newValue);
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    ColorSlider.prototype._onMouseUp = function (ev) {
	        this._events.off();
	        this.setState({
	            isAdjusting: false,
	            origin: null
	        });
	    };
	    ColorSlider.defaultProps = {
	        minValue: 0,
	        maxValue: 100,
	        thumbColor: 'inherit',
	        initialValue: 0
	    };
	    return ColorSlider;
	}(React.Component));
	exports.ColorSlider = ColorSlider;
	
	//# sourceMappingURL=ColorSlider.js.map


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-ColorPicker{position:relative;max-width:300px}.ms-ColorPicker-panel{padding:10px}.ms-ColorPicker-colorRect{position:relative;margin-bottom:10px}.ms-ColorPicker-rectContainer{position:relative}.ms-ColorPicker-capture{position:absolute;left:0;top:0;bottom:0;right:0;background:rgba(255,0,0,.1)}.ms-ColorPicker-rectContainer.is-adjusting .ms-ColorPicker-capture{position:fixed}.ms-ColorPicker-thumb{position:absolute;width:20px;height:20px;background:#fff;border:1px solid rgba(255,255,255,.8);border-radius:50%;box-shadow:0 0 15px -5px #000;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ms-ColorPicker-thumb.is-slider{top:50%}.ms-ColorPicker-light{position:absolute;left:0;right:0;top:0;bottom:0;background:-webkit-linear-gradient(left,#fff 0,transparent 100%);background:linear-gradient(to right,#fff 0,transparent 100%)}.ms-ColorPicker-dark{position:absolute;left:0;right:0;top:0;bottom:0;background:-webkit-linear-gradient(top,transparent 0,#000 100%);background:linear-gradient(to bottom,transparent 0,#000 100%)}.ms-ColorPicker-slider{position:relative;height:20px;margin-bottom:5px;border:1px solid "[theme:neutralLight, default: #eaeaea]";box-sizing:border-box}.ms-ColorPicker-slider.is-hue{background:-webkit-linear-gradient(right,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%);background:linear-gradient(to left,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%)}.ms-ColorPicker-slider.is-alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)}.ms-ColorPicker-sliderOverlay{content:\'\';position:absolute;left:0;right:0;top:0;bottom:0}.ms-ColorPicker-input{width:100%;border:none;box-sizing:border-box;height:30px}.ms-ColorPicker-input.ms-TextField{padding-right:2px}.ms-ColorPicker-input .ms-TextField-field{min-width:auto;padding:5px}');
	
	//# sourceMappingURL=ColorPicker.scss.js.map


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(86));
	
	//# sourceMappingURL=CommandBar.js.map


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(87));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(10);
	var ContextualMenu_1 = __webpack_require__(19);
	var EventGroup_1 = __webpack_require__(14);
	var DirectionalHint_1 = __webpack_require__(22);
	var css_1 = __webpack_require__(17);
	__webpack_require__(88);
	var OVERFLOW_KEY = 'overflow';
	var OVERFLOW_WIDTH = 41.5;
	var _instance = 0;
	var CommandBar = (function (_super) {
	    __extends(CommandBar, _super);
	    function CommandBar(props) {
	        _super.call(this, props);
	        this.state = this._getStateFromProps(props);
	        this._instanceId = 'CommandBar-' + (_instance++) + '-';
	        this._events = new EventGroup_1.EventGroup(this);
	        this._onItemClick = this._onItemClick.bind(this);
	        this._onOverflowClick = this._onOverflowClick.bind(this);
	        this._onContextMenuDismiss = this._onContextMenuDismiss.bind(this);
	    }
	    CommandBar.prototype.componentDidMount = function () {
	        this._updateItemMeasurements();
	        this._updateRenderedItems();
	        this._events.on(window, 'resize', this._updateRenderedItems);
	    };
	    CommandBar.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    CommandBar.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState(this._getStateFromProps(nextProps));
	        this._commandItemWidths = null;
	    };
	    CommandBar.prototype.componentDidUpdate = function (prevProps, prevStates) {
	        if (!this._commandItemWidths) {
	            this._updateItemMeasurements();
	            this._updateRenderedItems();
	        }
	    };
	    CommandBar.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, isSearchBoxVisible = _a.isSearchBoxVisible, searchPlaceholderText = _a.searchPlaceholderText, className = _a.className, overflowScreenReaderText = _a.overflowScreenReaderText;
	        var _b = this.state, renderedItems = _b.renderedItems, contextualMenuItems = _b.contextualMenuItems, expandedMenuItemKey = _b.expandedMenuItemKey, expandedMenuId = _b.expandedMenuId, renderedOverflowItems = _b.renderedOverflowItems, contextualMenuTarget = _b.contextualMenuTarget, renderedFarItems = _b.renderedFarItems;
	        var searchBox;
	        var elipsisScreenReaderText = overflowScreenReaderText || '';
	        if (isSearchBoxVisible) {
	            searchBox = (React.createElement("div", {className: 'ms-CommandBarSearch', ref: 'searchSurface'}, React.createElement("input", {className: 'ms-CommandBarSearch-input', type: 'text', placeholder: searchPlaceholderText}), React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'}, React.createElement("i", {className: 'ms-Icon ms-Icon--search'})), React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'}))));
	        }
	        return (React.createElement("div", {className: css_1.css('ms-CommandBar', className), ref: 'commandBarRegion'}, searchBox, React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal, role: 'menubar'}, React.createElement("div", {className: 'ms-CommandBar-primaryCommands', ref: 'commandSurface'}, renderedItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey)); }).concat((renderedOverflowItems && renderedOverflowItems.length) ? [
	            React.createElement("div", {className: 'ms-CommandBarItem', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, React.createElement("button", {id: this._instanceId + OVERFLOW_KEY, className: css_1.css('ms-CommandBarItem-link', { 'is-expanded': (expandedMenuItemKey === OVERFLOW_KEY) }), onClick: this._onOverflowClick, role: 'menuitem', "aria-label": elipsisScreenReaderText}, React.createElement("i", {className: 'ms-CommandBarItem-overflow ms-Icon ms-Icon--ellipsis'})))
	        ] : [])), React.createElement("div", {className: 'ms-CommandBar-sideCommands', ref: 'farCommandSurface'}, renderedFarItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey, true)); }))), (contextualMenuItems) ?
	            (React.createElement(ContextualMenu_1.ContextualMenu, {labelElementId: expandedMenuId, className: 'ms-CommandBar-menuHost', items: contextualMenuItems, targetElement: contextualMenuTarget, onDismiss: this._onContextMenuDismiss, isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge})) : (null)));
	    };
	    CommandBar.prototype._renderItemInCommandBar = function (item, index, expandedMenuItemKey, isFarItem) {
	        var _this = this;
	        var itemKey = item.key || index;
	        var className = item.onClick ? 'ms-CommandBarItem-link' : 'ms-CommandBarItem-text';
	        var classNameValue = css_1.css(className, { 'is-expanded': (expandedMenuItemKey === item.key) });
	        return React.createElement("div", {className: css_1.css('ms-CommandBarItem', item.className), key: itemKey, ref: itemKey}, (function () {
	            if (item.onClick || item.items) {
	                return React.createElement("button", {id: _this._instanceId + item.key, className: classNameValue, onClick: _this._onItemClick.bind(_this, item), "data-command-key": index, "aria-haspopup": !!(item.items && item.items.length), role: 'menuitem'}, (!!item.icon) && React.createElement("span", {className: "ms-CommandBarItem-icon ms-Icon ms-Icon--" + item.icon}), (!!item.name) && React.createElement("span", {className: 'ms-CommandBarItem-commandText'}, item.name), (item.items && item.items.length) ? (React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'})) : (null));
	            }
	            else {
	                return React.createElement("div", {id: _this._instanceId + item.key, className: classNameValue, "data-command-key": index, "aria-haspopup": !!(item.items && item.items.length)}, React.createElement("span", {className: "ms-CommandBarItem-icon ms-Icon ms-Icon--" + item.icon}), React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular', "aria-hidden": 'true', role: 'presentation'}, item.name));
	            }
	        })());
	    };
	    CommandBar.prototype._updateItemMeasurements = function () {
	        // the generated width for overflow is 35 in chrome, 38 in IE, but the actual value is 41.5
	        if (this.refs[OVERFLOW_KEY] || (this.props.overflowItems && this.props.overflowItems.length)) {
	            this._overflowWidth = OVERFLOW_WIDTH;
	        }
	        else {
	            this._overflowWidth = 0;
	        }
	        if (!this._commandItemWidths) {
	            this._commandItemWidths = {};
	        }
	        for (var i = 0; i < this.props.items.length; i++) {
	            var item = this.props.items[i];
	            if (!this._commandItemWidths[item.key]) {
	                var el = this.refs[item.key];
	                if (el) {
	                    this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
	                }
	            }
	        }
	    };
	    CommandBar.prototype._updateRenderedItems = function () {
	        var _a = this.props, items = _a.items, overflowItems = _a.overflowItems;
	        var commandSurface = this.refs.commandSurface;
	        var farCommandSurface = this.refs.farCommandSurface;
	        var commandBarRegion = this.refs.commandBarRegion;
	        var searchSurface = this.refs.searchSurface;
	        var renderedItems = [].concat(items);
	        var renderedOverflowItems = overflowItems;
	        var consumedWidth = 0;
	        var isOverflowVisible = overflowItems && overflowItems.length;
	        var style = window.getComputedStyle(commandSurface);
	        var availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
	        if (searchSurface) {
	            availableWidth -= searchSurface.getBoundingClientRect().width;
	        }
	        if (farCommandSurface) {
	            availableWidth -= farCommandSurface.getBoundingClientRect().width;
	        }
	        if (isOverflowVisible) {
	            availableWidth -= this._overflowWidth;
	        }
	        for (var i = 0; i < renderedItems.length; i++) {
	            var item = renderedItems[i];
	            var itemWidth = this._commandItemWidths[item.key];
	            if ((consumedWidth + itemWidth) >= availableWidth) {
	                if (i > 0 && !isOverflowVisible && (availableWidth - consumedWidth) < OVERFLOW_WIDTH) {
	                    i--;
	                }
	                renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
	                break;
	            }
	            else {
	                consumedWidth += itemWidth;
	            }
	        }
	        this.setState({
	            renderedItems: renderedItems,
	            renderedOverflowItems: renderedOverflowItems,
	            expandedMenuItemKey: null,
	            contextualMenuItems: null,
	            contextualMenuTarget: null
	        });
	    };
	    CommandBar.prototype._onItemClick = function (item, ev) {
	        if (item.key === this.state.expandedMenuItemKey || !item.items || !item.items.length) {
	            this._onContextMenuDismiss();
	        }
	        else {
	            this.setState({
	                expandedMenuId: ev.currentTarget.id,
	                expandedMenuItemKey: item.key,
	                contextualMenuItems: item.items,
	                contextualMenuTarget: ev.currentTarget
	            });
	        }
	        if (item.onClick) {
	            item.onClick();
	        }
	    };
	    CommandBar.prototype._onOverflowClick = function (ev) {
	        if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
	            this._onContextMenuDismiss();
	        }
	        else {
	            this.setState({
	                expandedMenuId: ev.currentTarget.id,
	                expandedMenuItemKey: OVERFLOW_KEY,
	                contextualMenuItems: this.state.renderedOverflowItems,
	                contextualMenuTarget: ev.currentTarget
	            });
	        }
	    };
	    CommandBar.prototype._onContextMenuDismiss = function (ev) {
	        if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget)) {
	            this.setState({
	                expandedMenuItemKey: null,
	                contextualMenuItems: null,
	                contextualMenuTarget: null
	            });
	        }
	        else {
	            ev.stopPropagation();
	            ev.preventDefault();
	        }
	    };
	    CommandBar.prototype._getStateFromProps = function (nextProps) {
	        return {
	            renderedItems: nextProps.items || [],
	            renderedOverflowItems: null,
	            contextualMenuItems: null,
	            renderedFarItems: nextProps.farItems || null
	        };
	    };
	    CommandBar.defaultProps = {
	        items: [],
	        overflowItems: [],
	        farItems: []
	    };
	    return CommandBar;
	}(React.Component));
	exports.CommandBar = CommandBar;
	
	//# sourceMappingURL=CommandBar.js.map


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-CommandBarItem-icon,.ms-CommandBarItem-overflow{padding:0 2px;min-width:17px}.ms-CommandBar{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;position:relative;background-color:"[theme:themeLighterAlt, default: #eff6fc]";height:40px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-CommandBar-primaryCommands{position:absolute;overflow:hidden;display:inline;vertical-align:top;line-height:40px;margin:0 24px}.ms-CommandBar-sideCommands{position:absolute}html[dir=ltr] .ms-CommandBar-sideCommands{right:0}html[dir=rtl] .ms-CommandBar-sideCommands{left:0}html[dir=ltr] .ms-CommandBar-sideCommands{text-align:right}html[dir=rtl] .ms-CommandBar-sideCommands{text-align:left}html[dir=ltr] .ms-CommandBar-sideCommands{padding-right:24px}html[dir=rtl] .ms-CommandBar-sideCommands{padding-left:24px}.ms-CommandBarItem{display:inline-block;color:"[theme:themePrimary, default: #0078d7]";height:40px;outline:transparent;vertical-align:top;margin:0 2px}@media screen and (-ms-high-contrast:active){.ms-CommandBarItem{height:38px;outline:0}html[dir=ltr] .ms-CommandBarItem{border-left:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarItem{border-right:1px solid "[theme:black, default: #000000]"}html[dir=ltr] .ms-CommandBarItem{border-right:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarItem{border-left:1px solid "[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-CommandBarItem{height:38px;outline:0}html[dir=ltr] .ms-CommandBarItem{border-left:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarItem{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=ltr] .ms-CommandBarItem{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarItem{border-left:1px solid "[theme:white, default: #ffffff]"}}.ms-CommandBarItem-chevronDown,.ms-CommandBarItem-commandText{display:inline;padding:0 2px}.ms-CommandBarItem-overflow{font-size:14px;color:"[theme:neutralSecondary, default: #666666]"}.ms-CommandBarItem-text{font-family:inherit;font-size:inherit;position:relative;background:0 0;border:none;line-height:39px;height:40px;min-width:20px;text-align:center;padding:0 2px;display:block;height:100%}.ms-Fabric .ms-CommandBarItem-text::-moz-focus-inner{border:0}.ms-Fabric .ms-CommandBarItem-text{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-CommandBarItem-text:focus:before{content:\'\';position:absolute;top:2px;right:2px;bottom:2px;left:2px;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-CommandBarItem-link{font-family:inherit;font-size:inherit;position:relative;background:0 0;border:none;line-height:39px;height:40px;min-width:20px;text-align:center;padding:0 2px;display:block;height:100%;cursor:pointer;padding:0 6px}.ms-Fabric .ms-CommandBarItem-link::-moz-focus-inner{border:0}.ms-Fabric .ms-CommandBarItem-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-CommandBarItem-link:focus:before{content:\'\';position:absolute;top:2px;right:2px;bottom:2px;left:2px;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-CommandBarItem-link.is-expanded,.ms-CommandBarItem-link:hover{background-color:"[theme:themeLight, default: #c7e0f4]"}@media screen and (-ms-high-contrast:active){html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-left:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-left:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-left:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-right:1px solid "[theme:black, default: #000000]"}html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-right:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-left:1px solid "[theme:black, default: #000000]"}}.ms-CommandBarItem-icon{font-size:17px;color:"[theme:themePrimary, default: #0078d7]"}.ms-CommandBarItem-chevronDown{vertical-align:baseline;color:"[theme:neutralSecondary, default: #666666]";font-size:16px;width:16px;padding:0 2px}.ms-CommandBarSearch{width:208px;max-width:208px;background-color:"[theme:themeLighter, default: #deecf9]";color:"[theme:neutralPrimary, default: #333333]";height:40px;position:relative;box-sizing:border-box;border-color:transparent}html[dir=ltr] .ms-CommandBarSearch{float:left}html[dir=rtl] .ms-CommandBarSearch{float:right}@media screen and (-ms-high-contrast:active){.ms-CommandBarSearch{z-index:10}html[dir=ltr] .ms-CommandBarSearch{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarSearch{border-left:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarSearch{border-right:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarSearch{border-left:1px solid "[theme:black, default: #000000]"}}.ms-CommandBarSearch:hover{background-color:"[theme:themeLight, default: #c7e0f4]";color:"[theme:themePrimary, default: #0078d7]"}@media screen and (-ms-high-contrast:active){html[dir=ltr] .ms-CommandBarSearch:hover{border-left:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarSearch:hover{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=ltr] .ms-CommandBarSearch:hover{border-right:1px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarSearch:hover{border-left:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarSearch:hover{border-left:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarSearch:hover{border-right:1px solid "[theme:black, default: #000000]"}html[dir=ltr] .ms-CommandBarSearch:hover{border-right:1px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarSearch:hover{border-left:1px solid "[theme:black, default: #000000]"}}.ms-CommandBarSearch .ms-Icon--search{margin-top:12px;vertical-align:top}html[dir=ltr] .ms-CommandBarSearch .ms-Icon--search{margin-left:2px}html[dir=rtl] .ms-CommandBarSearch .ms-Icon--search{margin-right:2px}.ms-CommandBarSearch-input{height:40px;padding:8px 8px 8px 0;border:none;background-color:transparent;width:100%;box-sizing:border-box;outline:0;cursor:pointer;font-size:14px;-webkit-appearance:none;-webkit-border-radius:0}html[dir=ltr] .ms-CommandBarSearch-input{border-left:42px solid transparent}html[dir=rtl] .ms-CommandBarSearch-input{border-right:42px solid transparent}@media screen and (-ms-high-contrast:active){html[dir=ltr] .ms-CommandBarSearch-input{border-left:40px solid "[theme:black, default: #000000]"}html[dir=rtl] .ms-CommandBarSearch-input{border-right:40px solid "[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarSearch-input{border-left:40px solid "[theme:white, default: #ffffff]"}html[dir=rtl] .ms-CommandBarSearch-input{border-right:40px solid "[theme:white, default: #ffffff]"}}.ms-CommandBarSearch-input::-ms-clear{display:none}.ms-CommandBarSearch-iconSearchWrapper{display:block}html[dir=ltr] .ms-CommandBarSearch-iconSearchWrapper{padding-left:15px}html[dir=rtl] .ms-CommandBarSearch-iconSearchWrapper{padding-right:15px}.ms-CommandBarSearch-iconArrowWrapper{display:none}.ms-CommandBarSearch-iconArrowWrapper,.ms-CommandBarSearch-iconSearchWrapper{top:0}html[dir=ltr] .ms-CommandBarSearch-iconArrowWrapper,html[dir=ltr] .ms-CommandBarSearch-iconSearchWrapper{padding-left:8px}html[dir=rtl] .ms-CommandBarSearch-iconArrowWrapper,html[dir=rtl] .ms-CommandBarSearch-iconSearchWrapper{padding-right:8px}html[dir=ltr] .ms-CommandBarSearch-iconArrowWrapper,html[dir=ltr] .ms-CommandBarSearch-iconSearchWrapper{padding-right:8px}html[dir=rtl] .ms-CommandBarSearch-iconArrowWrapper,html[dir=rtl] .ms-CommandBarSearch-iconSearchWrapper{padding-left:8px}.ms-CommandBarSearch-iconClearWrapper{display:none;top:1px;z-index:10}html[dir=ltr] .ms-CommandBarSearch-iconClearWrapper{right:0}html[dir=rtl] .ms-CommandBarSearch-iconClearWrapper{left:0}.ms-CommandBarSearch.is-active{background-color:"[theme:themeLight, default: #c7e0f4]";color:"[theme:black, default: #000000]"}.ms-CommandBarSearch.is-active:hover{background-color:"[theme:themeLight, default: #c7e0f4]";color:"[theme:black, default: #000000]"}.ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{cursor:text}html[dir=ltr] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-right:40px}html[dir=rtl] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-left:40px}html[dir=ltr] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{border-left-width:8px}html[dir=rtl] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{border-right-width:8px}html[dir=ltr] .ms-CommandBarSearch.is-active.ms-CommandBarSearch--hasBack .ms-CommandBarSearch-input{border-left-width:40px}html[dir=rtl] .ms-CommandBarSearch.is-active.ms-CommandBarSearch--hasBack .ms-CommandBarSearch-input{border-right-width:40px}.ms-CommandBarSearch.is-active .ms-CommandBarSearch-iconSearchWrapper{display:none}.ms-CommandBarSearch.is-active.ms-CommandBarSearch--hasBack .ms-CommandBarSearch-iconArrowWrapper{display:block}html[dir=ltr] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-right:40px}html[dir=rtl] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-left:40px}.ms-CommandBarSearch.is-active .ms-CommandBarSearch-iconClearWrapper{display:block}.ms-CommandBarSearch-iconWrapper{height:40px;line-height:40px;cursor:pointer;padding:0 8px;position:absolute;width:34px;text-align:center}.ms-CommandBarSearch .ms-Icon:before{font-size:17px;color:"[theme:themePrimary, default: #0078d7]"}.ms-CommandBarSearch-input,.ms-CommandBarSearch-input::-webkit-input-placeholder{font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px}.ms-CommandBarSearch-input::-webkit-input-placeholder{font-style:italic}');
	
	//# sourceMappingURL=CommandBar.scss.js.map


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(90));
	
	//# sourceMappingURL=DatePicker.js.map


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(91));
	__export(__webpack_require__(92));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DatePicker_Props_1 = __webpack_require__(92);
	var DatePickerDay_1 = __webpack_require__(93);
	var DatePickerMonth_1 = __webpack_require__(95);
	var TextField_1 = __webpack_require__(65);
	var KeyCodes_1 = __webpack_require__(15);
	var css_1 = __webpack_require__(17);
	var EventGroup_1 = __webpack_require__(14);
	__webpack_require__(96);
	var DatePicker = (function (_super) {
	    __extends(DatePicker, _super);
	    function DatePicker(props) {
	        _super.call(this);
	        var formatDate = props.formatDate, value = props.value;
	        this.state = {
	            selectedDate: value || new Date(),
	            formattedDate: formatDate && value ? formatDate(value) : null,
	            isDatePickerShown: false,
	            errorMessage: ''
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._preventFocusOpeningPicker = false;
	        this._onSelectDate = this._onSelectDate.bind(this);
	        this._onNavigateDate = this._onNavigateDate.bind(this);
	        this._onGotoToday = this._onGotoToday.bind(this);
	        this._onGotoTodayKeyDown = this._onGotoTodayKeyDown.bind(this);
	        this._onDatePickerPopupKeyDown = this._onDatePickerPopupKeyDown.bind(this);
	        this._onTextFieldFocus = this._onTextFieldFocus.bind(this);
	        this._onTextFieldBlur = this._onTextFieldBlur.bind(this);
	        this._onTextFieldKeyDown = this._onTextFieldKeyDown.bind(this);
	        this._onTextFieldClick = this._onTextFieldClick.bind(this);
	        this._onTextFieldChanged = this._onTextFieldChanged.bind(this);
	        this._handleEscKey = this._handleEscKey.bind(this);
	        this._validateTextInput = this._validateTextInput.bind(this);
	    }
	    DatePicker.prototype.componentDidMount = function () {
	        this._events.on(window, 'scroll', this._dismissDatePickerPopup);
	        this._events.on(window, 'resize', this._dismissDatePickerPopup);
	        this._events.on(window, 'click', this._onClickCapture, true);
	        this._events.on(window, 'focus', this._onClickCapture, true);
	        this._events.on(window, 'touchstart', this._onClickCapture, true);
	    };
	    DatePicker.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    DatePicker.prototype.componentDidUpdate = function () {
	        if (this._focusOnSelectedDateOnUpdate) {
	            this.refs.dayPicker.focus();
	            this._focusOnSelectedDateOnUpdate = false;
	        }
	    };
	    DatePicker.prototype.render = function () {
	        var rootClass = 'ms-DatePicker';
	        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, strings = _a.strings, label = _a.label, isRequired = _a.isRequired, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, allowTextInput = _a.allowTextInput;
	        var _b = this.state, isDatePickerShown = _b.isDatePickerShown, formattedDate = _b.formattedDate, selectedDate = _b.selectedDate, navigatedDate = _b.navigatedDate, errorMessage = _b.errorMessage;
	        return (React.createElement("div", {className: rootClass, ref: 'root'}, React.createElement("div", {ref: 'textFieldContainer'}, React.createElement(TextField_1.TextField, {ariaLabel: ariaLabel, "aria-haspopup": 'true', required: isRequired, onKeyDown: this._onTextFieldKeyDown, onFocus: this._onTextFieldFocus, onBlur: this._onTextFieldBlur, onClick: this._onTextFieldClick, onChanged: this._onTextFieldChanged, errorMessage: errorMessage, label: label, placeholder: placeholder, iconClass: css_1.css('ms-Icon ms-Icon--event', label ? 'ms-DatePicker-event--with-label' : 'ms-DatePicker-event--without-label'), readOnly: !allowTextInput, value: formattedDate, ref: 'textField'})), isDatePickerShown && (React.createElement("div", {className: 'ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused ' + (this.props.isMonthPickerVisible ? 'is-monthPickerVisible' : '')}, React.createElement("div", {className: 'ms-DatePicker-holder', onKeyDown: this._onDatePickerPopupKeyDown}, React.createElement("div", {className: 'ms-DatePicker-frame'}, React.createElement("div", {className: 'ms-DatePicker-wrap'}, React.createElement(DatePickerDay_1.DatePickerDay, {selectedDate: selectedDate, navigatedDate: navigatedDate, onSelectDate: this._onSelectDate, onNavigateDate: this._onNavigateDate, firstDayOfWeek: firstDayOfWeek, strings: strings, ref: 'dayPicker'}), React.createElement(DatePickerMonth_1.DatePickerMonth, {navigatedDate: navigatedDate, strings: strings, onNavigateDate: this._onNavigateDate}), React.createElement("span", {className: 'ms-DatePicker-goToday js-goToday', onClick: this._onGotoToday, onKeyDown: this._onGotoTodayKeyDown, tabIndex: 0}, strings.goToToday))))))));
	    };
	    DatePicker.prototype._restoreFocusToTextField = function () {
	        this._preventFocusOpeningPicker = true;
	        this.refs.textField.focus();
	    };
	    DatePicker.prototype._navigateDay = function (date) {
	        this.setState({
	            navigatedDate: date
	        });
	    };
	    DatePicker.prototype._onNavigateDate = function (date, focusOnNavigatedDay) {
	        this._focusOnSelectedDateOnUpdate = this._focusOnSelectedDateOnUpdate || focusOnNavigatedDay;
	        this._navigateDay(date);
	    };
	    DatePicker.prototype._onSelectDate = function (date) {
	        var _a = this.props, formatDate = _a.formatDate, onSelectDate = _a.onSelectDate;
	        this.setState({
	            selectedDate: date,
	            isDatePickerShown: false,
	            formattedDate: formatDate && date ? formatDate(date) : null,
	        });
	        this._restoreFocusToTextField();
	        if (onSelectDate) {
	            onSelectDate(date);
	        }
	    };
	    ;
	    DatePicker.prototype._onGotoToday = function () {
	        this._focusOnSelectedDateOnUpdate = true;
	        this._navigateDay(new Date());
	    };
	    ;
	    DatePicker.prototype._onGotoTodayKeyDown = function (ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            ev.preventDefault();
	            this._onGotoToday();
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldFocus = function (ev) {
	        if (!this.props.allowTextInput) {
	            if (!this._preventFocusOpeningPicker) {
	                this._showDatePickerPopup();
	            }
	            this._preventFocusOpeningPicker = false;
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldBlur = function (ev) {
	        this._validateTextInput();
	    };
	    ;
	    DatePicker.prototype._onTextFieldChanged = function (newValue) {
	        if (this.props.allowTextInput) {
	            if (this.state.isDatePickerShown) {
	                this._dismissDatePickerPopup();
	            }
	            this.setState({
	                errorMessage: '',
	                formattedDate: newValue
	            });
	        }
	    };
	    DatePicker.prototype._onTextFieldKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.enter:
	                ev.preventDefault();
	                ev.stopPropagation();
	                if (!this.state.isDatePickerShown) {
	                    this._showDatePickerPopup();
	                }
	                else {
	                    // When DatePicker allows input date string directly,
	                    // it is expected to hit another enter to close the popup
	                    if (this.props.allowTextInput) {
	                        this._restoreFocusToTextField();
	                        this._dismissDatePickerPopup();
	                    }
	                }
	                break;
	            case KeyCodes_1.KeyCodes.escape:
	                this._handleEscKey(ev);
	                break;
	            default:
	                break;
	        }
	    };
	    ;
	    DatePicker.prototype._onDatePickerPopupKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.enter:
	                ev.preventDefault();
	                break;
	            case KeyCodes_1.KeyCodes.backspace:
	                ev.preventDefault();
	                break;
	            case KeyCodes_1.KeyCodes.escape:
	                this._handleEscKey(ev);
	                break;
	            default:
	                break;
	        }
	    };
	    DatePicker.prototype._onClickCapture = function (ev) {
	        if (!this.refs.root.contains(ev.target)) {
	            this._dismissDatePickerPopup();
	        }
	    };
	    DatePicker.prototype._onTextFieldClick = function (ev) {
	        if (!this.state.isDatePickerShown) {
	            this._showDatePickerPopup();
	        }
	        else {
	            if (this.props.allowTextInput) {
	                this.setState({
	                    isDatePickerShown: false
	                });
	            }
	        }
	    };
	    DatePicker.prototype._showDatePickerPopup = function () {
	        if (!this.state.isDatePickerShown) {
	            this._focusOnSelectedDateOnUpdate = true;
	            this.setState({
	                isDatePickerShown: true,
	                navigatedDate: this.state.selectedDate,
	                errorMessage: ''
	            });
	        }
	    };
	    DatePicker.prototype._dismissDatePickerPopup = function () {
	        if (this.state.isDatePickerShown) {
	            this.setState({
	                isDatePickerShown: false
	            });
	            this._validateTextInput();
	        }
	    };
	    DatePicker.prototype._handleEscKey = function (ev) {
	        this._restoreFocusToTextField();
	        this._dismissDatePickerPopup();
	    };
	    DatePicker.prototype._validateTextInput = function () {
	        var _a = this.props, isRequired = _a.isRequired, allowTextInput = _a.allowTextInput, strings = _a.strings, formatDate = _a.formatDate, parseDateFromString = _a.parseDateFromString, onSelectDate = _a.onSelectDate;
	        var inputValue = this.state.formattedDate;
	        // Do validation only if DatePicker's popup is dismissed
	        if (this.state.isDatePickerShown) {
	            return;
	        }
	        // Check when DatePicker is a required field but has NO input value
	        if (isRequired && !inputValue) {
	            this.setState({
	                // Since fabic react doesn't have loc support yet
	                // use the symbol '*' to represent error message
	                errorMessage: strings.isRequiredErrorMessage || '*'
	            });
	            return;
	        }
	        var date = null;
	        if (allowTextInput) {
	            if (inputValue) {
	                date = parseDateFromString(inputValue);
	                if (!date) {
	                    this.setState({
	                        errorMessage: strings.invalidInputErrorMessage || '*'
	                    });
	                }
	                else {
	                    this.setState({
	                        selectedDate: date,
	                        formattedDate: formatDate && date ? formatDate(date) : null,
	                        errorMessage: ''
	                    });
	                }
	            }
	            else {
	                // No input date string shouldn't be an error if field is not required
	                this.setState({
	                    errorMessage: ''
	                });
	            }
	        }
	        // Execute onSelectDate callback
	        if (onSelectDate) {
	            // If no input date string or input date string is invalid
	            // date variable will be null, callback should expect null value for this case
	            onSelectDate(date);
	        }
	    };
	    DatePicker.defaultProps = {
	        allowTextInput: false,
	        formatDate: function (date) {
	            if (date) {
	                return date.toDateString();
	            }
	            return null;
	        },
	        parseDateFromString: function (dateStr) {
	            var date = Date.parse(dateStr);
	            if (date) {
	                return new Date(date);
	            }
	            return null;
	        },
	        firstDayOfWeek: DatePicker_Props_1.DayOfWeek.Sunday,
	        isRequired: false,
	        isMonthPickerVisible: true,
	        strings: null
	    };
	    return DatePicker;
	}(React.Component));
	exports.DatePicker = DatePicker;
	
	//# sourceMappingURL=DatePicker.js.map


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	(function (DayOfWeek) {
	    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
	    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
	    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
	    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
	    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
	    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
	    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
	})(exports.DayOfWeek || (exports.DayOfWeek = {}));
	var DayOfWeek = exports.DayOfWeek;
	
	//# sourceMappingURL=DatePicker.Props.js.map


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var FocusZone_1 = __webpack_require__(10);
	var KeyCodes_1 = __webpack_require__(15);
	var DateMath_1 = __webpack_require__(94);
	var rtl_1 = __webpack_require__(16);
	var DAYS_IN_WEEK = 7;
	var _instance = 0;
	var DatePickerDay = (function (_super) {
	    __extends(DatePickerDay, _super);
	    function DatePickerDay(props) {
	        _super.call(this, props);
	        this.state = {
	            activeDescendantId: 'DatePickerDay-active-' + _instance,
	            weeks: this._getWeeks(props.navigatedDate, props.selectedDate)
	        };
	        this._onSelectNextMonth = this._onSelectNextMonth.bind(this);
	        this._onSelectPrevMonth = this._onSelectPrevMonth.bind(this);
	    }
	    DatePickerDay.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState({
	            weeks: this._getWeeks(nextProps.navigatedDate, nextProps.selectedDate)
	        });
	    };
	    DatePickerDay.prototype.render = function () {
	        var _this = this;
	        var _a = this.state, activeDescendantId = _a.activeDescendantId, weeks = _a.weeks;
	        var _b = this.props, firstDayOfWeek = _b.firstDayOfWeek, strings = _b.strings, navigatedDate = _b.navigatedDate, onSelectDate = _b.onSelectDate;
	        var selectDayCallbacks = {};
	        weeks.map(function (week, index) { return week.map(function (day) { return selectDayCallbacks[day.key] = onSelectDate.bind(_this, day.originalDate); }); });
	        return (React.createElement("div", {className: 'ms-DatePicker-dayPicker'}, React.createElement("div", {className: 'ms-DatePicker-header'}, React.createElement("div", {className: 'ms-DatePicker-month'}, strings.months[navigatedDate.getMonth()]), React.createElement("div", {className: 'ms-DatePicker-year'}, navigatedDate.getFullYear())), React.createElement("div", {className: 'ms-DatePicker-monthComponents'}, React.createElement("div", {className: 'ms-DatePicker-navContainer'}, React.createElement("span", {className: 'ms-DatePicker-prevMonth js-prevMonth', onClick: this._onSelectPrevMonth, onKeyDown: this._onKeyDown.bind(this, this._onSelectPrevMonth), tabIndex: 0}, React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--chevronLeft': !rtl_1.getRTL(), 'ms-Icon--chevronRight': rtl_1.getRTL() })})), React.createElement("span", {className: 'ms-DatePicker-nextMonth js-nextMonth', onClick: this._onSelectNextMonth, onKeyDown: this._onKeyDown.bind(this, this._onSelectNextMonth), tabIndex: 0}, React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--chevronLeft': rtl_1.getRTL(), 'ms-Icon--chevronRight': !rtl_1.getRTL() })}))), React.createElement("div", {className: 'ms-DatePicker-headerToggleView js-showMonthPicker'})), React.createElement(FocusZone_1.FocusZone, null, React.createElement("table", {className: 'ms-DatePicker-table', role: 'grid', "aria-readonly": 'true', "aria-multiselectable": 'false', "aria-activedescendant": activeDescendantId}, React.createElement("thead", null, React.createElement("tr", null, strings.shortDays.map(function (val, index) {
	            return React.createElement("th", {className: 'ms-DatePicker-weekday', scope: 'col', key: index, title: strings.days[(index + firstDayOfWeek) % DAYS_IN_WEEK]}, strings.shortDays[(index + firstDayOfWeek) % DAYS_IN_WEEK]);
	        }))), React.createElement("tbody", null, weeks.map(function (week, weekIndex) {
	            return React.createElement("tr", {key: weekIndex}, week.map(function (day, dayIndex) {
	                return React.createElement("td", {role: 'presentation', key: day.key}, React.createElement("div", {className: css_1.css('ms-DatePicker-day', {
	                    'ms-DatePicker-day--infocus': day.isInMonth,
	                    'ms-DatePicker-day--outfocus': !day.isInMonth,
	                    'ms-DatePicker-day--today': day.isToday,
	                    'ms-DatePicker-day--highlighted': day.isSelected
	                }), role: 'gridcell', onClick: selectDayCallbacks[day.key], onKeyDown: function (ev) {
	                    return _this._navigateMonthEdge(ev, day.originalDate, weekIndex, dayIndex);
	                }, "aria-selected": day.isSelected, id: DateMath_1.compareDates(navigatedDate, day.originalDate) ? activeDescendantId : null, "data-is-focusable": true, ref: DateMath_1.compareDates(navigatedDate, day.originalDate) ? 'navigatedDay' : null, key: DateMath_1.compareDates(navigatedDate, day.originalDate) ? 'navigatedDay' : null}, day.date));
	            }));
	        }))))));
	    };
	    DatePickerDay.prototype.focus = function () {
	        if (this.refs.navigatedDay) {
	            this.refs.navigatedDay.tabIndex = 0;
	            this.refs.navigatedDay.focus();
	        }
	    };
	    DatePickerDay.prototype._navigateMonthEdge = function (ev, date, weekIndex, dayIndex) {
	        if (weekIndex === 0 && ev.which === KeyCodes_1.KeyCodes.up) {
	            this.props.onNavigateDate(DateMath_1.addWeeks(date, -1), true);
	            ev.preventDefault();
	        }
	        else if (weekIndex === (this.state.weeks.length - 1) && ev.which === KeyCodes_1.KeyCodes.down) {
	            this.props.onNavigateDate(DateMath_1.addWeeks(date, 1), true);
	            ev.preventDefault();
	        }
	        else if (dayIndex === 0 && ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.left)) {
	            this.props.onNavigateDate(DateMath_1.addDays(date, -1), true);
	            ev.preventDefault();
	        }
	        else if (dayIndex === (DAYS_IN_WEEK - 1) && ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)) {
	            this.props.onNavigateDate(DateMath_1.addDays(date, 1), true);
	            ev.preventDefault();
	        }
	    };
	    DatePickerDay.prototype._onKeyDown = function (callback, ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            callback();
	        }
	    };
	    DatePickerDay.prototype._onSelectNextMonth = function () {
	        this.props.onNavigateDate(DateMath_1.addMonths(this.props.navigatedDate, 1), false);
	    };
	    DatePickerDay.prototype._onSelectPrevMonth = function () {
	        this.props.onNavigateDate(DateMath_1.addMonths(this.props.navigatedDate, -1), false);
	    };
	    DatePickerDay.prototype._getWeeks = function (navigatedDate, selectedDate) {
	        var firstDayOfWeek = this.props.firstDayOfWeek;
	        var date = new Date(navigatedDate.getFullYear(), navigatedDate.getMonth(), 1);
	        var today = new Date();
	        var weeks = [];
	        var week;
	        // Cycle the date backwards to get to the first day of the week.
	        while (date.getDay() !== firstDayOfWeek) {
	            date.setDate(date.getDate() - 1);
	        }
	        // a flag to indicate whether all days of the week are in the month
	        var isAllDaysOfWeekOutOfMonth = false;
	        for (var weekIndex = 0; !isAllDaysOfWeekOutOfMonth; weekIndex++) {
	            week = [];
	            isAllDaysOfWeekOutOfMonth = true;
	            for (var dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
	                var dayInfo = {
	                    key: date.toString(),
	                    date: date.getDate(),
	                    originalDate: new Date(date.toString()),
	                    isInMonth: date.getMonth() === navigatedDate.getMonth(),
	                    isToday: DateMath_1.compareDates(today, date),
	                    isSelected: DateMath_1.compareDates(selectedDate, date)
	                };
	                week.push(dayInfo);
	                if (dayInfo.isInMonth) {
	                    isAllDaysOfWeekOutOfMonth = false;
	                }
	                date.setDate(date.getDate() + 1);
	            }
	            if (!isAllDaysOfWeekOutOfMonth) {
	                weeks.push(week);
	            }
	        }
	        return weeks;
	    };
	    return DatePickerDay;
	}(React.Component));
	exports.DatePickerDay = DatePickerDay;
	
	//# sourceMappingURL=DatePickerDay.js.map


/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";
	var DAYS_IN_WEEK = 7;
	var MONTHS_IN_YEAR = 12;
	/**
	 * Returns a date offset from the given date by the specified number of days.
	 * @param {Date} date - The origin date
	 * @param {number} days - The number of days to offset. 'days' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of days
	 */
	function addDays(date, days) {
	    var result = new Date(date.getTime());
	    result.setDate(result.getDate() + days);
	    return result;
	}
	exports.addDays = addDays;
	/**
	 * Returns a date offset from the given date by the specified number of weeks.
	 * @param {Date} date - The origin date
	 * @param {number} weeks - The number of weeks to offset. 'weeks' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of weeks
	 */
	function addWeeks(date, weeks) {
	    return addDays(date, weeks * DAYS_IN_WEEK);
	}
	exports.addWeeks = addWeeks;
	/**
	 * Returns a date offset from the given date by the specified number of months.
	 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} months - The number of months to offset. 'months' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of months
	 */
	function addMonths(date, months) {
	    var result = new Date(date.getTime());
	    var newMonth = result.getMonth() + months;
	    result.setMonth(newMonth);
	    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
	    // Loop until we back up to a day the new month has.
	    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
	    if (result.getMonth() !== ((newMonth % MONTHS_IN_YEAR) + MONTHS_IN_YEAR) % MONTHS_IN_YEAR) {
	        result = addDays(result, -result.getDate());
	    }
	    return result;
	}
	exports.addMonths = addMonths;
	/**
	 * Returns a date offset from the given date by the specified number of years.
	 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} years - The number of years to offset. 'years' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of years
	 */
	function addYears(date, years) {
	    var result = new Date(date.getTime());
	    result.setFullYear(date.getFullYear() + years);
	    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
	    // Loop until we back up to a day the new month has.
	    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
	    if (result.getMonth() !== ((date.getMonth() % MONTHS_IN_YEAR) + MONTHS_IN_YEAR) % MONTHS_IN_YEAR) {
	        result = addDays(result, -result.getDate());
	    }
	    return result;
	}
	exports.addYears = addYears;
	/**
	 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
	 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} month - The 0-based index of the month to set on the date.
	 * @return {Date} A new Date object with the given month set.
	 */
	function setMonth(date, month) {
	    return addMonths(date, month - date.getMonth());
	}
	exports.setMonth = setMonth;
	/**
	 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
	 * @return {boolean} True if the two dates represent the same date (regardless of time-of-day), false otherwise.
	 */
	function compareDates(date1, date2) {
	    return (date1.getFullYear() === date2.getFullYear()
	        && date1.getMonth() === date2.getMonth()
	        && date1.getDate() === date2.getDate());
	}
	exports.compareDates = compareDates;
	
	//# sourceMappingURL=DateMath.js.map


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(10);
	var KeyCodes_1 = __webpack_require__(15);
	var DateMath_1 = __webpack_require__(94);
	var rtl_1 = __webpack_require__(16);
	var css_1 = __webpack_require__(17);
	var DatePickerMonth = (function (_super) {
	    __extends(DatePickerMonth, _super);
	    function DatePickerMonth(props) {
	        var _this = this;
	        _super.call(this, props);
	        this._selectMonthCallbacks = [];
	        props.strings.shortMonths.map(function (month, index) {
	            _this._selectMonthCallbacks[index] = _this._onSelectMonth.bind(_this, index);
	        });
	        this._onSelectNextYear = this._onSelectNextYear.bind(this);
	        this._onSelectPrevYear = this._onSelectPrevYear.bind(this);
	        this._onSelectMonth = this._onSelectMonth.bind(this);
	    }
	    DatePickerMonth.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, navigatedDate = _a.navigatedDate, strings = _a.strings;
	        return (React.createElement("div", {className: 'ms-DatePicker-monthPicker'}, React.createElement("div", {className: 'ms-DatePicker-header'}, React.createElement("div", {className: 'ms-DatePicker-yearComponents ms-DatePicker-navContainer'}, React.createElement("span", {className: 'ms-DatePicker-prevYear js-prevYear', onClick: this._onSelectPrevYear, onKeyDown: this._onKeyDown.bind(this, this._onSelectPrevYear), tabIndex: 0}, React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--chevronLeft': !rtl_1.getRTL(), 'ms-Icon--chevronRight': rtl_1.getRTL() })})), React.createElement("span", {className: 'ms-DatePicker-nextYear js-nextYear', onClick: this._onSelectNextYear, onKeyDown: this._onKeyDown.bind(this, this._onSelectNextYear), tabIndex: 0}, React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--chevronLeft': rtl_1.getRTL(), 'ms-Icon--chevronRight': !rtl_1.getRTL() })}))), React.createElement("div", {className: 'ms-DatePicker-currentYear js-showYearPicker'}, navigatedDate.getFullYear())), React.createElement(FocusZone_1.FocusZone, null, React.createElement("div", {className: 'ms-DatePicker-optionGrid'}, strings.shortMonths.map(function (month, index) {
	            return (React.createElement("span", {className: 'ms-DatePicker-monthOption', key: index, onClick: _this._selectMonthCallbacks[index], "data-is-focusable": true}, month));
	        })))));
	    };
	    DatePickerMonth.prototype._onKeyDown = function (callback, ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            callback();
	        }
	    };
	    DatePickerMonth.prototype._onSelectNextYear = function () {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.addYears(navigatedDate, 1), false);
	    };
	    ;
	    DatePickerMonth.prototype._onSelectPrevYear = function () {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.addYears(navigatedDate, -1), false);
	    };
	    ;
	    DatePickerMonth.prototype._onSelectMonth = function (newMonth) {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.setMonth(navigatedDate, newMonth), true);
	    };
	    return DatePickerMonth;
	}(React.Component));
	exports.DatePickerMonth = DatePickerMonth;
	
	//# sourceMappingURL=DatePickerMonth.js.map


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DatePicker{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:17px;z-index:300}.ms-DatePicker .ms-TextField{position:relative}.ms-DatePicker .ms-TextField input::-ms-clear{display:none}.ms-DatePicker-picker{color:"[theme:black, default: #000000]";font-size:14px;position:relative;z-index:0}html[dir=ltr] .ms-DatePicker-picker{text-align:left}html[dir=rtl] .ms-DatePicker-picker{text-align:right}.ms-DatePicker-event--with-label{color:"[theme:neutralSecondary, default: #666666]";font-size:21px;line-height:20px;pointer-events:none;position:absolute;z-index:5;top:32px}html[dir=ltr] .ms-DatePicker-event--with-label{right:5px}html[dir=rtl] .ms-DatePicker-event--with-label{left:5px}.ms-DatePicker-event--without-label{color:"[theme:neutralSecondary, default: #666666]";font-size:21px;line-height:20px;pointer-events:none;position:absolute;z-index:5;top:7px}html[dir=ltr] .ms-DatePicker-event--without-label{right:5px}html[dir=rtl] .ms-DatePicker-event--without-label{left:5px}.ms-DatePicker-holder{-webkit-overflow-scrolling:touch;box-sizing:border-box;background:"[theme:white, default: #ffffff]";position:absolute;min-width:300px;display:none}.ms-DatePicker-picker.ms-DatePicker-picker--opened .ms-DatePicker-holder{-webkit-animation-name:fadeIn,slideDownIn10;animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both;box-sizing:border-box;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border:1px solid "[theme:neutralLight, default: #eaeaea]";display:block}.ms-DatePicker-picker--opened{position:relative;z-index:10}.ms-DatePicker-frame{padding:1px}.ms-DatePicker-wrap{margin:-1px;padding:9px}.ms-DatePicker-dayPicker{display:block;margin-bottom:30px}.ms-DatePicker-header{height:40px;line-height:44px}.ms-DatePicker-month,.ms-DatePicker-year{display:inline-block;font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px;color:"[theme:themePrimary, default: #0078d7]";margin-top:-1px}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:"[theme:themeDark, default: #005a9e]";cursor:pointer}html[dir=ltr] .ms-DatePicker-month{margin-left:15px}html[dir=rtl] .ms-DatePicker-month{margin-right:15px}html[dir=ltr] .ms-DatePicker-year{margin-left:15px}html[dir=rtl] .ms-DatePicker-year{margin-right:15px}.ms-DatePicker-table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:inherit}.ms-DatePicker-table td{margin:0;padding:0}.ms-DatePicker-table td:hover{outline:1px solid transparent}.ms-DatePicker-day,.ms-DatePicker-weekday{width:40px;height:40px;padding:0;line-height:40px;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:15px;font-weight:400;color:"[theme:neutralPrimary, default: #333333]"}.ms-DatePicker-day--today{position:relative;background-color:"[theme:themeLight, default: #c7e0f4]"}.ms-DatePicker-day--disabled:before{border-top-color:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-DatePicker-day--outfocus{color:"[theme:neutralTertiary, default: #a6a6a6]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif}.ms-DatePicker-day--infocus:hover,.ms-DatePicker-day--outfocus:hover{cursor:pointer;color:"[theme:black, default: #000000]";background:"[theme:neutralLight, default: #eaeaea]"}.ms-DatePicker-day--highlighted:hover,.ms-DatePicker-picker--focused .ms-DatePicker-day--highlighted{cursor:pointer;color:"[theme:white, default: #ffffff]";background:"[theme:themePrimary, default: #0078d7]"}.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled,.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled:hover{background:"[theme:neutralTertiary, default: #a6a6a6]"}.ms-DatePicker-monthPicker,.ms-DatePicker-yearPicker{display:none}.ms-DatePicker-monthComponents{position:absolute;top:9px}html[dir=ltr] .ms-DatePicker-monthComponents{right:9px}html[dir=rtl] .ms-DatePicker-monthComponents{left:9px}html[dir=ltr] .ms-DatePicker-monthComponents{left:9px}html[dir=rtl] .ms-DatePicker-monthComponents{right:9px}.ms-DatePicker-decadeComponents,.ms-DatePicker-yearComponents{position:absolute}html[dir=ltr] .ms-DatePicker-decadeComponents,html[dir=ltr] .ms-DatePicker-yearComponents{right:10px}html[dir=rtl] .ms-DatePicker-decadeComponents,html[dir=rtl] .ms-DatePicker-yearComponents{left:10px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{width:40px;height:40px;display:block;text-align:center;line-height:40px;text-align:center;font-size:21px;color:"[theme:neutralSecondary, default: #666666]";position:relative;top:3px}html[dir=ltr] .ms-DatePicker-nextDecade,html[dir=ltr] .ms-DatePicker-nextMonth,html[dir=ltr] .ms-DatePicker-nextYear,html[dir=ltr] .ms-DatePicker-prevDecade,html[dir=ltr] .ms-DatePicker-prevMonth,html[dir=ltr] .ms-DatePicker-prevYear{margin-left:10px}html[dir=rtl] .ms-DatePicker-nextDecade,html[dir=rtl] .ms-DatePicker-nextMonth,html[dir=rtl] .ms-DatePicker-nextYear,html[dir=rtl] .ms-DatePicker-prevDecade,html[dir=rtl] .ms-DatePicker-prevMonth,html[dir=rtl] .ms-DatePicker-prevYear{margin-right:10px}.ms-DatePicker-nextDecade:hover,.ms-DatePicker-nextMonth:hover,.ms-DatePicker-nextYear:hover,.ms-DatePicker-prevDecade:hover,.ms-DatePicker-prevMonth:hover,.ms-DatePicker-prevYear:hover{color:"[theme:neutralDark, default: #212121]";cursor:pointer;outline:1px solid transparent}.ms-DatePicker-headerToggleView{height:40px;position:absolute;top:0;width:140px;z-index:5;cursor:pointer}html[dir=ltr] .ms-DatePicker-headerToggleView{left:0}html[dir=rtl] .ms-DatePicker-headerToggleView{right:0}.ms-DatePicker-currentDecade,.ms-DatePicker-currentYear{display:block;font-weight:400;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px;height:40px;line-height:42px}html[dir=ltr] .ms-DatePicker-currentDecade,html[dir=ltr] .ms-DatePicker-currentYear{margin-left:15px}html[dir=rtl] .ms-DatePicker-currentDecade,html[dir=rtl] .ms-DatePicker-currentYear{margin-right:15px}.ms-DatePicker-currentYear{color:"[theme:themePrimary, default: #0078d7]"}.ms-DatePicker-currentYear:hover{color:"[theme:themeDark, default: #005a9e]";cursor:pointer}.ms-DatePicker-optionGrid{position:relative;height:210px;width:280px;margin:10px 0 30px 5px}html[dir=rtl] .ms-DatePicker-optionGrid{margin:10px 5px 30px 0}.ms-DatePicker-monthOption,.ms-DatePicker-yearOption{background-color:"[theme:neutralLighter, default: #f4f4f4]";width:60px;height:60px;line-height:60px;cursor:pointer;margin:0 10px 10px 0;font-weight:400;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:13px;color:"[theme:neutralPrimary, default: #333333]";text-align:center}html[dir=ltr] .ms-DatePicker-monthOption,html[dir=ltr] .ms-DatePicker-yearOption{float:left}html[dir=rtl] .ms-DatePicker-monthOption,html[dir=rtl] .ms-DatePicker-yearOption{float:right}html[dir=rtl] .ms-DatePicker-monthOption,html[dir=rtl] .ms-DatePicker-yearOption{margin:0 0 10px 10px}.ms-DatePicker-monthOption:hover,.ms-DatePicker-yearOption:hover{background-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]";outline:1px solid transparent}.ms-DatePicker-monthOption.is-highlighted,.ms-DatePicker-yearOption.is-highlighted{background-color:"[theme:neutralPrimary, default: #333333]";color:"[theme:white, default: #ffffff]"}.ms-DatePicker-goToday{bottom:9px;color:"[theme:themePrimary, default: #0078d7]";cursor:pointer;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:13px;height:30px;line-height:30px;padding:0 10px;position:absolute}html[dir=ltr] .ms-DatePicker-goToday{right:9px}html[dir=rtl] .ms-DatePicker-goToday{left:9px}.ms-DatePicker-goToday:hover{outline:1px solid transparent}.ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}@media (min-width:460px){.ms-DatePicker-header{height:30px;line-height:28px}.ms-DatePicker-day,.ms-DatePicker-weekday{width:30px;height:30px;line-height:30px;font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px}.ms-DatePicker-monthComponents{width:210px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{font-size:17px;width:30px;height:30px;line-height:29px}.ms-DatePicker-holder{min-width:240px}.ms-DatePicker-month,.ms-DatePicker-year{font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif}.ms-DatePicker-month,.ms-DatePicker-year{font-size:17px;color:"[theme:neutralPrimary, default: #333333]"}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:"[theme:neutralPrimary, default: #333333]";cursor:default}.is-monthPickerVisible .ms-DatePicker-dayPicker{margin:-10px 0;padding:10px 0}.is-monthPickerVisible .ms-DatePicker-dayPicker{box-sizing:border-box;width:220px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-dayPicker{border-right:1px solid "[theme:neutralLight, default: #eaeaea]"}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-dayPicker{border-left:1px solid "[theme:neutralLight, default: #eaeaea]"}.is-monthPickerVisible .ms-DatePicker-holder{width:440px}.is-monthPickerVisible .ms-DatePicker-monthPicker{display:block}.is-monthPickerVisible .ms-DatePicker-monthPicker,.is-monthPickerVisible .ms-DatePicker-yearPicker{top:9px;position:absolute}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-monthPicker,html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-yearPicker{left:238px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-monthPicker,html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-yearPicker{right:238px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-month{margin-left:12px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-month{margin-right:12px}.is-monthPickerVisible .ms-DatePicker-optionGrid{width:200px;height:auto;margin:10px 0 0 0}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-optionGrid{margin:10px 0 0 0}.is-monthPickerVisible .ms-DatePicker-toggleMonthView{display:none}.is-monthPickerVisible .ms-DatePicker-currentDecade,.is-monthPickerVisible .ms-DatePicker-currentYear{font-size:17px;margin:0;height:30px;line-height:26px;padding:0 10px;display:inline-block}.is-monthPickerVisible .ms-DatePicker-monthOption,.is-monthPickerVisible .ms-DatePicker-yearOption{width:40px;height:40px;line-height:40px;font-size:12px;margin:0 10px 10px 0}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-monthOption,html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-yearOption{margin:0 0 10px 10px}.is-monthPickerVisible .ms-DatePicker-monthOption:hover,.is-monthPickerVisible .ms-DatePicker-yearOption:hover{outline:1px solid transparent}.is-monthPickerVisible .ms-DatePicker-goToday{box-sizing:border-box;font-size:12px;height:30px;line-height:30px;padding:0 10px;top:199px;width:210px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-goToday{right:10px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-goToday{left:10px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-goToday{text-align:right}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-goToday{text-align:left}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:block}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}}@media (max-width:459px){.ms-DatePicker.is-pickingMonths .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthPicker{display:block}}.ms-DatePicker-wrap div:focus,.ms-DatePicker-wrap span:focus{outline:1px solid "[theme:themePrimary, default: #0078d7]"}.ms-DatePicker-goToday{width:auto}.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{float:none;display:inline-block}html[dir=ltr] .ms-DatePicker-navContainer{float:right}html[dir=rtl] .ms-DatePicker-navContainer{float:left}');
	
	//# sourceMappingURL=DatePicker.scss.js.map


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(98));
	
	//# sourceMappingURL=DetailsList.js.map


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(99));
	__export(__webpack_require__(100));
	__export(__webpack_require__(134));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var DetailsList_Props_1 = __webpack_require__(100);
	var DetailsHeader_1 = __webpack_require__(101);
	var DetailsRow_1 = __webpack_require__(108);
	var FocusZone_1 = __webpack_require__(10);
	var GroupedList_1 = __webpack_require__(111);
	var List_1 = __webpack_require__(129);
	var withViewport_1 = __webpack_require__(139);
	var object_1 = __webpack_require__(39);
	var css_1 = __webpack_require__(17);
	var index_1 = __webpack_require__(134);
	var EventGroup_1 = __webpack_require__(14);
	var rtl_1 = __webpack_require__(16);
	var KeyCodes_1 = __webpack_require__(15);
	var DragDropHelper_1 = __webpack_require__(140);
	__webpack_require__(141);
	var MIN_COLUMN_WIDTH = 100; // this is the global min width
	var CHECKBOX_WIDTH = 36;
	var GROUP_EXPAND_WIDTH = 36;
	var DEFAULT_INNER_PADDING = 16;
	var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
	var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
	var DetailsList = (function (_super) {
	    __extends(DetailsList, _super);
	    function DetailsList(props) {
	        _super.call(this, props);
	        this._activeRows = {};
	        this._columnOverrides = {};
	        this._onColumnIsSizingChanged = this._onColumnIsSizingChanged.bind(this);
	        this._onColumnResized = this._onColumnResized.bind(this);
	        this._onColumnAutoResized = this._onColumnAutoResized.bind(this);
	        this._onRowDidMount = this._onRowDidMount.bind(this);
	        this._onRowWillUnmount = this._onRowWillUnmount.bind(this);
	        this._onToggleCollapse = this._onToggleCollapse.bind(this);
	        this._onActiveRowChanged = this._onActiveRowChanged.bind(this);
	        this._onHeaderKeyDown = this._onHeaderKeyDown.bind(this);
	        this._onContentKeyDown = this._onContentKeyDown.bind(this);
	        this._onRenderCell = this._onRenderCell.bind(this);
	        this.state = {
	            lastWidth: 0,
	            adjustedColumns: this._getAdjustedColumns(props),
	            layoutMode: props.layoutMode,
	            isSizing: false,
	            isDropping: false
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._selection = props.selection || new index_1.Selection(null, props.getKey);
	        this._selection.setItems(props.items, false);
	        this._dragDropHelper = props.dragDropEvents ? new DragDropHelper_1.DragDropHelper({ selection: this._selection }) : null;
	    }
	    DetailsList.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	        if (this._dragDropHelper) {
	            this._dragDropHelper.dispose();
	        }
	    };
	    DetailsList.prototype.componentDidUpdate = function (prevProps, prevState) {
	        if (this.props.onDidUpdate) {
	            this.props.onDidUpdate(this);
	        }
	    };
	    DetailsList.prototype.componentWillReceiveProps = function (newProps) {
	        var _a = this.props, items = _a.items, setKey = _a.setKey, selectionMode = _a.selectionMode, columns = _a.columns, viewport = _a.viewport;
	        var layoutMode = this.state.layoutMode;
	        var shouldResetSelection = (newProps.setKey !== setKey) || newProps.setKey === undefined;
	        var shouldForceUpdates = false;
	        if (newProps.layoutMode !== this.props.layoutMode) {
	            layoutMode = newProps.layoutMode;
	            this.setState({ layoutMode: layoutMode });
	            shouldForceUpdates = true;
	        }
	        if (newProps.items !== items) {
	            this._selection.setItems(newProps.items, shouldResetSelection);
	        }
	        if (newProps.columns !== columns ||
	            newProps.viewport.width !== viewport.width) {
	            shouldForceUpdates = true;
	        }
	        this._adjustColumns(newProps, true, layoutMode);
	        if (newProps.selectionMode !== selectionMode) {
	            shouldForceUpdates = true;
	        }
	        if (shouldForceUpdates) {
	            this._forceListUpdates();
	        }
	    };
	    DetailsList.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, ariaLabelForListHeader = _a.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, className = _a.className, constrainMode = _a.constrainMode, dragDropEvents = _a.dragDropEvents, groups = _a.groups, groupProps = _a.groupProps, items = _a.items, isHeaderVisible = _a.isHeaderVisible, onItemInvoked = _a.onItemInvoked, onColumnHeaderClick = _a.onColumnHeaderClick, onColumnHeaderContextMenu = _a.onColumnHeaderContextMenu, selectionMode = _a.selectionMode, ariaLabel = _a.ariaLabel, ariaLabelForGrid = _a.ariaLabelForGrid, rowElementEventMap = _a.rowElementEventMap, _b = _a.shouldApplyApplicationRole, shouldApplyApplicationRole = _b === void 0 ? false : _b;
	        var _c = this.state, adjustedColumns = _c.adjustedColumns, isCollapsed = _c.isCollapsed, layoutMode = _c.layoutMode, isSizing = _c.isSizing;
	        var _d = this, selection = _d._selection, dragDropHelper = _d._dragDropHelper;
	        var groupNestingDepth = this._getGroupNestingDepth();
	        var additionalListProps = {
	            renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD,
	            renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND
	        };
	        return (
	        // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
	        // with JAWS.
	        React.createElement("div", {ref: 'root', className: css_1.css('ms-DetailsList', className, {
	            'is-fixed': layoutMode === DetailsList_Props_1.DetailsListLayoutMode.fixedColumns,
	            'is-horizontalConstrained': constrainMode === DetailsList_Props_1.ConstrainMode.horizontalConstrained
	        }), "data-automationid": 'DetailsList', "data-is-scrollable": 'false', "aria-label": ariaLabel, role: shouldApplyApplicationRole ? 'application' : ''}, React.createElement("div", {ref: 'headerContainer', onKeyDown: this._onHeaderKeyDown, role: 'grid', "aria-label": ariaLabelForGrid}, isHeaderVisible && (React.createElement(DetailsHeader_1.DetailsHeader, {ref: 'header', selectionMode: selectionMode, layoutMode: layoutMode, selection: selection, columns: adjustedColumns, onColumnClick: onColumnHeaderClick, onColumnContextMenu: onColumnHeaderContextMenu, onColumnResized: this._onColumnResized, onColumnIsSizingChanged: this._onColumnIsSizingChanged, onColumnAutoResized: this._onColumnAutoResized, groupNestingDepth: groupNestingDepth, isAllCollapsed: isCollapsed, onToggleCollapseAll: this._onToggleCollapse, ariaLabel: ariaLabelForListHeader, ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox}))), React.createElement("div", {ref: 'contentContainer', onKeyDown: this._onContentKeyDown}, React.createElement(FocusZone_1.FocusZone, {ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.vertical, isInnerZoneKeystroke: function (ev) { return (ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)); }, onActiveElementChanged: this._onActiveRowChanged}, React.createElement(index_1.SelectionZone, {selection: selection, selectionMode: selectionMode, onItemInvoked: onItemInvoked}, groups ? (React.createElement(GroupedList_1.GroupedList, {groups: groups, groupProps: groupProps, items: items, onRenderCell: this._onRenderCell, selection: selection, selectionMode: selectionMode, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, ref: 'groups'})) : (React.createElement(List_1.List, React.__spread({items: items, onRenderCell: function (item, itemIndex) { return _this._onRenderCell(0, item, itemIndex); }}, additionalListProps, {ref: 'list'}))))))));
	    };
	    DetailsList.prototype.forceUpdate = function () {
	        _super.prototype.forceUpdate.call(this);
	        this._forceListUpdates();
	    };
	    DetailsList.prototype._onRenderCell = function (nestingDepth, item, index) {
	        var _a = this.props, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.rowElementEventMap, onRenderMissingItem = _a.onRenderMissingItem, onRenderItemColumn = _a.onRenderItemColumn, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, canSelectItem = _a.canSelectItem, checkButtonAriaLabel = _a.checkButtonAriaLabel;
	        var selection = this._selection;
	        var dragDropHelper = this._dragDropHelper;
	        var columns = this.state.adjustedColumns;
	        if (!item) {
	            if (onRenderMissingItem) {
	                onRenderMissingItem(index);
	            }
	            return null;
	        }
	        return (React.createElement(DetailsRow_1.DetailsRow, {item: item, itemIndex: index, columns: columns, groupNestingDepth: nestingDepth, selectionMode: selectionMode, selection: selection, onDidMount: this._onRowDidMount, onWillUnmount: this._onRowWillUnmount, onRenderItemColumn: onRenderItemColumn, eventsToRegister: eventsToRegister, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, viewport: viewport, checkboxVisibility: checkboxVisibility, getRowAriaLabel: getRowAriaLabel, canSelectItem: canSelectItem, checkButtonAriaLabel: checkButtonAriaLabel}));
	    };
	    DetailsList.prototype._onColumnIsSizingChanged = function (column, isSizing) {
	        this.setState({ isSizing: isSizing });
	    };
	    DetailsList.prototype._onHeaderKeyDown = function (ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.down) {
	            if (this.refs.focusZone.focus()) {
	                ev.preventDefault();
	                ev.stopPropagation();
	            }
	        }
	    };
	    DetailsList.prototype._onContentKeyDown = function (ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.up) {
	            if (this.refs.header.focus()) {
	                ev.preventDefault();
	                ev.stopPropagation();
	            }
	        }
	    };
	    DetailsList.prototype._getGroupNestingDepth = function () {
	        var groups = this.props.groups;
	        var level = 0;
	        var groupsInLevel = groups;
	        while (groupsInLevel && groupsInLevel.length > 0) {
	            level++;
	            groupsInLevel = groupsInLevel[0].children;
	        }
	        return level;
	    };
	    DetailsList.prototype._onRowDidMount = function (row) {
	        var onRowDidMount = this.props.onRowDidMount;
	        var index = row.props.itemIndex;
	        this._activeRows[index] = row; // this is used for column auto resize
	        if (onRowDidMount) {
	            onRowDidMount(row.props.item, index);
	        }
	    };
	    DetailsList.prototype._onRowWillUnmount = function (row) {
	        var onRowWillUnmount = this.props.onRowWillUnmount;
	        var index = row.props.itemIndex;
	        delete this._activeRows[index];
	        this._events.off(row.refs.root);
	        if (onRowWillUnmount) {
	            onRowWillUnmount(row.props.item, index);
	        }
	    };
	    DetailsList.prototype._onToggleCollapse = function (collapsed) {
	        this.setState({
	            isCollapsed: collapsed
	        });
	        this.forceUpdate();
	    };
	    DetailsList.prototype._forceListUpdates = function () {
	        if (this.refs.groups) {
	            this.refs.groups.forceUpdate();
	        }
	        if (this.refs.list) {
	            this.refs.list.forceUpdate();
	        }
	    };
	    DetailsList.prototype._adjustColumns = function (newProps, forceUpdate, layoutMode) {
	        var adjustedColumns = this._getAdjustedColumns(newProps, forceUpdate, layoutMode);
	        var viewportWidth = this.props.viewport.width;
	        if (adjustedColumns) {
	            this.setState({
	                adjustedColumns: adjustedColumns,
	                lastWidth: viewportWidth,
	                layoutMode: layoutMode
	            });
	        }
	    };
	    /** Returns adjusted columns, given the viewport size and layout mode. */
	    DetailsList.prototype._getAdjustedColumns = function (newProps, forceUpdate, layoutMode) {
	        var _this = this;
	        var newColumns = newProps.columns, newItems = newProps.items, viewportWidth = newProps.viewport.width, selectionMode = newProps.selectionMode;
	        if (layoutMode === undefined) {
	            layoutMode = newProps.layoutMode;
	        }
	        var columns = this.props ? this.props.columns : [];
	        var lastWidth = this.state ? this.state.lastWidth : -1;
	        var lastSelectionMode = this.state ? this.state.lastSelectionMode : undefined;
	        if (viewportWidth !== undefined) {
	            if (!forceUpdate &&
	                lastWidth === viewportWidth &&
	                lastSelectionMode === selectionMode &&
	                (!columns || newColumns === columns)) {
	                return;
	            }
	        }
	        else {
	            viewportWidth = this.props.viewport.width;
	        }
	        newColumns = newColumns || buildColumns(newItems);
	        var adjustedColumns;
	        if (layoutMode === DetailsList_Props_1.DetailsListLayoutMode.fixedColumns) {
	            adjustedColumns = this._getFixedColumns(newColumns);
	        }
	        else {
	            adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth);
	        }
	        // Preserve adjusted column calculated widths.
	        adjustedColumns.forEach(function (column) {
	            var overrides = _this._columnOverrides[column.key] = _this._columnOverrides[column.key] || {};
	            overrides.calculatedWidth = column.calculatedWidth;
	        });
	        return adjustedColumns;
	    };
	    /** Builds a set of columns based on the given columns mixed with the current overrides. */
	    DetailsList.prototype._getFixedColumns = function (newColumns) {
	        var _this = this;
	        return newColumns.map(function (column) {
	            var newColumn = object_1.assign({}, column, _this._columnOverrides[column.key]);
	            if (!newColumn.calculatedWidth) {
	                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
	            }
	            return newColumn;
	        });
	    };
	    /** Builds a set of columns to fix within the viewport width. */
	    DetailsList.prototype._getJustifiedColumns = function (newColumns, viewportWidth) {
	        var _a = this.props, selectionMode = _a.selectionMode, groups = _a.groups;
	        var outerPadding = DEFAULT_INNER_PADDING;
	        var rowCheckWidth = (selectionMode !== index_1.SelectionMode.none) ? CHECKBOX_WIDTH : 0;
	        var groupExpandWidth = groups ? GROUP_EXPAND_WIDTH : 0;
	        var totalWidth = 0; // offset because we have one less inner padding.
	        var availableWidth = viewportWidth - outerPadding - rowCheckWidth - groupExpandWidth;
	        var adjustedColumns = newColumns.map(function (column, i) {
	            var newColumn = object_1.assign({}, column, {
	                calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH
	            });
	            totalWidth += newColumn.calculatedWidth + (i > 0 ? DEFAULT_INNER_PADDING : 0);
	            return newColumn;
	        });
	        var lastIndex = adjustedColumns.length - 1;
	        // Remove collapsable columns.
	        while (lastIndex > 1 && totalWidth > availableWidth) {
	            var column = adjustedColumns[lastIndex];
	            if (column.isCollapsable) {
	                totalWidth -= column.calculatedWidth + DEFAULT_INNER_PADDING;
	                adjustedColumns.splice(lastIndex, 1);
	            }
	            lastIndex--;
	        }
	        // Then expand columns starting at the beginning, until we've filled the width.
	        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
	            var column = adjustedColumns[i];
	            var maxWidth = column.maxWidth;
	            var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
	            var spaceLeft = availableWidth - totalWidth;
	            var increment = Math.min(spaceLeft, maxWidth - minWidth);
	            // Add remaining space to the last column.
	            if (i === (adjustedColumns.length - 1)) {
	                increment = spaceLeft;
	            }
	            column.calculatedWidth += increment;
	            totalWidth += increment;
	        }
	        // Mark the last column as not resizable to avoid extra scrolling issues.
	        if (adjustedColumns.length) {
	            adjustedColumns[adjustedColumns.length - 1].isResizable = false;
	        }
	        return adjustedColumns;
	    };
	    DetailsList.prototype._onColumnResized = function (resizingColumn, newWidth) {
	        this._columnOverrides[resizingColumn.key].calculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
	        this._adjustColumns(this.props, true, DetailsList_Props_1.DetailsListLayoutMode.fixedColumns);
	        this._forceListUpdates();
	    };
	    /**
	     * Callback function when double clicked on the details header column resizer
	     * which will measure the column cells of all the active rows and resize the
	     * column to the max cell width.
	     *
	     * @private
	     * @param {IColumn} column (double clicked column definition)
	     * @param {number} columnIndex (double clicked column index)
	     * @todo min width 100 should be changed to const value and should be consistent with the value used on _onSizerMove method in DetailsHeader
	     */
	    DetailsList.prototype._onColumnAutoResized = function (column, columnIndex) {
	        var _this = this;
	        var max = 0;
	        var count = 0;
	        var totalCount = Object.keys(this._activeRows).length;
	        for (var key in this._activeRows) {
	            if (this._activeRows.hasOwnProperty(key)) {
	                var currentRow = this._activeRows[key];
	                currentRow.measureCell(columnIndex, function (width) {
	                    max = Math.max(max, width);
	                    count++;
	                    if (count === totalCount) {
	                        _this._onColumnResized(column, max);
	                    }
	                });
	            }
	        }
	    };
	    /**
	     * Call back function when an element in FocusZone becomes active. It will transalate it into item
	     * and call onActiveItemChanged callback if specified.
	     *
	     * @private
	     * @param {el} row element that became active in Focus Zone
	     * @param {ev} focus event from Focus Zone
	     */
	    DetailsList.prototype._onActiveRowChanged = function (el, ev) {
	        var _a = this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
	        if (!onActiveItemChanged || !el) {
	            return;
	        }
	        var index = Number(el.getAttribute('data-item-index'));
	        if (index >= 0) {
	            onActiveItemChanged(items[index], index, ev);
	        }
	    };
	    ;
	    DetailsList.defaultProps = {
	        layoutMode: DetailsList_Props_1.DetailsListLayoutMode.justified,
	        selectionMode: index_1.SelectionMode.multiple,
	        constrainMode: DetailsList_Props_1.ConstrainMode.horizontalConstrained,
	        checkboxVisibility: DetailsList_Props_1.CheckboxVisibility.onHover,
	        isHeaderVisible: true
	    };
	    DetailsList = __decorate([
	        withViewport_1.withViewport
	    ], DetailsList);
	    return DetailsList;
	}(React.Component));
	exports.DetailsList = DetailsList;
	function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
	    var columns = [];
	    if (items && items.length) {
	        var firstItem = items[0];
	        var isFirstColumn = true;
	        for (var propName in firstItem) {
	            if (firstItem.hasOwnProperty(propName)) {
	                columns.push({
	                    key: propName,
	                    name: propName,
	                    fieldName: propName,
	                    minWidth: MIN_COLUMN_WIDTH,
	                    maxWidth: 300,
	                    isCollapsable: !!columns.length,
	                    isMultiline: (isMultiline === undefined) ? false : isMultiline,
	                    isSorted: sortedColumnKey === propName,
	                    isSortedDescending: !!isSortedDescending,
	                    isRowHeader: false,
	                    columnActionsMode: DetailsList_Props_1.ColumnActionsMode.clickable,
	                    isResizable: canResizeColumns,
	                    onColumnClick: onColumnClick,
	                    isGrouped: groupedColumnKey === propName
	                });
	                isFirstColumn = false;
	            }
	        }
	    }
	    return columns;
	}
	exports.buildColumns = buildColumns;
	
	//# sourceMappingURL=DetailsList.js.map


/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Enum to describe how a particular column header behaves.... This enum is used to
	 * to specify the property IColumn:columnActionsMode.
	 * If IColumn:columnActionsMode is undefined, then it's equivalent to ColumnActionsMode.clickable
	 */
	(function (ColumnActionsMode) {
	    /**
	     * Renders the column header as disabled.
	     */
	    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
	    /**
	     * Renders the column header is clickable.
	     */
	    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
	    /**
	     * Renders the column header ias clickable and displays the dropdown cheveron.
	     */
	    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
	})(exports.ColumnActionsMode || (exports.ColumnActionsMode = {}));
	var ColumnActionsMode = exports.ColumnActionsMode;
	(function (ConstrainMode) {
	    /** If specified, lets the content grow which allows the page to manage scrolling. */
	    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
	    /**
	     * If specified, constrains the list to the given layout space.
	     */
	    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
	})(exports.ConstrainMode || (exports.ConstrainMode = {}));
	var ConstrainMode = exports.ConstrainMode;
	(function (DetailsListLayoutMode) {
	    /**
	     * Lets the user resize columns and makes not attempt to fit them.
	     */
	    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
	    /**
	     * Manages which columns are visible, tries to size them according to their min/max rules and drops
	     * off columns that can't fit and have isCollapsable set.
	     */
	    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
	})(exports.DetailsListLayoutMode || (exports.DetailsListLayoutMode = {}));
	var DetailsListLayoutMode = exports.DetailsListLayoutMode;
	(function (CheckboxVisibility) {
	    /**
	     * Visible on hover.
	     */
	    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
	    /**
	     * Visible always.
	     */
	    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
	})(exports.CheckboxVisibility || (exports.CheckboxVisibility = {}));
	var CheckboxVisibility = exports.CheckboxVisibility;
	
	//# sourceMappingURL=DetailsList.Props.js.map


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DetailsList_Props_1 = __webpack_require__(100);
	var FocusZone_1 = __webpack_require__(10);
	var Check_1 = __webpack_require__(102);
	var GroupSpacer_1 = __webpack_require__(104);
	var css_1 = __webpack_require__(17);
	var interfaces_1 = __webpack_require__(106);
	var rtl_1 = __webpack_require__(16);
	var EventGroup_1 = __webpack_require__(14);
	__webpack_require__(107);
	var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
	var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
	var INNER_PADDING = 16;
	var DetailsHeader = (function (_super) {
	    __extends(DetailsHeader, _super);
	    function DetailsHeader(props) {
	        _super.call(this, props);
	        this._events = new EventGroup_1.EventGroup(this);
	        this.state = {
	            columnResizeDetails: null,
	            groupNestingDepth: this.props.groupNestingDepth,
	            isAllCollapsed: this.props.isAllCollapsed
	        };
	        this._onToggleCollapseAll = this._onToggleCollapseAll.bind(this);
	        this._onSelectAllClicked = this._onSelectAllClicked.bind(this);
	    }
	    DetailsHeader.prototype.componentDidMount = function () {
	        var selection = this.props.selection;
	        this._events.on(selection, interfaces_1.SELECTION_CHANGE, this._onSelectionChanged);
	    };
	    DetailsHeader.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    DetailsHeader.prototype.componentWillReceiveProps = function (newProps) {
	        var groupNestingDepth = this.state.groupNestingDepth;
	        if (newProps.groupNestingDepth !== groupNestingDepth) {
	            this.setState({ groupNestingDepth: newProps.groupNestingDepth });
	        }
	    };
	    DetailsHeader.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, selectionMode = _a.selectionMode, columns = _a.columns, ariaLabel = _a.ariaLabel, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox;
	        var _b = this.state, isAllSelected = _b.isAllSelected, columnResizeDetails = _b.columnResizeDetails, isSizing = _b.isSizing, groupNestingDepth = _b.groupNestingDepth, isAllCollapsed = _b.isAllCollapsed;
	        return (React.createElement("div", {role: 'row', "aria-label": ariaLabel, className: css_1.css('ms-DetailsHeader', {
	            'is-allSelected': isAllSelected,
	            'is-singleSelect': selectionMode === interfaces_1.SelectionMode.single,
	            'is-resizingColumn': !!columnResizeDetails && isSizing
	        }), onMouseMove: this._onMove.bind(this), onMouseUp: this._onUp.bind(this), ref: 'root', "data-automationid": 'DetailsHeader'}, React.createElement(FocusZone_1.FocusZone, {ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.horizontal}, (selectionMode === interfaces_1.SelectionMode.multiple) ? (React.createElement("div", {className: 'ms-DetailsHeader-cellWrapper', role: 'columnheader'}, React.createElement("button", {className: 'ms-DetailsHeader-cell is-check', onClick: this._onSelectAllClicked, "aria-label": ariaLabelForSelectAllCheckbox, "aria-pressed": isAllSelected}, React.createElement(Check_1.Check, {isChecked: isAllSelected})))) : (null), groupNestingDepth > 0 ? (React.createElement("button", {className: 'ms-DetailsHeader-cell', onClick: this._onToggleCollapseAll}, React.createElement("i", {className: css_1.css('ms-DetailsHeader-collapseButton ms-Icon ms-Icon--chevronDown', {
	            'is-collapsed': isAllCollapsed
	        })}))) : (null), GroupSpacer_1.GroupSpacer({ count: groupNestingDepth - 1 }), columns.map(function (column, columnIndex) { return (React.createElement("div", {key: column.key, className: 'ms-DetailsHeader-cellSizeWrapper'}, React.createElement("div", {className: 'ms-DetailsHeader-cellWrapper', role: 'columnheader'}, React.createElement("button", {key: column.fieldName, disabled: column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.disabled, className: css_1.css('ms-DetailsHeader-cell', {
	            'is-actionable': column.columnActionsMode !== DetailsList_Props_1.ColumnActionsMode.disabled,
	            'is-empty': !column.name,
	            'is-icon-visible': column.isSorted || column.isGrouped || column.isFiltered
	        }), style: { width: column.calculatedWidth + INNER_PADDING }, onClick: _this._onColumnClick.bind(_this, column), onContextMenu: _this._onColumnContextMenu.bind(_this, column), "aria-haspopup": column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.hasDropdown, "aria-label": column.ariaLabel || column.name, "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "data-automationid": 'ColumnsHeaderColumn'}, column.isGrouped && (React.createElement("i", {className: 'ms-Icon ms-Icon--listGroup2'})), column.isSorted && (React.createElement("i", {className: css_1.css('ms-Icon', {
	            'ms-Icon--arrowUp2': !column.isSortedDescending,
	            'ms-Icon--arrowDown2': column.isSortedDescending
	        })})), column.isFiltered && (React.createElement("i", {className: 'ms-Icon ms-Icon--filter'})), column.iconClassName && (React.createElement("i", {className: 'ms-Icon ' + column.iconClassName})), column.name, column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.hasDropdown && (React.createElement("i", {className: 'ms-DetailsHeader-filterChevron ms-Icon ms-Icon--chevronDown'})))), (column.isResizable) ? (React.createElement("div", {className: css_1.css('ms-DetailsHeader-cell is-sizer', {
	            'is-resizing': columnResizeDetails && columnResizeDetails.columnIndex === columnIndex && isSizing
	        }), onMouseDown: _this._onSizerDown.bind(_this, columnIndex), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex)})) : (null))); }))));
	    };
	    /** Set focus to the active thing in the focus area. */
	    DetailsHeader.prototype.focus = function () {
	        return this.refs.focusZone.focus();
	    };
	    /**
	     * double click on the column sizer will auto ajust column width
	     * to fit the longest content among current rendered rows.
	     *
	     * @private
	     * @param {number} columnIndex (index of the column user double clicked)
	     * @param {React.MouseEvent} ev (mouse double click event)
	     */
	    DetailsHeader.prototype._onSizerDoubleClick = function (columnIndex, ev) {
	        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, columns = _a.columns;
	        if (onColumnAutoResized) {
	            onColumnAutoResized(columns[columnIndex], columnIndex);
	        }
	    };
	    /**
	     * Called when the select all toggle is clicked.
	     */
	    DetailsHeader.prototype._onSelectAllClicked = function () {
	        var selection = this.props.selection;
	        selection.toggleAllSelected();
	    };
	    /**
	     * mouse move event handler in the header
	     * it will set isSizing state to true when user clicked on the sizer and move the mouse.
	     *
	     * @private
	     * @param {React.MouseEvent} ev (mouse move event)
	     */
	    DetailsHeader.prototype._onMove = function (ev) {
	        var _a = ev.buttons, buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
	        var _b = this.props, onColumnIsSizingChanged = _b.onColumnIsSizingChanged, columns = _b.columns;
	        var _c = this.state, columnResizeDetails = _c.columnResizeDetails, isSizing = _c.isSizing;
	        if (columnResizeDetails) {
	            if (buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
	                // cancel mouse down event and return early when the primary button is not pressed
	                this._onUp(ev);
	                return;
	            }
	            if (!isSizing && ev.clientX !== columnResizeDetails.originX) {
	                isSizing = true;
	                this._events.on(window, 'mousemove', this._onSizerMove, true);
	                this._events.on(window, 'mouseup', this._onSizerUp, true);
	                this.setState({ isSizing: isSizing });
	                if (onColumnIsSizingChanged) {
	                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
	                }
	            }
	        }
	    };
	    /**
	     * mouse up event handler in the header
	     * clear the resize related state.
	     * This is to ensure we can catch double click event
	     *
	     * @private
	     * @param {React.MouseEvent} ev (mouse up event)
	     */
	    DetailsHeader.prototype._onUp = function (ev) {
	        this.setState({
	            columnResizeDetails: null,
	            isSizing: false
	        });
	    };
	    DetailsHeader.prototype._onSizerDown = function (columnIndex, ev) {
	        if (ev.button !== MOUSEDOWN_PRIMARY_BUTTON) {
	            // Ignore anything except the primary button.
	            return;
	        }
	        var columns = this.props.columns;
	        this.setState({
	            columnResizeDetails: {
	                columnIndex: columnIndex,
	                columnMinWidth: columns[columnIndex].calculatedWidth,
	                originX: ev.clientX
	            }
	        });
	    };
	    DetailsHeader.prototype._onSelectionChanged = function () {
	        var isAllSelected = this.props.selection.isAllSelected();
	        if (this.state.isAllSelected !== isAllSelected) {
	            this.setState({
	                isAllSelected: isAllSelected
	            });
	        }
	    };
	    DetailsHeader.prototype._onSizerMove = function (ev) {
	        var _a = ev.buttons, buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
	        var columnResizeDetails = this.state.columnResizeDetails;
	        if (columnResizeDetails) {
	            if (buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
	                // cancel mouse down event and return early when the primary button is not pressed
	                this._onSizerUp();
	                return;
	            }
	            var _b = this.props, onColumnResized = _b.onColumnResized, columns = _b.columns;
	            if (onColumnResized) {
	                var movement = ev.clientX - columnResizeDetails.originX;
	                if (rtl_1.getRTL()) {
	                    movement = -movement;
	                }
	                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement);
	            }
	        }
	    };
	    DetailsHeader.prototype._onSizerUp = function () {
	        var _a = this.props, columns = _a.columns, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
	        var columnResizeDetails = this.state.columnResizeDetails;
	        this._events.off(window);
	        this.setState({
	            columnResizeDetails: null,
	            isSizing: false
	        });
	        if (onColumnIsSizingChanged) {
	            onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
	        }
	    };
	    DetailsHeader.prototype._onColumnClick = function (column, ev) {
	        var onColumnClick = this.props.onColumnClick;
	        if (column.onColumnClick) {
	            column.onColumnClick(column, ev);
	        }
	        if (onColumnClick) {
	            onColumnClick(column, ev);
	        }
	    };
	    DetailsHeader.prototype._onColumnContextMenu = function (column, ev) {
	        var onColumnContextMenu = this.props.onColumnContextMenu;
	        if (column.onContextMenu) {
	            column.onColumnContextMenu(column, ev);
	        }
	        if (onColumnContextMenu) {
	            onColumnContextMenu(column, ev);
	        }
	    };
	    DetailsHeader.prototype._onToggleCollapseAll = function () {
	        var onToggleCollapseAll = this.props.onToggleCollapseAll;
	        var newCollapsed = !this.state.isAllCollapsed;
	        this.setState({
	            isAllCollapsed: newCollapsed
	        });
	        if (onToggleCollapseAll) {
	            onToggleCollapseAll(newCollapsed);
	        }
	    };
	    return DetailsHeader;
	}(React.Component));
	exports.DetailsHeader = DetailsHeader;
	
	//# sourceMappingURL=DetailsHeader.js.map


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(103);
	var Check = (function (_super) {
	    __extends(Check, _super);
	    function Check() {
	        _super.apply(this, arguments);
	    }
	    Check.prototype.shouldComponentUpdate = function (newProps) {
	        return this.props.isChecked !== newProps.isChecked;
	    };
	    Check.prototype.render = function () {
	        var isChecked = this.props.isChecked;
	        return (React.createElement("svg", {focusable: 'false', className: css_1.css('ms-Check', {
	            'is-checked': isChecked
	        }), height: '20', width: '20'}, React.createElement("circle", {className: 'ms-Check-circle', cx: '10', cy: '10', r: '9', strokeWidth: '1'}), React.createElement("polyline", {className: 'ms-Check-check', points: '6.3,10.3 9,13 13.3,7.5', strokeWidth: '1.5', fill: 'none'})));
	    };
	    Check.defaultProps = {
	        isChecked: false
	    };
	    return Check;
	}(React.Component));
	exports.Check = Check;
	
	//# sourceMappingURL=Check.js.map


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Check{display:inline-block;cursor:default;line-height:0;vertical-align:top}.ms-Check.is-checked .ms-Check-circle{fill:"[theme:themePrimary, default: #0078d7]";stroke:"[theme:white, default: #ffffff]";stroke-width:1px}.ms-Check.is-checked .ms-Check-check{stroke:"[theme:white, default: #ffffff]"}.ms-Check-circle{fill:"[theme:white, default: #ffffff]";stroke:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Check-check{stroke:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}');
	
	//# sourceMappingURL=Check.scss.js.map


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	__webpack_require__(105);
	var SPACER_WIDTH = 36;
	exports.GroupSpacer = function (props) {
	    return props.count > 0 && React.createElement("span", {className: 'ms-GroupSpacer', style: { width: props.count * SPACER_WIDTH }});
	};
	
	//# sourceMappingURL=GroupSpacer.js.map


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-GroupSpacer{display:inline-block}');
	
	//# sourceMappingURL=GroupSpacer.scss.js.map


/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";
	exports.SELECTION_CHANGE = 'change';
	(function (SelectionMode) {
	    SelectionMode[SelectionMode["none"] = 0] = "none";
	    SelectionMode[SelectionMode["single"] = 1] = "single";
	    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
	})(exports.SelectionMode || (exports.SelectionMode = {}));
	var SelectionMode = exports.SelectionMode;
	(function (SelectionDirection) {
	    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
	    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
	})(exports.SelectionDirection || (exports.SelectionDirection = {}));
	var SelectionDirection = exports.SelectionDirection;
	
	//# sourceMappingURL=interfaces.js.map


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DetailsHeader{display:inline-block;min-width:100%;height:36px;line-height:36px;white-space:nowrap;padding-bottom:1px;border-bottom:1px solid "[theme:neutralLight, default: #eaeaea]";cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html[dir=ltr] .ms-DetailsHeader.is-singleSelect{padding-left:40px}html[dir=rtl] .ms-DetailsHeader.is-singleSelect{padding-right:40px}.ms-DetailsHeader-cell.is-check .ms-Check-circle{visibility:hidden}.ms-DetailsHeader-cell.is-check:hover .ms-Check-circle,.ms-DetailsHeader.is-allSelected .ms-Check-circle{visibility:visible}.ms-DetailsHeader-cellWrapper{display:inline-block;position:relative}.ms-DetailsHeader-cellSizeWrapper{display:inline-block;vertical-align:top}.ms-DetailsHeader-cell{color:"[theme:neutralTertiaryAlt, default: #c8c8c8]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;position:relative;display:inline-block;box-sizing:border-box;padding:0 8px;border:none;line-height:inherit;margin:0;height:36px;vertical-align:top;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ms-Fabric .ms-DetailsHeader-cell::-moz-focus-inner{border:0}.ms-Fabric .ms-DetailsHeader-cell{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-DetailsHeader-cell:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}html[dir=ltr] .ms-DetailsHeader-cell{text-align:left}html[dir=rtl] .ms-DetailsHeader-cell{text-align:right}html[dir=ltr] .ms-DetailsHeader-cell{text-align:left}html[dir=rtl] .ms-DetailsHeader-cell{text-align:right}.ms-DetailsHeader-cell.is-check{position:relative;padding:8px;margin:0}.ms-DetailsHeader-cell.is-actionable{color:"[theme:neutralSecondary, default: #666666]"}.ms-DetailsHeader-cell.is-actionable:hover{color:"[theme:neutralPrimary, default: #333333]";background:"[theme:neutralLighterAlt, default: #f8f8f8]"}.ms-DetailsHeader-cell.is-actionable:active{background:"[theme:neutralLight, default: #eaeaea]"}.ms-DetailsHeader-cell.is-sizer{position:absolute;width:16px;cursor:ew-resize;bottom:0;top:0;height:inherit;z-index:99;background:0 0}html[dir=ltr] .ms-DetailsHeader-cell.is-sizer{margin-left:-10px}html[dir=rtl] .ms-DetailsHeader-cell.is-sizer{margin-right:-10px}.ms-DetailsHeader-cell.is-empty{text-overflow:clip}.ms-DetailsHeader-cell.is-sizer:after{content:\'\';position:absolute;left:50%;top:0;bottom:0;width:1px;background:"[theme:neutralTertiaryAlt, default: #c8c8c8]";opacity:0}.ms-DetailsHeader-cell.is-sizer.is-resizing:after,.ms-DetailsHeader-cell.is-sizer:hover:after{opacity:1;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.ms-DetailsHeader-collapseButton{text-align:center;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;width:20px;outline:0}.ms-DetailsHeader-collapseButton.is-collapsed{-webkit-transform:rotate(0);transform:rotate(0)}.ms-DetailsHeader-isSortedDescending{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.ms-DetailsHeader-cell .ms-Icon{color:"[theme:neutralSecondary, default: #666666]"}html[dir=ltr] .ms-DetailsHeader-cell .ms-Icon{padding-right:5px}html[dir=rtl] .ms-DetailsHeader-cell .ms-Icon{padding-left:5px}.ms-DetailsHeader-cell .ms-DetailsHeader-filterChevron.ms-Icon{color:"[theme:neutralTertiary, default: #a6a6a6]";vertical-align:middle}html[dir=ltr] .ms-DetailsHeader-cell .ms-DetailsHeader-filterChevron.ms-Icon{padding-left:4px}html[dir=rtl] .ms-DetailsHeader-cell .ms-DetailsHeader-filterChevron.ms-Icon{padding-right:4px}html[dir=ltr] .ms-DetailsHeader-cell .ms-DetailsHeader-collapseButton.ms-Icon{padding-right:0}html[dir=rtl] .ms-DetailsHeader-cell .ms-DetailsHeader-collapseButton.ms-Icon{padding-left:0}');
	
	//# sourceMappingURL=DetailsHeader.scss.js.map


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DetailsList_Props_1 = __webpack_require__(100);
	var Check_1 = __webpack_require__(102);
	var GroupSpacer_1 = __webpack_require__(104);
	var DetailsRowFields_1 = __webpack_require__(109);
	var FocusZone_1 = __webpack_require__(10);
	var interfaces_1 = __webpack_require__(106);
	var EventGroup_1 = __webpack_require__(14);
	var object_1 = __webpack_require__(39);
	var css_1 = __webpack_require__(17);
	__webpack_require__(110);
	var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
	var DetailsRow = (function (_super) {
	    __extends(DetailsRow, _super);
	    function DetailsRow(props) {
	        _super.call(this, props);
	        this.state = {
	            selectionState: this._getSelectionState(props),
	            columnMeasureInfo: null,
	            isDropping: false,
	            groupNestingDepth: props.groupNestingDepth
	        };
	        this._hasSetFocus = false;
	        this._events = new EventGroup_1.EventGroup(this);
	        this._droppingClassNames = '';
	        this._updateDroppingState = this._updateDroppingState.bind(this);
	    }
	    DetailsRow.prototype.componentDidMount = function () {
	        var dragDropHelper = this.props.dragDropHelper;
	        if (dragDropHelper) {
	            dragDropHelper.subscribe(this.refs.root, this._events, this._getRowDragDropOptions());
	        }
	        this._events.on(this.props.selection, interfaces_1.SELECTION_CHANGE, this._onSelectionChanged);
	        if (this.props.onDidMount && this.props.item) {
	            // If the item appears later, we should wait for it before calling this method.
	            this._hasMounted = true;
	            this.props.onDidMount(this);
	        }
	    };
	    DetailsRow.prototype.componentDidUpdate = function () {
	        var state = this.state;
	        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
	        var columnMeasureInfo = state.columnMeasureInfo;
	        if (columnMeasureInfo && columnMeasureInfo.index >= 0) {
	            var newWidth = this.refs.cellMeasurer.getBoundingClientRect().width;
	            columnMeasureInfo.onMeasureDone(newWidth);
	            this.setState({
	                columnMeasureInfo: null
	            });
	        }
	        if (item && onDidMount && !this._hasMounted) {
	            this._hasMounted = true;
	            onDidMount(this);
	        }
	    };
	    DetailsRow.prototype.componentWillUnmount = function () {
	        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount, dragDropHelper = _a.dragDropHelper;
	        this._events.dispose();
	        // Only call the onWillUnmount callback if we have an item.
	        if (onWillUnmount && item) {
	            onWillUnmount(this);
	        }
	        if (dragDropHelper) {
	            dragDropHelper.unsubscribe(this.refs.root, this._dragDropKey);
	        }
	    };
	    DetailsRow.prototype.componentWillReceiveProps = function (newProps) {
	        this.setState({
	            selectionState: this._getSelectionState(newProps),
	            groupNestingDepth: newProps.groupNestingDepth
	        });
	    };
	    DetailsRow.prototype.render = function () {
	        var _a = this.props, columns = _a.columns, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, onRenderItemColumn = _a.onRenderItemColumn, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, checkButtonAriaLabel = _a.checkButtonAriaLabel, canSelectItem = _a.canSelectItem;
	        var _b = this.state, isSelected = _b.selectionState.isSelected, columnMeasureInfo = _b.columnMeasureInfo, isDropping = _b.isDropping, groupNestingDepth = _b.groupNestingDepth;
	        var isDraggable = Boolean(dragDropEvents && dragDropEvents.canDrag && dragDropEvents.canDrag(item));
	        var droppingClassName = isDropping ? (this._droppingClassNames ? this._droppingClassNames : DEFAULT_DROPPING_CSS_CLASS) : '';
	        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : null;
	        var canSelect = !canSelectItem || canSelectItem(item);
	        return (React.createElement("div", {ref: 'root', role: 'row', "aria-label": ariaLabel, className: css_1.css('ms-DetailsRow ms-u-fadeIn400', droppingClassName, {
	            'is-selected': isSelected,
	            'is-check-visible': checkboxVisibility === DetailsList_Props_1.CheckboxVisibility.always
	        }), "data-is-focusable": true, "data-selection-index": canSelect ? itemIndex : -1, "data-item-index": itemIndex, "data-is-draggable": isDraggable, "data-automationid": 'DetailsRow', style: { minWidth: viewport ? viewport.width : 0 }}, React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, (selectionMode !== interfaces_1.SelectionMode.none) && (React.createElement("span", {role: 'gridcell'}, React.createElement("button", {className: 'ms-DetailsRow-check', role: 'button', "aria-pressed": isSelected, "data-selection-toggle": true, "data-automationid": 'DetailsRowCheck', "aria-label": checkButtonAriaLabel}, canSelect ?
	            React.createElement(Check_1.Check, {isChecked: isSelected}) :
	            React.createElement("div", {className: 'ms-DetailsRow-checkSpacer'})))), GroupSpacer_1.GroupSpacer({ count: groupNestingDepth }), item && (React.createElement(DetailsRowFields_1.DetailsRowFields, {columns: columns, item: item, itemIndex: itemIndex, onRenderItemColumn: onRenderItemColumn})), columnMeasureInfo && (React.createElement("span", {className: 'ms-DetailsRow-cellMeasurer ms-DetailsRow-cell', ref: 'cellMeasurer'}, React.createElement(DetailsRowFields_1.DetailsRowFields, {columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, onRenderItemColumn: onRenderItemColumn}))))));
	    };
	    /**
	     * measure cell at index. and call the call back with the measured cell width when finish measure
	     *
	     * @param {number} index (the cell index)
	     * @param {(width: number) => void} onMeasureDone (the call back function when finish measure)
	     */
	    DetailsRow.prototype.measureCell = function (index, onMeasureDone) {
	        var column = object_1.assign({}, this.props.columns[index]);
	        column.minWidth = 0;
	        column.maxWidth = 999999;
	        delete column.calculatedWidth;
	        this.setState({
	            columnMeasureInfo: {
	                index: index,
	                column: column,
	                onMeasureDone: onMeasureDone
	            }
	        });
	    };
	    DetailsRow.prototype._getSelectionState = function (props) {
	        var itemIndex = props.itemIndex, selection = props.selection;
	        return {
	            isSelected: selection.isIndexSelected(itemIndex)
	        };
	    };
	    DetailsRow.prototype._onSelectionChanged = function () {
	        var selectionState = this._getSelectionState(this.props);
	        if (!object_1.shallowCompare(selectionState, this.state.selectionState)) {
	            this.setState({
	                selectionState: selectionState
	            });
	        }
	    };
	    DetailsRow.prototype._getRowDragDropOptions = function () {
	        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
	        this._dragDropKey = 'row-' + itemIndex;
	        var options = {
	            key: this._dragDropKey,
	            eventMap: eventsToRegister,
	            selectionIndex: itemIndex,
	            context: { data: item, index: itemIndex },
	            canDrag: dragDropEvents.canDrag,
	            canDrop: dragDropEvents.canDrop,
	            onDragStart: dragDropEvents.onDragStart,
	            updateDropState: this._updateDroppingState
	        };
	        return options;
	    };
	    /**
	     * update isDropping state based on the input value, which is used to change style during drag and drop
	     *
	     * when change to true, that means drag enter. we will add default dropping class name
	     * or the custom dropping class name (return result from onDragEnter) to the root elemet.
	     *
	     * when change to false, that means drag leave. we will remove the dropping class name from root element.
	     *
	     * @private
	     * @param {boolean} newValue (new isDropping state value)
	     * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
	     */
	    DetailsRow.prototype._updateDroppingState = function (newValue, event) {
	        var _a = this.state, selectionState = _a.selectionState, isDropping = _a.isDropping;
	        var _b = this.props, dragDropEvents = _b.dragDropEvents, item = _b.item;
	        if (!newValue) {
	            if (dragDropEvents.onDragLeave) {
	                dragDropEvents.onDragLeave(item, event);
	            }
	        }
	        else {
	            if (dragDropEvents.onDragEnter) {
	                this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
	            }
	        }
	        if (isDropping !== newValue) {
	            this.setState({ selectionState: selectionState, isDropping: newValue });
	        }
	    };
	    return DetailsRow;
	}(React.Component));
	exports.DetailsRow = DetailsRow;
	
	//# sourceMappingURL=DetailsRow.js.map


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var DetailsRowFields = (function (_super) {
	    __extends(DetailsRowFields, _super);
	    function DetailsRowFields(props) {
	        _super.call(this);
	        this.state = this._getState(props);
	    }
	    DetailsRowFields.prototype.componentWillReceiveProps = function (newProps) {
	        this.setState(this._getState(newProps));
	    };
	    DetailsRowFields.prototype.render = function () {
	        var columns = this.props.columns;
	        var cellContent = this.state.cellContent;
	        return (React.createElement("div", {className: 'ms-DetailsRow-fields', "data-automationid": 'DetailsRowFields'}, columns.map(function (column, columnIndex) { return (React.createElement("div", {key: columnIndex, role: column.isRowHeader ? 'rowheader' : 'gridcell', className: css_1.css('ms-DetailsRow-cell', column.className, {
	            'is-multiline': column.isMultiline
	        }), style: { width: column.calculatedWidth }, "data-automationid": 'DetailsRowCell', "data-automation-key": column.key}, cellContent[columnIndex])); })));
	    };
	    DetailsRowFields.prototype._getState = function (props) {
	        var _this = this;
	        var item = props.item, itemIndex = props.itemIndex, onRenderItemColumn = props.onRenderItemColumn;
	        return {
	            cellContent: props.columns.map(function (column) {
	                var cellContent;
	                try {
	                    var render = column.onRender || onRenderItemColumn;
	                    cellContent = render ? render(item, itemIndex, column) : _this._getCellText(item, column);
	                }
	                catch (e) { }
	                return cellContent;
	            })
	        };
	    };
	    DetailsRowFields.prototype._getCellText = function (item, column) {
	        var value = (item && column && column.fieldName) ? item[column.fieldName] : '';
	        if (value === null || value === undefined) {
	            value = '';
	        }
	        return value;
	    };
	    return DetailsRowFields;
	}(React.Component));
	exports.DetailsRowFields = DetailsRowFields;
	
	//# sourceMappingURL=DetailsRowFields.js.map


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DetailsRow{display:inline-block;min-width:100%;min-height:36px;margin:1px 0;vertical-align:top;white-space:nowrap;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;box-sizing:border-box;background:0 0;border:none;vertical-align:top;line-height:16px}.ms-Fabric .ms-DetailsRow::-moz-focus-inner{border:0}.ms-Fabric .ms-DetailsRow{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-DetailsRow:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}html[dir=ltr] .ms-DetailsRow{text-align:left}html[dir=rtl] .ms-DetailsRow{text-align:right}.ms-DetailsRow.ms-DetailsRow.is-selected{background:"[theme:neutralQuaternary, default: #dadada]"}.ms-Fabric.is-stationary .ms-DetailsRow:hover{background:"[theme:neutralLighter, default: #f4f4f4]"}.ms-Fabric.is-stationary .ms-DetailsRow.is-selected:hover{background:"[theme:neutralQuaternaryAlt, default: #d0d0d0]"}.ms-DetailsRow-cell{display:inline-block;position:relative;box-sizing:border-box;padding:10px 0;margin:0 8px;min-height:36px;vertical-align:top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ms-DetailsRow-cell.is-multiline{white-space:normal;word-break:break-word;text-overflow:clip}.ms-DetailsRow-fields{display:inline-block}.ms-DetailsRow-check{display:inline-block;cursor:default;padding:8px;box-sizing:border-box;vertical-align:top;background:0 0;border:none}.ms-Fabric .ms-DetailsRow-check::-moz-focus-inner{border:0}.ms-Fabric .ms-DetailsRow-check{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-DetailsRow-check:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-DetailsRow-check{opacity:0}.ms-DetailsRow-check:focus{opacity:1}.ms-DetailsRow.is-check-visible .ms-DetailsRow-check,.ms-DetailsRow.is-selected .ms-DetailsRow-check,.ms-Fabric.is-stationary .ms-DetailsRow:hover .ms-DetailsRow-check{opacity:1}.aFileTypeIconRenderer{height:36px;line-height:36px;vertical-align:top}.FileTypeIconRenderer>img{width:16px;height:16px;vertical-align:middle}.ms-DetailsRow-cellMeasurer .ms-DetailsRow-cell{overflow:visible;white-space:nowrap}.ms-DetailsRow-checkSpacer{display:inline-block;height:20px;width:20px}');
	
	//# sourceMappingURL=DetailsRow.scss.js.map


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(112));
	
	//# sourceMappingURL=GroupedList.js.map


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(113));
	__export(__webpack_require__(114));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Group_1 = __webpack_require__(114);
	var css_1 = __webpack_require__(17);
	var List_1 = __webpack_require__(129);
	var index_1 = __webpack_require__(134);
	var object_1 = __webpack_require__(39);
	__webpack_require__(138);
	var GroupedList = (function (_super) {
	    __extends(GroupedList, _super);
	    function GroupedList(props) {
	        _super.call(this, props);
	        this._onToggleCollapse = this._onToggleCollapse.bind(this);
	        this._onToggleSelectGroup = this._onToggleSelectGroup.bind(this);
	        this._onToggleSummarize = this._onToggleSummarize.bind(this);
	        this._getGroupKey = this._getGroupKey.bind(this);
	        this._renderGroup = this._renderGroup.bind(this);
	        this.state = {
	            lastWidth: 0,
	            groups: props.groups
	        };
	    }
	    GroupedList.prototype.componentWillReceiveProps = function (newProps) {
	        var _a = this.props, groups = _a.groups, selectionMode = _a.selectionMode;
	        var shouldForceUpdates = false;
	        if (newProps.groups !== groups) {
	            this.setState({ groups: newProps.groups });
	            shouldForceUpdates = true;
	        }
	        if (newProps.selectionMode !== selectionMode) {
	            shouldForceUpdates = true;
	        }
	        if (shouldForceUpdates) {
	            this._forceListUpdates();
	        }
	    };
	    GroupedList.prototype.render = function () {
	        var className = this.props.className;
	        var groups = this.state.groups;
	        return (React.createElement("div", {ref: 'root', className: css_1.css('ms-GroupedList', className), "data-automationid": 'GroupedList', "data-is-scrollable": 'false', role: 'grid'}, !groups ?
	            this._renderGroup(null, 0) : (React.createElement(List_1.List, {ref: 'list', items: groups, onRenderCell: this._renderGroup, getItemCountForPage: function () { return 1; }}))));
	    };
	    GroupedList.prototype.forceUpdate = function () {
	        _super.prototype.forceUpdate.call(this);
	        this._forceListUpdates();
	    };
	    GroupedList.prototype._renderGroup = function (group, groupIndex) {
	        var _a = this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport;
	        // override group header/footer props as needed
	        var headerProps = object_1.assign({}, groupProps && groupProps.headerProps ? groupProps.headerProps : {}, {
	            onToggleCollapse: this._onToggleCollapse,
	            onToggleSelectGroup: this._onToggleSelectGroup
	        });
	        var footerProps = object_1.assign({}, groupProps && groupProps.footerProps ? groupProps.footerProps : {}, {
	            onToggleSummarize: this._onToggleSummarize
	        });
	        var groupNestingDepth = this._getGroupNestingDepth();
	        return (!group || group.count > 0) ? (React.createElement(Group_1.Group, {ref: 'group_' + groupIndex, key: this._getGroupKey(group), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, headerProps: headerProps, listProps: listProps, items: items, onRenderCell: onRenderCell, selectionMode: selectionMode, selection: selection, viewport: viewport})) : null;
	    };
	    GroupedList.prototype._getGroupKey = function (group) {
	        return 'group-' + (group ?
	            group.key + '-' + group.count :
	            '');
	    };
	    GroupedList.prototype._getGroupNestingDepth = function () {
	        var groups = this.state.groups;
	        var level = 0;
	        var groupsInLevel = groups;
	        while (groupsInLevel && groupsInLevel.length > 0) {
	            level++;
	            groupsInLevel = groupsInLevel[0].children;
	        }
	        return level;
	    };
	    GroupedList.prototype._onToggleCollapse = function (group) {
	        var groupProps = this.props.groupProps;
	        var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
	        if (group) {
	            if (onToggleCollapse) {
	                onToggleCollapse(group);
	            }
	            group.isCollapsed = !group.isCollapsed;
	            this.setState({}, this.forceUpdate);
	        }
	    };
	    GroupedList.prototype._onToggleSelectGroup = function (group) {
	        var groups = this.state.groups;
	        if (group) {
	            var isSelected = !group.isSelected;
	            this._selectGroup(group, isSelected);
	            this.setState({
	                groups: groups
	            });
	        }
	    };
	    GroupedList.prototype._selectGroup = function (group, isSelected) {
	        var _this = this;
	        var groupProps = this.props.groupProps;
	        group.isSelected = isSelected;
	        if (group.children && group.children.length > 0) {
	            group.children.forEach(function (childGroup) {
	                _this._selectGroup(childGroup, isSelected);
	            });
	        }
	        else {
	            var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit;
	            var groupItemLimit = getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
	            var start = group.startIndex;
	            var end = group.startIndex + Math.min(group.count, groupItemLimit);
	            for (var idx = start; idx < end; idx++) {
	                this.props.selection.setIndexSelected(idx, isSelected, false /* shouldAnchor */);
	            }
	            this.setState({}, this.forceUpdate);
	        }
	    };
	    GroupedList.prototype._forceListUpdates = function (groups) {
	        groups = groups || this.state.groups;
	        var groupCount = groups ? groups.length : 1;
	        if (this.refs.list) {
	            this.refs.list.forceUpdate();
	            for (var i = 0; i < groupCount; i++) {
	                var group = this.refs.list.refs['group_' + String(i)];
	                if (group) {
	                    group.forceListUpdate();
	                }
	            }
	        }
	        else {
	            var group = this.refs['group_' + String(0)];
	            if (group) {
	                group.forceListUpdate();
	            }
	        }
	    };
	    GroupedList.prototype._onToggleSummarize = function (group) {
	        var groups = this.state.groups;
	        var groupProps = this.props.groupProps;
	        var onToggleSummarize = groupProps && groupProps.footerProps && groupProps.footerProps.onToggleSummarize;
	        if (onToggleSummarize) {
	            onToggleSummarize(group);
	        }
	        else {
	            if (group) {
	                group.isShowingAll = !group.isShowingAll;
	                this.setState({
	                    groups: groups
	                });
	            }
	        }
	    };
	    GroupedList.defaultProps = {
	        selectionMode: index_1.SelectionMode.multiple,
	        isHeaderVisible: true
	    };
	    return GroupedList;
	}(React.Component));
	exports.GroupedList = GroupedList;
	
	//# sourceMappingURL=GroupedList.js.map


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var GroupFooter_1 = __webpack_require__(115);
	var GroupHeader_1 = __webpack_require__(122);
	var List_1 = __webpack_require__(129);
	var EventGroup_1 = __webpack_require__(14);
	var css_1 = __webpack_require__(17);
	var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
	var Group = (function (_super) {
	    __extends(Group, _super);
	    function Group(props) {
	        _super.call(this, props);
	        this.state = {
	            isDropping: false
	        };
	        this._getGroupDragDropOptions = this._getGroupDragDropOptions.bind(this);
	        this._updateDroppingState = this._updateDroppingState.bind(this);
	        this._renderSubGroup = this._renderSubGroup.bind(this);
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    Group.prototype.componentDidMount = function () {
	        var dragDropHelper = this.props.dragDropHelper;
	        if (dragDropHelper) {
	            dragDropHelper.subscribe(this.refs.root, this._events, this._getGroupDragDropOptions());
	        }
	    };
	    Group.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	        var dragDropHelper = this.props.dragDropHelper;
	        if (dragDropHelper) {
	            dragDropHelper.unsubscribe(this.refs.root, this._dragDropKey);
	        }
	    };
	    Group.prototype.render = function () {
	        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, footerProps = _a.footerProps, viewport = _a.viewport;
	        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
	        var isFooterVisible = group && !group.children && !group.isCollapsed && !group.isShowingAll && group.count > renderCount;
	        var hasNestedGroups = group && group.children && group.children.length > 0;
	        return (React.createElement("div", {ref: 'root', className: css_1.css('ms-GroupedList-group', this._getDroppingClassName())}, group && group.onRenderHeader ?
	            group.onRenderHeader(group) :
	            React.createElement(GroupHeader_1.GroupHeader, {group: group, groupIndex: groupIndex, groupLevel: group ? group.level : 0, headerProps: headerProps, viewport: viewport, ref: 'header'}), group && group.isCollapsed ?
	            null :
	            (hasNestedGroups ?
	                (React.createElement(List_1.List, {ref: 'list', items: group.children, onRenderCell: this._renderSubGroup, getItemCountForPage: function () { return 1; }})) :
	                this._onRenderGroup(renderCount)), group && group.onRenderFooter ?
	            group.onRenderFooter(group) :
	            (isFooterVisible &&
	                React.createElement(GroupFooter_1.GroupFooter, {group: group, groupIndex: groupIndex, groupLevel: group ? group.level : 0, footerProps: footerProps, ref: 'footer'}))));
	    };
	    Group.prototype.forceUpdate = function () {
	        _super.prototype.forceUpdate.call(this);
	        this.forceListUpdate();
	    };
	    Group.prototype.forceListUpdate = function () {
	        var group = this.props.group;
	        if (this.refs.list) {
	            this.refs.list.forceUpdate();
	            if (group && group.children && group.children.length > 0) {
	                var subGroupCount = group.children.length;
	                for (var i = 0; i < subGroupCount; i++) {
	                    var subGroup = this.refs.list.refs['subGroup_' + String(i)];
	                    if (subGroup) {
	                        subGroup.forceListUpdate();
	                    }
	                }
	            }
	        }
	        else {
	            var subGroup = this.refs['subGroup_' + String(0)];
	            if (subGroup) {
	                subGroup.forceListUpdate();
	            }
	        }
	    };
	    Group.prototype._onRenderGroup = function (renderCount) {
	        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps;
	        var count = group ? group.count : items.length;
	        var startIndex = group ? group.startIndex : 0;
	        var level = group ? group.level : 0;
	        return (React.createElement(List_1.List, React.__spread({items: items, onRenderCell: function (item, itemIndex) { return onRenderCell(level, item, itemIndex); }, ref: 'list', renderCount: Math.min(count, renderCount), startIndex: startIndex}, listProps)));
	    };
	    Group.prototype._renderSubGroup = function (subGroup, subGroupIndex) {
	        var _a = this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, items = _a.items, headerProps = _a.headerProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport;
	        return (!subGroup || subGroup.count > 0) ? (React.createElement(Group, {ref: 'subGroup_' + subGroupIndex, key: this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: groupNestingDepth, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, viewport: viewport})) : null;
	    };
	    Group.prototype._getGroupKey = function (group, groupIndex) {
	        return 'group-' + (group ?
	            group.key + '-' + group.count :
	            '');
	    };
	    /**
	     * collect all the data we need to enable drag/drop for a group
	     */
	    Group.prototype._getGroupDragDropOptions = function () {
	        var _a = this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
	        this._dragDropKey = 'group-' + (group ? group.key : String(groupIndex));
	        var options = {
	            key: this._dragDropKey,
	            eventMap: eventsToRegister,
	            selectionIndex: -1,
	            context: { data: group, index: groupIndex, isGroup: true },
	            canDrag: function () { return false; },
	            canDrop: dragDropEvents.canDrop,
	            onDragStart: null,
	            updateDropState: this._updateDroppingState
	        };
	        return options;
	    };
	    /**
	     * update groupIsDropping state based on the input value, which is used to change style during drag and drop
	     *
	     * @private
	     * @param {boolean} newValue (new isDropping state value)
	     * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
	     */
	    Group.prototype._updateDroppingState = function (newIsDropping, event) {
	        var isDropping = this.state.isDropping;
	        var dragDropEvents = this.props.dragDropEvents;
	        if (!isDropping) {
	            if (dragDropEvents.onDragLeave) {
	                dragDropEvents.onDragLeave(event, null);
	            }
	        }
	        else {
	            if (dragDropEvents.onDragEnter) {
	                dragDropEvents.onDragEnter(event, null);
	            }
	        }
	        if (isDropping !== newIsDropping) {
	            this.setState({ isDropping: newIsDropping });
	        }
	    };
	    /**
	     * get the correct css class to reflect the dropping state for a given group
	     *
	     * If the group is the current drop target, return the default dropping class name
	     * Otherwise, return '';
	     *
	     */
	    Group.prototype._getDroppingClassName = function () {
	        var isDropping = this.state.isDropping;
	        var group = this.props.group;
	        var droppingClass = group && isDropping ? DEFAULT_DROPPING_CSS_CLASS : '';
	        return droppingClass;
	    };
	    return Group;
	}(React.Component));
	exports.Group = Group;
	
	//# sourceMappingURL=Group.js.map


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Link_1 = __webpack_require__(116);
	var GroupSpacer_1 = __webpack_require__(104);
	__webpack_require__(121);
	var GroupFooter = (function (_super) {
	    __extends(GroupFooter, _super);
	    function GroupFooter(props) {
	        _super.call(this, props);
	        this._onToggleSummarize = this._onToggleSummarize.bind(this);
	    }
	    GroupFooter.prototype.render = function () {
	        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, footerProps = _a.footerProps;
	        var showAllLinkText = footerProps && footerProps.showAllLinkText;
	        return group && (React.createElement("div", {className: 'ms-groupFooter'}, GroupSpacer_1.GroupSpacer({ count: groupLevel }), React.createElement(Link_1.Link, {onClick: this._onToggleSummarize}, showAllLinkText)));
	    };
	    GroupFooter.prototype._onToggleSummarize = function () {
	        var _a = this.props, group = _a.group, footerProps = _a.footerProps;
	        var onToggleSummarize = footerProps && footerProps.onToggleSummarize;
	        if (onToggleSummarize) {
	            onToggleSummarize(group);
	        }
	    };
	    return GroupFooter;
	}(React.Component));
	exports.GroupFooter = GroupFooter;
	
	//# sourceMappingURL=GroupFooter.js.map


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(117));
	
	//# sourceMappingURL=Link.js.map


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(118));
	__export(__webpack_require__(120));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(119);
	var Link_Props_1 = __webpack_require__(120);
	var Link = (function (_super) {
	    __extends(Link, _super);
	    function Link(props) {
	        _super.call(this, props);
	        this._onClick = this._onClick.bind(this);
	        this._popupWindow = this._popupWindow.bind(this);
	    }
	    Link.prototype.render = function () {
	        var _a = this.props, children = _a.children, className = _a.className, href = _a.href;
	        return (href ? (React.createElement("a", React.__spread({role: 'link'}, this.props, {className: css_1.css('ms-Link', className), onClick: this._onClick}), children)) : (React.createElement("button", React.__spread({role: 'button'}, this.props, {className: css_1.css('ms-Link', className), onClick: this._onClick}), children)));
	    };
	    Link.prototype._onClick = function (ev) {
	        var _a = this.props, popupWindowProps = _a.popupWindowProps, onClick = _a.onClick;
	        if (popupWindowProps) {
	            this._popupWindow(popupWindowProps);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	        if (onClick) {
	            onClick(ev);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    Link.prototype._popupWindow = function (popupWindowProps) {
	        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
	        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
	        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ?
	            document.documentElement.clientWidth : screen.width;
	        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ?
	            document.documentElement.clientHeight : screen.height;
	        var left = 0;
	        var top = 0;
	        switch (popupWindowProps.positionWindowPosition) {
	            case Link_Props_1.PopupWindowPosition.center:
	                left = ((width / 2) - (popupWindowProps.width / 2)) + dualScreenLeft;
	                top = ((height / 2) - (popupWindowProps.height / 2)) + dualScreenTop;
	                break;
	            case Link_Props_1.PopupWindowPosition.leftBottom:
	                left = dualScreenLeft;
	                top = (height - popupWindowProps.height) + dualScreenTop;
	                break;
	            case Link_Props_1.PopupWindowPosition.leftTop:
	                left = dualScreenLeft;
	                top = dualScreenTop;
	                break;
	            case Link_Props_1.PopupWindowPosition.rightBottom:
	                left = (width - popupWindowProps.width) + dualScreenLeft;
	                top = (height - popupWindowProps.height) + dualScreenTop;
	                break;
	            case Link_Props_1.PopupWindowPosition.rightTop:
	                left = (width - popupWindowProps.width) + dualScreenLeft;
	                top = dualScreenTop;
	                break;
	            default:
	                break;
	        }
	        var newWindow = window.open(this.props.href, popupWindowProps.title, 'scrollbars=yes, width='
	            + popupWindowProps.width + ', height=' + popupWindowProps.height + ', top=' + top + ', left=' + left);
	        // Puts focus on the newWindow
	        if (window.focus && newWindow) {
	            newWindow.focus();
	        }
	    };
	    return Link;
	}(React.Component));
	exports.Link = Link;
	
	//# sourceMappingURL=Link.js.map


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Link{color:"[theme:themePrimary, default: #0078d7]";text-decoration:none;cursor:pointer}.ms-Link:focus,.ms-Link:hover{color:"[theme:themeDarker, default: #004578]"}.ms-Link:active{color:"[theme:themePrimary, default: #0078d7]"}@media screen and (-ms-high-contrast:active){.ms-Link{color:#8080ff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Link{color:#00009F}}.ms-Link,BUTTON.ms-Link{font-family:inherit;font-size:inherit;font-weight:400;border:none;background:0 0;display:inline;padding:0;margin:0}.ms-Fabric .ms-Link::-moz-focus-inner,.ms-Fabric BUTTON.ms-Link::-moz-focus-inner{border:0}.ms-Fabric .ms-Link,.ms-Fabric BUTTON.ms-Link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Link:focus:before,.ms-Fabric.is-focusVisible BUTTON.ms-Link:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}html[dir=ltr] .ms-Link,html[dir=ltr] BUTTON.ms-Link{text-align:left}html[dir=rtl] .ms-Link,html[dir=rtl] BUTTON.ms-Link{text-align:right}');
	
	//# sourceMappingURL=Link.scss.js.map


/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * The position of pop up window
	 */
	(function (PopupWindowPosition) {
	    /**
	     * PopupWindowPosition would be located in center of screen
	     */
	    PopupWindowPosition[PopupWindowPosition["center"] = 0] = "center";
	    /**
	     * PopupWindowPosition would be located in right top of screen
	     */
	    PopupWindowPosition[PopupWindowPosition["rightTop"] = 1] = "rightTop";
	    /**
	     * PopupWindowPosition would be located in left top of screen
	     */
	    PopupWindowPosition[PopupWindowPosition["leftTop"] = 2] = "leftTop";
	    /**
	     * PopupWindowPosition would be located in right bottom of screen
	     */
	    PopupWindowPosition[PopupWindowPosition["rightBottom"] = 3] = "rightBottom";
	    /**
	     * PopupWindowPosition would be located in left bottom of screen
	     */
	    PopupWindowPosition[PopupWindowPosition["leftBottom"] = 4] = "leftBottom";
	})(exports.PopupWindowPosition || (exports.PopupWindowPosition = {}));
	var PopupWindowPosition = exports.PopupWindowPosition;
	
	//# sourceMappingURL=Link.Props.js.map


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-groupFooter{position:relative;padding:10px 84px;cursor:pointer}.ms-groupFooter .ms-Link{font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px}');
	
	//# sourceMappingURL=GroupFooter.scss.js.map


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Check_1 = __webpack_require__(102);
	var GroupSpacer_1 = __webpack_require__(104);
	var Spinner_1 = __webpack_require__(123);
	var FocusZone_1 = __webpack_require__(10);
	var css_1 = __webpack_require__(17);
	__webpack_require__(128);
	var GroupHeader = (function (_super) {
	    __extends(GroupHeader, _super);
	    function GroupHeader(props) {
	        _super.call(this, props);
	        this._onToggleCollapse = this._onToggleCollapse.bind(this);
	        this._onToggleSelectGroup = this._onToggleSelectGroup.bind(this);
	        this._onHeaderClick = this._onHeaderClick.bind(this);
	        this.state = {
	            isCollapsed: this.props.group && this.props.group.isCollapsed,
	            isLoadingVisible: false
	        };
	    }
	    GroupHeader.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.group) {
	            var newCollapsed = newProps.group.isCollapsed;
	            var isGroupLoading = newProps.headerProps && newProps.headerProps.isGroupLoading;
	            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);
	            this.setState({
	                isCollapsed: newCollapsed,
	                isLoadingVisible: newLoadingVisible
	            });
	        }
	    };
	    GroupHeader.prototype.render = function () {
	        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, headerProps = _a.headerProps, viewport = _a.viewport;
	        var _b = this.state, isCollapsed = _b.isCollapsed, isLoadingVisible = _b.isLoadingVisible;
	        var showCheckBox = true;
	        var isSelected = group && group.isSelected;
	        var loadingText = headerProps && headerProps.loadingText;
	        return group && (React.createElement("div", {className: css_1.css('ms-GroupHeader', {
	            'is-selected': isSelected
	        }), style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, "data-is-focusable": true}, React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, showCheckBox && (React.createElement("button", {className: 'ms-GroupHeader-check', "data-selection-toggle": true, onClick: this._onToggleSelectGroup}, React.createElement(Check_1.Check, {isChecked: isSelected}))), GroupSpacer_1.GroupSpacer({ count: groupLevel }), React.createElement("button", {className: 'ms-GroupHeader-expand', onClick: this._onToggleCollapse}, React.createElement("i", {className: css_1.css('ms-Icon ms-Icon--chevronDown', {
	            'is-collapsed': isCollapsed
	        })})), React.createElement("div", {className: 'ms-GroupHeader-title ms-font-xl'}, React.createElement("span", null, group.name, " "), React.createElement("span", null, "(", group.count, ")")), React.createElement("div", {className: css_1.css('ms-GroupHeader-loading', { 'is-loading': isLoadingVisible })}, React.createElement(Spinner_1.Spinner, {label: loadingText})))));
	    };
	    GroupHeader.prototype._onToggleCollapse = function (ev) {
	        var _a = this.props, group = _a.group, headerProps = _a.headerProps;
	        var isCollapsed = this.state.isCollapsed;
	        var onToggleCollapse = headerProps && headerProps.onToggleCollapse;
	        var isGroupLoading = headerProps && headerProps.isGroupLoading;
	        var newCollapsed = !isCollapsed;
	        var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
	        this.setState({
	            isCollapsed: newCollapsed,
	            isLoadingVisible: newLoadingVisible
	        });
	        if (onToggleCollapse) {
	            onToggleCollapse(group);
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    GroupHeader.prototype._onToggleSelectGroup = function (ev) {
	        var _a = this.props, group = _a.group, headerProps = _a.headerProps;
	        var onToggleSelectGroup = headerProps && headerProps.onToggleSelectGroup;
	        if (onToggleSelectGroup) {
	            onToggleSelectGroup(group);
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    GroupHeader.prototype._onHeaderClick = function () {
	        var _a = this.props, group = _a.group, headerProps = _a.headerProps;
	        if (headerProps) {
	            var onGroupHeaderClick = headerProps.onGroupHeaderClick, onToggleSelectGroup = headerProps.onToggleSelectGroup;
	            if (onGroupHeaderClick) {
	                onGroupHeaderClick(group);
	            }
	            else if (onToggleSelectGroup) {
	                onToggleSelectGroup(group);
	            }
	        }
	    };
	    return GroupHeader;
	}(React.Component));
	exports.GroupHeader = GroupHeader;
	
	//# sourceMappingURL=GroupHeader.js.map


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(124));
	
	//# sourceMappingURL=Spinner.js.map


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(125));
	__export(__webpack_require__(126));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Spinner_Props_1 = __webpack_require__(126);
	var rtl_1 = __webpack_require__(16);
	var css_1 = __webpack_require__(17);
	__webpack_require__(127);
	var CIRCLE_COUNT = 8;
	var PARENT_SIZE_LARGE = 28;
	var PARENT_SIZE_NORMAL = 20;
	var OFFSET_SIZE_LARGE = 0.179;
	var OFFSET_SIZE_NORMAL = 0.2;
	var Spinner = (function (_super) {
	    __extends(Spinner, _super);
	    function Spinner() {
	        _super.apply(this, arguments);
	    }
	    Spinner.prototype.render = function () {
	        var _a = this.props, type = _a.type, label = _a.label, className = _a.className;
	        var isRTL = rtl_1.getRTL();
	        var parentSize = type === Spinner_Props_1.SpinnerType.large ? PARENT_SIZE_LARGE : PARENT_SIZE_NORMAL;
	        var offsetSize = type === Spinner_Props_1.SpinnerType.large ? OFFSET_SIZE_LARGE : OFFSET_SIZE_NORMAL;
	        var offset = parentSize * offsetSize;
	        var step = (2 * Math.PI) / CIRCLE_COUNT;
	        var angle = 0;
	        var i = CIRCLE_COUNT;
	        var radius = (parentSize - offset) * 0.5;
	        var circleObjects = [];
	        while (i--) {
	            var x = Math.round(parentSize * 0.5 + radius * Math.cos(angle)) - offset * 0.5;
	            var y = Math.round(parentSize * 0.5 + radius * Math.sin(angle)) - offset * 0.5;
	            var size = offset + 'px';
	            var style = { left: !isRTL ? x : 'auto', right: !isRTL ? 'auto' : x, top: y, width: size, height: size };
	            angle += step;
	            circleObjects.push(React.createElement("div", {className: 'ms-Spinner-circle', key: i, style: style}));
	        }
	        return (React.createElement("div", {className: css_1.css('ms-Spinner', className, {
	            'ms-Spinner--large': type === Spinner_Props_1.SpinnerType.large
	        })}, label && (React.createElement("div", {className: 'ms-Spinner-label', role: 'alert'}, label)), circleObjects));
	    };
	    Spinner.defaultProps = {
	        type: Spinner_Props_1.SpinnerType.normal
	    };
	    return Spinner;
	}(React.Component));
	exports.Spinner = Spinner;
	
	//# sourceMappingURL=Spinner.js.map


/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";
	(function (SpinnerType) {
	    SpinnerType[SpinnerType["normal"] = 0] = "normal";
	    SpinnerType[SpinnerType["large"] = 1] = "large";
	})(exports.SpinnerType || (exports.SpinnerType = {}));
	var SpinnerType = exports.SpinnerType;
	
	//# sourceMappingURL=Spinner.Props.js.map


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Spinner{position:relative;height:20px}.ms-Spinner.ms-Spinner--large{height:28px}.ms-Spinner.ms-Spinner--large .ms-Spinner-label{left:34px;top:6px}.ms-Spinner-circle{position:absolute;border-radius:100px;background-color:#0078d7;opacity:0}@media screen and (-ms-high-contrast:active){.ms-Spinner-circle{background-color:#fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Spinner-circle{background-color:#000}}.ms-Spinner-label{position:relative;color:#333;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;font-weight:400;color:#0078d7;left:28px;top:2px}[dir=ltr] .ms-Spinner.ms-Spinner--large .ms-Spinner-label{left:34px}[dir=rtl] .ms-Spinner.ms-Spinner--large .ms-Spinner-label{right:34px}[dir=ltr] .ms-Spinner-label{left:28px}[dir=rtl] .ms-Spinner-label{right:28px}@-webkit-keyframes pulse{0%{opacity:1}100%{opacity:0}}@keyframes pulse{0%{opacity:1}100%{opacity:0}}.ms-Spinner-circle{position:absolute;border-radius:100px;background-color:#0078d7;opacity:0;-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ms-Spinner-circle:nth-child(1){opacity:.875;-webkit-animation-delay:.093s;animation-delay:.093s}.ms-Spinner-circle:nth-child(2){opacity:.75;-webkit-animation-delay:.187s;animation-delay:.187s}.ms-Spinner-circle:nth-child(3){opacity:.625;-webkit-animation-delay:.281s;animation-delay:.281s}.ms-Spinner-circle:nth-child(4){opacity:.5;-webkit-animation-delay:375ms;animation-delay:375ms}.ms-Spinner-circle:nth-child(5){opacity:.375;-webkit-animation-delay:.468s;animation-delay:.468s}.ms-Spinner-circle:nth-child(6){opacity:.25;-webkit-animation-delay:.562s;animation-delay:.562s}.ms-Spinner-circle:nth-child(7){opacity:.125;-webkit-animation-delay:.656s;animation-delay:.656s}');
	
	//# sourceMappingURL=Spinner.scss.js.map


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-GroupHeader{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Fabric .ms-GroupHeader::-moz-focus-inner{border:0}.ms-Fabric .ms-GroupHeader{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-GroupHeader:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-GroupHeader:hover{background:"[theme:themeLighterAlt, default: #eff6fc]"}.ms-GroupHeader.is-selected{background:"[theme:themeLighter, default: #deecf9]"}.ms-GroupHeader.is-selected:hover{background:"[theme:themeLight, default: #c7e0f4]"}.ms-GroupHeader-check,.ms-GroupHeader-expand{display:inline-block;cursor:default;padding:8px;-webkit-transform:translateY(50%);transform:translateY(50%);margin-top:-10px;box-sizing:border-box;vertical-align:top;background:0 0;border:none}.ms-Fabric .ms-GroupHeader-check::-moz-focus-inner,.ms-Fabric .ms-GroupHeader-expand::-moz-focus-inner{border:0}.ms-Fabric .ms-GroupHeader-check,.ms-Fabric .ms-GroupHeader-expand{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-GroupHeader-check:focus:before,.ms-Fabric.is-focusVisible .ms-GroupHeader-expand:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-GroupHeader-check{opacity:0}.ms-GroupHeader-check:focus{opacity:1}.ms-GroupHeader.is-selected .ms-GroupHeader-check,.ms-GroupHeader:hover .ms-GroupHeader-check{opacity:1}.ms-GroupHeader-title{padding:14px 6px;display:inline-block;cursor:pointer;outline:0}.ms-GroupHeader-expand{width:36px;height:40px;color:"[theme:neutralSecondary, default: #666666]"}.ms-GroupHeader-expand .ms-Icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.ms-GroupHeader-expand .ms-Icon.is-collapsed{-webkit-transform:rotate(0);transform:rotate(0)}.ms-GroupHeader-loading{display:inline-block;visibility:hidden;opacity:0;padding:0 16px;vertical-align:middle;-webkit-transition:visibility 367ms,opacity 367ms;transition:visibility 367ms,opacity 367ms}.ms-GroupHeader-loading.is-loading{visibility:visible;opacity:1}');
	
	//# sourceMappingURL=GroupHeader.scss.js.map


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(130));
	
	//# sourceMappingURL=List.js.map


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(131));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(132);
	var css_1 = __webpack_require__(17);
	var object_1 = __webpack_require__(39);
	var array_1 = __webpack_require__(133);
	var scrollUtilities_1 = __webpack_require__(38);
	var RESIZE_DELAY = 500;
	var MIN_SCROLL_UPDATE_DELAY = 100;
	var MAX_SCROLL_UPDATE_DELAY = 500;
	var IDLE_DEBOUNCE_DELAY = 200;
	var DEFAULT_ITEMS_PER_PAGE = 10;
	var DEFAULT_PAGE_HEIGHT = 30;
	var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
	var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
	var _instance = 0;
	var EMPTY_RECT = {
	    top: -1,
	    bottom: -1,
	    left: -1,
	    right: -1,
	    width: 0,
	    height: 0
	};
	// Naming expensive measures so that they're named in profiles.
	var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
	var _measureSurfaceRect = _measurePageRect;
	/**
	 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback if
	 * provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if provided by
	 * the caller, or by cached measurements if available, or by a running average, or a default fallback.
	 *
	 * The algorithm for rendering pages works like this:
	 *
	 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
	 * 2. If changes are necessary, apply changes (add/remove pages)
	 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
	 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
	 *
	 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
	 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
	 *
	 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
	 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
	 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
	 */
	var List = (function (_super) {
	    __extends(List, _super);
	    function List(props) {
	        _super.call(this, props);
	        this.state = {
	            pages: []
	        };
	        this._id = _instance++;
	        this._estimatedPageHeight = 0;
	        this._totalEstimates = 0;
	        this._requiredWindowsAhead = 0;
	        this._requiredWindowsBehind = 0;
	        this.isFirstRenderRectUpdate = true;
	        // Track the measure version for everything.
	        this._measureVersion = 0;
	        // Ensure that scrolls are lazy updated.
	        this._onAsyncScroll = this._async.debounce(this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
	            leading: false,
	            maxWait: MAX_SCROLL_UPDATE_DELAY
	        });
	        this._onAsyncIdle = this._async.debounce(this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
	            leading: false
	        });
	        this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
	            leading: false
	        });
	        this._cachedPageHeights = {};
	        this._estimatedPageHeight = 0;
	        this._focusedIndex = -1;
	        this._scrollingToIndex = -1;
	    }
	    List.prototype.componentDidMount = function () {
	        this._updatePages();
	        this._measureVersion++;
	        this._scrollElement = scrollUtilities_1.findScrollableParent(this.refs.root);
	        this._events.on(window, 'resize', this._onAsyncResize);
	        this._events.on(this.refs.root, 'focus', this._onFocus, true);
	        if (this._scrollElement) {
	            this._events.on(this._scrollElement, 'scroll', this._onScroll);
	            this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
	        }
	    };
	    List.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.items !== this.props.items ||
	            newProps.renderCount !== this.props.renderCount ||
	            newProps.startIndex !== this.props.startIndex) {
	            this._measureVersion++;
	            this._updatePages(newProps);
	        }
	    };
	    List.prototype.shouldComponentUpdate = function (newProps, newState) {
	        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var oldPages = this.state.pages;
	        var newPages = newState.pages, measureVersion = newState.measureVersion;
	        var shouldComponentUpdate = false;
	        if (this._measureVersion === measureVersion &&
	            newProps.renderedWindowsAhead === renderedWindowsAhead,
	            newProps.renderedWindowsBehind === renderedWindowsBehind,
	            newProps.items === this.props.items &&
	                oldPages.length === newPages.length) {
	            for (var i = 0; i < oldPages.length; i++) {
	                var oldPage = oldPages[i];
	                var newPage = newPages[i];
	                if ((oldPage.key !== newPage.key ||
	                    oldPage.itemCount !== newPage.itemCount)) {
	                    shouldComponentUpdate = true;
	                    break;
	                }
	            }
	        }
	        else {
	            shouldComponentUpdate = true;
	        }
	        return shouldComponentUpdate;
	    };
	    List.prototype.forceUpdate = function () {
	        // Ensure that when the list is force updated we update the pages first before render.
	        this._updateRenderRects(this.props, true);
	        this._updatePages();
	        this._measureVersion++;
	        _super.prototype.forceUpdate.call(this);
	    };
	    List.prototype.render = function () {
	        var className = this.props.className;
	        var pages = this.state.pages;
	        var pageElements = [];
	        for (var i = 0; i < pages.length; i++) {
	            pageElements.push(this._renderPage(pages[i]));
	        }
	        return (React.createElement("div", {ref: 'root', className: css_1.css('ms-List', className)}, React.createElement("div", {ref: 'surface', className: 'ms-List-surface'}, pageElements)));
	    };
	    List.prototype._renderPage = function (page) {
	        var onRenderCell = this.props.onRenderCell;
	        var cells = [];
	        var pageStyle = this._getPageStyle(page);
	        for (var i = 0; page.items && i < page.items.length; i++) {
	            var item = page.items[i];
	            var itemKey = (item ? item.key : null);
	            if (itemKey === null || itemKey === undefined) {
	                itemKey = page.startIndex + i;
	            }
	            cells.push(React.createElement("div", {className: 'ms-List-cell', key: itemKey, "data-list-index": i + page.startIndex, "data-automationid": 'ListCell'}, onRenderCell(item, page.startIndex + i)));
	        }
	        return (React.createElement("div", {className: 'ms-List-page', key: page.key, ref: page.key, style: pageStyle}, cells));
	    };
	    /** Generate the style object for the page. */
	    List.prototype._getPageStyle = function (page) {
	        var style;
	        var getPageStyle = this.props.getPageStyle;
	        if (getPageStyle) {
	            style = getPageStyle(page);
	        }
	        if (!page.items) {
	            style = style || {};
	            style.height = page.height;
	        }
	        return style;
	    };
	    /** Track the last item index focused so that we ensure we keep it rendered. */
	    List.prototype._onFocus = function (ev) {
	        var target = ev.target;
	        while (target !== this.refs.surface) {
	            var indexString = target.getAttribute('data-list-index');
	            if (indexString) {
	                this._focusedIndex = Number(indexString);
	                break;
	            }
	            target = target.parentElement;
	        }
	    };
	    /**
	     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
	     * we will call onAsyncIdle which will reset it back to it's correct value.
	     */
	    List.prototype._onScroll = function () {
	        this._requiredWindowsAhead = 0;
	        this._requiredWindowsBehind = 0;
	    };
	    /**
	     * Debounced method to asynchronously update the visible region on a scroll event.
	     */
	    List.prototype._onAsyncScroll = function () {
	        this._updateRenderRects();
	        // Only update pages when the visible rect falls outside of the materialized rect.
	        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
	            this._updatePages();
	        }
	        else {
	        }
	    };
	    /**
	     * This is an async debounced method that will try and increment the windows we render. If we can increment
	     * either, we increase the amount we render and re-evaluate.
	     */
	    List.prototype._onAsyncIdle = function () {
	        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var _b = this, requiredWindowsAhead = _b._requiredWindowsAhead, requiredWindowsBehind = _b._requiredWindowsBehind;
	        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
	        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
	        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
	            // console.log('idling', windowsBehind, windowsAhead);
	            this._requiredWindowsAhead = windowsAhead;
	            this._requiredWindowsBehind = windowsBehind;
	            this._updateRenderRects();
	            this._updatePages();
	        }
	        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
	            // Async increment on next tick.
	            this._onAsyncIdle();
	        }
	    };
	    List.prototype._onAsyncResize = function () {
	        this.forceUpdate();
	    };
	    List.prototype._updatePages = function (props) {
	        var _this = this;
	        var _a = (props || this.props), items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
	        renderCount = this._getRenderCount(props);
	        // console.log('updating pages');
	        if (!this._requiredRect) {
	            this._updateRenderRects(props);
	        }
	        var newListState = this._buildPages(items, startIndex, renderCount);
	        var oldListPages = this.state.pages;
	        this.setState(newListState, function () {
	            // If measured version is invalid since we've updated the DOM
	            var heightsChanged = _this._updatePageMeasurements(oldListPages, newListState.pages);
	            // On first render, we should re-measure so that we don't get a visual glitch.
	            if (heightsChanged) {
	                _this._materializedRect = null;
	                if (!_this._hasCompletedFirstRender) {
	                    _this._hasCompletedFirstRender = true;
	                    _this._updatePages();
	                }
	                else {
	                    _this._onAsyncScroll();
	                }
	            }
	            else {
	                // Enqueue an idle bump.
	                _this._onAsyncIdle();
	            }
	        });
	    };
	    List.prototype._updatePageMeasurements = function (oldPages, newPages) {
	        var renderedIndexes = {};
	        var heightChanged = false;
	        var renderCount = this._getRenderCount();
	        for (var i = 0; i < oldPages.length; i++) {
	            var page = oldPages[i];
	            if (page.items) {
	                renderedIndexes[page.startIndex] = page;
	            }
	        }
	        for (var i = 0; i < newPages.length; i++) {
	            var page = newPages[i];
	            if (page.items) {
	                // Only evaluate page height if the page contains less items than total.
	                if (page.items.length < renderCount) {
	                    heightChanged = this._measurePage(page) || heightChanged;
	                }
	                if (!renderedIndexes[page.startIndex]) {
	                    this._onPageAdded(page);
	                }
	                else {
	                    delete renderedIndexes[page.startIndex];
	                }
	            }
	        }
	        for (var index in renderedIndexes) {
	            if (renderedIndexes.hasOwnProperty(index)) {
	                this._onPageRemoved(renderedIndexes[index]);
	            }
	        }
	        return heightChanged;
	    };
	    /**
	     * Given a page, measure its dimensions, update cache.
	     * @returns True if the height has changed.
	     */
	    List.prototype._measurePage = function (page) {
	        var hasChangedHeight = false;
	        var pageElement = this.refs[page.key];
	        var cachedHeight = this._cachedPageHeights[page.startIndex];
	        // console.log('   * measure attempt', page.startIndex, cachedHeight);
	        if (pageElement && (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
	            var newClientRect = _measurePageRect(pageElement);
	            hasChangedHeight = page.height !== newClientRect.height;
	            // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
	            page.height = newClientRect.height;
	            this._cachedPageHeights[page.startIndex] = {
	                height: newClientRect.height,
	                measureVersion: this._measureVersion
	            };
	            this._estimatedPageHeight = Math.round(((this._estimatedPageHeight * this._totalEstimates) + newClientRect.height) /
	                (this._totalEstimates + 1));
	            this._totalEstimates++;
	        }
	        return hasChangedHeight;
	    };
	    /** Called when a page has been added to the DOM. */
	    List.prototype._onPageAdded = function (page) {
	        var onPageAdded = this.props.onPageAdded;
	        // console.log('page added', page.startIndex, this.state.pages.map(page=>page.key).join(', '));
	        if (onPageAdded) {
	            onPageAdded(page);
	        }
	    };
	    /** Called when a page has been removed from the DOM. */
	    List.prototype._onPageRemoved = function (page) {
	        var onPageRemoved = this.props.onPageRemoved;
	        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page=>page.key).join(', '));
	        if (onPageRemoved) {
	            onPageRemoved(page);
	        }
	    };
	    /** Build up the pages that should be rendered. */
	    List.prototype._buildPages = function (items, startIndex, renderCount) {
	        var materializedRect = object_1.assign({}, EMPTY_RECT);
	        var itemsPerPage = 1;
	        var pages = [];
	        var pageTop = 0;
	        var currentSpacer = null;
	        var focusedIndex = this._focusedIndex;
	        var endIndex = startIndex + renderCount;
	        // First render is very important to track; when we render cells, we have no idea of estimated page height.
	        // So we should default to rendering only the first page so that we can get information.
	        // However if the user provides a measure function, let's just assume they know the right heights.
	        var isFirstRender = this._estimatedPageHeight === 0 && !this.props.getPageHeight;
	        var _loop_1 = function(itemIndex) {
	            itemsPerPage = this_1._getItemCountForPage(itemIndex, this_1._allowedRect);
	            var pageHeight = this_1._getPageHeight(itemIndex, itemsPerPage, this_1._surfaceRect);
	            var pageBottom = pageTop + pageHeight - 1;
	            var isPageRendered = array_1.findIndex(this_1.state.pages, function (page) { return page.items && page.startIndex === itemIndex; }) > -1;
	            var isPageInAllowedRange = pageBottom >= this_1._allowedRect.top && pageTop <= this_1._allowedRect.bottom;
	            var isPageInRequiredRange = pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom;
	            var isPageVisible = !isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered));
	            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < (itemIndex + itemsPerPage);
	            var isFirstPage = itemIndex === startIndex;
	            // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' + isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
	            // Only render whats visible, focused, or first page.
	            if (isPageVisible || isPageFocused || isFirstPage) {
	                if (currentSpacer) {
	                    pages.push(currentSpacer);
	                    currentSpacer = null;
	                }
	                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
	                var newPage = this_1._createPage(null, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex);
	                newPage.top = pageTop;
	                newPage.height = pageHeight;
	                pages.push(newPage);
	                if (isPageInRequiredRange) {
	                    _mergeRect(materializedRect, {
	                        top: pageTop,
	                        bottom: pageBottom,
	                        height: pageHeight,
	                        left: this_1._allowedRect.left,
	                        right: this_1._allowedRect.right,
	                        width: this_1._allowedRect.width
	                    });
	                }
	            }
	            else {
	                if (!currentSpacer) {
	                    currentSpacer = this_1._createPage('spacer-' + itemIndex, null, itemIndex, 0);
	                }
	                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
	                currentSpacer.itemCount += itemsPerPage;
	            }
	            pageTop += (pageBottom - pageTop + 1);
	            if (isFirstRender) {
	                return "break";
	            }
	        };
	        var this_1 = this;
	        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
	            var state_1 = _loop_1(itemIndex);
	            if (state_1 === "break") break;
	        }
	        if (currentSpacer) {
	            currentSpacer.key = 'spacer-end';
	            pages.push(currentSpacer);
	        }
	        this._materializedRect = materializedRect;
	        // console.log('materialized: ', materializedRect);
	        return {
	            pages: pages,
	            measureVersion: this._measureVersion
	        };
	    };
	    /**
	     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
	     * cached height, or estimated page height, or default page height.
	     */
	    List.prototype._getPageHeight = function (itemIndex, itemsPerPage, visibleRect) {
	        if (this.props.getPageHeight) {
	            return this.props.getPageHeight(itemIndex, visibleRect);
	        }
	        else {
	            var cachedHeight = (this._cachedPageHeights[itemIndex]);
	            return cachedHeight ? cachedHeight.height : (this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT);
	        }
	    };
	    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
	        var itemsPerPage = this.props.getItemCountForPage ? this.props.getItemCountForPage(itemIndex, visibileRect) : DEFAULT_ITEMS_PER_PAGE;
	        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
	    };
	    List.prototype._createPage = function (pageKey, items, startIndex, count, style) {
	        pageKey = pageKey || ('page-' + startIndex);
	        // Fill undefined cells because array.map will ignore undefined cells.
	        if (items) {
	            for (var i = 0; i < items.length; i++) {
	                items[i] = items[i] || null;
	            }
	        }
	        return {
	            key: pageKey,
	            startIndex: startIndex === undefined ? -1 : startIndex,
	            itemCount: (count === undefined) ? (items ? items.length : 0) : count,
	            items: items,
	            style: style || {},
	            top: 0,
	            height: 0
	        };
	    };
	    List.prototype._getRenderCount = function (props) {
	        var _a = props || this.props, items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
	        return (renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount);
	    };
	    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
	    List.prototype._updateRenderRects = function (props, forceUpdate) {
	        var _a = (props || this.props), renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var pages = this.state.pages;
	        var renderCount = this._getRenderCount(props);
	        var surfaceRect = this._surfaceRect;
	        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
	        if (forceUpdate ||
	            !pages ||
	            !this._surfaceRect ||
	            (pages.length > 0 && pages[0].items && pages[0].items.length < renderCount)) {
	            surfaceRect = this._surfaceRect = _measureSurfaceRect(this.refs.surface);
	        }
	        // If the surface is above the container top or below the container bottom, or if this is not the first
	        // render return empty rect.
	        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
	        // used to calculate the width of the list items.
	        if ((surfaceRect.bottom < 0 ||
	            surfaceRect.top > window.innerHeight) && !this.isFirstRenderRectUpdate) {
	            this._requiredRect = EMPTY_RECT;
	            this._allowedRect = EMPTY_RECT;
	        }
	        else {
	            this.isFirstRenderRectUpdate = false;
	            var visibleTop = Math.max(0, -surfaceRect.top);
	            var visibleRect = {
	                top: visibleTop,
	                left: surfaceRect.left,
	                bottom: visibleTop + window.innerHeight,
	                right: surfaceRect.right,
	                width: surfaceRect.width,
	                height: window.innerHeight
	            };
	            // The required/allowed rects are adjusted versions of the visible rect.
	            this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
	            this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
	        }
	    };
	    List.defaultProps = {
	        startIndex: 0,
	        onRenderCell: function (item, index, containsFocus) { return (React.createElement("div", null, (item && item.name) || '')); },
	        renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
	        renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND
	    };
	    return List;
	}(BaseComponent_1.BaseComponent));
	exports.List = List;
	function _expandRect(rect, pagesBefore, pagesAfter) {
	    var top = rect.top - (pagesBefore * rect.height);
	    var height = rect.height + ((pagesBefore + pagesAfter) * rect.height);
	    return {
	        top: top,
	        bottom: top + height,
	        height: height,
	        left: rect.left,
	        right: rect.right,
	        width: rect.width
	    };
	}
	function _isContainedWithin(innerRect, outerRect) {
	    return (innerRect.top >= outerRect.top &&
	        innerRect.left >= outerRect.left &&
	        innerRect.bottom <= outerRect.bottom &&
	        innerRect.right <= outerRect.right);
	}
	function _mergeRect(targetRect, newRect) {
	    targetRect.top = (newRect.top < targetRect.top || targetRect.top === -1) ? newRect.top : targetRect.top;
	    targetRect.left = (newRect.left < targetRect.left || targetRect.left === -1) ? newRect.left : targetRect.left;
	    targetRect.bottom = (newRect.bottom > targetRect.bottom || targetRect.bottom === -1) ? newRect.bottom : targetRect.bottom;
	    targetRect.right = (newRect.right > targetRect.right || targetRect.right === -1) ? newRect.right : targetRect.right;
	    targetRect.width = targetRect.right - targetRect.left + 1;
	    targetRect.height = targetRect.bottom - targetRect.top + 1;
	    return targetRect;
	}
	
	//# sourceMappingURL=List.js.map


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Async_1 = __webpack_require__(23);
	var EventGroup_1 = __webpack_require__(14);
	var BaseComponent = (function (_super) {
	    __extends(BaseComponent, _super);
	    function BaseComponent(props) {
	        _super.call(this, props);
	        _makeAllSafe(this, BaseComponent.prototype, [
	            'componentWillMount',
	            'componentDidMount',
	            'shouldComponentUpdate',
	            'componentWillUpdate',
	            'componentWillReceiveProps',
	            'render',
	            'componentDidUpdate',
	            'componentWillUnmount'
	        ]);
	    }
	    /** If we have disposables, dispose them automatically on unmount. */
	    BaseComponent.prototype.componentWillUnmount = function () {
	        if (this.__disposables) {
	            for (var i = 0, len = this._disposables.length; i < len; i++) {
	                this.__disposables[i].dispose();
	            }
	            this.__disposables = null;
	        }
	    };
	    Object.defineProperty(BaseComponent.prototype, "className", {
	        /** Gets the object's class name. */
	        get: function () {
	            var funcNameRegex = /function (.{1,})\(/;
	            var results = (funcNameRegex).exec((this).constructor.toString());
	            return (results && results.length > 1) ? results[1] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_disposables", {
	        /** Allows subclasses to push things to this._disposables to be auto disposed. */
	        get: function () {
	            if (!this.__disposables) {
	                this.__disposables = [];
	            }
	            return this.__disposables;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_async", {
	        /**
	         * Gets the async instance associated with the component, created on demand. The async instance gives
	         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
	         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
	         * preserve the this pointer so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__async) {
	                this.__async = new Async_1.Async(this);
	                this._disposables.push(this.__async);
	            }
	            return this.__async;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_events", {
	        /**
	         * Gets the event group instance assocaited with the component, created on demand. The event instance
	         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
	         * will be automatically disconnected after unmounting. The helpers within the events object also
	         * preserve the this reference so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__events) {
	                this.__events = new EventGroup_1.EventGroup(this);
	                this._disposables.push(this.__events);
	            }
	            return this.__events;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseComponent;
	}(React.Component));
	exports.BaseComponent = BaseComponent;
	/**
	 * Helper to override a given method with a wrapper method that can try/catch the original, but also
	 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
	 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
	 **/
	function _makeAllSafe(obj, prototype, methodNames) {
	    for (var i = 0, len = methodNames.length; i < len; i++) {
	        _makeSafe(obj, prototype, methodNames[i]);
	    }
	}
	function _makeSafe(obj, prototype, methodName) {
	    var classMethod = obj[methodName];
	    var prototypeMethod = prototype[methodName];
	    if (classMethod || prototypeMethod) {
	        obj[methodName] = function () {
	            var retVal;
	            try {
	                if (prototypeMethod) {
	                    retVal = prototypeMethod.apply(this, arguments);
	                }
	                if (classMethod) {
	                    retVal = classMethod.apply(this, arguments);
	                }
	            }
	            catch (e) {
	                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
	                if (BaseComponent.onError) {
	                    BaseComponent.onError(errorMessage, e);
	                }
	            }
	            return retVal;
	        };
	    }
	}
	BaseComponent.onError = function (errorMessage) { return console.error(errorMessage); };
	
	//# sourceMappingURL=BaseComponent.js.map


/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";
	function findIndex(array, cb) {
	    var index = -1;
	    for (var i = 0; array && i < array.length; i++) {
	        if (cb(array[i], i)) {
	            index = i;
	            break;
	        }
	    }
	    return index;
	}
	exports.findIndex = findIndex;
	function createArray(size, getItem) {
	    var array = [];
	    for (var i = 0; i < size; i++) {
	        array.push(getItem(i));
	    }
	    return array;
	}
	exports.createArray = createArray;
	
	//# sourceMappingURL=array.js.map


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(106));
	__export(__webpack_require__(135));
	__export(__webpack_require__(136));
	__export(__webpack_require__(137));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interfaces_1 = __webpack_require__(106);
	var EventGroup_1 = __webpack_require__(14);
	var Selection = (function () {
	    function Selection(onSelectionChanged, getKey) {
	        this.getKey = getKey || (function (item, index) { return (item ? item.key : String(index)); });
	        this._changeEventSuppressionCount = 0;
	        this._exemptedCount = 0;
	        this._anchoredIndex = 0;
	        this.setItems([], true);
	        this._onSelectionChanged = onSelectionChanged;
	    }
	    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
	        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
	        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
	            this._hasChanged = false;
	            if (!suppressChange) {
	                this._change();
	            }
	        }
	    };
	    /**
	     * Selection needs the items, call this method to set them. If the set
	     * of items is the same, this will re-evaluate selection and index maps.
	     * Otherwise, shouldClear should be set to true, so that selection is
	     * cleared.
	     */
	    Selection.prototype.setItems = function (items, shouldClear) {
	        if (shouldClear === void 0) { shouldClear = true; }
	        var newKeyToIndexMap = {};
	        // Build lookup table for quick selection evaluation.
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item) {
	                newKeyToIndexMap[this.getKey(item, i)] = i;
	            }
	        }
	        if (shouldClear) {
	            this.setAllSelected(false);
	        }
	        // Check the exemption list for discrepencies.
	        var newExemptedIndicies = {};
	        for (var index in this._exemptedIndices) {
	            if (this._exemptedIndices.hasOwnProperty(index)) {
	                var item = this._items[index];
	                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
	                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
	                if (newIndex === undefined) {
	                    // We don't know the index of the item any more so it's either moved or removed.
	                    // In this case we reset the entire selection.
	                    newExemptedIndicies = {};
	                    this._isAllSelected = false;
	                    this._exemptedCount = 0;
	                    break;
	                }
	                else {
	                    // We know the new index of the item. update the existing exemption table.
	                    newExemptedIndicies[newIndex] = true;
	                }
	            }
	        }
	        this._exemptedIndices = newExemptedIndicies;
	        this._keyToIndexMap = newKeyToIndexMap;
	        this._items = items || [];
	        this._change();
	    };
	    Selection.prototype.getItems = function () {
	        return this._items;
	    };
	    Selection.prototype.getSelection = function () {
	        var selectedItems = [];
	        for (var i = 0; i < this._items.length; i++) {
	            var item = this._items[i];
	            var isExempt = !!this._exemptedIndices[i];
	            var key = item ? this.getKey(item, i) : null;
	            if ((!key && this._isAllSelected) ||
	                (key && this._isAllSelected && !isExempt) ||
	                (key && !this._isAllSelected && isExempt)) {
	                selectedItems.push(item);
	            }
	        }
	        return selectedItems;
	    };
	    Selection.prototype.getSelectedCount = function () {
	        return this._isAllSelected ? (this._items.length - this._exemptedCount) : (this._exemptedCount);
	    };
	    Selection.prototype.isAllSelected = function () {
	        return ((this.count > 0) &&
	            (this._isAllSelected && this._exemptedCount === 0) ||
	            (!this._isAllSelected && this._exemptedCount === this._items.length && this._items.length > 0));
	    };
	    Selection.prototype.isKeySelected = function (key) {
	        var index = this._keyToIndexMap[key];
	        return this.isIndexSelected(index);
	    };
	    Selection.prototype.isIndexSelected = function (index) {
	        return !!((this.count > 0) &&
	            (this._isAllSelected && !this._exemptedIndices[index]) ||
	            (!this._isAllSelected && this._exemptedIndices[index]));
	    };
	    Selection.prototype.setAllSelected = function (isAllSelected) {
	        this._exemptedIndices = {};
	        this._exemptedCount = 0;
	        this._isAllSelected = isAllSelected;
	        this._updateCount();
	    };
	    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
	        var index = this._keyToIndexMap[key];
	        if (index >= 0) {
	            this.setIndexSelected(index, isSelected, shouldAnchor);
	        }
	    };
	    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
	        // Clamp the index.
	        index = Math.min(Math.max(0, index), this._items.length - 1);
	        var isExempt = this._exemptedIndices[index];
	        var hasChanged = false;
	        // Determine if we need to remove the exemption.
	        if (isExempt && ((isSelected && this._isAllSelected) ||
	            (!isSelected && !this._isAllSelected))) {
	            hasChanged = true;
	            delete this._exemptedIndices[index];
	            this._exemptedCount--;
	        }
	        // Determine if we need to add the exemption.
	        if (!isExempt && ((isSelected && !this._isAllSelected) ||
	            (!isSelected && this._isAllSelected))) {
	            hasChanged = true;
	            this._exemptedIndices[index] = true;
	            this._exemptedCount++;
	        }
	        if (shouldAnchor) {
	            this._anchoredIndex = index;
	        }
	        if (hasChanged) {
	            this._updateCount();
	        }
	    };
	    Selection.prototype.selectToKey = function (key) {
	        this.selectToIndex(this._keyToIndexMap[key]);
	    };
	    Selection.prototype.selectToIndex = function (index) {
	        var anchorIndex = this._anchoredIndex || 0;
	        var startIndex = Math.min(index, anchorIndex);
	        var endIndex = Math.max(index, anchorIndex);
	        this.setChangeEvents(false);
	        for (; startIndex <= endIndex; startIndex++) {
	            this.setIndexSelected(startIndex, true, false);
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype.toggleAllSelected = function () {
	        this.setAllSelected(!this.isAllSelected());
	    };
	    Selection.prototype.toggleKeySelected = function (key) {
	        this.setKeySelected(key, !this.isKeySelected(key), true);
	    };
	    Selection.prototype.toggleIndexSelected = function (index) {
	        this.setIndexSelected(index, !this.isIndexSelected(index), true);
	    };
	    Selection.prototype._updateCount = function () {
	        this.count = this.getSelectedCount();
	        this._change();
	    };
	    Selection.prototype._change = function () {
	        if (this._changeEventSuppressionCount === 0) {
	            EventGroup_1.EventGroup.raise(this, interfaces_1.SELECTION_CHANGE);
	            if (this._onSelectionChanged) {
	                this._onSelectionChanged();
	            }
	        }
	        else {
	            this._hasChanged = true;
	        }
	    };
	    return Selection;
	}());
	exports.Selection = Selection;
	
	//# sourceMappingURL=Selection.js.map


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interfaces_1 = __webpack_require__(106);
	var SelectionLayout = (function () {
	    function SelectionLayout(direction) {
	        this._direction = direction;
	    }
	    SelectionLayout.prototype.getItemIndexAbove = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.max(0, focusIndex - 1) : focusIndex;
	    };
	    SelectionLayout.prototype.getItemIndexBelow = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.min(items.length - 1, focusIndex + 1) : focusIndex;
	    };
	    SelectionLayout.prototype.getItemIndexLeft = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.max(0, focusIndex - 1);
	    };
	    SelectionLayout.prototype.getItemIndexRight = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.min(items.length - 1, focusIndex + 1);
	    };
	    return SelectionLayout;
	}());
	exports.SelectionLayout = SelectionLayout;
	
	//# sourceMappingURL=SelectionLayout.js.map


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var EventGroup_1 = __webpack_require__(14);
	var SelectionLayout_1 = __webpack_require__(136);
	var KeyCodes_1 = __webpack_require__(15);
	var interfaces_1 = __webpack_require__(106);
	// Selection definitions:
	//
	// Anchor index: the point from which a range selection starts.
	// Focus index: the point from which layout movement originates from.
	//
	// These two can differ. Tests:
	//
	// If you start at index 5
	// Shift click to index 10
	//    The focus is 10, the anchor is 5.
	// If you shift click at index 0
	//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
	// If you click index 8
	//    The anchor and focus are set to 8.
	var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
	var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
	var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
	var SelectionZone = (function (_super) {
	    __extends(SelectionZone, _super);
	    function SelectionZone() {
	        _super.call(this);
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    SelectionZone.prototype.componentDidMount = function () {
	        var element = this.refs.root;
	        this._events.onAll(element, {
	            'keydown': this._onKeyDown,
	            'mousedown': this._onMouseDown,
	            'click': this._onClick,
	            'dblclick': this._onDoubleClick
	        });
	        // Always know what the state of shift/ctrl/meta are.
	        this._events.on(element, 'focus', this._onFocus, true);
	        this._events.on(window, 'keydown', this._onKeyChangeCapture, true);
	        this._events.on(window, 'keyup', this._onKeyChangeCapture, true);
	    };
	    SelectionZone.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    SelectionZone.prototype.render = function () {
	        return (React.createElement("div", {className: 'ms-SelectionZone', ref: 'root'}, this.props.children));
	    };
	    SelectionZone.prototype._onFocus = function (ev) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var index = this._getIndexFromElement(ev.target);
	        if (index >= 0 && selectionMode !== interfaces_1.SelectionMode.none && !this._hasClickedOnItem) {
	            selection.setChangeEvents(false);
	            if (this._isShiftPressed && selectionMode === interfaces_1.SelectionMode.multiple) {
	                if (!this._isCtrlPressed && !this._isMetaPressed) {
	                    selection.setAllSelected(false);
	                }
	                selection.selectToIndex(index);
	            }
	            else if (!this._isCtrlPressed && !this._isMetaPressed) {
	                selection.setAllSelected(false);
	                selection.setIndexSelected(index, true, true);
	            }
	            selection.setChangeEvents(true);
	        }
	        this._hasClickedOnItem = false;
	    };
	    SelectionZone.prototype._onMouseDown = function (ev) {
	        // We need to reset the key states for ctrl/meta/etc.
	        this._onKeyChangeCapture(ev);
	        var target = ev.target;
	        var selectionMode = this.props.selectionMode;
	        var index = this._getIndexFromElement(target, true);
	        if (index >= 0 && selectionMode !== interfaces_1.SelectionMode.none) {
	            this._hasClickedOnItem = true;
	        }
	    };
	    SelectionZone.prototype._onClick = function (ev) {
	        var target = ev.target;
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode, onItemInvoked = _a.onItemInvoked;
	        var isToggleElement = this._isToggleElement(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) || ev.ctrlKey || ev.metaKey;
	        var index = this._getIndexFromElement(target, true);
	        if (index >= 0 && selectionMode !== interfaces_1.SelectionMode.none) {
	            var isSelected = selection.isIndexSelected(index);
	            // Disable change events.
	            selection.setChangeEvents(false);
	            if (ev.shiftKey && selectionMode === interfaces_1.SelectionMode.multiple) {
	                if (!ev.ctrlKey && !ev.metaKey) {
	                    selection.setAllSelected(false);
	                }
	                selection.selectToIndex(index);
	            }
	            else {
	                if (selectionMode === interfaces_1.SelectionMode.single || !isToggleElement) {
	                    selection.setAllSelected(false);
	                }
	                selection.setIndexSelected(index, isToggleElement ? !isSelected : true, !ev.shiftKey);
	            }
	            // Re-enabled change events.
	            selection.setChangeEvents(true);
	        }
	        else if (onItemInvoked) {
	            onItemInvoked(selection.getItems()[index], index, ev);
	        }
	    };
	    SelectionZone.prototype._onDoubleClick = function (ev) {
	        var _a = this.props, onItemInvoked = _a.onItemInvoked, selection = _a.selection;
	        var index = this._getIndexFromElement(ev.target, true);
	        if (onItemInvoked) {
	            onItemInvoked(selection.getItems()[index], index, ev);
	        }
	    };
	    SelectionZone.prototype._onKeyChangeCapture = function (ev) {
	        this._isShiftPressed = ev.shiftKey;
	        this._isCtrlPressed = ev.ctrlKey;
	        this._isMetaPressed = ev.metaKey;
	    };
	    SelectionZone.prototype._onKeyDown = function (ev) {
	        var target = ev.target;
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode, onItemInvoked = _a.onItemInvoked;
	        var isToggleElement = this._isToggleElement(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
	        var isToggleAllElement = !isToggleElement && this._isToggleElement(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME);
	        var index = this._getIndexFromElement(target, true);
	        if (index >= 0 && !this._isInputElement(target) && selectionMode !== interfaces_1.SelectionMode.none) {
	            var isSelected = selection.isIndexSelected(index);
	            if (ev.which === KeyCodes_1.KeyCodes.space) {
	                if (isToggleAllElement) {
	                    if (selectionMode === interfaces_1.SelectionMode.multiple) {
	                        selection.toggleAllSelected();
	                    }
	                }
	                else {
	                    selection.setChangeEvents(false);
	                    if (selectionMode === interfaces_1.SelectionMode.single) {
	                        selection.setAllSelected(false);
	                    }
	                    selection.setIndexSelected(index, !isSelected, true);
	                    selection.setChangeEvents(true);
	                }
	            }
	            else if (ev.which === KeyCodes_1.KeyCodes.enter) {
	                if (isToggleAllElement) {
	                    selection.toggleAllSelected();
	                }
	                else if (isToggleElement) {
	                    selection.setChangeEvents(false);
	                    if (selectionMode === interfaces_1.SelectionMode.single) {
	                        selection.setAllSelected(false);
	                    }
	                    selection.setIndexSelected(index, !isSelected, true);
	                    selection.setChangeEvents(true);
	                }
	                else if (this._getIndexFromElement(target) >= 0 && onItemInvoked) {
	                    // if the target IS the item, and not a link inside, then call the invoke method.
	                    onItemInvoked(selection.getItems()[index], index, ev);
	                }
	                else {
	                    return;
	                }
	            }
	            else if (ev.which === KeyCodes_1.KeyCodes.a && (ev.ctrlKey || ev.metaKey) && selectionMode === interfaces_1.SelectionMode.multiple) {
	                selection.setAllSelected(true);
	            }
	            else if (ev.which === KeyCodes_1.KeyCodes.escape) {
	                selection.setAllSelected(false);
	            }
	            else {
	                return;
	            }
	        }
	        else {
	            return;
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    SelectionZone.prototype._isToggleElement = function (element, attributeName) {
	        var isToggle = false;
	        while (!isToggle && element !== this.refs.root) {
	            isToggle = element.getAttribute(attributeName) === 'true';
	            element = element.parentElement;
	        }
	        return isToggle;
	    };
	    SelectionZone.prototype._isInputElement = function (element) {
	        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
	    };
	    SelectionZone.prototype._getIndexFromElement = function (element, traverseParents) {
	        var index = -1;
	        do {
	            var indexString = element.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
	            if (indexString) {
	                index = Number(indexString);
	                break;
	            }
	            element = element.parentElement;
	        } while (traverseParents && element !== this.refs.root);
	        return index;
	    };
	    SelectionZone.defaultProps = {
	        layout: new SelectionLayout_1.SelectionLayout(interfaces_1.SelectionDirection.vertical),
	        isMultiSelectEnabled: true,
	        isSelectedOnFocus: true
	    };
	    return SelectionZone;
	}(React.Component));
	exports.SelectionZone = SelectionZone;
	
	//# sourceMappingURL=SelectionZone.js.map


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-GroupedList{position:relative;font-size:12px}.ms-GroupedList BUTTON{font-family:inherit;background-color:transparent}.ms-GroupedList>.ms-FocusZone{display:inline-block;vertical-align:top;min-width:1px;min-height:1px}.ms-GroupedList.is-horizontalConstrained{overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}.ms-GroupedList-cell{word-break:break-word}.ms-GroupedList-group.is-dropping{background-color:"[theme:neutralLight, default: #eaeaea]"}.ms-GroupedList .ms-List-cell{min-height:38px}');
	
	//# sourceMappingURL=GroupedList.scss.js.map


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(132);
	var RESIZE_DELAY = 500;
	function withViewport(ComposedComponent) {
	    return (function (_super) {
	        __extends(WithViewportComponent, _super);
	        function WithViewportComponent() {
	            _super.call(this);
	            this.state = {
	                viewport: {
	                    width: 0,
	                    height: 0
	                }
	            };
	        }
	        WithViewportComponent.prototype.componentDidMount = function () {
	            this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
	                leading: false
	            });
	            this._events.on(window, 'resize', this._onAsyncResize);
	            this._updateViewport();
	        };
	        WithViewportComponent.prototype.componentWillUnmount = function () {
	            this._events.dispose();
	        };
	        WithViewportComponent.prototype.render = function () {
	            var viewport = this.state.viewport;
	            var isViewportVisible = viewport.width > 0 && viewport.height > 0;
	            return (React.createElement("div", {className: 'ms-Viewport', ref: 'root', style: { minWidth: 1, minHeight: 1 }}, isViewportVisible && (React.createElement(ComposedComponent, React.__spread({ref: 'component', viewport: viewport}, this.props)))));
	        };
	        WithViewportComponent.prototype.forceUpdate = function () {
	            this._updateViewport(true);
	        };
	        WithViewportComponent.prototype._onAsyncResize = function () {
	            this._updateViewport();
	        };
	        WithViewportComponent.prototype._updateViewport = function (withForceUpdate) {
	            var _this = this;
	            var viewport = this.state.viewport;
	            var viewportElement = this.refs.root;
	            var scrollElement = this._findScrollableElement(viewportElement);
	            var clientRect = viewportElement.getBoundingClientRect();
	            var scrollRect = scrollElement.getBoundingClientRect();
	            var updateComponent = function () {
	                if (withForceUpdate && _this.refs.component) {
	                    _this.refs.component.forceUpdate();
	                }
	            };
	            var isSizeChanged = (clientRect.width !== viewport.width ||
	                scrollRect.height !== viewport.height);
	            if (isSizeChanged) {
	                this.setState({
	                    viewport: {
	                        width: clientRect.width,
	                        height: scrollRect.height
	                    }
	                }, updateComponent);
	            }
	            else {
	                updateComponent();
	            }
	        };
	        WithViewportComponent.prototype._findScrollableElement = function (rootElement) {
	            var computedOverflow = getComputedStyle(rootElement)['overflow-y'];
	            while ((rootElement !== document.body) &&
	                (computedOverflow !== 'auto') &&
	                (computedOverflow !== 'scroll')) {
	                if (rootElement.parentElement === null) {
	                    break;
	                }
	                rootElement = rootElement.parentElement;
	                computedOverflow = getComputedStyle(rootElement)['overflow-y'];
	            }
	            return rootElement;
	        };
	        return WithViewportComponent;
	    }(BaseComponent_1.BaseComponent));
	}
	exports.withViewport = withViewport;
	
	//# sourceMappingURL=withViewport.js.map


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReactDOM = __webpack_require__(2);
	var EventGroup_1 = __webpack_require__(14);
	var DISTANCE_FOR_DRAG_SQUARED = 25; // the minimum mouse move distance to treat it as drag event
	var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
	var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
	var DragDropHelper = (function () {
	    function DragDropHelper(params) {
	        this._selection = params.selection;
	        this._dragEnterCounts = {};
	        this._activeTargets = {};
	        this._events = new EventGroup_1.EventGroup(this);
	        // clear drag data when mouse up, use capture event to ensure it will be run
	        this._events.on(document.body, 'mouseup', this._onMouseUp.bind(this), true);
	        this._events.on(document, 'mouseup', this._onDocumentMouseUp.bind(this), true);
	    }
	    DragDropHelper.prototype.dispose = function () {
	        this._events.dispose();
	    };
	    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
	        var _this = this;
	        if (dragDropOptions && root) {
	            var key_1 = dragDropOptions.key, eventMap = dragDropOptions.eventMap, context_1 = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
	            var dragDropTarget = { root: root, options: dragDropOptions };
	            var isDraggable = this._isDraggable(dragDropTarget);
	            var isDroppable = this._isDroppable(dragDropTarget);
	            if (isDraggable || isDroppable) {
	                this._activeTargets[key_1] = dragDropTarget;
	                if (eventMap) {
	                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
	                        var event_1 = eventMap_1[_i];
	                        this._events.on(root, event_1.eventName, event_1.callback.bind(null, context_1));
	                    }
	                }
	            }
	            if (isDroppable) {
	                this._dragEnterCounts[key_1] = 0;
	                // dragenter and dragleave will be fired when hover to the child element
	                // but we only want to change state when enter or leave the current element
	                // use the count to ensure it.
	                events.onAll(root, {
	                    'dragenter': function (event) {
	                        event.preventDefault(); // needed for IE
	                        if (!event.isHandled) {
	                            event.isHandled = true;
	                            _this._dragEnterCounts[key_1]++;
	                            if (_this._dragEnterCounts[key_1] === 1) {
	                                updateDropState_1(true /* isDropping */, event);
	                            }
	                        }
	                    },
	                    'dragleave': function (event) {
	                        if (!event.isHandled) {
	                            event.isHandled = true;
	                            _this._dragEnterCounts[key_1]--;
	                            if (_this._dragEnterCounts[key_1] === 0) {
	                                updateDropState_1(false /* isDropping */, event);
	                            }
	                        }
	                    },
	                    'dragend': function (event) {
	                        _this._dragEnterCounts[key_1] = 0;
	                        updateDropState_1(false /* isDropping */, event);
	                    },
	                    'drop': function (event) {
	                        _this._dragEnterCounts[key_1] = 0;
	                        updateDropState_1(false /* isDropping */, event);
	                    }
	                });
	            }
	            if (isDraggable) {
	                events.on(root, 'mousedown', this._onMouseDown.bind(this, dragDropTarget));
	            }
	        }
	    };
	    DragDropHelper.prototype.unsubscribe = function (root, key) {
	        delete this._activeTargets[key];
	        this._events.off(root);
	    };
	    /**
	     * clear drag data when mouse up on body
	     */
	    DragDropHelper.prototype._onMouseUp = function (event) {
	        this._isDragging = false;
	        if (this._dragData) {
	            for (var key in this._activeTargets) {
	                if (this._activeTargets.hasOwnProperty(key)) {
	                    var target = this._activeTargets[key];
	                    if (target && target.root) {
	                        this._events.off(target.root, 'mousemove');
	                        this._events.off(target.root, 'mouseleave');
	                    }
	                }
	            }
	            if (this._dragData.dropTarget) {
	                // raise dargleave event to let dropTarget know it need to remove dropping style
	                EventGroup_1.EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
	            }
	        }
	        this._dragData = null;
	    };
	    /**
	     * clear drag data when mouse up outside of the document
	     */
	    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
	        if (event.target === document.documentElement) {
	            this._onMouseUp(event);
	        }
	    };
	    /**
	     * when mouse move over a new drop target while dragging some items,
	     * fire dragleave on the old target and fire dragenter to the new target
	     * The target will handle style change on dragenter and dragleave events.
	     */
	    DragDropHelper.prototype._onMouseMove = function (target, event) {
	        var _a = event.buttons, buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
	        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
	            // cancel mouse down event and return early when the primary button is not pressed
	            this._onMouseUp(event);
	            return;
	        }
	        var root = target.root, options = target.options;
	        if (this._isDragging) {
	            if (this._isDroppable(target)) {
	                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
	                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
	                // outer target too, and we need to prevent the outer one from taking over.
	                // So, check if the last dropTarget is not a child of the current.
	                if (this._dragData.dropTarget &&
	                    this._dragData.dropTarget.options.key !== options.key &&
	                    !this._isChild(root, this._dragData.dropTarget.root)) {
	                    EventGroup_1.EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
	                    this._dragData.dropTarget = null;
	                }
	                if (!this._dragData.dropTarget) {
	                    EventGroup_1.EventGroup.raise(root, 'dragenter');
	                    this._dragData.dropTarget = target;
	                }
	            }
	        }
	        else if (this._dragData) {
	            if (this._isDraggable(target)) {
	                var xDiff = this._dragData.clientX - event.clientX;
	                var yDiff = this._dragData.clientY - event.clientY;
	                if (xDiff * xDiff + yDiff * yDiff >= DISTANCE_FOR_DRAG_SQUARED) {
	                    if (this._dragData.dragTarget &&
	                        this._selection.isIndexSelected(options.selectionIndex)) {
	                        this._isDragging = true;
	                        if (options.onDragStart) {
	                            options.onDragStart(options.context.data, options.context.index, this._selection.getSelection(), event);
	                        }
	                    }
	                }
	            }
	        }
	    };
	    /**
	     * when mouse leave a target while dragging some items, fire dragleave to the target
	     */
	    DragDropHelper.prototype._onMouseLeave = function (target, event) {
	        if (this._isDragging) {
	            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.options.key === target.options.key) {
	                EventGroup_1.EventGroup.raise(target.root, 'dragleave');
	                this._dragData.dropTarget = null;
	            }
	        }
	    };
	    /**
	     * when mouse down on a draggable item, we start to track dragdata.
	     */
	    DragDropHelper.prototype._onMouseDown = function (target, event) {
	        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
	            // Ignore anything except the primary button.
	            return;
	        }
	        if (this._isDraggable(target)) {
	            this._dragData = {
	                clientX: event.clientX,
	                clientY: event.clientY,
	                eventTarget: event.target,
	                dragTarget: target
	            };
	            for (var key in this._activeTargets) {
	                if (this._activeTargets.hasOwnProperty(key)) {
	                    var activeTarget = this._activeTargets[key];
	                    if (activeTarget && activeTarget.root) {
	                        this._events.on(activeTarget.root, 'mousemove', this._onMouseMove.bind(this, activeTarget));
	                        this._events.on(activeTarget.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget));
	                    }
	                }
	            }
	        }
	        else {
	            this._dragData = null;
	        }
	    };
	    /**
	     * determine whether the child target is a descendant of the parent
	     */
	    DragDropHelper.prototype._isChild = function (parent, child) {
	        var parentElement = ReactDOM.findDOMNode(parent);
	        var childElement = ReactDOM.findDOMNode(child);
	        while (childElement && childElement.parentElement) {
	            if (childElement.parentElement === parentElement) {
	                return true;
	            }
	            childElement = childElement.parentElement;
	        }
	        return false;
	    };
	    DragDropHelper.prototype._isDraggable = function (target) {
	        var options = target.options;
	        return options.canDrag && options.canDrag(options.context.data);
	    };
	    DragDropHelper.prototype._isDroppable = function (target) {
	        // TODO: take the drag item into consideration to prevent dragging an item into the same group
	        var options = target.options;
	        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : null;
	        return options.canDrop && options.canDrop(options.context, dragContext);
	    };
	    return DragDropHelper;
	}());
	exports.DragDropHelper = DragDropHelper;
	
	//# sourceMappingURL=DragDropHelper.js.map


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DetailsList{position:relative;font-size:12px}.ms-DetailsList BUTTON{font-family:inherit;background-color:transparent}.ms-DetailsList>.ms-FocusZone{display:inline-block;vertical-align:top;min-width:1px;min-height:1px}.ms-DetailsList.is-horizontalConstrained{overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}.ms-DetailsList-cell{word-break:break-word}.ms-DetailsList .ms-List-cell{min-height:38px}');
	
	//# sourceMappingURL=DetailsList.scss.js.map


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(143));
	var index_2 = __webpack_require__(143);
	exports.default = index_2.Dialog;
	
	//# sourceMappingURL=Dialog.js.map


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(144));
	__export(__webpack_require__(152));
	__export(__webpack_require__(147));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var index_1 = __webpack_require__(145);
	var Dialog_Props_1 = __webpack_require__(147);
	var Overlay_1 = __webpack_require__(148);
	var Layer_1 = __webpack_require__(27);
	var DialogFooter_1 = __webpack_require__(152);
	var css_1 = __webpack_require__(17);
	var index_2 = __webpack_require__(154);
	var withResponsiveMode_1 = __webpack_require__(156);
	__webpack_require__(153);
	// @TODO - need to add animations, pending Fabric Team + Coulton work
	// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)
	var _instance = 0;
	var Dialog = (function (_super) {
	    __extends(Dialog, _super);
	    function Dialog(props) {
	        _super.call(this, props);
	        this.state = {
	            id: "Dialog-" + _instance++,
	        };
	    }
	    Dialog.prototype.render = function () {
	        var _a = this.props, isOpen = _a.isOpen, type = _a.type, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, title = _a.title, subText = _a.subText, isBlocking = _a.isBlocking, responsiveMode = _a.responsiveMode, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, ignoreExternalFocusing = _a.ignoreExternalFocusing, forceFocusInsideTrap = _a.forceFocusInsideTrap, firstFocusableSelector = _a.firstFocusableSelector, closeButtonAriaLabel = _a.closeButtonAriaLabel, onLayerMounted = _a.onLayerMounted;
	        var id = this.state.id;
	        // @TODO - the discussion on whether the Dialog contain a property for rendering itself is still being discussed
	        if (!isOpen) {
	            return null;
	        }
	        var subTextContent;
	        var dialogClassName = css_1.css('ms-Dialog', {
	            'ms-Dialog--lgHeader': type === Dialog_Props_1.DialogType.largeHeader,
	            'ms-Dialog--close': type === Dialog_Props_1.DialogType.close
	        });
	        var groupings = this._groupChildren();
	        if (subText) {
	            subTextContent = React.createElement("p", {className: 'ms-Dialog-subText', id: id + '-subText'}, subText);
	        }
	        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
	        if (responsiveMode >= withResponsiveMode_1.ResponsiveMode.small) {
	            return (React.createElement(Layer_1.Layer, {onLayerMounted: onLayerMounted}, React.createElement(index_2.Popup, {className: dialogClassName, role: 'dialog', ariaLabelledBy: title ? id + '-title' : '', ariaDescribedBy: subText ? id + '-subText' : '', onDismiss: onDismiss}, React.createElement("div", {className: dialogClassName}, React.createElement(Overlay_1.Overlay, {isDarkThemed: isDarkOverlay, onClick: isBlocking ? null : onDismiss}), React.createElement(index_1.FocusTrapZone, {className: css_1.css('ms-Dialog-main', this.props.containerClassName), elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector}, React.createElement("button", {className: 'ms-Dialog-button ms-Dialog-button--close', onClick: onDismiss, "aria-label": closeButtonAriaLabel}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'})), React.createElement("div", {className: 'ms-Dialog-header'}, React.createElement("p", {className: 'ms-Dialog-title', id: id + '-title'}, title)), React.createElement("div", {className: 'ms-Dialog-inner'}, React.createElement("div", {className: css_1.css('ms-Dialog-content', this.props.contentClassName)}, subTextContent, groupings.contents), groupings.footers))))));
	        }
	    };
	    // @TODO - typing the footers as an array of DialogFooter is difficult because
	    // casing "child as DialogFooter" causes a problem because
	    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
	    Dialog.prototype._groupChildren = function () {
	        var groupings = {
	            footers: [],
	            contents: []
	        };
	        React.Children.map(this.props.children, function (child) {
	            if (typeof child === 'object' && child.type === DialogFooter_1.DialogFooter) {
	                groupings.footers.push(child);
	            }
	            else {
	                groupings.contents.push(child);
	            }
	        });
	        return groupings;
	    };
	    Dialog.defaultProps = {
	        isOpen: false,
	        type: Dialog_Props_1.DialogType.normal,
	        isDarkOverlay: true,
	        isBlocking: false,
	        containerClassName: '',
	        contentClassName: ''
	    };
	    Dialog = __decorate([
	        withResponsiveMode_1.withResponsiveMode
	    ], Dialog);
	    return Dialog;
	}(React.Component));
	exports.Dialog = Dialog;
	
	//# sourceMappingURL=Dialog.js.map


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(146));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var KeyCodes_1 = __webpack_require__(15);
	var EventGroup_1 = __webpack_require__(14);
	var focus_1 = __webpack_require__(18);
	var FocusTrapZone = (function (_super) {
	    __extends(FocusTrapZone, _super);
	    function FocusTrapZone(props) {
	        _super.call(this, props);
	        this._onKeyboardHandler = this._onKeyboardHandler.bind(this);
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    FocusTrapZone.prototype.componentDidMount = function () {
	        var _a = this.props, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c;
	        this._previouslyFocusedElement = elementToFocusOnDismiss ? elementToFocusOnDismiss : document.activeElement;
	        this.focus();
	        if (forceFocusInsideTrap) {
	            this._events.on(window, 'focus', this._forceFocusInTrap, true);
	        }
	        if (!isClickableOutsideFocusTrap) {
	            this._events.on(window, 'click', this._forceClickInTrap, true);
	        }
	    };
	    FocusTrapZone.prototype.componentWillUnmount = function () {
	        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
	        this._events.dispose();
	        if (!ignoreExternalFocusing && this._previouslyFocusedElement) {
	            this._previouslyFocusedElement.focus();
	        }
	    };
	    FocusTrapZone.prototype.render = function () {
	        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
	        return (React.createElement("div", React.__spread({}, this.props, {className: className, ref: 'root', "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler}), this.props.children));
	    };
	    /**
	     * Need to expose this method in case of popups since focus needs to be set when popup is opened
	     **/
	    FocusTrapZone.prototype.focus = function () {
	        var firstFocusableSelector = this.props.firstFocusableSelector;
	        var _firstFocusableChild;
	        var root = this.refs.root;
	        if (firstFocusableSelector) {
	            _firstFocusableChild = root.querySelector('.' + firstFocusableSelector);
	        }
	        else {
	            _firstFocusableChild = focus_1.getNextElement(root, root.firstChild, true, false, false, true);
	        }
	        if (_firstFocusableChild) {
	            _firstFocusableChild.focus();
	        }
	    };
	    FocusTrapZone.prototype._onKeyboardHandler = function (ev) {
	        if (ev.which !== KeyCodes_1.KeyCodes.tab) {
	            return;
	        }
	        var root = this.refs.root;
	        var _firstFocusableChild = focus_1.getFirstFocusable(root, root.firstChild, true);
	        var _lastFocusableChild = focus_1.getLastFocusable(root, root.lastChild, true);
	        if (ev.shiftKey && _firstFocusableChild === ev.target) {
	            _lastFocusableChild.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	        else if (!ev.shiftKey && _lastFocusableChild === ev.target) {
	            _firstFocusableChild.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
	        var focusedElement = document.activeElement;
	        if (!this.refs.root.contains(focusedElement)) {
	            this.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
	        var clickedElement = ev.target;
	        if (clickedElement && !this.refs.root.contains(clickedElement)) {
	            this.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    return FocusTrapZone;
	}(React.Component));
	exports.FocusTrapZone = FocusTrapZone;
	
	//# sourceMappingURL=FocusTrapZone.js.map


/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";
	(function (DialogType) {
	    /** Standard dialog */
	    DialogType[DialogType["normal"] = 0] = "normal";
	    /** Dialog with large header banner */
	    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
	    /** Dialog with an 'x' close button in the upper-right corner */
	    DialogType[DialogType["close"] = 2] = "close";
	})(exports.DialogType || (exports.DialogType = {}));
	var DialogType = exports.DialogType;
	
	//# sourceMappingURL=Dialog.Props.js.map


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(149));
	
	//# sourceMappingURL=Overlay.js.map


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(150));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(151);
	var Overlay = (function (_super) {
	    __extends(Overlay, _super);
	    function Overlay() {
	        _super.apply(this, arguments);
	    }
	    Overlay.prototype.render = function () {
	        var _a = this.props, isDarkThemed = _a.isDarkThemed, className = _a.className;
	        var modifiedClassName = css_1.css('ms-Overlay', className, {
	            'ms-Overlay--dark': isDarkThemed
	        });
	        return (React.createElement("div", React.__spread({}, this.props, {className: modifiedClassName})));
	    };
	    return Overlay;
	}(React.Component));
	exports.Overlay = Overlay;
	
	//# sourceMappingURL=Overlay.js.map


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Overlay{background-color:"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]";position:absolute;bottom:0;left:0;right:0;top:0;z-index:200}.ms-Overlay.ms-Overlay--none{visibility:hidden}.ms-Overlay.ms-Overlay--dark{background-color:"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]"}');
	
	//# sourceMappingURL=Overlay.scss.js.map


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(153);
	var DialogFooter = (function (_super) {
	    __extends(DialogFooter, _super);
	    function DialogFooter() {
	        _super.apply(this, arguments);
	    }
	    DialogFooter.prototype.render = function () {
	        return (React.createElement("div", {className: 'ms-Dialog-actions'}, React.createElement("div", {className: 'ms-Dialog-actionsRight'}, this._renderChildrenAsActions())));
	    };
	    DialogFooter.prototype._renderChildrenAsActions = function () {
	        var key = 0;
	        return this.props.children.map(function (child) {
	            return React.createElement("span", {key: key++, className: 'ms-Dialog-action'}, child);
	        });
	    };
	    return DialogFooter;
	}(React.Component));
	exports.DialogFooter = DialogFooter;
	
	//# sourceMappingURL=DialogFooter.js.map


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Dialog{background-color:transparent;position:fixed;height:100%;width:100%;top:0;left:0;z-index:300;display:block;font-size:0;line-height:100vh;text-align:center;display:-ms-flexbox;display:-webkit-box;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms-Dialog::before{vertical-align:middle;display:inline-block;content:"";height:100%;width:0}.ms-Dialog .ms-Button.ms-Button--compound{display:block;margin-left:0}.ms-Dialog .ms-Overlay{z-index:0}@media screen and (-ms-high-contrast:active){.ms-Dialog .ms-Overlay{opacity:0}}.ms-Dialog-main{vertical-align:middle;display:inline-block;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:"[theme:white, default: #ffffff]";box-sizing:border-box;line-height:1.35;margin:auto;width:288px;position:relative;text-align:left;outline:3px solid transparent}.ms-Dialog-button.ms-Dialog-button--close{display:none;position:absolute;margin:0;padding:0;border:0;background:0 0;cursor:pointer;top:12px;right:12px;padding:8px;z-index:10}.ms-Dialog-button.ms-Dialog-button--close .ms-Icon.ms-Icon--x{color:"[theme:neutralSecondary, default: #666666]";font-size:16px}.ms-Dialog-inner{height:100%;padding:0 20px 20px}.ms-Dialog-header{position:relative;width:100%;box-sizing:border-box;padding:12px 20px 15px}.ms-Dialog-title{margin:0;font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px}.ms-Dialog-content{position:relative;width:100%}.ms-Dialog-content .ms-Button.ms-Button--compound:not(:last-child){margin-bottom:20px}.ms-Dialog-subText{margin:0 0 20px 0;padding-top:8px;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;color:"[theme:neutralPrimary, default: #333333]";font-size:12px}.ms-Dialog-actions{position:relative;width:100%;min-height:24px;line-height:24px;margin:20px 0 0;font-size:0}.ms-Dialog-actions .ms-Button{line-height:normal}.ms-Dialog-actionsRight{text-align:right;font-size:0}.ms-Dialog-actionsRight .ms-Dialog-action:first-child{margin:0}.ms-Dialog-actionsRight .ms-Dialog-action+.ms-Dialog-action{margin:0 0 0 16px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-title{margin-right:20px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-button--close{display:block}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-title{font-size:28px}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-inner{padding:0 20px 20px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-header{background-color:"[theme:themePrimary, default: #0078d7]";padding:26px 20px 28px;margin-bottom:8px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title{font-size:28px;font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;color:"[theme:white, default: #ffffff]"}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-subText{font-size:14px}@media (min-width:480px){.ms-Dialog-main{width:auto;min-width:288px;max-width:340px}}');
	
	//# sourceMappingURL=Dialog.scss.js.map


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(155));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var KeyCodes_1 = __webpack_require__(15);
	var BaseComponent_1 = __webpack_require__(132);
	/**
	 * This adds accessibility to Dialog and Panel controls
	 **/
	var Popup = (function (_super) {
	    __extends(Popup, _super);
	    function Popup() {
	        _super.apply(this, arguments);
	    }
	    Popup.prototype.componentDidMount = function () {
	        var _this = this;
	        this._originalFocusedElement = document.activeElement;
	        this._events.on(this.refs.root, 'keydown', this._onKeyDown);
	        this._events.on(this.refs.root, 'focus', function () { return _this._containsFocus = true; }, true);
	        this._events.on(this.refs.root, 'blur', function () { return _this._containsFocus = false; }, true);
	    };
	    Popup.prototype.componentWillUnmount = function () {
	        if (this.props.shouldRestoreFocus &&
	            this._originalFocusedElement &&
	            this._containsFocus &&
	            this._originalFocusedElement !== window) {
	            this._originalFocusedElement.focus();
	        }
	    };
	    Popup.prototype.render = function () {
	        var _a = this.props, role = _a.role, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
	        return (React.createElement("div", React.__spread({}, this.props, {ref: 'root', className: className, role: role, "aria-labelledby": ariaLabelledBy, "aria-desribedby": ariaDescribedBy})));
	    };
	    Popup.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.escape:
	                if (this.props.onDismiss) {
	                    this.props.onDismiss();
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                }
	                break;
	        }
	    };
	    Popup.defaultProps = {
	        shouldRestoreFocus: true
	    };
	    return Popup;
	}(BaseComponent_1.BaseComponent));
	exports.Popup = Popup;
	
	//# sourceMappingURL=Popup.js.map


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var EventGroup_1 = __webpack_require__(14);
	(function (ResponsiveMode) {
	    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
	    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
	    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
	    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
	    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
	    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
	})(exports.ResponsiveMode || (exports.ResponsiveMode = {}));
	var ResponsiveMode = exports.ResponsiveMode;
	var RESPONSIVE_MAX_CONSTRAINT = [
	    479,
	    639,
	    1023,
	    1365,
	    1919,
	    99999999
	];
	function withResponsiveMode(ComposedComponent) {
	    return (function (_super) {
	        __extends(WithResponsiveMode, _super);
	        function WithResponsiveMode() {
	            _super.call(this);
	            this._events = new EventGroup_1.EventGroup(this);
	            this.state = {
	                responsiveMode: this._getResponsiveMode()
	            };
	        }
	        WithResponsiveMode.prototype.componentWillMount = function () {
	            var _this = this;
	            this._events.on(window, 'resize', function () {
	                var responsiveMode = _this._getResponsiveMode();
	                if (responsiveMode !== _this.state.responsiveMode) {
	                    _this.setState({
	                        responsiveMode: responsiveMode
	                    });
	                }
	            });
	        };
	        WithResponsiveMode.prototype.componentWillUnmount = function () {
	            this._events.dispose();
	        };
	        WithResponsiveMode.prototype.render = function () {
	            var responsiveMode = this.state.responsiveMode;
	            return (React.createElement(ComposedComponent, React.__spread({responsiveMode: responsiveMode}, this.props)));
	        };
	        WithResponsiveMode.prototype._getResponsiveMode = function () {
	            var responsiveMode = ResponsiveMode.small;
	            while (window.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
	                responsiveMode++;
	            }
	            return responsiveMode;
	        };
	        return WithResponsiveMode;
	    }(React.Component));
	}
	exports.withResponsiveMode = withResponsiveMode;
	
	//# sourceMappingURL=withResponsiveMode.js.map


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(158));
	
	//# sourceMappingURL=DocumentCard.js.map


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(159));
	__export(__webpack_require__(161));
	__export(__webpack_require__(163));
	__export(__webpack_require__(171));
	__export(__webpack_require__(173));
	__export(__webpack_require__(175));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(160);
	var DocumentCard = (function (_super) {
	    __extends(DocumentCard, _super);
	    function DocumentCard() {
	        _super.apply(this, arguments);
	    }
	    DocumentCard.prototype.render = function () {
	        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref, children = _a.children, className = _a.className;
	        // If no onClickFunction was provided and we do have an onClickURL, create a function from it.
	        if (!onClick && onClickHref) {
	            onClick = function () {
	                window.location.href = onClickHref;
	            };
	        }
	        return (React.createElement("div", {className: css_1.css('ms-DocumentCard', {
	            'ms-DocumentCard--actionable': onClick ? true : false
	        }, className), onClick: onClick}, children));
	    };
	    return DocumentCard;
	}(React.Component));
	exports.DocumentCard = DocumentCard;
	
	//# sourceMappingURL=DocumentCard.js.map


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DocumentCard{-webkit-font-smoothing:antialiased;background-color:#fafafa;border:1px solid "[theme:neutralLight, default: #eaeaea]";box-sizing:border-box;max-width:320px;min-width:206px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.ms-DocumentCard--actionable:hover{cursor:pointer;border-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-DocumentCard--actionable:hover:after{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";pointer-events:none}.ms-DocumentCardLocation+.ms-DocumentCardTitle{padding-top:4px}');
	
	//# sourceMappingURL=DocumentCard.scss.js.map


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(44);
	__webpack_require__(162);
	var DocumentCardActions = (function (_super) {
	    __extends(DocumentCardActions, _super);
	    function DocumentCardActions() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardActions.prototype.render = function () {
	        var _a = this.props, actions = _a.actions, views = _a.views;
	        return (React.createElement("div", {className: 'ms-DocumentCardActions'}, actions && actions.map(function (action, index) { return (React.createElement("div", {className: 'ms-DocumentCardActions-action', key: index}, React.createElement(Button_1.Button, {buttonType: Button_1.ButtonType.icon, icon: action.icon, title: '', description: '', onClick: action.onClick}))); }), views && (React.createElement("div", {className: 'ms-DocumentCardActions-views'}, React.createElement("i", {className: 'ms-Icon ms-Icon--eye'}), views))));
	    };
	    return DocumentCardActions;
	}(React.Component));
	exports.DocumentCardActions = DocumentCardActions;
	
	//# sourceMappingURL=DocumentCardActions.js.map


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DocumentCardActions{height:34px;padding:4px 12px;position:relative}.ms-DocumentCardActions-actions{position:absolute;top:4px}html[dir=ltr] .ms-DocumentCardActions-actions{left:12px}html[dir=rtl] .ms-DocumentCardActions-actions{right:12px}.ms-DocumentCardActions-action{color:"[theme:neutralSecondary, default: #666666]";cursor:pointer}html[dir=ltr] .ms-DocumentCardActions-action{float:left}html[dir=rtl] .ms-DocumentCardActions-action{float:right}html[dir=ltr] .ms-DocumentCardActions-action{margin-right:4px}html[dir=rtl] .ms-DocumentCardActions-action{margin-left:4px}.ms-DocumentCardActions-action .ms-Button{font-size:16px;height:34px;width:34px}.ms-DocumentCardActions-action .ms-Button:hover .ms-Button-icon{color:#1174c3;cursor:pointer}.ms-DocumentCardActions-views{line-height:34px}html[dir=ltr] .ms-DocumentCardActions-views{text-align:right}html[dir=rtl] .ms-DocumentCardActions-views{text-align:left}.ms-DocumentCardActions-views .ms-Icon{font-size:16px}html[dir=ltr] .ms-DocumentCardActions-views .ms-Icon{margin-right:4px}html[dir=rtl] .ms-DocumentCardActions-views .ms-Icon{margin-left:4px}');
	
	//# sourceMappingURL=DocumentCardActions.scss.js.map


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(56);
	var Persona_1 = __webpack_require__(164);
	var css_1 = __webpack_require__(17);
	__webpack_require__(170);
	var DocumentCardActivity = (function (_super) {
	    __extends(DocumentCardActivity, _super);
	    function DocumentCardActivity() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardActivity.prototype.render = function () {
	        var _a = this.props, activity = _a.activity, people = _a.people;
	        return (people && people.length > 0 &&
	            React.createElement("div", {className: css_1.css('ms-DocumentCardActivity', {
	                'ms-DocumentCardActivity--multiplePeople': people.length > 1
	            })}, this._renderAvatars(people), React.createElement("div", {className: 'ms-DocumentCardActivity-details'}, React.createElement("span", {className: 'ms-DocumentCardActivity-name'}, this._getNameString(people)), React.createElement("span", {className: 'ms-DocumentCardActivity-activity'}, activity))));
	    };
	    DocumentCardActivity.prototype._renderAvatars = function (people) {
	        var renderAvatar = function (person) {
	            if (!person.initialsColor) {
	                person.initialsColor = Persona_1.PersonaInitialsColor.blue;
	            }
	            return (React.createElement("div", {className: 'ms-DocumentCardActivity-avatar'}, person.initials && (React.createElement("div", {className: css_1.css('ms-Persona-initials', Persona_1.PERSONA_INITIALS_COLOR[person.initialsColor]), role: 'presentation'}, person.initials)), person.profileImageSrc && (React.createElement(Image_1.Image, {src: person.profileImageSrc, role: 'presentation'}))));
	        };
	        return (React.createElement("div", {className: 'ms-DocumentCardActivity-avatars'}, people.length > 1 ? renderAvatar(people[1]) : null, renderAvatar(people[0])));
	    };
	    DocumentCardActivity.prototype._getNameString = function (people) {
	        var nameString = people[0].name;
	        if (people.length >= 2) {
	            nameString += ' +' + (people.length - 1);
	        }
	        return nameString;
	    };
	    return DocumentCardActivity;
	}(React.Component));
	exports.DocumentCardActivity = DocumentCardActivity;
	
	//# sourceMappingURL=DocumentCardActivity.js.map


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(165));
	
	//# sourceMappingURL=Persona.js.map


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(166));
	__export(__webpack_require__(167));
	__export(__webpack_require__(168));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var Image_1 = __webpack_require__(56);
	var Persona_Props_1 = __webpack_require__(167);
	var PersonaConsts_1 = __webpack_require__(168);
	__webpack_require__(169);
	var Persona = (function (_super) {
	    __extends(Persona, _super);
	    function Persona() {
	        _super.apply(this, arguments);
	    }
	    Persona.prototype.render = function () {
	        var _a = this.props, className = _a.className, size = _a.size, imageUrl = _a.imageUrl, imageInitials = _a.imageInitials, initialsColor = _a.initialsColor, presence = _a.presence, primaryText = _a.primaryText, secondaryText = _a.secondaryText, tertiaryText = _a.tertiaryText, optionalText = _a.optionalText, hidePersonaDetails = _a.hidePersonaDetails;
	        return (React.createElement("div", React.__spread({}, this.props, {className: css_1.css('ms-Persona', className, PersonaConsts_1.PERSONA_SIZE[size], PersonaConsts_1.PERSONA_PRESENCE[presence])}), size !== Persona_Props_1.PersonaSize.tiny && (React.createElement("div", {className: 'ms-Persona-imageArea'}, React.createElement("div", {className: css_1.css('ms-Persona-initials', PersonaConsts_1.PERSONA_INITIALS_COLOR[initialsColor])}, imageInitials), React.createElement(Image_1.Image, {className: 'ms-Persona-image', imageFit: Image_1.ImageFit.cover, src: imageUrl}))), presence !== Persona_Props_1.PersonaPresence.none && React.createElement("div", {className: 'ms-Persona-presence'}), !hidePersonaDetails && (React.createElement("div", {className: 'ms-Persona-details'}, React.createElement("div", {className: 'ms-Persona-primaryText'}, primaryText), secondaryText ? (React.createElement("div", {className: 'ms-Persona-secondaryText'}, secondaryText)) : (null), React.createElement("div", {className: 'ms-Persona-tertiaryText'}, tertiaryText), React.createElement("div", {className: 'ms-Persona-optionalText'}, optionalText)))));
	    };
	    Persona.defaultProps = {
	        primaryText: '',
	        size: Persona_Props_1.PersonaSize.regular,
	        initialsColor: Persona_Props_1.PersonaInitialsColor.blue,
	        presence: Persona_Props_1.PersonaPresence.none
	    };
	    return Persona;
	}(React.Component));
	exports.Persona = Persona;
	
	//# sourceMappingURL=Persona.js.map


/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";
	(function (PersonaSize) {
	    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
	    PersonaSize[PersonaSize["extraSmall"] = 1] = "extraSmall";
	    PersonaSize[PersonaSize["small"] = 2] = "small";
	    PersonaSize[PersonaSize["regular"] = 3] = "regular";
	    PersonaSize[PersonaSize["large"] = 4] = "large";
	    PersonaSize[PersonaSize["extraLarge"] = 5] = "extraLarge";
	})(exports.PersonaSize || (exports.PersonaSize = {}));
	var PersonaSize = exports.PersonaSize;
	(function (PersonaPresence) {
	    PersonaPresence[PersonaPresence["none"] = 0] = "none";
	    PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
	    PersonaPresence[PersonaPresence["online"] = 2] = "online";
	    PersonaPresence[PersonaPresence["away"] = 3] = "away";
	    PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
	    PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
	})(exports.PersonaPresence || (exports.PersonaPresence = {}));
	var PersonaPresence = exports.PersonaPresence;
	(function (PersonaInitialsColor) {
	    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
	    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
	    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
	    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
	    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
	    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
	    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
	    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
	    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
	    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
	    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
	    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
	    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
	    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
	    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
	})(exports.PersonaInitialsColor || (exports.PersonaInitialsColor = {}));
	var PersonaInitialsColor = exports.PersonaInitialsColor;
	
	//# sourceMappingURL=Persona.Props.js.map


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Persona_Props_1 = __webpack_require__(167);
	exports.PERSONA_SIZE = (_a = {},
	    _a[Persona_Props_1.PersonaSize.tiny] = 'ms-Persona--tiny',
	    _a[Persona_Props_1.PersonaSize.extraSmall] = 'ms-Persona--xs',
	    _a[Persona_Props_1.PersonaSize.small] = 'ms-Persona--sm',
	    _a[Persona_Props_1.PersonaSize.regular] = '',
	    _a[Persona_Props_1.PersonaSize.large] = 'ms-Persona--lg',
	    _a[Persona_Props_1.PersonaSize.extraLarge] = 'ms-Persona--xl',
	    _a
	);
	exports.PERSONA_PRESENCE = (_b = {},
	    _b[Persona_Props_1.PersonaPresence.offline] = 'ms-Persona--offline',
	    _b[Persona_Props_1.PersonaPresence.online] = 'ms-Persona--online',
	    _b[Persona_Props_1.PersonaPresence.away] = 'ms-Persona--away',
	    _b[Persona_Props_1.PersonaPresence.dnd] = 'ms-Persona--dnd',
	    _b[Persona_Props_1.PersonaPresence.blocked] = 'ms-Persona--blocked',
	    _b
	);
	exports.PERSONA_INITIALS_COLOR = (_c = {},
	    _c[Persona_Props_1.PersonaInitialsColor.lightBlue] = 'ms-Persona-initials--lightBlue',
	    _c[Persona_Props_1.PersonaInitialsColor.blue] = 'ms-Persona-initials--blue',
	    _c[Persona_Props_1.PersonaInitialsColor.darkBlue] = 'ms-Persona-initials--darkBlue',
	    _c[Persona_Props_1.PersonaInitialsColor.teal] = 'ms-Persona-initials--teal',
	    _c[Persona_Props_1.PersonaInitialsColor.lightGreen] = 'ms-Persona-initials--lightGreen',
	    _c[Persona_Props_1.PersonaInitialsColor.green] = 'ms-Persona-initials--green',
	    _c[Persona_Props_1.PersonaInitialsColor.darkGreen] = 'ms-Persona-initials--darkGreen',
	    _c[Persona_Props_1.PersonaInitialsColor.lightPink] = 'ms-Persona-initials--lightPink',
	    _c[Persona_Props_1.PersonaInitialsColor.pink] = 'ms-Persona-initials--pink',
	    _c[Persona_Props_1.PersonaInitialsColor.magenta] = 'ms-Persona-initials--magenta',
	    _c[Persona_Props_1.PersonaInitialsColor.purple] = 'ms-Persona-initials--purple',
	    _c[Persona_Props_1.PersonaInitialsColor.black] = 'ms-Persona-initials--black',
	    _c[Persona_Props_1.PersonaInitialsColor.orange] = 'ms-Persona-initials--orange',
	    _c[Persona_Props_1.PersonaInitialsColor.red] = 'ms-Persona-initials--red',
	    _c[Persona_Props_1.PersonaInitialsColor.darkRed] = 'ms-Persona-initials--darkRed',
	    _c
	);
	var _a, _b, _c;
	
	//# sourceMappingURL=PersonaConsts.js.map


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Persona{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;display:table;line-height:1;position:relative}.ms-Persona-imageArea{position:relative;display:block;overflow:hidden;text-align:center;width:48px;height:48px;border-radius:50%;z-index:0}@media screen and (-ms-high-contrast:active){.ms-Persona-imageArea{border:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-imageArea{border:1px solid "[theme:black, default: #000000]"}}.ms-Persona-placeholder{color:"[theme:white, default: #ffffff]";position:absolute;right:0;left:0;font-size:47px;top:9px}.ms-Persona-initials{color:"[theme:white, default: #ffffff]";font-size:17px;font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;line-height:48px}.ms-Persona-initials.ms-Persona-initials--lightBlue{background-color:#6ba5e7}.ms-Persona-initials.ms-Persona-initials--blue{background-color:#2d89ef}.ms-Persona-initials.ms-Persona-initials--darkBlue{background-color:#2b5797}.ms-Persona-initials.ms-Persona-initials--teal{background-color:#00aba9}.ms-Persona-initials.ms-Persona-initials--lightGreen{background-color:#99b433}.ms-Persona-initials.ms-Persona-initials--green{background-color:#00a300}.ms-Persona-initials.ms-Persona-initials--darkGreen{background-color:#1e7145}.ms-Persona-initials.ms-Persona-initials--lightPink{background-color:#e773bd}.ms-Persona-initials.ms-Persona-initials--pink{background-color:#ff0097}.ms-Persona-initials.ms-Persona-initials--magenta{background-color:#7e3878}.ms-Persona-initials.ms-Persona-initials--purple{background-color:#603cba}.ms-Persona-initials.ms-Persona-initials--black{background-color:#1d1d1d}.ms-Persona-initials.ms-Persona-initials--orange{background-color:#da532c}.ms-Persona-initials.ms-Persona-initials--red{background-color:#e11}.ms-Persona-initials.ms-Persona-initials--darkRed{background-color:#b91d47}.ms-Persona-image{display:table-cell;margin-right:10px;position:absolute;top:0;left:0;width:48px;height:48px}.ms-Persona-image[src=""]{display:none}.ms-Persona-presence{background-color:#5dd255;position:absolute;height:12px;width:12px;border-radius:50%;top:auto;left:34px;bottom:-1px;border:2px solid "[theme:white, default: #ffffff]"}.ms-Persona-details{display:table-cell;padding:0 12px;vertical-align:middle;overflow:hidden}.ms-Persona-optionalText,.ms-Persona-primaryText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:190px;overflow:hidden;text-overflow:ellipsis}.ms-Persona-primaryText{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:17px;margin-top:-3px;line-height:1.4}.ms-Persona-optionalText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{color:"[theme:neutralSecondary, default: #666666]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;white-space:nowrap;line-height:1.3}.ms-Persona-secondaryText{padding-top:3px}.ms-Persona-optionalText,.ms-Persona-tertiaryText{padding-top:5px;display:none}.ms-Persona.ms-Persona--square .ms-Persona-imageArea{background-color:"[theme:neutralTertiary, default: #a6a6a6]";border-radius:0}.ms-Persona.ms-Persona--square .ms-Persona-presence{top:0;left:0;bottom:auto;right:auto;height:48px;width:5px;border-radius:0;border:0}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--square .ms-Persona-presence{border:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--square .ms-Persona-presence{border:1px solid "[theme:black, default: #000000]"}}.ms-Persona.ms-Persona--tiny{height:30px;display:inline-block}.ms-Persona.ms-Persona--tiny .ms-Persona-imageArea{overflow:visible;background:0 0;height:0;width:0}.ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:auto;top:10px;left:0;border:0}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:9px;border:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{border:1px solid "[theme:black, default: #000000]"}}.ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-left:20px}.ms-Persona.ms-Persona--tiny .ms-Persona-primaryText{font-size:14px;padding-top:9px}.ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly{padding:0;background-color:transparent}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText:after{content:\';\'}.ms-Persona.ms-Persona--square.ms-Persona--tiny .ms-Persona-presence{height:12px;width:12px;top:10px}.ms-Persona.ms-Persona--xs .ms-Persona-image,.ms-Persona.ms-Persona--xs .ms-Persona-imageArea{width:32px;height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-placeholder{font-size:28px;top:6px}.ms-Persona.ms-Persona--xs .ms-Persona-initials{font-size:12px;line-height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-presence{left:19px}.ms-Persona.ms-Persona--xs .ms-Persona-details{padding-left:8px}.ms-Persona.ms-Persona--xs .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-Persona.ms-Persona--xs .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--square.ms-Persona--xs .ms-Persona-presence{height:32px;width:4px;left:0}.ms-Persona.ms-Persona--sm .ms-Persona-image,.ms-Persona.ms-Persona--sm .ms-Persona-imageArea{width:40px;height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-placeholder{font-size:38px;top:5px}.ms-Persona.ms-Persona--sm .ms-Persona-initials{font-size:14px;line-height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-presence{left:27px}.ms-Persona.ms-Persona--sm .ms-Persona-details{padding-left:8px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText{font-size:14px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText,.ms-Persona.ms-Persona--sm .ms-Persona-secondaryText{padding-top:1px}.ms-Persona.ms-Persona--square.ms-Persona--sm .ms-Persona-presence{height:40px;width:4px;left:0}.ms-Persona.ms-Persona--lg .ms-Persona-image,.ms-Persona.ms-Persona--lg .ms-Persona-imageArea{width:72px;height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-placeholder{font-size:67px;top:10px}.ms-Persona.ms-Persona--lg .ms-Persona-initials{font-size:28px;line-height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-presence{left:49px}.ms-Persona.ms-Persona--lg .ms-Persona-secondaryText{padding-top:3px}.ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText{padding-top:5px}.ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText{display:block}.ms-Persona.ms-Persona--square.ms-Persona--lg .ms-Persona-presence{height:72px;width:7px;left:0}.ms-Persona.ms-Persona--xl .ms-Persona-image,.ms-Persona.ms-Persona--xl .ms-Persona-imageArea{width:100px;height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-placeholder{font-size:95px;top:12px}.ms-Persona.ms-Persona--xl .ms-Persona-initials{font-size:42px;line-height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-presence{height:20px;width:20px;left:71px}.ms-Persona.ms-Persona--xl .ms-Persona-details{padding-left:20px}.ms-Persona.ms-Persona--xl .ms-Persona-primaryText{font-size:21px;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;margin-top:0}.ms-Persona.ms-Persona--xl .ms-Persona-secondaryText{padding-top:2px}.ms-Persona.ms-Persona--xl .ms-Persona-optionalText,.ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--square.ms-Persona--xl .ms-Persona-presence{height:100px;width:9px;left:0}.ms-Persona.ms-Persona--darkText .ms-Persona-primaryText{color:"[theme:neutralDark, default: #212121]"}.ms-Persona.ms-Persona--darkText .ms-Persona-optionalText,.ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText{color:"[theme:neutralPrimary, default: #333333]"}.ms-Persona.ms-Persona--selectable{cursor:pointer;padding:0 10px}.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):focus,.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):hover{background-color:"[theme:themeLighter, default: #deecf9]";outline:1px solid transparent}.ms-Persona.ms-Persona--available .ms-Persona-presence{background-color:#5dd255}.ms-Persona.ms-Persona--away .ms-Persona-presence{background-color:#ffd200}.ms-Persona.ms-Persona--blocked .ms-Persona-presence{background-color:#dedede;background-image:-webkit-linear-gradient(top,#dedede 0,#dedede 48%,#c72d25 40%,#c72d25 58%,#dedede 52%,#dedede 100%);background-image:linear-gradient(to bottom,#dedede 0,#dedede 48%,#c72d25 40%,#c72d25 58%,#dedede 52%,#dedede 100%)}.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#d93b3b;background:-webkit-repeating-linear-gradient(135deg,#e57a79,#e57a79 1px,#d00e0d 0,#d00e0d 2px);background:repeating-linear-gradient(-45deg,#e57a79,#e57a79 1px,#d00e0d 0,#d00e0d 2px)}.ms-Persona.ms-Persona--busy.ms-Persona--square .ms-Persona-presence{background-color:#d93b3b;background:-webkit-repeating-linear-gradient(135deg,#e57a79,#e57a79 3px,#d00e0d 3px,#d00e0d 6px);background:repeating-linear-gradient(-45deg,#e57a79,#e57a79 3px,#d00e0d 3px,#d00e0d 6px)}.ms-Persona.ms-Persona--dnd .ms-Persona-presence{background-color:#c72d25;background-image:-webkit-linear-gradient(top,#c72d25 0,#c72d25 48%,#fff 48%,#fff 52%,#c72d25 52%,#c72d25 100%);background-image:linear-gradient(to bottom,#c72d25 0,#c72d25 48%,#fff 48%,#fff 52%,#c72d25 52%,#c72d25 100%)}.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#b6cfd8}div.ms-Persona-image{position:absolute;left:0;top:0;float:clear;border:50%;width:100%;height:100%;border-radius:50%;-webkit-perspective:1px;perspective:1px}.ms-Persona-optionalText,.ms-Persona-primaryText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{width:auto}');
	
	//# sourceMappingURL=Persona.scss.js.map


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DocumentCardActivity{padding:8px 16px;position:relative}html[dir=ltr] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-avatar:nth-of-type(2){margin-left:-16px}html[dir=rtl] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-avatar:nth-of-type(2){margin-right:-16px}html[dir=ltr] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-details{left:61.5px}html[dir=rtl] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-details{right:61.5px}html[dir=ltr] .ms-DocumentCardActivity-avatars{margin-left:-2px}html[dir=rtl] .ms-DocumentCardActivity-avatars{margin-right:-2px}.ms-DocumentCardActivity-avatar{border:2px solid #fafafa;border-radius:50%;height:25px;width:25px;display:inline-block;position:relative;overflow:hidden;text-align:center}.ms-DocumentCardActivity-avatar .ms-Persona-initials{height:25px;line-height:25px;font-size:12px}.ms-DocumentCardActivity-avatar img{width:100%;height:100%;border-radius:50%}.ms-DocumentCardActivity-details{height:25px;position:absolute;top:8px;width:calc(100% - 65px)}html[dir=ltr] .ms-DocumentCardActivity-details{left:49px}html[dir=rtl] .ms-DocumentCardActivity-details{right:49px}.ms-DocumentCardActivity-activity,.ms-DocumentCardActivity-name{color:"[theme:neutralSecondaryAlt, default: #767676]";display:block;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;line-height:14px;height:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-DocumentCardActivity-name{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif}');
	
	//# sourceMappingURL=DocumentCardActivity.scss.js.map


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(172);
	var DocumentCardLocation = (function (_super) {
	    __extends(DocumentCardLocation, _super);
	    function DocumentCardLocation() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardLocation.prototype.render = function () {
	        var _a = this.props, location = _a.location, locationHref = _a.locationHref, onClick = _a.onClick, ariaLabel = _a.ariaLabel;
	        // If no onClick Function was provided and we do have an locationHref, create a function from it.
	        if (!onClick && locationHref) {
	            onClick = function (ev) {
	                window.location.href = locationHref;
	                ev.preventDefault();
	                ev.stopPropagation();
	            };
	        }
	        return (React.createElement("a", {className: 'ms-DocumentCardLocation', href: locationHref, onClick: onClick, "aria-label": ariaLabel}, location));
	    };
	    return DocumentCardLocation;
	}(React.Component));
	exports.DocumentCardLocation = DocumentCardLocation;
	
	//# sourceMappingURL=DocumentCardLocation.js.map


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DocumentCardLocation{color:"[theme:neutralSecondaryAlt, default: #767676]";display:block;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;padding:8px 16px;position:relative;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-DocumentCardLocation:hover{color:#2a8dd4;cursor:pointer}');
	
	//# sourceMappingURL=DocumentCardLocation.scss.js.map


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(56);
	var Async_1 = __webpack_require__(23);
	__webpack_require__(174);
	var INTERVAL_DELAY = 3000;
	var DocumentCardPreview = (function (_super) {
	    __extends(DocumentCardPreview, _super);
	    function DocumentCardPreview(props) {
	        var _this = this;
	        _super.call(this, props);
	        this._showNextPreview = this._showNextPreview.bind(this);
	        this._async = new Async_1.Async(this);
	        // Show the first preview by default
	        this.state = {
	            visiblePreviewIndex: 0
	        };
	        // If more than one preview has been provided, set an interval to start flipping through them
	        if (this.props.previewImages.length > 1) {
	            this._interval = this._async.setInterval(function () { _this._showNextPreview(); }, INTERVAL_DELAY);
	        }
	    }
	    DocumentCardPreview.prototype.componentWillUnmount = function () {
	        this._async.dispose();
	    };
	    DocumentCardPreview.prototype.render = function () {
	        var previewImages = this.props.previewImages;
	        var visiblePreviewIndex = this.state.visiblePreviewIndex;
	        var previewImage = previewImages[visiblePreviewIndex];
	        var accentColor = previewImage.accentColor, width = previewImage.width, height = previewImage.height, imageFit = previewImage.imageFit;
	        var style;
	        if (accentColor) {
	            style = {
	                borderBottomColor: accentColor
	            };
	        }
	        var icon;
	        if (previewImage.iconSrc) {
	            icon = React.createElement(Image_1.Image, {className: 'ms-DocumentCardPreview-icon', src: previewImage.iconSrc, role: 'presentation'});
	        }
	        return (React.createElement("div", {className: 'ms-DocumentCardPreview', style: style}, React.createElement(Image_1.Image, {width: width, height: height, imageFit: imageFit, src: previewImage.previewImageSrc, errorSrc: previewImage.errorImageSrc, role: 'presentation'}), icon));
	    };
	    DocumentCardPreview.prototype._showNextPreview = function () {
	        var maximumIndex = this.props.previewImages.length - 1;
	        var currentIndex = this.state.visiblePreviewIndex;
	        var newIndex;
	        if (currentIndex < maximumIndex) {
	            newIndex = currentIndex + 1;
	        }
	        else {
	            newIndex = 0;
	        }
	        this.setState({
	            visiblePreviewIndex: newIndex
	        });
	    };
	    return DocumentCardPreview;
	}(React.Component));
	exports.DocumentCardPreview = DocumentCardPreview;
	
	//# sourceMappingURL=DocumentCardPreview.js.map


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DocumentCardPreview{border-bottom:2px solid "[theme:neutralTertiary, default: #a6a6a6]";position:relative}.ms-DocumentCardPreview-icon{bottom:10px;position:absolute}html[dir=ltr] .ms-DocumentCardPreview-icon{left:10px}html[dir=rtl] .ms-DocumentCardPreview-icon{right:10px}');
	
	//# sourceMappingURL=DocumentCardPreview.scss.js.map


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var EventGroup_1 = __webpack_require__(14);
	__webpack_require__(176);
	var TRUNCATION_SEPARATOR = '&hellip;';
	var TRUNCATION_MINIMUM_LENGTH = 40;
	var TRUNCATION_MAXIMUM_LENGTH = 90 - TRUNCATION_SEPARATOR.length;
	var TRUNCATION_FIRST_PIECE_LONGER_BY = 10;
	var TRUNCATION_VERTICAL_OVERFLOW_THRESHOLD = 5;
	var DocumentCardTitle = (function (_super) {
	    __extends(DocumentCardTitle, _super);
	    function DocumentCardTitle(props) {
	        _super.call(this, props);
	        this.state = {
	            truncatedTitleFirstPiece: '',
	            truncatedTitleSecondPiece: ''
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._startTruncation = this._startTruncation.bind(this);
	    }
	    DocumentCardTitle.prototype.componentDidMount = function () {
	        if (this.props.shouldTruncate) {
	            this._startTruncation();
	            this._events.on(window, 'resize', this._updateTruncation);
	        }
	    };
	    DocumentCardTitle.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    DocumentCardTitle.prototype.componentWillReceiveProps = function (newProps) {
	        if ((newProps.title !== this.props.title) && this.props.shouldTruncate) {
	            this._startTruncation();
	        }
	    };
	    DocumentCardTitle.prototype.componentDidUpdate = function () {
	        // If we're truncating, make sure the title fits
	        if (this.props.shouldTruncate) {
	            this._shrinkTitle();
	        }
	    };
	    DocumentCardTitle.prototype.render = function () {
	        var _a = this.props, title = _a.title, shouldTruncate = _a.shouldTruncate;
	        var _b = this.state, truncatedTitleFirstPiece = _b.truncatedTitleFirstPiece, truncatedTitleSecondPiece = _b.truncatedTitleSecondPiece;
	        var documentCardTitle;
	        if (shouldTruncate && (truncatedTitleFirstPiece || truncatedTitleSecondPiece)) {
	            documentCardTitle = (React.createElement("div", {className: 'ms-DocumentCardTitle', ref: 'titleElement', title: title}, truncatedTitleFirstPiece, "…", truncatedTitleSecondPiece));
	        }
	        else {
	            documentCardTitle = (React.createElement("div", {className: 'ms-DocumentCardTitle', ref: 'titleElement', title: title}, title));
	        }
	        return (React.createElement("div", null, documentCardTitle));
	    };
	    DocumentCardTitle.prototype._startTruncation = function () {
	        var originalTitle = this.props.title;
	        // If the title is really short, there's no need to truncate it
	        if (originalTitle && originalTitle.length >= TRUNCATION_MINIMUM_LENGTH) {
	            // Break the text into two pieces for assembly later
	            if (originalTitle.length > TRUNCATION_MAXIMUM_LENGTH) {
	                // The text is really long, so we can take a chunk out of the middle so the two pieces combine for the maximum length
	                this.setState({
	                    truncatedTitleFirstPiece: originalTitle.slice(0, TRUNCATION_MAXIMUM_LENGTH / 2 + TRUNCATION_FIRST_PIECE_LONGER_BY),
	                    truncatedTitleSecondPiece: originalTitle.slice(originalTitle.length - (TRUNCATION_MAXIMUM_LENGTH / 2 - TRUNCATION_FIRST_PIECE_LONGER_BY))
	                });
	            }
	            else {
	                // The text is not so long, so we'll just break it into two pieces
	                this.setState({
	                    truncatedTitleFirstPiece: originalTitle.slice(0, Math.ceil(originalTitle.length / 2) + TRUNCATION_FIRST_PIECE_LONGER_BY),
	                    truncatedTitleSecondPiece: originalTitle.slice(originalTitle.length - Math.floor(originalTitle.length / 2) + TRUNCATION_FIRST_PIECE_LONGER_BY)
	                });
	            }
	        }
	        // Save the width we just started truncation at, so that later we will only update truncation if necessary
	        this._truncatedTitleAtWidth = this.refs.titleElement.clientWidth;
	    };
	    DocumentCardTitle.prototype._shrinkTitle = function () {
	        if (this._doesTitleOverflow()) {
	            var _a = this.state, truncatedTitleFirstPiece = _a.truncatedTitleFirstPiece, truncatedTitleSecondPiece = _a.truncatedTitleSecondPiece;
	            this.setState({
	                truncatedTitleFirstPiece: truncatedTitleFirstPiece.slice(0, truncatedTitleFirstPiece.length - 1),
	                truncatedTitleSecondPiece: truncatedTitleSecondPiece.slice(1)
	            });
	        }
	    };
	    DocumentCardTitle.prototype._doesTitleOverflow = function () {
	        var titleElement = this.refs.titleElement;
	        return titleElement.scrollHeight > titleElement.clientHeight + TRUNCATION_VERTICAL_OVERFLOW_THRESHOLD || titleElement.scrollWidth > titleElement.clientWidth;
	    };
	    DocumentCardTitle.prototype._updateTruncation = function () {
	        // Only update truncation if the title's size has changed since the last time we truncated
	        if (this.refs.titleElement.clientWidth !== this._truncatedTitleAtWidth) {
	            // Throttle truncation so that it doesn't happen during a window resize
	            clearTimeout(this._scrollTimerId);
	            this._scrollTimerId = setTimeout(this._startTruncation, 250);
	        }
	    };
	    return DocumentCardTitle;
	}(React.Component));
	exports.DocumentCardTitle = DocumentCardTitle;
	
	//# sourceMappingURL=DocumentCardTitle.js.map


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-DocumentCardTitle{padding:8px 16px;color:"[theme:neutralPrimary, default: #333333]";display:block;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:16px;height:36px;line-height:20px;overflow:hidden;word-wrap:break-word}');
	
	//# sourceMappingURL=DocumentCardTitle.scss.js.map


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(178));
	
	//# sourceMappingURL=Dropdown.js.map


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(179));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var EventGroup_1 = __webpack_require__(14);
	var array_1 = __webpack_require__(133);
	var KeyCodes_1 = __webpack_require__(15);
	__webpack_require__(180);
	var _instance = 0;
	var Dropdown = (function (_super) {
	    __extends(Dropdown, _super);
	    function Dropdown(props) {
	        _super.call(this, props);
	        this._events = new EventGroup_1.EventGroup(this);
	        this.state = {
	            id: "Dropdown-" + _instance++,
	            isOpen: false,
	            selectedIndex: this._getSelectedIndex(props.options, props.selectedKey),
	            isDisabled: this.props.isDisabled
	        };
	        this._onDropdownKeyDown = this._onDropdownKeyDown.bind(this);
	        this._onDropdownClick = this._onDropdownClick.bind(this);
	        this._onFocusChange = this._onFocusChange.bind(this);
	    }
	    Dropdown.prototype.componentWillReceiveProps = function (newProps) {
	        this.setState({
	            selectedIndex: this._getSelectedIndex(newProps.options, newProps.selectedKey)
	        });
	    };
	    Dropdown.prototype.componentWillUpdate = function (nextProps, nextState) {
	        if (this.state.isOpen !== nextState.isOpen) {
	            if (nextState.isOpen) {
	                this._events.on(window, 'focus', this._onFocusChange, true);
	            }
	            else {
	                this._events.off();
	            }
	        }
	    };
	    Dropdown.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Dropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
	        if (prevState.isOpen === false && this.state.isOpen === true) {
	            this._scrollOnOpen();
	        }
	        else if (prevState.selectedIndex !== this.state.selectedIndex) {
	            this._scrollSelectedItemIntoView();
	        }
	    };
	    Dropdown.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, label = _a.label, options = _a.options;
	        var _b = this.state, id = _b.id, isOpen = _b.isOpen, selectedIndex = _b.selectedIndex, isDisabled = _b.isDisabled;
	        var selectedOption = options[selectedIndex];
	        // Need to assign role application on containing div because JAWS doesnt call OnKeyDown without this role
	        return (React.createElement("div", {ref: 'root'}, React.createElement("label", {id: id + '-label', className: 'ms-Label'}, label), React.createElement("div", {ref: function (c) { return _this._dropDown = c; }, id: id, className: css_1.css('ms-Dropdown', {
	            'is-open': isOpen, 'is-disabled': isDisabled
	        }), tabIndex: isDisabled ? -1 : 0, onKeyDown: this._onDropdownKeyDown, onClick: this._onDropdownClick, "aria-expanded": isOpen ? 'true' : 'false', role: 'application', "aria-activedescendant": selectedIndex >= 0 ? (id + '-list' + selectedIndex) : (id + '-list'), "aria-controls": id + '-list'}, React.createElement("i", {className: 'ms-Dropdown-caretDown ms-Icon ms-Icon--caretDown'}), React.createElement("span", {className: 'ms-Dropdown-title'}, selectedOption ? selectedOption.text : ''), React.createElement("ul", {ref: function (c) { return _this._optionList = c; }, id: id + '-list', className: 'ms-Dropdown-items', role: 'listbox', "aria-labelledby": id + '-label'}, options.map(function (option, index) { return (React.createElement("li", {id: id + '-list' + index.toString(), ref: Dropdown.Option + index.toString(), key: option.key, "data-index": index, className: css_1.css('ms-Dropdown-item', { 'is-selected': selectedIndex === index }), onClick: _this.setSelectedIndex.bind(_this, index), role: 'option', "aria-selected": selectedIndex === index ? 'true' : 'false', "aria-label": option.text}, option.text)); })))));
	    };
	    Dropdown.prototype.focus = function () {
	        if (this._dropDown && this._dropDown.tabIndex !== -1) {
	            this._dropDown.focus();
	        }
	    };
	    Dropdown.prototype.setSelectedIndex = function (index) {
	        var _a = this.props, onChanged = _a.onChanged, options = _a.options;
	        var selectedIndex = this.state.selectedIndex;
	        index = Math.max(0, Math.min(options.length - 1, index));
	        if (index !== selectedIndex) {
	            // Set the selected option.
	            this.setState({
	                selectedIndex: index
	            });
	            if (onChanged) {
	                onChanged(options[index], index);
	            }
	        }
	    };
	    Dropdown.prototype._getSelectedIndex = function (options, selectedKey) {
	        return array_1.findIndex(options, (function (option) { return (option.isSelected || selectedKey && option.key === selectedKey); }));
	    };
	    Dropdown.prototype._onDropdownKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.enter:
	                this.setState({
	                    isOpen: !this.state.isOpen
	                });
	                break;
	            case KeyCodes_1.KeyCodes.escape:
	                this.setState({
	                    isOpen: false
	                });
	                break;
	            case KeyCodes_1.KeyCodes.up:
	                this.setSelectedIndex(this.state.selectedIndex - 1);
	                break;
	            case KeyCodes_1.KeyCodes.down:
	                this.setSelectedIndex(this.state.selectedIndex + 1);
	                break;
	            case KeyCodes_1.KeyCodes.home:
	                this.setSelectedIndex(0);
	                break;
	            case KeyCodes_1.KeyCodes.end:
	                this.setSelectedIndex(this.props.options.length - 1);
	                break;
	            default:
	                return;
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    Dropdown.prototype._onDropdownClick = function () {
	        var _a = this.state, isDisabled = _a.isDisabled, isOpen = _a.isOpen;
	        if (!isDisabled) {
	            this.setState({
	                isOpen: !isOpen
	            });
	        }
	    };
	    Dropdown.prototype._onFocusChange = function (ev) {
	        if (this.state.isOpen && !this.refs.root.contains(ev.target)) {
	            var context_1 = this;
	            context_1.setState({
	                isOpen: false
	            });
	        }
	    };
	    Dropdown.prototype._scrollSelectedItemIntoView = function () {
	        var _a = this._getCurrentItemPositionDetails(), posTop = _a.posTop, posBottom = _a.posBottom;
	        // if the selected item is too far down
	        if (posBottom > this._optionList.offsetHeight + this._optionList.scrollTop) {
	            this._optionList.scrollTop = posBottom - this._optionList.offsetHeight;
	        }
	        else if (posTop < this._optionList.scrollTop) {
	            this._optionList.scrollTop = posTop;
	        }
	    };
	    Dropdown.prototype._scrollOnOpen = function () {
	        var _a = this._getCurrentItemPositionDetails(), currentItem = _a.currentItem, posBottom = _a.posBottom;
	        // the selected item should be in the center of the dropdown if possible
	        if (currentItem) {
	            this._optionList.scrollTop = posBottom - (currentItem.offsetHeight + this._optionList.offsetHeight) / 2;
	        }
	    };
	    Dropdown.prototype._getCurrentItemPositionDetails = function () {
	        var currentItem = this.refs[Dropdown.Option + this.state.selectedIndex];
	        var posTop = currentItem ? currentItem.offsetTop : 0;
	        var posBottom = currentItem ? posTop + currentItem.offsetHeight : 0;
	        return { currentItem: currentItem,
	            posTop: posTop,
	            posBottom: posBottom };
	    };
	    Dropdown.defaultProps = {
	        options: [],
	        isDisabled: false
	    };
	    Dropdown.Option = 'option';
	    return Dropdown;
	}(React.Component));
	exports.Dropdown = Dropdown;
	
	//# sourceMappingURL=Dropdown.js.map


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Dropdown{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:10px;position:relative;outline:0}.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:"[theme:black, default: #000000]"}.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-Dropdown:focus .ms-Dropdown-title{border-color:"[theme:themePrimary, default: #0078d7]"}.ms-Dropdown .ms-Label{display:inline-block;margin-bottom:8px}.ms-Dropdown.is-disabled .ms-Dropdown-title{background-color:"[theme:neutralLighter, default: #f4f4f4]";border-color:"[theme:neutralLighter, default: #f4f4f4]";color:"[theme:neutralTertiary, default: #a6a6a6]";cursor:default}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#0f0;color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#600000;color:#600000}}.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:"[theme:neutralTertiary, default: #a6a6a6]"}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#600000}}.ms-Dropdown.is-open .ms-Dropdown-items,.ms-Dropdown.ms-Dropdown--open .ms-Dropdown-items{display:block;position:fixed}.ms-Dropdown-select{display:none}.ms-Dropdown-caretDown{color:"[theme:neutralSecondary, default: #666666]";font-size:17px;position:absolute;right:9px;bottom:5px;z-index:1;pointer-events:none}.ms-Dropdown-title{box-sizing:border-box;margin:0;padding:0;box-shadow:none;background:"[theme:white, default: #ffffff]";border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";cursor:pointer;display:block;height:32px;line-height:30px;padding:0 32px 0 10px;position:relative;overflow:hidden}.ms-Dropdown-items{box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:"[theme:white, default: #ffffff]";display:none;list-style-type:none;position:absolute;width:100%;max-height:200px;max-width:268px;z-index:400;top:0;right:0;bottom:0;overflow-y:scroll}.ms-Dropdown-items:before{content:\'\';position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;border:1px solid "[theme:neutralLight, default: #eaeaea]"}@media screen and (-ms-high-contrast:active){.ms-Dropdown-items{border:1px solid "[theme:white, default: #ffffff]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-items{border:1px solid "[theme:black, default: #000000]"}}.ms-Dropdown-item{box-sizing:border-box;cursor:pointer;display:block;height:40px;line-height:38px;padding:0 10px;position:relative;border:1px solid transparent;white-space:nowrap}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item{border-color:"[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item{border-color:"[theme:white, default: #ffffff]"}}.ms-Dropdown-item:first-child,.ms-Dropdown-item:last-child{height:39px}.ms-Dropdown-item:hover{background-color:"[theme:neutralLight, default: #eaeaea]";color:"[theme:black, default: #000000]"}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item:hover{background-color:#1AEBFF;border-color:#1AEBFF;color:"[theme:black, default: #000000]"}.ms-Dropdown-item:hover:focus{border-color:"[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item:hover{background-color:#37006E;border-color:#37006E;color:"[theme:white, default: #ffffff]"}}.ms-Dropdown-item:active{background-color:"[theme:neutralLight, default: #eaeaea]";border-color:"[theme:themePrimary, default: #0078d7]";color:"[theme:black, default: #000000]"}.ms-Dropdown-item.is-disabled{background:"[theme:white, default: #ffffff]";color:"[theme:neutralTertiary, default: #a6a6a6]";cursor:default;line-height:40px}.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:"[theme:themeLight, default: #c7e0f4]";color:"[theme:black, default: #000000]";line-height:40px}.ms-Dropdown-item.is-selected:hover,.ms-Dropdown-item.ms-Dropdown-item--selected:hover{background-color:"[theme:themeLight, default: #c7e0f4]"}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#1AEBFF;border-color:#1AEBFF;color:"[theme:black, default: #000000]"}.ms-Dropdown-item.is-selected:focus,.ms-Dropdown-item.ms-Dropdown-item--selected:focus{border-color:"[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#37006E;border-color:#37006E;color:"[theme:white, default: #ffffff]"}}@media (min-width:480px){.ms-Dropdown-items{top:auto;right:auto;bottom:auto;left:auto;max-width:100%}.ms-Dropdown.is-open .ms-Dropdown-items,.ms-Dropdown.ms-Dropdown--open .ms-Dropdown-items{position:absolute}}.ms-Dropdown{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Dropdown-items{box-shadow:0 0 15px -5px rgba(0,0,0,.4);border:1px solid "[theme:neutralLight, default: #eaeaea]"}.ms-Dropdown-items:before{border:none}.ms-Dropdown-item.is-selected{line-height:38px}');
	
	//# sourceMappingURL=Dropdown.scss.js.map


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(182));
	
	//# sourceMappingURL=Facepile.js.map


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(183));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Persona_1 = __webpack_require__(164);
	__webpack_require__(184);
	var Facepile = (function (_super) {
	    __extends(Facepile, _super);
	    function Facepile() {
	        _super.apply(this, arguments);
	    }
	    Facepile.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {className: 'ms-Facepile'}, React.createElement("div", {className: 'ms-Facepile-members'}, this.props.personas.map(function (persona, index) {
	            var personaControl = _this._getPersonaControl(persona);
	            return persona.onClick ?
	                _this._getElementWithOnClickEvent(personaControl, persona, index) :
	                _this._getElementWithoutOnClickEvent(personaControl, persona, index);
	        }))));
	    };
	    Facepile.prototype._getPersonaControl = function (persona) {
	        return React.createElement(Persona_1.Persona, {imageInitials: persona.imageInitials, imageUrl: persona.imageUrl, initialsColor: persona.initialsColor, primaryText: persona.personaName, size: Persona_1.PersonaSize.extraSmall, hidePersonaDetails: true});
	    };
	    Facepile.prototype._getElementWithOnClickEvent = function (personaControl, persona, index) {
	        return React.createElement("button", {className: 'ms-Facepile-itemBtn ms-Facepile-itemBtn--member', title: persona.personaName, key: index, onClick: this._onPersonaClick.bind(this, persona), onMouseMove: this._onPersonaMouseMove.bind(this, persona), onMouseOut: this._onPersonaMouseOut.bind(this, persona)}, personaControl);
	    };
	    Facepile.prototype._getElementWithoutOnClickEvent = function (personaControl, persona, index) {
	        return React.createElement("div", {className: 'ms-Facepile-itemBtn ms-Facepile-itemBtn--member', title: persona.personaName, key: index, onMouseMove: this._onPersonaMouseMove.bind(this, persona), onMouseOut: this._onPersonaMouseOut.bind(this, persona)}, personaControl);
	    };
	    Facepile.prototype._onPersonaClick = function (persona, ev) {
	        persona.onClick(persona, ev);
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    Facepile.prototype._onPersonaMouseMove = function (persona, ev) {
	        if (!!persona.onMouseMove) {
	            persona.onMouseMove(persona, ev);
	        }
	    };
	    Facepile.prototype._onPersonaMouseOut = function (persona, ev) {
	        if (!!persona.onMouseOut) {
	            persona.onMouseOut(persona, ev);
	        }
	    };
	    return Facepile;
	}(React.Component));
	exports.Facepile = Facepile;
	
	//# sourceMappingURL=Facepile.js.map


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Facepile{position:relative;height:32px;width:auto}.ms-Facepile-itemBtn{position:relative;height:32px;width:32px;line-height:32px;text-align:center;padding:0;outline:transparent;border-radius:50%;vertical-align:top}html[dir=ltr] .ms-Facepile-itemBtn{float:left}html[dir=rtl] .ms-Facepile-itemBtn{float:right}html[dir=ltr] .ms-Facepile-itemBtn{margin-right:4px}html[dir=rtl] .ms-Facepile-itemBtn{margin-left:4px}button.ms-Facepile-itemBtn{display:inline;background:0 0;padding:0;cursor:pointer;border:none}');
	
	//# sourceMappingURL=Facepile.scss.js.map


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(145));
	
	//# sourceMappingURL=FocusTrapZone.js.map


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(187));
	
	//# sourceMappingURL=MessageBar.js.map


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(188));
	__export(__webpack_require__(190));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(189);
	var css_1 = __webpack_require__(17);
	var MessageBar_Props_1 = __webpack_require__(190);
	var _instance = 0;
	var MessageBar = (function (_super) {
	    __extends(MessageBar, _super);
	    function MessageBar(props) {
	        _super.call(this, props);
	        this.ICON_MAP = (_a = {},
	            _a[MessageBar_Props_1.MessageBarType.info] = 'infoCircle',
	            _a[MessageBar_Props_1.MessageBarType.warning] = 'infoCircle',
	            _a[MessageBar_Props_1.MessageBarType.error] = 'xCircle',
	            _a[MessageBar_Props_1.MessageBarType.remove] = 'circle',
	            _a[MessageBar_Props_1.MessageBarType.severeWarning] = 'alert',
	            _a[MessageBar_Props_1.MessageBarType.success] = 'checkboxCheck ms-Icon--circle',
	            _a
	        );
	        this.state = {
	            labelId: "MessageBar-" + _instance++,
	        };
	        var _a;
	    }
	    MessageBar.prototype.render = function () {
	        var isMultiline = this.props.isMultiline;
	        return isMultiline ? this._renderMultiLine() : this._renderSingleLine();
	    };
	    MessageBar.prototype._getActionsDiv = function () {
	        if (this.props.actions) {
	            return this.props.isMultiline ?
	                React.createElement("div", {className: 'ms-MessageBar-actions'}, " ", this.props.actions, " ") :
	                React.createElement("div", {className: 'ms-MessageBar-actions-oneline'}, " ", [this._getDismissDiv(), this.props.actions], " ");
	        }
	        return null;
	    };
	    MessageBar.prototype._getClassName = function () {
	        return css_1.css(this.props.className, 'ms-MessageBar', {
	            'ms-MessageBar': this.props.messageBarType === MessageBar_Props_1.MessageBarType.info,
	            'ms-MessageBar--error': this.props.messageBarType === MessageBar_Props_1.MessageBarType.error,
	            'ms-MessageBar--remove': this.props.messageBarType === MessageBar_Props_1.MessageBarType.remove,
	            'ms-MessageBar--severeWarning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.severeWarning,
	            'ms-MessageBar--success': this.props.messageBarType === MessageBar_Props_1.MessageBarType.success,
	            'ms-MessageBar--warning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.warning
	        });
	    };
	    MessageBar.prototype._getDismissDiv = function () {
	        if (this.props.onDismiss != null) {
	            return React.createElement("button", {"aria-label": this.props.dismissButtonAriaLabel, className: 'ms-MessageBar-dismissal ms-Button--icon', onClick: this.props.onDismiss}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'}));
	        }
	        return null;
	    };
	    MessageBar.prototype._getIconSpan = function () {
	        return React.createElement("div", {className: 'ms-MessageBar-icon'}, React.createElement("i", {className: "ms-Icon ms-Icon--" + this.ICON_MAP[this.props.messageBarType]}));
	    };
	    MessageBar.prototype._getInnerTextClassName = function () {
	        return this.props.onDismiss ? 'ms-MessageBar-innerTextPadding' : 'ms-MessageBar-innerText';
	    };
	    MessageBar.prototype._renderMultiLine = function () {
	        return (React.createElement("div", {className: this._getClassName() + ' ms-MessageBar-multiline', role: 'status', "aria-live": 'polite', "aria-controls": 'ms-MessageBar-text'}, React.createElement("div", {className: 'ms-MessageBar-content'}, this._getIconSpan(), React.createElement("div", {className: 'ms-MessageBar-actionables'}, this._getDismissDiv(), React.createElement("div", {className: 'ms-MessageBar-text', id: this.state.labelId}, React.createElement("span", {className: this._getInnerTextClassName()}, this.props.children)), this._getActionsDiv()))));
	    };
	    MessageBar.prototype._renderSingleLine = function () {
	        return (React.createElement("div", {className: this._getClassName() + ' ms-MessageBar-singleline', role: 'status', "aria-live": 'polite', "aria-controls": 'ms-MessageBar-text'}, React.createElement("div", {className: 'ms-MessageBar-content'}, this._getIconSpan(), React.createElement("div", {className: 'ms-MessageBar-actionables'}, React.createElement("div", {className: 'ms-MessageBar-text', id: this.state.labelId}, React.createElement("span", {className: this._getInnerTextClassName()}, this.props.children)), this._getActionsDiv()))));
	    };
	    MessageBar.defaultProps = {
	        messageBarType: MessageBar_Props_1.MessageBarType.info,
	        onDismiss: null,
	        isMultiline: true,
	    };
	    return MessageBar;
	}(React.Component));
	exports.MessageBar = MessageBar;
	
	//# sourceMappingURL=MessageBar.js.map


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-MessageBar{padding:8px;display:table;background-color:"[theme:infoBackground, default: #f4f4f4]"}.ms-MessageBar-icon,.ms-MessageBar-text{display:table-cell;vertical-align:top}.ms-MessageBar-icon{padding-right:8px;font-size:16px;color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-MessageBar-text{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;font-weight:400}.ms-MessageBar.ms-MessageBar--warning{background-color:#fff4ce}.ms-MessageBar.ms-MessageBar--severeWarning{background-color:#fed9cc}.ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon{color:#d83b01}.ms-MessageBar.ms-MessageBar--error{background-color:"[theme:errorBackground, default: #fde7e9]"}.ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon{color:"[theme:error, default: #a80000]"}.ms-MessageBar.ms-MessageBar--remove{background-color:"[theme:errorBackground, default: #fde7e9]"}.ms-MessageBar.ms-MessageBar--remove .ms-MessageBar-icon{color:"[theme:error, default: #a80000]"}.ms-MessageBar.ms-MessageBar--remove .ms-Icon{font-size:8px;margin-left:3px}.ms-MessageBar.ms-MessageBar--success{background-color:"[theme:successBackground, default: #dff6dd]"}.ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon{color:"[theme:green, default: #107c10]"}.ms-MessageBar.ms-MessageBar--success .ms-Icon{font-size:12px;top:3px}.ms-MessageBar.ms-MessageBar--success .ms-Icon:before{margin-left:1px}.ms-MessageBar.ms-MessageBar--success .ms-Icon:after{font-size:8px;margin-left:3px;top:1px}.ms-MessageBar-icon{min-width:16px;min-height:16px;display:-webkit-box;display:-ms-flexbox;display:flex}html[dir=ltr] .ms-MessageBar-icon{padding-right:8px}html[dir=rtl] .ms-MessageBar-icon{padding-left:8px}.ms-MessageBar{width:100%;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.ms-MessageBar-content{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;box-sizing:border-box}.ms-MessageBar-text{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.ms-MessageBar-link{white-space:nowrap;padding:0 8px 0}.ms-MessageBar-actionables{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}.ms-MessageBar-actionables>.ms-MessageBar-dismissal{right:0;top:0;position:absolute!important}.ms-MessageBar-actions,.ms-MessageBar-actions-oneline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms-MessageBar-actions-oneline{position:relative}.ms-MessageBar-actions{padding-top:12px}.ms-MessageBar-dismissal{padding:8px}.ms-Fabric .ms-MessageBar-dismissal::-moz-focus-inner{border:0}.ms-Fabric .ms-MessageBar-dismissal{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-MessageBar-dismissal:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}html[dir=ltr] .ms-MessageBar-link{padding-left:4px}html[dir=rtl] .ms-MessageBar-link{padding-right:4px}.ms-MessageBar+.ms-MessageBar{margin-bottom:6px}html[dir=ltr] .ms-MessageBar-innerTextPadding{padding-right:16px}html[dir=rtl] .ms-MessageBar-innerTextPadding{padding-left:16px}html[dir=ltr] .ms-MessageBar-innerTextPadding .ms-MessageBar-innerText>span,html[dir=ltr] .ms-MessageBar-innerTextPadding span{padding-right:4px}html[dir=rtl] .ms-MessageBar-innerTextPadding .ms-MessageBar-innerText>span,html[dir=rtl] .ms-MessageBar-innerTextPadding span{padding-left:4px}.ms-MessageBar-multiline>.ms-MessageBar-content>.ms-MessageBar-actionables{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-icon{padding:16px 8px 16px 0;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}html[dir=rtl] .ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-icon{padding:16px 0 16px 8px}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-text{padding:16px 0 16px 0}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text .ms-MessageBar-innerText,.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text .ms-MessageBar-innerTextPadding{max-height:1.3em;line-height:1.3em;overflow:hidden;text-overflow:ellipsis}.ms-MessageBar-singleline .ms-MessageBar-content>.ms-MessageBar-actionables{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ms-MessageBar.ms-MessageBar--remove .ms-Icon--x{font-size:13.33px}');
	
	//# sourceMappingURL=MessageBar.scss.js.map


/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";
	(function (MessageBarType) {
	    /** Info styled MessageBar */
	    MessageBarType[MessageBarType["info"] = 0] = "info";
	    /** Error styled MessageBar */
	    MessageBarType[MessageBarType["error"] = 1] = "error";
	    /** Remove styled MessageBar */
	    MessageBarType[MessageBarType["remove"] = 2] = "remove";
	    /** SevereWarning styled MessageBar */
	    MessageBarType[MessageBarType["severeWarning"] = 3] = "severeWarning";
	    /** Success styled MessageBar */
	    MessageBarType[MessageBarType["success"] = 4] = "success";
	    /** Warning styled MessageBar */
	    MessageBarType[MessageBarType["warning"] = 5] = "warning";
	})(exports.MessageBarType || (exports.MessageBarType = {}));
	var MessageBarType = exports.MessageBarType;
	
	//# sourceMappingURL=MessageBar.Props.js.map


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(192));
	
	//# sourceMappingURL=Nav.js.map


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(193));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(10);
	__webpack_require__(194);
	var Nav = (function (_super) {
	    __extends(Nav, _super);
	    function Nav() {
	        _super.call(this);
	        this.state = {
	            isGroupExpanded: []
	        };
	    }
	    Nav.prototype.render = function () {
	        var _this = this;
	        if (!this.props.groups) {
	            return null;
	        }
	        var groupElements = this.props.groups.map(function (group, groupIndex) { return _this._renderGroup(group, groupIndex); });
	        return (React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.vertical}, React.createElement("nav", {role: 'navigation', className: 'ms-Nav' + (this.props.isOnTop ? ' is-onTop ms-u-slideRightIn40' : '')}, groupElements)));
	    };
	    Nav.prototype._renderLink = function (link, linkIndex) {
	        return (React.createElement("li", {key: linkIndex}, React.createElement("a", {className: 'ms-Nav-link' + (_isLinkSelected(link) ? ' is-selected' : ''), href: link.url || 'javascript:', onClick: this.props.onLinkClick, title: link.name}, (link.iconClassName ?
	            React.createElement("i", {className: 'ms-Icon ms-Nav-IconLink ' + link.iconClassName})
	            : ''), this.props.onRenderLink(link)), " ", this._renderLinks(link.links)));
	    };
	    Nav.prototype._renderLinks = function (links) {
	        var _this = this;
	        if (!links || !links.length) {
	            return null;
	        }
	        var linkElements = links.map(function (link, linkIndex) { return _this._renderLink(link, linkIndex); });
	        return (React.createElement("ul", null, linkElements));
	    };
	    Nav.prototype._renderGroup = function (group, groupIndex) {
	        var isGroupExpanded = this.state.isGroupExpanded[groupIndex] !== false;
	        return (React.createElement("div", {key: groupIndex, className: 'ms-Nav-group' + (isGroupExpanded ? ' is-expanded' : '')}, (group.name ?
	            React.createElement("button", {className: 'ms-Nav-groupButton', onClick: this._onGroupHeaderClicked.bind(this, groupIndex)}, React.createElement("i", {className: 'ms-Nav-groupChevron ms-Icon ms-Icon--chevronDown'}), group.name) : null), React.createElement("div", {className: 'ms-Nav-groupContent ms-u-slideDownIn20'}, this._renderLinks(group.links))));
	    };
	    Nav.prototype._onGroupHeaderClicked = function (groupIndex, ev) {
	        var currentState = this.state.isGroupExpanded[groupIndex] !== false;
	        this.state.isGroupExpanded[groupIndex] = !currentState;
	        this.forceUpdate();
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    Nav.defaultProps = {
	        groups: null,
	        onRenderLink: function (link) { return (React.createElement("span", {className: 'ms-Nav-linkText'}, link.name)); }
	    };
	    return Nav;
	}(React.Component));
	exports.Nav = Nav;
	// A tag used for resolving links.
	var _urlResolver = document.createElement('a');
	function _isLinkSelected(link) {
	    if (!link.url) {
	        return false;
	    }
	    _urlResolver.href = link.url || '';
	    var target = _urlResolver.href;
	    if (location.protocol + '//' + location.host + location.pathname === target) {
	        return true;
	    }
	    if (location.href === target) {
	        return true;
	    }
	    if (location.hash) {
	        // Match the hash to the url.
	        if (location.hash === link.url) {
	            return true;
	        }
	        // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
	        _urlResolver.href = location.hash.substring(1);
	        return _urlResolver.href === target;
	    }
	    return false;
	}
	
	//# sourceMappingURL=Nav.js.map


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Nav{overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Nav.is-onTop{position:absolute}.ms-Nav ul{list-style-type:none}.ms-Nav ul,.ms-Nav ul>li{padding:0}.ms-Nav li>ul{margin:0 14px}.ms-Nav-groupContent{display:none;margin-bottom:20px}.ms-Nav-group.is-expanded .ms-Nav-groupContent{display:block}.ms-Nav-Icon{padding:0;color:"[theme:neutralPrimary, default: #333333]";background:"[theme:neutralLighter, default: #f4f4f4]";-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}html[dir=ltr] .ms-Nav-IconLink{margin-right:4px}html[dir=rtl] .ms-Nav-IconLink{margin-left:4px}.ms-Nav-groupButton{display:block;width:100%;height:40px;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;line-height:40px;margin:5px 0;padding:0 40px;background:0 0;border:none;border-bottom:1px solid "[theme:neutralLight, default: #eaeaea]";text-transform:uppercase;cursor:pointer;color:"[theme:neutralPrimary, default: #333333]";background:"[theme:white, default: #ffffff]"}html[dir=ltr] .ms-Nav-groupButton{text-align:left}html[dir=rtl] .ms-Nav-groupButton{text-align:right}.ms-Nav-groupButton:visited{color:inherit}.ms-Nav-groupButton:hover{color:"[theme:neutralPrimary, default: #333333]";background:"[theme:neutralLighterAlt, default: #f8f8f8]"}.ms-Nav-groupChevron.ms-Icon{position:absolute;height:40px;line-height:40px;font-size:15px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}html[dir=ltr] .ms-Nav-groupChevron.ms-Icon{left:15px}html[dir=rtl] .ms-Nav-groupChevron.ms-Icon{right:15px}.ms-Nav-group.is-expanded .ms-Nav-groupChevron{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.ms-Nav-link{display:block;position:relative;height:40px;line-height:40px;text-decoration:none;padding:0 40px;cursor:pointer;text-overflow:ellipsis;text-decoration:none;white-space:nowrap;overflow-x:hidden;color:"[theme:neutralPrimary, default: #333333]";background:"[theme:white, default: #ffffff]"}.ms-Nav-link:hover{color:"[theme:neutralPrimary, default: #333333]";background:"[theme:neutralLighterAlt, default: #f8f8f8]"}.ms-Nav-link.is-selected{position:relative;color:"[theme:neutralPrimary, default: #333333]";background:"[theme:neutralLighter, default: #f4f4f4]"}.ms-Nav-link.is-selected:hover{color:"[theme:neutralDark, default: #212121]";background:"[theme:neutralLight, default: #eaeaea]"}.ms-Nav-link.is-selected:after{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0}html[dir=ltr] .ms-Nav-link.is-selected:after{border-left:2px solid "[theme:neutralPrimary, default: #333333]"}html[dir=rtl] .ms-Nav-link.is-selected:after{border-right:2px solid "[theme:neutralPrimary, default: #333333]"}.ms-Fabric .ms-Nav-groupButton::-moz-focus-inner,.ms-Fabric .ms-Nav-link::-moz-focus-inner{border:0}.ms-Fabric .ms-Nav-groupButton,.ms-Fabric .ms-Nav-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Nav-groupButton:focus:before,.ms-Fabric.is-focusVisible .ms-Nav-link:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}');
	
	//# sourceMappingURL=Nav.scss.js.map


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(196));
	
	//# sourceMappingURL=OrgChart.js.map


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(197));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var OrgChart = (function (_super) {
	    __extends(OrgChart, _super);
	    function OrgChart() {
	        _super.apply(this, arguments);
	    }
	    OrgChart.prototype.render = function () {
	        var rootClass = 'ms-OrgChart';
	        return (React.createElement("div", {className: rootClass}));
	    };
	    return OrgChart;
	}(React.Component));
	exports.OrgChart = OrgChart;
	
	//# sourceMappingURL=OrgChart.js.map


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(199));
	
	//# sourceMappingURL=Panel.js.map


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(200));
	__export(__webpack_require__(201));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var Panel_Props_1 = __webpack_require__(201);
	var Layer_1 = __webpack_require__(29);
	var Overlay_1 = __webpack_require__(148);
	var BaseComponent_1 = __webpack_require__(132);
	var css_1 = __webpack_require__(17);
	var rtl_1 = __webpack_require__(16);
	__webpack_require__(202);
	var index_1 = __webpack_require__(154);
	var _instance = 0;
	var Panel = (function (_super) {
	    __extends(Panel, _super);
	    function Panel(props) {
	        _super.call(this, props);
	        this._onPanelClick = this._onPanelClick.bind(this);
	        this._onPanelRef = this._onPanelRef.bind(this);
	        this.state = {
	            isOpen: !!props.isOpen,
	            isAnimatingOpen: props.isOpen,
	            isAnimatingClose: false,
	            id: "Panel-" + _instance++
	        };
	    }
	    Panel.prototype.componentDidMount = function () {
	        var _this = this;
	        if (this.state.isOpen) {
	            this._async.setTimeout(function () {
	                _this.setState({
	                    isAnimatingOpen: false
	                });
	            }, 2000);
	        }
	    };
	    Panel.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.isOpen !== this.state.isOpen) {
	            this.setState({
	                isOpen: newProps.isOpen,
	                isAnimatingOpen: newProps.isOpen ? true : false,
	                isAnimatingClose: newProps.isOpen ? false : true
	            });
	        }
	    };
	    Panel.prototype.render = function () {
	        var _a = this.props, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, type = _a.type, hasCloseButton = _a.hasCloseButton, isLightDismiss = _a.isLightDismiss, headerText = _a.headerText, closeButtonAriaLabel = _a.closeButtonAriaLabel;
	        var _c = this.state, isOpen = _c.isOpen, isAnimatingOpen = _c.isAnimatingOpen, isAnimatingClose = _c.isAnimatingClose, id = _c.id;
	        var isLeft = type === Panel_Props_1.PanelType.smallFixedNear ? true : false;
	        var isRTL = rtl_1.getRTL();
	        var isOnRightSide = isRTL ? isLeft : !isLeft;
	        var headerTextId = id + '-headerText';
	        var pendingCommandBarContent = '';
	        var header;
	        if (headerText) {
	            header = React.createElement("p", {className: 'ms-Panel-headerText', id: headerTextId}, headerText);
	        }
	        var closeButton;
	        if (hasCloseButton) {
	            closeButton = React.createElement("button", {className: 'ms-Panel-closeButton ms-PanelAction-close', onClick: this._onPanelClick, "aria-label": closeButtonAriaLabel, "data-is-visible": true}, React.createElement("i", {className: 'ms-Panel-closeIcon ms-Icon ms-Icon--x'}));
	        }
	        return (React.createElement(Layer_1.Layer, null, React.createElement(index_1.Popup, {role: 'dialog', ariaLabelledBy: headerText ? headerTextId : undefined, onDismiss: this.props.onDismiss}, React.createElement("div", {ref: this._onPanelRef, className: css_1.css('ms-Panel', className, {
	            'ms-Panel--openLeft': !isOnRightSide,
	            'ms-Panel--openRight': isOnRightSide,
	            'is-open': isOpen,
	            'ms-Panel-animateIn': isAnimatingOpen,
	            'ms-Panel-animateOut': isAnimatingClose,
	            'ms-Panel--smFluid': type === Panel_Props_1.PanelType.smallFluid,
	            'ms-Panel--smLeft': type === Panel_Props_1.PanelType.smallFixedNear,
	            'ms-Panel--sm': type === Panel_Props_1.PanelType.smallFixedFar,
	            'ms-Panel--md': type === Panel_Props_1.PanelType.medium,
	            'ms-Panel--lg': type === Panel_Props_1.PanelType.large || type === Panel_Props_1.PanelType.largeFixed,
	            'ms-Panel--fixed': type === Panel_Props_1.PanelType.largeFixed,
	            'ms-Panel--xl': type === Panel_Props_1.PanelType.extraLarge,
	        })}, React.createElement(Overlay_1.Overlay, {isDarkThemed: true, onClick: isLightDismiss ? this._onPanelClick : null}), React.createElement("div", {className: 'ms-Panel-main'}, React.createElement("div", {className: 'ms-Panel-commands', "data-is-visible": true}, pendingCommandBarContent, closeButton), React.createElement("div", {className: 'ms-Panel-contentInner'}, header, React.createElement("div", {className: 'ms-Panel-content'}, children)))))));
	    };
	    Panel.prototype.dismiss = function () {
	        if (this.state.isOpen) {
	            this.setState({
	                isAnimatingOpen: false,
	                isAnimatingClose: true
	            });
	        }
	    };
	    Panel.prototype._onPanelClick = function () {
	        this.dismiss();
	    };
	    Panel.prototype._onPanelRef = function (ref) {
	        if (ref) {
	            this._events.on(ref, 'animationend', this._onAnimationEnd);
	        }
	        else {
	            this._events.off();
	        }
	    };
	    Panel.prototype._onAnimationEnd = function (ev) {
	        if (ev.animationName.indexOf('In') > -1) {
	            this.setState({
	                isOpen: true,
	                isAnimatingOpen: false
	            });
	        }
	        if (ev.animationName.indexOf('Out') > -1) {
	            this.setState({
	                isOpen: false,
	                isAnimatingClose: false
	            });
	            if (this.props.onDismiss) {
	                this.props.onDismiss();
	            }
	        }
	    };
	    Panel.defaultProps = {
	        isOpen: false,
	        hasCloseButton: true,
	        type: Panel_Props_1.PanelType.smallFixedFar,
	    };
	    return Panel;
	}(BaseComponent_1.BaseComponent));
	exports.Panel = Panel;
	
	//# sourceMappingURL=Panel.js.map


/***/ },
/* 201 */
/***/ function(module, exports) {

	"use strict";
	(function (PanelType) {
	    /**
	     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fluid width.
	     * Only used on Small screen breakpoints.
	     * Small: 320-479px width (full screen), 16px Left/Right padding
	     * Medium: <unused>
	     * Large: <unused>
	     * XLarge: <unused>
	     * XXLarge: <unused>
	     */
	    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
	    /**
	     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fixed width.
	     * Small: 272px width, 16px Left/Right padding
	     * Medium: 340px width, 16px Left/Right padding
	     * Large: 340px width, 32px Left/Right padding
	     * XLarge: 340px width, 32px Left/Right padding
	     * XXLarge: 340px width, 40px Left/Right padding
	     */
	    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
	    /**
	     * Renders the panel in 'small' mode, anchored to the near side (left in LTR mode), and has a fixed width.
	     * Small: 272px width, 16px Left/Right padding
	     * Medium: 272px width, 16px Left/Right padding
	     * Large: 272px width, 32px Left/Right padding
	     * XLarge: 272px width, 32px Left/Right padding
	     * XXLarge: 272px width, 32px Left/Right padding
	     */
	    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
	    /**
	     * Renders the panel in 'medium' mode, anchored to the far side (right in LTR mode).
	     * Small: <adapts to smallFluid>
	     * Medium: <adapts to smallFixedFar>
	     * Large: 48px fixed left margin, 32px Left/Right padding
	     * XLarge: 644px width, 32px Left/Right padding
	     * XXLarge: 643px width, 40px Left/Right padding
	     */
	    PanelType[PanelType["medium"] = 3] = "medium";
	    /**
	     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fluid at XXX-Large breakpoint.
	     * Small: <adapts to smallFluid>
	     * Medium:  <adapts to smallFixedFar>
	     * Large: <adapts to medium>
	     * XLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXXLarge: 48px fixed left margin, (no redlines for padding, assuming previous breakpoint)
	     */
	    PanelType[PanelType["large"] = 4] = "large";
	    /**
	     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fixed at XXX-Large breakpoint.
	     * Small: <adapts to smallFluid>
	     * Medium:  <adapts to smallFixedFar>
	     * Large: <adapts to medium>
	     * XLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXXLarge: 940px width, (no redlines for padding, assuming previous breakpoint)
	     */
	    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
	    /**
	     * Renders the panel in 'extra large' mode, anchored to the far side (right in LTR mode).
	     * Small: <adapts to smallFluid>
	     * Medium: <adapts to smallFixedFar>
	     * Large: <adapts to medium>
	     * XLarge: <adapts to large>
	     * XXLarge: 176px fixed left margin, 40px Left/Right padding
	     * XXXLarge: 176px fixed left margin, 40px Left/Right padding
	     */
	    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
	})(exports.PanelType || (exports.PanelType = {}));
	var PanelType = exports.PanelType;
	
	//# sourceMappingURL=Panel.Props.js.map


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Panel{pointer-events:inherit;overflow:hidden}.ms-Panel .ms-Panel-main{position:absolute;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.ms-Panel{bottom:0;left:0;position:fixed;right:0;top:0;z-index:300;display:none;pointer-events:none}.ms-Panel .ms-Overlay{z-index:0;display:none;pointer-events:none;opacity:1;cursor:pointer;-webkit-transition:opacity 367ms cubic-bezier(.1,.9,.2,1);transition:opacity 367ms cubic-bezier(.1,.9,.2,1)}.ms-Panel-main{background-color:"[theme:white, default: #ffffff]";bottom:0;position:fixed;top:0;display:none;z-index:10;width:100%}html[dir=ltr] .ms-Panel-main{right:0}html[dir=rtl] .ms-Panel-main{left:0}@media (min-width:480px){.ms-Panel-main{border-left:1px solid "[theme:neutralLight, default: #eaeaea]";border-right:1px solid "[theme:neutralLight, default: #eaeaea]";pointer-events:auto;width:340px;box-shadow:-30px 0 30px -30px rgba(0,0,0,.2)}html[dir=ltr] .ms-Panel-main{left:auto}html[dir=rtl] .ms-Panel-main{right:auto}}.ms-Panel.ms-Panel--sm .ms-Panel-main{width:272px}@media (min-width:480px){.ms-Panel.ms-Panel--sm .ms-Panel-main{width:340px}}.ms-Panel.ms-Panel--smLeft .ms-Panel-main{width:272px}html[dir=ltr] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{right:auto}html[dir=rtl] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{left:auto}html[dir=ltr] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{left:0}html[dir=rtl] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{right:0}.ms-Panel.ms-Panel--smFluid .ms-Panel-main{width:100%}@media (min-width:640px){.ms-Panel.ms-Panel--lg .ms-Panel-main,.ms-Panel.ms-Panel--md .ms-Panel-main,.ms-Panel.ms-Panel--xl .ms-Panel-main{width:auto}html[dir=ltr] .ms-Panel.ms-Panel--lg .ms-Panel-main,html[dir=ltr] .ms-Panel.ms-Panel--md .ms-Panel-main,html[dir=ltr] .ms-Panel.ms-Panel--xl .ms-Panel-main{left:48px}html[dir=rtl] .ms-Panel.ms-Panel--lg .ms-Panel-main,html[dir=rtl] .ms-Panel.ms-Panel--md .ms-Panel-main,html[dir=rtl] .ms-Panel.ms-Panel--xl .ms-Panel-main{right:48px}}@media (min-width:1024px){.ms-Panel.ms-Panel--md .ms-Panel-main{width:643px}html[dir=ltr] .ms-Panel.ms-Panel--md .ms-Panel-main{left:auto}html[dir=rtl] .ms-Panel.ms-Panel--md .ms-Panel-main{right:auto}}@media (min-width:1366px){html[dir=ltr] .ms-Panel.ms-Panel--lg .ms-Panel-main{left:428px}html[dir=rtl] .ms-Panel.ms-Panel--lg .ms-Panel-main{right:428px}}@media (min-width:1366px){.ms-Panel.ms-Panel--lg.ms-Panel--fixed .ms-Panel-main{width:940px}html[dir=ltr] .ms-Panel.ms-Panel--lg.ms-Panel--fixed .ms-Panel-main{left:auto}html[dir=rtl] .ms-Panel.ms-Panel--lg.ms-Panel--fixed .ms-Panel-main{right:auto}}@media (min-width:1366px){html[dir=ltr] .ms-Panel.ms-Panel--xl .ms-Panel-main{left:176px}html[dir=rtl] .ms-Panel.ms-Panel--xl .ms-Panel-main{right:176px}}.ms-Panel.is-open{display:block}.ms-Panel.is-open .ms-Panel-main{opacity:1;pointer-events:auto;display:block}.ms-Panel.is-open .ms-Overlay{display:block;pointer-events:auto}@media screen and (-ms-high-contrast:active){.ms-Panel.is-open .ms-Overlay{opacity:0}}.ms-Panel.is-open.ms-Panel-animateIn .ms-Panel-main{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Panel.is-open.ms-Panel-animateOut .ms-Panel-main{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:.1s;animation-duration:.1s}.ms-Panel.is-open.ms-Panel-animateOut .ms-Overlay{display:none}@media (min-width:480px){.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateIn .ms-Panel-main{-webkit-animation-name:fadeIn,slideLeftIn40;animation-name:fadeIn,slideLeftIn40;-webkit-animation-duration:367ms;-moz-animation-duration:367ms;-ms-animation-duration:367ms;-o-animation-duration:367ms;-webkit-animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-timing-function:cubic-bezier(.1,.9,.2,1);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateIn .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateOut .ms-Panel-main{-webkit-animation-name:fadeOut,slideRightOut40;animation-name:fadeOut,slideRightOut40;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateOut .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateIn .ms-Panel-main{-webkit-animation-name:fadeIn,slideRightIn40;animation-name:fadeIn,slideRightIn40;-webkit-animation-duration:367ms;-moz-animation-duration:367ms;-ms-animation-duration:367ms;-o-animation-duration:367ms;-webkit-animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-timing-function:cubic-bezier(.1,.9,.2,1);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateIn .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateOut .ms-Panel-main{-webkit-animation-name:fadeOut,slideLeftOut40;animation-name:fadeOut,slideLeftOut40;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateOut .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Panel.is-open .ms-Overlay{cursor:pointer;opacity:1;pointer-events:auto}}@media screen and (min-width:480px) and (-ms-high-contrast:active){.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateIn .ms-Overlay,.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateIn .ms-Overlay{opacity:0;-webkit-animation-name:none;animation-name:none}}.ms-Panel-closeButton{background:0 0;border:0;cursor:pointer;position:absolute;right:8px;top:0;height:40px;width:40px;line-height:40px;padding:0;color:"[theme:neutralSecondary, default: #666666]";font-size:14px}.ms-Panel-closeButton:hover{color:"[theme:neutralPrimary, default: #333333]"}.ms-Panel-contentInner{position:absolute;top:40px;bottom:0;left:0;right:0;padding:0 16px 20px;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}@media (min-width:640px){.ms-Panel-contentInner{padding:0 32px 20px}}@media (min-width:1366px){.ms-Panel-contentInner{padding:0 40px 20px}}.ms-Panel-headerText{font-family:"Segoe UI Light WestEuropean","Segoe UI Light","Segoe UI",Tahoma,Arial,sans-serif;font-size:21px;color:"[theme:neutralPrimary, default: #333333]";margin:10px 0;padding:4px 0;line-height:1;text-overflow:ellipsis;overflow:hidden}@media (min-width:1024px){.ms-Panel-headerText{margin-top:30px}}');
	
	//# sourceMappingURL=Panel.scss.js.map


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(204));
	
	//# sourceMappingURL=PeoplePicker.js.map


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(205));
	__export(__webpack_require__(206));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PeoplePicker_Props_1 = __webpack_require__(206);
	var Persona_1 = __webpack_require__(164);
	var Spinner_1 = __webpack_require__(123);
	var string_1 = __webpack_require__(207);
	var FocusZone_1 = __webpack_require__(10);
	var css_1 = __webpack_require__(17);
	var KeyCodes_1 = __webpack_require__(15);
	var EventGroup_1 = __webpack_require__(14);
	__webpack_require__(208);
	var INVALID_INDEX = -1;
	var PeoplePicker = (function (_super) {
	    __extends(PeoplePicker, _super);
	    function PeoplePicker(props) {
	        _super.call(this, props);
	        this._suggestionsCount = 0;
	        this._focusedPersonaIndex = INVALID_INDEX;
	        this._events = new EventGroup_1.EventGroup(this);
	        this._activatePeoplePicker = this._activatePeoplePicker.bind(this);
	        this._dismissPeoplePicker = this._dismissPeoplePicker.bind(this);
	        this._addPersonaToSelectedList = this._addPersonaToSelectedList.bind(this);
	        this._searchForMoreResults = this._searchForMoreResults.bind(this);
	        this._onSearchFieldTextChanged = this._onSearchFieldTextChanged.bind(this);
	        this._onSearchFieldKeyDown = this._onSearchFieldKeyDown.bind(this);
	        this._onBlurCapture = this._onBlurCapture.bind(this);
	        this._removeSelectedPersona = this._removeSelectedPersona.bind(this);
	        this._onSelectedPersonaFocus = this._onSelectedPersonaFocus.bind(this);
	        this._onSearchBoxKeyDown = this._onSearchBoxKeyDown.bind(this);
	        var selectedPersonas = props.initialItems ? props.initialItems : [];
	        this.state = {
	            isActive: false,
	            isSearching: false,
	            searchTextValue: '',
	            highlightedSearchResultIndex: INVALID_INDEX,
	            selectedPersonas: selectedPersonas
	        };
	    }
	    PeoplePicker.prototype.componentDidMount = function () {
	        this._events.on(window, 'blur', this._onBlurCapture, true);
	        this._events.on(window, 'click', this._onClickCapture, true);
	        this._events.on(window, 'touchstart', this._onClickCapture, true);
	    };
	    PeoplePicker.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    PeoplePicker.prototype.componentDidUpdate = function () {
	        this._setScollPosition();
	        var suggestions = this.props.suggestions;
	        if (this.state.isActive && this._suggestionsCount !== suggestions.length) {
	            this._setSelectedSearchResultIndex(0);
	        }
	        this._suggestionsCount = suggestions.length;
	        // if the selected persona is out of range after an update, it means the user deleted it
	        // and we need to set focus on the last one (which isn't handled by the FocusZone).
	        // Unless there are no more personas, then set focus on the input field.
	        var selectedPersonaCount = this.state.selectedPersonas.length;
	        if (this._focusedPersonaIndex !== INVALID_INDEX && this._focusedPersonaIndex >= selectedPersonaCount) {
	            if (selectedPersonaCount > 0) {
	                this._focusedPersonaIndex = selectedPersonaCount - 1;
	                this.refs['persona' + this._focusedPersonaIndex].focus();
	            }
	            else {
	                this._focusedPersonaIndex = INVALID_INDEX;
	                this.refs.searchField.focus();
	            }
	        }
	    };
	    PeoplePicker.prototype.render = function () {
	        var _this = this;
	        var type = this.props.type;
	        var searchField = this._renderSearchField();
	        var searchResults = type === PeoplePicker_Props_1.PeoplePickerType.memberList ? this._renderSearchResultsForMemberList() : this._renderSearchResults();
	        // Render the selected personas.
	        // There are two layouts to choose from, based on the Persona type.
	        var selectedPersonas = type === PeoplePicker_Props_1.PeoplePickerType.memberList ? null : this._renderSelectedPersonas();
	        var memberList = type === PeoplePicker_Props_1.PeoplePickerType.memberList ? this._renderSelectedPersonasAsMemberList() : null;
	        var className = css_1.css('ms-PeoplePicker', {
	            'is-active': this.state.isActive,
	            'ms-PeoplePicker--compact': type === PeoplePicker_Props_1.PeoplePickerType.compact,
	            'ms-PeoplePicker--membersList': type === PeoplePicker_Props_1.PeoplePickerType.memberList,
	        });
	        return (React.createElement("div", {className: className, ref: 'root', key: 'root'}, React.createElement("div", {className: 'ms-PeoplePicker-searchBox', ref: function (searchBox) { return _this.refs._searchBox = searchBox; }, onKeyDown: this._onSearchBoxKeyDown}, React.createElement(FocusZone_1.FocusZone, {onActiveElementChanged: this._onSelectedPersonaFocus, ref: function (focusZone) { return _this.refs.focusZone = focusZone; }}, selectedPersonas, searchField)), searchResults, memberList));
	    };
	    PeoplePicker.prototype._onSearchBoxKeyDown = function (ev) {
	        switch (ev.which) {
	            // remove focused persona
	            case KeyCodes_1.KeyCodes.backspace:
	            case KeyCodes_1.KeyCodes.del:
	                if (this._focusedPersonaIndex !== INVALID_INDEX) {
	                    this._removeSelectedPersona(this._focusedPersonaIndex);
	                    ev.stopPropagation();
	                    ev.preventDefault();
	                }
	        }
	    };
	    /**
	     *
	     */
	    PeoplePicker.prototype._onSelectedPersonaFocus = function (element, ev) {
	        // store a reference to this element
	        // in keydown handler, if there's a focused persona, we want to delete it on certain key press events
	        var index = element.getAttribute('data-selection-index');
	        if (index) {
	            this._focusedPersonaIndex = Number(index);
	        }
	    };
	    /**
	     * Handles closing the people picker whenever focus is lost
	     */
	    PeoplePicker.prototype._onBlurCapture = function (ev) {
	        // onBlur, relatedTarget refers to the element that got focus
	        if (!this.refs.searchField.contains(ev.relatedTarget)
	            && !this.refs.pickerResults.contains(ev.relatedTarget)) {
	            this._dismissPeoplePicker();
	        }
	    };
	    /**
	     * Handles closing the people picker whenever focus is lost through mouse.
	     */
	    PeoplePicker.prototype._onClickCapture = function (ev) {
	        if (!this.refs.searchField.contains(ev.target)
	            && !this.refs.pickerResults.contains(ev.target)) {
	            this._dismissPeoplePicker();
	        }
	    };
	    /**
	     * Click handler for when the user clicks on the Search For Results button.
	     */
	    PeoplePicker.prototype._searchForMoreResults = function (event) {
	        var onSearchForMoreResults = this.props.onSearchForMoreResults;
	        this.setState({
	            'isSearching': true
	        });
	        event.preventDefault();
	        event.stopPropagation();
	        if (typeof onSearchForMoreResults !== 'undefined') {
	            onSearchForMoreResults(this.refs.searchField.value);
	        }
	    };
	    /**
	     * Opens the people picker dropdown.
	     */
	    PeoplePicker.prototype._activatePeoplePicker = function () {
	        this.setState({
	            'isActive': true,
	            'highlightedSearchResultIndex': INVALID_INDEX,
	        });
	        this._highlightedSearchResult = undefined;
	    };
	    /**
	     * Closes the people picker dropdown.
	     */
	    PeoplePicker.prototype._dismissPeoplePicker = function () {
	        this.setState({
	            'isActive': false,
	            'isSearching': false,
	            'highlightedSearchResultIndex': INVALID_INDEX,
	        });
	        this._highlightedSearchResult = undefined;
	    };
	    /**
	     *
	     */
	    PeoplePicker.prototype._removeSuggestedPersona = function (index, personaInfo) {
	        var onRemoveSuggestion = this.props.onRemoveSuggestion;
	        if (onRemoveSuggestion) {
	            onRemoveSuggestion(index, personaInfo);
	        }
	    };
	    /**
	     * Selects the persona, dismisses the people picker, and clears out the search field.
	     */
	    PeoplePicker.prototype._addPersonaToSelectedList = function (personaInfo) {
	        var selectedPersonas = this.state.selectedPersonas;
	        var onItemAdded = this.props.onItemAdded;
	        if (onItemAdded) {
	            onItemAdded(personaInfo);
	        }
	        selectedPersonas.push(personaInfo);
	        this._dismissPeoplePicker();
	        this.refs.searchField.value = '';
	        this.setState({
	            searchTextValue: '',
	            selectedPersonas: selectedPersonas
	        });
	        this.refs.searchField.focus();
	        this._onSearchFieldTextChanged();
	    };
	    /**
	     * Creates a new persona based on what the user has typed (non search result persona)
	     */
	    PeoplePicker.prototype._addManualPersonaToSelectedList = function () {
	        var newPersonaName = this.state.searchTextValue;
	        if (newPersonaName.length > 0) {
	            var personaInfo = {
	                imageInitials: newPersonaName.charAt(0).toUpperCase(),
	                primaryText: newPersonaName,
	                secondaryText: newPersonaName
	            };
	            this._addPersonaToSelectedList(personaInfo);
	        }
	    };
	    /**
	     * Handles keyboard inputs for the PeoplePicker.
	     */
	    PeoplePicker.prototype._onSearchFieldKeyDown = function (ev) {
	        var type = this.props.type;
	        var _a = this.state, isActive = _a.isActive, highlightedSearchResultIndex = _a.highlightedSearchResultIndex, selectedPersonas = _a.selectedPersonas;
	        switch (ev.which) {
	            // Enter behavior:
	            // - Adds the highlighted persona from the search results (autocomplete)
	            // - creates a new persona from the user's input (not from the search results)
	            case KeyCodes_1.KeyCodes.enter:
	                if (isActive && highlightedSearchResultIndex !== INVALID_INDEX) {
	                    this._addPersonaToSelectedList(this._highlightedSearchResult);
	                }
	                else {
	                    this._addManualPersonaToSelectedList();
	                }
	                break;
	            // Escape behavior:
	            // - closes the people picker if it is open
	            case KeyCodes_1.KeyCodes.escape:
	                if (isActive) {
	                    this._dismissPeoplePicker();
	                }
	                break;
	            // Backspace behavior:
	            // - closes the people picker if it is open
	            // - sets focus to the last selected persona if people picker is closed
	            // - removes the focused persona
	            case KeyCodes_1.KeyCodes.backspace:
	                // allow normal event handling when there is text entered
	                if (this.refs.searchField.value.length !== 0) {
	                    return; // continue propagation
	                }
	                if (isActive) {
	                    this._dismissPeoplePicker();
	                }
	                else if (selectedPersonas.length > 0 && type !== PeoplePicker_Props_1.PeoplePickerType.memberList) {
	                    var index = selectedPersonas.length - 1;
	                    this.refs['persona' + index].focus();
	                }
	                break;
	            // Up behavior:
	            // - Moves the focus through the people picker dropdown if it is open
	            // - Blurs out of the search field so that the Focus Zone sets focus on a selected personas
	            case KeyCodes_1.KeyCodes.up:
	                if (isActive && highlightedSearchResultIndex !== INVALID_INDEX) {
	                    this._setSelectedSearchResultIndex(highlightedSearchResultIndex - 1);
	                }
	                else {
	                    return; // continue propagation
	                }
	                break;
	            // Down behavior:
	            // - Activates the people picker if it is not open
	            // - Moves the focus through the people picker dropdown if it is open
	            case KeyCodes_1.KeyCodes.down:
	                if (isActive) {
	                    this._setSelectedSearchResultIndex(highlightedSearchResultIndex + 1);
	                }
	                else {
	                    this._activatePeoplePicker();
	                    this._setSelectedSearchResultIndex(0);
	                }
	                break;
	            // Left behavior:
	            // - Default cursor behavior if there is any text entered
	            // - Blurs out of the search field so that the Focus Zone sets focus on a selected personas
	            case KeyCodes_1.KeyCodes.left:
	                if (this.refs.searchField.value.length !== 0) {
	                    ev.stopPropagation();
	                }
	                return; // continue propagation
	            // Tab behavior:
	            // - Adds the highlighted persona from the search results (autocomplete)
	            // - Shift-tab out of the FocusZone
	            case KeyCodes_1.KeyCodes.tab:
	                // allow default behavior for shift tab
	                if (ev.shiftKey) {
	                    return;
	                }
	                if (isActive && highlightedSearchResultIndex !== INVALID_INDEX) {
	                    this._addPersonaToSelectedList(this._highlightedSearchResult);
	                }
	                else {
	                    return; // continue propagation
	                }
	                break;
	            // Semicolon and comma behavior:
	            // - creates a new persona from the user's input (not from the search results)
	            case KeyCodes_1.KeyCodes.semicolon:
	            case KeyCodes_1.KeyCodes.comma:
	                this._addManualPersonaToSelectedList();
	                break;
	            // Default keyboard behavior
	            // - If any key is pressed on the search field input, activate the people picker
	            // and set the first search result as selected.
	            default:
	                if (!isActive) {
	                    this._activatePeoplePicker();
	                }
	                return; // continue propagation
	        }
	        // Only stop propagation if the event was handles and we didn't return
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    /**
	     * Sets which persona in the search results is currently selected/highlighted.
	     */
	    PeoplePicker.prototype._setSelectedSearchResultIndex = function (index) {
	        var highlightedSearchResultIndex = this.state.highlightedSearchResultIndex;
	        var suggestions = this.props.suggestions;
	        if (suggestions.length > 0) {
	            // Cap index to stay in bounds of available search results
	            index = Math.max(0, Math.min(suggestions.length - 1, index));
	        }
	        else {
	            index = INVALID_INDEX;
	        }
	        if (index !== highlightedSearchResultIndex) {
	            // Set the selected option.
	            this.setState({
	                highlightedSearchResultIndex: index
	            });
	        }
	    };
	    /**
	     * Handles changes in the input text box value, so we can notify the host
	     * of the search value change.
	     */
	    PeoplePicker.prototype._onSearchFieldTextChanged = function () {
	        var onSearchFieldChanged = this.props.onSearchFieldChanged;
	        var textValue = this.refs.searchField.value;
	        this.setState({
	            searchTextValue: textValue
	        });
	        if (typeof onSearchFieldChanged !== 'undefined') {
	            onSearchFieldChanged(textValue);
	        }
	    };
	    /**
	     * Handles keeping the currently selected persona in view.
	     * If there's no search result selected, then reset the scroll to 0.
	     */
	    PeoplePicker.prototype._setScollPosition = function () {
	        var selectedSearchResult = this.refs.selectedSearchResult;
	        var newTop = 0;
	        if (selectedSearchResult) {
	            var selectedResultTop = selectedSearchResult.offsetTop;
	            var menuItemHeight = selectedSearchResult.clientHeight;
	            var currentTop = this.refs.pickerResultGroups.scrollTop;
	            var totalHeight = this.refs.pickerResultGroups.clientHeight;
	            newTop = currentTop;
	            // check to scroll down
	            var amountCutOffDown = (currentTop + totalHeight) - (selectedResultTop + menuItemHeight);
	            if (amountCutOffDown < 0) {
	                newTop = currentTop - amountCutOffDown;
	            }
	            // check to scroll up
	            var amountCutOffUp = selectedResultTop - menuItemHeight;
	            if (amountCutOffUp < currentTop) {
	                newTop = amountCutOffUp;
	            }
	        }
	        // set the new scroll
	        this.refs.pickerResultGroups.scrollTop = newTop;
	    };
	    /**
	     * Removes one of the selected personas
	     */
	    PeoplePicker.prototype._removeSelectedPersona = function (index) {
	        var selectedPersonas = this.state.selectedPersonas;
	        var onItemRemoved = this.props.onItemRemoved;
	        if (onItemRemoved) {
	            onItemRemoved(selectedPersonas[index]);
	        }
	        selectedPersonas.splice(index, 1);
	        this.setState({
	            selectedPersonas: selectedPersonas
	        });
	    };
	    /**
	     * Renders a list of personas using the list of selected personas, for the Member List variant.
	     */
	    PeoplePicker.prototype._renderSelectedPersonasAsMemberList = function () {
	        var _this = this;
	        var selectedPersonas = this.state.selectedPersonas;
	        var addedMemberCountFormatText = this.props.addedMemberCountFormatText;
	        var count = selectedPersonas.length;
	        var className = css_1.css('ms-PeoplePicker-selected', {
	            'is-active': count > 0
	        });
	        var id = 0;
	        return React.createElement("div", {className: className}, addedMemberCountFormatText ?
	            React.createElement("div", {className: 'ms-PeoplePicker-selectedHeader'}, React.createElement("span", {className: 'ms-PeoplePicker-selectedCount'}, string_1.format(addedMemberCountFormatText, count))) : React.createElement("div", {className: 'ms-PeoplePicker-memberListTopMargin'}), React.createElement("ul", {className: 'ms-PeoplePicker-selectedPeople'}, React.createElement(FocusZone_1.FocusZone, null, selectedPersonas.map(function (child) {
	            return (React.createElement("li", {className: 'ms-PeoplePicker-selectedPerson', key: id++}, React.createElement(Persona_1.Persona, React.__spread({}, child, {size: Persona_1.PersonaSize.small, presence: child.presence ? child.presence : Persona_1.PersonaPresence.online})), React.createElement("button", {className: 'ms-PeoplePicker-resultAction', onClick: function () {
	                _this._removeSelectedPersona(selectedPersonas.indexOf(child));
	            }}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'}))));
	        }))));
	    };
	    /**
	     * Renders a list of personas using the list of selected personas. Uses the default layout
	     * of displaying the personas in the search box.
	     */
	    PeoplePicker.prototype._renderSelectedPersonas = function () {
	        var _this = this;
	        var id = 0;
	        var selectedPersonas = this.state.selectedPersonas;
	        return selectedPersonas.map(function (child) {
	            var key = id++;
	            return (React.createElement("div", {className: 'ms-PeoplePicker-persona', ref: 'persona' + key, key: key, "data-selection-index": key, "data-is-focusable": true, tabIndex: -1}, React.createElement("div", {className: 'ms-PeoplePicker-personaContent'}, React.createElement(Persona_1.Persona, React.__spread({}, child, {size: Persona_1.PersonaSize.extraSmall, presence: child.presence ? child.presence : Persona_1.PersonaPresence.online})), React.createElement("button", {className: 'ms-PeoplePicker-personaRemove', tabIndex: -1, "data-is-focusable": false, onClick: function () {
	                _this._removeSelectedPersona(selectedPersonas.indexOf(child));
	            }}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'})))));
	        });
	    };
	    /**
	     * Renders the search field, which is the input element inside the searchbox.
	     */
	    PeoplePicker.prototype._renderSearchField = function () {
	        var _this = this;
	        return (React.createElement("input", {className: 'ms-PeoplePicker-searchField', type: 'text', ref: 'searchField', key: 'searchField', "data-is-focusable": true, onFocus: function () { _this._focusedPersonaIndex = INVALID_INDEX; }, onChange: this._onSearchFieldTextChanged, onKeyDown: this._onSearchFieldKeyDown}));
	    };
	    /**
	     * Renders the popup search results
	     */
	    PeoplePicker.prototype._renderSearchResults = function () {
	        var _this = this;
	        var _a = this.props, suggestions = _a.suggestions, searchCategoryName = _a.searchCategoryName, noResultsText = _a.noResultsText, type = _a.type, isConnected = _a.isConnected, primarySearchText = _a.primarySearchText, secondarySearchText = _a.secondarySearchText, disconnectedText = _a.disconnectedText, canSearchMore = _a.canSearchMore;
	        var isSearching = this.state.isSearching;
	        // Generate a result group section for each item in the array of suggestions
	        var resultItemId = 0;
	        var resultGroupId = 0;
	        var searchResultItems = [];
	        suggestions.forEach(function (persona) {
	            searchResultItems.push(_this._renderSearchResultItem(persona, resultItemId++));
	        });
	        var searchResults = (React.createElement("div", {className: 'ms-PeoplePicker-resultGroup', key: resultGroupId++}, React.createElement("div", {className: 'ms-PeoplePicker-resultGroupTitle'}, suggestions.length > 0 ? searchCategoryName : noResultsText), React.createElement("ul", {className: 'ms-PeoplePicker-resultList'}, searchResultItems)));
	        var searchMoreClassName = css_1.css('ms-PeoplePicker-searchMore', {
	            'is-searching': isSearching,
	            'ms-PeoplePicker-searchMore--disconnected': !isConnected
	        });
	        var searchMoreButtonClassName = css_1.css('ms-PeoplePicker-searchMoreBtn', {
	            'ms-PeoplePicker-searchMoreBtn--compact': type === PeoplePicker_Props_1.PeoplePickerType.compact
	        });
	        var searchIconClassName = css_1.css('ms-Icon', {
	            'ms-Icon--search': isConnected,
	            'ms-Icon--alert': !isConnected
	        });
	        var searchMore = canSearchMore ? (React.createElement("div", {className: searchMoreClassName, onClick: isConnected ? this._searchForMoreResults : null}, React.createElement("button", {className: searchMoreButtonClassName}, isSearching ? React.createElement(Spinner_1.Spinner, {type: Spinner_1.SpinnerType.large}) :
	            React.createElement("div", {className: 'ms-PeoplePicker-searchMoreIcon'}, React.createElement("i", {className: searchIconClassName})), isConnected ? React.createElement("div", {className: 'ms-PeoplePicker-searchMoreSecondary'}, secondarySearchText) : null, React.createElement("div", {className: 'ms-PeoplePicker-searchMorePrimary'}, isSearching ? 'Searching for ' + this.refs.searchField.value : isConnected ? primarySearchText : disconnectedText)))) : undefined;
	        return (React.createElement("div", {className: 'ms-PeoplePicker-results', key: 'pickerResults', ref: function (pickerResults) { return _this.refs.pickerResults = pickerResults; }}, React.createElement("div", {className: 'ms-PeoplePicker-resultGroups', ref: 'pickerResultGroups'}, searchResults), searchMore));
	    };
	    /**
	     * Renders the popup search results, for the Member List variant.
	     */
	    PeoplePicker.prototype._renderSearchResultsForMemberList = function () {
	        var _this = this;
	        var suggestions = this.props.suggestions;
	        // MemberList variant doesn't show groups
	        var resultItemId = 0;
	        var searchResultItems = [];
	        suggestions.forEach(function (persona) {
	            searchResultItems.push(_this._renderSearchResultItem(persona, resultItemId++));
	        });
	        var searchResults = (React.createElement("div", {className: 'ms-PeoplePicker-resultGroup'}, React.createElement("ul", {className: 'ms-PeoplePicker-resultList'}, searchResultItems)));
	        return (React.createElement("div", {className: 'ms-PeoplePicker-results', key: 'pickerResults', ref: 'pickerResults'}, React.createElement("div", {className: 'ms-PeoplePicker-resultGroups', ref: 'pickerResultGroups'}, searchResults)));
	    };
	    /**
	     * Renders a single persona as part of a list to be displayed in the search results.
	     */
	    PeoplePicker.prototype._renderSearchResultItem = function (personaInfo, id) {
	        var _this = this;
	        var type = this.props.type;
	        var isSelected = id === this.state.highlightedSearchResultIndex;
	        var buttonClassName = css_1.css('ms-PeoplePicker-resultBtn', {
	            'ms-PeoplePicker-resultBtn--compact': type === PeoplePicker_Props_1.PeoplePickerType.compact,
	            'ms-PeoplePicker-resultBtn--selected': isSelected
	        });
	        if (isSelected) {
	            this._highlightedSearchResult = personaInfo;
	        }
	        var personaSize = type === PeoplePicker_Props_1.PeoplePickerType.compact ? Persona_1.PersonaSize.extraSmall : Persona_1.PersonaSize.regular;
	        return (React.createElement("li", {className: 'ms-PeoplePicker-result', key: id, ref: isSelected ? 'selectedSearchResult' : null}, React.createElement("div", {role: 'button', className: buttonClassName}, React.createElement(Persona_1.Persona, React.__spread({}, personaInfo, {presence: personaInfo.presence ? personaInfo.presence : Persona_1.PersonaPresence.online, size: personaSize, onMouseDown: function () { _this._addPersonaToSelectedList(personaInfo); }, onClick: function () { _this._addPersonaToSelectedList(personaInfo); }})), type !== PeoplePicker_Props_1.PeoplePickerType.memberList ?
	            React.createElement("button", {className: 'ms-PeoplePicker-resultAction', tabIndex: -1, onClick: function () { _this._removeSuggestedPersona(id, personaInfo); }}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'}))
	            : null)));
	    };
	    PeoplePicker.defaultProps = {
	        type: PeoplePicker_Props_1.PeoplePickerType.normal,
	        isConnected: true,
	        canSearchMore: true
	    };
	    return PeoplePicker;
	}(React.Component));
	exports.PeoplePicker = PeoplePicker;
	
	//# sourceMappingURL=PeoplePicker.js.map


/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";
	(function (PeoplePickerType) {
	    /**
	     * Standard People Picker.
	     */
	    PeoplePickerType[PeoplePickerType["normal"] = 0] = "normal";
	    /**
	     * Compact layout. It uses small personas when displaying search results.
	     */
	    PeoplePickerType[PeoplePickerType["compact"] = 1] = "compact";
	    /**
	     * MemberList layout. The selected people show up below the search box.
	     */
	    PeoplePickerType[PeoplePickerType["memberList"] = 2] = "memberList";
	})(exports.PeoplePickerType || (exports.PeoplePickerType = {}));
	var PeoplePickerType = exports.PeoplePickerType;
	
	//# sourceMappingURL=PeoplePicker.Props.js.map


/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";
	// Regex that finds { and } so they can be removed on a lookup for string format
	var FORMAT_ARGS_REGEX = /[\{\}]/g;
	// Regex that finds {#} so it can be replaced by the arguments in string format
	var FORMAT_REGEX = /\{\d+\}/g;
	/**
	 * String Format is like C# string format.
	 * Usage Example: "hello {0}!".format("mike") will return "hello mike!"
	 * Calling format on a string with less arguments than specified in the format is invalid
	 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
	 */
	function format(s) {
	    'use strict';
	    var values = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        values[_i - 1] = arguments[_i];
	    }
	    var args = values;
	    // Callback match function
	    function replace_func(match) {
	        // looks up in the args
	        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
	        if (replacement) {
	            replacement = '';
	        }
	        return replacement;
	    }
	    return (s.replace(FORMAT_REGEX, replace_func));
	}
	exports.format = format;
	
	//# sourceMappingURL=string.js.map


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-PeoplePicker-result .ms-Persona:hover .ms-Persona-primaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-primaryText{color:"[theme:neutralDark, default: #212121]"}.ms-PeoplePicker-result .ms-Persona:hover .ms-Persona-optionalText,.ms-PeoplePicker-result .ms-Persona:hover .ms-Persona-secondaryText,.ms-PeoplePicker-result .ms-Persona:hover .ms-Persona-tertiaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-optionalText,.ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText{color:"[theme:neutralPrimary, default: #333333]"}.ms-PeoplePicker{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;background-color:"[theme:white, default: #ffffff]";margin-bottom:10px}.ms-PeoplePicker-searchBox{border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";box-sizing:border-box;min-height:40px;width:100%}.ms-PeoplePicker-searchBox:after,.ms-PeoplePicker-searchBox:before{display:table;content:"";line-height:0}.ms-PeoplePicker-searchBox:after{clear:both}.ms-PeoplePicker-searchBox:hover{border-color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-PeoplePicker.is-active .ms-PeoplePicker-searchBox{border-color:"[theme:themePrimary, default: #0078d7]"}.ms-PeoplePicker-searchField{border:0;box-sizing:border-box;display:inline-block;float:left;height:38px;outline:0;padding-left:8px;width:100%}.ms-PeoplePicker-persona{display:inline-block;float:left;margin:4px;outline:1px solid transparent}.ms-PeoplePicker-persona .ms-Persona{background-color:"[theme:neutralLighter, default: #f4f4f4]";float:left;min-height:30px}.ms-PeoplePicker-persona.has-error .ms-Persona-primaryText{color:"[theme:error, default: #a80000]"}.ms-PeoplePicker-personaRemove{background:0 0;border:0;cursor:pointer;background-color:"[theme:neutralLighter, default: #f4f4f4]";color:"[theme:neutralSecondary, default: #666666]";display:inline-block;float:left;text-align:center;height:32px;width:32px}.ms-PeoplePicker-personaRemove:hover{background-color:"[theme:neutralLight, default: #eaeaea]";color:"[theme:neutralPrimary, default: #333333]";cursor:pointer}.ms-PeoplePicker-personaRemove:focus{background-color:"[theme:neutralLight, default: #eaeaea]";color:"[theme:neutralPrimary, default: #333333]";border:1px solid "[theme:themePrimary, default: #0078d7]";outline:0}.ms-PeoplePicker-results{box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:"[theme:white, default: #ffffff]";border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]";display:none;margin-bottom:-1px;max-width:340px;padding-top:9px;position:absolute;z-index:305}.ms-PeoplePicker.is-active .ms-PeoplePicker-results{display:block;opacity:1}.ms-PeoplePicker-resultGroups{max-height:309px;overflow-y:scroll}.ms-PeoplePicker-resultGroup{border-top:1px solid "[theme:neutralLight, default: #eaeaea]"}.ms-PeoplePicker-resultGroup:first-child{border-top:0}.ms-PeoplePicker-resultGroupTitle{color:"[theme:themePrimary, default: #0078d7]";font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:12px;padding:17px 0 0 12px;text-transform:uppercase;height:40px}.ms-PeoplePicker-resultList{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:-1px;list-style-type:none}.ms-PeoplePicker-result{position:relative}.ms-PeoplePicker-result .ms-Persona:hover{cursor:pointer}.ms-PeoplePicker-result .ms-Persona:active{background-color:"[theme:themeLight, default: #c7e0f4]"}.ms-PeoplePicker-result .ms-Persona-details{width:100%}.ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker-resultBtn{background:0 0;border:0;cursor:pointer;position:relative;box-sizing:border-box;height:34px;width:100%;background:0 0;border:0;text-align:left;margin:0 0 10px 0;padding:0 0 0 9px}@media (min-width:480px){.ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker-resultBtn{height:48px}}.ms-PeoplePicker-peopleListBtn:hover,.ms-PeoplePicker-resultBtn:hover{background-color:"[theme:neutralLight, default: #eaeaea]";outline:1px solid transparent}.ms-PeoplePicker-peopleListBtn:focus,.ms-PeoplePicker-resultBtn:focus{outline:1}.ms-PeoplePicker-peopleListBtn.ms-PeoplePicker-resultBtn--compact,.ms-PeoplePicker-resultBtn.ms-PeoplePicker-resultBtn--compact{height:32px}.ms-PeoplePicker-peopleListBtn{margin-bottom:0;padding:0}.ms-PeoplePicker-peopleListBtn:hover{background-color:transparent}.ms-PeoplePicker-resultAction{background:0 0;border:0;cursor:pointer;display:block;height:34px;-webkit-transition:background-color 367ms cubic-bezier(.1,.9,.2,1);transition:background-color 367ms cubic-bezier(.1,.9,.2,1);position:absolute;right:0;top:0;width:30px;text-align:center}@media (min-width:480px){.ms-PeoplePicker-resultAction{height:48px}}.ms-PeoplePicker-resultAction .ms-Icon{color:"[theme:neutralSecondary, default: #666666]";font-size:15px}.ms-PeoplePicker-resultAction:hover{background-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]";outline:1px solid transparent}.ms-PeoplePicker-resultAction:active{background-color:"[theme:themeTertiary, default: #71afe5]"}.ms-PeoplePicker-resultAdditionalContent{display:none}.ms-PeoplePicker-result.is-expanded{background-color:"[theme:neutralLighter, default: #f4f4f4]";margin-bottom:11px}.ms-PeoplePicker-result.is-expanded .ms-PeoplePicker-resultAction .ms-Icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.ms-PeoplePicker-result.is-expanded .ms-PeoplePicker-resultAdditionalContent{display:block}.ms-PeoplePicker-searchMore{border-top:1px solid "[theme:neutralLight, default: #eaeaea]";height:69px;position:relative;overflow:hidden}.ms-PeoplePicker-searchMore .ms-Spinner{position:absolute;width:32px;height:32px;top:20px;left:20px;display:none}.ms-PeoplePicker-searchMore .ms-Spinner .ms-Spinner-circle{background-color:"[theme:themePrimary, default: #0078d7]"}.ms-PeoplePicker-searchMore.is-searching .ms-Spinner{display:block}.ms-PeoplePicker-searchMore.is-searching .ms-PeoplePicker-searchMoreIcon .ms-Icon{display:none}.ms-PeoplePicker-searchMore.is-searching .ms-PeoplePicker-searchMorePrimary{color:"[theme:themePrimary, default: #0078d7]"}.ms-PeoplePicker-searchMore.is-searching:hover{background-color:transparent;cursor:default}.ms-PeoplePicker-searchMoreBtn{background:0 0;border:0;cursor:pointer;position:relative;height:69px;width:100%;padding:0;margin:0;padding-left:70px;text-align:left}.ms-PeoplePicker-searchMoreBtn:hover{background-color:"[theme:neutralLight, default: #eaeaea]";cursor:pointer}.ms-PeoplePicker-searchMoreBtn:active,.ms-PeoplePicker-searchMoreBtn:focus{background-color:"[theme:themeLight, default: #c7e0f4]"}.ms-PeoplePicker-searchMoreBtn.ms-PeoplePicker-searchMoreBtn--compact{height:49px;padding-left:50px}.ms-PeoplePicker-searchMoreIcon{height:70px;position:absolute;top:0;left:0;width:70px}.ms-PeoplePicker-searchMoreIcon .ms-Icon{color:"[theme:neutralPrimary, default: #333333]";font-size:16px;position:absolute;text-align:center;top:27px;width:100%}.ms-PeoplePicker-searchMorePrimary{padding-top:2px;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif}.ms-PeoplePicker-searchMoreSecondary{font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:11px;color:"[theme:neutralSecondary, default: #666666]"}.ms-PeoplePicker-searchMore.ms-PeoplePicker-searchMore--disconnected:hover{background-color:inherit;cursor:default}.ms-PeoplePicker-searchMore.ms-PeoplePicker-searchMore--disconnected .ms-PeoplePicker-searchMoreIcon .ms-Icon{color:"[theme:neutralSecondary, default: #666666]"}.ms-PeoplePicker-searchMore.ms-PeoplePicker-searchMore--disconnected .ms-PeoplePicker-searchMorePrimary{color:"[theme:neutralSecondary, default: #666666]";font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:11px;line-height:20px;position:relative;top:12px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-resultGroups{max-height:209px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-resultAction{height:32px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-resultAction .ms-Icon{margin-top:-8px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMore{height:49px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMore .ms-Spinner{width:28px;height:28px;top:12px;left:12px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMore.is-searching .ms-PeoplePicker-searchMoreIcon{background-size:16px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMoreIcon{height:50px;width:50px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMoreIcon .ms-Icon{font-size:17px;top:0;margin-top:0;line-height:50px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMorePrimary{font-size:12px;line-height:45px}.ms-PeoplePicker.ms-PeoplePicker--compact .ms-PeoplePicker-searchMoreSecondary{display:none}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchBox,.ms-PeoplePicker.ms-PeoplePicker--membersList .ms-PeoplePicker-searchBox{height:30px;min-height:30px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchField,.ms-PeoplePicker.ms-PeoplePicker--membersList .ms-PeoplePicker-searchField{height:28px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-Persona,.ms-PeoplePicker.ms-PeoplePicker--membersList .ms-Persona{cursor:pointer}.ms-PeoplePicker-selected{margin-bottom:20px;display:none}.ms-PeoplePicker-selected.is-active{display:block}.ms-PeoplePicker.ms-PeoplePicker--Facepile.is-searching .ms-PeoplePicker-results{border-bottom:0;padding:20px 0 0}.ms-PeoplePicker.ms-PeoplePicker--Facepile.is-searching .ms-PeoplePicker-peopleListHeader{display:none}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results{position:relative;border:0;box-shadow:none;margin:0;max-width:100%;padding:0;padding-bottom:10px;border-bottom:1px solid "[theme:neutralLight, default: #eaeaea]"}@media (max-width:479px){.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-image,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-imageArea,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-image,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-imageArea{width:32px;height:32px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-placeholder,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-placeholder{font-size:28px;top:6px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-initials,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-initials{font-size:12px;line-height:32px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-presence,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-presence{left:19px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-details,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-details{padding-left:8px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-primaryText,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona-secondaryText,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona-secondaryText{display:none}}@media (min-width:480px){.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-results .ms-Persona .ms-Persona-secondaryText,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-selectedPeople .ms-Persona .ms-Persona-secondaryText{display:block}}@media (min-width:480px){.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-resultBtn{height:42px}}@media (min-width:480px){.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-resultAction{height:42px}}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-Persona.ms-Persona--selectable{padding:0}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMore{display:none}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMore.is-active{display:block}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMore,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMoreBtn,.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMoreIcon{height:48px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMoreBtn{padding-left:48px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMoreIcon{width:48px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMorePrimary{font-size:12px;line-height:48px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PeoplePicker-searchMoreIcon .ms-Icon{top:0;line-height:48px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-Spinner{top:16px;left:14px;height:20px;width:20px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PersonaCard{display:none;position:absolute;height:200px}.ms-PeoplePicker.ms-PeoplePicker--Facepile .ms-PersonaCard.is-active{display:block}.ms-PeoplePicker-peopleListHeader,.ms-PeoplePicker-selectedHeader{color:"[theme:themePrimary, default: #0078d7]";font-size:12px;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;height:50px;line-height:50px}.ms-PeoplePicker-peopleList,.ms-PeoplePicker-selectedPeople{box-sizing:border-box;margin:0;padding:0;box-shadow:none;list-style:none}.ms-PeoplePicker-selectedPerson{margin-bottom:8px;position:relative}.ms-PeoplePicker-peopleListItem{margin-bottom:6px;position:relative}.ms-PeoplePicker-searchBox{min-height:42px}.ms-PeoplePicker-searchBox>.ms-FocusZone{-ms-flex-flow:row wrap;flex-flow:row wrap;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.ms-PeoplePicker-searchField{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:200px}.ms-PeoplePicker-results{min-width:340px}.ms-PeoplePicker-memberListTopMargin{margin-top:8px}.ms-PeoplePicker-resultGroups{min-height:57px;overflow-y:auto}.ms-PeoplePicker-persona{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:4px}.ms-PeoplePicker-persona:focus .ms-PeoplePicker-personaContent{outline:2px solid "[theme:themePrimary, default: #0078d7]"}.ms-PeoplePicker-searchMore.ms-PeoplePicker-searchMore--disconnected .ms-PeoplePicker-searchMorePrimary{top:0}.ms-PeoplePicker-resultBtn--selected{background-color:"[theme:themeLighter, default: #deecf9]";outline:1px solid transparent}');
	
	//# sourceMappingURL=PeoplePicker.scss.js.map


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(210));
	
	//# sourceMappingURL=PersonaCard.js.map


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(211));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PersonaCard = (function (_super) {
	    __extends(PersonaCard, _super);
	    function PersonaCard() {
	        _super.apply(this, arguments);
	    }
	    PersonaCard.prototype.render = function () {
	        var rootClass = 'ms-PersonaCard';
	        return (React.createElement("div", {className: rootClass}));
	    };
	    return PersonaCard;
	}(React.Component));
	exports.PersonaCard = PersonaCard;
	
	//# sourceMappingURL=PersonaCard.js.map


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(213));
	
	//# sourceMappingURL=Pivot.js.map


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(214));
	var PivotItem_1 = __webpack_require__(215);
	exports.PivotItem = PivotItem_1.PivotItem;
	__export(__webpack_require__(216));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(10);
	var KeyCodes_1 = __webpack_require__(15);
	var PivotItem_1 = __webpack_require__(215);
	var Pivot_Props_1 = __webpack_require__(216);
	var Pivot_Props_2 = __webpack_require__(216);
	__webpack_require__(217);
	var css_1 = __webpack_require__(17);
	var _instance = 0;
	var Pivot = (function (_super) {
	    __extends(Pivot, _super);
	    function Pivot(props) {
	        _super.call(this, props);
	        var links = this._getPivotLinks(this.props);
	        var selectedKey;
	        if (props.initialSelectedKey) {
	            selectedKey = props.initialSelectedKey;
	        }
	        else if (props.initialSelectedIndex) {
	            selectedKey = links[props.initialSelectedIndex].itemKey;
	        }
	        else {
	            selectedKey = links[0].itemKey;
	        }
	        this.state = {
	            links: links,
	            selectedKey: selectedKey,
	            id: "Pivot-" + _instance++
	        };
	        this._renderLink = this._renderLink.bind(this);
	    }
	    Pivot.prototype.componentWillReceiveProps = function (nextProps) {
	        var links = this._getPivotLinks(nextProps);
	        var selectedKey = this._isKeyValid(this.state.selectedKey)
	            ? this.state.selectedKey
	            : links[0].itemKey;
	        this.setState({
	            links: links,
	            selectedKey: selectedKey
	        });
	    };
	    Pivot.prototype.render = function () {
	        return (React.createElement("div", null, this._renderPivotLinks(), this._renderPivotItem()));
	    };
	    /**
	     * Renders the set of links to route between pivots
	     */
	    Pivot.prototype._renderPivotLinks = function () {
	        return (React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, React.createElement("ul", {className: css_1.css('ms-Pivot', { 'ms-Pivot--large': this.props.linkSize === Pivot_Props_2.PivotLinkSize.large }, { 'ms-Pivot--tabs': this.props.linkFormat === Pivot_Props_1.PivotLinkFormat.tabs }), role: 'tablist'}, this.state.links.map(this._renderLink))));
	    };
	    /**
	     * Renders a pivot link
	     */
	    Pivot.prototype._renderLink = function (link) {
	        var itemKey = link.itemKey;
	        var id = this.state.id;
	        return (React.createElement("a", {id: id + '-tab', key: itemKey, className: css_1.css('ms-Pivot-link', { 'is-selected': this.state.selectedKey === itemKey }), onClick: this._onLinkClick.bind(this, itemKey), onKeyPress: this._onKeyPress.bind(this, itemKey), "aria-label": link.ariaLabel, role: 'tab', "aria-controls": id + '-panel', "aria-selected": this.state.selectedKey === itemKey}, link.linkText));
	    };
	    /**
	     * Renders the current Pivot Item
	     */
	    Pivot.prototype._renderPivotItem = function () {
	        var itemKey = this.state.selectedKey;
	        var index = this._keyToIndexMapping[itemKey];
	        var id = this.state.id;
	        return (React.createElement("div", {className: 'pivotItem', role: 'tabpanel', id: id + '-panel', "aria-labelledby": id + '-tab'}, React.Children.toArray(this.props.children)[index]));
	    };
	    /**
	     * Gets the set of PivotLinks as arrary of IPivotItemProps
	     * The set of Links is determined by child components of type PivotItem
	     */
	    Pivot.prototype._getPivotLinks = function (props) {
	        var _this = this;
	        var links = [];
	        this._keyToIndexMapping = {};
	        React.Children.map(props.children, function (child, index) {
	            if (typeof child === 'object' && child.type === PivotItem_1.PivotItem) {
	                var pivotItem = child;
	                var itemKey = pivotItem.props.itemKey || index.toString();
	                links.push({
	                    linkText: pivotItem.props.linkText,
	                    ariaLabel: pivotItem.props.ariaLabel,
	                    itemKey: itemKey
	                });
	                _this._keyToIndexMapping[itemKey] = index;
	            }
	        });
	        return links;
	    };
	    /**
	     * whether the key exists in the pivot items.
	     */
	    Pivot.prototype._isKeyValid = function (itemKey) {
	        return itemKey !== undefined && this._keyToIndexMapping[itemKey] !== undefined;
	    };
	    /**
	     * Handles the onClick event on PivotLinks
	     */
	    Pivot.prototype._onLinkClick = function (itemKey, ev) {
	        ev.preventDefault();
	        this._updateSelectedItem(itemKey, ev);
	    };
	    /**
	     * Handle the onKeyPress eventon the PivotLinks
	     */
	    Pivot.prototype._onKeyPress = function (itemKey, ev) {
	        ev.preventDefault();
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            this._updateSelectedItem(itemKey);
	        }
	    };
	    /**
	     * Updates the state with the new selected index
	     */
	    Pivot.prototype._updateSelectedItem = function (itemKey, ev) {
	        this.setState({
	            selectedKey: itemKey
	        });
	        if (this.props.onLinkClick && this._keyToIndexMapping[itemKey] >= 0) {
	            var index = this._keyToIndexMapping[itemKey];
	            // React.Element<any> cannot directly convert to PivotItem.
	            var item = React.Children.toArray(this.props.children)[index];
	            if (typeof item === 'object' && item.type === PivotItem_1.PivotItem) {
	                this.props.onLinkClick(item, ev);
	            }
	        }
	    };
	    return Pivot;
	}(React.Component));
	exports.Pivot = Pivot;
	
	//# sourceMappingURL=Pivot.js.map


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PivotItem = (function (_super) {
	    __extends(PivotItem, _super);
	    function PivotItem() {
	        _super.apply(this, arguments);
	    }
	    PivotItem.prototype.render = function () {
	        return (React.createElement("div", null, this.props.children));
	    };
	    return PivotItem;
	}(React.Component));
	exports.PivotItem = PivotItem;
	
	//# sourceMappingURL=PivotItem.js.map


/***/ },
/* 216 */
/***/ function(module, exports) {

	"use strict";
	(function (PivotLinkFormat) {
	    /**
	     * Display Pivot Links as links
	     */
	    PivotLinkFormat[PivotLinkFormat["links"] = 0] = "links";
	    /**
	     * Display Pivot Links as Tabs
	     */
	    PivotLinkFormat[PivotLinkFormat["tabs"] = 1] = "tabs";
	})(exports.PivotLinkFormat || (exports.PivotLinkFormat = {}));
	var PivotLinkFormat = exports.PivotLinkFormat;
	(function (PivotLinkSize) {
	    /**
	     * Display Link using normal font size
	     */
	    PivotLinkSize[PivotLinkSize["normal"] = 0] = "normal";
	    /**
	     * Display links using large font size
	     */
	    PivotLinkSize[PivotLinkSize["large"] = 1] = "large";
	})(exports.PivotLinkSize || (exports.PivotLinkSize = {}));
	var PivotLinkSize = exports.PivotLinkSize;
	
	//# sourceMappingURL=Pivot.Props.js.map


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Pivot{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;height:40px;list-style-type:none;overflow-x:hidden;white-space:nowrap}.ms-Pivot-link{color:"[theme:neutralPrimary, default: #333333]";display:inline-block;position:relative;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:15px;line-height:40px;margin-right:8px}.ms-Pivot-link:after{content:\'\';width:100%;position:absolute;display:none;bottom:0;left:0;height:2px;background-color:"[theme:themePrimary, default: #0078d7]"}@media screen and (-ms-high-contrast:active){.ms-Pivot-link:after{background-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Pivot-link:after{background-color:#37006E}}.ms-Pivot-link:active,.ms-Pivot-link:focus,.ms-Pivot-link:hover{color:"[theme:black, default: #000000]";cursor:pointer}.ms-Pivot-link:active+.ms-Pivot-dropdownIcon,.ms-Pivot-link:focus+.ms-Pivot-dropdownIcon,.ms-Pivot-link:hover+.ms-Pivot-dropdownIcon{color:"[theme:neutralDark, default: #212121]"}.ms-Pivot-link:active{font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif}@media screen and (-ms-high-contrast:active){.ms-Pivot-link:active{color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Pivot-link:active{color:#37006E}}.ms-Pivot-link:active:after{display:block}.ms-Pivot-link.is-selected{color:"[theme:black, default: #000000]";font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif}@media screen and (-ms-high-contrast:active){.ms-Pivot-link.is-selected{color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Pivot-link.is-selected{color:#37006E}}.ms-Pivot-link.is-selected:after{display:block}.ms-Pivot-link.is-selected+.ms-Pivot-dropdownIcon{color:"[theme:neutralDark, default: #212121]"}.ms-Pivot-dropdownIcon{font-size:16px;position:relative;top:2px}.ms-Pivot-link.ms-Pivot-link--overflow{color:"[theme:neutralSecondary, default: #666666]"}.ms-Pivot-link.ms-Pivot-link--overflow.is-selected{color:"[theme:themePrimary, default: #0078d7]"}.ms-Pivot-link.ms-Pivot-link--overflow:focus:not(.is-selected),.ms-Pivot-link.ms-Pivot-link--overflow:hover:not(.is-selected){color:"[theme:neutralDark, default: #212121]"}.ms-Pivot-link.ms-Pivot-link--overflow:active:after{display:none}.ms-Pivot-ellipsis{font-size:15px;position:relative;top:0}.ms-Pivot.ms-Pivot--large .ms-Pivot-link{font-size:17px}.ms-Pivot.ms-Pivot--large .ms-Pivot-link:active{font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif}.ms-Pivot.ms-Pivot--large .ms-Pivot-link.is-selected{font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif}.ms-Pivot.ms-Pivot--large .ms-Pivot-link.ms-Pivot-link--overflow:after{font-size:17px}.ms-Pivot.ms-Pivot--tabs{height:40px}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link{height:40px;background-color:"[theme:neutralLighter, default: #f4f4f4]";line-height:40px;margin-right:-2px;padding:0 10px;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif!important}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:focus:not(.is-selected):not(.ms-Pivot-link--overflow),.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:hover:not(.is-selected):not(.ms-Pivot-link--overflow){color:"[theme:black, default: #000000]"}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active{color:"[theme:white, default: #ffffff]"!important;background-color:"[theme:themePrimary, default: #0078d7]";font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif}@media screen and (-ms-high-contrast:active){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active{background-color:#1AEBFF;color:"[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active{background-color:#37006E;color:"[theme:white, default: #ffffff]"}}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{background-color:"[theme:themePrimary, default: #0078d7]";color:"[theme:white, default: #ffffff]";font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif}@media screen and (-ms-high-contrast:active){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{background-color:#1AEBFF;color:"[theme:black, default: #000000]"}}@media screen and (-ms-high-contrast:black-on-white){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{background-color:#37006E;color:"[theme:white, default: #ffffff]"}}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:focus:not(.is-selected),.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:hover:not(.is-selected){background-color:"[theme:white, default: #ffffff]"}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:active{background-color:"[theme:themePrimary, default: #0078d7]"!important}@media (min-width:640px){.ms-Pivot-link{font-size:14px}.ms-Pivot-link.ms-Pivot-link--overflow:after{font-size:14px}}@media screen and (-ms-high-contrast:active){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{font-family:"Segoe UI Semibold WestEuropean","Segoe UI Semibold","Segoe UI",Tahoma,Arial,sans-serif}}.ms-Pivot{position:relative;color:"[theme:themePrimary, default: #0078d7]";white-space:nowrap}');
	
	//# sourceMappingURL=Pivot.scss.js.map


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(219));
	
	//# sourceMappingURL=ProgressIndicator.js.map


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(220));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(221);
	// if the percentComplete is near 0, don't animate it.
	// This prevents animations on reset to 0 scenarios
	var ZERO_THRESHOLD = 0.01;
	var ProgressIndicator = (function (_super) {
	    __extends(ProgressIndicator, _super);
	    function ProgressIndicator() {
	        _super.apply(this, arguments);
	    }
	    ProgressIndicator.prototype.render = function () {
	        var _a = this.props, title = _a.title, description = _a.description, percentComplete = _a.percentComplete;
	        percentComplete = Math.min(100, Math.max(0, percentComplete * 100));
	        return (React.createElement("div", {className: 'ms-ProgressIndicator'}, React.createElement("div", {className: 'ms-ProgressIndicator-itemName'}, title), React.createElement("div", {className: 'ms-ProgressIndicator-itemProgress'}, React.createElement("div", {className: 'ms-ProgressIndicator-progressTrack'}), React.createElement("div", {className: css_1.css('ms-ProgressIndicator-progressBar', {
	            'smoothTransition': percentComplete > ZERO_THRESHOLD
	        }), style: { width: percentComplete + '%' }, role: 'progressbar', "aria-valuemin": '0', "aria-valuemax": '100', "aria-valuenow": percentComplete.toFixed().toString()})), React.createElement("div", {className: 'ms-ProgressIndicator-itemDescription'}, description)));
	    };
	    ProgressIndicator.defaultProps = {
	        title: '',
	        description: '',
	        percentComplete: 0
	    };
	    return ProgressIndicator;
	}(React.Component));
	exports.ProgressIndicator = ProgressIndicator;
	
	//# sourceMappingURL=ProgressIndicator.js.map


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-ProgressIndicator-itemName{color:#333;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-top:4px;line-height:20px}.ms-ProgressIndicator-itemDescription{color:#333;font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;color:#767676;font-size:11px;line-height:18px}.ms-ProgressIndicator-itemProgress{position:relative;width:180px;height:2px;padding:8px 0}.ms-ProgressIndicator-progressTrack{position:absolute;width:100%;height:2px;background-color:#eaeaea;outline:1px solid transparent}.ms-ProgressIndicator-progressBar{position:absolute;height:2px;background-color:#0078d7}@media screen and (-ms-high-contrast:active){.ms-ProgressIndicator-progressBar{background-color:#fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-ProgressIndicator-progressBar{background-color:#000}}.ms-ProgressIndicator-progressBar.smoothTransition{-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:150ms;transition-duration:150ms}');
	
	//# sourceMappingURL=ProgressIndicator.scss.js.map


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(223));
	
	//# sourceMappingURL=SearchBox.js.map


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(224));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	__webpack_require__(225);
	var _instance = 0;
	var SearchBox = (function (_super) {
	    __extends(SearchBox, _super);
	    function SearchBox(props) {
	        _super.call(this, props);
	        this.state = {
	            value: props.value,
	            hasFocus: false,
	            id: "searchbox-" + _instance++,
	        };
	        this._clearInput = this._clearInput.bind(this);
	        this._onInputChanged = this._onInputChanged.bind(this);
	        this._onInputFocus = this._onInputFocus.bind(this);
	        this._onInputBlur = this._onInputBlur.bind(this);
	    }
	    SearchBox.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.value !== undefined) {
	            this.setState({
	                value: newProps.value
	            });
	        }
	    };
	    SearchBox.prototype.render = function () {
	        var _a = this.props, labelText = _a.labelText, className = _a.className;
	        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
	        return (React.createElement("div", {className: css_1.css('ms-SearchBox', className, {
	            'is-active': hasFocus
	        })}, !hasFocus && !value ? React.createElement("label", {className: 'ms-SearchBox-label', htmlFor: id}, React.createElement("i", {className: 'ms-SearchBox-icon ms-Icon ms-Icon--search'}), labelText) : null, React.createElement("input", {id: id, className: 'ms-SearchBox-field', onFocus: this._onInputFocus, onBlur: this._onInputBlur, onChange: this._onInputChanged, value: value, ref: 'inputText'}), React.createElement("button", {className: 'ms-SearchBox-closeButton', onMouseDown: this._clearInput}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'}))));
	    };
	    SearchBox.prototype._clearInput = function (ev) {
	        this.setState({
	            value: undefined
	        });
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    SearchBox.prototype._onInputFocus = function () {
	        this.setState({
	            hasFocus: true
	        });
	    };
	    SearchBox.prototype._onInputBlur = function () {
	        this.setState({
	            hasFocus: false
	        });
	    };
	    SearchBox.prototype._onInputChanged = function (ev) {
	        this.setState({
	            value: this.refs.inputText.value
	        });
	        this._onChanged(this.refs.inputText.value);
	    };
	    SearchBox.prototype._onChanged = function (newValue) {
	        var onChanged = this.props.onChanged;
	        if (onChanged) {
	            onChanged(newValue);
	        }
	    };
	    SearchBox.defaultProps = {
	        labelText: 'Search',
	    };
	    return SearchBox;
	}(React.Component));
	exports.SearchBox = SearchBox;
	
	//# sourceMappingURL=SearchBox.js.map


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-SearchBox{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;position:relative;margin-bottom:10px;display:inline-block}.ms-SearchBox.is-disabled .ms-SearchBox-icon{color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-SearchBox.is-disabled .ms-SearchBox-field{background-color:"[theme:neutralLighter, default: #f4f4f4]";border-color:"[theme:neutralLighter, default: #f4f4f4]";pointer-events:none;cursor:default}.ms-SearchBox.is-active .ms-SearchBox-closeButton{display:block;outline:transparent 1px solid}.ms-SearchBox-field{position:relative;box-sizing:border-box;margin:0;padding:0;box-shadow:none;border:1px solid "[theme:themeTertiary, default: #71afe5]";outline:transparent 1px solid;border-radius:0;font-family:"Segoe UI Semilight WestEuropean","Segoe UI Semilight","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;color:"[theme:black, default: #000000]";height:32px;padding:6px 3px 7px 10px;width:180px;background-color:transparent;z-index:5}.ms-SearchBox-field.hovering{border-color:"[theme:themePrimary, default: #0078d7]";background-color:"[theme:themeLighter, default: #deecf9]"}.ms-SearchBox-field.hovering+.ms-SearchBox-label{color:"[theme:black, default: #000000]"}.ms-SearchBox-field.hovering+.ms-SearchBox-label .ms-Icon{color:"[theme:neutralPrimary, default: #333333]"}.ms-SearchBox-field:focus{padding:6px 32px 7px 10px;border-color:"[theme:themePrimary, default: #0078d7]";background-color:"[theme:themeLighter, default: #deecf9]"}.ms-SearchBox-field::-ms-clear{display:none}.ms-SearchBox-closeButton{border:none;cursor:pointer;position:absolute;right:0;top:0;height:32px;width:32px;background-color:"[theme:themePrimary, default: #0078d7]";text-align:center;display:none;font-size:17px;color:"[theme:white, default: #ffffff]";z-index:10}.ms-SearchBox-label{position:absolute;top:0;left:0;padding-left:8px;line-height:32px;color:"[theme:neutralSecondary, default: #666666]"}.ms-SearchBox-icon{margin-right:7px;font-size:17px;color:"[theme:neutralSecondaryAlt, default: #767676]"}.ms-SearchBox,.ms-SearchBox-field{width:100%}.ms-SearchBox-label{z-index:10}.ms-SearchBox-field:hover{border-color:"[theme:themePrimary, default: #0078d7]";background-color:"[theme:themeLighter, default: #deecf9]"}.ms-SearchBox-field:hover+.ms-SearchBox-label{color:"[theme:black, default: #000000]"}.ms-SearchBox-field:hover+.ms-SearchBox-label .ms-Icon{color:"[theme:neutralPrimary, default: #333333]"}html[dir=ltr] .ms-SearchBox-label{padding-left:8px}html[dir=rtl] .ms-SearchBox-label{padding-right:8px}html[dir=ltr] .ms-SearchBox-label{left:0}html[dir=rtl] .ms-SearchBox-label{right:0}html[dir=ltr] .ms-SearchBox-icon{margin-right:7px}html[dir=rtl] .ms-SearchBox-icon{margin-left:7px}html[dir=ltr] .ms-SearchBox-closeButton{right:0}html[dir=rtl] .ms-SearchBox-closeButton{left:0}html[dir=ltr] .ms-SearchBox-closeButton{left:auto}html[dir=rtl] .ms-SearchBox-closeButton{right:auto}');
	
	//# sourceMappingURL=SearchBox.scss.js.map


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(227));
	
	//# sourceMappingURL=Slider.js.map


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(228));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(229);
	var BaseComponent_1 = __webpack_require__(132);
	var KeyCodes_1 = __webpack_require__(15);
	var Label_1 = __webpack_require__(68);
	var css_1 = __webpack_require__(17);
	var rtl_1 = __webpack_require__(16);
	(function (ValuePosition) {
	    ValuePosition[ValuePosition["Previous"] = 0] = "Previous";
	    ValuePosition[ValuePosition["Next"] = 1] = "Next";
	})(exports.ValuePosition || (exports.ValuePosition = {}));
	var ValuePosition = exports.ValuePosition;
	var _instance = 0;
	var Slider = (function (_super) {
	    __extends(Slider, _super);
	    function Slider(props) {
	        _super.call(this, props);
	        this._onMouseDownOrTouchStart = this._onMouseDownOrTouchStart.bind(this);
	        this._onMouseMoveOrTouchMove = this._onMouseMoveOrTouchMove.bind(this);
	        this._onMouseUpOrTouchEnd = this._onMouseUpOrTouchEnd.bind(this);
	        this._onKeyDown = this._onKeyDown.bind(this);
	        this._id = "Slider-" + _instance++;
	        var value = props.value || props.defaultValue || props.min;
	        this.state = {
	            value: value,
	            renderedValue: value
	        };
	    }
	    /**
	     * Invoked when a component is receiving new props. This method is not called for the initial render.
	     */
	    Slider.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.value !== undefined) {
	            var value = Math.max(newProps.min, Math.min(newProps.max, newProps.value));
	            this.setState({
	                value: value
	            });
	        }
	    };
	    Slider.prototype.render = function () {
	        var _a = this.props, min = _a.min, max = _a.max, label = _a.label, showValue = _a.showValue, disabled = _a.disabled, className = _a.className, ariaLabel = _a.ariaLabel;
	        var _b = this.state, value = _b.value, renderedValue = _b.renderedValue;
	        var thumbOffsetPercent = (renderedValue - min) / (max - min) * 100;
	        var onMouseDownProp = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
	        var onTouchStartProp = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
	        var onKeyDownProp = disabled ? {} : { onKeyDown: this._onKeyDown };
	        return (React.createElement("div", {className: css_1.css('ms-Slider', className, {
	            'ms-Slider-enabled': !disabled,
	            'ms-Slider-disabled': disabled
	        }), ref: 'root'}, label && (React.createElement(Label_1.Label, React.__spread({}, ariaLabel ? {} : { 'htmlFor': this._id }), label)), React.createElement("div", {className: 'ms-Slider-container'}, React.createElement("div", React.__spread({className: css_1.css('ms-Slider-slideBox', {
	            'ms-Slider-showValue': showValue,
	            'ms-Slider-showTransitions': (renderedValue === value)
	        })}, disabled ? {} : { 'tabIndex': 0 }, {id: this._id, role: 'slider', "aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max}, onMouseDownProp, onTouchStartProp, onKeyDownProp), React.createElement("div", {ref: 'sliderLine', className: 'ms-Slider-line'}, React.createElement("span", React.__spread({ref: 'thumb', className: 'ms-Slider-thumb'}, ariaLabel ? { 'aria-label': ariaLabel } : {}, {style: rtl_1.getRTL() ?
	            { 'right': thumbOffsetPercent + '%' } :
	            { 'left': thumbOffsetPercent + '%' }})), React.createElement("span", {className: 'ms-Slider-active', style: { 'width': thumbOffsetPercent + '%' }}), React.createElement("span", {className: 'ms-Slider-inactive', style: { 'width': (100 - thumbOffsetPercent) + '%' }}))), showValue && React.createElement("label", {className: 'ms-Label ms-Slider-value'}, value))));
	    };
	    Slider.prototype.focus = function () {
	        if (this.refs.thumb) {
	            this.refs.thumb.focus();
	        }
	    };
	    Object.defineProperty(Slider.prototype, "value", {
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Slider.prototype._onMouseDownOrTouchStart = function (event) {
	        if (event.type === 'mousedown') {
	            this._events.on(window, 'mousemove', this._onMouseMoveOrTouchMove, true);
	            this._events.on(window, 'mouseup', this._onMouseUpOrTouchEnd, true);
	        }
	        else if (event.type === 'touchstart') {
	            this._events.on(window, 'touchmove', this._onMouseMoveOrTouchMove, true);
	            this._events.on(window, 'touchend', this._onMouseUpOrTouchEnd, true);
	        }
	        this._onMouseMoveOrTouchMove(event, true);
	    };
	    Slider.prototype._onMouseMoveOrTouchMove = function (event, suppressEventCancelation) {
	        var _a = this.props, max = _a.max, min = _a.min, step = _a.step, onChange = _a.onChange;
	        var steps = (max - min) / step;
	        var sliderLength = this.refs.sliderLine.offsetWidth;
	        var stepLength = sliderLength / steps;
	        var sliderPositionRect = this.refs.sliderLine.getBoundingClientRect();
	        var currentSteps;
	        if (event.type === 'mousedown' || event.type === 'mousemove') {
	            currentSteps = rtl_1.getRTL() ?
	                (sliderPositionRect.right - event.clientX) / stepLength :
	                (event.clientX - sliderPositionRect.left) / stepLength;
	        }
	        else if (event.type === 'touchstart' || event.type === 'touchmove') {
	            currentSteps = rtl_1.getRTL() ?
	                (sliderPositionRect.right - event.touches[0].clientX) / stepLength :
	                (event.touches[0].clientX - sliderPositionRect.left) / stepLength;
	        }
	        var currentValue;
	        var renderedValue;
	        // The value shouldn't be bigger than max or be smaller than min.
	        if (currentSteps > Math.floor(steps)) {
	            renderedValue = currentValue = max;
	        }
	        else if (currentSteps < 0) {
	            renderedValue = currentValue = min;
	        }
	        else {
	            renderedValue = min + step * currentSteps;
	            currentValue = min + step * Math.round(currentSteps);
	        }
	        this.setState({
	            value: currentValue,
	            renderedValue: renderedValue
	        });
	        if (onChange) {
	            onChange(currentValue);
	        }
	        if (!suppressEventCancelation) {
	            event.preventDefault();
	            event.stopPropagation();
	        }
	    };
	    Slider.prototype._onMouseUpOrTouchEnd = function () {
	        this.setState({
	            renderedValue: this.state.value
	        });
	        this._events.off();
	    };
	    Slider.prototype._onKeyDown = function (event) {
	        var value = this.state.value;
	        var _a = this.props, max = _a.max, min = _a.min, step = _a.step, onChange = _a.onChange;
	        var diff = 0;
	        if (event.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.left)) {
	            diff = -step;
	        }
	        else if (event.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)) {
	            diff = step;
	        }
	        else {
	            return;
	        }
	        var newValue = Math.min(max, Math.max(min, value + diff));
	        this.setState({
	            value: newValue,
	            renderedValue: newValue
	        });
	        if (onChange) {
	            onChange(newValue);
	        }
	        event.preventDefault();
	        event.stopPropagation();
	    };
	    Slider.defaultProps = {
	        step: 1,
	        min: 0,
	        max: 10,
	        showValue: true,
	        disabled: false
	    };
	    return Slider;
	}(BaseComponent_1.BaseComponent));
	exports.Slider = Slider;
	
	//# sourceMappingURL=Slider.js.map


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Slider{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-bottom:8px}.ms-Slider>.ms-Label{padding:0}.ms-Slider-line{top:50%;margin-top:-2px;position:relative;width:100%}.ms-Slider-line span{height:4px;border-radius:4px}html[dir=ltr] .ms-Slider-line span{float:left}html[dir=rtl] .ms-Slider-line span{float:right}.ms-Slider-active{background:"[theme:neutralSecondary, default: #666666]"}.ms-Slider-inactive{background:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Slider-showTransitions .ms-Slider-thumb{-webkit-transition:left 367ms cubic-bezier(.1,.9,.2,1);transition:left 367ms cubic-bezier(.1,.9,.2,1)}.ms-Slider-showTransitions .ms-Slider-active,.ms-Slider-showTransitions .ms-Slider-inactive{-webkit-transition:width 367ms cubic-bezier(.1,.9,.2,1);transition:width 367ms cubic-bezier(.1,.9,.2,1)}.ms-Slider-slideBox .ms-Slider-thumb{border:2px solid "[theme:neutralSecondary, default: #666666]";background:"[theme:white, default: #ffffff]";display:block;width:12px;height:12px;position:absolute;top:-6px;border-radius:10px}html[dir=ltr] .ms-Slider-slideBox .ms-Slider-thumb{-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir=rtl] .ms-Slider-slideBox .ms-Slider-thumb{-webkit-transform:translateX(50%);transform:translateX(50%)}.ms-Slider-container{display:-webkit-box;display:-ms-flexbox;display:flex}.ms-Slider-container .ms-Slider-slideBox{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:28px}.ms-Fabric .ms-Slider-container .ms-Slider-slideBox::-moz-focus-inner{border:0}.ms-Fabric .ms-Slider-container .ms-Slider-slideBox{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Slider-container .ms-Slider-slideBox:focus:before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-Slider-container .ms-Label{-ms-flex-negative:1;flex-shrink:1;width:30px}html[dir=ltr] .ms-Slider-container .ms-Label{margin-left:12px}html[dir=rtl] .ms-Slider-container .ms-Label{margin-right:12px}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-thumb,.ms-Slider-enabled .ms-Slider-slideBox:hover .ms-Slider-thumb{border:2px solid "[theme:themePrimary, default: #0078d7]"}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-active,.ms-Slider-enabled .ms-Slider-slideBox:hover .ms-Slider-active{background-color:"[theme:themePrimary, default: #0078d7]"}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-inactive,.ms-Slider-enabled .ms-Slider-slideBox:hover .ms-Slider-inactive{background-color:"[theme:themeLight, default: #c7e0f4]"}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-thumb{border:2px solid "[theme:themeDark, default: #005a9e]"}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-active{background-color:"[theme:themeDark, default: #005a9e]"}.ms-Slider-disabled .ms-Slider-thumb{border-color:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Slider-disabled .ms-Slider-active{background:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Slider-disabled .ms-Slider-inactive{background:"[theme:neutralLight, default: #eaeaea]"}');
	
	//# sourceMappingURL=Slider.scss.js.map


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(231));
	
	//# sourceMappingURL=Toggle.js.map


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(232));
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(17);
	var Label_1 = __webpack_require__(68);
	__webpack_require__(233);
	var _instance = 0;
	var Toggle = (function (_super) {
	    __extends(Toggle, _super);
	    function Toggle(props) {
	        _super.call(this);
	        this.state = {
	            isChecked: !!(props.checked || props.defaultChecked)
	        };
	        this._id = "Toggle-" + _instance++;
	        this._onClick = this._onClick.bind(this);
	    }
	    Object.defineProperty(Toggle.prototype, "checked", {
	        /**
	         * Gets the current checked state of the toggle.
	         */
	        get: function () {
	            return this.state.isChecked;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Toggle.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.checked !== undefined) {
	            this.setState({
	                isChecked: newProps.checked
	            });
	        }
	    };
	    Toggle.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, label = _a.label, onText = _a.onText, offText = _a.offText, className = _a.className, disabled = _a.disabled;
	        var isChecked = this.state.isChecked;
	        var stateText = isChecked ? onText : offText;
	        return (React.createElement("div", {className: css_1.css('ms-Toggle', {
	            'is-checked': isChecked,
	            'is-enabled': !disabled,
	            'is-disabled': disabled
	        })}, React.createElement("div", {className: 'ms-Toggle-innerContainer'}, React.createElement(Label_1.Label, {className: 'ms-Toggle-label', htmlFor: this._id}, label), React.createElement("div", {className: 'ms-Toggle-slider'}, React.createElement("button", {ref: function (c) { return _this._toggleButton = c; }, id: this._id, name: this._id, className: css_1.css('ms-Toggle-button', className), disabled: disabled, role: 'button', "aria-pressed": isChecked, onClick: this._onClick}), React.createElement("div", {className: 'ms-Toggle-background'}, React.createElement("div", {className: 'ms-Toggle-focus'}), React.createElement("div", {className: 'ms-Toggle-thumb'})), React.createElement(Label_1.Label, {className: 'ms-Toggle-stateText'}, stateText)))));
	    };
	    Toggle.prototype.focus = function () {
	        if (this._toggleButton) {
	            this._toggleButton.focus();
	        }
	    };
	    Toggle.prototype._onClick = function () {
	        var _a = this.props, checked = _a.checked, onChanged = _a.onChanged;
	        var isChecked = this.state.isChecked;
	        // Only update the state if the user hasn't provided it.
	        if (checked === undefined) {
	            this.setState({
	                isChecked: !isChecked
	            });
	        }
	        if (onChanged) {
	            onChanged(!isChecked);
	        }
	    };
	    Toggle.initialProps = {
	        label: '',
	        onText: 'On',
	        offText: 'Off'
	    };
	    return Toggle;
	}(React.Component));
	exports.Toggle = Toggle;
	
	//# sourceMappingURL=Toggle.js.map


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var load_themed_styles_1 = __webpack_require__(35);
	load_themed_styles_1.loadStyles('.ms-Toggle{color:"[theme:neutralPrimary, default: #333333]";font-family:"Segoe UI Regular WestEuropean","Segoe UI",Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;position:relative;display:block;margin-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle.is-enabled .ms-Toggle-button{cursor:pointer}.ms-Toggle.is-enabled .ms-Toggle-background{border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-Toggle.is-enabled .ms-Toggle-slider:hover .ms-Toggle-background{border:1px solid "[theme:black, default: #000000]"}.ms-Toggle.is-enabled .ms-Toggle-slider:hover .ms-Toggle-thumb{background:"[theme:black, default: #000000]"}.ms-Toggle.is-enabled.is-checked .ms-Toggle-background{background:"[theme:themePrimary, default: #0078d7]";border:1px solid "[theme:themePrimary, default: #0078d7]"}.ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{background:"[theme:white, default: #ffffff]"}html[dir=ltr] .ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{left:28px}html[dir=rtl] .ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{right:28px}.ms-Toggle.is-enabled.is-checked .ms-Toggle-slider:hover .ms-Toggle-background{border:1px solid "[theme:themePrimary, default: #0078d7]";background:"[theme:themeSecondary, default: #2b88d8]"}.ms-Toggle.is-enabled.is-checked .ms-Toggle-slider:hover .ms-Toggle-thumb{background:"[theme:white, default: #ffffff]"}.ms-Toggle.is-disabled .ms-Toggle-thumb{background:"[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Toggle.is-disabled .ms-Toggle-background{border:1px solid "[theme:neutralTertiaryAlt, default: #c8c8c8]"}.ms-Toggle.is-disabled.is-checked .ms-Toggle-background{background:"[theme:neutralTertiaryAlt, default: #c8c8c8]";border:1px solid transparent}.ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{background:"[theme:neutralLight, default: #eaeaea]"}html[dir=ltr] .ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{left:28px}html[dir=rtl] .ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{right:28px}.ms-Toggle-innerContainer{display:inline-block}.ms-Fabric.is-focusVisible .ms-Toggle.is-enabled .ms-Toggle-button:focus+.ms-Toggle-background .ms-Toggle-focus{border:1px solid "[theme:neutralSecondaryAlt, default: #767676]"}.ms-Toggle-button{position:absolute;opacity:0;left:0;top:0;width:100%;height:100%;margin:0;padding:0}.ms-Toggle-slider{position:relative}.ms-Toggle-background{display:inline-block;position:absolute;width:44px;height:20px;box-sizing:border-box;vertical-align:middle;border-radius:20px;cursor:pointer;-webkit-transition:all .1s ease;transition:all .1s ease;pointer-events:none}.ms-Toggle-thumb{position:absolute;width:10px;height:10px;border-radius:10px;top:4px;background:"[theme:neutralSecondary, default: #666666]";-webkit-transition:all .1s ease;transition:all .1s ease}html[dir=ltr] .ms-Toggle-thumb{left:4px}html[dir=rtl] .ms-Toggle-thumb{right:4px}.ms-Toggle-stateText.ms-Label{display:inline-block;vertical-align:top;line-height:20px;padding:0}html[dir=ltr] .ms-Toggle-stateText.ms-Label{margin-left:54px}html[dir=rtl] .ms-Toggle-stateText.ms-Label{margin-right:54px}.ms-Toggle-focus{position:absolute;left:-3px;top:-3px;right:-3px;bottom:-3px;box-sizing:border-box;outline:transparent}');
	
	//# sourceMappingURL=Toggle.scss.js.map


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-app.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["all"] = factory();
	else
		root["gds"] = root["gds"] || {}, root["gds"]["all"] = factory();
})(this, function() {
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var ui_contexts = ['success', 'info', 'warning', 'danger', 'primary', 'secondary'];
var ui_breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

module.exports = {
    ui_contexts: ui_contexts,
    ui_breakpoints: ui_breakpoints
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_System__);
//
//
//
//
//
//



var baseclass = 'gds-badge';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'gds-badge',
    props: {
        context: {
            type: String,
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_0_System__["ui_contexts"].indexOf(value) >= 0;
            }
        },
        inverse: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        finalClassName: function finalClassName() {
            var classList = [baseclass];
            if (this.context) {
                classList.push(baseclass + '--' + this.context);
            }
            if (this.inverse) {
                if (this.context) {
                    classList.push(baseclass + '--' + this.context + '-inverse');
                } else {
                    classList.push(baseclass + '--inverse');
                }
            }
            if (this.empty || Object.keys(this.$slots).length === 0) {
                classList.push(baseclass + '--empty');
            }
            return classList;
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_System__);
//
//
//
//



var baseclass = 'gds-button';

var displays = ['link', 'block'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'gds-button',
    props: {
        context: {
            type: String,
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_0_System__["ui_contexts"].indexOf(value) >= 0;
            }
        },
        size: {
            type: String,
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_0_System__["ui_breakpoints"].indexOf(value) >= 0;
            }
        },
        display: {
            type: String,
            validator: function validator(value) {
                return displays.indexOf(value) >= 0;
            }
        }
    },
    computed: {
        finalClassName: function finalClassName() {
            var classList = [baseclass];
            if (this.context) {
                classList.push(baseclass + '--' + this.context);
            } else {
                classList.push(baseclass + '--default');
            }
            if (this.size) {
                classList.push(baseclass + '--' + this.size);
            }
            if (this.display) {
                classList.push(baseclass + '--' + this.display);
            }
            return classList;
        }
    },
    methods: {
        nativeClick: function nativeClick(evt) {
            this.$emit('click', evt);
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_System__);
//
//
//
//
//
//



var baseclass = 'gds-container';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'container',
    props: {
        context: {
            type: String,
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_0_System__["ui_contexts"].indexOf(value) >= 0;
            }
        },
        size: {
            type: String,
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_0_System__["ui_breakpoints"].indexOf(value) >= 0;
            }
        }
    },
    computed: {
        finalClassName: function finalClassName() {
            var classList = [baseclass];
            if (this.context) {
                classList.push(baseclass + '--' + this.context);
            } else {
                classList.push(baseclass + '--gray');
            }
            if (this.size) {
                classList.push(baseclass + '--' + this.size);
            }
            return classList;
        }
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_System__);
//
//
//
//
//
//



var baseclass = 'gds-loading__dot';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'loading',
    props: {
        size: {
            type: String,
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_0_System__["ui_breakpoints"].indexOf(value.toLowerCase()) >= 0;
            }
        }
    },
    computed: {
        finalClassName: function finalClassName() {
            var classList = [baseclass];
            if (this.size) {
                classList.push(baseclass + '--' + this.size);
            }
            return classList;
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ESC_KEY = 27;

var instances = {};

var body = window && window.document && window.document.body;

// makes body modifications required by DS styles,
// also attaches global ESC listener
var applyHasModalToBody = function applyHasModalToBody(state) {
    if (body) {
        var bodyClasses = body.classList;
        if (state) {
            bodyClasses.add('-has-modal');
            body.addEventListener('keyup', triggerOnEsc);
        } else {
            bodyClasses.remove('-has-modal');
            body.removeEventListener('keyup', triggerOnEsc);
        }
    }
};
// Trigger 'esc' event on all open modals
var triggerOnEsc = function triggerOnEsc(evt) {
    if (evt.keyCode === ESC_KEY) {
        Object.keys(instances).forEach(function (uid) {
            if (instances[uid].$data.open) {
                instances[uid].$emit('esc', { type: 'esc' });
            }
        });
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'modal',
    props: {
        uid: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'Dialog'
        },
        shown: {
            type: Boolean,
            default: false
        },
        modalClassName: {
            type: [String, Array],
            default: 'gds-layout__column--md-12'
        },
        headerClassName: {
            type: [String, Array],
            default: ''
        },
        footerClassName: {
            type: [String, Array],
            default: ''
        }
    },
    data: function data() {
        return {
            open: false
        };
    },
    mounted: function mounted() {
        instances[this.uid] = this;
        this.open = this.shown;
        if (body) {
            body.prepend(this.$el);
        }
    },
    watch: {
        shown: function shown(new_state) {
            this.open = new_state;
        },
        open: function open(new_state) {
            var event = new_state === true ? 'open' : 'close';
            this.$emit(event, { type: event });
            applyHasModalToBody(new_state);
        }
    },
    computed: {
        finalClassName: function finalClassName() {
            var classList = ['gds-modal__overlay'];
            if (this.open) {
                classList.push('gds-modal--shown');
            }
            return classList;
        },
        finalModalClassName: function finalModalClassName() {
            var classList = ['gds-modal'];
            if (this.headerClassName.length) {
                classList.push(typeof this.headerClassName === 'string' ? this.headerClassName : this.headerClassName.join(' '));
            }
            return classList;
        },
        finalHeaderClassName: function finalHeaderClassName() {
            var classList = ['gds-modal__header'];
            if (this.headerClassName.length) {
                classList.push(typeof this.headerClassName === 'string' ? this.headerClassName : this.headerClassName.join(' '));
            }
            return classList;
        },
        finalFooterClassName: function finalFooterClassName() {
            var classList = ['gds-modal__footer'];
            if (this.footerClassName.length) {
                classList.push(typeof this.footerClassName === 'string' ? this.footerClassName : this.footerClassName.join(' '));
            }
            return classList;
        }
    }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_System___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_System__);
//
//
//
//
//
//



// Column Sizes go from 1 to 12
var columnSizeValidator = function columnSizeValidator(value) {
    if (value === false) return true;
    var intvalue = isNaN(value) ? parseInt(value, 10) : value;
    return intvalue > 0 && intvalue <= 12;
};

var props = {
    all: { default: false, validator: columnSizeValidator }
};
__WEBPACK_IMPORTED_MODULE_0_System__["ui_breakpoints"].forEach(function (bp) {
    props[bp] = { default: false, validator: columnSizeValidator };
    props[bp + '-offset'] = { default: false, validator: columnSizeValidator };
    props[bp + '-push'] = { default: false, validator: columnSizeValidator };
    props[bp + '-pull'] = { default: false, validator: columnSizeValidator };
});
props.xs.default = 12;

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'gds-column',
    props: props,
    computed: {
        finalClassName: function finalClassName() {
            var props = this.$props,
                allsize = this.all,
                className = [];
            Object.keys(props).forEach(function (key) {
                var colsize = props[key];
                // if all props is used, it overrides all per-breakpoint settings
                if (__WEBPACK_IMPORTED_MODULE_0_System__["ui_breakpoints"].indexOf(key) >= 0) {
                    colsize = allsize || props[key];
                }
                if (colsize !== false) {
                    className.push('gds-layout__column--' + key + '-' + colsize);
                }
            });
            return className;
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'gds-container',
    props: {
        className: {
            default: '',
            type: String
        },
        fullWidth: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        finalClassName: function finalClassName() {
            var classList = 'gds-layout__container ' + this.className;
            if (this.fullWidth) {
                classList += ' gds-layout__container--full-width';
            }
            return classList;
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'gds-row'
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gds-loading"
  }, [_c('div', {
    class: _vm.finalClassName
  })])
},staticRenderFns: []}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.finalClassName
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.finalClassName,
    on: {
      "click": _vm.nativeClick
    }
  }, [_vm._t("default", [_vm._v("Click Here")])], 2)
},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.finalClassName,
    attrs: {
      "dataElement": _vm.uid
    }
  }, [_c('div', {
    class: _vm.finalModalClassName
  }, [_c('div', {
    class: _vm.finalHeaderClassName
  }, [_vm._t("header", [_c('h2', {
    staticClass: "gds-modal__title gds-text--header-sm"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('button', {
    staticClass: "gds-modal__close-button",
    on: {
      "!click": function($event) {
        _vm.open = false
      }
    }
  })])], 2), _vm._v(" "), _c('div', {
    staticClass: "gds-modal__body"
  }, [_vm._t("default", [_c('p', {
    staticClass: "-m-b-1"
  }, [_vm._v("You're missing to put some content in here.")])])], 2), _vm._v(" "), _c('div', {
    class: _vm.finalFooterClassName
  }, [_vm._t("footer")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.finalClassName
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.finalClassName
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.finalClassName
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gds-layout__row"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("368376ca", content, true);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5d6007c1", content, true);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("55838249", content, true);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("15455376", content, true);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("332cf6a3", content, true);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("baf14ee4", content, true);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1088fa8d", content, true);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("9a9e3788", content, true);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"loading.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"column.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"button.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"modal.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"container.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"container.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"badge.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"row.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-b44e181e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  "data-v-2650af58",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  "data-v-4f1d0a62",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  "data-v-0bc9cf8a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-3ca36026",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  "data-v-1740fd92",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  "data-v-6b341175",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-d2af0164",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    'gds-layout-container': __webpack_require__(43),
    'gds-column': __webpack_require__(42),
    'gds-row': __webpack_require__(44),
    'gds-badge': __webpack_require__(37),
    'gds-button': __webpack_require__(38),
    'gds-container': __webpack_require__(39),
    'gds-loading': __webpack_require__(40),
    'gds-modal': __webpack_require__(41)
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=all.js.map
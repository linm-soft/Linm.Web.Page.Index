System.register(["single-spa"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__496__ = {};

	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__496__.addErrorHandler = module.addErrorHandler;
				__WEBPACK_EXTERNAL_MODULE__496__.checkActivityFunctions = module.checkActivityFunctions;
				__WEBPACK_EXTERNAL_MODULE__496__.getAppNames = module.getAppNames;
				__WEBPACK_EXTERNAL_MODULE__496__.getMountedApps = module.getMountedApps;
				__WEBPACK_EXTERNAL_MODULE__496__.mountRootParcel = module.mountRootParcel;
				__WEBPACK_EXTERNAL_MODULE__496__.navigateToUrl = module.navigateToUrl;
				__WEBPACK_EXTERNAL_MODULE__496__.pathToActiveWhen = module.pathToActiveWhen;
				__WEBPACK_EXTERNAL_MODULE__496__.registerApplication = module.registerApplication;
				__WEBPACK_EXTERNAL_MODULE__496__.removeErrorHandler = module.removeErrorHandler;
				__WEBPACK_EXTERNAL_MODULE__496__.start = module.start;
				__WEBPACK_EXTERNAL_MODULE__496__.unregisterApplication = module.unregisterApplication;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 721
() {

var style = document.createElement('style');
style.setAttribute('data-linm-css', 'root');
style.innerHTML = "\n  * { box-sizing: border-box; }\n  body { margin: 0; padding: 0; font-family: 'Roboto', sans-serif; }\n  #app-root { display: flex; flex-direction: column; min-height: 100vh; }\n  #navigation { position: sticky; top: 0; z-index: 1000; background: #fff; }\n  #main-content {\n    flex: 1;\n    min-height: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .root-loader {\n    position: fixed; inset: 0; display: flex;\n    align-items: center; justify-content: center;\n    background: #fff; z-index: 9999;\n  }\n  .root-loader__spinner {\n    width: 48px; height: 48px;\n    border: 4px solid #e0e0e0; border-top-color: #1976d2;\n    border-radius: 50%; animation: spin 0.8s linear infinite;\n  }\n  @keyframes spin { to { transform: rotate(360deg); } }\n\n  /* Navigation transition overlay \u2014 covers the unmount/mount gap between apps */\n  #spa-nav-overlay {\n    position: fixed; inset: 0;\n    background: rgba(255, 255, 255, 0.45);\n    z-index: 9998;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.12s ease;\n  }\n  #spa-nav-overlay.visible { opacity: 1; }\n\n  /* Permission bootstrap \u2014 full page until @linm/nav resolves menu/allow-list */\n  #linm-perm-bootstrap {\n    position: fixed; inset: 0;\n    display: flex; flex-direction: column;\n    align-items: center; justify-content: center;\n    gap: 16px;\n    background: #fff;\n    z-index: 10000;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.15s ease;\n  }\n  #linm-perm-bootstrap.visible {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .linm-perm-bootstrap__stage {\n    perspective: 520px;\n    width: calc(var(--linm-loading-logo-size, 64px) + 16px);\n    height: calc(var(--linm-loading-logo-size, 64px) + 16px);\n    display: flex; align-items: center; justify-content: center;\n  }\n  .linm-perm-bootstrap__logo {\n    width: var(--linm-loading-logo-size, 64px);\n    height: var(--linm-loading-logo-size, 64px);\n    object-fit: contain;\n    transform-style: preserve-3d;\n    backface-visibility: visible;\n    animation: linm-logo-3d-spin 1.8s linear infinite;\n    will-change: transform;\n  }\n  @keyframes linm-logo-3d-spin {\n    from { transform: rotateY(0deg); }\n    to { transform: rotateY(360deg); }\n  }\n  .linm-perm-bootstrap__label {\n    margin: 0;\n    color: #666;\n    font-size: 14px;\n    letter-spacing: 0.02em;\n    font-family: 'Roboto', sans-serif;\n    animation: linm-loading-pulse 1.6s ease-in-out infinite;\n  }\n  @keyframes linm-loading-pulse {\n    0%, 100% { opacity: 0.5; }\n    50% { opacity: 1; }\n  }\n\n  .linm-mfe-error {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    min-height: 240px;\n    padding: 32px 24px;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #4a4a4a;\n  }\n  .linm-mfe-error__icon {\n    width: 40px; height: 40px;\n    border-radius: 50%;\n    background: #fff4e5;\n    color: #c33a00;\n    font-size: 22px;\n    font-weight: 700;\n    line-height: 40px;\n  }\n  .linm-mfe-error__title {\n    margin: 0;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a1a1a;\n  }\n  .linm-mfe-error__body {\n    margin: 0;\n    max-width: 420px;\n    font-size: 14px;\n    line-height: 1.5;\n    color: #6d6d6d;\n  }\n  .linm-mfe-error__retry {\n    margin-top: 8px;\n    padding: 8px 20px;\n    border: none;\n    border-radius: 6px;\n    background: #2563eb;\n    color: #fff;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .linm-mfe-error__retry:hover { background: #1d4ed8; }\n";
document.head.appendChild(style);

/***/ },

/***/ 126
(__unused_webpack_module, exports, __webpack_require__) {

const resolveDirectory = (__webpack_require__(358)/* .resolveDirectory */ .y);

exports.w = function autoPublicPath(rootDirLevel) {
  if (!rootDirLevel) {
    rootDirLevel = 1;
  }

  if (true) {
    if (false) // removed by dead control flow
{}

    if (!__webpack_require__.y.meta || !__webpack_require__.y.meta.url) {
      console.error("__system_context__", __webpack_require__.y);
      throw Error(
        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
      );
    }

    __webpack_require__.p = resolveDirectory(
      __webpack_require__.y.meta.url,
      rootDirLevel
    );
  }
};


/***/ },

/***/ 358
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
__webpack_unused_export__ = function setPublicPath(
  systemjsModuleName,
  rootDirectoryLevel
) {
  if (!rootDirectoryLevel) {
    rootDirectoryLevel = 1;
  }
  if (
    typeof systemjsModuleName !== "string" ||
    systemjsModuleName.trim().length === 0
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
    );
  }

  if (
    typeof rootDirectoryLevel !== "number" ||
    rootDirectoryLevel <= 0 ||
    isNaN(rootDirectoryLevel) ||
    !isInteger(rootDirectoryLevel)
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
    );
  }

  var moduleUrl;
  try {
    moduleUrl = window.System.resolve(systemjsModuleName);
    if (!moduleUrl) {
      throw Error();
    }
  } catch (err) {
    throw Error(
      "systemjs-webpack-interop: There is no such module '" +
        systemjsModuleName +
        "' in the SystemJS registry. Did you misspell the name of your module?"
    );
  }

  __webpack_require__.p = resolveDirectory(moduleUrl, rootDirectoryLevel);
};

function resolveDirectory(urlString, rootDirectoryLevel) {
  // Our friend IE11 doesn't support new URL()
  // https://github.com/single-spa/single-spa/issues/612
  // https://gist.github.com/jlong/2428561

  var a = document.createElement("a");
  a.href = urlString;

  var pathname = a.pathname[0] === "/" ? a.pathname : "/" + a.pathname;
  var numDirsProcessed = 0,
    index = pathname.length;
  while (numDirsProcessed !== rootDirectoryLevel && index >= 0) {
    var char = pathname[--index];
    if (char === "/") {
      numDirsProcessed++;
    }
  }

  if (numDirsProcessed !== rootDirectoryLevel) {
    throw Error(
      "systemjs-webpack-interop: rootDirectoryLevel (" +
        rootDirectoryLevel +
        ") is greater than the number of directories (" +
        numDirsProcessed +
        ") in the URL path " +
        urlString
    );
  }

  var finalPath = pathname.slice(0, index + 1);

  return a.protocol + "//" + a.host + finalPath;
}

exports.y = resolveDirectory;

// borrowed from https://github.com/parshap/js-is-integer/blob/master/index.js
var isInteger =
  Number.isInteger ||
  function isInteger(val) {
    return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  };


/***/ },

/***/ 496
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__496__;

/***/ },

/***/ 172
(module) {

function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 993
(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorDefine = __webpack_require__(546);
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 869
(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorAsyncGen = __webpack_require__(887);
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 887
(module, __unused_webpack_exports, __webpack_require__) {

var regenerator = __webpack_require__(993);
var regeneratorAsyncIterator = __webpack_require__(791);
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 791
(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(172);
var regeneratorDefine = __webpack_require__(546);
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 546
(module) {

function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 373
(module) {

function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 633
(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(172);
var regenerator = __webpack_require__(993);
var regeneratorAsync = __webpack_require__(869);
var regeneratorAsyncGen = __webpack_require__(887);
var regeneratorAsyncIterator = __webpack_require__(791);
var regeneratorKeys = __webpack_require__(373);
var regeneratorValues = __webpack_require__(579);
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 579
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(738)["default"]);
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 738
(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 756
(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(633)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/__system_context__ */
/******/ 	(() => {
/******/ 		__webpack_require__.y = __system_context__;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
const autoPublicPath = (__webpack_require__(126)/* .autoPublicPath */ .w);

autoPublicPath(1);

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

;// ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

;// ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// ./node_modules/jwt-decode/build/esm/index.js
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    }
    catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}

;// ./node_modules/oidc-client-ts/dist/esm/oidc-client-ts.js
// src/utils/Logger.ts
var nopLogger = {
  debug: () => void 0,
  info: () => void 0,
  warn: () => void 0,
  error: () => void 0
};
var level;
var logger;
var Log = /* @__PURE__ */ ((Log2) => {
  Log2[Log2["NONE"] = 0] = "NONE";
  Log2[Log2["ERROR"] = 1] = "ERROR";
  Log2[Log2["WARN"] = 2] = "WARN";
  Log2[Log2["INFO"] = 3] = "INFO";
  Log2[Log2["DEBUG"] = 4] = "DEBUG";
  return Log2;
})(Log || {});
((Log2) => {
  function reset() {
    level = 3 /* INFO */;
    logger = nopLogger;
  }
  Log2.reset = reset;
  function setLevel(value) {
    if (!(0 /* NONE */ <= value && value <= 4 /* DEBUG */)) {
      throw new Error("Invalid log level");
    }
    level = value;
  }
  Log2.setLevel = setLevel;
  function setLogger(value) {
    logger = value;
  }
  Log2.setLogger = setLogger;
})(Log || (Log = {}));
var Logger = class _Logger {
  constructor(_name) {
    this._name = _name;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  debug(...args) {
    if (level >= 4 /* DEBUG */) {
      logger.debug(_Logger._format(this._name, this._method), ...args);
    }
  }
  info(...args) {
    if (level >= 3 /* INFO */) {
      logger.info(_Logger._format(this._name, this._method), ...args);
    }
  }
  warn(...args) {
    if (level >= 2 /* WARN */) {
      logger.warn(_Logger._format(this._name, this._method), ...args);
    }
  }
  error(...args) {
    if (level >= 1 /* ERROR */) {
      logger.error(_Logger._format(this._name, this._method), ...args);
    }
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
  throw(err) {
    this.error(err);
    throw err;
  }
  create(method) {
    const methodLogger = Object.create(this);
    methodLogger._method = method;
    methodLogger.debug("begin");
    return methodLogger;
  }
  static createStatic(name, staticMethod) {
    const staticLogger = new _Logger(`${name}.${staticMethod}`);
    staticLogger.debug("begin");
    return staticLogger;
  }
  static _format(name, method) {
    const prefix = `[${name}]`;
    return method ? `${prefix} ${method}:` : prefix;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  // helpers for static class methods
  static debug(name, ...args) {
    if (level >= 4 /* DEBUG */) {
      logger.debug(_Logger._format(name), ...args);
    }
  }
  static info(name, ...args) {
    if (level >= 3 /* INFO */) {
      logger.info(_Logger._format(name), ...args);
    }
  }
  static warn(name, ...args) {
    if (level >= 2 /* WARN */) {
      logger.warn(_Logger._format(name), ...args);
    }
  }
  static error(name, ...args) {
    if (level >= 1 /* ERROR */) {
      logger.error(_Logger._format(name), ...args);
    }
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
};
Log.reset();

// src/utils/JwtUtils.ts

var JwtUtils = class {
  // IMPORTANT: doesn't validate the token
  static decode(token) {
    try {
      return jwtDecode(token);
    } catch (err) {
      Logger.error("JwtUtils.decode", err);
      throw err;
    }
  }
  static async generateSignedJwt(header, payload, privateKey) {
    const encodedHeader = CryptoUtils.encodeBase64Url(new TextEncoder().encode(JSON.stringify(header)));
    const encodedPayload = CryptoUtils.encodeBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
    const encodedToken = `${encodedHeader}.${encodedPayload}`;
    const signature = await window.crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" }
      },
      privateKey,
      new TextEncoder().encode(encodedToken)
    );
    const encodedSignature = CryptoUtils.encodeBase64Url(new Uint8Array(signature));
    return `${encodedToken}.${encodedSignature}`;
  }
  static async generateSignedJwtWithHmac(header, payload, secretKey) {
    const encodedHeader = CryptoUtils.encodeBase64Url(new TextEncoder().encode(JSON.stringify(header)));
    const encodedPayload = CryptoUtils.encodeBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
    const encodedToken = `${encodedHeader}.${encodedPayload}`;
    const signature = await window.crypto.subtle.sign(
      "HMAC",
      secretKey,
      new TextEncoder().encode(encodedToken)
    );
    const encodedSignature = CryptoUtils.encodeBase64Url(new Uint8Array(signature));
    return `${encodedToken}.${encodedSignature}`;
  }
};

// src/utils/CryptoUtils.ts
var UUID_V4_TEMPLATE = "10000000-1000-4000-8000-100000000000";
var toBase64 = (val) => btoa([...new Uint8Array(val)].map((chr) => String.fromCharCode(chr)).join(""));
var _CryptoUtils = class _CryptoUtils {
  static _randomWord() {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0];
  }
  /**
   * Generates RFC4122 version 4 guid
   */
  static generateUUIDv4() {
    const uuid = UUID_V4_TEMPLATE.replace(
      /[018]/g,
      (c) => (+c ^ _CryptoUtils._randomWord() & 15 >> +c / 4).toString(16)
    );
    return uuid.replace(/-/g, "");
  }
  /**
   * PKCE: Generate a code verifier
   */
  static generateCodeVerifier() {
    return _CryptoUtils.generateUUIDv4() + _CryptoUtils.generateUUIDv4() + _CryptoUtils.generateUUIDv4();
  }
  /**
   * PKCE: Generate a code challenge
   */
  static async generateCodeChallenge(code_verifier) {
    if (!crypto.subtle) {
      throw new Error("Crypto.subtle is available only in secure contexts (HTTPS).");
    }
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(code_verifier);
      const hashed = await crypto.subtle.digest("SHA-256", data);
      return toBase64(hashed).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } catch (err) {
      Logger.error("CryptoUtils.generateCodeChallenge", err);
      throw err;
    }
  }
  /**
   * Generates a base64-encoded string for a basic auth header
   */
  static generateBasicAuth(client_id, client_secret) {
    const encoder = new TextEncoder();
    const data = encoder.encode([client_id, client_secret].join(":"));
    return toBase64(data);
  }
  /**
   * Generates a hash of a string using a given algorithm
   * @param alg
   * @param message
   */
  static async hash(alg, message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest(alg, msgUint8);
    return new Uint8Array(hashBuffer);
  }
  /**
   * Generates a rfc7638 compliant jwk thumbprint
   * @param jwk
   */
  static async customCalculateJwkThumbprint(jwk) {
    let jsonObject;
    switch (jwk.kty) {
      case "RSA":
        jsonObject = {
          "e": jwk.e,
          "kty": jwk.kty,
          "n": jwk.n
        };
        break;
      case "EC":
        jsonObject = {
          "crv": jwk.crv,
          "kty": jwk.kty,
          "x": jwk.x,
          "y": jwk.y
        };
        break;
      case "OKP":
        jsonObject = {
          "crv": jwk.crv,
          "kty": jwk.kty,
          "x": jwk.x
        };
        break;
      case "oct":
        jsonObject = {
          "crv": jwk.k,
          "kty": jwk.kty
        };
        break;
      default:
        throw new Error("Unknown jwk type");
    }
    const utf8encodedAndHashed = await _CryptoUtils.hash("SHA-256", JSON.stringify(jsonObject));
    return _CryptoUtils.encodeBase64Url(utf8encodedAndHashed);
  }
  static async generateDPoPProof({
    url,
    accessToken,
    httpMethod,
    keyPair,
    nonce
  }) {
    let hashedToken;
    let encodedHash;
    const payload = {
      "jti": window.crypto.randomUUID(),
      "htm": httpMethod != null ? httpMethod : "GET",
      "htu": url,
      "iat": Math.floor(Date.now() / 1e3)
    };
    if (accessToken) {
      hashedToken = await _CryptoUtils.hash("SHA-256", accessToken);
      encodedHash = _CryptoUtils.encodeBase64Url(hashedToken);
      payload.ath = encodedHash;
    }
    if (nonce) {
      payload.nonce = nonce;
    }
    try {
      const publicJwk = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
      const header = {
        "alg": "ES256",
        "typ": "dpop+jwt",
        "jwk": {
          "crv": publicJwk.crv,
          "kty": publicJwk.kty,
          "x": publicJwk.x,
          "y": publicJwk.y
        }
      };
      return await JwtUtils.generateSignedJwt(header, payload, keyPair.privateKey);
    } catch (err) {
      if (err instanceof TypeError) {
        throw new Error(`Error exporting dpop public key: ${err.message}`);
      } else {
        throw err;
      }
    }
  }
  static async generateDPoPJkt(keyPair) {
    try {
      const publicJwk = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
      return await _CryptoUtils.customCalculateJwkThumbprint(publicJwk);
    } catch (err) {
      if (err instanceof TypeError) {
        throw new Error(`Could not retrieve dpop keys from storage: ${err.message}`);
      } else {
        throw err;
      }
    }
  }
  static async generateDPoPKeys() {
    return await window.crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256"
      },
      false,
      ["sign", "verify"]
    );
  }
  /**
   * Generates a client assertion JWT for client_secret_jwt authentication
   * @param client_id The client identifier
   * @param client_secret The client secret
   * @param audience The token endpoint URL (audience)
   * @param algorithm The HMAC algorithm to use (HS256, HS384, HS512). Defaults to HS256
   */
  static async generateClientAssertionJwt(client_id, client_secret, audience, algorithm = "HS256") {
    const now = Math.floor(Date.now() / 1e3);
    const header = {
      "alg": algorithm,
      "typ": "JWT"
    };
    const payload = {
      "iss": client_id,
      "sub": client_id,
      "aud": audience,
      "jti": _CryptoUtils.generateUUIDv4(),
      "exp": now + 300,
      // 5 minutes
      "iat": now
    };
    const hashMap = {
      "HS256": "SHA-256",
      "HS384": "SHA-384",
      "HS512": "SHA-512"
    };
    const hashFunction = hashMap[algorithm];
    if (!hashFunction) {
      throw new Error(`Unsupported algorithm: ${algorithm}. Supported algorithms are: HS256, HS384, HS512`);
    }
    const encoder = new TextEncoder();
    const secretKey = await crypto.subtle.importKey(
      "raw",
      encoder.encode(client_secret),
      { name: "HMAC", hash: hashFunction },
      false,
      ["sign"]
    );
    return await JwtUtils.generateSignedJwtWithHmac(header, payload, secretKey);
  }
};
/**
 * Generates a base64url encoded string
 */
_CryptoUtils.encodeBase64Url = (input) => {
  return toBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
var CryptoUtils = _CryptoUtils;

// src/utils/Event.ts
var Event = class {
  constructor(_name) {
    this._name = _name;
    this._callbacks = [];
    this._logger = new Logger(`Event('${this._name}')`);
  }
  addHandler(cb) {
    this._callbacks.push(cb);
    return () => this.removeHandler(cb);
  }
  removeHandler(cb) {
    const idx = this._callbacks.lastIndexOf(cb);
    if (idx >= 0) {
      this._callbacks.splice(idx, 1);
    }
  }
  async raise(...ev) {
    this._logger.debug("raise:", ...ev);
    for (const cb of this._callbacks) {
      await cb(...ev);
    }
  }
};

// src/utils/PopupUtils.ts
var PopupUtils = class {
  /**
   * Populates a map of window features with a placement centered in front of
   * the current window. If no explicit width is given, a default value is
   * binned into [800, 720, 600, 480, 360] based on the current window's width.
   */
  static center({ ...features }) {
    var _a, _b, _c;
    if (features.width == null)
      features.width = (_a = [800, 720, 600, 480].find((width) => width <= window.outerWidth / 1.618)) != null ? _a : 360;
    (_b = features.left) != null ? _b : features.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - features.width) / 2));
    if (features.height != null)
      (_c = features.top) != null ? _c : features.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - features.height) / 2));
    return features;
  }
  static serialize(features) {
    return Object.entries(features).filter(([, value]) => value != null).map(([key, value]) => `${key}=${typeof value !== "boolean" ? value : value ? "yes" : "no"}`).join(",");
  }
};

// src/utils/Timer.ts
var Timer = class _Timer extends Event {
  constructor() {
    super(...arguments);
    this._logger = new Logger(`Timer('${this._name}')`);
    this._timerHandle = null;
    this._expiration = 0;
    this._callback = () => {
      const diff = this._expiration - _Timer.getEpochTime();
      this._logger.debug("timer completes in", diff);
      if (this._expiration <= _Timer.getEpochTime()) {
        this.cancel();
        void super.raise();
      }
    };
  }
  // get the time
  static getEpochTime() {
    return Math.floor(Date.now() / 1e3);
  }
  init(durationInSeconds) {
    const logger2 = this._logger.create("init");
    durationInSeconds = Math.max(Math.floor(durationInSeconds), 1);
    const expiration = _Timer.getEpochTime() + durationInSeconds;
    if (this.expiration === expiration && this._timerHandle) {
      logger2.debug("skipping since already initialized for expiration at", this.expiration);
      return;
    }
    this.cancel();
    logger2.debug("using duration", durationInSeconds);
    this._expiration = expiration;
    const timerDurationInSeconds = Math.min(durationInSeconds, 5);
    this._timerHandle = setInterval(this._callback, timerDurationInSeconds * 1e3);
  }
  get expiration() {
    return this._expiration;
  }
  cancel() {
    this._logger.create("cancel");
    if (this._timerHandle) {
      clearInterval(this._timerHandle);
      this._timerHandle = null;
    }
  }
};

// src/utils/UrlUtils.ts
var UrlUtils = class {
  static readParams(url, responseMode = "query") {
    if (!url) throw new TypeError("Invalid URL");
    const parsedUrl = new URL(url, "http://127.0.0.1");
    const params = parsedUrl[responseMode === "fragment" ? "hash" : "search"];
    return new URLSearchParams(params.slice(1));
  }
};
var URL_STATE_DELIMITER = ";";

// src/errors/ErrorResponse.ts
var ErrorResponse = class extends Error {
  constructor(args, form) {
    var _a, _b, _c;
    super(args.error_description || args.error || "");
    this.form = form;
    /** Marker to detect class: "ErrorResponse" */
    this.name = "ErrorResponse";
    if (!args.error) {
      Logger.error("ErrorResponse", "No error passed");
      throw new Error("No error passed");
    }
    this.error = args.error;
    this.error_description = (_a = args.error_description) != null ? _a : null;
    this.error_uri = (_b = args.error_uri) != null ? _b : null;
    this.state = args.userState;
    this.session_state = (_c = args.session_state) != null ? _c : null;
    this.url_state = args.url_state;
  }
};

// src/errors/ErrorTimeout.ts
var ErrorTimeout = class extends Error {
  constructor(message) {
    super(message);
    /** Marker to detect class: "ErrorTimeout" */
    this.name = "ErrorTimeout";
  }
};

// src/AccessTokenEvents.ts
var AccessTokenEvents = class {
  constructor(args) {
    this._logger = new Logger("AccessTokenEvents");
    this._expiringTimer = new Timer("Access token expiring");
    this._expiredTimer = new Timer("Access token expired");
    this._expiringNotificationTimeInSeconds = args.expiringNotificationTimeInSeconds;
  }
  async load(container) {
    const logger2 = this._logger.create("load");
    if (container.access_token && container.expires_in !== void 0) {
      const duration = container.expires_in;
      logger2.debug("access token present, remaining duration:", duration);
      if (duration > 0) {
        let expiring = duration - this._expiringNotificationTimeInSeconds;
        if (expiring <= 0) {
          expiring = 1;
        }
        logger2.debug("registering expiring timer, raising in", expiring, "seconds");
        this._expiringTimer.init(expiring);
      } else {
        logger2.debug("canceling existing expiring timer because we're past expiration.");
        this._expiringTimer.cancel();
      }
      const expired = duration + 1;
      logger2.debug("registering expired timer, raising in", expired, "seconds");
      this._expiredTimer.init(expired);
    } else {
      this._expiringTimer.cancel();
      this._expiredTimer.cancel();
    }
  }
  async unload() {
    this._logger.debug("unload: canceling existing access token timers");
    this._expiringTimer.cancel();
    this._expiredTimer.cancel();
  }
  /**
   * Add callback: Raised prior to the access token expiring.
   */
  addAccessTokenExpiring(cb) {
    return this._expiringTimer.addHandler(cb);
  }
  /**
   * Remove callback: Raised prior to the access token expiring.
   */
  removeAccessTokenExpiring(cb) {
    this._expiringTimer.removeHandler(cb);
  }
  /**
   * Add callback: Raised after the access token has expired.
   */
  addAccessTokenExpired(cb) {
    return this._expiredTimer.addHandler(cb);
  }
  /**
   * Remove callback: Raised after the access token has expired.
   */
  removeAccessTokenExpired(cb) {
    this._expiredTimer.removeHandler(cb);
  }
};

// src/CheckSessionIFrame.ts
var CheckSessionIFrame = class {
  constructor(_callback, _client_id, url, _intervalInSeconds, _stopOnError) {
    this._callback = _callback;
    this._client_id = _client_id;
    this._intervalInSeconds = _intervalInSeconds;
    this._stopOnError = _stopOnError;
    this._logger = new Logger("CheckSessionIFrame");
    this._timer = null;
    this._session_state = null;
    this._message = (e) => {
      if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
        if (e.data === "error") {
          this._logger.error("error message from check session op iframe");
          if (this._stopOnError) {
            this.stop();
          }
        } else if (e.data === "changed") {
          this._logger.debug("changed message from check session op iframe");
          this.stop();
          void this._callback();
        } else {
          this._logger.debug(e.data + " message from check session op iframe");
        }
      }
    };
    const parsedUrl = new URL(url);
    this._frame_origin = parsedUrl.origin;
    this._frame = window.document.createElement("iframe");
    this._frame.style.visibility = "hidden";
    this._frame.style.position = "fixed";
    this._frame.style.left = "-1000px";
    this._frame.style.top = "0";
    this._frame.width = "0";
    this._frame.height = "0";
    this._frame.src = parsedUrl.href;
  }
  load() {
    return new Promise((resolve) => {
      this._frame.onload = () => {
        resolve();
      };
      window.document.body.appendChild(this._frame);
      window.addEventListener("message", this._message, false);
    });
  }
  start(session_state) {
    if (this._session_state === session_state) {
      return;
    }
    this._logger.create("start");
    this.stop();
    this._session_state = session_state;
    const send = () => {
      if (!this._frame.contentWindow || !this._session_state) {
        return;
      }
      this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin);
    };
    send();
    this._timer = setInterval(send, this._intervalInSeconds * 1e3);
  }
  stop() {
    this._logger.create("stop");
    this._session_state = null;
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }
};

// src/InMemoryWebStorage.ts
var InMemoryWebStorage = class {
  constructor() {
    this._logger = new Logger("InMemoryWebStorage");
    this._data = {};
  }
  clear() {
    this._logger.create("clear");
    this._data = {};
  }
  getItem(key) {
    this._logger.create(`getItem('${key}')`);
    return this._data[key];
  }
  setItem(key, value) {
    this._logger.create(`setItem('${key}')`);
    this._data[key] = value;
  }
  removeItem(key) {
    this._logger.create(`removeItem('${key}')`);
    delete this._data[key];
  }
  get length() {
    return Object.getOwnPropertyNames(this._data).length;
  }
  key(index) {
    return Object.getOwnPropertyNames(this._data)[index];
  }
};

// src/errors/ErrorDPoPNonce.ts
var ErrorDPoPNonce = class extends Error {
  constructor(nonce, message) {
    super(message);
    /** Marker to detect class: "ErrorDPoPNonce" */
    this.name = "ErrorDPoPNonce";
    this.nonce = nonce;
  }
};

// src/JsonService.ts
var JsonService = class {
  constructor(additionalContentTypes = [], _jwtHandler = null, _extraHeaders = {}) {
    this._jwtHandler = _jwtHandler;
    this._extraHeaders = _extraHeaders;
    this._logger = new Logger("JsonService");
    this._contentTypes = [];
    this._contentTypes.push(...additionalContentTypes, "application/json");
    if (_jwtHandler) {
      this._contentTypes.push("application/jwt");
    }
  }
  async fetchWithTimeout(input, init = {}) {
    const { timeoutInSeconds, ...initFetch } = init;
    if (!timeoutInSeconds) {
      return await fetch(input, initFetch);
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutInSeconds * 1e3);
    try {
      const response = await fetch(input, {
        ...init,
        signal: controller.signal
      });
      return response;
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        throw new ErrorTimeout("Network timed out");
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }
  async getJson(url, {
    token,
    credentials,
    timeoutInSeconds
  } = {}) {
    const logger2 = this._logger.create("getJson");
    const headers = {
      "Accept": this._contentTypes.join(", ")
    };
    if (token) {
      logger2.debug("token passed, setting Authorization header");
      headers["Authorization"] = "Bearer " + token;
    }
    this._appendExtraHeaders(headers);
    let response;
    try {
      logger2.debug("url:", url);
      response = await this.fetchWithTimeout(url, { method: "GET", headers, timeoutInSeconds, credentials });
    } catch (err) {
      logger2.error("Network Error");
      throw err;
    }
    logger2.debug("HTTP response received, status", response.status);
    const contentType = response.headers.get("Content-Type");
    if (contentType && !this._contentTypes.find((item) => contentType.startsWith(item))) {
      logger2.throw(new Error(`Invalid response Content-Type: ${contentType != null ? contentType : "undefined"}, from URL: ${url}`));
    }
    if (response.ok && this._jwtHandler && (contentType == null ? void 0 : contentType.startsWith("application/jwt"))) {
      return await this._jwtHandler(await response.text());
    }
    let json;
    try {
      json = await response.json();
    } catch (err) {
      logger2.error("Error parsing JSON response", err);
      if (response.ok) throw err;
      throw new Error(`${response.statusText} (${response.status})`);
    }
    if (!response.ok) {
      logger2.error("Error from server:", json);
      if (json.error) {
        throw new ErrorResponse(json);
      }
      throw new Error(`${response.statusText} (${response.status}): ${JSON.stringify(json)}`);
    }
    return json;
  }
  async postForm(url, {
    body,
    basicAuth,
    timeoutInSeconds,
    initCredentials,
    extraHeaders
  }) {
    const logger2 = this._logger.create("postForm");
    const headers = {
      "Accept": this._contentTypes.join(", "),
      "Content-Type": "application/x-www-form-urlencoded",
      ...extraHeaders
    };
    if (basicAuth !== void 0) {
      headers["Authorization"] = "Basic " + basicAuth;
    }
    this._appendExtraHeaders(headers);
    let response;
    try {
      logger2.debug("url:", url);
      response = await this.fetchWithTimeout(url, { method: "POST", headers, body, timeoutInSeconds, credentials: initCredentials });
    } catch (err) {
      logger2.error("Network error");
      throw err;
    }
    logger2.debug("HTTP response received, status", response.status);
    const contentType = response.headers.get("Content-Type");
    if (contentType && !this._contentTypes.find((item) => contentType.startsWith(item))) {
      throw new Error(`Invalid response Content-Type: ${contentType != null ? contentType : "undefined"}, from URL: ${url}`);
    }
    const responseText = await response.text();
    let json = {};
    if (responseText) {
      try {
        json = JSON.parse(responseText);
      } catch (err) {
        logger2.error("Error parsing JSON response", err);
        if (response.ok) throw err;
        throw new Error(`${response.statusText} (${response.status})`);
      }
    }
    if (!response.ok) {
      logger2.error("Error from server:", json);
      if (response.headers.has("dpop-nonce")) {
        const nonce = response.headers.get("dpop-nonce");
        throw new ErrorDPoPNonce(nonce, `${JSON.stringify(json)}`);
      }
      if (json.error) {
        throw new ErrorResponse(json, body);
      }
      throw new Error(`${response.statusText} (${response.status}): ${JSON.stringify(json)}`);
    }
    return json;
  }
  _appendExtraHeaders(headers) {
    const logger2 = this._logger.create("appendExtraHeaders");
    const customKeys = Object.keys(this._extraHeaders);
    const protectedHeaders = [
      "accept",
      "content-type"
    ];
    const preventOverride = [
      "authorization"
    ];
    if (customKeys.length === 0) {
      return;
    }
    customKeys.forEach((headerName) => {
      if (protectedHeaders.includes(headerName.toLocaleLowerCase())) {
        logger2.warn("Protected header could not be set", headerName, protectedHeaders);
        return;
      }
      if (preventOverride.includes(headerName.toLocaleLowerCase()) && Object.keys(headers).includes(headerName)) {
        logger2.warn("Header could not be overridden", headerName, preventOverride);
        return;
      }
      const content = typeof this._extraHeaders[headerName] === "function" ? this._extraHeaders[headerName]() : this._extraHeaders[headerName];
      if (content && content !== "") {
        headers[headerName] = content;
      }
    });
  }
};

// src/MetadataService.ts
var MetadataService = class {
  constructor(_settings) {
    this._settings = _settings;
    this._logger = new Logger("MetadataService");
    this._signingKeys = null;
    this._metadata = null;
    this._metadataUrl = this._settings.metadataUrl;
    this._jsonService = new JsonService(
      ["application/jwk-set+json"],
      null,
      this._settings.extraHeaders
    );
    if (this._settings.signingKeys) {
      this._logger.debug("using signingKeys from settings");
      this._signingKeys = this._settings.signingKeys;
    }
    if (this._settings.metadata) {
      this._logger.debug("using metadata from settings");
      this._metadata = this._settings.metadata;
    }
    if (this._settings.fetchRequestCredentials) {
      this._logger.debug("using fetchRequestCredentials from settings");
      this._fetchRequestCredentials = this._settings.fetchRequestCredentials;
    }
  }
  resetSigningKeys() {
    this._signingKeys = null;
  }
  async getMetadata() {
    const logger2 = this._logger.create("getMetadata");
    if (this._metadata) {
      logger2.debug("using cached values");
      return this._metadata;
    }
    if (!this._metadataUrl) {
      logger2.throw(new Error("No authority or metadataUrl configured on settings"));
      throw null;
    }
    logger2.debug("getting metadata from", this._metadataUrl);
    const metadata = await this._jsonService.getJson(this._metadataUrl, { credentials: this._fetchRequestCredentials, timeoutInSeconds: this._settings.requestTimeoutInSeconds });
    logger2.debug("merging remote JSON with seed metadata");
    this._metadata = Object.assign({}, metadata, this._settings.metadataSeed);
    return this._metadata;
  }
  getIssuer() {
    return this._getMetadataProperty("issuer");
  }
  getAuthorizationEndpoint() {
    return this._getMetadataProperty("authorization_endpoint");
  }
  getUserInfoEndpoint() {
    return this._getMetadataProperty("userinfo_endpoint");
  }
  getTokenEndpoint(optional = true) {
    return this._getMetadataProperty("token_endpoint", optional);
  }
  getCheckSessionIframe() {
    return this._getMetadataProperty("check_session_iframe", true);
  }
  getEndSessionEndpoint() {
    return this._getMetadataProperty("end_session_endpoint", true);
  }
  getRevocationEndpoint(optional = true) {
    return this._getMetadataProperty("revocation_endpoint", optional);
  }
  getKeysEndpoint(optional = true) {
    return this._getMetadataProperty("jwks_uri", optional);
  }
  async _getMetadataProperty(name, optional = false) {
    const logger2 = this._logger.create(`_getMetadataProperty('${name}')`);
    const metadata = await this.getMetadata();
    logger2.debug("resolved");
    if (metadata[name] === void 0) {
      if (optional === true) {
        logger2.warn("Metadata does not contain optional property");
        return void 0;
      }
      logger2.throw(new Error("Metadata does not contain property " + name));
    }
    return metadata[name];
  }
  async getSigningKeys() {
    const logger2 = this._logger.create("getSigningKeys");
    if (this._signingKeys) {
      logger2.debug("returning signingKeys from cache");
      return this._signingKeys;
    }
    const jwks_uri = await this.getKeysEndpoint(false);
    logger2.debug("got jwks_uri", jwks_uri);
    const keySet = await this._jsonService.getJson(jwks_uri, { timeoutInSeconds: this._settings.requestTimeoutInSeconds });
    logger2.debug("got key set", keySet);
    if (!Array.isArray(keySet.keys)) {
      logger2.throw(new Error("Missing keys on keyset"));
      throw null;
    }
    this._signingKeys = keySet.keys;
    return this._signingKeys;
  }
};

// src/WebStorageStateStore.ts
var WebStorageStateStore = class {
  constructor({
    prefix = "oidc.",
    store = localStorage
  } = {}) {
    this._logger = new Logger("WebStorageStateStore");
    this._store = store;
    this._prefix = prefix;
  }
  async set(key, value) {
    this._logger.create(`set('${key}')`);
    key = this._prefix + key;
    await this._store.setItem(key, value);
  }
  async get(key) {
    this._logger.create(`get('${key}')`);
    key = this._prefix + key;
    const item = await this._store.getItem(key);
    return item;
  }
  async remove(key) {
    this._logger.create(`remove('${key}')`);
    key = this._prefix + key;
    const item = await this._store.getItem(key);
    await this._store.removeItem(key);
    return item;
  }
  async getAllKeys() {
    this._logger.create("getAllKeys");
    const len = await this._store.length;
    const keys = [];
    for (let index = 0; index < len; index++) {
      const key = await this._store.key(index);
      if (key && key.indexOf(this._prefix) === 0) {
        keys.push(key.substr(this._prefix.length));
      }
    }
    return keys;
  }
};

// src/OidcClientSettings.ts
var DefaultResponseType = "code";
var DefaultScope = "openid";
var DefaultClientAuthentication = "client_secret_post";
var DefaultStaleStateAgeInSeconds = 60 * 15;
var OidcClientSettingsStore = class {
  constructor({
    // metadata related
    authority,
    metadataUrl,
    metadata,
    signingKeys,
    metadataSeed,
    // client related
    client_id,
    client_secret,
    response_type = DefaultResponseType,
    scope = DefaultScope,
    redirect_uri,
    post_logout_redirect_uri,
    client_authentication = DefaultClientAuthentication,
    token_endpoint_auth_signing_alg = "HS256",
    // optional protocol
    prompt,
    display,
    max_age,
    ui_locales,
    acr_values,
    resource,
    response_mode,
    // behavior flags
    filterProtocolClaims = true,
    loadUserInfo = false,
    requestTimeoutInSeconds,
    staleStateAgeInSeconds = DefaultStaleStateAgeInSeconds,
    mergeClaimsStrategy = { array: "replace" },
    disablePKCE = false,
    // other behavior
    stateStore,
    revokeTokenAdditionalContentTypes,
    fetchRequestCredentials,
    refreshTokenAllowedScope,
    // extra
    extraQueryParams = {},
    extraTokenParams = {},
    extraHeaders = {},
    dpop,
    omitScopeWhenRequesting = false
  }) {
    var _a;
    this.authority = authority;
    if (metadataUrl) {
      this.metadataUrl = metadataUrl;
    } else {
      this.metadataUrl = authority;
      if (authority) {
        if (!this.metadataUrl.endsWith("/")) {
          this.metadataUrl += "/";
        }
        this.metadataUrl += ".well-known/openid-configuration";
      }
    }
    this.metadata = metadata;
    this.metadataSeed = metadataSeed;
    this.signingKeys = signingKeys;
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.response_type = response_type;
    this.scope = scope;
    this.redirect_uri = redirect_uri;
    this.post_logout_redirect_uri = post_logout_redirect_uri;
    this.client_authentication = client_authentication;
    this.token_endpoint_auth_signing_alg = token_endpoint_auth_signing_alg;
    this.prompt = prompt;
    this.display = display;
    this.max_age = max_age;
    this.ui_locales = ui_locales;
    this.acr_values = acr_values;
    this.resource = resource;
    this.response_mode = response_mode;
    this.filterProtocolClaims = filterProtocolClaims != null ? filterProtocolClaims : true;
    this.loadUserInfo = !!loadUserInfo;
    this.staleStateAgeInSeconds = staleStateAgeInSeconds;
    this.mergeClaimsStrategy = mergeClaimsStrategy;
    this.omitScopeWhenRequesting = omitScopeWhenRequesting;
    this.disablePKCE = !!disablePKCE;
    this.revokeTokenAdditionalContentTypes = revokeTokenAdditionalContentTypes;
    this.fetchRequestCredentials = fetchRequestCredentials ? fetchRequestCredentials : "same-origin";
    this.requestTimeoutInSeconds = requestTimeoutInSeconds;
    if (stateStore) {
      this.stateStore = stateStore;
    } else {
      const store = typeof window !== "undefined" ? window.localStorage : new InMemoryWebStorage();
      this.stateStore = new WebStorageStateStore({ store });
    }
    this.refreshTokenAllowedScope = refreshTokenAllowedScope;
    this.extraQueryParams = extraQueryParams;
    this.extraTokenParams = extraTokenParams;
    this.extraHeaders = extraHeaders;
    this.dpop = dpop;
    if (this.dpop && !((_a = this.dpop) == null ? void 0 : _a.store)) {
      throw new Error("A DPoPStore is required when dpop is enabled");
    }
  }
};

// src/UserInfoService.ts
var UserInfoService = class {
  constructor(_settings, _metadataService) {
    this._settings = _settings;
    this._metadataService = _metadataService;
    this._logger = new Logger("UserInfoService");
    this._getClaimsFromJwt = async (responseText) => {
      const logger2 = this._logger.create("_getClaimsFromJwt");
      try {
        const payload = JwtUtils.decode(responseText);
        logger2.debug("JWT decoding successful");
        return payload;
      } catch (err) {
        logger2.error("Error parsing JWT response");
        throw err;
      }
    };
    this._jsonService = new JsonService(
      void 0,
      this._getClaimsFromJwt,
      this._settings.extraHeaders
    );
  }
  async getClaims(token) {
    const logger2 = this._logger.create("getClaims");
    if (!token) {
      this._logger.throw(new Error("No token passed"));
    }
    const url = await this._metadataService.getUserInfoEndpoint();
    logger2.debug("got userinfo url", url);
    const claims = await this._jsonService.getJson(url, {
      token,
      credentials: this._settings.fetchRequestCredentials,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds
    });
    logger2.debug("got claims", claims);
    return claims;
  }
};

// src/TokenClient.ts
var TokenClient = class {
  constructor(_settings, _metadataService) {
    this._settings = _settings;
    this._metadataService = _metadataService;
    this._logger = new Logger("TokenClient");
    this._jsonService = new JsonService(
      this._settings.revokeTokenAdditionalContentTypes,
      null,
      this._settings.extraHeaders
    );
  }
  /**
   * Exchange code.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.3
   */
  async exchangeCode({
    grant_type = "authorization_code",
    redirect_uri = this._settings.redirect_uri,
    client_id = this._settings.client_id,
    client_secret = this._settings.client_secret,
    extraHeaders,
    ...args
  }) {
    const logger2 = this._logger.create("exchangeCode");
    if (!client_id) {
      logger2.throw(new Error("A client_id is required"));
    }
    if (!redirect_uri) {
      logger2.throw(new Error("A redirect_uri is required"));
    }
    if (!args.code) {
      logger2.throw(new Error("A code is required"));
    }
    const params = new URLSearchParams({ grant_type, redirect_uri });
    for (const [key, value] of Object.entries(args)) {
      if (value != null) {
        params.set(key, value);
      }
    }
    if ((this._settings.client_authentication === "client_secret_basic" || this._settings.client_authentication === "client_secret_jwt") && (client_secret === void 0 || client_secret === null)) {
      logger2.throw(new Error("A client_secret is required"));
      throw null;
    }
    let basicAuth;
    const url = await this._metadataService.getTokenEndpoint(false);
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        basicAuth = CryptoUtils.generateBasicAuth(client_id, client_secret);
        break;
      case "client_secret_post":
        params.append("client_id", client_id);
        if (client_secret) {
          params.append("client_secret", client_secret);
        }
        break;
      case "client_secret_jwt": {
        const clientAssertion = await CryptoUtils.generateClientAssertionJwt(client_id, client_secret, url, this._settings.token_endpoint_auth_signing_alg);
        params.append("client_id", client_id);
        params.append("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
        params.append("client_assertion", clientAssertion);
        break;
      }
    }
    logger2.debug("got token endpoint");
    const response = await this._jsonService.postForm(url, {
      body: params,
      basicAuth,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds,
      initCredentials: this._settings.fetchRequestCredentials,
      extraHeaders
    });
    logger2.debug("got response");
    return response;
  }
  /**
   * Exchange credentials.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.3.2
   */
  async exchangeCredentials({
    grant_type = "password",
    client_id = this._settings.client_id,
    client_secret = this._settings.client_secret,
    scope = this._settings.scope,
    ...args
  }) {
    const logger2 = this._logger.create("exchangeCredentials");
    if (!client_id) {
      logger2.throw(new Error("A client_id is required"));
    }
    const params = new URLSearchParams({ grant_type });
    if (!this._settings.omitScopeWhenRequesting) {
      params.set("scope", scope);
    }
    for (const [key, value] of Object.entries(args)) {
      if (value != null) {
        params.set(key, value);
      }
    }
    if ((this._settings.client_authentication === "client_secret_basic" || this._settings.client_authentication === "client_secret_jwt") && (client_secret === void 0 || client_secret === null)) {
      logger2.throw(new Error("A client_secret is required"));
      throw null;
    }
    let basicAuth;
    const url = await this._metadataService.getTokenEndpoint(false);
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        basicAuth = CryptoUtils.generateBasicAuth(client_id, client_secret);
        break;
      case "client_secret_post":
        params.append("client_id", client_id);
        if (client_secret) {
          params.append("client_secret", client_secret);
        }
        break;
      case "client_secret_jwt": {
        const clientAssertion = await CryptoUtils.generateClientAssertionJwt(client_id, client_secret, url, this._settings.token_endpoint_auth_signing_alg);
        params.append("client_id", client_id);
        params.append("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
        params.append("client_assertion", clientAssertion);
        break;
      }
    }
    logger2.debug("got token endpoint");
    const response = await this._jsonService.postForm(url, { body: params, basicAuth, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials });
    logger2.debug("got response");
    return response;
  }
  /**
   * Exchange a refresh token.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-6
   */
  async exchangeRefreshToken({
    grant_type = "refresh_token",
    client_id = this._settings.client_id,
    client_secret = this._settings.client_secret,
    timeoutInSeconds,
    extraHeaders,
    ...args
  }) {
    const logger2 = this._logger.create("exchangeRefreshToken");
    if (!client_id) {
      logger2.throw(new Error("A client_id is required"));
    }
    if (!args.refresh_token) {
      logger2.throw(new Error("A refresh_token is required"));
    }
    const params = new URLSearchParams({ grant_type });
    for (const [key, value] of Object.entries(args)) {
      if (Array.isArray(value)) {
        value.forEach((param) => params.append(key, param));
      } else if (value != null) {
        params.set(key, value);
      }
    }
    if ((this._settings.client_authentication === "client_secret_basic" || this._settings.client_authentication === "client_secret_jwt") && (client_secret === void 0 || client_secret === null)) {
      logger2.throw(new Error("A client_secret is required"));
      throw null;
    }
    let basicAuth;
    const url = await this._metadataService.getTokenEndpoint(false);
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        basicAuth = CryptoUtils.generateBasicAuth(client_id, client_secret);
        break;
      case "client_secret_post":
        params.append("client_id", client_id);
        if (client_secret) {
          params.append("client_secret", client_secret);
        }
        break;
      case "client_secret_jwt": {
        const clientAssertion = await CryptoUtils.generateClientAssertionJwt(client_id, client_secret, url, this._settings.token_endpoint_auth_signing_alg);
        params.append("client_id", client_id);
        params.append("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
        params.append("client_assertion", clientAssertion);
        break;
      }
    }
    logger2.debug("got token endpoint");
    const response = await this._jsonService.postForm(url, { body: params, basicAuth, timeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials, extraHeaders });
    logger2.debug("got response");
    return response;
  }
  /**
   * Revoke an access or refresh token.
   *
   * @see https://datatracker.ietf.org/doc/html/rfc7009#section-2.1
   */
  async revoke(args) {
    var _a;
    const logger2 = this._logger.create("revoke");
    if (!args.token) {
      logger2.throw(new Error("A token is required"));
    }
    const url = await this._metadataService.getRevocationEndpoint(false);
    logger2.debug(`got revocation endpoint, revoking ${(_a = args.token_type_hint) != null ? _a : "default token type"}`);
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(args)) {
      if (value != null) {
        params.set(key, value);
      }
    }
    params.set("client_id", this._settings.client_id);
    if (this._settings.client_secret) {
      params.set("client_secret", this._settings.client_secret);
    }
    await this._jsonService.postForm(url, { body: params, timeoutInSeconds: this._settings.requestTimeoutInSeconds });
    logger2.debug("got response");
  }
};

// src/ResponseValidator.ts
var ResponseValidator = class {
  constructor(_settings, _metadataService, _claimsService) {
    this._settings = _settings;
    this._metadataService = _metadataService;
    this._claimsService = _claimsService;
    this._logger = new Logger("ResponseValidator");
    this._userInfoService = new UserInfoService(this._settings, this._metadataService);
    this._tokenClient = new TokenClient(this._settings, this._metadataService);
  }
  async validateSigninResponse(response, state, extraHeaders) {
    const logger2 = this._logger.create("validateSigninResponse");
    this._processSigninState(response, state);
    logger2.debug("state processed");
    await this._processCode(response, state, extraHeaders);
    logger2.debug("code processed");
    if (response.isOpenId) {
      this._validateIdTokenAttributes(response, "", state.nonce);
    }
    logger2.debug("tokens validated");
    await this._processClaims(response, state == null ? void 0 : state.skipUserInfo, response.isOpenId);
    logger2.debug("claims processed");
  }
  async validateCredentialsResponse(response, skipUserInfo) {
    const logger2 = this._logger.create("validateCredentialsResponse");
    const shouldValidateSubClaim = response.isOpenId && !!response.id_token;
    if (shouldValidateSubClaim) {
      this._validateIdTokenAttributes(response);
    }
    logger2.debug("tokens validated");
    await this._processClaims(response, skipUserInfo, shouldValidateSubClaim);
    logger2.debug("claims processed");
  }
  async validateRefreshResponse(response, state) {
    var _a, _b;
    const logger2 = this._logger.create("validateRefreshResponse");
    response.userState = state.data;
    (_a = response.session_state) != null ? _a : response.session_state = state.session_state;
    (_b = response.scope) != null ? _b : response.scope = state.scope;
    if (response.isOpenId && !!response.id_token) {
      this._validateIdTokenAttributes(response, state.id_token);
      logger2.debug("ID Token validated");
    }
    if (!response.id_token) {
      response.id_token = state.id_token;
      response.profile = state.profile;
    }
    const hasIdToken = response.isOpenId && !!response.id_token;
    await this._processClaims(response, false, hasIdToken);
    logger2.debug("claims processed");
  }
  validateSignoutResponse(response, state) {
    const logger2 = this._logger.create("validateSignoutResponse");
    if (state.id !== response.state) {
      logger2.throw(new Error("State does not match"));
    }
    logger2.debug("state validated");
    response.userState = state.data;
    if (response.error) {
      logger2.warn("Response was error", response.error);
      throw new ErrorResponse(response);
    }
  }
  _processSigninState(response, state) {
    var _a;
    const logger2 = this._logger.create("_processSigninState");
    if (state.id !== response.state) {
      logger2.throw(new Error("State does not match"));
    }
    if (!state.client_id) {
      logger2.throw(new Error("No client_id on state"));
    }
    if (!state.authority) {
      logger2.throw(new Error("No authority on state"));
    }
    if (this._settings.authority !== state.authority) {
      logger2.throw(new Error("authority mismatch on settings vs. signin state"));
    }
    if (this._settings.client_id && this._settings.client_id !== state.client_id) {
      logger2.throw(new Error("client_id mismatch on settings vs. signin state"));
    }
    logger2.debug("state validated");
    response.userState = state.data;
    response.url_state = state.url_state;
    (_a = response.scope) != null ? _a : response.scope = state.scope;
    if (response.error) {
      logger2.warn("Response was error", response.error);
      throw new ErrorResponse(response);
    }
    if (state.code_verifier && !response.code) {
      logger2.throw(new Error("Expected code in response"));
    }
  }
  async _processClaims(response, skipUserInfo = false, validateSub = true) {
    const logger2 = this._logger.create("_processClaims");
    response.profile = this._claimsService.filterProtocolClaims(response.profile);
    if (skipUserInfo || !this._settings.loadUserInfo || !response.access_token) {
      logger2.debug("not loading user info");
      return;
    }
    logger2.debug("loading user info");
    const claims = await this._userInfoService.getClaims(response.access_token);
    logger2.debug("user info claims received from user info endpoint");
    if (validateSub && claims.sub !== response.profile.sub) {
      logger2.throw(new Error("subject from UserInfo response does not match subject in ID Token"));
    }
    response.profile = this._claimsService.mergeClaims(response.profile, this._claimsService.filterProtocolClaims(claims));
    logger2.debug("user info claims received, updated profile:", response.profile);
  }
  async _processCode(response, state, extraHeaders) {
    const logger2 = this._logger.create("_processCode");
    if (response.code) {
      logger2.debug("Validating code");
      const tokenResponse = await this._tokenClient.exchangeCode({
        client_id: state.client_id,
        client_secret: state.client_secret,
        code: response.code,
        redirect_uri: state.redirect_uri,
        code_verifier: state.code_verifier,
        extraHeaders,
        ...state.extraTokenParams
      });
      Object.assign(response, tokenResponse);
    } else {
      logger2.debug("No code to process");
    }
  }
  _validateIdTokenAttributes(response, existingToken, nonce) {
    var _a;
    const logger2 = this._logger.create("_validateIdTokenAttributes");
    logger2.debug("decoding ID Token JWT");
    const incoming = JwtUtils.decode((_a = response.id_token) != null ? _a : "");
    if (!incoming.sub) {
      logger2.throw(new Error("ID Token is missing a subject claim"));
    }
    if (nonce && incoming.nonce !== nonce) {
      logger2.throw(new Error("nonce in id_token does not match nonce in client storage"));
    }
    if (existingToken) {
      const existing = JwtUtils.decode(existingToken);
      if (incoming.sub !== existing.sub) {
        logger2.throw(new Error("sub in id_token does not match current sub"));
      }
      if (incoming.auth_time && incoming.auth_time !== existing.auth_time) {
        logger2.throw(new Error("auth_time in id_token does not match original auth_time"));
      }
      if (incoming.azp && incoming.azp !== existing.azp) {
        logger2.throw(new Error("azp in id_token does not match original azp"));
      }
      if (!incoming.azp && existing.azp) {
        logger2.throw(new Error("azp not in id_token, but present in original id_token"));
      }
    }
    response.profile = incoming;
  }
};

// src/State.ts
var State = class _State {
  constructor(args) {
    this.id = args.id || CryptoUtils.generateUUIDv4();
    this.data = args.data;
    if (args.created && args.created > 0) {
      this.created = args.created;
    } else {
      this.created = Timer.getEpochTime();
    }
    this.request_type = args.request_type;
    this.url_state = args.url_state;
  }
  toStorageString() {
    new Logger("State").create("toStorageString");
    return JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      url_state: this.url_state
    });
  }
  static fromStorageString(storageString) {
    Logger.createStatic("State", "fromStorageString");
    return Promise.resolve(new _State(JSON.parse(storageString)));
  }
  static async clearStaleState(storage, age) {
    const logger2 = Logger.createStatic("State", "clearStaleState");
    const cutoff = Timer.getEpochTime() - age;
    const keys = await storage.getAllKeys();
    logger2.debug("got keys", keys);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = await storage.get(key);
      let remove = false;
      if (item) {
        try {
          const state = await _State.fromStorageString(item);
          logger2.debug("got item from key:", key, state.created);
          if (state.created <= cutoff) {
            remove = true;
          }
        } catch (err) {
          logger2.error("Error parsing state for key:", key, err);
          remove = true;
        }
      } else {
        logger2.debug("no item in storage for key:", key);
        remove = true;
      }
      if (remove) {
        logger2.debug("removed item for key:", key);
        void storage.remove(key);
      }
    }
  }
};

// src/SigninState.ts
var SigninState = class _SigninState extends State {
  constructor(args) {
    super(args);
    this.code_verifier = args.code_verifier;
    this.code_challenge = args.code_challenge;
    this.authority = args.authority;
    this.client_id = args.client_id;
    this.redirect_uri = args.redirect_uri;
    this.scope = args.scope;
    this.client_secret = args.client_secret;
    this.extraTokenParams = args.extraTokenParams;
    this.response_mode = args.response_mode;
    this.skipUserInfo = args.skipUserInfo;
    this.nonce = args.nonce;
  }
  static async create(args) {
    const code_verifier = args.code_verifier === true ? CryptoUtils.generateCodeVerifier() : args.code_verifier || void 0;
    const code_challenge = code_verifier ? await CryptoUtils.generateCodeChallenge(code_verifier) : void 0;
    return new _SigninState({
      ...args,
      code_verifier,
      code_challenge
    });
  }
  toStorageString() {
    new Logger("SigninState").create("toStorageString");
    return JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      url_state: this.url_state,
      code_verifier: this.code_verifier,
      authority: this.authority,
      client_id: this.client_id,
      redirect_uri: this.redirect_uri,
      scope: this.scope,
      client_secret: this.client_secret,
      extraTokenParams: this.extraTokenParams,
      response_mode: this.response_mode,
      skipUserInfo: this.skipUserInfo,
      nonce: this.nonce
    });
  }
  static fromStorageString(storageString) {
    Logger.createStatic("SigninState", "fromStorageString");
    const data = JSON.parse(storageString);
    return _SigninState.create(data);
  }
};

// src/SigninRequest.ts
var _SigninRequest = class _SigninRequest {
  constructor(args) {
    this.url = args.url;
    this.state = args.state;
  }
  static async create({
    // mandatory
    url,
    authority,
    client_id,
    redirect_uri,
    response_type,
    scope,
    // optional
    state_data,
    response_mode,
    request_type,
    client_secret,
    nonce,
    url_state,
    resource,
    skipUserInfo,
    extraQueryParams,
    extraTokenParams,
    disablePKCE,
    dpopJkt,
    omitScopeWhenRequesting,
    ...optionalParams
  }) {
    if (!url) {
      this._logger.error("create: No url passed");
      throw new Error("url");
    }
    if (!client_id) {
      this._logger.error("create: No client_id passed");
      throw new Error("client_id");
    }
    if (!redirect_uri) {
      this._logger.error("create: No redirect_uri passed");
      throw new Error("redirect_uri");
    }
    if (!response_type) {
      this._logger.error("create: No response_type passed");
      throw new Error("response_type");
    }
    if (!scope) {
      this._logger.error("create: No scope passed");
      throw new Error("scope");
    }
    if (!authority) {
      this._logger.error("create: No authority passed");
      throw new Error("authority");
    }
    const state = await SigninState.create({
      data: state_data,
      request_type,
      url_state,
      code_verifier: !disablePKCE,
      client_id,
      authority,
      redirect_uri,
      response_mode,
      client_secret,
      scope,
      extraTokenParams,
      skipUserInfo,
      nonce
    });
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.append("client_id", client_id);
    parsedUrl.searchParams.append("redirect_uri", redirect_uri);
    parsedUrl.searchParams.append("response_type", response_type);
    if (!omitScopeWhenRequesting) {
      parsedUrl.searchParams.append("scope", scope);
    }
    if (nonce) {
      parsedUrl.searchParams.append("nonce", nonce);
    }
    if (dpopJkt) {
      parsedUrl.searchParams.append("dpop_jkt", dpopJkt);
    }
    let stateParam = state.id;
    if (url_state) {
      stateParam = `${stateParam}${URL_STATE_DELIMITER}${url_state}`;
    }
    parsedUrl.searchParams.append("state", stateParam);
    if (state.code_challenge) {
      parsedUrl.searchParams.append("code_challenge", state.code_challenge);
      parsedUrl.searchParams.append("code_challenge_method", "S256");
    }
    if (resource) {
      const resources = Array.isArray(resource) ? resource : [resource];
      resources.forEach((r) => parsedUrl.searchParams.append("resource", r));
    }
    for (const [key, value] of Object.entries({ response_mode, ...optionalParams, ...extraQueryParams })) {
      if (value != null) {
        parsedUrl.searchParams.append(key, value.toString());
      }
    }
    return new _SigninRequest({
      url: parsedUrl.href,
      state
    });
  }
};
_SigninRequest._logger = new Logger("SigninRequest");
var SigninRequest = _SigninRequest;

// src/SigninResponse.ts
var OidcScope = "openid";
var SigninResponse = class {
  constructor(params) {
    /** @see {@link User.access_token} */
    this.access_token = "";
    /** @see {@link User.token_type} */
    this.token_type = "";
    /** @see {@link User.profile} */
    this.profile = {};
    this.state = params.get("state");
    this.session_state = params.get("session_state");
    if (this.state) {
      const splitState = decodeURIComponent(this.state).split(URL_STATE_DELIMITER);
      this.state = splitState[0];
      if (splitState.length > 1) {
        this.url_state = splitState.slice(1).join(URL_STATE_DELIMITER);
      }
    }
    this.error = params.get("error");
    this.error_description = params.get("error_description");
    this.error_uri = params.get("error_uri");
    this.code = params.get("code");
  }
  get expires_in() {
    if (this.expires_at === void 0) {
      return void 0;
    }
    return this.expires_at - Timer.getEpochTime();
  }
  set expires_in(value) {
    if (typeof value === "string") value = Number(value);
    if (value !== void 0 && value >= 0) {
      this.expires_at = Math.floor(value) + Timer.getEpochTime();
    }
  }
  get isOpenId() {
    var _a;
    return ((_a = this.scope) == null ? void 0 : _a.split(" ").includes(OidcScope)) || !!this.id_token;
  }
};

// src/SignoutRequest.ts
var SignoutRequest = class {
  constructor({
    url,
    state_data,
    id_token_hint,
    post_logout_redirect_uri,
    extraQueryParams,
    request_type,
    client_id,
    url_state
  }) {
    this._logger = new Logger("SignoutRequest");
    if (!url) {
      this._logger.error("ctor: No url passed");
      throw new Error("url");
    }
    const parsedUrl = new URL(url);
    if (id_token_hint) {
      parsedUrl.searchParams.append("id_token_hint", id_token_hint);
    }
    if (client_id) {
      parsedUrl.searchParams.append("client_id", client_id);
    }
    if (post_logout_redirect_uri) {
      parsedUrl.searchParams.append("post_logout_redirect_uri", post_logout_redirect_uri);
      if (state_data || url_state) {
        this.state = new State({ data: state_data, request_type, url_state });
        let stateParam = this.state.id;
        if (url_state) {
          stateParam = `${stateParam}${URL_STATE_DELIMITER}${url_state}`;
        }
        parsedUrl.searchParams.append("state", stateParam);
      }
    }
    for (const [key, value] of Object.entries({ ...extraQueryParams })) {
      if (value != null) {
        parsedUrl.searchParams.append(key, value.toString());
      }
    }
    this.url = parsedUrl.href;
  }
};

// src/SignoutResponse.ts
var SignoutResponse = class {
  constructor(params) {
    this.state = params.get("state");
    if (this.state) {
      const splitState = decodeURIComponent(this.state).split(URL_STATE_DELIMITER);
      this.state = splitState[0];
      if (splitState.length > 1) {
        this.url_state = splitState.slice(1).join(URL_STATE_DELIMITER);
      }
    }
    this.error = params.get("error");
    this.error_description = params.get("error_description");
    this.error_uri = params.get("error_uri");
  }
};

// src/ClaimsService.ts
var DefaultProtocolClaims = [
  "nbf",
  "jti",
  "auth_time",
  "nonce",
  "acr",
  "amr",
  "azp",
  "at_hash"
  // https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken
];
var InternalRequiredProtocolClaims = ["sub", "iss", "aud", "exp", "iat"];
var ClaimsService = class {
  constructor(_settings) {
    this._settings = _settings;
    this._logger = new Logger("ClaimsService");
  }
  filterProtocolClaims(claims) {
    const result = { ...claims };
    if (this._settings.filterProtocolClaims) {
      let protocolClaims;
      if (Array.isArray(this._settings.filterProtocolClaims)) {
        protocolClaims = this._settings.filterProtocolClaims;
      } else {
        protocolClaims = DefaultProtocolClaims;
      }
      for (const claim of protocolClaims) {
        if (!InternalRequiredProtocolClaims.includes(claim)) {
          delete result[claim];
        }
      }
    }
    return result;
  }
  mergeClaims(claims1, claims2) {
    const result = { ...claims1 };
    for (const [claim, values] of Object.entries(claims2)) {
      if (result[claim] !== values) {
        if (Array.isArray(result[claim]) || Array.isArray(values)) {
          if (this._settings.mergeClaimsStrategy.array == "replace") {
            result[claim] = values;
          } else {
            const mergedValues = Array.isArray(result[claim]) ? result[claim] : [result[claim]];
            for (const value of Array.isArray(values) ? values : [values]) {
              if (!mergedValues.includes(value)) {
                mergedValues.push(value);
              }
            }
            result[claim] = mergedValues;
          }
        } else if (typeof result[claim] === "object" && typeof values === "object") {
          result[claim] = this.mergeClaims(result[claim], values);
        } else {
          result[claim] = values;
        }
      }
    }
    return result;
  }
};

// src/DPoPStore.ts
var DPoPState = class {
  constructor(keys, nonce) {
    this.keys = keys;
    this.nonce = nonce;
  }
};

// src/OidcClient.ts
var OidcClient = class {
  constructor(settings, metadataService) {
    this._logger = new Logger("OidcClient");
    this.settings = settings instanceof OidcClientSettingsStore ? settings : new OidcClientSettingsStore(settings);
    this.metadataService = metadataService != null ? metadataService : new MetadataService(this.settings);
    this._claimsService = new ClaimsService(this.settings);
    this._validator = new ResponseValidator(this.settings, this.metadataService, this._claimsService);
    this._tokenClient = new TokenClient(this.settings, this.metadataService);
  }
  async createSigninRequest({
    state,
    request,
    request_uri,
    request_type,
    id_token_hint,
    login_hint,
    skipUserInfo,
    nonce,
    url_state,
    response_type = this.settings.response_type,
    scope = this.settings.scope,
    redirect_uri = this.settings.redirect_uri,
    prompt = this.settings.prompt,
    display = this.settings.display,
    max_age = this.settings.max_age,
    ui_locales = this.settings.ui_locales,
    acr_values = this.settings.acr_values,
    resource = this.settings.resource,
    response_mode = this.settings.response_mode,
    extraQueryParams = this.settings.extraQueryParams,
    extraTokenParams = this.settings.extraTokenParams,
    dpopJkt,
    omitScopeWhenRequesting = this.settings.omitScopeWhenRequesting
  }) {
    const logger2 = this._logger.create("createSigninRequest");
    if (response_type !== "code") {
      throw new Error("Only the Authorization Code flow (with PKCE) is supported");
    }
    const url = await this.metadataService.getAuthorizationEndpoint();
    logger2.debug("Received authorization endpoint", url);
    const signinRequest = await SigninRequest.create({
      url,
      authority: this.settings.authority,
      client_id: this.settings.client_id,
      redirect_uri,
      response_type,
      scope,
      state_data: state,
      url_state,
      prompt,
      display,
      max_age,
      ui_locales,
      id_token_hint,
      login_hint,
      acr_values,
      dpopJkt,
      resource,
      request,
      request_uri,
      extraQueryParams,
      extraTokenParams,
      request_type,
      response_mode,
      client_secret: this.settings.client_secret,
      skipUserInfo,
      nonce,
      disablePKCE: this.settings.disablePKCE,
      omitScopeWhenRequesting
    });
    await this.clearStaleState();
    const signinState = signinRequest.state;
    await this.settings.stateStore.set(signinState.id, signinState.toStorageString());
    return signinRequest;
  }
  async readSigninResponseState(url, removeState = false) {
    const logger2 = this._logger.create("readSigninResponseState");
    const response = new SigninResponse(UrlUtils.readParams(url, this.settings.response_mode));
    if (!response.state) {
      logger2.throw(new Error("No state in response"));
      throw null;
    }
    const storedStateString = await this.settings.stateStore[removeState ? "remove" : "get"](response.state);
    if (!storedStateString) {
      logger2.throw(new Error("No matching state found in storage"));
      throw null;
    }
    const state = await SigninState.fromStorageString(storedStateString);
    return { state, response };
  }
  async processSigninResponse(url, extraHeaders, removeState = true) {
    const logger2 = this._logger.create("processSigninResponse");
    const { state, response } = await this.readSigninResponseState(url, removeState);
    logger2.debug("received state from storage; validating response");
    if (this.settings.dpop && this.settings.dpop.store) {
      const dpopProof = await this.getDpopProof(this.settings.dpop.store);
      extraHeaders = { ...extraHeaders, "DPoP": dpopProof };
    }
    try {
      await this._validator.validateSigninResponse(response, state, extraHeaders);
    } catch (err) {
      if (err instanceof ErrorDPoPNonce && this.settings.dpop) {
        const dpopProof = await this.getDpopProof(this.settings.dpop.store, err.nonce);
        extraHeaders["DPoP"] = dpopProof;
        await this._validator.validateSigninResponse(response, state, extraHeaders);
      } else {
        throw err;
      }
    }
    return response;
  }
  async getDpopProof(dpopStore, nonce) {
    let keyPair;
    let dpopState;
    if (!(await dpopStore.getAllKeys()).includes(this.settings.client_id)) {
      keyPair = await CryptoUtils.generateDPoPKeys();
      dpopState = new DPoPState(keyPair, nonce);
      await dpopStore.set(this.settings.client_id, dpopState);
    } else {
      dpopState = await dpopStore.get(this.settings.client_id);
      if (dpopState.nonce !== nonce && nonce) {
        dpopState.nonce = nonce;
        await dpopStore.set(this.settings.client_id, dpopState);
      }
    }
    return await CryptoUtils.generateDPoPProof({
      url: await this.metadataService.getTokenEndpoint(false),
      httpMethod: "POST",
      keyPair: dpopState.keys,
      nonce: dpopState.nonce
    });
  }
  async processResourceOwnerPasswordCredentials({
    username,
    password,
    skipUserInfo = false,
    extraTokenParams = {}
  }) {
    const tokenResponse = await this._tokenClient.exchangeCredentials({ username, password, ...extraTokenParams });
    const signinResponse = new SigninResponse(new URLSearchParams());
    Object.assign(signinResponse, tokenResponse);
    await this._validator.validateCredentialsResponse(signinResponse, skipUserInfo);
    return signinResponse;
  }
  async useRefreshToken({
    state,
    redirect_uri,
    resource,
    timeoutInSeconds,
    extraHeaders,
    extraTokenParams
  }) {
    var _a;
    const logger2 = this._logger.create("useRefreshToken");
    let scope;
    if (this.settings.refreshTokenAllowedScope === void 0) {
      scope = state.scope;
    } else {
      const allowableScopes = this.settings.refreshTokenAllowedScope.split(" ");
      const providedScopes = ((_a = state.scope) == null ? void 0 : _a.split(" ")) || [];
      scope = providedScopes.filter((s) => allowableScopes.includes(s)).join(" ");
    }
    if (this.settings.dpop && this.settings.dpop.store) {
      const dpopProof = await this.getDpopProof(this.settings.dpop.store);
      extraHeaders = { ...extraHeaders, "DPoP": dpopProof };
    }
    let result;
    try {
      result = await this._tokenClient.exchangeRefreshToken({
        refresh_token: state.refresh_token,
        // provide the (possible filtered) scope list
        scope,
        redirect_uri,
        resource,
        timeoutInSeconds,
        extraHeaders,
        ...extraTokenParams
      });
    } catch (err) {
      if (err instanceof ErrorDPoPNonce && this.settings.dpop) {
        extraHeaders["DPoP"] = await this.getDpopProof(this.settings.dpop.store, err.nonce);
        result = await this._tokenClient.exchangeRefreshToken({
          refresh_token: state.refresh_token,
          // provide the (possible filtered) scope list
          scope,
          redirect_uri,
          resource,
          timeoutInSeconds,
          extraHeaders,
          ...extraTokenParams
        });
      } else {
        throw err;
      }
    }
    const response = new SigninResponse(new URLSearchParams());
    Object.assign(response, result);
    logger2.debug("validating response", response);
    await this._validator.validateRefreshResponse(response, {
      ...state,
      // override the scope in the state handed over to the validator
      // so it can set the granted scope to the requested scope in case none is included in the response
      scope
    });
    return response;
  }
  async createSignoutRequest({
    state,
    id_token_hint,
    client_id,
    request_type,
    url_state,
    post_logout_redirect_uri = this.settings.post_logout_redirect_uri,
    extraQueryParams = this.settings.extraQueryParams
  } = {}) {
    const logger2 = this._logger.create("createSignoutRequest");
    const url = await this.metadataService.getEndSessionEndpoint();
    if (!url) {
      logger2.throw(new Error("No end session endpoint"));
      throw null;
    }
    logger2.debug("Received end session endpoint", url);
    if (!client_id && post_logout_redirect_uri && !id_token_hint) {
      client_id = this.settings.client_id;
    }
    const request = new SignoutRequest({
      url,
      id_token_hint,
      client_id,
      post_logout_redirect_uri,
      state_data: state,
      extraQueryParams,
      request_type,
      url_state
    });
    await this.clearStaleState();
    const signoutState = request.state;
    if (signoutState) {
      logger2.debug("Signout request has state to persist");
      await this.settings.stateStore.set(signoutState.id, signoutState.toStorageString());
    }
    return request;
  }
  async readSignoutResponseState(url, removeState = false) {
    const logger2 = this._logger.create("readSignoutResponseState");
    const response = new SignoutResponse(UrlUtils.readParams(url, this.settings.response_mode));
    if (!response.state) {
      logger2.debug("No state in response");
      if (response.error) {
        logger2.warn("Response was error:", response.error);
        throw new ErrorResponse(response);
      }
      return { state: void 0, response };
    }
    const storedStateString = await this.settings.stateStore[removeState ? "remove" : "get"](response.state);
    if (!storedStateString) {
      logger2.throw(new Error("No matching state found in storage"));
      throw null;
    }
    const state = await State.fromStorageString(storedStateString);
    return { state, response };
  }
  async processSignoutResponse(url) {
    const logger2 = this._logger.create("processSignoutResponse");
    const { state, response } = await this.readSignoutResponseState(url, true);
    if (state) {
      logger2.debug("Received state from storage; validating response");
      this._validator.validateSignoutResponse(response, state);
    } else {
      logger2.debug("No state from storage; skipping response validation");
    }
    return response;
  }
  clearStaleState() {
    this._logger.create("clearStaleState");
    return State.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds);
  }
  async revokeToken(token, type) {
    this._logger.create("revokeToken");
    return await this._tokenClient.revoke({
      token,
      token_type_hint: type
    });
  }
};

// src/SessionMonitor.ts
var SessionMonitor = class {
  constructor(_userManager) {
    this._userManager = _userManager;
    this._logger = new Logger("SessionMonitor");
    this._start = async (user) => {
      const session_state = user.session_state;
      if (!session_state) {
        return;
      }
      const logger2 = this._logger.create("_start");
      if (user.profile) {
        this._sub = user.profile.sub;
        logger2.debug("session_state", session_state, ", sub", this._sub);
      } else {
        this._sub = void 0;
        logger2.debug("session_state", session_state, ", anonymous user");
      }
      if (this._checkSessionIFrame) {
        this._checkSessionIFrame.start(session_state);
        return;
      }
      try {
        const url = await this._userManager.metadataService.getCheckSessionIframe();
        if (url) {
          logger2.debug("initializing check session iframe");
          const client_id = this._userManager.settings.client_id;
          const intervalInSeconds = this._userManager.settings.checkSessionIntervalInSeconds;
          const stopOnError = this._userManager.settings.stopCheckSessionOnError;
          const checkSessionIFrame = new CheckSessionIFrame(this._callback, client_id, url, intervalInSeconds, stopOnError);
          await checkSessionIFrame.load();
          this._checkSessionIFrame = checkSessionIFrame;
          checkSessionIFrame.start(session_state);
        } else {
          logger2.warn("no check session iframe found in the metadata");
        }
      } catch (err) {
        logger2.error("Error from getCheckSessionIframe:", err instanceof Error ? err.message : err);
      }
    };
    this._stop = () => {
      const logger2 = this._logger.create("_stop");
      this._sub = void 0;
      if (this._checkSessionIFrame) {
        this._checkSessionIFrame.stop();
      }
      if (this._userManager.settings.monitorAnonymousSession) {
        const timerHandle = setInterval(async () => {
          clearInterval(timerHandle);
          try {
            const session = await this._userManager.querySessionStatus();
            if (session) {
              const tmpUser = {
                session_state: session.session_state,
                profile: session.sub ? {
                  sub: session.sub
                } : null
              };
              void this._start(tmpUser);
            }
          } catch (err) {
            logger2.error("error from querySessionStatus", err instanceof Error ? err.message : err);
          }
        }, 1e3);
      }
    };
    this._callback = async () => {
      const logger2 = this._logger.create("_callback");
      try {
        const session = await this._userManager.querySessionStatus();
        let raiseEvent = true;
        if (session && this._checkSessionIFrame) {
          if (session.sub === this._sub) {
            raiseEvent = false;
            this._checkSessionIFrame.start(session.session_state);
            logger2.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", session.session_state);
            await this._userManager.events._raiseUserSessionChanged();
          } else {
            logger2.debug("different subject signed into OP", session.sub);
          }
        } else {
          logger2.debug("subject no longer signed into OP");
        }
        if (raiseEvent) {
          if (this._sub) {
            await this._userManager.events._raiseUserSignedOut();
          } else {
            await this._userManager.events._raiseUserSignedIn();
          }
        } else {
          logger2.debug("no change in session detected, no event to raise");
        }
      } catch (err) {
        if (this._sub) {
          logger2.debug("Error calling queryCurrentSigninSession; raising signed out event", err);
          await this._userManager.events._raiseUserSignedOut();
        }
      }
    };
    if (!_userManager) {
      this._logger.throw(new Error("No user manager passed"));
    }
    this._userManager.events.addUserLoaded(this._start);
    this._userManager.events.addUserUnloaded(this._stop);
    this._init().catch((err) => {
      this._logger.error(err);
    });
  }
  async _init() {
    this._logger.create("_init");
    const user = await this._userManager.getUser();
    if (user) {
      void this._start(user);
    } else if (this._userManager.settings.monitorAnonymousSession) {
      const session = await this._userManager.querySessionStatus();
      if (session) {
        const tmpUser = {
          session_state: session.session_state,
          profile: session.sub ? {
            sub: session.sub
          } : null
        };
        void this._start(tmpUser);
      }
    }
  }
};

// src/User.ts
var User = class _User {
  constructor(args) {
    var _a;
    this.id_token = args.id_token;
    this.session_state = (_a = args.session_state) != null ? _a : null;
    this.access_token = args.access_token;
    this.refresh_token = args.refresh_token;
    this.token_type = args.token_type;
    this.scope = args.scope;
    this.profile = args.profile;
    this.expires_at = args.expires_at;
    this.state = args.userState;
    this.url_state = args.url_state;
  }
  /** Computed number of seconds the access token has remaining. */
  get expires_in() {
    if (this.expires_at === void 0) {
      return void 0;
    }
    return this.expires_at - Timer.getEpochTime();
  }
  set expires_in(value) {
    if (value !== void 0) {
      this.expires_at = Math.floor(value) + Timer.getEpochTime();
    }
  }
  /** Computed value indicating if the access token is expired. */
  get expired() {
    const expires_in = this.expires_in;
    if (expires_in === void 0) {
      return void 0;
    }
    return expires_in <= 0;
  }
  /** Array representing the parsed values from the `scope`. */
  get scopes() {
    var _a, _b;
    return (_b = (_a = this.scope) == null ? void 0 : _a.split(" ")) != null ? _b : [];
  }
  toStorageString() {
    new Logger("User").create("toStorageString");
    return JSON.stringify({
      id_token: this.id_token,
      session_state: this.session_state,
      access_token: this.access_token,
      refresh_token: this.refresh_token,
      token_type: this.token_type,
      scope: this.scope,
      profile: this.profile,
      expires_at: this.expires_at
    });
  }
  static fromStorageString(storageString) {
    Logger.createStatic("User", "fromStorageString");
    return new _User(JSON.parse(storageString));
  }
};

// src/navigators/AbstractChildWindow.ts
var messageSource = "oidc-client";
var AbstractChildWindow = class {
  constructor() {
    this._abort = new Event("Window navigation aborted");
    this._disposeHandlers = /* @__PURE__ */ new Set();
    this._window = null;
  }
  async navigate(params) {
    const logger2 = this._logger.create("navigate");
    if (!this._window) {
      throw new Error("Attempted to navigate on a disposed window");
    }
    logger2.debug("setting URL in window");
    this._window.location.replace(params.url);
    const { url, keepOpen } = await new Promise((resolve, reject) => {
      const listener = (e) => {
        var _a;
        const data = e.data;
        const origin = (_a = params.scriptOrigin) != null ? _a : window.location.origin;
        if (e.origin !== origin || (data == null ? void 0 : data.source) !== messageSource) {
          return;
        }
        try {
          const state = UrlUtils.readParams(data.url, params.response_mode).get("state");
          if (!state) {
            logger2.warn("no state found in response url");
          }
          if (e.source !== this._window && state !== params.state) {
            return;
          }
        } catch {
          this._dispose();
          reject(new Error("Invalid response from window"));
        }
        resolve(data);
      };
      window.addEventListener("message", listener, false);
      this._disposeHandlers.add(() => window.removeEventListener("message", listener, false));
      const channel = new BroadcastChannel(`oidc-client-popup-${params.state}`);
      channel.addEventListener("message", listener, false);
      this._disposeHandlers.add(() => channel.close());
      this._disposeHandlers.add(this._abort.addHandler((reason) => {
        this._dispose();
        reject(reason);
      }));
    });
    logger2.debug("got response from window");
    this._dispose();
    if (!keepOpen) {
      this.close();
    }
    return { url };
  }
  _dispose() {
    this._logger.create("_dispose");
    for (const dispose of this._disposeHandlers) {
      dispose();
    }
    this._disposeHandlers.clear();
  }
  static _notifyParent(parent, url, keepOpen = false, targetOrigin = window.location.origin) {
    const msgData = {
      source: messageSource,
      url,
      keepOpen
    };
    const logger2 = new Logger("_notifyParent");
    if (parent) {
      logger2.debug("With parent. Using parent.postMessage.");
      parent.postMessage(msgData, targetOrigin);
    } else {
      logger2.debug("No parent. Using BroadcastChannel.");
      const state = new URL(url).searchParams.get("state");
      if (!state) {
        throw new Error("No parent and no state in URL. Can't complete notification.");
      }
      const channel = new BroadcastChannel(`oidc-client-popup-${state}`);
      channel.postMessage(msgData);
      channel.close();
    }
  }
};

// src/UserManagerSettings.ts
var DefaultPopupWindowFeatures = {
  location: false,
  toolbar: false,
  height: 640,
  closePopupWindowAfterInSeconds: -1
};
var DefaultPopupTarget = "_blank";
var DefaultAccessTokenExpiringNotificationTimeInSeconds = 60;
var DefaultCheckSessionIntervalInSeconds = 2;
var DefaultSilentRequestTimeoutInSeconds = 10;
var UserManagerSettingsStore = class extends OidcClientSettingsStore {
  constructor(args) {
    const {
      popup_redirect_uri = args.redirect_uri,
      popup_post_logout_redirect_uri = args.post_logout_redirect_uri,
      popupWindowFeatures = DefaultPopupWindowFeatures,
      popupWindowTarget = DefaultPopupTarget,
      redirectMethod = "assign",
      redirectTarget = "self",
      iframeNotifyParentOrigin = args.iframeNotifyParentOrigin,
      iframeScriptOrigin = args.iframeScriptOrigin,
      requestTimeoutInSeconds,
      silent_redirect_uri = args.redirect_uri,
      silentRequestTimeoutInSeconds,
      automaticSilentRenew = true,
      validateSubOnSilentRenew = true,
      includeIdTokenInSilentRenew = false,
      monitorSession = false,
      monitorAnonymousSession = false,
      checkSessionIntervalInSeconds = DefaultCheckSessionIntervalInSeconds,
      query_status_response_type = "code",
      stopCheckSessionOnError = true,
      revokeTokenTypes = ["access_token", "refresh_token"],
      revokeTokensOnSignout = false,
      includeIdTokenInSilentSignout = false,
      accessTokenExpiringNotificationTimeInSeconds = DefaultAccessTokenExpiringNotificationTimeInSeconds,
      maxSilentRenewTimeoutRetries,
      userStore
    } = args;
    super(args);
    this.popup_redirect_uri = popup_redirect_uri;
    this.popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
    this.popupWindowFeatures = popupWindowFeatures;
    this.popupWindowTarget = popupWindowTarget;
    this.redirectMethod = redirectMethod;
    this.redirectTarget = redirectTarget;
    this.iframeNotifyParentOrigin = iframeNotifyParentOrigin;
    this.iframeScriptOrigin = iframeScriptOrigin;
    this.silent_redirect_uri = silent_redirect_uri;
    this.silentRequestTimeoutInSeconds = silentRequestTimeoutInSeconds || requestTimeoutInSeconds || DefaultSilentRequestTimeoutInSeconds;
    this.automaticSilentRenew = automaticSilentRenew;
    this.validateSubOnSilentRenew = validateSubOnSilentRenew;
    this.includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
    this.monitorSession = monitorSession;
    this.monitorAnonymousSession = monitorAnonymousSession;
    this.checkSessionIntervalInSeconds = checkSessionIntervalInSeconds;
    this.stopCheckSessionOnError = stopCheckSessionOnError;
    this.query_status_response_type = query_status_response_type;
    this.revokeTokenTypes = revokeTokenTypes;
    this.revokeTokensOnSignout = revokeTokensOnSignout;
    this.includeIdTokenInSilentSignout = includeIdTokenInSilentSignout;
    this.accessTokenExpiringNotificationTimeInSeconds = accessTokenExpiringNotificationTimeInSeconds;
    this.maxSilentRenewTimeoutRetries = maxSilentRenewTimeoutRetries;
    if (userStore) {
      this.userStore = userStore;
    } else {
      const store = typeof window !== "undefined" ? window.sessionStorage : new InMemoryWebStorage();
      this.userStore = new WebStorageStateStore({ store });
    }
  }
};

// src/navigators/IFrameWindow.ts
var IFrameWindow = class _IFrameWindow extends AbstractChildWindow {
  constructor({
    silentRequestTimeoutInSeconds = DefaultSilentRequestTimeoutInSeconds
  }) {
    super();
    this._logger = new Logger("IFrameWindow");
    this._timeoutInSeconds = silentRequestTimeoutInSeconds;
    this._frame = _IFrameWindow.createHiddenIframe();
    this._window = this._frame.contentWindow;
  }
  static createHiddenIframe() {
    const iframe = window.document.createElement("iframe");
    iframe.style.visibility = "hidden";
    iframe.style.position = "fixed";
    iframe.style.left = "-1000px";
    iframe.style.top = "0";
    iframe.width = "0";
    iframe.height = "0";
    window.document.body.appendChild(iframe);
    return iframe;
  }
  async navigate(params) {
    this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
    const timer = setTimeout(() => void this._abort.raise(new ErrorTimeout("IFrame timed out without a response")), this._timeoutInSeconds * 1e3);
    this._disposeHandlers.add(() => clearTimeout(timer));
    return await super.navigate(params);
  }
  close() {
    var _a;
    if (this._frame) {
      if (this._frame.parentNode) {
        this._frame.addEventListener("load", (ev) => {
          var _a2;
          const frame = ev.target;
          (_a2 = frame.parentNode) == null ? void 0 : _a2.removeChild(frame);
          void this._abort.raise(new Error("IFrame removed from DOM"));
        }, true);
        (_a = this._frame.contentWindow) == null ? void 0 : _a.location.replace("about:blank");
      }
      this._frame = null;
    }
    this._window = null;
  }
  static notifyParent(url, targetOrigin) {
    return super._notifyParent(window.parent, url, false, targetOrigin);
  }
};

// src/navigators/IFrameNavigator.ts
var IFrameNavigator = class {
  constructor(_settings) {
    this._settings = _settings;
    this._logger = new Logger("IFrameNavigator");
  }
  async prepare({
    silentRequestTimeoutInSeconds = this._settings.silentRequestTimeoutInSeconds
  }) {
    return new IFrameWindow({ silentRequestTimeoutInSeconds });
  }
  async callback(url) {
    this._logger.create("callback");
    IFrameWindow.notifyParent(url, this._settings.iframeNotifyParentOrigin);
  }
};

// src/navigators/PopupWindow.ts
var checkForPopupClosedInterval = 500;
var second = 1e3;
var PopupWindow = class extends AbstractChildWindow {
  constructor({
    popupWindowTarget = DefaultPopupTarget,
    popupWindowFeatures = {},
    popupSignal,
    popupAbortOnClose
  }) {
    super();
    this._logger = new Logger("PopupWindow");
    const centeredPopup = PopupUtils.center({ ...DefaultPopupWindowFeatures, ...popupWindowFeatures });
    this._window = window.open(void 0, popupWindowTarget, PopupUtils.serialize(centeredPopup));
    this.abortOnClose = Boolean(popupAbortOnClose);
    if (popupSignal) {
      popupSignal.addEventListener("abort", () => {
        var _a;
        void this._abort.raise(new Error((_a = popupSignal.reason) != null ? _a : "Popup aborted"));
      });
    }
    if (popupWindowFeatures.closePopupWindowAfterInSeconds && popupWindowFeatures.closePopupWindowAfterInSeconds > 0) {
      setTimeout(() => {
        if (!this._window || typeof this._window.closed !== "boolean" || this._window.closed) {
          void this._abort.raise(new Error("Popup blocked by user"));
          return;
        }
        this.close();
      }, popupWindowFeatures.closePopupWindowAfterInSeconds * second);
    }
  }
  async navigate(params) {
    var _a;
    (_a = this._window) == null ? void 0 : _a.focus();
    const popupClosedInterval = setInterval(() => {
      if (!this._window || this._window.closed) {
        this._logger.debug("Popup closed by user or isolated by redirect");
        clearPopupClosedInterval();
        this._disposeHandlers.delete(clearPopupClosedInterval);
        if (this.abortOnClose) {
          void this._abort.raise(new Error("Popup closed by user"));
        }
      }
    }, checkForPopupClosedInterval);
    const clearPopupClosedInterval = () => clearInterval(popupClosedInterval);
    this._disposeHandlers.add(clearPopupClosedInterval);
    return await super.navigate(params);
  }
  close() {
    if (this._window) {
      if (!this._window.closed) {
        this._window.close();
        void this._abort.raise(new Error("Popup closed"));
      }
    }
    this._window = null;
  }
  static notifyOpener(url, keepOpen) {
    super._notifyParent(window.opener, url, keepOpen);
    if (!keepOpen && !window.opener) {
      window.close();
    }
  }
};

// src/navigators/PopupNavigator.ts
var PopupNavigator = class {
  constructor(_settings) {
    this._settings = _settings;
    this._logger = new Logger("PopupNavigator");
  }
  async prepare({
    popupWindowFeatures = this._settings.popupWindowFeatures,
    popupWindowTarget = this._settings.popupWindowTarget,
    popupSignal,
    popupAbortOnClose
  }) {
    return new PopupWindow({
      popupWindowFeatures,
      popupWindowTarget,
      popupSignal,
      popupAbortOnClose
    });
  }
  async callback(url, { keepOpen = false }) {
    this._logger.create("callback");
    PopupWindow.notifyOpener(url, keepOpen);
  }
};

// src/navigators/RedirectNavigator.ts
var RedirectNavigator = class {
  constructor(_settings) {
    this._settings = _settings;
    this._logger = new Logger("RedirectNavigator");
  }
  async prepare({
    redirectMethod = this._settings.redirectMethod,
    redirectTarget = this._settings.redirectTarget
  }) {
    var _a;
    this._logger.create("prepare");
    let targetWindow = window.self;
    if (redirectTarget === "top") {
      targetWindow = (_a = window.top) != null ? _a : window.self;
    }
    const redirect = targetWindow.location[redirectMethod].bind(targetWindow.location);
    let abort;
    return {
      navigate: async (params) => {
        this._logger.create("navigate");
        const promise = new Promise((resolve, reject) => {
          abort = reject;
          window.addEventListener("pageshow", () => resolve(window.location.href));
          redirect(params.url);
        });
        return await promise;
      },
      close: () => {
        this._logger.create("close");
        abort == null ? void 0 : abort(new Error("Redirect aborted"));
        targetWindow.stop();
      }
    };
  }
  async callback() {
    return;
  }
};

// src/UserManagerEvents.ts
var UserManagerEvents = class extends AccessTokenEvents {
  constructor(settings) {
    super({ expiringNotificationTimeInSeconds: settings.accessTokenExpiringNotificationTimeInSeconds });
    this._logger = new Logger("UserManagerEvents");
    this._userLoaded = new Event("User loaded");
    this._userUnloaded = new Event("User unloaded");
    this._silentRenewError = new Event("Silent renew error");
    this._userSignedIn = new Event("User signed in");
    this._userSignedOut = new Event("User signed out");
    this._userSessionChanged = new Event("User session changed");
  }
  async load(user, raiseEvent = true) {
    await super.load(user);
    if (raiseEvent) {
      await this._userLoaded.raise(user);
    }
  }
  async unload() {
    await super.unload();
    await this._userUnloaded.raise();
  }
  /**
   * Add callback: Raised when a user session has been established (or re-established).
   */
  addUserLoaded(cb) {
    return this._userLoaded.addHandler(cb);
  }
  /**
   * Remove callback: Raised when a user session has been established (or re-established).
   */
  removeUserLoaded(cb) {
    return this._userLoaded.removeHandler(cb);
  }
  /**
   * Add callback: Raised when a user session has been terminated.
   */
  addUserUnloaded(cb) {
    return this._userUnloaded.addHandler(cb);
  }
  /**
   * Remove callback: Raised when a user session has been terminated.
   */
  removeUserUnloaded(cb) {
    return this._userUnloaded.removeHandler(cb);
  }
  /**
   * Add callback: Raised when the automatic silent renew has failed.
   */
  addSilentRenewError(cb) {
    return this._silentRenewError.addHandler(cb);
  }
  /**
   * Remove callback: Raised when the automatic silent renew has failed.
   */
  removeSilentRenewError(cb) {
    return this._silentRenewError.removeHandler(cb);
  }
  /**
   * @internal
   */
  async _raiseSilentRenewError(e) {
    await this._silentRenewError.raise(e);
  }
  /**
   * Add callback: Raised when the user is signed in (when `monitorSession` is set).
   * @see {@link UserManagerSettings.monitorSession}
   */
  addUserSignedIn(cb) {
    return this._userSignedIn.addHandler(cb);
  }
  /**
   * Remove callback: Raised when the user is signed in (when `monitorSession` is set).
   */
  removeUserSignedIn(cb) {
    this._userSignedIn.removeHandler(cb);
  }
  /**
   * @internal
   */
  async _raiseUserSignedIn() {
    await this._userSignedIn.raise();
  }
  /**
   * Add callback: Raised when the user's sign-in status at the OP has changed (when `monitorSession` is set).
   * @see {@link UserManagerSettings.monitorSession}
   */
  addUserSignedOut(cb) {
    return this._userSignedOut.addHandler(cb);
  }
  /**
   * Remove callback: Raised when the user's sign-in status at the OP has changed (when `monitorSession` is set).
   */
  removeUserSignedOut(cb) {
    this._userSignedOut.removeHandler(cb);
  }
  /**
   * @internal
   */
  async _raiseUserSignedOut() {
    await this._userSignedOut.raise();
  }
  /**
   * Add callback: Raised when the user session changed (when `monitorSession` is set).
   * @see {@link UserManagerSettings.monitorSession}
   */
  addUserSessionChanged(cb) {
    return this._userSessionChanged.addHandler(cb);
  }
  /**
   * Remove callback: Raised when the user session changed (when `monitorSession` is set).
   */
  removeUserSessionChanged(cb) {
    this._userSessionChanged.removeHandler(cb);
  }
  /**
   * @internal
   */
  async _raiseUserSessionChanged() {
    await this._userSessionChanged.raise();
  }
};

// src/SilentRenewService.ts
var SilentRenewService = class {
  constructor(_userManager) {
    this._userManager = _userManager;
    this._logger = new Logger("SilentRenewService");
    this._isStarted = false;
    this._retryTimer = new Timer("Retry Silent Renew");
    this._timeoutRetryCount = 0;
    this._tokenExpiring = async () => {
      const logger2 = this._logger.create("_tokenExpiring");
      try {
        await this._userManager.signinSilent();
        this._timeoutRetryCount = 0;
        logger2.debug("silent token renewal successful");
      } catch (err) {
        if (err instanceof ErrorTimeout) {
          this._timeoutRetryCount++;
          const maxRetries = this._userManager.settings.maxSilentRenewTimeoutRetries;
          const hasReachedLimit = maxRetries !== void 0 && this._timeoutRetryCount > maxRetries;
          if (hasReachedLimit) {
            logger2.error(
              `Timeout retry limit reached (${this._timeoutRetryCount} > ${maxRetries}), raising silentRenewError:`,
              err
            );
            this._timeoutRetryCount = 0;
            await this._userManager.events._raiseSilentRenewError(err);
            return;
          }
          logger2.warn(
            `ErrorTimeout from signinSilent (attempt ${this._timeoutRetryCount}), retry in 5s:`,
            err
          );
          this._retryTimer.init(5);
          return;
        }
        logger2.error("Error from signinSilent:", err);
        this._timeoutRetryCount = 0;
        await this._userManager.events._raiseSilentRenewError(err);
      }
    };
  }
  async start() {
    const logger2 = this._logger.create("start");
    if (!this._isStarted) {
      this._isStarted = true;
      this._userManager.events.addAccessTokenExpiring(this._tokenExpiring);
      this._retryTimer.addHandler(this._tokenExpiring);
      try {
        await this._userManager.getUser();
      } catch (err) {
        logger2.error("getUser error", err);
      }
    }
  }
  stop() {
    if (this._isStarted) {
      this._retryTimer.cancel();
      this._retryTimer.removeHandler(this._tokenExpiring);
      this._userManager.events.removeAccessTokenExpiring(this._tokenExpiring);
      this._isStarted = false;
    }
  }
};

// src/RefreshState.ts
var RefreshState = class {
  constructor(args) {
    this.refresh_token = args.refresh_token;
    this.id_token = args.id_token;
    this.session_state = args.session_state;
    this.scope = args.scope;
    this.profile = args.profile;
    this.data = args.state;
  }
};

// src/UserManager.ts
var UserManager = class {
  constructor(settings, redirectNavigator, popupNavigator, iframeNavigator) {
    this._logger = new Logger("UserManager");
    this.settings = new UserManagerSettingsStore(settings);
    this._client = new OidcClient(settings);
    this._redirectNavigator = redirectNavigator != null ? redirectNavigator : new RedirectNavigator(this.settings);
    this._popupNavigator = popupNavigator != null ? popupNavigator : new PopupNavigator(this.settings);
    this._iframeNavigator = iframeNavigator != null ? iframeNavigator : new IFrameNavigator(this.settings);
    this._events = new UserManagerEvents(this.settings);
    this._silentRenewService = new SilentRenewService(this);
    if (this.settings.automaticSilentRenew) {
      this.startSilentRenew();
    }
    this._sessionMonitor = null;
    if (this.settings.monitorSession) {
      this._sessionMonitor = new SessionMonitor(this);
    }
  }
  /**
   * Get object used to register for events raised by the `UserManager`.
   */
  get events() {
    return this._events;
  }
  /**
   * Get object used to access the metadata configuration of the identity provider.
   */
  get metadataService() {
    return this._client.metadataService;
  }
  /**
   * Load the `User` object for the currently authenticated user.
   *
   * @param raiseEvent - If `true`, the `UserLoaded` event will be raised. Defaults to false.
   * @returns A promise
   */
  async getUser(raiseEvent = false) {
    const logger2 = this._logger.create("getUser");
    const user = await this._loadUser();
    if (user) {
      logger2.info("user loaded");
      await this._events.load(user, raiseEvent);
      return user;
    }
    logger2.info("user not found in storage");
    return null;
  }
  /**
   * Remove from any storage the currently authenticated user.
   *
   * @returns A promise
   */
  async removeUser() {
    const logger2 = this._logger.create("removeUser");
    await this.storeUser(null);
    logger2.info("user removed from storage");
    await this._events.unload();
  }
  /**
   * Trigger a redirect of the current window to the authorization endpoint.
   *
   * @returns A promise
   *
   * @throws `Error` In cases of wrong authentication.
   */
  async signinRedirect(args = {}) {
    var _a;
    this._logger.create("signinRedirect");
    const {
      redirectMethod,
      ...requestArgs
    } = args;
    let dpopJkt;
    if ((_a = this.settings.dpop) == null ? void 0 : _a.bind_authorization_code) {
      dpopJkt = await this.generateDPoPJkt(this.settings.dpop);
    }
    const handle = await this._redirectNavigator.prepare({ redirectMethod });
    await this._signinStart({
      request_type: "si:r",
      dpopJkt,
      ...requestArgs
    }, handle);
  }
  /**
   * Process the response (callback) from the authorization endpoint.
   * It is recommended to use {@link UserManager.signinCallback} instead.
   *
   * @returns A promise containing the authenticated `User`.
   *
   * @see {@link UserManager.signinCallback}
   */
  async signinRedirectCallback(url = window.location.href) {
    const logger2 = this._logger.create("signinRedirectCallback");
    const user = await this._signinEnd(url);
    if (user.profile && user.profile.sub) {
      logger2.info("success, signed in subject", user.profile.sub);
    } else {
      logger2.info("no subject");
    }
    return user;
  }
  /**
   * Trigger the signin with user/password.
   *
   * @returns A promise containing the authenticated `User`.
   * @throws {@link ErrorResponse} In cases of wrong authentication.
   */
  async signinResourceOwnerCredentials({
    username,
    password,
    skipUserInfo = false
  }) {
    const logger2 = this._logger.create("signinResourceOwnerCredential");
    const signinResponse = await this._client.processResourceOwnerPasswordCredentials({
      username,
      password,
      skipUserInfo,
      extraTokenParams: this.settings.extraTokenParams
    });
    logger2.debug("got signin response");
    const user = await this._buildUser(signinResponse);
    if (user.profile && user.profile.sub) {
      logger2.info("success, signed in subject", user.profile.sub);
    } else {
      logger2.info("no subject");
    }
    return user;
  }
  /**
   * Trigger a request (via a popup window) to the authorization endpoint.
   *
   * @returns A promise containing the authenticated `User`.
   * @throws `Error` In cases of wrong authentication.
   */
  async signinPopup(args = {}) {
    var _a;
    const logger2 = this._logger.create("signinPopup");
    let dpopJkt;
    if ((_a = this.settings.dpop) == null ? void 0 : _a.bind_authorization_code) {
      dpopJkt = await this.generateDPoPJkt(this.settings.dpop);
    }
    const {
      popupWindowFeatures,
      popupWindowTarget,
      popupSignal,
      popupAbortOnClose,
      ...requestArgs
    } = args;
    const url = this.settings.popup_redirect_uri;
    if (!url) {
      logger2.throw(new Error("No popup_redirect_uri configured"));
    }
    const handle = await this._popupNavigator.prepare({ popupWindowFeatures, popupWindowTarget, popupSignal, popupAbortOnClose });
    const user = await this._signin({
      request_type: "si:p",
      redirect_uri: url,
      display: "popup",
      dpopJkt,
      ...requestArgs
    }, handle);
    if (user) {
      if (user.profile && user.profile.sub) {
        logger2.info("success, signed in subject", user.profile.sub);
      } else {
        logger2.info("no subject");
      }
    }
    return user;
  }
  /**
   * Notify the opening window of response (callback) from the authorization endpoint.
   * It is recommended to use {@link UserManager.signinCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signinCallback}
   */
  async signinPopupCallback(url = window.location.href, keepOpen = false) {
    const logger2 = this._logger.create("signinPopupCallback");
    await this._popupNavigator.callback(url, { keepOpen });
    logger2.info("success");
  }
  /**
   * Trigger a silent request (via refresh token or an iframe) to the authorization endpoint.
   *
   * @returns A promise that contains the authenticated `User`.
   */
  async signinSilent(args = {}) {
    var _a, _b;
    const logger2 = this._logger.create("signinSilent");
    const {
      silentRequestTimeoutInSeconds,
      ...requestArgs
    } = args;
    let user = await this._loadUser();
    if (!args.forceIframeAuth && (user == null ? void 0 : user.refresh_token)) {
      logger2.debug("using refresh token");
      const state = new RefreshState(user);
      return await this._useRefreshToken({
        state,
        redirect_uri: requestArgs.redirect_uri,
        resource: requestArgs.resource,
        extraTokenParams: requestArgs.extraTokenParams,
        timeoutInSeconds: silentRequestTimeoutInSeconds
      });
    }
    let dpopJkt;
    if ((_a = this.settings.dpop) == null ? void 0 : _a.bind_authorization_code) {
      dpopJkt = await this.generateDPoPJkt(this.settings.dpop);
    }
    const url = this.settings.silent_redirect_uri;
    if (!url) {
      logger2.throw(new Error("No silent_redirect_uri configured"));
    }
    let verifySub;
    if (user && this.settings.validateSubOnSilentRenew) {
      logger2.debug("subject prior to silent renew:", user.profile.sub);
      verifySub = user.profile.sub;
    }
    const handle = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds });
    user = await this._signin({
      request_type: "si:s",
      redirect_uri: url,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? user == null ? void 0 : user.id_token : void 0,
      dpopJkt,
      ...requestArgs
    }, handle, verifySub);
    if (user) {
      if ((_b = user.profile) == null ? void 0 : _b.sub) {
        logger2.info("success, signed in subject", user.profile.sub);
      } else {
        logger2.info("no subject");
      }
    }
    return user;
  }
  async _useRefreshToken(args) {
    const response = await this._client.useRefreshToken({
      timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds,
      ...args
    });
    const user = new User({ ...args.state, ...response });
    await this.storeUser(user);
    await this._events.load(user);
    return user;
  }
  /**
   *
   * Notify the parent window of response (callback) from the authorization endpoint.
   * It is recommended to use {@link UserManager.signinCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signinCallback}
   */
  async signinSilentCallback(url = window.location.href) {
    const logger2 = this._logger.create("signinSilentCallback");
    await this._iframeNavigator.callback(url);
    logger2.info("success");
  }
  /**
   * Process any response (callback) from the authorization endpoint, by dispatching the request_type
   * and executing one of the following functions:
   * - {@link UserManager.signinRedirectCallback}
   * - {@link UserManager.signinPopupCallback}
   * - {@link UserManager.signinSilentCallback}
   *
   * @throws `Error` If request_type is unknown or signin cannot be processed.
   */
  async signinCallback(url = window.location.href) {
    const { state } = await this._client.readSigninResponseState(url);
    switch (state.request_type) {
      case "si:r":
        return await this.signinRedirectCallback(url);
      case "si:p":
        await this.signinPopupCallback(url);
        break;
      case "si:s":
        await this.signinSilentCallback(url);
        break;
      default:
        throw new Error("invalid request_type in state");
    }
    return void 0;
  }
  /**
   * Process any response (callback) from the end session endpoint, by dispatching the request_type
   * and executing one of the following functions:
   * - {@link UserManager.signoutRedirectCallback}
   * - {@link UserManager.signoutPopupCallback}
   * - {@link UserManager.signoutSilentCallback}
   *
   * @throws `Error` If request_type is unknown or signout cannot be processed.
   */
  async signoutCallback(url = window.location.href, keepOpen = false) {
    const { state } = await this._client.readSignoutResponseState(url);
    if (!state) {
      return void 0;
    }
    switch (state.request_type) {
      case "so:r":
        return await this.signoutRedirectCallback(url);
      case "so:p":
        await this.signoutPopupCallback(url, keepOpen);
        break;
      case "so:s":
        await this.signoutSilentCallback(url);
        break;
      default:
        throw new Error("invalid request_type in state");
    }
    return void 0;
  }
  /**
   * Query OP for user's current signin status.
   *
   * @returns A promise object with session_state and subject identifier.
   */
  async querySessionStatus(args = {}) {
    const logger2 = this._logger.create("querySessionStatus");
    const {
      silentRequestTimeoutInSeconds,
      ...requestArgs
    } = args;
    const url = this.settings.silent_redirect_uri;
    if (!url) {
      logger2.throw(new Error("No silent_redirect_uri configured"));
    }
    const user = await this._loadUser();
    const handle = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds });
    const navResponse = await this._signinStart({
      request_type: "si:s",
      // this acts like a signin silent
      redirect_uri: url,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? user == null ? void 0 : user.id_token : void 0,
      response_type: this.settings.query_status_response_type,
      scope: "openid",
      skipUserInfo: true,
      ...requestArgs
    }, handle);
    try {
      const extraHeaders = {};
      const signinResponse = await this._client.processSigninResponse(navResponse.url, extraHeaders);
      logger2.debug("got signin response");
      if (signinResponse.session_state && signinResponse.profile.sub) {
        logger2.info("success for subject", signinResponse.profile.sub);
        return {
          session_state: signinResponse.session_state,
          sub: signinResponse.profile.sub
        };
      }
      logger2.info("success, user not authenticated");
      return null;
    } catch (err) {
      if (this.settings.monitorAnonymousSession && err instanceof ErrorResponse) {
        switch (err.error) {
          case "login_required":
          case "consent_required":
          case "interaction_required":
          case "account_selection_required":
            logger2.info("success for anonymous user");
            return {
              session_state: err.session_state
            };
        }
      }
      throw err;
    }
  }
  async _signin(args, handle, verifySub) {
    const navResponse = await this._signinStart(args, handle);
    return await this._signinEnd(navResponse.url, verifySub);
  }
  async _signinStart(args, handle) {
    const logger2 = this._logger.create("_signinStart");
    try {
      const signinRequest = await this._client.createSigninRequest(args);
      logger2.debug("got signin request");
      return await handle.navigate({
        url: signinRequest.url,
        state: signinRequest.state.id,
        response_mode: signinRequest.state.response_mode,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (err) {
      logger2.debug("error after preparing navigator, closing navigator window");
      handle.close();
      throw err;
    }
  }
  async _signinEnd(url, verifySub) {
    const logger2 = this._logger.create("_signinEnd");
    const extraHeaders = {};
    const signinResponse = await this._client.processSigninResponse(url, extraHeaders);
    logger2.debug("got signin response");
    const user = await this._buildUser(signinResponse, verifySub);
    return user;
  }
  async _buildUser(signinResponse, verifySub) {
    const logger2 = this._logger.create("_buildUser");
    const user = new User(signinResponse);
    if (verifySub) {
      if (verifySub !== user.profile.sub) {
        logger2.debug("current user does not match user returned from signin. sub from signin:", user.profile.sub);
        throw new ErrorResponse({ ...signinResponse, error: "login_required" });
      }
      logger2.debug("current user matches user returned from signin");
    }
    await this.storeUser(user);
    logger2.debug("user stored");
    await this._events.load(user);
    return user;
  }
  /**
   * Trigger a redirect of the current window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutRedirect(args = {}) {
    const logger2 = this._logger.create("signoutRedirect");
    const {
      redirectMethod,
      ...requestArgs
    } = args;
    const handle = await this._redirectNavigator.prepare({ redirectMethod });
    await this._signoutStart({
      request_type: "so:r",
      post_logout_redirect_uri: this.settings.post_logout_redirect_uri,
      ...requestArgs
    }, handle);
    logger2.info("success");
  }
  /**
   * Process response (callback) from the end session endpoint.
   * It is recommended to use {@link UserManager.signoutCallback} instead.
   *
   * @returns A promise containing signout response
   *
   * @see {@link UserManager.signoutCallback}
   */
  async signoutRedirectCallback(url = window.location.href) {
    const logger2 = this._logger.create("signoutRedirectCallback");
    const response = await this._signoutEnd(url);
    logger2.info("success");
    return response;
  }
  /**
   * Trigger a redirect of a popup window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutPopup(args = {}) {
    const logger2 = this._logger.create("signoutPopup");
    const {
      popupWindowFeatures,
      popupWindowTarget,
      popupSignal,
      ...requestArgs
    } = args;
    const url = this.settings.popup_post_logout_redirect_uri;
    const handle = await this._popupNavigator.prepare({ popupWindowFeatures, popupWindowTarget, popupSignal });
    await this._signout({
      request_type: "so:p",
      post_logout_redirect_uri: url,
      // we're putting a dummy entry in here because we
      // need a unique id from the state for notification
      // to the parent window, which is necessary if we
      // plan to return back to the client after signout
      // and so we can close the popup after signout
      state: url == null ? void 0 : {},
      ...requestArgs
    }, handle);
    logger2.info("success");
  }
  /**
   * Process response (callback) from the end session endpoint from a popup window.
   * It is recommended to use {@link UserManager.signoutCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signoutCallback}
   */
  async signoutPopupCallback(url = window.location.href, keepOpen = false) {
    const logger2 = this._logger.create("signoutPopupCallback");
    await this._popupNavigator.callback(url, { keepOpen });
    logger2.info("success");
  }
  async _signout(args, handle) {
    const navResponse = await this._signoutStart(args, handle);
    return await this._signoutEnd(navResponse.url);
  }
  async _signoutStart(args = {}, handle) {
    var _a;
    const logger2 = this._logger.create("_signoutStart");
    try {
      const user = await this._loadUser();
      logger2.debug("loaded current user from storage");
      if (this.settings.revokeTokensOnSignout) {
        await this._revokeInternal(user);
      }
      const id_token = args.id_token_hint || user && user.id_token;
      if (id_token) {
        logger2.debug("setting id_token_hint in signout request");
        args.id_token_hint = id_token;
      }
      await this.removeUser();
      logger2.debug("user removed, creating signout request");
      const signoutRequest = await this._client.createSignoutRequest(args);
      logger2.debug("got signout request");
      return await handle.navigate({
        url: signoutRequest.url,
        state: (_a = signoutRequest.state) == null ? void 0 : _a.id,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (err) {
      logger2.debug("error after preparing navigator, closing navigator window");
      handle.close();
      throw err;
    }
  }
  async _signoutEnd(url) {
    const logger2 = this._logger.create("_signoutEnd");
    const signoutResponse = await this._client.processSignoutResponse(url);
    logger2.debug("got signout response");
    return signoutResponse;
  }
  /**
   * Trigger a silent request (via an iframe) to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutSilent(args = {}) {
    var _a;
    const logger2 = this._logger.create("signoutSilent");
    const {
      silentRequestTimeoutInSeconds,
      ...requestArgs
    } = args;
    const id_token_hint = this.settings.includeIdTokenInSilentSignout ? (_a = await this._loadUser()) == null ? void 0 : _a.id_token : void 0;
    const url = this.settings.popup_post_logout_redirect_uri;
    const handle = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds });
    await this._signout({
      request_type: "so:s",
      post_logout_redirect_uri: url,
      id_token_hint,
      ...requestArgs
    }, handle);
    logger2.info("success");
  }
  /**
   * Notify the parent window of response (callback) from the end session endpoint.
   * It is recommended to use {@link UserManager.signoutCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signoutCallback}
   */
  async signoutSilentCallback(url = window.location.href) {
    const logger2 = this._logger.create("signoutSilentCallback");
    await this._iframeNavigator.callback(url);
    logger2.info("success");
  }
  async revokeTokens(types) {
    const user = await this._loadUser();
    await this._revokeInternal(user, types);
  }
  async _revokeInternal(user, types = this.settings.revokeTokenTypes) {
    const logger2 = this._logger.create("_revokeInternal");
    if (!user) return;
    const typesPresent = types.filter((type) => typeof user[type] === "string");
    if (!typesPresent.length) {
      logger2.debug("no need to revoke due to no token(s)");
      return;
    }
    for (const type of typesPresent) {
      await this._client.revokeToken(
        user[type],
        type
      );
      logger2.info(`${type} revoked successfully`);
      if (type !== "access_token") {
        user[type] = null;
      }
    }
    await this.storeUser(user);
    logger2.debug("user stored");
    await this._events.load(user);
  }
  /**
   * Enables silent renew for the `UserManager`.
   */
  startSilentRenew() {
    this._logger.create("startSilentRenew");
    void this._silentRenewService.start();
  }
  /**
   * Disables silent renew for the `UserManager`.
   */
  stopSilentRenew() {
    this._silentRenewService.stop();
  }
  get _userStoreKey() {
    return `user:${this.settings.authority}:${this.settings.client_id}`;
  }
  async _loadUser() {
    const logger2 = this._logger.create("_loadUser");
    const storageString = await this.settings.userStore.get(this._userStoreKey);
    if (storageString) {
      logger2.debug("user storageString loaded");
      return User.fromStorageString(storageString);
    }
    logger2.debug("no user storageString");
    return null;
  }
  async storeUser(user) {
    const logger2 = this._logger.create("storeUser");
    if (user) {
      logger2.debug("storing user");
      const storageString = user.toStorageString();
      await this.settings.userStore.set(this._userStoreKey, storageString);
    } else {
      this._logger.debug("removing user");
      await this.settings.userStore.remove(this._userStoreKey);
      if (this.settings.dpop) {
        await this.settings.dpop.store.remove(this.settings.client_id);
      }
    }
  }
  /**
   * Removes stale state entries in storage for incomplete authorize requests.
   */
  async clearStaleState() {
    await this._client.clearStaleState();
  }
  /**
   * Dynamically generates a DPoP proof for a given user, URL and optional Http method.
   * This method is useful when you need to make a request to a resource server
   * with fetch or similar, and you need to include a DPoP proof in a DPoP header.
   * @param url - The URL to generate the DPoP proof for
   * @param user - The user to generate the DPoP proof for
   * @param httpMethod - Optional, defaults to "GET"
   * @param nonce - Optional nonce provided by the resource server
   *
   * @returns A promise containing the DPoP proof or undefined if DPoP is not enabled/no user is found.
   */
  async dpopProof(url, user, httpMethod, nonce) {
    var _a, _b;
    const dpopState = await ((_b = (_a = this.settings.dpop) == null ? void 0 : _a.store) == null ? void 0 : _b.get(this.settings.client_id));
    if (dpopState) {
      return await CryptoUtils.generateDPoPProof({
        url,
        accessToken: user == null ? void 0 : user.access_token,
        httpMethod,
        keyPair: dpopState.keys,
        nonce
      });
    }
    return void 0;
  }
  async generateDPoPJkt(dpopSettings) {
    let dpopState = await dpopSettings.store.get(this.settings.client_id);
    if (!dpopState) {
      const dpopKeys = await CryptoUtils.generateDPoPKeys();
      dpopState = new DPoPState(dpopKeys);
      await dpopSettings.store.set(this.settings.client_id, dpopState);
    }
    return await CryptoUtils.generateDPoPJkt(dpopState.keys);
  }
};

// package.json
var version = "3.5.0";

// src/Version.ts
var Version = (/* unused pure expression or super */ null && (version));

// src/IndexedDbDPoPStore.ts
var IndexedDbDPoPStore = class {
  constructor() {
    this._dbName = "oidc";
    this._storeName = "dpop";
  }
  async set(key, value) {
    const store = await this.createStore(this._dbName, this._storeName);
    await store("readwrite", (str) => {
      str.put(value, key);
      return this.promisifyRequest(str.transaction);
    });
  }
  async get(key) {
    const store = await this.createStore(this._dbName, this._storeName);
    return await store("readonly", (str) => {
      return this.promisifyRequest(str.get(key));
    });
  }
  async remove(key) {
    const item = await this.get(key);
    const store = await this.createStore(this._dbName, this._storeName);
    await store("readwrite", (str) => {
      return this.promisifyRequest(str.delete(key));
    });
    return item;
  }
  async getAllKeys() {
    const store = await this.createStore(this._dbName, this._storeName);
    return await store("readonly", (str) => {
      return this.promisifyRequest(str.getAllKeys());
    });
  }
  promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.oncomplete = request.onsuccess = () => resolve(request.result);
      request.onabort = request.onerror = () => reject(request.error);
    });
  }
  async createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const db = await this.promisifyRequest(request);
    return async (txMode, callback) => {
      const tx = db.transaction(storeName, txMode);
      const store = tx.objectStore(storeName);
      return await callback(store);
    };
  }
};

//# sourceMappingURL=oidc-client-ts.js.map

;// ./src/libs/storage/secureStorage.ts

/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/secureStorage.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */

var DEFAULT_HASH_SALT = typeof __LINM_STORAGE_HASH_SALT__ !== 'undefined' ? __LINM_STORAGE_HASH_SALT__ : 'linm-browser-storage-salt-v1';
function resolveStorage(config) {
  if (typeof window === 'undefined') return null;
  try {
    var _config$storage;
    return (_config$storage = config.storage) !== null && _config$storage !== void 0 ? _config$storage : window.localStorage;
  } catch (_unused) {
    return null;
  }
}
function serializePayload(data) {
  return typeof data === 'string' ? data : JSON.stringify(data);
}
function fnv1aHex(input) {
  var hash = 2166136261;
  for (var i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}
function computeSecureStorageHash(version, hashKey, data) {
  var salt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_HASH_SALT;
  var serialized = serializePayload(data);
  var base = "".concat(version, "|").concat(hashKey, "|").concat(serialized, "|").concat(salt);
  return fnv1aHex(base) + fnv1aHex(base.split('').reverse().join(''));
}
function parseEnvelope(raw) {
  try {
    var parsed = JSON.parse(raw);
    if (_typeof(parsed) !== 'object' || parsed === null || typeof parsed.v !== 'number' || typeof parsed.hk !== 'string' || typeof parsed.h !== 'string' || !('d' in parsed)) {
      return null;
    }
    return parsed;
  } catch (_unused2) {
    return null;
  }
}
function setSecureItem(config, data) {
  var storage = resolveStorage(config);
  if (!storage) return;
  var h = computeSecureStorageHash(config.version, config.hashKey, data);
  var envelope = {
    v: config.version,
    hk: config.hashKey,
    d: data,
    h: h
  };
  try {
    storage.setItem(config.storageKey, JSON.stringify(envelope));
  } catch (_unused3) {
    // ignore
  }
}
function getSecureItem(config, options) {
  var storage = resolveStorage(config);
  if (!storage) return null;
  var raw;
  try {
    raw = storage.getItem(config.storageKey);
  } catch (_unused4) {
    return null;
  }
  if (!raw) return null;
  var envelope = parseEnvelope(raw);
  if (!envelope) {
    if (options !== null && options !== void 0 && options.allowLegacyPlain) {
      var _options$legacyParse, _options$legacyParse2;
      var legacy = (_options$legacyParse = (_options$legacyParse2 = options.legacyParse) === null || _options$legacyParse2 === void 0 ? void 0 : _options$legacyParse2.call(options, raw)) !== null && _options$legacyParse !== void 0 ? _options$legacyParse : raw;
      if (legacy != null && legacy !== '') {
        setSecureItem(config, legacy);
        return legacy;
      }
    }
    try {
      storage.removeItem(config.storageKey);
    } catch (_unused5) {/* ignore */}
    return null;
  }
  if (envelope.v !== config.version || envelope.hk !== config.hashKey) {
    try {
      storage.removeItem(config.storageKey);
    } catch (_unused6) {/* ignore */}
    return null;
  }
  var expected = computeSecureStorageHash(config.version, config.hashKey, envelope.d);
  if (envelope.h !== expected) {
    try {
      storage.removeItem(config.storageKey);
    } catch (_unused7) {/* ignore */}
    return null;
  }
  return envelope.d;
}
function removeSecureItem(config) {
  var storage = resolveStorage(config);
  if (!storage) return;
  try {
    storage.removeItem(config.storageKey);
  } catch (_unused8) {
    // ignore
  }
}
function isSecureEnvelopeRaw(raw) {
  return parseEnvelope(raw) !== null;
}
;// ./src/libs/storage/authTokenStorage.ts
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/authTokenStorage.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */

var ACCESS_TOKEN_CONFIG = {
  storageKey: 'auth_token',
  version: 1,
  hashKey: 'auth.access'
};
var REFRESH_TOKEN_CONFIG = {
  storageKey: 'auth_refresh_token',
  version: 1,
  hashKey: 'auth.refresh'
};
var JWT_LIKE = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
function isJwtLike(value) {
  return JWT_LIKE.test(value.trim());
}
function readAccessToken(config) {
  var value = getSecureItem(config, {
    allowLegacyPlain: true,
    legacyParse: function legacyParse(raw) {
      return isJwtLike(raw) ? raw : null;
    }
  });
  return {
    value: value,
    valid: value != null
  };
}
function readRefreshToken(config) {
  var value = getSecureItem(config, {
    allowLegacyPlain: true,
    legacyParse: function legacyParse(raw) {
      var trimmed = raw.trim();
      return trimmed.length >= 32 ? trimmed : null;
    }
  });
  return {
    value: value,
    valid: value != null
  };
}
function readToken(config, kind) {
  return kind === 'refresh' ? readRefreshToken(config) : readAccessToken(config);
}
function notifyAuthTokenChanged(token) {
  window.dispatchEvent(new CustomEvent('linm:auth:token-changed', {
    detail: {
      token: token
    }
  }));
  window.dispatchEvent(new CustomEvent('linm:auth:changed'));
}
function getAuthToken() {
  return readToken(ACCESS_TOKEN_CONFIG, 'access').value;
}
function getAuthRefreshToken() {
  return readToken(REFRESH_TOKEN_CONFIG, 'refresh').value;
}
function setAuthTokens(input) {
  var prevAccess = getAuthToken();
  var prevRefresh = getAuthRefreshToken();
  if (input.accessToken) {
    setSecureItem(ACCESS_TOKEN_CONFIG, input.accessToken);
  }
  if (input.refreshToken) {
    setSecureItem(REFRESH_TOKEN_CONFIG, input.refreshToken);
  }
  var nextAccess = getAuthToken();
  var nextRefresh = getAuthRefreshToken();
  if (prevAccess !== nextAccess || prevRefresh !== nextRefresh) {
    notifyAuthTokenChanged(nextAccess);
  }
}
function hasValidAuthToken() {
  return readToken(ACCESS_TOKEN_CONFIG, 'access').valid;
}
function clearAuthTokens() {
  removeSecureItem(ACCESS_TOKEN_CONFIG);
  removeSecureItem(REFRESH_TOKEN_CONFIG);
  notifyAuthTokenChanged(null);
}
;// ./src/libs/storage/authUserStorage.ts

/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/authUserStorage.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */

var AUTH_USER_STORAGE_KEY = 'auth_user';

/** JWT-mode user snapshot persisted by Web.Home authSlice. */

var AUTH_USER_CONFIG = {
  storageKey: AUTH_USER_STORAGE_KEY,
  version: 1,
  hashKey: 'auth.user'
};
function parseLegacyAuthUser(raw) {
  try {
    var parsed = JSON.parse(raw);
    if (parsed && _typeof(parsed) === 'object' && typeof parsed.id === 'string') {
      return parsed;
    }
  } catch (_unused) {
    // ignore
  }
  return null;
}
function getAuthUser() {
  return getSecureItem(AUTH_USER_CONFIG, {
    allowLegacyPlain: true,
    legacyParse: parseLegacyAuthUser
  });
}
function setAuthUser(user) {
  setSecureItem(AUTH_USER_CONFIG, user);
  window.dispatchEvent(new CustomEvent('linm:auth:changed'));
}
function clearAuthUser() {
  removeSecureItem(AUTH_USER_CONFIG);
  window.dispatchEvent(new CustomEvent('linm:auth:changed'));
}
;// ./src/libs/authentication/user.ts








/**
 * IUser implementation for JWT-based auth (OIDC_ENABLED=false).
 * Reads directly from the localStorage keys that Web.Home's authSlice persists.
 */
var LocalStorageUser = /*#__PURE__*/_createClass(function LocalStorageUser() {
  _classCallCheck(this, LocalStorageUser);
  _defineProperty(this, "getUserProfile", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
    var _raw$id, _raw$username, _raw$email, _raw$roles;
    var raw;
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          raw = getAuthUser();
          if (raw) {
            _context.next = 1;
            break;
          }
          throw new Error('[User] No authenticated user in storage');
        case 1:
          return _context.abrupt("return", {
            userId: (_raw$id = raw.id) !== null && _raw$id !== void 0 ? _raw$id : '',
            username: (_raw$username = raw.username) !== null && _raw$username !== void 0 ? _raw$username : '',
            email: (_raw$email = raw.email) !== null && _raw$email !== void 0 ? _raw$email : '',
            roles: raw.role ? [raw.role] : (_raw$roles = raw.roles) !== null && _raw$roles !== void 0 ? _raw$roles : [],
            companyCode: raw.companyCode,
            companyName: raw.companyName
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  _defineProperty(this, "getAccessToken", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2() {
    var _getAuthToken;
    return regenerator_default().wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", (_getAuthToken = getAuthToken()) !== null && _getAuthToken !== void 0 ? _getAuthToken : '');
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
var UserProfile = /*#__PURE__*/_createClass(function UserProfile(claims) {
  var _claims$sub, _ref3, _claims$preferred_use, _claims$email;
  _classCallCheck(this, UserProfile);
  this.userId = String((_claims$sub = claims['sub']) !== null && _claims$sub !== void 0 ? _claims$sub : '');
  this.username = String((_ref3 = (_claims$preferred_use = claims['preferred_username']) !== null && _claims$preferred_use !== void 0 ? _claims$preferred_use : claims['email']) !== null && _ref3 !== void 0 ? _ref3 : '');
  this.email = String((_claims$email = claims['email']) !== null && _claims$email !== void 0 ? _claims$email : '');
  this.roles = Array.isArray(claims['roles']) ? claims['roles'] : [claims['roles']].filter(Boolean);
  this.companyCode = claims['company_id'];
  this.companyName = claims['company_name'];
});
var user_User = /*#__PURE__*/_createClass(function User(authenticator) {
  var _this = this;
  _classCallCheck(this, User);
  _defineProperty(this, "getUserProfile", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3() {
    var oidcUser;
    return regenerator_default().wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 1;
          return _this._authenticator.getUser();
        case 1:
          oidcUser = _context3.sent;
          if (oidcUser !== null && oidcUser !== void 0 && oidcUser.profile) {
            _context3.next = 2;
            break;
          }
          throw new Error('[User] No authenticated user');
        case 2:
          return _context3.abrupt("return", new UserProfile(oidcUser.profile));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  _defineProperty(this, "getAccessToken", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4() {
    var _oidcUser$access_toke;
    var oidcUser;
    return regenerator_default().wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 1;
          return _this._authenticator.getUser();
        case 1:
          oidcUser = _context4.sent;
          return _context4.abrupt("return", (_oidcUser$access_toke = oidcUser === null || oidcUser === void 0 ? void 0 : oidcUser.access_token) !== null && _oidcUser$access_toke !== void 0 ? _oidcUser$access_toke : '');
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  this._authenticator = authenticator;
});
// EXTERNAL MODULE: external "single-spa"
var external_single_spa_ = __webpack_require__(496);
;// ./src/logger.ts
var fmt = function fmt(level, message) {
  return "[".concat(level, "] ").concat(new Date().toISOString(), " ").concat(message);
};
var logInfo = function logInfo(message) {
  return console.info(fmt('INFO', message));
};
var logError = function logError(message) {
  return console.error(fmt('ERROR', message));
};
var logWarn = function logWarn(message) {
  return console.warn(fmt('WARN', message));
};
;// ./src/libs/authentication/authenticator.ts




var _Authenticator;





var Authenticator = /*#__PURE__*/_createClass(function Authenticator(manager) {
  var _this = this;
  _classCallCheck(this, Authenticator);
  _defineProperty(this, "getUserManager", function () {
    return _this.manager;
  });
  _defineProperty(this, "getUser", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _this.manager.getUser());
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  _defineProperty(this, "loginAsync", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2() {
    return regenerator_default().wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          logInfo('[OIDC] Starting sign-in redirect');
          _context2.next = 1;
          return _this.manager.signinRedirect({
            state: window.location.pathname + window.location.search
          });
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  _defineProperty(this, "logoutAsync", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3() {
    return regenerator_default().wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          logInfo('[OIDC] Starting sign-out redirect');
          _context3.next = 1;
          return _this.manager.signoutRedirect();
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  _defineProperty(this, "loginSilentAsync", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4() {
    var user;
    return regenerator_default().wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          logInfo('[OIDC] Attempting silent sign-in');
          _context4.next = 1;
          return _this.manager.signinSilent();
        case 1:
          user = _context4.sent;
          if (user) {
            _context4.next = 2;
            break;
          }
          throw new Error('[OIDC] Silent sign-in returned null');
        case 2:
          return _context4.abrupt("return", user);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  _defineProperty(this, "handleLoginCallbackAsync", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee5() {
    var oidcUser, profile, returnPath;
    return regenerator_default().wrap(function (_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          logInfo('[OIDC] Processing login callback');
          _context5.next = 1;
          return _this.manager.signinRedirectCallback();
        case 1:
          oidcUser = _context5.sent;
          profile = new UserProfile(oidcUser.profile);
          returnPath = typeof oidcUser.state === 'string' ? oidcUser.state : '/';
          logInfo("[OIDC] Login complete \u2014 redirecting to: ".concat(returnPath));
          (0,external_single_spa_.navigateToUrl)(returnPath);
          return _context5.abrupt("return", profile);
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  _defineProperty(this, "handleSilentRenewCallbackAsync", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee6() {
    return regenerator_default().wrap(function (_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          logInfo('[OIDC] Processing silent renew callback');
          _context6.next = 1;
          return _this.manager.signinSilentCallback();
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  this.manager = manager;
});
_Authenticator = Authenticator;
_defineProperty(Authenticator, "getInstance", function (settings) {
  if (!_Authenticator.instance) {
    logInfo("[OIDC] Creating UserManager \u2014 authority: ".concat(settings.authority));
    var userManager = new UserManager(settings);
    userManager.events.addAccessTokenExpiring(function () {
      logInfo('[OIDC Events] Access token expiring soon');
    });
    userManager.events.addAccessTokenExpired(function () {
      logInfo('[OIDC Events] Access token expired');
    });
    userManager.events.addSilentRenewError(function (error) {
      var msg = error instanceof Error ? error.message : JSON.stringify(error);
      logError("[OIDC Events] Silent renew error: ".concat(msg));
    });
    userManager.events.addUserSignedOut(function () {
      logInfo('[OIDC Events] User signed out externally');
    });
    userManager.events.addUserSessionChanged(function () {
      logInfo('[OIDC Events] User session changed');
    });
    _Authenticator.instance = new _Authenticator(userManager);
  }
  return _Authenticator.instance;
});
;// ./src/libs/configuration/appsettings.ts
var _process$env$AUTHORIT, _process$env$CLIENT_I, _process$env$REDIRECT, _process$env$SILENT_R, _process$env$POST_LOG, _process$env$FEATURE_;
var AppSettings = {
  OIDC_ENABLED: "false" === 'true',
  AUTHORITY: (_process$env$AUTHORIT = "") !== null && _process$env$AUTHORIT !== void 0 ? _process$env$AUTHORIT : '',
  CLIENT_ID: (_process$env$CLIENT_I = "") !== null && _process$env$CLIENT_I !== void 0 ? _process$env$CLIENT_I : '',
  REDIRECT_URI: (_process$env$REDIRECT = "") !== null && _process$env$REDIRECT !== void 0 ? _process$env$REDIRECT : "".concat(window.location.origin, "/oidc-callback"),
  SILENT_RENEW_URI: (_process$env$SILENT_R = "") !== null && _process$env$SILENT_R !== void 0 ? _process$env$SILENT_R : "".concat(window.location.origin, "/oidc-silent-renew"),
  POST_LOGOUT_URI: (_process$env$POST_LOG = "") !== null && _process$env$POST_LOG !== void 0 ? _process$env$POST_LOG : window.location.origin,
  FEATURE_TOGGLE_API_URL: (_process$env$FEATURE_ = "") !== null && _process$env$FEATURE_ !== void 0 ? _process$env$FEATURE_ : '',
  ALLOWED_ROUTES: "[\"login\",\"settings\",\"notifications\",\"messages\",\"tra-cuu-tk\",\"help\",\"faq\",\"contact\",\"install-guide\",\"notification-guide\",\"tickets\",\"tasks\",\"task-pool\",\"department-tasks\",\"dashboard\",\"approvals\",\"sla-alerts\",\"reports\",\"statistics\",\"history\",\"admin\",\"scyk\",\"edu\",\"shell-url\",\"shell\"]",
  ENABLE_MESSAGE: "false" === 'true',
  ENABLE_NOTIFICATION: "false" === 'true'
};
;// ./src/libs/authentication/openIdSettings.ts

var OidcEndpoints = /*#__PURE__*/function (OidcEndpoints) {
  OidcEndpoints["LOGIN"] = "oidc-callback";
  OidcEndpoints["RENEW"] = "oidc-silent-renew";
  OidcEndpoints["LOGOUT"] = "logout";
  return OidcEndpoints;
}({});
var OpenIdSettings = {
  authority: AppSettings.AUTHORITY,
  client_id: AppSettings.CLIENT_ID,
  redirect_uri: AppSettings.REDIRECT_URI,
  silent_redirect_uri: AppSettings.SILENT_RENEW_URI,
  post_logout_redirect_uri: AppSettings.POST_LOGOUT_URI,
  response_type: 'code',
  scope: 'openid profile email',
  automaticSilentRenew: true,
  loadUserInfo: true
};
/* harmony default export */ const openIdSettings = (OpenIdSettings);
;// ./src/libs/featureToggle/featureToggle.ts






var FeatureToggle = /*#__PURE__*/function () {
  function FeatureToggle() {
    _classCallCheck(this, FeatureToggle);
  }
  return _createClass(FeatureToggle, [{
    key: "getAllFeatureToggles",
    value: function () {
      var _getAllFeatureToggles = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var response, _ref, data, _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 1;
              return fetch("".concat(AppSettings.FEATURE_TOGGLE_API_URL, "/feature-toggles"), {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            case 1:
              response = _context.sent;
              if (!response.ok) {
                _context.next = 3;
                break;
              }
              _context.next = 2;
              return response.json();
            case 2:
              data = _context.sent;
              return _context.abrupt("return", (_ref = data.items) !== null && _ref !== void 0 ? _ref : data);
            case 3:
              logWarn("[FeatureToggle] Non-OK response: ".concat(response.status));
              return _context.abrupt("return", {});
            case 4:
              _context.prev = 4;
              _t = _context["catch"](0);
              logError("[FeatureToggle] Failed to fetch: ".concat(_t));
              return _context.abrupt("return", {});
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 4]]);
      }));
      function getAllFeatureToggles() {
        return _getAllFeatureToggles.apply(this, arguments);
      }
      return getAllFeatureToggles;
    }()
  }]);
}();
;// ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ./src/libs/startup/router.ts





var Router = /*#__PURE__*/_createClass(function Router(appSettings) {
  var _this = this;
  _classCallCheck(this, Router);
  _defineProperty(this, "canVisit", function (pathname) {
    if (!_this._routes) return true;
    var path = pathname !== null && pathname !== void 0 ? pathname : window.location.pathname;
    if (_this._routes.includes('/') && path === '/') return true;
    var _path$split = path.split('/'),
      _path$split2 = _slicedToArray(_path$split, 2),
      firstSegment = _path$split2[1];
    return _this._routes.includes(firstSegment);
  });
  var raw = appSettings.ALLOWED_ROUTES;
  if (!raw) {
    this._routes = null;
    return;
  }
  try {
    this._routes = JSON.parse(raw);
  } catch (_unused) {
    logWarn('[Router] ALLOWED_ROUTES is not valid JSON — allowing all routes');
    this._routes = null;
  }
});

;// ./node_modules/single-spa-layout/dist/esm/single-spa-layout.min.js
/* single-spa-layout@3.0.0 - esm */
function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v="undefined"!=typeof window;function m(e,t){if("object"!==l(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function y(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(l(t),", but expected a boolean"))}function g(e,t,n,r){if(!r){var o=Object.keys(t),a=[];o.forEach((function(e){n.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function b(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||n&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function w(e,t){if(b(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function E(e,t,n){if(!Array.isArray(t)&&("object"!==l(l(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];for(var i=0;i<t.length;i++)n.apply(void 0,[t[i],"".concat(e,"[").concat(i,"]")].concat(o))}function N(e,t){b("path",t);var n=s({},e),r=e.base.slice(0,e.base.length-1);if(0===t.indexOf(r)){var o=v?window.location.origin:"http://localhost",a=new URL(O(o,t));n.routes=A(a,e.routes)}else n.routes=[];return n}function A(e,t){var n=[];return t.forEach((function(t){"application"===t.type?n.push(t):"route"===t.type?t.activeWhen(e)&&n.push(s(s({},t),{},{routes:A(e,t.routes)})):Array.isArray(t.routes)?n.push(s(s({},t),{},{routes:A(e,t.routes)})):n.push(t)})),n}function O(e,t){var n;return"/"===(n="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&n.length>1&&(n=n.slice(0,n.length-1)),n}function C(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var x="undefined"!=typeof Symbol?Symbol():"@";function P(t,n){if(t&&t.nodeName||"string"==typeof t){if(v&&!n&&window.singleSpaLayoutData&&(n=window.singleSpaLayoutData),"string"==typeof t){if(!v)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(t=(new DOMParser).parseFromString(t,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));v&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[],redirects:{}};L(e,"mode")&&(n.mode=L(e,"mode")),L(e,"base")&&(n.base=L(e,"base")),L(e,"containerEl")&&(n.containerEl=L(e,"containerEl"));for(var r=0;r<e.childNodes.length;r++){var o;(o=n.routes).push.apply(o,f(j(e.childNodes[r],t,n)))}return n}(t,n)}else if(n)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(t){m("routesConfig",t);var n,r=t.disableWarnings;if(g("routesConfig",t,["mode","base","containerEl","routes","disableWarnings","redirects"],r),t.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(v&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,t.containerEl):t.containerEl="body",t.hasOwnProperty("mode")||(t.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,t.mode,["history","hash"]),t.hasOwnProperty("base")?(b("routesConfig.base",t.base),t.base=(0!==(n=t.base).indexOf("/")&&(n="/"+n),"/"!==n[n.length-1]&&(n+="/"),n)):t.base="/",t.hasOwnProperty("redirects"))for(var o in m("routesConfig.redirects",t.redirects),t.redirects){var a=t.redirects[o];w("routesConfig.redirects key",o),w("routesConfig.redirects['".concat(o,"']"),a)}var i=v?window.location.pathname:"/",c="hash"===t.mode?i+"#":"";E("routesConfig.routes",t.routes,(function t(n,o,a){var i=a.parentPath,c=a.siblingActiveWhens,u=a.parentActiveWhen;if(m(o,n),"application"===n.type)g(o,n,["type","name","props","loader","error","className"],r),n.props&&m("".concat(o,".props"),n.props),b("".concat(o,".name"),n.name);else if("route"===n.type){g(o,n,["type","path","routes","props","default","exact"],r),n.hasOwnProperty("exact")&&y("".concat(o,".exact"),n.exact);var s,l=n.hasOwnProperty("path"),d=n.hasOwnProperty("default");if(l)b("".concat(o,".path"),n.path),s=O(i,n.path),n.activeWhen=(0,external_single_spa_.pathToActiveWhen)(s,n.exact),c.push(n.activeWhen);else{if(!d)throw Error("Invalid ".concat(o,": routes must have either a path or default property."));y("".concat(o,".default"),n.default),s=i,n.activeWhen=function(e,t){return function(n){return t(n)&&!e.some((function(e){return e(n)}))}}(c,u)}if(l&&d&&n.default)throw Error("Invalid ".concat(o,": cannot have both path and set default to true."));n.routes&&E("".concat(o,".routes"),n.routes,t,{parentPath:s,siblingActiveWhens:[],parentActiveWhen:n.activeWhen})}else{if("undefined"!=typeof Node&&n instanceof Node);else for(var f in n)"routes"!==f&&"attrs"!==f&&b("".concat(o,"['").concat(f,"']"),n[f],!1);n.routes&&E("".concat(o,".routes"),n.routes,t,{parentPath:i,siblingActiveWhens:c,parentActiveWhen:u})}}),{parentPath:c+t.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete t.disableWarnings}(t),t}function L(e,t){if(v)return e.getAttribute(t);var n=C(e.attrs,(function(e){return e.name===t.toLowerCase()}));return n?n.value:null}function S(e,t){return v?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function j(e,t,n){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var r={type:"application",name:L(e,"name")},o=L(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))r.loader=t.loaders[o];else if(v)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=L(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))r.error=t.errors[a];else if(v)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));var i=L(e,"class");return i&&(r.className=i),W(e,r,t),[r]}if("route"===e.nodeName.toLowerCase()){var c={type:"route",routes:[]},u=L(e,"path");u&&(c.path=u),S(e,"default")&&(c.default=!0),S(e,"exact")&&(c.exact=!0),W(e,c,t);for(var s=0;s<e.childNodes.length;s++){var l;(l=c.routes).push.apply(l,f(j(e.childNodes[s],t,n)))}return[c]}if("redirect"===e.nodeName.toLowerCase())return n.redirects[O("/",L(e,"from"))]=O("/",L(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var p;(p=e.routes).push.apply(p,f(j(e.childNodes[d],t,n)))}}return[e]}if(e.childNodes){for(var h={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},m=0;m<e.childNodes.length;m++){var y;(y=h.routes).push.apply(y,f(j(e.childNodes[m],t,n)))}return[h]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function W(e,t,n){for(var r=(L(e,"props")||"").split(","),o=0;o<r.length;o++){var a=r[o].trim();if(0!==a.length)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(a))t.props[a]=n.props[a];else{if(v)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=x}}}function T(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function I(e){var a=e.routes;e.applications;var i=e.active,u=void 0===i||i,s=!1,d={},f=v&&Boolean(window.singleSpaLayoutData);if(!a)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(l(a)));var p=a.base.slice(0,a.base.length-1),h={isActive:function(){return s},activate:function(){s||(s=!0,v&&(window.addEventListener("single-spa:before-routing-event",y),window.addEventListener("single-spa:before-mount-routing-event",g),window.addEventListener("single-spa:routing-event",b),(0,external_single_spa_.addErrorHandler)(m),f&&w(E(),a.routes),g()))},deactivate:function(){s&&(s=!1,v&&(window.removeEventListener("single-spa:before-routing-event",y),window.removeEventListener("single-spa:before-mount-routing-event",g),window.removeEventListener("single-spa:routing-event",b),(0,external_single_spa_.removeErrorHandler)(m)))}};return u&&h.activate(),h;function m(e){var t=H({applicationName:e.appOrParcelName,location:window.location,routes:a.routes});if(t&&t.error){var n=document.getElementById(k(t.name)),o="string"==typeof t.error?T(t.error):t.error;d[t.name]=(0,external_single_spa_.mountRootParcel)(o,{domElement:n,error:e})}setTimeout((function(){throw e}))}function y(e){var t=e.detail,n=t.cancelNavigation,r=t.newUrl,o=q(a,X(r)),i=function(e){var t=a.redirects[e];if(e===o){if(!n)throw Error("single-spa-layout: <redirect> requires single-spa@>=6.0.0");return n(),setTimeout((function(){(0,external_single_spa_.navigateToUrl)(t)})),{v:void 0}}};for(var u in a.redirects){var s=i(u);if("object"===l(s))return s.v}var f=[];_(r).forEach((function(e){d[e]&&(f.push(d[e].unmount()),delete d[e])})),f.length>0&&n(Promise.all(f).then((function(){return!1})))}function g(){if(0===q(a).indexOf(p)){var e=(0,external_single_spa_.getMountedApps)().reduce((function(e,t){return e[t]=document.getElementById(k(t)),e}),{});B({location:window.location,routes:a.routes,parentContainer:E(),shouldMount:!0,applicationContainers:e})}}function b(e){var t=e.detail,n=t.navigationIsCanceled,r=t.newUrl;n||_(r).forEach((function(e){var t=document.getElementById(k(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}function w(e,t){if(e&&e.childNodes&&t)for(var n={nextSibling:e.childNodes[0]},r=0;r<t.length;r++){var o,a=t[r];if("route"!==a.type){for(var i=null===(o=n)||void 0===o?void 0:o.nextSibling;(null===(c=i)||void 0===c?void 0:c.nodeType)===Node.TEXT_NODE&&""===i.textContent.trim();){var c;i=i.nextSibling}n=i,D(a)&&M(i,a)&&(a.connectedNode=i),a.routes&&w(i,a.routes)}else w(e,a.routes)}}function E(){return"string"==typeof a.containerEl?document.querySelector(a.containerEl):a.containerEl}}function D(e){return t=["application","route","fragment","assets","redirect"],n=e.type,!t.some((function(e){return e===n}));// removed by dead control flow
 var t, n; }function M(e,t){var n,r;return!!e&&(r=t instanceof Node?t:function(e){switch(e.type){case"#text":return document.createTextNode(e.value);case"#comment":return document.createComment(e.value);default:var t=document.createElement(e.type);return e.attrs.forEach((function(e){t.setAttribute(e.name,e.value)})),t}}(t),(n=e).nodeType===r.nodeType&&n.nodeName===r.nodeName&&function(e,t){var n=e.getAttributeNames?e.getAttributeNames().sort():[],r=e.getAttributeNames?e.getAttributeNames().sort():[];return n.length===r.length&&!n.some((function(n){return e.getAttribute(n)!==t.getAttribute(n)}))}(n,r))}function B(e){var t=e.location,n=e.routes,r=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return n.forEach((function(e,n){if("application"===e.type){if(a){var c,u=k(e.name);i[e.name]?c=i[e.name]:document.getElementById(u)?c=document.getElementById(u):(c=document.createElement("div")).id=u,"string"==typeof e.className?c.className=e.className:"string"!=typeof e.className&&"string"==typeof c.className&&c.removeAttribute("class"),R(c,r,o),o=c}}else if("route"===e.type)o=B({location:t,routes:e.routes,parentContainer:r,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):U(e);e.connectedNode=s}R(e.connectedNode,r,o),e.routes&&B({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function H(e){for(var t=e.applicationName,n=e.location,r=e.routes,o=0;o<r.length;o++){var a=r[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(n)){var i=H({applicationName:t,location:n,routes:a.routes});if(i)return i}}else if(a.routes){var c=H({applicationName:t,location:n,routes:a.routes});if(c)return c}}}function R(e,t,n){var r=n?n.nextSibling:t.firstChild;r!==e&&t.insertBefore(e,r)}function k(e){return"single-spa-application:".concat(e)}function U(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(U(e))})),t}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location;return t["hash"===e.mode?"hash":"pathname"]}function X(e){try{return new URL(e)}catch(n){var t=document.createElement("a");return t.href=e,t}}function _(e){var t=[],n=(0,external_single_spa_.checkActivityFunctions)(e?X(e):location);return (0,external_single_spa_.getAppNames)().forEach((function(e){n.indexOf(e)<0&&t.push(e)})),t}function F(e){var t=e.routes,n=e.loadApp,o={};return V(o,$,{},t.routes),Object.keys(o).map((function(e){var t=o[e];return{name:e,customProps:function(e,n){var r=C(t,(function(e){return e.activeWhen(n)}));return r?r.props:{}},activeWhen:t.map((function(e){return e.activeWhen})),app:function(){var o;v&&(o=C(t,(function(e){return e.activeWhen(window.location)})));var a=n({name:e});return o&&o.loader?function(e,t,n){return Promise.resolve().then((function(){var o,a=k(e),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var c="string"==typeof t.loader?T(t.loader):t.loader,u=(0,external_single_spa_.mountRootParcel)(c,{name:"application-loader:".concat(e),domElement:i});function s(){return u.unmount().then((function(){o&&o()}))}return Promise.all([u.mountPromise,n]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||p(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());r[0];var o=r[1];return s().then((function(){return o}))}),(function(e){return s().then((function(){throw e}))}))}))}(e,o,a):a}}}))}function V(e,t,n,r){r.forEach((function(r){"application"===r.type?(e[r.name]||(e[r.name]=[]),e[r.name].push({activeWhen:t,props:Y(n,r.props),loader:r.loader})):"route"===r.type?V(e,r.activeWhen,Y(n,r.props),r.routes):r.routes&&V(e,t,n,r.routes)}))}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(s({},e),t)}function $(){return!0}

;// ./src/mfe.config.json
const mfe_config_namespaceObject = /*#__PURE__*/JSON.parse('{"cd":[{"name":"@linm/web-home","localPort":8500,"localFile":"linm-web-home.js","routes":["login","logout","settings","notifications","messages","tra-cuu-tk","help","faq","contact","install-guide","notification-guide"],"default":true},{"name":"@linm/nav","localPort":8501,"localFile":"linm-nav.js","parcel":{"domId":"navigation","props":["user","featureToggle"]}},{"name":"@linm/dashboard","localPort":8502,"localFile":"linm-dashboard.js","routes":["dashboard"]},{"name":"@linm/admin","localPort":8503,"localFile":"linm-admin.js","routes":["admin"]},{"name":"@linm/notification","localPort":8505,"localFile":"linm-notification.js","parcel":{"props":["user"]}},{"name":"@linm/message","localPort":8506,"localFile":"linm-message.js","parcel":{"props":["user"]}},{"name":"@linm/shell-url","localPort":8507,"localFile":"linm-shell-url.js","routes":["shell-url","shell"]},{"name":"@linm/platform-task","localPort":8508,"localFile":"linm-platform-task.js","routes":["cv","platform-task"]},{"name":"@linm/m-inc","localPort":8504,"localFile":"linm-m-inc.js","routes":["scyk"],"legacyImportNames":["@linm/inc","@linm/medical-incidents"]}]}');
;// ./src/mfe/legacy-mfe-aliases.json
const legacy_mfe_aliases_namespaceObject = /*#__PURE__*/JSON.parse('{"@linm/inc":"@linm/m-inc","@linm/medical-incidents":"@linm/m-inc"}');
;// ./src/mfe/resolveMfeModuleName.ts
/* unused harmony import specifier */ var resolveMfeModuleName_defineProperty;

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { resolveMfeModuleName_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var ALIASES = legacy_mfe_aliases_namespaceObject;

/** Map deprecated import-map / route names → canonical single-spa package name. */
function resolveMfeModuleName(name) {
  var _ALIASES$name;
  return (_ALIASES$name = ALIASES[name]) !== null && _ALIASES$name !== void 0 ? _ALIASES$name : name;
}
function getLegacyMfeAliases() {
  return _objectSpread({}, ALIASES);
}
;// ./src/libs/startup/shellUrlMenuAudit.ts
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = shellUrlMenuAudit_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function shellUrlMenuAudit_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return shellUrlMenuAudit_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? shellUrlMenuAudit_arrayLikeToArray(r, a) : void 0; } }
function shellUrlMenuAudit_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/** Must match common-components `permissionsCacheStorage` SSOT. */
var PERMISSIONS_CACHE_KEY = 'linm:user_permissions';

/** Prefixes registered for `@linm/shell-url` in Root mfe config / fragments. */
var SHELL_URL_MFE_ROUTE_PREFIXES = new Set(['shell', 'shell-url']);
var MENU_TYPE_SHELL = 'shell';
function readPermissionsCache() {
  return getSecureItem({
    storageKey: PERMISSIONS_CACHE_KEY,
    version: 1,
    hashKey: 'perm.user'
  }, {
    allowLegacyPlain: true,
    legacyParse: function legacyParse(raw) {
      try {
        return JSON.parse(raw);
      } catch (_unused) {
        return null;
      }
    }
  });
}

/**
 * After permissions ready: warn when menuType=shell Path is outside Root routes
 * that mount `@linm/shell-url` (must be under `/shell/...` or `/shell-url/...`).
 *
 * Without this, click → navigateToUrl(`/reva/pos`) mounts default MFE, never iframe.
 */
function auditShellUrlMenuRoutes() {
  var _readPermissionsCache;
  var raw = (_readPermissionsCache = readPermissionsCache()) === null || _readPermissionsCache === void 0 || (_readPermissionsCache = _readPermissionsCache.payload) === null || _readPermissionsCache === void 0 ? void 0 : _readPermissionsCache.navItems;
  if (!Array.isArray(raw)) return;
  var bad = [];
  var _iterator = _createForOfIteratorHelper(raw),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _item$menuType;
      var item = _step.value;
      if (((_item$menuType = item.menuType) !== null && _item$menuType !== void 0 ? _item$menuType : 'route') !== MENU_TYPE_SHELL) continue;
      if (!item.path || !item.defaultUrl) {
        var _item$path;
        bad.push("".concat((_item$path = item.path) !== null && _item$path !== void 0 ? _item$path : '(empty path)', " \u2014 thi\u1EBFu Path ho\u1EB7c DefaultUrl"));
        continue;
      }
      var seg = item.path.replace(/^\//, '').split('/').filter(Boolean)[0];
      if (!seg || !SHELL_URL_MFE_ROUTE_PREFIXES.has(seg)) {
        bad.push("".concat(item.path, " \u2014 prefix \"").concat(seg !== null && seg !== void 0 ? seg : '', "\" kh\xF4ng \u0111\u0103ng k\xFD cho @linm/shell-url (c\u1EA7n /shell/... ho\u1EB7c /shell-url/...)"));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (bad.length === 0) return;
  logWarn("[ShellUrl] Menu type=shell map l\u1ED7i / ngo\xE0i route MFE (".concat(bad.length, "):\n") + bad.map(function (line) {
    return "  \xB7 ".concat(line);
  }).join('\n'));
}
;// ./src/libs/startup/permissionsBootstrap.ts


var PERMISSION_LOADING = 'linm:permission:loading';
var PERMISSION_READY = 'linm:permission:ready';
/** Fail-safe — unblock if @linm/nav never signals ready (nav error, API 503 hang). */
var BOOTSTRAP_MAX_MS = 25000;
var DEFAULT_LOADING_LABEL = 'Đang tải hệ thống…';
/** Public loading mark — only when Root allowChangeLinmLoading. Allow OFF rejects /icons. */
var DEFAULT_LOGO_SIZE = 64;
function trim(value) {
  return (value !== null && value !== void 0 ? value : '').trim();
}
function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function pickLogoSize(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return undefined;
  if (value < 16 || value > 256) return undefined;
  return Math.round(value);
}

/**
 * Same Root gate as common `resolveLogoLoadingConfig`.
 * Allow OFF → no public `/icons` (common linmBrand after MFE load).
 * Allow ON → `__LINM_LOADING__` → loadingIcon (never nav `branding.icon`).
 */
function resolveBootstrapLoadingConfig() {
  var _pickLogoSize;
  var loading = window.__LINM_LOADING__;
  var branding = window.__LINM_SHELL_BRANDING__;
  var allowChange = (branding === null || branding === void 0 ? void 0 : branding.allowChangeLinmLoading) === true;
  var loadingIcon = allowChange ? trim(branding === null || branding === void 0 ? void 0 : branding.loadingIcon) : '';
  var logoSrc = allowChange ? trim(loading === null || loading === void 0 ? void 0 : loading.logoSrc) || loadingIcon || '' : '';
  var label = trim(loading === null || loading === void 0 ? void 0 : loading.label) || trim(branding === null || branding === void 0 ? void 0 : branding.loadingLabel) || DEFAULT_LOADING_LABEL;
  var logoSize = (_pickLogoSize = pickLogoSize(loading === null || loading === void 0 ? void 0 : loading.logoSize)) !== null && _pickLogoSize !== void 0 ? _pickLogoSize : DEFAULT_LOGO_SIZE;
  return {
    logoSrc: logoSrc,
    label: label,
    logoSize: logoSize
  };
}
var PUBLIC_PATHS = ['/login', '/logout', '/session-expired', '/oidc-callback', '/oidc-silent-renew', '/unauthorized', '/scyk/bao-su-co', '/integration/users/register'];

/** Shell-embed routes (ShellUrl standalone FAB) — no nav/permissions needed. */
var SHELL_EMBED_PREFIXES = ['/shell-url', '/shell'];
function normalizePath(pathname) {
  if (!pathname || pathname === '/') return pathname || '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}
function isPublicPath(pathname) {
  var normalized = normalizePath(pathname);
  return PUBLIC_PATHS.some(function (p) {
    return normalized === p || normalized.startsWith("".concat(p, "/"));
  });
}
function isShellEmbedPath(pathname) {
  var n = normalizePath(pathname);
  return SHELL_EMBED_PREFIXES.some(function (p) {
    return n === p || n.startsWith("".concat(p, "/"));
  });
}
function isMobilePhonePath(pathname) {
  var n = normalizePath(pathname);
  return n === '/m' || n.startsWith('/m/');
}
function shouldGatePermissions(pathname) {
  return hasValidAuthToken() && !isPublicPath(pathname) && !isShellEmbedPath(pathname) && !isMobilePhonePath(pathname);
}

/**
 * Full-page spinner only on cold permission bootstrap (first menu load).
 * After menu ready, route refresh uses @linm/nav main-content skeleton only.
 */
function setupPermissionsBootstrap() {
  var overlay = document.getElementById('linm-perm-bootstrap');
  if (!overlay) {
    var _resolveBootstrapLoad = resolveBootstrapLoadingConfig(),
      logoSrc = _resolveBootstrapLoad.logoSrc,
      label = _resolveBootstrapLoad.label,
      logoSize = _resolveBootstrapLoad.logoSize;
    overlay = document.createElement('div');
    overlay.id = 'linm-perm-bootstrap';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');
    overlay.setAttribute('aria-busy', 'true');
    overlay.style.setProperty('--linm-loading-logo-size', "".concat(logoSize, "px"));
    var logoHtml = logoSrc ? "<img class=\"linm-perm-bootstrap__logo\" src=\"".concat(escapeAttr(logoSrc), "\" alt=\"\" width=\"").concat(logoSize, "\" height=\"").concat(logoSize, "\" />") : '';
    overlay.innerHTML = "\n      <div class=\"linm-perm-bootstrap__stage\" aria-hidden=\"true\">".concat(logoHtml, "</div>\n      <p class=\"linm-perm-bootstrap__label\">").concat(escapeAttr(label), "</p>\n    ");
    document.body.appendChild(overlay);
  }
  var busy = false;
  var ready = false;
  /** After first PERMISSION_READY, route refresh uses main-area skeleton only. */
  var menuEverReady = false;
  var timeoutId = null;
  var clearBootstrapTimeout = function clearBootstrapTimeout() {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  var sync = function sync() {
    var gate = shouldGatePermissions(window.location.pathname);
    var show = gate && (busy || !ready);
    overlay.classList.toggle('visible', show);
    overlay.setAttribute('aria-busy', show ? 'true' : 'false');
    if (!show) clearBootstrapTimeout();
  };
  var unblock = function unblock() {
    busy = false;
    ready = true;
    clearBootstrapTimeout();
    sync();
  };
  var armBootstrapTimeout = function armBootstrapTimeout() {
    clearBootstrapTimeout();
    if (!shouldGatePermissions(window.location.pathname)) return;
    timeoutId = setTimeout(unblock, BOOTSTRAP_MAX_MS);
  };
  var onLoading = function onLoading() {
    if (menuEverReady) return;
    busy = true;
    ready = false;
    armBootstrapTimeout();
    sync();
  };
  var onReady = function onReady() {
    menuEverReady = true;
    unblock();
    try {
      auditShellUrlMenuRoutes();
    } catch (_unused) {
      /* non-critical audit */
    }
  };
  var onAuthChange = function onAuthChange() {
    if (!hasValidAuthToken()) {
      menuEverReady = false;
    }
    busy = false;
    ready = menuEverReady;
    if (shouldGatePermissions(window.location.pathname) && !menuEverReady) {
      busy = true;
      ready = false;
      armBootstrapTimeout();
    } else {
      clearBootstrapTimeout();
    }
    sync();
  };
  window.addEventListener(PERMISSION_LOADING, onLoading);
  window.addEventListener(PERMISSION_READY, onReady);
  window.addEventListener('linm:auth:token-changed', onAuthChange);
  window.addEventListener('linm:auth:changed', onAuthChange);
  window.addEventListener('linm:company:changed', onAuthChange);
  window.addEventListener('single-spa:routing-event', function () {
    if (shouldGatePermissions(window.location.pathname) && (busy || !ready)) {
      armBootstrapTimeout();
    }
    sync();
  });
  if (shouldGatePermissions(window.location.pathname)) {
    busy = true;
    ready = false;
    armBootstrapTimeout();
  }
  sync();
}
;// ./src/libs/startup/deployRecovery.ts
var RELOAD_KEY = '_mf_deploy_reload_ts';
var RELOAD_WINDOW_MS = 30 * 60 * 1000; // 30 minutes
var MAX_RELOADS_IN_WINDOW = 3;
var HANDLER_FLAG = '__LINM_DEPLOY_CHUNK_RECOVERY__';
var PENDING_FLAG = '__LINM_DEPLOY_RELOAD_PENDING__';

/** Errors typical when static assets 404 or HTML is served during a deploy window. */
function isDeployRelatedLoadError(error) {
  var errStr = String(error instanceof Error ? "".concat(error.name, " ").concat(error.message) : error);
  return /ChunkLoadError/i.test(errStr) || /Loading chunk [\w.-]+ failed/i.test(errStr) || /Loading CSS chunk [\w.-]+ failed/i.test(errStr) || /MIME type ['"]?text\/html/i.test(errStr) || /Refused to execute script/i.test(errStr) && /\.js/i.test(errStr) || /Unexpected token\s*['"]?</i.test(errStr) || errStr.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED') || errStr.includes('Failed to fetch') || errStr.includes('NetworkError') || errStr.includes('Unexpected token') || /Error loading .*? from /.test(errStr) || /404/.test(errStr) && /\.js/i.test(errStr);
}

/**
 * Hard reload with time-windowed cap.
 *
 * Tracks reload timestamps in sessionStorage with a sliding window of 30 min.
 * Do NOT clear the counter on every single-spa start — that re-arms an infinite
 * reload loop when entry loads but lazy chunks still return SPA HTML.
 *
 * Window flag dedupes ejs + root-config handlers firing on the same error.
 */
function scheduleDeployReload(reason) {
  var delayMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var w = window;
  if (w[PENDING_FLAG]) return true;
  var now = Date.now();
  var raw = sessionStorage.getItem(RELOAD_KEY);
  var timestamps = raw ? JSON.parse(raw) : [];
  var recent = timestamps.filter(function (t) {
    return now - t < RELOAD_WINDOW_MS;
  });
  if (recent.length >= MAX_RELOADS_IN_WINDOW) {
    console.warn("[DeployRecovery] Reload cap (".concat(MAX_RELOADS_IN_WINDOW, " within ").concat(RELOAD_WINDOW_MS / 60000, "min) \u2014 waiting for window to expire"));
    return false;
  }
  w[PENDING_FLAG] = true;
  recent.push(now);
  sessionStorage.setItem(RELOAD_KEY, JSON.stringify(recent));
  console.warn("[DeployRecovery] ".concat(reason, " \u2014 reloading in ").concat(delayMs, "ms (").concat(recent.length, "/").concat(MAX_RELOADS_IN_WINDOW, " within 30min window)"));
  setTimeout(function () {
    return window.location.reload();
  }, delayMs);
  return true;
}

/**
 * Clear reload timestamps after a healthy period (call from delayed timer only).
 * Never call from SingleSpa.start() — ChunkLoadError fires after start succeeds.
 */
function resetDeployReloadCounter() {
  sessionStorage.removeItem(RELOAD_KEY);
}

/**
 * Global handlers for webpack lazy-chunk failures after System.import(entry) succeeded.
 * SPA not_found_handling returns index.html (text/html) for missing hashed chunks —
 * that surfaces as ChunkLoadError / MIME refusal, not as System.import rejection.
 */
function installDeployChunkRecovery() {
  var w = window;
  if (w[HANDLER_FLAG]) return;
  w[HANDLER_FLAG] = true;
  var tryReload = function tryReload(reason, error) {
    if (!isDeployRelatedLoadError(error)) return false;
    return scheduleDeployReload(reason, 1500);
  };
  window.addEventListener('unhandledrejection', function (event) {
    if (tryReload('unhandledrejection chunk/deploy load', event.reason)) {
      event.preventDefault();
    }
  });
  window.addEventListener('error', function (event) {
    var target = event.target;
    if (target instanceof HTMLScriptElement) {
      var _event$error;
      var src = target.src || '';
      if (/\.js(\?|$)/i.test(src) && tryReload("script error: ".concat(src), (_event$error = event.error) !== null && _event$error !== void 0 ? _event$error : src)) {
        return;
      }
    }
    if (event.error && tryReload('window error chunk/deploy load', event.error)) {
      return;
    }
    // MIME / refused-to-execute often has null error — use message text.
    if (event.message && tryReload('window error message', event.message)) {
      return;
    }
  }, true);

  // After 2 minutes without another reload schedule, clear the cap so a later
  // deploy still gets recovery attempts in the same tab session.
  window.setTimeout(function () {
    var _timestamps;
    var raw = sessionStorage.getItem(RELOAD_KEY);
    if (!raw) return;
    var timestamps = JSON.parse(raw);
    var last = (_timestamps = timestamps[timestamps.length - 1]) !== null && _timestamps !== void 0 ? _timestamps : 0;
    if (Date.now() - last > 2 * 60 * 1000) {
      resetDeployReloadCounter();
    }
  }, 2 * 60 * 1000);
}
;// ./src/libs/startup/mfeErrorUi.ts

var ERROR_TITLE = 'Không tải được nội dung';
var ERROR_BODY = 'Các phần khác của hệ thống vẫn hoạt động bình thường. Bạn có thể thử lại hoặc tiếp tục sử dụng các chức năng khác.';
function resolveMfeDom(props) {
  var _ref, _props$domElement;
  return (_ref = (_props$domElement = props === null || props === void 0 ? void 0 : props.domElement) !== null && _props$domElement !== void 0 ? _props$domElement : document.getElementById('main-content')) !== null && _ref !== void 0 ? _ref : undefined;
}
function renderMfeError(el, appName) {
  var _el$querySelector;
  if (!el) return;
  var safeName = String(appName || '').replace(/[<>&"]/g, '');
  el.innerHTML = "\n    <div class=\"linm-mfe-error\" role=\"alert\" data-mfe=\"".concat(safeName, "\">\n      <div class=\"linm-mfe-error__icon\" aria-hidden=\"true\">!</div>\n      <h2 class=\"linm-mfe-error__title\">").concat(ERROR_TITLE, "</h2>\n      <p class=\"linm-mfe-error__body\">").concat(ERROR_BODY, "</p>\n      <button type=\"button\" class=\"linm-mfe-error__retry\" data-linm-mfe-retry>Th\u1EED l\u1EA1i</button>\n    </div>\n  ");
  (_el$querySelector = el.querySelector('[data-linm-mfe-retry]')) === null || _el$querySelector === void 0 || _el$querySelector.addEventListener('click', function () {
    window.location.reload();
  });
}
function invokeLifecycle(fn, props) {
  var fns = Array.isArray(fn) ? fn : [fn];
  return fns.reduce(function (chain, item) {
    return chain.then(function () {
      if (typeof item !== 'function') return undefined;
      try {
        var result = item(props);
        return result != null && typeof result.then === 'function' ? result : Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    });
  }, Promise.resolve());
}
function createMfeErrorLifecycle(appName) {
  return {
    name: appName,
    bootstrap: function bootstrap() {
      return Promise.resolve();
    },
    mount: function mount(props) {
      renderMfeError(resolveMfeDom(props), appName);
      return Promise.resolve();
    },
    unmount: function unmount(props) {
      var el = resolveMfeDom(props);
      if (el) el.innerHTML = '';
      return Promise.resolve();
    }
  };
}

/** Wrap MFE/parcel lifecycles: always return a Promise; on fail show error UI and resolve so the shell stays up. */
function wrapMfeLifecycles(appName, module) {
  var raw = module;
  var src = raw !== null && raw !== void 0 && raw.default && typeof raw.default.bootstrap === 'function' ? raw.default : raw;
  if (!src || typeof src.mount !== 'function') {
    logError("[SingleSpa] ".concat(appName, " has no mount lifecycle \u2014 showing MFE error"));
    return createMfeErrorLifecycle(appName);
  }
  return {
    name: appName,
    bootstrap: function bootstrap(props) {
      return invokeLifecycle(src.bootstrap, props).catch(function (err) {
        logError("[SingleSpa] ".concat(appName, " bootstrap failed: ").concat(err));
        return undefined;
      });
    },
    mount: function mount(props) {
      return invokeLifecycle(src.mount, props).catch(function (err) {
        logError("[SingleSpa] ".concat(appName, " mount failed: ").concat(err));
        renderMfeError(resolveMfeDom(props), appName);
        return undefined;
      });
    },
    unmount: function unmount(props) {
      return invokeLifecycle(src.unmount, props).catch(function (err) {
        logError("[SingleSpa] ".concat(appName, " unmount failed: ").concat(err));
        var el = resolveMfeDom(props);
        if (el) el.innerHTML = '';
        return undefined;
      });
    }
  };
}
;// ./src/libs/startup/single-spa.ts






function single_spa_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function single_spa_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? single_spa_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : single_spa_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

function single_spa_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = single_spa_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function single_spa_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return single_spa_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? single_spa_arrayLikeToArray(r, a) : void 0; } }
function single_spa_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }










function mergeUniqueRoutes() {
  var out = [];
  for (var _len = arguments.length, groups = new Array(_len), _key = 0; _key < _len; _key++) {
    groups[_key] = arguments[_key];
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group = _groups[_i];
    var _iterator = single_spa_createForOfIteratorHelper(group),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var route = _step.value;
        if (!out.includes(route)) out.push(route);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return out;
}
function isParcelName(name) {
  return !!name && /^parcel-\d+$/.test(name);
}
var SingleSpa = /*#__PURE__*/function () {
  function SingleSpa() {
    _classCallCheck(this, SingleSpa);
    _defineProperty(this, "MAX_RETRIES", 3);
    _defineProperty(this, "RETRY_DELAY", 1000);
    _defineProperty(this, "_rootProps", null);
  }
  return _createClass(SingleSpa, [{
    key: "loadAppWithRetry",
    value: function () {
      var _loadAppWithRetry = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(name) {
        var retryCount,
          moduleName,
          loaded,
          errStr,
          isImportMapMiss,
          delay,
          _args = arguments,
          _t;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              retryCount = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
              moduleName = resolveMfeModuleName(name);
              if (moduleName !== name) {
                logInfo("[SingleSpa] Legacy MF alias: ".concat(name, " \u2192 ").concat(moduleName));
              }
              _context.prev = 1;
              logInfo("[SingleSpa] Loading module: ".concat(moduleName));
              _context.next = 2;
              return System.import(moduleName);
            case 2:
              loaded = _context.sent;
              return _context.abrupt("return", wrapMfeLifecycles(name, loaded));
            case 3:
              _context.prev = 3;
              _t = _context["catch"](1);
              logError("[SingleSpa] Failed to load ".concat(name, " (attempt ").concat(retryCount + 1, "): ").concat(_t));
              errStr = String(_t); // Static asset load failed during deploy (404, HTML error page, network blip).
              // Hard reload picks up fresh _manifest.json; sessionStorage counter caps reloads.
              if (!(isDeployRelatedLoadError(_t) && !SingleSpa._deployFailureHandled)) {
                _context.next = 4;
                break;
              }
              SingleSpa._deployFailureHandled = true;
              if (scheduleDeployReload("module load failed: ".concat(name))) {
                logWarn("[SingleSpa] Deploy-related load error for ".concat(name, " \u2014 scheduling reload"));
              } else {
                logError('[SingleSpa] Deploy recovery reload cap reached — giving up');
              }
              return _context.abrupt("return", createMfeErrorLifecycle(name));
            case 4:
              // SystemJS Error#8 = bare specifier not in importmap — deterministic, retrying won't help.
              isImportMapMiss = errStr.includes('Unable to resolve bare specifier');
              if (!(!isImportMapMiss && retryCount < this.MAX_RETRIES)) {
                _context.next = 6;
                break;
              }
              delay = this.RETRY_DELAY * Math.pow(2, retryCount);
              _context.next = 5;
              return new Promise(function (resolve) {
                return setTimeout(resolve, delay);
              });
            case 5:
              return _context.abrupt("return", this.loadAppWithRetry(name, retryCount + 1));
            case 6:
              logWarn("[SingleSpa] Gave up loading ".concat(name).concat(isImportMapMiss ? ' (not in importmap)' : " after ".concat(this.MAX_RETRIES, " retries"), " \u2014 mounting error slot"));
              return _context.abrupt("return", createMfeErrorLifecycle(name));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 3]]);
      }));
      function loadAppWithRetry(_x) {
        return _loadAppWithRetry.apply(this, arguments);
      }
      return loadAppWithRetry;
    }()
  }, {
    key: "navigateTo",
    value: function navigateTo(path) {
      (0,external_single_spa_.navigateToUrl)(path);
    }
  }, {
    key: "setupNavTransition",
    value: function setupNavTransition() {
      var overlay = document.getElementById('spa-nav-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'spa-nav-overlay';
        document.body.appendChild(overlay);
      }
      window.addEventListener('single-spa:before-mount-routing-event', function (evt) {
        var _detail$appsByNewStat;
        var detail = evt.detail;
        var _ref = (_detail$appsByNewStat = detail === null || detail === void 0 ? void 0 : detail.appsByNewStatus) !== null && _detail$appsByNewStat !== void 0 ? _detail$appsByNewStat : {},
          _ref$MOUNTED = _ref.MOUNTED,
          MOUNTED = _ref$MOUNTED === void 0 ? [] : _ref$MOUNTED,
          _ref$NOT_MOUNTED = _ref.NOT_MOUNTED,
          NOT_MOUNTED = _ref$NOT_MOUNTED === void 0 ? [] : _ref$NOT_MOUNTED;
        if (MOUNTED.length > 0 || NOT_MOUNTED.length > 0) {
          var _document$getElementB;
          (_document$getElementB = document.getElementById('spa-nav-overlay')) === null || _document$getElementB === void 0 || _document$getElementB.classList.add('visible');
        }
      });
      window.addEventListener('single-spa:routing-event', function () {
        var _document$getElementB2;
        (_document$getElementB2 = document.getElementById('spa-nav-overlay')) === null || _document$getElementB2 === void 0 || _document$getElementB2.classList.remove('visible');
      });
    }
  }, {
    key: "setupErrorHandler",
    value: function setupErrorHandler() {
      // Listen for lifecycle errors (mount/unmount/boot) that put apps into
      // SKIP_BECAUSE_BROKEN. When detected, try to heal by:
      //   1. Deleting the stale SystemJS module cache
      //   2. Unregistering the broken app from single-spa
      //   3. Dispatching a custom event so the cleanup handler can re-register
      //
      // This handles the deploy-switch scenario where a cached module references
      // chunk URLs that were removed by the new deploy.
      (0,external_single_spa_.addErrorHandler)(function (err) {
        var appName = err.appOrParcelName;
        var status = err.newAppStatus;
        logError("[SingleSpa] Lifecycle error [".concat(appName !== null && appName !== void 0 ? appName : 'unknown', "]: ").concat(err.message, " (status=").concat(status, ")"));

        // ChunkLoadError / SPA HTML-for-.js — soft System.delete cannot fix webpack
        // runtime chunk map; hard reload picks up fresh entry + _manifest.json.
        if (isDeployRelatedLoadError(err) || isDeployRelatedLoadError(err === null || err === void 0 ? void 0 : err.message)) {
          if (!SingleSpa._deployFailureHandled) {
            SingleSpa._deployFailureHandled = true;
            if (scheduleDeployReload("lifecycle deploy/chunk error: ".concat(appName !== null && appName !== void 0 ? appName : 'unknown'), 1500)) {
              logWarn("[SingleSpa] Deploy/chunk lifecycle error \u2014 scheduling hard reload");
            }
          }
          return;
        }
        if (!appName || status !== 'SKIP_BECAUSE_BROKEN') return;
        if (isParcelName(appName)) {
          logWarn("[SingleSpa] Parcel ".concat(appName, " failed \u2014 isolated; shell stays up"));
          return;
        }
        if (SingleSpa._brokenAppRetried.has(appName)) return;
        SingleSpa._brokenAppRetried.add(appName);
        logWarn("[SingleSpa] ".concat(appName, " failed \u2014 isolating slot, not breaking shell"));
      });
    }

    /**
     * Soft-recover a SKIP_BECAUSE_BROKEN app without a full page reload:
     *   1. Strip React component caches so stale chunks don't linger
     *   2. Remove the module from SystemJS registry (forces fresh fetch)
     *   3. Unregister the single-spa app
     *   4. Re-register with a fresh `loadApp` call
     *   5. Navigate to the same URL to trigger single-spa remount
     *
     * If recovery fails (e.g. genuine 404), the error handler fires again but
     * `_brokenAppRetried` prevents infinite loops — falls through to the no-op
     * lifecycle.
     */
  }, {
    key: "recoverBrokenApp",
    value: (function () {
      var _recoverBrokenApp = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(appName) {
        var _this = this;
        var moduleName, appProps, loadFn, _t2, _t3;
        return regenerator_default().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              logInfo("[SingleSpa] Recovery: purging stale caches for ".concat(appName));

              // 1. Strip React hot-reload / chunk caches
              this.stripReactModuleCache(appName);

              // 2. Delete SystemJS registry entry so next import fetches from network
              moduleName = resolveMfeModuleName(appName);
              if (System.delete && System.delete(moduleName)) {
                logInfo("[SingleSpa] Recovery: System.delete(".concat(moduleName, ") succeeded"));
              } else {
                logInfo("[SingleSpa] Recovery: System.delete(".concat(moduleName, ") not available or not cached"));
              }

              // 3. Unregister from single-spa — this erases the SKIP_BECAUSE_BROKEN status
              //    and removes route activity so we can re-register with a fresh loadApp.
              _context2.prev = 1;
              _context2.next = 2;
              return (0,external_single_spa_.unregisterApplication)(appName);
            case 2:
              logInfo("[SingleSpa] Recovery: unregistered ".concat(appName));
              _context2.next = 4;
              break;
            case 3:
              _context2.prev = 3;
              _t2 = _context2["catch"](1);
              logWarn("[SingleSpa] Recovery: unregisterApplication(".concat(appName, ") failed: ").concat(_t2));
              // Continue anyway — try to re-register
            case 4:
              _context2.prev = 4;
              appProps = single_spa_objectSpread({}, this._rootProps);
              loadFn = function loadFn() {
                return _this.loadAppWithRetry(appName);
              };
              (0,external_single_spa_.registerApplication)(appName, loadFn, function () {
                return true;
              }, appProps);
              logInfo("[SingleSpa] Recovery: re-registered ".concat(appName));
              _context2.next = 6;
              break;
            case 5:
              _context2.prev = 5;
              _t3 = _context2["catch"](4);
              logError("[SingleSpa] Recovery: registerApplication(".concat(appName, ") failed: ").concat(_t3));
              return _context2.abrupt("return");
            case 6:
              // 5. Navigate to current URL to trigger single-spa remount
              setTimeout(function () {
                (0,external_single_spa_.navigateToUrl)(window.location.href);
                logInfo("[SingleSpa] Recovery: navigateToUrl triggered for ".concat(appName));
              }, 100);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 3], [4, 5]]);
      }));
      function recoverBrokenApp(_x2) {
        return _recoverBrokenApp.apply(this, arguments);
      }
      return recoverBrokenApp;
    }()
    /**
     * Invalidate React-internal module caches that may hold stale references
     * to chunk URLs from the previous deploy. This covers:
     *   - React.lazy() loaded components
     *   - Hot Module Replacement (webpack) module registry
     *   - __SECRET_INTERNALS caches
     */
    )
  }, {
    key: "stripReactModuleCache",
    value: function stripReactModuleCache(appName) {
      try {
        // Strip React.lazy() / __SECRET_INTERNALS internal caches
        var reactInternals = window.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        if (reactInternals !== null && reactInternals !== void 0 && reactInternals.ReactCurrentOwner) {
          var fiberRoots = reactInternals.ReactBatchedUpdates;
          if (fiberRoots) {
            logInfo("[SingleSpa] Stripped React internals for ".concat(appName));
          }
        }

        // Strip webpack module cache entries that contain the app name
        var wpm = window.__webpack_modules__;
        if (wpm && _typeof(wpm) === 'object') {
          var keys = Object.keys(wpm);
          var appKeys = keys.filter(function (k) {
            return k.includes(appName) || k.includes(appName.replace(/[@/]/g, '-'));
          });
          if (appKeys.length > 0) {
            appKeys.forEach(function (k) {
              return delete wpm[k];
            });
            logInfo("[SingleSpa] Stripped ".concat(appKeys.length, " webpack module entries for ").concat(appName));
          }
        }

        // Strip any SystemJS-installed <script> tags that belong to this app
        document.querySelectorAll("script[data-systemjs-name]").forEach(function (el) {
          var name = el.getAttribute('data-systemjs-name');
          if (name && (name === appName || name === resolveMfeModuleName(appName))) {
            el.remove();
            logInfo("[SingleSpa] Removed SystemJS script tag for ".concat(appName));
          }
        });
      } catch (e) {
        // Non-critical — best-effort only
      }
    }
  }, {
    key: "buildRoutesConfig",
    value:
    /**
     * Build single-spa routes from mfe.config.json (local dev + parcels/default)
     * merged with _manifest.json route metadata (production auto-discovery).
     *
     * ⚠ Route deduplication: when two different MFEs claim the same route prefix
     * (e.g. @linm/admin and @linm/fnb-admin both registering "admin"), only the
     * first one encountered is kept. A warning is logged so the conflict can be
     * resolved in the fragment config.
     */
    function buildRoutesConfig(rootProps) {
      var appProps = rootProps;
      var byName = new Map();
      var _iterator2 = single_spa_createForOfIteratorHelper(mfe_config_namespaceObject.cd),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _prev$routes2, _routes;
          var _mfe = _step2.value;
          if (_mfe.parcel) continue;
          var _name2 = resolveMfeModuleName(_mfe.name);
          var _prev = byName.get(_name2);
          byName.set(_name2, {
            routes: mergeUniqueRoutes((_prev$routes2 = _prev === null || _prev === void 0 ? void 0 : _prev.routes) !== null && _prev$routes2 !== void 0 ? _prev$routes2 : [], (_routes = _mfe.routes) !== null && _routes !== void 0 ? _routes : []),
            default: !!_mfe.default || !!(_prev !== null && _prev !== void 0 && _prev.default)
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var manifest = typeof window !== 'undefined' ? window.__LINM_MF_MANIFEST__ : undefined;
      if (manifest !== null && manifest !== void 0 && manifest.microfrontends) {
        for (var _i2 = 0, _Object$entries = Object.entries(manifest.microfrontends); _i2 < _Object$entries.length; _i2++) {
          var _info$routes, _prev$routes, _ref2, _info$default;
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            rawName = _Object$entries$_i[0],
            info = _Object$entries$_i[1];
          if (!((_info$routes = info.routes) !== null && _info$routes !== void 0 && _info$routes.length)) continue;
          var name = resolveMfeModuleName(rawName);
          if (name !== rawName) {
            logInfo("[SingleSpa] Manifest legacy route alias: ".concat(rawName, " \u2192 ").concat(name));
          }
          var prev = byName.get(name);
          byName.set(name, {
            routes: mergeUniqueRoutes((_prev$routes = prev === null || prev === void 0 ? void 0 : prev.routes) !== null && _prev$routes !== void 0 ? _prev$routes : [], info.routes),
            default: (_ref2 = (_info$default = info.default) !== null && _info$default !== void 0 ? _info$default : prev === null || prev === void 0 ? void 0 : prev.default) !== null && _ref2 !== void 0 ? _ref2 : false
          });
          logInfo("[SingleSpa] Manifest routes: ".concat(name, " \u2192 [").concat(info.routes.join(', '), "]"));
        }
      }

      // ── Route deduplication ───────────────────────────────────────────────
      // Track which route prefixes have already been claimed. When two different
      // MFEs register the same prefix (e.g. @linm/admin and @linm/fnb-admin both
      // claim "admin"), keep only the first — the one from common.json that loads
      // earlier in the profile fragment list.  This prevents single-spa from
      // mounting two apps on the same URL, which causes "wrong page" bugs.
      // ──────────────────────────────────────────────────────────────────────
      var claimedRoutes = new Set();
      var routes = [];
      var defaultApp = null;
      for (var _i3 = 0, _Array$from = Array.from(byName.entries()); _i3 < _Array$from.length; _i3++) {
        var _Array$from$_i = _slicedToArray(_Array$from[_i3], 2),
          _rawName = _Array$from$_i[0],
          meta = _Array$from$_i[1];
        var _name = resolveMfeModuleName(_rawName);
        var _iterator3 = single_spa_createForOfIteratorHelper(meta.routes),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _path = _step3.value;
            if (claimedRoutes.has(_path)) {
              logWarn("[SingleSpa] Route \"".concat(_path, "\" already claimed \u2014 skipping for ").concat(_name));
              continue;
            }
            claimedRoutes.add(_path);
            routes.push({
              type: 'route',
              path: _path,
              routes: [{
                type: 'application',
                name: _name,
                props: appProps
              }]
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        if (meta.default) defaultApp = _name;
      }
      if (!defaultApp) {
        var _iterator4 = single_spa_createForOfIteratorHelper(mfe_config_namespaceObject.cd),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var mfe = _step4.value;
            if (mfe.default) {
              defaultApp = resolveMfeModuleName(mfe.name);
              break;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (defaultApp) {
        routes.push({
          type: 'route',
          default: true,
          routes: [{
            type: 'application',
            name: defaultApp,
            props: appProps
          }]
        });
      }
      return {
        routes: routes
      };
    }
  }, {
    key: "start",
    value: function start(props) {
      var _this2 = this;
      this._rootProps = props;
      // Do not reset deploy reload cap here — lazy ChunkLoadError happens after start().
      document.querySelectorAll('.root-loader').forEach(function (el) {
        return el.remove();
      });
      // Runtime SSOT for downstream MFEs (e.g. Navigation topbar slot gate).
      window.__LINM_ENABLE_MESSAGE__ = AppSettings.ENABLE_MESSAGE;
      window.__LINM_ENABLE_NOTIFICATION__ = AppSettings.ENABLE_NOTIFICATION;
      this.setupErrorHandler();
      this.setupNavTransition();
      this.setupNavVisibility();
      this.setupCssCleanup();
      setupPermissionsBootstrap();
      var routes = P(this.buildRoutesConfig(props));
      var applications = F({
        routes: routes,
        loadApp: function loadApp(_ref3) {
          var name = _ref3.name;
          return _this2.loadAppWithRetry(name);
        }
      });
      var layoutEngine = I({
        routes: routes,
        applications: applications
      });
      applications.forEach(external_single_spa_.registerApplication);
      layoutEngine.activate();
      (0,external_single_spa_.start)({
        urlRerouteOnly: true
      });
      this.mountParcels(props);
    }

    /**
     * Keep the nav slot hidden until the user is authenticated.
     * Also hide nav on shell-embed paths (external app iframe — ShellUrl MFE).
     */
  }, {
    key: "setupNavVisibility",
    value: function setupNavVisibility() {
      var PUBLIC_PATHS = ['/login', '/logout', '/session-expired', '/unauthorized', '/oidc-callback', '/oidc-silent-renew', '/scyk/bao-su-co', '/integration/users/register'];
      var SHELL_EMBED_PREFIXES = ['/shell-url', '/shell'];
      var toggle = function toggle() {
        var navDom = document.getElementById('navigation');
        if (!navDom) return;
        var path = window.location.pathname;
        var isPublic = PUBLIC_PATHS.some(function (p) {
          return path === p || path.startsWith(p + '/');
        });
        var isShellEmbed = SHELL_EMBED_PREFIXES.some(function (p) {
          return path === p || path.startsWith(p + '/');
        });
        var isPhone = path === '/m' || path.startsWith('/m/');
        var isAuthenticated = hasValidAuthToken();
        navDom.style.display = isPublic || !isAuthenticated || isShellEmbed || isPhone ? 'none' : '';
      };
      window.addEventListener('single-spa:routing-event', toggle);
      window.addEventListener('linm:auth:token-changed', toggle);
      toggle();
    }

    /**
     * Clean up orphaned <style> tags injected by style-loader on MFE navigation.
     *
     * style-loader appends new <style> elements on module evaluation but never
     * removes them on single-spa unmount. When navigating between MFEs, orphaned
     * tags accumulate and cause CSS cascade conflicts (duplicate rules, broken
     * layouts).  This method deduplicates <style> tags by their text content:
     * identical content = orphan from a previous mount.
     *
     * The root <style> from styles.ts is tagged `data-linm-css="root"` and is
     * never removed. All other <style> tags are tagged `data-linm-css="mfe"`.
     *
     * On each routing event, we deduplicate: for each unique style text content
     * we keep only the LATEST occurrence (the freshly injected one) and remove
     * any earlier duplicates (orphans from prior MFE loads).
     */
  }, {
    key: "setupCssCleanup",
    value: function setupCssCleanup() {
      var _document$head;
      // Tag all existing <style> as root (permanent)
      document.head.querySelectorAll('style').forEach(function (el) {
        return el.setAttribute('data-linm-css', 'root');
      });

      // Tag new <style> tags injected by style-loader as MFE-scoped
      var mo = new MutationObserver(function (mutations) {
        var _iterator5 = single_spa_createForOfIteratorHelper(mutations),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var m = _step5.value;
            if (m.type !== 'childList') continue;
            var nodes = m.addedNodes;
            for (var i = 0; i < nodes.length; i++) {
              var node = nodes[i];
              if (node instanceof HTMLStyleElement && !node.hasAttribute('data-linm-css')) {
                node.setAttribute('data-linm-css', 'mfe');
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      });
      var target = (_document$head = document.head) !== null && _document$head !== void 0 ? _document$head : document.documentElement;
      mo.observe(target, {
        childList: true
      });
      window.addEventListener('single-spa:routing-event', function () {
        var mfeStyles = document.querySelectorAll('style[data-linm-css="mfe"]');
        if (mfeStyles.length <= 1) return;

        // Iterate backward: keep the LATEST occurrence of each unique content,
        // remove earlier duplicates (orphaned from previous MFE mounts).
        var seen = new Set();
        var orphans = [];
        for (var i = mfeStyles.length - 1; i >= 0; i--) {
          var text = mfeStyles[i].innerHTML;
          if (seen.has(text)) {
            orphans.push(mfeStyles[i]);
          } else {
            seen.add(text);
          }
        }
        orphans.forEach(function (el) {
          return el.remove();
        });
        if (orphans.length > 0) {
          logInfo("[SingleSpa] Cleaned up ".concat(orphans.length, " orphaned <style> tags"));
        }
      });
    }

    /**
     * Mount all parcel-type MFEs declared in mfe.config.json.
     * Parcels with domId mount into an existing DOM element; others get an invisible lifecycle div.
     */
  }, {
    key: "mountParcels",
    value: function mountParcels(props) {
      var _this3 = this;
      var parcelGate = {
        '@linm/message': AppSettings.ENABLE_MESSAGE,
        '@linm/notification': AppSettings.ENABLE_NOTIFICATION
      };
      var parcels = mfe_config_namespaceObject.cd.filter(function (mfe) {
        if (!mfe.parcel) return false;
        var enabled = parcelGate[mfe.name];
        return enabled === undefined ? true : enabled;
      });
      var _iterator6 = single_spa_createForOfIteratorHelper(parcels),
        _step6;
      try {
        var _loop = function _loop() {
          var _parcelConfig$props;
          var mfe = _step6.value;
          var parcelConfig = mfe.parcel;
          var propNames = (_parcelConfig$props = parcelConfig.props) !== null && _parcelConfig$props !== void 0 ? _parcelConfig$props : [];
          var parcelProps = {
            domElement: null
          };
          var _iterator7 = single_spa_createForOfIteratorHelper(propNames),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var key = _step7.value;
              parcelProps[key] = props[key];
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          _this3.loadAppWithRetry(mfe.name).then(function (module) {
            var domElement;
            if (parcelConfig.domId) {
              var existing = document.getElementById(parcelConfig.domId);
              if (!existing) {
                logWarn("[SingleSpa] DOM element #".concat(parcelConfig.domId, " not found for parcel ").concat(mfe.name));
                return;
              }
              domElement = existing;
            } else {
              domElement = document.createElement('div');
              domElement.id = "".concat(mfe.name.replace(/[@/]/g, '-'), "-lifecycle");
              document.body.appendChild(domElement);
            }
            if (!(module !== null && module !== void 0 && module.bootstrap) || !(module !== null && module !== void 0 && module.mount)) {
              renderMfeError(domElement, mfe.name);
              return;
            }
            var parcel = (0,external_single_spa_.mountRootParcel)(module, single_spa_objectSpread(single_spa_objectSpread({}, parcelProps), {}, {
              name: mfe.name,
              domElement: domElement
            }));
            parcel.mountPromise.catch(function (err) {
              logError("[SingleSpa] Parcel mount failed [".concat(mfe.name, "]: ").concat(err));
              renderMfeError(domElement, mfe.name);
            });
            logInfo("[SingleSpa] Parcel mounted: ".concat(mfe.name));
          }).catch(function (error) {
            logError("[SingleSpa] Parcel failed to mount [".concat(mfe.name, "]: ").concat(error));
            var host = parcelConfig.domId ? document.getElementById(parcelConfig.domId) : null;
            if (host) renderMfeError(host, mfe.name);
          });
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }]);
}();
_defineProperty(SingleSpa, "_deployFailureHandled", false);
/**
 * Track broken app names across the session so each app gets at most
 * one unload + re-register attempt per session. This prevents infinite
 * retry loops when a bundle is genuinely missing.
 */
_defineProperty(SingleSpa, "_brokenAppRetried", new Set());
;// ./src/libs/startup/startup.ts






var Startup = /*#__PURE__*/function () {
  function Startup(deps) {
    var _this = this;
    _classCallCheck(this, Startup);
    _defineProperty(this, "_loadPage", function () {
      var props = {
        name: undefined,
        user: _this._user,
        authentication: _this._authenticator,
        featureToggle: _this._featureToggle
      };
      _this._singleSpa.start(props);
    });
    this._authenticator = deps.authenticator;
    this._user = deps.user;
    this._router = deps.router;
    this._singleSpa = deps.singleSpa;
    this._appSettings = deps.appSettings;
    this._featureToggle = deps.featureToggle;
  }
  return _createClass(Startup, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var oidcUser, _t, _t2;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this._appSettings.OIDC_ENABLED) {
                _context.next = 1;
                break;
              }
              logInfo('[Startup] OIDC disabled — starting single-spa immediately');
              this._loadPage();
              return _context.abrupt("return", false);
            case 1:
              _context.prev = 1;
              _context.next = 2;
              return this._authenticator.getUser();
            case 2:
              oidcUser = _context.sent;
              if (!(!oidcUser || oidcUser.expired)) {
                _context.next = 6;
                break;
              }
              logInfo('[Startup] No valid OIDC session — attempting silent sign-in');
              _context.prev = 3;
              _context.next = 4;
              return this._authenticator.loginSilentAsync();
            case 4:
              oidcUser = _context.sent;
              logInfo('[Startup] Silent sign-in succeeded');
              _context.next = 6;
              break;
            case 5:
              _context.prev = 5;
              _t = _context["catch"](3);
              logInfo("[Startup] Silent sign-in failed (".concat(_t, ") \u2014 starting unauthenticated"));
              this._loadPage();
              return _context.abrupt("return", false);
            case 6:
              logInfo('[Startup] OIDC user authenticated — starting app');
              this._loadPage();
              return _context.abrupt("return", true);
            case 7:
              _context.prev = 7;
              _t2 = _context["catch"](1);
              logError("[Startup] Unexpected error: ".concat(_t2));
              this._loadPage();
              return _context.abrupt("return", false);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 7], [3, 5]]);
      }));
      function run() {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }]);
}();
;// ./src/libs/startup/bootstrap.ts







var bootstrap = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(authenticator, appSettings) {
    var user, router, featureToggle, startup;
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // When OIDC is disabled the platform uses JWT auth managed by Web.Home.
          // LocalStorageUser reads the token/profile written by Web.Home's authSlice
          // so nav parcels and MFEs that call user.getAccessToken() get the real JWT.
          user = appSettings.OIDC_ENABLED ? new user_User(authenticator) : new LocalStorageUser();
          router = new Router(appSettings);
          featureToggle = new FeatureToggle();
          startup = new Startup({
            authenticator: authenticator,
            user: user,
            router: router,
            singleSpa: new SingleSpa(),
            appSettings: appSettings,
            featureToggle: featureToggle
          }); // Web.Home manages its own JWT auth — just start single-spa
          _context.next = 1;
          return startup.run();
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function bootstrap(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
;// ./src/libs/configuration/forceBffDomain.ts
/**
 * `FORCE_BFF_DOMAIN` is a boolean on `_manifest.json`.
 * `true` → every MFE `env.VITE_API_URL` = `@linm/root-config`.env.VITE_API_URL.
 *
 * Inline twin: `src/index.ejs` `applyLinmRuntimeEnv` — keep flag parse in sync.
 */

function isForceBffFlagOn(value) {
  return value === true || value === 'true' || value === 1 || value === '1';
}
function isForceBffDomainEnabled(manifest) {
  var _manifest$microfronte, _manifest$env;
  if (!manifest) return false;
  var rootEnv = (_manifest$microfronte = manifest.microfrontends) === null || _manifest$microfronte === void 0 || (_manifest$microfronte = _manifest$microfronte['@linm/root-config']) === null || _manifest$microfronte === void 0 ? void 0 : _manifest$microfronte.env;
  return isForceBffFlagOn((_manifest$env = manifest.env) === null || _manifest$env === void 0 ? void 0 : _manifest$env.FORCE_BFF_DOMAIN) || isForceBffFlagOn(rootEnv === null || rootEnv === void 0 ? void 0 : rootEnv.FORCE_BFF_DOMAIN);
}
function readRootViteApiUrl(manifest) {
  var _manifest$microfronte2, _manifest$env2;
  if (!manifest) return '';
  var root = (_manifest$microfronte2 = manifest.microfrontends) === null || _manifest$microfronte2 === void 0 || (_manifest$microfronte2 = _manifest$microfronte2['@linm/root-config']) === null || _manifest$microfronte2 === void 0 || (_manifest$microfronte2 = _manifest$microfronte2.env) === null || _manifest$microfronte2 === void 0 ? void 0 : _manifest$microfronte2.VITE_API_URL;
  var site = (_manifest$env2 = manifest.env) === null || _manifest$env2 === void 0 ? void 0 : _manifest$env2.VITE_API_URL;
  return String(root || site || '').trim().replace(/\/$/, '');
}
var BFF_API_SUFFIX = '/web-bff/api/v1';

/**
 * MFE bundles often bake `VITE_API_URL` into their own `apiClient`.
 * Rewrite `…/web-bff/api/v1/…` to Root `__LINM_AUTH_BFF_BASE__` when forced.
 */
function rewriteForcedBffFetchUrl(requestUrl) {
  if (typeof window === 'undefined' || window.__LINM_FORCE_BFF_DOMAIN__ !== true) {
    return requestUrl;
  }
  var forced = String(window.__LINM_AUTH_BFF_BASE__ || '').trim().replace(/\/$/, '');
  if (!forced) return requestUrl;
  try {
    var parsed = new URL(requestUrl, window.location.origin);
    var path = parsed.pathname || '';
    var idx = path.indexOf(BFF_API_SUFFIX);
    if (idx === -1) return requestUrl;
    var rest = "".concat(path.slice(idx + BFF_API_SUFFIX.length)).concat(parsed.search).concat(parsed.hash);
    return "".concat(forced).concat(rest);
  } catch (_unused) {
    return requestUrl;
  }
}

/** Copy Root `VITE_API_URL` onto every MFE entry (in-memory manifest). */
function applyForceBffDomainToManifest(manifest, rootApiUrl) {
  if (!manifest.env) manifest.env = {};
  manifest.env.FORCE_BFF_DOMAIN = true;
  var entries = manifest.microfrontends || {};
  for (var _i = 0, _Object$keys = Object.keys(entries); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];
    var entry = entries[name];
    if (!entry.env) entry.env = {};
    entry.env.VITE_API_URL = rootApiUrl;
    entry.env.FORCE_BFF_DOMAIN = true;
  }
}
;// ./src/libs/auth/crossTabLogoutStorage.ts
/* unused harmony import specifier */ var crossTabLogoutStorage_getSecureItem;
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/crossTabLogoutStorage.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */

var LOGOUT_SIGNAL_KEY = 'app-logout-signal';
var CONFIG = {
  storageKey: LOGOUT_SIGNAL_KEY,
  version: 1,
  hashKey: 'auth.logoutSignal'
};
function getLogoutSignal() {
  return crossTabLogoutStorage_getSecureItem(CONFIG, {
    allowLegacyPlain: true
  });
}
function setLogoutSignal(message) {
  setSecureItem(CONFIG, message);
}
function clearLogoutSignal() {
  removeSecureItem(CONFIG);
}
;// ./src/libs/logout/cross-tab-logout.ts
var LOGOUT_CHANNEL = 'app-logout-channel';
var LOGOUT_MESSAGE = 'LOGOUT';
var LOGOUT_STORAGE_KEY = 'app-logout-signal';



/**
 * Listen for logout signals from other tabs via BroadcastChannel (fast) and
 * native storage event (reliable fallback).  Both paths are registered
 * unconditionally so asymmetric failures (one tab lacks BroadcastChannel) are
 * covered: the storage event path never misses a signal broadcast via
 * localStorage.
 *
 * Broadcast only happens AFTER the logout API call succeeds on the initiating
 * tab (ShellLogoutHandler dispatches `linm:logout:complete`), so all other tabs
 * reload with fresh state — no API race conditions.
 */
var initializeCrossTabLogout = function initializeCrossTabLogout() {
  /* ── BroadcastChannel (fast path) ── */
  try {
    var channel = new BroadcastChannel(LOGOUT_CHANNEL);
    channel.onmessage = function (event) {
      if (event.data === LOGOUT_MESSAGE && !isLoginPath(window.location.pathname)) {
        window.location.href = loginUrlForPath(window.location.pathname);
      }
    };
  } catch (_unused) {
    // BroadcastChannel unsupported — storage fallback (registered below) covers it.
  }

  /* ── Native storage event (reliable fallback) ── */
  window.addEventListener('storage', function (event) {
    if (event.key !== LOGOUT_STORAGE_KEY) return;
    var signal = extractLogoutSignal(event.newValue);
    if (signal === LOGOUT_MESSAGE) {
      clearLogoutSignal();
      if (!isLoginPath(window.location.pathname)) {
        window.location.href = loginUrlForPath(window.location.pathname);
      }
    }
  });

  /* ── Logout-complete event (from ShellLogoutHandler after API succeeds) ──
   *
   * The Nav MFE click handler calls navigateToUrl('/logout') which triggers a
   * single-spa SPA transition.  ShellLogoutHandler in Web.Home then dispatches
   * the logout thunk (POST /auth/logout).  Only after that API call resolves
   * does ShellLogoutHandler fire this custom event, ensuring cross-tab
   * broadcast happens AFTER tokens are invalidated server-side.
   *
   * This replaces the old approach of broadcasting from the routing-event
   * listener, which raced the API call and caused other tabs to reload before
   * the initiating tab had finished logout.
   */
  window.addEventListener('linm:logout:complete', function () {
    broadcastLogoutToOtherTabs();
  });
};
function isLoginPath(pathname) {
  return pathname === '/login' || pathname === '/m/dang-nhap';
}

/** Phone session logs in at `/m/dang-nhap`. Desktop stays on `/login`. */
function loginUrlForPath(pathname) {
  if (pathname === '/m' || pathname.startsWith('/m/')) return '/m/dang-nhap';
  return '/login';
}
function extractLogoutSignal(raw) {
  if (!raw) return null;
  if (isSecureEnvelopeRaw(raw)) {
    try {
      var envelope = JSON.parse(raw);
      if (envelope.hk === 'auth.logoutSignal') return envelope.d;
    } catch (_unused2) {
      return null;
    }
  }
  return raw;
}

/**
 * Broadcast a logout signal to all other tabs.
 *
 * 1. Writes to localStorage via secure envelope so the storage-event fallback
 *    listener always receives the signal — even if BroadcastChannel fails on
 *    the receiving tab.
 * 2. Posts a message via BroadcastChannel for near-instant delivery.
 *
 * The localStorage signal is cleared after 200 ms on the sending tab (it is
 * read via event.newValue on the receiving side, so the 200 ms race is safe).
 */
var broadcastLogoutToOtherTabs = function broadcastLogoutToOtherTabs() {
  /* ── localStorage signal (guaranteed delivery via storage event) ── */
  setLogoutSignal(LOGOUT_MESSAGE);
  setTimeout(function () {
    return clearLogoutSignal();
  }, 200);

  /* ── BroadcastChannel (fast path) ── */
  try {
    var channel = new BroadcastChannel(LOGOUT_CHANNEL);
    channel.postMessage(LOGOUT_MESSAGE);
    channel.close();
  } catch (_unused3) {
    // BroadcastChannel unsupported — storage event (set above) already covers it.
  }
};
;// ./src/libs/auth/authRefreshUrl.ts
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/authRefreshUrl.ts
 * Root bundles this copy — keep in sync on common-components publish.
 *
 * Runtime SSOT: `_manifest.json` env.FORCE_BFF_DOMAIN === true
 * → all MFE + auth use `@linm/root-config`.env.VITE_API_URL
 * → window.__LINM_AUTH_BFF_BASE__ (Root index.ejs). Build __LINM_AUTH_BFF_URL__ is fallback only.
 */

function isLocalDevOrigin() {
  return typeof window !== 'undefined' && /localhost|127\.0\.0\.1/.test(window.location.origin);
}
function normalizeBase(base) {
  return base.trim().replace(/\/$/, '');
}
function isValidAuthBffBase(base, localDev) {
  try {
    var u = new URL(base);
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return false;
    if (!localDev) {
      if (u.protocol !== 'https:') return false;
      if (/localhost|127\.0\.0\.1/i.test(u.hostname)) return false;
    }
    var path = u.pathname.replace(/\/$/, '');
    return path.endsWith('/web-bff/api/v1');
  } catch (_unused) {
    return false;
  }
}
function resolveAuthBffBase() {
  var _window$__LINM_MF_MAN, _window$__LINM_RUNTIM, _window$__LINM_MF_MAN2;
  var localDev = isLocalDevOrigin();
  var forceOn = typeof window !== 'undefined' && (window.__LINM_FORCE_BFF_DOMAIN__ === true || isForceBffDomainEnabled(window.__LINM_MF_MANIFEST__));
  var fromForce = forceOn ? typeof window !== 'undefined' ? window.__LINM_AUTH_BFF_BASE__ || readRootViteApiUrl(window.__LINM_MF_MANIFEST__) : undefined : undefined;
  var fromWindow = typeof window !== 'undefined' ? window.__LINM_AUTH_BFF_BASE__ : undefined;
  var fromRootMf = typeof window !== 'undefined' ? (_window$__LINM_MF_MAN = window.__LINM_MF_MANIFEST__) === null || _window$__LINM_MF_MAN === void 0 || (_window$__LINM_MF_MAN = _window$__LINM_MF_MAN.microfrontends) === null || _window$__LINM_MF_MAN === void 0 || (_window$__LINM_MF_MAN = _window$__LINM_MF_MAN['@linm/root-config']) === null || _window$__LINM_MF_MAN === void 0 || (_window$__LINM_MF_MAN = _window$__LINM_MF_MAN.env) === null || _window$__LINM_MF_MAN === void 0 ? void 0 : _window$__LINM_MF_MAN.VITE_API_URL : undefined;
  var fromManifest = typeof window !== 'undefined' ? fromRootMf || ((_window$__LINM_RUNTIM = window.__LINM_RUNTIME_ENV__) === null || _window$__LINM_RUNTIM === void 0 ? void 0 : _window$__LINM_RUNTIM.VITE_API_URL) || ((_window$__LINM_MF_MAN2 = window.__LINM_MF_MANIFEST__) === null || _window$__LINM_MF_MAN2 === void 0 || (_window$__LINM_MF_MAN2 = _window$__LINM_MF_MAN2.env) === null || _window$__LINM_MF_MAN2 === void 0 ? void 0 : _window$__LINM_MF_MAN2.VITE_API_URL) : undefined;
  var fromBuild =  true ? "https://bff.linm-soft.com/web-bff/api/v1" : 0;
  for (var _i = 0, _arr = [fromForce, fromWindow, fromManifest, fromBuild]; _i < _arr.length; _i++) {
    var candidate = _arr[_i];
    if (!(candidate !== null && candidate !== void 0 && candidate.trim())) continue;
    var base = normalizeBase(candidate);
    if (isValidAuthBffBase(base, localDev)) return base;
    console.error('[auth] Invalid auth BFF base — set @linm/root-config env.VITE_API_URL in _manifest.json');
  }
  if (localDev) {
    return 'http://localhost:5010/web-bff/api/v1';
  }
  console.error('[auth] Missing auth BFF URL — set @linm/root-config env.VITE_API_URL in _manifest.json then refresh');
  return null;
}
function resolveAuthRefreshUrl() {
  var base = resolveAuthBffBase();
  if (base) {
    return "".concat(base, "/auth/refresh-token");
  }
  if (isLocalDevOrigin()) {
    return 'http://localhost:5010/web-bff/api/v1/auth/refresh-token';
  }
  return '/web-bff/api/v1/auth/refresh-token';
}
;// ./src/libs/auth/activeCompanyStorage.ts
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/activeCompanyStorage.ts
 */

var ACTIVE_COMPANY_STORAGE_KEY = 'linm_active_company_id';
var activeCompanyStorage_CONFIG = {
  storageKey: ACTIVE_COMPANY_STORAGE_KEY,
  version: 1,
  hashKey: 'auth.activeCompany'
};
function getActiveCompanyCode() {
  return getSecureItem(activeCompanyStorage_CONFIG, {
    allowLegacyPlain: true
  });
}
function clearActiveCompanyCode() {
  removeSecureItem(activeCompanyStorage_CONFIG);
}
;// ./src/libs/auth/companyRequestHeaders.ts
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/companyRequestHeaders.ts
 */
var X_COMPANY_ID_HEADER = 'X-Company-Id';
;// ./src/libs/auth/crossTabTokenSync.ts
/**
 * Cross-tab token synchronisation via BroadcastChannel.
 *
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/crossTabTokenSync.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */


var TOKEN_REFRESH_CHANNEL = 'app-token-refresh-channel';
var _crossTabTokenVersion = 0;
function getCrossTabTokenVersion() {
  return _crossTabTokenVersion;
}
function broadcastTokenRefresh(accessToken, refreshToken) {
  try {
    var channel = new BroadcastChannel(TOKEN_REFRESH_CHANNEL);
    channel.postMessage({
      type: 'TOKEN_REFRESH',
      accessToken: accessToken,
      refreshToken: refreshToken,
      ts: Date.now()
    });
    channel.close();
  } catch (_unused) {
    // BroadcastChannel unsupported
  }
}
function initializeCrossTabTokenSync() {
  try {
    var channel = new BroadcastChannel(TOKEN_REFRESH_CHANNEL);
    channel.onmessage = function (event) {
      var _event$data;
      if (((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.type) !== 'TOKEN_REFRESH') return;
      var _event$data2 = event.data,
        accessToken = _event$data2.accessToken,
        refreshToken = _event$data2.refreshToken;
      if (typeof accessToken !== 'string' || typeof refreshToken !== 'string') return;
      var curAccess = getAuthToken();
      var curRefresh = getAuthRefreshToken();
      if (curAccess === accessToken && curRefresh === refreshToken) return;
      setAuthTokens({
        accessToken: accessToken,
        refreshToken: refreshToken
      });
      _crossTabTokenVersion++;
    };
  } catch (_unused2) {
    // BroadcastChannel unavailable
  }
}
;// ./src/libs/auth/browserDeviceId.ts
/** Per browser profile. Not cleared on logout. Same key in Home and common. */
var DEVICE_ID_KEY = 'linm.device.id';
function getOrCreateBrowserDeviceId() {
  if (typeof localStorage === 'undefined') return '';
  var existing = localStorage.getItem(DEVICE_ID_KEY);
  if (existing && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(existing)) {
    return existing;
  }
  var created = crypto.randomUUID();
  localStorage.setItem(DEVICE_ID_KEY, created);
  return created;
}
;// ./src/libs/auth/authTokenRefresh.ts


function authTokenRefresh_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function authTokenRefresh_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? authTokenRefresh_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : authTokenRefresh_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

function authTokenRefresh_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = authTokenRefresh_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function authTokenRefresh_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return authTokenRefresh_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? authTokenRefresh_arrayLikeToArray(r, a) : void 0; } }
function authTokenRefresh_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/services/authTokenRefresh.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */







var AUTH_FETCH_SKIP_REFRESH_HEADER = 'X-Linm-Skip-Auth-Refresh';
var refreshPromise = null;
var nativeFetch = null;
var preemptiveTimerId = null;
function setAuthRefreshNativeFetch(fetchFn) {
  nativeFetch = fetchFn;
}
function getFetch() {
  return nativeFetch !== null && nativeFetch !== void 0 ? nativeFetch : fetch;
}

/** Extract access token from Auth login/refresh JSON (camelCase or PascalCase). */
function parseAccessTokenFromAuthResponse(data) {
  var _ref, _ref2, _data$token;
  var raw = (_ref = (_ref2 = (_data$token = data.token) !== null && _data$token !== void 0 ? _data$token : data.accessToken) !== null && _ref2 !== void 0 ? _ref2 : data.AccessToken) !== null && _ref !== void 0 ? _ref : data.Token;
  if (typeof raw !== 'string') return null;
  var trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed : null;
}

/** Extract refresh token from Auth login/refresh JSON. */
function parseRefreshTokenFromAuthResponse(data) {
  var _data$refreshToken;
  var raw = (_data$refreshToken = data.refreshToken) !== null && _data$refreshToken !== void 0 ? _data$refreshToken : data.RefreshToken;
  if (typeof raw !== 'string') return null;
  var trimmed = raw.trim();
  return trimmed.length >= 32 ? trimmed : null;
}
var AUTH_SELF_SEGMENTS = ['/auth/login', '/auth/logout', '/auth/refresh-token'];
function isAuthSelfRequestUrl(url) {
  try {
    var path = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'http://localhost').pathname;
    return AUTH_SELF_SEGMENTS.some(function (segment) {
      return path.includes(segment);
    });
  } catch (_unused) {
    return false;
  }
}
function requestHadBearerAuth(input, init) {
  if (init !== null && init !== void 0 && init.headers) {
    var auth = new Headers(init.headers).get('Authorization');
    if (auth !== null && auth !== void 0 && auth.startsWith('Bearer ')) return true;
  }
  if (input instanceof Request) {
    var _auth = input.headers.get('Authorization');
    if (_auth !== null && _auth !== void 0 && _auth.startsWith('Bearer ')) return true;
  }
  return false;
}

// ── Pre-emptive refresh timer ──────────────────────────────────────────────

function decodeJwtPayload(token) {
  try {
    var parts = token.split('.');
    if (parts.length !== 3) return null;
    var raw = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(raw);
  } catch (_unused2) {
    return null;
  }
}
function schedulePreemptiveRefresh() {
  if (preemptiveTimerId !== null) {
    clearTimeout(preemptiveTimerId);
    preemptiveTimerId = null;
  }
  var token = getAuthToken();
  if (!token) return;
  var payload = decodeJwtPayload(token);
  if (!payload || typeof payload.exp !== 'number') return;
  var expiresInMs = payload.exp * 1000 - Date.now();
  var preemptiveMs = Math.max(30000, Math.min(expiresInMs - 60000, 3600000));
  if (preemptiveMs <= 0) {
    tryRefreshToken().catch(function () {/* best-effort */});
    return;
  }
  preemptiveTimerId = setTimeout(function () {
    preemptiveTimerId = null;
    tryRefreshToken().catch(function () {/* best-effort */});
  }, preemptiveMs);
}
if (typeof window !== 'undefined') {
  window.addEventListener('linm:auth:token-changed', function () {
    schedulePreemptiveRefresh();
  });
}

/** Cold start (installed /m app) has no token-changed event, so the timer never arms. */
function armPreemptiveAuthRefresh() {
  schedulePreemptiveRefresh();
}
var LEGACY_PLAIN_AUTH_KEYS = ['linm.auth.accessToken', 'linm.auth.token', 'linm.auth.refreshToken', 'accessToken', 'access_token', 'refreshToken', 'token'];

/** Phone login still treats these as a live session after secure storage is cleared. */
function clearLegacyPlainAuthKeys() {
  if (typeof localStorage === 'undefined') return;
  var _iterator = authTokenRefresh_createForOfIteratorHelper(LEGACY_PLAIN_AUTH_KEYS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      localStorage.removeItem(key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// ── Cross-tab version guard ────────────────────────────────────────────────

var _preRefreshVersion = 0;

// ── Silent refresh core ────────────────────────────────────────────────────

function tryRefreshToken() {
  if (refreshPromise) return refreshPromise;
  refreshPromise = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
    var rt, _parseRefreshTokenFro, res, data, accessToken, newRefreshToken, prev, nextUser, _t;
    return regenerator_default().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rt = getAuthRefreshToken();
          if (rt) {
            _context.next = 1;
            break;
          }
          return _context.abrupt("return", false);
        case 1:
          _preRefreshVersion = getCrossTabTokenVersion();
          _context.prev = 2;
          _context.next = 3;
          return getFetch()(resolveAuthRefreshUrl(), {
            method: 'POST',
            headers: _defineProperty(_defineProperty({
              'Content-Type': 'application/json'
            }, AUTH_FETCH_SKIP_REFRESH_HEADER, '1'), 'X-Device-Id', getOrCreateBrowserDeviceId()),
            body: JSON.stringify({
              refreshToken: rt
            })
          });
        case 3:
          res = _context.sent;
          if (res.ok) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", false);
        case 4:
          _context.next = 5;
          return res.json();
        case 5:
          data = _context.sent;
          accessToken = parseAccessTokenFromAuthResponse(data);
          if (accessToken) {
            _context.next = 6;
            break;
          }
          console.error('[auth] Refresh response missing access token');
          return _context.abrupt("return", false);
        case 6:
          if (!(getCrossTabTokenVersion() !== _preRefreshVersion)) {
            _context.next = 7;
            break;
          }
          console.info('[auth] Cross-tab token update detected during refresh — using peer tokens');
          return _context.abrupt("return", getAuthToken() !== null);
        case 7:
          setAuthTokens({
            accessToken: accessToken,
            refreshToken: (_parseRefreshTokenFro = parseRefreshTokenFromAuthResponse(data)) !== null && _parseRefreshTokenFro !== void 0 ? _parseRefreshTokenFro : undefined
          });

          // Broadcast to other tabs
          newRefreshToken = getAuthRefreshToken();
          if (newRefreshToken) {
            broadcastTokenRefresh(accessToken, newRefreshToken);
          }
          if (data.user) {
            prev = getAuthUser();
            nextUser = data.user;
            if (JSON.stringify(prev) !== JSON.stringify(nextUser)) {
              setAuthUser(nextUser);
            }
          }

          // Same access string is still a success — a false return hard-reloads /m/dang-nhap.
          return _context.abrupt("return", getAuthToken() !== null);
        case 8:
          _context.prev = 8;
          _t = _context["catch"](2);
          return _context.abrupt("return", false);
        case 9:
          _context.prev = 9;
          refreshPromise = null;
          return _context.finish(9);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 8, 9, 10]]);
  }))();
  return refreshPromise;
}

/**
 * Redirect after an auth failure (expired/revoked token mid-session).
 *
 * - Phone web (`/m/…`) → `/m/dang-nhap` (same as common-components).
 * - Desktop shell → `/session-expired` so Home shows the expired-session page.
 */
var _redirecting = false;
function redirectToLoginAfterAuthFailure() {
  if (_redirecting) return;
  _redirecting = true;
  if (preemptiveTimerId !== null) {
    clearTimeout(preemptiveTimerId);
    preemptiveTimerId = null;
  }
  clearAuthTokens();
  clearAuthUser();
  clearActiveCompanyCode();
  clearLegacyPlainAuthKeys();
  var path = window.location.pathname || '/';
  if (path === '/m' || path.startsWith('/m/')) {
    window.location.href = '/m/dang-nhap';
    return;
  }
  window.location.href = '/session-expired';
}
function buildRetryRequestInit(input, init, newToken) {
  if (input instanceof Request) {
    var _headers2 = new Headers(input.headers);
    if (init !== null && init !== void 0 && init.headers) {
      new Headers(init.headers).forEach(function (value, key) {
        return _headers2.set(key, value);
      });
    }
    _headers2.set('Authorization', "Bearer ".concat(newToken));
    var _activeCompanyCode = getActiveCompanyCode();
    if (_activeCompanyCode) _headers2.set(X_COMPANY_ID_HEADER, _activeCompanyCode);
    return authTokenRefresh_objectSpread(authTokenRefresh_objectSpread({}, init), {}, {
      headers: _headers2
    });
  }
  var headers = new Headers(init === null || init === void 0 ? void 0 : init.headers);
  headers.set('Authorization', "Bearer ".concat(newToken));
  var activeCompanyCode = getActiveCompanyCode();
  if (activeCompanyCode) headers.set(X_COMPANY_ID_HEADER, activeCompanyCode);
  return authTokenRefresh_objectSpread(authTokenRefresh_objectSpread({}, init), {}, {
    headers: headers
  });
}
function getAuthTokenForRetry() {
  return getAuthToken();
}
;// ./src/libs/auth/authFetchInterceptor.ts



function authFetchInterceptor_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function authFetchInterceptor_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? authFetchInterceptor_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : authFetchInterceptor_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/services/authFetchInterceptor.ts
 */





function resolveRequestUrl(input) {
  if (typeof input === 'string') return input;
  if (input instanceof URL) return input.href;
  return input.url;
}
function installAuthFetchInterceptor() {
  if (typeof window === 'undefined') return;
  if (window.__LINM_AUTH_FETCH_PATCHED__) return;
  var nativeFetch = window.fetch.bind(window);
  setAuthRefreshNativeFetch(nativeFetch);
  window.__LINM_AUTH_FETCH_PATCHED__ = true;
  window.fetch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(input, init) {
      var _init$headers, _init, _init$headers2, _init2;
      var rawUrl, url, deviceHeaders, deviceId, skipHeaders, response, refreshed, newToken, retryResponse, _init3, headers, activeCompanyCode;
      return regenerator_default().wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            rawUrl = resolveRequestUrl(input);
            url = rewriteForcedBffFetchUrl(rawUrl);
            if (url !== rawUrl) {
              if (input instanceof Request) {
                input = new Request(url, input);
              } else {
                input = url;
              }
            }
            deviceHeaders = new Headers((_init$headers = (_init = init) === null || _init === void 0 ? void 0 : _init.headers) !== null && _init$headers !== void 0 ? _init$headers : input instanceof Request ? input.headers : undefined);
            deviceId = getOrCreateBrowserDeviceId();
            if (deviceId) deviceHeaders.set('X-Device-Id', deviceId);
            if (input instanceof Request) {
              input = new Request(input, {
                headers: deviceHeaders
              });
            }
            init = authFetchInterceptor_objectSpread(authFetchInterceptor_objectSpread({}, init), {}, {
              headers: deviceHeaders
            });
            skipHeaders = new Headers((_init$headers2 = (_init2 = init) === null || _init2 === void 0 ? void 0 : _init2.headers) !== null && _init$headers2 !== void 0 ? _init$headers2 : input instanceof Request ? input.headers : undefined);
            if (!(skipHeaders.get(AUTH_FETCH_SKIP_REFRESH_HEADER) === '1')) {
              _context.next = 1;
              break;
            }
            skipHeaders.delete(AUTH_FETCH_SKIP_REFRESH_HEADER);
            return _context.abrupt("return", nativeFetch(input, authFetchInterceptor_objectSpread(authFetchInterceptor_objectSpread({}, init), {}, {
              headers: skipHeaders
            })));
          case 1:
            if (!isAuthSelfRequestUrl(url)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", nativeFetch(input, init));
          case 2:
            _context.next = 3;
            return nativeFetch(input, init);
          case 3:
            response = _context.sent;
            if (!(response.status !== 401)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", response);
          case 4:
            if (requestHadBearerAuth(input, init)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", response);
          case 5:
            _context.next = 6;
            return tryRefreshToken();
          case 6:
            refreshed = _context.sent;
            if (refreshed) {
              _context.next = 7;
              break;
            }
            redirectToLoginAfterAuthFailure();
            return _context.abrupt("return", response);
          case 7:
            newToken = getAuthTokenForRetry();
            if (newToken) {
              _context.next = 8;
              break;
            }
            redirectToLoginAfterAuthFailure();
            return _context.abrupt("return", response);
          case 8:
            if (!(input instanceof Request)) {
              _context.next = 10;
              break;
            }
            headers = new Headers(input.headers);
            if ((_init3 = init) !== null && _init3 !== void 0 && _init3.headers) {
              new Headers(init.headers).forEach(function (value, key) {
                return headers.set(key, value);
              });
            }
            headers.set('Authorization', "Bearer ".concat(newToken));
            activeCompanyCode = getActiveCompanyCode();
            if (activeCompanyCode) headers.set(X_COMPANY_ID_HEADER, activeCompanyCode);
            _context.next = 9;
            return nativeFetch(new Request(input, {
              headers: headers
            }));
          case 9:
            retryResponse = _context.sent;
            _context.next = 12;
            break;
          case 10:
            _context.next = 11;
            return nativeFetch(input, buildRetryRequestInit(input, init, newToken));
          case 11:
            retryResponse = _context.sent;
          case 12:
            if (retryResponse.status === 401) {
              redirectToLoginAfterAuthFailure();
            }
            return _context.abrupt("return", retryResponse);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  armPreemptiveAuthRefresh();
}
;// ./src/libs/auth/crossTabCompanySwitch.ts
/**
 * Cross-tab company switch synchronisation.
 *
 * When Tab A switches company, `setActiveCompanyCode()` (called from the
 * SwitchCompanyModal in common-components) writes the new value to
 * `linm_active_company_id` in localStorage.  This automatically fires the
 * native `storage` event on all OTHER tabs.
 *
 * This module listens for that event and reloads other tabs so they pick up
 * the new active company.
 *
 * No changes are needed to SwitchCompanyModal or common-components — the
 * `storage` event is a browser-native mechanism that fires automatically
 * whenever any tab writes to localStorage.
 */



/**
 * Listen for company switch signals from other tabs.
 * When `linm_active_company_id` changes in localStorage (written by
 * `setActiveCompanyCode`), reload this tab so it uses the new company.
 */
function initializeCrossTabCompanySwitch() {
  window.addEventListener('storage', function (event) {
    // Only care about our active company key
    if (event.key !== ACTIVE_COMPANY_STORAGE_KEY) return;

    // Ignore when value is cleared (happens on logout — handled by cross-tab-logout)
    if (event.newValue == null) return;

    // Ignore no-op writes (same value written again)
    if (event.oldValue === event.newValue) return;
    window.location.reload();
  });
}
;// ./src/libs/storage/pendingCompanyStorage.ts
/* unused harmony import specifier */ var pendingCompanyStorage_getSecureItem;
/* unused harmony import specifier */ var pendingCompanyStorage_removeSecureItem;
/**
 * SSOT: @linm-soft-org/linm-web-common-components/src/utils/pendingCompanyStorage.ts
 * Root bundles this copy — keep in sync on common-components publish.
 */

var PENDING_COMPANY_KEY = 'pending_company_code';
var pendingCompanyStorage_CONFIG = {
  storageKey: PENDING_COMPANY_KEY,
  version: 1,
  hashKey: 'auth.pendingCompany'
};
function getPendingCompanyCode() {
  var raw = pendingCompanyStorage_getSecureItem(pendingCompanyStorage_CONFIG, {
    allowLegacyPlain: true
  });
  return (raw === null || raw === void 0 ? void 0 : raw.trim()) || null;
}
function setPendingCompanyCode(code) {
  setSecureItem(pendingCompanyStorage_CONFIG, code.trim().toUpperCase());
}
function clearPendingCompanyCode() {
  pendingCompanyStorage_removeSecureItem(pendingCompanyStorage_CONFIG);
}
// EXTERNAL MODULE: ./src/styles.ts
var styles = __webpack_require__(721);
;// ./src/root-config.ts














// Expose before any MFE chunk evaluates topbar flags.
window.__LINM_ENABLE_MESSAGE__ = AppSettings.ENABLE_MESSAGE;
window.__LINM_ENABLE_NOTIFICATION__ = AppSettings.ENABLE_NOTIFICATION;
(function applyForceBffDomainSafetyNet() {
  var manifest = window.__LINM_MF_MANIFEST__;
  if (!manifest || !isForceBffDomainEnabled(manifest)) return;
  var rootApi = readRootViteApiUrl(manifest);
  if (!rootApi) return;
  applyForceBffDomainToManifest(manifest, rootApi);
  window.__LINM_FORCE_BFF_DOMAIN__ = true;
  window.__LINM_AUTH_BFF_BASE__ = rootApi;
})();

// Webpack lazy chunks can fail after entry System.import succeeds (SPA HTML fallback).
installDeployChunkRecovery();
window.addEventListener('unhandledrejection', function (event) {
  if (isDeployRelatedLoadError(event.reason)) return; // deployRecovery schedules reload
  logError("[Unhandled Rejection] ".concat(event.reason));
});
initializeCrossTabLogout();
initializeCrossTabTokenSync();
initializeCrossTabCompanySwitch();

// JWT mode: patch fetch once before any MFE loads (Nav permissions, Home login, ERP API).
if (!AppSettings.OIDC_ENABLED) {
  installAuthFetchInterceptor();
  logInfo('[Auth] Global fetch interceptor installed (JWT refresh)');
}
var authenticator = Authenticator.getInstance(openIdSettings);
var path = window.location.pathname.substring(1);
try {
  switch (path) {
    case OidcEndpoints.LOGIN:
      logInfo("[Route] Processing LOGIN callback: /".concat(path));
      authenticator.handleLoginCallbackAsync().then(function () {
        return bootstrap(authenticator, AppSettings);
      }).catch(function (err) {
        return logError("[Route] LOGIN callback failed: ".concat(err));
      });
      break;
    case OidcEndpoints.RENEW:
      logInfo("[Route] Processing SILENT RENEW callback: /".concat(path));
      authenticator.handleSilentRenewCallbackAsync().then(function () {
        return (0,external_single_spa_.start)();
      }).catch(logError);
      break;
    case OidcEndpoints.LOGOUT:
      logInfo("[Route] Processing LOGOUT: /".concat(path));
      // Cross-tab broadcast is handled by ShellLogoutHandler after the
      // logout API call completes (dispatches 'linm:logout:complete').
      // Do NOT call broadcastLogoutToOtherTabs() here — it would race the
      // API call and cause other tabs to reload before tokens are invalidated.
      if (AppSettings.OIDC_ENABLED) {
        authenticator.logoutAsync().catch(function (err) {
          return logError("[Route] Logout failed: ".concat(err));
        });
      } else {
        // JWT mode: Defer to Home MFE ShellLogoutHandler.
        // shellLogoutHandler displays the spinner, calls POST /auth/logout while
        // the token is still valid, then navigates to /login.  DO NOT clear tokens
        // or redirect here — that races the Home MFE thunk and causes a 401 on the
        // backend logout request.
        bootstrap(authenticator, AppSettings);
      }
      break;
    default:
      {
        logInfo("[Route] Default path: /".concat(path, " \u2014 running bootstrap"));
        // Capture /company/{code} before starting the microfrontend shell.
        // Web.Home reads `pending_company_code` on mount and resolves branding.
        if (/^company\/[A-Za-z0-9_-]+$/.test(path)) {
          var code = path.split('/')[1];
          setPendingCompanyCode(code);
          logInfo("[Route] Company code captured: ".concat(code, " \u2014 redirecting to /login"));
          window.history.replaceState(null, '', '/login');
        }
        bootstrap(authenticator, AppSettings);
        break;
      }
  }
} catch (error) {
  logError("[Root Config] Fatal startup error: ".concat(error));
}
})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=linm-root-config.js.map
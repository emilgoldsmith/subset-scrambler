// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1FANo":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f3098a33f0459593";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5FhOJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cubejs = require("cubejs");
var _cubejsDefault = parcelHelpers.interopDefault(_cubejs);
async function init() {
    (0, _cubejsDefault.default).initSolver();
    document.querySelector("#status").textContent = "Ready";
}
init();

},{"cubejs":"7ryTA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ryTA":[function(require,module,exports) {
module.exports = require("ebd916bcbf854460");
require("21c07a00938c8973");

},{"ebd916bcbf854460":"l9jzW","21c07a00938c8973":"6bNl6"}],"l9jzW":[function(require,module,exports) {
(function() {
    // Centers
    var B, BL, BR, Cube, D, DB, DBL, DF, DFR, DL, DLF, DR, DRB, F, FL, FR, L, R, U, UB, UBR, UF, UFL, UL, ULB, UR, URF, centerColor, centerFacelet, cornerColor, cornerFacelet, edgeColor, edgeFacelet;
    [U, R, F, D, L, B] = [
        0,
        1,
        2,
        3,
        4,
        5
    ];
    // Corners
    [URF, UFL, ULB, UBR, DFR, DLF, DBL, DRB] = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    // Edges
    [UR, UF, UL, UB, DR, DF, DL, DB, FR, FL, BL, BR] = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ];
    [centerFacelet, cornerFacelet, edgeFacelet] = function() {
        var _B, _D, _F, _L, _R, _U;
        _U = function(x) {
            return x - 1;
        };
        _R = function(x) {
            return _U(9) + x;
        };
        _F = function(x) {
            return _R(9) + x;
        };
        _D = function(x) {
            return _F(9) + x;
        };
        _L = function(x) {
            return _D(9) + x;
        };
        _B = function(x) {
            return _L(9) + x;
        };
        return [
            // Centers
            [
                4,
                13,
                22,
                31,
                40,
                49
            ],
            // Corners
            [
                [
                    _U(9),
                    _R(1),
                    _F(3)
                ],
                [
                    _U(7),
                    _F(1),
                    _L(3)
                ],
                [
                    _U(1),
                    _L(1),
                    _B(3)
                ],
                [
                    _U(3),
                    _B(1),
                    _R(3)
                ],
                [
                    _D(3),
                    _F(9),
                    _R(7)
                ],
                [
                    _D(1),
                    _L(9),
                    _F(7)
                ],
                [
                    _D(7),
                    _B(9),
                    _L(7)
                ],
                [
                    _D(9),
                    _R(9),
                    _B(7)
                ]
            ],
            // Edges
            [
                [
                    _U(6),
                    _R(2)
                ],
                [
                    _U(8),
                    _F(2)
                ],
                [
                    _U(4),
                    _L(2)
                ],
                [
                    _U(2),
                    _B(2)
                ],
                [
                    _D(6),
                    _R(8)
                ],
                [
                    _D(2),
                    _F(8)
                ],
                [
                    _D(4),
                    _L(8)
                ],
                [
                    _D(8),
                    _B(8)
                ],
                [
                    _F(6),
                    _R(4)
                ],
                [
                    _F(4),
                    _L(6)
                ],
                [
                    _B(6),
                    _L(4)
                ],
                [
                    _B(4),
                    _R(6)
                ]
            ]
        ];
    }();
    centerColor = [
        "U",
        "R",
        "F",
        "D",
        "L",
        "B"
    ];
    cornerColor = [
        [
            "U",
            "R",
            "F"
        ],
        [
            "U",
            "F",
            "L"
        ],
        [
            "U",
            "L",
            "B"
        ],
        [
            "U",
            "B",
            "R"
        ],
        [
            "D",
            "F",
            "R"
        ],
        [
            "D",
            "L",
            "F"
        ],
        [
            "D",
            "B",
            "L"
        ],
        [
            "D",
            "R",
            "B"
        ]
    ];
    edgeColor = [
        [
            "U",
            "R"
        ],
        [
            "U",
            "F"
        ],
        [
            "U",
            "L"
        ],
        [
            "U",
            "B"
        ],
        [
            "D",
            "R"
        ],
        [
            "D",
            "F"
        ],
        [
            "D",
            "L"
        ],
        [
            "D",
            "B"
        ],
        [
            "F",
            "R"
        ],
        [
            "F",
            "L"
        ],
        [
            "B",
            "L"
        ],
        [
            "B",
            "R"
        ]
    ];
    Cube = (function() {
        var faceNames, faceNums, parseAlg;
        class Cube {
            constructor(other){
                var x;
                if (other != null) this.init(other);
                else this.identity();
                // For moves to avoid allocating new objects each time
                this.newCenter = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 5; x = ++k)results.push(0);
                    return results;
                }();
                this.newCp = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 7; x = ++k)results.push(0);
                    return results;
                }();
                this.newEp = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 11; x = ++k)results.push(0);
                    return results;
                }();
                this.newCo = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 7; x = ++k)results.push(0);
                    return results;
                }();
                this.newEo = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 11; x = ++k)results.push(0);
                    return results;
                }();
            }
            init(state) {
                this.center = state.center.slice(0);
                this.co = state.co.slice(0);
                this.ep = state.ep.slice(0);
                this.cp = state.cp.slice(0);
                return this.eo = state.eo.slice(0);
            }
            identity() {
                var x;
                // Initialize to the identity cube
                this.center = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ];
                this.cp = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ];
                this.co = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 7; x = ++k)results.push(0);
                    return results;
                }();
                this.ep = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ];
                return this.eo = function() {
                    var k, results;
                    results = [];
                    for(x = k = 0; k <= 11; x = ++k)results.push(0);
                    return results;
                }();
            }
            toJSON() {
                return {
                    center: this.center,
                    cp: this.cp,
                    co: this.co,
                    ep: this.ep,
                    eo: this.eo
                };
            }
            asString() {
                var corner, edge, i, k, l, m, n, o, ori, p, result;
                result = [];
                for(i = k = 0; k <= 5; i = ++k)result[9 * i + 4] = centerColor[this.center[i]];
                for(i = l = 0; l <= 7; i = ++l){
                    corner = this.cp[i];
                    ori = this.co[i];
                    for(n = m = 0; m <= 2; n = ++m)result[cornerFacelet[i][(n + ori) % 3]] = cornerColor[corner][n];
                }
                for(i = o = 0; o <= 11; i = ++o){
                    edge = this.ep[i];
                    ori = this.eo[i];
                    for(n = p = 0; p <= 1; n = ++p)result[edgeFacelet[i][(n + ori) % 2]] = edgeColor[edge][n];
                }
                return result.join("");
            }
            static fromString(str) {
                var col1, col2, cube, i, j, k, l, m, o, ori, p, q, r, ref;
                cube = new Cube;
                for(i = k = 0; k <= 5; i = ++k){
                    for(j = l = 0; l <= 5; j = ++l)if (str[9 * i + 4] === centerColor[j]) cube.center[i] = j;
                }
                for(i = m = 0; m <= 7; i = ++m){
                    for(ori = o = 0; o <= 2; ori = ++o){
                        if ((ref = str[cornerFacelet[i][ori]]) === "U" || ref === "D") break;
                    }
                    col1 = str[cornerFacelet[i][(ori + 1) % 3]];
                    col2 = str[cornerFacelet[i][(ori + 2) % 3]];
                    for(j = p = 0; p <= 7; j = ++p)if (col1 === cornerColor[j][1] && col2 === cornerColor[j][2]) {
                        cube.cp[i] = j;
                        cube.co[i] = ori % 3;
                    }
                }
                for(i = q = 0; q <= 11; i = ++q)for(j = r = 0; r <= 11; j = ++r){
                    if (str[edgeFacelet[i][0]] === edgeColor[j][0] && str[edgeFacelet[i][1]] === edgeColor[j][1]) {
                        cube.ep[i] = j;
                        cube.eo[i] = 0;
                        break;
                    }
                    if (str[edgeFacelet[i][0]] === edgeColor[j][1] && str[edgeFacelet[i][1]] === edgeColor[j][0]) {
                        cube.ep[i] = j;
                        cube.eo[i] = 1;
                        break;
                    }
                }
                return cube;
            }
            clone() {
                return new Cube(this.toJSON());
            }
            // A class method returning a new random cube
            static random() {
                return new Cube().randomize();
            }
            isSolved() {
                var c, cent, clone, e, k, l, m;
                clone = this.clone();
                clone.move(clone.upright());
                for(cent = k = 0; k <= 5; cent = ++k){
                    if (clone.center[cent] !== cent) return false;
                }
                for(c = l = 0; l <= 7; c = ++l){
                    if (clone.cp[c] !== c) return false;
                    if (clone.co[c] !== 0) return false;
                }
                for(e = m = 0; m <= 11; e = ++m){
                    if (clone.ep[e] !== e) return false;
                    if (clone.eo[e] !== 0) return false;
                }
                return true;
            }
            // Multiply this Cube with another Cube, restricted to centers.
            centerMultiply(other) {
                var from, k, to;
                for(to = k = 0; k <= 5; to = ++k){
                    from = other.center[to];
                    this.newCenter[to] = this.center[from];
                }
                [this.center, this.newCenter] = [
                    this.newCenter,
                    this.center
                ];
                return this;
            }
            // Multiply this Cube with another Cube, restricted to corners.
            cornerMultiply(other) {
                var from, k, to;
                for(to = k = 0; k <= 7; to = ++k){
                    from = other.cp[to];
                    this.newCp[to] = this.cp[from];
                    this.newCo[to] = (this.co[from] + other.co[to]) % 3;
                }
                [this.cp, this.newCp] = [
                    this.newCp,
                    this.cp
                ];
                [this.co, this.newCo] = [
                    this.newCo,
                    this.co
                ];
                return this;
            }
            // Multiply this Cube with another Cube, restricted to edges
            edgeMultiply(other) {
                var from, k, to;
                for(to = k = 0; k <= 11; to = ++k){
                    from = other.ep[to];
                    this.newEp[to] = this.ep[from];
                    this.newEo[to] = (this.eo[from] + other.eo[to]) % 2;
                }
                [this.ep, this.newEp] = [
                    this.newEp,
                    this.ep
                ];
                [this.eo, this.newEo] = [
                    this.newEo,
                    this.eo
                ];
                return this;
            }
            // Multiply this cube with another Cube
            multiply(other) {
                this.centerMultiply(other);
                this.cornerMultiply(other);
                this.edgeMultiply(other);
                return this;
            }
            move(arg) {
                var face, k, l, len, move, power, ref, ref1, x;
                ref = parseAlg(arg);
                for(k = 0, len = ref.length; k < len; k++){
                    move = ref[k];
                    face = move / 3 | 0;
                    power = move % 3;
                    for(x = l = 0, ref1 = power; 0 <= ref1 ? l <= ref1 : l >= ref1; x = 0 <= ref1 ? ++l : --l)this.multiply(Cube.moves[face]);
                }
                return this;
            }
            upright() {
                var clone, i, j, k, l, result;
                clone = this.clone();
                result = [];
                for(i = k = 0; k <= 5; i = ++k){
                    if (clone.center[i] === F) break;
                }
                switch(i){
                    case D:
                        result.push("x");
                        break;
                    case U:
                        result.push("x'");
                        break;
                    case B:
                        result.push("x2");
                        break;
                    case R:
                        result.push("y");
                        break;
                    case L:
                        result.push("y'");
                }
                if (result.length) clone.move(result[0]);
                for(j = l = 0; l <= 5; j = ++l){
                    if (clone.center[j] === U) break;
                }
                switch(j){
                    case L:
                        result.push("z");
                        break;
                    case R:
                        result.push("z'");
                        break;
                    case D:
                        result.push("z2");
                }
                return result.join(" ");
            }
            static inverse(arg) {
                var face, k, len, move, power, result, str;
                result = function() {
                    var k, len, ref, results;
                    ref = parseAlg(arg);
                    results = [];
                    for(k = 0, len = ref.length; k < len; k++){
                        move = ref[k];
                        face = move / 3 | 0;
                        power = move % 3;
                        results.push(face * 3 + -(power - 1) + 1);
                    }
                    return results;
                }();
                result.reverse();
                if (typeof arg === "string") {
                    str = "";
                    for(k = 0, len = result.length; k < len; k++){
                        move = result[k];
                        face = move / 3 | 0;
                        power = move % 3;
                        str += faceNames[face];
                        if (power === 1) str += "2";
                        else if (power === 2) str += "'";
                        str += " ";
                    }
                    return str.substring(0, str.length - 1);
                } else if (arg.length != null) return result;
                else return result[0];
            }
        }
        Cube.prototype.randomize = function() {
            var arePermutationsValid, generateValidRandomOrientation, generateValidRandomPermutation, getNumSwaps, isOrientationValid, randint, randomizeOrientation, result, shuffle;
            randint = function(min, max) {
                return min + Math.floor(Math.random() * (max - min + 1));
            };
            // Fisher-Yates shuffle adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            shuffle = function(array) {
                var currentIndex, randomIndex, temporaryValue;
                currentIndex = array.length;
                // While there remain elements to shuffle...
                while(currentIndex !== 0){
                    // Pick a remaining element...
                    randomIndex = randint(0, currentIndex - 1);
                    currentIndex -= 1;
                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex],
                        array[currentIndex]
                    ];
                }
            };
            getNumSwaps = function(arr) {
                var cur, cycleLength, i, k, numSwaps, ref, seen, x;
                numSwaps = 0;
                seen = function() {
                    var k, ref, results;
                    results = [];
                    for(x = k = 0, ref = arr.length - 1; 0 <= ref ? k <= ref : k >= ref; x = 0 <= ref ? ++k : --k)results.push(false);
                    return results;
                }();
                while(true){
                    // We compute the cycle decomposition
                    cur = -1;
                    for(i = k = 0, ref = arr.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k)if (!seen[i]) {
                        cur = i;
                        break;
                    }
                    if (cur === -1) break;
                    cycleLength = 0;
                    while(!seen[cur]){
                        seen[cur] = true;
                        cycleLength++;
                        cur = arr[cur];
                    }
                    // A cycle is equivalent to cycleLength + 1 swaps
                    numSwaps += cycleLength + 1;
                }
                return numSwaps;
            };
            arePermutationsValid = function(cp, ep) {
                var numSwaps;
                numSwaps = getNumSwaps(ep) + getNumSwaps(cp);
                return numSwaps % 2 === 0;
            };
            generateValidRandomPermutation = function(cp, ep) {
                // Each shuffle only takes around 12 operations and there's a 50%
                // chance of a valid permutation so it'll finish in very good time
                shuffle(ep);
                shuffle(cp);
                while(!arePermutationsValid(cp, ep)){
                    shuffle(ep);
                    shuffle(cp);
                }
            };
            randomizeOrientation = function(arr, numOrientations) {
                var i, k, ori, ref;
                ori = 0;
                for(i = k = 0, ref = arr.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k)ori += arr[i] = randint(0, numOrientations - 1);
            };
            isOrientationValid = function(arr, numOrientations) {
                return arr.reduce(function(a, b) {
                    return a + b;
                }) % numOrientations === 0;
            };
            generateValidRandomOrientation = function(co, eo) {
                // There is a 1/2 and 1/3 probably respectively of each of these
                // succeeding so the probability of them running 10 times before
                // success is already only 1% and only gets exponentially lower
                // and each generation is only in the 10s of operations which is nothing
                randomizeOrientation(co, 3);
                while(!isOrientationValid(co, 3))randomizeOrientation(co, 3);
                randomizeOrientation(eo, 2);
                while(!isOrientationValid(eo, 2))randomizeOrientation(eo, 2);
            };
            result = function() {
                generateValidRandomPermutation(this.cp, this.ep);
                generateValidRandomOrientation(this.co, this.eo);
                return this;
            };
            return result;
        }();
        Cube.moves = [
            {
                // U
                center: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                cp: [
                    UBR,
                    URF,
                    UFL,
                    ULB,
                    DFR,
                    DLF,
                    DBL,
                    DRB
                ],
                co: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                ep: [
                    UB,
                    UR,
                    UF,
                    UL,
                    DR,
                    DF,
                    DL,
                    DB,
                    FR,
                    FL,
                    BL,
                    BR
                ],
                eo: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                // R
                center: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                cp: [
                    DFR,
                    UFL,
                    ULB,
                    URF,
                    DRB,
                    DLF,
                    DBL,
                    UBR
                ],
                co: [
                    2,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0,
                    2
                ],
                ep: [
                    FR,
                    UF,
                    UL,
                    UB,
                    BR,
                    DF,
                    DL,
                    DB,
                    DR,
                    FL,
                    BL,
                    UR
                ],
                eo: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                // F
                center: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                cp: [
                    UFL,
                    DLF,
                    ULB,
                    UBR,
                    URF,
                    DFR,
                    DBL,
                    DRB
                ],
                co: [
                    1,
                    2,
                    0,
                    0,
                    2,
                    1,
                    0,
                    0
                ],
                ep: [
                    UR,
                    FL,
                    UL,
                    UB,
                    DR,
                    FR,
                    DL,
                    DB,
                    UF,
                    DF,
                    BL,
                    BR
                ],
                eo: [
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0
                ]
            },
            {
                // D
                center: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                cp: [
                    URF,
                    UFL,
                    ULB,
                    UBR,
                    DLF,
                    DBL,
                    DRB,
                    DFR
                ],
                co: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                ep: [
                    UR,
                    UF,
                    UL,
                    UB,
                    DF,
                    DL,
                    DB,
                    DR,
                    FR,
                    FL,
                    BL,
                    BR
                ],
                eo: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                // L
                center: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                cp: [
                    URF,
                    ULB,
                    DBL,
                    UBR,
                    DFR,
                    UFL,
                    DLF,
                    DRB
                ],
                co: [
                    0,
                    1,
                    2,
                    0,
                    0,
                    2,
                    1,
                    0
                ],
                ep: [
                    UR,
                    UF,
                    BL,
                    UB,
                    DR,
                    DF,
                    FL,
                    DB,
                    FR,
                    UL,
                    DL,
                    BR
                ],
                eo: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                // B
                center: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                cp: [
                    URF,
                    UFL,
                    UBR,
                    DRB,
                    DFR,
                    DLF,
                    ULB,
                    DBL
                ],
                co: [
                    0,
                    0,
                    1,
                    2,
                    0,
                    0,
                    2,
                    1
                ],
                ep: [
                    UR,
                    UF,
                    UL,
                    BR,
                    DR,
                    DF,
                    DL,
                    BL,
                    FR,
                    FL,
                    UB,
                    DB
                ],
                eo: [
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    1
                ]
            },
            {
                // E
                center: [
                    U,
                    F,
                    L,
                    D,
                    B,
                    R
                ],
                cp: [
                    URF,
                    UFL,
                    ULB,
                    UBR,
                    DFR,
                    DLF,
                    DBL,
                    DRB
                ],
                co: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                ep: [
                    UR,
                    UF,
                    UL,
                    UB,
                    DR,
                    DF,
                    DL,
                    DB,
                    FL,
                    BL,
                    BR,
                    FR
                ],
                eo: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            {
                // M
                center: [
                    B,
                    R,
                    U,
                    F,
                    L,
                    D
                ],
                cp: [
                    URF,
                    UFL,
                    ULB,
                    UBR,
                    DFR,
                    DLF,
                    DBL,
                    DRB
                ],
                co: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                ep: [
                    UR,
                    UB,
                    UL,
                    DB,
                    DR,
                    UF,
                    DL,
                    DF,
                    FR,
                    FL,
                    BL,
                    BR
                ],
                eo: [
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                // S
                center: [
                    L,
                    U,
                    F,
                    R,
                    D,
                    B
                ],
                cp: [
                    URF,
                    UFL,
                    ULB,
                    UBR,
                    DFR,
                    DLF,
                    DBL,
                    DRB
                ],
                co: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                ep: [
                    UL,
                    UF,
                    DL,
                    UB,
                    UR,
                    DF,
                    DR,
                    DB,
                    FR,
                    FL,
                    BL,
                    BR
                ],
                eo: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ];
        faceNums = {
            U: 0,
            R: 1,
            F: 2,
            D: 3,
            L: 4,
            B: 5,
            E: 6,
            M: 7,
            S: 8,
            x: 9,
            y: 10,
            z: 11,
            u: 12,
            r: 13,
            f: 14,
            d: 15,
            l: 16,
            b: 17
        };
        faceNames = {
            0: "U",
            1: "R",
            2: "F",
            3: "D",
            4: "L",
            5: "B",
            6: "E",
            7: "M",
            8: "S",
            9: "x",
            10: "y",
            11: "z",
            12: "u",
            13: "r",
            14: "f",
            15: "d",
            16: "l",
            17: "b"
        };
        parseAlg = function(arg) {
            var k, len, move, part, power, ref, results;
            if (typeof arg === "string") {
                ref = arg.split(/\s+/);
                // String
                results = [];
                for(k = 0, len = ref.length; k < len; k++){
                    part = ref[k];
                    if (part.length === 0) continue;
                    if (part.length > 2) throw new Error(`Invalid move: ${part}`);
                    move = faceNums[part[0]];
                    if (move === void 0) throw new Error(`Invalid move: ${part}`);
                    if (part.length === 1) power = 0;
                    else {
                        if (part[1] === "2") power = 1;
                        else if (part[1] === "'") power = 2;
                        else throw new Error(`Invalid move: ${part}`);
                    }
                    results.push(move * 3 + power);
                }
                return results;
            } else if (arg.length != null) // Already an array
            return arg;
            else // A single move
            return [
                arg
            ];
        };
        // x
        Cube.moves.push(new Cube().move("R M' L'").toJSON());
        // y
        Cube.moves.push(new Cube().move("U E' D'").toJSON());
        // z
        Cube.moves.push(new Cube().move("F S B'").toJSON());
        // u
        Cube.moves.push(new Cube().move("U E'").toJSON());
        // r
        Cube.moves.push(new Cube().move("R M'").toJSON());
        // f
        Cube.moves.push(new Cube().move("F S").toJSON());
        // d
        Cube.moves.push(new Cube().move("D E").toJSON());
        // l
        Cube.moves.push(new Cube().move("L M").toJSON());
        // b
        Cube.moves.push(new Cube().move("B S'").toJSON());
        return Cube;
    }).call(this);
    //# Globals
    if (module !== null) module.exports = Cube;
    else this.Cube = Cube;
}).call(this);

},{}],"6bNl6":[function(require,module,exports) {
(function() {
    var B, BL, BR, Cnk, Cube, D, DB, DBL, DF, DFR, DL, DLF, DR, DRB, F, FL, FR, Include, L, N_FLIP, N_FRtoBR, N_PARITY, N_SLICE1, N_SLICE2, N_TWIST, N_UBtoDF, N_URFtoDLF, N_URtoDF, N_URtoUL, R, U, UB, UBR, UF, UFL, UL, ULB, UR, URF, allMoves1, allMoves2, computeMoveTable, computePruningTable, faceNames, faceNums, factorial, key, max, mergeURtoDF, moveTableParams, nextMoves1, nextMoves2, permutationIndex, pruning, pruningTableParams, rotateLeft, rotateRight, value, indexOf = [].indexOf;
    Cube = this.Cube || require("70ae43c13b207581");
    // Centers
    [U, R, F, D, L, B] = [
        0,
        1,
        2,
        3,
        4,
        5
    ];
    // Corners
    [URF, UFL, ULB, UBR, DFR, DLF, DBL, DRB] = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    // Edges
    [UR, UF, UL, UB, DR, DF, DL, DB, FR, FL, BL, BR] = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ];
    //# Helpers
    // n choose k, i.e. the binomial coeffiecient
    Cnk = function(n, k) {
        var i, j, s;
        if (n < k) return 0;
        if (k > n / 2) k = n - k;
        s = 1;
        i = n;
        j = 1;
        while(i !== n - k){
            s *= i;
            s /= j;
            i--;
            j++;
        }
        return s;
    };
    // n!
    factorial = function(n) {
        var f, i, m, ref;
        f = 1;
        for(i = m = 2, ref = n; 2 <= ref ? m <= ref : m >= ref; i = 2 <= ref ? ++m : --m)f *= i;
        return f;
    };
    // Maximum of two values
    max = function(a, b) {
        if (a > b) return a;
        else return b;
    };
    // Rotate elements between l and r left by one place
    rotateLeft = function(array, l, r) {
        var i, m, ref, ref1, tmp;
        tmp = array[l];
        for(i = m = ref = l, ref1 = r - 1; ref <= ref1 ? m <= ref1 : m >= ref1; i = ref <= ref1 ? ++m : --m)array[i] = array[i + 1];
        return array[r] = tmp;
    };
    // Rotate elements between l and r right by one place
    rotateRight = function(array, l, r) {
        var i, m, ref, ref1, tmp;
        tmp = array[r];
        for(i = m = ref = r, ref1 = l + 1; ref <= ref1 ? m <= ref1 : m >= ref1; i = ref <= ref1 ? ++m : --m)array[i] = array[i - 1];
        return array[l] = tmp;
    };
    // Generate a function that computes permutation indices.
    // The permutation index actually encodes two indices: Combination,
    // i.e. positions of the cubies start..end (A) and their respective
    // permutation (B). The maximum value for B is
    //   maxB = (end - start + 1)!
    // and the index is A * maxB + B
    permutationIndex = function(context, start, end, fromEnd = false) {
        var i, maxAll, maxB, maxOur, our, permName;
        maxOur = end - start;
        maxB = factorial(maxOur + 1);
        if (context === "corners") {
            maxAll = 7;
            permName = "cp";
        } else {
            maxAll = 11;
            permName = "ep";
        }
        our = function() {
            var m, ref, results;
            results = [];
            for(i = m = 0, ref = maxOur; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m)results.push(0);
            return results;
        }();
        return function(index) {
            var a, b, c, j, k, m, o, p, perm, q, ref, ref1, ref10, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, t, u, w, x, y, z;
            if (index != null) {
                for(i = m = 0, ref = maxOur; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m)// Reset our to [start..end]
                our[i] = i + start;
                b = index % maxB; // permutation
                a = index / maxB | 0; // combination
                // Invalidate all edges
                perm = this[permName];
                for(i = o = 0, ref1 = maxAll; 0 <= ref1 ? o <= ref1 : o >= ref1; i = 0 <= ref1 ? ++o : --o)perm[i] = -1;
                // Generate permutation from index b
                for(j = p = 1, ref2 = maxOur; 1 <= ref2 ? p <= ref2 : p >= ref2; j = 1 <= ref2 ? ++p : --p){
                    k = b % (j + 1);
                    b = b / (j + 1) | 0;
                    // TODO: Implement rotateRightBy(our, 0, j, k)
                    while(k > 0){
                        rotateRight(our, 0, j);
                        k--;
                    }
                }
                // Generate combination and set our edges
                x = maxOur;
                if (fromEnd) for(j = q = 0, ref3 = maxAll; 0 <= ref3 ? q <= ref3 : q >= ref3; j = 0 <= ref3 ? ++q : --q){
                    c = Cnk(maxAll - j, x + 1);
                    if (a - c >= 0) {
                        perm[j] = our[maxOur - x];
                        a -= c;
                        x--;
                    }
                }
                else for(j = t = ref4 = maxAll; ref4 <= 0 ? t <= 0 : t >= 0; j = ref4 <= 0 ? ++t : --t){
                    c = Cnk(j, x + 1);
                    if (a - c >= 0) {
                        perm[j] = our[x];
                        a -= c;
                        x--;
                    }
                }
                return this;
            } else {
                perm = this[permName];
                for(i = u = 0, ref5 = maxOur; 0 <= ref5 ? u <= ref5 : u >= ref5; i = 0 <= ref5 ? ++u : --u)our[i] = -1;
                a = b = x = 0;
                // Compute the index a < ((maxAll + 1) choose (maxOur + 1)) and
                // the permutation
                if (fromEnd) {
                    for(j = w = ref6 = maxAll; ref6 <= 0 ? w <= 0 : w >= 0; j = ref6 <= 0 ? ++w : --w)if (start <= (ref7 = perm[j]) && ref7 <= end) {
                        a += Cnk(maxAll - j, x + 1);
                        our[maxOur - x] = perm[j];
                        x++;
                    }
                } else {
                    for(j = y = 0, ref8 = maxAll; 0 <= ref8 ? y <= ref8 : y >= ref8; j = 0 <= ref8 ? ++y : --y)if (start <= (ref9 = perm[j]) && ref9 <= end) {
                        a += Cnk(j, x + 1);
                        our[x] = perm[j];
                        x++;
                    }
                }
                // Compute the index b < (maxOur + 1)! for the permutation
                for(j = z = ref10 = maxOur; ref10 <= 0 ? z <= 0 : z >= 0; j = ref10 <= 0 ? ++z : --z){
                    k = 0;
                    while(our[j] !== start + j){
                        rotateLeft(our, 0, j);
                        k++;
                    }
                    b = (j + 1) * b + k;
                }
                return a * maxB + b;
            }
        };
    };
    Include = {
        // The twist of the 8 corners, 0 <= twist < 3^7. The orientation of
        // the DRB corner is fully determined by the orientation of the other
        // corners.
        twist: function(twist) {
            var i, m, o, ori, parity, v;
            if (twist != null) {
                parity = 0;
                for(i = m = 6; m >= 0; i = --m){
                    ori = twist % 3;
                    twist = twist / 3 | 0;
                    this.co[i] = ori;
                    parity += ori;
                }
                this.co[7] = (3 - parity % 3) % 3;
                return this;
            } else {
                v = 0;
                for(i = o = 0; o <= 6; i = ++o)v = 3 * v + this.co[i];
                return v;
            }
        },
        // The flip of the 12 edges, 0 <= flip < 2^11. The orientation of the
        // BR edge is fully determined by the orientation of the other edges.
        flip: function(flip) {
            var i, m, o, ori, parity, v;
            if (flip != null) {
                parity = 0;
                for(i = m = 10; m >= 0; i = --m){
                    ori = flip % 2;
                    flip = flip / 2 | 0;
                    this.eo[i] = ori;
                    parity += ori;
                }
                this.eo[11] = (2 - parity % 2) % 2;
                return this;
            } else {
                v = 0;
                for(i = o = 0; o <= 10; i = ++o)v = 2 * v + this.eo[i];
                return v;
            }
        },
        // Parity of the corner permutation
        cornerParity: function() {
            var i, j, m, o, ref, ref1, ref2, ref3, s;
            s = 0;
            for(i = m = ref = DRB, ref1 = URF + 1; ref <= ref1 ? m <= ref1 : m >= ref1; i = ref <= ref1 ? ++m : --m){
                for(j = o = ref2 = i - 1, ref3 = URF; ref2 <= ref3 ? o <= ref3 : o >= ref3; j = ref2 <= ref3 ? ++o : --o)if (this.cp[j] > this.cp[i]) s++;
            }
            return s % 2;
        },
        // Parity of the edges permutation. Parity of corners and edges are
        // the same if the cube is solvable.
        edgeParity: function() {
            var i, j, m, o, ref, ref1, ref2, ref3, s;
            s = 0;
            for(i = m = ref = BR, ref1 = UR + 1; ref <= ref1 ? m <= ref1 : m >= ref1; i = ref <= ref1 ? ++m : --m){
                for(j = o = ref2 = i - 1, ref3 = UR; ref2 <= ref3 ? o <= ref3 : o >= ref3; j = ref2 <= ref3 ? ++o : --o)if (this.ep[j] > this.ep[i]) s++;
            }
            return s % 2;
        },
        // Permutation of the six corners URF, UFL, ULB, UBR, DFR, DLF
        URFtoDLF: permutationIndex("corners", URF, DLF),
        // Permutation of the three edges UR, UF, UL
        URtoUL: permutationIndex("edges", UR, UL),
        // Permutation of the three edges UB, DR, DF
        UBtoDF: permutationIndex("edges", UB, DF),
        // Permutation of the six edges UR, UF, UL, UB, DR, DF
        URtoDF: permutationIndex("edges", UR, DF),
        // Permutation of the equator slice edges FR, FL, BL and BR
        FRtoBR: permutationIndex("edges", FR, BR, true)
    };
    for(key in Include){
        value = Include[key];
        Cube.prototype[key] = value;
    }
    computeMoveTable = function(context, coord, size) {
        var apply, cube, i, inner, j, k, m, move, o, p, ref, results;
        // Loop through all valid values for the coordinate, setting cube's
        // state in each iteration. Then apply each of the 18 moves to the
        // cube, and compute the resulting coordinate.
        apply = context === "corners" ? "cornerMultiply" : "edgeMultiply";
        cube = new Cube;
        results = [];
        for(i = m = 0, ref = size - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m){
            cube[coord](i);
            inner = [];
            for(j = o = 0; o <= 5; j = ++o){
                move = Cube.moves[j];
                for(k = p = 0; p <= 2; k = ++p){
                    cube[apply](move);
                    inner.push(cube[coord]());
                }
                // 4th face turn restores the cube
                cube[apply](move);
            }
            results.push(inner);
        }
        return results;
    };
    // Because we only have the phase 2 URtoDF coordinates, we need to
    // merge the URtoUL and UBtoDF coordinates to URtoDF in the beginning
    // of phase 2.
    mergeURtoDF = function() {
        var a, b;
        a = new Cube;
        b = new Cube;
        return function(URtoUL, UBtoDF) {
            var i, m;
            // Collisions can be found because unset are set to -1
            a.URtoUL(URtoUL);
            b.UBtoDF(UBtoDF);
            for(i = m = 0; m <= 7; i = ++m)if (a.ep[i] !== -1) {
                if (b.ep[i] !== -1) return -1; // collision
                else b.ep[i] = a.ep[i];
            }
            return b.URtoDF();
        };
    }();
    N_TWIST = 2187; // 3^7 corner orientations
    N_FLIP = 2048; // 2^11 possible edge flips
    N_PARITY = 2; // 2 possible parities
    N_FRtoBR = 11880; // 12!/(12-4)! permutations of FR..BR edges
    N_SLICE1 = 495; // (12 choose 4) possible positions of FR..BR edges
    N_SLICE2 = 24; // 4! permutations of FR..BR edges in phase 2
    N_URFtoDLF = 20160; // 8!/(8-6)! permutations of URF..DLF corners
    // The URtoDF move table is only computed for phase 2 because the full
    // table would have >650000 entries
    N_URtoDF = 20160; // 8!/(8-6)! permutation of UR..DF edges in phase 2
    N_URtoUL = 1320; // 12!/(12-3)! permutations of UR..UL edges
    N_UBtoDF = 1320; // 12!/(12-3)! permutations of UB..DF edges
    // The move table for parity is so small that it's included here
    Cube.moveTables = {
        parity: [
            [
                1,
                0,
                1,
                1,
                0,
                1,
                1,
                0,
                1,
                1,
                0,
                1,
                1,
                0,
                1,
                1,
                0,
                1
            ],
            [
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0
            ]
        ],
        twist: null,
        flip: null,
        FRtoBR: null,
        URFtoDLF: null,
        URtoDF: null,
        URtoUL: null,
        UBtoDF: null,
        mergeURtoDF: null
    };
    // Other move tables are computed on the fly
    moveTableParams = {
        // name: [scope, size]
        twist: [
            "corners",
            N_TWIST
        ],
        flip: [
            "edges",
            N_FLIP
        ],
        FRtoBR: [
            "edges",
            N_FRtoBR
        ],
        URFtoDLF: [
            "corners",
            N_URFtoDLF
        ],
        URtoDF: [
            "edges",
            N_URtoDF
        ],
        URtoUL: [
            "edges",
            N_URtoUL
        ],
        UBtoDF: [
            "edges",
            N_UBtoDF
        ],
        mergeURtoDF: []
    };
    Cube.computeMoveTables = function(...tables) {
        var len, m, name, scope, size, tableName;
        if (tables.length === 0) tables = function() {
            var results;
            results = [];
            for(name in moveTableParams)results.push(name);
            return results;
        }();
        for(m = 0, len = tables.length; m < len; m++){
            tableName = tables[m];
            if (this.moveTables[tableName] !== null) continue;
            if (tableName === "mergeURtoDF") this.moveTables.mergeURtoDF = function() {
                var UBtoDF, URtoUL, o, results;
                results = [];
                for(URtoUL = o = 0; o <= 335; URtoUL = ++o)results.push(function() {
                    var p, results1;
                    results1 = [];
                    for(UBtoDF = p = 0; p <= 335; UBtoDF = ++p)results1.push(mergeURtoDF(URtoUL, UBtoDF));
                    return results1;
                }());
                return results;
            }();
            else {
                [scope, size] = moveTableParams[tableName];
                this.moveTables[tableName] = computeMoveTable(scope, tableName, size);
            }
        }
        return this;
    };
    // Phase 1: All moves are valid
    allMoves1 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17
    ];
    // The list of next valid phase 1 moves when the given face was turned
    // in the last move
    nextMoves1 = function() {
        var face, lastFace, m, next, o, p, power, results;
        results = [];
        for(lastFace = m = 0; m <= 5; lastFace = ++m){
            next = [];
            // Don't allow commuting moves, e.g. U U'. Also make sure that
            // opposite faces are always moved in the same order, i.e. allow
            // U D but no D U. This avoids sequences like U D U'.
            for(face = o = 0; o <= 5; face = ++o){
                if (face !== lastFace && face !== lastFace - 3) // single, double or inverse move
                for(power = p = 0; p <= 2; power = ++p)next.push(face * 3 + power);
            }
            results.push(next);
        }
        return results;
    }();
    // Phase 2: Double moves of all faces plus quarter moves of U and D
    allMoves2 = [
        0,
        1,
        2,
        4,
        7,
        9,
        10,
        11,
        13,
        16
    ];
    nextMoves2 = function() {
        var face, lastFace, len, m, next, o, p, power, powers, results;
        results = [];
        for(lastFace = m = 0; m <= 5; lastFace = ++m){
            next = [];
            for(face = o = 0; o <= 5; face = ++o){
                if (!(face !== lastFace && face !== lastFace - 3)) continue;
                // Allow all moves of U and D and double moves of others
                powers = face === 0 || face === 3 ? [
                    0,
                    1,
                    2
                ] : [
                    1
                ];
                for(p = 0, len = powers.length; p < len; p++){
                    power = powers[p];
                    next.push(face * 3 + power);
                }
            }
            results.push(next);
        }
        return results;
    }();
    // 8 values are encoded in one number
    pruning = function(table, index, value) {
        var pos, shift, slot;
        pos = index % 8;
        slot = index >> 3;
        shift = pos << 2;
        if (value != null) {
            // Set
            table[slot] &= ~(0xF << shift);
            table[slot] |= value << shift;
            return value;
        } else // Get
        return (table[slot] & 0xF << shift) >>> shift;
    };
    computePruningTable = function(phase, size, currentCoords, nextIndex) {
        var current, depth, done, index, len, m, move, moves, next, o, ref, table, x;
        // Initialize all values to 0xF
        table = function() {
            var m, ref, results;
            results = [];
            for(x = m = 0, ref = Math.ceil(size / 8) - 1; 0 <= ref ? m <= ref : m >= ref; x = 0 <= ref ? ++m : --m)results.push(0xFFFFFFFF);
            return results;
        }();
        if (phase === 1) moves = allMoves1;
        else moves = allMoves2;
        depth = 0;
        pruning(table, 0, depth);
        done = 1;
        // In each iteration, take each state found in the previous depth and
        // compute the next state. Stop when all states have been assigned a
        // depth.
        while(done !== size){
            for(index = m = 0, ref = size - 1; 0 <= ref ? m <= ref : m >= ref; index = 0 <= ref ? ++m : --m){
                if (!(pruning(table, index) === depth)) continue;
                current = currentCoords(index);
                for(o = 0, len = moves.length; o < len; o++){
                    move = moves[o];
                    next = nextIndex(current, move);
                    if (pruning(table, next) === 0xF) {
                        pruning(table, next, depth + 1);
                        done++;
                    }
                }
            }
            depth++;
        }
        return table;
    };
    Cube.pruningTables = {
        sliceTwist: null,
        sliceFlip: null,
        sliceURFtoDLFParity: null,
        sliceURtoDFParity: null
    };
    pruningTableParams = {
        // name: [phase, size, currentCoords, nextIndex]
        sliceTwist: [
            1,
            N_SLICE1 * N_TWIST,
            function(index) {
                return [
                    index % N_SLICE1,
                    index / N_SLICE1 | 0
                ];
            },
            function(current, move) {
                var newSlice, newTwist, slice, twist;
                [slice, twist] = current;
                newSlice = Cube.moveTables.FRtoBR[slice * 24][move] / 24 | 0;
                newTwist = Cube.moveTables.twist[twist][move];
                return newTwist * N_SLICE1 + newSlice;
            }
        ],
        sliceFlip: [
            1,
            N_SLICE1 * N_FLIP,
            function(index) {
                return [
                    index % N_SLICE1,
                    index / N_SLICE1 | 0
                ];
            },
            function(current, move) {
                var flip, newFlip, newSlice, slice;
                [slice, flip] = current;
                newSlice = Cube.moveTables.FRtoBR[slice * 24][move] / 24 | 0;
                newFlip = Cube.moveTables.flip[flip][move];
                return newFlip * N_SLICE1 + newSlice;
            }
        ],
        sliceURFtoDLFParity: [
            2,
            N_SLICE2 * N_URFtoDLF * N_PARITY,
            function(index) {
                return [
                    index % 2,
                    (index / 2 | 0) % N_SLICE2,
                    (index / 2 | 0) / N_SLICE2 | 0
                ];
            },
            function(current, move) {
                var URFtoDLF, newParity, newSlice, newURFtoDLF, parity, slice;
                [parity, slice, URFtoDLF] = current;
                newParity = Cube.moveTables.parity[parity][move];
                newSlice = Cube.moveTables.FRtoBR[slice][move];
                newURFtoDLF = Cube.moveTables.URFtoDLF[URFtoDLF][move];
                return (newURFtoDLF * N_SLICE2 + newSlice) * 2 + newParity;
            }
        ],
        sliceURtoDFParity: [
            2,
            N_SLICE2 * N_URtoDF * N_PARITY,
            function(index) {
                return [
                    index % 2,
                    (index / 2 | 0) % N_SLICE2,
                    (index / 2 | 0) / N_SLICE2 | 0
                ];
            },
            function(current, move) {
                var URtoDF, newParity, newSlice, newURtoDF, parity, slice;
                [parity, slice, URtoDF] = current;
                newParity = Cube.moveTables.parity[parity][move];
                newSlice = Cube.moveTables.FRtoBR[slice][move];
                newURtoDF = Cube.moveTables.URtoDF[URtoDF][move];
                return (newURtoDF * N_SLICE2 + newSlice) * 2 + newParity;
            }
        ]
    };
    Cube.computePruningTables = function(...tables) {
        var len, m, name, params, tableName;
        if (tables.length === 0) tables = function() {
            var results;
            results = [];
            for(name in pruningTableParams)results.push(name);
            return results;
        }();
        for(m = 0, len = tables.length; m < len; m++){
            tableName = tables[m];
            if (this.pruningTables[tableName] !== null) continue;
            params = pruningTableParams[tableName];
            this.pruningTables[tableName] = computePruningTable(...params);
        }
        return this;
    };
    Cube.initSolver = function() {
        Cube.computeMoveTables();
        return Cube.computePruningTables();
    };
    Cube.prototype.solveUpright = function(maxDepth = 22) {
        var State, freeStates, moveNames, phase1, phase1search, phase2, phase2search, solution, state, x;
        // Names for all moves, i.e. U, U2, U', F, F2, ...
        moveNames = function() {
            var face, faceName, m, o, power, powerName, result;
            faceName = [
                "U",
                "R",
                "F",
                "D",
                "L",
                "B"
            ];
            powerName = [
                "",
                "2",
                "'"
            ];
            result = [];
            for(face = m = 0; m <= 5; face = ++m)for(power = o = 0; o <= 2; power = ++o)result.push(faceName[face] + powerName[power]);
            return result;
        }();
        State = class State {
            constructor(cube){
                this.parent = null;
                this.lastMove = null;
                this.depth = 0;
                if (cube) this.init(cube);
            }
            init(cube) {
                // Phase 1 coordinates
                this.flip = cube.flip();
                this.twist = cube.twist();
                this.slice = cube.FRtoBR() / N_SLICE2 | 0;
                // Phase 2 coordinates
                this.parity = cube.cornerParity();
                this.URFtoDLF = cube.URFtoDLF();
                this.FRtoBR = cube.FRtoBR();
                // These are later merged to URtoDF when phase 2 begins
                this.URtoUL = cube.URtoUL();
                this.UBtoDF = cube.UBtoDF();
                return this;
            }
            solution() {
                if (this.parent) return this.parent.solution() + moveNames[this.lastMove] + " ";
                else return "";
            }
            //# Helpers
            move(table, index, move) {
                return Cube.moveTables[table][index][move];
            }
            pruning(table, index) {
                return pruning(Cube.pruningTables[table], index);
            }
            //# Phase 1
            // Return the next valid phase 1 moves for this state
            moves1() {
                if (this.lastMove !== null) return nextMoves1[this.lastMove / 3 | 0];
                else return allMoves1;
            }
            // Compute the minimum number of moves to the end of phase 1
            minDist1() {
                var d1, d2;
                // The maximum number of moves to the end of phase 1 wrt. the
                // combination flip and slice coordinates only
                d1 = this.pruning("sliceFlip", N_SLICE1 * this.flip + this.slice);
                // The combination of twist and slice coordinates
                d2 = this.pruning("sliceTwist", N_SLICE1 * this.twist + this.slice);
                // The true minimal distance is the maximum of these two
                return max(d1, d2);
            }
            // Compute the next phase 1 state for the given move
            next1(move) {
                var next;
                next = freeStates.pop();
                next.parent = this;
                next.lastMove = move;
                next.depth = this.depth + 1;
                next.flip = this.move("flip", this.flip, move);
                next.twist = this.move("twist", this.twist, move);
                next.slice = this.move("FRtoBR", this.slice * 24, move) / 24 | 0;
                return next;
            }
            //# Phase 2
            // Return the next valid phase 2 moves for this state
            moves2() {
                if (this.lastMove !== null) return nextMoves2[this.lastMove / 3 | 0];
                else return allMoves2;
            }
            // Compute the minimum number of moves to the solved cube
            minDist2() {
                var d1, d2, index1, index2;
                index1 = (N_SLICE2 * this.URtoDF + this.FRtoBR) * N_PARITY + this.parity;
                d1 = this.pruning("sliceURtoDFParity", index1);
                index2 = (N_SLICE2 * this.URFtoDLF + this.FRtoBR) * N_PARITY + this.parity;
                d2 = this.pruning("sliceURFtoDLFParity", index2);
                return max(d1, d2);
            }
            // Initialize phase 2 coordinates
            init2(top = true) {
                if (this.parent === null) return;
                // For other states, the phase 2 state is computed based on
                // parent's state.
                // Already assigned for the initial state
                this.parent.init2(false);
                this.URFtoDLF = this.move("URFtoDLF", this.parent.URFtoDLF, this.lastMove);
                this.FRtoBR = this.move("FRtoBR", this.parent.FRtoBR, this.lastMove);
                this.parity = this.move("parity", this.parent.parity, this.lastMove);
                this.URtoUL = this.move("URtoUL", this.parent.URtoUL, this.lastMove);
                this.UBtoDF = this.move("UBtoDF", this.parent.UBtoDF, this.lastMove);
                if (top) // This is the initial phase 2 state. Get the URtoDF coordinate
                // by merging URtoUL and UBtoDF
                return this.URtoDF = this.move("mergeURtoDF", this.URtoUL, this.UBtoDF);
            }
            // Compute the next phase 2 state for the given move
            next2(move) {
                var next;
                next = freeStates.pop();
                next.parent = this;
                next.lastMove = move;
                next.depth = this.depth + 1;
                next.URFtoDLF = this.move("URFtoDLF", this.URFtoDLF, move);
                next.FRtoBR = this.move("FRtoBR", this.FRtoBR, move);
                next.parity = this.move("parity", this.parity, move);
                next.URtoDF = this.move("URtoDF", this.URtoDF, move);
                return next;
            }
        };
        solution = null;
        phase1search = function(state) {
            var depth, m, ref, results;
            depth = 0;
            results = [];
            for(depth = m = 1, ref = maxDepth; 1 <= ref ? m <= ref : m >= ref; depth = 1 <= ref ? ++m : --m){
                phase1(state, depth);
                if (solution !== null) break;
                results.push(depth++);
            }
            return results;
        };
        phase1 = function(state, depth) {
            var len, m, move, next, ref, ref1, results;
            if (depth === 0) {
                if (state.minDist1() === 0) {
                    // Make sure we don't start phase 2 with a phase 2 move as the
                    // last move in phase 1, because phase 2 would then repeat the
                    // same move.
                    if (state.lastMove === null || (ref = state.lastMove, indexOf.call(allMoves2, ref) < 0)) return phase2search(state);
                }
            } else if (depth > 0) {
                if (state.minDist1() <= depth) {
                    ref1 = state.moves1();
                    results = [];
                    for(m = 0, len = ref1.length; m < len; m++){
                        move = ref1[m];
                        next = state.next1(move);
                        phase1(next, depth - 1);
                        freeStates.push(next);
                        if (solution !== null) break;
                        else results.push(void 0);
                    }
                    return results;
                }
            }
        };
        phase2search = function(state) {
            var depth, m, ref, results;
            // Initialize phase 2 coordinates
            state.init2();
            results = [];
            for(depth = m = 1, ref = maxDepth - state.depth; 1 <= ref ? m <= ref : m >= ref; depth = 1 <= ref ? ++m : --m){
                phase2(state, depth);
                if (solution !== null) break;
                results.push(depth++);
            }
            return results;
        };
        phase2 = function(state, depth) {
            var len, m, move, next, ref, results;
            if (depth === 0) {
                if (state.minDist2() === 0) return solution = state.solution();
            } else if (depth > 0) {
                if (state.minDist2() <= depth) {
                    ref = state.moves2();
                    results = [];
                    for(m = 0, len = ref.length; m < len; m++){
                        move = ref[m];
                        next = state.next2(move);
                        phase2(next, depth - 1);
                        freeStates.push(next);
                        if (solution !== null) break;
                        else results.push(void 0);
                    }
                    return results;
                }
            }
        };
        freeStates = function() {
            var m, ref, results;
            results = [];
            for(x = m = 0, ref = maxDepth + 1; 0 <= ref ? m <= ref : m >= ref; x = 0 <= ref ? ++m : --m)results.push(new State);
            return results;
        }();
        state = freeStates.pop().init(this);
        phase1search(state);
        freeStates.push(state);
        // Trim the trailing space
        if (solution.length > 0) solution = solution.substring(0, solution.length - 1);
        return solution;
    };
    faceNums = {
        U: 0,
        R: 1,
        F: 2,
        D: 3,
        L: 4,
        B: 5
    };
    faceNames = {
        0: "U",
        1: "R",
        2: "F",
        3: "D",
        4: "L",
        5: "B"
    };
    Cube.prototype.solve = function(maxDepth = 22) {
        var clone, len, m, move, ref, rotation, solution, upright, uprightSolution;
        clone = this.clone();
        upright = clone.upright();
        clone.move(upright);
        rotation = new Cube().move(upright).center;
        uprightSolution = clone.solveUpright(maxDepth);
        solution = [];
        ref = uprightSolution.split(" ");
        for(m = 0, len = ref.length; m < len; m++){
            move = ref[m];
            solution.push(faceNames[rotation[faceNums[move[0]]]]);
            if (move.length > 1) solution[solution.length - 1] += move[1];
        }
        return solution.join(" ");
    };
    Cube.scramble = function() {
        return Cube.inverse(Cube.random().solve());
    };
}).call(this);

},{"70ae43c13b207581":"l9jzW"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1FANo","5FhOJ"], "5FhOJ", "parcelRequire94c2")

//# sourceMappingURL=index.f0459593.js.map

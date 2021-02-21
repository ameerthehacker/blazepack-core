// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../constants.js":[function(require,module,exports) {
var WS_EVENTS = {
  PATCH: 'PATCH',
  INIT: 'INIT',
  ERROR: 'ERROR',
  UNHANDLED_SANDPACK_ERROR: 'UNHANDLED_SANDPACK_ERROR'
};
module.exports = {
  WS_EVENTS: WS_EVENTS
};
},{}],"../../package.json":[function(require,module,exports) {
module.exports = {
  "name": "blazepack",
  "version": "0.0.16",
  "description": "Blazing fast dev server powered by smooshpack",
  "main": "./bin/blazepack.js",
  "bin": {
    "blazepack": "./bin/blazepack.js"
  },
  "scripts": {
    "build-client": "parcel build src/client/index.js --out-dir src/client/www",
    "dev-client": "parcel src/client/index.js --out-dir src/client/www",
    "prepublish": "npm run build-client"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ameerthehacker/blazepack.git"
  },
  "keywords": ["codesandbox", "dev", "server", "smooshpack"],
  "author": "Ameer Jhan",
  "license": "GPL",
  "bugs": {
    "url": "https://github.com/ameerthehacker/blazepack/issues"
  },
  "homepage": "https://github.com/ameerthehacker/blazepack#readme",
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  },
  "dependencies": {
    "chalk": "^4.1.0",
    "chokidar": "^3.5.1",
    "detect-indent": "^6.0.0",
    "extract-zip": "^2.0.1",
    "find-package-json": "^1.2.0",
    "get-all-files": "^3.0.0",
    "latest-version": "^5.1.0",
    "minimist": "^1.2.5",
    "open": "^7.4.1",
    "ws": "^7.4.3"
  }
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHTMLParts = getHTMLParts;

var _constants = require("../constants");

var _package = require("../../package.json");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compile = window.compile;
var getSandboxTemplate = window.getTemplate;
var getTemplateDefinition = window.getTemplateDefinition;

var info = function info(message) {
  return console.log("".concat(_package.name, ": ").concat(message));
};

var ws = new WebSocket("ws://".concat(window.location.host));
var sandboxFiles;
var manager;

ws.onopen = function () {
  return info('connected');
};

function getFilename(filePath) {
  var fileParts = filePath.split('/');
  var filename = fileParts[fileParts.length - 1];
  return filename;
}

function getHTMLParts(html) {
  if (html.includes('<body>')) {
    var bodyMatcher = /<body.*>([\s\S]*)<\/body>/m;
    var headMatcher = /<head>([\s\S]*)<\/head>/m;
    var headMatch = html.match(headMatcher);
    var bodyMatch = html.match(bodyMatcher);
    var head = headMatch && headMatch[1] ? headMatch[1] : '';
    var body = bodyMatch && bodyMatch[1] ? bodyMatch[1] : html;
    return {
      body: body,
      head: head
    };
  }

  return {
    head: '',
    body: html
  };
}

function getSandboxTemplateName(sandboxFiles) {
  var packageJSON = JSON.parse(sandboxFiles['/package.json'].code);
  var sandboxTemplate = getSandboxTemplate(packageJSON, sandboxFiles);
  return sandboxTemplate;
}

ws.onmessage = function (evt) {
  var _JSON$parse = JSON.parse(evt.data),
      type = _JSON$parse.type,
      data = _JSON$parse.data;

  try {
    switch (type) {
      case _constants.WS_EVENTS.INIT:
        {
          sandboxFiles = data;
          var sandboxTemplate = getSandboxTemplateName(sandboxFiles);
          var sandboxTemplateDefinition = getTemplateDefinition(sandboxTemplate);
          var htmlEntryFile = sandboxTemplateDefinition.getHTMLEntries()[0];

          if (htmlEntryFile) {
            var htmlContent = sandboxFiles[htmlEntryFile].code;

            var _getHTMLParts = getHTMLParts(htmlContent),
                head = _getHTMLParts.head;

            document.head.innerHTML = head;
          }

          compile({
            modules: sandboxFiles,
            codesandbox: true,
            externalResources: [],
            template: getSandboxTemplateName(sandboxFiles),
            isInitializationCompile: true
          });
          break;
        }

      case _constants.WS_EVENTS.PATCH:
        {
          var event = data.event,
              fileContent = data.fileContent,
              path = data.path;
          var filename = getFilename(path); // we need to reload so that sandpack can install the package

          if (filename === "package.json") {
            window.location.reload();
          } // do a full page reload on new file or folder creation or deletion


          if (event === "add" || event === "unlink") {
            window.location.reload();
          }

          var updatedFiles = _objectSpread(_objectSpread({}, sandboxFiles), {}, _defineProperty({}, path, {
            code: fileContent,
            path: path
          }));

          compile({
            modules: updatedFiles,
            codesandbox: true,
            externalResources: [],
            template: getSandboxTemplateName(updatedFiles)
          });
          break;
        }
    }
  } catch (e) {
    ws.send(JSON.stringify({
      type: _constants.WS_EVENTS.UNHANDLED_SANDPACK_ERROR,
      data: {
        title: "Unhandled Sandpack error while running the app.",
        message: e.message
      }
    }));
  }
};
},{"../constants":"../constants.js","../../package.json":"../../package.json"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59806" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/index.js.map
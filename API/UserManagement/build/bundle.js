/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*********************************************************************************************************************************************************!*\
  !*** G:/WebSite_Learn/ReactJs/00--Studied--/Server Side Rendering with React and Redux/Project/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** G:/WebSite_Learn/ReactJs/00--Studied--/Server Side Rendering with React and Redux/Project/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** G:/WebSite_Learn/ReactJs/00--Studied--/Server Side Rendering with React and Redux/Project/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** G:/WebSite_Learn/ReactJs/00--Studied--/Server Side Rendering with React and Redux/Project/node_modules/@babel/runtime/regenerator/index.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./controllers/root.js":
/*!*****************************!*\
  !*** ./controllers/root.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./models/user.js");




var RootController = {};
var users = [{
  id: 1,
  name: 'Leanne Graham'
}, {
  id: 2,
  name: 'Ervin Howell'
}, {
  id: 3,
  name: 'Clementine Bauch'
}, {
  id: 4,
  name: 'Patricia Lebsack'
}, {
  id: 5,
  name: 'Chelsey Dietrich'
}];
var admins = [{
  id: 1,
  name: 'Kurtis Weissnat'
}, {
  id: 2,
  name: 'Nicholas Runolfsdottir'
}, {
  id: 3,
  name: 'Gelann Reichert'
}, {
  id: 4,
  name: 'Moriah Stanton'
}, {
  id: 5,
  name: 'Rey Padberg'
}];

RootController.rootPage = function (req, res) {
  var adminContent = "\n        <div>\n        You don't appear to be logged in.  You can log in by visiting\n        <a href=\"/auth/google\">the Authentication Route</a>. You could\n        also look at details about yourself at <a href=\"/api/current_user\">the Current User route</a>\n        </div>\n    ";

  if (req.user) {
    adminContent = "\n        <div>\n            You appear to be logged in, so you can visit <a href=\"/admins\">the Admins route</a>\n            or you can\n            <form action=\"/logout\" method=\"post\">\n                <input type=\"hidden\" name=\"_csrf\" value=\"".concat(req.csrfToken(), "\"></input>\n                <button type=\"submit\">Logout</button>\n            </form>\n        </div>\n        ");
  }

  res.send("\n        <div>\n        <h4>Hi!  Welcome to the React SSR API</h4>\n        <div>\n            You can see <a href=\"/users\">the Users route</a>\n        </div>\n        ".concat(adminContent, "\n        </div>\n    "));
};

RootController.usersList = function (req, res) {
  res.send(users);
};

RootController.logIn = function (req, res) {
  res.send("\n    <html>\n      <body>\n        <a href=\"auth/google\">Login via Google</a>\n      </body>\n    </html>");
};

RootController.admins = function (req, res) {
  res.send(admins);
};

RootController.redirectToRoot = function (req, res) {
  res.redirect('/');
};

RootController.logOut =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.logout();

          case 2:
            res.redirect('/');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

RootController.emailVerification = function (req, res, next) {
  var token = req.query.token; // Check to see token is valid with specified email

  jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, 'afsan|user|emailVerify|007', {
    subject: "emailVerification"
  }, function (err, decoded) {
    // Check to see can find email
    if (err) {
      if (err.name == 'TokenExpiredError') {
        return res.status(500).send('request expired please try again');
      } else {
        return res.send({
          err: err
        });
      }
    }

    _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].findOneAndUpdate({
      email: decoded.email
    }, {
      $set: {
        isVerified: true
      }
    }, {
      new: true
    }, function (err, user) {
      if (err) {
        throw new Error('can\'t find Email try again');
      }

      res.redirect('/');
    });
  });
};

RootController.resetPassword = function (req, res, next) {
  var token = req.query.token;
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, 'afsan|user|resetPassword|007', {
    subject: "resetPassword"
  }, function (err, decoded) {
    if (err) {
      if (err.name == 'TokenExpiredError') {
        return res.status(500).send('request expired please try again');
      } else {
        return res.send({
          err: err
        });
      }
    }

    res.send({
      email: decoded.email
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RootController);

/***/ }),

/***/ "./emails/emailVerify.js":
/*!*******************************!*\
  !*** ./emails/emailVerify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var emailVerify = function emailVerify(user) {
  var request = jwt.sign({
    email: user.email,
    access: "simple_user"
  }, 'afsan|user|emailVerify|007', {
    expiresIn: 60 * 60,
    subject: "emailVerification"
  });
  return "\n    <html>\n        <body>\n            <div>\n                <h1>Email Verification</h1>\n                <a href='http://localhost:5000/emailverify?token=".concat(request, "'>\n                    <button>verifying my account</button>\n                </a>\n            </div>\n        </body>\n    </html>\n    ");
};

var text = 'and easy to do anywhere, even with Node.js';

var config = function config(user) {
  return {
    to: user.email,
    subject: "Successfully SignedIn[".concat(user.name, "]"),
    from: 'af.hadafi@gmail.com',
    text: text,
    html: emailVerify(user)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./emails/resetPassword.js":
/*!*********************************!*\
  !*** ./emails/resetPassword.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var resetPassword = function resetPassword(user) {
  var request = jwt.sign({
    email: user.email,
    access: "simple_user"
  }, 'afsan|user|resetPassword|007', {
    expiresIn: 60 * 60,
    subject: "resetPassword"
  });
  return "\n    <html>\n        <body>\n            <div>\n                <h1>resetPassword</h1>\n                <a href='http://localhost:3000/resetPassword/".concat(request, "'>\n                    <button>reset my account Password</button>\n                </a>\n            </div>\n        </body>\n    </html>\n    ");
};

var text = 'and easy to do anywhere, even with Node.js';

var config = function config(user) {
  return {
    to: user.email,
    subject: "Rest Password",
    from: 'af.hadafi@gmail.com',
    text: text,
    html: resetPassword(user)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./server/index.js");

_server__WEBPACK_IMPORTED_MODULE_0__["default"].listen(process.env.PORT, function () {
  console.log("[UserManagement]_server is running on port ".concat(process.env.PORT));
});

/***/ }),

/***/ "./middlewares/requireLogin.js":
/*!*************************************!*\
  !*** ./middlewares/requireLogin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  req.user ? next() : res.status(404).send({
    error: 'You must log in!'
  });
});

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
    validate: {
      validator: function validator(val) {
        return validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail(val);
      },
      message: '{VALUE} is not a valid {PATH}'
    }
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  googleId: {
    type: String
  },
  isVerified: {
    type: Boolean
  }
});
userSchema.method('comparePassword', function (candidatePass, callback) {
  var _user = this;

  Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["compare"])(candidatePass, _user.password, function (err, isMatch) {
    callback(err, isMatch);
  });
});
userSchema.pre('save', function (next) {
  var _user = this;

  if (!_user.isModified) {
    return next();
  }

  Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["genSalt"])(10, function (err, salt) {
    if (!err) {
      Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["hash"])(_user.password, salt, function (err, hash) {
        if (!err) {
          _user.password = hash;
          next();
        } else {
          return next('can\'t hash the password,try again');
        }
      });
    } else {
      return next('some thing went wrong');
    }
  });
});
var userModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (userModel);

/***/ }),

/***/ "./routes/rootRouter.js":
/*!******************************!*\
  !*** ./routes/rootRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/requireLogin */ "./middlewares/requireLogin.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/root */ "./controllers/root.js");



var router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();
router.get('/', _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].rootPage);
router.get('/users', _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].usersList);
router.get('/admins', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_0__["default"], _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].admins);
router.get('/login', _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].logIn);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./routes/userRouter.js":
/*!******************************!*\
  !*** ./routes/userRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/requireLogin */ "./middlewares/requireLogin.js");
/* harmony import */ var _controllers_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/root */ "./controllers/root.js");




var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
var googleAuth = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('google', {
  scope: ['profile', 'email']
});
var googleAuthCB = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('google');
router.get('/auth/google', googleAuth);
router.get('/api/auth/google/callback', googleAuthCB, _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].redirectToRoot);
router.get('/auth/google/callback', googleAuthCB, _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].redirectToRoot);
router.post('/logout', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__["default"], _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].logOut);
router.get('/current_user', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__["default"], function (req, res) {
  res.send(req.user);
});
router.get('/emailverify', _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].emailVerification);
router.get('/resetPassword', _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].resetPassword);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./schema/index.js":
/*!*************************!*\
  !*** ./schema/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./schema/types/index.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "./schema/mutation.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_2__);



var Schema = new graphql__WEBPACK_IMPORTED_MODULE_2__["GraphQLSchema"]({
  query: _types__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutation: _mutation__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Schema);

/***/ }),

/***/ "./schema/mutation.js":
/*!****************************!*\
  !*** ./schema/mutation.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_userType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/userType */ "./schema/types/userType.js");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helpers */ "./services/helpers.js");



var mutation = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "MutationObserver",
  fields: function fields() {
    return {
      SignIn: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          password: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref, req) {
          var password = _ref.password,
              email = _ref.email;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].SignIn({
            email: email,
            password: password,
            req: req
          });
        }
      },
      SignUp: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          name: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          password: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref2, req) {
          var email = _ref2.email,
              password = _ref2.password,
              name = _ref2.name;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].SignUp({
            email: email,
            password: password,
            name: name,
            req: req
          });
        }
      },
      SignOut: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        resolve: function resolve(parentValue, args, req) {
          var user = req.user;
          req.logout();
          return user;
        }
      },
      sendEmailVerify: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref3, req) {
          var email = _ref3.email;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].sendEmailVerify({
            email: email,
            req: req
          });
        }
      },
      sendResetPassEmail: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref4, req) {
          var email = _ref4.email;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].sendResetPassEmail({
            email: email,
            req: req
          });
        }
      },
      updateUserPassword: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          password: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref5, req) {
          var email = _ref5.email,
              password = _ref5.password;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].updateUserPassword({
            email: email,
            password: password,
            req: req
          });
        }
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mutation);

/***/ }),

/***/ "./schema/types/index.js":
/*!*******************************!*\
  !*** ./schema/types/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userType */ "./schema/types/userType.js");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/helpers */ "./services/helpers.js");



var RootQueryType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "RootQueryType",
  fields: function fields() {
    return {
      user: {
        type: _userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        resolve: function resolve(parentValue, args, req) {
          return req.user;
        }
      },
      identifyUserByToken: {
        type: _userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          token: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref, req) {
          var token = _ref.token;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].identifyUserByToken({
            token: token,
            req: req
          });
        }
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (RootQueryType);

/***/ }),

/***/ "./schema/types/userType.js":
/*!**********************************!*\
  !*** ./schema/types/userType.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);

var userType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "UserType",
  fields: {
    id: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLID"]
    },
    name: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
    },
    email: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
    },
    isVerified: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLBoolean"]
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (userType);

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! csurf */ "csurf");
/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(csurf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var x_xss_protection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! x-xss-protection */ "x-xss-protection");
/* harmony import */ var x_xss_protection__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(x_xss_protection__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hpp */ "hpp");
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hpp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _routes_userRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes/userRouter */ "./routes/userRouter.js");
/* harmony import */ var _routes_rootRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes/rootRouter */ "./routes/rootRouter.js");
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! express-graphql */ "express-graphql");
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../schema */ "./schema/index.js");

















__webpack_require__(/*! ../services/passport */ "./services/passport.js"); /////////////////START DATABASE CONFIG///////////////////////////


mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(process.env.DB_ADDRESS, {
  useNewUrlParser: true
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('connected', function () {
  console.log("connection established successfully");
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', function (err) {
  console.log('connection to mongo failed ' + err);
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('disconnected', function () {
  console.log('mongo db connection closed');
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.set('useCreateIndex', true);
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise; /////////////////END DATABASE CONFIG///////////////////////////

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(helmet__WEBPACK_IMPORTED_MODULE_11___default()());
app.use(helmet__WEBPACK_IMPORTED_MODULE_11___default.a.noSniff());
app.use(helmet__WEBPACK_IMPORTED_MODULE_11___default.a.ieNoOpen()); /////////////////START APP MIDDLEWARE///////////////////////////

__webpack_require__(/*! dotenv */ "dotenv").config({
  path: path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(process.cwd(), 'config/keys/.env')
});

app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: true
}));
app.use(hpp__WEBPACK_IMPORTED_MODULE_10___default()());
app.disable('x-powered-by');
var whiteList = [process.env.CORS_APPROVED_ADDRESS, "http://localhost:".concat(process.env.PORT)];
var corsOptionsDelegate = {
  origin: function origin(_origin, cb) {
    whiteList.indexOf(_origin) !== -1 || !_origin ? cb(null, true) : cb(new Error('Not allowed by CORS'));
  }
};
app.use(cors__WEBPACK_IMPORTED_MODULE_7___default()(corsOptionsDelegate)); ///////////////END APP MIDDLEWARE///////////////////////////

var RedisStore = __webpack_require__(/*! connect-redis */ "connect-redis")(express_session__WEBPACK_IMPORTED_MODULE_5___default.a);

app.use(express_session__WEBPACK_IMPORTED_MODULE_5___default()({
  secret: "3f9faa8bc0e722172cc0bdafede9f3f217474e47",
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    prefix: "session:auth:"
  }),
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  }
})); // app.use()

app.use(x_xss_protection__WEBPACK_IMPORTED_MODULE_9___default()());
app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.initialize());
app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.session()); ////////////////START GRAPHQL CONFIG///////////////////////////

app.use('/graphql', express_graphql__WEBPACK_IMPORTED_MODULE_14___default()({
  schema: _schema__WEBPACK_IMPORTED_MODULE_15__["default"],
  graphiql: true
})); ////////////////START ROUTER CONFIG///////////////////////////

app.use('/', csurf__WEBPACK_IMPORTED_MODULE_8___default()(), _routes_userRouter__WEBPACK_IMPORTED_MODULE_12__["default"]);
app.use('/', csurf__WEBPACK_IMPORTED_MODULE_8___default()(), _routes_rootRouter__WEBPACK_IMPORTED_MODULE_13__["default"]); /////////////////END ROUTER CONFIG///////////////////////////

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./services/helpers.js":
/*!*****************************!*\
  !*** ./services/helpers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail");
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emails_emailVerify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emails/emailVerify */ "./emails/emailVerify.js");
/* harmony import */ var _emails_resetPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emails/resetPassword */ "./emails/resetPassword.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);






/*
 *
 * Auth Object contain all logic for authentication
 *
*/

var Auth = {};

Auth.SignUp = function (_ref) {
  var email = _ref.email,
      password = _ref.password,
      name = _ref.name,
      req = _ref.req;

  if (!email || !password) {
    throw new Error('type all credentials');
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    email: email
  }).then(function (user) {
    if (user) {
      throw new Error('Email is in use');
    }

    return new _models_user__WEBPACK_IMPORTED_MODULE_1__["default"]({
      email: email,
      password: password,
      name: name,
      isVerified: false
    }).save();
  }).then(function (user) {
    return new Promise(function (res, rej) {
      req.login(user, function (err) {
        if (err) {
          rej(err);
        }

        return res(user);
      });
    });
  });
};

Auth.SignIn = function (_ref2) {
  var email = _ref2.email,
      password = _ref2.password,
      req = _ref2.req;

  if (!email && !password) {
    throw new Error('type all credentials');
  }

  ;
  return new Promise(function (res, rej) {
    passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('local', function (err, user) {
      if (!user) {
        return rej('you are not registered yet please signUp first');
      }

      if (err) {
        return rej(err);
      }

      req.login(user, function (err) {
        if (err) {
          return rej(err);
        }

        return res(user);
      });
    })({
      body: {
        email: email,
        password: password
      }
    });
  });
};

Auth.sendEmailVerify = function (_ref3) {
  var email = _ref3.email,
      req = _ref3.req;

  if (!email) {
    throw new Error('email should be insert');
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    email: email
  }).then(function (user) {
    if (!user) {
      throw new Error('user with this email doesn\'t exist');
    }

    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_2___default.a.setApiKey(process.env.SEND_GRID_API_KEY);
    return new Promise(function (res, rej) {
      _sendgrid_mail__WEBPACK_IMPORTED_MODULE_2___default.a.send(Object(_emails_emailVerify__WEBPACK_IMPORTED_MODULE_3__["default"])(user), true, function (err, result) {
        if (err) {
          return rej(err);
        }

        return res({
          email: email
        });
      });
    });
  });
};

Auth.sendResetPassEmail = function (_ref4) {
  var email = _ref4.email,
      req = _ref4.req;

  if (!email) {
    throw new Error('email should be insert');
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    email: email
  }).then(function (user) {
    if (!user) {
      throw new Error('user with this email doesn\'t exist');
    }

    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_2___default.a.setApiKey(process.env.SEND_GRID_API_KEY);
    return new Promise(function (res, rej) {
      _sendgrid_mail__WEBPACK_IMPORTED_MODULE_2___default.a.send(Object(_emails_resetPassword__WEBPACK_IMPORTED_MODULE_4__["default"])(user), true, function (err, result) {
        if (err) {
          return rej(err.message);
        }

        return res({
          email: email
        });
      });
    });
  });
};

Auth.identifyUserByToken = function (_ref5) {
  var token = _ref5.token,
      req = _ref5.req;
  return new Promise(function (res, rej) {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.verify(token, 'afsan|user|resetPassword|007', {
      subject: "resetPassword"
    }, function (err, decoded) {
      if (err) {
        if (err.name == 'TokenExpiredError') {
          return rej('request expired please try again');
        } else {
          console.log(err);
          return rej(err);
        }
      }

      res({
        email: decoded.email
      });
    });
  });
};

Auth.updateUserPassword = function (_ref6) {
  var email = _ref6.email,
      password = _ref6.password,
      req = _ref6.req;
  return _models_user__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    email: email
  }).then(function (user, err) {
    if (err) {
      throw new Error('something went wrong,try again');
    }

    if (!user) {
      throw new Error('User not found');
    }

    user.password = password;
    return user.save();
  }).then(function (user) {
    return new Promise(function (res, rej) {
      return res({
        email: email
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./services/passport.js":
/*!******************************!*\
  !*** ./services/passport.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_6__);








__webpack_require__(/*! dotenv */ "dotenv").config({
  path: path__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(process.cwd(), 'config/keys/.env')
});

passport__WEBPACK_IMPORTED_MODULE_2___default.a.serializeUser(function (user, done) {
  done(null, user.id);
});
passport__WEBPACK_IMPORTED_MODULE_2___default.a.deserializeUser(function (id, done) {
  _models_user__WEBPACK_IMPORTED_MODULE_4__["default"].findById(id).then(function (user) {
    done(null, user);
  });
}); /////////////////// Google Authentication /////////////////////////

var googleOption = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_AUTH_SUCCESS_CALLBACK,
  proxy: true
};
var GoogleAuth = new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__["Strategy"](googleOption,
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(accessToken, refreshToken, profile, done) {
    var existingUser, newUser;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models_user__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
              googleId: profile.id
            });

          case 2:
            existingUser = _context.sent;

            if (!existingUser) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", done(null, existingUser));

          case 5:
            _context.next = 7;
            return new _models_user__WEBPACK_IMPORTED_MODULE_4__["default"]({
              name: profile.displayName,
              email: profile.emails[0].value,
              password: profile.id,
              googleId: profile.id,
              isVerified: true
            }).save();

          case 7:
            newUser = _context.sent;
            done(null, newUser);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()); /////////////////// Local Authentication ///////////////////////////

var LocalOption = {
  usernameField: 'email'
};
var LocalAuth = new passport_local__WEBPACK_IMPORTED_MODULE_6___default.a(LocalOption, function (email, password, done) {
  _models_user__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
    email: email.toLowerCase()
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }

      if (isMatch) {
        return done(null, user);
      }

      return done(null, false, 'Invalid_Credential');
    });
  });
});
passport__WEBPACK_IMPORTED_MODULE_2___default.a.use(LocalAuth);
passport__WEBPACK_IMPORTED_MODULE_2___default.a.use(GoogleAuth);

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-redis");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "x-xss-protection":
/*!***********************************!*\
  !*** external "x-xss-protection" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("x-xss-protection");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
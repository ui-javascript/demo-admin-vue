webpackJsonp([1,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	/*!
	 * 注意不要压缩这个模块
	*/
	module.exports = function heredoc(fn) {
	    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').
	            replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><')
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon) {var heredoc = __webpack_require__(3);
	avalon.component("ms-pager", {
	    template: heredoc(function () {
	        /*
	         <div class="pagination">
	         <ul>
	         <li :for="el in @pages" 
	         :class="[ el == @currentPage && 'active' ]">
	         <a href="javascript:void(0)" :click="@gotoPage(el, $event)">{{el}}</a>
	         </li>
	         </ul>
	         </div>
	         */
	    }),
	    defaults: {
	        totalPage: 25,
	        currentPage: 1,
	        showPage: 7,
	        pages: [1, 2, 3, 4, 5, 6, 7],
	        gotoPage: function (page, e) {
	            this.currentPage = page;
	            this.pages = this.getPages();
	        },
	        getPages: function () {
	            var pages = [];
	            var s = this.showPage, l = this.currentPage, r = this.currentPage, c = this.totalPage;
	            pages.push(l);
	            while (true) {
	                if (pages.length >= s) {
	                    break;
	                }
	                if (l > 1) {
	                    pages.unshift(--l);
	                }
	                if (pages.length >= s) {
	                    break;
	                }
	                if (r < c) {
	                    pages.push(++r);
	                }
	            }

	            return pages;
	        }
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/Img419362895-ed48a945.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, _) {avalon.parsers.card = function (a) {
	    return a.replace(/\s/g, '').replace(/(\d{4})/g, "$1 ").trim()
	};
	var vm = avalon.define({
	    $id: "first",
	    tabs: [111, 222, 333],
	    activeIndex: 0,
	    aaa: '',
	    panels: ["面板1", "面板2", '<p>这里可以是复杂的<b>HTML</b></p>'],
	    init: function () {
	        avalon.log("first init" + _.now());
	    },
	    formatCard: function (e) {
	        var el = e.target;
	        var caret = el.selectionStart;
	        var value = el.value;
	        var prev = value.slice(0, caret);
	        var sp = (prev.match(/\s/) || []).length;
	        var curr = value.replace(/\s/g, '').replace(/(\d{4})/g, "$1 ").trim();
	        var now = curr.slice(0, caret);
	        var curSp = (now.match(/\s/) || []).length;
	        el.value = curr;
	        //同步到ms-duplex中的pos去
	        el._ms_duplex_.pos = caret + curSp - sp
	    }

	});
	//成绩单
	//大家可以对比一下1.*的相同实现
	//http://www.cnblogs.com/rubylouvre/p/3213430.html
	var model = avalon.define({
	    $id: 'transcript',
	    id: '',
	    name: '',
	    score: 0,
	    total: 0,
	    array: [],
	    add: function () {
	        this.array.push({
	            id: this.id,
	            name: this.name,
	            score: this.score
	        })
	    }
	});

	model.$watch("score", function (a) {
	    a = Number(a) || 0;
	    a = a > 100 ? 100 : a < 0 ? 0 : a; //强制转换为0~100间
	    model.score = a
	});
	model.$watch("array", function () {
	    var a = 0;
	    model.array.forEach(function (el) {
	        a += el.score; //求得总数
	    });
	    model.total = a;
	    model.id = "";
	    model.name = "";
	    model.score = 0
	});
	model.array = [
	    {id: "d1", name: "李世民", score: 67},
	    {id: "d2", name: "赢政", score: 90}
	];
	avalon.ready(function () {
	    avalon.vmodels['root'].headerPage = '<p>this is headerPage,first</p>';
	});
	module.exports = vm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, _) {var vm = avalon.define({
	    $id: 'msHtmlA',
	    init: function () {
	        avalon.log("four init" + _.now());
	    }
	});
	module.exports = vm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, _) {var heredoc = __webpack_require__(3);
	__webpack_require__(4);

	function genData(n) {
	    var list = [];
	    for (var i = 0; i < n; i++) {
	        list.push({
	            aaa: new Date - i,
	            bbb: Math.random().toString(32).replace(/0\./, ""),
	            ccc: (Math.random() + "").replace(/0\./, ""),
	            ddd: i
	        })
	    }
	    return list
	}

	var vm = avalon.define({
	    $id: 'widget1',
	    header: ['aaa', 'bbb', 'ccc'],
	    start: 0,
	    count: 10,
	    data: genData(300),
	    init: function () {
	        avalon.log("second init" + _.now());
	    },
	    ready: function (e) {
	        avalon.log("second ready" + _.now());
	        e.vmodel.$watch('currentPage', function (a) {
	            vm.start = a - 1;
	        })
	    },
	    ddd: 'bbb'
	});

	avalon.component('ms-grid', {
	    template: heredoc(function () {
	        /*
	         <div class="grid">
	         <div><slot name="header"/></div>
	         <div><slot name="tbody"/></div>
	         <div class="pager"><slot name="pager" /></div>
	         </div>
	         */
	    }),
	    defaults: {}
	});
	avalon.ready(function () {
	    avalon.vmodels['root'].headerPage = '<p>this is headerPage,second</p>';
	});
	module.exports = vm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, _) {var vm = avalon.define({
	    $id: "loginController",
	    user: {
	        username: '',
	        password: ''
	    },
	    errorMessage: '',
	    successInputName: [],
	    errorInputName: [],
	    loginValidate: {
	        onSuccess: function (reasons) {
	            if (vm.successInputName.indexOf(this.id) === -1) vm.successInputName.push(this.id.toString());
	            if (vm.errorInputName.indexOf(this.id) > -1) vm.errorInputName.splice(vm.errorInputName.indexOf(this.id), 1);
	        },
	        onError: function (reasons) {
	            vm.errorMessage = reasons[0].getMessage();

	            if (vm.successInputName.indexOf(this.id) > -1) vm.successInputName.splice(vm.successInputName.indexOf(this.id), 1);
	            if (vm.errorInputName.indexOf(this.id.toString()) === -1) vm.errorInputName.push(this.id.toString());

	        }
	    },
	    init: function () {
	        avalon.log("third init" + _.now());
	    },
	    xxx: __webpack_require__(5)
	});
	avalon.ready(function () {
	    avalon.vmodels['root'].headerPage = '<p>this is headerPage,third</p>';
	});
	module.exports = vm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon, _) {var msHtmlA = avalon.define({
	    $id: 'msHtmlA',
	    init: function () {
	        avalon.log("four init" + _.now());
	    },
	    getMsHtmlAFun: function () {
	        avalon.log('MsHtmlA|' + new Date());
	    }
	});
	module.exports = msHtmlA;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.4+314e4831
	 */

	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.ES6Promise = factory());
	}(this, (function () { 'use strict';

	function objectOrFunction(x) {
	  var type = typeof x;
	  return x !== null && (type === 'object' || type === 'function');
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}



	var _isArray = void 0;
	if (Array.isArray) {
	  _isArray = Array.isArray;
	} else {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = void 0;
	var customSchedulerFn = void 0;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var vertx = Function('return this')().require('vertx');
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = void 0;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;


	  if (_state) {
	    var callback = arguments[_state - 1];
	    asap(function () {
	      return invokeCallback(_state, child, callback, parent._result);
	    });
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(2);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var TRY_CATCH_ERROR = { error: null };

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    TRY_CATCH_ERROR.error = error;
	    return TRY_CATCH_ERROR;
	  }
	}

	function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then$$1.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then$$1) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then$$1, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$1) {
	  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$1 === TRY_CATCH_ERROR) {
	      reject(promise, TRY_CATCH_ERROR.error);
	      TRY_CATCH_ERROR.error = null;
	    } else if (then$$1 === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$1)) {
	      handleForeignThenable(promise, maybeThenable, then$$1);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function resolve(promise, value) {
	  if (promise === value) {
	    reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;


	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = void 0,
	      callback = void 0,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = void 0,
	      error = void 0,
	      succeeded = void 0,
	      failed = void 0;

	  if (hasCallback) {
	    value = tryCatch(callback, detail);

	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null;
	    } else {
	      succeeded = true;
	    }

	    if (promise === value) {
	      reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }

	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	    resolve(promise, value);
	  } else if (failed) {
	    reject(promise, error);
	  } else if (settled === FULFILLED) {
	    fulfill(promise, value);
	  } else if (settled === REJECTED) {
	    reject(promise, value);
	  }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      resolve(promise, value);
	    }, function rejectPromise(reason) {
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	}

	var Enumerator = function () {
	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);

	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }

	    if (isArray(input)) {
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate(input);
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      reject(this.promise, validationError());
	    }
	  }

	  Enumerator.prototype._enumerate = function _enumerate(input) {
	    for (var i = 0; this._state === PENDING && i < input.length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };

	  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$1 = c.resolve;


	    if (resolve$$1 === resolve$1) {
	      var _then = getThen(entry);

	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise$1) {
	        var promise = new c(noop);
	        handleMaybeThenable(promise, entry, _then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$1) {
	          return resolve$$1(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$1(entry), i);
	    }
	  };

	  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	    var promise = this.promise;


	    if (promise._state === PENDING) {
	      this._remaining--;

	      if (state === REJECTED) {
	        reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };

	  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	    var enumerator = this;

	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };

	  return Enumerator;
	}();

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {Function} resolver
	  Useful for tooling.
	  @constructor
	*/

	var Promise$1 = function () {
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }

	  /**
	  The primary way of interacting with a promise is through its `then` method,
	  which registers callbacks to receive either a promise's eventual value or the
	  reason why the promise cannot be fulfilled.
	   ```js
	  findUser().then(function(user){
	    // user is available
	  }, function(reason){
	    // user is unavailable, and you are given the reason why
	  });
	  ```
	   Chaining
	  --------
	   The return value of `then` is itself a promise.  This second, 'downstream'
	  promise is resolved with the return value of the first promise's fulfillment
	  or rejection handler, or rejected if the handler throws an exception.
	   ```js
	  findUser().then(function (user) {
	    return user.name;
	  }, function (reason) {
	    return 'default name';
	  }).then(function (userName) {
	    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	    // will be `'default name'`
	  });
	   findUser().then(function (user) {
	    throw new Error('Found user, but still unhappy');
	  }, function (reason) {
	    throw new Error('`findUser` rejected and we're unhappy');
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	  });
	  ```
	  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	   ```js
	  findUser().then(function (user) {
	    throw new PedagogicalException('Upstream error');
	  }).then(function (value) {
	    // never reached
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // The `PedgagocialException` is propagated all the way down to here
	  });
	  ```
	   Assimilation
	  ------------
	   Sometimes the value you want to propagate to a downstream promise can only be
	  retrieved asynchronously. This can be achieved by returning a promise in the
	  fulfillment or rejection handler. The downstream promise will then be pending
	  until the returned promise is settled. This is called *assimilation*.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // The user's comments are now available
	  });
	  ```
	   If the assimliated promise rejects, then the downstream promise will also reject.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // If `findCommentsByAuthor` fulfills, we'll have the value here
	  }, function (reason) {
	    // If `findCommentsByAuthor` rejects, we'll have the reason here
	  });
	  ```
	   Simple Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let result;
	   try {
	    result = findResult();
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	  findResult(function(result, err){
	    if (err) {
	      // failure
	    } else {
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findResult().then(function(result){
	    // success
	  }, function(reason){
	    // failure
	  });
	  ```
	   Advanced Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let author, books;
	   try {
	    author = findAuthor();
	    books  = findBooksByAuthor(author);
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	   function foundBooks(books) {
	   }
	   function failure(reason) {
	   }
	   findAuthor(function(author, err){
	    if (err) {
	      failure(err);
	      // failure
	    } else {
	      try {
	        findBoooksByAuthor(author, function(books, err) {
	          if (err) {
	            failure(err);
	          } else {
	            try {
	              foundBooks(books);
	            } catch(reason) {
	              failure(reason);
	            }
	          }
	        });
	      } catch(error) {
	        failure(err);
	      }
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findAuthor().
	    then(findBooksByAuthor).
	    then(function(books){
	      // found books
	  }).catch(function(reason){
	    // something went wrong
	  });
	  ```
	   @method then
	  @param {Function} onFulfilled
	  @param {Function} onRejected
	  Useful for tooling.
	  @return {Promise}
	  */

	  /**
	  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	  as the catch block of a try/catch statement.
	  ```js
	  function findAuthor(){
	  throw new Error('couldn't find that author');
	  }
	  // synchronous
	  try {
	  findAuthor();
	  } catch(reason) {
	  // something went wrong
	  }
	  // async with promises
	  findAuthor().catch(function(reason){
	  // something went wrong
	  });
	  ```
	  @method catch
	  @param {Function} onRejection
	  Useful for tooling.
	  @return {Promise}
	  */


	  Promise.prototype.catch = function _catch(onRejection) {
	    return this.then(null, onRejection);
	  };

	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuther();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuther();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @return {Promise}
	  */


	  Promise.prototype.finally = function _finally(callback) {
	    var promise = this;
	    var constructor = promise.constructor;

	    return promise.then(function (value) {
	      return constructor.resolve(callback()).then(function () {
	        return value;
	      });
	    }, function (reason) {
	      return constructor.resolve(callback()).then(function () {
	        throw reason;
	      });
	    });
	  };

	  return Promise;
	}();

	Promise$1.prototype.then = then;
	Promise$1.all = all;
	Promise$1.race = race;
	Promise$1.resolve = resolve$1;
	Promise$1.reject = reject$1;
	Promise$1._setScheduler = setScheduler;
	Promise$1._setAsap = setAsap;
	Promise$1._asap = asap;

	/*global self*/
	function polyfill() {
	  var local = void 0;

	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }

	  var P = local.Promise;

	  if (P) {
	    var promiseToString = null;
	    try {
	      promiseToString = Object.prototype.toString.call(P.resolve());
	    } catch (e) {
	      // silently ignored
	    }

	    if (promiseToString === '[object Promise]' && !P.cast) {
	      return;
	    }
	  }

	  local.Promise = Promise$1;
	}

	// Strange compat..
	Promise$1.polyfill = polyfill;
	Promise$1.Promise = Promise$1;

	return Promise$1;

	})));



	//# sourceMappingURL=es6-promise.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), (function() { return this; }())))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<div ms-important=\"first\" class=\"view\">\r\n    <style>\r\n        .active {\r\n            background: blueviolet;\r\n        }\r\n\r\n        .panel {\r\n            margin: 2em;\r\n            padding: 1em;\r\n            min-height: 200px;\r\n            border: 1px solid #666;\r\n            background: #0e97e2;\r\n        }\r\n\r\n        .grid table {\r\n            border: 1px solid #000;\r\n            width: 500px;\r\n            border-collapse: collapse;\r\n        }\r\n\r\n        .grid button {\r\n            width: 400px;\r\n            background: orange;\r\n        }\r\n\r\n        .grid table th,\r\n        .grid table td {\r\n            border: 1px solid #000;\r\n            padding: 2px 5px;\r\n        }\r\n    </style>\r\n    <p>\r\n        <button ms-for=\"(index, el) in @tabs\" ms-class=\"{active: index === @activeIndex}\"\r\n                ms-click=\"@activeIndex = index\">\r\n            {{el}}\r\n        </button>\r\n    </p>\r\n    <div class=\"panel\" ms-visible=\"0 === @activeIndex\">\r\n        <p>银行卡:<input placeholder=\"xxxx xxxx xxxx xxxx\" ms-duplex=\"@aaa | debounce(100) \"\r\n                      data-duplex-changed=\"@formatCard\"/>\r\n        </p>\r\n    </div>\r\n    <div class=\"panel\" ms-visible=\"1 === @activeIndex\">\r\n        <h2>成绩单</h2>\r\n        <div ms-important=\"transcript\" class=\"grid\">\r\n            <div>\r\n                <p><input ms-duplex=\"@id\">\r\n                    <input ms-duplex=\"@name\">\r\n                    <input ms-duplex=\"@score | change\"></p>\r\n                <p>\r\n                    <button ms-click=\"@add\"> add</button>\r\n                </p>\r\n            </div>\r\n            <p>共{{@array.length}}条------------------合计{{@total}}分</p>\r\n            <table>\r\n                <thead>\r\n                <tr>\r\n                    <th>ID</th>\r\n                    <th>姓名</th>\r\n                    <th>分数</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody ms-for=\"el in @array\">\r\n                <tr>\r\n                    <td>{{el.id}}</td>\r\n                    <td>{{el.name}}</td>\r\n                    <td>{{el.score}}</td>\r\n                    <td align=\"center\"><a ms-click=\"@array.remove(el)\" href=\"javascript:void(0)\">移除</a></td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel\" ms-visible=\"2 === @activeIndex\">\r\n        111\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"view\">\r\n    第二页 hello world\r\n</div>\r\n\r\n";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div ms-important=\"widget1\">\r\n    <style>\r\n        .header {\r\n            border: 1px solid #000;\r\n            width: 600px;\r\n            border-collapse: collapse;\r\n        }\r\n\r\n        .header td {\r\n            border: 1px solid #000;\r\n            text-align: center;\r\n            font-weight: 700;\r\n            height: 30px;\r\n            color: #607fa6;\r\n            font-weight: 700;\r\n        }\r\n\r\n        .tbody {\r\n            width: 600px;\r\n            margin-top: -1px;\r\n            border: 1px solid #000;\r\n            border-collapse: collapse;\r\n        }\r\n\r\n        .tbody td {\r\n            border: 1px solid #000;\r\n            height: 30px;\r\n        }\r\n\r\n        .pagination ul {\r\n            list-style: none;\r\n            margin: 0;\r\n            padding: 0;\r\n        }\r\n\r\n        .pagination li {\r\n            float: left;\r\n        }\r\n\r\n        .pagination li a {\r\n            text-decoration: none;\r\n            display: inline-block;\r\n            width: 40px;\r\n            height: 30px;\r\n            line-height: 30px;\r\n            text-align: center;\r\n            background: #fafafa;\r\n            color: #000;\r\n\r\n        }\r\n\r\n        .pagination .active a {\r\n            background: #009a61;\r\n            color: #fff;\r\n        }\r\n\r\n        .pager {\r\n            width: 600px;\r\n            background: #fafafa;\r\n        }\r\n\r\n        .pager > * {\r\n            float: right;\r\n\r\n        }\r\n\r\n    </style>\r\n    <xmp cached=\"true\" :widget=\"{id:'grid',is:'ms-grid'}\">\r\n        <table slot='header' class=\"header\">\r\n            <tr>\r\n                <td :for=\"el in @header\" style=\"width:200px\">\r\n                    {{el}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table slot=\"tbody\" class=\"tbody\">\r\n            <tr :for=\"obj in @data | limitBy(@count, @start)\">\r\n                <td :for=\"el in obj | selectBy(@header)\" style=\"width:200px\">{{el}}</td>\r\n            </tr>\r\n        </table>\r\n        <ms-pager slot=\"pager\" :widget=\"{onReady:@ready}\"/>\r\n    </xmp>\r\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"block-center mt-xl wd-xl\">\n    <!-- START panel-->\n    <div class=\"panel panel-dark panel-flat\">\n        <div class=\"panel-body\" ms-controller=\"loginController\">\n\n            <h4 class=\"text-center pv\">仓押系统登录 {{@errorInputName.indexOf('inputUsername')}}</h4>\n            <form role=\"form\" data-parsley-validate=\"\" novalidate=\"\" class=\"mb-lg\" ms-validate=\"@loginValidate\">\n                <div class=\"form-group has-feedback \" ms-class=\"[@errorInputName.indexOf('inputUsername')>-1 && 'has-error',  @successInputName.indexOf('inputUsername')>-1 &&'has-success'] \">\n                    <input id=\"inputUsername\" type=\"text\" placeholder=\"用户名\" class=\"form-control\" ms-duplex=\"@user.username\" ms-rules='{required:true,minlength:4,maxlength:20}'\n                           data-required-message=\"请输入用户名\" data-minlength-message=\"用户名长度不能少于4位\" data-maxlength-message=\"用户名长度不能大于20位\">\n                    <span class=\"fa fa-user form-control-feedback text-muted\"></span>\n                </div>\n\n                <div class=\"form-group has-feedback\" ms-class=\"[@errorInputName.indexOf('inputPassword')>-1 && 'has-error',  @successInputName.indexOf('inputPassword')>-1 &&'has-success'] \">\n                    <input id=\"inputPassword\" type=\"password\" placeholder=\"密码\" class=\"form-control\" ms-duplex=\"@user.password\" ms-rules='{required:true,minlength:6,maxlength:20}'\n                           data-required-message=\"请输入密码\" data-minlength-message=\"密码长度不能少于6位\" data-maxlength-message=\"密码长度不能大于20位\">\n                    <span class=\"fa fa-lock form-control-feedback text-muted\"></span>\n                </div>\n\n                <span id=\"error\" class=\"help-block\">{{@errorMessage}}</span>\n                <button type=\"submit\" class=\"btn btn-block btn-primary mt-lg\">登录</button>\n            </form>\n            <img ms-attr=\"{src:@xxx}\">\n            <!--<p class=\"pt-lg text-center\">Need to Signup?</p><a href=\"register.html\" class=\"btn btn-block btn-default\">Register Now</a>-->\n        </div>\n    </div>\n    <!-- END panel-->\n</div>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div ms-controller=\"msHtmlA\">\n    <button ms-click=\"@getRootFun\" style=\"width: 200px;height: 200px\">尝试ms-html中触发root方法</button>\n    <br>\n    <button ms-click=\"@getMsHtmlAFun\" style=\"width: 200px;height: 200px\">尝试触发MsHtmlA方法</button>\n</div>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon) {__webpack_require__(13).polyfill();

	avalon.config({
	    debug: true
	});
	var root = avalon.define({
	    $id: 'root',
	    getRootFun: function () {
	        avalon.log('Root|'+new Date());
	    },
	    headerPage: '<p>this is headerPage</p>',//头部页面
	    footerPage: '<p>this is footerPage</p>',//尾部页面
	    currPath: '',//当前路径k
	    currPage: ''//当前页面
	});


	var states = {};

	function addState(path, vm, html) {
	    states[path] = {
	        vm: vm,
	        html: html
	    }
	}

	avalon.component('ms-view', {
	    template: '<div ms-html="@page" class="ms-view"></div>',
	    defaults: {
	        page: '&nbsp;',
	        path: 'no',
	        onReady: function(e) {
	            var path = e.vmodel.path;
	            var state = states[path];
	            avalon.vmodels[state.vm.$id] = state.vm;
	            avalon.vmodels[state.vm.$id].init();
	            setTimeout(function() {//必须等它扫描完这个template,才能替换
	                e.vmodel.page = state.html
	            },100)
	        },
	        onDispose: function(e) {
	            var path = e.vmodel.path;
	            var state = states[path];
	            var vm = state.vm;
	            var render = vm.render;
	            render && render.dispose();
	            delete avalon.vmodels[vm.$id]
	        }
	    }
	});

	function getPage(path) {
	    path = path.slice(1);
	    var html = '<xmp is="ms-view" class="view-container" ms-widget="{path:\'' + path + '\',page: @page}"><xmp>';
	    return html
	}

	var pages = ["aa/first","aa/second", "bb/second","cc/third","dd/four"];
	pages.forEach(function(pathname) {
	    var html = __webpack_require__(23)("./" + pathname + '.html');
	    var vm = __webpack_require__(22)("./" + pathname + '.js');
	    addState(pathname, vm, html);
	    avalon.router.add("/"+pathname, function(a) {
	        root.currPath = this.path;
	        root.currPage = getPage(this.path);
	    })
	});

	avalon.history.start({
	    root: "/bb/second"
	});
	// avalon.router.navigate('/bb/second', 0);
	// avalon.history.setHash('/bb/second');

	avalon.ready(function() {
	    avalon.scan(document.body)
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./aa/first.js": 6,
		"./aa/second.js": 7,
		"./bb/second.js": 8,
		"./cc/third.js": 9,
		"./dd/four.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 22;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./aa/first.html": 14,
		"./aa/second.html": 15,
		"./bb/second.html": 16,
		"./cc/third.html": 17,
		"./dd/four.html": 18
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 23;


/***/ })
]);
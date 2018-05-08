webpackJsonp([3,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


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
/* 5 */,
/* 6 */,
/* 7 */,
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

/***/ })
]);
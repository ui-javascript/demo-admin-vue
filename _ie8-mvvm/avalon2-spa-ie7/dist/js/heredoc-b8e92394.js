webpackJsonp([9,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


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


/***/ })
]);
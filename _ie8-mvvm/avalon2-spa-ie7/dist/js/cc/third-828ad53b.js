webpackJsonp([5,0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/Img419362895-ed48a945.jpg";

/***/ }),

/***/ 9:
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

/***/ })

});
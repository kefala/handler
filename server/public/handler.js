/******/ (function(modules) { // webpackBootstrap
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

	//import all
	
	
	var Router = __webpack_require__(1);
	var DOM = __webpack_require__(2);
	var View = __webpack_require__(3);
	
	var hk = {};
	
	hk.Router 	= Router;
	hk.DOM 		= DOM;
	hk.View		= View;
	
	window.hk = hk;

/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
		
		constructor (routes, DOM) {
			console.log(routes, DOM);
			this.routes = routes;
			this.DOM = DOM;
		}
	
		start () {
			var interval = setInterval(function(){ 
				if (DOM.isReady()) {
					ready();
				}
			}, 1);
			
			function ready () {
				clearInterval(interval);
				console.log("Ready");
			}
			
	
		}
	}
	
	module.exports = Router;

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	DOM = {};
	
	DOM.isReady = function () {
		return (document.readyState === "complete");
	};
	
	DOM.create = function (obj) {
		var element = null;
	
		if (obj.el) {
			element = document.createElement(obj.el);
			if (obj.classes) {
				element.classList.add(obj.classes);
			}
			if (obj.id) {
				element.setAttribute("id", obj.id);		
			}
		}
	
		if (element === null) {
			throw "Error en la creacion del nodo";
		}
	
		return element;
	}
	
	module.exports = DOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	class View {
		constructor (obj) {
			console.log(obj);
		}
	}
	
	module.exports = View;

/***/ }
/******/ ]);
//# sourceMappingURL=handler.js.map
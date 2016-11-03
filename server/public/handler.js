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
	"use strict";
	
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

	"use strict";
	
	class Router {
		
		constructor (routes, DOM) {
			this.routes = routes;
			this.DOM = DOM;
			this.parseInitial();
		}
	
		parseInitial () {
			var tmp;
			for (var route in this.routes) {
				tmp = this.routes[route].slug.split("/");
				tmp = tmp.slice(1);
				this.routes[route].parse = tmp;
			}
		}
	
		start (slug) {
			var onReady = this.onReady.bind(this),
			isReady = this.DOM.isReady.bind(this);
	
			var interval = setInterval(function(){ 
				if (isReady()) {
					clearInterval(interval);
					onReady(slug);
				}
			}, 100);
		}
	
		onReady (slug) {
			//discomponent route and identifier
			var route = this.unbuild(slug);
	
			if (route === null) {
				throw "No se encontró la url";
			}
	
			this.go(route, slug);
		}
	
		go (route, slug) {
			//build the route with params
			history.pushState(null, route.title, slug);
			this.DOM.setTitle(route.title);
		}
	
		goTo (name, params) {
			//discomponent route and identifier
		}
	
		build (route, params) {
			
		}
	
		unbuild (slug) {
			var routeUnbuild = slug.split("/");
			routeUnbuild = routeUnbuild.slice(1);
			for (var route in this.routes) {
				if (this.routes[route].parse[0] === routeUnbuild[0]) {
					return this.routes[route];
				}
			}
			return null;
		}
	}
	
	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var DOM = {};
	
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
	
	DOM.setTitle = function (title) {
		document.title = title;
	}
	
	module.exports = DOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	class View {
		constructor (obj) {
			console.log(obj);
		}
	}
	
	module.exports = View;

/***/ }
/******/ ]);
//# sourceMappingURL=handler.js.map
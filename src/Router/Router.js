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

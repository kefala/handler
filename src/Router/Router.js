class Router {
	
	constructor (routes, DOM) {
		console.log(routes, DOM);
		this.routes = routes;
		this.DOM = DOM;
	}

	start (name) {
		var ready = this.ready.bind(this);

		var interval = setInterval(function(){ 
			if (DOM.isReady()) {
				clearInterval(interval);
				ready(name);
			}
		}, 1);
	}

	ready (slug) {
		console.log(slug);
		var arrSlug = slug.split("/");
		console.log(arrSlug);

		for (var i = arrSlug.length - 1; i >= 0; i--) {
			if (arrSlug[i] === "") {
				arrSlug.splice(i, 1);
			}
		}

		if (arrSlug.length) {
			this.goTo("index");				
		}

/*
		for (var item in this.routes) {
			console.log(name);
			if (this.routes[item] === slug) {
			}
		}
*/
		//this.go();
	}

	go (route, params) {
		console.log("Sra", route);
		history.pushState(null, route.name, route.slug);
		this.DOM.setTitle(route.title);
	}

	goTo (name, params) {
		for (var item in this.routes) {
			console.log(item);
			if (item === name) {
				this.go(this.routes[name], params);
				return;
			}
		}
		
		throw "No se encontró la ruta buscada";
	}
}

module.exports = Router;
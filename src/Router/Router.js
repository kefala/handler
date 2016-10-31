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
class HomeView extends hk.View {
	constructor () {
		super({
			view: "me"
		});	

	}
}


var Router = new hk.Router({
	index: {
		route: '/',
		view: new HomeView()
	}
}, hk.DOM);

Router.start();
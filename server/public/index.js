class HomeView extends hk.View {
	constructor () {
		super({
		});	

	}
}

var Router = new hk.Router({
	index: {
		slug: '/',
		view: HomeView,
		title: "Home"
	},
	qs: {
		slug: '/quienes-somos',
		view: HomeView,
		title: "Quienes Somos"
	},
	contact: {
		slug: '/contacto',
		view: HomeView,
		title: "Contacto"
	}
}, hk.DOM);

Router.start(location.pathname);

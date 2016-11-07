"use strict";

class HomeView extends hk.View {
	constructor () {
		super({
			components: {
				navbar: new hk.Component({
					el: hk.DOM.create({el: "p", class: "texto",text: "Facha"}),
					childs: {
						button: new hk.Component({
							el: hk.DOM.create({el: "button", text: "kkk", class: "btn"})
						})
					} 
				}),
				title: new hk.Component({
					el: hk.DOM.create({el: "h1", text: "Mucha facha", class: "title"})
				})
			}
		});	
	}
}

hk.DOM.idMainBox = "main-content";

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
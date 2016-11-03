"use strict";

class HomeView extends hk.View {
	constructor () {
		super({

			components: {
			
				navbar: new hk.Component({
					el: hk.DOM.create({
						el: "p",
						class: "texto",
						text: "Facha",
					}),
					childs: {
			
						button: new hk.Component({
							el: hk.DOM.create({
								el: "button",
								text: "kkk",
								class: "btn"
							})
						})
			
					} 
				})
			}
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

Router.start(location.pathname, document.body);
"use strict";

class View {

	constructor (inst) {
		this.components = (inst.components) ? inst.components : null;
		this.isRender = false;
		if (hk.DOM.mainBox === null) {
			if (hk.DOM.idMainBox === null) {
				hk.DOM.mainBox = document.body;
			} else {
				if (document.getElementById(hk.DOM.idMainBox) === null) {
					hk.DOM.mainBox = document.body;
				} else {
					hk.DOM.mainBox = document.getElementById(hk.DOM.idMainBox);
				}
			}
		}
	}

	render () {
		var component = null;
		while (hk.DOM.mainBox.firstChild) {
			hk.DOM.mainBox.removeChild(hk.DOM.mainBox.firstChild);
		}
		if (this.components === null) {
			this.isRender = true;
			return;
		} 
		for (component in this.components) {
			hk.DOM.mainBox.appendChild(this.components[component].el);
		}

		console.log(this.components.navbar);
	}
}

module.exports = View;
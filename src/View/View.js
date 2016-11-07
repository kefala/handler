"use strict";

class View {

	constructor (inst) {
		this.components = (inst.components) ? inst.components : null;
		this.isRender = false;
		if (hk.DOM.mainBox === null) {
			hk.DOM.mainBox = document.body;
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
"use strict";

class Component {

	constructor (params) {
		this.el = params.el
		this.childs = (params.childs) ? params.childs : null;
		this.render();
	}

	render () {
		var child = null;
		if (this.childs !== null) {
			for(child in this.childs) {
				this.el.appendChild(this.childs[child].el);
			}
		}
	}

}

module.exports = Component;

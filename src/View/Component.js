"use strict";

class Component {

	constructor (params) {
		var child = null;
		console.log(params);
		this.el = params.el
		if (params.childs) {
			for(child in params.childs) {
				this.el.appendChild(params.childs[child].el);
			}
		} else {
			this.child = null;
		}
	}

}

module.exports = Component;

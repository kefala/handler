"use strict";

var DOM = {};

DOM.isReady = function () {
	return (document.readyState === "complete");
};

DOM.create = function (obj) {
	var element = null;

	if (obj.el) {
		element = document.createElement(obj.el);
		if (obj.classes) {
			element.classList.add(obj.classes);
		}
		if (obj.id) {
			element.setAttribute("id", obj.id);		
		}
	}

	if (element === null) {
		throw "Error en la creacion del nodo";
	}

	return element;
}

DOM.setTitle = function (title) {
	document.title = title;
}

module.exports = DOM;
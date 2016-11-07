"use strict";

var DOM = {};

DOM.mainBox = null;

DOM.idMainBox = null;

DOM.isReady = function () {
	return (document.readyState === "complete");
};

DOM.create = function (param) {
	var element = null;
	if (param.el) {
		element = document.createElement(param.el);

		if (param.classes) {
			element.classList.add(param.classes);
		}

		if (param.id) {
			element.setAttribute("id", param.id);		
		}

		if (param.text) {
			element.textContent = param.text;		
		}
	}
	if (element === null) {
		throw "Error en la creacion del nodo";
	}
	return element;
};

DOM.setTitle = function (title) {
	document.title = title;
};

module.exports = DOM;
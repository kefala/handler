"use strict";

var DOM = {};

DOM.mainBox = null;

DOM.idMainBox = null;

DOM.isReady = function () {
	return (document.readyState === "complete");
};

DOM.create = function (param) {
	var element = null;
	var classes = null;
	if (param.el) {
		element = document.createElement(param.el);

		if (param.classes) {
			classes = param.classes.split(" ");
			classes.forEach(function(className) {
				element.classList.add(className);
			});
		}

		if (param.id) {
			element.setAttribute("id", param.id);		
		}

		if (param.text) {
			element.innerText = param.text;		
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
//import all
"use strict";

var Router = require('./Router/Router.js');
var DOM = require('./View/DOM.js');
var View = require('./View/View.js');
var Component = require('./View/Component.js');

var hk = {};

hk.Router 		= Router;
hk.DOM 			= DOM;
hk.View			= View;
hk.Component	= Component;

if (typeof(window) !== "undefined") {
	window.hk = hk;
}

module.exports = hk;
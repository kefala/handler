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

window.hk = hk;
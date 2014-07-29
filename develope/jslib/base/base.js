var base = {};
var $ = require("jquery");
base.include = require("../mod/include");
base.goTop = require("../mod/gotop");
$(function(){
	console.log($("body"));
});
module.exports = base;
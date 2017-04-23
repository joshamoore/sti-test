var STIApp = angular.module('STIApp', []);

STIApp.controller('mainController', function() {
	var stiApp = this;
	var side = false; /* Boolean to represent side a or b */
	stiApp.toggle = function( ) {
		(side==false)?side=true:side=false; /* Swap state */
	}
	stiApp.getStatus = function() {
		return side;
	}
});
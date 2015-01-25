var todoApp = angular.module('TodoModule', ['ui.bootstrap']);

todoApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('//');
	$interpolateProvider.endSymbol('//');
});
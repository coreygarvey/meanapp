var spotifyApp = angular.module('SpotifyModule', ['ui.bootstrap']);

spotifyApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('//');
	$interpolateProvider.endSymbol('//');
});
/// <reference path="../typedef/angular.d.ts" />
/// <reference path="../typedef/angular-material.d.ts" />

angular.module("app", ['ngRoute', 'ngMaterial']).config([
	'$controllerProvider', function($controllerProvider) {
		$controllerProvider.allowGlobals();
	}
])
	.config([
		'$routeProvider', function ($routeProvider) {
			$routeProvider.
			    when('/page/:id/:name', {
			        templateUrl: "templates/page.html",
			        controller: 'WebEngineering.PageController'
			    }).otherwise({ redirectTo: '/page/1/home' });
		}
	]).config([
		'$mdThemingProvider', function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('orange')
				.warnPalette('red');
		}
	]).config(['$mdIconProvider', function ($mdIconProvider) {
		$mdIconProvider.defaultIconSet("stylesheets/img/material-icons.svg", 24);
	}]);

module WebEngineering {
	export class MainController{
		constructor(private $scope: any, private $mdSidenav: angular.material.MDSidenavService) {
			$scope.controller = this;
		}

		public toggleSidenav()
		{
			this.$mdSidenav('left').toggle();
		}
	}
}
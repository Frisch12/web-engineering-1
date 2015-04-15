/// <reference path="../typedef/angular.d.ts" />

module WebEngineering {
	export interface PageScope extends angular.IScope {
		title: string;
	}

	export class PageController {
		constructor(private $scope: PageScope, private $routeParams: any){
			$scope.title = $routeParams.name;
		}
	}
}
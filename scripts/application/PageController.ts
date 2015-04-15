/// <reference path="../typedef/angular.d.ts" />

module WebEngineering {
	export interface PageScope extends angular.IScope {
		page_url: string;
	}

	export class PageController {
		constructor(private $scope: PageScope, private $routeParams: any){
			$scope.page_url = "pages/" + $routeParams.id + ".html";
		}
	}
}
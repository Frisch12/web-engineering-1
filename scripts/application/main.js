/// <reference path="../typedef/angular.d.ts" />
/// <reference path="../typedef/angular-material.d.ts" />
angular.module("app", ['ngRoute', 'ngMaterial']).config([
    '$controllerProvider',
    function ($controllerProvider) {
        $controllerProvider.allowGlobals();
    }
]).config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/page/:id/:name', {
            templateUrl: "templates/page.html",
            controller: 'WebEngineering.PageController'
        }).otherwise({ redirectTo: '/page/1/home' });
    }
]).config([
    '$mdThemingProvider',
    function ($mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('orange').warnPalette('red');
    }
]).config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet("stylesheets/img/material-icons.svg", 24);
}]);
var WebEngineering;
(function (WebEngineering) {
    var MainController = (function () {
        function MainController($scope, $mdSidenav) {
            this.$scope = $scope;
            this.$mdSidenav = $mdSidenav;
            $scope.controller = this;
        }
        MainController.prototype.toggleSidenav = function () {
            this.$mdSidenav('left').toggle();
        };
        return MainController;
    })();
    WebEngineering.MainController = MainController;
})(WebEngineering || (WebEngineering = {}));
//# sourceMappingURL=main.js.map
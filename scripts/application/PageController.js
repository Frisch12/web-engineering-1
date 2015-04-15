/// <reference path="../typedef/angular.d.ts" />
var WebEngineering;
(function (WebEngineering) {
    var PageController = (function () {
        function PageController($scope, $routeParams) {
            this.$scope = $scope;
            this.$routeParams = $routeParams;
            $scope.page_url = "pages/" + $routeParams.id + ".html";
        }
        return PageController;
    })();
    WebEngineering.PageController = PageController;
})(WebEngineering || (WebEngineering = {}));
//# sourceMappingURL=PageController.js.map
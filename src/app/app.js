angular.module('ashley', [
  'templates-app',
  'templates-common',
  'ashley.home',
  'ashley.design',
  'ashley.leadership',
  'ui.router'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $location) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | ashley';
    }
  });
})

.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'navbar/navbar.tpl.html'
  };
});

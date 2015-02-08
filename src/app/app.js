angular.module('ashley', [
  'templates-app',
  'templates-common',
  'ashley.firebase.key',
  'firebase',
  'ashley.routes',
  'ashley.filters',
  'ashley.projects',
  'ui.router',
  'navbar',
  'back',
  'scrollTop'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})

.run(function run($rootScope) {})

.controller('AppCtrl', function AppCtrl($scope, $rootScope, $location) {
  $scope.bottom = false;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | Ashley';
    }
  });
  $scope.scroll = function() {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
  };
});

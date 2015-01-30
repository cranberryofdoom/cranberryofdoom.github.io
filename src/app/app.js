angular.module('ashley', [
  'templates-app',
  'templates-common',
  'ashley.home',
  'ashley.projects',
  'ashley.firebase.key',
  'ui.router',
  'firebase',
  'navbar',
  'back',
  'scrollTop'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $rootScope, $location) {
  $rootScope.tag = null;
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

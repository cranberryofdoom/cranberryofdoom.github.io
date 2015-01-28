angular.module('ashley', [
  'templates-app',
  'templates-common',
  'ashley.home',
  'ashley.projects',
  'ashley.firebase.key',
  'ui.router',
  'firebase'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $rootScope, $location) {
  $rootScope.active = {
    design: false,
    code: false,
    leadership: false
  };
  $scope.bottom = false;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | Ashley';
    }
  });
})

.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/navbar.tpl.html'
  };
})

.directive('back', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/back.tpl.html',
      link: function($scope, el, attrs, formCtrl) {
        var back = $(el.find('a'));
        $(window).scroll(function() {
          if ($(window).scrollTop() + $(window).height() > $(document).height() - 20) {
            back.addClass("bottom");
          } else {
            back.removeClass("bottom");
          }
        });
      }
    };
  })
  .directive('scrollTop', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/scrollTop.tpl.html',
      link: function($scope, el, attrs, formCtrl) {
        var scrollTop = $(el.find('a'));
        $(window).scroll(function() {
          if ($(window).scrollTop() + $(window).height() > $(document).height() - 20) {
            scrollTop.addClass("bottom");
          } else {
            scrollTop.removeClass("bottom");
          }
        });
      }
    };
  });

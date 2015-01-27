angular.module('ashley.leadership', [
    'ui.router'
  ])
  .config(function config($stateProvider) {
    $stateProvider.state('leadership', {
      url: '/leadership',
      views: {
        "main": {
          controller: 'LeadershipCtrl',
          templateUrl: 'leadership/leadership.tpl.html'
        }
      },
      data: {
        pageTitle: 'Leadership'
      }
    });
  })
  .controller('LeadershipCtrl', function LeadershipController($scope) {

  });

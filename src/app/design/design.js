angular.module('ashley.design', [
    'ui.router'
  ])
  .config(function config($stateProvider) {
    $stateProvider.state('design', {
      url: '/design',
      views: {
        "main": {
          controller: 'DesignCtrl',
          templateUrl: 'design/design.tpl.html'
        }
      },
      data: {
        pageTitle: 'Design'
      }
    });
  })
  .controller('DesignCtrl', function DesignController($scope) {

  });

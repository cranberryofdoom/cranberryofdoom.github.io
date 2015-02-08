angular.module('ashley.routes', [
    'ui.router'
  ])
  .config(function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        "main": {
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: {
        pageTitle: 'Home'
      }
    }).state('code', {
      url: '/projects/code',
      views: {
        "main": {
          controller: 'ProjectsCtrl',
          templateUrl: 'projects/projects.tpl.html'
        }
      },
      data: {
        pageTitle: 'Code',
        filter: 'code'
      }
    }).state('design', {
      url: '/projects/design',
      views: {
        "main": {
          controller: 'ProjectsCtrl',
          templateUrl: 'projects/projects.tpl.html'
        }
      },
      data: {
        pageTitle: 'Design',
        filter: 'design'
      }
    }).state('leadership', {
      url: '/projects/leadership',
      views: {
        "main": {
          controller: 'ProjectsCtrl',
          templateUrl: 'projects/projects.tpl.html'
        }
      },
      data: {
        pageTitle: 'Leadership',
        filter: 'leadership'
      }
    }).state('project', {
      url: '/projects/:tag/:projectUrl',
      views: {
        "main": {
          controller: 'ProjectsCtrl',
          templateUrl: 'projects/project.detail.tpl.html'
        }
      },
      data: {
        pageTitle: '',
        filter: ''
      }
    }).state('edit', {
      url: '/projects/:tag/:projectUrl/edit',
      views: {
        "main": {
          controller: 'ProjectsCtrl',
          templateUrl: 'projects/project.detail.tpl.html'
        }
      },
      data: {
        pageTitle: '',
        filter: ''
      }
    });
  });

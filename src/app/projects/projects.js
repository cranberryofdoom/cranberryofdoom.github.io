angular.module('ashley.projects', [
		'ui.router',
		'firebase',
		'ashley.firebase.key'
	])
	.config(function config($stateProvider) {
		$stateProvider.state('code', {
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
		});
	})
	.controller('ProjectsCtrl', function ProjectsController($scope, $rootScope, $firebase, key) {
		var projectsCtrl = this;
		var ref = new Firebase(key);
		var sync = $firebase(ref);
		projectsCtrl.projects = sync.$asArray();
		projectsCtrl.project = null;
		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if (angular.isDefined(toState.data.filter)) {
				projectsCtrl.tag = toState.data.filter;
			}
			if (toParams !== undefined) {
				projectsCtrl.projects.$loaded().then(function(projects) {
					for (var i = 0; i < projects.length; i++) {
						if (toParams.projectUrl == projects[i].url_safe) {
							projectsCtrl.project = projects[i];
						}
					}
				});
				$rootScope.tag = toParams.tag;
			}
		});
	})
	.filter('filterProjectsByTag', function() {
		return function(projects, tag) {
			var filteredProjects = [];
			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				var projectTags = project.tags;
				if ($.inArray(tag, projectTags) != -1) {
					filteredProjects.push(project);
				}
			}
			return filteredProjects;
		};
	}).filter('filterContributionsByTag', function() {
		return function(contributions, tag) {
			var filteredContributions = [];
			for (var i = 0; i < contributions.length; i++) {
				if (tag == contributions[i].tag) {
					filteredContributions.push(contributions[i]);
				}
			}
			return filteredContributions;
		};
	}).filter('filterByLeadership', function() {
		return function(contributions) {
			var filteredContributions = [];
			for (var i = 0; i < contributions.length; i++) {
				if ('leadership' == contributions[i].tag) {
					filteredContributions.unshift(contributions[i]);
				} else {
					filteredContributions.push(contributions[i]);
				}
			}
			return filteredContributions;
		};
	});

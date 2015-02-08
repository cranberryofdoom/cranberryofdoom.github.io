angular.module('ashley.projects', [
		'ui.router',
		'firebase',
		'carousel',
		'ngDialog',
		'contenteditable',
		'ashley.firebase.key'
	])
	.controller('ProjectsCtrl', function ProjectsController($scope, $rootScope, $firebase, key, ngDialog) {
		var ref = new Firebase(key);
		var sync = $firebase(ref);
		var projectCtrl = $scope;
		projectCtrl.projects = sync.$asArray();
		projectCtrl.project = null;
		projectCtrl.editButton = false;
		projectCtrl.editable = false;
		projectCtrl.tag = null;
		projectCtrl.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if (angular.isDefined(toState.data.filter)) {
				projectCtrl.tag = toState.data.filter;
			}
			if (toParams.tag !== undefined) {
				projectCtrl.projects.$loaded().then(function(projects) {
					for (var i = 0; i < projects.length; i++) {
						if (toParams.projectUrl == projects[i].url_safe) {
							projectCtrl.project = projects[i];
						}
					}
				});
				projectCtrl.tag = toParams.tag;
			}
			if (toState.name == "edit") {
				projectCtrl.editButton = true;
			}
		});
		projectCtrl.edit = function() {
			var dialog = ngDialog.open({
				template: 'modal',
				controller: function($scope) {
					$scope.submit = function(password) {
						if (projectCtrl.editable) {
							projectCtrl.editable = false;
						} else {
							ref.authWithPassword({
								email: "ashley.qian.0@gmail.com",
								password: password
							}, function(error, authData) {
								if (error) {} else {
									dialog.close();
									dialog.closePromise.then(function(data) {
										projectCtrl.editable = true;
									});
								}
							});
						}
					};
				}
			});
		};
	});

angular.module('navbar', [])
	.directive('navbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/navbar.tpl.html'
		};
	});

angular.module('carousel', [])
	.directive('carousel', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/carousel.tpl.html',
			controller: function($scope) {
				$scope.show = 0;
				$scope.right = function(numPhotos) {
					if ($scope.show < numPhotos - 1) {
						$scope.show++;
					}
				};
				$scope.left = function() {
					if ($scope.show > 0) {
						$scope.show--;
					}
				};
				$scope.navigate = function(index) {
					$scope.show = index;
				};
			},
			link: function($scope, el, attrs, controller) {}
		};
	});

angular.module('contenteditable', [
		'firebase',
		'ashley.firebase.key'
	])
	.directive('contenteditable', function($firebase, key) {
		return {
			require: '?ngModel',
			restrict: 'A',
			link: function($scope, el, attrs, ngModel) {
				if (!ngModel) {
					return;
				}

				ngModel.$render = function() {
					return el.html(ngModel.$viewValue);
				};

				$scope.update = function(project) {
					readViewText();
					$scope.projects.$save(project);
				};

				function readViewText() {
					var html = el.html();
					if (attrs.stripBr && html == '<br>') {
						html = '';
					}
					ngModel.$setViewValue(html);
				}
			}
		};
	});

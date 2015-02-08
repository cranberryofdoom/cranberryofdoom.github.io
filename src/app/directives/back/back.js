angular.module('back', [])
	.directive('back', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/back/back.tpl.html',
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
	});

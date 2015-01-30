angular.module('scrollTop', [])
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

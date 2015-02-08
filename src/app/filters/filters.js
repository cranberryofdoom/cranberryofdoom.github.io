angular.module('ashley.filters', [])
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

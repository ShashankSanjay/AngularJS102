var app = angular.module('myApp', []);

app.controller('MyCtrl', function($scope) {
	
	$scope.courses = [{course: 'angular102'}, {course: 'java'}];

	$scope.addCourse = function() {
		//add a class to the course list
		$scope.courses.push({course : $scope.course});
		$scope.course = '';
	}
});
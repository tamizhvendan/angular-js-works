function TodoCtrl ($scope) {
	$scope.todos = [
		{ name : "Learn Angular.js", done : false}, 
		{ name : "Learn F#", done : false}
	];

	$scope.getTotal = function() {
		return $scope.todos.length;
	};

	$scope.addTask = function() {
		$scope.todos.push({name : $scope.newTaskName, done : false});
		$scope.newTaskName = "";
	}

	$scope.removeCompletedTasks = function() {
		$scope.todos = _.filter($scope.todos, function (todo) {
			return !todo.done;
		});
	}
}
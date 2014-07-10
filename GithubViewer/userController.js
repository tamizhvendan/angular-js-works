(function() {
  
  var userController = function($scope, github, $routeParams) {
    
    var onRepoComplete = function(repos) { 
      $scope.repos = repos;
    }
    
    var onUserComplete = function(user) {
      $scope.user = user;
      $scope.user.gravatar_url = 
        "http://www.gravatar.com/avatar/" + user.gravatar_id
      github.getRepos($scope.user)
            .then(onRepoComplete, onError);
    }
    
    var onError = function() {
      $scope.error = "Unable to fetch the data!";      
    }
    
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  }
  
  app.controller("userController", userController);
  
  
})();

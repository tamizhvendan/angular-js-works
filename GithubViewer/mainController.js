(function() {
  
  var mainController = function($scope, $interval, $location) {
    
    var decrementCountdown = function() {
      $scope.countdown -=1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    }
    
    var countdownTimer = null;
    var startCountdown = function() {
      countdownTimer = $interval(decrementCountdown, 1000, $scope.countdown);
    };    
    
    $scope.search = function(username) {      
      if (countdownTimer) {
        $interval.cancel(countdownTimer);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    }
         
    
    $scope.username = "angular";    
    $scope.countdown = 5;
    startCountdown();
  }
  
  var app = angular.module("githubViewer");
  app.controller("mainController", mainController);  
  
})();

var myApp = angular.module("myApp", []);

myApp.controller("TextAreaLimitController",["$scope", function($scope) {
    var maxCharCount = 10;

    $scope.tweet = "";

    $scope.isValidTweet = function() {
      return $scope.tweet.length <= maxCharCount;
    };

    $scope.submit = function() {
      console.log($scope.tweet);
    }

    $scope.remainingCharacters = function() {
      var charsCount = maxCharCount - $scope.tweet.length;
      if (charsCount < 0) {
        return "Tweet should not exceed " + maxCharCount + " characters";
      };
      return charsCount;
    };

}]);
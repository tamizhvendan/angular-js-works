var myApp = angular.module("myApp", []);

myApp.controller("TextAreaLimitController",["$scope", function($scope) {
    var maxCharCount = 180;

    $scope.tweet = "";

    $scope.isValidTweet = function(tweet) {
      return tweet ? tweet.length <= maxCharCount : true;
    };

    $scope.submit = function(tweet) {
      console.log(tweet);
    }

    $scope.remainingCharacters = function(tweet) {
      var charsCount = maxCharCount - tweet.length;
      if (charsCount < 0) {
        return "Tweet should not exceed " + maxCharCount + " characters";
      };
      return charsCount;
    };

}]);
var app = angular.module('app', []);

app.controller('AppController', function($scope) {
  $scope.phrases = angular.fromJson(localStorage.getItem("phrases")) || [];
  $scope.tags = angular.fromJson(localStorage.getItem("tags")) || [];

  var _addPhrase = function(textVal, tags) {
    $scope.phrases.push({
      "phrase": textVal,
      "tags": tags
    });
    localStorage.setItem("phrases", angular.toJson($scope.phrases));
  }

  $scope.addPhrase = function() {
    _addPhrase($("#newPhraseText").val(), $("#newPhraseTags").val().split(", "))
  };
});
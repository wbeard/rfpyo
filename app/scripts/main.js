var app = angular.module('app', []);

app.controller('AppController', function($scope) {
  $scope.phrases = JSON.parse(localStorage.getItem("phrases")) || [];
  $scope.tags = JSON.parse(localStorage.getItem("tags")) || [];

  var _addPhrase = function(textVal, tags) {
    $scope.phrases.push({
      "phrase": textVal,
      "tags": tags
    });
    localStorage.setItem("phrases", JSON.stringify($scope.phrases));
  }

  $scope.addPhrase = function() {
    _addPhrase($("#newPhraseText").val(), $("#newPhraseTags").val().split(", "))
  };
});
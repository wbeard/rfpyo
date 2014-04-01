Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

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
  };

  var _removePhrase = function(index) {
    $scope.phrases.remove(index);
    localStorage.setItem("phrases", angular.toJson($scope.phrases));
  }

  $scope.addPhrase = function() {
    _addPhrase($("#newPhraseText").val(), $("#newPhraseTags").val().split(", "));
    $("#newPhraseText").val('');
    $("#newPhraseTags").val('');
  };

  $scope.removePhrase = function(index) {
    _removePhrase(index);
  };

});
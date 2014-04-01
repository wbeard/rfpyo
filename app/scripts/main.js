Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

var app = angular.module('app', []),
    provider = {
        obj: window.localStorage,
        get: "getItem",
        set: "setItem"
    },
    ResourceProvider = function(verb, resource, val) {
      if(val) {
        return provider.obj[provider[verb]](resource, val);
      } else {
        return provider.obj[provider[verb]](resource);
      }
    };

app.controller('AppController', function($scope) {
  $scope.phrases = angular.fromJson(ResourceProvider("get", "phrases")) || [];
  $scope.tags = angular.fromJson(ResourceProvider("get", "tags")) || [];

  var _addPhrase = function(textVal, tags) {
    $scope.phrases.push({
      "phrase": textVal,
      "tags": tags
    });
    ResourceProvider("set", "phrases", angular.toJson($scope.phrases));
  };

  var _removePhrase = function(index) {
    $scope.phrases.remove(index);
    ResourceProvider("set", "phrases", angular.toJson($scope.phrases));
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
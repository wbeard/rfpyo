var app = angular.module('app', []);

app.controller('AppController', function($scope) {
  $scope.phrases = [
    {
      "phrase": "Our one day settlement is awesome." ,
      "tags": [
        "dallas",
        "settlement"
      ]
    }
  ];
  $scope.tags = [
    'dallas',
    'settlement'
  ];
  $scope.addPhrase = function(phrase) {
    var obj = {
      "phrase": phrase
    };

    $scope.phrases.push(obj);
  };
});
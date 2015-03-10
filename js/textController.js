var textApp = angular.module('textApp', ['myService', 'myService1']);
textApp.controller('textController', ['$scope', 'myFactory', 'myFactory1', function($scope, myFactory, myFactory1) {
	var emptyArray = [];

  $scope.list = [{
    name: 'Politics',
    value: 'p'
  }, {
    name: 'World',
    value: 'w'
  }, {
    name: 'Business',
    value: 'b'
  }, {
    name: 'Headlines',
    value: 'h'
  }, {
    name: 'Science and Technology',
    value: 't'
  }];

  $scope.getValue = function(value) {
    myFactory.getResponse(value, callback);
  };

   myFactory1.getResponse1(function(data) {
   	console.log(data);
    $scope.show = data;
  });

  function callback(data) {
    console.log(data);
    emptyArray.push(data.responseData.results);
    $scope.list1 = emptyArray;
  }

}]);


$(document).ready(function(){
  $('.slider').slider({
    full_width: false,
    interval:5000,
    transition:800,
  });
});
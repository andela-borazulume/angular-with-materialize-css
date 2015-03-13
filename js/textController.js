var textApp = angular.module('textApp', ['myService', 'myService1']);
textApp.controller('textController', ['$scope', 'myFactory', 'myFactory1', function($scope, myFactory, myFactory1) {
  var emptyArray = [];
  var query = 0;
  $scope.value = 'p';
  myFactory.getResponse($scope.value, query, callback);
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
    $scope.value = value;
    emptyArray = [];
    query = 0;
    $scope.show1 = '';
    // $scope.display = 
    if (value === 'p') {
      $scope.display = 'Politics';

    } else if (value === 'w') {
      $scope.display = 'World News';

    } else if (value === 'b') {
      $scope.display = 'Business News';

    } else if (value === 'h') {
      $scope.display = 'Headlines';

    } else if (value === 't') {
      $scope.display = 'Science and Technology';

    }

    myFactory.getResponse(value, query, callback);

  };

  $scope.getValue1 = function() {
    if (query < 63) {
      query = query + 8;

    } else {
      $scope.show1 = 'No more stories';
    }
    // console.log(query);
    myFactory.getResponse($scope.value, query, callback);

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


$(document).ready(function() {
  $('.slider').slider({
    full_width: false,
    interval: 5000,
    transition: 800,
  });

  $('.menu').click(function() {
    $('.menu').removeClass('active');
    $(this).addClass('active');
  });

  // $(window).load(function() {
    $('ul > li:first-child div div a').addClass('active');

  // });

});



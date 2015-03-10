var myService1 = angular.module('myService1', []);
myService1.factory('myFactory1', ['$http', function($http) {
  return {
    getResponse1: function(callback1) {
      return $http.get("http://api.chartbeat.com/live/recent/v3/?apikey=317a25eccba186e0f6b558f45214c0e7&host=gizmodo.com")
        .success(callback1)
        .error(function(error) {
          console.log(error);
        });

    }
  };
}]);

var myService = angular.module('myService', []);
myService.factory('myFactory', ['$http', function($http) {
  return {
    getResponse: function(search, callback) {
      console.log(search);
      return $http.jsonp("https://ajax.googleapis.com/ajax/services/search/news?v=1.0&topic=" + search + "&callback=JSON_CALLBACK&rsz=8")
        .success(callback)
        .error(function(error) {
          console.log(error);
        });
    }
  };
}]);
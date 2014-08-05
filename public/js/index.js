angular.module('app', []);

angular.module('app').controller('MainCtrl', function($scope, $http){

  $scope.searchTerm = "";
  $scope.results = [];

  $scope.$watch('searchTerm', function(_new, _old){
    if(_new == undefined || _new.length == 0) _new = "";

    getItemsForSearchTerm(_new)

  });


  function getItemsForSearchTerm(term){
    $http.get('/search/'+term)
      .then(function(res){
        $scope.results = res.data;
      });
  }


});
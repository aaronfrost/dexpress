angular.module('app', []);

angular.module('app').controller('MainCtrl', function($scope, $http){

  $scope.messages = [];

  getMessages();

  $scope.saveNewMessage = function(){

    var message = $scope.newMessage;
    var userId = parseInt($scope.userId, 10);

    $http.post('/message', {message: message, userId: userId}).then(function(res){
      console.log('here is the response from saving a new message', res);
      getMessages();
    });

    $scope.newMessage = "";
  };


  function getMessages(){
    $http.get('/messages').then(function(res){
      $scope.messages = res.data;
    });
  }

});
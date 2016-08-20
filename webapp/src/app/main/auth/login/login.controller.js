(function() {
  'use strict';

  angular
    .module('app.pages.auth.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope) {
    // Data
    var vm = this;



    vm.entrar = function() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
        console.log(result);
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      // $rootScope.state.go('app.dashboards_main');
      // $rootScope.user = {username: vm.email};
      // console.log($rootScope.user);
      // loginService.authenticate($.param({
      //   username: vm.username,
      //   password: vm.password
      // }), function(authenticationResult) {
      //   var authToken = authenticationResult.token;
      //   $rootScope.authToken = authToken;
      //   $rootScope.$storage.authToken = authToken;
      //
      //   //recebe o usuario autenticado
      //   loginService.get(function(user) {
      //     $rootScope.user = user;
      //       $rootScope.state.go('app.dashboards_main');
      //   });
      // });
    };

  }

})();

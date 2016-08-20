(function() {
  'use strict';

  angular
    .module('app.pages.auth.login-v2')
    .controller('LoginV2Controller', LoginV2Controller);

  /** @ngInject */
  function LoginV2Controller($rootScope) {
    var vm = this;


    vm.toggleSignInGoogle = function() {
      if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          $rootScope.user = result.user;
          $rootScope.token = token;
          $rootScope.user = result.user.providerData[0];
          $rootScope.$sessionStorage.user = result.user.providerData[0];

          $rootScope.$sessionStorage.token = token;
          $rootScope.state.go('app.dashboards_main');
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          } else {
            console.error(error);
          }
        });
      } else {
        firebase.auth().signOut();
        // vm.toggleSignInGoogle();
      }
    }

    vm.toggleSignInFacebook = function() {
      if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();

        provider.addScope('user_birthday');
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          $rootScope.user = result.user.providerData[0];
          $rootScope.$sessionStorage.user = result.user.providerData[0];
          $rootScope.token = token;

          $rootScope.$sessionStorage.token = token;
          $rootScope.state.go('app.dashboards_main');
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          } else {
            console.error(error);
          }
        });
      } else {
        firebase.auth().signOut();
        // vm.toggleSignInFacebook();
      }
    }

    vm.entrar = function() {
      if (!firebase.auth().currentUser) {
        firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(function(result) {
          $rootScope.user = result.providerData[0];
          $rootScope.$sessionStorage.user = result.providerData[0];
          $rootScope.state.go('app.dashboards_main');
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);

        });
      } else {
        firebase.auth().signOut();
        // vm.entrar();
      }
    };
  }

})();

(function() {
  'use strict';

  angular
    .module('app.pages.auth.register-v2')
    .controller('RegisterV2Controller', RegisterV2Controller);

  /** @ngInject */
  function RegisterV2Controller($rootScope, $firebaseAuth, registerService) {
    var vm = this;
    vm.register = register;
    vm.login = login;


    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

    function register(user) {
      return registerService.register(user)
        .then(function() {
          sendEmailVerification();
          $rootScope.state.go('app.dashboards_main');
        })
        .then(function() {
          return registerService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      return registerService.login(user)
        .then(function(result) {
          $rootScope.user = result.providerData[0];
          $rootScope.$sessionStorage.user = result.providerData[0];
          $rootScope.state.go('app.dashboards_main');
        })
        .catch(function(error) {
          vm.error = error;
        });
    }
  }
})();

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
      $rootScope.state.go('app.dashboards_main');
      $rootScope.user = {username: vm.email};
      console.log($rootScope.user);
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

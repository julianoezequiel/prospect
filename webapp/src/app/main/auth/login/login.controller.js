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
      }
      // Methods

    //////////
  }
})();

(function() {
  'use strict';

  angular
    .module('app.pages.auth.login')
    .controller('LoginV2Controller', LoginV2Controller);

  /** @ngInject */
  function LoginV2Controller($rootScope) {
    // Data
    var vm = this;

    vm.entrar = function() {
        $rootScope.state.go('app.dashboards_main');
      }
      // Methods

    //////////
  }
})();

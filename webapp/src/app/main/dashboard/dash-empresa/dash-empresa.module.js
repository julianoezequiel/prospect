(function() {
  'use strict';

  angular
    .module('app.dashboards.empresa', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, $translatePartialLoaderProvider) {
    // State
    $stateProvider.state('app.dashboards_empresa', {
      url: '/dashboards_empresa',
      views: {
        'content@app': {
          templateUrl: 'app/main/dashboard/dash-empresa/dashboard-empresa.html',
          controller: 'DashboardEmpresaController as vm'
        }
      },
      // resolve  : {
      //     DashboardData: function (msApi)
      //     {
      //         return msApi.resolve('dashboard.main@get');
      //     }
      // },
      bodyClass: 'dashboard-main'
    });

    // Translation
    $translatePartialLoaderProvider.addPart('app/main/dashboard/dash-empresa');
    // Api
    // msApiProvider.register('dashboard.main', ['app/data/dashboard/project/data.json']);
  }

})();

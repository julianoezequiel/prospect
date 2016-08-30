(function ()
{
    'use strict';

    angular
        .module('app.dashboards.cliente', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider,$translatePartialLoaderProvider)
    {
        // State
        $stateProvider.state('app.dashboards_cliente', {
            url      : '/dashboard-cliente',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/dashboard/cliente/dashboard-cliente.html',
                    controller : 'DashboardClienteController as vm'
                }
            },
            resolve  : {
                DashboardData: function (msApi)
                {
                    return msApi.resolve('dashboard.cliente@get');
                }
            },
            bodyClass: 'dashboard-cliente'
        });

  // Translation
        $translatePartialLoaderProvider.addPart('app/main/dashboard/cliente');
        // Api
        msApiProvider.register('dashboard.cliente', ['app/data/dashboard/project/dataCliente.json']);
    }

})();

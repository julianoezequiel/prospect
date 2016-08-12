(function ()
{
    'use strict';

    angular
        .module('app.dashboards.main', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider,$translatePartialLoaderProvider)
    {
        // State
        $stateProvider.state('app.dashboards_main', {
            url      : '/dashboard-main',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/dashboard/main/dashboard-main.html',
                    controller : 'DashboardMainController as vm'
                }
            },
            resolve  : {
                DashboardData: function (msApi)
                {
                    return msApi.resolve('dashboard.main@get');
                }
            },
            bodyClass: 'dashboard-main'
        });

  // Translation
        $translatePartialLoaderProvider.addPart('app/main/dashboard/main');
        // Api
        msApiProvider.register('dashboard.main', ['app/data/dashboard/project/data.json']);
    }

})();
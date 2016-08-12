(function ()
{
    'use strict';

    angular
        .module('app.dashboards', [
            'app.dashboards.main'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        
        msNavigationServiceProvider.saveItem('dashboards', {
            title : 'Dashboards',
            icon  : 'icon-tile-four',
            state: 'app.dashboards_main',
            translate: 'SIDE_BAR.NAV_DASHBOARDS',
            weight: 1
        });

    };
   


})();
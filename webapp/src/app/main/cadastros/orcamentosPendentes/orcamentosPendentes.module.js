(function ()
{
    'use strict';

    angular
        .module('app.orcamentosPendentes', [])
        .config(config)

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.orcamentosPendentes', {
                url    : '/cadastro/orcamentosPendentes',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/orcamentosPendentes/orcamentosPendentes.html',
                        controller : 'OrcamentosPendentesController as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/cadastros/orcamentosPendentes');

        // Api
        msApiProvider.register('categoria', ['app/data/sample/sample.json']);

        // msNavigationServiceProvider.saveItem('cadastro', {
        //     title    : 'Cadastros',
        //     icon     : 'icon-tile-four',
        //     /*stateParams: {
        //         'param1': 'page'
        //      },*/
        //     translate: 'SIDE_BAR.NAV_CADASTROS',
        //     weight   : 1
        // });
        //
        // msNavigationServiceProvider.saveItem('cadastro.empresa', {
        //     title    : 'Empresa',
        //     icon     : 'icon-factory',
        //     state    : 'app.empresa',
        //     /*stateParams: {
        //         'param1': 'page'
        //      },*/
        //     translate: 'SIDE_BAR.NAV_EMPRESA',
        //     weight   : 1
        // });
    }
})();

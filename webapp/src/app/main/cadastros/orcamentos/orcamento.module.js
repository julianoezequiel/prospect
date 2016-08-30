(function ()
{
    'use strict';

    angular
        .module('app.orcamentos', [])
        .config(config)

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.orcamento', {
                url    : '/cadastro/orcamento',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/orcamentos/orcamento.html',
                        controller : 'OrcamentoController as vm'
                    }
                }
            })
            .state('app.orcamento.add', {
                url    : '/cadastro/orcamento',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/orcamentos/orcamento-gerenciamento.html',
                        controller : 'OrcamentoControllerAdd as vm'
                    }
                }
            })
            .state('app.orcamento.edt', {
                url    : '/cadastro/orcamento/:id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/orcamentos/orcamento-gerenciamento.html',
                        controller : 'OrcamentoControllerEdt as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/cadastros/orcamentos');

        // Api
        msApiProvider.register('orcamento', ['app/data/sample/sample.json']);

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

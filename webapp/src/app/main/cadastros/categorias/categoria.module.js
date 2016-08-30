(function ()
{
    'use strict';

    angular
        .module('app.categorias', [])
        .config(config)

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.categoria', {
                url    : '/cadastro/categoria',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/categorias/categoria.html',
                        controller : 'CategoriaController as vm'
                    }
                }
            })
            .state('app.categoria.add', {
                url    : '/cadastro/categoria',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/categorias/categoria-gerenciamento.html',
                        controller : 'CategoriaControllerAdd as vm'
                    }
                }
            })
            .state('app.categoria.edt', {
                url    : '/cadastro/categoria/:id',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/cadastros/categorias/categoria-gerenciamento.html',
                        controller : 'CategoriaControllerEdt as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/cadastros/categorias');

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

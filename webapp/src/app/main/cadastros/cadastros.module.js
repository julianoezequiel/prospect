(function ()
{
    'use strict';

    angular
        .module('app.cadastros', ['app.empresas','app.categorias','app.orcamentos','app.categorias.service','app.orcamentosPendentes','ui.utils.masks','app.ui.icons'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {

        msNavigationServiceProvider.saveItem('cadastro', {
            title    : 'Cadastros',
            icon     : 'icon-tile-four',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_CADASTROS',
            weight   : 1
        });

        msNavigationServiceProvider.saveItem('cadastro.empresa', {
            title    : 'Empresa',
            icon     : 'icon-factory',
            state    : 'app.empresa',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_EMPRESA',
            weight   : 1
        });

        msNavigationServiceProvider.saveItem('cadastro.orcamento', {
            title: 'Orçamentos',
            state: 'app.orcamento',
            translate: 'SIDE_BAR.NAV_ORCAMENTOS',
            icon:'icon-office'
        });

        msNavigationServiceProvider.saveItem('cadastro.categoria', {
            title: 'Categorias',
            state: 'app.categoria',
            translate: 'SIDE_BAR.NAV_CATEGORIAS',
            icon:'icon-office'
        });

    }
})();

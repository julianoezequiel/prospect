(function ()
{
    'use strict';

    angular
        .module('app.arquivos-fiscais', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.ACJEF', {
                url    : '/cadastro/arquivos-fiscais/ACJEF',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/arquivos-fiscais/ACJEF/ACJEF.html',
                        controller : 'ACJEFController as vm'
                    }
                }
            })
            .state('app.AFD', {
                url    : '/cadastro/arquivos-fiscais/AFD',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/arquivos-fiscais/AFD/AFD.html',
                        controller : 'AFDController as vm'
                    }
                }
            })
            .state('app.AFDT', {
                url    : '/cadastro/arquivos-fiscais/AFDT',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/arquivos-fiscais/AFD/AFDT.html',
                        controller : 'AFDTController as vm'
                    }
                }
            })
            .state('app.espelho-fiscal', {
                url    : '/cadastro/arquivos-fiscais/espelho-fiscal',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/arquivos-fiscais/AFD/espelho-fiscal.html',
                        controller : 'EspelhoFiscalController as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main');

        // Api
        msApiProvider.register('empresa', ['app/data/sample/sample.json']);

        msNavigationServiceProvider.saveItem('arquivos-fiscais', {
            title    : 'Arquivos Fiscais',
            icon     : 'icon-tile-four',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_ARQUIVOS-FISCAIS',
            weight   : 1
        });

        msNavigationServiceProvider.saveItem('arquivos-fiscais.ACJEF', {
            title    : 'ACJEF',
            icon     : 'icon-factory',
            state    : 'app.ACJEF',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SIDE_BAR.NAV_ACJEF',
            weight   : 1
        });


        msNavigationServiceProvider.saveItem('arquivos-fiscais.AFD', {
            title: 'AFD',
            state: 'app.AFD',
            translate: 'SIDE_BAR.NAV_AFD',
            icon:'icon-office'

        });

        msNavigationServiceProvider.saveItem('arquivos-fiscais.AFDT', {
            title: 'AFDT',
            state: 'app.AFDT',
            translate: 'SIDE_BAR.NAV_AFDT',
           icon: "icon-account"

        });

        msNavigationServiceProvider.saveItem('arquivos-fiscais.espelho-fiscal', {
            title: 'Espelho Fiscal',
            state: 'app.espelho-fiscal',
            translate: 'SIDE_BAR.NAV_ESPELHO-FISCAL',
            icon:"icon-account-multiple"

        });
    }
})();

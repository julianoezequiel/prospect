(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state)
    {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });

        //implemetanção da validação do login
        // var path = $location.path();
        // console.log($rootScope.$state.$current.name);
        // var authToken = $rootScope.$storage.authToken; // $cookieStore.get('authToken');
        // if (authToken != "" && authToken != undefined) {
        //     $rootScope.authToken = authToken;
        //     loginService.get(function (user) {
        //         $rootScope.$storage.grupo = user.operadorTransfer.grupo;
        //         $rootScope.user = user;
        //         $rootScope.funcionalidadesSistema = $rootScope.$storage.funcionalidadesSistema;
        //         $rootScope.autenticado = true;
        //         $("#main").css("background", "#e9ecf3");
        //         // $location.path(path);
        //     }, function (error) {
        //        $location.path("/login");
        //         $rootScope.autenticado = false;
        //         delete $rootScope.user;
        //         delete $rootScope.authToken;
        //         $rootScope.$storage.$reset();
        //         $("#main").css("background", "#fff");
        //
        //     });
        // } else {
        //     $location.path("/login");
        //     $rootScope.autenticado = false;
        //     delete $rootScope.user;
        //     delete $rootScope.authToken;
        //     $rootScope.$storage.$reset();
        //     $("#main").css("background", "#fff");
        //
        // }
    }
})();

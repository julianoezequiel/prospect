(function() {

  angular
    .module('app.auth')
    .factory('tokenInterceptor', tokenInterceptor);

  function tokenInterceptor($q, $rootScope, constantesConfig) {
    return {
      'request': function($config) {
        var isRestCall = $config.url.indexOf('rest') > -1;
        if (isRestCall && angular.isDefined($rootScope.authToken)) {
          var authToken = $rootScope.authToken;
          // if (TopPontoWebApp.useAuthTokenHeader) {
          $config.headers['X-Auth-Token'] = authToken;
          if ($config.url.indexOf(constantesConfig.baseUrl) < 0) {
            $config.url = constantesConfig.baseUrl + $config.url;
          }
          //} else {
          //    $config.url = constantesConfig.baseUrl + $config.url + "?token=" + authToken;
          //}
        }
        return $config || $q.when($config);
      }
    };
  }

})();

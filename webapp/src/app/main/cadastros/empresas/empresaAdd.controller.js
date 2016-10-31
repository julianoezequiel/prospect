(function() {
  'use strict';

  angular
    .module('app.empresas')
    .controller('EmpresaControllerAdd', EmpresaControllerAdd);

  /** @ngInject */
  function EmpresaControllerAdd($rootScope,$firebaseAuth,firebaseDataService) {
    var vm = this;
    vm.id_empresas = 'BREADCRUMB.EMPRESAS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_nomeFantazia = 'CAD_EMPRESA.NOME-FANTASIA';
    vm.id_razaoSocial = 'CAD_EMPRESA.RAZAO-SOCIAL';

    vm.gravarempresa = function(empresa) {
      // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('empresas').push().key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/empresas/' + newPostKey] = empresa;

      return firebase.database().ref().update(updates)
        .then(function() {
          alert('Cadastro de empresa efetuada com sucesso!');
          $rootScope.state.go('app.empresa');
        })
        .catch(function(error) {
          vm.error = error;
        });
    };
  }

})();

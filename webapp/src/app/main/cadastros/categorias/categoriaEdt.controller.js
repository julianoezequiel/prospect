(function() {
  'use strict';

  angular
    .module('app.categorias')
    .controller('CategoriaControllerEdt', CategoriaControllerEdt);

  CategoriaControllerEdt.$inject = ['$mdEditDialog', '$rootScope', '$timeout'];

  /** @ngInject */
  function CategoriaControllerEdt($mdEditDialog, $rootScope, $timeout) {
    var vm = this;
    vm.id_categorias = 'BREADCRUMB.CATEGORIAS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_descricao = 'CAD_CATEGORIA.DESCRICAO';
  }

})();

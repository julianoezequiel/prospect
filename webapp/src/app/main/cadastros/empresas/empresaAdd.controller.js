(function() {
  'use strict';

  angular
    .module('app.empresas')
    .controller('EmpresaControllerAdd', EmpresaControllerAdd);


  /** @ngInject */
  function EmpresaControllerAdd() {
    var vm = this;
    vm.id_empresas = 'BREADCRUMB.EMPRESAS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_nomeFantazia = 'CAD_EMPRESA.NOME-FANTASIA';
    vm.id_razaoSocial = 'CAD_EMPRESA.RAZAO-SOCIAL';
  }

})();

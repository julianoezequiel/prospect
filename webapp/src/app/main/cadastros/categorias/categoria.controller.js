(function() {
  'use strict';

  angular
    .module('app.categorias')
    .controller('CategoriaController', CategoriaController);

  CategoriaController.$inject = ['$mdEditDialog', '$rootScope', '$timeout'];

  /** @ngInject */
  function CategoriaController($mdEditDialog, $rootScope, $timeout) {
    var vm = this;

    vm.id_categorias = 'BREADCRUMB.CATEGORIAS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_editar = 'CRUD.EDITAR';
    vm.id_recarregar = 'CRUD.RECARREGAR';
    vm.id_excluir = 'CRUD.EXCLUIR';
    vm.id_adicionar= 'CRUD.ADICIONAR';
    vm.id_buscar = 'CRUD.BUSCAR';
    vm.id_buscaCategoria = 'CRUD.BUSCAR-CATEGORIAS';
    vm.id_selecionada = 'CRUD.SELECIONADA';
    vm.id_descricao = 'CAD_CATEGORIA.DESCRICAO';
    vm.id_optionNenhum = 'CRUD.OPTION-NENHUM';
    // Data
    vm.helloText = "Categorias";
    vm.categorias = [{
      idCategoria: '01',
      descricao: 'Eletrônicos'
    }, {
      idCategoria: '02',
      descricao: 'Serviços'
    }];

    vm.toggleSearch = false;
    vm.selected = [];
    vm.limitOptions = [5, 10, 15];

    vm.options = {
      rowSelection: true,
      multiSelect: true,
      autoSelect: true,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: true,
      limitSelect: true,
      pageSelect: true
    };

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    //////////
  }
})();

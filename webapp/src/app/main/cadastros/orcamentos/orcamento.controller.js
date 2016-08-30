(function() {
  'use strict';

  angular
    .module('app.orcamentos')
    .controller('OrcamentoController', OrcamentoController);

  OrcamentoController.$inject = ['$mdEditDialog', '$rootScope', '$timeout'];

  /** @ngInject */
  function OrcamentoController($mdEditDialog, $rootScope, $timeout) {
    var vm = this;

    vm.id_orcamentos = 'BREADCRUMB.ORCAMENTOS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_editar = 'CRUD.EDITAR';
    vm.id_recarregar = 'CRUD.RECARREGAR';
    vm.id_excluir = 'CRUD.EXCLUIR';
    vm.id_adicionar= 'CRUD.ADICIONAR';
    vm.id_buscar = 'CRUD.BUSCAR';
    vm.id_buscaOrcamento = 'CRUD.BUSCAR-ORCAMENTOS';
    vm.id_selecionada = 'CRUD.SELECIONADA';
    vm.id_descricao = 'CAD_ORCAMENTO.DESCRICAO';
    vm.id_precoMin = 'CAD_ORCAMENTO.PRECO-MINIMO';
    vm.id_precoMax = 'CAD_ORCAMENTO.PRECO-MAXIMO';
    vm.id_prazo = 'CAD_ORCAMENTO.PRAZO';
    vm.id_categoria = 'CAD_ORCAMENTO.CATEGORIA';
    // Data
    vm.helloText = "Orçamento";
    vm.categoria = {
      idCategoria: '01',
      descricao: 'Eletrônicos'
    };


    vm.orcamentos = [{
      idOrcamento: '01',
      categoria: vm.categoria,
      descricao: 'TV FULL HD 1',
      quantidade: 1,
      precoMin: '1200',
      precoMax: '2500',
      prazo:'12/12/2016'
    }, {
      idOrcamento: '02',
      categoria: vm.categoria,
      descricao: 'TV FULL HD 2',
      quantidade: 1,
      precoMin: '1200',
      precoMax: '2500',
      prazo:'12/12/2016'
    }, {
      idOrcamento: '03',
      categoria: vm.categoria,
      descricao: 'TV FULL HD 3',
      quantidade: 1,
      precoMin: '1200',
      precoMax: '2500',
      prazo:'12/12/2016'
    }, {
      idOrcamento: '04',
      categoria: vm.categoria,
      descricao: 'TV FULL HD 4',
      quantidade: 1,
      precoMin: '1200',
      precoMax: '2500',
      prazo:'12/12/2016'
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

    vm.loadStuff = function() {
      vm.promise = $timeout(function() {
        // loading
      }, 2000);
    }

    vm.logItem = function(item) {
      console.log(item);
    };

    vm.logOrder = function(order) {
      console.log('order: ', order);
    };

    vm.logPagination = function(page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
      }
      // Methods
    //////////
  }
})();

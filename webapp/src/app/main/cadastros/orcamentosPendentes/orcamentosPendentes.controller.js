(function() {
  'use strict';

  angular
    .module('app.orcamentosPendentes')
    .controller('OrcamentosPendentesController', OrcamentosPendentesController);

  OrcamentosPendentesController.$inject = ['$mdDialog', '$rootScope', '$timeout'];

  /** @ngInject */
  function OrcamentosPendentesController($mdDialog, $rootScope, $timeout) {
    var vm = this;

    vm.id_orcamentosPendentes = 'BREADCRUMB.ORCAMENTOSPENDENTES';
    vm.id_consulta = 'BREADCRUMB.CONSULTAS';
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

    vm.Produto = 'TV FULL HD';

    vm.orcamentosPendentes = [
                              {Empresa: 'MAGAZINE LUIZA',
                               Valor:'$123.00',
                               Prazo:'12/12/2016'},
                               {Empresa: 'CASAS BAHIA',
                                Valor:'$1.234,56',
                                Prazo:'23/02/2016'}
                             ];

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

    vm.showConfirm = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
            .title('Deseja confirmar o orçamento?')
            .targetEvent(ev)
            .ok('Sim')
            .cancel('Não');
        $mdDialog.show(confirm).then(function() {
          $rootScope.state.go('app.dashboards_cliente');
      }, function() {

      });
    };
    //////////
  }
})();

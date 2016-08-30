(function() {
  'use strict';

  angular
    .module('app.orcamentos')
    .controller('OrcamentoControllerEdt', OrcamentoControllerEdt);

  OrcamentoControllerEdt.$inject = ['$mdDialog', '$rootScope', '$timeout','categoriaService'];

  /** @ngInject */
  function OrcamentoControllerEdt($mdDialog, $rootScope, $timeout,categoriaService) {
    var vm = this;
    vm.id_orcamentos = 'BREADCRUMB.ORCAMENTOS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_descricao = 'CAD_ORCAMENTO.DESCRICAO';

    vm.categorias = categoriaService.recuperaCategorias();

    vm.showAlert = function(ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('')
            .content('Registro atualizado com sucesso!')
            .ariaLabel('Confirmação')
            .ok('OK')
            .targetEvent(ev)
        ).then(function() {
          $rootScope.state.go('app.orcamento');
        });
      };
  }



})();

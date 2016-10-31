(function() {
  'use strict';

  angular
    .module('app.empresas')
    .controller('EmpresaController', EmpresaController);

  EmpresaController.$inject = ['$mdEditDialog', '$rootScope', '$timeout','$firebaseAuth','firebaseDataService'];

  /** @ngInject */
  function EmpresaController($mdEditDialog, $rootScope, $timeout,$firebaseAuth,firebaseDataService) {
    var vm = this;

    vm.id_empresas = 'BREADCRUMB.EMPRESAS';
    vm.id_cadastros = 'BREADCRUMB.CADASTROS';
    vm.id_voltar = 'CRUD.VOLTAR';
    vm.id_campoObrigatorio = 'CRUD.CAMPO-OBRIGATORIO';
    vm.id_editar = 'CRUD.EDITAR';
    vm.id_recarregar = 'CRUD.RECARREGAR';
    vm.id_excluir = 'CRUD.EXCLUIR';
    vm.id_adicionar= 'CRUD.ADICIONAR';
    vm.id_buscar = 'CRUD.BUSCAR';
    vm.id_buscaEmpresas = 'CRUD.BUSCAR-EMPRESAS';
    vm.id_selecionada = 'CRUD.SELECIONADA';
    vm.id_razaoSocial = 'CAD_EMPRESA.RAZAO-SOCIAL';
    // Data
    vm.helloText = "Empresa";

    var empresasRef = firebase.database().ref('empresas');
    empresasRef.once('value', function(snapshot) {
            vm.empresas = [];
            snapshot.forEach(function(childSnapshot) {
            // childData will be the actual contents of the child
              var childData = childSnapshot.val();
              vm.empresas.push(childData);
            });
          });


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

    
    vm.editComment = function(event, dessert) {
      event.stopPropagation(); // in case autoselect is enabled

      var editDialog = {
        modelValue: dessert.comment,
        placeholder: 'Add a comment',
        save: function(input) {
          if (input.$modelValue === 'Donald Trump') {
            input.$invalid = true;
            return $q.reject();
          }
          if (input.$modelValue === 'Bernie Sanders') {
            return dessert.comment = 'FEEL THE BERN!'
          }
          dessert.comment = input.$modelValue;
        },
        targetEvent: event,
        title: 'Add a comment',
        validators: {
          'md-maxlength': 30
        }
      };

      var promise;

      if (vm.options.largeEditDialog) {
        promise = $mdEditDialog.large(editDialog);
      } else {
        promise = $mdEditDialog.small(editDialog);
      }

      promise.then(function(ctrl) {
        var input = ctrl.getInput();

        input.$viewChangeListeners.push(function() {
          input.$setValidity('test', input.$modelValue !== 'test');
        });
      });
    };

    vm.toggleLimitOptions = function() {
      vm.limitOptions = vm.limitOptions ? undefined : [5, 10, 15];
    };

    vm.getTypes = function() {
      return ['Candy', 'Ice cream', 'Other', 'Pastry'];
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

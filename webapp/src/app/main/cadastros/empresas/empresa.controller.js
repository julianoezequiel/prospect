(function() {
  'use strict';

  angular
    .module('app.empresas')
    .controller('EmpresaController', EmpresaController);

  EmpresaController.$inject = ['$mdEditDialog', '$rootScope', '$timeout'];

  /** @ngInject */
  function EmpresaController($mdEditDialog, $rootScope, $timeout) {
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
    vm.empresas = [{
      idEmpresa: '01',
      rasaoSocial: 'Empresa 00',
      documento: '000000000'
    }, {
      idEmpresa: '02',
      rasaoSocial: 'Empresa 01',
      documento: '000000011'
    }, {
      idEmpresa: '03',
      rasaoSocial: 'Empresa 02',
      documento: '000000022'
    }, {
      idEmpresa: '04',
      rasaoSocial: 'Empresa 03',
      documento: '000000033'
    }, {
      idEmpresa: '05',
      rasaoSocial: 'Empresa 04',
      documento: '000000044'
    }, {
      idEmpresa: '06',
      rasaoSocial: 'Empresa 05',
      documento: '000000055'
    }, {
      idEmpresa: '07',
      rasaoSocial: 'Empresa 06',
      documento: '000000000'
    }, {
      idEmpresa: '08',
      rasaoSocial: 'Empresa 07',
      documento: '000000011'
    }, {
      idEmpresa: '09',
      rasaoSocial: 'Empresa 08',
      documento: '000000022'
    }, {
      idEmpresa: '10',
      rasaoSocial: 'Empresa 09',
      documento: '000000033'
    }, {
      idEmpresa: '11',
      rasaoSocial: 'Empresa 10',
      documento: '000000044'
    }, {
      idEmpresa: '12',
      rasaoSocial: 'Empresa 11',
      documento: '000000055'
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

    vm.desserts = {
      "count": 9,
      "data": [{
        "name": "Frozen yogurt",
        "type": "Ice cream",
        "calories": {
          "value": 159.0
        },
        "fat": {
          "value": 6.0
        },
        "carbs": {
          "value": 24.0
        },
        "protein": {
          "value": 4.0
        },
        "sodium": {
          "value": 87.0
        },
        "calcium": {
          "value": 14.0
        },
        "iron": {
          "value": 1.0
        }
      }, {
        "name": "Ice cream sandwich",
        "type": "Ice cream",
        "calories": {
          "value": 237.0
        },
        "fat": {
          "value": 9.0
        },
        "carbs": {
          "value": 37.0
        },
        "protein": {
          "value": 4.3
        },
        "sodium": {
          "value": 129.0
        },
        "calcium": {
          "value": 8.0
        },
        "iron": {
          "value": 1.0
        }
      }, {
        "name": "Eclair",
        "type": "Pastry",
        "calories": {
          "value": 262.0
        },
        "fat": {
          "value": 16.0
        },
        "carbs": {
          "value": 24.0
        },
        "protein": {
          "value": 6.0
        },
        "sodium": {
          "value": 337.0
        },
        "calcium": {
          "value": 6.0
        },
        "iron": {
          "value": 7.0
        }
      }, {
        "name": "Cupcake",
        "type": "Pastry",
        "calories": {
          "value": 305.0
        },
        "fat": {
          "value": 3.7
        },
        "carbs": {
          "value": 67.0
        },
        "protein": {
          "value": 4.3
        },
        "sodium": {
          "value": 413.0
        },
        "calcium": {
          "value": 3.0
        },
        "iron": {
          "value": 8.0
        }
      }, {
        "name": "Jelly bean",
        "type": "Candy",
        "calories": {
          "value": 375.0
        },
        "fat": {
          "value": 0.0
        },
        "carbs": {
          "value": 94.0
        },
        "protein": {
          "value": 0.0
        },
        "sodium": {
          "value": 50.0
        },
        "calcium": {
          "value": 0.0
        },
        "iron": {
          "value": 0.0
        }
      }, {
        "name": "Lollipop",
        "type": "Candy",
        "calories": {
          "value": 392.0
        },
        "fat": {
          "value": 0.2
        },
        "carbs": {
          "value": 98.0
        },
        "protein": {
          "value": 0.0
        },
        "sodium": {
          "value": 38.0
        },
        "calcium": {
          "value": 0.0
        },
        "iron": {
          "value": 2.0
        }
      }, {
        "name": "Honeycomb",
        "type": "Other",
        "calories": {
          "value": 408.0
        },
        "fat": {
          "value": 3.2
        },
        "carbs": {
          "value": 87.0
        },
        "protein": {
          "value": 6.5
        },
        "sodium": {
          "value": 562.0
        },
        "calcium": {
          "value": 0.0
        },
        "iron": {
          "value": 45.0
        }
      }, {
        "name": "Donut",
        "type": "Pastry",
        "calories": {
          "value": 452.0
        },
        "fat": {
          "value": 25.0
        },
        "carbs": {
          "value": 51.0
        },
        "protein": {
          "value": 4.9
        },
        "sodium": {
          "value": 326.0
        },
        "calcium": {
          "value": 2.0
        },
        "iron": {
          "value": 22.0
        }
      }, {
        "name": "KitKat",
        "type": "Candy",
        "calories": {
          "value": 518.0
        },
        "fat": {
          "value": 26.0
        },
        "carbs": {
          "value": 65.0
        },
        "protein": {
          "value": 7.0
        },
        "sodium": {
          "value": 54.0
        },
        "calcium": {
          "value": 12.0
        },
        "iron": {
          "value": 6.0
        }
      }]
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

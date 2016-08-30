(function ()
{
    'use strict';

    angular
        .module('app.categorias.service', [])
        .service('categoriaService', function() {
                  this.recuperaCategorias = function () {
                      return  [{
                        idCategoria: '01',
                        descricao: 'Eletrônicos'
                      }, {
                        idCategoria: '02',
                        descricao: 'Serviços'
                      }];
                      }
                  });
})();

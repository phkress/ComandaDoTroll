export default class PedidoService {
    constructor(resource){
      this._resource = resource('v1/pedido{/id}');
      this._resourceContadorMesa = resource('v1/pedido/contador{/mesa}');
      this._resourceContadorMesaStatus = resource('v1/pedido/contador{/mesa}{/status}');
    }
    lista(){
      return this._resource
      .query()
      .then(res => res.json(), err=>{
        console.log(err);
        throw new Error('Não foi possivel obter a lista de Pedido')
      });
    }
    cadastra(pedido) {
      console.log(pedido)
      if(pedido._id) {
        console.log('update')
          return this._resource
              .update({ id: pedido._id}, pedido);
      } else {
          return this._resource
              .save(pedido);
      }  
    }    
    busca(id) {
      return this._resource
          .get({ id })
          .then(res => res.json());
    }
    apaga(id){
      return this._resource
          .delete({id})
          .then(null,err =>{
            console.log(err);
            throw new Error("Não foi possível excluir o Pedido")
          })
    }      
    contadorMesa(mesa) {
      return this._resourceContadorMesa
          .get( {mesa} )
          .then(res => res.json());
    }
    contadorMesaStatus(mesa, status) {
      return this._resourceContadorMesaStatus
          .get( {mesa,status} )
          .then(res => res.json());
    }
  }
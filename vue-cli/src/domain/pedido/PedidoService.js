export default class PedidoService {
    constructor(resource){
      this._resource = resource('v1/pedido{/id}');
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
        if(pedido._id) {
  
            return this._resource
                .update({ id: pedido._id}, pedido);
  
        } else {
            return this._resource
                .save(pedido);
        }
  
    }
  
  }

export default class LancheService {
  constructor(resource){
    this._resource = resource('v1/lanche{/id}');
    this._resourceCategoria = resource('v1/lanche/categoria{/id}');
  }
  lista(){
    return this._resource
    .query()
    .then(res => res.json(), err=>{
      console.log(err);
      throw new Error('Não foi possivel obter a lista de Lanche')
    });
  }
  listaCategoria(id){
    return this._resourceCategoria
    .get({ id })
    .then(res => res.json(), err=>{
      console.log(err);
      throw new Error('Não foi possivel obter a lista de Lanche')
    });
  }
  cadastra(lanche) {
      if(lanche._id) {

          return this._resource
              .update({ id: lanche._id}, lanche);

      } else {
          return this._resource
              .save(lanche);
      }

  }

}


export default class ConfigService {

  constructor(resource){
    this._resource = resource('config');
  }
  lista(){
    return this._resource
    .query()
    .then(res => res.json(), err=>{
      console.log(err);
      throw new Error('Não foi possivel obter a lista de Config')
    });
  }
  cadastra(config) {
      if(config._id) {

          return this._resource
              .update({ id: config._id}, config);

      } else {
          return this._resource
              .save(config);
      }

  }

}

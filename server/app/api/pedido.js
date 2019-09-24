const mongoose = require('mongoose');

module.exports = function(app){
  let api = {};
  let model = mongoose.model('Pedido');

  api.lista = (req,res)=>{
    model.find()
    .then(function(pedido){
      res.json(pedido)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  },
  api.adiciona = (req,res)=>{      
    model.create({"listaDePedido": req.body})
      .then(function(pedido){
        res.json(pedido);
      }, err=>{
        console.log(err);
        res.sendStatus(500);
      });
  }
  return api;
}

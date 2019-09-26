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
    console.log(req.body);
    model.create(req.body)
      .then(function(pedido){
        res.json(pedido);
      }, err=>{
        console.log(err);
        res.sendStatus(500);
      });
  }
  api.contadorMesa = (req, res)=>{
    console.log(req.params)
    model.find({
      mesa: req.params.mesa
    }).then(function(pedido){
      res.json(pedido.length)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  }
  api.contadorMesaStatus = (req, res)=>{
    console.log(req.params)
    model.find({
      mesa: req.params.mesa,
      status: req.params.status
    }).then(function(pedido){
      res.json(pedido.length)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  }
  return api;
}

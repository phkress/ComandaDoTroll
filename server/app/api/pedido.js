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
    model.create(req.body)
      .then(function(pedido){
        res.json(pedido);
      }, err=>{
        console.log(err);
        res.sendStatus(500);
      });
  }
  api.contadorMesa = (req, res)=>{
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
  api.atualiza = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(pedido) {
			res.json(pedido);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
  };
  api.mesa = (req, res)=>{
    model.find({
      mesa: req.params.mesa
    }).then(function(pedido){
      res.json(pedido)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  }  
  
	api.removePorMesa = function(req, res) {
    console.log(req.params)
		model.remove({'mesa' : req.params.mesa})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};
  return api;
}

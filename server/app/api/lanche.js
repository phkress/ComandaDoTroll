const mongoose = require('mongoose');

module.exports = function(app){
  let api = {};
  let model = mongoose.model('Lanche');

  api.lista = (req,res)=>{
    model.find()
    .then(function(lanche){
      res.json(lanche)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  },
  api.adiciona = (req,res)=>{
    model.create(req.body)
      .then(function(lanche){
        res.json(lanche);
      }, err=>{
        console.log(err);
        res.sendStatus(500);
      });
  }
  api.listaCategoria = (req, res)=>{
    model.find({
      categoria: req.params.id
    }).then(function(lanche){
      res.json(lanche)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  }

  return api;
};

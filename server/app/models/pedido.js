const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    listaDePedido:{
        type:Array
    },
  
});

mongoose.model('Pedido', schema);

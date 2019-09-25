const mongoose = require('mongoose');

const schema = mongoose.Schema({

    listaDePedidos:{
        type:Array
    },
    status:{
      type:String
    },mesa:{
      type:String
    }

});

mongoose.model('Pedido', schema);

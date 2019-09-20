const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    nome:{
        type:String
    },
    categoria:{
        type:String
    },combo:{        
        type:String
    },individual:{        
        type:String
    }
  
});

mongoose.model('Lanche', schema);

const mongoose = require('mongoose');

const schema = mongoose.Schema({

  mesas:{
    type: Number,
    required: true
  }
});

mongoose.model('Config', schema);

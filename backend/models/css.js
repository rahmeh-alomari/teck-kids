const mongoose = require('mongoose');

const CSS_Schema = new mongoose.Schema ({
   
    Titles:
    {
        type: String,   
    },
    Videos: {
        type: String,    
    },
    Desceriptions: {
        type: String,     
    },
    userSchema:[
        {
            type: mongoose.Schema.Types.ObjectId,
          ref:"User"
      }
    ]
});

module.exports = mongoose.model('css',CSS_Schema );
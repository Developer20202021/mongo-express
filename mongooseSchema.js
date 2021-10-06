const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
        name:{
            type:String,
           required:true
          
        },
        title:{
            type:String
        },

        date:{
                type:Date,
                default:Date.now
        }

})

module.exports = CustomerSchema;
const mongoose = require('mongoose')

const jelovnikSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:'Obavezno polje',
    },

    image:{
        type:String,
        required:'Obavezno polje',
    },

    description:{
        type:String,
    },

    calories:{
        type:String,
    },

    time:{
        type:String,
    },
    
    peoples:{
        type:String,
    },

    category:{
        type:String,
    },

    price:{
        type:String,
    },


})

// 
module.exports = mongoose.model('jelovnik', jelovnikSchema)
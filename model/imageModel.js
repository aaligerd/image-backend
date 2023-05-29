const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const imageSchema = new Schema({
    url:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
})

const ImageModel=mongoose.model('Image',imageSchema);

module.exports=ImageModel;
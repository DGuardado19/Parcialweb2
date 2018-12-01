const mongoose = require ('mongoose');
const { Schema }= mongoose;

const userSchema= new.Schema({
    id: {type: String, require:true},
    nombre: {type:String,  require:true},
    apellido: {type:String, require:true},
    celular: {type:String, require:true}
});

module.exports= mongoose.model('users', userSchema);
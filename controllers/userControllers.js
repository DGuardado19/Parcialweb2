const User = require('../models/User');
const userController = {};



userController.index = async function(req,res,next) {

    let user = await User.find();
    return res.status(200).json(user)}

userController.findUser = async function(req,res,next){
    let {id}= req.params;
    let user = await User.findById(id).catch(err=>{
        return next(res);});
        return res.status(200).json(user);}

userController.stores = async function(req,res,next){
    let user= new User({
        nombre : req.body.Nombre,
        apellido : req.body.Apellidos,
        celular : req.body.Celular
    });
  
    try{
        await user.save();
        return res.status(200).json({"mensaje": "usuario agregado bb"});}

        catch(err){
            return res.status(500).json({err:err, menssage: "NO se pudo agregar amigo"});
        }
}

userController.update = async function(req,res,next){
    let {id}= req.params;
    let user ={nombre: req.body.user, apellido: req.body.user, celular: req.body.user}
    try {
        await user.update({
            _id:id
        }, user);
        res.status(200).json({err:err, menssage: "Actualizado"})
    }
    catch(err){ return re.status(500).json({ err:err})};
}
userController.delete = async function(req,res,next){
    let {id}= req.params;
    await user.remove ({_id:id});
    res.status(200).json({
        "mensaje": "COntacto eliminado"  });
}

module.exports = userController;
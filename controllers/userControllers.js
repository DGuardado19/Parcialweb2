const user = require('../models/users');
const userController = {};



userController.index = async function(req,res,next) {

    let user = await user.find();
    return res.status(200).json(user)}

userController.findUser = async function(req,res,next){
    let {id}= req.params;
    let user = await user.findById(id).catch(err=>{
        return next(res);});
        return res.status(200).json(user);}

userController.stores = async function(req,res,next){
    let user= new user;
    user.nombre = req.body.user;
    user.apellido = req.body.user;
    try{
        await user.save();
        return res.status(200).json({"mensaje": "usuario agregado bb"});}

        catch(err){
            return res.status(500).json({err:err, menssage: "NO se pudo agregar amigo"});
        }
}

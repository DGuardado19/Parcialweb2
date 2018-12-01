const mongoose = require('mongoose');
const {mongodb}= require('./keys');

mongoose.connect(mongodb.URI,{
useCreateIndex:true,
userNewUrlParse:true})
.then(db=>console.log("conectado"))
.catch(err=> console.error(err))
var Mongoose=require('mongoose')
var studentschema=new Mongoose.Schema({
    name:String,
    roll:String,
    admno:String,
    college:String

})
var studentmodel=Mongoose.model('studs',studentschema)
module.exports={studentmodel}
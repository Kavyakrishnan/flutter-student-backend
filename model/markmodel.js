var Mongoose=require('mongoose')
var markschema=new Mongoose.Schema({
    student_id:{type:Mongoose.Schema.Types.ObjectId,ref:'studs'},
    examname:{type:String,required:true},
    sub1name:{type:String,required:true},
    sub1markobtained:{type:String,required:true},
    sub1totalmark:{type:String,required:true},
    sub2name:{type:String,required:true},
    sub2markobtained:{type:String,required:true},
    sub2totalmark:{type:String,required:true}
   
 
 

})
var markmodel=Mongoose.model('marks',markschema)
module.exports={markmodel}
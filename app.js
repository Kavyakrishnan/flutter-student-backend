var Express=require('express')

var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
Mongoose.connect("mongodb+srv://kavya:12345@cluster0.2q4qp.mongodb.net/studentdb")
var {markmodel}=require('./model/markmodel')
module.exports={markmodel}
var {studentmodel}=require('./model/studentmodel')
module.exports={studentmodel}
var{studrouter}=require('./controller/studentcontroller')

module.exports={studrouter}
var app=Express()

app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.use('/stud',studrouter)
                    
app.listen(3550,(req,res)=>{
    console.log("server is  running")
})
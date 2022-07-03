var Express=require('express')

var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var {studentmodel}=require('../model/studentmodel')

var {markmodel} =require('../model/markmodel')
module.exports={studentmodel}
var studrouter=Express.Router()

studrouter.use(Bodyparser.urlencoded({extended:true}))
studrouter.use(Bodyparser.json())
studrouter.post('/mread',(req,res)=>{
    var markresult=new markmodel(req.body)
    markresult.save((error)=>{
        if (error){
res.send(error)
        }
        else
        {
res.send({"status":"success"})
        }
    })
  
})
studrouter.get('/mview',(req,res)=>{
    try{
        studentmodel.aggregate(
            [
                {
                    $lookup:{
                        from:"marks",
                        localField:"_id",
                        foreignField:"student_id",
                        as:"markdetails"
                    }
                }
            ],(error,data)=>{
                return res.json(data)
            }
        )
    }
    catch(error){
        res.send(error)
    }
})
studrouter.post('/mdelete',async(req,res)=>{
    try{
        var result=await markmodel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    
    }
    catch(error){
        res.json(error)
    }
})
module.expor
studrouter.post('/sread',(req,res)=>{
    var studobject=new studentmodel(req.body)
   studobject.save((error)=>{
    if(error){
res.send({"status":error})
    }
    else{

    res.send({"status":"success"})
}
   })
          
        })
        studrouter.get('/sview',async(req,res)=>{
            try{
                var result=await studentmodel.find()
                res.json(result)
            
            }
            catch(error){
                res.json(error)
            }
        })
        
        studrouter.post('/ssearch',async(req,res)=>{
            try{
                var result=await studentmodel.find(req.body)
                res.json(result)
            
            }
            catch(error){
                res.json(error)
            }
        })
        studrouter.post('/sedit',async(req,res)=>{
            try{
                var result=await studentmodel.findByIdAndUpdate({"_id":req.body._id},req.body)
                res.json(result)
            
            }
            catch(error){
                res.json(error)
            }
        })
        studrouter.post('/sdelete',async(req,res)=>{
            try{
                var result=await studentmodel.findByIdAndDelete({"_id":req.body._id})
                res.json(result)
            
            }
            catch(error){
                res.json(error)
            }
        })

module.exports={studrouter}
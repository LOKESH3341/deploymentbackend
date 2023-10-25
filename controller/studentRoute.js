const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = new express.Router();

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })
});
// studentRoute.get();
// studentRoute.route().get()

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// studentRoute.route().get().put();

studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
      (err,data)=>{
             if(err)
                 return err;
             else
                 res.json(data);
         })
 });
 

 studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});


//id of raj -> 652d2422f0c6b44fb01e9e07

module.exports = studentRoute;

//http://localhost:4000/studentRoute/create-student
// and if it is a post request -> create()


//http://localhost:4000/studentRoute/ and if it is a get request -> find()

//http://localhost:4000/studentRoute/update-student/652d2422f0c6b44fb01e9e07
// and if it a GET request ->  findById()

//http://localhost:4000/studentRoute/update-student/652d2422f0c6b44fb01e9e07
//and if it is a put request -> fingByIdAndUpdate()

//http://localhost:4000/studentRoute/delete-student/652d2422f0c6b44fb01e9e07
//and if it is a delete request -> findByIdAndRemove()

// NOTE - By default every request will be a get request

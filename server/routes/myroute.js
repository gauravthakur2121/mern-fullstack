const express = require('express');
const apps = express.Router();
const myschimatype = require('../myschimatype/common');

apps.get("/",(req,res)=>{
    res.send("welcome to express js");
});

apps.get("/about",(req,res)=>{
    res.send("welcome about js");
});


apps.get("/alldata",async(req,res)=>{
   const  alld = await myschimatype.find();
   res.send(alld);
});


apps.post("/registoruser",async(req,res)=>{
    const {emailid,name,phoneno,course,dob,pass,gender,role} = req.body;
    console.log("Role received:", role); 
   
    const adduser = new myschimatype({
        emailid,name,phoneno,course,dob,pass,gender,role
    });
    await adduser.save();
    res.status(200).json(adduser);
   
});

apps.post("/login", async (req, res) => {
    const { emailid, pass} = req.body;
    if (emailid === "" || pass === "") {
        res.status(412).json({ message: "error email and pass", status: 420 });
    }
    else {
        const logindetails = await myschimatype.findOne({ emailid: emailid });
        if (logindetails) {
            if (logindetails.emailid === emailid && logindetails.pass === pass) {
                res.status(200).json({
                    message: "welcome",
                    status: 220,
                    user: {
                        name: logindetails.name,
                        emailid: logindetails.emailid,
                        role: logindetails.role
                    }
                });
            } else {
                res.status(300).json({ message: "email and password don't match", status: 421 });
            }
        } else {
            res.status(300).json({ message: "error", status: 620 });
        }
    }
});
  




apps.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
        const del = await myschimatype.findByIdAndDelete({"_id":id});
        console.log(del);
        res.status(256).json(del);
});

apps.get("/singleuser/:id", async(req,res)=>{
    const {id} = req.params;
    const users = await myschimatype.findOne({_id:id});
        res.status(288).json(users);
});



  
 apps.patch("/updateuser/:id", async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await myschimatype.findByIdAndUpdate(id,req.body,{new:true});
    res.status(201).json(recordupdate);
}); 





module.exports= apps;
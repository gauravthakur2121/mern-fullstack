const mongoose = require('mongoose');

const mynew = new mongoose.Schema({
emailid:{
    type:String,
    required: true,
},
name:{
    type:String,
    required: true,
},
gender:{
    type:String,
    required:true,
},
phoneno:{
    type:String,
    required:true,

},
dob:{
    type:String,
    required:true,
},
course:{
    type:String,
    required:true,
},
pass:{
    type:String,
    required:true,
},
role: {
     type: String, 
     enum: ['admin', 'user'],
      required: true
    },
    

});

const myschimatype = new mongoose.model("mern11a",mynew);
module.exports = myschimatype
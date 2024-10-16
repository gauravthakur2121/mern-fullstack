const mongoose = require('mongoose');

const mynew = new mongoose.Schema({
emailid:{
    type:String
},
name:{
    type:String
},
phoneno:{
    type:String
},
dob:{
    type:String
},
course:{
    type:String
},
pass:{
    type:String
}
    

});

const myschimatype = new mongoose.model("mern11a",mynew);
module.exports = myschimatype





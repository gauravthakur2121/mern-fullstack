const express = require("express");
const apps = express();
require('dotenv').config();
const myroute = require('./routes/myroute');
const cors = require('cors');
const myport = process.env.PORT || 8700 
require('./database/connection');




apps.use(express.json());
apps.use(myroute);
apps.use(cors);








apps.listen(myport,()=>{
    console.log(`server is running at port no: ${myport}`);
});


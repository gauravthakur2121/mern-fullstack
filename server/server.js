'Access-Control-Allow-Origin'
const express = require("express");
const apps = express();
require('dotenv').config();
const myroute = require('./routes/myroute');
const cors = require('cors');
const myport = process.env.PORT || 8700 
require('./database/connection');


apps.use(cors({
  origin: '*',  
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

apps.options('*', cors());  

apps.use(express.json());
apps.use(myroute);









apps.listen(myport,()=>{
    console.log(`server is running at port no: ${myport}`);
});


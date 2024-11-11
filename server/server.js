'Access-Control-Allow-Origin'
require('dotenv').config();
const express = require("express");
const apps = express();
const myroute = require('./routes/myroute');
const cors = require('cors');
const myport = process.env.PORT || 8700 
require('./database/connection');


apps.use(cors({
  origin: '*' ,  
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


apps.options('*', cors());  

apps.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

apps.use(express.json());
apps.use(myroute);









apps.listen(myport,()=>{
    console.log(`server is running at port no: ${myport}`);
});


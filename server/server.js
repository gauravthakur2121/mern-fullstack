'Access-Control-Allow-Origin'
const express = require("express");
const apps = express();
require('dotenv').config();
const myroute = require('./routes/myroute');
const cors = require('cors');
const myport = process.env.PORT || 8700 
require('./database/connection');


apps.use(cors({
  origin: 'http://localhost:3000' ,  
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

apps.options('http://localhost:3000', cors());  

apps.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

apps.use(express.json());
apps.use(myroute);









apps.listen(myport,()=>{
    console.log(`server is running at port no: ${myport}`);
});


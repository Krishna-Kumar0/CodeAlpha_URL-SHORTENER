import express from "express";
const app=express();// define express power inside app
app.use(express.json());// to accept json data from body


import connectMongoDb from "./connection.js";// database
connectMongoDb("mongodb://localhost:27017/urlshortener");

import router from "./routes/urlroutes.js";
app.use(router);

const port= 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})







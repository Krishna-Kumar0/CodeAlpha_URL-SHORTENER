import express from "express";
const app = express();// define express power inside app
app.use(express.json());// to accept json data from body

import dotenv from "dotenv";
dotenv.config();


import connectMongoDb from "./connection.js";// database
connectMongoDb(process.env.MONGO_URL);

import router from "./routes/urlroutes.js";
import authRouter from "./routes/authroutes.js";
app.use(router);
app.use(authRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})







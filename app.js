import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { course } from './db.js';
const app = express();

import 'dotenv/config';


dotenv.config();
app.use(cors());


const port = process.env.port;
const hostname =  process.env.hostnames;


 app.get("/", (req, res)=> {

    res.send(course)
 });


 app.get("/gauri", (req, res)=> {
    res.send("hello gauri")
 })

 app.get("/home", (req, res)=> {
    console.log("home")
 })
 
 app.listen(port, ()=> {
    console.log(`server is working http://${hostname}:${port}`)
 });





// hello
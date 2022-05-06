import express from "express";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import https from "https";
const app = express();

dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.SERVER_PORT;

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

https
  .createServer({
    key: readFileSync("certs/key.pem"),
    cert: readFileSync("certs/cert.pem"),
  },app)
  .listen(port, ()=>{
    console.log(`server is runing at port ${port}`)
  });
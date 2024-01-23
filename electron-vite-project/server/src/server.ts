import fs from "fs";
import dotenv from "dotenv"

//intialize express instance
import express from "express";
const app = express();

//initialize data pool
import pg from 'pg';
const { Pool } = pg; 
const pool = new Pool({ connectionString: DATABASE_URL });

// middleware
import cors from "cors";
app.use(
  express.static("dist"), // connects to a 'dist' folder
  express.json(), // parser
  cors({ origin: "*" }) // cors
);

const PORT: number = 3001 || process.env.PORT; // default to 3001
const DATABASE_URL = process.env.DATABASE_URL;



//Port listening
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

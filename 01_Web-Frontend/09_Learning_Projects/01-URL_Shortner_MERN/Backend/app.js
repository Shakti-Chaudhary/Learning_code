// ---- package imports
import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// ---- components import
import connectDB from "./src/config/mongo.config.js";

// ---- config run
dotenv.config("./.env");
const app = express();
// import { nanoid } from "nanoid";
// import { dotenv } from "dotenv";

// ---- middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- routes
app.get("/", (req, res) => {
  res.send("Hello World! NanoId : " + nanoid(7));
});

// ---- server
app.listen(3000, () => {
  // connectDB();
  console.log("Server is running on port ===>> http://localhost:3000");
});

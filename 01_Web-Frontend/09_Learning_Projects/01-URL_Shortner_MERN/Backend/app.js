import express from "express";
const app = express();
import { nanoid } from "nanoid";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! NanoId : " + nanoid(7));
});

app.listen(3000, () => {
  console.log("Server is running on port ===>> http://localhost:3000");
});

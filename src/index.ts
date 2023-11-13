import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();

app.listen(4000, () => {
  console.log("Holi");
});

app.use(morgan("dev"));

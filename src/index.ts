import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import apiRoute from "./routes/apiRoute";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", apiRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

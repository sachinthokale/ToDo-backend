import express from "express";
import { conntectDB } from "./connectDB.js";
import { taskRoute } from "./route.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
conntectDB();

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/", taskRoute);

app.listen(port, () => console.log(`App listening at http://localhost:3000`));

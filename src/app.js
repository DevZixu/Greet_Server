import express from "express";
import GreetRouter from "./routes/greet/greetroute.js";

const app = express();

app.use(express.json());

app.use(GreetRouter)

export default app
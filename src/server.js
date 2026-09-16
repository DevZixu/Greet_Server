import { configDotenv } from "dotenv";
import app from "./app.js";

configDotenv();

const Port = process.env.PORT

app.listen(Port, ()=>{
    console.log(Port)
    console.log("App is running")
});


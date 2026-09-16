import { Router } from "express";
import { morning, night, afternoon } from "../../controllers/greeting.js";

const GreetRouter = Router();

GreetRouter.get('/greeting/morning', morning);
GreetRouter.get('/greeting/afternoon', afternoon);
GreetRouter.get('/greeting/night', night);

export default GreetRouter;
import { Router } from "express";
import { registerBusController,getBusRouteController, getCitiesController } from "../controllers/BusController.js";

const busRouter = Router() ;

busRouter.post('/busregister',registerBusController) ;
busRouter.get('/:numbers/route',getBusRouteController) ;
busRouter.get('/cities',getCitiesController) ;

export default busRouter
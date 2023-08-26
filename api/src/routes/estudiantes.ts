
import { Router } from "express";
import EstudiantesController from "../controller/EstudiantesController";



const routes = Router();


routes.get("", EstudiantesController.getAll);



export default routes;

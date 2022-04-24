import { Router } from "express";
import * as testsController from '../controllers/testsController.js'


const testsRouter = Router();
testsRouter.get('/discipline/:id', testsController.findByDiscipline)
testsRouter.get('/teacher/:id', testsController.findByTeacher)

export default testsRouter;
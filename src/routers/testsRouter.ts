import { Router } from "express";
import * as testsController from '../controllers/testsController.js'


const testsRouter = Router();
testsRouter.get('/disciplines', testsController.findDisciplines)
testsRouter.get('/teachers', testsController.findTeachers)

export default testsRouter;
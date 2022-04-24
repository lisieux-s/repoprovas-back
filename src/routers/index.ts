import { Router } from "express";

import testsRouter from "./testsRouter.js";
import authRouter from "./authRouter.js";

const router = Router();
router.use(testsRouter);
router.use(authRouter);

export default router;
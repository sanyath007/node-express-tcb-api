import { Router } from "express";
import CancerController from "../controllers/cancer-controller";
import CancerService from "../services/cancer-service";
import { dbTcb } from '../config/database';

const cancerRouter = Router();
const ctrl: CancerController = new CancerController(new CancerService(dbTcb));

cancerRouter.get("/", ctrl.getCancers);
cancerRouter.get("/:id", ctrl.getCancer);

export default cancerRouter;

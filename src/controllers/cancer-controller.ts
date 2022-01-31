import { Request, Response } from 'express';
import { BaseService } from '../services/BaseService';
import BaseController from './BaseController';

class CancerController extends BaseController {
    constructor(model: BaseService) {
        super(model);
    }

    public getCancers = async (req: Request, res: Response): Promise<void> => {
        const { pagination, data } = await this.model.getAll(req.query);
        
        if (data) {
            res.status(200).json({ patients: data, pager: pagination });
        } else {
            res.sendStatus(404);
        }
    }

    public getCancer = async (req: Request, res: Response): Promise<void> => {
        const patient = await this.model.getById(req.params.id);
        
        if (patient) {
            res.status(200).json({ patient });
        } else {
            res.sendStatus(404);
        }
    }
}

export default CancerController;

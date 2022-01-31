import { Request, Response } from 'express';
import { BaseService } from '../services/BaseService';

class BaseController {
    protected model: BaseService

    constructor(model: BaseService) {
        this.model = model;
    }
}

export default BaseController;

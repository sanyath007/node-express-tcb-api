import { Request, Response } from 'express';
import passport from 'passport';
import { authRouter } from '../controllers/auth-controller';
import patientRouter from './patient-routes';
import cancerRouter from './cancer-routes';

const homeRouter = (req: Request, res: Response) => {
    res.send("Hello, Knex!!")
};

export const routes: any[] = [
    { path: "/auth", middlewares: [], handler: authRouter },
    {
        path: "/api/cancers",
        middlewares: [], //passport.authenticate("jwt", { session: false })
        handler: cancerRouter
    },
    {
        path: "/api/patients",
        middlewares: [], //passport.authenticate("jwt", { session: false })
        handler: patientRouter
    },
    { path: "/", middlewares: [], handler: homeRouter },
];

import { Router} from 'express';

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => {
    res.send('User signed up')
});
authRouter.post('/sign-in', (req, res) => {
    res.send('User signed up')
});
authRouter.post('/sign-up', (req, res) => {
    res.send('User signed up')
});

export default authRouter;
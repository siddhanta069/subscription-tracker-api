import  { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('User route');
});
userRouter.get('/:id', (req, res) => {
    res.send('User route');
});
userRouter.post('/', (req, res) => {
    res.send('User route');
});
userRouter.put('/:id', (req, res) => {
    res.send('User route');
});
userRouter.delete('/:id', (req, res) => {
    res.send('User route');
});

export default userRouter;
import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send('get all Subscription');
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send('get Subscription details');
});

subscriptionRouter.post('/', (req, res) => {
    res.send('create Subscription');
});

subscriptionRouter.put('/:id', (req, res) => {
    res.send('update Subscription');
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send('delete Subscription');
});

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send('get all user Subscription');
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send('cancel Subscription');
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send('get upcoming renewals');
});

export default subscriptionRouter; 
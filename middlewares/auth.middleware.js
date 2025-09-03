import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

const authorize = async (req, res, next) => {
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]; // return the token part after Bearer
        }

        if(!token) {
            res.status(401).json({
                message: 'Not authorized, no token'
            })
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userId)

        if(!user) {
            res.status(401).json({
                message: 'Not authorized, user not found'
            })
        }

        req.user = user; // attach user to request object
        next();

    } catch(error) {
        res.status(401).json({
            message: 'Not authorized',
            error: error.message
        })
    }
}

export default authorize;
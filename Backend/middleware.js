const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config.js');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
       
        req.userId = decoded.newId;
        console.log(req.userId);
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid token' });
    }
}

module.exports = { authMiddleware };

const jwt = require('jsonwebtoken')
const Role = require('../models/roles.modelo')
const User = require('../models/user.modelo')
const config = require('../config')

const autorizar = {}

autorizar.verifyToken = async(req, res, next) =>{
    let token = req.headers('x-access-token');
    if (!token) return res.status(403).json({
        message: 'Token no existe'
    })
    try {
        const decoded = jwt.verify(token,config.SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId)
        if (!user) return res.status(404).json({
            message:'Usuario no encontrado'
        });
        next()
    }catch(error){
        return res.status(401).json({
            message: 'No autorizado'
        })
    }

}



module.exports = autorizar;
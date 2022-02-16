let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

const  admin = (req, res, next) =>{
    const {user} = req.query
    admins.includes(user) ? next() : res.send('No tienes permiso para ingresar')
}
module.exports = admin;
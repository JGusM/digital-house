module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    services: (req, res) => {
        res.send(' Hola, estas en SERVICES')
    },
    design: (req, res) => {
        res.send('Hola, estas en DESIGN')
    },
    admin: (req, res) => {
        res.send('Hola Admin: ' + req.query.user)
    }
}
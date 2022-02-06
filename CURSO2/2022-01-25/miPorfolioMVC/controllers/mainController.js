const path = require('path');
const main = {
homeController: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/home.html')
    res.render('home')
        
    },
aboutController: function (req, res) {
    res.sendFile(path.resolve(__dirname, '../views/about.html'))
    
}

}

module.exports = main

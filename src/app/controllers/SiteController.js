const Shoes = require('../models/Shoes.js');

class SiteController {
    // GET BLOG
    home(req, res) {
        Shoes.find({})
            .lean()
            .then((data) => res.render('home', { data }))
            .catch((err) => res.status(500).json({ err: 'message' }));
        // res.render('home');
    }
    // [GET] blog-detail /detail
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

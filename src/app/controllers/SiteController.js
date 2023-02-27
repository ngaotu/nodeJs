class SiteController {
    // GET BLOG
    home(req, res) {
        res.render('home');
    }
    // [GET] blog-detail /detail
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

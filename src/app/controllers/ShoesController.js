class ShoesController {
    // GET BLOG
    index(req, res) {
        res.render('shoes');
    }
    // [GET] blog-detail /detail
    show(req, res) {
        res.send('shoes detail');
    }
}

module.exports = new ShoesController();

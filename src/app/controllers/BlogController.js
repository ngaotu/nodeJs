class BlogController {
    // GET BLOG
    index(req, res) {
        res.render('blog');
    }
    // [GET] blog-detail /detail
    show(req, res) {
        res.send('blog detail');
    }
}

module.exports = new BlogController();

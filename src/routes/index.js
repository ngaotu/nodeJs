const blogRouter = require('./blog');
const siteRouter = require('./site');
function router(app) {
    app.use('/blog', blogRouter);
    app.use('/', siteRouter);
}

module.exports = router;

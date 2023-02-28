const blogRouter = require('./blog');
const siteRouter = require('./site');
const shoesRouter = require('./shoes');
function router(app) {
    app.use('/blog', blogRouter);
    app.use('/shoes', shoesRouter);
    app.use('/', siteRouter);
}

module.exports = router;

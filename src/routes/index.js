const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const passport = require('passport');
const userRouter = require('./user');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses',coursesRouter);
    app.use('/users', userRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;
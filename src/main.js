const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const router = require('./routes/index');
const app = express();
const port = 3000;

// static files => den public
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname));
// http logger
app.use(morgan('combined'));

// middleware routes
app.use(express.urlencoded({ extended: true }));
// gui du lieu tu js len server de xu ly
app.use(express.json());

// template engigne
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);

// add router => controller
router(app);

       app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resoures/views'));

// Basic rotings
// them trang chu

app.post('/search', (req, res) => {
    // middleware
    console.log(req.body);
    res.send('');
});
// 127.0.0.1 => localhost
app.listen(port, () => {
    console.log('listening on port at http://localhost:' + port);
});

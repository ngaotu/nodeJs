const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;


// static files => den public
app.use(express.static(path.join(__dirname,'public')))
console.log(path.join(__dirname))
// http logger
app.use(morgan('combined'));


// template engigne
app.engine('hbs',engine({
    extname:'hbs'
}));
app.set('view engine','hbs');

app.set('views',path.join(__dirname,'resoures/views'))

// them trang chu
app.get('/home', (req,res)=>{
    res.render('home');
})

// them trang blog 
app.get('/blog',(req,res)=>{
    res.render('blog');
})
// 127.0.0.1 => localhost
app.listen(port,()=>{
    console.log('listening on port at http://localhost:',port);
})

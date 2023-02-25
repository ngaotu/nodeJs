const express = require('express');
const app = express();
const port = 3000;
app.get('/blog', (req,res)=>{
    res.send('Hello world!');
})
// 127.0.0.1 => localhost
app.listen(port,()=>{
    console.log('listening on port at http://localhost:',port);
})

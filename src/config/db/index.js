const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/blog_dev');
        // useNewUrlParser:true;
        // useUnifiedTopology:true;
        console.log('susscessfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };

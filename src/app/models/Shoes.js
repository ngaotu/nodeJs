const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shoes = new Schema({
    name: { type: String, default: 'Nike air force 1' },
    description: { type: String, default: 'Còn hàng', maxLength: 50 },
    image: { type: String, default: '' },
    slug: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Shoes', Shoes);

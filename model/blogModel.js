const mongoose = require('mongoose');

const blogShema = new mongoose.Schema ({
    naslov: {
        type: String,
        required: [true, 'mora da ima naslov'],
    },
    tekst: {
        type: String,
        required: [true, 'mora da ima tekst'],

    },
    ocenka: {
        type: Number,
        default: 1,
    },

    avtor: {
        type: String,
    },
    vreme: {
        type: Date,
        default: Date.now,
    },
});

const Blog = mongoose.model('Blog', blogShema);
module.exports = Blog;

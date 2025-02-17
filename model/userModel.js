const mongoose = require('mongoose');

const userShema = new mongoose.Schema ({

    name: {
        type: String,
        required: [true, 'vnesi korisnicko ime!'],
    },
        
    password: {
        type: String,
        required: [true, 'vnesi tocen password!'],

    },
    email: {
        type:String,
        required: [true, 'vnesi email adresa!'],
    },
    age: {
        type: Number,
        required: [true, 'vnesi vozrast!']
    },
    vreme: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userShema);
module.exports = User;

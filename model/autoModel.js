const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema ({

    proizvoditel: {
        type: String,
        required: [true, 'vnesi proizvoditel na avtomobilot!'],
    },
        
    model: {
        type: String,
        required: [true, 'vnesi model!'],

    },
    godina: {
        type: Number,
        required: [true, 'vnesi godina na proizvodstvo!'],
    },
    boja: {
        type: String,
        required: [true, 'vnesi boja na avtomobilot!']
    },
    vreme: {
        type: Date,
        default: Date.now,
    },
});

const Auto = mongoose.model('Auto', autoSchema);
module.exports = Auto;
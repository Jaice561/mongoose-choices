const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var optionSchema = new mongoose.Schema({
    weekday: {
        type: String,
    },
    
    date: {
        type: Date,
        required: true
    },

    optionsList: {
    type: String
    }, 

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isChoice: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Option', optionSchema);
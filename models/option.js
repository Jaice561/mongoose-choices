const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var optionSchema = new mongoose.Schema({
    weekday: {
        type: String,
        // enum: ['MON', 'TUE', 'WED', 'THU', 'FRI']
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
    }
});

module.exports = mongoose.model('Option', optionSchema);
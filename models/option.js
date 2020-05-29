const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionsSchema = new mongoose.Schema({
    weekdays: {
        type: String,
        enum: ['MON', 'TUS', 'WED', 'THUR', 'FRI']
    },
    time: {
        type: Number
    }
});

module.exports = mongoose.model('Option', optionsSchema);
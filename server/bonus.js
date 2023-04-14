const mongoose = require('mongoose');

const bonusesSchema = new mongoose.Schema({
    bonusname:{
        type: String,  
        required: true
    },
    bonusvalue:{
        type: Number,
        required: true
    },
});

const bonus = mongoose.model('bonuses', bonusesSchema);
module.exports = bonus;
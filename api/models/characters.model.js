const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    name,
    characterClass,
    level,
    background,
    playerName,
    race,
    alignment,
    experience,
*/
const characterSchema = new Schema({
    name: {
        type: String,
        unique: false, 
        required: true,
    },
    characterClass: {
        type: String,
        unique: false,
        required: true,
    },
    level: {
        type: Number,
        unique: false,
        required: true,
    },
    background: {
        type: String,
        unique: false,
        required: false,
    },
    playerName: {
        type: String,
        unique: false,
        required: true,
    },
    race: {
        type: String,
        unique: false,
        required: true,
    },
    alignment: {
        type: String,
        unique: false,
        required: true,
    },
    experience: {
        type: Number,
        unique: false,
        required: true,
    },
});

module.exports = characterSchema;

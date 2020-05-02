const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classesSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = classesSchema;
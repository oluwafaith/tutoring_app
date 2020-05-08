const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor",
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Lesson", lesSchema);
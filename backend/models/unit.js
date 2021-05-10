const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unitSchema = new Schema({
    planning:{type: String, required: true},
    _id: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    floor: { type: Number, required: true },
    rooms: { type: Number, required: true },
    total_area: { type: Number, required: true },
    availability: { type: Boolean, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;

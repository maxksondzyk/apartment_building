const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    floor: { type: Number, required: true },
    rooms: { type: Number, required: true },
    total_area: { type: Number, required: true },
    living_area: { type: Number, required: true },
    availability: { type: Boolean, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;

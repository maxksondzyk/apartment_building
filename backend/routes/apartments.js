const router = require('express').Router();
let Apartment = require('../models/apartment.model');

router.route('/').get((req, res) => {
    Apartment.find()
        .then(apartments => res.json(apartments))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const planning = String(req.body.planning)
    const number = Number(req.body.number);
    const floor = Number(req.body.floor);
    const rooms = Number(req.body.rooms);
    const total_area = Number(req.body.total_area);
    const living_area = Number(req.body.living_area);
    const availability = Boolean(req.body.availability);
    const price = Number(req.body.price);

    const newApartment = new Apartment({
        planning,
        number,
        floor,
        rooms,
        total_area,
        living_area,
        availability,
        price,
    });

    newApartment.save()
        .then(() => res.json('Apartment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Apartment.findById(req.params.id)
        .then(apartment => res.json(apartment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Apartment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Apartment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Apartment.findById(req.params.id)
        .then(apartment => {
            apartment.planning = String(req.body.planning)
            apartment.number = Number(req.body.number);
            apartment.floor = Number(req.body.floor);
            apartment.rooms = Number(req.body.rooms);
            apartment.total_area = Number(req.body.total_area);
            apartment.living_area = Number(req.body.living_area);
            apartment.availability = Boolean(req.body.availability);
            apartment.price = Number(req.body.price);

            apartment.save()
                .then(() => res.json('Apartment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

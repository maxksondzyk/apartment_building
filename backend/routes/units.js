const router = require('express').Router();
let Unit = require('../models/unit');

router.route('/').get((req, res) => {
    Unit.find()
        .then(units => res.json(units))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const planning = String(req.body.planning)
    const _id = req.body._id;
    const floor = req.body.floor;
    const rooms = req.body.rooms;
    const total_area = req.body.total_area;
    const availability = req.body.availability;
    const price = req.body.price;

    const newApartment = new Unit({
        planning,
        _id,
        floor,
        rooms,
        total_area,
        availability,
        price,
    });

    newApartment.save()
        .then(() => res.json('Unit added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Unit.findById(req.params.id)
        .then(apartment => res.json(apartment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Unit.findByIdAndDelete(req.params.id)
        .then(() => res.json('Unit deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Unit.findById(req.params.id)
        .then(unit => {
            unit.planning = String(req.body.planning)
            unit._id = Number(req.body._id);
            unit.floor = Number(req.body.floor);
            unit.rooms = Number(req.body.rooms);
            unit.total_area = Number(req.body.total_area);
            unit.availability = Boolean(req.body.availability);
            unit.price = Number(req.body.price);

            unit.save()
                .then(() => res.json('Unit updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

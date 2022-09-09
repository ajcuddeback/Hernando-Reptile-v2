const router = require('express').Router();
const { Animals } = require('../../models');

router.get('/', (req, res) => {
    Animals.findAll({})
        .then(dbAnimalsData => res.json(dbAnimalsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:animalType', (req, res) => {
    Animals.findAll({
        where: {
            animal_type: req.params.animalType
        }
    })
        .then(dbAnimalsData => {
            if (!dbAnimalsData) {
                res.status(404).json({ message: 'No animals at this time! Come back soon!' });
                return;
            }

            res.json(dbAnimalsData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

router.post('/', (req, res) => {
    Animals.create({
        animal_type: req.body.animalType,
        name: req.body.name,
        about: req.body.about,
        image: req.body.image
    })
        .then(dbAnimalsData => res.json(dbAnimalsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    Animals.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbAnimalsData => {
            if (!dbAnimalsData) {
                res.status(404).json({ message: 'No animal found at this id!' });
                return;
            }

            res.json(dbAnimalsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;
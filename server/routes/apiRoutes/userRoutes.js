const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// router.post('/', (req, res) => {
//     User.create({
//         username: req.body.username,
//         password: req.body.password
//     })
//         .then(dbUserData => {
//             req.session.save(() => {
//                 req.session.user_id = dbUserData.id;
//                 req.session.username = dbUserData.username;
//                 req.session.loggedIn = true;
//                 res.json(dbUserData);
//             })

//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(400).json({ message: "No user found at this username!" });
                return;
            }

            const validatePassword = dbUserData.checkPassword(req.body.password);

            if (!validatePassword) {
                res.status(400).json({ message: "Your password is not correct!" });
                return;
            }

            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;
                res.json(dbUserData);
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No user found at this id!'});
                return;
            }

            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;
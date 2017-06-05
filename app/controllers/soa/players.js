const sequelize = require('../../sequelize');
const Player = require('../../../models/player');

module.exports = function (router) {
    router.get('/', (req, res) => {
        Player
            .all()
            .then(players => {
                res.status(200);
                res.json(players)
            })
    });

    router.get('/:id', (req, res) => {
        Player
            .findById(req.params.id)
            .then(player => {
                res.status(200);
                res.json(player);
            });
    });
};

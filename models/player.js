const Sequelize = require('sequelize');
const sequelize = require('../app/sequelize');

const Player = sequelize.define('player', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
});

module.exports = Player;
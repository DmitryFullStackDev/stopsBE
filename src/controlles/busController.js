const stops = require('../models/bus');

class BusController {
    async getBusList(req, res) {
        try {
            res.json(stops);
        } catch (error) {
            res.status(500).json({error: 'Failed to authenticate'});
        }
    }

    async getWelcome(req, res) {
        res.json({welcome: true});
    }
}

module.exports = new BusController()

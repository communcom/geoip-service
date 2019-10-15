const core = require('cyberway-core-service');
const BasicConnector = core.services.Connector;
const GeoIP = require('../controllers/GeoIP');

class Connector extends BasicConnector {
    constructor() {
        super();

        this._geoip = new GeoIP();
    }

    async start() {
        console.log('Start!');

        await super.start({
            serverRoutes: {
                lookup: {
                    handler: this._geoip.lookup,
                    scope: this._geoip,
                    validation: {
                        required: ['ip'],
                        properties: {
                            ip: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        });
    }
}

module.exports = Connector;

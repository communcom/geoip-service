const core = require('cyberway-core-service');
const { BasicMain } = core.services;
const Connector = require('./services/Connector');

class Main extends BasicMain {
    constructor() {
        super({});

        const connector = new Connector();
        this.addNested(connector);
    }
}

module.exports = Main;

const geoip = require('geoip-lite');

class GeoIP {
    lookup({ ip }) {
        const results = geoip.lookup(ip);

        if (!results) {
            return {
                countryCode: null,
                regionCode: null,
                timezone: null,
            };
        }

        return {
            countryCode: results.country,
            regionCode: results.region,
            timezone: results.timezone,
        };
    }
}

module.exports = GeoIP;

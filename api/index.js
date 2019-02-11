const { send } = require('micro');
const getDepartureTimes = require('./getDepartureTimes');

const dev = async (req, res) => {
    switch (req.url) {
        case '/api/getDepartureTimes.js':
            await getDepartureTimes(req, res);
            break;
        default:
            send(res, 404, '404. Not found.');
            break;
    };
};

module.exports = dev
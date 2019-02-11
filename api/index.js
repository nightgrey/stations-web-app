const { send } = require('micro');
const getDepartureTime = require('./getDepartureTime');

const dev = async (req, res) => {
    switch (req.url) {
        case '/api/getDepartureTime.js':
            await getDepartureTime(req, res);
            break;
        default:
            send(res, 404, '404. Not found.');
            break;
    };
};

module.exports = dev
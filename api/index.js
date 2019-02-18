const { json, send, createError, run } = require('micro');
const cors = require('micro-cors')({ allowMethods: ['POST'], origin: '*' })
const scrapeIt = require('scrape-it');

const config = require('../shared/config');

const getDepartureTimes = async (req, res) => {
    // Answer CORS request.
    if (req.method === 'OPTIONS') {
        send(res, 200);
    } else if(req.method === 'POST') {
        const { id } = await json(req);
        const url = `${config.departureTimesUrl}?halt=4304`;

        try {
            scrapeIt(url, {
                departures: {
                    listItem: '#vdfimain tr:not(:first-child)',
                    data: {
                        line: {
                            selector: ".linie",
                        },
                        direction: {
                            selector: '.richtung',
                        },
                        departure: {
                            selector: '.abfahrt',
                        },
                    },
                },
            }).then(({ data, response }) => {
                if (response.statusCode === 200) {
                    if (data.departures.length) {
                        send(res, 200, { departures: data.departures });
                    } else {
                        send(res, 200, { error: "There are no departures scheduled currently." });
                    }
                } else {
                    send(res, response.statusCode, response.statusText);
                }
            }).catch(() => send(res, 200, { error: "Departure server unavailable. " }))
        } catch (error) {
            throw createError(error.statusCode, error.statusText);
        }
    } else {
        send(res, 404, { error: "Method not found." });
    }
};

module.exports = cors(getDepartureTimes);
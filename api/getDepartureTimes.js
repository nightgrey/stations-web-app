const { json, send, createError, run } = require('micro');
const cors = require('micro-cors')({ origin: '*' });
const fetch = require('isomorphic-unfetch');
const scrapeIt = require('scrape-it');

const config = require('../shared/config');

const getDepartureTimes = async (req, res) => {
    const { id } = await json(req);
    const url = `${config.departureTimesUrl}?halt=${id}`;

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
            if (response.statusCode !== 200) {
                send(res, 200, data.departures);
            } else {
                send(res, response.statusCode, response.statusText);
            }
        });
    } catch (error) {
        throw createError(error.statusCode, error.statusText);
    }
};

module.exports = (req, res) => run(req, res, getDepartureTimes);
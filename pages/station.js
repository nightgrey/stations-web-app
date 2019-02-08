import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { addMinutes, getTime } from 'date-fns';
import { generate as shortid } from 'shortid';
import Head from '../components/Head';

import Header from '../components/Header';
import Container from '../components/Container';
import DepartureTable from '../components/DepartureTable';

import { getStationById, getStations } from '../data/stations';

const mockDepartureData = [
  {
    id: shortid(),
    line: Math.floor(Math.random() * 10) + 1,
    direction: 'Beispiel',
    departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(),
    line: Math.floor(Math.random() * 10) + 1,
    direction: 'Beispiel',
    departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(),
    line: Math.floor(Math.random() * 10) + 1,
    direction: 'Beispiel',
    departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(),
    line: Math.floor(Math.random() * 10) + 1,
    direction: 'Beispiel',
    departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(),
    line: Math.floor(Math.random() * 10) + 1,
    direction: 'Beispiel',
    departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(),
    line: Math.floor(Math.random() * 10) + 1,
    direction: 'Beispiel',
    departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
];

const Station = ({ router: { query: { id } } }) => (
  <div>
    <Head title={getStationById(id).stop} />
    <Header>
      {getStationById(id).stop}
    </Header>
    <DepartureTable departureData={mockDepartureData} />
  </div>
);

Station.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Station);

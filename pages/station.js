import React from 'react';
import { withRouter } from 'next/router';
import { addMinutes, getTime } from 'date-fns';
import { generate as shortid } from 'shortid';
import Head from '../components/Head';

import Header from '../components/Header';
import Container from '../components/Container';
import DepartureTable from '../components/DepartureTable/index';

import { getStationById, getStations } from '../data/stations';

const mockDepartureData = [
  {
    id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: 'Beispiel', departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: 'Beispiel', departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: 'Beispiel', departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: 'Beispiel', departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: 'Beispiel', departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
  {
    id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: 'Beispiel', departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)),
  },
];

const Station = ({ router: { query: { id } } }) => (
  <div>
    <Head title={getStationById(id).stop} />
    <Header>
      {getStationById(id).stop}
    </Header>
    <Container>
      <DepartureTable departureData={mockDepartureData} />
    </Container>
  </div>
);

export default withRouter(Station);

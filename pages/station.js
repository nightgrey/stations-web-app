import React from 'react';
import { withRouter } from 'next/router';
import { addMinutes, getTime } from 'date-fns';
import { generate as shortid } from 'shortid';

import Header from '../components/Header';
import DepartureTable from '../components/DepartureTable/index';

import { getStationById, getStations } from "../data/stations";

const mockDepartureData = [
  { id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: "Beispiel", departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)) },
  { id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: "Beispiel", departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)) },
  { id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: "Beispiel", departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)) },
  { id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: "Beispiel", departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)) },
  { id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: "Beispiel", departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)) },
  { id: shortid(), line: Math.floor(Math.random() * 10) + 1, direction: "Beispiel", departure: getTime(addMinutes(new Date(), Math.floor(Math.random() * 30) + 1)) }
];

const Station = ({ router: { query: { id } } }) => {
  return (
    <div>
      <Header>
        {getStationById(id).stop}
      </Header>

      <DepartureTable departureData={mockDepartureData} />
    </div>
  )
};

export default withRouter(Station);
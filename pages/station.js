import React from 'react';

import Header from '../components/Header';
import { getStationById, getStations } from "../data/stations";

const Station = ({ url: { query: { id } } }) => {
  return (
    <div>
      <Header>
        {getStationById(id).stop}
      </Header>
    </div>
  )
};

export default Station;
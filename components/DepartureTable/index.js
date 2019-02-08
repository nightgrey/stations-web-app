import React from 'react';

import Item from './Item';

export default ({ departureData, ...otherProps }) => (
  <div>
    {departureData.map(oneDeparture => (
      <Item key={oneDeparture.id} line={oneDeparture.line} direction={oneDeparture.direction} departure={oneDeparture.departure} />
    ))}
  </div>
);
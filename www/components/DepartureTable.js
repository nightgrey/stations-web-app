import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import { distanceInWordsToNow } from 'date-fns';
import deLocale from 'date-fns/locale/de';

import { rhythm } from '../utilities/styles';

const DepartureTable = ({ departures }) => (
  <React.Fragment>
    <Flex flexDirection="column">
      <Flex css={`border-bottom: 1px solid`} flexWrap="wrap">
        <Box width={1 / 3}>
          Linie
        </Box>
        <Box width={1 / 3}>
          Richtung
        </Box>
        <Box width={1 / 3}>
          Abfahrt
        </Box>
      </Flex>
      <React.Fragment>
        {departures.map((oneDeparture, index) => (
          <Flex css={`
            border-bottom: 1px solid;
          `} key={oneDeparture.id}>
            <Box width={1 / 3}>
              {oneDeparture.line}
            </Box>
            <Box width={1 / 3}>
              {oneDeparture.direction}
            </Box>
            <Box width={1 / 3}>
              {distanceInWordsToNow(oneDeparture.departure, { locale: deLocale })}
            </Box>
          </Flex>
        ))}
      </React.Fragment>
    </Flex>
  </React.Fragment>
);

DepartureTable.propTypes = {
  departureData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      line: PropTypes.number,
      direction: PropTypes.string,
      departure: PropTypes.number,
    }).isRequired,
  ),
};

export default DepartureTable;

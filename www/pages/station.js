import React from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import { addMinutes, getTime } from 'date-fns';
import { generate as shortid } from 'shortid';
import fetch from 'isomorphic-unfetch';

import Head from '../components/Head';
import Header from '../components/Header';
import Container from '../components/Container';
import DepartureTable from '../components/DepartureTable';

import { getStationById } from '../data/stations';

class Station extends React.Component {
  static getInitialProps = async (ctx) => {
    const { query: { id } } = ctx;

    try {
      const response = await fetch('http://localhost:3001', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify({
          id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return response.json();
      }

      return { error: 'No departures available.' };
    } catch (error) {
      // Implementation or Network error
      return { error: 'Could not connect to the departure server.' };
    }
  };

  propTypes = {
    router: PropTypes.object.isRequired,
    departures: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
  };

  defaultProps = {
    departures: [],
    error: null,
  };

  render() {
    const { router: { query: { id } }, departures, error } = this.props;

    return (
      <div>
        <Head title={getStationById(id).stop} />
        <Header>
          {getStationById(id).stop}
        </Header>
        {error ? (
          <span>{error}</span>
        ) : (
          <DepartureTable departures={departures} />
        )}
      </div>
    );
  }
}

export default withRouter(Station);

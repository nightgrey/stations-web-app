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
    const { req, query: { id } } = ctx;
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    // TODO: https://github.com/zeit/next.js/blob/canary/examples/with-cookie-auth/www/pages/profile.js#L46
    const apiUrl = `${protocol}://localhost:3001/api/getDepartureTimes.js`;

    const redirectOnError = () => process.browser
      ? Router.push('/')
      : ctx.res.writeHead(301, { Location: '/' });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        cache: 'no-cache',
        // @TODO: Get CORS to work in the best case.
        mode: 'no-cors',
        body: JSON.stringify({
          id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return response.json();
      } else {
        // https://github.com/developit/unfetch#caveats
        return redirectOnError();
      }
    } catch (error) {
      // Implementation or Network error
      return redirectOnError();
    }
  };

  propTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const { router: { query: { id } } } = this.props;

    return (
      <div>
        <Head title={getStationById(id).stop} />
        <Header>
          {getStationById(id).stop}
        </Header>
        
      </div>
    );
  }
}

export default withRouter(Station);

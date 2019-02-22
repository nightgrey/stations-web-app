import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';

import Header from '../components/Header';
import FullViewport from '../components/FullViewport';
import Search from '../components/Search';
import { colors } from '../utilities/styles';


const Home = () => (
  <React.Fragment>
    <Head title="Home" />
    <FullViewport css={`
      background: url(/static/background-night.jpg) no-repeat center center / cover;
      display: flex;
      align-items: center;
      justify-content: center;
    `}>
      <Search />
    </FullViewport>
  </React.Fragment>
);

export default Home;

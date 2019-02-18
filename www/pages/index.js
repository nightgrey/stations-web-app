import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';

import Header from '../components/Header';
import FullViewport from '../components/FullViewport';
import Search from '../components/Search';
import { colors } from '../utilities/styles';

const Home = () => (
  <div>
    <Head title="Home" />
    <FullViewport css={`
      background: ${colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
    `}>
      <Search />
    </FullViewport>
  </div>
);

export default Home;

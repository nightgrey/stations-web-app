import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

import Header from '../components/Header';
import Search from '../components/Search';

const Home = () => (
  <div>
    <Head title="Home" />

    <Header>
      <Search />
    </Header>
  </div>
)

export default Home

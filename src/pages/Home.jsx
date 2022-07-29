import React from 'react';
import { Card } from '../components';

const Home = () => {
  return (
    <div className='px-5 py-24 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;

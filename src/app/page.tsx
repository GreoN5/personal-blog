import React, { JSX } from 'react';
import NavigationBar from '@/components/Navigation';

const Home = (): JSX.Element => {
  return (
    <div className="w-full h-full pt-11">
      <div className="container mx-auto w-2/3">
        <NavigationBar />
      </div>
    </div>
  );
};

export default Home;

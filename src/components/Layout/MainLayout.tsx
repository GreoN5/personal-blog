import React, { FC, ReactNode } from 'react';
import Footer from '../Footer';
import NavigationBar from '@/components/Navigation';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col justify-between w-full h-full sm:px-5 md:px-0 py-11">
        <div className="container mx-auto sm:w-full sm:px-5 md:px-0 md:w-3/4">
          <NavigationBar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

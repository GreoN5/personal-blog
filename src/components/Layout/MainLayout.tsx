import React, { FC, ReactNode } from 'react';
import Footer from '../Footer';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full pt-11">
      <div className="container mx-auto w-3/4">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;

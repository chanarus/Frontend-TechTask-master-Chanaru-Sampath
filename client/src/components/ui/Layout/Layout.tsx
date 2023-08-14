import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={'page'}>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

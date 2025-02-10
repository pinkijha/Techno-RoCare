import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the Top */}
      <Header />

      {/* Main Content (Grows to push footer down) */}
      <main className="flex-grow p-2">{children}</main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default Layout;

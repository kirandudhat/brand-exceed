import React, { cloneElement } from 'react';
import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';

const Layout = ({ children, routerProps }) => {
  return (
    <>
      <Header />

      <div className="container-fuild">
      <div className="d-flex">
        <SideBar />

        {cloneElement(children, routerProps)}
      </div>
      </div>
    </>
  );
};

export default Layout;

import React from 'react';
import Shell from './Shell';
import NavBar from './NavBar';
import './main.css';

function Main() {
  return (
    <>
      <NavBar />
      <div className="mainDiv">
        <Shell />
      </div>
    </>
  );
}

export default Main;

import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Messenger</h3>
    </header>
  );
}

export default Header;

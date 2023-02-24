import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <h1>Ur Muse</h1>
      <nav>
        <a href="../pages/home">Home</a>
        <a href="../pages/login">Login</a>
        <a href="../pages/signup">Sign Up</a>
      </nav>
    </header>
  );
}

export default Header;

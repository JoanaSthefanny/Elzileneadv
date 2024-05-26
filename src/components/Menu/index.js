import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu-nav">
      <ul className="menu-list">
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="sobre-mim" smooth={true} duration={500}>Sobre Mim</ScrollLink>
        </li>
        <li>
          <ScrollLink to="noticias" smooth={true} duration={500}>Notícias</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contatos" smooth={true} duration={500}>Contatos</ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

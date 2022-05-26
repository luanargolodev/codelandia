import React from 'react';
import { Container, Menu } from './styles';

import LogoImg from '../../assets/home.svg';
import Hamburguer from '../../assets/menu.svg';
import User from '../../assets/fi_user.svg';
import Heart from '../../assets/fi_heart.svg';
import Search from '../../assets/fi_search.svg';

const Header = () => {
  return (
    <Container>
      <div>
        <img src={LogoImg} alt="" />
        <h1>HOMEYOU</h1>
        <Menu>
          <img src={Hamburguer} alt="" />
        </Menu>
      </div>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/">Galeria</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
        <li>
          <a href="/">
            <img src={User} alt="Minha conta" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Heart} alt="Favoritos" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Search} alt="Buscar" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Header;

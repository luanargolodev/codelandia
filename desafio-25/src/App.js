import React from 'react';
import { Container, GlobalStyle, Section, Button } from './styles';

import Header from './components/Header';
import House from './assets/house.png';

const App = () => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Header />
      </Container>

      <Section id="inicio">
        <div>
          <h1>
            Ajudar você a encontrar o melhor conforto, é nossa prioridade.
          </h1>
          <p>
            Encontre uma variedade de propriedades que combinam com você.
            Esqueça todas as dificuldades em encontrar uma residência.
          </p>
          <div>
            <Button primary>Entre em contato</Button>
            <a href="/">Mais sobre nós</a>
          </div>
        </div>
        <div>
          <img src={House} alt="Casa bonita" />
        </div>
      </Section>
    </>
  );
};

export default App;

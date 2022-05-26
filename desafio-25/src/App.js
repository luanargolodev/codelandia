import React from 'react';
import { Container, GlobalStyle, Section, Button, Content } from './styles';

import Header from './components/Header';
import House from './assets/house.png';
import House2 from './assets/house2.png';

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

      <Content>
        <div>
          <img src={House2} alt="Casa bonita" />
        </div>
        <div>
          <h2>Design Minimalista</h2>
          <p>
            Móveis apenas essenciais e com design moderno, além de revestimentos
            bonitos e em cores neutras para manter a casa sempre com um estilo
            clean e suave.
          </p>
        </div>
      </Content>
    </>
  );
};

export default App;

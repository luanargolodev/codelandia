import React from 'react';
import {
  Container,
  GlobalStyle,
  Section,
  Button,
  Content,
  Gallery,
  Budget,
} from './styles';

import Header from './components/Header';
import House from './assets/house.png';
import House2 from './assets/house2.png';
import House3 from './assets/house3.png';
import House4 from './assets/house4.png';
import House5 from './assets/house5.png';

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
        <img src={House} alt="Casa bonita" />
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

      <Gallery id="galeria">
        <h3>Galeria</h3>
        <p>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </p>
        <div>
          <img src={House3} alt="Casa bonita" />
          <img src={House4} alt="Casa bonita" />
          <img src={House5} alt="Casa bonita" />
        </div>
      </Gallery>

      <Budget id="contato">
        <h3>Orçamento</h3>
        <p>Interessado em entrar em contato com um de nossos profissionais?</p>
        <Button>Entre em contato</Button>
      </Budget>
    </>
  );
};

export default App;

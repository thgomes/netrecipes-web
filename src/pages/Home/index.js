import React from 'react';

import chef from '../../assets/chef.png';

import { SubTitle, Banner, Container } from './styles';

function Home() {
  return (
    <Container>
      <Banner>
        <div>
          <h2>As melhores receitas</h2>
          <p>
            Mostre para o mundo suas receitas e aprenda a fazer novos pratos.
          </p>
        </div>
        <img src={chef} alt="NetFood" />
      </Banner>
      <SubTitle>
        <h2>Novas Receitas</h2>
      </SubTitle>
    </Container>
  );
}

export default Home;

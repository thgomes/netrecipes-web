import React from 'react';

import { Container, Content, List } from './styles';

function Recipe() {
  return (
    <Container>
      <Content>
        <h1>New recipe</h1>
        <img
          src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
          alt="Recipe"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h2>Ingredientes</h2>
        <List>
          <li>
            <strong>6 xicaras</strong>
            <strong>açucar</strong>
          </li>
          <li>
            <strong>6 xicaras</strong>
            <strong>açucar</strong>
          </li>
          <li>
            <strong>6 xicaras</strong>
            <strong>açucar</strong>
          </li>
          <li>
            <strong>6 xicaras</strong>
            <strong>açucar</strong>
          </li>
        </List>
        <h2>Passo a passo</h2>
        <List>
          <li>
            <strong>1</strong>
            <strong>colocar no fogo</strong>
          </li>
          <li>
            <strong>1</strong>
            <strong>colocar no fogo</strong>
          </li>
          <li>
            <strong>1</strong>
            <strong>colocar no fogo</strong>
          </li>
          <li>
            <strong>1</strong>
            <strong>colocar no fogo</strong>
          </li>
        </List>
      </Content>
    </Container>
  );
}

export default Recipe;

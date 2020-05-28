import React from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import chef from '../../assets/chef.png';

import { SubTitle, Content, Banner, RecipeList } from './styles';

function Home() {
  api.get('newrecipes');

  return (
    <>
      <Header />
      <Content>
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
        <RecipeList>
          <li>
            <img
              src="https://www.ocladapizza.com.br/wp-content/uploads/2017/02/conhe%C3%A7a-7-sabores-de-pizza-mais-consumidos-na-italia-blog-pizzaria-o-cla-da-pizza.jpg"
              alt="Recipe"
            />
            <strong>Pizza Italiana de Calabreza ao molho com queijo</strong>
          </li>
          <li>
            <img src="" alt="Recipe" />
            <strong>Pizza Italiana</strong>
          </li>
          <li>
            <img
              src="https://www.ocladapizza.com.br/wp-content/uploads/2017/02/conhe%C3%A7a-7-sabores-de-pizza-mais-consumidos-na-italia-blog-pizzaria-o-cla-da-pizza.jpg"
              alt="Recipe"
            />
            <strong>Pizza Italiana</strong>
          </li>
          <li>
            <img
              src="https://www.ocladapizza.com.br/wp-content/uploads/2017/02/conhe%C3%A7a-7-sabores-de-pizza-mais-consumidos-na-italia-blog-pizzaria-o-cla-da-pizza.jpg"
              alt="Recipe"
            />
            <strong>Pizza Italiana</strong>
          </li>
          <li>
            <img
              src="https://www.ocladapizza.com.br/wp-content/uploads/2017/02/conhe%C3%A7a-7-sabores-de-pizza-mais-consumidos-na-italia-blog-pizzaria-o-cla-da-pizza.jpg"
              alt="Recipe"
            />
            <strong>Pizza Italiana</strong>
          </li>
          <li>
            <img
              src="https://www.ocladapizza.com.br/wp-content/uploads/2017/02/conhe%C3%A7a-7-sabores-de-pizza-mais-consumidos-na-italia-blog-pizzaria-o-cla-da-pizza.jpg"
              alt="Recipe"
            />
            <strong>Pizza Italiana</strong>
          </li>
        </RecipeList>
      </Content>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import chef from '../../assets/chef.png';

import { SubTitle, Banner, RecipeList, Container } from './styles';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('recipes');

      setRecipes(response.data);
    }

    loadNotifications();
  }, []);

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
      <RecipeList>
        {recipes.map((recipe) => (
          <li>
            <Link to="/recipe">
              <img
                src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
                alt={recipe.name}
              />
              <strong>{recipe.name}</strong>
            </Link>
          </li>
        ))}
      </RecipeList>
    </Container>
  );
}

export default Home;

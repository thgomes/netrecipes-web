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
            <Link to={`/recipe/${recipe.id}`}>
              <div>
                <img
                  src="https://i.ndtvimg.com/i/2017-10/gourmet-620_620x350_71507112783.jpg"
                  alt={recipe.name}
                />
              </div>

              <strong>{recipe.name}</strong>
            </Link>
          </li>
        ))}
      </RecipeList>
    </Container>
  );
}

export default Home;

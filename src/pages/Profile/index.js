import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, User, RecipeList } from './styles';

function Profile() {
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
      <User>
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="Thiago Gomes"
        />
        <h1>Thiago Gomes</h1>
        <Link to="/account">Editar perfil</Link>
      </User>
      <h2>Minhas Receitas</h2>
      <RecipeList>
        {recipes.map((recipe) => (
          <li>
            <Link to={`/recipe/${recipe.id}`}>
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

export default Profile;

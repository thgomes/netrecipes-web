import React from 'react';
import { Link } from 'react-router-dom';

import { Container, User, RecipeList } from './styles';

function Profile() {
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
        <li>
          <Link to="/recipe">
            <img
              src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
              alt="recipe"
            />
            <strong>Receita muito gostosa</strong>
          </Link>
        </li>
        <li>
          <Link to="/recipe">
            <img
              src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
              alt="recipe"
            />
            <strong>Receita muito gostosa</strong>
          </Link>
        </li>
        <li>
          <Link to="/recipe">
            <img
              src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
              alt="recipe"
            />
            <strong>Receita muito gostosa</strong>
          </Link>
        </li>
      </RecipeList>
    </Container>
  );
}

export default Profile;

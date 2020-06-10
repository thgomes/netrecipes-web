import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaUtensils } from 'react-icons/fa';

import api from '../../services/api';

import { Container, User, RecipeList } from './styles';

function Profile() {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesQuantity, setPagesQuantity] = useState(1);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('recipes', {
        params: { page },
      });

      setRecipes(response.data.rows);

      setPagesQuantity(response.data.count / 6);
    }

    loadNotifications();
  }, [page]);

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if (page < pagesQuantity) {
      setPage(page + 1);
    }
  }

  return (
    <Container>
      <User>
        <img
          src="https://api.adorable.io/avatars/285/eg.png"
          alt="Thiago Gomes"
        />
        <h1>Thiago Gomes</h1>
        <Link to="/account">Editar perfil</Link>
      </User>
      <nav>
        <h2>Minhas Receitas</h2>

        <Link to="/new">
          <button type="button">
            <FaUtensils />
            <strong>Nova Receita</strong>
          </button>
        </Link>
      </nav>
      <RecipeList>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
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
      <div>
        <button type="button" onClick={handlePrevPage}>
          <FaChevronLeft />
          <strong>Anterior</strong>
        </button>
        <button type="button" onClick={handleNextPage}>
          <strong>Próximo</strong>
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
}

export default Profile;

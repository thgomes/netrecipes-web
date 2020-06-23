import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight, FaUtensils } from 'react-icons/fa';

import api from '../../services/api';

import { Container, User, RecipeList } from './styles';

function Profile() {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesQuantity, setPagesQuantity] = useState(1);

  const profile = useSelector((state) => state.user.profile);

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
          src={
            profile.avatar
              ? profile.avatar.url
              : 'https://api.adorable.io/avatars/285/eg.png'
          }
          alt={profile.name}
        />
        <h1>{profile.name}</h1>
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
              <div>
                {recipe.image && (
                  <img src={recipe.image.url} alt={recipe.name} />
                )}
              </div>
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

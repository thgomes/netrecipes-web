import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Content, List, Title, Image } from './styles';

function Recipe({ match }) {
  const [recipe, setRecipe] = useState({
    recipe: {},
    image: {},
    ingredients: [],
    steps: [],
  });

  useEffect(() => {
    async function loadRecipe() {
      const { id } = match.params;

      const response = await api.get(`recipes/${id}`);

      setRecipe(response.data);
    }

    loadRecipe();
  }, []);

  return (
    <Container>
      <Content>
        <Title>
          <h1>{recipe.recipe.name}</h1>
          <Link to={`/edit/${recipe.recipe.id}`}>
            <button type="button">
              <FaEdit />
              <strong>Editar Receita</strong>
            </button>
          </Link>
        </Title>
        <Image>
          {recipe.image ? (
            <img src={recipe.image.url} alt="Recipe" />
          ) : (
            <div>
              <strong>Sem Imagem</strong>
            </div>
          )}
        </Image>
        <p>{recipe.recipe.description}</p>
        <h2>Ingredientes</h2>
        <List>
          {recipe.ingredients[0] ? (
            recipe.ingredients.map((ingredient) => (
              <li>
                <strong>{ingredient.quantity}</strong>
                <strong>{ingredient.name}</strong>
              </li>
            ))
          ) : (
            <li>
              <strong>Nenhum ingrediente registrado</strong>
            </li>
          )}
        </List>
        <h2>Passo a passo</h2>
        <List>
          {recipe.steps[0] ? (
            recipe.steps.map((step) => (
              <li>
                <strong>{step.order}º</strong>
                <strong>{step.instruction}</strong>
              </li>
            ))
          ) : (
            <li>
              <strong>Nenhuma instrução registrada</strong>
            </li>
          )}
        </List>
      </Content>
    </Container>
  );
}

export default Recipe;

Recipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

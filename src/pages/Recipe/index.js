import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Content, List } from './styles';

function Recipe({ match }) {
  const [recipe, setRecipe] = useState({
    recipe: {},
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
        <h1>{recipe.recipe.name}</h1>
        <img
          src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/02/comida-porcaria-efeito-no-cerebro-1280x720.jpg"
          alt="Recipe"
        />
        <p>{recipe.recipe.description}</p>
        <h2>Ingredientes</h2>
        <List>
          {recipe.ingredients.name ? (
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
          {recipe.steps.name ? (
            recipe.steps.map((step) => (
              <li>
                <strong>{step.order}</strong>
                <strong>{step.name}</strong>
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

import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Content, List } from './styles';

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
        <h1>{recipe.recipe.name}</h1>
        <img src={recipe.image.url} alt="Recipe" />
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

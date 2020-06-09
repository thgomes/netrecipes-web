import React from 'react';

import Dropzone from '../../components/Dropzone';

import { Container } from './styles';

function NewRecipe() {
  return (
    <Container>
      <h1>Crie uma nova receita</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="RecipeName">
          Nome da receita <br />
          <input type="text" />
        </label>
        <label htmlFor="RecipeDescription">
          Fale sobre sua receita <br />
          <textarea />
        </label>
        <label htmlFor="RecipeImage">
          Coloque uma imagem
          <Dropzone />
        </label>
      </form>
    </Container>
  );
}

export default NewRecipe;

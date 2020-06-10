import React, { useState, useEffect, FormEvent } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaUtensils } from 'react-icons/fa';

import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome da receita é obrigatório.'),
  description: Yup.string().required('A descriçao da receita é obrigatória.'),
});

function NewRecipe() {
  const [imageId, setImageId] = useState(null);

  async function handleSubmit({ name, description }) {
    await api.post('recipes', { name, description, image_id: imageId });

    alert('Receita criada!');
  }

  return (
    <Container>
      <h1>Crie uma nova receita</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome da receita <br />
          <Input type="text" name="name" />
        </label>
        <label htmlFor="description">
          Fale sobre sua receita <br />
          <Textarea name="description" />
        </label>
        <label htmlFor="RecipeImage">
          Coloque uma imagem
          <Dropzone onFileUploaded={setImageId} />
        </label>

        <button type="submit">
          <FaUtensils />
          <strong>Criar Receita</strong>
        </button>
      </Form>
    </Container>
  );
}

export default NewRecipe;

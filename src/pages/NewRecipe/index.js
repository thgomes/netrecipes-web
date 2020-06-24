import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FaUtensils } from 'react-icons/fa';

import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'O nome deve ter no máximo 100 caracteres')
    .required('O nome da receita é obrigatório.'),
  description: Yup.string()
    .max(250, 'A descrição deve ter no máximo 250 caracteres')
    .required('A descriçao da receita é obrigatória.'),
});

function NewRecipe() {
  const [imageId, setImageId] = useState(null);

  const history = useHistory();

  async function handleSubmit({ name, description }) {
    const response = await api.post('recipes', {
      name,
      description,
      image_id: imageId,
    });

    toast.success('Receita criada!');

    const { id } = response.data;

    history.push(`/recipe/${id}`);
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

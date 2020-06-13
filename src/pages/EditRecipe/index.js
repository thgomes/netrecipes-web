import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import { Container, List, Buttons } from './styles';

function EditRecipe({ match }) {
  const [imageId, setImageId] = useState(null);

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

  const history = useHistory();

  async function handleSubmit({ name, description }) {
    const response = await api.post('recipes', {
      name,
      description,
      image_id: imageId,
    });

    alert('Receita criada!');

    const { id } = response.data;

    history.push(`/recipe/${id}`);
  }

  return (
    <Container>
      <h1>Edite sua receita</h1>
      <Form initialData={recipe.recipe} onSubmit={handleSubmit}>
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

        <label htmlFor="RecipeIngredients">Ingredientes</label>
        <List>
          {recipe.ingredients[0] ? (
            recipe.ingredients.map((ingredient) => (
              <li>
                <div>
                  <strong>{ingredient.quantity}</strong>
                  <strong>{ingredient.name}</strong>
                </div>
                <FaTrashAlt />
              </li>
            ))
          ) : (
            <li>
              <strong>Nenhum ingrediente registrado</strong>
            </li>
          )}
          <li>
            <Input
              className
              type="text"
              name="quantity"
              placeholder="quantidade"
            />
            <Input type="text" name="ingredient" placeholder="ingrediente" />
            <FaPlus size={24} />
          </li>
        </List>

        <label htmlFor="RecipeSteps">Passo a passo</label>
        <List>
          {recipe.steps[0] ? (
            recipe.steps.map((step) => (
              <li>
                <div>
                  <strong>{step.order}º</strong>
                  <strong>{step.instruction}</strong>
                </div>
                <FaTrashAlt />
              </li>
            ))
          ) : (
            <li>
              <strong>Nenhuma instrução registrada</strong>
            </li>
          )}
          <li>
            <Input className type="text" name="order" />
            <Input type="text" name="step" placeholder="instrução" />
            <FaPlus size={24} />
          </li>
        </List>

        <Buttons>
          <button className="DeleteButton" type="button">
            <FaTrashAlt />
            <strong>Deletar Receita</strong>
          </button>
          <button className="SubmitButton" type="submit">
            <FaEdit />
            <strong>Salvar Alterações</strong>
          </button>
        </Buttons>
      </Form>
    </Container>
  );
}

export default EditRecipe;

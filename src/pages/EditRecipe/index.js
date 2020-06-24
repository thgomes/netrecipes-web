import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import { Container, List, Buttons } from './styles';

function EditRecipe({ match }) {
  const [recipe, setRecipe] = useState({
    recipe: {},
    image: {},
    ingredients: [],
    steps: [],
  });

  const [imageId, setImageId] = useState(null);

  const [newIgredient, setNewIngredient] = useState({
    name: '',
    quantity: '',
  });

  const [newStep, setNewStep] = useState({
    instruction: '',
    order: '',
  });

  async function loadRecipe() {
    const { id } = match.params;

    const response = await api.get(`recipes/${id}`);

    setRecipe(response.data);
  }

  useEffect(() => {
    loadRecipe();
  }, []);

  function handleIngredientInputChange(event) {
    const { name, value } = event.target;

    setNewIngredient({ ...newIgredient, [name]: value });
  }

  function handleStepInputChange(event) {
    const { name, value } = event.target;

    setNewStep({ ...newStep, [name]: value });
  }

  async function handleCreateIngredient() {
    await api.post('ingredients', {
      recipe_id: recipe.recipe.id,
      name: newIgredient.name,
      quantity: newIgredient.quantity,
    });

    setNewIngredient({
      quantity: '',
      name: '',
    });

    loadRecipe();
  }

  async function handleCreateStep() {
    await api.post('steps', {
      recipe_id: recipe.recipe.id,
      instruction: newStep.instruction,
      order: newStep.order,
    });

    setNewStep({
      order: '',
      instruction: '',
    });

    loadRecipe();
  }

  async function handleDeleteIngredient(ingredientId) {
    await api.delete(`ingredients/${ingredientId}`);

    loadRecipe();
  }

  async function handleDeleteStep(stepId) {
    await api.delete(`steps/${stepId}`);

    loadRecipe();
  }

  const history = useHistory();

  async function handleSubmit({ name, description }) {
    const request = {
      id: recipe.recipe.id,
      name,
      description,
    };

    if (imageId) {
      request.image_id = imageId;
    }

    await api.put('recipes', request);

    toast.success('Imformações da receita alteradas!');

    history.push(`/profile`);
  }

  return (
    <Container>
      <h1>Edite sua receita</h1>
      <Form initialData={recipe.recipe} onSubmit={handleSubmit}>
        <Input type="text" name="name" label="Nome da receita" />
        <Textarea name="description" label="Fale sobre sua receita" />
        <label>
          Coloque uma imagem
          <Dropzone id="drop" onFileUploaded={setImageId} />
        </label>

        <label>
          Ingredientes
          <List>
            {recipe.ingredients[0] ? (
              recipe.ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <div>
                    <strong>{ingredient.quantity}</strong>
                    <strong>{ingredient.name}</strong>
                  </div>
                  <button
                    onClick={() => handleDeleteIngredient(ingredient.id)}
                    type="button"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </li>
              ))
            ) : (
              <li>
                <strong>Nenhum ingrediente registrado</strong>
              </li>
            )}
            <li>
              <input
                onChange={handleIngredientInputChange}
                type="text"
                name="quantity"
                value={newIgredient.quantity}
                placeholder="quantidade"
                autoComplete="off"
              />
              <input
                onChange={handleIngredientInputChange}
                type="text"
                name="name"
                value={newIgredient.name}
                placeholder="ingrediente"
                autoComplete="off"
              />
              <button type="button" onClick={handleCreateIngredient}>
                <FaPlus size={18} />
              </button>
            </li>
          </List>
        </label>

        <label>
          Passo a passo
          <List>
            {recipe.steps[0] ? (
              recipe.steps.map((step) => (
                <li key={step.id}>
                  <div>
                    <strong>{step.order}º</strong>
                    <strong>{step.instruction}</strong>
                  </div>
                  <button
                    onClick={() => handleDeleteStep(step.id)}
                    type="button"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </li>
              ))
            ) : (
              <li>
                <strong>Nenhuma instrução registrada</strong>
              </li>
            )}
            <li>
              <input
                onChange={handleStepInputChange}
                type="text"
                name="order"
                value={newStep.order}
                placeholder="ordem"
                autoComplete="off"
              />
              <input
                onChange={handleStepInputChange}
                type="text"
                name="instruction"
                value={newStep.instruction}
                placeholder="instrução"
                autoComplete="off"
              />
              <button onClick={handleCreateStep} type="button">
                <FaPlus size={18} />
              </button>
            </li>
          </List>
        </label>

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

EditRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

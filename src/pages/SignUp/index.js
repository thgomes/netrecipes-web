import React from 'react';
import { Link } from 'react-router-dom';

import chef from '../../assets/chef.png';

import { Container } from './styles';

function SignUp() {
  return (
    <Container>
      <img src={chef} alt="NetRecipes" />

      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </Container>
  );
}

export default SignUp;

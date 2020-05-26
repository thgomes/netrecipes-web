import React from 'react';
import api from '../../services/api';

// import { Container } from './styles';

function Home() {
  api.get('newrecipes');

  return <div />;
}

export default Home;

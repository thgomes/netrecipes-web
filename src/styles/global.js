import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 2s;
  color: ${(props) => props.theme.colors.text};
  -webkit-font-smoothing: antialiased;
  margin: 10px;
}

body, input, button, textarea {
  font: 14px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-family: 'Cormorant Upright', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
  }

  nav {
  }

  button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;

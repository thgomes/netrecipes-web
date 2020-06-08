import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme.colors.strongtext};
    }

    button {
      display: flex;
      align-items: center;
      background-color: #7159ff;
      color: #fff;
      border-radius: 4px;
      padding: 14px;
      border: none;
      transition: 0.2s;

      &:hover {
        background-color: ${darken(0.05, '#7159ff')};
      }

      svg {
        margin-right: 8px;
      }
    }
  }

  div {
    margin: 24px 0 24px;
    display: flex;
    justify-content: center;

    button {
      border: none;
      background: none;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: ${(props) => props.theme.colors.strongtext};
      transition: 0.2s;

      &:hover {
        color: #7159ff;
      }

      & + button {
        margin-left: 28px;
      }
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;

  h1 {
    color: ${(props) => props.theme.colors.strongtext};
  }

  img {
    max-width: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  a {
    margin: 5px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const RecipeList = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 20px;
  list-style: none;

  li {
    a {
      img {
        width: 100%;
        border-radius: 10px;
        background: ${(props) => props.theme.colors.secundary};
      }

      strong {
        margin-top: 10px;
        font-size: 18px;
        color: ${(props) => props.theme.colors.strongtext};
      }
    }
  }
`;

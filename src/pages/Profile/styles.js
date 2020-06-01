import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme.colors.strongtext};
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
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;

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

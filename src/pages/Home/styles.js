import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  margin-top: 40px;
  height: 360px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-family: 'Cormorant Upright', sans-serif;
    width: 400px;
    margin-left: 60px;

    h2 {
      font-size: 45px;
      color: #000505;
    }

    p {
      font-size: 24px;
      color: #000505;
    }
  }

  img {
    width: 360px;
  }
`;

export const SubTitle = styled.div`
  margin-top: 60px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.strongtext};
`;

export const RecipeList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 20px;
  list-style: none;

  li {
    a {
      div {
        background: ${(props) => props.theme.colors.secundary};
        height: 184px;
        border-radius: 10px;

        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      strong {
        margin-top: 10px;
        font-size: 18px;
        color: ${(props) => props.theme.colors.strongtext};
      }
    }
  }
`;

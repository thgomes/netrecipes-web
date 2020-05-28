import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  color: #000;
  margin-top: 40px;
  background-color: #dcb8cb;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-family: 'Cormorant Upright', sans-serif;
    width: 400px;
    margin-left: 60px;

    h2 {
      font-size: 45px;
    }

    p {
      font-size: 24px;
    }
  }

  img {
    width: 360px;
  }
`;

export const SubTitle = styled.div`
  margin-top: 60px;
  margin-bottom: 30px;
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

    img {
      height: 160px;
      border-radius: 10px;
      background: #dcb8cb;
    }

    strong {
      margin-top: 10px;
      font-size: 18px;
    }
  }
`;

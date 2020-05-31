import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 20px;
    color: ${(props) => props.theme.colors.strongtext};
  }

  img {
    margin-top: 20px;
    max-width: 600px;
    border-radius: 20px;
  }

  p {
    margin-top: 10px;
    max-width: 600px;
    font-size: 16px;
  }

  h2 {
    margin-top: 20px;
  }
`;

export const Content = styled.div``;

export const List = styled.div`
  font-size: 16px;
  margin-top: 10px;
  list-style: none;

  li {
    background-color: ${(props) => props.theme.colors.secundary};
    padding: 10px;
    border-radius: 10px;

    & + li {
      margin-top: 20px;
    }

    strong {
      margin: 0 20px;
    }
  }
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    margin-top: 20px;
    color: ${(props) => props.theme.colors.strongtext};
  }

  button {
    display: flex;
    align-items: center;
    background-color: #7159ff;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    border: none;
    transition: 0.2s;

    &:hover {
      background-color: ${darken(0.05, '#7159ff')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Content = styled.div`
  img {
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
  }

  p {
    margin-top: 10px;
    max-width: 600px;
    font-size: 16px;
  }

  h2 {
    color: ${(props) => props.theme.colors.strongtext};
    margin-top: 20px;
  }
`;

export const List = styled.div`
  font-size: 16px;
  margin-top: 10px;
  list-style: none;

  li {
    border: solid 1px ${(props) => props.theme.colors.primary};
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

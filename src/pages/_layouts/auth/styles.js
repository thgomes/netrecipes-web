import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 300px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      color: ${(props) => props.theme.colors.text};
      background: ${(props) => props.theme.colors.primary};
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      &::placeholder {
        color: #666;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7159ff;
      font-weight: bolder;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159ff')};
      }
    }

    a {
      color: ${(props) => props.theme.colors.text};
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

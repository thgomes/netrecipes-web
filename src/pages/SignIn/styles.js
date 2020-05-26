import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 260px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
    max-width: 360px;

    input {
      background: rgba(0, 0, 0);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #eee;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 15px 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ffff88;
      color: #222;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.3s;

      &:hover {
        background: ${darken(0.05, '#ffff88')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

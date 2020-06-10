import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 24px;

  h1 {
    color: ${(props) => props.theme.colors.strongtext};
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    label {
      font-weight: bold;
      font-size: 16px;
      margin-top: 24px;
      color: ${(props) => props.theme.colors.strongtext};

      input,
      textarea {
        width: 100%;
        color: ${(props) => props.theme.colors.text};
        background: ${(props) => props.theme.colors.primary};
        border: 0;
        border-radius: 4px;
        min-height: 44px;
        height: auto;
        padding: 0 15px;
        resize: vertical;

        &::placeholder {
          color: #666;
        }
      }
    }

    button {
      width: 24%;
      margin-left: auto;
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #7159ff;
      color: #fff;
      border-radius: 4px;
      padding: 14px;
      border: none;
      transition: 0.2s;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background-color: ${darken(0.05, '#7159ff')};
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;

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
    }

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

    textarea {
      padding-top: 12px;
    }
  }
`;

export const List = styled.div`
  font-size: 16px;
  margin-top: 10px;
  list-style: none;

  li {
    display: flex;
    align-items: center;

    div {
      background: ${(props) => props.theme.colors.primary};
      padding: 10px;
      width: 100%;
      border-radius: 4px;
    }

    div + button {
      border: none;
      background: none;
      margin-left: 16px;

      svg {
        color: ${(props) => props.theme.colors.text};

        &:hover {
          color: #fb6f91;
        }
      }
    }

    & + li {
      margin-top: 20px;
    }

    strong {
      margin: 0 20px;
    }

    input {
      color: ${(props) => props.theme.colors.text};
      background: ${(props) => props.theme.colors.primary};
      border: 0;
      border-radius: 4px;
      height: auto;
      min-height: 44px;
      max-width: 140px;
      padding: 0 15px;
      resize: vertical;

      & + input {
        width: 100%;
        margin-left: 20px;
        max-width: none;
      }
    }

    input + button {
      border: none;
      background: none;
      margin-left: 16px;

      svg {
        color: ${(props) => props.theme.colors.text};

        &:hover {
          color: #7159ff;
        }
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 24px;

  button {
    width: 40%;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 4px;
    padding: 14px;
    border: none;
    transition: 0.2s;

    svg {
      margin-right: 8px;
    }
  }

  .SubmitButton {
    background-color: #7159ff;

    &:hover {
      background-color: ${darken(0.05, '#7159ff')};
    }
  }

  .DeleteButton {
    background-color: #fb6f91;

    &:hover {
      background-color: ${darken(0.05, '#fb6f91')};
    }
  }
`;

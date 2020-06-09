import styled from 'styled-components';

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
    margin-top: 30px;

    label {
      font-weight: bold;
      font-size: 16px;
      margin-top: 10px;
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
        margin: 0 0 10px;
        resize: vertical;

        &::placeholder {
          color: #666;
        }
      }
    }
  }
`;

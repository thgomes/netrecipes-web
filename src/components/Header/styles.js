import styled from 'styled-components';

export const Container = styled.header`
  height: 64px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > a {
    font-family: 'Cormorant Upright', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.strongtext};
  }

  aside {
    display: flex;
    align-items: center;

    button {
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${(props) => props.theme.colors.strongtext};
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${(props) => props.theme.colors.text};
      transition: 0.2s;

      &:hover {
        color: #7159ff;
      }
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    border: solid 2px #7159ff;
    border-radius: 4px;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin: 4px;
    }
  }
`;

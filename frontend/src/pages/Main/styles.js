import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  div#container {
    width: 550px;
    height: 98%;

    border: 2px solid rgb(4, 211, 97);
    border-radius: 4px;
  }

  div#container:hover {
    transition: 1s ease;
    border-color: rgb(0, 78, 35);
  }
`;

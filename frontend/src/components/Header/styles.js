import styled from 'styled-components';

export const Container = styled.div`
  header {
      display: flex;
      justify-content: space-between;

      height: 100px;

      button.btn-card {
        width: 85px;
        height: 85px;
        background: rgb(4, 211, 97);

        border: 0;
        border-radius: 50px;

        margin: 10px;
        cursor: pointer;
      }

      button.btn-card:hover {
        background: rgb(0, 78, 35);
        transition: 1s ease;
      }
    }
`;

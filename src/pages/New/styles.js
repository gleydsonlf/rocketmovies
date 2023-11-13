import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    margin: 0 123px;
    padding-right: 10px;
    padding-bottom: 100px;
    margin-top: 40px;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .marcadores {
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};
    padding: 0;
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 24px;
    display: flex;
    align-items: center;
  }
`;

export const RowForm = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  > .excluir {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};
  }
`;

export const NewInput = styled.div`
  width: 50%;
`;

export const Form = styled.form`
  margin: 4px auto;

  > header {
    margin-bottom: 36px;

    h2 {
      font-size: 36px;
      font-weight: 400;
      margin: 24px 0;
    }

    a {
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;

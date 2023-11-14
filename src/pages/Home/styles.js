import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  grid-template-columns: 100%;
  grid-template-rows: 105px 90px auto;
  grid-template-areas:
    "header "
    "menu"
    " content";
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  margin: 24px 123px;
  padding-right: 10px;
  margin-top: 40px;
  padding-bottom: 100px;

  a {
    color: white;
  }
`;

export const Menu = styled.div`
  grid-area: menu;
  display: flex;
  justify-content: space-between;
  padding: 50px 123px 40px 123px;

  > h2 {
    font-weight: 300;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 0 none;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    width: 207px;
    height: 48px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

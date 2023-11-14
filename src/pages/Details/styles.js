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
    overflow-y: scroll;
    margin: 0 123px;
    padding-right: 10px;

    margin-top: 40px;
  }
`;

export const Content = styled.div`
  > a:first-child {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    padding-top: 24px;
    display: flex;
    align-items: center;
    gap: 20px;

    > img {
      width: 130px;
      height: 20px;
      margin-top: 5px;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 24px 0 40px 0;

    > svg {
      margin: 0 0px 0 15px;
    }

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }

  p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;

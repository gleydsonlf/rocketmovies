import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(255, 133, 155, 0.05);
  width: 100%;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 24px;

  > h2 {
    font-size: 24px;
    font-weight: bold;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 16px;
    margin: 15px 0;
    text-align: justify;
  }

  > img {
    margin-top: 8px;
  }
`;

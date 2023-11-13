import styled from "styled-components";

export const Container = styled.section`
  margin-top: 40px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
    font-weight: 400;
  }
`;

// background-color: ${({ theme }) => theme.COLORS.BLACK_900};

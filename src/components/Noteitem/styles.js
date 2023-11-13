import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, isNew }) => (isNew ? "transparent" : theme.COLORS.BACKGROUND_900)};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) => (isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none")};
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    height: 56px;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;
    border: none;

    &:placeholer {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

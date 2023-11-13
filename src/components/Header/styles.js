import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  height: 105px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;
`;

export const Brand = styled.div`
  display: flex;
  flex-grow: 1;
  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Search = styled.div`
  flex-grow: 10;
  margin: auto 64px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-grow: 1;
  width: 198px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
`;

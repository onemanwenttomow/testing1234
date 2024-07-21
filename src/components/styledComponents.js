import Link from "next/link";
import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor1};

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

export const PageContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1200px;
  max-width: 90vw;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 0 10px 50px 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #f5f5f5;
  transition: 0.3s;
  padding: 10px 20px;
  border-radius: var(--border-radius-large);
  font-size: large;

  &:hover {
    transform: translateY(-3px);
    transition: 0.3s;
  }
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.activeLinkColor};
  }
`;

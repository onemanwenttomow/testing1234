import Link from "next/link";
import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  flex: 1;

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
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

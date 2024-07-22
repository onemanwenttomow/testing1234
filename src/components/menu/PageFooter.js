import Link from "next/link";
import styled from "styled-components";
import { SocialMediaContainerFooter } from "@/components/menu/SocialMediaContainer";
import { StyledButton } from "@/components/styledComponents";

const FooterBackground = styled.footer`
  width: 100%;
  background-color: #ffb01e;
  color: #363537;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0 20px 0;
`;

const FooterContainerWrapper = styled.div`
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

const FooterLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  p,
  a {
    margin: 5px;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #363537;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export default function PageFooter() {
  return (
    <FooterBackground>
      <FooterContainerWrapper>
        <FooterContainer>
          <br />
          <SocialMediaContainerFooter />
        </FooterContainer>
        <FooterContainer>
          <h3>Kontakt</h3>
          <li>
            <FooterLink href={"/"}>erstens</FooterLink>
          </li>
          <li>
            <FooterLink href={"/"}>zweitens</FooterLink>
          </li>
          <li>
            <FooterLink href={"/"}>drittens</FooterLink>
          </li>
        </FooterContainer>
        <FooterContainer>
          <h3>Dreamfly-Events</h3>
          <li>
            <FooterLink href={"/"}>erstens</FooterLink>
          </li>
          <li>
            <FooterLink href={"/"}>zweitens</FooterLink>
          </li>
          <li>
            <FooterLink href={"/"}>drittens</FooterLink>
          </li>
        </FooterContainer>
        <FooterContainer>
          <h3>Infos</h3>
          <li>
            <FooterLink href={"/faq"}>FAQ</FooterLink>
          </li>
          <li>
            <FooterLink href={"/"}>zweitens</FooterLink>
          </li>
          <li>
            <FooterLink href={"/"}>drittens</FooterLink>
          </li>
        </FooterContainer>
        <FooterContainer>
          <h3>Newsletter</h3>
          <StyledButton>Abonnieren</StyledButton>
        </FooterContainer>
      </FooterContainerWrapper>
      <FooterLine>
        <p>© 2024 Dreamfly-Events UG</p>
        <FooterLink href={"/"}>Datenschutz</FooterLink>
        <FooterLink href={"/impressum"}>Impressum</FooterLink>
      </FooterLine>
    </FooterBackground>
  );
}

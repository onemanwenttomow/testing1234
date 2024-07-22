import Link from "next/link";
import styled from "styled-components";
import { SocialMediaContainerFooter } from "@/components/menu/SocialMediaContainer";

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
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
  gap: 15px;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    gap: 0;

    p {
      margin: 5px;
    }
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
          <li>erstens</li>
          <li>zweitens</li>
          <li>drittens</li>
        </FooterContainer>
        <FooterContainer>
          <h3>Dreamfly-Events</h3>
          <li>erstens</li>
          <li>zweitens</li>
          <li>drittens</li>
        </FooterContainer>
        <FooterContainer>
          <h3>Infos</h3>
          <Link href={"/faq"}>FAQ</Link>
          <li>zweitens</li>
          <li>drittens</li>
        </FooterContainer>
        <FooterContainer>
          <h3>Newsletter</h3>
          <button>Abonnieren</button>
        </FooterContainer>
      </FooterContainerWrapper>
      <FooterLine>
        <p>© 2024 Dreamfly-Events UG</p>
        <p>Datenschutz</p>
        <Link href={"/impressum"}>Impressum</Link>
      </FooterLine>
    </FooterBackground>
  );
}

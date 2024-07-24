import { useState } from "react";
import styled from "styled-components";

// Import Icons
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";
import IconArrowRight from "/public/assets/icons/arrow_right.svg";

/*
Aufruf der Component

      <TabTitle
        title="Wann ist die YumeKai?"
        content="Der Termin der YumeKai 2025 ist noch nicht bekannt."
      />
*/

const Container = styled.div`
  margin: 10px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  svg {
    fill: ${({ theme }) => theme.text};
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: ${({ $isopen, theme }) => ($isopen == 1 ? theme.primaryColor : theme.secondaryColor)};
`;

const Content = styled.div`
  margin-top: 10px;
  margin-left: 40px;
`;

export default function TabTitle({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleContent}>
        <Icon>{isOpen ? <IconArrowDown /> : <IconArrowRight />}</Icon>
        <Title $isopen={isOpen ? 1 : 0}>{title}</Title>
      </TitleContainer>
      {isOpen && <Content>{content}</Content>}
    </Container>
  );
}

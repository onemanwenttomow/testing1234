import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

/*
Aufruf der Component

<FlippingCard
  frontContent={
    <>
      <h3>Hier könnt ihr uns treffen:</h3>
      <ul>
        <li>09-11.08.2024 DGT in Aach am Bodensee</li>
      </ul>
    </>
  }
  backContent={
    <>
      <h3>Hier waren wir:</h3>
      <ul>
        <li>YaYuCo in Dachau</li>
      </ul>
    </>
  }
/>
*/

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  position: relative;
  height: ${({ $cardheight }) => `${$cardheight}px` || "auto"};

  &:hover > div {
    transform: rotateX(180deg);
  }
`;

const Card = styled.div`
  width: 90%;
  transform-style: preserve-3d;
  transition: all 1.2s cubic-bezier(0.7, -0.3, 0.3, 1.8);
  position: relative;
  transform-origin: center;
`;

const Side = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-large);
  padding: 20px;
  box-sizing: border-box;
`;

const Front = styled(Side)`
  background-color: ${({ theme, $frontColor }) =>
    $frontColor ? $frontColor : theme.secondaryColor};
  z-index: 2;
  transform: rotateX(0deg);
`;

const Back = styled(Side)`
  transform: rotateX(180deg);
  background-color: ${({ theme, $backColor }) => ($backColor ? $backColor : theme.primaryColor)};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1,
  h2,
  h3 {
    color: ${({ $textColor }) => ($textColor ? $textColor : "#363537")};
    margin: 10px;
  }
  ul {
    margin: 10px;
  }
  p,
  li {
    color: ${({ $textColor }) => ($textColor ? $textColor : "#363537")};
    font-size: large;
  }
`;

export default function FlippingCard({
  frontContent,
  backContent,
  frontColor,
  backColor,
  textColor,
}) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  const updateCardHeight = () => {
    const frontHeight = frontRef.current ? frontRef.current.offsetHeight : 0;
    const backHeight = backRef.current ? backRef.current.offsetHeight : 0;
    setCardHeight(Math.max(frontHeight, backHeight));
  };

  useEffect(() => {
    updateCardHeight();
    window.addEventListener("resize", updateCardHeight);
    return () => window.removeEventListener("resize", updateCardHeight);
  }, [frontContent, backContent]);

  return (
    <CardContainer $cardheight={cardHeight}>
      <Card>
        <Front $frontColor={frontColor}>
          <CardContent ref={frontRef} $textColor={textColor}>
            {frontContent}
          </CardContent>
        </Front>
        <Back $backColor={backColor}>
          <CardContent ref={backRef} $textColor={textColor}>
            {backContent}
          </CardContent>
        </Back>
      </Card>
    </CardContainer>
  );
}

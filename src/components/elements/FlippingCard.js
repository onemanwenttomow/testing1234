import styled from "styled-components";

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: ${({ $cardheight }) => $cardheight}px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  &:hover > div {
    transform: rotateX(180deg);
  }
`;

const Card = styled.div`
  width: 90%;
  height: 90%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;
  transform-origin: center;
`;

const Side = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-large);
`;

const Front = styled(Side)`
  z-index: 2;
`;

const Back = styled(Side)`
  transform: rotateX(180deg);
  background-color: ${({ theme }) => theme.primaryColor};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);

  h1,
  h2,
  h3 {
    color: #363537;
    margin: 10px;
  }
  ul {
    margin: 10px;
  }
  p,
  li {
    color: #363537;
    font-size: large;
  }
`;

export default function FlippingCard({ frontContent, backContent, cardHeight = 200 }) {
  return (
    <CardContainer $cardheight={cardHeight}>
      <Card>
        <Front>
          <CardContent>{frontContent}</CardContent>
        </Front>
        <Back>
          <CardContent>{backContent}</CardContent>
        </Back>
      </Card>
    </CardContainer>
  );
}

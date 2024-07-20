import styled from "styled-components";

const EllipseWrapper = styled.div`
  position: relative;
`;

const EllipseTop = styled.div`
  position: absolute;
  width: 100vw;
  height: 80px;
  background-color: ${({ $ellipsecolor, theme }) =>
    $ellipsecolor == 1 ? theme.secondaryColor : "var(--light-grey)"};
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-radius: 40% 50% 0 0;
  z-index: -1;
`;

const MainPart = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  background-color: ${({ $ellipsecolor, theme }) =>
    $ellipsecolor == 1 ? theme.secondaryColor : "var(--light-grey)"};
  z-index: -1;
`;

const EllipseBottom = styled.div`
  position: absolute;
  width: 100vw;
  height: 50px;
  background-color: ${({ $ellipsecolor, theme }) =>
    $ellipsecolor == 1 ? theme.secondaryColor : "var(--light-grey)"};
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border-radius: 0 0 30% 80%;
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  max-width: 90vw;
  margin: 40px auto;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  color: #363537;

  h1,
  h2,
  h3 {
    color: ${({ $ellipsecolor, theme }) => ($ellipsecolor == 1 ? "#363537" : theme.primaryColor)};
  }
`;

export default function ConvexBackground({ children, color = 1 }) {
  return (
    <EllipseWrapper>
      <EllipseTop $ellipsecolor={color} />
      <MainPart $ellipsecolor={color}>
        <Container>
          <Content $ellipsecolor={color}>{children}</Content>
        </Container>
      </MainPart>
      <EllipseBottom $ellipsecolor={color} />
    </EllipseWrapper>
  );
}

import styled from "styled-components";

const Container = styled.article`
  border-radius: var(--border-radius-large);
  background-color: #f9f9f9;
  width: 100%;
  background-color: ${({ $rectanglecolor, theme }) =>
    $rectanglecolor == 1 ? theme.secondaryColor : "var(--light-grey)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  div {
    width: calc(100% -20px);
    display: flex;
    flex-direction: column;
    align-items: ${({ $rectanglecenter }) => ($rectanglecenter == 1 ? "center" : "flex-start")};
  }

  p {
    width: 100%;
    text-align: ${({ $rectanglecenter }) => ($rectanglecenter == 1 ? "center" : "start")};
    color: #363537;
  }

  h1,
  h2,
  h3 {
    width: 100%;
    text-align: center;
    color: ${({ $rectanglecolor, theme }) =>
      $rectanglecolor == 1 ? "#363537" : theme.primaryColor};
  }
`;

export default function RectangleContainer({ color = 1, center = 0, children }) {
  return (
    <Container $rectanglecolor={color} $rectanglecenter={center}>
      <div>{children}</div>
    </Container>
  );
}

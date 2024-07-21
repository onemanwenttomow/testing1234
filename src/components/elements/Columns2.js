import styled from "styled-components";

/*
Aufruf der Component
mobile:   1 -> flex-direction column
          2 -> flex-direction row

      <Columns2
        left={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        right={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
      />
*/

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: ${({ $mobile }) => ($mobile == 1 ? "column" : "row")};
  }
`;

const Column = styled.div`
  width: calc(50% - 10px);

  @media (max-width: 800px) {
    width: ${({ $mobile }) => ($mobile == 1 ? "100%" : "calc(50% - 10px)")};
    margin-bottom: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Columns2({ left, right, mobile = 1 }) {
  return (
    <ColumnsWrapper $mobile={mobile}>
      <Column $mobile={mobile}>{left}</Column>
      <Column $mobile={mobile}>{right}</Column>
    </ColumnsWrapper>
  );
}

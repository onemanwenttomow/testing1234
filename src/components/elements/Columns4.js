import styled from "styled-components";

/*
Aufruf der Component

      <Columns4
        column1={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        column2={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        column3={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        column4={
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
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  width: calc(25% - 10px);
  margin-bottom: 20px;

  @media (max-width: 800px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }

  &:nth-child(odd) {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    &:nth-child(odd) {
      margin-right: 0;
    }

    &:nth-child(even) {
      margin-right: 10px;
    }
  }

  &:last-child,
  &:nth-last-child(2) {
    margin-bottom: 0;
  }
`;

export default function Columns4({ column1, column2, column3, column4 }) {
  return (
    <ColumnsWrapper>
      <Column>{column1}</Column>
      <Column>{column2}</Column>
      <Column>{column3}</Column>
      <Column>{column4}</Column>
    </ColumnsWrapper>
  );
}

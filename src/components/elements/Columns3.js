import styled from "styled-components";

/*
Aufruf der Component

      <Columns3
        left={
          <>
            <h2>Überschrift Links</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        center={
          <>
            <h2>Überschrift Mitte</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        right={
          <>
            <h2>Überschrift Rechts</h2>
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
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: space-around;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: calc(33.33% - 10px);
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    width: calc(50% - 10px);
    margin-bottom: 0px;
  }

  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
`;

export default function Columns3({ left, center, right }) {
  return (
    <ColumnsWrapper>
      <Column>{left}</Column>
      <Column>{center}</Column>
      <Column>{right}</Column>
    </ColumnsWrapper>
  );
}

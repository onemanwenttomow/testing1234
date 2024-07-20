import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: calc(50% - 10px);

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Columns2({ left, right }) {
  return (
    <ColumnsWrapper>
      <Column>{left}</Column>
      <Column>{right}</Column>
    </ColumnsWrapper>
  );
}

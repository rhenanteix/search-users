import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    & {
      grid-template-columns: 2fr 5fr;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

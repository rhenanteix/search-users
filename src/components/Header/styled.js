import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.bgAlt};
  width: 100%;
  max-width: 1280px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 5px;
  align-items: center;
  font-weight: 200;
  text-transform: uppercase;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    white-space: nowrap;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

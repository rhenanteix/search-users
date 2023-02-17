import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`;

export const Content = styled.div`
  padding: 16px 32px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
  }

  svg {
    font-size: 72px;
  }
`;

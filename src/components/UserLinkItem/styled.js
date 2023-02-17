import styled from 'styled-components';

export const UserLinkWrapper = styled.a`
  padding: 8px;
  background: ${({ theme }) => theme.bgAlt};
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${({ theme }) => theme.text};
  transition: 0.3s box-shadow ease, 0.3s color ease;

  svg {
    font-size: 28px;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 3px ${({ theme }) => theme.accent};
  }
`;

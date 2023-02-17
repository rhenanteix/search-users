import styled from 'styled-components';

export const RepoItemWrapper = styled.div`
  box-shadow: 0 0 2px #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: 0.3s box-shadow ease;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ theme }) => theme.bgAlt};

  p,
  h4,
  a {
    padding: 0;
    margin: 0;
  }

  h4,
  p {
    cursor: default;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    overflow: hidden;
  }

  a {
    opacity: 1;
  }

  a:hover {
    text-decoration: underline;
  }

  &:hover {
    box-shadow: 0 0 3px ${({ theme }) => theme.accent};
  }
`;

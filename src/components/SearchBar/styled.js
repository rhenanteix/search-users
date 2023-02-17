import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 4px;
  align-items: stretch;
  width: 100%;

  label {
    display: none;
  }

  input,
  button {
    border-radius: 4px;
    padding: 6px 8px;
    font-size: 1rem;
  }

  input {
    border: 1px solid #ccc;
    flex-grow: 1;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.accent};
      caret-color: ${({ theme }) => theme.accent};
    }
  }

  button {
    border: 1px solid ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentContent};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 4px ${({ theme }) => theme.accent};
    }
  }

  @media screen and (min-width: 768px) {
    & {
      max-width: 250px;
    }
  }

  button {
    border: none;
    padding: 6px 12px;
    cursor: pointer;
  }
`;

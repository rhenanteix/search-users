import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    & {
      position: sticky;
      top: 10px;
    }
  }
`;

export const UserPhotoWrapper = styled.div`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.bgAlt};
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  img {
    width: 30%;
    border-radius: 5px;
  }

  h2,
  p {
    padding: 0;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    & {
      flex-direction: column;
      gap: 4px;
    }

    img {
      width: 100%;
    }

    h2,
    p {
      text-align: center;
    }
  }
`;

export const UserSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types';

const UserLinkItem = ({ icon, linkUrl }) => {
  return (
    <S.UserLinkWrapper href={linkUrl} target='_blank' rel='noreferrer'>
      {icon}
    </S.UserLinkWrapper>
  );
};

UserLinkItem.propTypes = {
  icon: PropTypes.func.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default UserLinkItem;

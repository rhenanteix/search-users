import PropTypes from 'prop-types';
import * as S from './styled';

const UserDataItem = ({ title, content }) => {
  return (
    <S.UserDataItemWrapper>
      <span>{title}</span>
      <p>{content}</p>
    </S.UserDataItemWrapper>
  );
};

UserDataItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UserDataItem;

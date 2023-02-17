import * as S from './styled';
import PropTypes from 'prop-types';

const StatusCard = ({ message, icon }) => {
  return (
    <S.Wrapper>
      <S.Content>
        {icon}
        <p>{message}</p>
      </S.Content>
    </S.Wrapper>
  );
};

StatusCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default StatusCard;

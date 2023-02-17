import PropTypes from 'prop-types';
import * as S from './styled';

const RepoItem = ({ name, fullName, linkToRepo, description }) => {
  return (
    <S.RepoItemWrapper>
      <h4>{name}</h4>
      <a href={linkToRepo} target='_blank' rel='noopener noreferrer'>
        {fullName}
      </a>
      <p>{description}</p>
    </S.RepoItemWrapper>
  );
};

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  linkToRepo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RepoItem;

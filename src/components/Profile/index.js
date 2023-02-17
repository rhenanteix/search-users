import UserPanel from '../UserPanel';
import UserInfo from '../UserInfo';
import * as S from './styled';
import Repos from '../Repos';

const Profile = () => {
  return (
    <S.Wrapper>
      <div>
        <UserInfo />
      </div>
      <div>
        <UserPanel />
        <Repos />
      </div>
    </S.Wrapper>
  );
};

export default Profile;

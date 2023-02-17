import useGithub from '../../hooks/github-hooks';
import UserData from '../UserData';
import * as S from './styled';

const UserPanel = () => {
  const { githubState } = useGithub();
  const userData = [
    {
      title: 'Seguidores:',
      content: githubState.user.followers,
    },
    {
      title: 'Seguindo:',
      content: githubState.user.following,
    },
    {
      title: 'Gists:',
      content: githubState.user.public_gists,
    },
    {
      title: 'Repositórios:',
      content: githubState.user.public_repos,
    },
    {
      title: 'Localização:',
      content: !!githubState.user.location ? githubState.user.location : '-',
    },
    {
      title: 'Empresa:',
      content: !!githubState.user.company ? githubState.user.githubState : '-',
    },
  ];
  return (
    <S.UserDataWrapper>
      {userData.map((item, i) => (
        <UserData title={item.title} content={item.content} key={i} />
      ))}
    </S.UserDataWrapper>
  );
};

export default UserPanel;

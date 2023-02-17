import Header from '../Header';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import UserNotFound from '../UserNotFound';
import LoadingCard from '../LoadingCard';
import Welcome from '../Welcome';

const Layout = ({ children }) => {
  const { githubState } = useGithub();
  return (
    <>
      <Header />
      <S.Main>
        {githubState.notUsedYet ? (
          <Welcome />
        ) : githubState.hasUser ? (
          githubState.loading ? (
            <LoadingCard />
          ) : (
            children
          )
        ) : (
          <UserNotFound />
        )}
      </S.Main>
    </>
  );
};

export default Layout;

import { Envelope, Github, Globe, Twitter } from 'react-bootstrap-icons';
import useGithub from '../../hooks/github-hooks';
import UserLinkItem from '../UserLinkItem';
import * as S from './styled';

const UserInfo = () => {
  const { githubState } = useGithub();
  const links = [
    {
      icon: <Envelope alt='Send email' title='Send email' />,
      linkUrl: !!githubState.user.email
        ? `mailto:${githubState.user.email}`
        : false,
    },
    {
      icon: <Github alt='Visit github profile' title='Visit github profile' />,
      linkUrl: githubState.user.html_url,
    },
    {
      icon: <Globe alt='Visit website' title='Visit website' />,
      linkUrl: githubState.user.blog,
    },
    {
      icon: (
        <Twitter alt='Visit twitter profile' title='Visit twitter profile' />
      ),
      linkUrl: !!githubState.user.twitter_username
        ? `https://twitter.com/${githubState.user.twitter_username}`
        : false,
    },
  ];
  return (
    <S.UserInfoWrapper>
      <S.UserPhotoWrapper>
        <img src={githubState.user.avatar_url} alt='User profile' />
        <div>
          {githubState.user.name ? <h2>{githubState.user.name}</h2> : null}
          <p>{githubState.user.login}</p>
        </div>
      </S.UserPhotoWrapper>
      <S.UserSocialLinks>
        {links.map((linkItem, i) => {
          if (!!linkItem.linkUrl) {
            return (
              <UserLinkItem
                linkUrl={linkItem.linkUrl}
                icon={linkItem.icon}
                key={i}
              />
            );
          }
          return null;
        })}
      </S.UserSocialLinks>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;

import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const SearchBar = () => {
  const [usernameForSearch, setUsernameForSearch] = useState('');

  const { getUser } = useGithub();

  const submitGetUser = (e) => {
    e.preventDefault();
    if (!usernameForSearch.length) return;
    return getUser(usernameForSearch);
  };
  return (
    <S.SearchForm onSubmit={submitGetUser}>
      <label htmlFor='searchInput'>Buscar</label>
      <input
        type='search'
        name='search'
        id='searchInput'
        value={usernameForSearch}
        onChange={(e) => {
          setUsernameForSearch(e.target.value);
        }}
        required
        minLength='1'
      />
      <button type='submit'>
        <Search />
      </button>
    </S.SearchForm>
  );
};

export default SearchBar;

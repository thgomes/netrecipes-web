import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaMoon, FaSun } from 'react-icons/fa';

import { changeThemeRequest } from '../../store/modules/theme/actions';

import { Container, Content, Profile } from './styles';

function Header() {
  const theme = useSelector((state) => state.theme.theme);
  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(changeThemeRequest());
  }

  return (
    <Container>
      <Content>
        <Link to="/home">NetRecipes</Link>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/285/eg.png'
              }
              alt={profile.name}
            />
          </Profile>

          <button type="button" onClick={handleOnClick}>
            {theme.title === 'dark' ? (
              <FaMoon color="#fff" size={20} />
            ) : (
              <FaSun color="#242423" size={20} />
            )}
          </button>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { name } = await getUser();
      console.log(name);
      setUser(name);
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <header data-testid="header-component">
      {isLoading ? <Loading /> : <h1 data-testid="header-user-name">{user}</h1>}
      <nav>
        <Link data-testid="link-to-search" to="/search">
          Pesquisa
        </Link>
        <Link data-testid="link-to-favorites" to="/favorites">
          Favoritos
        </Link>
        <Link data-testid="link-to-profile" to="/profile">
          Perfil
        </Link>
      </nav>
    </header>
  );
}

export default Header;

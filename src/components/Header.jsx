import React, { useState, useEffect } from 'react';
import { getUser } from '../services/userAPI';

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
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <h1 data-testid="header-user-name">{user}</h1>
      )}
    </header>
  );
}

export default Header;

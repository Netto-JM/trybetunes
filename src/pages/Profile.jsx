import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

function Profile() {
  const [userDescription, setUserDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');

  const fetchUser = async () => {
    const resolve = await getUser();
    const { description, email, image, name } = resolve;
    setUserDescription(description);
    setUserEmail(email);
    setUserImage(image);
    setUserName(name);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div data-testid="page-profile">
      <Header />
      <img src={ userImage } alt={ userName } data-testid="profile-image" />
      <h2>Nome</h2>
      <p>{userName}</p>
      <h2>E-mail</h2>
      <p>{userEmail}</p>
      <h2>Descrição</h2>
      <p>{userDescription}</p>
      <Link to="/profile/edit">
        Editar perfil
      </Link>
    </div>
  );
}

export default Profile;

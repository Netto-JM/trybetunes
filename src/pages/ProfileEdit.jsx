import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

function ProfileEdit() {
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
    <div data-testid="page-profile-edit">
      <Header />
    </div>
  );
}

export default ProfileEdit;

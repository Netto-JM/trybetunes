import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';

function ProfileEdit() {
  const [userDescription, setUserDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory();

  const fetchUser = async () => {
    const resolve = await getUser();
    const { description, email, image, name } = resolve;
    setUserDescription(description);
    setUserEmail(email);
    setUserImage(image);
    setUserName(name);
  };

  const changeHandler = ({ target: { name, value } }) => {
    switch (name) {
    case 'image':
      setUserImage(value);
      break;
    case 'name':
      setUserName(value);
      break;
    case 'email':
      setUserEmail(value);
      break;
    case 'description':
      setUserDescription(value);
      break;
    default:
      break;
    }
  };

  const clickHandler = () => {
    const updatedUser = {
      name: userName,
      email: userEmail,
      image: userImage,
      description: userDescription,
    };
    updateUser(updatedUser);
    history.push('/profile');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    setIsDisabled(!(userDescription && userEmail && userImage && userName));
  }, [userDescription, userEmail, userImage, userName]);

  return (
    <div data-testid="page-profile-edit">
      <Header />
      <form>
        <img src={ userImage } alt={ userName } data-testid="profile-image" />
        <input
          data-testid="edit-input-image"
          type="text"
          name="image"
          value={ userImage }
          onChange={ changeHandler }
        />
        <input
          data-testid="edit-input-name"
          type="text"
          name="name"
          value={ userName }
          onChange={ changeHandler }
        />
        <input
          data-testid="edit-input-email"
          type="email"
          name="email"
          value={ userEmail }
          onChange={ changeHandler }
        />
        <input
          data-testid="edit-input-description"
          type="text"
          name="description"
          value={ userDescription }
          onChange={ changeHandler }
        />
        <button
          data-testid="edit-button-save"
          type="button"
          disabled={ isDisabled }
          onClick={ clickHandler }
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;

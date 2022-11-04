import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../services/userAPI';

const clickHandler = async (event, name, history, setIsLoading) => {
  setIsLoading(true);
  event.preventDefault();
  await createUser({ name });
  setIsLoading(false);
  history.push('/search');
};

function Login() {
  const [name, setName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsDisable(name.length <= 2);
  }, [name]);

  return (
    <div>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <form data-testid="page-login">
          <input
            type="text"
            placeholder="Nome"
            data-testid="login-name-input"
            value={ name }
            onChange={ ({ target: { value } }) => { setName(value); } }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isDisable }
            onClick={ (event) => { clickHandler(event, name, history, setIsLoading); } }
          >
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;

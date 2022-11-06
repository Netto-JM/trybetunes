import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

function Login() {
  const [name, setName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const clickHandler = async () => {
    setIsLoading(true);
    await createUser({ name });
    setIsLoading(false);
    history.push('/search');
  };

  useEffect(() => {
    setIsDisable(name.length <= 2);
  }, [name]);

  return (
    <div>
      {isLoading ? (
        <Loading />
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
            onClick={ clickHandler }
          >
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;

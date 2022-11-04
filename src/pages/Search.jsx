import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function Search() {
  const [artistName, setArtistName] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    setIsDisable(artistName.length < 2);
  }, [artistName]);

  return (
    <div data-testid="page-search">
      <Header />
      <input
        type="text"
        placeholder="Nome do Artista"
        data-testid="search-artist-input"
        value={ artistName }
        onChange={ ({ target: { value } }) => { setArtistName(value); } }
      />
      <button
        type="button"
        data-testid="search-artist-button"
        disabled={ isDisable }
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Search;

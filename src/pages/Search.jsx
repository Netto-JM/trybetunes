import React, { useState, useEffect } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [gotResults, setGotResults] = useState(false);

  const clickHandler = async () => {
    setSearchInput('');
    setIsLoading(true);
    const results = await searchAlbumsAPI(searchInput);
    setSearchResults(results);
    setArtistName(searchInput);
    setGotResults(true);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsDisable(searchInput.length < 2);
  }, [searchInput]);

  const showResults = gotResults && !isLoading;

  return (
    <div data-testid="page-search">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <form>
          <input
            type="text"
            placeholder="Nome do Artista"
            data-testid="search-artist-input"
            value={ searchInput }
            onChange={ ({ target: { value } }) => { setSearchInput(value); } }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ isDisable }
            onClick={ clickHandler }
          >
            Pesquisar
          </button>
        </form>
      )}
      {showResults && (
        <AlbumsList albumtList={ searchResults } artistName={ artistName } />
      )}
    </div>
  );
}

export default Search;

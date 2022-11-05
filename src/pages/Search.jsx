import React, { useState, useEffect } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const clickHandler = async (artistName, stateSetters) => {
  const [
    setIsLoading,
    setArtistName,
    setSearchResults,
    setGotResults,
    setArtistNameAfterClick,
  ] = stateSetters;
  setArtistName('');
  setIsLoading(true);
  const results = await searchAlbumsAPI(artistName);
  setSearchResults(results);
  setArtistNameAfterClick(artistName);
  setGotResults(true);
  setIsLoading(false);
};

function Search() {
  const [artistName, setArtistName] = useState('');
  const [artistNameAfterClick, setArtistNameAfterClick] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [gotResults, setGotResults] = useState(false);

  useEffect(() => {
    setIsDisable(artistName.length < 2);
  }, [artistName]);

  const clkStateSetters = [
    setIsLoading,
    setArtistName,
    setSearchResults,
    setGotResults,
    setArtistNameAfterClick,
  ];

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
            value={ artistName }
            onChange={ ({ target: { value } }) => { setArtistName(value); } }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ isDisable }
            onClick={ () => { clickHandler(artistName, clkStateSetters); } }
          >
            Pesquisar
          </button>
        </form>
      )}
      {showResults && (
        <AlbumsList albumtList={ searchResults } artistName={ artistNameAfterClick } />
      )}
    </div>
  );
}

export default Search;

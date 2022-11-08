import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

function Favorites() {
  const [isLoading, setIsLoading] = useState(false);
  const [songList, setSongList] = useState([]);

  const fetchFavorites = async () => {
    setIsLoading(true);
    const requestResult = await getFavoriteSongs();
    setSongList(requestResult);
    setIsLoading(false);
    console.log('here: ', requestResult);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const removeFavorite = async (song) => {
    setIsLoading(true);
    await removeSong(song);
    await fetchFavorites();
    setIsLoading(false);
  };

  const songCards = songList.map((song) => (
    <MusicCard
      key={ song.trackId }
      song={ song }
      toggleFavorite={ removeFavorite }
    />
  ));

  return (
    <div data-testid="page-favorites">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          { songCards }
        </div>
      )}
    </div>
  );
}

export default Favorites;

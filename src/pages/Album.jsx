import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

function Album(props) {
  const { match } = props;
  const { params: { id } } = match;

  const [albumInfo, setAlbumInfo] = useState({});
  const [songList, setSongList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFavorites = async () => {
    const requestResult = await getFavoriteSongs();
    const favoriteSongs = requestResult.map((song) => song.trackId);
    setCheckList(favoriteSongs);
  };

  const toggleFavorite = async (song, checked) => {
    setIsLoading(true);
    if (checked) await addSong(song);
    else await removeSong(song);
    await fetchFavorites();
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchMusic = async () => {
      const requestResult = await getMusics(id);
      setAlbumInfo(requestResult[0]);
      setSongList([...requestResult.slice(1)]);
    };

    fetchMusic();
    fetchFavorites();
  }, [id]);

  const songCards = songList.map((song) => (
    <MusicCard
      key={ song.trackId }
      song={ song }
      toggleFavorite={ toggleFavorite }
      isChecked={ checkList.includes(song.trackId) }
    />
  ));

  return (
    <div data-testid="page-album">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AlbumCard album={ albumInfo } />
          { songCards }
        </>
      )}
    </div>
  );
}

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;

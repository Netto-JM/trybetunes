import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';

function Album(props) {
  const { match } = props;
  const { params: { id } } = match;

  const [albumInfo, setAlbumInfo] = useState({});
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const requestResult = await getMusics(id);
      setAlbumInfo(requestResult[0]);
      setSongList([...requestResult.slice(1)]);
    };

    fetchMusic();
  }, [id]);

  const songCards = songList.map((song) => (
    <MusicCard key={ song.trackId } song={ song } />
  ));

  return (
    <div data-testid="page-album">
      <Header />
      <AlbumCard album={ albumInfo } />
      { songCards }
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

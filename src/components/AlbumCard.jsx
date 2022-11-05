import React from 'react';
import PropTypes from 'prop-types';

function AlbumCard(props) {
  const { album } = props;
  return (
    <div>{album.collectionName}</div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default AlbumCard;

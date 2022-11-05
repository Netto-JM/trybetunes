import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AlbumCard(props) {
  const { album } = props;
  const { collectionName, collectionId, artworkUrl100, artistName } = album;
  return (
    <div>
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img src={ artworkUrl100 } alt={ collectionName } />
      </Link>
      <p data-testid="album-name">{collectionName}</p>
      <p data-testid="artist-name">{artistName}</p>
    </div>
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

import React from 'react';
import PropTypes from 'prop-types';

function MusicCard() {
  return (
    <div>MusicCard</div>
  );
}

MusicCard.propTypes = {
  album: PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    artistViewUrl: PropTypes.string.isRequired,
    artworkUrl30: PropTypes.string.isRequired,
    artworkUrl60: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionCensoredName: PropTypes.string.isRequired,
    collectionExplicitness: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    collectionViewUrl: PropTypes.number.isRequired,
    country: PropTypes.number.isRequired,
    currency: PropTypes.number.isRequired,
    discCount: PropTypes.number.isRequired,
    discNumber: PropTypes.number.isRequired,
    isStreamable: PropTypes.bool.isRequired,
    kind: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    primaryGenreName: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCensoredName: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    trackNumber: PropTypes.number.isRequired,
    trackPrice: PropTypes.number.isRequired,
    trackTimeMillis: PropTypes.number.isRequired,
    trackViewUrl: PropTypes.string.isRequired,
    wrapperType: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;

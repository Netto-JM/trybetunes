import React from 'react';
import PropTypes from 'prop-types';
// import Loading from './Loading';

function MusicCard(props) {
  const { song, toggleFavorite, isChecked } = props;
  const { trackName, previewUrl, trackId } = song;

  // const [isLoading, setIsLoading] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  const changeHandler = async ({ target: { checked } }) => {
    // setIsLoading(true);
    // setIsChecked((prevState) => !prevState);
    await toggleFavorite(checked, song);
    // setIsLoading(false);
  };

  return (
    <div>
      <p>{trackName}</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
      </audio>
      <label htmlFor="favorite" data-testid={ `checkbox-music-${trackId}` }>
        Favorita
        <input
          type="checkbox"
          name="favorite"
          checked={ isChecked }
          onChange={ changeHandler }
        />
      </label>
    </div>
  );
}

MusicCard.propTypes = {
  song: PropTypes.shape({
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
    collectionViewUrl: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
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
  toggleFavorite: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default MusicCard;

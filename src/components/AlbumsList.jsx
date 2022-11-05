import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

function AlbumsList(props) {
  const { albumtList, artistName } = props;
  const albumsResultText = `Resultado de álbuns de: ${artistName}`;
  const albumCards = albumtList.map((album) => (
    <AlbumCard key={ album.collectionId } album={ album } />
  ));
  return (
    <div>
      {albumtList[0] ? (
        <>
          <p>{albumsResultText}</p>
          {albumCards}
        </>
      ) : (
        <p>Nenhum álbum foi encontrado é exibida</p>
      )}
    </div>
  );
}

AlbumsList.propTypes = {
  artistName: PropTypes.string.isRequired,
  albumtList: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  })).isRequired,
};

export default AlbumsList;

import { GalleryItem } from '../GalleryItem/GalleryItem';
import * as SC from './Gallery.styled';
import PropTypes from 'prop-types';

export const Gallery = ({ array, deleteMovie, toggleWatched, openModal }) => {
  return (
    <SC.Ul>
      {array.map(({ title, poster, vote, id, watched }) => {
        return (
          <GalleryItem
            id={id}
            title={title}
            poster={poster}
            vote={vote}
            key={id}
            watched={watched}
            deleteMovie={deleteMovie}
            toggleWatched={toggleWatched}
            openModal={openModal}
          />
        );
      })}
    </SC.Ul>
  );
};

Gallery.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      vote: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      watched: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

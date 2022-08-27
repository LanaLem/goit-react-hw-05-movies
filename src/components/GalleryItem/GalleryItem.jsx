import PropTypes from 'prop-types';
import { Box } from '../../constants';
import * as SC from './GalleryItem.styled';

export const GalleryItem = ({
  title,
  poster,
  vote,
  id,
  watched,
  deleteMovie,
  toggleWatched,
  openModal,
}) => {
  return (
    <SC.Li id={id}>
      <SC.H2>{title}</SC.H2>
      <SC.Image src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <Box mb={2}>
        <SC.TextSpan>Votes: </SC.TextSpan>
        {vote}
      </Box>
      <Box mb={2}>
        <SC.TextSpan>Watched: </SC.TextSpan>
        <span onClick={() => toggleWatched(id)}>{watched.toString()}</span>
      </Box>
      <div>
        <SC.Button type="button" onClick={() => deleteMovie(id)}>
          Delete
        </SC.Button>
        <SC.Button type="button" onClick={() => openModal(poster)}>
          Show poster
        </SC.Button>
      </div>
    </SC.Li>
  );
};

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  watched: PropTypes.bool.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

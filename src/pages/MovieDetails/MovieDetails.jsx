import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getOneMovie } from '../../servises/api';
import { parser } from '../../helpers/parser';
import { Box } from '../../constants/Box';
import * as SC from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getOneMovie(movieId).then(data => {
      setMovie(data.data);
      setGenres(parser(data.data.genres));
    });
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <SC.Link to={location.state?.from ?? '/movies'}>Back</SC.Link>

      <Box display="flex" textAlign="center" p={4}>
        <SC.Img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div>
          <SC.H2>{movie.title}</SC.H2>
          <SC.P>
            <SC.Span>User score: </SC.Span>
            {Math.round(movie.vote_average * 10)}%
          </SC.P>
          <SC.P>
            <SC.Span>Tagline: </SC.Span>
            {movie.tagline}
          </SC.P>
          <SC.P>
            <SC.Span>Synopsis: </SC.Span>
            {movie.overview}
          </SC.P>
          <SC.P>
            <SC.Span>Genres: </SC.Span>
            {genres}
          </SC.P>
        </div>
      </Box>
      <Box as="ul" display="flex" justifyContent="center" mb={3}>
        <li>
          <SC.Link to="cast" state={{ from: location.state.from }}>
            Cast
          </SC.Link>
        </li>
        <li>
          <SC.Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </SC.Link>
        </li>
      </Box>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

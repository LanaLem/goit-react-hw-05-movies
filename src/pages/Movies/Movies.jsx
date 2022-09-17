import { useState, useEffect } from 'react';
import { getSearch } from '../../servises/api';
import { cleanedArray } from '../../helpers/cleanedArray ';
import { Box } from '../../constants/Box';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('search') ?? '';

  useEffect(() => {
    if (!searchParam) return;

    getSearch(searchParam, page)
      .then(data => {
        setStatus(Status.PENDING);
        const movies = data.data.results;
        const totalPages = data.data.total_pages;

        if (movies.lenght < 0) {
          setStatus(Status.REJECTED);
          return toast('Немає фільмів за Вашим запитом');
        }

        if (totalPages < page) {
          return setStatus(Status.REJECTED);
        }

        setMovies(prevState => [...prevState, ...cleanedArray(movies)]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast(error);
      });
  }, [page, searchParam]);

  const handleIncrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  const changeSearch = value => {
    setSearchParams(value !== '' ? { search: value.trim().toLowerCase() } : {});
    setPage(1);
    setMovies([]);
    setStatus(Status.IDLE);
  };

  if (!movies) return;

  return (
    <>
      <Searchbar changeSearch={changeSearch} search={searchParam} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={4}
      >
        {status === Status.PENDING && <Loader />}
        <Gallery array={movies} />
        {status === Status.RESOLVED && movies.length % 20 === 0 && (
          <Button func={handleIncrementPage} text="Load more" type="button" />
        )}
      </Box>
    </>
  );
};

export default Movies;

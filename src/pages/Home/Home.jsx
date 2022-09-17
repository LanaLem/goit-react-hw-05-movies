import { useState, useEffect } from 'react';
import { getMovies } from '../../servises/api';
import { cleanedArray } from '../../helpers/cleanedArray ';
import { Box } from '../../constants/Box';
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    const fetchMovies = page => {
      getMovies(page)
        .then(data => {
          setStatus(Status.PENDING);
          const totalPages = data.data.total_pages;
          if (totalPages < page) return setStatus(Status.REJECTED);

          setMovies(prevState => [
            ...prevState,
            ...cleanedArray(data.data.results),
          ]);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          toast(error);
        });
    };

    fetchMovies(page);
  }, [page]);

  const handleIncrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  if (!movies) return;

  return (
    <>
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

export default Home;

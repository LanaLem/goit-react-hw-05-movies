import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../servises/api';
import  Loader  from 'components/Loader/Loader';
import Template from '../../constants/TemplateActor.webp';
import Button from '../Button/Button';
import * as SC from './Reviews.styled';
import { toast } from 'react-toastify';
import { Box } from '../../constants/Box';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    getReview(movieId, page)
      .then(data => {
        setStatus(Status.PENDING);
        const totalPages = data.data.total_pages;
        if (totalPages < page) return setStatus(Status.REJECTED);

        setReviews(data.data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast(error);
      });
  }, [movieId, page]);

  const handleIncrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  if (!reviews) return <p>Sorry, there are no reviews :(</p>;

  return (
    <>
      <Box as="ul" p={4}>
        {status === Status.PENDING && <Loader />}
        {reviews.map(
          ({
            author_details: { avatar_path },
            content,
            created_at,
            updated_at,
            id,
            author,
          }) => {
            return (
              <SC.Li key={id}>
                <div>
                  <SC.Img
                    src={
                      avatar_path
                        ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                        : Template
                    }
                    alt="author"
                  />
                </div>

                <div>
                  <p>
                    <SC.Span>date:</SC.Span>
                    {new Date(created_at).toLocaleDateString('en-GB')}
                  </p>
                  <p>
                    <SC.Span>author:</SC.Span> {author}
                  </p>
                  <p>
                    <SC.Span>review:</SC.Span> {content}
                  </p>
                  <p>
                    <SC.Span>update:</SC.Span>{' '}
                    {new Date(updated_at).toLocaleDateString('en-GB')}
                  </p>
                </div>
              </SC.Li>
            );
          }
        )}
      </Box>
      {status === Status.RESOLVED && reviews.length % 20 === 0 && (
        <Button func={handleIncrementPage} text="Load more" type="button" />
      )}
    </>
  );
};

export default Reviews;

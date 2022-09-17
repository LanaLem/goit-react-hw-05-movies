import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../servises/api';
import { Box } from '../../constants/Box';
import Template from '../../constants/TemplateActor.webp';
import * as SC from './Cast.styled';
import { toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  const [crew, setCrew] = useState('');

  useEffect(() => {
    getCast(movieId)
      .then(data => {
        setCast(data.data.cast);
        setCrew(data.data.crew);
      })
      .catch(error => {
        toast(error);
      });
  }, [movieId]);

  if (!cast || !crew) return;

  return (
    <>
      <div>
        <SC.H3>Cast:</SC.H3>
        {cast.length <= 0 && <p>Sorry, there are no info :(</p>}
        <SC.Ul>
          {cast.map(({ credit_id, name, character, profile_path }) => {
            return (
              <SC.Li key={credit_id}>
                <SC.Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : Template
                  }
                  alt={name}
                />
                <Box p={2}>
                  <p>
                    <SC.Span>Actor: </SC.Span>
                    {name}
                  </p>
                  <p>
                    <SC.Span>Character: </SC.Span>
                    {character}
                  </p>
                </Box>
              </SC.Li>
            );
          })}
        </SC.Ul>
      </div>

      <div>
        <SC.H3>Crew:</SC.H3>
        {crew.length <= 0 && <p>Sorry, there are no info :(</p>}
        <SC.Ul>
          {crew.map(({ credit_id, name, job, profile_path }) => {
            return (
              <SC.Li key={credit_id}>
                <SC.Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : Template
                  }
                  alt={name}
                />
                <p>
                  <SC.Span>{job}</SC.Span>: {name}
                </p>
              </SC.Li>
            );
          })}
        </SC.Ul>
      </div>
    </>
  );
};
export default Cast;

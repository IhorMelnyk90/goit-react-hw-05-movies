import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCredits } from 'Api/requests';

import defaultIm from './default.jpg';
import { CastList, CastItem, CastImg, CastText } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await getCredits(movieId);
        setCast(cast);
      } catch (error) {
        alert('Sorry, cast not found');
      }
    }
    fetchCast();
  }, [movieId]);

  const poster = `https://image.tmdb.org/t/p/w200`;

  return (
    <div>
      {cast && (
        <CastList>
          {cast.cast.length > 0 ? (
            cast.cast.map(({ id, profile_path, name, character }) => (
              <CastItem key={id}>
                <CastImg
                  src={profile_path ? poster + profile_path : defaultIm}
                  alt={name}
                />
                <CastText>{name}</CastText>
                <p>Character: {character ? character : 'Without character'}</p>
              </CastItem>
            ))
          ) : (
            <p>Information not found</p>
          )}
        </CastList>
      )}
    </div>
  );
};

export default Cast;

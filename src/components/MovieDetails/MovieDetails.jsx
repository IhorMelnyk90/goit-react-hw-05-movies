import {
  useParams,
  useLocation,  
  Link,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from 'Api/requests';

import Loader from 'components/Loader';
import {
  LinkBox,
  Container,
  Poster,
  List,
  Item,
  Title2,
  Title3,
  GenreBox,
  MovieInfoBox,
  MovieInfo,
  MovieInfoLink,
  MovieNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const movieId = useParams();
  const idMovie = Object.values(movieId)[0];
  const location = useLocation();
  const goBackUrl = location?.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movie = await getDetails(idMovie);
        setMovie(movie);
      } catch (error) {
        alert('Movie is not found');
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [idMovie]);

  const defaultPoster = `https://i.pinimg.com/200x/e4/71/1e/fea9bd6cc64d250f3b3bb2ecec82173d.jpg`;

  return (
    <div>
      {loading && <Loader />}
      <LinkBox>
        <Link to={goBackUrl}>Go back</Link>
      </LinkBox>
      {movie && (
        <div>
          <Container>
            <Poster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
            />
            <List>
              <Item>
                <Title2>{movie.title}</Title2>
                <p>
                  Rating:
                  {movie.vote_average
                    ? movie.vote_average
                    : 'No rating for that movie'}
                </p>
              </Item>
              <Item>
                <Title3>Overview</Title3>
                {movie.overview ? (
                  <p>{movie.overview}</p>
                ) : (
                  <p>There is no overview for that movie</p>
                )}
              </Item>
              <Item>
                <Title3>Genres</Title3>
                <GenreBox>
                  {movie.genres.length > 0 ? (
                    <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                  ) : (
                    <p>No genres found</p>
                  )}
                </GenreBox>
              </Item>
            </List>
          </Container>
          <MovieInfoBox>
            <MovieInfo>Additional information</MovieInfo>
            <ul>
              <MovieInfoLink>
                <MovieNavLink
                  to={`/movies/${movie.id}/cast`}
                  state={{ from: goBackUrl }}
                >
                  Cast
                </MovieNavLink>
              </MovieInfoLink>
              <MovieInfoLink>
                <MovieNavLink
                  to={`/movies/${movie.id}/reviews`}
                  state={{ from: goBackUrl }}
                >
                  Reviews
                </MovieNavLink>
              </MovieInfoLink>
            </ul>
          </MovieInfoBox>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;

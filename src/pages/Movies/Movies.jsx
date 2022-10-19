import { useState, useEffect } from 'react';
import { searchMovies } from 'Api/requests';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const currentName = searchParams.get('findFilm');

  async function searchFilms(query) {
    if (!query) {
      console.log('Opps, bad request');
      return;
    }
    setLoading(true);
    try {
      const movie = await searchMovies(query);
      if (movie.length === 0) {
        alert('Sorry, film not found');
        return;
      }
      setMovie(movie);
    } catch (error) {
      alert('Sorry, film not found... :-( try again');
    } finally {
      setLoading(false);
    }
  }

  const searchForm = (query) => {
    setSearchParams({ findFilm: query });
    searchFilms(query);
  };

  useEffect(() => {
    if (currentName) {
      searchFilms(currentName);
    }
  }, [currentName]);

  return (
    <div>
      <SearchForm onSubmit={searchForm} />
      {loading && <Loader />}
      {movie && (
        <ul>
          {movie.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default Movies;
import { useState, useEffect } from 'react';
import { getTrending } from 'Api/requests';
import Loader from 'components/Loader';
import {TrendingUl, TrendingLi, TrendingLink, TrendingTitle} from './HomePage.styled'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trendingMovies = async () => {
      setLoading(true);
      try {
        const trending = await getTrending();
        setMovies(trending);
        // console.log(trending);
      } catch (error) {
        setError(error);
        // console.log(error)
      } finally {
        setLoading(false);
      }
    };
    trendingMovies();
  }, []);

  return (
    <div>
      <TrendingTitle>Trending today</TrendingTitle>
      {loading && <Loader />}
      {!error && (
        <TrendingUl>
          {movies.map(({ id, title }) => (
            <TrendingLi key={id}>
              <TrendingLink to={`/movies/${id}`}>{title}</TrendingLink>
            </TrendingLi>
          ))}
        </TrendingUl>
      )}
    </div>
  );
};

export default HomePage;

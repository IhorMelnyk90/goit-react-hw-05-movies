import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const MY_KEY = '38a870c0e4485eebd742c83e630c16d3';

export const getTrending = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${MY_KEY}`);
  const trending = await res.data.results;
  return trending;
};

export const searchMovies = async (query, page) => {
  const res = await axios.get(`/search/movie?api_key=${MY_KEY}&page=${page}&language=en&query=${query}`);
  const movie = await res.data.results;
  return movie;
};

export const getDetails = async idMovie => {
  const res = await axios.get(`/movie/${idMovie}?api_key=${MY_KEY}`);
  const details = await res.data;
  return details;
};

export const getCredits = async idMovie => {
  const res = await axios.get(`/movie/${idMovie}/credits?api_key=${MY_KEY}&language=en-US`);
  const credits = await res.data;
  return credits;
};


export const getReviews = async idMovie => {
  const res = await axios.get(`/movie/${idMovie}/reviews?api_key=${MY_KEY}`);
  const reviews = await res.data;
  return reviews;
};
 




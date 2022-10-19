import { Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import Movies from 'pages/Movies';
// import Navbar from './Navbar';
// import MovieDetails from './MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
import Container from './Container';
import { lazy, Suspense } from "react";
import Loader from './Loader';

const Navbar = lazy(() => import("./Navbar"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));



export const App = () => {
  return (
    <Container>
    <Suspense fallback={<Loader/>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </Suspense>
    </Container>
  );
};

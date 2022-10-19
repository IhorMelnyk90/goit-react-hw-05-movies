import { useState } from 'react';
// import { PropTypes } from 'prop-types';

const SearchForm = ({onSubmit}) => {
  const [movieName, setMovieName] = useState('');

    const handleChange = event => {
        setMovieName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (movieName.trim() === '') {
            return alert('Your search is empty');
        }
        onSubmit(movieName);
        setMovieName('');
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Enter your film"
          value={movieName}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// SearchForm.propTypes = {
//   searchForm: PropTypes.func.isRequired
// };


export default SearchForm;

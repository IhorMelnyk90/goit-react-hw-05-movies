import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/requests';
import {ReviewsList, ReviewsItem, ReviewsAuthor} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        alert('Sorry, reviews no found');
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews && <ReviewsList>
                    {reviews.results.length > 0 ? reviews.results.map(({author, content}) => <ReviewsItem key={author}>
                        <ReviewsAuthor>Author: {author}</ReviewsAuthor>
                        <p>{content}</p>
                </ReviewsItem>) : <p>We don't have any reviews for this movie</p>}
                
            </ReviewsList> }
    </div>
  );
};

export default Reviews;

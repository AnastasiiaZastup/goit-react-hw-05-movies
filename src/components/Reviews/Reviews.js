import { getReviewsMovie } from 'components/api';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { StyledList, ListItem, ReviewsDescr } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const result = await getReviewsMovie(movieId);
        setReviews(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {reviews.length > 0 ? (
        <StyledList>
          {reviews.map(({ id, author, content }) => (
            <ListItem key={id}>
              <p>
                <span>Author:</span> {author}
              </p>
              <ReviewsDescr>{content}</ReviewsDescr>
            </ListItem>
          ))}
        </StyledList>
      ) : (
        <h4>We don't have any reviews for this movie.</h4>
      )}
      <Toaster />
    </div>
  );
}

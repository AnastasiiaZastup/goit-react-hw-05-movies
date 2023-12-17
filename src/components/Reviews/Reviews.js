import { getReviewsMovie } from 'components/api';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { StyledLists, ListItems, ReviewsDescription } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviewsMovie(movieId);
        setReviews(response);
      } catch (error) {
        toast.error('Error');
        setReviews([]);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <StyledLists>
          {reviews.map(({ id, author, content }) => (
            <ListItems key={id}>
              <p>
                <span>Author:</span> {author}
              </p>
              <ReviewsDescription>{content}</ReviewsDescription>
            </ListItems>
          ))}
        </StyledLists>
      ) : (
        <h4>We don't have any reviews for this movie.</h4>
      )}
      <Toaster />
    </div>
  );
}

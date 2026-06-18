type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  const rounded = Math.round(rating * 2) / 2;

  return (
    <div className="careers-star-rating" aria-label={`${rating} out of 5 recommended`}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const filled = rounded >= starValue;
        const half = !filled && rounded >= starValue - 0.5;

        return (
          <span
            key={starValue}
            className={`careers-star${filled ? ' is-filled' : ''}${half ? ' is-half' : ''}`}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
      <span className="careers-star-value">{rating.toFixed(1)}</span>
    </div>
  );
}

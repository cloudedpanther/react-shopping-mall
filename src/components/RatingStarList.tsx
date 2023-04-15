import RatingStarHalf from './RatingStarHalf';

interface RatingStarListProps {
  ratingValue: number;
}

export default function RatingStarList({ ratingValue }: RatingStarListProps) {
  const paintNumber = Math.floor(ratingValue / 0.5);

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      const isLeft = i % 2 === 0;
      const checked = i < paintNumber;
      stars.push(<RatingStarHalf key={i} isLeft={isLeft} checked={checked} />);
    }
    return stars;
  };

  return <div className="rating rating-half">{createStars()}</div>;
}

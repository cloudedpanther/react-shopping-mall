import RatingStarList from './RatingStarList';

interface RatingProps {
  rating: {
    value: number;
    contributed: number;
  };
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center mt-3">
      <RatingStarList ratingValue={rating.value} />
      <div className="ml-2">
        {rating.value} / {rating.contributed} 참여
      </div>
    </div>
  );
}

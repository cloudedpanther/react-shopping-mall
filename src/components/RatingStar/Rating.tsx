import RatingStarList from './RatingStarList';

interface RatingProps {
  rating: {
    rate: number;
    count: number;
  };
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center mt-3">
      <RatingStarList ratingValue={rating.rate} />
      <div className="ml-2">
        {rating.rate} / {rating.count} 참여
      </div>
    </div>
  );
}

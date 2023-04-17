interface StarHalfProps {
  isLeft: boolean;
  checked: boolean;
}

export default function RatingStarHalf({ isLeft, checked }: StarHalfProps) {
  const className = isLeft
    ? 'bg-yellow-400 cursor-default mask mask-star-2 mask-half-1'
    : 'bg-yellow-400 cursor-default mask mask-star-2 mask-half-2';

  return (
    <input
      type="radio"
      name="rating-10"
      className={className}
      disabled
      checked={checked}
    />
  );
}

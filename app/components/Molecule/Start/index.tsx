import { useState } from "react";

interface StarRatingProps {
  onRatingSelect: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    onRatingSelect(ratingValue); // Enviar el rating seleccionado al padre
  };

  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <button
            key={index}
            type="button"
            className={`text-3xl transition-colors duration-200 ${
              ratingValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;

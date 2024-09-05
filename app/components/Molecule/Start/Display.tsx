import React from "react";

interface StarDisplayProps {
  rating: number; // El número de estrellas a mostrar (de 1 a 5)
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <span
            key={index}
            className={`text-3xl transition-colors duration-200 ${
              ratingValue <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarDisplay;

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {value >= index + 1 ? (
            <FaStar />
          ) : value >= index + 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      {text && <span className="rating-text">{text}</span>}
    </div>
  );
};

export default Rating;


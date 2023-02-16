import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import React, { useEffect, useState } from "react";
import "./style.css"
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating = null, onRatingChange }) => {

  const [data, setdata] = useState({
    rating: rating,
    tempRating: null
  })

  
  
  const rate = (rating) => {
    setdata({ ...data, rating: rating, tempRating: rating })
  }

  const starOver = (rating) => {
    setdata({ ...data, rating: rating, tempRating: data.rating })
  }

  const starOut = () => {
    setdata({ ...data, rating: data.rating })
  }
  
  return (
    <div className="star-icon">
      {[ ...Array(5)].map((number, i) => (<FontAwesomeIcon 
        key={i} 
        icon={data.rating >= i && data.rating != null ? faStar : faStarRegular}
        onClick={() => rate(i)}
        onMouseOver={() => starOver(i)}
        onMouseOut={() => starOut()}
      ></FontAwesomeIcon>)
      )}
    </div>
  );
};

export default Rating;
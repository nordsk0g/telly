import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import reviewsService from "../../services/reviews";

// Styles
import reviewsStyles from "./Reviews.module.scss";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsService
      .getAll()
      .then(res => {
        setReviews(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={reviewsStyles.content}>
      <ul className={reviewsStyles["reviews-list"]}>
        {reviews.map((review, index) => (
          <li className={reviewsStyles["review-item"]} key={index}>
            <img
              className={reviewsStyles.poster}
              src={review.image}
              alt={`${review.title} poster`}
            />
            <div className={reviewsStyles.details}>
              <h1 className={reviewsStyles["show-title"]}>{review.title}</h1>
              <p className={reviewsStyles["date"]}>
                Watched <Moment format="DD MMM, YYYY">{review.date}</Moment>
              </p>
              <p className={reviewsStyles["review-content"]}>
                {review.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

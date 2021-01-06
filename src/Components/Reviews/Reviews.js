import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import reviewsService from "../../services/reviews";

// Components
import ShowPoster from "../Utility Components/ShowPoster";

// Styles
import reviewsStyles from "./Reviews.module.scss";
import utilityStyles from "../Utility Components/Utilities.module.scss";
import shows from "../../services/shows";

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
            <Link
              to={{
                pathname: `/${review.user}/show/${review.slug}`,
                state: {
                  id: review.id
                }
              }}
            >
              <ShowPoster
                className={reviewsStyles.poster}
                poster={review.image}
                title={review.title}
              />
            </Link>
            <div className={reviewsStyles.details}>
              <div>
                <Link
                  to={{
                    pathname: `/${review.user}/show/${review.slug}`,
                    state: {
                      id: review.id
                    }
                  }}
                >
                  <h1 className={reviewsStyles["show-title"]}>
                    {review.title}
                  </h1>
                </Link>
                <p className={reviewsStyles["date"]}>
                  Watched <Moment format="DD MMM, YYYY">{review.date}</Moment>
                </p>
                <p className={reviewsStyles["review-content"]}>
                  {review.content}
                </p>
              </div>
              <div className={reviewsStyles.likes}>
                <i className={`bx bxs-heart ${utilityStyles["like-icon"]}`}></i>{" "}
                {review.likes} {review.likes === 1 ? `like` : "likes"}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

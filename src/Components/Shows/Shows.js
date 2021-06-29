import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import SectionHeading from "../Utility Components/SectionHeading";

// Import shows service
import showsService from "../../services/shows";

// Styling
import showsStyles from "./Shows.module.scss";

export default function Shows() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    showsService.getAll().then(res => {
      setTrending(res.data);
    });
  }, []);

  return (
    <div className={showsStyles.content}>
      <SectionHeading title="Shows Trending Now" />
      <section className={showsStyles["trending-shows"]}>
        {trending.map((show, index) => (
          <Link
            to={`/show/${show.id}`}
            // to={{ pathname: `/show/${show.slug}`, state: { id: show.id } }}
            key={index}
          >
            <img
              src={show.poster}
              className={showsStyles["trending-show"]}
              alt={`${show.title} poster`}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
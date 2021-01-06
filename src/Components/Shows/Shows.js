import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import SectionHeading from "../Utility Components/SectionHeading";

// Import shows service
import showsService from "../../services/shows";

// Styling
import showsStyles from "./Shows.module.scss";

function Shows() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    showsService.getAll().then(res => {
      console.log(res.data);
      setTrending(res.data.trending);
    });
  }, []);

  return (
    <div className={showsStyles.content}>
      <SectionHeading title="Shows Trending Now" />
      <section className={showsStyles["trending-shows"]}>
        {trending.map((show, index) => (
          <Link
            to={{ pathname: `/show/${show.slug}`, state: { id: show.id } }}
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

export default Shows;

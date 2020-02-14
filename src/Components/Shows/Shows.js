import React, { useState, useEffect } from "react";

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
      setTrending(res.data.trending);
    });
  }, []);

  return (
    <div className={showsStyles.content}>
      <SectionHeading title="Shows Trending Now" />
      <section className={showsStyles["trending-shows"]}>
        {trending.map((show, index) => (
          <img
            src={show.poster}
            className={showsStyles["trending-show"]}
            alt={`${show.title} poster`}
          />
        ))}
      </section>
      <ul className={showsStyles["trending-shows"]}></ul>
    </div>
  );
}

export default Shows;

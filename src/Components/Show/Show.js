import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

// Components
import ShowPoster from "../Utility Components/ShowPoster";

// Services
import showsService from "../../services/shows";

// Styles
import showStyles from "./Show.module.scss";

function Show(props) {
  const [show, setShow] = useState({});
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    showsService
      .getShow(props.location.state.id)
      .then(res => {
        setShow(res.data);
        setCreators(res.data.creator || res.data.creators);
      })
      .catch(e => console.error(e));
  }, [props.location.state.id]);

  console.log(show);

  return (
    <section className={showStyles.show}>
      <div className={showStyles.container}>
        <ShowPoster
          className={showStyles.poster}
          poster={show.poster}
          title={show.title}
        />
        <div className={showStyles.details}>
          <div className={showStyles["show-header"]}>
            <h1 className={showStyles.title}>{show.title}</h1>
            <div className={showStyles["header-info"]}>
              <Link to={`/shows/year/${show.year}`}>{show.year}</Link>
              <div className={showStyles.creators}>
                {creators &&
                  creators.map((creator, index) => (
                    <Link to={`/`}>
                      {creator}
                      {index < creators.length - 1 ? "," : ""}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Show;

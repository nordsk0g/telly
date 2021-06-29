import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, MemoryRouter, withRouter, Link, NavLink, Route, Switch, useRouteMatch, useParams, useHistory } from "react-router-dom";
import ReadMore from '../Utility Components/ReadMore';
import Menu from '../Utility Components/Menu'
import MetaInformation from './MetaInformation';
import Actor from '../Actor/Actor';

// Components
import ShowPoster from "../Utility Components/ShowPoster";

// Services
import showsService from "../../services/shows";

// Styles
import showStyles from "./Show.module.scss";

export default function Show(props) {
  const [show, setShow] = useState({});
  const [creators, setCreators] = useState([]);
  const [cast, setCast] = useState([]);
  let { params, path, url } = useRouteMatch();
  console.log(params);

  useEffect(() => {
    showsService
      .getShow(params.show)
      .then(res => {
        console.log(res.data);
        setShow(res.data);
        setCreators(res.data.info.created_by);
        setCast(res.data.credits.cast);
      })
      .catch(e => console.error(e));
  }, [params.show]);

  return (
    <div>

    {
      show.info && show.credits &&
      <section className={showStyles.show}>
      {/* Backdrop image */}
      {/* <img src={show.info.backdrop_path} alt="" /> */}
      <div className={showStyles.container}>
      {/* TV Poster */}
        <ShowPoster
        className={showStyles.poster}
        poster={show.info.poster_path}
        title={show.info.name}
        />
        {/* Basic show details */}
        <div className={showStyles.details}>
        <div className={showStyles["show-header"]}>
          <h1 className={showStyles.title}>{show.info.name}</h1>
          <div className={showStyles["header-info"]}>
            <Link to={`/shows/year/${show.year}`} className={showStyles.year}>{show.info.first_air_date.slice(0,4)}</Link>
            <div className={showStyles.creators}>
              <p>Created by</p>
              {creators &&
                creators.map((creator, index) => (
                  <div className={showStyles.creator}>
                  <Link to={`/${creator.name.split(' ').join('-').toLowerCase()}`}>
                  {creator.name}
                  </Link>
                  {index < creators.length - 1 ? "," : ""}
                  </div>
                  ))}
            </div>
          </div>
        </div>
            <div className={showStyles.description}>
              {show.info.overview}
            </div>
          {/* Menu for meta information */}
            <MemoryRouter>
              <ul class={showStyles.metaInfoMenu}>
              <NavLink to={`${url}/cast`} activeClassName={showStyles["menu-item-active"]}>
                  <li>
                    Cast
                  </li>
                  </NavLink>
                  <NavLink to={`${url}/genres`} activeClassName={showStyles["menu-item-active"]}>
                  <li>
                    Genre
                  </li>
                  </NavLink>
              </ul>
              {/* Meta information */}
                {/* Cast */}
                <Route path={`${path}/cast`}>
                  <div className={showStyles.cast}>
                    {cast && Object.values(cast).map((castMember, index) =>( 
                      <Link className={showStyles.castItem} to={`/actor/${castMember.name.split(' ').join('-').toLowerCase()}-${castMember.id}`}>
                        {castMember.name}
                      </Link>
                    ))}
                  </div>
                </Route>   
                {/* Genre */}
                <Route path={`${path}/genres`}>
                  <div className={showStyles.genre}>
                    {show.info.genres && show.info.genres.map((genre, index) =>( 
                      <Link className={showStyles.genreItem} to={`/${genre.name.toLowerCase()}`}>
                        {genre.name}
                      </Link>
                    ))}
                  </div>
                </Route>   
          </MemoryRouter>
          </div>
      </div>
    </section>
    }
    </div>
  );
}
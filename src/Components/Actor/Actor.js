import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, MemoryRouter, withRouter, Link, NavLink, Route, Switch, useRouteMatch, useParams, useHistory } from "react-router-dom";
import Select from 'react-select';
import ShowPoster from '../Utility Components/ShowPoster';

// Services
import actorService from "../../services/actor";

// SCSS
import actorStyles from './Actor.module.scss'
import actor from '../../services/actor';

// Dropdown menu options
const options = [
  {value: 'original_name', label: 'Series Name'},
  {value: 'first_air_date', label: 'Release Date'},
  {value: 'popularity', label: 'Popularity'}

]

export default function Actor () {
    const [actorInfo, setActorInfo] = useState({});
    const [actorCredits, setActorCredits] = useState({});
    const [selectedOption, setSelectedOption] = useState({value: 'popularity', label: 'Popularity'})
    let { params, path, url } = useRouteMatch();

    function popularitySort(a, b) {
      return b.popularity - a.popularity;
    }
    
    useEffect(() => {
      actorService
        .getActor(params.actor)
        .then(res => {
          setActorInfo(res.data.actorInfo);
          setActorCredits({
            cast: res.data.actorCredits.cast.sort(popularitySort),
            crew: res.data.actorCredits.crew.sort(popularitySort)
          });
        })
        .catch(e => console.error(e));
    }, [params.actor]);

    console.log(actorCredits);
    
    return (
        <div>
          <section className={actorStyles["actor-section"]}>
            <div className={actorStyles["actor-header"]}>
              <ShowPoster
                className={actorStyles.headshot}
                poster={actorInfo.profile_path}
                title={actorInfo.name}
              />
              <div className={actorStyles["actor-description"]}>
                <h2>SERIES STARRING</h2>
                <h1 className={actorStyles["actor-name"]}>{actorInfo.name}</h1>
              </div>  
            </div>
          </section>
          <section className={actorStyles["series-section"]}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            <div className={actorStyles["series-list"]}>
            {actorCredits.cast && actorCredits.cast.map((show, index) => (
                <div>
                  <Link
            to={`/show/${show.id}`}
            // to={{ pathname: `/show/${show.slug}`, state: { id: show.id } }}
            key={index}
          >
                  <ShowPoster
                    className={actorStyles["series-poster"]}
                    poster={show.poster_path}
                    title={show.original_name}
                  />
          </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
    )
}
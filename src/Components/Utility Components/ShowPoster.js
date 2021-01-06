import React from "react";

// Styling
import utilityStyles from "./Utilities.module.scss";

function ShowPoster(props) {
  return (
    <div>
      <img
        src={props.poster}
        className={`${props.className} ${utilityStyles["show-poster"]}`}
        alt={props.title}
      />
    </div>
  );
}

export default ShowPoster;

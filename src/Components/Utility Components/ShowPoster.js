import React from "react";

// Styling
import utilityStyles from "./Utilities.module.scss";

function ShowPoster(props) {
  return (
    <div>
      <img
        src={props.poster}
        className={utilityStyles["show-object"]}
        alt={props.title}
      />
    </div>
  );
}

export default ShowPoster;

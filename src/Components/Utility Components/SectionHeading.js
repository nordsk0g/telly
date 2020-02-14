import React from "react";

import utilityStyles from "./Utilities.module.scss";

function SectionHeading(props) {
  return (
    <div className={utilityStyles["section-heading"]}>
      <div className={utilityStyles.title}>{props.title}</div>
    </div>
  );
}

export default SectionHeading;

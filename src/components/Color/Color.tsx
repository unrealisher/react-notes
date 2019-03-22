import React from "react";

import styles from "./Color.module.scss";

interface Props {
  color: string;
}

const Color = (props: Props): JSX.Element => {
  const { color } = props;
  return (
    <React.Fragment>
      <input type="checkbox" id={`checkbox_${color}`} hidden />
      <label
        className={styles.color + " " + styles[color]}
        htmlFor={`checkbox_${color}`}
      />
    </React.Fragment>
  );
};

export default Color;

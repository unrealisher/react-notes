import React from "react";

import styles from "./Edit.module.scss";

const Edit = (): JSX.Element => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.button}>
          <svg
            className={styles.svg}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.path}
              d="M14.623 0L5.473 13.174L1.186 8.574L0 10.03L5.62 16L16 1.27L14.623 0Z"
              fill="rgba(0, 0, 0, 0.3)"
            />
          </svg>
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button}>
          <svg
            className={styles.svg}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.path}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.561 13.9985H0.319242C0.142929 13.9985 0 13.8596 0 13.6793V11.4375C0 11.2612 0.100634 11.0176 0.221503 10.8968L8.73926 2.379C8.86159 2.25667 9.06327 2.26001 9.18677 2.3835L11.615 4.81173C11.7398 4.93655 11.7404 5.13837 11.6195 5.25924L3.10175 13.777C2.97942 13.8993 2.74133 13.9985 2.561 13.9985ZM13.0238 3.85498C12.9038 3.97491 12.6999 3.97647 12.5751 3.85165L10.1469 1.42342C10.0234 1.29992 10.0205 1.09772 10.1435 0.974739L10.8809 0.237332C11.2138 -0.0756243 11.5334 -0.082578 11.841 0.237332L13.7612 2.1575C14.0849 2.47776 14.074 2.80892 13.7612 3.11758L13.0238 3.85498Z"
              fill="rgba(0, 0, 0, 0.3)"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Edit;

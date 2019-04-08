import React from "react";

import styles from "./Color.module.scss";
import IColor from "../../interfaces/IColor";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setFilterItems } from "../../store/actions/filterItems";

interface IDispatchToProps {
  onFilterChange: Function;
}

interface Props extends IDispatchToProps {
  color: IColor;
}

const Color = (props: Props): JSX.Element => {
  const { color, onFilterChange } = props;
  return (
    <React.Fragment>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={`checkbox_${color.color}`}
        onChange={() => onFilterChange(color.id)}
        hidden
      />
      <label
        className={styles.color}
        style={{ backgroundColor: color.color }}
        htmlFor={`checkbox_${color.color}`}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onFilterChange: (id: number): void => {
      dispatch(setFilterItems(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Color);

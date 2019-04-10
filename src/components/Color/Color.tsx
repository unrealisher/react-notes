import React, { useState } from "react";

import styles from "./Color.module.scss";
import IColor from "../../interfaces/IColor";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setFilterItems } from "../../store/actions/filterItems";
import IState from "../../interfaces/IState";

interface IStateToProps {
  filter: number[];
}

interface IDispatchToProps {
  onFilterChange: Function;
}

interface Props extends IStateToProps, IDispatchToProps {
  color: IColor;
}

const Color = (props: Props): JSX.Element => {
  const { color, filter, onFilterChange } = props;
  const [checked, setCheck] = useState(
    color.id !== undefined && filter.indexOf(color.id) !== -1
  );
  return (
    <React.Fragment>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={`checkbox_${color.color}`}
        onChange={() => {
          onFilterChange(color.id);
          setCheck(!checked);
        }}
        checked={checked}
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

const mapStateToProps = (state: IState): IStateToProps => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    onFilterChange: (id: number): void => {
      dispatch(setFilterItems(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);

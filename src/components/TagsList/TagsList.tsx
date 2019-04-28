import React from "react";

import styles from "./TagsList.module.scss";
import { connect } from "react-redux";
import IState from "../../interfaces/IState";
import ITag from "../../interfaces/ITag";

interface IStateToProps {
  tags?: ITag[];
}

interface IProps extends IStateToProps {
  activeTags: number[];
  setTags: Function;
}

export const TagsList = (props: IProps): JSX.Element => {
  let { tags, activeTags, setTags } = props;
  tags = [
    { id: 0, tag: "покупки" },
    { id: 1, tag: "Работа" },
    { id: 2, tag: "ШРИ" },
    { id: 3, tag: "коты" },
    { id: 4, tag: "мемы" },
    { id: 5, tag: "универ" },
    { id: 6, tag: "домашнее задание" },
    { id: 7, tag: "учеба" },
    {
      id: 8,
      tag:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    }
  ];

  const getTags = (): JSX.Element[] | null => {
    if (tags) {
      return tags.map(item => {
        let tag = item.tag;
        if (tag && tag.length > 10) {
          tag = tag.substr(0, 10) + "...";
        }

        return (
          <li key={item.id} className={styles.item}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={tag}
              checked={
                item.id !== undefined && activeTags.indexOf(item.id) !== -1
              }
              onChange={() => {}}
              hidden
            />
            <label
              className={styles.tag}
              htmlFor={tag}
              onClick={() => {
                let arr = activeTags.slice();
                if (item.id !== undefined) {
                  const index = arr.indexOf(item.id);
                  if (index !== -1) {
                    arr.splice(index, 1);
                  } else {
                    arr.push(item.id);
                  }
                }

                setTags(arr);
              }}
            >
              {tag}
            </label>
          </li>
        );
      });
    }
    return null;
  };
  return <ul className={styles.list}>{getTags()}</ul>;
};

const mapStateToProps = (state: IState): IStateToProps => {
  return {
    tags: state.tags
  };
};

export default connect(mapStateToProps)(TagsList);

import React, { useState, useContext } from "react";
import SelectViewContext from "../../contexts/SelectViewContext/SelectViewContext";
import styles from "./SelectView.module.scss";

const SelectView = () => {
  const { currentView, setCurrentView } = useContext(SelectViewContext);

  return (
    <div className={styles.select}>
      <select
        name="view"
        id="view"
        value={currentView}
        onChange={({ target: { value } }) => setCurrentView(value)}
      >
        <option value="TABLE">TABLE</option>
        <option value="CARDS">CARDS</option>
      </select>
    </div>
  );
};

export default SelectView;

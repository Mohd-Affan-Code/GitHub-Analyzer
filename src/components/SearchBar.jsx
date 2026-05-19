import React from "react";
import styles from "./styles/SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="searchBar"
        placeholder="search username"
        className={styles.inputBar}
      />
      <button type="submit" className={styles.submitButton}>
        Analyze
      </button>
    </div>
  );
}

export default SearchBar;

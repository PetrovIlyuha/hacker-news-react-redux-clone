import React from "react";
import "./App.css";

import Stories from "./Stories";
import SearchStories from "./SearchStories";

const App = () => {
  return (
    <div className="app">
      <h1 style={styles.header}>
        <span role="img" aria-label="cat-logo">
          🐱‍💻
        </span>
        Hazker News
      </h1>
      <div className="interactions">
        <SearchStories />
      </div>
      <Stories />
    </div>
  );
};

export default App;

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    width: "95vw",
    justifyContent: "center",
    backgroundColor: "#E00543",
    color: "#B0F4E6"
  }
};

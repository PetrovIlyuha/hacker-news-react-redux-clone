import React from "react";
import "./Stories.css";

const StoriesHeaders = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(columns).map(key => (
        <span key={key} style={{ width: columns[key].width }}>
          {columns[key].label}
        </span>
      ))}
    </div>
  );
};

export default StoriesHeaders;

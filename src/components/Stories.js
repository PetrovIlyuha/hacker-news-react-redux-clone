import React from "react";
import { connect } from "react-redux";
import { getReadableStories } from "../selectors/story";
import Story from "./Story";
import "./Stories.css";
import StoriesHeaders from "./StoriesHeaders";

const Stories = ({ stories }) => {
  return (
    <div className="stories">
      <StoriesHeaders columns={COLUMNS} />
      {(stories || []).map(story => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  stories: getReadableStories(state)
});

export default connect(mapStateToProps)(Stories);

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%"
  },
  author: {
    label: "Author",
    width: "30%"
  },
  comments: {
    label: "Comments",
    width: "10%"
  },
  points: {
    label: "Points",
    width: "10%"
  },
  archive: {
    width: "10%"
  }
};

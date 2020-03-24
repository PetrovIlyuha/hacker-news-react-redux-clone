import React from "react";
import { connect } from "react-redux";
import { doArchiveStory } from "../actions/archive";
import { fetchStories } from "../api/story";

import "./Story.css";
import ButtonInline from "./ButtonInline";

// Saga
import { call, put } from "redux-saga/effects";
import { doAddStories, doFetchErrorStories } from "../actions/story";

function* handleFetchStories(action) {
  const { query } = action;
  try {
    const result = yield call(fetchStories, query);
    yield put(doAddStories(result.hits));
  } catch (error) {
    yield put(doFetchErrorStories(error));
  }
}

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline
          onClick={() => onArchive(objectID)}
          className="button-inline"
        >
          Archive Article
        </ButtonInline>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(null, mapDispatchToProps)(Story);

export { handleFetchStories };

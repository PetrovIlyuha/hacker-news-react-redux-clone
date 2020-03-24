import { takeEvery, all } from "redux-saga/effects";
import { STORIES_FETCH } from "../constants/actionTypes";
import { handleFetchStories } from "../components/Story";

function* watchAll() {
  yield all([takeEvery(STORIES_FETCH, handleFetchStories)]);
}

export default watchAll;

import storyReducer from "./story";
import deepFreeze from "deep-freeze";

describe("story reducer", () => {
  it("adds stories to the story state", () => {
    const stories = ["a", "b", "c"];

    const action = {
      type: "STORIES_ADD",
      stories
    };

    const prevState = { stories: [], error: null };
    const expectedNewState = { stories, error: null };

    deepFreeze(prevState);
    const newState = storyReducer(prevState, action);

    expect(newState).toEqual(expectedNewState);
  });
});

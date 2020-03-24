import { getReadableStories } from "./story";

describe("story selector", () => {
  it("retrives readable stories", () => {
    const storyState = {
      error: null,
      stories: [
        { objectID: "1", title: "React" },
        { objectID: "2", title: "Redux" }
      ]
    };
    const archiveState = ["1"];
    const state = { storyState, archiveState };

    const expectedReadableStories = [{ objectID: "2", title: "Redux" }];
    const readableStories = getReadableStories(state);

    expect(readableStories).toEqual(expectedReadableStories);
  });
});

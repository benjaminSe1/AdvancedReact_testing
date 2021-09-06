import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
    const newComment = "New Comment";
    const action = {
        type: SAVE_COMMENT,
        payload: newComment
    };

    const newSate = commentsReducer([], action);

    expect(newSate).toEqual([newComment]);
});

it("handles actions with unknown type", () => {
    const action = {
        type: "unknown type"
    };

    const newSate = commentsReducer([], action);
    expect(newSate).toEqual([]);
});

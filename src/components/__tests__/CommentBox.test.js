import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

it("has a textarea and a button", () => {
    expect(wrapped.find("button").length).toStrictEqual(1);
    expect(wrapped.find("textarea").length).toStrictEqual(1);
});

afterEach(() => {
    wrapped.unmount();
});

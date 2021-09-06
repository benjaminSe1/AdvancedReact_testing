import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapper;
let comments = ["comment 1", "comment 2"];

beforeEach(() => {
    const intialState = {
        comments
    };
    wrapper = mount(
        <Root intialState={intialState}>
            <CommentList />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it("has a list", () => {
    expect(wrapper.find("ul").length).toStrictEqual(1);
});

it("creates one li per comment", () => {
    expect(wrapper.find("li").length).toStrictEqual(2);
});

it("shows the text for each comment", () => {
    comments.map((comment) => {
        expect(wrapper.render().text()).toContain(comment);
    });
});

import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapper;
const testValue = "this is a test";

beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it("has a textarea and two buttons", () => {
    expect(wrapper.find("button").length).toStrictEqual(2);
    expect(wrapper.find("textarea").length).toStrictEqual(1);
});

describe("the textarea", () => {
    beforeEach(() => {
        wrapper
            .find("textarea")
            .simulate("change", { target: { value: testValue } });
        wrapper.update();
    });
    it("allows user to type in", () => {
        expect(wrapper.find("textarea").prop("value")).toStrictEqual(testValue);
    });

    it("is emptied when form is submit", () => {
        wrapper.find("form").simulate("submit");
        wrapper.update();

        expect(wrapper.find("textarea").prop("value")).toEqual("");
    });
});

import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;
const testValue = "this is a test";

beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it("has a textarea and a button", () => {
    expect(wrapper.find("button").length).toStrictEqual(1);
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

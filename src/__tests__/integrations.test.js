import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

let wrapper;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
        status: 200,
        response: [
            { name: "fetched #1" },
            { name: "fetched #2" },
            { name: "fetched #3" }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
    wrapper = mount(
        <Root>
            <App />
        </Root>
    );
    wrapper.find(".fetch-comments").simulate("click");

    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find("li").length).toStrictEqual(3);
        document();
        wrapper.unmount();
    });
});

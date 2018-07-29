import { mount } from "enzyme";
import React from "react";

import MarkdownColumnPage from "./MarkdownColumnPage";

it("mounts without crashing", () => {
  mount(<MarkdownColumnPage content={["<p>Some HTML</p>"]} />);
});

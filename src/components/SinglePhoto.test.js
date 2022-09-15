import { render } from "@testing-library/react";
import SinglePhoto from "./SinglePhoto";
import React from "react";

describe("SinglePhoto component suite", () => {
  test("renders SinglePhoto component", () => {
    render(<SinglePhoto />);
  });
});

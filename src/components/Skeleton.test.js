import { render } from "@testing-library/react";
import Skeleton from "./Skeleton";
import React from "react";

describe("Skeleton component suite", () => {
  test("renders Skeleton component", () => {
    render(<Skeleton />);
  });
});

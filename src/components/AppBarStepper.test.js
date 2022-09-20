import { render } from "@testing-library/react";
import AppBarStepper from "./AppBarStepper";
import React from "react";

describe("AppBarStepper component suite", () => {
  test("renders AppBarStepper component", () => {
    render(<AppBarStepper  fetchedHeaderData={null}
      searchString={null}
      onNextClick={null}
      onPreviousClick={null}/>);
  });
});

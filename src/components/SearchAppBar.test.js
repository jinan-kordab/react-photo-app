import { render } from "@testing-library/react";
import SearchAppBar from "./SearchAppBar";
import React from "react";

describe("SearchAppBar component suite", () => {
  test("renders SearchAppBar component", () => {
    render(
      <SearchAppBar
        fetchedHeaderData={null}
        searchString={null}
        onSearchPhotos={null}
        onNextPageClicked={null}
        onPreviousPageClicked={null}
      />
    );
  });
});

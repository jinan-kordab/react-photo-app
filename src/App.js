import React, { Suspense, useState, useCallback } from "react";
import { useCrud } from "./hooks/useCrud";
import SearchAppBar from "./components/SearchAppBar";
import Skelton from "./components/Skeleton";
import classes from "./index.css";
import ErrorBoundary from "./components/helpers/ErrorBoundary";

const AllPhotos = React.lazy(() => import("./components/AllPhotos"));

function App() {
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(null);

  const stepperLink =
    page !== null
      ? `https://api.pexels.com/v1/search/?page=${page}&per_page=16&query=${searchString}`
      : null;

  const [isLoading, fetchedData, fetchedHeaderData] = useCrud(
    searchString,
    stepperLink
  );

  const searchPhotosHandler = useCallback(
    (searchTerm) => {
      setPage(null);
      setSearchString(searchTerm);
    },
    [searchString]
  );

  const nextPageClickHandler = useCallback(
    (page, searchString) => {
      setPage(page);
      setSearchString(searchString);
    },
    [searchString]
  );

  const previousPageClickHandler = useCallback(
    (page, searchString) => {
      setPage(page);
      setSearchString(searchString);
    },
    [searchString]
  );

  return (
    <React.Fragment>
      <Suspense fallback={<Skelton />}>
        <ErrorBoundary>
          <section className={classes.container}>
            <SearchAppBar
              fetchedHeaderData={fetchedHeaderData}
              searchString={searchString}
              onSearchPhotos={searchPhotosHandler}
              onNextPageClicked={nextPageClickHandler}
              onPreviousPageClicked={previousPageClickHandler}
            ></SearchAppBar>
            {isLoading === null && <Skelton />}
            {!isLoading && <AllPhotos photos={fetchedData}></AllPhotos>}
          </section>
        </ErrorBoundary>
      </Suspense>
    </React.Fragment>
  );
}

export default App;

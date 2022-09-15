import React, { useState,useEffect } from "react";
import useCrud from "./useCrud";

const CrudWrapper = () => {
  const [mIsLoading, setmIsLoading] = useState(null);
  const [mfetchedData, setmfetchedData] = useState(null);
  const [mfetchedHeaderData, setmfetchedHeaderData] = useState(null);

  const [isLoading, fetchedData, fetchedHeaderData] = useCrud(
    "birds",
    "https://api.pexels.com/v1/search/?page=2&per_page=16&query=birds"
  );

  useEffect(() => {
    setmIsLoading(isLoading);
    setmfetchedData(fetchedData);
    setmfetchedHeaderData(fetchedHeaderData);
  }, []);

  return <div>{fetchedData}</div>;
};

export default CrudWrapper;

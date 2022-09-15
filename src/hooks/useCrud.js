import { useState, useEffect } from "react";

export const useCrud = (searchTerm, stepperLink = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedHeaderData, setFetchedHeaderData] = useState(null);
  const [tranData, setTranData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    if (searchTerm !== "" && searchTerm !== null) {
      fetch(
        stepperLink !== null
          ? stepperLink
          : `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=16`,
        {
          headers: {
            Authorization: "Your Pexels API KEY goes here",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch.");
          }

          return response.json();
        })
        .then((data) => {
          const mappedPhotos =
            data &&
            data.photos &&
            data.photos.map((pdata) => {
              return {
                key: pdata.id,
                id: pdata.id,
                width: pdata.width,
                height: pdata.height,
                alt: pdata.alt,
                avg_color: pdata.avg_color,
                photographer: pdata.photographer,
                photographer_id: pdata.photographer_id,
                photographer_url: pdata.photographer_url,
                url: pdata.url,
                src: {
                  landscape: pdata.src.landscape,
                  large: pdata.src.large,
                  large2x: pdata.src.large2x,
                  medium: pdata.src.medium,
                  original: pdata.src.original,
                  portrait: pdata.src.portrait,
                  small: pdata.src.small,
                  tiny: pdata.src.tiny,
                },
              };
            });

          const mappedHeaderData = {
            key: data.page,
            page: data.page,
            per_page: data.per_page,
            total_results: data.total_results,
            next_page: data.next_page,
            prev_page: data.prev_page,
          };
          setFetchedData(mappedPhotos);
          setFetchedHeaderData(mappedHeaderData);
        })
        .catch((err) => {
          setIsLoading(false);
        });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [searchTerm, stepperLink]);

  return [isLoading, fetchedData, fetchedHeaderData];
};

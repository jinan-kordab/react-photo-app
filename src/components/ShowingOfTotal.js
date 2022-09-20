import React from "react";
import Typography from "@mui/material/Typography";

const ShowingOfTotal = (props) => {
  const numOfImages =
    props.fetchedHeaderData !== null
      ? parseInt(props.fetchedHeaderData.page) * 16 >
        props.fetchedHeaderData.total_results
        ? props.fetchedHeaderData.total_results === 0
          ? "0"
          : "few"
        : parseInt(props.fetchedHeaderData.page) * 16
      : 0;

  const totalResults =
    props.fetchedHeaderData !== null
      ? props.fetchedHeaderData.total_results < 16
        ? ""
        : " of " + props.fetchedHeaderData.total_results
      : " of " + 0;

  return (
    <Typography
      sx={{
        color: "whitesmoke",
      }}
    >
      <h1>
        Showing {numOfImages}
        {totalResults} images
      </h1>
    </Typography>
  );
};

export default ShowingOfTotal;

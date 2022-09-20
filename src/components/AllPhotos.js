import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import classes from "../index.css";

const AllPhotos = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <ImageList className={classes.flexContainer}>
        <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {props.photos &&
          props.photos.map((pdata) => (
            <Box
              key={pdata.id}
              sx={{
                width: 280,
                height: 210,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <ImageListItem key={pdata.id}>
                <a href={pdata.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={`${pdata.src.tiny}`}
                    srcSet={`${pdata.src.tiny}`}
                    alt={pdata.alt}
                    loading="lazy"
                  />
                </a>
                <ImageListItemBar
                  title={pdata.photographer}
                  subtitle={pdata.photographer_url}
                  actionIcon={
                    <IconButton
                      sx={{
                        color: "rgba(255, 255, 255, 0.54)",
                        Bottom: "10px  ",
                      }}
                      aria-label={`info about ${pdata.photographer}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Box>
          ))}
      </ImageList>
    </Box>
  );
};

export default AllPhotos;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBarStepper from "./AppBarStepper";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import ShowingOfTotal from "./ShowingOfTotal";
import { ContentCutOutlined } from "@mui/icons-material";

export default function SearchAppBar(props) {
  const theme = createTheme({
    // Components
    components: {
      TextField: {
        defaultProps: {
          color: "white",
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          fullWidth: false,
          sx: {
            mb: 1,
            marginLeft: "15px",
          },
        },
        styleOverrides: {
          root: {
            marginTop: 11,
            fontColor: "whitesmoke",
            "& label": {
              color: "whitesmoke",
            },
            "& legend": {
              color: "whitesmoke",
            },
            "&.subvariant-hovered": {
              color: "whitesmoke",
            },
            // this is styles for the new variants
            "&.subvariant-hovered": {
              "& fieldset": {
                border: `1px dotted whitesmoke`,
                color: "whitesmoke",
              },
              "& .MuiInputBase-input:hover + fieldset": {
                border: `2px solid whitesmoke`,
                color: "whitesmoke",
              },
              "& .MuiInputBase-input:focus + fieldset": {
                border: `2px solid whitesmoke`,
                color: "whitesmoke",
              },
              "& .MuiFormLabel-root & MuiInputLabel-root & MuiInputLabel-formControl & MuiInputLabel-animated & MuiInputLabel-shrink & MuiInputLabel-sizeSmall & MuiInputLabel-outlined & MuiFormLabel-colorPrimary & MuiFormLabel-filled": {
                color: "whitesmoke",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "whitesmoke",
              },
              "& .MuiInputBase-input": {
                color: "whitesmoke !important",
              },
            },
          },
        },
      },
    },
  });

  const searchRef = React.useRef("");
  const [showingOfData, setShowingOfData] = React.useState([]);

  function submiSearchtHandler(event) {
    event.preventDefault();

    // could add validation here...

    const searchTerm = {
      searchTerm: searchRef.current.value,
    };
    props.onSearchPhotos(searchTerm.searchTerm);
  }

  function handleNextClickHandler(page, searchString) {
    props.onNextPageClicked(page, searchString);
  }
  function handlePreviousClickHandler(page, searchString) {
    props.onPreviousPageClicked(page, searchString);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, color: "whitesmoke" }}>
        <AppBar
          position="static"
          sx={{
            color: "whitesmoke",
            backgroundColor: "#2DB3C7",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <AppBarStepper
              fetchedHeaderData={props.fetchedHeaderData}
              searchString={props.searchString}
              onNextClick={handleNextClickHandler}
              onPreviousClick={handlePreviousClickHandler}
            />
            <ShowingOfTotal fetchedHeaderData={props.fetchedHeaderData} />
            <form onSubmit={submiSearchtHandler}>
              <TextField
                inputRef={searchRef}
                className="subvariant-hovered"
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="medium"
              />
            </form>
          </Box>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

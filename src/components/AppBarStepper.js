import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function AppBarStepper(props) {
  const next = React.useRef("");
  const previous = React.useRef("");

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const page =
    props.fetchedHeaderData == null ? 0 : props.fetchedHeaderData.page;

  const handleNext = () => {
    console.log(page);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const newPage = parseInt(page) + 1;
    console.log("STEP 1:: next clicked : new page is: " + newPage);
    props.onNextClick(newPage, props.searchString);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const prevPage = parseInt(page) - 1;
    props.onPreviousClick(prevPage, props.searchString);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={
        props.fetchedHeaderData !== null
          ? Math.floor(parseInt(props.fetchedHeaderData.total_results) / 16)
          : 0
      }
      position="static"
      activeStep={page}
      sx={{
        minWidth: "350px",
        backgroundColor: "transparent",
        color: "white",
      }}
      nextButton={
        <Button
          style={{ fontSize: "26px" }}
          sx={{
            color: "whitesmoke",
          }}
          size="large"
          onClick={handleNext}
          disabled={
            page === 0
              ? true
              : page * 16 > props.fetchedHeaderData.total_results
              ? true
              : false
          }
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          style={{ fontSize: "26px" }}
          sx={{
            color: "whitesmoke",
          }}
          size="large"
          onClick={handleBack}
          disabled={page <= 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}

import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PopupBox from "./PopupBox";
import TextField from "@mui/material/TextField";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  createStyles({
    name: { "font-size": "50px" },
  })
);

const DockingBay = (props) => {
  const classes = useStyles(props);
  const [doorName, setDoorName] = React.useState("");
  const [isNameFocused, setIsNamedFocused] = React.useState(false);
  const updateDoorName = (event) => {
    console.log("clicked");
    setIsNamedFocused(true);
  };

  const openDialog = () => {
    console.log("clicked");
  };

  return (
    <>
      <Paper elevation={3} sx={{ height: "50vh", marginTop: "20px" }}>
        {isNameFocused ? (
          <Typography variant="h5" component="h3" onClick={updateDoorName}>
            Door {props.value}
          </Typography>
        ) : (
          <TextField
            autoFocus
            inputProps={{ className: classes.name }}
            value={doorName}
            onChange={(event) => {
              setDoorName(event.target.value);
              // save door name to local storage
              localStorage.setItem(
                "door" + props.value + "Name",
                event.target.value
              );
            }}
            onBlur={(event) => setIsNamedFocused(false)}
          />
        )}
      </Paper>
      <AddBoxIcon
        sx={{ fontSize: "75px", color: "green" }}
        onClick={openDialog}
      />
    </>
  );
};

export default DockingBay;

import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import BasicSelect from "./components/BasicSelect";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import DockingBay from "./components/DockingBay";

function App() {
  const [count, setCount] = useState(12);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  /* let text = "repeat(12, 1fr)"; */
  let text = "repeat(" + count + ", 1fr)";
  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 9">{/* <Item>xs=8</Item> */}</Box>
          <Box gridColumn="span 2">
            <Item>
              <BasicSelect count={count} />
            </Item>
          </Box>
          <Box gridColumn="span 1">
            <Item
              sx={{
                marginTop: "10px",
                marginRight: "5px",
                backgroundColor: "black",
              }}
            >
              <Button sx={{ color: "white" }}>Submit</Button>
            </Item>
          </Box>
          <Box gridColumn="span 4">{/* <Item>xs=4</Item> */}</Box>
          <Box gridColumn="span 6">{/* <Item>xs=8</Item> */}</Box>
        </Box>
        <Box display="grid" gridTemplateColumns={text} gap={2}>
          {[...Array(count)].map((e, i) => (
            <Box gridColumn="span 1">
              <DockingBay value={i + 1}></DockingBay>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default App;

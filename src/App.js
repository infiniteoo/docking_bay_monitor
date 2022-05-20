import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import BasicSelect from "./components/BasicSelect";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(20);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 8">{/* <Item>xs=8</Item> */}</Box>
          <Box gridColumn="span 4">
            <Item>
              <BasicSelect count={count} />
            </Item>
          </Box>
          <Box gridColumn="span 4">{/* <Item>xs=4</Item> */}</Box>
          <Box gridColumn="span 6">{/* <Item>xs=8</Item> */}</Box>
          <Box gridColumn="span 2">
            <Item>
              <Button>Submit</Button>
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;

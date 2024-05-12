import { useEffect } from "react";
import { Box } from "@mui/material";

function App() {
  useEffect(() => {
    console.log(count);
  }, [count]);
  return <Box sx={{ display: "flex", width: "100%" }}></Box>;
}

export default App;

import { Box, Typography } from "@mui/material";
import TopBar from "./Pages/Shared/TopBar/TopBar";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Box>
      <TopBar />
      <NavBar />
      <Home />
    </Box>
  );
}

export default App;

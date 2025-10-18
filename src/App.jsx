import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Provider } from "./context/CompanyContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Provider>
        <Box sx={{p:{xs:2, sm: 3, md:4}}}>
          <div>
            <Typography variant="h4" gutterBottom>
              Company List
            </Typography>
            <Home />
          </div>
        </Box>
      </Provider>
    </>
  );
}

export default App;


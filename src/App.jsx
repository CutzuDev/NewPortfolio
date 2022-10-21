import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d76a00",
      },
      secondary: {
        main: "#000000",
      },
      orangeLight1: {
        main: "#d97718",
      },
      orangeLight2: {
        main: "#dc8530",
      },
      orangeLight3: {
        main: "#de9248",
      },
      orangeDark1: {
        main: "#c26001",
      },
      orangeDark2: {
        main: "#ae5703",
      },
      orangeDark3: {
        main: "#9a4e04",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
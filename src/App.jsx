import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import theme from "./theme";
import Nav from "./components/Nav";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/" element={<Nav />}>
              <Route path="/about" element={<About />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
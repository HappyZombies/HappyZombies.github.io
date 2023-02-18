import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Nav from "./components/Nav";
import DisplayPostsList from "./components/DisplayPostsList";
import DisplayPost from "./components/DisplayPost";

import theme from "./theme";
import posts from "./posts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Nav />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<DisplayPostsList posts={posts.projects} title="Projects" />} />
            <Route path="/projects/:id" element={<DisplayPost type="projects" />} />
            <Route path="/blogs" element={<DisplayPostsList posts={posts.blogs} title="Blog Posts" />} />
            <Route path="/blogs/:id" element={<DisplayPost type="blogs" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

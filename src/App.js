import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import Home from "./Home";
import About from "./About";

import DisplayPostsList from "./components/DisplayPostsList";
import DisplayPost from "./components/DisplayPost";
import Nav from "./components/Nav";

import projects from "./posts/projects/projects";
import blogs from "./posts/blogs/blogs";

const theme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#1d1f21'
        },
        secondary: {
            main: '#61dafb'
        }
    },
    typography: {
        fontFamily: 'Fira Mono',
        fontWeightLight: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Nav />}>
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<DisplayPostsList posts={projects} type="projects" title="Projects" />} />
                        <Route path="projects/:id" element={<DisplayPost />} />
                        <Route path="blogs" element={<DisplayPostsList posts={blogs} type="blogs" title="Blog Posts" />} />
                        <Route path="blogs/:id" element={<DisplayPost />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;

import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Games from "./Pages/Games";
import Contact from "./Pages/Contact";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// const NavUnlisted = styled.ul`
//   text-decoration: none;
// `;

function App() {
  const [data, setData] = useState([]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = [
    { name: "ABOUT", link: "/" },
    { name: "EXPERIENCE", link: "/experience" },
    { name: "PROJECT", link: "/project" },
    { name: "GAMES", link: "/games" },
    { name: "CONTACT", link: "/contact" },
  ];

  useEffect(() => {
    axios
      .get("https://gitconnected.com/v1/portfolio/sushmamadathil")
      .then((response) => setData(response));
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {

  };

  return (
    <div className="App">
      {data.data !== undefined && data.data !== null ? (
        <div className="background">
          <BrowserRouter>
            <AppBar position="static" color="transparent" elevation={0}>
              <Container maxWidth="xl">
              <div className="logo-img">S K M</div>
                <Toolbar disableGutters>
                  <Toolbar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      News
                    </Typography>
                    {pages.map((page) => (
                       <Button size="small" variant="text" href={page.link}>{page.name}</Button>
                       ))}
                    <Button href="/" variant="contained">
                      Link
                    </Button>
                  </Toolbar>
                </Toolbar>
              </Container>
            </AppBar>
            <Routes>
              <Route path="/" element={<About data={data.data.basics} />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/games" element={<Games />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;




            // {/* <nav>
            //   <ul class="top-nav">
            //     <li>
            //       <Link to="/contact">Contact</Link>
            //     </li>
            //     <li>
            //       <Link to="/games">Games</Link>
            //     </li>
            //     <li>
            //       <Link to="/projects">Projects</Link>
            //     </li>
            //     <li>
            //       <Link to="/experience">Experience</Link>
            //     </li>
            //     <li>
            //       <Link to="/">About</Link>
            //     </li>
            //   </ul>
            // </nav> */}
            //                   {/* <Box
            //         sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            //       >
            //         <Menu
            //           id="menu-appbar"
            //           anchorEl={anchorElNav}
            //           anchorOrigin={{
            //             vertical: "bottom",
            //             horizontal: "left",
            //           }}
            //           keepMounted
            //           transformOrigin={{
            //             vertical: "top",
            //             horizontal: "left",
            //           }}
            //           open={Boolean(anchorElNav)}
            //           onClose={handleCloseNavMenu}
            //           sx={{
            //             display: { xs: "block", md: "none" },
            //           }}
            //         >
            //           {pages.map((page) => (
            //             <MenuItem
            //               key={page}
            //               onClick={handleCloseNavMenu(page.link)}
            //             >
            //               <Typography textAlign="center">
            //                 {page.name}
            //               </Typography>
            //             </MenuItem>
            //           ))}
            //         </Menu>
            //       </Box> */}
                //console.log(page)
    //return (<Link to={`/${page[1].link}`} />);
    //setAnchorElNav(null);
    //onClick={() => (handleCloseNavMenu(pages))}
import {
  Box,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import HolidayVillageSharpIcon from "@mui/icons-material/HolidayVillageSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import UpdateSharpIcon from "@mui/icons-material/UpdateSharp";
import { NavLink } from "react-router-dom";

const drawerWidth = 100;

const LeftDrawer = (props) => {
  let activeStl = {
    color: "red",
  };
  console.log("maaksai")
  return (
    <Box sx={{ diaplay: "flex", bgcolor: "black" }}>
      <CssBaseline />
      <div style={{display : "flex"}}>
        <div >
          <Drawer
            sx={{
              bgcolor: "black",
              width: "draweWidth",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <List sx={{ color: "black", flexDirection: "column", p: "20px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <NavLink to="/"> {<SearchSharpIcon />}</NavLink> <br />
                  <br />
                  <br />
                  <br />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <NavLink
                    to="/tvseries"
                    style={({ isActive }) => (isActive ? activeStl : undefined)}
                  >
                    {<HolidayVillageSharpIcon />}{" "}
                  </NavLink>
                  <br />
                  <br />
                  <br />
                  <br />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <NavLink
                    to="/movies"
                    style={({ isActive }) => (isActive ? activeStl : undefined)}
                  >
                    {<Person2SharpIcon />}{" "}
                  </NavLink>{" "}
                  <br />
                  <br />
                  <br />
                  <br />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  {<SettingsSharpIcon />} <br />
                  <br />
                  <br />
                  <br />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  {<UpdateSharpIcon />}
                  <br />
                  <br />
                  <br />
                  <br />
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Drawer>
        </div>
        <div style={{flex : 1}}>
            {props.children}
        </div>
      </div>
    </Box>
  );
};

export default LeftDrawer;

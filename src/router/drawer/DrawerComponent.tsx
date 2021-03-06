import * as React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/ListItem";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
// Custom Imports
import { NavigationList } from "../NavigationList";
import { IDrawerComponent } from "./Drawer.interface";

const DrawerComponent = ({
  open,
  theme,
  anchor,
  classes,
  handleDrawerClose
}: IDrawerComponent) => (
  <Drawer
    variant="persistent"
    anchor={anchor}
    open={open}
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
    </div>
    <Divider />
    <List>
      <NavigationList />
    </List>
  </Drawer>
);

export default DrawerComponent;

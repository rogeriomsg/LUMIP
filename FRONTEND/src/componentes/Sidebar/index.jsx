import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <IconButton onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button>
            <ListItemText primary="Página 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Página 2" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
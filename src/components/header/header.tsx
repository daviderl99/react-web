import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        {/* <div className="links">
          <Link to="">About</Link>
          <Link to="">FAQ</Link>
          <Link to="">Legal</Link>
        </div> */}
        <Button color="inherit">
          <Link to="/login">
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
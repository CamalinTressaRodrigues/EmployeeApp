import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: 'grey' }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Employee App
            </Typography>
            <Link to={'/'}>
              <Button color="inherit" style={{ color: 'white' }}>
                Home
              </Button>
            </Link>
            <Link to={'/form'}>
              <Button color="inherit" style={{ color: 'white' }}>
                Employee Form
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar
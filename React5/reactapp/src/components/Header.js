import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <AppBar sx={{ backgroundColor: '#232F3D' }} position="sticky">
      <Toolbar>
        <Typography>
          P128
        </Typography>
        <Tabs
          sx={{ml:'auto'}}
          textColor='inherit'
          indicatorColor='primary'
          value={active}
          onChange={(e,val)=>setActive(val)}
          >
            <Tab LinkComponent={NavLink} label="AddBook"/>
            <Tab LinkComponent={NavLink} to='/books' label="Books"/>
            <Tab LinkComponent={NavLink} to='/about' label="About Us"/>
        </Tabs>           
      </Toolbar>
      </AppBar >
  )
}

export default Header
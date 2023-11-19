import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Paper, IconButton } from '@mui/material';
import { PeopleOutlineOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';

const ICON_STYLES = { color: '#9CA3AF' };

function Header() {

  return (
    <Paper elevation={3}>
      <Grid container sx={{display:'flex', justifyContent:"space-between", alignItems: "center"}} >
        <Grid item>
          <IconButton>
            <SearchOutlined sx={ICON_STYLES} />
          </IconButton>
        </Grid>
        <Grid item >
          <IconButton>
            <PeopleOutlineOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <Avatar src="https://media.istockphoto.com/id/1196565484/es/foto/mariposa-monarca-en-colores-arco-iris-aislados-sobre-blanco.jpg?s=612x612&w=0&k=20&c=47Pyp3hkUq1KItWUCC2PZXv8GFBtXqB00t6ydsBXQWc=" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
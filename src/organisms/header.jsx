import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Paper, IconButton, InputBase } from '@mui/material';
import { PeopleOutlineOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';

const ICON_STYLES = { color: '#9CA3AF' };

function Header({search, onSearch, onSearchType}) {
  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <Paper elevation={3}>
      <Grid container sx={{display:'flex', justifyContent:"space-between", alignItems: "center"}} >
        <Grid item>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchOutlined />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            value={search}
            onKeyDown={onKeyDownHandler}
            onChange={onSearchType}
          />
        </Grid>
        <Grid item >
          <IconButton>
            <PeopleOutlineOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <Avatar src="https://www.freepik.es/fotos-vectores-gratis/perfil-avatar" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
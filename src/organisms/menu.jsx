import React from 'react';

import { Box, List, ListItem, ListItemIcon, Autocomplete,  ListItemText, Avatar, TextField } from '@mui/material';
import {
  SignalCellularAltOutlined,
  PeopleOutlineOutlined,
  ShoppingBagOutlined,
  PersonOutlined,
  SettingsOutlined,
  LockOutlined,
  PersonAddAlt1Outlined,
  CancelOutlined,
} from '@mui/icons-material';

import logo from '../assets/img/logo.png';

const BG_ICON = { color: '#EEF3FD' };

const tier = [
  { label: 'Basic'},
  { label: 'Medium'},
  { label: 'Premium'},
]

function Menu() {
  return (
    <Box className= 'Menu-Box'>
      <Avatar className= 'avatar' src={logo} sx={{ marginTop: 2, marginBottom: 2 }} />
      <Box className= 'type'>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={tier}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Acmen Inc" />}
        /> 
      </Box>
      <hr />
      <List>
        <ListItem>
          <ListItemIcon>
            <SignalCellularAltOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PeopleOutlineOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Customers" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBagOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Products" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Account" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LockOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Login" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonAddAlt1Outlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Register" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CancelOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Error" sx={BG_ICON} />
        </ListItem>
      </List>
    </Box>
  );
}
export default Menu;




















// import React from 'react';

// import Grid from '@mui/material/Unstable_Grid2';
// import { Avatar, Box } from '@mui/material';
// import { UnfoldMoreOutlined, SignalCellularAltOutlined, PeopleOutlineOutlined, ShoppingBagOutlined, PersonOutlined, SettingsOutlined, LockOutlined, PersonAddAlt1Outlined, CancelOutlined } from '@mui/icons-material';
// import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// const BG_ICON = { color: '#EEF3FD' };

// function Menu () {
//   return (
//     <Box sx={{display:'flex', alignItems: "center", bgcolor: '#101827'}}>
//       <Grid container>
//         <Grid item>
//           <List item>
//             <Avatar src='https://search.brave.com/images?q=rosas'/>
//           </List>
//         </Grid>
//         <Grid item>
//           <List item>
//             <ListItem >
//                 <SignalCellularAltOutlined sx={BG_ICON}/>
//                 <ListItemText primary="Dashboard" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem >
//               <PeopleOutlineOutlined sx={BG_ICON}/>
//               <ListItemText primary="Customers" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem >
//               <ShoppingBagOutlined sx={BG_ICON}/>
//               <ListItemText primary="Products" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem >
//               <PersonOutlined sx={BG_ICON}/>
//               <ListItemText primary="Account" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem>
//               <SettingsOutlined sx={BG_ICON}/>
//               <ListItemText primary="Settings" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem>
//               <LockOutlined sx={BG_ICON}/>
//               <ListItemText primary="Login" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem>
//               <PersonAddAlt1Outlined sx={BG_ICON}/>
//               <ListItemText primary="Register" sx={BG_ICON}/>
//             </ListItem>
//             <ListItem>
//               <CancelOutlined sx={BG_ICON} primary="Error icon" />
//               <ListItemText primary="Error" sx={BG_ICON}/>
//             </ListItem>
//           </List>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Menu;
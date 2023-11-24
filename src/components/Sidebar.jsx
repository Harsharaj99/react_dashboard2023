import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Dashboard,  Extension, PowerSettingsNew, QuestionAnswer, Quiz, Spa } from '@mui/icons-material';
import { Card } from 'react-bootstrap';




export default function TemporaryDrawer({state,setState,toggleDrawer}) {


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
         {/* cards(profile) */}

         <Card style={{ width: '18rem',alignItems:'center' }}>
      <Card.Img variant="top" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width:'20vh', height: '20vh',borderRadius:'50%' }} src="https://tse3.mm.bing.net/th?id=OIP.B42mmL001bNfILjXjuoAyQHaHx&pid=Api&P=0&h=180" />
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>Max Well</Card.Title>
        <h6>maxweljames@gmail.com</h6>
       
       
      </Card.Body>
    </Card>


      <List>
        {['Dashboard', 'Perks', 'Addons', 'Faq','Support'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
               
                {index===0?<Dashboard/>:
                index===1?<Spa/>:
                index===2?<Extension/>:
                index===3?<Quiz/>:
                index===4?<QuestionAnswer/>:
                null}
              
      
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <ListItem  style={{alignItems:'center'}} >
        <ListItemButton  >
          <ListItemIcon  >
           Logout <PowerSettingsNew />
          </ListItemIcon>
          <ListItemText  />
        </ListItemButton>
      </ListItem>
     
    </Box>
  );

  return (
    <div>

     

      
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>

      
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
            
        </React.Fragment>
      ))}
    </div>
  );
}
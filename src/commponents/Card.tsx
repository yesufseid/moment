

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion"

type props={
  data:object[]
}



export default function AlignItemsList({data}:props) {

  return (
    <div className='overflow-auto h-128 md:h-129 ml-auto '> 
    {data?.map(()=> 
    <motion.div
     initial={{y:'1000'}}
     animate={{y:0}}
     transition={{duration:1.5, delay:1}}
    
    >
    <List sx={{ width: '100%', maxWidth: 360, }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> 
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </List>
      </motion.div>
      )}
      </div>
  );
}

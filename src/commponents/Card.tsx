

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
  const dat=[1,2,3,4,5,6,7]
  return (
    <div className='overflow-auto h-128 w-full md:h-129  md:mt-0 mt-24'> 
    {dat?.map(()=> 
    <motion.div  className='flex border-2 border-zinc-500 justify-center md:w-96 w-80  mx-auto  my-3 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'
     initial={{y:'1000'}}
     animate={{y:0}}
     transition={{duration:1.5, delay:1}}
    
    >
    <List sx={{ width: '100%', maxWidth: 360, }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
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
      <button className='w-32 h-8 border-2 border-violet-500 bg-transparent hover:bg-violet-500 rounded-2xl mt-2
       md:ml-56 ml-40'>Connect</button>
      </List>
      </motion.div>
      )}
      </div>
  );
}


import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion"
import Dropdown from './dropdown';
import DropCard from './dropCard';
import {useState} from"react"


type authorprops={
    id:string
    firstname:string
    lastname:string
    email:string
    password:string
    post:postes
  }
type postes={
  id:string
  status:string
  location:number
  quate:string
  author:authorprops
 
}
type wprops={
     all:{
        firstname:string
        status:string
        quate:string
        lastname:string
        postId:string
    }
}

export default function P({all}:wprops) {
     const [open,setOpen]=useState(false)




  return (
        <motion.div  className='flex border-2 border-zinc-500 justify-center md:w-130 w-80  mx-auto  my-3 rounded-lg '
         initial={{y:'500'}}
         animate={{y:0}}
         transition={{duration:1.5, delay:0.5}}
        
        >
        <List sx={{ width: '100%', maxWidth: 360, }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"  sx={{ width: 56, height:  56 }} src="/static/images/avatar/1.jpg" className='mr-5' />
            </ListItemAvatar> 
            <ListItemText
              primary={all.firstname +" "+ all?.lastname}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                     {all?.quate}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          
          <button disabled={true} className='w-32 h-8 border-2 border-violet-500 bg-transparent hover:bg-violet-500 rounded-2xl mt-2
           md:ml-56 ml-40'>Panding</button>
         <Dropdown   setOpen={setOpen} />
          {open&&(<DropCard postId={all.postId} />)}    
          </List>
          </motion.div>
          )
}


// bg-gradient-to-r from-cyan-500 to-blue-500
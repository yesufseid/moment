import Loading from '../commponents/UI/Loading';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion"
import Layout from "../commponents/Layout"
import { Coustemgetallhistorypost } from '../api/historyapi';
import MakeSession from "../utils/useSession"; 
import { useNavigate } from 'react-router-dom';

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
  authorId:string
}

export default function AlignItemsList() {
  const{Expair,session}=MakeSession()
  const Navigat=useNavigate()
  if(!Expair())  Navigat("/login")
  const id=session().id


  const props ={
    onSuccess:(data)=>{
        console.log(data);
        
    },
    onError:(error)=>{
      console.log(error);
      
    },
    id:id
  }
  const {data,isLoading}=Coustemgetallhistorypost(props)
  return (
    <div className=' bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150%  items-center h-screen'>
    <Layout />
    {isLoading?(<Loading />):(
    <div className='overflow-auto h-129 '> 
    {data.post?.map((post:postes)=> 
    <motion.div  className='flex border-2 border-zinc-500 justify-center md:w-96 w-80  mx-auto  my-3 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'
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
          primary={data.firstname +" "+ data.lastname}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                 {post?.quate}
              </Typography>
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
      )}
      </div>
  );
}

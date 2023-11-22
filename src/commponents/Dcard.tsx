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
import { Coustemgetallhistorypost } from '../api/historyapi';
import MakeSession from "../utils/useSession"; 
import {useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Error from "../pages/error";

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
  const [er,setEr]=useState(false)
  const [refarash,setRefash]=useState(1)


  if(!Expair())  Navigat("/login")
  const id=session().id
  const props ={
    onSuccess:(data)=>{
        console.log(data);
        
    },
    onError:()=>{
        setEr(true)
    },
    id:id
  }

  const {data,isLoading,refetch}=Coustemgetallhistorypost(props)
  useMemo(()=>{
    setEr(false)
    return refetch()
  }
    ,[refarash])



  return (
    <div>
      {er?(<Error onClick={setRefash} />):(
        <div>
    {isLoading?(<Loading />):(
    <div className='overflow-auto h-129 '> 
    {
    data?.map((post:postes)=> 
    <motion.div  className='flex border-2 border-zinc-500 justify-center md:w-96 w-80  mx-auto  my-3 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500'
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
          primary={post?.author?.firstname +" "+ post?.author?.lastname}
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
       md:ml-56 ml-40'>{post.status}</button>
      </List>
      </motion.div>
      )}
      </div>
      )}
      </div>
      )}
      </div>
  );
  
}

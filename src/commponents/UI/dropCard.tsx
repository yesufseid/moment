
import { CoustemgetAccess } from '../../api/drop';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {motion} from "framer-motion"
import CircularProgress from '@mui/material/CircularProgress';
import { CoustemgiveAccesse } from '../../api/giveAccesse';
import { useState } from 'react';
import MakeSession from '../../utils/useSession';


type dropProps={
    postId?:string,
  }
  
  type authorprops={
    id:string
    firstname:string
    lastname:string
    email:string
    password:string
  }
  export default function dropCard({postId}:dropProps) {
     const {session}=MakeSession()
      const [id,setId]=useState("")  
    const props ={
      onSuccess:(data)=>{
          return  data.map((user:authorprops)=>{
            return setId(user.id)
          })
          
      },
      onError:(error)=>{
          console.log(error);
          
      },
      data:{
        userId:session().id,
        postId:postId
      }
    }
    const prop ={
      onSuccess:(data)=>{
         return console.log(data);
          
      },
      onError:(error)=>{
          console.log(error);
          
      },
      data:{
        userId:id,
        postId:postId
      }
    }
    const{data,isLoading}=CoustemgetAccess(props)
    const{refetch,isFetching}=CoustemgiveAccesse(prop)
    return (
      <div className='md:w-80 w-72 h-32  mb-0 pb-0'>
        {isLoading&&(<CircularProgress size={20}  className='ml-32 mt-14' />)}
             {data?.map((user:authorprops)=>
             <motion.div    key={user.id} className='flex border-2 mx-auto border-zinc-500 justify-center  rounded-lg  bg-transparent'
             initial={{y:'500'}}
             animate={{y:0}}
             transition={{duration:0.5, delay:0.5}}         
            >
            <List sx={{ width: '100%', maxWidth: 360, }}>
              <ListItem alignItems="flex-start" className='items-center'>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" sx={{ width: 32, height:  32 }}src="/static/images/avatar/1.jpg"   />
                </ListItemAvatar> 
                <ListItemText
                  primary={user.firstname +" "+ user.lastname}
                />

              
              <button  onClick={()=>refetch()} className='flex w-32 h-6 border-2 justify-center items-center border-violet-500 bg-transparent hover:bg-violet-500 rounded-2xl 
              ml-auto '>
                {isFetching&&(<div className="flex mx-2"><CircularProgress size={10}/></div>)}
                connect</button>
              </ListItem>
              </List>
              </motion.div>
             )

             }
      </div>
    )
  }
   


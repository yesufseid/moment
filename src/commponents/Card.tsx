import {useState} from "react"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion"
import MakeSession from "../utils/useSession";
import { Coustemgeactivitiy } from "../api/activitiy";
import CircularProgress from '@mui/material/CircularProgress';

type props={
  data:[]
}
type authorprops={
  id:string
  firstname:string
  lastname:string
  email:string
  password:string
}
type postes={
  id:string
  status:string
  location:number
  quate:string
  author:authorprops
  activitiy:[]
  authorId:string
}
type dataProps={
  userId:string
  authorId:string
}

export default function AlignItemsList({data}:props) {
  const {session}=MakeSession()
 const [datas,setdata]=useState<dataProps>()


  const props ={
    onSuccess:(data)=>{
      console.log(data)  
    },
    onError:(error)=>{
      console.log(error);
      
    },
    data:datas,
    id:session().id
  }
const{refetch,isFetching}=Coustemgeactivitiy(props)




const handleClick=(test:dataProps)=>{
   setdata(test)
   refetch()
}





  return (
    <div className='overflow-auto h-128 w-full md:h-129  md:mt-0 mt-24'> 
    {data?.map((post:postes)=>{   
    return  <motion.div    key={post.id} className='flex border-2 border-zinc-500 justify-center md:w-130 w-80  mx-auto  my-3 rounded-lg '
     initial={{y:'500'}}
     animate={{y:0}}
     transition={{duration:1.5, delay:0.5}}
    
    >
    <List sx={{ width: '100%', maxWidth: 360, }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" sx={{ width: 56, height:  56 }}src="/static/images/avatar/1.jpg"  className="mr-5" />
        </ListItemAvatar> 
        <ListItemText
          primary={post.author.firstname +" "+ post.author.lastname}
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
      <button  onClick={()=>handleClick({userId:session().id,
                                        authorId:post.id})}    disabled={post.authorId===session().id} className='flex w-32 h-10 border-2 justify-center items-center border-violet-500 bg-transparent hover:bg-violet-500 rounded-2xl mt-2
       md:ml-56 ml-40'>{isFetching&&(<div className="flex mx-2"><CircularProgress size={20}/></div>)} Connect</button>
      </List>
      </motion.div>
    } 
      )}
      </div>
  );
}

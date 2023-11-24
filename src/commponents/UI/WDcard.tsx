
import { getprofile } from '../../api/WDapi';
import {motion} from "framer-motion"
import MakeSession from "../../utils/useSession";
import CircularProgress from '@mui/material/CircularProgress';




type dropProps={
    postId:string
  }
  
  type authorprops={
    phone:string
    Telegram:string
    Instagram:string
    Facebook:string
    X:string
    Website:string
  }
  export default function dropCard({postId}:dropProps) {
     const{session}=MakeSession()
    const id=session().id
    const props ={
      onSuccess:(data)=>{
          return console.log(data);
          
      },
      onError:(error)=>{
          console.log(error);
          
      },
      data:{
        postId:postId,
      }
    }
    const{data}=getprofile(props)
   
    return (
      <div className='md:w-96 h-32  mb-0 pb-0  overflow-auto w-72 mx-3'>
             {data?.map((user:{})=>{
             const key=Object.keys(user)
             const value=Object.values(user)
            
     return  <motion.div   className='flex border-2 mx-auto border-zinc-500 justify-start  rounded-lg  bg-transparent'
             initial={{y:'500'}}
             animate={{y:0}}
             transition={{duration:1.5, delay:0.5}}
            
            >
             <ol className='flex justify-start ml-3 my-2'>
              <li className='mr-2'>{key[0]}</li>
              <li>{value[0]}</li>
             </ol>
              </motion.div>
               }
             )

             }
      </div>
    )
  }
   


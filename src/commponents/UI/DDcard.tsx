
import { getprofile } from '../../api/DDcardapi';
import {motion} from "framer-motion"
import CircularProgress from '@mui/material/CircularProgress';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';




type dropProps={
    authorId:string
  }
  
  export default function dropCard({authorId}:dropProps) {
    const props ={
      onSuccess:(data)=>{
          return console.log(data);
          
      },
      onError:(error)=>{
          console.log(error);
          
      },
      data:{
        authorId:authorId,
      }
    }
    const{data,isLoading}=getprofile(props)
   

    const handleCopy=(text:string)=>{
       return navigator.clipboard.writeText(text)
    }
    

    return (
      <div className='md:w-96 h-32  mb-0 pb-0  overflow-auto w-72 mx-3'>
        {isLoading&&(<CircularProgress size={20}  className='ml-32 mt-14' />)}
             {data?.map((user:{})=>{
             const keys=Object.keys(user)
             const values=Object.values(user)
             const key=keys[0]
             const value:any=values[0]
            
     return  <motion.div   className='flex border-2 mx-auto border-zinc-500 justify-start  rounded-lg  bg-transparent'
             initial={{y:'500'}}
             animate={{y:0}}
             transition={{duration:1.5, delay:0.5}}
            
            >
             <ol className='flex justify-start ml-3 my-2'>
              <li className='mr-2'>{key}</li>
              <li>{value} <ContentCopyIcon  onClick={()=>handleCopy(value)} className='ml-10 cursor-pointer transition ease-in-out delay-150
           hover:-translate-y-1 hover:scale-110 hover:border-sky-600 duration-300  shadow-xl' /></li>
             </ol>
              </motion.div>
               }
             )

             }
      </div>
    )
  }
   


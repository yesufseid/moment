import { useState } from "react"
import {motion} from "framer-motion"
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import DangerousIcon from '@mui/icons-material/Dangerous';
import {request} from "../utils/axios-utils"

type props ={
    onClick?:()=>void
  }
export default function Profile({onClick}:props) {
   const [lat,setLat]=useState("")
   const [long,setLong]=useState("")
   const [quate,setQuate]=useState("")

   
const handleSubmit=async()=>{
  const session=window.localStorage
  const id=session.id
    const lats=Number(lat)
    const longs=Number(long)
   const resultant:number=lats*lats+longs*longs 
   const location=Math.sqrt(resultant)
  return request({
   method:'post',
   url: '/post',
   data: {
     location:location,
     quate:quate,
     authorId:id,
     }})
    
}
   const handlelatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setLat(event.target.value);
  };
  const handlelongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setLong(event.target.value);
  };
  const handlequateChange = (event) => {
    return setQuate(event);
  };


  return (
    <motion.div className="w-auto bg-slate-400  absolute top-32 md:left-1/3 left-5 z-20 shadow-2xl rounded-lg p-7 justify-center"
     initial={{y:'-100vh'}}
     animate={{y:0}}
     transition={{duration:0.5, delay:0.5, type:"spring", stiffness:120 }}
      exit={{y:-1000}}
    >  
    <DangerousIcon onClick={onClick} className="ml-60 hover:bg-white cursor-pointer"/>
    <h1 className="text-center font-semibold text-4xl">New Post</h1>
    <h1 className="font-bold text-center ">Location</h1> 
    <div>
        <div className="grid grid-cols-2 ">
        <label className="ml-5" >Lat</label>
        <label className="ml-4">Long</label>
        </div>
        
    <input onChange={handlelongChange}  type="text " placeholder="67.234" className="w-32 h-10 border-2 border-zinc-950 rounded-2xl my-2 mx-2"  />
    <input  onChange={handlelatChange}    type="text " placeholder="43.28728" className="w-32 h-10 border-2 border-zinc-950 rounded-2xl my-2"  />
    </div>
    <h1 className="font-bold">quate</h1>
    <div className=""><textarea onChange={(e)=>handlequateChange(e.currentTarget.value)}  placeholder="your red dress is awsome" className="w-60 h-20 caret-pink-500 border-2
     border-zinc-950 rounded-2xl my-2" /></div>
     <div className="flex justify-end align-middle pb-2">
  <Button onClick={handleSubmit} className="w-24  pt-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" variant="outlined">{false&&(<div className="flex mx-2"><CircularProgress size={20}/></div>)}Save</Button>
  </div>
     
    </motion.div>
  )
}

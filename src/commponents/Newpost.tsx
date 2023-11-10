import { useState } from "react"
import {motion} from "framer-motion"
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import DangerousIcon from '@mui/icons-material/Dangerous';


type props ={
    onClick?:()=>void
  }
export default function Profile({onClick}:props) {
   



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
        
    <input type="text " placeholder="67.234" className="w-32 h-10 border-2 border-zinc-950 rounded-2xl my-2 mx-2"  />
    <input type="text " placeholder="43.28728" className="w-32 h-10 border-2 border-zinc-950 rounded-2xl my-2"  />
    </div>
    <h1 className="font-bold">quate</h1>
    <div className=""><textarea   placeholder="your red dress is awsome" className="w-60 h-20 caret-pink-500 border-2
     border-zinc-950 rounded-2xl my-2" /></div>
     <div className="flex justify-end align-middle pb-2">
  <Button className="w-24  pt-2" variant="outlined">{false&&(<div className="flex mx-2"><CircularProgress size={20}/></div>)}Save</Button>
  </div>
     
    </motion.div>
  )
}

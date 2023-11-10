import { useState } from "react"
import {motion} from "framer-motion"
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import DangerousIcon from '@mui/icons-material/Dangerous'
type props ={
  onClick?:()=>void
}


export default function Profile({onClick}:props) {
   const [add,setAdd]=useState(["1","2","3"])



  return (
    <motion.div className="w-auto bg-slate-400  absolute top-32 left-1/2 shadow-2xl rounded-lg p-5"
     initial={{y:'-100vh'}}
     animate={{y:0}}
     transition={{duration:0.5, delay:0.5, type:"spring", stiffness:120 }}
    exit={{y:-1000}}
    >  
    <DangerousIcon onClick={onClick}   className="ml-96 hover:bg-white cursor-pointer"/>
    <h1 className="text-center font-semibold text-4xl">Profile</h1>
    <div className="flex ">
    <h1 className="font-bold text-center ml-16">key</h1> 
    <h1 className="font-bold  text-center ml-auto mr-32">value</h1>  
   </div> 
   {add?.map(()=>
    <div className="flex    mx-5">
    <div><input type="text " placeholder="email" className="w-32 h-10 border-2 border-zinc-950 rounded-2xl my-2"  /></div>
    <div className="ml-10"><textarea   placeholder="moment@gmail.com" className="w-60 h-10 caret-pink-500 border-2 border-zinc-950 rounded-2xl my-2" /></div>
    </div> 
   )} 
  <div className="flex justify-end align-middle pb-2">
  <Button className="w-24  pt-2" variant="outlined">{false&&(<div className="flex mx-2"><CircularProgress size={20}/></div>)}Save</Button>
  <AddIcon onClick={()=>setAdd((prev)=>[...prev,"q"])}  fontSize="large" className="rounded-full
  text-4xl   ml-2 border-2 border-slate-900   hover:bg-slate-900  text-center  "/>
  </div>
     
    </motion.div>
  )
}

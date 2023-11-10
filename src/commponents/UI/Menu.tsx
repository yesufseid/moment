
import { Logoprofile } from "./Logo"
import DangerousIcon from '@mui/icons-material/Dangerous';
import {motion} from "framer-motion"
import React from "react";

type Iconprops={
    onClick:()=>void,
    children:React.ReactNode
 }
export default function Menu({onClick,children}:Iconprops) {

  return (
    <motion.div className="w-96 h-screen absolute top-0 left-0 bg-white"
     initial={{x:'-100vw'}}
     animate={{x:0,}}
     transition={{duration:1,when:"beforeChildern"}}
     exit={{x:-1000}}
     
    >
        <div className="mb-36 border-b-orange-500 border-2 flex items-center">
        <Logoprofile />
        <DangerousIcon  className="ml-auto mr-5" fontSize="large" onClick={onClick}/>
        </div>
       {children}
    </motion.div>
  )
}

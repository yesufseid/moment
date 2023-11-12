
import { Logoprofile } from "./Logo"
import DangerousIcon from '@mui/icons-material/Dangerous';
import {motion} from "framer-motion"



type menuprops={
    onClick:React.Dispatch<React.SetStateAction<boolean>>,
    children:React.ReactNode
}


export default function Menu({onClick,children}:menuprops) {

  return (
    <motion.div className="w-96 h-screen absolute top-0 left-0 bottom-0 bg-black  "
     initial={{x:'-100vw'}}
     animate={{x:0,}}
     transition={{duration:1,type:"spring" , when:"beforeChildern"}}
     exit={{x:-1000}}
     
    >
        <div className="bg-gradient-to-r      from-bottem from-0% via-xx via-40% to-bb to-150%    pt-3  pb-5">
        <DangerousIcon  className="ml-80  mr-5 hover:bg-slate-400 cursor-pointer" fontSize="large" onClick={()=>onClick(prev=>!prev)}/>
        <Logoprofile />
        </div>
        <div>
        {children}
        </div>
    </motion.div>
   
  )
  
}

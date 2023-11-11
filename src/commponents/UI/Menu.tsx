
import { Logoprofile } from "./Logo"
import DangerousIcon from '@mui/icons-material/Dangerous';
import {motion} from "framer-motion"



type menuprops={
    onClick:React.Dispatch<React.SetStateAction<boolean>>,
    children:React.ReactNode
}


export default function Menu({onClick,children}:menuprops) {

  return (
    <motion.div className="w-96 h-screen absolute top-0 left-0 bottom-0 bg-nav z-20"
     initial={{x:'-100vw'}}
     animate={{x:0,}}
     transition={{duration:1,type:"spring" , when:"beforeChildern"}}
     exit={{x:-1000}}
     
    >
        <div className="mb-20 border-b-orange-500 border-2 flex items-center">
        <Logoprofile />
        <DangerousIcon  className="ml-auto mr-5" fontSize="large" onClick={()=>onClick(prev=>!prev)}/>
        </div>
        <div>
        {children}
        </div>
    </motion.div>
   
  )
  
}


import Logoprofile  from "./profile-img"
import DangerousIcon from '@mui/icons-material/Dangerous';
import {motion} from "framer-motion"



type menuprops={
    onClick:React.Dispatch<React.SetStateAction<boolean>>,
    children:React.ReactNode
}


export default function Menu({onClick,children}:menuprops) {

  return (
    <motion.div className=" md:w-90 w-80  h-screen absolute top-0 left-0 bottom-0 bg-black  z-20 border-r-2 rounded-2xl"
     initial={{x:'-100vw'}}
     animate={{x:0,}}
     transition={{duration:1,type:"spring" , when:"beforeChildern"}}
     exit={{x:-1000}}
     
    >
        <div className=" bg-white   pt-3  pb-5 border-r-2 rounded-2xl">
        <DangerousIcon  className="ml-80  mr-5 cursor-pointer" fontSize="large" onClick={()=>onClick(prev=>!prev)}/>
        <Logoprofile />
        </div>
        <div>
        {children}
        </div>
    </motion.div>
   
  )
  
}

import Logo from "./UI/Logo"
import Toggle from "./UI/Toggle"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Search from "./Search"
import { Logoprofile } from "./UI/Logo"
import DangerousIcon from '@mui/icons-material/Dangerous';
import {motion} from "framer-motion"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';


type NavbarProps={
  onClickProfile ?:()=>void
  onClicknewPost ?:()=>void
}

export default function Navbar({onClickProfile,onClicknewPost}:NavbarProps) {
    const [open,setOpen]=useState(false)

const MenuItem=()=> {
  const handleMenuItemClick=()=>{
    setOpen(prev=>!prev)
    onClickProfile()
  }  
const handle =()=>{
  setOpen(prev=>!prev)
  onClicknewPost()
}


  return (
    <div >
        
    <motion.div onClick={handleMenuItemClick}
    className="border-2 flex border-indigo-500/100  py-3 px-3  my-14 items-center w-56 
    rounded-md text-center hover:bg-indigo-500/100 mx-auto "
    initial={{x:'-100vw'}}
    animate={{x:0,}}
    transition={{duration:0.5, type:"spring", stiffness:50}}
    >
      <AccountBoxIcon  fontSize="large"/>
      <p>Profile </p>

    </motion.div>
    <motion.div onClick={handle}
    className="border-2 flex border-indigo-500/100  py-3 px-3  my-14 items-center w-56 
    rounded-md text-center hover:bg-indigo-500/100 mx-auto "
    initial={{x:'-100vw'}}
    animate={{x:0,}}
    transition={{duration:0.5, type:"spring", stiffness:50}}
    >
      <DynamicFeedIcon fontSize="large"/>
      <p> new Post</p>

    </motion.div>
    
    </div>
  )
}

const Menu=()=> {

  return (
    <motion.div className="w-96 h-screen absolute top-0 left-0 bg-white z-20"
     initial={{x:'-100vw'}}
     animate={{x:0,}}
     transition={{duration:1,type:"spring" , when:"beforeChildern"}}
     exit={{x:-1000}}
     
    >
        <div className="mb-36 border-b-orange-500 border-2 flex items-center">
        <Logoprofile />
        <DangerousIcon  className="ml-auto mr-5" fontSize="large" onClick={()=>setOpen(prev=>!prev)}/>
        </div>
       <MenuItem />
    </motion.div>
  )
}
return (
  <div className="flex items-center  border-b-4 border-black py-2">
    <div className="ml-20 md:mr-72">
    <Logo  />
    </div>
    <div className="">
    <Search />
    </div>
   <div className="mx-auto mr-20 my-auto ">
   <Toggle  onClick={()=>setOpen(prev=>!prev)}/>
   </div>
   <AnimatePresence>
   {open&&( <Menu/>)}
   </AnimatePresence>
  </div>
)
}

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import{motion} from "framer-motion"
type menuitemprops={
  setProfile:React.Dispatch<React.SetStateAction<boolean>>
  onClicknewPost : React.Dispatch<React.SetStateAction<boolean>>
  openMenu:React.Dispatch<React.SetStateAction<boolean>>
}
import { NavLink } from 'react-router-dom';

export default function MenuItem({setProfile,onClicknewPost,openMenu,}:menuitemprops) {
  const handleMenuItemClick=()=>{
    openMenu(prev=>!prev)
    setProfile(true)
  }  
const handle =()=>{
  openMenu(prev=>!prev)
  onClicknewPost(true)
}

const newHandle=()=>{
  openMenu(prev=>!prev)
}

return (
    <div >
        
    <motion.div onClick={handleMenuItemClick}
    className="border-2 flex border-indigo-500/100  py-3 px-3  my-10 items-center w-56  cursor-pointer
    rounded-md text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-auto z-20 justify-center"
    initial={{x:'-100vw'}}
    animate={{x:0,}}
    transition={{duration:0.5, type:"spring", stiffness:50,when:"beforeChildern"}}
    >
      <AccountBoxIcon  fontSize="large"  className="mr-5"/>
      <p>Profile </p>

    </motion.div>
    <motion.div onClick={handle}
    className="border-2 flex border-indigo-500/100  py-3 px-3  my-14 items-center w-56 cursor-pointer
    rounded-md text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-auto z-20 justify-center"
    initial={{x:'-100vw'}}
    animate={{x:0,}}
    transition={{duration:0.5, type:"spring", stiffness:50,when:"beforeChildern"}}
    >
      <DynamicFeedIcon fontSize="large"  className="mr-5"/>
      <p> new Post</p>

    </motion.div>
    <motion.div  onClick={newHandle}
    className="border-2 flex border-indigo-500/100  py-3 px-3  my-14 items-center w-56 cursor-pointer
    rounded-md text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-auto z-20 justify-center"
    initial={{x:'-100vw'}}
    animate={{x:0,}}
    transition={{duration:0.5, type:"spring", stiffness:50,when:"beforeChildern"}}
    >
      <DynamicFeedIcon fontSize="large" className="mr-5"/>
       <NavLink to={"/zxcvbnmasdfgthydgsgbsn"}>History</NavLink>

    </motion.div>
     </div>
    
  )
}

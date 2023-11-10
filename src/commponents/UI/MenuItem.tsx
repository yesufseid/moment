import { NavLink } from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import{motion} from "framer-motion"
type Iconprops={
    onClick ?:()=>void
 }


export default function MenuItem({onClick}:Iconprops) {
const datas=[{url:"/",text:"Profile",icon:<AccountBoxIcon  fontSize="large"/>},{url:"/",text:"new Post",icon:<DynamicFeedIcon fontSize="large"/>},]
  return (
    <div >
        {datas?.map((data)=>
    <motion.div  onClick={onClick}
    className="border-2 flex border-indigo-500/100  py-3 px-3  my-14 items-center w-56 
    rounded-md text-center hover:bg-indigo-500/100 mx-auto"
    initial={{x:'-100vw'}}
    animate={{x:0,}}
    transition={{duration:1.5,}}
    >
       {data.icon}
      <NavLink 
         to={data.url}
      >{data.text}</NavLink>

    </motion.div>
     )}
    </div>
  )
}

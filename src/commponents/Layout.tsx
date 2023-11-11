import Navbar from './Navbar';
import { useState } from "react"
import Profile from "./Profile"
import Newpost from "./Newpost"
import Search from "./Search"
import Menu from "./UI/Menu";
import { AnimatePresence } from "framer-motion"
import MenuItem from "./UI/MenuItem";





type layoutprops={
    children?:React.ReactNode
}

const Layout =({children}:layoutprops) =>{
    const [openprofile ,setProfile]=useState(false)
    const [opennewpost ,setNewpost]=useState(false)
    const [data,setData]=useState([])
    const [location,setLocation]=useState<number>()
    const [open,setOpen]=useState(false)


    const queryFunction=(location:number)=>{
        console.log("frist");
       
      }

    return(
        <>
        <div>
        <Navbar  openMenu={setOpen} 
        children={<Search fun={queryFunction} />}/>
      {openprofile&&(<Profile  onClick={()=>setProfile(false)}/> )}
      {opennewpost&&(<Newpost onClick={()=>setNewpost(false)}/>)}
      <AnimatePresence>
   {open&&( <Menu  onClick={setOpen} children={<MenuItem setProfile={setProfile}  onClicknewPost={setNewpost} openMenu={setOpen}/>} />)}
   </AnimatePresence> 
      </div>
      <main>{children}</main>
        </>
    )
}

export default Layout;
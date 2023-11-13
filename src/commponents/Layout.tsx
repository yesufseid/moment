import Navbar from './Navbar';
import React, { useState } from "react"
import Profile from "./Profile"
import Newpost from "./Newpost"
// import Search from "./Search"
import Menu from "./UI/Menu";
import { AnimatePresence } from "framer-motion"
import MenuItem from "./UI/MenuItem";
// import { Coustemgetallpost } from '../api/CoustemApi';






type layoutprops={
    children?:React.ReactNode,
    search?:React.ReactNode

}

const Layout =({children,search}:layoutprops) =>{
    const [openprofile ,setProfile]=useState(false)
    const [opennewpost ,setNewpost]=useState(false)
    // const [data,setData]=useState([])
    // const [location,setLocation]=useState<number>()
    const [open,setOpen]=useState(false)

  
    // const props ={
    //   onSuccess:(data)=>{
    //       console.log(data);
          
    //   },
    //   onError:(error)=>{
    //     console.log(error);
        
    //   },
    //   location:location
    // }
    // const queryFunction=(location:number)=>{
    // // console.log(location);
    // // const xx=request({ method:'get',
    // //   url: '/allposts/allposts?location='+90,
    // //   })
  
    // return Coustemgetallpost(location)
    //   }

    return(
        <>
        <div>
        <Navbar  openMenu={setOpen} 
        children={search}/>
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
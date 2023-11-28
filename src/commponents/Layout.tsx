import Navbar from './Navbar';
import React, { useState } from "react"
import Profile from "./Profile"
import Newpost from "./Newpost"
import Menu from "./UI/Menu";
import { AnimatePresence } from "framer-motion"
import MenuItem from "./UI/MenuItem";
import {CoustemprofilelogogetImg} from "../api/profileImg"
import MakeSession from "../utils/useSession"



type layoutprops={
    children?:React.ReactNode,
    search?:React.ReactNode

}

const Layout =({children,search}:layoutprops) =>{
    const {session}=MakeSession()
    const [image,setimage]=useState<any>()
    const [openprofile ,setProfile]=useState(false)
    const [opennewpost ,setNewpost]=useState(false)
    const [open,setOpen]=useState(false)
   
    const prop ={
        onSuccess:(data)=>{
            data.map((i)=>{
                setimage(i.img)
            })   
        },
        onError:(error)=>{
         return console.log(error);
         
        },
            id:session().id
      }
   const{}=CoustemprofilelogogetImg(prop)


    return(
        <>
       
        <div>
        <Navbar  openMenu={setOpen} 
            children={search}/>

      {openprofile&&(<Profile  onClick={()=>setProfile(false)}/> )}
      {opennewpost&&(<Newpost onClick={()=>setNewpost(false)}/>)}
      <AnimatePresence>
   {open&&( <Menu  image={image} onClick={setOpen} children={<MenuItem setProfile={setProfile}  onClicknewPost={setNewpost} openMenu={setOpen}/>} />)}
   </AnimatePresence> 
      </div>
     
      <main>{children}</main>
      
        </>
    )
}

export default Layout;
import Navbar from "../commponents/Navbar"
import Profile from "../commponents/Profile"
import { useState } from "react"
import Newpost from "../commponents/Newpost"
import { AnimatePresence } from "framer-motion"
import  Card  from "../commponents/Card"

export default function Home() {
const [openprofile ,setProfile]=useState(false)
const [opennewpost ,setNewpost]=useState(false)



  return (
    <div className='h-screen bg-gradient-to-r from-Richblack to-bray items-center '>
        <Navbar onClickProfile={()=>setProfile(true)} onClicknewPost={()=>setNewpost(true)}/>
        <AnimatePresence>
        {openprofile&&(<Profile  onClick={()=>setProfile(false)}/> )}
        </AnimatePresence>
        <AnimatePresence>
        {opennewpost&&(<Newpost onClick={()=>setNewpost(false)}/>)}
        </AnimatePresence>
        <div className="w-fit h-fir ml-5 ">
        <Card />
        </div>
    </div>
  )
}

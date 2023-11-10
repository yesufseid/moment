import Navbar from "../commponents/Navbar"
import Profile from "../commponents/Profile"
import { useState } from "react"
import Newpost from "../commponents/Newpost"
import { AnimatePresence } from "framer-motion"
import  Card  from "../commponents/Card"
import Search from "../commponents/Search"
import {Coustemgetallpost} from "../api/CoustemApi"



export default function Home() {
const [openprofile ,setProfile]=useState(false)
const [opennewpost ,setNewpost]=useState(false)
const [data,setData]=useState([])

const queryFunction=(location:number)=>{
 
   
}




  return (
    <div className='h-screen bg-gradient-to-r from-Richblack to-bray items-center '>
        <Navbar onClickProfile={()=>setProfile(true)} onClicknewPost={()=>setNewpost(true)} children={<Search fun={queryFunction} />}/>
        <AnimatePresence>
        {openprofile&&(<Profile  onClick={()=>setProfile(false)}/> )}
        </AnimatePresence>
        <AnimatePresence>
        {opennewpost&&(<Newpost onClick={()=>setNewpost(false)}/>)}
        </AnimatePresence>
        <div className="w-screen   md:mx-auto  mt-28 md:mt-0 ">
        <Card data={data} />
        </div>
    </div>
  )
}



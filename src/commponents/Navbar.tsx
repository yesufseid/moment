import Logo from "./UI/Logo"
import Toggle from "./UI/Toggle"
import Menu from "./UI/Menu"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import MenuItem from "./UI/MenuItem"
import Search from "./Search"


export default function Navbar() {
    const [open,setOpen]=useState(false)
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
     {open&&( <Menu children={<MenuItem onClick={()=>setOpen(prev=>!prev)} />} onClick={()=>setOpen(prev=>!prev)}/>)}
     </AnimatePresence>
    </div>
  )
}

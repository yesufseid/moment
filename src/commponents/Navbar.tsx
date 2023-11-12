import Logo from "./UI/Logo"
import Toggle from "./UI/Toggle"
import { AnimatePresence,motion } from "framer-motion"



type NavbarProps={
  children?:React.ReactNode
  openMenu?:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({children,openMenu}:NavbarProps) {
   


return (
  <motion.div className="flex items-center   py-5  md:mb-0 bg-gradient-to-r  from-bb from-0% via-xx via-40% to-bottem to-130%  "
  >
    <div className=" md:ml-20 ml-5 md:mr-40 cursor-pointer">
    <Logo  />
    </div>
    <div className="">
    {children}
    </div>
   <div className="mx-auto md:mr-20 mr-10 my-auto cursor-pointer">
   <Toggle  onClick={()=>openMenu(prev=>!prev)}/>
   </div>
   <div className="z-20">
   <AnimatePresence>
   {/* {open&&( <Menu/>)} */}
   </AnimatePresence>
   </div>
  </motion.div>
)
}
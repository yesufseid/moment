
import { motion } from "framer-motion"
type errorprops={
    onClick: React.Dispatch<React.SetStateAction<number>>
}

export default function error({onClick}:errorprops) {
  
  return (
  <>
    <div className='h-screen  text-center align-middle  bg-gradient-to-r  mt-20 from-bottem from-0% via-xx via-40% to-bb to-150% '>
         <h1 className='font-extrabold text-4xl  pt-20'>501</h1>
    <h1 className='font-extrabold text-4xl '>oops  some thing is wrong</h1>
    <h1 className='font-extrabold text-4xl mb-10'></h1>
    <button  onClick={()=>onClick((prev)=>prev+1)} className="w-56 px-10 py-2 mt-10 bg-slate-700 hover:outline hover:bg-transparent   rounded-full">Reafrash</button>
</div>
</>
  )
}




const loaderVariant={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            },
            
        }

    },

}

const Loader=()=>{
    return(
        <>
        <motion.div className='loader'
         variants={loaderVariant}
         animate='animationOne'
        >

        </motion.div>
        
        </>
    )

}


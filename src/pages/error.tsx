import {FallbackProps} from "react-error-boundary"
import { motion } from "framer-motion"


export default function error(props:FallbackProps) {
  const {resetErrorBoundary}=props
  return (
    <div className='h-screen   text-center'>
       <motion.div className="w-5 h-5 rounded-full bg-white"
         animate={{x:[-20,20] , y:[0,-30]}}
         transition={{x:{yoyo:Infinity ,duration:0.5},y:{yoyo:Infinity,duration:0.5,easy:"easyInOut"}}}
       >
       </motion.div>      <h1 className='font-extrabold text-4xl mt-60'>501</h1>
    <h1 className='font-extrabold text-4xl '>some thing is wrong in the server </h1>
    <h1 className='font-extrabold text-4xl mb-10'></h1>
    <button onClick={resetErrorBoundary} className="w-56 px-10 py-2 mt-10 bg-slate-700 hover:outline hover:bg-transparent   rounded-full">Back Home</button>
</div>
  )
}

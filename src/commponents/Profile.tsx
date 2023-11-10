import { useState } from "react"




export default function Profile() {
   const [add,setAdd]=useState(["1","2","3"])



  return (
    <div className="w-auto bg-slate-400  absolute top-60 left-96" >  
    <div className="flex ">
    <h1 className="font-bold text-center ml-10">key</h1> 
    <h1 className="font bold  text-center ml-auto mr-10">value</h1>  
   </div> 
   {add?.map(()=>
    <div className="grid  grid-cols-2  gap-6 mx-5">
    <div><input type="text mx-4 border-2 border-zinc-950 rounded-2xl" className="w-32 my-2"  /></div>
    <div><input type="text" className="w-32 my-2" /></div>
    </div> 
   )} 

   <button onClick={()=>setAdd((prev)=>[...prev,"q"])} className="w-10 h-10 rounded-full
  text-4xl ml-64  text-center bg-transparent ">+</button>      
    </div>
  )
}

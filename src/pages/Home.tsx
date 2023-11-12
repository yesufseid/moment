
import { useState } from "react"
import  Card  from "../commponents/Card"
import Layout from "../commponents/Layout";



export default function Home() {
const [data,setData]=useState([])
// const [location,setLocation]=useState<number>()

// const onSeccss=(data)=>{
//   setData(data)
//   console.log(data);
  
// }
// const onError=(error)=>{
//   console.log(error);
  
// }
//   const {}=Coustemgetallpost(onSeccss,onError)

// const queryFunction=(location:number)=>{
//   console.log("frist");
 
// }




  return (
    <div className=' md:h-full h-screen md:w-full w-screen   bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150% items-center '>
        <Layout />
        
        <Card data={data} />
       
    </div>
  )
}



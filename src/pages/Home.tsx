
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
    <div className='h-screen bg-gradient-to-r from-Richblack to-bray items-center '>
        <Layout />
        <div className="w-screen   md:mx-auto  mt-28 md:mt-0 ">
        <Card data={data} />
        </div>
    </div>
  )
}



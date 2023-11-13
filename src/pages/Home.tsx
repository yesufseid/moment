
import { useEffect, useState } from "react"
import  Card  from "../commponents/Card"
import Layout from "../commponents/Layout";
import Search from "../commponents/Search"
import { Coustemgetallpost } from "../api/CoustemApi";
import Loading from "../commponents/UI/Loading";

export default function Home() {
const [location,setLocation]=useState<number>()
const props ={
  onSuccess:(data)=>{
      console.log(data);
      
  },
  onError:(error)=>{
    console.log(error);
    
  },
  location:location
}

const{refetch,data,isLoading}=Coustemgetallpost(props)
useEffect(()=>{
  if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
   const lats=position.coords.latitude
    const longs=position.coords.longitude
    const resultant:number=lats*lats+longs*longs
    const location=Math.sqrt(resultant)+0.87 
  setLocation(location)
  return refetch()
  })
} else {
  return null
 }



},[])

const queryFunction=(location:number)=>{
  setLocation(location)
  return refetch()
}




  return (
    <div className=' md:h-full h-screen md:w-full w-screen   bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150% items-center '>
      <Layout search={<Search fun={queryFunction} />} />
       {isLoading?(<Loading />):(<Card data={data} />)}
       
       
    </div>
  )}



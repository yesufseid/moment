
import { useEffect, useState } from "react"
import  Card  from "../commponents/Card"
import Layout from "../commponents/Layout";
import Search from "../commponents/Search"
import { Coustemgetallpost } from "../api/CoustemApi";
import Loading from "../commponents/UI/Loading";
import MakeSession from "../utils/useSession"; 
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [location,setLocation]=useState<number>(67)
  const{Expair}=MakeSession()
  const Navigat=useNavigate()
  useEffect(()=>{
    if(!Expair())  Navigat("/login")
    if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
     const lats=position.coords.latitude
      const longs=position.coords.longitude
      const resultant:number=lats*lats+longs*longs
      const location=Math.sqrt(resultant)+0.87 
    setLocation(location)
  })
} else {
  return null
 }
  })


 

const props ={
  onSuccess:(data)=>{
    return data 
  },
  onError:(error)=>{
    return error
  },
  location:location
}

const{refetch,data,isFetching,error}=Coustemgetallpost(props)
if(error) alert("error")

useEffect(()=>{
  refetch()
},[location])


const queryFunction=(location:number)=>{
  setLocation(location)
  return refetch()
}




  return (
    <div className=' md:h-full h-screen md:w-full w-screen   bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150% items-center '>
      <Layout search={<Search fun={queryFunction} />} />
       {isFetching?(<Loading />):(<Card data={data} />)} 
    </div>
  )}



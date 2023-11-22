
import { useEffect, useMemo, useState } from "react"
import  Card  from "../commponents/Card"
import Layout from "../commponents/Layout";
import Search from "../commponents/Search"
import { Coustemgetallpost } from "../api/CoustemApi";
import Loading from "../commponents/UI/Loading";
import MakeSession from "../utils/useSession"; 
import { useNavigate } from 'react-router-dom';
import Error from "./error";


export default function Home() {
  const [location,setLocation]=useState<number>(67)
  const [refarash,setRefash]=useState(1)
  const {session}=MakeSession()
  
  
  const{Expair}=MakeSession()
  const Navigat=useNavigate()
  const [er,setEr]=useState(false)

  const props ={
    onSuccess:(data)=>{
      return data 
    },
    onError:()=>{
     return setEr(true)
     
    },
    location:location,
    id:session().id
  }
  
  const{refetch,data,isLoading}=Coustemgetallpost(props)



const xx=()=>{
  console.log("xx");
  
  if(!Expair())  Navigat("/login")
  setEr(false)
  try {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
       const lats=position.coords.latitude
        const longs=position.coords.longitude
        const resultant:number=lats*lats+longs*longs
        const location=Math.sqrt(resultant)+0.87 
      setLocation(location)
      return refetch()
    })}
  }catch (error) {
      setEr(true)
  }

  }


  useEffect(()=>{
    setEr(false)
    refetch()
  },[location])
  


useMemo(
  xx,
  [refarash]
)


const queryFunction=(location:number)=>{
  setLocation(location)
  return refetch()
}




  return (
    <div className=' md:h-full h-screen md:w-full w-screen  bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150% items-center '>
      <Layout search={<Search fun={queryFunction} />} />
    {er?(<Error  onClick={setRefash}/>
       ):(<div>{isLoading?(<Loading />):(<Card data={data} />)} </div>)}
    </div>
  )}



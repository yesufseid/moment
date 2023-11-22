import Loading from '../commponents/UI/Loading';

import { Coustemgetallhistorypost } from '../api/panding';
import MakeSession from "../utils/useSession"; 
import {useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Error from "../pages/error";
import PP from '../commponents/UI/pp'
import W from '../commponents/UI/W';



type authorprops={
  id:string
  firstname:string
  lastname:string
  email:string
  password:string
  post:postes
}
type postes={
  id:string
  status:string
  location:number
  quate:string
  author:authorprops
  authorId:string
  access:[]
}

export default function AlignItemsList() {
  const{Expair,session}=MakeSession()
  const Navigat=useNavigate()
  const [er,setEr]=useState(false)
  const [refarash,setRefash]=useState(1)
  const [data,setData]=useState([])
  const [open,setOpen]=useState(false)


  if(!Expair())  Navigat("/login")
  const id=session().id
  const props ={
    onSuccess:(data)=>{
        return setData(data)
    },
    onError:()=>{
        setEr(true)
    },
    id:id
  }

  const {isLoading,isFetching}=Coustemgetallhistorypost(props)
  // useMemo(()=>{
  //   setEr(false)
  //   return refetch()
  // }
  //   ,[refarash])



  return (
    <div>
      {er?(<Error onClick={setRefash} />):(
        <div>
    {isFetching?(<Loading />):(
    <div className='overflow-auto h-129 '> 
    {
    data?.map((post:postes)=>{
      const L=post.access.length
      const all={
        firstname:post.author.firstname ,
        status:post.status,
        quate:post.quate,
        lastname:post.author.lastname,
      }
        if(L===0){
          return(<PP all={all} />) 
        }else{
          return (<W all={all} />) 
        }
   
      }
      )}
      </div>
      )}
      </div>
      )}
      </div>
  );
  
}

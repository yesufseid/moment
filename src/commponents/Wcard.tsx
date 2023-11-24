import Loading from '../commponents/UI/Loading';
import { Coustemgetallhistorypost } from '../api/historyapi';
import MakeSession from "../utils/useSession"; 
import {useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Error from "../pages/error";
import P from '../commponents/UI/P'
import W from '../commponents/UI/W';
import WD from './UI/WD';



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
  activitiy:[]
  accesse:[]
}

export default function AlignItemsList() {
  const{Expair,session}=MakeSession()
  const Navigat=useNavigate()
  const [er,setEr]=useState(false)
  const [refarash,setRefash]=useState(1)


  if(!Expair())  Navigat("/login")
  const id=session().id
  const props ={
    onSuccess:(data)=>{
        console.log(data);
        
    },
    onError:()=>{
        setEr(true)
    },
    id:id
  }

  const {data,isLoading,refetch}=Coustemgetallhistorypost(props)
  useMemo(()=>{
    setEr(false)
    return refetch()
  }
    ,[refarash])



  return (
    <div>
      {er&&(<Error onClick={setRefash} />)}
    {isLoading&&(<Loading />)}
    <div className='overflow-auto h-129 '> 
    {
    data?.post.map((post:postes)=>{
      const L=post.activitiy.length
      const C=post.accesse.length
      const all={
        firstname:data.firstname ,
        status:post.status,
        quate:post.quate,
        lastname:data.lastname,
        postId:post.id,
      }
      if(C===0){
        if(L===0){
          return (<W all={all} />) 
        }else{
         return(<P all={all} />)
        }
      }else{
        const all={
          firstname:data.firstname ,
          status:post.status,
          quate:post.quate,
          lastname:data.lastname,
          postId:post.id,
        }
          return (<WD  all={all} />)
      }
    } 
      )}
      </div>
      </div>
  );
  
}

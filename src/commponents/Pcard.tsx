import Loading from '../commponents/UI/Loading';
import { Coustemgetallhistorypost } from '../api/panding';
import MakeSession from "../utils/useSession"; 
import {useState } from "react"
import { useNavigate } from 'react-router-dom';
import Error from "../pages/error";
import PP from '../commponents/UI/pp'
import Done from '../commponents/UI/done';



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
  accesse:[]
}
type author={
  author:postes
  authorId:string
  id:string
  userId:string
}



export default function AlignItemsList() {
  const{Expair,session}=MakeSession()
  const Navigat=useNavigate()
  const [er,setEr]=useState(false)
  
  const [data,setData]=useState([])
 


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

  const {isLoading}=Coustemgetallhistorypost(props)




  return (
    <div>
      {er&&(<Error />)}
   
    {isLoading&&(<Loading />)}
    <div className='overflow-auto h-129 '> 
    {
    data?.map((post:author)=>{
      const L=post.author.accesse.length
      const all={
        firstname:post.author.author.firstname ,
        status:post.author.status,
        quate:post.author.quate,
        lastname:post.author.author.lastname,
        authorId:post.author.authorId
      }
        if(L===0){
          return(<PP all={all} />) 
        }else{
          return (<Done all={all} />) 
        }
      }
      )}
      </div>
      </div>
  );
  
}

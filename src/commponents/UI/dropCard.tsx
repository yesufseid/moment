
import { useState } from "react"
import { CoustemgetAccess } from '../../api/drop';
import MakeSession from '../../utils/useSession';



type dropProps={
    authorId:string
  }
  
  
  export default function dropCard({authorId}:dropProps) {
     const{session}=MakeSession()
  
  
  
  
    const id=session().id
    const props ={
      onSuccess:(data)=>{
          return console.log(data);
          
      },
      onError:(error)=>{
          console.log(error);
          
      },
      data:{
        userId:id,
        authorId:authorId
      }
    }
  
    const{}=CoustemgetAccess(props)
  
  
  
    return (
      <div className='w-60 h-fit relative top-2 '>
             
      </div>
    )
  }
  
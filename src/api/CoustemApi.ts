import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"


type coustemprops ={
    location:number
    id:string
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}

type dataprops={
    AllPosts:[]
}
const getposts=(location,id)=>{
    
    return request({ method:'get',
    url:'/allposts/allpost?location='+location+"$ userId="+id,
    })
}
type dprops={
    id:string
    userId:string
    authorId:string
}



export const Coustemgetallpost=({onError,onSuccess,location,id}:coustemprops)=>{   
return useQuery(['posts',location,id],()=>getposts(location,id),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
     return data.post 
        
    },
    enabled:false
})
}
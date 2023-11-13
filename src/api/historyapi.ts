import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type coustemprops ={
    id:number
    onSuccess:(test)=>void
    onError:(test)=>void
}
type dataprops={
    AllPosts:[]
}
const getposts=(id)=>{
    console.log(id);
    
    return request({ method:'get',
    url:'/user/userposts/'+id,
    })
}
export const Coustemgetallhistorypost=({onSuccess,onError,id}:coustemprops)=>{      
return useQuery(['posts',id],()=>getposts(id),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        return data.AllPosts 
    },
    // enabled:false
})
}
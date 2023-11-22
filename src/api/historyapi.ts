import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type coustemprops ={
    id:string
    onSuccess:(test)=>void
    onError:(test)=>void
}
type dataprops={
    AllPosts:[]
}
const getposts=(id)=>{
    return request({ method:'get',
    url:'/user/userposts/'+id,
    })
}
export const Coustemgetallhistorypost=({onSuccess,onError,id}:coustemprops)=>{      
return useQuery(['posts',id],()=>getposts(id),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        console.log(data);
        
        return data.userPosts
    },
    enabled:false
})
}
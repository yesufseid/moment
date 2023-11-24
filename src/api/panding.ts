import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type coustemprops ={
    id:string
    onSuccess:(test)=>void
    onError:(test)=>void
}
type dataprops={
    activitiy:[]
}
const getposts=(id)=>{
    return request({ method:'get',
    url:'/user/userposts/panding/'+id,
    })
}
export const Coustemgetallhistorypost=({onSuccess,onError,id}:coustemprops)=>{      
return useQuery(['posts',id],()=>getposts(id),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
     
        
        
        return data.activitiy
    },
    // enabled:false
})
}
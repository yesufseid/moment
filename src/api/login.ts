import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"






type coustemprops ={
    location:number
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}

type dataprops={
    AllPosts:[]
}
const getposts=(location)=>{
    
    return request({ method:'get',
    url:'/allposts/allpost?location='+location,
    })
}

export const Coustemgetallpost=({onError,onSuccess,location}:coustemprops)=>{    
return useQuery(['posts',location],()=>getposts(location),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        return data.AllPosts 
    },
    enabled:false
})
}
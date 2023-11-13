import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type coustemprops ={
    location:number
    onSuccess:(test)=>void
    onError:(test)=>void
}
type dataprops={
    AllPosts:[]
}
const getposts=(location)=>{
    return request({ method:'get',
    url:'/allposts/allposts?location='+location,
    })
}

export const Coustemgetallpost=({onSuccess,onError,location}:coustemprops)=>{    
return useQuery(['posts',location],()=>getposts(location),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        console.log(data);
        return data.AllPosts 
    },
    enabled:false
})
}
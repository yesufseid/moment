import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"


type dataprops={
    location:number
    quate:string
    id:string
}

type coustemprops ={
    data:dataprops
    onSuccess:(test)=>void
    onError:(test)=>void
}
const getposts=({location,quate,id}:dataprops)=>{
    console.log(id+"   seya");
    return request({
        method:'post',
        url: '/post',
        data: {
          location:location,
          quate:quate,
          authorId:id,
          }})
}

export const Coustemgetallnewpost=({onSuccess,onError,data}:coustemprops)=>{      
return useQuery(['post',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:[])=>{
        return data  
    },
    enabled:false
})
}
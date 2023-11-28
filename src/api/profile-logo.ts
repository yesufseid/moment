import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"


type dataprops={
    img:unknown
    id:string
}

type coustemprops ={
    data:dataprops
    onSuccess:(test)=>void
    onError:(test)=>void
}
const getposts=({id,img}:dataprops)=>{ 
    return request({
        method:'post',
        url: '/user/createprofileImg',
        data: {
          img:img,
          authorId:id,
          }})
}


export const Coustemprofilelogo=({onSuccess,onError,data}:coustemprops)=>{         
return useQuery(['profilelogo',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data)=>{
        return data  
    },
    enabled:false
})
}